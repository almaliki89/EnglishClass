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
        <div className="flex items-center gap-1 p-1 bg-[var(--ds-surface-muted)] border border-[var(--ds-line)] rounded-md">
          <button
            type="button"
            aria-pressed={viewMode === 'quest-map'}
            onClick={() => setViewMode('quest-map')}
            className={`px-3 py-2 text-xs font-bold border rounded transition-colors ${viewMode === 'quest-map' ? 'bg-white text-[var(--ds-primary)] border-[var(--ds-line)] shadow-sm' : 'border-transparent text-[var(--ds-ink-muted)] hover:text-[var(--ds-ink)]'}`}
          >خريطة الوحدات</button>
          <button
            type="button"
            aria-pressed={viewMode === 'pin-feed'}
            onClick={() => setViewMode('pin-feed')}
            className={`px-3 py-2 text-xs font-bold border rounded transition-colors ${viewMode === 'pin-feed' ? 'bg-white text-[var(--ds-primary)] border-[var(--ds-line)] shadow-sm' : 'border-transparent text-[var(--ds-ink-muted)] hover:text-[var(--ds-ink)]'}`}
          >ملخصات مرئية</button>
        </div>
      </div>

      {viewMode === 'quest-map' ? (
        /* ADVENTURE QUEST MAP */
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b-2 border-[#202124] pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#202124] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#405DE6]" />
                <span>محطات المنهج الدراسي • {gradeMeta.nameAr}</span>
              </h2>
              <p className="text-xs text-[#202124]/70 font-medium">
                تنقل بين الوحدات الدراسية، أتقن الدروس، وافتح المحطة النهائية
              </p>
            </div>
            
            <div className="flex items-center gap-2 font-mono">
              <span className="text-xs font-bold text-[#202124]">
                إجمالي الوحدات: <span className="bg-[#F3E6A5] px-1.5 py-0.2 border border-[#202124] font-black">{units.length} UNITS</span>
              </span>
              {completedLessonsCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    playFanfare();
                    triggerCelebration();
                  }}
                  className="px-2.5 py-1 bg-[#F3E6A5] hover:bg-[#d8ee43] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black transition-all cursor-pointer flex items-center gap-1 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                  title="احتفل بتقدمك الدراسي!"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#405DE6]" />
                  <span>احتفل بإنجازك 🎉</span>
                </button>
              )}
            </div>
          </div>

          {/* Search & Fast Filters Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 border-3 border-[#202124] shadow-[3px_3px_0px_#202124]">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#202124]/60 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في أسماء الوحدات أو الدروس أو القواعد..."
                className="w-full pr-9 pl-8 py-2 bg-[#F7F5EF] border-2 border-[#202124] text-xs font-bold text-[#202124] placeholder:text-[#202124]/50 focus:outline-none focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1 text-[#202124] hover:text-[#F2A18E] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0">
              <span className="text-[11px] font-mono font-bold text-[#202124] hidden lg:inline-block">FILTER:</span>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setStatusFilter('all');
                }}
                className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
                  statusFilter === 'all'
                    ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
                    : 'bg-[#F7F5EF] text-[#202124] border-[#202124] hover:bg-white'
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
                    ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
                    : 'bg-[#F7F5EF] text-[#202124] border-[#202124] hover:bg-white'
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
                    ? 'bg-[#F3E6A5] text-[#202124] border-[#202124] shadow-[2px_2px_0px_#202124]'
                    : 'bg-[#F7F5EF] text-[#202124] border-[#202124] hover:bg-white'
                }`}
              >
                المكتملة ✅
              </button>
            </div>
          </div>

          {/* Unit Roadmap Cards or Empty State */}
          {filteredUnits.length === 0 ? (
            <div className="p-10 bg-white border-3 border-[#202124] shadow-[4px_4px_0px_#202124] text-center space-y-4">
              <div className="flex justify-center">
                <CartoonMascot mood="puzzled" size="md" speechText="لم أعثر على أي درس يطابق هذا البحث! جرب كلمة بحث أخرى يا بطل." />
              </div>
              <h3 className="text-lg font-black text-[#202124]">
                لا توجد نتائج مطابقة لبحثك
              </h3>
              <p className="text-xs text-[#202124]/70 max-w-md mx-auto font-medium">
                تأكد من كتابة الكلمة بشكل صحيح، أو قم بإعادة ضبط معايير التصفية للرجوع إلى كامل قائمة الوحدات.
              </p>
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setSearchQuery('');
                  setStatusFilter('all');
                }}
                className="px-4 py-2 bg-[#405DE6] text-white font-black text-xs border-2 border-[#202124] shadow-[2px_2px_0px_#202124] hover:-translate-y-0.5 transition-all cursor-pointer"
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
                    className="p-6 bg-white border-3 border-[#202124] shadow-[4px_4px_0px_#202124] hover:shadow-[6px_6px_0px_#202124] hover:-translate-y-0.5 space-y-4 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Unit Header Badge */}
                      <div className="flex items-center justify-between border-b-2 border-[#202124] pb-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="w-9 h-9 bg-[#405DE6] text-white font-black font-mono text-sm flex items-center justify-center border-2 border-[#202124] shadow-[2px_2px_0px_#202124]">
                            0{unit.number}
                          </span>
                          <div>
                            <span className="text-[10px] font-mono font-black text-[#F2A18E] block uppercase">
                              UNIT {unit.number} // المنهج الرسمي
                            </span>
                            <h3 className="text-base sm:text-lg font-black text-[#202124]">
                              {unit.titleAr}
                            </h3>
                          </div>
                        </div>

                        {isUnitCompleted ? (
                          <span className="px-2 py-0.5 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-black flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#202124]" />
                            <span>مكتملة 100%</span>
                          </span>
                        ) : (
                          <div className="flex items-center gap-1.5 font-mono">
                            <span className="text-xs font-bold text-[#202124]/70">
                              {completedInUnit}/{unit.lessons.length}
                            </span>
                            <span className="text-[10px] font-black px-1.5 py-0.2 bg-[#F7F5EF] border border-[#202124] text-[#202124]">
                              {unitPercentage}%
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#202124]/70">
                        <Clock className="w-3.5 h-3.5 text-[#202124]" />
                        <span>ESTIMATED: ~{estimatedMinutes} MIN // {unit.lessons.length} LESSONS</span>
                      </div>

                      <p className="text-xs text-[#202124]/80 leading-relaxed line-clamp-2 font-medium">
                        {unit.description || unit.titleEn}
                      </p>

                      {/* Progress Bar (Brutalist style) */}
                      <div className="w-full bg-[#F7F5EF] border-2 border-[#202124] h-3 overflow-hidden">
                        <div 
                          className="h-full bg-[#405DE6] transition-all duration-500"
                          style={{ width: `${unitPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Lessons Pills Grid */}
                    <div className="space-y-2 pt-2 border-t-2 border-[#202124]">
                      <span className="text-[11px] font-mono font-bold text-[#202124]/80 block">
                        LESSONS // دروس الوحدة المعتمدة:
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
                              className={`px-2.5 py-1 text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 border-2 ${
                                isDone
                                  ? 'bg-[#F3E6A5] text-[#202124] border-[#202124] shadow-[2px_2px_0px_#202124]'
                                  : 'bg-white hover:bg-[#F7F5EF] text-[#202124] border-[#202124] shadow-[2px_2px_0px_#202124] active:shadow-none'
                              }`}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-3 h-3 text-[#202124]" />
                              ) : (
                                <Play className="w-3 h-3 text-[#405DE6]" />
                              )}
                              <span className="truncate max-w-[140px]">{lesson.titleAr}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Link to Unit Explorer */}
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-[#202124]/20">
                      <button
                        type="button"
                        onClick={() => {
                          playPopSound();
                          onSelectUnit(unit);
                        }}
                        className="text-[#405DE6] hover:text-[#202124] font-black flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>استكشف الوحدة بالكامل</span>
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-[10px] text-[#202124]/60 font-mono font-bold">
                        {unit.academicYear || '2024–2026'}
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* Final Boss Arena Card */}
          <div className="p-6 sm:p-8 bg-[#F3E6A5] text-[#202124] border-4 border-[#202124] shadow-[8px_8px_0px_#202124] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-right">
              <span className="px-2.5 py-1 bg-[#202124] text-[#F3E6A5] text-xs font-mono font-black inline-block">
                FINAL BOSS ARENA // المحطة الختامية
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#202124]">
                الامتحان الوزاري الشامل (100 درجة)
              </h3>
              <p className="text-xs sm:text-sm text-[#202124]/90 max-w-xl font-medium">
                دفتر امتحاني متكامل يطابق المواصفات الوزارية لوزارة التربية: القطعة الخارجية، القواعد، المفردات، الأدب، والإنشاء مع تصحيح فوري لجميع الأسئلة.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                playFanfare();
                onNavigateTab('mock');
              }}
              className="px-6 py-4 bg-[#202124] hover:bg-[#405DE6] text-white font-black text-sm sm:text-base border-3 border-[#202124] shadow-[4px_4px_0px_#F2A18E] flex items-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 shrink-0"
            >
              <Trophy className="w-5 h-5 text-[#F3E6A5]" />
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
