import React, { useState, useMemo } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronLeft, ChevronDown, ChevronUp,
  Sparkles, Search, Filter, Layers, FileText, Compass,
  ArrowRight, Award, Zap, CheckCircle, Clock, BookMarked,
  Brain, GraduationCap, LayoutGrid, ListTree, Flame, Check
} from 'lucide-react';
import { Unit, Lesson, StudentState } from '../types';
import { CURRICULUM_UNITS } from '../data/curriculumData';
import { getEssaysForGrade, getGradeMeta } from '../data/gradeContentResolver';

interface CurriculumUnitsSectionProps {
  studentState: StudentState;
  onSelectUnit: (unit: Unit) => void;
  onSelectLesson: (lesson: Lesson) => void;
  units?: Unit[];
}

// Unit Metadata for enriched ministerial cards
interface UnitThematicMeta {
  color: {
    badge: string;
    bgHover: string;
    border: string;
    progress: string;
    accent: string;
    lightBg: string;
  };
  ministerialWeight: string;
  keyGrammar: string[];
  readingPassages: string[];
  term: 1 | 2;
  iconName: string;
}

const UNIT_META: Record<number, UnitThematicMeta> = {
  1: {
    color: {
      badge: 'bg-cobalt text-surface',
      bgHover: 'hover:border-cobalt',
      border: 'border-soft-border',
      progress: 'bg-cobalt',
      accent: 'text-cobalt',
      lightBg: 'bg-blue-mist/50',
    },
    ministerialWeight: '25-30 درجة',
    keyGrammar: ['While / As / When / And', 'Used to + but now', 'Phrasal Verbs', '-ed / -ing', 'Quantifiers'],
    readingPassages: ['زيد طارق (Zaid Tariq & Dolphins)', 'مصطفى أحمد ولطيفة (Mustafa Ahmed)'],
    term: 1,
    iconName: 'Health & Foundation',
  },
  2: {
    color: {
      badge: 'bg-cobalt text-surface',
      bgHover: 'hover:border-cobalt',
      border: 'border-soft-border',
      progress: 'bg-cobalt',
      accent: 'text-cobalt',
      lightBg: 'bg-blue-mist/50',
    },
    ministerialWeight: '20-25 درجة',
    keyGrammar: ['Must / Have to / Need to', 'Offers / Requests / Advice', 'Expectation (should)', 'Causative (have/get/make)'],
    readingPassages: ['واجبات ضباط الشرطة (Police Officers)', 'كاشف السرعة والرادار (Radar Speed Gun)'],
    term: 1,
    iconName: 'Law & Security',
  },
  3: {
    color: {
      badge: 'bg-semantic-success text-surface',
      bgHover: 'hover:border-semantic-success',
      border: 'border-soft-border',
      progress: 'bg-semantic-success',
      accent: 'text-semantic-success',
      lightBg: 'bg-soft-mint/50',
    },
    ministerialWeight: '25-30 درجة',
    keyGrammar: ['حالات If الشرطية (0, 1st, 2nd, 3rd)', 'الندم (Regrets: I wish / If only)', 'الكلام المنقول (Reported Questions)', 'التعاريف والمهن'],
    readingPassages: ['مترجمة المؤتمرات سميرة المحمود (Conference Interpreter)'],
    term: 1,
    iconName: 'Careers & Conditions',
  },
  4: {
    color: {
      badge: 'bg-yellow text-ink',
      bgHover: 'hover:border-ink',
      border: 'border-soft-border',
      progress: 'bg-yellow',
      accent: 'text-ink',
      lightBg: 'bg-yellow/30',
    },
    ministerialWeight: '10-15 درجة (تركيز نصف السنة)',
    keyGrammar: ['المراجعة الشاملة لقواعد الفصل الأول', 'تفكيك الأفخاخ الامتحانية المشتركة'],
    readingPassages: ['قصة إبراهيم وصناعة قوارب الصيد (Ibrahim)'],
    term: 1,
    iconName: 'Midterm Revision',
  },
  5: {
    color: {
      badge: 'bg-soft-mint text-ink',
      bgHover: 'hover:border-semantic-success',
      border: 'border-soft-border',
      progress: 'bg-semantic-success',
      accent: 'text-semantic-success',
      lightBg: 'bg-soft-mint/50',
    },
    ministerialWeight: '25-30 درجة',
    keyGrammar: ['المضارع التام البسيط والمستمر', 'الماضي التام (Past Perfect)', 'عبارات الوصل (Defining & Non-defining)'],
    readingPassages: ['أهمية العطل والإجازات (Why Holidays Are Important)'],
    term: 2,
    iconName: 'Travel & Perfect Tenses',
  },
  6: {
    color: {
      badge: 'bg-lavender text-ink',
      bgHover: 'hover:border-ink',
      border: 'border-soft-border',
      progress: 'bg-cobalt',
      accent: 'text-cobalt',
      lightBg: 'bg-lavender/40',
    },
    ministerialWeight: '20-25 درجة',
    keyGrammar: ['المبني للمجهول في جميع الأزمنة (Passive Voice)', 'المصطلحات المصرفية والبنكية'],
    readingPassages: ['تاريخ المال والمصارف (Making Money / Banker’s Job)'],
    term: 2,
    iconName: 'Banking & Passive',
  },
  7: {
    color: {
      badge: 'bg-blue-mist text-ink',
      bgHover: 'hover:border-cobalt',
      border: 'border-soft-border',
      progress: 'bg-cobalt',
      accent: 'text-cobalt',
      lightBg: 'bg-blue-mist/50',
    },
    ministerialWeight: '15-20 درجة',
    keyGrammar: ['صيغ المستقبل الخمس (5 Future Forms)', 'المستقبل في الماضي (Future in the Past)'],
    readingPassages: ['استخدام المكتبة الرقمية وتطوير المهارات (Using the Library)'],
    term: 2,
    iconName: 'Future & Technology',
  },
  8: {
    color: {
      badge: 'bg-coral text-ink',
      bgHover: 'hover:border-ink',
      border: 'border-soft-border',
      progress: 'bg-coral',
      accent: 'text-semantic-error',
      lightBg: 'bg-coral/30',
    },
    ministerialWeight: '10-15 درجة',
    keyGrammar: ['مصادر الطاقة والبيئة', 'الصياغة والاشتقاقات المتقدمة', 'المراجعة النهائية'],
    readingPassages: ['مصادر الطاقة النظيفة والتلوث البيئي'],
    term: 2,
    iconName: 'Renewable Energy',
  },
};

export const CurriculumUnitsSection: React.FC<CurriculumUnitsSectionProps> = ({
  studentState,
  onSelectUnit,
  onSelectLesson,
  units = CURRICULUM_UNITS,
}) => {
  const [filterTerm, setFilterTerm] = useState<'all' | 'term1' | 'term2' | 'in_progress' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'roadmap'>('cards');
  const [expandedUnitIds, setExpandedUnitIds] = useState<Record<number, boolean>>({});

  // Toggle drawer for a unit's lessons
  const toggleUnitLessons = (unitId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedUnitIds(prev => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  // Filtered units computation
  const filteredUnits = useMemo(() => {
    return units.filter(unit => {
      const meta = UNIT_META[unit.number] || {
        color: {
          badge: 'bg-cobalt text-surface',
          bgHover: 'hover:border-cobalt',
          border: 'border-soft-border',
          progress: 'bg-cobalt',
          accent: 'text-cobalt',
          lightBg: 'bg-blue-mist/50',
        },
        ministerialWeight: '15-20 درجة',
        keyGrammar: [unit.lessons[0]?.titleAr || 'قواعد الوحدة'],
        readingPassages: [unit.description],
        term: unit.number <= 3 ? 1 : 2,
        iconName: 'Unit ' + unit.number,
      };
      const completedCount = unit.lessons.filter(l => studentState.completedLessonIds.includes(l.id)).length;
      const isCompleted = unit.lessons.length > 0 && completedCount === unit.lessons.length;
      const isInProgress = completedCount > 0 && completedCount < unit.lessons.length;

      // Filter by term
      if (filterTerm === 'term1' && meta?.term !== 1) return false;
      if (filterTerm === 'term2' && meta?.term !== 2) return false;
      if (filterTerm === 'completed' && !isCompleted) return false;
      if (filterTerm === 'in_progress' && !isInProgress) return false;

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = unit.titleAr.toLowerCase().includes(query) || unit.titleEn.toLowerCase().includes(query);
        const matchesDesc = unit.description.toLowerCase().includes(query);
        const matchesGrammar = meta?.keyGrammar.some(g => g.toLowerCase().includes(query));
        const matchesReading = meta?.readingPassages.some(r => r.toLowerCase().includes(query));
        const matchesLessons = unit.lessons.some(l => l.titleAr.toLowerCase().includes(query) || l.titleEn.toLowerCase().includes(query));

        return matchesTitle || matchesDesc || matchesGrammar || matchesReading || matchesLessons;
      }

      return true;
    });
  }, [filterTerm, searchQuery, studentState.completedLessonIds, units]);

  // Overall statistics
  const totalUnits = units.length;
  const allLessons = units.flatMap(u => u.lessons);
  const totalCompletedLessons = studentState.completedLessonIds.length;
  const overallPercentage = allLessons.length > 0 ? Math.round((totalCompletedLessons / allLessons.length) * 100) : 0;

  return (
    <section id="curriculum-units-section" className="space-y-6 pt-2">
      
      {/* 1. Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface p-5 sm:p-6 border-3 border-ink shadow-brutal-action">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 bg-cobalt text-surface border-2 border-ink shadow-brutal-sm flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <div className="font-mono text-[10px] font-black uppercase text-cobalt tracking-widest">
                SYLLABUS MODULES // الوحدات الدراسية
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
                الوحدات الدراسية المقررة (Curriculum Units)
              </h2>
              <p className="text-xs sm:text-sm text-ink/70 font-medium mt-0.5">
                منهاج الأستاذ مصطفى تركي 2026 • مرتبة حسب الأهمية الامتحانية مع خطة الإتقان
              </p>
            </div>
          </div>
        </div>

        {/* View Mode & Quick Stats Pill */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto font-mono">
          {/* Progress Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-paper border-2 border-ink shadow-brutal-sm text-xs font-bold text-ink">
            <CheckCircle2 className="w-4 h-4 text-cobalt" />
            <span>{totalCompletedLessons}/{allLessons.length} LESSONS ({overallPercentage}%)</span>
          </div>

          {/* View Toggle */}
          <div className="flex items-center p-1 bg-paper border-2 border-ink">
            <button
              type="button"
              id="units-view-cards-btn"
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black transition-all cursor-pointer border ${
                viewMode === 'cards'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
              title="عرض شبكة البطاقات"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>بطاقات</span>
            </button>
            <button
              type="button"
              id="units-view-roadmap-btn"
              onClick={() => setViewMode('roadmap')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black transition-all cursor-pointer border ${
                viewMode === 'roadmap'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
              title="عرض المسار التتابعي (Roadmap)"
            >
              <ListTree className="w-3.5 h-3.5" />
              <span>المسار</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Search & Interactive Filter Pills */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Term Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', label: 'جميع الوحدات' },
            { id: 'term1', label: 'الفصل الأول' },
            { id: 'term2', label: 'الفصل الثاني' },
            { id: 'in_progress', label: 'قيد المتابعة' },
            { id: 'completed', label: 'المكتملة ✅' },
          ].map((tab) => {
            const isActive = filterTerm === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                id={`filter-unit-${tab.id}-btn`}
                onClick={() => setFilterTerm(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-black whitespace-nowrap transition-all cursor-pointer border-2 ${
                  isActive
                    ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                    : 'bg-surface text-ink border-ink hover:bg-paper'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-ink/50 absolute right-3.5 top-3" />
          <input
            id="search-units-input"
            type="text"
            placeholder="ابحث عن وحدة، قاعدة، أو قطعة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10 pl-4 py-2 bg-surface border-2 border-ink text-xs font-bold text-ink placeholder:text-ink/50 focus:outline-none focus:bg-surface shadow-brutal-sm transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute left-3 top-2.5 text-xs text-ink hover:text-semantic-error font-black cursor-pointer"
            >
              مسح
            </button>
          )}
        </div>
      </div>

      {/* 3. Empty State if no units match */}
      {filteredUnits.length === 0 && (
        <div className="p-12 text-center bg-surface rounded-[6px] border-3 border-ink shadow-brutal-action space-y-3">
          <BookMarked className="w-12 h-12 text-muted-gray mx-auto" />
          <h3 className="text-base font-bold text-ink">لم يتم العثور على وحدات مطابقة للبحث</h3>
          <p className="text-xs text-muted-gray max-w-md mx-auto">
            جرب البحث بكلمات عامة مثل: While, Passive, Used to, أو اختر تبويب "جميع الوحدات".
          </p>
          <button
            type="button"
            onClick={() => { setFilterTerm('all'); setSearchQuery(''); }}
            className="px-4 py-2 bg-cobalt hover:bg-cobalt-hover text-surface font-black text-xs rounded-[4px] border-2 border-ink shadow-brutal-sm transition-colors cursor-pointer"
          >
            إعادة تعيين البحث
          </button>
        </div>
      )}

      {/* 4. MODE A: CARDS GRID VIEW */}
      {viewMode === 'cards' && filteredUnits.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {filteredUnits.map((unit) => {
            const meta = UNIT_META[unit.number] || UNIT_META[1];
            const completedInUnit = unit.lessons.filter(l => 
              studentState.completedLessonIds.includes(l.id)
            ).length;
            const progressRatio = unit.lessons.length > 0 
              ? Math.round((completedInUnit / unit.lessons.length) * 100) 
              : 0;
            const isUnitFullyCompleted = progressRatio === 100;
            const currentGrade = studentState.selectedGrade || 'sixth-preparatory';
            const allEssays = getEssaysForGrade(currentGrade);
            const unitEssays = allEssays.filter(e => e.unitId === unit.number);
            const isExpanded = !!expandedUnitIds[unit.number];

            // Next uncompleted lesson
            const nextLesson = unit.lessons.find(l => !studentState.completedLessonIds.includes(l.id)) || unit.lessons[0];

            // Derive key grammar and reading topics dynamically for this grade
            const isSixth = currentGrade === 'sixth-preparatory';
            const grammarLessons = unit.lessons.filter(l => l.category === 'grammar' || l.grammarRuleFormula);
            const vocabLessons = unit.lessons.filter(l => l.category === 'vocabulary' || l.category === 'spelling');
            const displayKeyGrammar = (isSixth && meta.keyGrammar && meta.keyGrammar.length > 0)
              ? meta.keyGrammar
              : (grammarLessons.length > 0 ? grammarLessons.map(l => l.titleEn || l.titleAr).slice(0, 4) : unit.lessons.slice(0, 3).map(l => l.titleEn || l.titleAr));
            const displayReadingPassages = (isSixth && meta.readingPassages && meta.readingPassages.length > 0)
              ? meta.readingPassages
              : (vocabLessons.length > 0 ? vocabLessons.map(l => l.titleAr).slice(0, 2) : []);

            return (
              <div
                key={unit.id}
                id={`unit-card-${unit.id}`}
                className="bg-surface border-3 border-ink shadow-brutal-action hover:shadow-brutal-modal hover:-translate-y-0.5 transition-all flex flex-col justify-between overflow-hidden relative group min-w-0"
              >
                
                {/* Top Banner Stripe with Term & Weight */}
                <div className="p-5 sm:p-6 pb-4 border-b-2 border-ink">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    
                    {/* Unit Pill Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-cobalt text-surface border-2 border-ink shadow-brutal-sm font-black font-mono text-xs">
                        UNIT {unit.number}
                      </span>
                      <span className="text-[11px] font-bold text-ink bg-paper px-2 py-0.5 border border-ink font-mono">
                        TERM {meta.term === 1 ? '1' : '2'}
                      </span>
                      {isUnitFullyCompleted && (
                        <span className="flex items-center gap-1 text-[11px] font-black text-ink bg-yellow px-2 py-0.5 border-2 border-ink">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>100% DONE</span>
                        </span>
                      )}
                    </div>

                    {/* Weight Badge */}
                    <div className="flex items-center gap-1 px-2.5 py-1 bg-yellow border-2 border-ink shadow-brutal-sm text-ink text-[11px] font-black font-mono shrink-0">
                      <Sparkles className="w-3 h-3 text-cobalt" />
                      <span>{meta.ministerialWeight}</span>
                    </div>

                  </div>

                  {/* Titles */}
                  <button
                    type="button"
                    onClick={() => onSelectUnit(unit)}
                    className="block w-full text-right font-black text-ink text-lg sm:text-xl group-hover:text-cobalt transition-colors cursor-pointer leading-snug"
                  >
                    {unit.titleAr}
                  </button>
                  
                  <p dir="ltr" className="text-xs text-muted-gray font-mono mt-1 text-left font-bold bidi-en break-words">
                    {unit.titleEn}
                  </p>

                  <p className="text-xs text-muted-gray mt-2.5 line-clamp-2 leading-relaxed font-medium">
                    {unit.description}
                  </p>
                </div>

                {/* Thematic Pillars (Grammar, Reading, Essay) */}
                <div className="p-5 sm:p-6 py-4 space-y-3 bg-paper">
                  
                  {/* Grammar Highlights */}
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-gray block mb-1.5">
                      أبرز القواعد والموضوعات:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {displayKeyGrammar.map((rule, idx) => (
                        <span
                          key={idx}
                          dir="ltr"
                          className="px-2.5 py-1 rounded-[4px] bg-surface border border-ink text-ink text-[11px] font-bold text-left bidi-en"
                        >
                          {rule}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Reading Passages */}
                  {displayReadingPassages.length > 0 && (
                    <div className="pt-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-gray block mb-1">
                        قطع الكتاب والاستيعاب:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {displayReadingPassages.map((story, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-[4px] bg-blue-mist border border-ink text-ink text-[11px] font-bold"
                          >
                            📖 {story}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Essay Indicator */}
                  {unitEssays.length > 0 && (
                    <div className="pt-1 flex items-center justify-between gap-2 p-2.5 rounded-[4px] bg-soft-mint border-2 border-ink text-ink text-xs">
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="w-4 h-4 text-semantic-success shrink-0" />
                        <span className="truncate font-bold">
                          الإنشاء: {unitEssays[0].titleAr}
                        </span>
                      </div>
                      <span className="text-[10px] font-black bg-semantic-success text-surface px-2 py-0.5 rounded-[4px] border border-ink shrink-0 tabular-nums">
                        20 درجة
                      </span>
                    </div>
                  )}

                </div>

                {/* Progress Bar & Quick Lessons Accordion */}
                <div className="p-5 sm:p-6 pt-3 border-t-2 border-ink space-y-3 bg-surface">
                  
                  {/* Progress Line */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-gray font-bold mb-1.5">
                      <span className="text-[11px] font-bold">
                        نسبة إنجاز الوحدة ({completedInUnit} من {unit.lessons.length} دروس)
                      </span>
                      <span className="font-mono font-black text-ink text-xs tabular-nums">{progressRatio}%</span>
                    </div>
                    <div className="w-full bg-progress-track border border-ink h-2.5 rounded-[4px] overflow-hidden">
                      <div 
                        className="h-full bg-cobalt transition-all duration-300"
                        style={{ width: `${progressRatio}%` }}
                      />
                    </div>
                  </div>

                  {/* Expandable Lessons Drawer Button */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <button
                      type="button"
                      id={`unit-${unit.id}-toggle-lessons`}
                      onClick={(e) => toggleUnitLessons(unit.number, e)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-ink hover:text-cobalt transition-colors cursor-pointer"
                    >
                      <span>قائمة الدروس ({unit.lessons.length})</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* Launch Action */}
                    <button
                      type="button"
                      id={`enter-unit-${unit.id}-btn`}
                      onClick={() => onSelectUnit(unit)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink text-xs font-extrabold shadow-brutal-sm transition-all group/btn cursor-pointer"
                    >
                      <span>دخول الوحدة</span>
                      <ChevronLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Expanded Lessons List */}
                  {isExpanded && (
                    <div className="pt-3 border-t-2 border-ink/15 space-y-2 max-h-64 overflow-y-auto pr-1">
                      {unit.lessons.map((lesson) => {
                        const isLessonDone = studentState.completedLessonIds.includes(lesson.id);
                        return (
                          <button
                            type="button"
                            key={lesson.id}
                            id={`lesson-item-${lesson.id}`}
                            onClick={() => onSelectLesson(lesson)}
                            className={`w-full text-right p-2.5 rounded-[4px] border-2 border-ink text-xs cursor-pointer flex items-center justify-between gap-3 transition-all ${
                              isLessonDone
                                ? 'bg-answer-correct-bg hover:bg-soft-mint text-ink'
                                : 'bg-paper hover:bg-blue-mist text-ink'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="w-5 h-5 rounded-[4px] bg-surface border border-ink flex items-center justify-center font-bold text-[10px] text-ink shrink-0 tabular-nums">
                                {lesson.lessonNumber}
                              </span>
                              <div className="min-w-0">
                                <span className="font-bold block truncate">{lesson.titleAr}</span>
                                <span dir="ltr" className="text-[10px] text-muted-gray font-mono block truncate text-left bidi-en">{lesson.titleEn}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[4px] border border-ink ${
                                lesson.category === 'grammar' ? 'bg-blue-mist text-cobalt' :
                                lesson.category === 'reading' ? 'bg-yellow text-ink' :
                                lesson.category === 'vocabulary' ? 'bg-soft-mint text-semantic-success' :
                                'bg-lavender text-ink'
                              }`}>
                                {lesson.category === 'grammar' ? 'قواعد' :
                                 lesson.category === 'reading' ? 'استيعابية' :
                                 lesson.category === 'vocabulary' ? 'مفردات' : 'إملاء'}
                              </span>

                              {isLessonDone ? (
                                <CheckCircle className="w-4 h-4 text-semantic-success" />
                              ) : (
                                <ChevronLeft className="w-3.5 h-3.5 text-muted-gray" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* 5. MODE B: CHRONOLOGICAL ROADMAP VIEW */}
      {viewMode === 'roadmap' && filteredUnits.length > 0 && (
        <div className="space-y-4">
          <div className="p-4 rounded-[6px] bg-blue-mist border-2 border-ink flex items-center justify-between text-xs text-ink font-bold">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-cobalt shrink-0" />
              <span>المسار التتابعي المنهجي: الوحدات مرتبة تسلسلياً لضمان تغطية المنهاج خطوة بخطوة.</span>
            </div>
          </div>

          <div className="relative border-r-2 border-ink mr-4 sm:mr-8 space-y-6 pr-6 sm:pr-8 py-2">
            {filteredUnits.map((unit) => {
              const meta = UNIT_META[unit.number] || UNIT_META[1];
              const completedInUnit = unit.lessons.filter(l => studentState.completedLessonIds.includes(l.id)).length;
              const progressRatio = unit.lessons.length > 0 ? Math.round((completedInUnit / unit.lessons.length) * 100) : 0;
              const isDone = progressRatio === 100;

              return (
                <div key={unit.id} className="relative">
                  
                  {/* Timeline Dot */}
                  <div className={`absolute -right-[33px] sm:-right-[41px] top-4 w-6 h-6 rounded-full border-2 border-ink flex items-center justify-center ${
                    isDone ? 'bg-semantic-success text-surface' : completedInUnit > 0 ? 'bg-cobalt text-surface' : 'bg-progress-track text-ink'
                  }`}>
                    {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>

                  {/* Content Box */}
                  <button
                    type="button"
                    onClick={() => onSelectUnit(unit)}
                    className="w-full text-right p-5 sm:p-6 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action hover:bg-paper transition-all cursor-pointer group block"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-[4px] border border-ink text-xs font-black ${meta.color.badge}`}>
                          الوحدة {unit.number}
                        </span>
                        <h3 className="font-black text-ink text-base sm:text-lg group-hover:text-cobalt transition-colors">
                          {unit.titleAr}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-ink bg-yellow px-2.5 py-1 rounded-[4px] border border-ink">
                          {meta.ministerialWeight}
                        </span>
                        <span className="text-xs font-bold text-muted-gray tabular-nums">
                          {completedInUnit}/{unit.lessons.length} دروس
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-gray font-medium leading-relaxed">
                      {unit.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-ink/15">
                      <div className="flex flex-wrap gap-1.5">
                        {meta.keyGrammar.slice(0, 3).map((g, gi) => (
                          <span key={gi} className="text-[10px] font-bold px-2 py-0.5 bg-paper border border-ink/30 text-ink rounded-[4px]">
                            {g}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-cobalt">
                        <span>استعراض محتوى الوحدة</span>
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </span>
                    </div>

                  </button>

                </div>
              );
            })}
          </div>
        </div>
      )}

    </section>
  );
};
