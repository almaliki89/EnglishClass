import { EducationalGrade } from './curriculum';
import { SubjectId } from './subject';

export type CurriculumSourceType =
  | 'students_book'       // كتاب الطالب الرسمي
  | 'activity_book'       // كتاب النشاط والتمارين
  | 'teacher_guide'       // دليل المدرس
  | 'ministerial_exams'   // أسئلة الامتحانات الوزارية
  | 'school_finals'       // نماذج الامتحانات المدرسية النهائية
  | 'malzama'             // ملزمة شرح معتمدة
  | 'enrichment';         // إثراء تدريبي

export type IngestionStatus =
  | 'uploaded'            // تم الرفع بنجاح
  | 'processing'          // قيد المعالجة واستخراج النصوص
  | 'extracted'           // تم استخراج النصوص بنجاح
  | 'structured'          // تم تصنيف الوحدات والقواعد والمفردات
  | 'pending_review'      // مسودة جاهزة بانتظار مراجعة المشرف
  | 'published'           // معتمد ومنشور رسمياً للطلاب
  | 'failed'              // فشلت المعالجة
  | 'needs_ocr'           // ملف مصور يحتاج تقنية OCR
  | 'archived';           // مؤرشف

export type VerificationStatus =
  | 'official_approved'   // معتمد رسمياً من وزارة التربية / الأستاذ المشرف
  | 'verified'            // تم التحقق والمطابقة
  | 'needs_review'        // بحاجة لتدقيق بشري
  | 'draft';              // مسودة أولية

export type ContentOrigin =
  | 'official_source'     // نص أصلي مقتبس من الكتاب المعتمد
  | 'teacher_explanation' // شرح الأستاذ وملاحظات ذهبية
  | 'ai_generated'        // تدريب مولد بالذكاء الاصطناعي
  | 'past_exam';          // امتحان وزاري أو نهائي سابق

export interface PageExcerpt {
  pageNumber: number;
  text: string;
  charCount: number;
}

export interface DetectedUnitSummary {
  unitNumber: number;
  title: string;
  pageStart?: number;
  pageEnd?: number;
  detectedLessonsCount: number;
  sampleGrammarRules?: string[];
}

export interface CurriculumSourceDocument {
  id: string;
  gradeId: EducationalGrade;
  subjectId: SubjectId;
  academicYear: string;          // e.g. "2024-2025" or "2025-2026"
  curriculumEdition: string;     // e.g. "طبعة 2024-2026 المعتمدة حصراً"
  sourceType: CurriculumSourceType;
  title: string;
  description: string;
  fileName: string;
  fileSize: string;
  fileSha256: string;
  totalPages: number;
  status: IngestionStatus;
  verificationStatus: VerificationStatus;
  reviewedBy?: string;
  reviewedAt?: string;
  rawTextPreview: string;
  totalChars: number;
  detectedUnits: DetectedUnitSummary[];
  extractedRulesCount: number;
  extractedVocabCount: number;
  extractedQuestionsCount: number;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface SourceProvenance {
  sourceDocumentId?: string;
  sourceDocumentTitle: string;
  sourceType: CurriculumSourceType;
  academicYear: string;
  curriculumEdition: string;
  pageNumbers?: string;         // e.g. "SB ص 8 • AB ص 8-9"
  contentOrigin: ContentOrigin;
  verificationStatus: VerificationStatus;
  originalExcerpt?: string;
}

export interface LessonPedagogyGuide {
  warmup: string;               // تمهيد الدرس وأهميته
  learningObjectives: string[]; // نواتج التعلم المحددة
  arabicExplanation: string;    // شرح عربي متدرج ومبسط
  solvingClues: string[];       // مفاتيح الحل والعلامات الإعرابية
  commonTraps: string[];        // الفخاخ الوزارية والشائعة
  recapSummary: string;         // مراجعة سريعة قبل الاختبار
  nextStepRecommendation: string; // التوصية بالخطوة اللاحقة
}
