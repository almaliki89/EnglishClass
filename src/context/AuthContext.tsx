import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
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
  authProvider: 'phone' | 'email' | 'google';
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  syncStatus: 'synced' | 'saving' | 'offline' | 'error';
  signInWithGoogle: () => Promise<void>;
  signUpWithEmail: (name: string, email: string, pass: string, grade?: EducationalGrade) => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithPhone: (name: string, phone: string, pass: string, grade?: EducationalGrade) => Promise<void>;
  signInWithPhone: (phone: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  saveStudentToCloud: (state: StudentState) => Promise<void>;
  loadStudentFromCloud: (uid: string) => Promise<StudentState | null>;
  saveExamResultToCloud: (result: ExamResultRecord) => Promise<void>;
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const isE2EMode = import.meta.env.VITE_E2E_MODE === 'true';

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
  const [syncStatus, setSyncStatus] = useState<'synced' | 'saving' | 'offline' | 'error'>(
    isE2EMode ? 'synced' : 'offline'
  );

  // Firebase Auth State is the single authoritative source of truth
  useEffect(() => {
    if (isE2EMode) {
      setLoading(false);
      return;
    }

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

          if (studentSnap && studentSnap.exists()) {
            const data = studentSnap.data();
            if (data.name) displayName = data.name;
            if (data.phoneNumber) phone = data.phoneNumber;
            if (data.authProvider) authProvider = data.authProvider;
          }

          const appUser: AppUser = {
            uid: firebaseUser.uid,
            displayName,
            email: firebaseUser.email || undefined,
            phoneNumber: phone,
            authProvider
          };

          setUser(appUser);
          setSyncStatus(studentSnap && studentSnap.exists() ? 'synced' : 'offline');
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

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setSyncStatus('saving');
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        try {
          const studentDocRef = doc(db, 'students', result.user.uid);
          const snapshot = await getDoc(studentDocRef);

          if (!snapshot.exists()) {
            // Initialize clean profile without any password field
            await setDoc(studentDocRef, {
              uid: result.user.uid,
              name: result.user.displayName || 'طالب متميز',
              email: result.user.email || '',
              authProvider: 'google',
              selectedGrade: 'sixth-preparatory',
              xp: 100,
              completedLessonIds: [],
              bookmarkedQuestionIds: [],
              totalQuestionsAttempted: 0,
              totalQuestionsCorrect: 0,
              streakDays: 1,
              lastActiveDate: new Date().toISOString().split('T')[0],
              lastVisitedLessonId: 'u1-l1',
              unlockedBadges: ['first-step'],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            }, { merge: true });
          }
        } catch (dbErr) {
          console.warn('Firestore write/read skipped due to offline mode:', getErrorMessage(dbErr));
        }
        setSyncStatus('synced');
      }
    } catch (error: unknown) {
      console.error('Google Sign-in error:', getErrorMessage(error));
      setSyncStatus('error');
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
    if (!user || isE2EMode) return;
    try {
      setTimeout(() => setSyncStatus('saving'), 0);
      const studentDocRef = doc(db, 'students', user.uid);
      await setDoc(studentDocRef, {
        uid: user.uid,
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        name: state.name || user.displayName || 'طالب المنصة',
        xp: state.xp || 0,
        selectedGrade: state.selectedGrade || 'sixth-preparatory',
        completedLessonIds: state.completedLessonIds || [],
        bookmarkedQuestionIds: state.bookmarkedQuestionIds || [],
        totalQuestionsAttempted: state.totalQuestionsAttempted || 0,
        totalQuestionsCorrect: state.totalQuestionsCorrect || 0,
        streakDays: state.streakDays || 1,
        lastActiveDate: state.lastActiveDate || new Date().toISOString().split('T')[0],
        lastVisitedLessonId: state.lastVisitedLessonId || 'u1-l1',
        unlockedBadges: state.unlockedBadges || [],
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
        lastVisitedLessonId: data.lastVisitedLessonId || 'u1-l1',
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

  // Append-only Exam Result Record in subcollection (Owner only)
  const saveExamResultToCloud = async (result: ExamResultRecord) => {
    if (!user) return;
    try {
      const examDocRef = doc(db, 'students', user.uid, 'exam_results', result.id);
      await setDoc(examDocRef, result);
    } catch (err: unknown) {
      console.error('Error writing exam result to cloud:', getErrorMessage(err));
    }
  };

  // Notes operations in subcollection (Owner only)
  const saveNoteToCloud = async (note: StudentNote) => {
    if (!user) return;
    try {
      const noteDocRef = doc(db, 'students', user.uid, 'notes', note.id);
      await setDoc(noteDocRef, note, { merge: true });
    } catch (err: unknown) {
      console.error('Error saving note:', getErrorMessage(err));
    }
  };

  const deleteNoteFromCloud = async (noteId: string) => {
    if (!user) return;
    try {
      const noteDocRef = doc(db, 'students', user.uid, 'notes', noteId);
      await setDoc(noteDocRef, { deleted: true }, { merge: true });
    } catch (err: unknown) {
      console.error('Error deleting note:', getErrorMessage(err));
    }
  };

  // Bookmarks operations in subcollection (Owner only)
  const saveBookmarkToCloud = async (bookmark: BookmarkItem) => {
    if (!user) return;
    try {
      const bookmarkDocRef = doc(db, 'students', user.uid, 'bookmarks', bookmark.id);
      await setDoc(bookmarkDocRef, bookmark, { merge: true });
    } catch (err: unknown) {
      console.error('Error saving bookmark:', getErrorMessage(err));
    }
  };

  const removeBookmarkFromCloud = async (bookmarkId: string) => {
    if (!user) return;
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
        signUpWithEmail,
        signInWithEmail,
        signUpWithPhone,
        signInWithPhone,
        logout,
        saveStudentToCloud,
        loadStudentFromCloud,
        saveExamResultToCloud,
        saveNoteToCloud,
        deleteNoteFromCloud,
        saveBookmarkToCloud,
        removeBookmarkFromCloud
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
