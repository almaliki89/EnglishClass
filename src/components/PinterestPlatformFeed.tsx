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
        accentColor: lIdx % 3 === 0 ? 'bg-gradient-to-br from-indigo-600 to-indigo-800' : lIdx % 3 === 1 ? 'bg-gradient-to-br from-purple-600 to-indigo-700' : 'bg-gradient-to-br from-blue-600 to-teal-700',
        likesCount: 34 + (lIdx * 7) % 50,
        savesCount: 12 + (lIdx * 3) % 30
      });
    });
  });

  // 2. Add verified grade-specific exam questions as pins
  questions.forEach((q, qIdx) => {
    const isYearDocumented = Boolean(q.year && q.session);
    pinsList.push({
      id: `q-${q.id}`,
      title: isYearDocumented 
        ? `${isMinisterial ? 'سؤال وزاري' : 'سؤال امتحاني'} (${q.year} - ${q.session})` 
        : `تمرين امتحاني معتمد (${q.topic})`,
      subtitle: q.topic,
      category: 'ministerial',
      grade: gradeMeta.nameAr,
      unitTitle: `الوحدة ${q.unitId} • بنك الأسئلة والتمارين`,
      contentSummary: q.questionText,
      detailedNotes: [
        `السؤال: ${q.questionText}`,
        `الجواب المعتمد: ${q.correctAnswer}`,
        `التوضيح القاعدي: ${q.ruleExplanation}`
      ],
      teacherTips: [
        isYearDocumented 
          ? `سؤال معتمد لسنة ${q.year} (${q.session}).` 
          : `تمرين صفي معتمد من كتاب النشاط الرسمي.`,
        `تحقق دائماً من مفاتيح الحل ودلالة الكلمات قبل الاختيار.`
      ],
      questionData: q,
      accentColor: isMinisterial ? 'bg-gradient-to-br from-amber-600 to-amber-800' : 'bg-gradient-to-br from-blue-600 to-slate-800',
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
    <div className="space-y-8 pb-24 max-w-7xl mx-auto w-full px-2 sm:px-6">
      
      {/* 1. Pinterest Top Discover Header & Grade Board Switcher */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-indigo-900/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-black text-amber-300 border border-white/10">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>منصة إنجليزي بينت التعليمية • إشراف الأستاذ مصطفى تركي</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                لوحات الأفكار والدروس • <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-indigo-300">{gradeMeta.nameAr}</span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                استكشف القواعد، المفردات، والأسئلة الوزارية (2020-2026) المصممة كأفكار بصرية (Pins) تتيح لك الحفظ في لوحاتك الدراسية الخاصة.
              </p>
            </div>

            {/* Grade Switcher */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/15">
              <span className="text-xs font-bold text-slate-300 px-2">الصف:</span>
              <select
                value={selectedGrade}
                onChange={(e) => onSelectGrade(e.target.value as EducationalGrade)}
                className="bg-slate-900 text-white text-xs font-black px-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                {ORDERED_GRADES.map((g) => {
                  const meta = getGradeMeta(g);
                  return (
                    <option key={g} value={g} className="bg-slate-900 text-white">
                      {meta.nameAr}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Search & Boards Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <div className="relative flex-1 w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في القواعد، المفردات، الوزاريات، أو أسئلة كتاب النشاط..."
                className="w-full pr-11 pl-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <button
              type="button"
              onClick={() => setShowNewBoardModal(true)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer shrink-0 transition-all hover:scale-105"
            >
              <FolderPlus className="w-4 h-4" />
              <span>إنشاء لوحة دراسية جديدة</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Pinterest Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-indigo-500'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Pinterest Masonry Grid of Idea Pins */}
      {filteredPins.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
          <Compass className="w-12 h-12 text-slate-400 mx-auto animate-pulse" />
          <h3 className="text-lg font-black text-slate-900 dark:text-white">لا توجد أفكار مطابقة لبحثك</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
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
                onClick={() => setSelectedPin(pin)}
                className="break-inside-avoid group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
              >
                {/* Pin Card Visual Header Banner */}
                <div className={`p-5 ${pin.accentColor} text-white relative overflow-hidden flex flex-col justify-between min-h-[160px]`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none -mr-10 -mt-10" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-black uppercase bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white/90">
                      {pin.subtitle}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveToBoard(pin.id, 'مفضلة الطالب');
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                        isSaved ? 'bg-emerald-500 text-white' : 'bg-black/30 hover:bg-black/50 text-white'
                      }`}
                      title={isSaved ? 'محفوظ' : 'حفظ البن'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <div className="relative z-10 mt-6">
                    <h3 className="text-base sm:text-lg font-black leading-snug group-hover:underline line-clamp-2">
                      {pin.title}
                    </h3>
                  </div>
                </div>

                {/* Pin Card Body & Footer */}
                <div className="p-4 space-y-3 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {pin.contentSummary}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 truncate max-w-[140px]">
                      {pin.unitTitle}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                        {pin.likesCount}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bookmark className="w-3.5 h-3.5 text-indigo-500" />
                        {pin.savesCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. New Board Modal */}
      {showNewBoardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">إنشاء لوحة دراسية جديدة</h3>
            <p className="text-xs text-slate-500">نظم أفكارك ودروسك المفضلة في لوحات مخصصة تماماً مثل بينتريست.</p>
            
            <form onSubmit={handleCreateBoard} className="space-y-4">
              <input
                type="text"
                value={newBoardInput}
                onChange={(e) => setNewBoardInput(e.target.value)}
                placeholder="اسم اللوحة (مثلاً: وزاريات صعبة، قواعد الوحدة الثالثة)..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewBoardModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black shadow-md shadow-indigo-600/20 cursor-pointer"
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
