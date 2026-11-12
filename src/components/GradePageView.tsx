import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, Sparkles, BookOpen, Award, CheckCircle2, 
  ArrowRight, ArrowLeft, ShieldCheck, Flame, Target, BookMarked,
  FileText, Layers, Zap, Play, Search, Compass
} from 'lucide-react';
import { EducationalGrade, StudentState, Unit, Lesson } from '../types';
import { 
  getGradeMeta, getUnitsForGrade, getStoriesForGrade, 
  getEssaysForGrade, getMockPapersForGrade, ORDERED_GRADES 
} from '../data/gradeContentResolver';
import { 
  BrutalCard, BrutalButton, BrutalBadge, SectionHeader, 
  BreadcrumbsNav, CalloutBox 
} from './common/BrutalUI';
import { ScopedGradeSearch } from './common/ScopedGradeSearch';
import { VisualCurriculumGuide } from './VisualCurriculumGuide';
import { NotFound } from './NotFound';

interface GradePageViewProps {
  studentState: StudentState;
  onSelectGrade: (grade: EducationalGrade) => void;
  onSelectUnit: (unit: Unit) => void;
  onSelectLesson: (lesson: Lesson) => void;
  onNavigateTab: (tab: string) => void;
}

export const GradePageView: React.FC<GradePageViewProps> = ({
  studentState,
  onSelectGrade,
  onSelectUnit,
  onSelectLesson,
  onNavigateTab,
}) => {
  const { gradeId } = useParams<{ gradeId: string }>();
  const navigate = useNavigate();

  // If gradeId was specified in URL but is invalid, return NotFound
  if (gradeId && !ORDERED_GRADES.includes(gradeId as EducationalGrade)) {
    return <NotFound />;
  }

  // Validate gradeId or fallback
  const validGrade: EducationalGrade = (gradeId && ORDERED_GRADES.includes(gradeId as EducationalGrade))
    ? (gradeId as EducationalGrade)
    : (studentState.selectedGrade || 'sixth-preparatory');

  // Sync selectedGrade when entering this page directly via URL
  React.useEffect(() => {
    if (validGrade && studentState.selectedGrade !== validGrade) {
      onSelectGrade(validGrade);
    }
  }, [validGrade, studentState.selectedGrade, onSelectGrade]);

  const gradeMeta = getGradeMeta(validGrade);
  const units = getUnitsForGrade(validGrade);
  const stories = getStoriesForGrade(validGrade);
  const essays = getEssaysForGrade(validGrade);
  const isMinisterial = gradeMeta.isMinisterial;

  // Grade Isolation: Compute stats strictly for this grade's lessons
  const allGradeLessons = useMemo(() => units.flatMap((u) => u.lessons), [units]);
  const completedLessonsInGrade = useMemo(
    () => allGradeLessons.filter((l) => studentState.completedLessonIds.includes(l.id)),
    [allGradeLessons, studentState.completedLessonIds]
  );
  const progressPct = allGradeLessons.length > 0
    ? Math.round((completedLessonsInGrade.length / allGradeLessons.length) * 100)
    : 0;

  // Find last visited lesson within this grade (if available)
  const lastLessonInGrade = useMemo(() => {
    if (!studentState.lastVisitedLessonId) return null;
    return allGradeLessons.find((l) => l.id === studentState.lastVisitedLessonId) || null;
  }, [allGradeLessons, studentState.lastVisitedLessonId]);

  // Find parent unit for last visited lesson
  const lastLessonUnit = useMemo(() => {
    if (!lastLessonInGrade) return null;
    return units.find((u) => u.lessons.some((l) => l.id === lastLessonInGrade.id)) || null;
  }, [units, lastLessonInGrade]);

  const breadcrumbs = [
    { label: 'بوابة الصفوف الدراسية', onClick: () => navigate('/grades') },
    { label: gradeMeta.nameAr },
  ];

  return (
    <div className="space-y-8 pb-24 max-w-7xl mx-auto w-full text-[#202124]" dir="rtl">
      
      {/* 1. Scoped Navigation Bar with Exit Button to Grades Portal */}
      <div className="bg-white border-3 border-[#202124] shadow-[4px_4px_0px_#202124] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <BreadcrumbsNav items={breadcrumbs} />

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/grades')}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#F3E6A5] hover:bg-[#E6D99A] text-[#202124] border-2 border-[#202124] text-xs font-black shadow-[2px_2px_0px_#202124] transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            title="الخروج إلى صفحة اختيار الصفوف الرئيسية"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى اختيار الصفوف ↩</span>
          </button>
        </div>
      </div>

      {/* 2. Hero Dossier for THIS Grade ONLY */}
      <BrutalCard variant="paper" borderSize="4" shadowSize="lg" className="p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b-3 border-[#202124] pb-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <BrutalBadge variant="cobalt" className="text-xs">
                بيئة تعليمية مستقلة · المنهج الرسمي
              </BrutalBadge>
              {isMinisterial ? (
                <BrutalBadge variant="vermilion" className="text-xs">
                  ★ امتحان بكالوريا وزاري 100%
                </BrutalBadge>
              ) : (
                <BrutalBadge variant="sky" className="text-xs">
                  امتحان مدرسي نهائي 100%
                </BrutalBadge>
              )}
              <BrutalBadge variant="yellow" className="text-xs">
                منهج العراق 2026
              </BrutalBadge>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight">
              منصة {gradeMeta.nameAr} • اللغة الإنكليزية
            </h1>
            <p className="text-xs sm:text-sm font-mono font-bold text-[#405DE6]" dir="ltr">
              {gradeMeta.nameEn} · Master Curriculum
            </p>

            <p className="text-xs sm:text-sm text-[#202124]/85 font-bold leading-relaxed pt-1">
              {gradeMeta.description} — تم إعداد وتنظيم كافة الوحدات والشروحات والتمارين وفق
              المنهج العراقي الرسمي المعتمد بإشراف الأستاذ مصطفى تركي.
            </p>
          </div>

          {/* Grade Progress Box */}
          <div className="bg-white border-3 border-[#202124] shadow-[4px_4px_0px_#202124] p-5 shrink-0 min-w-[260px] space-y-3 rounded-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#202124]/70">
                إنجاز الصف الدراسي
              </span>
              <span className="text-base font-mono font-black text-[#405DE6]">
                {progressPct}%
              </span>
            </div>

            <div className="w-full bg-[#F7F5EF] h-4 border-2 border-[#202124] overflow-hidden rounded-xs">
              <div
                className="bg-[#F3E6A5] h-full border-l-2 border-[#202124] transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-[#202124]/80">
              <span>{completedLessonsInGrade.length} دروس مكتملة</span>
              <span>من أصل {allGradeLessons.length} درساً</span>
            </div>
          </div>
        </div>

        {/* Last Studied Lesson Callout (if student has progress in this grade) */}
        {lastLessonInGrade && lastLessonUnit && (
          <div className="p-4 bg-white border-3 border-[#202124] shadow-[3px_3px_0px_#202124] flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] flex items-center justify-center font-black shrink-0 rounded-xs">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#405DE6] block">
                  تابع من حيث توقفت
                </span>
                <h4 className="text-sm font-black text-[#202124]">
                  الوحدة 0{lastLessonUnit.id}: {lastLessonInGrade.titleAr}
                </h4>
              </div>
            </div>

            <BrutalButton
              variant="yellow"
              size="sm"
              onClick={() => {
                onSelectLesson(lastLessonInGrade);
                navigate(`/grade/${validGrade}/unit/${lastLessonUnit.id}/lesson/${lastLessonInGrade.id}`);
              }}
              className="shrink-0"
            >
              <span>متابعة الدرس</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </BrutalButton>
          </div>
        )}
      </BrutalCard>

      {/* 3. Scoped Search Bar within this Grade */}
      <ScopedGradeSearch
        grade={validGrade}
        onSelectLesson={onSelectLesson}
      />

      {/* 4. Official Subjects in this Grade */}
      <div className="space-y-4">
        <div className="border-b-3 border-[#202124] pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#202124] flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#405DE6]" />
              <span>المواد الدراسية المقررة لـ {gradeMeta.nameAr}</span>
            </h2>
            <p className="text-xs font-mono font-bold text-[#202124]/70 mt-0.5">
              المادة المعتمدة في المنصة
            </p>
          </div>
          <BrutalBadge variant="cobalt">مادة معتمدة</BrutalBadge>
        </div>

        {/* English Subject Card */}
        <BrutalCard variant="white" borderSize="4" shadowSize="md" className="p-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#202124] pb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#405DE6] text-white border-3 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center font-black text-2xl shrink-0">
                🇬🇧
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black uppercase text-[#F2A18E]">
                    OFFICIAL CURRICULUM
                  </span>
                  <BrutalBadge variant="yellow">ENGLISH FOR IRAQ</BrutalBadge>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#202124] mt-0.5">
                  اللغة الإنكليزية
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-black">
              <div className="p-2 bg-[#F7F5EF] border border-[#202124] text-center min-w-[90px]">
                <span className="text-[10px] text-[#202124]/60 block">الوحدات</span>
                <span className="text-sm font-black text-[#202124]">{units.length} وحدات</span>
              </div>
              <div className="p-2 bg-[#F7F5EF] border border-[#202124] text-center min-w-[90px]">
                <span className="text-[10px] text-[#202124]/60 block">إجمالي الدروس</span>
                <span className="text-sm font-black text-[#405DE6]">{allGradeLessons.length} درساً</span>
              </div>
              <div className="p-2 bg-[#F7F5EF] border border-[#202124] text-center min-w-[90px]">
                <span className="text-[10px] text-[#202124]/60 block">نسبة الإنجاز</span>
                <span className="text-sm font-black text-[#F2A18E]">{progressPct}%</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#202124]/85 font-bold leading-relaxed">
            المنهج الكامل لـ {gradeMeta.nameAr} يشمل القواعد النحوية، القطع الاستيعابية، المفردات،
            {gradeMeta.stage === 'intermediate' ? ' وقصص المطالعة المقررة (Story Time)' : ' ونصوص الأدب والشعر المقررة'}،
            بالإضافة إلى نماذج الأسئلة والامتحانات المدرسية والوزارية.
          </p>
        </BrutalCard>
      </div>

      {/* 5. Units Grid for THIS Grade ONLY */}
      <div className="space-y-4">
        <div className="border-b-3 border-[#202124] pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#202124] flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#F2A18E]" />
              <span>الوحدات الدراسية لـ {gradeMeta.nameAr} ({units.length} وحدات)</span>
            </h2>
            <p className="text-xs font-mono font-bold text-[#202124]/70 mt-0.5">
              اضغط على أي وحدة لاستعراض دروسها وشروحاتها بشكل مستقل
            </p>
          </div>
          <BrutalBadge variant="yellow">{gradeMeta.shortName}</BrutalBadge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {units.map((unit, idx) => {
            const unitCompletedLessons = unit.lessons.filter((l) =>
              studentState.completedLessonIds.includes(l.id)
            ).length;
            const unitProgress = unit.lessons.length > 0
              ? Math.round((unitCompletedLessons / unit.lessons.length) * 100)
              : 0;

            return (
              <BrutalCard
                key={unit.id}
                variant="white"
                borderSize="3"
                shadowSize="md"
                className="p-5 flex flex-col justify-between space-y-4 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <BrutalBadge variant="cobalt">الوحدة 0{unit.id}</BrutalBadge>
                    <span className="font-mono text-xs font-bold text-[#202124]/70 bg-[#F7F5EF] px-2 py-0.5 border border-[#202124]">
                      {unit.lessons.length} دروس
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#202124] leading-tight">
                      {unit.titleAr}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#F2A18E] mt-0.5" dir="ltr">
                      {unit.titleEn}
                    </p>
                  </div>

                  <p className="text-xs text-[#202124]/80 font-bold leading-relaxed line-clamp-2 bg-[#F7F5EF] p-2.5 border-2 border-[#202124]">
                    {unit.description || 'شروحات وقواعد وتمارين الوحدة المعتمدة وزارياً ومدرسياً.'}
                  </p>

                  {/* Unit Progress */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#202124]">
                      <span>التقدم:</span>
                      <span>{unitCompletedLessons}/{unit.lessons.length} ({unitProgress}%)</span>
                    </div>
                    <div className="w-full bg-[#F7F5EF] h-2 border border-[#202124] overflow-hidden">
                      <div
                        className="bg-[#F3E6A5] h-full"
                        style={{ width: `${unitProgress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-[#202124]">
                  <BrutalButton
                    variant="yellow"
                    size="sm"
                    onClick={() => {
                      onSelectUnit(unit);
                      navigate(`/grade/${validGrade}/unit/${unit.id}`);
                    }}
                    className="w-full justify-between"
                  >
                    <span>فتح الوحدة والدروس 📂</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </BrutalButton>
                </div>
              </BrutalCard>
            );
          })}
        </div>
      </div>

      {/* 6. Specialized Scoped Study Stations for this Grade */}
      <div className="space-y-4 pt-4">
        <div className="border-b-3 border-[#202124] pb-3">
          <h2 className="text-xl sm:text-2xl font-black text-[#202124] flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#405DE6]" />
            <span>محطات التدريب والمراجعة المخصصة لـ {gradeMeta.nameAr}</span>
          </h2>
          <p className="text-xs font-mono font-bold text-[#202124]/70 mt-0.5">
            جميع هذه المحطات تعرض أسئلة ونصوص {gradeMeta.shortName} فقط
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Exam Simulator */}
          <BrutalCard variant="white" borderSize="3" shadowSize="md" className="p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-[#F2A18E] text-white border-2 border-[#202124] flex items-center justify-center font-black">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-[#202124]">
                {isMinisterial ? 'المحاكي الوزاري 100د' : 'محاكي الامتحان النهائي 100د'}
              </h3>
              <p className="text-xs text-[#202124]/70 font-bold">
                ورقة امتحانية حقيقية كاملة خاصة بـ {gradeMeta.shortName} مع توقيت وعدّاد درجات.
              </p>
            </div>
            <BrutalButton
              variant="secondary"
              size="sm"
              onClick={() => {
                onSelectGrade(validGrade);
                navigate(`/grade/${validGrade}/mock`);
              }}
            >
              بدء المحاكي الآن
            </BrutalButton>
          </BrutalCard>

          {/* Question Bank */}
          <BrutalCard variant="white" borderSize="3" shadowSize="md" className="p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-[#405DE6] text-white border-2 border-[#202124] flex items-center justify-center font-black">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-[#202124]">
                {isMinisterial ? 'بنك الأسئلة الوزارية' : 'بنك الأسئلة والتمارين'}
              </h3>
              <p className="text-xs text-[#202124]/70 font-bold">
                تمارين تفاعلية مصنفة حسب القواعد والمفردات لمنهج {gradeMeta.shortName}.
              </p>
            </div>
            <BrutalButton
              variant="primary"
              size="sm"
              onClick={() => {
                onSelectGrade(validGrade);
                navigate(`/grade/${validGrade}/exam`);
              }}
            >
              دخول بنك الأسئلة
            </BrutalButton>
          </BrutalCard>

          {/* Stories & Literature */}
          <BrutalCard variant="white" borderSize="3" shadowSize="md" className="p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] flex items-center justify-center font-black">
                <BookMarked className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-[#202124]">
                {gradeMeta.stage === 'intermediate' ? 'قصص المطالعة (Story Time)' : 'الأدب والشعر والنصوص'}
              </h3>
              <p className="text-xs text-[#202124]/70 font-bold">
                {stories.length} أعمال مقررة في منهج {gradeMeta.shortName} مع الأسئلة والحلول.
              </p>
            </div>
            <BrutalButton
              variant="yellow"
              size="sm"
              onClick={() => {
                onSelectGrade(validGrade);
                navigate(`/grade/${validGrade}/literature`);
              }}
            >
              استعراض القصص
            </BrutalButton>
          </BrutalCard>

          {/* Essays */}
          <BrutalCard variant="white" borderSize="3" shadowSize="md" className="p-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-[#DCD8FA] text-[#202124] border-2 border-[#202124] flex items-center justify-center font-black">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-[#202124]">الإنشاءات الوزارية</h3>
              <p className="text-xs text-[#202124]/70 font-bold">
                {essays.length} إنشاءات نموذجية مقررة مع الترجمة ومفاتيح الدرجة الكاملة.
              </p>
            </div>
            <BrutalButton
              variant="sky"
              size="sm"
              onClick={() => {
                onSelectGrade(validGrade);
                navigate(`/grade/${validGrade}/essays`);
              }}
            >
              استعراض الإنشاءات
            </BrutalButton>
          </BrutalCard>
        </div>
      </div>

      {/* 7. Visual Curriculum Guide for this Grade */}
      <VisualCurriculumGuide
        grade={validGrade}
        onSelectLesson={(lessonId) => {
          const l = allGradeLessons.find((item) => item.id === lessonId);
          if (l) onSelectLesson(l);
        }}
        onNavigateTab={(tab) => onNavigateTab(tab)}
      />
    </div>
  );
};
