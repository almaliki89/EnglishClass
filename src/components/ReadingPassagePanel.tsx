import React, { useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, FileText, Volume2 } from 'lucide-react';
import { Lesson, ReadingPassageStatus } from '../types';
import { speakEnglish } from '../utils/speech';

interface ReadingPassagePanelProps {
  lesson: Lesson;
}

const STATUS_LABELS: Record<ReadingPassageStatus, string> = {
  verified: 'نص مطابق للمصدر المرفق',
  reconstructed: 'نص معاد بناؤه — يحتاج مراجعة',
  permission_required: 'المصدر محدد — إذن النشر الرقمي مطلوب',
  summary_only: 'المتاح ملخص وليس النص الأصلي',
  source_required: 'المصدر الأصلي مطلوب',
};

const STATUS_STYLES: Record<ReadingPassageStatus, string> = {
  verified: 'bg-soft-mint border-semantic-success text-ink',
  reconstructed: 'bg-yellow border-ink text-ink',
  permission_required: 'bg-yellow border-ink text-ink',
  summary_only: 'bg-paper border-ink text-ink',
  source_required: 'bg-coral/20 border-ink text-ink',
};

export const ReadingPassagePanel: React.FC<ReadingPassagePanelProps> = ({ lesson }) => {
  const passage = lesson.readingPassage;
  const status: ReadingPassageStatus = passage?.status || 'source_required';
  const originalText = passage?.originalText || [];
  const translations = passage?.translation || [];
  const hasOriginalText = originalText.some((paragraph) => paragraph.trim().length > 0);
  const canShowSourceText = status === 'verified' || status === 'reconstructed';
  const [showTranslation, setShowTranslation] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);

  const handleSpeak = (index: number, paragraph: string) => {
    setSpeakingIndex(index);
    speakEnglish(paragraph, () => setSpeakingIndex(null));
  };

  return (
    <section className="space-y-5" aria-labelledby="reading-passage-heading">
      <header className="bg-surface border-3 border-ink shadow-brutal-action p-5 sm:p-7 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow border-2 border-ink flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-ink" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-black tracking-wider text-cobalt">READING COMPREHENSION</p>
              <h2 id="reading-passage-heading" className="text-lg sm:text-xl font-black text-ink">نص القراءة الأصلي</h2>
            </div>
          </div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 border-2 text-xs font-black ${STATUS_STYLES[status]}`}>
            {status === 'verified' ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
            {STATUS_LABELS[status]}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="flex items-start gap-2 bg-paper border border-ink p-3">
            <FileText className="w-4 h-4 shrink-0 text-cobalt mt-0.5" />
            <div>
              <p className="font-black text-ink">المصدر</p>
              <p className="text-ink/75 mt-1">{passage?.sourceTitle || 'لم يُربط مصدر محدد بعد'}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-paper border border-ink p-3">
            <BookOpen className="w-4 h-4 shrink-0 text-cobalt mt-0.5" />
            <div>
              <p className="font-black text-ink">الصفحة / الموضع</p>
              <p className="text-ink/75 mt-1">{passage?.sourcePages || lesson.sourcePages || 'غير محدد'}</p>
            </div>
          </div>
        </div>
        {passage?.verificationNote && (
          <p className="text-xs leading-relaxed text-ink/75 border-r-4 border-cobalt pr-3">{passage.verificationNote}</p>
        )}
      </header>

      {canShowSourceText && hasOriginalText ? (
        <div className="bg-surface border-3 border-ink shadow-brutal-modal p-5 sm:p-7 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/15 pb-3">
            <div>
              <h3 className="font-black text-ink">Original English Passage</h3>
              <p className="text-xs text-ink/65 mt-1">اقرأ الفقرات بالترتيب، واستمع إلى نطق كل فقرة عند الحاجة.</p>
            </div>
            {translations.length > 0 && (
              <button
                type="button"
                onClick={() => setShowTranslation((value) => !value)}
                className="px-3 py-1.5 text-xs font-black bg-yellow border-2 border-ink shadow-brutal-sm"
              >
                {showTranslation ? 'إخفاء الترجمة' : 'إظهار الترجمة'}
              </button>
            )}
          </div>

          <div className="space-y-4">
            {originalText.map((paragraph, index) => (
              <article key={index} className="bg-paper border-2 border-ink p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono font-black text-cobalt">PARAGRAPH {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleSpeak(index, paragraph)}
                    aria-label={`استمع إلى الفقرة ${index + 1}`}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-ink text-xs font-bold ${speakingIndex === index ? 'bg-yellow' : 'bg-surface hover:bg-yellow'}`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    {speakingIndex === index ? 'يتم النطق' : 'استمع'}
                  </button>
                </div>
                <p dir="ltr" lang="en" className="text-left font-medium text-sm sm:text-base leading-8 text-ink whitespace-pre-wrap">{paragraph}</p>
                {showTranslation && translations[index] && (
                  <p dir="rtl" lang="ar" className="border-t border-ink/20 pt-3 text-sm leading-8 text-ink/80">{translations[index]}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-paper border-3 border-ink shadow-brutal-action p-5 sm:p-7 space-y-3">
          <div className="flex items-center gap-2 text-ink">
            <AlertTriangle className="w-5 h-5 text-semantic-error" />
            <h3 className="font-black">لم يتم توثيق نص القطعة الأصلي بعد</h3>
          </div>
          <p className="text-sm leading-7 text-ink/80">
            {status === 'permission_required'
              ? 'تم تحديد نص القراءة وموضعه في الملزمة المرفوعة، لكن الملف لا يوضح إذناً بإعادة نشره رقمياً. لن نعرض النص الكامل قبل تأكيد الإذن من صاحب الحقوق. تبقى الشروحات والتمارين المتاحة منفصلة عن النص الأصلي.'
              : status === 'summary_only'
                ? 'المحتوى المتاح لهذا الدرس شرح أو ملخص. لن نعرضه على أنه نص الكتاب الأصلي.'
                : 'الدرس موجود في المنهج، لكن نص القراءة الإنجليزي الكامل لم يُطابق مع مصدره بعد. تبقى الأسئلة والشرح المتاحان منفصلين عن النص الأصلي.'}
          </p>
          <p className="text-xs leading-6 text-ink/65">
            {status === 'permission_required'
              ? 'يمكن تفعيل النص الكامل بعد الحصول على موافقة واضحة للنشر الرقمي. أما الدروس التي يظهر لها أن المصدر مطلوب، فنحتاج إلى رفع صفحة الكتاب المحددة.'
              : 'نحتاج نسخة كتاب الطالب أو الملزمة الخاصة بهذا الصف والصفحة المحددة حتى نضيف النص ونوثّق مطابقته. لا يتم توليد نص بديل أو اختراع فقرات لسد هذا النقص.'}
          </p>
        </div>
      )}
    </section>
  );
};
