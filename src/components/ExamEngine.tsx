import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, Search, Filter, CheckCircle2, Clock, 
  RotateCcw, Sparkles, BookOpen, AlertCircle, Award, Check, X, ArrowLeft, Trophy, FileText
} from 'lucide-react';
import { getQuestionsForGrade, getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';
import { MinisterialExamQuestion, EducationalGrade, ExamResultRecord, ExamAnswerRecord } from '../types';
import { triggerCelebration } from '../utils/storage';
import { MinisterialMockSimulator } from './MinisterialMockSimulator';
import { Bookmark } from 'lucide-react';

interface ExamEngineProps {
  studentName?: string;
  onRecordResult?: (record: ExamResultRecord) => Promise<void> | void;
  defaultMode?: 'practice' | 'mock' | 'full-mock';
  grade?: EducationalGrade;
  bookmarkedQuestionIds?: string[];
  onToggleBookmark?: (questionId: string) => void;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const ExamEngine: React.FC<ExamEngineProps> = ({
  studentName = 'طالب المنهاج المتميز',
  onRecordResult,
  defaultMode = 'practice',
  grade = 'sixth-preparatory',
  bookmarkedQuestionIds = [],
  onToggleBookmark,
  onSelectGrade,
}) => {
  const baseQuestionsList: MinisterialExamQuestion[] = getQuestionsForGrade(grade);
  const gradeMeta = getGradeMeta(grade);

  // Mode: 'practice' vs 'mock' vs 'full-mock'
  const [mode, setMode] = useState<'practice' | 'mock' | 'full-mock'>(defaultMode);

  // Filtering state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Practice mode revealed answers
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Mock Exam State (Quick 10Q)
  const [isExamActive, setIsExamActive] = useState(false);
  const [examQuestions, setExamQuestions] = useState<MinisterialExamQuestion[]>([]);
  const [userExamAnswers, setUserExamAnswers] = useState<Record<string, string>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes (600s)
  const [persistenceStatus, setPersistenceStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [persistenceError, setPersistenceError] = useState<string | null>(null);
  const [lastSubmittedRecord, setLastSubmittedRecord] = useState<ExamResultRecord | null>(null);

  const persistExamResult = async (record: ExamResultRecord) => {
    if (!onRecordResult) {
      setPersistenceStatus("error");
      setPersistenceError("لم يتم ربط خدمة الحفظ الآمن بنتيجة الامتحان.");
      return;
    }
    setPersistenceStatus("saving");
    setPersistenceError(null);
    try {
      await onRecordResult(record);
      setPersistenceStatus("saved");
    } catch (error) {
      setPersistenceStatus("error");
      setPersistenceError(error instanceof Error ? error.message : "تعذر حفظ النتيجة.");
    }
  };

  // Start a new mock exam
  const handleStartMockExam = () => {
    // Shuffle and pick 10 questions
    const shuffled = [...baseQuestionsList].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setExamQuestions(selected);
    setUserExamAnswers({});
    setExamSubmitted(false);
    setPersistenceStatus("idle");
    setPersistenceError(null);
    setLastSubmittedRecord(null);
    setTimeLeft(600);
    setIsExamActive(true);
  };

  // Timer loop for Mock Exam
  useEffect(() => {
    if (!isExamActive || examSubmitted) return;
    if (timeLeft <= 0) {
      handleSubmitMockExam();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isExamActive, examSubmitted, timeLeft]);

  const handleSubmitMockExam = () => {
    setExamSubmitted(true);
    let correctCount = 0;
    const answersList: ExamAnswerRecord[] = [];

    examQuestions.forEach(q => {
      const userAns = (userExamAnswers[q.id] || '').trim().toLowerCase();
      const targetAns = q.correctAnswer.trim().toLowerCase();
      const isCorrect = userAns === targetAns;
      if (isCorrect) correctCount++;
      answersList.push({
        questionId: q.id,
        studentAnswer: userExamAnswers[q.id] || '',
        correctAnswer: q.correctAnswer,
        isCorrect,
        category: q.category
      });
    });

    if (onRecordResult) {
      const record: ExamResultRecord = {
        id: 'quick-mock-' + Date.now(),
        examId: 'quick-10-challenge',
        examTitle: 'تحدي الأسئلة الوزارية السريعة (10 أسئلة)',
        score: correctCount * 10,
        maxScore: 100,
        percentage: Math.round((correctCount / examQuestions.length) * 100),
        timeSpentSeconds: Math.max(1, 600 - timeLeft),
        timestamp: new Date().toISOString(),
        answers: answersList,
      };
      setLastSubmittedRecord(record);
      void persistExamResult(record);
    } else {
      setPersistenceStatus("error");
      setPersistenceError("تعذر حفظ النتيجة: لا توجد خدمة تسجيل مرتبطة بهذا الامتحان.");
    }

    if (correctCount >= 7) {
      triggerCelebration();
    }
  };

  // Filtered practice questions
  const filteredQuestions = baseQuestionsList.filter(q => {
    const matchesSearch = q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          q.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesUnit = selectedUnit === 'all' || q.unitId.toString() === selectedUnit;
    const matchesYear = selectedYear === 'all' || q.year === selectedYear;
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    return matchesSearch && matchesUnit && matchesYear && matchesCategory;
  });

  const toggleRevealSolution = (id: string) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="lesson-reading space-y-6 pb-20 max-w-5xl mx-auto">
      
      {/* Header & Mode Switcher */}
      <div className="p-5 sm:p-6 bg-surface border-3 border-ink shadow-brutal-action flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-yellow text-ink border-2 border-ink shadow-brutal-sm text-xs font-mono font-bold mb-2 rounded-xs">
              <HelpCircle className="w-3.5 h-3.5 text-cobalt" />
              <span>{gradeMeta.isMinisterial ? `الأرشيف الوزاري · ${gradeMeta.nameAr}` : `بنك الأسئلة والتمارين · ${gradeMeta.nameAr}`}</span>
            </div>
            <h1 className="font-display text-xl sm:text-3xl font-black text-ink">
              محرك الاختبارات وبنك الأسئلة • {gradeMeta.nameAr}
            </h1>
            <p className="text-xs sm:text-sm text-ink/70 font-medium mt-1">
              مجموعة شاملة من أسئلة المنهج والنماذج الامتحانية مع الشرح والحل النموذجي بإشراف الأستاذ مصطفى تركي
            </p>
          </div>

          {/* Toggle Mode */}
          <div className="flex flex-wrap items-center p-1 bg-paper border-2 border-ink gap-1">
            <button
              type="button"
              id="mode-full-mock-btn"
              onClick={() => setMode('full-mock')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 cursor-pointer border ${
                mode === 'full-mock'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-yellow" />
              <span>{gradeMeta.isMinisterial ? 'محاكي الامتحان الوزاري الشامل (100 د)' : 'محاكي الامتحان النهائي الشامل (100 د)'}</span>
            </button>
            
            <button
              type="button"
              id="mode-practice-btn"
              onClick={() => setMode('practice')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-black transition-all cursor-pointer border ${
                mode === 'practice'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              بنك الأسئلة والبحث
            </button>
            
            <button
              type="button"
              id="mode-mock-btn"
              onClick={() => setMode('mock')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-black transition-all cursor-pointer border ${
                mode === 'mock'
                  ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                  : 'bg-transparent text-ink border-transparent hover:bg-surface'
              }`}
            >
              تحدي 10 أسئلة سريعة
            </button>
          </div>
        </div>

        {/* Grade Isolation Badge */}
        <div className="pt-3 border-t-2 border-ink flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-ink">الأسئلة مقيدة بحسب:</span>
            <span className="px-2.5 py-0.5 bg-cobalt text-surface font-black text-xs border border-ink">
              {gradeMeta.nameAr}
            </span>
          </div>
        </div>
      </div>

      {/* ===================== MODE 0: FULL MINISTERIAL MOCK (100 MARKS) ===================== */}
      {mode === 'full-mock' && (
        <MinisterialMockSimulator 
          studentName={studentName}
          grade={grade}
          onSelectGrade={onSelectGrade}
          onClose={() => setMode('practice')}
          bookmarkedQuestionIds={bookmarkedQuestionIds}
          onToggleBookmark={onToggleBookmark}
        />
      )}

      {/* ===================== MODE 1: PRACTICE MODE ===================== */}
      {mode === 'practice' && (
        <div className="space-y-6">
          
          {/* Filter Bar */}
          <div className="p-4 sm:p-5 bg-surface border-3 border-ink shadow-brutal-callout space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-ink/60 absolute right-3.5 top-3.5" />
              <input
                id="search-exam-input"
                type="text"
                placeholder="ابحث عن سؤال، موضوع، أو قاعدة (مثلاً: used to, While, Zaid)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2 bg-paper border-2 border-ink text-xs font-bold text-ink placeholder:text-ink/50 focus:outline-none focus:bg-surface transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="p-2 bg-surface border-2 border-ink text-ink focus:outline-none cursor-pointer"
              >
                <option value="all">جميع الوحدات</option>
                <option value="1">الوحدة 1</option>
                <option value="2">الوحدة 2</option>
                <option value="3">الوحدة 3</option>
                <option value="5">الوحدة 5</option>
                <option value="6">الوحدة 6</option>
                <option value="7">الوحدة 7</option>
                <option value="8">الوحدة 8</option>
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="p-2 bg-surface border-2 border-ink text-ink focus:outline-none cursor-pointer"
              >
                <option value="all">جميع السنوات (2014-2025)</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 bg-surface border-2 border-ink text-ink focus:outline-none cursor-pointer"
              >
                <option value="all">جميع الأقسام</option>
                <option value="Grammar">قواعد (Grammar)</option>
                <option value="Reading">قطع استيعابية (Reading)</option>
                <option value="Vocabulary">مفردات (Vocabulary)</option>
                <option value="Literature">أدب (Literature)</option>
              </select>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedUnit('all');
                  setSelectedYear('all');
                  setSelectedCategory('all');
                }}
                className="p-2 bg-paper hover:bg-surface text-ink border-2 border-ink font-black transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة الضبط</span>
              </button>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-ink/80 px-1 font-bold">
              <span>SHOWING {filteredQuestions.length} QUESTIONS</span>
              <span>انقر لكشف الحل والتعليل النموذجي</span>
            </div>

            {filteredQuestions.length === 0 ? (
              <div className="p-10 text-center bg-surface border-3 border-ink shadow-brutal-action space-y-3">
                <HelpCircle className="w-10 h-10 mx-auto text-ink" />
                <p className="font-black text-ink text-base">لا توجد أسئلة تطابق معايير البحث الحالية</p>
                <p className="text-xs text-ink/60">جرب تغيير السنة أو الوحدة المختارة</p>
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const isRevealed = !!revealedSolutions[q.id];

                return (
                  <div
                    key={q.id}
                    id={`ministerial-question-${q.id}`}
                    className="p-5 sm:p-6 bg-surface border-3 border-ink shadow-brutal-callout hover:shadow-brutal-lg hover:-translate-y-0.5 transition-all space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black font-mono px-2 py-0.5 bg-cobalt text-surface border border-ink">
                          UNIT {q.unitId}
                        </span>
                        <span className="text-xs font-black text-ink">
                          {q.topic}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold">
                        <span className="px-2 py-0.2 bg-yellow text-ink border border-ink">
                          YEAR {q.year} • {q.session}
                        </span>
                        <span className="px-2 py-0.2 bg-paper text-ink border border-ink">
                          {q.category}
                        </span>
                      </div>
                    </div>

                    <p dir="ltr" className="text-base sm:text-lg font-black text-ink text-left en-sentence font-mono break-words">
                      {q.questionText}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <button
                          type="button"
                          onClick={() => toggleRevealSolution(q.id)}
                          className="text-xs font-bold text-cobalt hover:text-ink hover:underline underline-offset-4 flex items-center gap-1.5 cursor-pointer py-1 px-1 rounded-[4px]"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{isRevealed ? 'إخفاء الحل' : 'كشف الحل والتعليل النموذجي'}</span>
                        </button>

                        {onToggleBookmark && (
                          <button
                            type="button"
                            onClick={() => onToggleBookmark(q.id)}
                            className={`px-3 py-1.5 border-2 border-ink rounded-xs text-xs font-bold flex items-center gap-1.5 shadow-brutal-sm transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
                              bookmarkedQuestionIds.includes(q.id)
                                ? 'bg-yellow text-ink'
                                : 'bg-paper hover:bg-surface text-ink'
                            }`}
                            title={bookmarkedQuestionIds.includes(q.id) ? 'إزالة من المفضلة' : 'حفظ في المفضلة والمراجعة المركزة'}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${bookmarkedQuestionIds.includes(q.id) ? 'fill-ink text-ink' : ''}`} />
                            <span className="text-[11px] font-black">
                              {bookmarkedQuestionIds.includes(q.id) ? 'محفوظ' : 'حفظ'}
                            </span>
                          </button>
                        )}
                      </div>

                      <span className="text-xs font-mono font-bold text-muted-gray flex items-center gap-1">
                        <span>مراجعة مباشرة</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {isRevealed && (
                      <div className="lesson-answer">
                        <span className="lesson-answer__label">الإجابة النموذجية</span>
                        <p dir="ltr" className="lesson-answer__value">{q.correctAnswer}</p>
                        <p className="lesson-answer__explanation">
                          <span className="font-bold">التعليل وقاعدة الحل: </span>
                          {q.ruleExplanation}
                        </p>
                      </div>
                    )}

                  </div>
                );
              })
            )}
          </div>

        </div>
      )}

      {/* ===================== MODE 2: TIMED MOCK EXAM ===================== */}
      {mode === 'mock' && (
        <div className="space-y-6">
          {!isExamActive ? (
            <div className="p-8 sm:p-12 text-center bg-surface rounded-xs border-3 border-ink shadow-brutal-lg space-y-6">
              <div className="w-16 h-16 mx-auto rounded-xs bg-yellow text-ink border-2 border-ink shadow-brutal-btn flex items-center justify-center">
                <Clock className="w-8 h-8 text-ink" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h2 className="text-2xl font-black text-ink">
                  محاكاة الاختبار الوزاري الموقوت
                </h2>
                <p className="text-xs sm:text-sm text-ink/75 font-bold leading-relaxed">
                  10 أسئلة وزارية عشوائية مختارة من نماذج 2014-2025. لديك 10 دقائق للإجابة لتتعود على ضغط الوقت في قاعة الامتحان الوزاري.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold text-ink">
                <span className="px-3 py-1.5 rounded-xs bg-paper border-2 border-ink shadow-brutal-sm">⏱️ الوقت: 10 دقائق</span>
                <span className="px-3 py-1.5 rounded-xs bg-paper border-2 border-ink shadow-brutal-sm">📝 العدد: 10 أسئلة</span>
                <span className="px-3 py-1.5 rounded-xs bg-paper border-2 border-ink shadow-brutal-sm">🎯 الدرجة: من 100</span>
              </div>

              <button
                type="button"
                id="start-mock-exam-btn"
                onClick={handleStartMockExam}
                className="px-8 py-3.5 rounded-xs bg-cobalt hover:bg-cobalt-hover text-surface font-black text-sm border-3 border-ink shadow-brutal-action cursor-pointer active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                ابدأ الاختبار الوزاري الآن
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Sticky Top Status Bar */}
              <div className="sticky top-20 z-30 p-3.5 sm:p-4 rounded-[6px] bg-ink text-surface border-2 border-ink shadow-brutal-md flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-yellow font-mono font-black text-base tabular-nums">
                    <Clock className="w-5 h-5 animate-pulse" />
                    <span>{formatTime(timeLeft)}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-surface/70 hidden sm:inline">الوقت المتبقي</span>
                </div>

                <div className="text-xs font-mono font-bold text-surface/90 tabular-nums">
                  تمت الإجابة على {Object.keys(userExamAnswers).length} من {examQuestions.length}
                </div>

                {!examSubmitted ? (
                  <button
                    type="button"
                    id="submit-mock-exam-btn"
                    onClick={handleSubmitMockExam}
                    className="px-4 py-2 rounded-[4px] bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink font-black text-xs shadow-brutal-sm cursor-pointer active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  >
                    تسليم الدفتر الامتحاني
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleStartMockExam}
                    className="px-4 py-2 rounded-[4px] bg-surface hover:bg-paper text-ink border-2 border-ink font-black text-xs shadow-brutal-sm cursor-pointer active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>إعادة اختبار جديد</span>
                  </button>
                )}
              </div>

              {/* Result Card if submitted */}
              {examSubmitted && (
                <div className="p-6 sm:p-8 rounded-xs bg-surface border-3 border-ink shadow-brutal-lg text-ink space-y-4 text-center">
                  <div className="w-14 h-14 mx-auto bg-yellow text-ink border-2 border-ink shadow-brutal-sm rounded-xs flex items-center justify-center">
                    <Award className="w-8 h-8 text-cobalt" />
                  </div>
                  <h3 className="text-2xl font-black text-ink">نتيجة الاختبار الوزاري التجريبي</h3>
                  <div className="text-sm font-bold text-muted-gray" role="status" aria-live="polite">
                    {persistenceStatus === "saving" && "جارٍ حفظ النتيجة ونقاط الخبرة في قاعدة البيانات الآمنة..."}
                    {persistenceStatus === "saved" && "تم حفظ النتيجة ونقاط الخبرة بنجاح."}
                    {persistenceStatus === "error" && (
                      <div className="space-y-2">
                        <p className="text-semantic-error font-bold">{persistenceError || "تعذر حفظ النتيجة."}</p>
                        {lastSubmittedRecord && onRecordResult && (
                          <button
                            type="button"
                            onClick={() => void persistExamResult(lastSubmittedRecord)}
                            className="px-4 py-2 bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-sm rounded-xs font-black text-xs cursor-pointer"
                          >
                            إعادة محاولة الحفظ الآمن
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {(() => {
                    let correct = 0;
                    examQuestions.forEach(q => {
                      const u = (userExamAnswers[q.id] || '').trim().toLowerCase();
                      const t = q.correctAnswer.trim().toLowerCase();
                      if (u === t || t.includes(u) && u.length > 3) correct++;
                    });
                    const score = correct * 10;
                    return (
                      <div className="space-y-2">
                        <p className="text-5xl font-black font-mono text-cobalt">{score} / 100</p>
                        <p className="text-xs sm:text-sm text-ink font-bold max-w-lg mx-auto leading-relaxed">
                          {score >= 90 ? 'مستوى ممتاز ومتقدم! تدريب دقيق وشامل للاستعداد للامتحان الوزاري 🌟' :
                           score >= 70 ? 'أداء رائع جداً! راجع الأسئلة التي تحتاج تركيزاً لتفادي أي فخاخ امتحانية 👍' :
                           'تدريب مفيد كبداية؛ استمر في مراجعة القواعد وحل النماذج الوزارية لتعزيز ثقتك 💪'}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Questions List */}
              <div className="space-y-4">
                {examQuestions.map((q, idx) => {
                  const userAns = userExamAnswers[q.id] || '';
                  const isCorrect = examSubmitted && (
                    userAns.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase() ||
                    q.correctAnswer.trim().toLowerCase().includes(userAns.trim().toLowerCase()) && userAns.length > 3
                  );

                  return (
                    <div
                      key={q.id}
                      className={`p-6 rounded-xs border-2 transition-all space-y-3 ${
                        examSubmitted
                          ? isCorrect
                            ? 'bg-soft-mint border-ink shadow-brutal-callout'
                            : 'bg-answer-review-bg border-semantic-error shadow-brutal-callout'
                          : 'bg-surface border-ink shadow-brutal-callout'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs font-mono font-bold text-ink border-b border-ink/15 pb-2">
                        <span className="font-black">السؤال {idx + 1} ({q.year} - {q.session})</span>
                        <span className="px-2 py-0.5 rounded-xs bg-paper border border-ink shrink-0">الوحدة 0{q.unitId}</span>
                      </div>

                      <p dir="ltr" className="font-black font-mono text-base sm:text-lg text-ink text-left en-sentence min-w-0 break-words">
                        {q.questionText}
                      </p>

                      <div className="pt-2">
                        <label className="block text-xs font-bold text-ink mb-1.5">
                          إجابتك:
                        </label>
                        <input
                          type="text"
                          dir="ltr"
                          disabled={examSubmitted}
                          placeholder="Type your answer in English here..."
                          value={userAns}
                          onChange={(e) => {
                            const val = e.target.value;
                            setUserExamAnswers(prev => ({ ...prev, [q.id]: val }));
                          }}
                          className="w-full px-4 py-2.5 rounded-xs bg-paper border-2 border-ink text-sm font-mono text-left focus:outline-hidden focus:bg-surface focus:shadow-brutal-sm text-ink"
                        />
                      </div>

                      {examSubmitted && (
                        <div className="lesson-answer">
                          <span className="lesson-answer__label">الإجابة النموذجية</span>
                          <p dir="ltr" className="lesson-answer__value min-w-0 break-words">{q.correctAnswer}</p>
                          <p className="lesson-answer__explanation">
                            <span className="font-bold">التعليل: </span>
                            {q.ruleExplanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
};
