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
    <div className="space-y-6 pb-20 max-w-5xl mx-auto">
      
      {/* Header & Mode Switcher */}
      <div className="p-5 sm:p-6 bg-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-mono font-black mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#304FFE]" />
              <span>{gradeMeta.isMinisterial ? `MINISTERIAL ARCHIVE // ${gradeMeta.nameAr}` : `ACADEMIC QUESTION BANK // ${gradeMeta.nameAr}`}</span>
            </div>
            <h1 className="font-display text-xl sm:text-3xl font-black text-[#171717]">
              محرك الاختبارات وبنك الأسئلة • {gradeMeta.nameAr}
            </h1>
            <p className="text-xs sm:text-sm text-[#171717]/70 font-medium mt-1">
              مستخلصة من الدفاتر الامتحانية الرسمية لوزارة التربية العراقية مع الشرح والحل النموذجي بإشراف الأستاذ مصطفى تركي
            </p>
          </div>

          {/* Toggle Mode */}
          <div className="flex flex-wrap items-center p-1 bg-[#F4EFE3] border-2 border-[#171717] gap-1">
            <button
              id="mode-full-mock-btn"
              onClick={() => setMode('full-mock')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 cursor-pointer border ${
                mode === 'full-mock'
                  ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                  : 'bg-transparent text-[#171717] border-transparent hover:bg-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-[#E9FF57]" />
              <span>{gradeMeta.isMinisterial ? 'محاكي الامتحان الوزاري الشامل (100 د)' : 'محاكي الامتحان النهائي الشامل (100 د)'}</span>
            </button>
            
            <button
              id="mode-practice-btn"
              onClick={() => setMode('practice')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-black transition-all cursor-pointer border ${
                mode === 'practice'
                  ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                  : 'bg-transparent text-[#171717] border-transparent hover:bg-white'
              }`}
            >
              بنك الأسئلة والبحث
            </button>
            
            <button
              id="mode-mock-btn"
              onClick={() => setMode('mock')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-black transition-all cursor-pointer border ${
                mode === 'mock'
                  ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                  : 'bg-transparent text-[#171717] border-transparent hover:bg-white'
              }`}
            >
              تحدي 10 أسئلة سريعة
            </button>
          </div>
        </div>

        {/* Grade Isolation Badge */}
        <div className="pt-3 border-t-2 border-[#171717] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#171717]">الأسئلة مقيدة بحسب:</span>
            <span className="px-2.5 py-0.5 bg-[#304FFE] text-white font-black text-xs border border-[#171717]">
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
          <div className="p-4 sm:p-5 bg-white border-3 border-[#171717] shadow-[3px_3px_0px_#171717] space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-[#171717]/60 absolute right-3.5 top-3.5" />
              <input
                id="search-exam-input"
                type="text"
                placeholder="ابحث عن سؤال، موضوع، أو قاعدة (مثلاً: used to, While, Zaid)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2 bg-[#F4EFE3] border-2 border-[#171717] text-xs font-bold text-[#171717] placeholder:text-[#171717]/50 focus:outline-none focus:bg-white transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="p-2 bg-white border-2 border-[#171717] text-[#171717] focus:outline-none cursor-pointer"
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
                className="p-2 bg-white border-2 border-[#171717] text-[#171717] focus:outline-none cursor-pointer"
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
                className="p-2 bg-white border-2 border-[#171717] text-[#171717] focus:outline-none cursor-pointer"
              >
                <option value="all">جميع الأقسام</option>
                <option value="Grammar">قواعد (Grammar)</option>
                <option value="Reading">قطع استيعابية (Reading)</option>
                <option value="Vocabulary">مفردات (Vocabulary)</option>
                <option value="Literature">أدب (Literature)</option>
              </select>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedUnit('all');
                  setSelectedYear('all');
                  setSelectedCategory('all');
                }}
                className="p-2 bg-[#F4EFE3] hover:bg-white text-[#171717] border-2 border-[#171717] font-black transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة الضبط</span>
              </button>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#171717]/80 px-1 font-bold">
              <span>SHOWING {filteredQuestions.length} QUESTIONS</span>
              <span>انقر لكشف الحل والتعليل الوزاري</span>
            </div>

            {filteredQuestions.length === 0 ? (
              <div className="p-10 text-center bg-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] space-y-3">
                <HelpCircle className="w-10 h-10 mx-auto text-[#171717]" />
                <p className="font-black text-[#171717] text-base">لا توجد أسئلة تطابق معايير البحث الحالية</p>
                <p className="text-xs text-[#171717]/60">جرب تغيير السنة أو الوحدة المختارة</p>
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const isRevealed = !!revealedSolutions[q.id];

                return (
                  <div
                    key={q.id}
                    id={`ministerial-question-${q.id}`}
                    className="p-5 sm:p-6 bg-white border-3 border-[#171717] shadow-[3px_3px_0px_#171717] hover:shadow-[5px_5px_0px_#171717] hover:-translate-y-0.5 transition-all space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#171717] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black font-mono px-2 py-0.5 bg-[#304FFE] text-white border border-[#171717]">
                          UNIT {q.unitId}
                        </span>
                        <span className="text-xs font-black text-[#171717]">
                          {q.topic}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold">
                        <span className="px-2 py-0.2 bg-[#E9FF57] text-[#171717] border border-[#171717]">
                          YEAR {q.year} • {q.session}
                        </span>
                        <span className="px-2 py-0.2 bg-[#F4EFE3] text-[#171717] border border-[#171717]">
                          {q.category}
                        </span>
                      </div>
                    </div>

                    <p dir="ltr" className="text-base sm:text-lg font-black text-[#171717] text-left en-sentence font-mono">
                      {q.questionText}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleRevealSolution(q.id)}
                          className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{isRevealed ? 'إخفاء الحل' : 'كشف الحل والتعليل النموذجي'}</span>
                        </button>

                        {onToggleBookmark && (
                          <button
                            type="button"
                            onClick={() => onToggleBookmark(q.id)}
                            className={`px-2.5 py-1 rounded-lg border text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                              bookmarkedQuestionIds.includes(q.id)
                                ? 'bg-amber-100 text-amber-900 border-amber-300'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                            title={bookmarkedQuestionIds.includes(q.id) ? 'إزالة من المفضلة' : 'حفظ في المفضلة والمراجعة المركزة'}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${bookmarkedQuestionIds.includes(q.id) ? 'fill-amber-500 text-amber-600' : ''}`} />
                            <span className="text-[11px] font-bold">
                              {bookmarkedQuestionIds.includes(q.id) ? 'محفوظ' : 'حفظ'}
                            </span>
                          </button>
                        )}
                      </div>

                      <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                        <span>مراجعة مباشرة</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {isRevealed && (
                      <div className="mt-3 p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 space-y-2 text-right">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-indigo-900">الجواب الوزاري النموذجي:</span>
                          <span dir="ltr" className="font-mono text-sm font-black text-emerald-700 bg-white px-2.5 py-0.5 rounded-lg border border-emerald-200 bidi-en">
                            {q.correctAnswer}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          <span className="font-bold text-slate-900">التعليل وقاعدة الحل: </span>
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
            <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h2 className="text-2xl font-black text-slate-900">
                  محاكاة الاختبار الوزاري الموقوت
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  10 أسئلة وزارية عشوائية مختارة من نماذج 2014-2025. لديك 10 دقائق للإجابة لتتعود على ضغط الوقت في قاعة الامتحان الوزاري.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-600">
                <span className="px-3 py-1.5 rounded-xl bg-slate-100">⏱️ الوقت: 10 دقائق</span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100">📝 العدد: 10 أسئلة</span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100">🎯 الدرجة: من 100</span>
              </div>

              <button
                id="start-mock-exam-btn"
                onClick={handleStartMockExam}
                className="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95"
              >
                ابدأ الاختبار الوزاري الآن
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Sticky Top Status Bar */}
              <div className="sticky top-20 z-30 p-4 rounded-2xl bg-slate-900 text-white shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-base">
                    <Clock className="w-5 h-5 animate-pulse" />
                    <span>{formatTime(timeLeft)}</span>
                  </div>
                  <span className="text-xs text-slate-400 hidden sm:inline">الوقت المتبقي</span>
                </div>

                <div className="text-xs font-bold text-slate-300">
                  تمت الإجابة على {Object.keys(userExamAnswers).length} من {examQuestions.length}
                </div>

                {!examSubmitted ? (
                  <button
                    id="submit-mock-exam-btn"
                    onClick={handleSubmitMockExam}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-xs transition-all"
                  >
                    تسليم الدفتر الامتحاني
                  </button>
                ) : (
                  <button
                    onClick={handleStartMockExam}
                    className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>إعادة اختبار جديد</span>
                  </button>
                )}
              </div>

              {/* Result Card if submitted */}
              {examSubmitted && (
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-xl space-y-4 text-center">
                  <Award className="w-12 h-12 mx-auto text-amber-400" />
                  <h3 className="text-2xl font-black">نتيجة الاختبار الوزاري التجريبي</h3>
                  <div className="text-sm font-bold" role="status" aria-live="polite">
                    {persistenceStatus === "saving" && "جارٍ حفظ النتيجة ونقاط الخبرة في قاعدة البيانات الآمنة..."}
                    {persistenceStatus === "saved" && "تم حفظ النتيجة ونقاط الخبرة بنجاح."}
                    {persistenceStatus === "error" && (
                      <div className="space-y-2">
                        <p className="text-rose-200">{persistenceError || "تعذر حفظ النتيجة."}</p>
                        {lastSubmittedRecord && onRecordResult && (
                          <button
                            type="button"
                            onClick={() => void persistExamResult(lastSubmittedRecord)}
                            className="px-3 py-2 bg-white text-slate-900 rounded-xl font-black text-xs"
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
                        <p className="text-5xl font-black text-amber-400">{score} / 100</p>
                        <p className="text-xs sm:text-sm text-slate-300">
                          {score >= 90 ? 'مستوى عبقري! أنت مؤهل لدرجة 100 بالوزاري بإذن الله 🌟' :
                           score >= 70 ? 'أداء ممتاز يا بطل! راجع الأسئلة التي أخطأت بها لتفادي الفخاخ الوزارية 👍' :
                           'بداية جيدة؛ تحتاج إلى مراجعة بعض القواعد الذهبية للأستاذ مصطفى تركي والتدرب أكثر 💪'}
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
                      className={`p-6 rounded-3xl border transition-all space-y-3 ${
                        examSubmitted
                          ? isCorrect
                            ? 'bg-emerald-50/50 border-emerald-300'
                            : 'bg-rose-50/50 border-rose-300'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <span>السؤال {idx + 1} ({q.year} - {q.session})</span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100">الوحدة {q.unitId}</span>
                      </div>

                      <p dir="ltr" className="font-bold text-base sm:text-lg text-slate-900 text-left en-sentence">
                        {q.questionText}
                      </p>

                      <div className="pt-2">
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">
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
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-mono text-left focus:outline-hidden focus:border-indigo-500"
                        />
                      </div>

                      {examSubmitted && (
                        <div className="mt-3 p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 text-right">
                          <p className="text-xs font-bold text-indigo-900">
                            الجواب النموذجي: <span dir="ltr" className="font-mono text-emerald-700 font-black inline-block ml-1">{q.correctAnswer}</span>
                          </p>
                          <p className="text-xs text-slate-600">
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
