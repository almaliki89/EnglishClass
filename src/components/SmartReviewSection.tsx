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
      <div className="bg-surface border-3 border-ink shadow-brutal-modal p-6 md:p-8 text-ink rounded-xs">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-yellow text-ink border-2 border-ink shadow-brutal-sm text-xs font-mono font-bold rounded-xs">
            <Sparkles className="w-3.5 h-3.5 text-cobalt" />
            <span>المراجعة المركزة الذكية</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-ink">
            المراجعة المركزة • <span className="bg-yellow px-2 py-0.5 border-2 border-ink shadow-brutal-sm inline-block">{gradeMeta.nameAr}</span>
          </h1>

          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-medium">
            يحلل هذا القسم أداءك الحقيقي تلقائياً لـ {gradeMeta.nameAr} ويحدد مواضيع الضعف والأخطاء السابقة والأسئلة المحفوظة في مفضلتك لتمكينك من معالجتها فورياً.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <span className="px-3 py-1 bg-cobalt text-surface border-2 border-ink font-bold text-xs shadow-brutal-sm rounded-xs">
              منصة {gradeMeta.nameAr}
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t-2 border-ink">
          <div className="bg-paper p-3.5 border-2 border-ink shadow-brutal-callout text-center rounded-xs">
            <span className="text-xs font-mono font-bold text-ink/70 block mb-1">دقة الإجابات</span>
            <span className="text-xl sm:text-2xl font-black text-cobalt font-mono tabular-nums">{accuracyRate}%</span>
          </div>
          <div className="bg-paper p-3.5 border-2 border-ink shadow-brutal-callout text-center rounded-xs">
            <span className="text-xs font-mono font-bold text-muted-gray block mb-1">أسئلة محفوظة</span>
            <span className="text-xl sm:text-2xl font-black text-semantic-error font-mono tabular-nums">{bookmarkedQuestions.length}</span>
          </div>
          <div className="bg-paper p-3.5 border-2 border-ink shadow-brutal-callout text-center rounded-[4px]">
            <span className="text-xs font-mono font-bold text-muted-gray block mb-1">دروس متبقية</span>
            <span className="text-xl sm:text-2xl font-black text-ink font-mono tabular-nums">{incompleteLessons.length}</span>
          </div>
          <div className="bg-paper p-3.5 border-2 border-ink shadow-brutal-callout text-center rounded-[4px]">
            <span className="text-xs font-mono font-bold text-muted-gray block mb-1">ملاحظات مدونة</span>
            <span className="text-xl sm:text-2xl font-black text-ink font-mono tabular-nums">{studentState.notes?.length || 0}</span>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-paper border-2 border-ink shadow-brutal-callout rounded-[4px]">
        <button
          type="button"
          onClick={() => setActiveTab('weak-topics')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs md:text-sm font-bold transition-all cursor-pointer border rounded-[4px] ${
            activeTab === 'weak-topics'
              ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
              : 'bg-transparent text-ink border-transparent hover:bg-surface'
          }`}
        >
          <AlertTriangle className={`w-4 h-4 shrink-0 ${activeTab === 'weak-topics' ? 'text-yellow' : 'text-semantic-error'}`} />
          <span>المواضيع المحتاجة لتقوية ({weakTopicsList.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('bookmarks')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs md:text-sm font-bold transition-all cursor-pointer border rounded-xs ${
            activeTab === 'bookmarks'
              ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
              : 'bg-transparent text-ink border-transparent hover:bg-surface'
          }`}
        >
          <Bookmark className="w-4 h-4 shrink-0" />
          <span>الأسئلة المحفوظة ({bookmarkedQuestions.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('incomplete')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs md:text-sm font-bold transition-all cursor-pointer border rounded-xs ${
            activeTab === 'incomplete'
              ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
              : 'bg-transparent text-ink border-transparent hover:bg-surface'
          }`}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span>الدروس المتبقية ({incompleteLessons.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('notes')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs md:text-sm font-bold transition-all cursor-pointer border rounded-xs ${
            activeTab === 'notes'
              ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
              : 'bg-transparent text-ink border-transparent hover:bg-surface'
          }`}
        >
          <Award className="w-4 h-4 shrink-0" />
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
                className="bg-surface border-2 border-ink shadow-brutal-md rounded-xs p-5 space-y-3 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-paper border border-ink text-cobalt mb-1 inline-block rounded-xs">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm text-ink break-words">{item.topic}</h3>
                  </div>
                  <span className={`text-xs font-mono font-black px-2.5 py-1 border border-ink rounded-xs shrink-0 tabular-nums ${
                    item.accuracy >= 80 ? 'bg-soft-mint text-ink' : 'bg-coral text-ink'
                  }`}>
                    {item.accuracy}% دقة
                  </span>
                </div>

                <div className="w-full bg-progress-track h-2.5 border border-ink overflow-hidden rounded-[4px]">
                  <div 
                    className={`h-full transition-all ${item.accuracy >= 80 ? 'bg-semantic-success' : item.accuracy >= 50 ? 'bg-yellow' : 'bg-coral'}`}
                    style={{ width: `${item.accuracy}%` }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-gray pt-2 border-t border-ink/15">
                  <span>الأخطاء المسجلة: <strong className="text-semantic-error font-mono tabular-nums">{item.mistakes}</strong></span>
                  <button
                    type="button"
                    onClick={() => setActivePracticeTopic(item.topic === activePracticeTopic ? null : item.topic)}
                    className="px-3 py-1.5 bg-cobalt hover:bg-cobalt-hover text-surface border border-ink shadow-brutal-xs font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors rounded-xs"
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
            <div className="p-6 bg-paper border-2 border-ink shadow-brutal-action rounded-xs space-y-4">
              <div className="flex items-center justify-between gap-2 border-b-2 border-ink pb-3">
                <div className="flex items-center gap-2 min-w-0">
                  <Sparkles className="w-5 h-5 text-cobalt shrink-0" />
                  <h3 className="font-bold text-base text-ink min-w-0 break-words">
                    تمرين تقوية فوري على: <span className="bg-yellow px-2 py-0.5 border border-ink inline-block">{activePracticeTopic}</span>
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePracticeTopic(null)}
                  className="p-1.5 bg-surface border border-ink hover:bg-coral text-ink transition-colors rounded-xs cursor-pointer shrink-0"
                  aria-label="إغلاق التمرين"
                  title="إغلاق التمرين"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {practiceQuestionsForTopic.length === 0 ? (
                <div className="text-center py-6 text-muted-gray text-xs font-bold">
                  جاري تجهيز أسئلة إضافية لهذا المحور... يمكنك مراجعة الدرس المتعلق به في قائمة الدروس.
                </div>
              ) : (
                <div className="space-y-4">
                  {practiceQuestionsForTopic.map(q => {
                    const ans = practiceAnswers[q.id] || '';
                    const isChecked = practiceResults[q.id] !== undefined;
                    const isCorrect = practiceResults[q.id];

                    return (
                      <div key={q.id} className="p-4 bg-surface border-2 border-ink shadow-brutal-sm space-y-3 rounded-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <span className="text-cobalt font-mono font-bold tabular-nums">{q.year} • {q.session}</span>
                          <span className="text-muted-gray font-bold">{q.category}</span>
                        </div>
                        <p dir="ltr" className="text-sm font-bold text-ink text-left font-mono min-w-0 break-words">{q.questionText}</p>

                        <div className="flex flex-col sm:flex-row gap-2">
                          <input
                            type="text"
                            dir="ltr"
                            placeholder="Type your answer here..."
                            value={ans}
                            onChange={(e) => setPracticeAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                            className="flex-1 px-3 py-2 bg-paper border-2 border-ink rounded-xs text-xs font-mono font-bold text-ink focus:bg-surface focus:outline-none min-w-0"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const cleanedU = (ans || '').trim().toLowerCase();
                              const cleanedT = (q.correctAnswer || '').trim().toLowerCase();
                              const correct = cleanedU === cleanedT || (cleanedT.includes(cleanedU) && cleanedU.length > 2);
                              setPracticeResults(prev => ({ ...prev, [q.id]: correct }));
                            }}
                            className="px-4 py-2 bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-sm font-bold text-xs rounded-xs cursor-pointer shrink-0"
                          >
                            تحقق
                          </button>
                        </div>

                        {isChecked && (
                          <div className={`p-3 rounded-xs text-xs font-mono border-2 border-ink text-ink ${
                            isCorrect ? 'bg-soft-mint' : 'bg-coral'
                          }`}>
                            <div className="font-bold break-words">{isCorrect ? '✓ إجابة صحيحة ومطابقة للنموذج' : `✗ خطأ — الجواب النموذجي: ${q.correctAnswer}`}</div>
                            {q.ruleExplanation && <p className="text-[11px] font-sans mt-1 text-ink/80">{q.ruleExplanation}</p>}
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
            <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-8 sm:p-12 text-center text-muted-gray">
              <Bookmark className="w-12 h-12 mx-auto mb-3 text-ink/40" />
              <h3 className="text-lg font-bold text-ink mb-1">لا توجد أسئلة محفوظة حتى الآن</h3>
              <p className="text-sm text-muted-gray max-w-md mx-auto mb-5 leading-relaxed">
                يمكنك حفظ أي سؤال صعب أثناء خوض الاختبارات من خلال النقر على أيقونة الإشارة المرجعية ليظهر هنا للمراجعة السريعة.
              </p>
              <button
                type="button"
                onClick={() => onNavigateToTab('exam')}
                className="px-5 py-2.5 bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-sm text-xs font-bold transition-all cursor-pointer rounded-xs"
              >
                انتقل إلى بنك الأسئلة الوزارية
              </button>
            </div>
          ) : (
            bookmarkedQuestions.map(q => {
              const isRevealed = revealedSolutions[q.id];
              return (
                <div key={q.id} className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-xs text-xs font-mono font-bold bg-yellow text-ink border border-ink tabular-nums">
                      {q.year} - {q.session}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-cobalt font-mono font-bold">الوحدة {q.unitId} • {q.topic}</span>
                      {onToggleBookmark && (
                        <button
                          type="button"
                          onClick={() => onToggleBookmark(q.id)}
                          className="p-1 rounded-xs bg-paper hover:bg-coral border border-ink text-ink cursor-pointer"
                          aria-label="إزالة من المفضلة"
                          title="إزالة من المفضلة"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-coral" />
                        </button>
                      )}
                    </div>
                  </div>
                  <p dir="ltr" className="text-base font-bold text-ink mb-3 text-left font-mono min-w-0 break-words">{q.questionText}</p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-ink/15">
                    <button
                      type="button"
                      onClick={() => setRevealedSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="text-xs font-bold text-cobalt hover:text-ink flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <HelpCircle className="w-4 h-4" />
                      <span>{isRevealed ? 'إخفاء الحل' : 'كشف الحل النموذجي والقاعدة'}</span>
                    </button>
                  </div>

                  {isRevealed && (
                    <div className="lesson-answer mt-3">
                      <div className="lesson-answer__label">الجواب النموذجي</div>
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
            <button
              type="button"
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className="w-full text-right p-4 bg-surface hover:bg-paper border-2 border-ink shadow-brutal-callout rounded-xs cursor-pointer transition-all flex items-center justify-between gap-3 group"
            >
              <div className="min-w-0">
                <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold bg-yellow text-ink border border-ink mb-1 inline-block">
                  الوحدة {lesson.unitId} • درس {lesson.lessonNumber}
                </span>
                <h4 className="text-sm font-bold text-ink group-hover:text-cobalt transition-colors">
                  {lesson.titleAr}
                </h4>
                <p dir="ltr" className="text-xs font-mono text-cobalt text-left break-words">{lesson.titleEn}</p>
                <p className="text-xs text-muted-gray line-clamp-1 mt-0.5">{lesson.summary}</p>
              </div>
              <ArrowLeft className="w-4 h-4 text-cobalt group-hover:-translate-x-1 transition-transform shrink-0" />
            </button>
          ))}
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-ink">دفتر الملاحظات والأفكار الذهبية</h3>
            <button
              type="button"
              onClick={() => setIsAddingNote(!isAddingNote)}
              className="px-3.5 py-1.5 bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-sm font-bold text-xs flex items-center gap-1.5 cursor-pointer rounded-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>إضافة ملاحظة</span>
            </button>
          </div>

          {isAddingNote && (
            <form onSubmit={handleAddNote} className="p-5 bg-surface border-2 border-ink shadow-brutal-md rounded-xs space-y-3">
              <input
                type="text"
                placeholder="عنوان الملاحظة (مثال: فخ قاعدة if الشرطية الثالثة)..."
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
                className="w-full px-3 py-2 bg-paper border-2 border-ink rounded-xs text-xs font-bold text-ink focus:bg-surface focus:outline-none"
                required
              />
              <textarea
                rows={3}
                placeholder="اكتب ملاحظتك الذهبية هنا..."
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
                className="w-full p-3 bg-paper border-2 border-ink rounded-xs text-xs font-bold text-ink focus:bg-surface focus:outline-none"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingNote(false)}
                  className="px-3 py-1.5 bg-surface border border-ink text-ink hover:bg-paper text-xs font-bold rounded-xs cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-xs font-bold text-xs rounded-xs cursor-pointer"
                >
                  حفظ في الملف
                </button>
              </div>
            </form>
          )}

          {(!studentState.notes || studentState.notes.length === 0) ? (
            <div className="bg-surface border-2 border-ink shadow-brutal-callout rounded-xs p-8 sm:p-12 text-center text-muted-gray">
              <Award className="w-12 h-12 mx-auto mb-3 text-ink/40" />
              <h3 className="text-lg font-bold text-ink mb-1">لا توجد ملاحظات مدونة بعد</h3>
              <p className="text-sm text-muted-gray max-w-md mx-auto leading-relaxed">
                أثناء تصفح الدروس والمراجعة، يمكنك تدوين أي ملاحظة أو فكرة ذهبية في ملفك السحابي لحفظها والرجوع إليها ليلة الامتحان.
              </p>
            </div>
          ) : (
            studentState.notes.map(note => (
              <div key={note.id} className="p-4 bg-surface border-2 border-ink shadow-brutal-callout rounded-xs flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="font-bold text-sm text-cobalt mb-1 break-words">{note.title}</h4>
                  <p className="text-xs text-ink leading-relaxed whitespace-pre-wrap break-words">{note.content}</p>
                  <span className="text-[10px] font-mono text-muted-gray mt-2 block">{new Date(note.createdAt).toLocaleDateString('ar-IQ')}</span>
                </div>
                {onSaveNotes && (
                  <button
                    type="button"
                    onClick={() => handleDeleteNote(note.id)}
                    className="p-1.5 text-muted-gray hover:text-semantic-error transition-colors cursor-pointer shrink-0"
                    aria-label="حذف الملاحظة"
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
