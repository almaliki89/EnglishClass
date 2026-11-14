import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Flame,
  GraduationCap,
  Headphones,
  Layers,
  Play,
  Rocket,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from 'lucide-react';
import { EducationalGrade, StudentState } from '../types';
import {
  ALL_GRADES_META,
  ORDERED_GRADES,
  getUnitsForGrade,
  getGradeMeta,
} from '../data/gradeContentResolver';
import { BrutalButton, BrutalBadge } from './common/BrutalUI';
import { playPopSound } from '../utils/cartoonAudio';
import { speakEnglish } from '../utils/speech';

interface GradesPortalProps {
  studentState: StudentState;
  onSelectGrade: (grade: EducationalGrade) => void;
}

const GRADE_VISUALS: Record<
  EducationalGrade,
  { emoji: string; accentBg: string; tag: string; image3d: string }
> = {
  'third-intermediate': {
    emoji: '🏆',
    accentBg: 'bg-coral',
    tag: 'المنهج الوزاري',
    image3d: '/assets/images/grade_3rd_intermediate_3d_1793868636685.jpg',
  },
  'fourth-preparatory': {
    emoji: '🚀',
    accentBg: 'bg-lavender',
    tag: 'المرحلة الإعدادية',
    image3d: '/assets/images/grade_4th_preparatory_3d_1793868637872.jpg',
  },
  'fifth-preparatory': {
    emoji: '💎',
    accentBg: 'bg-yellow',
    tag: 'الإعدادي المتقدم',
    image3d: '/assets/images/grade_5th_preparatory_3d_1793868637510.jpg',
  },
  'sixth-preparatory': {
    emoji: '👑',
    accentBg: 'bg-cobalt',
    tag: 'امتحان البكالوريا الوزاري',
    image3d: '/assets/images/grade_6th_preparatory_3d_1793868638311.jpg',
  },
};

const QUICK_ACTIVITIES = [
  {
    id: 'review',
    title: 'المراجعة الذكية',
    description: 'ثبّت ما تعلمته بخطوات قصيرة',
    icon: Brain,
    color: 'bg-lavender',
    label: 'راجع',
  },
  {
    id: 'exam',
    title: 'تحدي الأسئلة',
    description: 'اختبر فهمك وتدرّب على الإجابة',
    icon: Target,
    color: 'bg-coral',
    label: 'تحدَّ نفسك',
  },
  {
    id: 'vocab',
    title: 'عالم المفردات',
    description: 'اكتشف الكلمات وتدرّب على معانيها',
    icon: Layers,
    color: 'bg-blue-mist',
    label: 'اكتشف',
  },
  {
    id: 'literature',
    title: 'الأدب والقصص',
    description: 'اقرأ النصوص وتعرّف إلى أفكارها',
    icon: BookOpen,
    color: 'bg-soft-mint',
    label: 'اقرأ',
  },
] as const;

export const GradesPortal: React.FC<GradesPortalProps> = ({
  studentState,
  onSelectGrade,
}) => {
  const navigate = useNavigate();
  const [showChallengeTranslation, setShowChallengeTranslation] = useState(false);

  const activeGrade: EducationalGrade =
    studentState.selectedGrade && ORDERED_GRADES.includes(studentState.selectedGrade)
      ? studentState.selectedGrade
      : 'sixth-preparatory';
  const activeGradeMeta = getGradeMeta(activeGrade);
  const activeGradeUnits = getUnitsForGrade(activeGrade);
  const activeGradeLessons = activeGradeUnits.flatMap((unit) =>
    unit.lessons.map((lesson) => ({ unit, lesson }))
  );

  const completedInActiveGrade = activeGradeLessons.filter(({ lesson }) =>
    studentState.completedLessonIds.includes(lesson.id)
  ).length;
  const activeGradeProgress = activeGradeLessons.length
    ? Math.round((completedInActiveGrade / activeGradeLessons.length) * 100)
    : 0;

  const lastVisitedId =
    studentState.gradeLastVisitedLessonMap?.[activeGrade] || studentState.lastVisitedLessonId;
  const lastVisitedEntry = activeGradeLessons.find(
    ({ lesson }) => lesson.id === lastVisitedId
  );
  const nextLearningEntry =
    (lastVisitedEntry &&
    !studentState.completedLessonIds.includes(lastVisitedEntry.lesson.id))
      ? lastVisitedEntry
      : activeGradeLessons.find(
          ({ lesson }) => !studentState.completedLessonIds.includes(lesson.id)
        ) || null;
  const challengeExample = nextLearningEntry?.lesson.examples?.[0];

  const totalLessonsAcrossGrades = ORDERED_GRADES.reduce(
    (total, grade) =>
      total + getUnitsForGrade(grade).reduce((count, unit) => count + unit.lessons.length, 0),
    0
  );
  const completedLessonsAcrossGrades = ORDERED_GRADES.reduce(
    (total, grade) =>
      total +
      getUnitsForGrade(grade).reduce(
        (count, unit) =>
          count +
          unit.lessons.filter((lesson) =>
            studentState.completedLessonIds.includes(lesson.id)
          ).length,
        0
      ),
    0
  );

  const handleEnterGrade = (gradeId: EducationalGrade) => {
    playPopSound();
    onSelectGrade(gradeId);
    navigate(`/grade/${gradeId}`);
  };

  const handleStartLearning = () => {
    playPopSound();
    onSelectGrade(activeGrade);
    if (nextLearningEntry) {
      navigate(
        `/grade/${activeGrade}/unit/${nextLearningEntry.unit.id}/lesson/${nextLearningEntry.lesson.id}`
      );
      return;
    }
    navigate(`/grade/${activeGrade}/review`);
  };

  const handleOpenActivity = (activityId: string) => {
    playPopSound();
    onSelectGrade(activeGrade);
    navigate(`/grade/${activeGrade}/${activityId}`);
  };

  return (
    <div className="space-y-8 pb-24 max-w-7xl mx-auto w-full text-ink" dir="rtl">
      {/* Welcome hero and next learning mission */}
      <section className="relative isolate overflow-hidden rounded-[8px] border-3 border-ink bg-cobalt text-surface shadow-brutal-hero">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full border-[18px] border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-4.5rem] left-[38%] h-40 w-40 rotate-12 border-[14px] border-yellow/25"
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-5 p-5 sm:p-7 lg:p-9">
          <div className="flex flex-col justify-center gap-5 py-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-sm border-2 border-ink bg-yellow px-3 py-1.5 text-xs font-black text-ink shadow-brutal-sm">
                <Sparkles className="h-4 w-4" />
                أهلاً بك في مغامرة التعلّم
              </span>
              <span className="inline-flex items-center rounded-sm border border-white/50 bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white">
                منهاج اللغة الإنكليزية العراقي
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-white/75">
                IRAQI ENGLISH • 2026
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm sm:text-base font-bold text-white/85">
                مرحباً {studentState.name?.trim() || 'بطل الإنكليزية'}! 👋
              </p>
              <h1 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.35] tracking-tight">
                تعلّم، العب، وتقدّم
                <span className="mt-1 block text-yellow">خطوة نحو التميّز!</span>
              </h1>
              <p className="max-w-xl text-sm sm:text-base font-semibold leading-8 text-white/85">
                كل درس مغامرة جديدة. افهم الفكرة، استمع إلى الأمثلة، جرّب بنفسك، واجمع إنجازاتك في طريقك لإتقان الإنكليزية.
              </p>
              <p className="inline-flex max-w-xl items-center gap-2 rounded-sm border border-white/40 bg-white/10 px-3 py-2 text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow" />
                يمكنك دخول الصفوف وتصفح الدروس مباشرة دون تسجيل. الحساب اختياري لمزامنة تقدمك.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleStartLearning}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border-2 border-ink bg-yellow px-5 py-3 text-sm font-black text-ink shadow-brutal-btn transition-all hover:-translate-y-1 hover:bg-yellow-hover active:translate-y-0 motion-reduce:transition-none"
              >
                <Rocket className="h-5 w-5" />
                {nextLearningEntry ? 'ابدأ مهمة اليوم' : 'ابدأ المراجعة'}
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate('/grades')}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border-2 border-white/70 bg-white/10 px-4 py-3 text-sm font-black text-white transition-colors hover:bg-white/20"
              >
                <GraduationCap className="h-5 w-5" />
                استكشف الصفوف
              </button>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-2 pt-1">
              <div className="rounded-[5px] border border-white/30 bg-white/10 p-3">
                <div className="flex items-center gap-1.5 text-yellow">
                  <Zap className="h-4 w-4" />
                  <span className="text-[10px] font-bold">نقاط XP</span>
                </div>
                <p className="mt-1 text-xl font-black font-mono tabular-nums text-white">
                  {Math.max(0, Number(studentState.xp) || 0)}
                </p>
              </div>
              <div className="rounded-[5px] border border-white/30 bg-white/10 p-3">
                <div className="flex items-center gap-1.5 text-yellow">
                  <Trophy className="h-4 w-4" />
                  <span className="text-[10px] font-bold">دروس مكتملة</span>
                </div>
                <p className="mt-1 text-xl font-black font-mono tabular-nums text-white">
                  {completedLessonsAcrossGrades}
                </p>
              </div>
              <div className="rounded-[5px] border border-white/30 bg-white/10 p-3">
                <div className="flex items-center gap-1.5 text-yellow">
                  <Flame className="h-4 w-4" />
                  <span className="text-[10px] font-bold">تقدّم صفك</span>
                </div>
                <p className="mt-1 text-xl font-black font-mono tabular-nums text-white">
                  {activeGradeProgress}%
                </p>
              </div>
            </div>
          </div>

          {/* Today's interactive mission card */}
          <div className="relative flex items-center">
            <div className="w-full rounded-[7px] border-3 border-ink bg-yellow p-4 sm:p-5 text-ink shadow-brutal-action">
              <div className="flex items-start justify-between gap-3 border-b-2 border-ink/20 pb-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-sm border border-ink bg-surface px-2 py-1 text-[10px] font-mono font-black">
                    <Star className="h-3.5 w-3.5 text-coral" />
                    مهمتك القادمة
                  </span>
                  <h2 className="mt-2 text-lg sm:text-xl font-black leading-snug">
                    {nextLearningEntry
                      ? nextLearningEntry.lesson.titleAr
                      : 'أكملت دروس هذا الصف!'}
                  </h2>
                  <p className="mt-1 text-xs font-bold text-ink/65">
                    {nextLearningEntry
                      ? `${nextLearningEntry.unit.titleAr} · ${activeGradeMeta.shortName}`
                      : 'حان وقت المراجعة وتثبيت المعلومات'}
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 rotate-3 items-center justify-center rounded-[5px] border-2 border-ink bg-coral text-3xl shadow-brutal-sm">
                  {nextLearningEntry ? '🚀' : '🏆'}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs font-black">
                  <span>رحلتك في {activeGradeMeta.shortName}</span>
                  <span className="font-mono tabular-nums">{completedInActiveGrade}/{activeGradeLessons.length}</span>
                </div>
                <div
                  className="h-3 overflow-hidden border-2 border-ink bg-white"
                  role="progressbar"
                  aria-label="التقدم في الصف النشط"
                  aria-valuenow={activeGradeProgress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-cobalt transition-all duration-500"
                    style={{ width: `${activeGradeProgress}%` }}
                  />
                </div>
              </div>

              {challengeExample ? (
                <div className="mt-4 rounded-[5px] border-2 border-ink bg-blue-mist p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-black text-ink/70">تحدّي الفهم السريع</span>
                    <button
                      type="button"
                      onClick={() => {
                        playPopSound();
                        speakEnglish(challengeExample.en);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-ink bg-surface px-2.5 py-1.5 text-[10px] font-black text-ink hover:bg-yellow"
                    >
                      <Headphones className="h-3.5 w-3.5" />
                      استمع
                    </button>
                  </div>
                  <p dir="ltr" className="mt-2 text-left text-sm sm:text-base font-mono font-black leading-7 text-ink">
                    {challengeExample.en}
                  </p>
                  {showChallengeTranslation ? (
                    <div className="mt-2 rounded-sm border border-ink/20 bg-white p-2">
                      <p className="text-[10px] font-bold text-ink/60">المعنى بالعربية</p>
                      <p className="mt-1 text-xs font-bold leading-6 text-ink">{challengeExample.ar}</p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setShowChallengeTranslation(true);
                        playPopSound();
                      }}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-sm border border-ink bg-yellow px-2.5 py-1.5 text-[10px] font-black text-ink hover:-translate-y-0.5 transition-transform"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      اكشف الترجمة
                    </button>
                  )}
                </div>
              ) : (
                <p className="mt-4 rounded-[5px] border-2 border-ink/15 bg-white/70 p-3 text-xs font-bold leading-6 text-ink/75">
                  {nextLearningEntry
                    ? 'افتح الدرس لتبدأ رحلة الفهم والتطبيق.'
                    : 'أحسنت! افتح المراجعة الذكية لتحافظ على ما تعلمته.'}
                </p>
              )}

              <button
                type="button"
                onClick={handleStartLearning}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] border-2 border-ink bg-cobalt px-4 py-2.5 text-sm font-black text-white shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:bg-cobalt-hover"
              >
                <Play className="h-4 w-4 fill-current" />
                {nextLearningEntry ? 'ابدأ الدرس الآن' : 'اذهب إلى المراجعة'}
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress snapshot */}
      <section className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4 rounded-[7px] border-2 border-ink bg-surface p-4 sm:p-5 shadow-brutal-md">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-ink bg-soft-mint">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-black">لوحة إنجازاتك</h2>
                <p className="text-[10px] font-bold text-muted-gray">كل درس تنجزه يقرّبك من هدفك</p>
              </div>
            </div>
            <span className="text-xs font-black font-mono text-cobalt">
              {completedLessonsAcrossGrades} / {totalLessonsAcrossGrades} درساً
            </span>
          </div>
          <div className="h-3 overflow-hidden border-2 border-ink bg-progress-track">
            <div
              className="h-full bg-soft-mint transition-all duration-500"
              style={{
                width: `${totalLessonsAcrossGrades ? (completedLessonsAcrossGrades / totalLessonsAcrossGrades) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-sm border-2 border-ink bg-lavender px-4 py-3 text-xs font-black">
          <Trophy className="h-5 w-5" />
          واصل التقدّم!
        </div>
      </section>

      {/* Pick a grade adventure */}
      <section className="space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-black text-cobalt">
              <Rocket className="h-4 w-4" />
              اختر مغامرتك الدراسية
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">أيّ عالم ستكتشف اليوم؟</h2>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-muted-gray">
              اختر صفك لتفتح وحداته ودروسه وأدواته الخاصة.
            </p>
          </div>
          <BrutalBadge variant="yellow">4 عوالم تعليمية</BrutalBadge>
        </div>

        <div className="grade-portal-grid grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {ORDERED_GRADES.map((gradeId, index) => {
            const meta = ALL_GRADES_META[gradeId];
            const units = getUnitsForGrade(gradeId);
            const allLessons = units.flatMap((unit) => unit.lessons);
            const completedInGrade = allLessons.filter((lesson) =>
              studentState.completedLessonIds.includes(lesson.id)
            ).length;
            const progressPct = allLessons.length
              ? Math.round((completedInGrade / allLessons.length) * 100)
              : 0;
            const visual = GRADE_VISUALS[gradeId];
            const isCurrentActive = activeGrade === gradeId;

            return (
              <article
                key={gradeId}
                className={`grade-portal-card group overflow-hidden rounded-[7px] border-3 border-ink bg-surface shadow-brutal-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hero motion-reduce:transition-none ${
                  isCurrentActive ? 'ring-2 ring-cobalt ring-offset-2' : ''
                }`}
              >
                <div className={`relative flex min-h-[122px] items-center justify-between overflow-hidden border-b-2 border-ink px-4 py-3 sm:px-6 ${visual.accentBg}`}>
                  <div className="relative z-10 space-y-1">
                    <span className="inline-flex items-center gap-1 rounded-sm border border-ink bg-white/80 px-2 py-1 text-[10px] font-mono font-black text-ink">
                      <Star className="h-3 w-3" />
                      المغامرة 0{index + 1}
                    </span>
                    <p className="text-xs font-black text-ink">{visual.tag}</p>
                    <p className="text-[10px] font-mono font-bold text-ink/60">
                      {meta.stage === 'intermediate' ? 'INTERMEDIATE' : 'PREPARATORY'}
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-4xl sm:text-5xl drop-shadow-sm" aria-hidden="true">{visual.emoji}</span>
                    <img
                      src={visual.image3d}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-20 w-20 rounded-[5px] border-2 border-ink bg-white object-cover shadow-brutal-sm transition-transform duration-200 group-hover:rotate-2 group-hover:scale-105 sm:h-24 sm:w-24"
                    />
                  </div>
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -left-8 h-28 w-28 rounded-full border-[10px] border-ink/10" />
                </div>

                <div className="flex h-full flex-col gap-4 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight">{meta.nameAr}</h3>
                      <p className="mt-1 text-xs font-mono font-bold text-cobalt" dir="ltr">{meta.nameEn}</p>
                    </div>
                    <span className="shrink-0 text-2xl" aria-hidden="true">{visual.emoji}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {meta.isMinisterial ? (
                      <BrutalBadge variant="vermilion">★ مسار وزاري</BrutalBadge>
                    ) : (
                      <BrutalBadge variant="sky">امتحان مدرسي نهائي</BrutalBadge>
                    )}
                    {isCurrentActive && <BrutalBadge variant="mint">صفك النشط</BrutalBadge>}
                    <BrutalBadge variant="white">{units.length} وحدات</BrutalBadge>
                    <BrutalBadge variant="paper">{allLessons.length} درساً</BrutalBadge>
                  </div>

                  <p className="min-h-[3.5rem] text-xs sm:text-sm font-semibold leading-7 text-muted-gray">
                    {meta.description}
                  </p>

                  <div className="mt-auto space-y-2">
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-semantic-success" /> تقدّمك في هذا الصف</span>
                      <span className="font-mono text-cobalt tabular-nums">{completedInGrade}/{allLessons.length} · {progressPct}%</span>
                    </div>
                    <div
                      className="h-3 overflow-hidden border-2 border-ink bg-progress-track"
                      role="progressbar"
                      aria-label={`التقدم في ${meta.nameAr}`}
                      aria-valuenow={progressPct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div className="h-full bg-cobalt transition-all duration-500" style={{ width: `${progressPct}%` }} />
                    </div>
                  </div>

                  <BrutalButton
                    variant={isCurrentActive ? 'yellow' : 'primary'}
                    size="md"
                    onClick={() => handleEnterGrade(gradeId)}
                    className="w-full justify-between"
                  >
                    <span>دخول منصة {meta.shortName}</span>
                    <ArrowLeft className="h-4 w-4" />
                  </BrutalButton>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Quick learning destinations */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-ink bg-coral">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black">اختر نشاطك الآن</h2>
            <p className="text-[11px] font-bold text-muted-gray">أربع طرق مختلفة لتقوية لغتك الإنكليزية</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {QUICK_ACTIVITIES.map((activity) => {
            const ActivityIcon = activity.icon;
            return (
              <button
                key={activity.id}
                type="button"
                onClick={() => handleOpenActivity(activity.id)}
                className="group flex min-h-[112px] items-start gap-3 rounded-[6px] border-2 border-ink bg-surface p-4 text-right shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal-md focus-visible:outline-3 focus-visible:outline-cobalt motion-reduce:transition-none"
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border-2 border-ink ${activity.color}`}>
                  <ActivityIcon className="h-5 w-5 text-ink" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-black text-ink">{activity.title}</span>
                  <span className="mt-1 block text-[11px] font-semibold leading-5 text-muted-gray">{activity.description}</span>
                  <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-black text-cobalt">
                    {activity.label} <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* A calm reminder */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-[6px] border-2 border-ink bg-blue-mist p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border-2 border-ink bg-yellow">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm font-black">تذكّر: خطوة صغيرة كل يوم تصنع فرقاً كبيراً</h2>
            <p className="mt-1 text-xs font-semibold leading-6 text-ink/70">
              لا تحتاج إلى إنهاء كل شيء دفعة واحدة. تعلّم جزءاً، طبّق عليه، ثم عد في وقتك لتكمل الرحلة.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleStartLearning}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border-2 border-ink bg-yellow px-4 py-2.5 text-xs font-black shadow-brutal-sm hover:-translate-y-0.5 transition-transform"
        >
          هيا نبدأ <ArrowLeft className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
};
