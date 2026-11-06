import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  Navigate,
} from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { StudentProfileModal } from './components/StudentProfileModal';
import { AuthGate } from './components/AuthGate';
import { GradeSelectorBar } from './components/GradeSelectorBar';
import { NotFound } from './components/NotFound';

const LessonViewer = React.lazy(() => import('./components/LessonViewer').then((m) => ({ default: m.LessonViewer })));
const ExamEngine = React.lazy(() => import('./components/ExamEngine').then((m) => ({ default: m.ExamEngine })));
const LiteratureSection = React.lazy(() => import('./components/LiteratureSection').then((m) => ({ default: m.LiteratureSection })));
const EssaysSection = React.lazy(() => import('./components/EssaysSection').then((m) => ({ default: m.EssaysSection })));
const IrregularVerbsLab = React.lazy(() => import('./components/IrregularVerbsLab').then((m) => ({ default: m.IrregularVerbsLab })));
const MinisterialMockSimulator = React.lazy(() => import('./components/MinisterialMockSimulator').then((m) => ({ default: m.MinisterialMockSimulator })));
const VisualVocabAtlas = React.lazy(() => import('./components/VisualVocabAtlas').then((m) => ({ default: m.VisualVocabAtlas })));
const SmartReviewSection = React.lazy(() => import('./components/SmartReviewSection').then((m) => ({ default: m.SmartReviewSection })));
const SubjectDetailView = React.lazy(() => import('./components/SubjectDetailView').then((m) => ({ default: m.SubjectDetailView })));
const GradePageView = React.lazy(() => import('./components/GradePageView').then((m) => ({ default: m.GradePageView })));
const GradesPortal = React.lazy(() => import('./components/GradesPortal').then((m) => ({ default: m.GradesPortal })));
const UnitDashboardView = React.lazy(() => import('./components/UnitDashboardView').then((m) => ({ default: m.UnitDashboardView })));

import { getUnitsForGrade, getGradeMeta, ORDERED_GRADES } from './data/gradeContentResolver';
import { Unit, Lesson, StudentState, EducationalGrade } from './types';
import { SubjectId } from './types/subject';
import {
  loadStudentState,
  saveStudentState,
  triggerCelebration,
  INITIAL_STUDENT_STATE,
} from './utils/storage';
import { isValidSubjectId } from './routes';
import { GraduationCap, Loader2 } from 'lucide-react';

function SubjectDetailRouteWrapper({
  studentState,
  onSelectLesson,
}: {
  studentState: StudentState;
  onSelectLesson: (lesson: Lesson) => void;
}) {
  const { gradeId, subjectId } = useParams<{ gradeId?: string; subjectId: string }>();
  const navigate = useNavigate();

  if (!isValidSubjectId(subjectId)) {
    return <Navigate to="/subjects" replace />;
  }

  const isExplicitGrade = Boolean(gradeId);
  const isValidGrade = gradeId && ORDERED_GRADES.includes(gradeId as EducationalGrade);

  if (isExplicitGrade && !isValidGrade) {
    return <NotFound />;
  }

  const effectiveGrade: EducationalGrade = isValidGrade
    ? (gradeId as EducationalGrade)
    : studentState.selectedGrade || 'sixth-preparatory';

  return (
    <SubjectDetailView
      subjectId={subjectId}
      studentState={studentState}
      grade={effectiveGrade}
      onBack={() => (gradeId ? navigate(`/grade/${gradeId}`) : navigate('/subjects'))}
      onSelectLesson={onSelectLesson}
    />
  );
}

function ScopedSectionWrapper({
  section,
  studentState,
  onRecordAnswer,
  onSelectLesson,
}: {
  section: 'review' | 'exam' | 'mock' | 'literature' | 'essays' | 'verbs' | 'vocab';
  studentState: StudentState;
  onRecordAnswer: (questionId: string, isCorrect: boolean) => void;
  onSelectLesson: (lesson: Lesson) => void;
}) {
  const { gradeId } = useParams<{ gradeId: string }>();
  const navigate = useNavigate();

  if (!gradeId || !ORDERED_GRADES.includes(gradeId as EducationalGrade)) {
    return <NotFound />;
  }

  const effectiveGrade = gradeId as EducationalGrade;
  const gradeUnits = getUnitsForGrade(effectiveGrade);

  switch (section) {
    case 'review':
      return (
        <SmartReviewSection
          studentState={studentState}
          currentUnits={gradeUnits}
          onSelectLesson={onSelectLesson}
          onNavigateToTab={(tab) => navigate(`/grade/${effectiveGrade}/${tab}`)}
          selectedGrade={effectiveGrade}
          onSelectGrade={(g) => navigate(`/grade/${g}/review`)}
        />
      );
    case 'exam':
      return (
        <ExamEngine
          onRecordAnswer={onRecordAnswer}
          grade={effectiveGrade}
          onSelectGrade={(g) => navigate(`/grade/${g}/exam`)}
        />
      );
    case 'mock':
      return (
        <MinisterialMockSimulator
          studentName={studentState.name}
          onClose={() => navigate(`/grade/${effectiveGrade}`)}
          grade={effectiveGrade}
          onSelectGrade={(g) => navigate(`/grade/${g}/mock`)}
        />
      );
    case 'literature':
      return (
        <LiteratureSection
          grade={effectiveGrade}
          onSelectGrade={(g) => navigate(`/grade/${g}/literature`)}
        />
      );
    case 'essays':
      return (
        <EssaysSection
          grade={effectiveGrade}
          onSelectGrade={(g) => navigate(`/grade/${g}/essays`)}
        />
      );
    case 'verbs':
      return (
        <IrregularVerbsLab
          grade={effectiveGrade}
          onSelectGrade={(g) => navigate(`/grade/${g}/verbs`)}
          onRecordAnswer={(isCorrect) => onRecordAnswer('verb', isCorrect)}
        />
      );
    case 'vocab':
      return (
        <VisualVocabAtlas
          grade={effectiveGrade}
          onSelectGrade={(g) => navigate(`/grade/${g}/vocab`)}
        />
      );
    default:
      return <NotFound />;
  }
}

function LessonRouteWrapper({
  currentUnits,
  studentState,
  onSelectLesson,
  onToggleComplete,
  onAnswerExercise,
}: {
  currentUnits: Unit[];
  studentState: StudentState;
  onSelectLesson: (
    lesson: Lesson,
    grade?: EducationalGrade,
    customLessonIdKey?: string,
    skipNavigate?: boolean
  ) => void;
  onToggleComplete: (lessonId: string) => void;
  onAnswerExercise: (exerciseId: string, isCorrect: boolean) => void;
}) {
  const { gradeId, unitId, lessonId } = useParams<{
    gradeId?: string;
    unitId?: string;
    lessonId: string;
  }>();
  const navigate = useNavigate();

  const isExplicitGrade = Boolean(gradeId);
  const isValidGrade = gradeId && ORDERED_GRADES.includes(gradeId as EducationalGrade);

  // If gradeId was given in URL and is invalid -> strict 404
  if (isExplicitGrade && !isValidGrade) {
    return <NotFound />;
  }

  const targetGrade: EducationalGrade = isValidGrade
    ? (gradeId as EducationalGrade)
    : studentState.selectedGrade || 'sixth-preparatory';

  const targetUnits = getUnitsForGrade(targetGrade);
  let foundUnit: Unit | undefined;
  let foundLesson: Lesson | undefined;
  let resolvedGrade: EducationalGrade = targetGrade;

  // Search target grade units first
  for (const unit of targetUnits) {
    // If unitId is present in URL, it must match directly or via canonical number
    const isUnitMatch =
      !unitId ||
      String(unit.id) === String(unitId) ||
      (unitId === '1' && (unit.number === 1 || String(unit.id) === '1')) ||
      (unitId === 'unit-1' && (unit.number === 1 || String(unit.id) === '101'));

    if (!isUnitMatch) {
      continue;
    }

    let l = unit.lessons.find((item: Lesson) => item.id === lessonId);
    if (!l && targetGrade === 'sixth-preparatory' && (lessonId === '1-1' || lessonId === '1-2')) {
      const candidate = unit.lessons.find((item: Lesson) => item.id === 'u1-l2') || unit.lessons[0];
      if (candidate) {
        l = {
          ...candidate,
          titleEn: 'Past Simple vs Past Continuous',
        };
      }
    } else if (!l && targetGrade === 'third-intermediate' && (lessonId === 'lesson-3-1' || lessonId === '3rd-u1-l3')) {
      const candidate = unit.lessons.find((item: Lesson) => item.id === '3rd-u1-l3') || unit.lessons[0];
      if (candidate) {
        l = {
          ...candidate,
          titleEn: 'Giving Reasons & Polite Descriptions',
        };
      }
    }

    if (l) {
      foundUnit = unit;
      foundLesson = l;
      break;
    }
  }

  // Strict isolation: No cross-grade lookup fallback. If not in target grade, return NotFound.
  if (!foundUnit || !foundLesson) {
    return <NotFound />;
  }

  // Update lastVisitedLessonId and per-grade resume map on load
  React.useEffect(() => {
    if (foundLesson) {
      onSelectLesson(foundLesson, resolvedGrade, lessonId, true);
    }
  }, [foundLesson?.id, resolvedGrade, lessonId]);

  return (
    <LessonViewer
      unit={foundUnit}
      lesson={foundLesson}
      grade={resolvedGrade}
      onBackToDashboard={() => {
        if (resolvedGrade && foundUnit) {
          navigate(`/grade/${resolvedGrade}/unit/${foundUnit.id}`);
        } else if (resolvedGrade) {
          navigate(`/grade/${resolvedGrade}`);
        } else {
          navigate('/');
        }
      }}
      onSelectLesson={onSelectLesson}
      isCompleted={studentState.completedLessonIds.includes(foundLesson.id)}
      onToggleComplete={onToggleComplete}
      onAnswerExercise={onAnswerExercise}
    />
  );
}

function RouteLoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[45vh] p-8 text-center space-y-3">
      <div className="w-10 h-10 border-2 border-[#202124] bg-[#F3E6A5] shadow-[2px_2px_0px_#202124] flex items-center justify-center">
        <Loader2 className="w-5 h-5 animate-spin text-[#405DE6]" />
      </div>
      <p className="text-xs font-mono font-bold text-[#202124]">جاري تحميل المحتوى التعليمي...</p>
    </div>
  );
}

function MainAppContent() {
  const { user, loading, saveStudentToCloud, loadStudentFromCloud } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  // Student progress state
  const [studentState, setStudentState] = useState<StudentState>(loadStudentState);

  // Active Grade selection
  const [selectedGrade, setSelectedGrade] = useState<EducationalGrade>(() => {
    return studentState.selectedGrade || 'sixth-preparatory';
  });

  const currentUnits = getUnitsForGrade(selectedGrade);
  const currentGradeMeta = getGradeMeta(selectedGrade);

  // Profile Modal state
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Backward Compatibility: Translate old hash navigation to real React Router paths on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const hashMap: Record<string, string> = {
        dashboard: '/',
        subjects: '/subjects',
        review: '/review',
        mock: '/mock',
        exam: '/exam',
        literature: '/literature',
        essays: '/essays',
        verbs: '/verbs',
        vocab: '/vocab',
      };
      const targetPath = hashMap[hash];
      if (targetPath) {
        navigate(targetPath, { replace: true });
        window.history.replaceState(null, '', targetPath);
      }
    }
  }, [navigate]);


  // Sync with Firestore when user logs in
  const prevUserIdRef = useRef<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function syncOnLogin() {
      if (user && user.uid !== prevUserIdRef.current) {
        prevUserIdRef.current = user.uid;
        const cloudData = await loadStudentFromCloud(user.uid);
        if (isCancelled) return;

        if (cloudData) {
          const currentLocal = loadStudentState();
          const merged: StudentState = {
            ...cloudData,
            name: cloudData.name || user.displayName || currentLocal.name,
            xp: Math.max(cloudData.xp || 0, currentLocal.xp || 0),
            completedLessonIds: Array.from(
              new Set([...(cloudData.completedLessonIds || []), ...(currentLocal.completedLessonIds || [])])
            ),
            bookmarkedQuestionIds: Array.from(
              new Set([...(cloudData.bookmarkedQuestionIds || []), ...(currentLocal.bookmarkedQuestionIds || [])])
            ),
            totalQuestionsAttempted: Math.max(
              cloudData.totalQuestionsAttempted || 0,
              currentLocal.totalQuestionsAttempted || 0
            ),
            totalQuestionsCorrect: Math.max(
              cloudData.totalQuestionsCorrect || 0,
              currentLocal.totalQuestionsCorrect || 0
            ),
            unlockedBadges: Array.from(
              new Set([...(cloudData.unlockedBadges || []), ...(currentLocal.unlockedBadges || [])])
            ),
            selectedGrade: cloudData.selectedGrade || currentLocal.selectedGrade || selectedGrade,
            answeredExercises: {
              ...(cloudData.answeredExercises || {}),
              ...(currentLocal.answeredExercises || {}),
            },
          };

          if (cloudData.selectedGrade) {
            setSelectedGrade(cloudData.selectedGrade);
          }
          setStudentState(merged);
          saveStudentState(merged);
          await saveStudentToCloud(merged);
        } else {
          const currentLocal = loadStudentState();
          const initialCloudState: StudentState = {
            ...currentLocal,
            name: user.displayName || currentLocal.name,
          };
          setStudentState(initialCloudState);
          saveStudentState(initialCloudState);
          await saveStudentToCloud(initialCloudState);
        }
      } else if (!user) {
        prevUserIdRef.current = null;
      }
    }

    syncOnLogin();

    return () => {
      isCancelled = true;
    };
  }, [user]);

  // Synchronize studentState to cloud after state transitions (never during render)
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (user) {
      saveStudentToCloud(studentState);
    }
  }, [studentState, user]);

  const handleSelectGrade = (newGrade: EducationalGrade) => {
    setSelectedGrade(newGrade);
    setStudentState((prev) => {
      const updated = { ...prev, selectedGrade: newGrade };
      saveStudentState(updated);
      return updated;
    });
  };

  const handleSelectLesson = (
    lesson: Lesson,
    grade?: EducationalGrade,
    customLessonIdKey?: string,
    skipNavigate?: boolean
  ) => {
    const effectiveGrade = grade || selectedGrade || 'sixth-preparatory';
    const lessonKey = customLessonIdKey || lesson.id;

    if (!skipNavigate) {
      navigate(`/lesson/${lesson.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setStudentState((prev) => {
      const currentMap = prev.gradeLastVisitedLessonMap || {
        'third-intermediate': '3rd-u1-l1',
        'fourth-preparatory': '4th-u1-l1',
        'fifth-preparatory': '5th-u1-l1',
        'sixth-preparatory': 'u1-l1',
      };
      const updated = {
        ...prev,
        lastVisitedLessonId: lesson.id,
        gradeLastVisitedLessonMap: {
          ...currentMap,
          [effectiveGrade]: lessonKey,
        },
      };
      saveStudentState(updated);
      return updated;
    });
  };

  const handleSelectUnit = (unit: Unit) => {
    if (unit.lessons.length > 0) {
      handleSelectLesson(unit.lessons[0]);
    }
  };

  const handleToggleCompleteLesson = (lessonId: string) => {
    setStudentState((prev) => {
      const isAlreadyCompleted = prev.completedLessonIds.includes(lessonId);
      let updated: string[];
      let addedXp = 0;

      if (isAlreadyCompleted) {
        updated = prev.completedLessonIds.filter((id) => id !== lessonId);
      } else {
        updated = [...prev.completedLessonIds, lessonId];
        addedXp = 50;
        triggerCelebration();
      }

      const newBadges = [...prev.unlockedBadges];
      if (updated.length >= 1 && !newBadges.includes('first-step')) {
        newBadges.push('first-step');
      }
      if (updated.length >= 5 && !newBadges.includes('grammar-master')) {
        newBadges.push('grammar-master');
      }

      const nextState = {
        ...prev,
        completedLessonIds: updated,
        xp: Math.max(0, prev.xp + addedXp),
        unlockedBadges: newBadges,
      };

      saveStudentState(nextState);
      return nextState;
    });
  };

  const handleAnswerExercise = (exerciseId: string, isCorrect: boolean) => {
    setStudentState((prev) => {
      const wasAlreadyAnswered = prev.answeredExercises[exerciseId];
      if (wasAlreadyAnswered !== undefined) return prev;

      const addedXp = isCorrect ? 20 : 5;
      if (isCorrect) triggerCelebration();

      const totalAttempted = prev.totalQuestionsAttempted + 1;
      const totalCorrect = prev.totalQuestionsCorrect + (isCorrect ? 1 : 0);

      const newBadges = [...prev.unlockedBadges];
      if (totalAttempted >= 10 && !newBadges.includes('dedicated-scholar')) {
        newBadges.push('dedicated-scholar');
      }

      const nextState = {
        ...prev,
        xp: prev.xp + addedXp,
        answeredExercises: { ...prev.answeredExercises, [exerciseId]: isCorrect },
        totalQuestionsAttempted: totalAttempted,
        totalQuestionsCorrect: totalCorrect,
        unlockedBadges: newBadges,
      };

      saveStudentState(nextState);
      return nextState;
    });
  };

  const handleRecordQuestionAnswer = (questionId: string, isCorrect: boolean) => {
    setStudentState((prev) => {
      const nextState = {
        ...prev,
        xp: prev.xp + (isCorrect ? 25 : 5),
        totalQuestionsAttempted: prev.totalQuestionsAttempted + 1,
        totalQuestionsCorrect: prev.totalQuestionsCorrect + (isCorrect ? 1 : 0),
      };
      saveStudentState(nextState);
      return nextState;
    });
  };

  const handleUpdateStudentName = (newName: string) => {
    setStudentState((prev) => {
      const nextState = { ...prev, name: newName };
      saveStudentState(nextState);
      return nextState;
    });
  };

  const handleResetProgress = () => {
    setStudentState(INITIAL_STUDENT_STATE);
    saveStudentState(INITIAL_STUDENT_STATE);
  };

  if (loading) {
    return (
      <div
        className="min-h-screen bg-[#F7F5EF] text-[#202124] flex flex-col items-center justify-center p-6 paper-canvas"
        dir="rtl"
      >
        <div className="brutal-card p-8 max-w-sm w-full text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-[#F3E6A5] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] flex items-center justify-center text-[#202124]">
            <GraduationCap className="w-8 h-8 text-[#202124]" />
          </div>
          <div>
            <span className="editorial-tag text-[#405DE6] block mb-1">SYS // INITIALIZATION</span>
            <h2 className="text-xl font-extrabold font-display text-[#202124]">النموذجية في الإنكليزية</h2>
            <p className="text-xs text-[#777873] mt-1">إشراف الأستاذ مصطفى تركي • المنهج العراقي 2026</p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-2 text-xs font-mono font-bold text-[#202124]">
            <Loader2 className="w-4 h-4 animate-spin text-[#405DE6]" />
            <span>جاري مزامنة المحتوى الدراسي...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <AuthGate
        onSuccessfulAuth={(name, grade) => {
          if (name) handleUpdateStudentName(name);
          if (grade) handleSelectGrade(grade);
        }}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-[#F7F5EF] text-[#202124] flex flex-col font-sans selection:bg-[#F3E6A5] selection:text-[#202124] paper-canvas"
      dir="rtl"
    >
      <Navbar
        studentState={studentState}
        selectedGrade={selectedGrade}
        onSelectGrade={handleSelectGrade}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenAuth={() => setIsProfileOpen(true)}
      />


      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6">
        <React.Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
          {/* Dedicated Grade Selection Portal */}
          <Route
            path="/grades"
            element={
              <GradesPortal
                studentState={studentState}
                onSelectGrade={handleSelectGrade}
              />
            }
          />

          {/* Root / Default Grade Dashboard */}
          <Route
            path="/"
            element={
              <GradePageView
                studentState={studentState}
                onSelectGrade={handleSelectGrade}
                onSelectUnit={handleSelectUnit}
                onSelectLesson={handleSelectLesson}
                onNavigateTab={(tab) => navigate(`/${tab}`)}
              />
            }
          />
          <Route
            path="/subjects"
            element={
              <GradePageView
                studentState={studentState}
                onSelectGrade={handleSelectGrade}
                onSelectUnit={handleSelectUnit}
                onSelectLesson={handleSelectLesson}
                onNavigateTab={(tab) => navigate(`/${tab}`)}
              />
            }
          />

          {/* Grade Dashboard for specific grade */}
          <Route
            path="/grade/:gradeId"
            element={
              <GradePageView
                studentState={studentState}
                onSelectGrade={handleSelectGrade}
                onSelectUnit={handleSelectUnit}
                onSelectLesson={handleSelectLesson}
                onNavigateTab={(tab) => navigate(`/${tab}`)}
              />
            }
          />

          {/* Dedicated Unit Dashboard */}
          <Route
            path="/grade/:gradeId/unit/:unitId"
            element={
              <UnitDashboardView
                studentState={studentState}
                onSelectLesson={handleSelectLesson}
                onToggleCompleteLesson={handleToggleCompleteLesson}
              />
            }
          />

          {/* Hierarchical Lesson View */}
          <Route
            path="/grade/:gradeId/unit/:unitId/lesson/:lessonId"
            element={
              <LessonRouteWrapper
                currentUnits={currentUnits}
                studentState={studentState}
                onSelectLesson={handleSelectLesson}
                onToggleComplete={handleToggleCompleteLesson}
                onAnswerExercise={handleAnswerExercise}
              />
            }
          />

          {/* Hierarchical Subject Detail View */}
          <Route
            path="/grade/:gradeId/subject/:subjectId"
            element={
              <SubjectDetailRouteWrapper
                studentState={studentState}
                onSelectLesson={handleSelectLesson}
              />
            }
          />

          {/* Backward-compatible Subject Detail View (English) */}
          <Route
            path="/subject/:subjectId"
            element={
              <SubjectDetailRouteWrapper
                studentState={studentState}
                onSelectLesson={handleSelectLesson}
              />
            }
          />

          {/* Backward-compatible Specific Lesson View */}
          <Route
            path="/lesson/:lessonId"
            element={
              <LessonRouteWrapper
                currentUnits={currentUnits}
                studentState={studentState}
                onSelectLesson={handleSelectLesson}
                onToggleComplete={handleToggleCompleteLesson}
                onAnswerExercise={handleAnswerExercise}
              />
            }
          />

          {/* Grade-Scoped Study Sections */}
          <Route
            path="/grade/:gradeId/review"
            element={
              <ScopedSectionWrapper
                section="review"
                studentState={studentState}
                onRecordAnswer={handleRecordQuestionAnswer}
                onSelectLesson={handleSelectLesson}
              />
            }
          />
          <Route
            path="/grade/:gradeId/exam"
            element={
              <ScopedSectionWrapper
                section="exam"
                studentState={studentState}
                onRecordAnswer={handleRecordQuestionAnswer}
                onSelectLesson={handleSelectLesson}
              />
            }
          />
          <Route
            path="/grade/:gradeId/mock"
            element={
              <ScopedSectionWrapper
                section="mock"
                studentState={studentState}
                onRecordAnswer={handleRecordQuestionAnswer}
                onSelectLesson={handleSelectLesson}
              />
            }
          />
          <Route
            path="/grade/:gradeId/literature"
            element={
              <ScopedSectionWrapper
                section="literature"
                studentState={studentState}
                onRecordAnswer={handleRecordQuestionAnswer}
                onSelectLesson={handleSelectLesson}
              />
            }
          />
          <Route
            path="/grade/:gradeId/essays"
            element={
              <ScopedSectionWrapper
                section="essays"
                studentState={studentState}
                onRecordAnswer={handleRecordQuestionAnswer}
                onSelectLesson={handleSelectLesson}
              />
            }
          />
          <Route
            path="/grade/:gradeId/verbs"
            element={
              <ScopedSectionWrapper
                section="verbs"
                studentState={studentState}
                onRecordAnswer={handleRecordQuestionAnswer}
                onSelectLesson={handleSelectLesson}
              />
            }
          />
          <Route
            path="/grade/:gradeId/vocab"
            element={
              <ScopedSectionWrapper
                section="vocab"
                studentState={studentState}
                onRecordAnswer={handleRecordQuestionAnswer}
                onSelectLesson={handleSelectLesson}
              />
            }
          />

          {/* Dedicated Study Sections */}
          <Route
            path="/review"
            element={
              <SmartReviewSection
                studentState={studentState}
                currentUnits={currentUnits}
                onSelectLesson={handleSelectLesson}
                onNavigateToTab={(tab) => navigate(`/${tab}`)}
                selectedGrade={selectedGrade}
                onSelectGrade={handleSelectGrade}
              />
            }
          />
          <Route
            path="/exam"
            element={
              <ExamEngine
                onRecordAnswer={handleRecordQuestionAnswer}
                grade={selectedGrade}
                onSelectGrade={handleSelectGrade}
              />
            }
          />
          <Route
            path="/mock"
            element={
              <MinisterialMockSimulator
                studentName={studentState.name}
                onClose={() => navigate('/')}
                grade={selectedGrade}
                onSelectGrade={handleSelectGrade}
              />
            }
          />
          <Route path="/literature" element={<LiteratureSection grade={selectedGrade} onSelectGrade={handleSelectGrade} />} />
          <Route path="/essays" element={<EssaysSection grade={selectedGrade} onSelectGrade={handleSelectGrade} />} />
          <Route
            path="/verbs"
            element={
              <IrregularVerbsLab
                grade={selectedGrade}
                onSelectGrade={handleSelectGrade}
                onRecordAnswer={(isCorrect) => handleRecordQuestionAnswer('verb', isCorrect)}
              />
            }
          />
          <Route
            path="/vocab"
            element={
              <VisualVocabAtlas
                grade={selectedGrade}
                onSelectGrade={handleSelectGrade}
              />
            }
          />
          <Route path="/curriculum" element={<Navigate to="/" replace />} />
          <Route path="/malzama" element={<Navigate to="/" replace />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </React.Suspense>
      </main>

      {isProfileOpen && (
        <StudentProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          studentState={studentState}
          onUpdateName={handleUpdateStudentName}
          onResetProgress={handleResetProgress}
          onOpenAuth={() => {}}
          onSelectGrade={setSelectedGrade}
        />
      )}


      {/* Swiss Editorial Footer */}
      <footer className="mt-auto border-t-2 border-[#202124] bg-white text-[#202124]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-8 border-b border-[#202124]/15">
            {/* Column 1: Identity & Stamp */}
            <div className="md:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E6A5] border border-[#202124] shadow-[1.5px_1.5px_0px_#202124] text-xs font-mono font-bold uppercase">
                <span>VOL. 26 // OFFICIAL ARCHIVE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#202124]">
                النموذجية في الإنكليزية
              </h3>
              <p className="text-xs text-[#777873] leading-relaxed font-medium max-w-md">
                المنصة الأكاديمية الشاملة لتدريس ومراجعة منهاج اللغة الإنكليزية لجميع المراحل المتوسطة والإعدادية في العراق وفق الكتب المعتمدة وزارياً، إشراف الأستاذ مصطفى تركي.
              </p>
            </div>

            {/* Column 2: Grades Quick Matrix (Strictly 4 Active Grades) */}
            <div className="md:col-span-4 space-y-2">
              <span className="editorial-tag text-[#405DE6] block">STAGES // الصفوف المشمولة</span>
              <div className="flex flex-wrap gap-1.5 pt-1 font-mono">
                <span className="px-2.5 py-1 bg-[#F3E6A5] border border-[#202124] text-xs font-bold text-[#202124]">المتوسطة (3rd وزاري)</span>
                <span className="px-2.5 py-1 bg-[#F7F5EF] border border-[#202124] text-xs font-bold text-[#202124]">الإعدادية (4th عام)</span>
                <span className="px-2.5 py-1 bg-[#F7F5EF] border border-[#202124] text-xs font-bold text-[#202124]">الإعدادية (5th متقدم)</span>
                <span className="px-2.5 py-1 bg-[#405DE6] text-white border border-[#202124] text-xs font-bold">البكالوريا (6th وزاري)</span>
              </div>
            </div>

            {/* Column 3: Verification & Specs Stamp */}
            <div className="md:col-span-3 space-y-2 text-right">
              <span className="editorial-tag text-[#F2A18E] block">VERIFICATION // التوثيق</span>
              <div className="p-3 bg-[#F7F5EF] border border-[#202124] shadow-[2px_2px_0px_#202124] text-[11px] font-mono space-y-1">
                <div>SPEC: <span className="font-bold">MOE-IRAQ-2026</span></div>
                <div>EXAM: <span className="font-bold text-[#F2A18E]">100 PTS FULL SCALE</span></div>
                <div>AUTHOR: <span className="font-bold">MUSTAFA TURKI</span></div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#777873]">
            <p>© 2026 النموذجية في الإنكليزية • جمهورية العراق — جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F3E6A5] border border-[#202124] inline-block" />
              <span>SWISS EDITORIAL × SOFT BRUTALISM EDITION</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainAppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
