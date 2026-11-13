export * from './types/curriculum';
export * from './types/student';
export * from './types/ai';
export * from './types/subject';
export * from './types/curriculumManagement';

import { StudentNote, BookmarkItem, ExamResultRecord, LessonProgressItem } from './types/student';
import { SourceProvenance, LessonPedagogyGuide, ContentOrigin } from './types/curriculumManagement';

export type LessonCategory = 'grammar' | 'vocabulary' | 'reading' | 'spelling';

export interface Example {
  en: string;
  ar: string;
  highlight?: string;
  note?: string;
}

export interface Exercise {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  type: 'mcq' | 'fill' | 'correction';
  ministerialYear?: string;
  sourcePages?: string;
  contentOrigin?: ContentOrigin;
}

export interface Lesson {
  id: string;
  unitId: number;
  lessonNumber: number;
  titleAr: string;
  titleEn: string;
  category: LessonCategory;
  summary: string;
  grammarRuleFormula?: string;
  detailedContent: string[];
  teacherNotes: string[]; // ملاحظات الأستاذ مصطفى تركي الذهبية
  commonMistakes?: string[]; // فخاخ وزارية احذر منها
  examples: Example[];
  exercises: Exercise[];
  provenance?: SourceProvenance;
  pedagogy?: LessonPedagogyGuide;
  sourcePages?: string;
}

export interface Unit {
  id: number;
  number: number;
  titleAr: string;
  titleEn: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  lessons: Lesson[];
  sourcePages?: string;
  academicYear?: string;
}

export interface MinisterialExamQuestion {
  id: string;
  unitId: number;
  topic: string;
  year: string;
  session: 'دور أول' | 'دور ثاني' | 'دور ثانٍ' | 'دور ثالث' | 'تمهيدي' | 'خارج القطر' | 'تدريب إضافي';
  questionText: string;
  correctAnswer: string;
  ruleExplanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'Grammar' | 'Vocabulary' | 'Spelling' | 'Literature' | 'Reading';
  sourceReference?: string;
  grade?: EducationalGrade;
  contentOrigin?: ContentOrigin;
  provenanceVerified?: boolean;
}

export interface CharacterInfo {
  name: string;
  nameAr?: string;
  role: string;
  roleAr?: string;
  description: string;
  descriptionAr?: string;
}

export interface LiteratureQA {
  id?: string;
  question: string;
  questionAr?: string;
  answer: string;
  answerAr?: string;
  year: string;
  keyHint?: string;
}

export interface LiteratureVocabulary {
  word: string;
  meaningAr: string;
  contextEn: string;
  contextAr: string;
}

export interface LiteratureItem {
  id: string;
  title: string;
  titleAr: string;
  author: string;
  authorAr: string;
  authorYears?: string;
  authorBioEn?: string[];
  authorBioAr?: string[];
  authorPrizes?: string[];
  genre: string;
  genreAr?: string;
  image: string;
  galleryImages?: { url: string; captionEn: string; captionAr: string }[];
  imageCaptionEn?: string;
  imageCaptionAr?: string;
  historicalContextEn?: string;
  historicalContextAr?: string;
  summaryEn?: string;
  summaryAr: string;
  moralLessonEn?: string;
  moralLessonAr?: string;
  keyThemes: string[];
  keyThemesEn?: string[];
  characters: CharacterInfo[];
  keyVocabulary?: LiteratureVocabulary[];
  quotes?: {
    textEn: string;
    textAr: string;
    speaker: string;
  }[];
  ministerialQA: LiteratureQA[];
}

export interface EssayItem {
  id: string;
  unitId: number;
  titleAr: string;
  titleEn: string;
  ministerialWeight: string;
  paragraphsEn: string[];
  paragraphsAr: string[];
  keywords: { word: string; meaning: string }[];
  goldenTips: string[];
  clozeSentences: { textWithBlanks: string; missingWord: string; options: string[] }[];
}

export interface IrregularVerb {
  base: string;
  past: string;
  pastParticiple: string;
  arabicMeaning: string;
  group: 'all-same' | 'two-same' | 'all-different';
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

export type EducationalGrade =
  | 'third-intermediate'
  | 'fourth-preparatory'
  | 'fifth-preparatory'
  | 'sixth-preparatory';

export interface UploadedMalzama {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  fileType: string;
  summary: string;
  grade: EducationalGrade;
  unitsCount: number;
  extractedRules: { title: string; formula: string; explanation: string; examples: string[] }[];
  extractedVocab: { word: string; meaning: string; context: string }[];
  extractedQuestions: { question: string; answer: string; type: string }[];
  rawContentPreview?: string;
}

export interface StudentState {
  name: string;
  xp: number;
  selectedGrade?: EducationalGrade;
  completedLessonIds: string[];
  bookmarkedQuestionIds: string[];
  answeredExercises: Record<string, boolean>;
  totalQuestionsAttempted: number;
  totalQuestionsCorrect: number;
  streakDays: number;
  lastActiveDate: string;
  lastVisitedLessonId?: string;
  gradeLastVisitedLessonMap?: Record<EducationalGrade, string>;
  unlockedBadges: string[];
  uploadedMalzamas?: UploadedMalzama[];
  notes?: StudentNote[];
  bookmarks?: BookmarkItem[];
  examResults?: ExamResultRecord[];
  lessonProgressMap?: Record<string, LessonProgressItem>;
}

export interface AiChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
