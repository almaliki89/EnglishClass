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
      <div className="p-8 text-center bg-white border-3 border-[#202124] shadow-[6px_6px_0px_#202124] max-w-xl mx-auto space-y-4">
        <h2 className="text-xl font-black text-[#202124]">لم يتم العثور على هذه الوحدة الدراسية</h2>
        <p className="text-sm text-[#202124]/70 font-bold">الوحدة المطلوبة غير موجودة ضمن منهج {gradeMeta.nameAr}.</p>
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
    <div className="space-y-8 pb-24 max-w-7xl mx-auto w-full text-[#202124]" dir="rtl">
      {/* 1. Breadcrumb & Scoped Isolation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 border-3 border-[#202124] shadow-[4px_4px_0px_#202124]">
        <BreadcrumbsNav items={breadcrumbs} />

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/grade/${validGrade}`)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F5EF] hover:bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] text-xs font-black shadow-[2px_2px_0px_#202124] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>العودة لوحدات {gradeMeta.shortName}</span>
          </button>
        </div>
      </div>

      {/* 2. Unit Hero Dossier */}
      <BrutalCard variant="paper" borderSize="4" shadowSize="lg" className="p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b-3 border-[#202124] pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <BrutalBadge variant="cobalt" className="text-xs">
                UNIT 0{currentUnit.id} // الوحدة الدراسية
              </BrutalBadge>
              <BrutalBadge variant="yellow" className="text-xs">
                {gradeMeta.nameAr}
              </BrutalBadge>
              {gradeMeta.isMinisterial && (
                <BrutalBadge variant="vermilion" className="text-xs">
                  ★ وزاري معتمد 100%
                </BrutalBadge>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight">
              {currentUnit.titleAr}
            </h1>
            <p className="text-sm sm:text-base font-mono font-bold text-[#405DE6]" dir="ltr">
              {currentUnit.titleEn}
            </p>

            <p className="text-xs sm:text-sm text-[#202124]/85 font-bold leading-relaxed max-w-3xl pt-1">
              {currentUnit.description ||
                'تتضمن هذه الوحدة القواعد والشروحات والمفردات والتمارين الوزارية المعتمدة وفق الطبعة الرسمية.'}
            </p>
          </div>

          {/* Unit Progress Tracker Badge */}
          <div className="bg-white border-3 border-[#202124] shadow-[4px_4px_0px_#202124] p-5 shrink-0 min-w-[260px] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-black uppercase text-[#202124]/70">
                UNIT PROGRESS // الإنجاز
              </span>
              <span className="text-sm font-mono font-black text-[#405DE6]">
                {completionPct}%
              </span>
            </div>

            <div className="w-full bg-[#F7F5EF] h-4 border-2 border-[#202124] overflow-hidden">
              <div
                className="bg-[#F3E6A5] h-full border-l-2 border-[#202124] transition-all duration-300"
                style={{ width: `${completionPct}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-[#202124]/80">
              <span>{completedLessons.length} دروس مكتملة</span>
              <span>{lessons.length - completedLessons.length} متبقية</span>
            </div>
          </div>
        </div>

        {/* Prev & Next Unit Quick Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {prevUnit ? (
            <button
              onClick={() => navigate(`/grade/${validGrade}/unit/${prevUnit.id}`)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#F7F5EF] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>الوحدة السابقة: {prevUnit.titleAr}</span>
            </button>
          ) : <div />}

          {nextUnit ? (
            <button
              onClick={() => navigate(`/grade/${validGrade}/unit/${nextUnit.id}`)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#F3E6A5] hover:bg-[#E6D99A] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black transition-all cursor-pointer"
            >
              <span>الوحدة التالية: {nextUnit.titleAr}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-xs font-mono font-bold text-[#202124]/60">
              الوحدة الأخيرة في المنهج
            </span>
          )}
        </div>
      </BrutalCard>

      {/* 3. Ordered Lessons List */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-3 border-[#202124] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#405DE6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center font-black">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#202124]">
                فهرس دروس الوحدة 0{currentUnit.id} ({lessons.length} دروس منظمة)
              </h2>
              <p className="text-xs font-mono font-bold text-[#202124]/70">
                دروس مرتبة تسلسلياً حسب الكتاب الرسمي والملزمة
              </p>
            </div>
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="فلترة دروس هذه الوحدة..."
              className="w-full px-3 py-1.5 bg-white border-2 border-[#202124] text-xs font-bold text-[#202124] shadow-[2px_2px_0px_#202124] focus:outline-none focus:bg-[#F3E6A5]/30"
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
                  isCompleted ? 'border-[#405DE6]' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#202124] text-[#F3E6A5]">
                        L0{lesson.lessonNumber || idx + 1}
                      </span>
                      <BrutalBadge variant={cat.variant} className="flex items-center gap-1">
                        {cat.icon}
                        <span>{cat.label}</span>
                      </BrutalBadge>
                    </div>

                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 bg-[#F3E6A5] text-[#202124] border border-[#202124]">
                        <Check className="w-3.5 h-3.5 text-[#405DE6]" />
                        <span>مكتمل 🏆</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono font-bold text-[#202124]/60">
                        لم يُدرس بعد ⏳
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#202124] group-hover:text-[#405DE6] transition-colors leading-tight">
                      {lesson.titleAr}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#F2A18E] mt-0.5" dir="ltr">
                      {lesson.titleEn}
                    </p>
                  </div>

                  <p className="text-xs text-[#202124]/80 font-bold leading-relaxed line-clamp-2 bg-[#F7F5EF] p-2.5 border-2 border-[#202124]">
                    {lesson.summary}
                  </p>

                  {lesson.grammarRuleFormula && (
                    <div className="p-2 bg-[#DCD8FA]/30 border border-[#202124] text-[11px] font-mono font-black text-[#202124] truncate" dir="ltr">
                      ⚡ {lesson.grammarRuleFormula}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t-2 border-[#202124] flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono font-bold text-[#202124]/70">
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
