import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Bookmark, 
  BookOpen, 
  RotateCcw, 
  HelpCircle, 
  ArrowRight, 
  TrendingUp, 
  Award, 
  Flame,
  Volume2,
  Plus,
  Trash2,
  Check,
  X,
  Target
} from 'lucide-react';
import { StudentState, Unit, Lesson, StudentNote, MinisterialExamQuestion } from '../types';
import { ORDERED_GRADES, ALL_GRADES_META, getMinisterialQuestionsForGrade, getGradeMeta } from '../data/gradeContentResolver';
import { EducationalGrade } from '../types';

interface SmartReviewSectionProps {
  studentState: StudentState;
  currentUnits: Unit[];
  onSelectLesson: (lesson: Lesson) => void;
  onNavigateToTab: (tab: any) => void;
  onToggleBookmark?: (questionId: string) => void;
  onSaveNotes?: (notes: StudentNote[]) => void;
  selectedGrade?: EducationalGrade;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const SmartReviewSection: React.FC<SmartReviewSectionProps> = ({
  studentState,
  currentUnits,
  onSelectLesson,
  onNavigateToTab,
  onToggleBookmark,
  onSaveNotes,
  selectedGrade,
  onSelectGrade
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'weak-topics' | 'incomplete' | 'notes'>('weak-topics');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [activePracticeTopic, setActivePracticeTopic] = useState<string | null>(null);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [practiceResults, setPracticeResults] = useState<Record<string, boolean>>({});

  // New Note state
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);

  const effectiveGrade = selectedGrade || studentState.selectedGrade || 'sixth-preparatory';
  const gradeMeta = getGradeMeta(effectiveGrade);
  const allQuestionsPool: MinisterialExamQuestion[] = getMinisterialQuestionsForGrade(effectiveGrade);

  // 1. Bookmarked Questions from Ministerial bank
  const bookmarkedQuestions = allQuestionsPool.filter(q => 
    studentState.bookmarkedQuestionIds.includes(q.id)
  );

  // 2. Incomplete Lessons
  const allLessons = currentUnits.flatMap(u => u.lessons);
  const incompleteLessons = allLessons.filter(l => !studentState.completedLessonIds.includes(l.id));

  // 3. Dynamic Weak Topics calculation from real student performance
  const weakTopicsList = useMemo(() => {
    const topicStats: Record<string, { topic: string; category: string; mistakes: number; total: number; unitId?: number }> = {};

    // Check wrong answered exercises in lessons
    Object.entries(studentState.answeredExercises || {}).forEach(([exId, isCorrect]) => {
      // Find which lesson/unit this exercise belongs to
      for (const unit of currentUnits) {
        for (const lesson of unit.lessons) {
          const ex = lesson.exercises.find(e => e.id === exId);
          if (ex) {
            const topicKey = lesson.titleAr;
            if (!topicStats[topicKey]) {
              topicStats[topicKey] = { topic: lesson.titleAr, category: lesson.category, mistakes: 0, total: 0, unitId: unit.id };
            }
            topicStats[topicKey].total += 1;
            if (!isCorrect) {
              topicStats[topicKey].mistakes += 1;
            }
          }
        }
      }
    });

    // Check wrong answers in mock exam results
    (studentState.examResults || []).forEach(exam => {
      exam.answers.forEach(ans => {
        const catKey = ans.category || 'عام';
        if (!topicStats[catKey]) {
          topicStats[catKey] = { topic: catKey, category: 'قواعد وأسئلة', mistakes: 0, total: 0 };
        }
        topicStats[catKey].total += 1;
        if (!ans.isCorrect) {
          topicStats[catKey].mistakes += 1;
        }
      });
    });

    const calculated = Object.values(topicStats)
      .filter(s => s.mistakes > 0)
      .map(s => ({
        ...s,
        accuracy: Math.round(((s.total - s.mistakes) / s.total) * 100)
      }))
      .sort((a, b) => b.mistakes - a.mistakes || a.accuracy - b.accuracy);

    // If student hasn't accumulated errors yet, provide curated priority ministerial review topics
    if (calculated.length === 0) {
      return [
        { topic: 'أدوات الربط (While / As / When / And)', category: 'قواعد الوحدة 1', mistakes: 0, total: 5, accuracy: 100, isCurated: true },
        { topic: 'قاعدة Used to في المقارنة والماضي', category: 'قواعد الوحدة 1', mistakes: 0, total: 4, accuracy: 100, isCurated: true },
        { topic: 'أفعال العبارة Phrasal Verbs والضمير', category: 'قواعد الوحدة 1', mistakes: 0, total: 4, accuracy: 100, isCurated: true },
        { topic: 'الصفات المنتهية بـ (-ed / -ing)', category: 'مفردات واختيارات', mistakes: 0, total: 3, accuracy: 100, isCurated: true },
      ];
    }

    return calculated;
  }, [studentState.answeredExercises, studentState.examResults, currentUnits]);

  // Questions for active practice topic
  const practiceQuestionsForTopic = useMemo(() => {
    if (!activePracticeTopic) return [];
    return allQuestionsPool.filter(q => 
      q.topic.toLowerCase().includes(activePracticeTopic.toLowerCase()) ||
      activePracticeTopic.toLowerCase().includes(q.topic.toLowerCase())
    ).slice(0, 5);
  }, [activePracticeTopic, allQuestionsPool]);

  // Notes management
  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;

    const noteItem: StudentNote = {
      id: 'note-' + Date.now(),
      title: newNoteTitle.trim(),
      content: newNoteContent.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const currentNotes = studentState.notes || [];
    const updatedNotes = [noteItem, ...currentNotes];
    if (onSaveNotes) {
      onSaveNotes(updatedNotes);
    }
    setNewNoteTitle('');
    setNewNoteContent('');
    setIsAddingNote(false);
  };

  const handleDeleteNote = (noteId: string) => {
    const currentNotes = studentState.notes || [];
    const updatedNotes = currentNotes.filter(n => n.id !== noteId);
    if (onSaveNotes) {
      onSaveNotes(updatedNotes);
    }
  };

  const totalAttempted = studentState.totalQuestionsAttempted || 0;
  const totalCorrect = studentState.totalQuestionsCorrect || 0;
  const accuracyRate = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 100;

  return (
    <div className="space-y-6 pb-16">
      
      {/* 1. Header Banner */}
      <div className="bg-white border-3 border-[#202124] shadow-[6px_6px_0px_#202124] p-6 md:p-8 text-[#202124]">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-mono font-black">
            <Sparkles className="w-3.5 h-3.5 text-[#405DE6]" />
            <span>SMART REVIEW ENGINE // المراجعة المركزة</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#202124]">
            المراجعة المركزة • <span className="bg-[#F3E6A5] px-2 py-0.5 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] inline-block">{gradeMeta.nameAr}</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#202124]/80 leading-relaxed font-medium">
            يحلل هذا القسم أداءك الحقيقي تلقائياً لـ {gradeMeta.nameAr} ويحدد مواضيع الضعف والأخطاء السابقة والأسئلة المحفوظة في مفضلتك لتمكينك من معالجتها فورياً.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <span className="px-3 py-1 bg-[#405DE6] text-white border-2 border-[#202124] font-black text-xs shadow-[2px_2px_0px_#202124]">
              منصة {gradeMeta.nameAr}
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t-2 border-[#202124]">
          <div className="bg-[#F7F5EF] p-3.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] text-center">
            <span className="text-xs font-mono font-bold text-[#202124]/70 block mb-1">ACCURACY // دقة الإجابات</span>
            <span className="text-xl sm:text-2xl font-black text-[#405DE6] font-mono">{accuracyRate}%</span>
          </div>
          <div className="bg-[#F7F5EF] p-3.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] text-center">
            <span className="text-xs font-mono font-bold text-[#202124]/70 block mb-1">SAVED // أسئلة محفوظة</span>
            <span className="text-xl sm:text-2xl font-black text-[#F2A18E] font-mono">{bookmarkedQuestions.length}</span>
          </div>
          <div className="bg-[#F7F5EF] p-3.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] text-center">
            <span className="text-xs font-mono font-bold text-[#202124]/70 block mb-1">PENDING // دروس متبقية</span>
            <span className="text-xl sm:text-2xl font-black text-[#202124] font-mono">{incompleteLessons.length}</span>
          </div>
          <div className="bg-[#F7F5EF] p-3.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] text-center">
            <span className="text-xs font-mono font-bold text-[#202124]/70 block mb-1">NOTES // ملاحظات مدونة</span>
            <span className="text-xl sm:text-2xl font-black text-[#202124] font-mono">{studentState.notes?.length || 0}</span>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="flex gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('weak-topics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shrink-0 cursor-pointer ${activeTab === 'weak-topics' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white'}`}
        >
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>المواضيع المحتاجة لتقوية ({weakTopicsList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shrink-0 cursor-pointer ${activeTab === 'bookmarks' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white'}`}
        >
          <Bookmark className="w-4 h-4" />
          <span>الأسئلة المحفوظة ({bookmarkedQuestions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('incomplete')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shrink-0 cursor-pointer ${activeTab === 'incomplete' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white'}`}
        >
          <BookOpen className="w-4 h-4" />
          <span>الدروس المتبقية ({incompleteLessons.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shrink-0 cursor-pointer ${activeTab === 'notes' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white'}`}
        >
          <Award className="w-4 h-4" />
          <span>ملاحظاتي الشخصية ({studentState.notes?.length || 0})</span>
        </button>
      </div>

      {/* 3. Content Panel */}
      {activeTab === 'weak-topics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weakTopicsList.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 space-y-3 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-indigo-400 mb-1 inline-block">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm text-white">{item.topic}</h3>
                  </div>
                  <span className={`text-xs font-black px-2.5 py-1 rounded-xl ${
                    item.accuracy >= 80 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {item.accuracy}% دقة
                  </span>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all ${item.accuracy >= 80 ? 'bg-emerald-500' : item.accuracy >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`}
                    style={{ width: `${item.accuracy}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span>الأخطاء المسجلة: <strong className="text-rose-400 font-mono">{item.mistakes}</strong></span>
                  <button
                    onClick={() => setActivePracticeTopic(item.topic === activePracticeTopic ? null : item.topic)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>{activePracticeTopic === item.topic ? 'إغلاق التمرين' : 'تمرن على هذا الموضوع'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Targeted Practice Drawer */}
          {activePracticeTopic && (
            <div className="p-6 bg-slate-900 border border-indigo-500/50 rounded-3xl space-y-4 shadow-xl animate-in fade-in">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-bold text-base text-white">
                    تمرين تقوية فوري على: <span className="text-amber-300">{activePracticeTopic}</span>
                  </h3>
                </div>
                <button
                  onClick={() => setActivePracticeTopic(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {practiceQuestionsForTopic.length === 0 ? (
                <div className="text-center py-6 text-slate-400 text-xs">
                  جاري تجهيز أسئلة إضافية لهذا المحور... يمكنك مراجعة الدرس المتعلق به في قائمة الدروس.
                </div>
              ) : (
                <div className="space-y-4">
                  {practiceQuestionsForTopic.map(q => {
                    const ans = practiceAnswers[q.id] || '';
                    const isChecked = practiceResults[q.id] !== undefined;
                    const isCorrect = practiceResults[q.id];

                    return (
                      <div key={q.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-indigo-400 font-bold">{q.year} • {q.session}</span>
                          <span className="text-slate-400">{q.category}</span>
                        </div>
                        <p dir="ltr" className="text-sm font-bold text-white text-left font-serif">{q.questionText}</p>

                        <div className="flex gap-2">
                          <input
                            type="text"
                            dir="ltr"
                            placeholder="Type your answer here..."
                            value={ans}
                            onChange={(e) => setPracticeAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                            className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:border-indigo-500 focus:outline-hidden"
                          />
                          <button
                            onClick={() => {
                              const cleanedU = (ans || '').trim().toLowerCase();
                              const cleanedT = (q.correctAnswer || '').trim().toLowerCase();
                              const correct = cleanedU === cleanedT || (cleanedT.includes(cleanedU) && cleanedU.length > 2);
                              setPracticeResults(prev => ({ ...prev, [q.id]: correct }));
                            }}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl cursor-pointer"
                          >
                            تحقق
                          </button>
                        </div>

                        {isChecked && (
                          <div className={`p-3 rounded-xl text-xs font-mono flex items-center justify-between ${
                            isCorrect ? 'bg-emerald-950/60 border border-emerald-700 text-emerald-300' : 'bg-rose-950/60 border border-rose-700 text-rose-300'
                          }`}>
                            <span>{isCorrect ? '✓ إجابة صحيحة ومطابقة للكنترول' : `✗ خطأ — الجواب الوزاري: ${q.correctAnswer}`}</span>
                            <span className="text-[11px] text-slate-400 font-sans">{q.ruleExplanation}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === 'bookmarks' && (
        <div className="space-y-4">
          {bookmarkedQuestions.length === 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
              <Bookmark className="w-12 h-12 mx-auto mb-3 text-slate-600" />
              <h3 className="text-lg font-bold text-white mb-1">لا توجد أسئلة محفوظة حتى الآن</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto mb-5">
                يمكنك حفظ أي سؤال وزاري صعب أثناء خوض الاختبارات الوزارية من خلال النقر على أيقونة الإشارة المرجعية ليظهر هنا للمراجعة السريعة.
              </p>
              <button
                onClick={() => onNavigateToTab('exam')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all cursor-pointer"
              >
                انتقل إلى بنك الأسئلة الوزارية
              </button>
            </div>
          ) : (
            bookmarkedQuestions.map(q => {
              const isRevealed = revealedSolutions[q.id];
              return (
                <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {q.year} - {q.session}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-indigo-400 font-medium">الوحدة {q.unitId} • {q.topic}</span>
                      {onToggleBookmark && (
                        <button
                          type="button"
                          onClick={() => onToggleBookmark(q.id)}
                          className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 cursor-pointer"
                          title="إزالة من المفضلة"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-amber-400" />
                        </button>
                      )}
                    </div>
                  </div>
                  <p dir="ltr" className="text-base font-bold text-white mb-3 text-left font-serif">{q.questionText}</p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setRevealedSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <HelpCircle className="w-4 h-4" />
                      <span>{isRevealed ? 'إخفاء الحل' : 'كشف الحل النموذجي والقاعدة الوزارية'}</span>
                    </button>
                  </div>

                  {isRevealed && (
                    <div className="mt-3 p-3.5 bg-slate-950/80 rounded-xl border border-indigo-500/30 text-xs">
                      <div className="font-bold text-emerald-400 mb-1">الحل النموذجي: {q.correctAnswer}</div>
                      <p className="text-slate-300">{q.ruleExplanation}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {activeTab === 'incomplete' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {incompleteLessons.slice(0, 10).map(lesson => (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className="p-4 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/40 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 group"
            >
              <div>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-500/20 text-indigo-400 mb-1 inline-block">
                  الوحدة {lesson.unitId} • درس {lesson.lessonNumber}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {lesson.titleAr} ({lesson.titleEn})
                </h4>
                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{lesson.summary}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">دفتر الملاحظات والأفكار الذهبية</h3>
            <button
              onClick={() => setIsAddingNote(!isAddingNote)}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>إضافة ملاحظة</span>
            </button>
          </div>

          {isAddingNote && (
            <form onSubmit={handleAddNote} className="p-4 bg-slate-900 border border-indigo-500/40 rounded-2xl space-y-3 animate-in fade-in">
              <input
                type="text"
                placeholder="عنوان الملاحظة (مثال: فخ قاعدة if الشرطية الثالثة)..."
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-indigo-500 focus:outline-hidden"
                required
              />
              <textarea
                rows={3}
                placeholder="اكتب ملاحظتك الذهبية هنا..."
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-indigo-500 focus:outline-hidden"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingNote(false)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-xs"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
                >
                  حفظ في الملف
                </button>
              </div>
            </form>
          )}

          {(!studentState.notes || studentState.notes.length === 0) ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
              <Award className="w-12 h-12 mx-auto mb-3 text-slate-600" />
              <h3 className="text-lg font-bold text-white mb-1">لا توجد ملاحظات مدونة بعد</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                أثناء تصفح الدروس والمراجعة، يمكنك تدوين أي ملاحظة أو فكرة ذهبية في ملفك السحابي لحفظها والرجوع إليها ليلة الامتحان.
              </p>
            </div>
          ) : (
            studentState.notes.map(note => (
              <div key={note.id} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-bold text-sm text-indigo-300 mb-1">{note.title}</h4>
                  <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">{note.content}</p>
                  <span className="text-[10px] text-slate-500 mt-2 block">{new Date(note.createdAt).toLocaleDateString('ar-IQ')}</span>
                </div>
                {onSaveNotes && (
                  <button
                    type="button"
                    onClick={() => handleDeleteNote(note.id)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                    title="حذف الملاحظة"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      )}

    </div>
  );
};
