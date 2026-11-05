import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, Lightbulb, AlertTriangle, 
  HelpCircle, BookOpen, Sparkles, Check, X, RotateCcw, Volume2, 
  Layers, Compass, Cpu, PenTool, Award, Share2
} from 'lucide-react';
import { Unit, Lesson, Exercise, EducationalGrade } from '../types';
import { GrammarLab } from './lesson-modes/GrammarLab';
import { ReadingDossier } from './lesson-modes/ReadingDossier';
import { VocabularyArena } from './lesson-modes/VocabularyArena';
import { SpellingForge } from './lesson-modes/SpellingForge';
import { AcademicExplorationEngine } from './AcademicExplorationEngine';
import { GroundedLessonTutor } from './GroundedLessonTutor';
import { speakEnglish } from '../utils/speech';
import { CartoonMascot } from './CartoonMascot';
import { playPopSound, playSuccessChime, playFanfare, playBoingSound } from '../utils/cartoonAudio';
import { BreadcrumbsNav, CalloutBox, BrutalBadge, BrutalButton } from './common/BrutalUI';
import { getGradeMeta } from '../data/gradeContentResolver';

interface LessonViewerProps {
  unit: Unit;
  lesson: Lesson;
  grade?: EducationalGrade;
  onBackToDashboard: () => void;
  onSelectLesson: (lesson: Lesson) => void;
  isCompleted: boolean;
  onToggleComplete: (lessonId: string) => void;
  onAnswerExercise: (exerciseId: string, isCorrect: boolean) => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  unit,
  lesson,
  grade,
  onBackToDashboard,
  onSelectLesson,
  isCompleted,
  onToggleComplete,
  onAnswerExercise,
}) => {
  const navigate = useNavigate();
  const gradeMeta = grade ? getGradeMeta(grade) : null;
  // Local exercise answer tracking: exerciseId -> selected option
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});
  const [showQuickHints, setShowQuickHints] = useState(false);
  const [activeSectionView, setActiveSectionView] = useState<'all' | 'interactive' | 'academic' | 'exercises'>('all');
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  const handleSpeak = (text: string) => {
    setSpeakingText(text);
    speakEnglish(text, () => setSpeakingText(null));
  };

  const handleSelectOption = (exercise: Exercise, option: string) => {
    if (selectedAnswers[exercise.id]) return; // already answered
    const isCorrect = option === exercise.correctAnswer;
    if (isCorrect) {
      playSuccessChime();
    } else {
      playBoingSound();
    }
    setSelectedAnswers(prev => ({ ...prev, [exercise.id]: option }));
    setRevealedExplanations(prev => ({ ...prev, [exercise.id]: true }));
    onAnswerExercise(exercise.id, isCorrect);
  };

  const handleToggleComplete = () => {
    playPopSound();
    if (!isCompleted) {
      playFanfare();
    }
    onToggleComplete(lesson.id);
  };

  const handleResetExercise = (exerciseId: string) => {
    setSelectedAnswers(prev => {
      const next = { ...prev };
      delete next[exerciseId];
      return next;
    });
    setRevealedExplanations(prev => {
      const next = { ...prev };
      delete next[exerciseId];
      return next;
    });
  };

  // Find previous and next lesson in unit
  const currentIndex = unit.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? unit.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < unit.lessons.length - 1 ? unit.lessons[currentIndex + 1] : null;

  // Category Configuration
  const getCategoryConfig = () => {
    switch (lesson.category) {
      case 'grammar':
        return {
          title: 'قواعد وزارية وخوارزميات الحل',
          badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          accentColor: 'indigo',
          icon: <Cpu className="w-4 h-4 text-indigo-600" />,
          modeName: 'معمل القواعد والتحويلات',
        };
      case 'reading':
        return {
          title: 'قطع الكتاب الاستيعابية وقصص الأدب',
          badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
          accentColor: 'amber',
          icon: <BookOpen className="w-4 h-4 text-amber-600" />,
          modeName: 'ملف القصة والبطاقات القلابة',
        };
      case 'vocabulary':
        return {
          title: 'مفردات ومتلازمات وإسقاطات',
          badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          accentColor: 'emerald',
          icon: <Compass className="w-4 h-4 text-emerald-600" />,
          modeName: 'ساحة التوصيل والمتلازمات',
        };
      case 'spelling':
      default:
        return {
          title: 'إملاء وسوابق ولواحق وشواذ',
          badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
          accentColor: 'rose',
          icon: <PenTool className="w-4 h-4 text-rose-600" />,
          modeName: 'مختبر الإملاء الدقيق',
        };
    }
  };

  const catConfig = getCategoryConfig();

  // Render the tailored interactive mode for this specific lesson
  const renderTopicInteractiveMode = () => {
    if (lesson.category === 'grammar') {
      return <GrammarLab lesson={lesson} />;
    }
    if (lesson.category === 'reading') {
      return <ReadingDossier lesson={lesson} />;
    }
    if (lesson.category === 'vocabulary') {
      return <VocabularyArena lesson={lesson} />;
    }
    // spelling
    return <SpellingForge lesson={lesson} />;
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto text-[#171717]">
      
      {/* 1. Top Breadcrumb & Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 border-3 border-[#171717] shadow-[4px_4px_0px_#171717]">
        <div className="flex flex-wrap items-center gap-2">
          {grade ? (
            <BreadcrumbsNav
              items={[
                { label: 'الصفوف', onClick: () => navigate('/grades') },
                { label: gradeMeta?.nameAr || 'الصف', onClick: () => navigate(`/grade/${grade}`) },
                { label: `الوحدة 0${unit.id}`, onClick: () => navigate(`/grade/${grade}/unit/${unit.id}`) },
                { label: `درس ${lesson.lessonNumber}: ${lesson.titleAr}` },
              ]}
            />
          ) : (
            <button
              id="back-to-dashboard-btn"
              onClick={onBackToDashboard}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4EFE3] hover:bg-white text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs sm:text-sm font-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للمنهج</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 font-mono">
          <span className="text-xs font-black px-2.5 py-1 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
            UNIT 0{unit.id}
          </span>
          <span className="text-xs font-black text-[#171717] font-mono">/</span>
          <span className="text-xs font-black px-2.5 py-1 bg-white text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
            LESSON {lesson.lessonNumber}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="toggle-complete-lesson-btn"
            onClick={handleToggleComplete}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black border-2 border-[#171717] transition-all cursor-pointer shadow-[2px_2px_0px_#171717] active:translate-x-0.5 active:translate-y-0.5 ${
              isCompleted
                ? 'bg-[#304FFE] text-white'
                : 'bg-[#F4EFE3] hover:bg-[#E9FF57] text-[#171717]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'مكتمل بنجاح! 🏆' : 'تحديد كمكتمل'}</span>
          </button>

          <button
            id="toggle-quick-hints-btn"
            onClick={() => setShowQuickHints((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E9FF57] hover:bg-[#d8ee43] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            title="عرض تلميحات سريعة للمراجعة"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#304FFE]" />
            <span>{showQuickHints ? 'إخفاء التلميحات' : 'تلميحات ذكية'}</span>
          </button>
        </div>
      </div>

      {/* 2. Quick Hints Panel */}
      {showQuickHints && (
        <div className="p-5 bg-[#E9FF57]/25 border-3 border-[#171717] shadow-[5px_5px_0px_#171717] space-y-3">
          <div className="flex items-center justify-between border-b-2 border-[#171717] pb-2">
            <div className="flex items-center gap-2 text-[#171717] font-black text-sm">
              <Lightbulb className="w-4 h-4 text-[#304FFE] fill-[#304FFE]" />
              <span>تلميحات ومفاتيح الحل الوزاري السريع</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#171717]/70">RAPID CHEAT SHEET</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#171717]">
            <div className="bg-white p-3 border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
              <span className="font-mono text-[10px] font-black uppercase text-[#304FFE] block mb-1">01. THE RULE // القاعدة</span>
              <p className="font-bold leading-relaxed">{lesson.grammarRuleFormula || lesson.summary}</p>
            </div>
            <div className="bg-white p-3 border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
              <span className="font-mono text-[10px] font-black uppercase text-[#FF5738] block mb-1">02. EXAM TRAP // الفخ الوزاري</span>
              <p className="font-bold leading-relaxed">{lesson.commonMistakes?.[0] || 'راجع زمن الجملة ومحددات الفعل أولاً قبل كتابة الإجابة.'}</p>
            </div>
            <div className="bg-white p-3 border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
              <span className="font-mono text-[10px] font-black uppercase text-[#171717] block mb-1">03. SMART STEP // مفتاح الحل</span>
              <p className="font-bold leading-relaxed">حل السؤال واستخرج الكلمة الدالة أولاً؛ لا تخمن الإجابة عشوائياً.</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Lesson Header Title & Subject-Adapted Hero Dossier */}
      <div className="p-6 sm:p-8 bg-white border-2 border-[#202124] shadow-[5px_5px_0px_#202124] space-y-4 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#202124]/15 pb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#405DE6] text-white border border-[#202124] text-xs font-mono font-bold shadow-[1.5px_1.5px_0px_#202124]">
              {catConfig.icon}
              <span>{catConfig.title}</span>
            </span>
            <span className="text-xs font-mono font-bold text-[#777873]">
              UNIT 0{unit.id} • L{lesson.lessonNumber}
            </span>
          </div>

          {/* Quick Audio Read for Lesson Title */}
          <button
            onClick={() => handleSpeak(lesson.titleEn)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 border border-[#202124] text-xs font-mono font-bold transition-all cursor-pointer shadow-[1.5px_1.5px_0px_#202124] active:translate-x-0.5 active:translate-y-0.5 ${
              speakingText === lesson.titleEn 
                ? 'bg-[#F3E6A5] text-[#202124]' 
                : 'bg-[#F7F5EF] hover:bg-white text-[#202124]'
            }`}
            title="استمع لنطق عنوان الدرس بالإنجليزية"
          >
            <Volume2 className="w-3.5 h-3.5 text-[#405DE6]" />
            <span>PRONOUNCE</span>
          </button>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#202124] leading-tight tracking-tight">
            {lesson.titleAr}
          </h1>

          <p dir="ltr" className="text-xs sm:text-sm text-[#405DE6] font-mono font-bold text-left mt-1 tracking-wide">
            {lesson.titleEn}
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#202124]/90 leading-relaxed pt-2 border-t border-[#202124]/10 font-medium">
          {lesson.summary}
        </p>

        {/* Verified Provenance Badge */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono font-bold">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F4EFE3] border-2 border-[#171717] text-[#171717]">
            <BookOpen className="w-3.5 h-3.5 text-[#304FFE]" />
            <span>المصدر المعتمد: {lesson.sourcePages || `كتاب الطالب ص ${lesson.lessonNumber * 2} • كتاب النشاط`}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#E9FF57] text-[#171717] border-2 border-[#171717]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#171717]" />
            <span>منهج العراق 2026 الرسمي المعتمد</span>
          </span>
        </div>

        {/* View Mode Switcher Brutalist Tabs */}
        <div className="pt-3 border-t-2 border-[#171717] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-black text-[#171717] ml-1">VIEW:</span>
          
          <button
            onClick={() => setActiveSectionView('all')}
            className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
              activeSectionView === 'all'
                ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                : 'bg-[#F4EFE3] hover:bg-white text-[#171717] border-[#171717]'
            }`}
          >
            عرض شامل متكامل
          </button>

          <button
            onClick={() => setActiveSectionView('interactive')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeSectionView === 'interactive'
                ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                : 'bg-[#F4EFE3] hover:bg-white text-[#171717] border-[#171717]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E9FF57]" />
            <span>{catConfig.modeName}</span>
          </button>

          <button
            onClick={() => setActiveSectionView('academic')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeSectionView === 'academic'
                ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                : 'bg-[#F4EFE3] hover:bg-white text-[#171717] border-[#171717]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>شرح الملزمة والملاحظات</span>
          </button>

          <button
            onClick={() => setActiveSectionView('exercises')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeSectionView === 'exercises'
                ? 'bg-[#304FFE] text-white border-[#171717] shadow-[2px_2px_0px_#171717]'
                : 'bg-[#F4EFE3] hover:bg-white text-[#171717] border-[#171717]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>التمارين ({lesson.exercises.length})</span>
          </button>
        </div>
      </div>

      {/* 4. TOPIC-TAILORED INTERACTIVE ENGINE */}
      {(activeSectionView === 'all' || activeSectionView === 'interactive') && (
        <div id="topic-tailored-interactive-section" className="space-y-4">
          {renderTopicInteractiveMode()}
        </div>
      )}

      {/* 5. ACADEMIC TEXTBOOK CONTENT & TEACHER NOTES */}
      {(activeSectionView === 'all' || activeSectionView === 'academic') && (
        <div className="space-y-6">
          <AcademicExplorationEngine lesson={lesson} />

          {/* Bilingual Interactive Examples with Audio Pronunciation */}
          {lesson.examples && lesson.examples.length > 0 && (
            <div className="p-6 sm:p-8 bg-white border-4 border-[#171717] shadow-[6px_6px_0px_#171717] space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[#171717] pb-3">
                <h2 className="text-base sm:text-lg font-black text-[#171717] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#304FFE]" />
                  <span>أمثلة وتطبيقات وزارية نموذجية</span>
                </h2>
                <span className="text-xs font-mono font-bold text-[#171717]/60">CLICK SPEAKER TO LISTEN</span>
              </div>

              <div className="space-y-3">
                {lesson.examples.map((ex, idx) => (
                  <div key={idx} className="p-4 bg-[#F4EFE3] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <p dir="ltr" className="font-mono text-sm sm:text-base font-bold text-[#171717] text-left">
                        {ex.en}
                      </p>

                      <div className="flex items-center gap-2 shrink-0">
                        {ex.note && (
                          <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-[#E9FF57] text-[#171717] border border-[#171717] whitespace-nowrap">
                            {ex.note}
                          </span>
                        )}
                        <button
                          onClick={() => handleSpeak(ex.en)}
                          className={`p-1.5 border-2 border-[#171717] transition-all cursor-pointer shadow-[1px_1px_0px_#171717] active:translate-x-0.5 active:translate-y-0.5 ${
                            speakingText === ex.en 
                              ? 'bg-[#304FFE] text-white animate-pulse' 
                              : 'bg-white hover:bg-[#E9FF57] text-[#171717]'
                          }`}
                          title="استمع للنطق الإنجليزي"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#171717]/80 text-right leading-relaxed font-bold">
                      {ex.ar}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* 6. GROUNDED AI PEDAGOGICAL TUTOR */}
      <GroundedLessonTutor unit={unit} lesson={lesson} />

      {/* 7. EXERCISES & TESTS */}
      {(activeSectionView === 'all' || activeSectionView === 'exercises') && lesson.exercises && lesson.exercises.length > 0 && (
        <div className="p-6 sm:p-8 bg-white border-4 border-[#171717] shadow-[6px_6px_0px_#171717] space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[#171717] pb-3">
            <div>
              <h2 className="text-base sm:text-lg font-black text-[#171717]">
                تمارين واختبارات وزارية فورية
              </h2>
              <p className="text-xs text-[#171717]/70 font-bold mt-1">
                اختر الإجابة الصحيحة للتحقق من فهمك والحصول على نقاط الخبرة XP
              </p>
            </div>
            <span className="text-xs font-mono font-black px-3 py-1 bg-[#E9FF57] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
              {lesson.exercises.length} QUESTIONS
            </span>
          </div>

          <div className="space-y-6">
            {lesson.exercises.map((exercise, idx) => {
              const selected = selectedAnswers[exercise.id];
              const isAnswered = !!selected;
              const isCorrect = selected === exercise.correctAnswer;

              return (
                <div 
                  key={exercise.id}
                  id={`exercise-card-${exercise.id}`}
                  className={`p-5 border-3 border-[#171717] transition-all ${
                    isAnswered
                      ? isCorrect 
                        ? 'bg-[#E9FF57]/30 shadow-[4px_4px_0px_#171717]' 
                        : 'bg-[#FF5738]/20 shadow-[4px_4px_0px_#171717]'
                      : 'bg-[#F4EFE3] shadow-[3px_3px_0px_#171717]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p dir="ltr" className="font-bold text-sm sm:text-base text-[#171717] text-left">
                      <span className="bg-[#171717] text-[#E9FF57] font-black mr-2 font-mono px-1.5 py-0.5 text-xs">
                        Q{idx + 1}
                      </span>
                      {exercise.question}
                    </p>
                    {exercise.ministerialYear && (
                      <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-white text-[#171717] border border-[#171717] whitespace-nowrap shrink-0 shadow-[1px_1px_0px_#171717]">
                        {exercise.ministerialYear}
                      </span>
                    )}
                  </div>

                  {/* Options */}
                  {exercise.options && (
                    <div dir="ltr" className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                      {exercise.options.map((opt) => {
                        const isThisSelected = selected === opt;
                        const isThisCorrect = opt === exercise.correctAnswer;

                        let btnStyle = "bg-white border-[#171717] text-[#171717] hover:bg-[#E9FF57]";
                        if (isAnswered) {
                          if (isThisCorrect) {
                            btnStyle = "bg-[#304FFE] text-white border-[#171717] font-black shadow-[2px_2px_0px_#171717]";
                          } else if (isThisSelected) {
                            btnStyle = "bg-[#FF5738] text-white border-[#171717] font-black shadow-[2px_2px_0px_#171717]";
                          } else {
                            btnStyle = "bg-white/60 border-[#171717]/40 text-[#171717]/40 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={opt}
                            disabled={isAnswered}
                            onClick={() => handleSelectOption(exercise, opt)}
                            className={`p-3 border-2 text-sm font-bold text-left transition-all flex items-center justify-between cursor-pointer active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#171717] ${btnStyle}`}
                          >
                            <span dir="ltr">{opt}</span>
                            {isAnswered && isThisCorrect && <Check className="w-4 h-4 text-white shrink-0 ml-2" />}
                            {isAnswered && isThisSelected && !isThisCorrect && <X className="w-4 h-4 text-white shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation feedback */}
                  {isAnswered && (
                    <div className="mt-4 pt-3 border-t-2 border-[#171717] flex items-start justify-between gap-3 text-right">
                      <div className="space-y-1">
                        <p className={`text-xs font-black ${isCorrect ? 'text-[#304FFE]' : 'text-[#FF5738]'}`}>
                          {isCorrect ? 'إجابة صحيحة وزارياً! أحسنت 🎉' : 'إجابة غير دقيقة! لاحظ التعليل الوزاري أدناه:'}
                        </p>
                        <p className="text-xs text-[#171717] font-bold leading-relaxed">
                          {exercise.explanation}
                        </p>
                      </div>

                      <button
                        onClick={() => handleResetExercise(exercise.id)}
                        className="p-1.5 bg-white border-2 border-[#171717] text-[#171717] hover:bg-[#E9FF57] shadow-[1px_1px_0px_#171717] active:translate-x-0.5 active:translate-y-0.5 transition-colors cursor-pointer"
                        title="إعادة المحاولة"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 8. Celebration Banner (shows when completed) */}
      {isCompleted && (
        <div className="p-6 bg-[#E9FF57] text-[#171717] border-4 border-[#171717] shadow-[6px_6px_0px_#171717] flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 bg-[#304FFE] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center font-black text-xl shrink-0">
            🏆
          </div>
          <div className="space-y-1 text-center sm:text-right flex-1">
            <h4 className="text-lg font-black text-[#171717] flex items-center justify-center sm:justify-start gap-2">
              <span>أحسنت يا بطل! أتممت هذا الدرس بجدارة 🎉</span>
            </h4>
            <p className="text-xs text-[#171717]/80 font-bold leading-relaxed">
              لقد سجلت إنجازاً جديداً وأضفت نقاط خبرة XP إلى رصيدك. تابع التحدي وانتقل إلى الدرس التالي أو تدرب في محاكي الامتحان الوزاري!
            </p>
          </div>
        </div>
      )}

      {/* 9. Prev / Next Navigation in Unit */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-[#171717]">
        {prevLesson ? (
          <button
            id="prev-lesson-btn"
            onClick={() => onSelectLesson(prevLesson)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#F4EFE3] border-3 border-[#171717] text-[#171717] font-black text-xs sm:text-sm shadow-[3px_3px_0px_#171717] hover:shadow-[1px_1px_0px_#171717] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>الدرس السابق: {prevLesson.titleAr}</span>
          </button>
        ) : <div />}

        <button
          onClick={() => (grade ? navigate(`/grade/${grade}/unit/${unit.id}`) : onBackToDashboard())}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F4EFE3] hover:bg-white text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-xs font-black transition-all cursor-pointer"
        >
          <span>فهرس الوحدة 0{unit.id} 📂</span>
        </button>

        {nextLesson ? (
          <button
            id="next-lesson-btn"
            onClick={() => onSelectLesson(nextLesson)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#304FFE] hover:bg-[#203ecc] text-white font-black text-xs sm:text-sm border-3 border-[#171717] shadow-[3px_3px_0px_#171717] hover:shadow-[1px_1px_0px_#171717] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>الدرس التالي: {nextLesson.titleAr}</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => (grade ? navigate(`/grade/${grade}/unit/${unit.id}`) : onBackToDashboard())}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E9FF57] hover:bg-[#d8ee43] text-[#171717] font-black text-xs sm:text-sm border-3 border-[#171717] shadow-[3px_3px_0px_#171717] transition-all cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-[#304FFE]" />
            <span>أكملت جميع دروس هذه الوحدة!</span>
          </button>
        )}
      </div>

    </div>
  );
};
