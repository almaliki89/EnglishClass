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
  ArrowLeft,
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
      <div className="bg-white border-3 border-[#202124] shadow-[6px_6px_0px_#202124] p-6 md:p-8 text-[#202124] rounded-xs">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-mono font-bold rounded-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#405DE6]" />
            <span>المراجعة المركزة الذكية</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#202124]">
            المراجعة المركزة • <span className="bg-[#F3E6A5] px-2 py-0.5 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] inline-block">{gradeMeta.nameAr}</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#202124]/80 leading-relaxed font-medium">
            يحلل هذا القسم أداءك الحقيقي تلقائياً لـ {gradeMeta.nameAr} ويحدد مواضيع الضعف والأخطاء السابقة والأسئلة المحفوظة في مفضلتك لتمكينك من معالجتها فورياً.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <span className="px-3 py-1 bg-[#405DE6] text-white border-2 border-[#202124] font-bold text-xs shadow-[2px_2px_0px_#202124] rounded-xs">
              منصة {gradeMeta.nameAr}
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t-2 border-[#202124]">
          <div className="bg-[#F7F5EF] p-3.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] text-center rounded-xs">
            <span className="text-xs font-mono font-bold text-[#202124]/70 block mb-1">دقة الإجابات</span>
            <span className="text-xl sm:text-2xl font-black text-[#405DE6] font-mono">{accuracyRate}%</span>
          </div>
          <div className="bg-[#F7F5EF] p-3.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] text-center rounded-xs">
            <span className="text-xs font-mono font-bold text-[#747474] block mb-1">أسئلة محفوظة</span>
            <span className="text-xl sm:text-2xl font-black text-[#B83A3A] font-mono tabular-nums">{bookmarkedQuestions.length}</span>
          </div>
          <div className="bg-[#F7F5EF] p-3.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] text-center rounded-[4px]">
            <span className="text-xs font-mono font-bold text-[#747474] block mb-1">دروس متبقية</span>
            <span className="text-xl sm:text-2xl font-black text-[#202124] font-mono tabular-nums">{incompleteLessons.length}</span>
          </div>
          <div className="bg-[#F7F5EF] p-3.5 border-2 border-[#202124] shadow-[3px_3px_0px_#202124] text-center rounded-[4px]">
            <span className="text-xs font-mono font-bold text-[#747474] block mb-1">ملاحظات مدونة</span>
            <span className="text-xl sm:text-2xl font-black text-[#202124] font-mono tabular-nums">{studentState.notes?.length || 0}</span>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="flex gap-2 p-1.5 bg-[#F7F5EF] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] overflow-x-auto no-scrollbar rounded-[4px]">
        <button
          type="button"
          onClick={() => setActiveTab('weak-topics')}
          className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold transition-all shrink-0 cursor-pointer border rounded-[4px] ${
            activeTab === 'weak-topics'
              ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
          }`}
        >
          <AlertTriangle className={`w-4 h-4 ${activeTab === 'weak-topics' ? 'text-[#F3E6A5]' : 'text-[#B83A3A]'}`} />
          <span>المواضيع المحتاجة لتقوية ({weakTopicsList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold transition-all shrink-0 cursor-pointer border rounded-xs ${
            activeTab === 'bookmarks'
              ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>الأسئلة المحفوظة ({bookmarkedQuestions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('incomplete')}
          className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold transition-all shrink-0 cursor-pointer border rounded-xs ${
            activeTab === 'incomplete'
              ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>الدروس المتبقية ({incompleteLessons.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold transition-all shrink-0 cursor-pointer border rounded-xs ${
            activeTab === 'notes'
              ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]'
              : 'bg-transparent text-[#202124] border-transparent hover:bg-white'
          }`}
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
                className="bg-white border-2 border-[#202124] shadow-[3.5px_3.5px_0px_#202124] rounded-xs p-5 space-y-3 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#F7F5EF] border border-[#202124] text-[#405DE6] mb-1 inline-block rounded-xs">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm text-[#202124]">{item.topic}</h3>
                  </div>
                  <span className={`text-xs font-mono font-black px-2.5 py-1 border border-[#202124] rounded-xs ${
                    item.accuracy >= 80 ? 'bg-[#D7E9DA] text-[#202124]' : 'bg-[#F2A18E] text-[#202124]'
                  }`}>
                    {item.accuracy}% دقة
                  </span>
                </div>

                <div className="w-full bg-[#EAE8E1] h-2.5 border border-[#202124] overflow-hidden rounded-[4px]">
                  <div 
                    className={`h-full transition-all ${item.accuracy >= 80 ? 'bg-[#287A52]' : item.accuracy >= 50 ? 'bg-[#F3E6A5]' : 'bg-[#F2A18E]'}`}
                    style={{ width: `${item.accuracy}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#747474] pt-2 border-t border-[#202124]/15">
                  <span>الأخطاء المسجلة: <strong className="text-[#B83A3A] font-mono">{item.mistakes}</strong></span>
                  <button
                    onClick={() => setActivePracticeTopic(item.topic === activePracticeTopic ? null : item.topic)}
                    className="px-3 py-1.5 bg-[#405DE6] hover:bg-[#334DC6] text-white border border-[#202124] shadow-[1.5px_1.5px_0px_#202124] font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors rounded-xs"
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
            <div className="p-6 bg-[#F7F5EF] border-2 border-[#202124] shadow-[4px_4px_0px_#202124] rounded-xs space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[#202124] pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#405DE6]" />
                  <h3 className="font-bold text-base text-[#202124]">
                    تمرين تقوية فوري على: <span className="bg-[#F3E6A5] px-2 py-0.5 border border-[#202124]">{activePracticeTopic}</span>
                  </h3>
                </div>
                <button
                  onClick={() => setActivePracticeTopic(null)}
                  className="p-1.5 bg-white border border-[#202124] hover:bg-[#F2A18E] text-[#202124] transition-colors rounded-xs cursor-pointer"
                  title="إغلاق التمرين"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {practiceQuestionsForTopic.length === 0 ? (
                <div className="text-center py-6 text-[#747474] text-xs font-bold">
                  جاري تجهيز أسئلة إضافية لهذا المحور... يمكنك مراجعة الدرس المتعلق به في قائمة الدروس.
                </div>
              ) : (
                <div className="space-y-4">
                  {practiceQuestionsForTopic.map(q => {
                    const ans = practiceAnswers[q.id] || '';
                    const isChecked = practiceResults[q.id] !== undefined;
                    const isCorrect = practiceResults[q.id];

                    return (
                      <div key={q.id} className="p-4 bg-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] space-y-3 rounded-xs">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#405DE6] font-mono font-bold">{q.year} • {q.session}</span>
                          <span className="text-[#747474] font-bold">{q.category}</span>
                        </div>
                        <p dir="ltr" className="text-sm font-bold text-[#202124] text-left font-mono">{q.questionText}</p>

                        <div className="flex gap-2">
                          <input
                            type="text"
                            dir="ltr"
                            placeholder="Type your answer here..."
                            value={ans}
                            onChange={(e) => setPracticeAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                            className="flex-1 px-3 py-2 bg-[#F7F5EF] border-2 border-[#202124] rounded-xs text-xs font-mono font-bold text-[#202124] focus:bg-white focus:outline-none"
                          />
                          <button
                            onClick={() => {
                              const cleanedU = (ans || '').trim().toLowerCase();
                              const cleanedT = (q.correctAnswer || '').trim().toLowerCase();
                              const correct = cleanedU === cleanedT || (cleanedT.includes(cleanedU) && cleanedU.length > 2);
                              setPracticeResults(prev => ({ ...prev, [q.id]: correct }));
                            }}
                            className="px-4 py-2 bg-[#405DE6] hover:bg-[#334DC6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] font-bold text-xs rounded-xs cursor-pointer"
                          >
                            تحقق
                          </button>
                        </div>

                        {isChecked && (
                          <div className={`p-3 rounded-xs text-xs font-mono border-2 ${
                            isCorrect ? 'bg-[#D7E9DA] border-[#202124] text-[#202124]' : 'bg-[#F2A18E] border-[#202124] text-[#202124]'
                          }`}>
                            <div className="font-bold">{isCorrect ? '✓ إجابة صحيحة ومطابقة للكنترول' : `✗ خطأ — الجواب الوزاري: ${q.correctAnswer}`}</div>
                            {q.ruleExplanation && <p className="text-[11px] font-sans mt-1 text-[#202124]/80">{q.ruleExplanation}</p>}
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
            <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-12 text-center text-[#747474]">
              <Bookmark className="w-12 h-12 mx-auto mb-3 text-[#202124]/40" />
              <h3 className="text-lg font-bold text-[#202124] mb-1">لا توجد أسئلة محفوظة حتى الآن</h3>
              <p className="text-sm text-[#747474] max-w-md mx-auto mb-5 leading-relaxed">
                يمكنك حفظ أي سؤال وزاري صعب أثناء خوض الاختبارات الوزارية من خلال النقر على أيقونة الإشارة المرجعية ليظهر هنا للمراجعة السريعة.
              </p>
              <button
                onClick={() => onNavigateToTab('exam')}
                className="px-5 py-2.5 bg-[#405DE6] hover:bg-[#334DC6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] text-xs font-bold transition-all cursor-pointer rounded-xs"
              >
                انتقل إلى بنك الأسئلة الوزارية
              </button>
            </div>
          ) : (
            bookmarkedQuestions.map(q => {
              const isRevealed = revealedSolutions[q.id];
              return (
                <div key={q.id} className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-[#F3E6A5] text-[#202124] border border-[#202124]">
                      {q.year} - {q.session}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#405DE6] font-mono font-bold">الوحدة {q.unitId} • {q.topic}</span>
                      {onToggleBookmark && (
                        <button
                          type="button"
                          onClick={() => onToggleBookmark(q.id)}
                          className="p-1 rounded-xs bg-[#F7F5EF] hover:bg-[#F2A18E] border border-[#202124] text-[#202124] cursor-pointer"
                          title="إزالة من المفضلة"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-[#F2A18E]" />
                        </button>
                      )}
                    </div>
                  </div>
                  <p dir="ltr" className="text-base font-bold text-[#202124] mb-3 text-left font-mono">{q.questionText}</p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#202124]/15">
                    <button
                      onClick={() => setRevealedSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="text-xs font-bold text-[#405DE6] hover:text-[#202124] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <HelpCircle className="w-4 h-4" />
                      <span>{isRevealed ? 'إخفاء الحل' : 'كشف الحل النموذجي والقاعدة الوزارية'}</span>
                    </button>
                  </div>

                  {isRevealed && (
                    <div className="lesson-answer mt-3">
                      <div className="lesson-answer__label">الجواب النموذجي المعتمد</div>
                      <div className="lesson-answer__value">{q.correctAnswer}</div>
                      {q.ruleExplanation && <p className="lesson-answer__explanation">{q.ruleExplanation}</p>}
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
              className="p-4 bg-white hover:bg-[#F7F5EF] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs cursor-pointer transition-all flex items-center justify-between gap-3 group"
            >
              <div>
                <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold bg-[#F3E6A5] text-[#202124] border border-[#202124] mb-1 inline-block">
                  الوحدة {lesson.unitId} • درس {lesson.lessonNumber}
                </span>
                <h4 className="text-sm font-bold text-[#202124] group-hover:text-[#405DE6] transition-colors">
                  {lesson.titleAr}
                </h4>
                <p dir="ltr" className="text-xs font-mono text-[#405DE6] text-left">{lesson.titleEn}</p>
                <p className="text-xs text-[#747474] line-clamp-1 mt-0.5">{lesson.summary}</p>
              </div>
              <ArrowLeft className="w-4 h-4 text-[#405DE6] group-hover:-translate-x-1 transition-transform shrink-0" />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#202124]">دفتر الملاحظات والأفكار الذهبية</h3>
            <button
              onClick={() => setIsAddingNote(!isAddingNote)}
              className="px-3.5 py-1.5 bg-[#405DE6] hover:bg-[#334DC6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] font-bold text-xs flex items-center gap-1.5 cursor-pointer rounded-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>إضافة ملاحظة</span>
            </button>
          </div>

          {isAddingNote && (
            <form onSubmit={handleAddNote} className="p-5 bg-white border-2 border-[#202124] shadow-[3.5px_3.5px_0px_#202124] rounded-xs space-y-3">
              <input
                type="text"
                placeholder="عنوان الملاحظة (مثال: فخ قاعدة if الشرطية الثالثة)..."
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F5EF] border-2 border-[#202124] rounded-xs text-xs font-bold text-[#202124] focus:bg-white focus:outline-none"
                required
              />
              <textarea
                rows={3}
                placeholder="اكتب ملاحظتك الذهبية هنا..."
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
                className="w-full p-3 bg-[#F7F5EF] border-2 border-[#202124] rounded-xs text-xs font-bold text-[#202124] focus:bg-white focus:outline-none"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingNote(false)}
                  className="px-3 py-1.5 bg-white border border-[#202124] text-[#202124] hover:bg-[#F7F5EF] text-xs font-bold rounded-xs cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#405DE6] hover:bg-[#334DC6] text-white border-2 border-[#202124] shadow-[1.5px_1.5px_0px_#202124] font-bold text-xs rounded-xs cursor-pointer"
                >
                  حفظ في الملف
                </button>
              </div>
            </form>
          )}

          {(!studentState.notes || studentState.notes.length === 0) ? (
            <div className="bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs p-12 text-center text-[#747474]">
              <Award className="w-12 h-12 mx-auto mb-3 text-[#202124]/40" />
              <h3 className="text-lg font-bold text-[#202124] mb-1">لا توجد ملاحظات مدونة بعد</h3>
              <p className="text-sm text-[#747474] max-w-md mx-auto leading-relaxed">
                أثناء تصفح الدروس والمراجعة، يمكنك تدوين أي ملاحظة أو فكرة ذهبية في ملفك السحابي لحفظها والرجوع إليها ليلة الامتحان.
              </p>
            </div>
          ) : (
            studentState.notes.map(note => (
              <div key={note.id} className="p-4 bg-white border-2 border-[#202124] shadow-[3px_3px_0px_#202124] rounded-xs flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-bold text-sm text-[#405DE6] mb-1">{note.title}</h4>
                  <p className="text-xs text-[#202124] leading-relaxed whitespace-pre-wrap">{note.content}</p>
                  <span className="text-[10px] font-mono text-[#747474] mt-2 block">{new Date(note.createdAt).toLocaleDateString('ar-IQ')}</span>
                </div>
                {onSaveNotes && (
                  <button
                    type="button"
                    onClick={() => handleDeleteNote(note.id)}
                    className="p-1.5 text-[#747474] hover:text-[#B83A3A] transition-colors cursor-pointer"
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
