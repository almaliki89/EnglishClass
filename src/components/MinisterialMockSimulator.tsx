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
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">لديك جلسة امتحان وزاري جارية غير مكتملة</p>
                  <p className="text-xs text-amber-300/90">
                    الوقت المتبقي: {Math.ceil(savedDraft.secondsRemaining / 60)} دقيقة • تمت الإجابة على {Object.keys(savedDraft.userAnswers || {}).length} سؤالاً
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleStartExam(savedDraft.durationMins, savedDraft)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-sm cursor-pointer"
                >
                  استئناف الامتحان من حيث توقفت
                </button>
                <button
                  onClick={() => {
                    try {
                      localStorage.removeItem(DRAFT_KEY);
                    } catch {}
                    setSavedDraft(null);
                  }}
                  className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  إلغاء وبدء جديد
                </button>
              </div>
            </div>
          )}

          {/* Header Banner */}
          <div className="p-6 sm:p-10 bg-white border-3 border-[#171717] shadow-[6px_6px_0px_#171717] text-[#171717] relative overflow-hidden text-center sm:text-right">
            
            {/* Grade Isolation Badge */}
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-6 relative z-10 self-start">
              <span className="px-3 py-1 bg-[#304FFE] text-white border-2 border-[#171717] font-black text-xs shadow-[2px_2px_0px_#171717]">
                {gradeMeta.nameAr}
              </span>
              {gradeMeta.isMinisterial && (
                <span className="px-2 py-0.5 bg-[#FF5738] text-white font-mono font-black text-xs border border-[#171717]">
                  ★ امتحان وزاري رسمي
                </span>
              )}
            </div>

            <div className="relative z-10 space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-mono font-black">
                <Sparkles className="w-3.5 h-3.5 text-[#304FFE]" />
                <span>
                  {grade === 'sixth-preparatory'
                    ? 'الامتحانات الوزارية التجريبية'
                    : grade === 'third-intermediate'
                    ? 'الامتحان الوزاري التجريبي الشامل'
                    : 'نماذج الامتحانات التجريبية'}
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-[#171717] leading-tight">
                {currentPaper.title} <span className="bg-[#E9FF57] px-2 py-0.5 border-2 border-[#171717] shadow-[2px_2px_0px_#171717] inline-block">({currentPaper.totalMarks} درجة)</span>
              </h1>

              <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed font-medium">
                {currentPaper.subtitle || 'محاكاة رسمية كاملة لدفتر الامتحان: القطعة الخارجية، القواعد، المفردات، الأدب، والإنشاء مع تصحيح كنترول فوري.'}
              </p>
            </div>
          </div>

          {/* Official Specifications Bento Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            
            <div className="p-4 sm:p-5 bg-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] flex items-center gap-3">
              <div className="w-11 h-11 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#FF5738] block uppercase">DURATION // الوقت المقرّر</span>
                <span className="text-sm sm:text-base font-black text-[#171717]">{currentPaper.durationMinutes || 180} دقيقة امتحانية رسمية</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] flex items-center gap-3">
              <div className="w-11 h-11 bg-[#304FFE] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#304FFE] block uppercase">TOTAL SCORE // الدرجة الكلية</span>
                <span className="text-sm sm:text-base font-black text-[#171717]">100 درجة وزارية كاملة</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-white border-3 border-[#171717] shadow-[4px_4px_0px_#171717] flex items-center gap-3">
              <div className="w-11 h-11 bg-[#F4EFE3] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#304FFE]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#171717]/60 block uppercase">EVALUATION // التصحيح</span>
                <span className="text-sm sm:text-base font-black text-[#171717]">تصحيح فوري مع التعليل الوزاري</span>
              </div>
            </div>

          </div>

          {/* Exam Blueprint Structure Table */}
          <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600 shrink-0" />
              <span>جدول توزيع الأسئلة والدرجات في الدفتر الامتحاني</span>
            </h2>

            {/* Desktop / Tablet Grid Table */}
            <div className="hidden sm:block divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
              <div className="p-3.5 bg-slate-50 text-xs font-black text-slate-700 grid grid-cols-12 gap-2">
                <span className="col-span-2">السؤال</span>
                <span className="col-span-6">المحور الأكاديمي</span>
                <span className="col-span-2 text-center">الخيارات</span>
                <span className="col-span-2 text-left">الدرجة</span>
              </div>

              <div className="p-3.5 text-xs text-slate-800 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-bold text-indigo-700">Q1 (A & B)</span>
                <span className="col-span-6 font-medium">القطعة الخارجية غير المرئية (10 د) + قطع الكتاب المقررة (10 د)</span>
                <span className="col-span-2 text-center text-slate-500">أجب عن 5 من 6</span>
                <span className="col-span-2 text-left font-black text-slate-900">20 درجة</span>
              </div>

              <div className="p-3.5 text-xs text-slate-800 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-bold text-indigo-700">Q2 (A & B)</span>
                <span className="col-span-6 font-medium">القواعد والوظائف اللغوية (20 د تحويلات + 10 د اختيارات)</span>
                <span className="col-span-2 text-center text-slate-500">10 من 12 و 5 من 6</span>
                <span className="col-span-2 text-left font-black text-slate-900">30 درجة</span>
              </div>

              <div className="p-3.5 text-xs text-slate-800 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-bold text-indigo-700">Q3 (A, B, C)</span>
                <span className="col-span-6 font-medium">المفردات والإسقاطات (10 د) + التوصيل (5 د) + الإملاء والشواذ (5 د)</span>
                <span className="col-span-2 text-center text-slate-500">شامل</span>
                <span className="col-span-2 text-left font-black text-slate-900">20 درجة</span>
              </div>

              <div className="p-3.5 text-xs text-slate-800 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-bold text-indigo-700">Q4</span>
                <span className="col-span-6 font-medium">
                  {grade === 'third-intermediate'
                    ? 'القصص المقررة (Story Time): كريم، كرم، ملء الفراغ، إبراهيم، سلام أحمد، داليا'
                    : 'الأدب الوزاري: كبرياء وتحامل (جين أوستن) وكما تشاء (شكسبير)'}
                </span>
                <span className="col-span-2 text-center text-slate-500">أجب عن 5 من 6</span>
                <span className="col-span-2 text-left font-black text-slate-900">10 درجات</span>
              </div>

              <div className="p-3.5 text-xs text-slate-800 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 font-mono font-bold text-indigo-700">Q5</span>
                <span className="col-span-6 font-medium">
                  {grade === 'third-intermediate'
                    ? 'الإنشاء الوزاري النموذجي: سيرة نور صبري أو برنامج تلفزيوني عن الفيلة'
                    : 'الإنشاء الوزاري النموذجي (100 إلى 120 كلمة)'}
                </span>
                <span className="col-span-2 text-center text-slate-500">اختر A أو B</span>
                <span className="col-span-2 text-left font-black text-slate-900">
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
                { q: 'Q4', title: 'الأدب الوزاري المقرّر', opt: '5 من 6', marks: '10 درجات' },
                { q: 'Q5', title: 'الإنشاء الوزاري النموذجي', opt: 'اختر A أو B', marks: '20 درجة' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md text-[11px] shrink-0">
                        {item.q}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        ({item.opt})
                      </span>
                    </div>
                    <p className="font-bold text-slate-900 text-xs truncate">
                      {item.title}
                    </p>
                  </div>
                  <span className="font-black text-indigo-900 bg-white px-2.5 py-1 rounded-xl border border-slate-200 shrink-0">
                    {item.marks}
                  </span>
                </div>
              ))}
            </div>

            {/* Launch Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t-2 border-[#171717]">
              <div className="text-xs text-[#171717]/80 font-mono text-center sm:text-right">
                <span>CANDIDATE // الطالب: </span>
                <strong className="text-[#171717] font-black">{studentName}</strong>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handleStartExam(30)}
                  className="w-full sm:w-auto px-5 py-3 bg-[#F4EFE3] hover:bg-white text-[#171717] font-black text-xs sm:text-sm border-2 border-[#171717] shadow-[3px_3px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-[#171717] shrink-0" />
                  <span>تحدي الاختبار السريع (30 د)</span>
                </button>

                <button
                  onClick={() => handleStartExam(180)}
                  className="w-full sm:w-auto px-7 py-3 bg-[#171717] hover:bg-[#304FFE] text-white font-black text-xs sm:text-sm border-3 border-[#171717] shadow-[4px_4px_0px_#FF5738] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>بدء الامتحان الوزاري (3 ساعات)</span>
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
          
          {/* Sticky Official Header & Timer Bar */}
          <div className="sticky top-16 sm:top-20 z-30 p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-slate-900/95 backdrop-blur-md border border-slate-800 text-white shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
            
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center font-black text-amber-300 text-xs shrink-0">
                IQ
              </div>
              <div className="min-w-0 truncate">
                <h3 className="text-xs sm:text-sm font-black text-white truncate">
                  الامتحان الوزاري لشهادة الإعدادية • 2026/2027
                </h3>
                <span className="text-[10px] text-slate-400 block truncate">
                  إشراف الأستاذ مصطفى تركي • {currentPaper.session}
                </span>
              </div>
            </div>

            {/* Countdown Clock & Submit */}
            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0">
              <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-mono text-xs sm:text-base font-black flex items-center gap-1.5 sm:gap-2 border ${
                secondsRemaining < 900 
                  ? 'bg-rose-500/20 text-rose-300 border-rose-400 animate-pulse' 
                  : 'bg-slate-800 text-amber-300 border-slate-700'
              }`}>
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>

              <button
                onClick={handleFinalSubmit}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>تسليم الدفتر</span>
              </button>
            </div>

          </div>

          {/* Question Navigation Strip (Q1-A to Q5) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar scroll-smooth w-full">
            {currentPaper.sections.map(section => {
              const { total, answered, flagged } = getSectionStats(section);
              const isActive = activeSectionId === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 sm:gap-2 border shrink-0 ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md font-black'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>{section.sectionCode}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {answered}/{total}
                  </span>
                  {flagged > 0 && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  )}
                </button>
              );
            })}

            {/* Q5 Essay Button */}
            <button
              onClick={() => setActiveSectionId('q5-essay')}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 sm:gap-2 border shrink-0 ${
                activeSectionId === 'q5-essay'
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md font-black'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <PenTool className="w-3.5 h-3.5 shrink-0" />
              <span>Q5 الإنشاء</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                activeSectionId === 'q5-essay' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {countWords(essayText)} كلمة
              </span>
            </button>
          </div>

          {/* ACTIVE SECTION CONTENT */}
          {activeSectionId !== 'q5-essay' && (() => {
            const section = currentPaper.sections.find(s => s.id === activeSectionId) || currentPaper.sections[0];

            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
                
                {/* Section Title & Instructions */}
                <div className="border-b border-slate-100 pb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-black">
                      {section.sectionCode} • {section.totalMarks} درجات
                    </span>
                    <span className="text-xs text-slate-400">
                      {section.titleEn}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    {section.titleAr}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {section.instructionsAr}
                  </p>
                </div>

                {/* Unseen Passage Box (if Q1-A) */}
                {section.unseenPassage && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                        Reading Text (Passage)
                      </span>
                      <button
                        onClick={() => speakEnglish(section.unseenPassage || '')}
                        className="p-1.5 rounded-lg bg-white hover:bg-slate-200 text-slate-700 text-xs flex items-center gap-1 border border-slate-200"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استماع للنص</span>
                      </button>
                    </div>

                    <p dir="ltr" className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif text-left en-sentence">
                      {section.unseenPassage}
                    </p>
                  </div>
                )}

                {/* Boxed Words (if Q3-A) */}
                {section.boxedWords && (
                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                    <span className="text-xs font-bold text-amber-900 block">
                      صندوق الكلمات الوزاري (انقر على الكلمة لإدراجها في الفراغ):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {section.boxedWords.map(word => (
                        <button
                          key={word}
                          onClick={() => speakEnglish(word)}
                          className="px-3 py-1.5 rounded-xl bg-white border border-amber-300 text-xs font-bold text-amber-950 hover:bg-amber-100 transition-all font-mono"
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
                        className={`p-5 rounded-2xl border transition-all ${
                          isFlagged ? 'border-amber-300 bg-amber-50/30' : 'border-slate-200 bg-slate-50/50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                              {item.number}
                            </span>
                            {item.requirement && (
                              <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                                {item.requirement}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => toggleFlag(item.id)}
                              className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                                isFlagged ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                              }`}
                              title="تحديد للمراجعة لاحقاً"
                            >
                              <Flag className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-black text-slate-400">
                              [{item.maxScore} درجات]
                            </span>
                          </div>
                        </div>

                        {/* Question Text */}
                        <p dir="ltr" className="text-xs sm:text-sm font-bold text-slate-900 mb-3 text-left en-sentence">
                          {item.questionText}
                        </p>

                        {/* Answering Controls */}
                        {item.type === 'choice' && item.options ? (
                          <div dir="ltr" className="flex flex-wrap gap-2.5">
                            {item.options.map(opt => (
                              <button
                                key={opt}
                                onClick={() => handleAnswerChange(item.id, opt)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                                  currentAns === opt
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
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
                              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 text-left font-mono"
                            />
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>

                {/* Section Navigation Prev/Next */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-medium">
                    تأكد من كتابة الإملاء بالشكل الدقيق
                  </span>

                  <button
                    onClick={() => {
                      const idx = currentPaper.sections.findIndex(s => s.id === activeSectionId);
                      if (idx < currentPaper.sections.length - 1) {
                        setActiveSectionId(currentPaper.sections[idx + 1].id);
                      } else {
                        setActiveSectionId('q5-essay');
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
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
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              
              <div className="border-b border-slate-100 pb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-black">
                    Q5 • 20 درجة وزارية
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Written Composition (100 - 120 words)
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-black text-slate-900">
                  السؤال الخامس: الإنشاء الوزاري النموذجي
                </h2>

                <p className="text-xs sm:text-sm text-slate-600">
                  اختر أحد الموضوعين الإنشائيين (A أو B) واكتب مقالاً من 100 إلى 120 كلمة مع مراعاة علامات الترقيم ووضوح الفكرة:
                </p>
              </div>

              {/* Essay Choice Switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentPaper.essayOptions.map(opt => (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedEssayOption(opt.optionLetter)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedEssayOption === opt.optionLetter
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-xs px-2 py-0.5 rounded-md bg-slate-900 text-white">
                        الفرع ({opt.optionLetter})
                      </span>
                      {selectedEssayOption === opt.optionLetter && (
                        <span className="text-xs font-bold text-indigo-600">تم الاختيار ✓</span>
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{opt.titleAr}</h3>
                    <p className="text-xs text-slate-500 mt-1">{opt.titleEn}</p>
                  </div>
                ))}
              </div>

              {/* Live Writing Paper */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">
                    محرر الدفتر الامتحاني للإنشاء:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">عدد الكلمات الحالي:</span>
                    <strong className={`font-mono text-sm font-bold ${
                      countWords(essayText) >= 100 && countWords(essayText) <= 130 
                        ? 'text-emerald-600' 
                        : 'text-amber-600'
                    }`}>
                      {countWords(essayText)} كلمة
                    </strong>
                    <span className="text-[10px] text-slate-400">(الهدف: 100 - 120)</span>
                  </div>
                </div>

                <textarea
                  rows={10}
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  placeholder="Start writing your essay here in English... (Title, Paragraph 1, Paragraph 2, Conclusion)"
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 text-xs sm:text-sm text-slate-900 leading-relaxed font-serif dir-ltr"
                />

                {/* Ministerial Rubrics Indicator */}
                <div className="p-3.5 rounded-2xl bg-slate-100 text-xs text-slate-700 grid grid-cols-3 gap-2 text-center font-medium">
                  <div>1. الفكرة والمحتوى (10 درجات)</div>
                  <div>2. القواعد والمفردات (5 درجات)</div>
                  <div>3. الترتيب والإملاء (5 درجات)</div>
                </div>
              </div>

            </div>
          )}

        </div>
      )}

      {/* 3. OFFICIAL CONTROL REPORT / RESULTS SCREEN */}
      {examStatus === 'results' && (() => {
        const results = calculateTotalScore();

        return (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Master Grade Certificate Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-800 text-xs font-bold text-amber-300 border border-slate-700">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>وثيقة نتيجة الامتحان الوزاري الرسمي • الكنترول العام</span>
                </div>

                {/* Cartoon Mascot Reaction */}
                <div className="flex justify-center py-2">
                  <CartoonMascot
                    mood={results.grandTotal >= 85 ? 'celebrating' : results.grandTotal >= 50 ? 'proud' : 'studying'}
                    size="md"
                    speechText={
                      results.grandTotal >= 90
                        ? `كفووو يا ${studentName}! نتيجتك 100 بالوزاري شبه مضمونة بإذن الله!`
                        : results.grandTotal >= 70
                        ? `أداء رائع يا ${studentName}! راجع الأخطاء في الأسفل وستصل للـ 100 قريباً.`
                        : `لا تقلق يا ${studentName}! كل غلطة الآن توفر عليك درجات بالوزاري. راجع التعليلات وكرر الاختبار!`
                    }
                  />
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-white">
                  الدرجة الكلية: <span className="text-amber-300 text-5xl sm:text-6xl font-black">{results.grandTotal}</span> / 100
                </h1>

                <p className="text-slate-300 text-sm max-w-xl mx-auto">
                  الطالب: <strong className="text-white">{studentName}</strong> • {results.grandTotal >= 90 ? 'تقدير: امتياز (تأهل تام للدرجة الكاملة 100)' : results.grandTotal >= 80 ? 'تقدير: جيد جداً' : results.grandTotal >= 50 ? 'تقدير: ناجح' : 'بحاجة لتعزيز المراجعة'}
                </p>

                {/* Score Breakdown Pills */}
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  {Object.entries(results.sectionScores).map(([secId, score]) => (
                    <div key={secId} className="px-3.5 py-2 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-center">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">{secId}</span>
                      <strong className="text-white font-bold">{score.earned} / {score.total}</strong>
                    </div>
                  ))}
                  <div className="px-3.5 py-2 rounded-2xl bg-indigo-950/80 border border-indigo-700 text-xs text-center">
                    <span className="text-indigo-300 block text-[10px] uppercase font-mono">Q5 الإنشاء</span>
                    <strong className="text-amber-300 font-bold">{results.essayScore} / 20</strong>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>طباعة تقرير الكنترول</span>
                  </button>

                  <button
                    onClick={() => handleStartExam(180)}
                    className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-2"
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
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>المطابقة مع نموذج الكنترول والحلول النموذجية</span>
                </h2>
              </div>

              {currentPaper.sections.map(section => (
                <div key={section.id} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="font-bold text-slate-900 text-sm">
                      {section.sectionCode}: {section.titleAr}
                    </h3>
                    <span className="text-xs font-bold text-indigo-700">
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
                          className={`p-4 rounded-2xl border ${
                            evalRes.isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <span dir="ltr" className="text-xs font-bold text-slate-900 text-left en-sentence">
                              {item.number}. {item.questionText}
                            </span>
                            <div className="flex items-center gap-1.5 shrink-0">
                              {onToggleBookmark && (
                                <button
                                  type="button"
                                  onClick={() => onToggleBookmark(item.id)}
                                  className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                                    bookmarkedQuestionIds.includes(item.id)
                                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                                      : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'
                                  }`}
                                  title={bookmarkedQuestionIds.includes(item.id) ? 'محفوظ في المفضلة' : 'حفظ للمراجعة المركزة'}
                                >
                                  <Bookmark className={`w-3.5 h-3.5 ${bookmarkedQuestionIds.includes(item.id) ? 'fill-amber-500 text-amber-600' : ''}`} />
                                </button>
                              )}
                              <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                                evalRes.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                              }`}>
                                {evalRes.score} / {item.maxScore}
                              </span>
                            </div>
                          </div>

                          <div className="mt-2 text-xs space-y-1 font-mono">
                            <div className="text-slate-600">
                              إجابتك: <span className={evalRes.isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>{userAns || '(فارغ)'}</span>
                            </div>
                            <div className="text-slate-900">
                              الحل النموذجي: <span className="text-indigo-700 font-bold">{item.correctAnswer}</span>
                            </div>
                          </div>

                          <div className="mt-2 pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
                            💡 {item.explanation}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Essay Review Box */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">
                  Q5: الإنشاء الوزاري المكتوب والنموذج القياسي
                </h3>
                <div dir="ltr" className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-serif text-left">
                  <span className="font-bold text-slate-900 block mb-1 font-sans">Your Written Essay ({countWords(essayText)} words):</span>
                  <p className="en-sentence">{essayText || 'No essay written.'}</p>
                </div>

                <div dir="ltr" className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 leading-relaxed font-serif text-left">
                  <span className="font-bold text-indigo-900 block mb-1 font-sans">Official Model Answer (الأستاذ مصطفى تركي):</span>
                  <p className="en-sentence">{currentPaper.essayOptions.find(o => o.optionLetter === selectedEssayOption)?.suggestedModel}</p>
                </div>
              </div>

            </div>

          </div>
        );
      })()}

    </div>
  );
};
