import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  getRedirectResult,
  signInWithRedirect, 
  signOut as firebaseSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User as FirebaseUser
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
  authProvider: 'phone' | 'email' | 'google' | 'guest';
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  syncStatus: 'synced' | 'saving' | 'offline' | 'error';
  signInWithGoogle: () => Promise<void>;
  googleRedirectError: string | null;
  signUpWithEmail: (name: string, email: string, pass: string, grade?: EducationalGrade) => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithPhone: (name: string, phone: string, pass: string, grade?: EducationalGrade) => Promise<void>;
  signInWithPhone: (phone: string, pass: string) => Promise<void>;
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
  signInAsGuest: () => Promise<void>;
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
          let authProvider: 'phone' | 'email' | 'google' = 'email';

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
          setUser(null);
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

  // Sign in with Google using a full-page redirect to avoid popup blockers
  const signInWithGoogle = async () => {
    setGoogleRedirectError(null);
    try {
      setSyncStatus('saving');
      await signInWithRedirect(auth, googleProvider);
    } catch (error: unknown) {
      console.warn('Google Sign-in redirect error:', getErrorMessage(error));
      setSyncStatus('offline');
      throw error;
    }
  };

  // Sign up with Email & Password (Real Firebase Auth)
  const signUpWithEmail = async (name: string, email: string, pass: string, grade: EducationalGrade = 'sixth-preparatory') => {
    try {
      setSyncStatus('saving');
      const normalizedEmail = email.trim().toLowerCase();

      // Real Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, normalizedEmail, pass);
      const firebaseUser = userCredential.user;

      // Update profile
      await updateProfile(firebaseUser, { displayName: name.trim() });

      // Save student document to Firestore (NO PASSWORD STORED)
      try {
        const studentDocRef = doc(db, 'students', firebaseUser.uid);
        await setDoc(studentDocRef, {
          uid: firebaseUser.uid,
          email: normalizedEmail,
          name: name.trim(),
          authProvider: 'email',
          selectedGrade: grade,
          xp: 100,
          completedLessonIds: [],
          bookmarkedQuestionIds: [],
          totalQuestionsAttempted: 0,
          totalQuestionsCorrect: 0,
          streakDays: 1,
          lastActiveDate: new Date().toISOString().split('T')[0],
          lastVisitedLessonId: grade === 'third-intermediate' ? 't-u1-l1' : 'u1-l1',
          unlockedBadges: ['first-step'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      } catch (dbErr) {
        console.warn('Firestore student doc creation skipped due to offline mode:', getErrorMessage(dbErr));
      }

      setSyncStatus('synced');
    } catch (error: unknown) {
      console.error('Email sign up error:', getErrorMessage(error));
      setSyncStatus('error');
      const firebaseErrorCode = (error as { code?: string })?.code;
      if (firebaseErrorCode === 'auth/email-already-in-use') {
        throw new Error('هذا البريد الإلكتروني مسجل مسبقاً، يمكنك تسجيل الدخول به');
      } else if (firebaseErrorCode === 'auth/weak-password') {
        throw new Error('كلمة المرور ضعيفة، يرجى اختيار كلمة مرور أطول');
      }
      throw error;
    }
  };

  // Sign in with Email & Password (Real Firebase Auth)
  const signInWithEmail = async (email: string, pass: string) => {
    try {
      setSyncStatus('saving');
      const normalizedEmail = email.trim().toLowerCase();
      await signInWithEmailAndPassword(auth, normalizedEmail, pass);
      setSyncStatus('synced');
    } catch (error: unknown) {
      console.error('Email sign in error:', getErrorMessage(error));
      setSyncStatus('error');
      const firebaseErrorCode = (error as { code?: string })?.code;
      if (firebaseErrorCode === 'auth/user-not-found' || firebaseErrorCode === 'auth/invalid-credential') {
        throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      } else if (firebaseErrorCode === 'auth/wrong-password') {
        throw new Error('كلمة المرور غير صحيحة');
      }
      throw error;
    }
  };

  // Sign in with Phone — Policy Option B (Strictly No Custom Password Storage / No Pseudo Sessions)
  const signUpWithPhone = async (_name: string, _phone: string, _pass: string, _grade: EducationalGrade = 'sixth-preparatory') => {
    throw new Error('تسجيل الدخول برقم الهاتف قيد التفعيل حالياً. يرجى استخدام البريد الإلكتروني أو Google.');
  };

  // Sign in with Phone — Policy Option B (Strictly No Custom Password Storage / No Pseudo Sessions)
  const signInWithPhone = async (_phone: string, _pass: string) => {
    throw new Error('تسجيل الدخول برقم الهاتف قيد التفعيل حالياً. يرجى استخدام البريد الإلكتروني أو Google.');
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

  const signInAsGuest = async () => {
    setUser({
      uid: 'guest-' + Date.now(),
      displayName: 'طالب زائر (معاينة)',
      authProvider: 'guest',
    });
    setSyncStatus('offline');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        syncStatus,
        signInWithGoogle,
        googleRedirectError,
        signUpWithEmail,
        signInWithEmail,
        signUpWithPhone,
        signInWithPhone,
        logout,
        saveStudentToCloud,
        loadStudentFromCloud,
        submitExamResultToServer,
        saveNoteToCloud,
        deleteNoteFromCloud,
        saveBookmarkToCloud,
        removeBookmarkFromCloud,
        signInAsGuest,
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
