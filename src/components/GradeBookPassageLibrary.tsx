import React, { useMemo, useState } from 'react';
import { AlertTriangle, ArrowLeft, BookOpen, CheckCircle2, ChevronDown, FileText, Search } from 'lucide-react';
import { EducationalGrade, StudentState, Unit } from '../types';
import { resolveBookPassages } from '../data/bookPassageCatalog';
import { getBookPassageContent } from '../data/readingPassageContentRegistry';
import { BrutalBadge, BrutalButton, BrutalCard } from './common/BrutalUI';

interface GradeBookPassageLibraryProps {
  grade: EducationalGrade;
  gradeName: string;
  units: Unit[];
  completedLessonIds: StudentState['completedLessonIds'];
  onOpenPassage: (unit: Unit, lessonId: string, passageId: string) => void;
}

const getSourceStatus = (status?: string, hasPage = false) => {
  switch (status) {
    case 'verified':
      return {
        label: 'النص موثّق في بيانات المنصة',
        className: 'bg-soft-mint border-semantic-success text-ink',
        icon: <CheckCircle2 className="w-3.5 h-3.5" />,
      };
    case 'reconstructed':
      return {
        label: 'إعادة بناء — تحتاج مراجعة',
        className: 'bg-yellow border-ink text-ink',
        icon: <AlertTriangle className="w-3.5 h-3.5" />,
      };
    case 'permission_required':
      return {
        label: 'إذن النشر الرقمي غير موثّق',
        className: 'bg-yellow border-ink text-ink',
        icon: <AlertTriangle className="w-3.5 h-3.5" />,
      };
    case 'summary_only':
      return {
        label: 'المتاح شرح أو ملخص فقط',
        className: 'bg-paper border-ink text-ink',
        icon: <FileText className="w-3.5 h-3.5" />,
      };
    case 'source_required':
      return {
        label: 'نحتاج صفحة المصدر الأصلية',
        className: 'bg-coral/20 border-ink text-ink',
        icon: <AlertTriangle className="w-3.5 h-3.5" />,
      };
    default:
      return {
        label: hasPage ? 'الصفحة معروفة — النص يحتاج تدقيقاً' : 'مصدر القطعة يحتاج تدقيقاً',
        className: 'bg-paper border-ink text-ink',
        icon: <FileText className="w-3.5 h-3.5" />,
      };
  }
};

export const GradeBookPassageLibrary: React.FC<GradeBookPassageLibraryProps> = ({
  grade,
  gradeName,
  units,
  completedLessonIds,
  onOpenPassage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnitId, setSelectedUnitId] = useState('all');
  const [expandedUnitIds, setExpandedUnitIds] = useState<Record<number, boolean>>({});

  const passages = useMemo(() => resolveBookPassages(grade, units), [grade, units]);

  const completePassageCount = passages.filter((item) => {
    const passage = { ...(item.lesson.readingPassage || {}), ...(getBookPassageContent(item.id) || {}) };
    const hasText = (passage?.status === 'verified' || passage?.status === 'reconstructed')
      && Boolean(passage.originalText?.some((paragraph) => paragraph.trim().length > 0));
    const hasTranslation = Boolean(passage?.translation?.some((paragraph) => paragraph.trim().length > 0));
    const hasSourceQuestions = Boolean(passage?.exerciseSets?.some((set) => set.items.length > 0));
    return hasText && hasTranslation && hasSourceQuestions;
  }).length;

  const filteredPassages = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();
    return passages.filter(({ unit, lesson, titleAr, titleEn, sourcePages }) => {
      const matchesUnit = selectedUnitId === 'all' || String(unit.id) === selectedUnitId;
      const searchable = [
        titleAr,
        titleEn,
        lesson.titleAr,
        lesson.titleEn,
        sourcePages || '',
        lesson.readingPassage?.sourcePages || '',
        lesson.sourcePages || '',
      ].join(' ').toLocaleLowerCase();
      return matchesUnit && (!query || searchable.includes(query));
    });
  }, [passages, searchQuery, selectedUnitId]);

  const groupedPassages = useMemo(() => {
    const groups = new Map<number, { unit: Unit; items: typeof filteredPassages }>();
    for (const item of filteredPassages) {
      const current = groups.get(item.unit.id);
      if (current) current.items.push(item);
      else groups.set(item.unit.id, { unit: item.unit, items: [item] });
    }
    return Array.from(groups.values()).sort((a, b) => a.unit.number - b.unit.number);
  }, [filteredPassages]);

  const unitsWithPassages = useMemo(() => {
    const ids = new Set(passages.map(({ unit }) => unit.id));
    return units.filter((unit) => ids.has(unit.id)).sort((a, b) => a.number - b.number);
  }, [passages, units]);

  return (
    <section
      id="grade-book-passage-library"
      data-testid="grade-book-passage-library"
      data-grade={grade}
      data-passage-count={passages.length}
      data-passage-lesson-ids={passages.map((item) => item.lesson.id).join(',')}
      className="space-y-4 scroll-mt-24"
      aria-labelledby="grade-book-passage-library-heading"
    >
      <div className="border-b-3 border-ink pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <BookOpen className="w-6 h-6 text-cobalt shrink-0" />
            <h2 id="grade-book-passage-library-heading" className="text-xl sm:text-2xl font-black text-ink">
              قطع الكتاب
            </h2>
            <BrutalBadge variant="yellow">مرتبة حسب الوحدات</BrutalBadge>
          </div>
          <p className="text-xs sm:text-sm font-bold text-ink/70">
            قطع المنهج مرتبة حسب الوحدات. افتح القطعة لقراءة النص كاملًا ثم الترجمة ثم أسئلة المصدر وإجاباتها.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-black shrink-0">
          <span className="bg-surface border-2 border-ink px-3 py-2">{passages.length} قطعة</span>
          <span className="bg-soft-mint border-2 border-ink px-3 py-2">{completePassageCount} مكتملة المحتوى</span>
          <span className="bg-paper border-2 border-ink px-3 py-2">{unitsWithPassages.length} وحدات</span>
        </div>
      </div>

      <BrutalCard variant="paper" borderSize="3" shadowSize="md" className="p-4 sm:p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <label className="relative block">
            <span className="sr-only">ابحث في قطع الكتاب</span>
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cobalt pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="ابحث باسم القطعة..."
              aria-label="ابحث في قطع الكتاب"
              className="w-full min-h-11 pr-9 pl-3 py-2 bg-surface border-2 border-ink text-xs font-bold text-ink placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-cobalt"
            />
          </label>
          <label className="block">
            <span className="sr-only">تصفية قطع الكتاب حسب الوحدة</span>
            <select
              value={selectedUnitId}
              onChange={(event) => {
                setSelectedUnitId(event.target.value);
                if (event.target.value !== 'all') {
                  setExpandedUnitIds((previous) => ({ ...previous, [Number(event.target.value)]: true }));
                }
              }}
              aria-label="تصفية قطع الكتاب حسب الوحدة"
              className="w-full min-h-11 px-3 py-2 bg-surface border-2 border-ink text-xs font-black text-ink focus:outline-none focus:ring-2 focus:ring-cobalt"
            >
              <option value="all">كل الوحدات</option>
              {unitsWithPassages.map((unit) => (
                <option key={unit.id} value={String(unit.id)}>
                  الوحدة {unit.number}: {unit.titleAr}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex items-center justify-between border-b border-ink/20 pb-2 text-[11px] font-mono font-bold text-ink/65">
          <span>فهرس القطع بحسب ترتيب المنهج</span>
          <span>{filteredPassages.length} نتيجة</span>
        </div>

        {groupedPassages.length > 0 ? (
          <div className="space-y-3">
            {groupedPassages.map(({ unit, items }, index) => {
              const isExpanded = selectedUnitId === String(unit.id) || Boolean(expandedUnitIds[unit.id]) || (index === 0 && Object.keys(expandedUnitIds).length === 0);
              return (
                <section key={unit.id} className="border-2 border-ink bg-surface" data-testid="book-passage-unit-group" data-unit-id={unit.id}>
                  <button
                    type="button"
                    onClick={() => setExpandedUnitIds((previous) => ({ ...previous, [unit.id]: !isExpanded }))}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between gap-3 p-3 sm:p-4 text-right hover:bg-yellow/25 transition-colors"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span className="w-8 h-8 shrink-0 bg-yellow border-2 border-ink flex items-center justify-center font-black text-xs">
                        {String(unit.number).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-black text-ink">الوحدة {unit.number}: {unit.titleAr}</span>
                        <span className="block text-[10px] font-mono text-cobalt" dir="ltr">{unit.titleEn}</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono font-black text-ink/65">{items.length} قطع</span>
                      <ChevronDown className={`w-4 h-4 text-ink transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="border-t-2 border-ink divide-y divide-ink/15">
                      {items.map((item, itemIndex) => {
                        const passage = { ...(item.lesson.readingPassage || {}), ...(getBookPassageContent(item.id) || {}) };
                        const status = getSourceStatus(passage?.status, Boolean(item.sourcePages || passage?.sourcePages || item.lesson.sourcePages));
                        const pages = item.sourcePages || passage?.sourcePages || item.lesson.sourcePages;
                        const isCompleted = completedLessonIds.includes(item.lesson.id);
                        const hasText = (passage?.status === 'verified' || passage?.status === 'reconstructed')
                          && Boolean(passage.originalText?.some((paragraph) => paragraph.trim().length > 0));
                        const hasTranslation = Boolean(passage?.translation?.some((paragraph) => paragraph.trim().length > 0));
                        const hasSourceQuestions = Boolean(passage?.exerciseSets?.some((set) => set.items.length > 0));
                        const isContentComplete = hasText && hasTranslation && hasSourceQuestions;
                        return (
                          <article
                            key={item.id}
                            data-testid="book-passage-card"
                            data-passage-id={item.id}
                            data-lesson-id={item.lesson.id}
                            data-unit-id={unit.id}
                            data-passage-complete={isContentComplete ? 'true' : 'false'}
                            className="p-3 sm:p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <span className="w-7 h-7 shrink-0 bg-paper border border-ink flex items-center justify-center text-[10px] font-mono font-black text-ink">
                                {itemIndex + 1}
                              </span>
                              <div className="min-w-0 space-y-1">
                                <h3 className="text-sm font-black text-ink leading-6">{item.titleAr}</h3>
                                <p className="text-[11px] font-mono font-bold text-cobalt leading-5 break-words" dir="ltr">{item.titleEn}</p>
                                <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-bold">
                                  {pages && <span className="text-ink/65">الصفحة: {pages}</span>}
                                  <span className={`inline-flex items-center gap-1 px-2 py-1 border ${status.className}`}>
                                    {status.icon}
                                    {status.label}
                                  </span>
                                  <span className={`px-2 py-1 border ${hasText ? 'bg-soft-mint border-semantic-success' : 'bg-paper border-ink/40'}`}>{hasText ? '✓ النص' : '— النص'}</span>
                                  <span className={`px-2 py-1 border ${hasTranslation ? 'bg-soft-mint border-semantic-success' : 'bg-paper border-ink/40'}`}>{hasTranslation ? '✓ الترجمة' : '— الترجمة'}</span>
                                  <span className={`px-2 py-1 border ${hasSourceQuestions ? 'bg-soft-mint border-semantic-success' : 'bg-paper border-ink/40'}`}>{hasSourceQuestions ? '✓ الأسئلة والإجابات' : '— الأسئلة والإجابات'}</span>
                                  {isContentComplete && <span className="font-black text-semantic-success">القطعة مكتملة</span>}
                                  {isCompleted && <span className="text-semantic-success">✓ تمت دراسة الدرس المرتبط</span>}
                                </div>
                              </div>
                            </div>
                            <BrutalButton
                              variant="yellow"
                              size="sm"
                              onClick={() => onOpenPassage(unit, item.lesson.id, item.id)}
                              className="shrink-0 self-start lg:self-center"
                            >
                              فتح القطعة كاملة
                              <ArrowLeft className="w-3.5 h-3.5" />
                            </BrutalButton>
                          </article>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        ) : (
          <div className="border-2 border-dashed border-ink/40 bg-surface p-6 text-center space-y-2">
            <Search className="w-6 h-6 mx-auto text-cobalt" />
            <p className="font-black text-sm text-ink">لا توجد قطع مطابقة لبحثك</p>
            <p className="text-xs text-ink/65">غيّر عبارة البحث أو اختر كل الوحدات.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedUnitId('all');
                setExpandedUnitIds({});
              }}
              className="px-3 py-1.5 border-2 border-ink bg-yellow text-xs font-black"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        )}
      </BrutalCard>
    </section>
  );
};
