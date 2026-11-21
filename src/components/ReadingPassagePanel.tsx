import React, { useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, FileText, Volume2, ClipboardList, Languages } from 'lucide-react';
import { Lesson, ReadingPassage, ReadingPassageStatus } from '../types';
import { BookPassageCatalogItem } from '../data/bookPassageCatalog';
import { speakEnglish } from '../utils/speech';
import { PassageImageFigure } from './common/PassageImageFigure';

interface ReadingPassagePanelProps {
  lesson: Lesson;
  passage?: ReadingPassage;
  passageTitle?: string;
  catalogPassages?: BookPassageCatalogItem[];
  activePassageId?: string;
  onSelectPassage?: (passageId: string) => void;
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

export const ReadingPassagePanel: React.FC<ReadingPassagePanelProps> = ({
  lesson,
  passage: passageOverride,
  passageTitle,
  catalogPassages = [],
  activePassageId,
  onSelectPassage,
}) => {
  const passage = passageOverride || lesson.readingPassage;
  const matchedCatalog = catalogPassages.find((item) => item.id === (activePassageId || passage?.id)) || catalogPassages[0];
  const resolvedTitle = passageTitle || passage?.titleAr || matchedCatalog?.titleAr || lesson.titleAr;
  const resolvedTitleEn = passage?.titleEn || matchedCatalog?.titleEn || lesson.titleEn;
  const resolvedImageSrc = passage?.imageSrc || matchedCatalog?.imageSrc;
  const resolvedImageAlt = passage?.imageAlt || matchedCatalog?.imageAlt || `صورة تعليمية لقطعة: ${resolvedTitle}`;
  const status: ReadingPassageStatus = passage?.status || 'source_required';
  const originalText = passage?.originalText || [];
  const translations = passage?.translation || [];
  const exerciseSets = passage?.exerciseSets || [];
  const hasOriginalText = originalText.some((paragraph) => paragraph.trim().length > 0);
  const hasTranslation = translations.some((paragraph) => paragraph.trim().length > 0);
  const canShowSourceText = (status === 'verified' || status === 'reconstructed') && hasOriginalText;
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);

  const handleSpeak = (index: number, paragraph: string) => {
    setSpeakingIndex(index);
    speakEnglish(paragraph, () => setSpeakingIndex(null));
  };

  return (
    <section
      className="space-y-5"
      aria-labelledby="reading-passage-heading"
      data-testid="reading-passage-dossier"
      data-passage-id={activePassageId || passage?.id || matchedCatalog?.id || lesson.id}
    >
      {catalogPassages.length > 1 && onSelectPassage && (
        <div
          className="bg-paper border-2 border-ink p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2 rounded-[6px]"
          data-testid="multi-passage-switcher"
        >
          <span className="text-xs font-black text-ink">
            يحتوي هذا الدرس على {catalogPassages.length} قطع مستقلة:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {catalogPassages.map((item) => {
              const isSelected = item.id === (activePassageId || matchedCatalog?.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectPassage(item.id)}
                  aria-pressed={isSelected}
                  data-testid={`switch-passage-${item.id}`}
                  className={`px-3 py-1.5 border-2 border-ink text-xs font-black transition-all cursor-pointer rounded-[4px] ${
                    isSelected
                      ? 'bg-cobalt text-surface shadow-brutal-xs'
                      : 'bg-surface text-ink hover:bg-yellow'
                  }`}
                >
                  {item.titleAr}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <header className="bg-surface border-3 border-ink shadow-brutal-action p-5 sm:p-7 space-y-5 rounded-[6px]">
        {/* 1. Passage Image */}
        {resolvedImageSrc && (
          <PassageImageFigure
            src={resolvedImageSrc}
            alt={resolvedImageAlt}
            titleAr={resolvedTitle}
            titleEn={resolvedTitleEn}
            priority
            testId="passage-hero-figure"
            className="rounded-[4px] max-h-[420px]"
          />
        )}

        {/* 2. Arabic Title & 3. English Title */}
        <div className="flex flex-wrap items-start justify-between gap-3 border-b-2 border-ink/15 pb-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-10 h-10 shrink-0 bg-yellow border-2 border-ink flex items-center justify-center mt-0.5">
              <BookOpen className="w-5 h-5 text-ink" />
            </div>
            <div className="min-w-0 space-y-1">
              <p className="text-[10px] font-mono font-black tracking-wider text-cobalt">READING COMPREHENSION</p>
              <h2 id="reading-passage-heading" data-testid="passage-title-ar" className="text-xl sm:text-2xl font-black text-ink leading-snug">
                {resolvedTitle}
              </h2>
              <p dir="ltr" data-testid="passage-title-en" className="text-sm sm:text-base font-mono font-bold text-cobalt text-left break-words">
                {resolvedTitleEn}
              </p>
            </div>
          </div>

          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 border-2 text-xs font-black shrink-0 ${STATUS_STYLES[status]}`}>
            {status === 'verified' ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
            {STATUS_LABELS[status]}
          </span>
        </div>

        {/* 4. Source Information */}
        <div className="space-y-3" data-testid="passage-source-info">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2 bg-paper border border-ink p-3">
              <FileText className="w-4 h-4 shrink-0 text-cobalt mt-0.5" />
              <div>
                <p className="font-black text-ink">مصدر القطعة</p>
                <p className="text-ink/75 mt-1">{passage?.sourceTitle || 'لم يُربط مصدر محدد بعد'}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-paper border border-ink p-3">
              <BookOpen className="w-4 h-4 shrink-0 text-cobalt mt-0.5" />
              <div>
                <p className="font-black text-ink">صفحة القطعة</p>
                <p className="text-ink/75 mt-1">{passage?.sourcePages || matchedCatalog?.sourcePages || lesson.sourcePages || 'غير محددة'}</p>
              </div>
            </div>
          </div>
          {passage?.verificationNote && (
            <p className="text-xs leading-relaxed text-ink/75 border-r-4 border-cobalt pr-3">{passage.verificationNote}</p>
          )}
        </div>
      </header>

      {/* 5. Original English Text */}
      {canShowSourceText ? (
        <section className="bg-surface border-3 border-ink shadow-brutal-modal p-5 sm:p-7 space-y-5" data-testid="original-passage-section">
          <div className="border-b-2 border-ink/15 pb-3">
            <p className="text-[10px] font-mono font-black tracking-wider text-cobalt">PART 01 · ORIGINAL TEXT</p>
            <h3 className="font-black text-ink text-lg">النص الإنجليزي الكامل</h3>
            <p className="text-xs text-ink/65 mt-1">اقرأ النص كاملًا أولًا، ثم انتقل إلى ترجمته العربية.</p>
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
              </article>
            ))}
          </div>
        </section>
      ) : (
        <div className="bg-paper border-3 border-ink shadow-brutal-action p-5 sm:p-7 space-y-3" data-testid="passage-source-missing">
          <div className="flex items-center gap-2 text-ink">
            <AlertTriangle className="w-5 h-5 text-semantic-error" />
            <h3 className="font-black">النص الإنجليزي الكامل غير متاح في المصدر المرفوع</h3>
          </div>
          <p className="text-sm leading-7 text-ink/80">
            {status === 'permission_required'
              ? 'تم تحديد مصدر القطعة وموضعها، لكن لم يُثبت إذن إعادة نشرها رقميًا.'
              : status === 'summary_only'
                ? 'المتاح لهذا الدرس شرح أو ملخص فقط، وليس نص الكتاب الأصلي.'
                : 'لم تتم مطابقة نص القطعة الإنجليزي الكامل مع المصدر المحدد بعد. نحتاج الصفحة الأصلية قبل اعتماده.'}
          </p>
          <p className="text-xs leading-6 text-ink/65">لن نعرض ملخصًا أو فقرة مُعادَة الصياغة على أنها النص الأصلي.</p>
        </div>
      )}

      {/* 6. Arabic Translation */}
      <section className="bg-paper border-3 border-ink shadow-brutal-action p-5 sm:p-7 space-y-4" data-testid="passage-translation-section">
        <div className="flex items-center gap-2 border-b-2 border-ink/15 pb-3">
          <Languages className="w-5 h-5 text-cobalt" />
          <div>
            <p className="text-[10px] font-mono font-black tracking-wider text-cobalt">PART 02 · ARABIC TRANSLATION</p>
            <h3 className="font-black text-ink text-lg">{hasOriginalText ? 'الترجمة العربية الكاملة' : 'الترجمة العربية المتاحة'}</h3>
          </div>
        </div>
        {hasTranslation ? (
          <div className="space-y-3">
            {translations.map((paragraph, index) => (
              <p key={index} dir="rtl" lang="ar" className="bg-surface border border-ink/40 p-4 text-sm sm:text-base leading-8 text-ink whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="bg-surface border border-dashed border-ink/40 p-4 text-sm leading-7 text-ink/70">
            الترجمة لم تُضف أو تُراجع بعد. لن نضع ترجمة مولّدة مكان ترجمة المصدر دون تمييز.
          </p>
        )}
      </section>

      {/* 7. Source-based Exercises and Answers */}
      <section className="bg-surface border-3 border-ink shadow-brutal-modal p-5 sm:p-7 space-y-4" data-testid="passage-exercises-section">
        <div className="flex items-center gap-2 border-b-2 border-ink/15 pb-3">
          <ClipboardList className="w-5 h-5 text-cobalt" />
          <div>
            <p className="text-[10px] font-mono font-black tracking-wider text-cobalt">PART 03 · QUESTIONS & ANSWERS</p>
            <h3 className="font-black text-ink text-lg">أسئلة القطعة وتدريباتها مع الإجابات</h3>
          </div>
        </div>
        {exerciseSets.length > 0 ? (
          <div className="space-y-5">
            {exerciseSets.map((set) => (
              <article key={set.id} className="border-2 border-ink bg-paper p-4 sm:p-5 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-black text-ink">{set.source === 'activity_book' ? 'كتاب النشاط' : set.source === 'malzama' ? 'الملزمة' : 'تدريبات إضافية من LINGORA'} · {set.sourceTitle}</h4>
                    <p className="text-xs text-ink/65 mt-1">المصدر / الموضع: {set.sourcePages}</p>
                  </div>
                  <span className="text-[10px] font-mono font-black bg-yellow border border-ink px-2 py-1">{set.items.length} أسئلة / فقرات</span>
                </div>
                <div className="space-y-1">
                  <p dir="ltr" lang="en" className="text-sm font-bold text-left leading-7">{set.instruction}</p>
                  {set.instructionTranslation && <p dir="rtl" lang="ar" className="text-xs text-ink/70 leading-6">{set.instructionTranslation}</p>}
                </div>
                <div className="space-y-3">
                  {set.items.map((item, index) => (
                    <div key={item.id} className="border border-ink/30 bg-surface p-3 space-y-2">
                      <p className="text-xs font-mono font-black text-cobalt">QUESTION {index + 1}</p>
                      <p dir="ltr" lang="en" className="text-sm text-left leading-7 font-medium whitespace-pre-wrap">{item.question}</p>
                      {item.questionTranslation && <p dir="rtl" lang="ar" className="text-xs text-ink/70 leading-6">{item.questionTranslation}</p>}
                      {item.options && item.options.length > 0 && (
                        <ul className="list-disc pl-6 text-sm leading-7" dir="ltr">
                          {item.options.map((option, optionIndex) => <li key={optionIndex}>{option}</li>)}
                        </ul>
                      )}
                      <div className="border-t border-ink/20 pt-2">
                        <p className="text-[10px] font-black text-semantic-success mb-1">الإجابة النموذجية</p>
                        <p dir="ltr" lang="en" className="text-sm text-left leading-7 font-bold whitespace-pre-wrap">{item.answer}</p>
                        {item.answerTranslation && <p dir="rtl" lang="ar" className="text-xs text-ink/70 leading-6 mt-1">{item.answerTranslation}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="bg-paper border border-dashed border-ink/40 p-4 text-sm leading-7 text-ink/70">
            أسئلة كتاب النشاط أو الملزمة وإجاباتها لم تُربط بهذه القطعة بعد. لن نستبدلها بتمارين عامة من درس آخر.
          </p>
        )}
      </section>
    </section>
  );
};
