import React, { useMemo, useState } from 'react';
import { AlertTriangle, ArrowLeft, BookOpen, CheckCircle2, FileText, Search } from 'lucide-react';
import { EducationalGrade, Lesson, StudentState, Unit } from '../types';
import { BrutalBadge, BrutalButton, BrutalCard } from './common/BrutalUI';

interface GradeBookPassageLibraryProps {
  grade: EducationalGrade;
  gradeName: string;
  units: Unit[];
  completedLessonIds: StudentState['completedLessonIds'];
  onOpenPassage: (unit: Unit, lesson: Lesson) => void;
}

type PassageStatus = {
  label: string;
  className: string;
  icon: React.ReactNode;
};

const getPassageStatus = (lesson: Lesson): PassageStatus => {
  const status = lesson.readingPassage?.status;

  if (status === 'verified') {
    return {
      label: 'النص مطابق للمصدر',
      className: 'bg-soft-mint border-semantic-success text-ink',
      icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    };
  }

  if (status === 'reconstructed') {
    return {
      label: 'نص معاد بناؤه — يحتاج مراجعة',
      className: 'bg-yellow border-ink text-ink',
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
    };
  }

  if (status === 'permission_required') {
    return {
      label: 'إذن النشر الرقمي مطلوب',
      className: 'bg-yellow border-ink text-ink',
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
    };
  }

  if (status === 'summary_only') {
    return {
      label: 'المتاح ملخص تعليمي',
      className: 'bg-paper border-ink text-ink',
      icon: <FileText className="w-3.5 h-3.5" />,
    };
  }

  if (status === 'source_required') {
    return {
      label: 'صفحة المصدر مطلوبة',
      className: 'bg-coral/20 border-ink text-ink',
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
    };
  }

  return {
    label: 'بيانات المصدر قيد التوثيق',
    className: 'bg-paper border-ink text-ink',
    icon: <FileText className="w-3.5 h-3.5" />,
  };
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

  // A reading lesson or any lesson with explicit passage metadata belongs in this
  // grade's independent passage library. The lesson remains in its original unit.
  const passages = useMemo(() => {
    return units
      .flatMap((unit) =>
        unit.lessons
          .filter((lesson) => lesson.category === 'reading' || Boolean(lesson.readingPassage))
          .map((lesson) => ({ unit, lesson }))
      )
      .sort((a, b) => {
        const unitOrder = (a.unit.number ?? a.unit.id) - (b.unit.number ?? b.unit.id);
        return unitOrder || a.lesson.lessonNumber - b.lesson.lessonNumber;
      });
  }, [units]);

  const visiblePassages = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();
    return passages.filter(({ unit, lesson }) => {
      const matchesUnit = selectedUnitId === 'all' || String(unit.id) === selectedUnitId;
      const searchable = [
        lesson.titleAr,
        lesson.titleEn,
        lesson.summary,
        lesson.readingPassage?.sourceTitle || '',
        lesson.readingPassage?.sourcePages || lesson.sourcePages || '',
      ].join(' ').toLocaleLowerCase();
      return matchesUnit && (!query || searchable.includes(query));
    });
  }, [passages, searchQuery, selectedUnitId]);

  const unitsWithPassages = useMemo(() => {
    const ids = new Set(passages.map(({ unit }) => unit.id));
    return units.filter((unit) => ids.has(unit.id));
  }, [passages, units]);

  return (
    <section
      id="grade-book-passage-library"
      data-testid="grade-book-passage-library"
      data-grade={grade}
      className="space-y-4 scroll-mt-24"
      aria-labelledby="grade-book-passage-library-heading"
    >
      <div className="border-b-3 border-ink pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-6 h-6 text-cobalt shrink-0" />
            <h2
              id="grade-book-passage-library-heading"
              className="text-xl sm:text-2xl font-black text-ink"
            >
              مكتبة قطع الكتاب
            </h2>
            <BrutalBadge variant="yellow">قسم مستقل</BrutalBadge>
          </div>
          <p className="text-xs sm:text-sm font-bold text-ink/70">
            جميع قطع ونصوص {gradeName} في مكان واحد، مرتبة بحسب الوحدات والصفحات.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-black shrink-0">
          <span className="bg-surface border-2 border-ink px-3 py-2">
            {passages.length} قطعة / نص
          </span>
          <span className="bg-paper border-2 border-ink px-3 py-2">
            {unitsWithPassages.length} وحدات
          </span>
        </div>
      </div>

      <BrutalCard variant="paper" borderSize="3" shadowSize="md" className="p-4 sm:p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-ink/80 font-bold leading-relaxed max-w-2xl">
            هذه المكتبة منفصلة عن قائمة الدروس. كل قطعة تبقى مرتبطة بوحدتها الأصلية، ويمكن فتح شرحها
            وأسئلتها من هنا دون تكرار الدرس أو تغيير ترتيب المنهج.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full lg:max-w-xl">
            <label className="relative block">
              <span className="sr-only">ابحث في قطع الكتاب</span>
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cobalt pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="ابحث باسم القطعة أو موضوعها..."
                aria-label="ابحث في قطع الكتاب"
                className="w-full min-h-11 pr-9 pl-3 py-2 bg-surface border-2 border-ink text-xs font-bold text-ink placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-cobalt"
              />
            </label>
            <label className="block">
              <span className="sr-only">تصفية قطع الكتاب حسب الوحدة</span>
              <select
                value={selectedUnitId}
                onChange={(event) => setSelectedUnitId(event.target.value)}
                aria-label="تصفية قطع الكتاب حسب الوحدة"
                className="w-full min-h-11 px-3 py-2 bg-surface border-2 border-ink text-xs font-black text-ink focus:outline-none focus:ring-2 focus:ring-cobalt"
              >
                <option value="all">كل الوحدات</option>
                {unitsWithPassages.map((unit) => (
                  <option key={unit.id} value={String(unit.id)}>
                    الوحدة {unit.number || unit.id}: {unit.titleAr}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold">
          <span className="text-ink/60">حالة المصدر:</span>
          <span className="px-2 py-1 border border-semantic-success bg-soft-mint text-ink">موثق</span>
          <span className="px-2 py-1 border border-ink bg-yellow text-ink">يحتاج مراجعة / إذن</span>
          <span className="px-2 py-1 border border-ink bg-coral/20 text-ink">المصدر مطلوب</span>
        </div>

        {visiblePassages.length > 0 ? (
          <>
            <div className="flex items-center justify-between text-[11px] font-mono font-bold text-ink/65">
              <span>النتائج المعروضة</span>
              <span>{visiblePassages.length} من {passages.length}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {visiblePassages.map(({ unit, lesson }) => {
                const status = getPassageStatus(lesson);
                const isCompleted = completedLessonIds.includes(lesson.id);
                const sourcePages = lesson.readingPassage?.sourcePages || lesson.sourcePages;

                return (
                  <article
                    key={lesson.id}
                    data-testid="book-passage-card"
                    data-passage-id={lesson.id}
                    data-unit-id={unit.id}
                    className="min-w-0"
                  >
                    <BrutalCard
                      variant="white"
                      borderSize="2"
                      shadowSize="sm"
                      className="h-full p-4 flex flex-col gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <BrutalBadge variant="cobalt">
                          الوحدة {unit.number || unit.id}
                        </BrutalBadge>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 border text-[10px] font-black text-right ${status.className}`}
                        >
                          {status.icon}
                          {status.label}
                        </span>
                      </div>

                      <div className="space-y-1 min-w-0">
                        <h3 className="text-sm font-black leading-6 text-ink">
                          {lesson.titleAr}
                        </h3>
                        <p className="text-[11px] font-mono font-bold text-cobalt leading-5 break-words" dir="ltr">
                          {lesson.titleEn}
                        </p>
                      </div>

                      <p className="text-xs leading-6 text-ink/75 line-clamp-3 min-h-[4.5rem]">
                        {lesson.summary}
                      </p>

                      <div className="mt-auto space-y-2 border-t border-ink/15 pt-3">
                        {sourcePages ? (
                          <p className="flex items-center gap-1.5 text-[10px] font-bold text-ink/65">
                            <FileText className="w-3.5 h-3.5 shrink-0 text-cobalt" />
                            <span>{sourcePages}</span>
                          </p>
                        ) : (
                          <p className="text-[10px] font-bold text-ink/55">
                            لم يُحدد موضع الصفحة في المصدر بعد
                          </p>
                        )}
                        {lesson.readingPassage?.sourceTitle && (
                          <p className="text-[10px] leading-5 text-ink/55 line-clamp-2">
                            المصدر: {lesson.readingPassage.sourceTitle}
                          </p>
                        )}
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[10px] font-black ${isCompleted ? 'text-semantic-success' : 'text-ink/50'}`}>
                            {isCompleted ? '✓ تمت دراسة القطعة' : 'قطعة ضمن المنهج'}
                          </span>
                          <BrutalButton
                            variant="yellow"
                            size="sm"
                            onClick={() => onOpenPassage(unit, lesson)}
                          >
                            فتح شرح القطعة
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </BrutalButton>
                        </div>
                      </div>
                    </BrutalCard>
                  </article>
                );
              })}
            </div>
          </>
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
