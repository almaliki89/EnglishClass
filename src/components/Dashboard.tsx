import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Sparkles, Trophy, CheckCircle2, ChevronLeft, ArrowRight, ArrowLeft,
  HelpCircle, Compass, FileText, Bookmark, Star, ArrowUpRight, Flame,
  Target, GraduationCap, Clock, Award, CheckCircle, ShieldCheck, Eye,
  Languages, Play, Zap, MapPin, CheckCircle as CheckCircleIcon,
  Crown, Layers, Rocket, Brain, Shuffle, Search, X, Filter, Lightbulb
} from 'lucide-react';
import { SubjectId } from '../types/subject';
import { getUnitsForGrade, getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';
import { StudentState, Unit, Lesson, EducationalGrade } from '../types';
import { PinterestPlatformFeed } from './PinterestPlatformFeed';
import { CartoonMascot } from './CartoonMascot';
import { playPopSound, playSuccessChime, playFanfare, playBoingSound } from '../utils/cartoonAudio';
import { triggerCelebration } from '../utils/storage';

interface DashboardProps {
  studentState: StudentState;
  onSelectUnit: (unit: Unit) => void;
  onSelectLesson: (lesson: Lesson) => void;
  onNavigateTab: (tab: 'exam' | 'mock' | 'literature' | 'essays' | 'verbs' | 'vocab' | 'review') => void;
  onSelectSubject?: (subjectId: SubjectId) => void;
  selectedGrade?: EducationalGrade;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  studentState,
  onSelectUnit,
  onSelectLesson,
  onNavigateTab,
  onSelectSubject,
  selectedGrade = 'sixth-preparatory',
  onSelectGrade = () => {},
}) => {
  const effectiveGrade: EducationalGrade = selectedGrade || studentState.selectedGrade || 'sixth-preparatory';
  const gradeMeta = getGradeMeta(effectiveGrade);
  const units = getUnitsForGrade(effectiveGrade);
  const isMinisterial = gradeMeta.isMinisterial;

  // View Mode: 'quest-map' (Adventure Roadmap) or 'pin-feed' (Pinterest Boards)
  const [viewMode, setViewMode] = useState<'quest-map' | 'pin-feed'>('quest-map');

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'uncompleted' | 'completed'>('all');

  // Calculate overall grade progress
  const totalLessons = units.reduce((acc, u) => acc + u.lessons.length, 0);
  const completedLessonsCount = units.reduce((acc, u) => {
    return acc + u.lessons.filter(l => studentState.completedLessonIds.includes(l.id)).length;
  }, 0);
  const overallPercentage = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  // Resume the student's actual in-progress lesson; otherwise choose the first incomplete lesson.
  const allLessonEntries = units.flatMap(unit => unit.lessons.map(lesson => ({ unit, lesson })));
  const lastVisitedLessonId =
    studentState.gradeLastVisitedLessonMap?.[effectiveGrade] || studentState.lastVisitedLessonId;
  const lastVisitedEntry = allLessonEntries.find(entry => entry.lesson.id === lastVisitedLessonId);
  const nextLearningEntry =
    (lastVisitedEntry && !studentState.completedLessonIds.includes(lastVisitedEntry.lesson.id))
      ? lastVisitedEntry
      : allLessonEntries.find(entry => !studentState.completedLessonIds.includes(entry.lesson.id)) || null;

  // Filtered Units computation
  const filteredUnits = useMemo(() => {
    return units.filter(unit => {
      // 1. Status Filter
      const completedCount = unit.lessons.filter(l => studentState.completedLessonIds.includes(l.id)).length;
      const isComplete = completedCount === unit.lessons.length && unit.lessons.length > 0;
      if (statusFilter === 'completed' && !isComplete) return false;
      if (statusFilter === 'uncompleted' && isComplete) return false;

      // 2. Search Query Filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const inUnitTitleAr = unit.titleAr.toLowerCase().includes(q);
      const inUnitTitleEn = unit.titleEn.toLowerCase().includes(q);
      const inUnitDesc = (unit.description || '').toLowerCase().includes(q);
      const inLessons = unit.lessons.some(l => 
        l.titleAr.toLowerCase().includes(q) || 
        l.titleEn.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q)
      );

      return inUnitTitleAr || inUnitTitleEn || inUnitDesc || inLessons;
    });
  }, [units, statusFilter, searchQuery, studentState.completedLessonIds]);

  return (
    <div className="learning-dashboard w-full space-y-7 pb-20">
      <section className="dashboard-continue text-right space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--ds-line)] pb-3">
          <span className="text-xs font-bold tracking-wide text-[var(--ds-ink-muted)]">مساحة تعلمك الشخصية</span>
          <span className="ui-chip">{gradeMeta.nameAr}</span>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-bold text-[var(--ds-ink-muted)]">مرحباً {studentState.name || 'بك'}،</p>
          <h1 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight text-[var(--ds-ink)]">
            {nextLearningEntry ? 'تابع رحلتك التعليمية' : 'أحسنت، أتممت دروس المنهج'}
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-[var(--ds-ink-muted)] max-w-3xl">
            {nextLearningEntry
              ? 'خطوتك التالية واضحة. أكمل الدرس الذي توقفت عنده أو ابدأ الدرس التالي في تسلسل المنهج.'
              : 'أنهيت جميع الدروس المتاحة لهذا الصف. يمكنك الآن تثبيت ما تعلمته بالمراجعة والاختبارات.'}
          </p>
        </div>

        {nextLearningEntry ? (
          <div className="dashboard-next-lesson">
            <div className="min-w-0 space-y-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[var(--ds-primary)]">
                <BookOpen className="w-4 h-4" />
                {lastVisitedEntry?.lesson.id === nextLearningEntry.lesson.id ? 'متابعة من حيث توقفت' : 'الدرس التالي المقترح'}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold leading-tight text-[var(--ds-ink)]">
                {nextLearningEntry.lesson.titleAr}
              </h2>
              <p dir="ltr" className="text-left font-semibold text-sm sm:text-base text-[var(--ds-primary)]">
                {nextLearningEntry.lesson.titleEn}
              </p>
              <p className="text-xs sm:text-sm text-[var(--ds-ink-muted)]">
                {nextLearningEntry.unit.titleAr} · الدرس {nextLearningEntry.lesson.lessonNumber}
              </p>
            </div>
            <button
              type="button"
              className="ui-button ui-button--primary shrink-0"
              onClick={() => onSelectLesson(nextLearningEntry.lesson)}
            >
              <Play className="w-4 h-4" />
              متابعة التعلم
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="dashboard-next-lesson">
            <div>
              <h2 className="font-bold text-base">المنهج مكتمل لهذا الصف</h2>
              <p className="mt-1 text-sm text-[var(--ds-ink-muted)]">انتقل إلى المراجعة لتثبيت المعلومات.</p>
            </div>
            <button type="button" className="ui-button ui-button--primary" onClick={() => onNavigateTab('review')}>
              <Brain className="w-4 h-4" />
              ابدأ المراجعة
            </button>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-[var(--ds-ink-muted)]">
            <span>تقدمك في المنهج</span>
            <span className="font-mono tabular-nums">{completedLessonsCount} / {totalLessons} · {overallPercentage}%</span>
          </div>
          <div className="dashboard-progress" role="progressbar" aria-valuenow={overallPercentage} aria-valuemin={0} aria-valuemax={100}>
            <span style={{ width: `${overallPercentage}%` }} />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3" aria-label="ملخص التقدم">
        <div className="dashboard-stat text-right">
          <span className="text-xs font-bold text-[var(--ds-ink-muted)]">الدروس المكتملة</span>
          <p className="mt-1 text-2xl font-extrabold tabular-nums">{completedLessonsCount}<span className="text-sm font-semibold text-[var(--ds-ink-muted)]"> / {totalLessons}</span></p>
        </div>
        <div className="dashboard-stat text-right">
          <span className="text-xs font-bold text-[var(--ds-ink-muted)]">نقاط الخبرة المسجلة</span>
          <p className="mt-1 text-2xl font-extrabold tabular-nums">{studentState.xp ?? 0} <span className="text-sm font-semibold text-[var(--ds-ink-muted)]">XP</span></p>
        </div>
        <div className="dashboard-stat text-right">
          <span className="text-xs font-bold text-[var(--ds-ink-muted)]">سلسلة النشاط</span>
          <p className="mt-1 text-2xl font-extrabold tabular-nums">{studentState.streakDays ?? 0} <span className="text-sm font-semibold text-[var(--ds-ink-muted)]">يوم</span></p>
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-2" aria-label="اختصارات التعلم">
        <span className="ml-1 text-xs font-bold text-[var(--ds-ink-muted)]">اختصارات:</span>
        <button type="button" className="dashboard-shortcut" onClick={() => onNavigateTab('review')}><Brain className="w-4 h-4 text-[var(--ds-primary)]" /> المراجعة الذكية</button>
        <button type="button" className="dashboard-shortcut" onClick={() => onNavigateTab('mock')}><Trophy className="w-4 h-4" /> محاكي الامتحان</button>
        <button type="button" className="dashboard-shortcut" onClick={() => onNavigateTab('verbs')}><Zap className="w-4 h-4" /> مختبر الأفعال</button>
      </section>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ds-ink)]">خريطة المنهج الدراسي</h2>
          <p className="text-sm text-[var(--ds-ink-muted)]">استكشف وحدات {gradeMeta.nameAr} واختر أي درس مباشرة.</p>
        </div>
        <div className="flex items-center gap-1 p-1 bg-paper border-2 border-ink shadow-brutal-sm rounded-[4px]">
          <button
            type="button"
            aria-pressed={viewMode === 'quest-map'}
            onClick={() => setViewMode('quest-map')}
            className={`px-3 py-2 text-xs font-bold border rounded-[4px] transition-colors cursor-pointer ${viewMode === 'quest-map' ? 'bg-cobalt text-surface border-ink shadow-brutal-xs' : 'border-transparent text-muted-gray hover:text-ink'}`}
          >خريطة الوحدات</button>
          <button
            type="button"
            aria-pressed={viewMode === 'pin-feed'}
            onClick={() => setViewMode('pin-feed')}
            className={`px-3 py-2 text-xs font-bold border rounded-[4px] transition-colors cursor-pointer ${viewMode === 'pin-feed' ? 'bg-cobalt text-surface border-ink shadow-brutal-xs' : 'border-transparent text-muted-gray hover:text-ink'}`}
          >ملخصات مرئية</button>
        </div>
      </div>

      {viewMode === 'quest-map' ? (
        /* ADVENTURE QUEST MAP */
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b-2 border-ink pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-ink flex items-center gap-2">
                <Compass className="w-5 h-5 text-cobalt" />
                <span>محطات المنهج الدراسي • {gradeMeta.nameAr}</span>
              </h2>
              <p className="text-xs text-ink/70 font-medium">
                تنقل بين الوحدات الدراسية، أتقن الدروس، وافتح المحطة النهائية
              </p>
            </div>
            
            <div className="flex items-center gap-2 font-mono">
              <span className="text-xs font-bold text-ink">
                إجمالي الوحدات: <span className="bg-yellow px-1.5 py-0.2 border border-ink font-black rounded-xs">{units.length} وحدات</span>
              </span>
              {completedLessonsCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    playFanfare();
                    triggerCelebration();
                  }}
                  className="px-2.5 py-1 bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all cursor-pointer flex items-center gap-1 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none rounded-[4px]"
                  title="احتفل بتقدمك الدراسي!"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cobalt" />
                  <span>احتفل بإنجازك 🎉</span>
                </button>
              )}
            </div>
          </div>

          {/* Search & Fast Filters Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface p-3 sm:p-4 border-3 border-ink shadow-brutal-callout">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-ink/60 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في أسماء الوحدات أو الدروس أو القواعد..."
                className="w-full pr-9 pl-8 py-2 bg-paper border-2 border-ink text-xs font-bold text-ink placeholder:text-ink/50 focus:outline-none focus:bg-surface transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="مسح البحث"
                  onClick={() => setSearchQuery('')}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1 text-ink hover:text-semantic-error cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 flex-wrap">
              <span className="text-[11px] font-mono font-bold text-ink hidden lg:inline-block">FILTER:</span>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setStatusFilter('all');
                }}
                className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
                  statusFilter === 'all'
                    ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                    : 'bg-paper text-ink border-ink hover:bg-surface'
                }`}
              >
                الكل ({units.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setStatusFilter('uncompleted');
                }}
                className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
                  statusFilter === 'uncompleted'
                    ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                    : 'bg-paper text-ink border-ink hover:bg-surface'
                }`}
              >
                قيد الإنجاز
              </button>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setStatusFilter('completed');
                }}
                className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
                  statusFilter === 'completed'
                    ? 'bg-yellow text-ink border-ink shadow-brutal-sm'
                    : 'bg-paper text-ink border-ink hover:bg-surface'
                }`}
              >
                المكتملة ✅
              </button>
            </div>
          </div>

          {/* Unit Roadmap Cards or Empty State */}
          {filteredUnits.length === 0 ? (
            <div className="p-10 bg-surface border-3 border-ink shadow-brutal-action text-center space-y-4">
              <div className="flex justify-center">
                <CartoonMascot mood="puzzled" size="md" speechText="لم أعثر على أي درس يطابق هذا البحث! جرب كلمة بحث أخرى يا بطل." />
              </div>
              <h3 className="text-lg font-black text-ink">
                لا توجد نتائج مطابقة لبحثك
              </h3>
              <p className="text-xs text-ink/70 max-w-md mx-auto font-medium">
                تأكد من كتابة الكلمة بشكل صحيح، أو قم بإعادة ضبط معايير التصفية للرجوع إلى كامل قائمة الوحدات.
              </p>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setSearchQuery('');
                  setStatusFilter('all');
                }}
                className="px-4 py-2 bg-cobalt text-surface font-black text-xs border-2 border-ink shadow-brutal-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                إعادة ضبط البحث والتصفية
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredUnits.map((unit) => {
                const completedInUnit = unit.lessons.filter(l => studentState.completedLessonIds.includes(l.id)).length;
                const unitPercentage = unit.lessons.length > 0 ? Math.round((completedInUnit / unit.lessons.length) * 100) : 0;
                const isUnitCompleted = completedInUnit === unit.lessons.length && unit.lessons.length > 0;
                const estimatedMinutes = unit.lessons.length * 15;

                return (
                  <div 
                    key={unit.id}
                    className="p-6 bg-surface border-3 border-ink shadow-brutal-action hover:shadow-brutal-modal hover:-translate-y-0.5 space-y-4 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Unit Header Badge */}
                      <div className="flex items-center justify-between border-b-2 border-ink pb-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="w-9 h-9 bg-cobalt text-surface font-black font-mono text-sm flex items-center justify-center border-2 border-ink shadow-brutal-sm">
                            0{unit.number}
                          </span>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-muted-gray block">
                              الوحدة {unit.number} · المنهج الدراسي
                            </span>
                            <h3 className="text-base sm:text-lg font-black text-ink">
                              {unit.titleAr}
                            </h3>
                          </div>
                        </div>

                        {isUnitCompleted ? (
                          <span className="px-2 py-0.5 bg-yellow text-ink border-2 border-ink shadow-brutal-sm text-xs font-black flex items-center gap-1 rounded-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-ink" />
                            <span>مكتملة 100%</span>
                          </span>
                        ) : (
                          <div className="flex items-center gap-1.5 font-mono">
                            <span className="text-xs font-bold text-ink/70">
                              {completedInUnit}/{unit.lessons.length}
                            </span>
                            <span className="text-[10px] font-black px-1.5 py-0.2 bg-paper border border-ink text-ink rounded-xs">
                              {unitPercentage}%
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-mono text-ink/70">
                        <Clock className="w-3.5 h-3.5 text-ink" />
                        <span>المدة التقديرية: ~{estimatedMinutes} دقيقة · {unit.lessons.length} دروس</span>
                      </div>

                      <p className="text-xs text-ink/80 leading-relaxed line-clamp-2 font-medium">
                        {unit.description || unit.titleEn}
                      </p>

                      {/* Progress Bar (Brutalist style) */}
                      <div className="w-full bg-paper border-2 border-ink h-3 overflow-hidden rounded-xs">
                        <div 
                          className="h-full bg-cobalt transition-all duration-500"
                          style={{ width: `${unitPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Lessons Pills Grid */}
                    <div className="space-y-2 pt-2 border-t-2 border-ink">
                      <span className="text-[11px] font-mono font-bold text-ink/80 block">
                        دروس الوحدة:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {unit.lessons.map((lesson) => {
                          const isDone = studentState.completedLessonIds.includes(lesson.id);
                          return (
                            <button
                              key={lesson.id}
                              type="button"
                              onClick={() => {
                                playPopSound();
                                onSelectLesson(lesson);
                              }}
                              className={`px-2.5 py-1 text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 border-2 rounded-xs ${
                                isDone
                                  ? 'bg-yellow text-ink border-ink shadow-brutal-sm'
                                  : 'bg-surface hover:bg-paper text-ink border-ink shadow-brutal-sm active:shadow-none'
                              }`}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-3 h-3 text-ink" />
                              ) : (
                                <Play className="w-3 h-3 text-cobalt" />
                              )}
                              <span className="truncate max-w-[140px]">{lesson.titleAr}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Link to Unit Explorer */}
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-ink/20">
                      <button
                        type="button"
                        onClick={() => {
                          playPopSound();
                          onSelectUnit(unit);
                        }}
                        className="text-cobalt hover:text-ink font-black flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>استكشف الوحدة بالكامل</span>
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-[10px] text-ink/60 font-mono font-bold">
                        {unit.academicYear || '2024–2026'}
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* Final Boss Arena Card */}
          <div className="ui-card p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-2 text-right">
              <span className="ui-chip text-xs font-mono">
                المحطة الختامية · الاختبار الشامل
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-ink">
                الامتحان الوزاري الشامل (100 درجة)
              </h3>
              <p className="text-xs sm:text-sm text-ink/90 max-w-xl font-medium">
                دفتر امتحاني متكامل يحاكي نمط الامتحانات العامة في العراق: القطعة الخارجية، القواعد، المفردات، الأدب، والإنشاء مع تصحيح فوري لجميع الأسئلة.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                playFanfare();
                onNavigateTab('mock');
              }}
              className="ui-button ui-button--primary shrink-0"
            >
              <Trophy className="w-5 h-5 text-yellow" />
              <span>دخول ساحة الامتحان الآن</span>
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* PINTEREST IDEA FEED */
        <PinterestPlatformFeed
          selectedGrade={effectiveGrade}
          onSelectGrade={onSelectGrade}
          onSelectLesson={onSelectLesson}
          onNavigateTab={onNavigateTab}
          studentState={studentState}
        />
      )}

    </div>
  );
};
