import React, { useState } from 'react';
import { 
  Sparkles, Bookmark, Heart, Search, Filter, Compass, Trophy, 
  BookOpen, Award, CheckCircle2, ChevronDown, ArrowUpRight, Flame,
  FolderPlus, Grid, LayoutGrid, Layers, ShieldCheck
} from 'lucide-react';
import { EducationalGrade, Unit, Lesson, MinisterialExamQuestion } from '../types';
import { getUnitsForGrade, getGradeMeta, ORDERED_GRADES, getQuestionsForGrade } from '../data/gradeContentResolver';
import { PinterestPinModal, PinItem } from './PinterestPinModal';

interface PinterestPlatformFeedProps {
  selectedGrade: EducationalGrade;
  onSelectGrade: (grade: EducationalGrade) => void;
  onSelectLesson: (lesson: Lesson) => void;
  onNavigateTab: (tab: 'exam' | 'mock' | 'literature' | 'essays' | 'verbs' | 'vocab' | 'review') => void;
  studentState: any;
}

export const PinterestPlatformFeed: React.FC<PinterestPlatformFeedProps> = ({
  selectedGrade,
  onSelectGrade,
  onSelectLesson,
  onNavigateTab,
  studentState
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeBoard, setActiveBoard] = useState<string>('all-boards');
  const [savedPinIds, setSavedPinIds] = useState<string[]>(studentState.bookmarkedQuestionIds || []);
  const [selectedPin, setSelectedPin] = useState<PinItem | null>(null);
  const [userBoards, setUserBoards] = useState<string[]>([
    'قواعد مهمة ومفاتيح الحل',
    'مفردات صعبة وحفظية',
    'أسئلة امتحانية ذهبية',
    'قطع الفهم ونصوص القراءة'
  ]);
  const [newBoardInput, setNewBoardInput] = useState('');
  const [showNewBoardModal, setShowNewBoardModal] = useState(false);

  const gradeMeta = getGradeMeta(selectedGrade);
  const units = getUnitsForGrade(selectedGrade);
  const questions = getQuestionsForGrade(selectedGrade);
  const isMinisterial = gradeMeta.isMinisterial;

  // Generate rich Pinterest Pins from current grade lessons, units, and verified questions
  const pinsList: PinItem[] = [];

  // 1. Add lessons as pins
  units.forEach((unit) => {
    unit.lessons.forEach((lesson, lIdx) => {
      pinsList.push({
        id: `lesson-${lesson.id}`,
        title: lesson.titleAr,
        subtitle: lesson.titleEn,
        category: lesson.category === 'grammar' ? 'grammar' : lesson.category === 'vocabulary' ? 'vocab' : 'student',
        grade: gradeMeta.nameAr,
        unitTitle: `الوحدة ${unit.number} • ${unit.titleAr}`,
        contentSummary: lesson.summary,
        detailedNotes: lesson.detailedContent,
        teacherTips: lesson.teacherNotes || [
          isMinisterial 
            ? 'ركز على هذه القاعدة لأنها تتكرر في الامتحانات الوزارية.' 
            : 'ركز على هذا الدرس واستعد للامتحان النهائي المدرسي.'
        ],
        commonMistakes: lesson.commonMistakes || ['احذر من الخلط بين مفاتيح الحل والأزمان.'],
        examples: lesson.examples,
        lessonRef: lesson,
        accentColor: lIdx % 3 === 0 ? 'bg-cobalt text-surface' : lIdx % 3 === 1 ? 'bg-lavender text-ink' : 'bg-soft-mint text-ink',
        likesCount: 34 + (lIdx * 7) % 50,
        savesCount: 12 + (lIdx * 3) % 30
      });
    });
  });

  // 2. Add grade-specific exam questions as pins
  questions.forEach((q, qIdx) => {
    const isYearDocumented = Boolean(q.year && q.session);
    pinsList.push({
      id: `q-${q.id}`,
      title: isYearDocumented 
        ? `${isMinisterial ? 'سؤال وزاري' : 'سؤال امتحاني'} (${q.year} - ${q.session})` 
        : `تمرين امتحاني نموذجي (${q.topic})`,
      subtitle: q.topic,
      category: 'ministerial',
      grade: gradeMeta.nameAr,
      unitTitle: `الوحدة ${q.unitId} • بنك الأسئلة والتمارين`,
      contentSummary: q.questionText,
      detailedNotes: [
        `السؤال: ${q.questionText}`,
        `الجواب النموذجي: ${q.correctAnswer}`,
        `التوضيح القاعدي: ${q.ruleExplanation}`
      ],
      teacherTips: [
        isYearDocumented 
          ? `سؤال مأخوذ من اختبارات سنة ${q.year} (${q.session}).` 
          : `تمرين صفي من أنشطة الكتاب.`,
        `تحقق دائماً من مفاتيح الحل ودلالة الكلمات قبل الاختيار.`
      ],
      questionData: q,
      accentColor: isMinisterial ? 'bg-yellow text-ink' : 'bg-blue-mist text-ink',
      likesCount: 88 + (qIdx * 5) % 100,
      savesCount: 45 + (qIdx * 4) % 60
    });
  });

  // Filter pins based on category and search query
  const filteredPins = pinsList.filter((pin) => {
    const matchesCategory = 
      activeCategory === 'all' ? true :
      activeCategory === 'grammar' ? pin.category === 'grammar' :
      activeCategory === 'vocab' ? pin.category === 'vocab' :
      activeCategory === 'ministerial' ? pin.category === 'ministerial' :
      activeCategory === 'saved' ? savedPinIds.includes(pin.id) : true;

    const matchesSearch = 
      !searchQuery || 
      pin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pin.contentSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pin.unitTitle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleSaveToBoard = (pinId: string, boardName: string) => {
    if (!savedPinIds.includes(pinId)) {
      setSavedPinIds([...savedPinIds, pinId]);
    } else {
      setSavedPinIds(savedPinIds.filter(id => id !== pinId));
    }
  };

  const handleCreateBoard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBoardInput.trim()) return;
    if (!userBoards.includes(newBoardInput)) {
      setUserBoards([...userBoards, newBoardInput]);
    }
    setNewBoardInput('');
    setShowNewBoardModal(false);
  };

  return (
    <div className="space-y-8 pb-24 max-w-7xl mx-auto w-full px-2 sm:px-6 text-ink">
      
      {/* 1. Editorial Boards Header & Grade Switcher */}
      <div className="relative overflow-hidden rounded-md bg-cobalt text-surface p-6 sm:p-10 shadow-brutal-hero border-2 border-ink">
        <div className="relative z-10 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-yellow text-ink text-xs font-black border border-ink shadow-brutal-press">
                <Sparkles className="w-4 h-4 text-cobalt shrink-0" />
                <span>لوحات الأفكار الدراسية • إعداد الأستاذ مصطفى تركي</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-surface">
                لوحات الأفكار والدروس • <span className="text-yellow underline decoration-2 underline-offset-4">{gradeMeta.nameAr}</span>
              </h1>
              <p className="text-surface/90 text-xs sm:text-sm max-w-2xl leading-relaxed font-medium">
                استكشف القواعد والمفردات والأسئلة الامتحانية (2020-2026) المصممة كبطاقات بصرية تتيح لك الحفظ في لوحاتك الدراسية الخاصة.
              </p>
            </div>

            {/* Grade Switcher */}
            <div className="flex flex-wrap items-center gap-2 bg-surface text-ink p-2 rounded border-2 border-ink shadow-brutal-sm shrink-0">
              <label htmlFor="board-grade-select" className="text-xs font-bold text-muted-gray px-1">الصف:</label>
              <select
                id="board-grade-select"
                value={selectedGrade}
                onChange={(e) => onSelectGrade(e.target.value as EducationalGrade)}
                className="bg-paper text-ink text-xs font-black px-3 py-2 rounded-sm border border-ink focus:outline-none focus:ring-2 focus:ring-cobalt cursor-pointer"
              >
                {ORDERED_GRADES.map((g) => {
                  const meta = getGradeMeta(g);
                  return (
                    <option key={g} value={g} className="bg-surface text-ink">
                      {meta.nameAr}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Search & Boards Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <div className="relative flex-1 w-full min-w-0">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-gray" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في القواعد، المفردات، أو أسئلة كتاب النشاط..."
                className="w-full pr-11 pl-4 py-3 rounded bg-surface border-2 border-ink text-ink placeholder-muted-gray text-xs sm:text-sm font-bold shadow-brutal-sm focus:outline-none focus:shadow-brutal-callout"
              />
            </div>

            <button
              type="button"
              onClick={() => setShowNewBoardModal(true)}
              className="px-5 py-3 rounded bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink shadow-brutal-sm font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shrink-0 transition-all"
            >
              <FolderPlus className="w-4 h-4 shrink-0" />
              <span>إنشاء لوحة دراسية جديدة</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-1">
        {[
          { id: 'all', label: 'جميع الأفكار والدروس', icon: Compass },
          { id: 'grammar', label: 'القواعد والوظائف اللغوية', icon: Sparkles },
          { id: 'vocab', label: 'المفردات وكتاب النشاط', icon: BookOpen },
          { id: 'ministerial', label: isMinisterial ? 'أسئلة وزارية (2020-2026)' : 'أسئلة وتمارين الامتحانات', icon: Award },
          { id: 'saved', label: `لوحة المحفوظات (${savedPinIds.length})`, icon: Bookmark },
        ].map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-black border-2 border-ink transition-all cursor-pointer shrink-0 ${
                isActive 
                  ? 'bg-cobalt text-surface shadow-brutal-sm' 
                  : 'bg-surface text-ink hover:bg-yellow shadow-brutal-press'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-yellow' : 'text-cobalt'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Masonry Grid of Idea Cards */}
      {filteredPins.length === 0 ? (
        <div className="text-center py-20 bg-surface rounded-md border-2 border-ink shadow-brutal-md p-8 space-y-4">
          <Compass className="w-12 h-12 text-cobalt mx-auto" />
          <h3 className="text-lg font-black text-ink">لا توجد بطاقات مطابقة لبحثك</h3>
          <p className="text-xs font-medium text-muted-gray max-w-md mx-auto">
            جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً من لوحات الأفكار التعليمية.
          </p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {filteredPins.map((pin) => {
            const isSaved = savedPinIds.includes(pin.id);
            return (
              <div
                key={pin.id}
                className="relative break-inside-avoid group bg-surface rounded-md overflow-hidden border-2 border-ink shadow-brutal-sm hover:shadow-brutal-md transition-all duration-200 flex flex-col hover:-translate-y-0.5"
              >
                <button
                  type="button"
                  onClick={() => handleSaveToBoard(pin.id, 'مفضلة الطالب')}
                  aria-label={isSaved ? 'إزالة من المحفوظات' : 'حفظ البطاقة'}
                  className={`absolute top-4 left-4 z-10 p-2 rounded border border-ink shadow-brutal-press transition-all cursor-pointer ${
                    isSaved ? 'bg-soft-mint text-semantic-success' : 'bg-surface hover:bg-yellow text-ink'
                  }`}
                  title={isSaved ? 'محفوظ' : 'حفظ البطاقة'}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPin(pin)}
                  className="w-full flex-1 flex flex-col text-right cursor-pointer focus-visible:outline-none"
                >
                  {/* Pin Card Visual Header Banner */}
                  <div className={`w-full p-5 pl-14 ${pin.accentColor} relative overflow-hidden flex flex-col justify-between min-h-[150px] border-b-2 border-ink`}>
                    <div className="flex items-center justify-start relative z-10">
                      <span dir="ltr" className="text-[10px] font-mono font-black uppercase bg-surface text-ink border border-ink px-2.5 py-0.5 rounded-sm truncate max-w-full">
                        {pin.subtitle}
                      </span>
                    </div>

                    <div className="relative z-10 mt-6 w-full min-w-0">
                      <h3 className="text-base sm:text-lg font-black leading-snug group-hover:underline line-clamp-2 break-words">
                        {pin.title}
                      </h3>
                    </div>
                  </div>

                  {/* Pin Card Body & Footer */}
                  <div className="w-full p-4 space-y-3 bg-surface flex-1 flex flex-col justify-between">
                    <p className="text-xs font-medium text-muted-gray line-clamp-3 leading-relaxed break-words">
                      {pin.contentSummary}
                    </p>

                    <div className="pt-3 border-t border-ink/15 flex items-center justify-between gap-2 text-[11px] text-muted-gray w-full">
                      <span className="font-bold text-cobalt truncate max-w-[140px]">
                        {pin.unitTitle}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="flex items-center gap-1 font-mono font-bold">
                          <Heart className="w-3.5 h-3.5 text-semantic-error fill-current" />
                          {pin.likesCount}
                        </span>
                        <span className="flex items-center gap-1 font-mono font-bold">
                          <Bookmark className="w-3.5 h-3.5 text-cobalt" />
                          {pin.savesCount}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. New Board Modal */}
      {showNewBoardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75">
          <div className="bg-surface rounded-md p-6 sm:p-8 max-w-md w-full shadow-brutal-modal border-2 border-ink space-y-6 text-ink">
            <div className="space-y-2">
              <h3 className="text-lg font-black text-ink">إنشاء لوحة دراسية جديدة</h3>
              <p className="text-xs font-medium text-muted-gray">نظم أفكارك ودروسك المفضلة في لوحات مراجعة مخصصة.</p>
            </div>
            
            <form onSubmit={handleCreateBoard} className="space-y-4">
              <input
                type="text"
                value={newBoardInput}
                onChange={(e) => setNewBoardInput(e.target.value)}
                placeholder="اسم اللوحة (مثلاً: قواعد الوحدة الثالثة، مفردات مهمة)..."
                className="w-full px-4 py-3 rounded bg-paper border-2 border-ink text-xs sm:text-sm font-bold text-ink placeholder-muted-gray focus:outline-none focus:shadow-brutal-cobalt-sm"
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewBoardModal(false)}
                  className="px-4 py-2 rounded text-xs font-bold bg-paper text-ink border-2 border-ink hover:bg-coral cursor-pointer shadow-brutal-press"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink text-xs font-black shadow-brutal-sm cursor-pointer"
                >
                  إنشاء اللوحة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. Close-up Pin Modal */}
      {selectedPin && (
        <PinterestPinModal
          pin={selectedPin}
          onClose={() => setSelectedPin(null)}
          onSaveToBoard={handleSaveToBoard}
          isSaved={savedPinIds.includes(selectedPin.id)}
        />
      )}

    </div>
  );
};
