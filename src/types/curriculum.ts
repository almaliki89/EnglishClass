export type SubjectType = 'english';

export type EducationalGrade =
  | 'third-intermediate'
  | 'fourth-preparatory'
  | 'fifth-preparatory'
  | 'sixth-preparatory';

// -------------------------------------------------------------
// Lesson Content Block System (PHASE 5)
// -------------------------------------------------------------

export interface BaseBlock {
  id: string;
  order: number;
}

export interface DefinitionBlock extends BaseBlock {
  type: 'definition';
  term: string;
  termEn?: string;
  phonetic?: string;
  definitionAr: string;
  definitionEn?: string;
  partOfSpeech?: string;
  highlightWords?: string[];
  contextExample?: string;
}

export interface ExplanationBlock extends BaseBlock {
  type: 'explanation';
  title?: string;
  textAr: string;
  textEn?: string;
  bulletPoints?: string[];
}

export interface ExampleBlock extends BaseBlock {
  type: 'example';
  en: string;
  ar: string;
  highlight?: string;
  note?: string;
  badge?: string;
}

export interface ImportantBlock extends BaseBlock {
  type: 'important';
  title: string;
  content: string;
  ministerialTip?: boolean;
}

export interface WarningBlock extends BaseBlock {
  type: 'warning';
  title: string;
  warningText: string;
  commonTrapExample?: {
    wrong: string;
    right: string;
    reason: string;
  };
}

export interface FormulaBlock extends BaseBlock {
  type: 'formula';
  title: string;
  ruleFormula: string;
  breakdown?: { part: string; role: string; example: string }[];
  usageConditions?: string[];
}

export interface StepsBlock extends BaseBlock {
  type: 'steps';
  title: string;
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    example?: string;
  }[];
}

export interface ComparisonBlock extends BaseBlock {
  type: 'comparison';
  title: string;
  itemA: { name: string; traits: string[]; example: string };
  itemB: { name: string; traits: string[]; example: string };
}

export interface TableBlock extends BaseBlock {
  type: 'table';
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  url: string;
  captionAr: string;
  captionEn?: string;
  alt: string;
}

export interface DiagramBlock extends BaseBlock {
  type: 'diagram';
  title: string;
  nodes: { id: string; label: string; description?: string }[];
  connections: { from: string; to: string; label?: string }[];
}

export interface TimelineBlock extends BaseBlock {
  type: 'timeline';
  title: string;
  events: {
    yearOrPhase: string;
    title: string;
    description: string;
  }[];
}

export interface ExerciseBlock extends BaseBlock {
  type: 'exercise';
  questionId: string;
  questionAr?: string;
  questionEn: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  category: 'Grammar' | 'Vocabulary' | 'Spelling' | 'Literature' | 'Reading';
  ministerialYear?: string;
}

export interface QuizBlock extends BaseBlock {
  type: 'quiz';
  quizId: string;
  title: string;
  passingScore: number;
  questions: {
    id: string;
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface FlashcardBlock extends BaseBlock {
  type: 'flashcard';
  cards: {
    front: string;
    back: string;
    hint?: string;
    audioText?: string;
  }[];
}

export interface InteractiveBlock extends BaseBlock {
  type: 'interactive';
  widgetType: 'verb-conjugator' | 'cloze-builder' | 'match-pairs' | 'sentence-order';
  data: Record<string, any>;
}

export type LessonBlock =
  | DefinitionBlock
  | ExplanationBlock
  | ExampleBlock
  | ImportantBlock
  | WarningBlock
  | FormulaBlock
  | StepsBlock
  | ComparisonBlock
  | TableBlock
  | ImageBlock
  | DiagramBlock
  | TimelineBlock
  | ExerciseBlock
  | QuizBlock
  | FlashcardBlock
  | InteractiveBlock;

// -------------------------------------------------------------
// Generic Course, Unit, Chapter, Lesson Hierarchy (PHASE 4)
// -------------------------------------------------------------

export interface LessonMetadata {
  estimatedMinutes?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  ministerialWeightScore?: number;
  tags?: string[];
  goldenTips?: string[];
  audioNarrations?: string[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  timeLimitMinutes?: number;
  questions: QuizQuestion[];
}

export interface GenericLesson {
  id: string;
  unitId: string | number;
  lessonNumber: number;
  title: string;
  titleEn?: string;
  summary?: string;
  objectives?: string[];
  blocks: LessonBlock[];
  quiz?: Quiz;
  metadata?: LessonMetadata;
  category?: 'grammar' | 'vocabulary' | 'reading' | 'spelling' | 'literature' | 'essay';
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  lessons: GenericLesson[];
}

export interface GenericUnit {
  id: string | number;
  number: number;
  title: string;
  titleEn?: string;
  description?: string;
  accentColor?: string;
  bgGradient?: string;
  chapters?: Chapter[];
  lessons: GenericLesson[];
}

export interface Course {
  id: string;
  title: string;
  subject: SubjectType | string;
  grade: EducationalGrade | string;
  language: 'ar' | 'en' | 'bilingual';
  instructorName?: string;
  description?: string;
  units: GenericUnit[];
  createdAt?: string;
  updatedAt?: string;
}
