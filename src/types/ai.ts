import { Quiz } from './curriculum';

export interface ExtractedRuleDraft {
  title: string;
  formula: string;
  explanation: string;
  examples: string[];
  unitHint?: string;
}

export interface ExtractedVocabDraft {
  word: string;
  meaning: string;
  context: string;
  partOfSpeech?: string;
  synonymOrAntonym?: string;
}

export interface ExtractedQuestionDraft {
  question: string;
  answer: string;
  type: 'Grammar & Functions' | 'Vocabulary' | 'Spelling' | 'Reading' | 'Literature' | 'Essay';
  ministerialYear?: string;
  options?: string[];
}

export interface ExtractedLessonDraft {
  title: string;
  titleEn?: string;
  summary: string;
  rules: ExtractedRuleDraft[];
  vocabulary: ExtractedVocabDraft[];
  questions: ExtractedQuestionDraft[];
}

export interface ExtractedUnitDraft {
  unitNumber: number;
  title: string;
  lessons: ExtractedLessonDraft[];
}

export interface CurriculumDraft {
  id: string;
  courseTitle: string;
  subject: string;
  grade: string;
  language: string;
  summary: string;
  sourceFileName: string;
  sourceFileSize?: string;
  sourceFileType: 'pdf' | 'text' | 'docx' | 'paste';
  isRealExtraction: boolean;
  extractionStatus?: 'success' | 'scanned-or-empty' | 'truncated' | 'error';
  rawTextPreview: string;
  units: ExtractedUnitDraft[];
  extractedRules: ExtractedRuleDraft[];
  extractedVocab: ExtractedVocabDraft[];
  extractedQuestions: ExtractedQuestionDraft[];
  totalUnitsDetected: number;
  totalLessonsDetected: number;
  totalRulesDetected: number;
  totalVocabDetected: number;
  totalQuestionsDetected: number;
  extractedAt: string;
}

export interface AIProvider {
  analyzeCurriculum(input: string, fileName?: string): Promise<CurriculumDraft>;
  explain(concept: string, context?: string): Promise<string>;
  summarize(text: string): Promise<string>;
  generateQuiz(context: string, questionCount?: number): Promise<Quiz>;
}
