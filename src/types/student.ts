import { EducationalGrade } from './curriculum';

export interface StudentProfile {
  uid: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  avatarUrl?: string;
  governorate?: string;
  schoolName?: string;
  selectedGrade: EducationalGrade;
  createdAt: string;
  updatedAt: string;
}

export interface StudentPreferences {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'normal' | 'large' | 'extra-large';
  autoPronounceVocabulary: boolean;
  soundEffects: boolean;
  dailyGoalMinutes: number;
}

export interface LessonProgressItem {
  lessonId: string;
  viewedSectionsCount: number;
  totalSectionsCount: number;
  percentage: number;
  quizScore?: number;
  isCompleted: boolean;
  lastViewedAt: string;
}

export interface StudentProgress {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  lastVisitedLessonId?: string;
  completedLessonIds: string[];
  lessonProgressMap: Record<string, LessonProgressItem>;
  totalQuestionsAttempted: number;
  totalQuestionsCorrect: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
}

export interface ExamAnswerRecord {
  questionId: string;
  studentAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  category: string;
}

export interface ExamResultRecord {
  id: string;
  examId: string;
  examTitle: string;
  score: number;
  maxScore: number;
  percentage: number;
  timeSpentSeconds: number;
  timestamp: string;
  answers: ExamAnswerRecord[];
}

export interface BookmarkItem {
  id: string;
  itemType: 'lesson' | 'question' | 'block' | 'definition' | 'formula' | 'verb' | 'vocab' | 'essay';
  targetId: string;
  title: string;
  snippet?: string;
  contextLessonId?: string;
  createdAt: string;
}

export interface StudentNote {
  id: string;
  lessonId?: string;
  blockId?: string;
  title: string;
  content: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface OmegaStudentState {
  profile: StudentProfile;
  preferences: StudentPreferences;
  progress: StudentProgress;
  achievements: Achievement[];
  examResults: ExamResultRecord[];
  bookmarks: BookmarkItem[];
  notes: StudentNote[];
}
