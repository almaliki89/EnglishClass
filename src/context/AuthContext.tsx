import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  getRedirectResult,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  User as FirebaseUser,
  UserCredential,
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  limit 
} from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';
import { 
  StudentState, 
  EducationalGrade, 
  ExamResultRecord, 
  BookmarkItem, 
  StudentNote 
} from '../types';
import { INITIAL_STUDENT_STATE } from '../utils/storage';

export interface AppUser {
  uid: string;
  displayName: string;
  email?: string;
  phoneNumber?: string;
  authProvider: 'phone' | 'email' | 'google' | 'guest' | 'student-password';
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  syncStatus: 'synced' | 'saving' | 'offline' | 'error';
  signInWithGoogle: () => Promise<void>;
  googleRedirectError: string | null;
  signInWithStudentPassword: (profile: {
    name: string;
    governorate: string;
    schoolName: string;
    phoneNumber: string;
    selectedGrade: EducationalGrade;
    password: string;
  }) => Promise<EducationalGrade>;
  logout: () => Promise<void>;
  saveStudentToCloud: (state: StudentState) => Promise<void>;
  loadStudentFromCloud: (uid: string) => Promise<StudentState | null>;
  submitExamResultToServer: (payload: {
    examId: string;
    grade: EducationalGrade;
    answers: Record<string, string>;
    timeSpentSeconds: number;
    idempotencyKey: string;
  }) => Promise<{
    success: true;
    earnedXp: number;
    correctCount: number;
    totalQuestions: number;
    isIdempotentReplay: boolean;
    studentProgress: {
      xp: number;
      totalQuestionsCorrect: number;
      totalQuestionsAttempted: number;
    };
  }>;
  saveNoteToCloud: (note: StudentNote) => Promise<void>;
  deleteNoteFromCloud: (noteId: string) => Promise<void>;
  saveBookmarkToCloud: (bookmark: BookmarkItem) => Promise<void>;
  removeBookmarkFromCloud: (bookmarkId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper to normalize phone numbers
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

// Helper to safely extract error message from unknown error
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

function toAppUser(firebaseUser: FirebaseUser): AppUser {
  const authProvider: AppUser['authProvider'] =
    firebaseUser.providerData.some(provider => provider.providerId === 'google.com') ? 'google' :
    firebaseUser.providerData.some(provider => provider.providerId === 'phone') ? 'phone' :
    firebaseUser.email?.endsWith('@students.orbit.invalid') ? 'student-password' : 'email';

  return {
    uid: firebaseUser.uid,
    displayName: firebaseUser.displayName || 'طالب متميز',
    email: firebaseUser.email || undefined,
    phoneNumber: firebaseUser.phoneNumber || undefined,
    authProvider,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  // The E2E suite can explicitly exercise the real signed-out browsing experience.
  // This override is only honored in E2E builds and cannot disable auth in production.
  const forceSignedOutPreview =
    typeof window !== 'undefined' &&
    import.meta.env.VITE_E2E_MODE === 'true' &&
    new URLSearchParams(window.location.search).get('forceSignedOut') === 'true';

  // Test identities are enabled only by an explicit build-time flag in isolated CI builds.
  // Never infer privileged test sessions from URL parameters, localStorage, or webdriver.
  const isE2EMode = !forceSignedOutPreview && import.meta.env.VITE_E2E_MODE === 'true';

  const [user, setUser] = useState<AppUser | null>(() => {
    if (isE2EMode) {
      return {
        uid: 'e2e-test-student-uid',
        displayName: 'طالب الاختبار التجريبي',
        email: 'e2e-student@example.com',
        authProvider: 'email',
      };
    }
    return null;
  });
  const [loading, setLoading] = useState<boolean>(!isE2EMode);
  const [googleRedirectError, setGoogleRedirectError] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'saving' | 'offline' | 'error'>(
    isE2EMode ? 'synced' : 'offline'
  );

  // Firebase Auth State is the single authoritative source of truth
  useEffect(() => {
    if (isE2EMode) {
      setLoading(false);
      return;
    }

    // Resolve the redirect result explicitly so Firebase OAuth failures are not silently
    // reduced to an unauthenticated state. onAuthStateChanged remains authoritative for session state.
    getRedirectResult(auth).catch((error: unknown) => {
      const code = (error as { code?: string })?.code || '';
      console.error('Google redirect result error:', getErrorMessage(error));
      if (code === 'auth/unauthorized-domain') {
        setGoogleRedirectError('نطاق الموقع غير مصرح به في Firebase Authentication. أضف نطاق الموقع المنشور إلى Authorized domains.');
      } else if (code === 'auth/operation-not-allowed') {
        setGoogleRedirectError('تسجيل الدخول عبر Google غير مفعّل في إعدادات Firebase Authentication.');
      } else {
        setGoogleRedirectError('لم تكتمل العودة من Google. تحقق من إعدادات Firebase Authorized domains ومزوّد Google، ثم أعد المحاولة.');
      }
      setSyncStatus('error');
    });

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      try {
        if (firebaseUser) {
          // Establish the authenticated app session immediately. Profile/Firestore work
          // must never hold the user at the sign-in gate after Firebase Auth succeeds.
          const initialProvider: 'phone' | 'email' | 'google' | 'student-password' =
            firebaseUser.providerData.some(p => p.providerId === 'google.com') ? 'google' :
            firebaseUser.providerData.some(p => p.providerId === 'phone') ? 'phone' :
            firebaseUser.email?.endsWith('@students.orbit.invalid') ? 'student-password' : 'email';

          // Only Google and verified phone accounts are accepted by the platform.
          // Legacy email/password-only sessions are signed out instead of bypassing the two approved methods.
          if (initialProvider === 'email') {
            setUser(null);
            setSyncStatus('offline');
            await firebaseSignOut(auth).catch(() => undefined);
            return;
          }

          // Keep phone-auth sessions behind the gate until the student profile has been
          // loaded (or the SMS-confirmed first-time profile has been created).
          if (initialProvider === 'phone') {
            setUser(null);
          } else {
            setUser({
              uid: firebaseUser.uid,
              displayName: firebaseUser.displayName || 'طالب متميز',
              email: firebaseUser.email || undefined,
              phoneNumber: firebaseUser.phoneNumber || undefined,
              authProvider: initialProvider,
            });
            setLoading(false);
          }

          // Attempt to fetch custom profile from Firestore for the authenticated user
          let studentSnap = null;
          try {
            const studentDocRef = doc(db, 'students', firebaseUser.uid);
            studentSnap = await getDoc(studentDocRef);
          } catch (err) {
            console.warn('Cloud Firestore offline, operating in local offline mode.');
            setSyncStatus('offline');
          }

          let displayName = firebaseUser.displayName || 'طالب متميز';
          let phone: string | undefined = firebaseUser.phoneNumber || undefined;
          let authProvider: 'phone' | 'email' | 'google' | 'student-password' = 'email';

          if (firebaseUser.providerData.some(p => p.providerId === 'google.com')) {
            authProvider = 'google';
          } else if (firebaseUser.providerData.some(p => p.providerId === 'phone')) {
            authProvider = 'phone';
          }

          let profileInitialized = false;
          if (studentSnap && studentSnap.exists()) {
            const data = studentSnap.data();
            if (data.name) displayName = data.name;
            if (data.phoneNumber) phone = data.phoneNumber;
            if (data.authProvider) authProvider = data.authProvider;
          } else if (authProvider === 'google') {
            // Create the cloud student profile after redirect-based first-time Google sign-in.
            try {
              await setDoc(doc(db, 'students', firebaseUser.uid), {
                uid: firebaseUser.uid,
                name: firebaseUser.displayName || 'طالب متميز',
                email: firebaseUser.email || '',
                authProvider: 'google',
                selectedGrade: 'sixth-preparatory',
                xp: 0,
                completedLessonIds: [],
                bookmarkedQuestionIds: [],
                totalQuestionsAttempted: 0,
                totalQuestionsCorrect: 0,
                streakDays: 0,
                lastActiveDate: new Date().toISOString().split('T')[0],
                lastVisitedLessonId: 'u1-l1',
                unlockedBadges: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }, { merge: true });
              displayName = firebaseUser.displayName || 'طالب متميز';
              profileInitialized = true;
            } catch (profileError) {
              console.warn('Google profile initialization failed:', getErrorMessage(profileError));
              setSyncStatus('offline');
            }
          }

          // Do not expose a phone-authenticated session until its student profile has
          // been matched during the SMS flow or restored from an existing profile.
          if (initialProvider === 'phone' && (
            !studentSnap || !studentSnap.exists()
          )) {
            setUser(null);
            setSyncStatus('offline');
            return;
          }

          // A slow profile read must not restore a user after logout or account switching.
          if (auth.currentUser?.uid !== firebaseUser.uid) return;

          const appUser: AppUser = {
            uid: firebaseUser.uid,
            displayName,
            email: firebaseUser.email || undefined,
            phoneNumber: phone,
            authProvider
          };

          setUser(appUser);
          setSyncStatus((studentSnap && studentSnap.exists()) || profileInitialized ? 'synced' : 'offline');
        } else {
          // Ignore a stale null notification if Firebase has already restored a current user.
          const restoredUser = auth.currentUser;
          setUser(restoredUser ? toAppUser(restoredUser) : null);
          setSyncStatus('offline');
        }
      } catch (err: unknown) {
        console.error('Auth state change resolution error:', getErrorMessage(err));
        setSyncStatus('offline');
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Open the Google popup synchronously from the user's click. Do not await
  // setPersistence first: mobile browsers can revoke the click's transient
  // activation while an async task is pending, causing the popup to be blocked.
  // Firebase Auth already defaults to browserLocalPersistence in browsers.
  //
  // Do not silently fall back to signInWithRedirect here. This app is served
  // from Vercel while authDomain is firebaseapp.com; redirect sign-in needs a
  // same-origin auth helper proxy/custom auth domain on browsers that partition
  // third-party storage. A blocked popup must be surfaced so the user can open
  // the site in the device's regular browser rather than returning unauthenticated.
  const signInWithGoogle = async () => {
    setGoogleRedirectError(null);
    setSyncStatus('saving');
    try {
      const credential = await signInWithPopup(auth, googleProvider);
      // Promote the verified Firebase credential immediately; the observer remains the source of truth on refresh/logout.
      setUser(toAppUser(credential.user));
      setLoading(false);
    } catch (error: unknown) {
      console.warn('Google popup sign-in error:', getErrorMessage(error));
      setSyncStatus('offline');
      throw error;
    }
  };

  // Student accounts use Firebase Email/Password Auth with a deterministic internal alias.
  // The alias is never shown to students; the Iraqi phone number is their login identifier.
  const signInWithStudentPassword = async (profile: {
    name: string;
    governorate: string;
    schoolName: string;
    phoneNumber: string;
    selectedGrade: EducationalGrade;
    password: string;
  }): Promise<EducationalGrade> => {
    const normalizeIdentity = (value: unknown) =>
      String(value || '').normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('ar');
    const phoneDigits = profile.phoneNumber.replace(/\D/g, '');
    if (!/^9647\d{9}$/.test(phoneDigits)) throw new Error('رقم الهاتف العراقي غير صحيح.');
    if (profile.password.length < 8) throw new Error('يجب أن تتكون كلمة المرور من 8 أحرف أو أرقام على الأقل.');
    if (profile.password.length > 128) throw new Error('كلمة المرور طويلة جداً.');
    const internalEmail = phoneDigits + '@students.orbit.invalid';
    setSyncStatus('saving');
    let credential: UserCredential;
    try {
      try {
        credential = await signInWithEmailAndPassword(auth, internalEmail, profile.password);
      } catch (signInError) {
        const code = (signInError as { code?: string })?.code || '';
        if (code !== 'auth/user-not-found' && code !== 'auth/invalid-credential') throw signInError;
        try {
          credential = await createUserWithEmailAndPassword(auth, internalEmail, profile.password);
        } catch (createError) {
          const createCode = (createError as { code?: string })?.code || '';
          if (createCode === 'auth/email-already-in-use' || createCode === 'auth/weak-password') {
            throw new Error('تعذر إنشاء الحساب. إذا كان الرقم مسجلاً سابقاً، تحقق من كلمة المرور أو تواصل مع الدعم.');
          }
          throw createError;
        }
      }

      const studentRef = doc(db, 'students', credential.user.uid);
      const snapshot = await getDoc(studentRef);
      let resolvedGrade = profile.selectedGrade;
      if (snapshot.exists()) {
        const stored = snapshot.data();
        const matches =
          normalizeIdentity(stored.name) === normalizeIdentity(profile.name) &&
          normalizeIdentity(stored.governorate) === normalizeIdentity(profile.governorate) &&
          normalizeIdentity(stored.schoolName) === normalizeIdentity(profile.schoolName) &&
          String(stored.phoneNumber || '').replace(/\\D/g, '') === phoneDigits;
        if (!matches) {
          await firebaseSignOut(auth);
          throw new Error('بيانات الطالب لا تطابق الحساب المسجل بهذا الرقم. راجع الاسم والمحافظة والمدرسة.');
        }
        const validGrades: EducationalGrade[] = ['third-intermediate','fourth-preparatory','fifth-preparatory','sixth-preparatory'];
        if (validGrades.includes(stored.selectedGrade)) resolvedGrade = stored.selectedGrade;
      } else {
        await updateProfile(credential.user, { displayName: profile.name });
        const today = new Date().toISOString().split('T')[0];
        await setDoc(studentRef, {
          uid: credential.user.uid,
          name: profile.name,
          phoneNumber: profile.phoneNumber,
          governorate: profile.governorate,
          schoolName: profile.schoolName,
          authProvider: 'student-password',
          selectedGrade: profile.selectedGrade,
          xp: 0, completedLessonIds: [], bookmarkedQuestionIds: [],
          totalQuestionsAttempted: 0, totalQuestionsCorrect: 0, streakDays: 0,
          lastActiveDate: today,
          lastVisitedLessonId: profile.selectedGrade === 'third-intermediate' ? 't-u1-l1' : 'u1-l1',
          unlockedBadges: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
        });
      }
      const appUser: AppUser = {
        uid: credential.user.uid,
        displayName: profile.name,
        phoneNumber: profile.phoneNumber,
        authProvider: 'student-password'
      };
      setUser(appUser);
      setLoading(false);
      setSyncStatus('synced');
      return resolvedGrade;
    } catch (error) {
      setSyncStatus('error');
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      if (auth.currentUser) {
        await firebaseSignOut(auth);
      }
      setUser(null);
      setSyncStatus('offline');
    } catch (error: unknown) {
      console.error('Logout error:', getErrorMessage(error));
      setUser(null);
      setSyncStatus('offline');
    }
  };

  // Save student progress to Firestore Cloud (Owner only)
  const saveStudentToCloud = async (state: StudentState) => {
    if (!user || user.authProvider === 'guest' || isE2EMode) return;
    try {
      setTimeout(() => setSyncStatus('saving'), 0);
      const studentDocRef = doc(db, 'students', user.uid);
      await setDoc(studentDocRef, {
        uid: user.uid,
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        name: state.name || user.displayName || 'طالب المنصة',
        selectedGrade: state.selectedGrade || 'sixth-preparatory',
        completedLessonIds: state.completedLessonIds || [],
        bookmarkedQuestionIds: state.bookmarkedQuestionIds || [],
        lastActiveDate: state.lastActiveDate || new Date().toISOString().split('T')[0],
        lastVisitedLessonId: state.lastVisitedLessonId || '1-1',
        gradeLastVisitedLessonMap: state.gradeLastVisitedLessonMap || INITIAL_STUDENT_STATE.gradeLastVisitedLessonMap,
        lessonProgressMap: state.lessonProgressMap || {},
        updatedAt: new Date().toISOString()
      }, { merge: true });
      setTimeout(() => setSyncStatus('synced'), 0);
    } catch (error: unknown) {
      console.warn('Error saving student state to cloud (offline mode active):', getErrorMessage(error));
      setTimeout(() => setSyncStatus('offline'), 0);
    }
  };

  // Load student progress from Firestore Cloud (Owner only)
  const loadStudentFromCloud = async (uid: string): Promise<StudentState | null> => {
    if (!uid || isE2EMode) return null;
    try {
      const studentDocRef = doc(db, 'students', uid);
      const snapshot = await getDoc(studentDocRef).catch((err) => {
        console.warn('Firestore offline during loadStudentFromCloud:', getErrorMessage(err));
        setSyncStatus('offline');
        return null;
      });
      if (!snapshot || !snapshot.exists()) {
        return null;
      }
      const data = snapshot.data();

      // Fetch recent exam results subcollection (Owner only)
      const examResultsRef = collection(db, 'students', uid, 'exam_results');
      const examQuery = query(examResultsRef, orderBy('timestamp', 'desc'), limit(20));
      const examSnaps = await getDocs(examQuery).catch(() => null);
      const examResults: ExamResultRecord[] = [];
      if (examSnaps) {
        examSnaps.forEach(docSnap => {
          examResults.push(docSnap.data() as ExamResultRecord);
        });
      }

      // Fetch notes (Owner only)
      const notesRef = collection(db, 'students', uid, 'notes');
      const notesSnaps = await getDocs(notesRef).catch(() => null);
      const notes: StudentNote[] = [];
      if (notesSnaps) {
        notesSnaps.forEach(docSnap => {
          notes.push(docSnap.data() as StudentNote);
        });
      }

      // Fetch bookmarks (Owner only)
      const bookmarksRef = collection(db, 'students', uid, 'bookmarks');
      const bookmarksSnaps = await getDocs(bookmarksRef).catch(() => null);
      const bookmarks: BookmarkItem[] = [];
      if (bookmarksSnaps) {
        bookmarksSnaps.forEach(docSnap => {
          bookmarks.push(docSnap.data() as BookmarkItem);
        });
      }

      setSyncStatus('synced');
      return {
        ...INITIAL_STUDENT_STATE,
        name: data.name || user?.displayName || 'طالب متميز',
        xp: data.xp || 0,
        selectedGrade: data.selectedGrade || 'sixth-preparatory',
        completedLessonIds: data.completedLessonIds || [],
        bookmarkedQuestionIds: data.bookmarkedQuestionIds || [],
        answeredExercises: {},
        totalQuestionsAttempted: data.totalQuestionsAttempted || 0,
        totalQuestionsCorrect: data.totalQuestionsCorrect || 0,
        streakDays: data.streakDays || 1,
        lastActiveDate: data.lastActiveDate || new Date().toISOString().split('T')[0],
        lastVisitedLessonId: data.lastVisitedLessonId || '1-1',
        gradeLastVisitedLessonMap: data.gradeLastVisitedLessonMap || INITIAL_STUDENT_STATE.gradeLastVisitedLessonMap,
        unlockedBadges: data.unlockedBadges || [],
        lessonProgressMap: data.lessonProgressMap || {},
        examResults,
        notes,
        bookmarks
      };
    } catch (error: unknown) {
      console.warn('Error loading student from cloud (offline mode active):', getErrorMessage(error));
      setSyncStatus('offline');
      return null;
    }
  };

  // Exam scores and XP are server-authoritative; never write exam results from the browser.
  const submitExamResultToServer = async (payload: {
    examId: string;
    grade: EducationalGrade;
    answers: Record<string, string>;
    timeSpentSeconds: number;
    idempotencyKey: string;
  }) => {
    if (!user || user.authProvider === 'guest') throw new Error("يمكن للزائر تجربة الدروس والتمارين، لكن حفظ نتائج الامتحانات يتطلب الدخول بحساب.");
    const firebaseUser = auth.currentUser;
    if (!firebaseUser || firebaseUser.uid !== user.uid) {
      throw new Error("جلسة المصادقة غير متاحة؛ لم يتم حفظ نتيجة الامتحان.");
    }

    const idToken = await firebaseUser.getIdToken();
    const response = await fetch("/api/student/exam-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
        "X-Idempotency-Key": payload.idempotencyKey,
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result?.success !== true) {
      throw new Error(result?.error || "تعذر حفظ نتيجة الامتحان بأمان.");
    }
    return result;
  };

  // Notes operations in subcollection (Owner only)
  const saveNoteToCloud = async (note: StudentNote) => {
    if (!user || user.authProvider === 'guest') return;
    try {
      const noteDocRef = doc(db, 'students', user.uid, 'notes', note.id);
      await setDoc(noteDocRef, note, { merge: true });
    } catch (err: unknown) {
      console.error('Error saving note:', getErrorMessage(err));
    }
  };

  const deleteNoteFromCloud = async (noteId: string) => {
    if (!user || user.authProvider === 'guest') return;
    try {
      const noteDocRef = doc(db, 'students', user.uid, 'notes', noteId);
      await setDoc(noteDocRef, { deleted: true }, { merge: true });
    } catch (err: unknown) {
      console.error('Error deleting note:', getErrorMessage(err));
    }
  };

  // Bookmarks operations in subcollection (Owner only)
  const saveBookmarkToCloud = async (bookmark: BookmarkItem) => {
    if (!user || user.authProvider === 'guest') return;
    try {
      const bookmarkDocRef = doc(db, 'students', user.uid, 'bookmarks', bookmark.id);
      await setDoc(bookmarkDocRef, bookmark, { merge: true });
    } catch (err: unknown) {
      console.error('Error saving bookmark:', getErrorMessage(err));
    }
  };

  const removeBookmarkFromCloud = async (bookmarkId: string) => {
    if (!user || user.authProvider === 'guest') return;
    try {
      const bookmarkDocRef = doc(db, 'students', user.uid, 'bookmarks', bookmarkId);
      await setDoc(bookmarkDocRef, { removed: true }, { merge: true });
    } catch (err: unknown) {
      console.error('Error removing bookmark:', getErrorMessage(err));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        syncStatus,
        signInWithGoogle,
        googleRedirectError,
        signInWithStudentPassword,
        logout,
        saveStudentToCloud,
        loadStudentFromCloud,
        submitExamResultToServer,
        saveNoteToCloud,
        deleteNoteFromCloud,
        saveBookmarkToCloud,
        removeBookmarkFromCloud,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
