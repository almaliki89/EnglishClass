import React, { useState, useEffect } from 'react';
import { 
  Clock, CheckCircle2, AlertCircle, Bookmark, Award, RotateCcw, 
  ChevronLeft, ChevronRight, HelpCircle, FileText, Send, Eye, 
  ArrowLeft, Volume2, Sparkles, Check, X, ShieldAlert, Printer,
  Layers, AlertTriangle, BookOpen, PenTool, Flag, RefreshCw, Trophy
} from 'lucide-react';
import { MockExamPaper, MockExamSection, MockQuestionItem } from '../data/mockExamPapers';
import { getMockPapersForGrade, getGradeMeta, ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';
import { EducationalGrade, ExamResultRecord, ExamAnswerRecord } from '../types';
import { triggerCelebration } from '../utils/storage';
import { speakEnglish } from '../utils/speech';
import { CartoonMascot } from './CartoonMascot';
import { playPopSound, playSuccessChime, playFanfare } from '../utils/cartoonAudio';

interface MinisterialMockSimulatorProps {
  studentName: string;
  onClose: () => void;
  onRecordScore?: (score: number, total: number) => void;
  onRecordResult?: (record: ExamResultRecord) => void;
  grade?: EducationalGrade;
  bookmarkedQuestionIds?: string[];
  onToggleBookmark?: (questionId: string) => void;
  onSelectGrade?: (grade: EducationalGrade) => void;
}

export const MinisterialMockSimulator: React.FC<MinisterialMockSimulatorProps> = ({
  studentName,
  onClose,
  onRecordScore,
  onRecordResult,
  grade = 'sixth-preparatory',
  bookmarkedQuestionIds = [],
  onToggleBookmark,
  onSelectGrade,
}) => {
  const DRAFT_KEY = `omega_mock_exam_draft_${grade}`;

  const availablePapers = getMockPapersForGrade(grade);
  const gradeMeta = getGradeMeta(grade);
  const [selectedPaperIndex, setSelectedPaperIndex] = useState<number>(0);
  const currentPaper: MockExamPaper = availablePapers[selectedPaperIndex] || availablePapers[0];

  // Saved in-progress draft check
  const [savedDraft, setSavedDraft] = useState<{
    paperIndex: number;
    durationMins: number;
    secondsRemaining: number;
    userAnswers: Record<string, string>;
    selectedEssayOption: 'A' | 'B';
    essayText: string;
    flaggedQuestions: Record<string, boolean>;
    activeSectionId: string;
  } | null>(() => {
    try {
      const raw = localStorage.getItem(`omega_mock_exam_draft_${grade}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.secondsRemaining > 30) {
          return parsed;
        }
      }
    } catch {
      // LocalStorage unavailable
    }
    return null;
  });

  // Active view: 'intro' | 'exam' | 'results'
  const [examStatus, setExamStatus] = useState<'intro' | 'exam' | 'results'>('intro');

  // Timer: default 180 minutes (10800 seconds)
  const [timerDurationMinutes, setTimerDurationMinutes] = useState<number>(180);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(180 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Active Section Navigation
  const [activeSectionId, setActiveSectionId] = useState<string>(() => {
    return currentPaper.sections[0]?.id || 'q1-a';
  });

  // Answers State
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [selectedEssayOption, setSelectedEssayOption] = useState<'A' | 'B'>('A');
  const [essayText, setEssayText] = useState<string>('');
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});

  // Self-Evaluation Score for Essay
  const [essaySelfScore, setEssaySelfScore] = useState<number>(18);

  // Review Filter in Results
  const [resultsFilter, setResultsFilter] = useState<'all' | 'correct' | 'wrong'>('all');

  // Start Exam (fresh or resume)
  const handleStartExam = (durationMins: number, resumeDraft?: typeof savedDraft) => {
    if (resumeDraft) {
      setSelectedPaperIndex(resumeDraft.paperIndex || 0);
      setTimerDurationMinutes(resumeDraft.durationMins || 180);
      setSecondsRemaining(resumeDraft.secondsRemaining);
      setUserAnswers(resumeDraft.userAnswers || {});
      setSelectedEssayOption(resumeDraft.selectedEssayOption || 'A');
      setEssayText(resumeDraft.essayText || '');
      setFlaggedQuestions(resumeDraft.flaggedQuestions || {});
      setActiveSectionId(resumeDraft.activeSectionId || currentPaper.sections[0]?.id || 'q1-a');
      setIsTimerRunning(true);
      setExamStatus('exam');
      setSavedDraft(null);
      return;
    }
    setTimerDurationMinutes(durationMins);
    setSecondsRemaining(durationMins * 60);
    setIsTimerRunning(true);
    setExamStatus('exam');
    setActiveSectionId(currentPaper.sections[0]?.id || 'q1-a');
    setUserAnswers({});
    setEssayText('');
    setFlaggedQuestions({});
    setSavedDraft(null);
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {}
  };

  // Persist draft periodically while exam is running
  useEffect(() => {
    if (examStatus !== 'exam' || !isTimerRunning) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({
        paperIndex: selectedPaperIndex,
        durationMins: timerDurationMinutes,
        secondsRemaining,
        userAnswers,
        selectedEssayOption,
        essayText,
        flaggedQuestions,
        activeSectionId,
      }));
    } catch {}
  }, [examStatus, isTimerRunning, secondsRemaining, userAnswers, essayText, flaggedQuestions, activeSectionId, selectedEssayOption, selectedPaperIndex, timerDurationMinutes, DRAFT_KEY]);

  // Timer Effect
  useEffect(() => {
    if (examStatus !== 'exam' || !isTimerRunning) return;

    if (secondsRemaining <= 0) {
      handleFinalSubmit();
      return;
    }

    const timer = setInterval(() => {
      setSecondsRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [examStatus, isTimerRunning, secondsRemaining]);

  // Format time (HH:MM:SS)
  const formatTimer = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Count words in essay
  const countWords = (text: string) => {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    return words.length;
  };

  // Answer change handler
  const handleAnswerChange = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  // Toggle flag for question
  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  // Auto-evaluation logic
  const evaluateItem = (item: MockQuestionItem, userAnswer: string = '') => {
    const cleanedUser = userAnswer.trim().toLowerCase().replace(/['".,!?;:]/g, '');
    const cleanedTarget = item.correctAnswer.trim().toLowerCase().replace(/['".,!?;:]/g, '');
    
    if (!cleanedUser) return { isCorrect: false, score: 0 };

    if (cleanedUser === cleanedTarget) {
      return { isCorrect: true, score: item.maxScore };
    }

    // Alternative checks
    if (item.alternativeAnswers) {
      for (const alt of item.alternativeAnswers) {
        const cleanedAlt = alt.trim().toLowerCase().replace(/['".,!?;:]/g, '');
        if (cleanedUser === cleanedAlt || cleanedUser.includes(cleanedAlt) || cleanedAlt.includes(cleanedUser)) {
          return { isCorrect: true, score: item.maxScore };
        }
      }
    }

    // Partial text match for explanations / sentences
    if (cleanedTarget.length > 15 && cleanedUser.length > 8) {
      if (cleanedTarget.includes(cleanedUser) || cleanedUser.includes(cleanedTarget)) {
        return { isCorrect: true, score: item.maxScore };
      }
    }

    return { isCorrect: false, score: 0 };
  };

  // Calculate detailed scores
  const calculateTotalScore = () => {
    let sectionScores: Record<string, { earned: number; total: number }> = {};
    let totalObjectiveScore = 0;

    currentPaper.sections.forEach(section => {
      let earned = 0;
      section.items.forEach(item => {
        const res = evaluateItem(item, userAnswers[item.id] || '');
        if (res.isCorrect) {
          earned += res.score;
        }
      });
      // Ensure section doesn't exceed its max (accounting for choice questions like 5 out of 6)
      earned = Math.min(earned, section.totalMarks);
      sectionScores[section.id] = { earned, total: section.totalMarks };
      totalObjectiveScore += earned;
    });

    // Essay Score
    const words = countWords(essayText);
    let estimatedEssayScore = essaySelfScore;
    if (words < 40) estimatedEssayScore = Math.min(estimatedEssayScore, 8);
    else if (words < 70) estimatedEssayScore = Math.min(estimatedEssayScore, 14);

    const grandTotal = Math.min(100, totalObjectiveScore + estimatedEssayScore);

    return {
      sectionScores,
      totalObjectiveScore,
      essayScore: estimatedEssayScore,
      grandTotal,
    };
  };

  // Submit Exam
  const handleFinalSubmit = () => {
    setIsTimerRunning(false);
    setExamStatus('results');
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {}

    const results = calculateTotalScore();
    if (results.grandTotal >= 80) {
      playFanfare();
    } else {
      playSuccessChime();
    }

    if (onRecordScore) {
      onRecordScore(results.grandTotal, 100);
    }

    if (onRecordResult) {
      const answersList: ExamAnswerRecord[] = [];
      currentPaper.sections.forEach(sec => {
        sec.items.forEach(item => {
          const userAns = userAnswers[item.id] || '';
          const evalRes = evaluateItem(item, userAns);
          answersList.push({
            questionId: item.id,
            studentAnswer: userAns,
            correctAnswer: item.correctAnswer,
            isCorrect: evalRes.isCorrect,
            category: sec.titleAr || sec.sectionCode
          });
        });
      });

      const examRecord: ExamResultRecord = {
        id: 'mock-' + Date.now(),
        examId: currentPaper.id,
        examTitle: currentPaper.title || currentPaper.subtitle,
        score: results.grandTotal,
        maxScore: 100,
        percentage: results.grandTotal,
        timeSpentSeconds: Math.max(1, (timerDurationMinutes * 60) - secondsRemaining),
        timestamp: new Date().toISOString(),
        answers: answersList,
      };
      onRecordResult(examRecord);
    }

    if (results.grandTotal >= 85) {
      triggerCelebration();
    }
  };

  // Section quick status
  const getSectionStats = (section: MockExamSection) => {
    const total = section.items.length;
    const answered = section.items.filter(i => (userAnswers[i.id] || '').trim().length > 0).length;
    const flagged = section.items.filter(i => flaggedQuestions[i.id]).length;
    return { total, answered, flagged };
  };

  return (
    <div className="space-y-6 pb-20 max-w-5xl mx-auto">
      
      {/* 1. INTRO / START SCREEN */}
      {examStatus === 'intro' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Draft Recovery Alert */}
          {savedDraft && (
            <div className="p-4 sm:p-5 rounded-[6px] bg-yellow/45 border-2 border-ink shadow-brutal-action text-ink flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[4px] bg-yellow border-2 border-ink text-ink flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-ink text-sm">لديك جلسة امتحان تجريبي جارية غير مكتملة</p>
                  <p className="text-xs text-ink/80 font-bold tabular-nums">
                    الوقت المتبقي: {Math.ceil(savedDraft.secondsRemaining / 60)} دقيقة • تمت الإجابة على {Object.keys(savedDraft.userAnswers || {}).length} سؤالاً
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleStartExam(savedDraft.durationMins, savedDraft)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-[4px] bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-sm font-black text-xs transition-colors cursor-pointer"
                >
                  استئناف الامتحان من حيث توقفت
                </button>
                <button
                  type="button"
                  onClick={() => {
                    try {
                      localStorage.removeItem(DRAFT_KEY);
                    } catch {}
                    setSavedDraft(null);
                  }}
                  className="px-3 py-2.5 rounded-[4px] bg-surface hover:bg-paper text-ink border-2 border-ink font-black text-xs transition-colors cursor-pointer"
                >
                  إلغاء وبدء جديد
                </button>
              </div>
            </div>
          )}

          {/* Header Banner */}
          <div className="p-6 sm:p-10 bg-surface border-3 border-ink shadow-brutal-modal text-ink relative overflow-hidden text-center sm:text-right">
            
            {/* Grade Isolation Badge */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-6 relative z-10 self-start">
              <span className="px-3 py-1 bg-cobalt text-surface border-2 border-ink font-black text-xs shadow-brutal-sm">
                {gradeMeta.nameAr}
              </span>
              {gradeMeta.isMinisterial && (
                <span className="px-2 py-0.5 bg-coral text-ink font-mono font-black text-xs border-2 border-ink rounded-[4px]">
                  ★ محاكاة الامتحان الوزاري
                </span>
              )}
            </div>

            <div className="relative z-10 space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-yellow text-ink border-2 border-ink shadow-brutal-sm text-xs font-mono font-black">
                <Sparkles className="w-3.5 h-3.5 text-cobalt" />
                <span>
                  {grade === 'sixth-preparatory'
                    ? 'الامتحانات الوزارية التجريبية'
                    : grade === 'third-intermediate'
                    ? 'الامتحان الوزاري التجريبي الشامل'
                    : 'نماذج الامتحانات التجريبية'}
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-ink leading-tight">
                {currentPaper.title} <span className="bg-yellow px-2 py-0.5 border-2 border-ink shadow-brutal-sm inline-block">({currentPaper.totalMarks} درجة)</span>
              </h1>

              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-medium">
                {currentPaper.subtitle || 'محاكاة تدريبية شاملة لدفتر الامتحان: القطعة الخارجية، القواعد، المفردات، الأدب، والإنشاء مع تصحيح فوري.'}
              </p>
            </div>
          </div>

          {/* Specifications Bento Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            
            <div className="p-4 sm:p-5 bg-surface border-3 border-ink shadow-brutal-action flex items-center gap-3 rounded-xs">
              <div className="w-11 h-11 bg-yellow text-ink border-2 border-ink shadow-brutal-sm flex items-center justify-center shrink-0 rounded-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-semantic-error block">الوقت المقرّر</span>
                <span className="text-sm sm:text-base font-black text-ink tabular-nums">{currentPaper.durationMinutes || 180} دقيقة امتحانية</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-surface border-3 border-ink shadow-brutal-action flex items-center gap-3 rounded-xs">
              <div className="w-11 h-11 bg-cobalt text-surface border-2 border-ink shadow-brutal-sm flex items-center justify-center shrink-0 rounded-xs">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-cobalt block">الدرجة الكلية</span>
                <span className="text-sm sm:text-base font-black text-ink tabular-nums">100 درجة كاملة</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-surface border-3 border-ink shadow-brutal-action flex items-center gap-3 rounded-xs">
              <div className="w-11 h-11 bg-paper text-ink border-2 border-ink shadow-brutal-sm flex items-center justify-center shrink-0 rounded-xs">
                <CheckCircle2 className="w-5 h-5 text-cobalt" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-muted-gray block">آلية التصحيح</span>
                <span className="text-sm sm:text-base font-black text-ink">تصحيح فوري مع التعليل</span>
              </div>
            </div>

          </div>

          {/* Exam Blueprint Structure Table */}
          <div className="p-5 sm:p-8 rounded-[6px] bg-surface border-3 border-ink shadow-brutal-lg space-y-5">
            <h2 className="text-base sm:text-lg font-black text-ink flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cobalt shrink-0" />
              <span>جدول توزيع الأسئلة والدرجات في الدفتر الامتحاني</span>
            </h2>

            {/* Desktop / Tablet Grid Table */}
            <div className="hidden sm:block divide-y-2 divide-ink/15 border-2 border-ink rounded-[4px] overflow-hidden">
              <div className="p-3.5 bg-paper border-b-2 border-ink text-xs font-black text-ink grid grid-cols-12 gap-2">
                <span className="col-span-2">السؤال</span>
                <span className="col-span-6">المحور الأكاديمي</span>
                <span className="col-span-2 text-center">الخيارات</span>
                <span className="col-span-2 text-left">الدرجة</span>
              </div>

              <div className="p-3.5 text-xs text-ink grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-black text-cobalt">Q1 (A & B)</span>
                <span className="col-span-6 font-medium">القطعة الخارجية غير المرئية (10 د) + قطع الكتاب المقررة (10 د)</span>
                <span className="col-span-2 text-center text-muted-gray font-bold">أجب عن 5 من 6</span>
                <span className="col-span-2 text-left font-black text-ink tabular-nums">20 درجة</span>
              </div>

              <div className="p-3.5 text-xs text-ink grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-black text-cobalt">Q2 (A & B)</span>
                <span className="col-span-6 font-medium">القواعد والوظائف اللغوية (20 د تحويلات + 10 د اختيارات)</span>
                <span className="col-span-2 text-center text-muted-gray font-bold">10 من 12 و 5 من 6</span>
                <span className="col-span-2 text-left font-black text-ink tabular-nums">30 درجة</span>
              </div>

              <div className="p-3.5 text-xs text-ink grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-black text-cobalt">Q3 (A, B, C)</span>
                <span className="col-span-6 font-medium">المفردات والإسقاطات (10 د) + التوصيل (5 د) + الإملاء والشواذ (5 د)</span>
                <span className="col-span-2 text-center text-muted-gray font-bold">شامل</span>
                <span className="col-span-2 text-left font-black text-ink tabular-nums">20 درجة</span>
              </div>

              <div className="p-3.5 text-xs text-ink grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-black text-cobalt">Q4</span>
                <span className="col-span-6 font-medium">
                  {grade === 'third-intermediate'
                    ? 'القصص المقررة (Story Time): كريم، كرم، ملء الفراغ، إبراهيم، سلام أحمد، داليا'
                    : 'الأدب المقرّر والشخصيات والأسئلة النقدية'}
                </span>
                <span className="col-span-2 text-center text-muted-gray font-bold">أجب عن 5 من 6</span>
                <span className="col-span-2 text-left font-black text-ink tabular-nums">10 درجات</span>
              </div>

              <div className="p-3.5 text-xs text-ink grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-black text-cobalt">Q5</span>
                <span className="col-span-6 font-medium">
                  {grade === 'third-intermediate'
                    ? 'الإنشاء النموذجي: سيرة نور صبري أو برنامج تلفزيوني عن الفيلة'
                    : 'الإنشاء النموذجي (100 إلى 120 كلمة)'}
                </span>
                <span className="col-span-2 text-center text-muted-gray font-bold">اختر A أو B</span>
                <span className="col-span-2 text-left font-black text-ink tabular-nums">
                  {grade === 'third-intermediate' ? '15 درجة' : '20 درجة'}
                </span>
              </div>
            </div>

            {/* Mobile Stacked Cards (Under 640px) */}
            <div className="sm:hidden space-y-2.5">
              {[
                { q: 'Q1 (A & B)', title: 'القطعة الخارجية غير المرئية + قطع الكتاب', opt: '5 من 6', marks: '20 درجة' },
                { q: 'Q2 (A & B)', title: 'القواعد والوظائف اللغوية (تحويلات + اختيارات)', opt: '10 من 12 و 5 من 6', marks: '30 درجة' },
                { q: 'Q3 (A, B, C)', title: 'المفردات والإسقاطات والتوصيل والإملاء', opt: 'شامل', marks: '20 درجة' },
                { q: 'Q4', title: 'الأدب المقرّر', opt: '5 من 6', marks: '10 درجات' },
                { q: 'Q5', title: 'الإنشاء النموذجي', opt: 'اختر A أو B', marks: grade === 'third-intermediate' ? '15 درجة' : '20 درجة' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-[4px] bg-paper border-2 border-ink flex items-center justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-black text-cobalt bg-surface border border-ink px-2 py-0.5 rounded-[4px] text-[11px] shrink-0">
                        {item.q}
                      </span>
                      <span className="text-[10px] text-muted-gray font-bold">
                        ({item.opt})
                      </span>
                    </div>
                    <p className="font-black text-ink text-xs truncate">
                      {item.title}
                    </p>
                  </div>
                  <span className="font-black text-ink bg-yellow px-2.5 py-1 rounded-[4px] border border-ink shrink-0 tabular-nums">
                    {item.marks}
                  </span>
                </div>
              ))}
            </div>

            {/* Launch Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t-2 border-ink">
              <div className="text-xs text-ink/80 font-mono text-center sm:text-right">
                <span>الطالب المرشح: </span>
                <strong className="text-ink font-black">{studentName}</strong>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleStartExam(30)}
                  className="w-full sm:w-auto px-5 py-3 bg-paper hover:bg-surface text-ink font-black text-xs sm:text-sm border-2 border-ink shadow-brutal-callout active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-ink shrink-0" />
                  <span>تحدي الاختبار السريع (30 د)</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleStartExam(180)}
                  className="w-full sm:w-auto px-7 py-3 bg-ink hover:bg-cobalt text-surface font-black text-xs sm:text-sm border-3 border-ink shadow-brutal-action active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>بدء الامتحان الشامل (3 ساعات)</span>
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 2. LIVE EXAM INTERACTION SCREEN */}
      {examStatus === 'exam' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Sticky Header & Timer Bar */}
          <div className="sticky top-16 sm:top-20 z-30 p-3 sm:p-4 rounded-[6px] bg-surface border-3 border-ink text-ink shadow-brutal-action flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
            
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[4px] bg-yellow border-2 border-ink flex items-center justify-center font-mono font-black text-ink text-xs shrink-0">
                IQ
              </div>
              <div className="min-w-0 truncate">
                <h3 className="text-xs sm:text-sm font-black text-ink truncate">
                  محاكي الامتحان التجريبي • {gradeMeta.nameAr}
                </h3>
                <span className="text-[10px] font-bold text-muted-gray block truncate">
                  إشراف الأستاذ مصطفى تركي • {currentPaper.session}
                </span>
              </div>
            </div>

            {/* Countdown Clock & Submit */}
            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0">
              <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-[4px] font-mono text-xs sm:text-base font-black flex items-center gap-1.5 sm:gap-2 border-2 border-ink tabular-nums ${
                secondsRemaining < 900 
                  ? 'bg-answer-review-bg text-semantic-error' 
                  : 'bg-paper text-ink'
              }`}>
                <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${secondsRemaining < 900 ? 'text-semantic-error' : 'text-cobalt'}`} />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>

              <button
                type="button"
                onClick={handleFinalSubmit}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-[4px] bg-semantic-success hover:bg-ink text-surface border-2 border-ink shadow-brutal-sm font-black text-xs sm:text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>تسليم الدفتر</span>
              </button>
            </div>

          </div>

          {/* Question Navigation Strip (Q1-A to Q5) */}
          <div className="flex flex-wrap items-center gap-2 pb-1 w-full">
            {currentPaper.sections.map(section => {
              const { total, answered, flagged } = getSectionStats(section);
              const isActive = activeSectionId === section.id;

              return (
                <button
                  type="button"
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`px-3 sm:px-4 py-2 rounded-[4px] text-xs font-black transition-all flex items-center gap-1.5 sm:gap-2 border-2 border-ink cursor-pointer tabular-nums ${
                    isActive
                      ? 'bg-cobalt text-surface shadow-brutal-callout'
                      : 'bg-surface text-ink hover:bg-paper'
                  }`}
                >
                  <span>{section.sectionCode}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-[4px] border border-ink font-mono ${
                    isActive ? 'bg-yellow text-ink' : 'bg-paper text-ink'
                  }`}>
                    {answered}/{total}
                  </span>
                  {flagged > 0 && (
                    <span className="w-2 h-2 rounded-full bg-coral border border-ink shrink-0" />
                  )}
                </button>
              );
            })}

            {/* Q5 Essay Button */}
            <button
              type="button"
              onClick={() => setActiveSectionId('q5-essay')}
              className={`px-3 sm:px-4 py-2 rounded-[4px] text-xs font-black transition-all flex items-center gap-1.5 sm:gap-2 border-2 border-ink cursor-pointer tabular-nums ${
                activeSectionId === 'q5-essay'
                  ? 'bg-cobalt text-surface shadow-brutal-callout'
                  : 'bg-surface text-ink hover:bg-paper'
              }`}
            >
              <PenTool className="w-3.5 h-3.5 shrink-0" />
              <span>Q5 الإنشاء</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-[4px] border border-ink font-mono ${
                activeSectionId === 'q5-essay' ? 'bg-yellow text-ink' : 'bg-paper text-ink'
              }`}>
                {countWords(essayText)} كلمة
              </span>
            </button>
          </div>

          {/* ACTIVE SECTION CONTENT */}
          {activeSectionId !== 'q5-essay' && (() => {
            const section = currentPaper.sections.find(s => s.id === activeSectionId) || currentPaper.sections[0];

            return (
              <div className="p-5 sm:p-8 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-6">
                
                {/* Section Title & Instructions */}
                <div className="border-b-2 border-ink pb-4 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-[4px] bg-blue-mist border border-ink text-cobalt text-xs font-mono font-black tabular-nums">
                      {section.sectionCode} • {section.totalMarks} درجات
                    </span>
                    <span className="text-xs font-mono font-bold text-muted-gray min-w-0 break-words" dir="ltr">
                      {section.titleEn}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-black text-ink">
                    {section.titleAr}
                  </h2>

                  <p className="text-xs sm:text-sm text-muted-gray font-bold">
                    {section.instructionsAr}
                  </p>
                </div>

                {/* Unseen Passage Box (if Q1-A) */}
                {section.unseenPassage && (
                  <div className="p-5 sm:p-6 rounded-[4px] bg-paper border-2 border-ink space-y-3 lesson-reading">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-black text-ink uppercase tracking-wider">
                        Reading Text (Passage)
                      </span>
                      <button
                        type="button"
                        onClick={() => speakEnglish(section.unseenPassage || '')}
                        className="p-1.5 px-2.5 rounded-[4px] bg-surface hover:bg-yellow text-ink font-black text-xs flex items-center gap-1 border-2 border-ink cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-cobalt" />
                        <span>استماع للنص</span>
                      </button>
                    </div>

                    <p dir="ltr" className="text-xs sm:text-sm text-ink leading-relaxed font-medium text-left en-sentence break-words">
                      {section.unseenPassage}
                    </p>
                  </div>
                )}

                {/* Boxed Words (if Q3-A) */}
                {section.boxedWords && (
                  <div className="p-4 rounded-[4px] bg-yellow/35 border-2 border-ink space-y-2">
                    <span className="text-xs font-black text-ink block">
                      صندوق الكلمات (انقر على الكلمة للاستماع لنطقها):
                    </span>
                    <div className="flex flex-wrap gap-2" dir="ltr">
                      {section.boxedWords.map(word => (
                        <button
                          type="button"
                          key={word}
                          onClick={() => speakEnglish(word)}
                          className="px-3 py-1.5 rounded-[4px] bg-surface border-2 border-ink shadow-brutal-sm text-xs font-black text-ink hover:bg-yellow transition-all font-mono cursor-pointer"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Questions List */}
                <div className="space-y-5">
                  {section.items.map(item => {
                    const currentAns = userAnswers[item.id] || '';
                    const isFlagged = flaggedQuestions[item.id];

                    return (
                      <div 
                        key={item.id}
                        className={`p-5 rounded-[6px] border-2 border-ink transition-all ${
                          isFlagged ? 'bg-yellow/30 shadow-brutal-callout' : 'bg-paper'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="w-7 h-7 rounded-[4px] bg-ink text-surface font-mono font-black text-xs flex items-center justify-center shrink-0 tabular-nums">
                              {item.number}
                            </span>
                            {item.requirement && (
                              <span className="text-[11px] font-black text-cobalt bg-surface border border-ink px-2 py-0.5 rounded-[4px]">
                                {item.requirement}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => toggleFlag(item.id)}
                              className={`p-1.5 rounded-[4px] border-2 border-ink text-xs font-black transition-all cursor-pointer ${
                                isFlagged ? 'bg-yellow text-ink' : 'bg-surface text-muted-gray hover:bg-paper'
                              }`}
                              aria-label="تحديد للمراجعة لاحقاً"
                              title="تحديد للمراجعة لاحقاً"
                            >
                              <Flag className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-mono font-black text-muted-gray tabular-nums">
                              [{item.maxScore} درجات]
                            </span>
                          </div>
                        </div>

                        {/* Question Text */}
                        <p dir="ltr" className="text-xs sm:text-sm font-black text-ink mb-3 text-left en-sentence min-w-0 break-words">
                          {item.questionText}
                        </p>

                        {/* Answering Controls */}
                        {item.type === 'choice' && item.options ? (
                          <div dir="ltr" className="flex flex-wrap gap-2.5">
                            {item.options.map(opt => (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => handleAnswerChange(item.id, opt)}
                                className={`px-4 py-2 rounded-[4px] text-xs font-black transition-all border-2 border-ink cursor-pointer ${
                                  currentAns === opt
                                    ? 'bg-cobalt text-surface shadow-brutal-sm'
                                    : 'bg-surface text-ink hover:bg-yellow/40'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-1.5">
                            <input
                              type="text"
                              dir="ltr"
                              value={currentAns}
                              onChange={(e) => handleAnswerChange(item.id, e.target.value)}
                              placeholder="Type your answer here in English..."
                              className="w-full px-4 py-2.5 rounded-[4px] bg-surface border-2 border-ink focus:outline-none text-xs sm:text-sm text-ink placeholder:text-muted-gray text-left font-mono font-bold"
                            />
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>

                {/* Section Navigation Prev/Next */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-2 border-t-2 border-ink">
                  <span className="text-xs text-muted-gray font-bold">
                    تأكد من كتابة الإملاء بالشكل الدقيق
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      const idx = currentPaper.sections.findIndex(s => s.id === activeSectionId);
                      if (idx < currentPaper.sections.length - 1) {
                        setActiveSectionId(currentPaper.sections[idx + 1].id);
                      } else {
                        setActiveSectionId('q5-essay');
                      }
                    }}
                    className="px-5 py-2.5 rounded-[4px] bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-callout font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>السؤال التالي</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })()}

          {/* Q5 ESSAY COMPOSITION TAB */}
          {activeSectionId === 'q5-essay' && (
            <div className="p-5 sm:p-8 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-6">
              
              <div className="border-b-2 border-ink pb-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-[4px] bg-answer-review-bg border border-ink text-semantic-error text-xs font-mono font-black">
                    Q5 • 20 درجة
                  </span>
                  <span className="text-xs text-muted-gray font-mono font-bold" dir="ltr">
                    Written Composition (100 - 120 words)
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-black text-ink">
                  السؤال الخامس: الإنشاء النموذجي
                </h2>

                <p className="text-xs sm:text-sm text-muted-gray font-bold">
                  اختر أحد الموضوعين الإنشائيين (A أو B) واكتب مقالاً من 100 إلى 120 كلمة مع مراعاة علامات الترقيم ووضوح الفكرة:
                </p>
              </div>

              {/* Essay Choice Switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentPaper.essayOptions.map(opt => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setSelectedEssayOption(opt.optionLetter)}
                    className={`w-full text-right p-4 rounded-[6px] border-2 border-ink cursor-pointer transition-all ${
                      selectedEssayOption === opt.optionLetter
                        ? 'bg-blue-mist shadow-brutal-callout'
                        : 'bg-surface hover:bg-paper'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono font-black text-xs px-2 py-0.5 rounded-[4px] bg-ink text-surface">
                        الفرع ({opt.optionLetter})
                      </span>
                      {selectedEssayOption === opt.optionLetter && (
                        <span className="text-xs font-black text-cobalt">تم الاختيار ✓</span>
                      )}
                    </div>
                    <h3 className="font-black text-ink text-sm">{opt.titleAr}</h3>
                    <p className="text-xs text-muted-gray font-bold mt-1 min-w-0 break-words text-left" dir="ltr">{opt.titleEn}</p>
                  </button>
                ))}
              </div>

              {/* Live Writing Paper */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-black text-ink">
                    محرر الدفتر الامتحاني للإنشاء:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-gray font-bold">عدد الكلمات الحالي:</span>
                    <strong className={`font-mono text-sm font-black tabular-nums ${
                      countWords(essayText) >= 100 && countWords(essayText) <= 130 
                        ? 'text-semantic-success' 
                        : 'text-semantic-error'
                    }`}>
                      {countWords(essayText)} كلمة
                    </strong>
                    <span className="text-[10px] text-muted-gray font-bold">(الهدف: 100 - 120)</span>
                  </div>
                </div>

                <textarea
                  rows={10}
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  placeholder="Start writing your essay here in English... (Title, Paragraph 1, Paragraph 2, Conclusion)"
                  className="w-full p-4 rounded-[4px] bg-paper border-2 border-ink focus:bg-surface focus:outline-none text-xs sm:text-sm text-ink placeholder:text-muted-gray leading-relaxed font-mono dir-ltr"
                />

                {/* Rubrics Indicator */}
                <div className="p-3.5 rounded-[4px] bg-paper border-2 border-ink text-xs text-ink grid grid-cols-1 sm:grid-cols-3 gap-2 text-center font-black tabular-nums">
                  <div>1. الفكرة والمحتوى (10 درجات)</div>
                  <div>2. القواعد والمفردات (5 درجات)</div>
                  <div>3. الترتيب والإملاء (5 درجات)</div>
                </div>
              </div>

            </div>
          )}

        </div>
      )}

      {/* 3. RESULTS & EVALUATION REPORT SCREEN */}
      {examStatus === 'results' && (() => {
        const results = calculateTotalScore();

        return (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Master Grade Certificate Card */}
            <div className="p-6 sm:p-10 rounded-[6px] bg-surface border-4 border-ink text-ink shadow-brutal-modal relative overflow-hidden text-center">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[4px] bg-yellow text-xs font-mono font-black text-ink border-2 border-ink">
                  <Trophy className="w-4 h-4 text-cobalt" />
                  <span>وثيقة نتيجة الامتحان الشامل • التقييم الآلي</span>
                </div>

                {/* Cartoon Mascot Reaction */}
                <div className="flex justify-center py-2">
                  <CartoonMascot
                    mood={results.grandTotal >= 85 ? 'celebrating' : results.grandTotal >= 50 ? 'proud' : 'studying'}
                    size="md"
                    speechText={
                      results.grandTotal >= 90
                        ? `أداء استثنائي يا ${studentName}! تدريبك متقن ومثالي للاستعداد للامتحان!`
                        : results.grandTotal >= 70
                        ? `أداء رائع يا ${studentName}! راجع الأخطاء في الأسفل لتعزيز تفوقك واستعدادك.`
                        : `بداية طيبة يا ${studentName}! كل تدريب إضافي يقربك من التفوق. راجع التعليلات وكرر الاختبار!`
                    }
                  />
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-ink tabular-nums">
                  الدرجة الكلية: <span className="text-cobalt text-5xl sm:text-6xl font-mono font-black">{results.grandTotal}</span> / 100
                </h1>

                <p className="text-muted-gray font-bold text-sm max-w-xl mx-auto">
                  الطالب: <strong className="text-ink">{studentName}</strong> • {results.grandTotal >= 90 ? 'تقدير: امتياز (جاهزية عالية للدرجة الكاملة 100)' : results.grandTotal >= 80 ? 'تقدير: جيد جداً' : results.grandTotal >= 50 ? 'تقدير: ناجح' : 'بحاجة لتعزيز المراجعة'}
                </p>

                {/* Score Breakdown Badges */}
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3 tabular-nums">
                  {Object.entries(results.sectionScores).map(([secId, score]) => (
                    <div key={secId} className="px-3.5 py-2 rounded-[4px] bg-paper border-2 border-ink text-xs text-center">
                      <span className="text-muted-gray block text-[10px] uppercase font-mono font-bold">{secId}</span>
                      <strong className="text-ink font-mono font-black">{score.earned} / {score.total}</strong>
                    </div>
                  ))}
                  <div className="px-3.5 py-2 rounded-[4px] bg-yellow border-2 border-ink text-xs text-center">
                    <span className="text-ink block text-[10px] uppercase font-mono font-black">Q5 الإنشاء</span>
                    <strong className="text-cobalt font-mono font-black">{results.essayScore} / 20</strong>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-5 py-2.5 rounded-[4px] bg-surface hover:bg-paper text-ink border-2 border-ink shadow-brutal-sm font-black text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>طباعة تقرير النتيجة</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStartExam(180)}
                    className="px-6 py-2.5 rounded-[4px] bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink shadow-brutal-callout font-black text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>إعادة الاختبار بنموذج جديد</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Detailed Question-by-Question Solution Review */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-black text-ink flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-semantic-success" />
                  <span>المطابقة مع الحلول النموذجية وشرح الإجابات</span>
                </h2>
              </div>

              {currentPaper.sections.map(section => (
                <div key={section.id} className="p-5 sm:p-6 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink pb-3">
                    <h3 className="font-black text-ink text-sm">
                      {section.sectionCode}: {section.titleAr}
                    </h3>
                    <span className="text-xs font-mono font-black text-cobalt tabular-nums">
                      درجة القسم: {results.sectionScores[section.id]?.earned} من {section.totalMarks}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {section.items.map(item => {
                      const userAns = userAnswers[item.id] || '';
                      const evalRes = evaluateItem(item, userAns);

                      return (
                        <div 
                          key={item.id}
                          className={`p-4 rounded-[4px] border-2 border-ink ${
                            evalRes.isCorrect ? 'bg-answer-correct-bg' : 'bg-answer-review-bg'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <span dir="ltr" className="text-xs font-black text-ink text-left en-sentence min-w-0 break-words">
                              {item.number}. {item.questionText}
                            </span>
                            <div className="flex items-center gap-1.5 shrink-0">
                              {onToggleBookmark && (
                                <button
                                  type="button"
                                  onClick={() => onToggleBookmark(item.id)}
                                  className={`p-1.5 rounded-[4px] border-2 border-ink text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                                    bookmarkedQuestionIds.includes(item.id)
                                      ? 'bg-yellow text-ink'
                                      : 'bg-surface hover:bg-paper text-muted-gray'
                                  }`}
                                  aria-label={bookmarkedQuestionIds.includes(item.id) ? 'محفوظ في المفضلة' : 'حفظ للمراجعة المركزة'}
                                  title={bookmarkedQuestionIds.includes(item.id) ? 'محفوظ في المفضلة' : 'حفظ للمراجعة المركزة'}
                                >
                                  <Bookmark className={`w-3.5 h-3.5 ${bookmarkedQuestionIds.includes(item.id) ? 'fill-ink text-ink' : ''}`} />
                                </button>
                              )}
                              <span className={`text-xs font-mono font-black px-2 py-0.5 rounded-[4px] border border-ink tabular-nums ${
                                evalRes.isCorrect ? 'bg-semantic-success text-surface' : 'bg-semantic-error text-surface'
                              }`}>
                                {evalRes.score} / {item.maxScore}
                              </span>
                            </div>
                          </div>

                          <div className="mt-2 text-xs space-y-1 font-mono min-w-0 break-words">
                            <div className="text-muted-gray font-bold">
                              إجابتك: <span className={evalRes.isCorrect ? 'text-semantic-success font-black' : 'text-semantic-error font-black'}>{userAns || '(فارغ)'}</span>
                            </div>
                            <div className="text-ink font-bold">
                              الحل النموذجي: <span className="text-cobalt font-black">{item.correctAnswer}</span>
                            </div>
                          </div>

                          <div className="mt-2 pt-2 border-t border-ink/15 text-[11px] font-bold text-ink/85">
                            💡 {item.explanation}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Essay Review Box */}
              <div className="p-5 sm:p-6 rounded-[6px] bg-surface border-2 border-ink shadow-brutal-action space-y-3">
                <h3 className="font-black text-ink text-sm">
                  Q5: الإنشاء المكتوب والنموذج القياسي
                </h3>
                <div dir="ltr" className="p-4 rounded-[4px] bg-paper border-2 border-ink text-xs text-ink leading-relaxed font-mono text-left min-w-0 break-words">
                  <span className="font-black text-ink block mb-1 font-sans">Your Written Essay ({countWords(essayText)} words):</span>
                  <p className="en-sentence whitespace-pre-wrap">{essayText || 'No essay written.'}</p>
                </div>

                <div dir="ltr" className="p-4 rounded-[4px] bg-blue-mist border-2 border-ink text-xs text-ink leading-relaxed font-mono text-left min-w-0 break-words">
                  <span className="font-black text-cobalt block mb-1 font-sans">Suggested Model Answer (الأستاذ مصطفى تركي):</span>
                  <p className="en-sentence whitespace-pre-wrap">{currentPaper.essayOptions.find(o => o.optionLetter === selectedEssayOption)?.suggestedModel}</p>
                </div>
              </div>

            </div>

          </div>
        );
      })()}

    </div>
  );
};
