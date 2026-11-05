import { StudentState, Badge } from '../types';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'iraqi_english_student_state_v3';

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'first-step',
    title: 'الخطوة الأولى 🚀',
    description: 'إكمال أول درس بنجاح في المنصة',
    iconName: 'Award',
    unlocked: false,
    progress: 0,
    maxProgress: 1
  },
  {
    id: 'grammar-master',
    title: 'فارس القواعد ⚡',
    description: 'إكمال 5 دروس قواعد وزارية',
    iconName: 'Zap',
    unlocked: false,
    progress: 0,
    maxProgress: 5
  },
  {
    id: 'quiz-ace',
    title: 'صياد المئة 🎯',
    description: 'الإجابة الصحيحة على 10 أسئلة وزارية',
    iconName: 'CheckCircle2',
    unlocked: false,
    progress: 0,
    maxProgress: 10
  },
  {
    id: 'literature-scholar',
    title: 'أديب السادس 📖',
    description: 'مراجعة قسمي الأدب (Pride & Prejudice و As You Like It)',
    iconName: 'BookOpen',
    unlocked: false,
    progress: 0,
    maxProgress: 2
  },
  {
    id: 'verbs-champion',
    title: 'ملك الأفعال الشاذة 🏆',
    description: 'إتقان تدريبات مختبر الأفعال الشاذة',
    iconName: 'Trophy',
    unlocked: false,
    progress: 0,
    maxProgress: 20
  },
  {
    id: 'exam-master',
    title: 'فارس الوزاريات 🎯',
    description: 'إكمال امتحان وزاري شامل بنتيجة 85% فما فوق',
    iconName: 'Award',
    unlocked: false,
    progress: 0,
    maxProgress: 1
  },
  {
    id: 'exam-veteran',
    title: 'مخضرم الوزاريات 🏛️',
    description: 'خوض 3 امتحانات وزارية شاملة بنجاح',
    iconName: 'Shield',
    unlocked: false,
    progress: 0,
    maxProgress: 3
  }
];

export const INITIAL_STUDENT_STATE: StudentState = {
  name: 'طالب العراق المتفوق',
  xp: 150,
  selectedGrade: 'sixth-preparatory',
  completedLessonIds: [],
  bookmarkedQuestionIds: [],
  answeredExercises: {},
  totalQuestionsAttempted: 0,
  totalQuestionsCorrect: 0,
  streakDays: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  lastVisitedLessonId: '1-1',
  gradeLastVisitedLessonMap: {
    'third-intermediate': 'lesson-3-1',
    'fourth-preparatory': 'lesson-4-1',
    'fifth-preparatory': 'lesson-5-1',
    'sixth-preparatory': '1-1'
  },
  unlockedBadges: [],
  notes: [],
  bookmarks: []
};

export function loadStudentState(): StudentState {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      const today = new Date().toISOString().split('T')[0];
      
      // Calculate daily streak accurately
      if (parsed.lastActiveDate && parsed.lastActiveDate !== today) {
        const last = new Date(parsed.lastActiveDate);
        const current = new Date(today);
        const diffDays = Math.round((current.getTime() - last.getTime()) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          parsed.streakDays = (parsed.streakDays || 1) + 1;
        } else if (diffDays > 1) {
          parsed.streakDays = 1;
        }
        parsed.lastActiveDate = today;
      }

      return { 
        ...INITIAL_STUDENT_STATE, 
        ...parsed,
        gradeLastVisitedLessonMap: {
          ...INITIAL_STUDENT_STATE.gradeLastVisitedLessonMap,
          ...(parsed.gradeLastVisitedLessonMap || {})
        }
      };
    }
  } catch (e) {
    console.error("Failed to load student state from localStorage", e);
  }
  return INITIAL_STUDENT_STATE;
}

export function saveStudentState(state: StudentState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save student state to localStorage", e);
  }
}

export function triggerCelebration() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  } catch (e) {
    // Canvas confetti might fail if canvas is blocked
  }
}
