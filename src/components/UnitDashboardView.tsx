import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  BookOpen, CheckCircle2, ChevronLeft, ArrowRight, ArrowLeft, 
  Layers, Target, Award, Clock, Sparkles, Cpu, PenTool, Compass,
  Check, Play, HelpCircle
} from 'lucide-react';
import { EducationalGrade, StudentState, Unit, Lesson } from '../types';
import { 
  getGradeMeta, getUnitsForGrade, ORDERED_GRADES 
} from '../data/gradeContentResolver';
import { 
  BrutalCard, BrutalButton, BrutalBadge, BreadcrumbsNav 
} from './common/BrutalUI';

interface UnitDashboardViewProps {
  studentState: StudentState;
  onSelectLesson: (lesson: Lesson) => void;
  onToggleCompleteLesson?: (lessonId: string) => void;
}

export const UnitDashboardView: React.FC<UnitDashboardViewProps> = ({
  studentState,
  onSelectLesson,
  onToggleCompleteLesson,
}) => {
  const { gradeId, unitId } = useParams<{ gradeId: string; unitId: string }>();
  const navigate = useNavigate();

  // Validate grade
  const validGrade: EducationalGrade = (gradeId && ORDERED_GRADES.includes(gradeId as EducationalGrade))
    ? (gradeId as EducationalGrade)
    : (studentState.selectedGrade || 'sixth-preparatory');

  const gradeMeta = getGradeMeta(validGrade);
  const units = getUnitsForGrade(validGrade);

  // Find target unit by id (number or string)
  const currentUnitIndex = units.findIndex(
    (u) => String(u.id) === String(unitId) || u.titleEn.toLowerCase().includes(String(unitId).toLowerCase())
  );
  const currentUnit: Unit | undefined = currentUnitIndex !== -1 ? units[currentUnitIndex] : undefined;

  // Prev & Next Units for linear scoped progression
  const prevUnit = currentUnitIndex > 0 ? units[currentUnitIndex - 1] : null;
  const nextUnit = currentUnitIndex < units.length - 1 ? units[currentUnitIndex + 1] : null;

  // Search/Filter within unit
  const [filterText, setFilterText] = useState('');

  // Unit completion stats
  const lessons = currentUnit ? currentUnit.lessons : [];
  const completedLessons = useMemo(() => {
    return lessons.filter((l) => studentState.completedLessonIds.includes(l.id));
  }, [lessons, studentState.completedLessonIds]);

  const completionPct = lessons.length > 0 ? Math.round((completedLessons.length / lessons.length) * 100) : 0;

  if (!currentUnit) {
    return (
      <div className="p-8 text-center bg-surface border-3 border-ink shadow-brutal-modal max-w-xl mx-auto space-y-4">
        <h2 className="text-xl font-black text-ink">لم يتم العثور على هذه الوحدة الدراسية</h2>
        <p className="text-sm text-ink/70 font-bold">الوحدة المطلوبة غير موجودة ضمن منهج {gradeMeta.nameAr}.</p>
        <BrutalButton variant="primary" onClick={() => navigate(`/grade/${validGrade}`)}>
          العودة لمنصة {gradeMeta.nameAr}
        </BrutalButton>
      </div>
    );
  }

  const filteredLessons = lessons.filter((l) => {
    if (!filterText.trim()) return true;
    const q = filterText.toLowerCase().trim();
    return (
      l.titleAr.toLowerCase().includes(q) ||
      l.titleEn.toLowerCase().includes(q) ||
      l.summary.toLowerCase().includes(q)
    );
  });

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'grammar':
        return { label: 'قواعد وزارية', variant: 'cobalt' as const, icon: <Cpu className="w-3.5 h-3.5" /> };
      case 'reading':
        return { label: 'قطع استيعابية وأدب', variant: 'yellow' as const, icon: <BookOpen className="w-3.5 h-3.5" /> };
      case 'vocabulary':
        return { label: 'مفردات وتوصيل', variant: 'sky' as const, icon: <Compass className="w-3.5 h-3.5" /> };
      case 'spelling':
      default:
        return { label: 'إملاء وشواذ', variant: 'vermilion' as const, icon: <PenTool className="w-3.5 h-3.5" /> };
    }
  };

  const breadcrumbs = [
    { label: 'الرئيسية', onClick: () => navigate('/') },
    { label: gradeMeta.nameAr, onClick: () => navigate(`/grade/${validGrade}`) },
    { label: 'اللغة الإنكليزية', onClick: () => navigate(`/grade/${validGrade}`) },
    { label: `الوحدة 0${currentUnit.id}: ${currentUnit.titleAr}` },
  ];

  return (
    <div className="space-y-8 pb-24 max-w-7xl mx-auto w-full text-ink" dir="rtl">
      {/* 1. Breadcrumb & Scoped Isolation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface p-4 border-3 border-ink shadow-brutal-action">
        <BreadcrumbsNav items={breadcrumbs} />

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate(`/grade/${validGrade}`)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper hover:bg-yellow text-ink border-2 border-ink text-xs font-black shadow-brutal-sm cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>العودة لوحدات {gradeMeta.shortName}</span>
          </button>
        </div>
      </div>

      {/* 2. Unit Hero Dossier */}
      <BrutalCard variant="paper" borderSize="4" shadowSize="lg" className="p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b-3 border-ink pb-6">
          <div className="space-y-2 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <BrutalBadge variant="cobalt" className="text-xs">
                الوحدة 0{currentUnit.id} · منهاج العراق
              </BrutalBadge>
              <BrutalBadge variant="yellow" className="text-xs">
                {gradeMeta.nameAr}
              </BrutalBadge>
              {gradeMeta.isMinisterial && (
                <BrutalBadge variant="vermilion" className="text-xs">
                  ★ المنهج الوزاري
                </BrutalBadge>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-ink tracking-tight">
              {currentUnit.titleAr}
            </h1>
            <p className="text-sm sm:text-base font-mono font-bold text-cobalt break-words" dir="ltr">
              {currentUnit.titleEn}
            </p>

            <p className="text-xs sm:text-sm text-ink/85 font-bold leading-relaxed max-w-3xl pt-1">
              {currentUnit.description ||
                'تتضمن هذه الوحدة القواعد والشروحات والمفردات والتمارين المقررة في المنهج.'}
            </p>
          </div>

          {/* Unit Progress Tracker Badge */}
          <div className="bg-surface border-3 border-ink shadow-brutal-action p-5 shrink-0 w-full lg:w-auto lg:min-w-[260px] space-y-3 rounded-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-ink/70">
                نسبة إنجاز الوحدة
              </span>
              <span className="text-sm font-mono font-black text-cobalt">
                {completionPct}%
              </span>
            </div>

            <div className="w-full bg-paper h-4 border-2 border-ink overflow-hidden">
              <div
                className="bg-yellow h-full border-l-2 border-ink transition-all duration-300"
                style={{ width: `${completionPct}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-ink/80">
              <span>{completedLessons.length} دروس مكتملة</span>
              <span>{lessons.length - completedLessons.length} متبقية</span>
            </div>
          </div>
        </div>

        {/* Prev & Next Unit Quick Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {prevUnit ? (
            <button
              type="button"
              onClick={() => navigate(`/grade/${validGrade}/unit/${prevUnit.id}`)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>الوحدة السابقة: {prevUnit.titleAr}</span>
            </button>
          ) : <div />}

          {nextUnit ? (
            <button
              type="button"
              onClick={() => navigate(`/grade/${validGrade}/unit/${nextUnit.id}`)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink shadow-brutal-sm rounded-[4px] text-xs font-black transition-all cursor-pointer"
            >
              <span>الوحدة التالية: {nextUnit.titleAr}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-xs font-mono font-bold text-ink/60">
              الوحدة الأخيرة في المنهج
            </span>
          )}
        </div>
      </BrutalCard>

      {/* 3. Ordered Lessons List */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-3 border-ink pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-cobalt text-surface border-2 border-ink shadow-brutal-sm flex items-center justify-center font-black shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-ink">
                فهرس دروس الوحدة 0{currentUnit.id} ({lessons.length} دروس منظمة)
              </h2>
              <p className="text-xs font-mono font-bold text-ink/70">
                دروس مرتبة تسلسلياً حسب تسلسل المنهج والملزمة
              </p>
            </div>
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="فلترة دروس هذه الوحدة..."
              className="w-full px-3 py-1.5 bg-surface border-2 border-ink text-xs font-bold text-ink shadow-brutal-sm focus:outline-none focus:bg-yellow/30"
            />
          </div>
        </div>

        {/* Lessons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLessons.map((lesson, idx) => {
            const isCompleted = studentState.completedLessonIds.includes(lesson.id);
            const cat = getCategoryBadge(lesson.category);

            return (
              <BrutalCard
                key={lesson.id}
                variant="white"
                borderSize="3"
                shadowSize="md"
                className={`p-5 flex flex-col justify-between transition-all group ${
                  isCompleted ? 'border-cobalt' : ''
                }`}
              >
                <div className="space-y-3 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-xs font-black px-2 py-0.5 bg-ink text-yellow">
                        L0{lesson.lessonNumber || idx + 1}
                      </span>
                      <BrutalBadge variant={cat.variant} className="flex items-center gap-1">
                        {cat.icon}
                        <span>{cat.label}</span>
                      </BrutalBadge>
                    </div>

                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 bg-yellow text-ink border border-ink">
                        <Check className="w-3.5 h-3.5 text-cobalt" />
                        <span>مكتمل 🏆</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono font-bold text-ink/60">
                        لم يُدرس بعد ⏳
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-black text-ink group-hover:text-cobalt transition-colors leading-tight">
                      {lesson.titleAr}
                    </h3>
                    <p className="text-xs font-mono font-bold text-cobalt mt-0.5 break-words" dir="ltr">
                      {lesson.titleEn}
                    </p>
                  </div>

                  <p className="text-xs text-ink/80 font-bold leading-relaxed line-clamp-2 bg-paper p-2.5 border-2 border-ink">
                    {lesson.summary}
                  </p>

                  {lesson.grammarRuleFormula && (
                    <div className="p-2 bg-lavender/30 border border-ink text-[11px] font-mono font-black text-ink truncate" dir="ltr">
                      ⚡ {lesson.grammarRuleFormula}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t-2 border-ink flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono font-bold text-ink/70">
                    {lesson.exercises ? `${lesson.exercises.length} تمارين` : 'شرح شامل'}
                  </span>

                  <BrutalButton
                    variant={isCompleted ? 'yellow' : 'primary'}
                    size="sm"
                    onClick={() => {
                      onSelectLesson(lesson);
                      navigate(`/grade/${validGrade}/unit/${currentUnit.id}/lesson/${lesson.id}`);
                    }}
                    className="cursor-pointer"
                  >
                    <span>{isCompleted ? 'مراجعة الدرس' : 'ابدأ الدرس الآن'}</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </BrutalButton>
                </div>
              </BrutalCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
