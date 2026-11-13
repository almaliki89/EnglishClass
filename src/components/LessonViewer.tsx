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

  // Category Configuration with Unified Semantic Design Tokens
  const getCategoryConfig = () => {
    switch (lesson.category) {
      case 'grammar':
        return {
          title: 'قواعد وزارية وخوارزميات الحل',
          badgeClass: 'bg-blue-mist text-cobalt border-ink',
          accentColor: 'var(--token-cobalt)',
          icon: <Cpu className="w-4 h-4 text-cobalt" />,
          modeName: 'معمل القواعد والتحويلات',
        };
      case 'reading':
        return {
          title: 'قطع الكتاب الاستيعابية وقصص الأدب',
          badgeClass: 'bg-paper text-ink border-ink',
          accentColor: 'var(--token-ink)',
          icon: <BookOpen className="w-4 h-4 text-cobalt" />,
          modeName: 'ملف القصة والبطاقات القلابة',
        };
      case 'vocabulary':
        return {
          title: 'مفردات ومتلازمات وإسقاطات',
          badgeClass: 'bg-yellow text-ink border-ink',
          accentColor: 'var(--token-yellow)',
          icon: <Compass className="w-4 h-4 text-cobalt" />,
          modeName: 'ساحة التوصيل والمتلازمات',
        };
      case 'spelling':
      default:
        return {
          title: 'إملاء وسوابق ولواحق وشواذ',
          badgeClass: 'bg-coral text-ink border-ink',
          accentColor: 'var(--token-coral)',
          icon: <PenTool className="w-4 h-4 text-ink" />,
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
    <div className="lesson-reading space-y-6 pb-20 max-w-4xl mx-auto text-ink">
      
      {/* 1. Top Breadcrumb & Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-surface p-3.5 sm:p-4 border-3 border-ink shadow-brutal-action">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
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
              type="button"
              id="back-to-dashboard-btn"
              onClick={onBackToDashboard}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-paper hover:bg-surface text-ink border-2 border-ink shadow-brutal-sm text-xs sm:text-sm font-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للمنهج</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 font-mono">
          <span className="text-xs font-black px-2.5 py-1 bg-yellow text-ink border-2 border-ink shadow-brutal-sm">
            UNIT 0{unit.id}
          </span>
          <span className="text-xs font-black text-ink font-mono">/</span>
          <span className="text-xs font-black px-2.5 py-1 bg-surface text-ink border-2 border-ink shadow-brutal-sm">
            LESSON {lesson.lessonNumber}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            id="toggle-complete-lesson-btn"
            onClick={handleToggleComplete}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black border-2 border-ink transition-all cursor-pointer shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 ${
              isCompleted
                ? 'bg-cobalt text-surface'
                : 'bg-paper hover:bg-yellow text-ink'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'مكتمل بنجاح! 🏆' : 'تحديد كمكتمل'}</span>
          </button>

          <button
            type="button"
            id="toggle-quick-hints-btn"
            onClick={() => setShowQuickHints((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5 rounded-[4px]"
            title="عرض تلميحات سريعة للمراجعة"
          >
            <Sparkles className="w-3.5 h-3.5 text-cobalt" />
            <span>{showQuickHints ? 'إخفاء التلميحات' : 'تلميحات ذكية'}</span>
          </button>
        </div>
      </div>

      {/* 2. Quick Hints Panel */}
      {showQuickHints && (
        <div className="p-5 bg-yellow/25 border-3 border-ink shadow-brutal-lg space-y-3 rounded-[6px]">
          <div className="flex items-center justify-between border-b-2 border-ink pb-2">
            <div className="flex items-center gap-2 text-ink font-black text-sm">
              <Lightbulb className="w-4 h-4 text-cobalt fill-cobalt" />
              <span>تلميحات ومفاتيح الحل السريع</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-ink/70">تلميحات دراسية</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ink">
            <div className="bg-surface p-3 border-2 border-ink shadow-brutal-sm rounded-[4px]">
              <span className="font-mono text-[10px] font-bold text-cobalt block mb-1">01. القاعدة الأساسية</span>
              <p className="font-bold leading-relaxed">{lesson.grammarRuleFormula || lesson.summary}</p>
            </div>
            <div className="bg-surface p-3 border-2 border-ink shadow-brutal-sm rounded-[4px]">
              <span className="font-mono text-[10px] font-bold text-semantic-error block mb-1">02. الفخ الشائع</span>
              <p className="font-bold leading-relaxed">{lesson.commonMistakes?.[0] || 'راجع زمن الجملة ومحددات الفعل أولاً قبل كتابة الإجابة.'}</p>
            </div>
            <div className="bg-surface p-3 border-2 border-ink shadow-brutal-sm rounded-[4px]">
              <span className="font-mono text-[10px] font-bold text-ink block mb-1">03. مفتاح الحل</span>
              <p className="font-bold leading-relaxed">حل السؤال واستخرج الكلمة الدالة أولاً؛ لا تخمن الإجابة عشوائياً.</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Lesson Header Title & Subject-Adapted Hero Dossier */}
      <div className="p-6 sm:p-8 bg-surface border-2 border-ink shadow-brutal-lg rounded-[6px] space-y-4 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink/15 pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-[4px] text-xs font-mono font-bold shadow-brutal-xs ${catConfig.badgeClass}`}>
              {catConfig.icon}
              <span>{catConfig.title}</span>
            </span>
            <span className="text-xs font-mono font-bold text-muted-gray">
              UNIT 0{unit.id} • L{lesson.lessonNumber}
            </span>
          </div>

          {/* Quick Audio Read for Lesson Title */}
          <button
            type="button"
            onClick={() => handleSpeak(lesson.titleEn)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 border border-ink text-xs font-mono font-bold transition-all cursor-pointer shadow-brutal-xs active:translate-x-0.5 active:translate-y-0.5 ${
              speakingText === lesson.titleEn 
                ? 'bg-yellow text-ink' 
                : 'bg-paper hover:bg-surface text-ink'
            }`}
            title="استمع لنطق عنوان الدرس بالإنجليزية"
          >
            <Volume2 className="w-3.5 h-3.5 text-cobalt" />
            <span>PRONOUNCE</span>
          </button>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-ink leading-tight tracking-tight">
            {lesson.titleAr}
          </h1>

          <p dir="ltr" className="text-xs sm:text-sm text-cobalt font-mono font-bold text-left mt-1 tracking-wide">
            {lesson.titleEn}
          </p>
        </div>

        <p className="text-sm sm:text-base text-ink/90 leading-relaxed pt-2 border-t border-ink/10 font-medium">
          {lesson.summary}
        </p>

        {/* Source Provenance Badge */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono font-bold">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-paper border-2 border-ink text-ink">
            <BookOpen className="w-3.5 h-3.5 text-cobalt shrink-0" />
            <span>المصدر الدراسي: {lesson.sourcePages || `كتاب الطالب ص ${lesson.lessonNumber * 2} • كتاب النشاط`}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow text-ink border-2 border-ink">
            <CheckCircle2 className="w-3.5 h-3.5 text-ink shrink-0" />
            <span>منهاج اللغة الإنكليزية 2026</span>
          </span>
        </div>

        {/* View Mode Switcher Brutalist Tabs */}
        <div className="pt-3 border-t-2 border-ink flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-black text-ink ml-1">VIEW:</span>
          
          <button
            type="button"
            onClick={() => setActiveSectionView('all')}
            className={`px-3 py-1.5 text-xs font-black transition-all cursor-pointer border-2 ${
              activeSectionView === 'all'
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                : 'bg-paper hover:bg-surface text-ink border-ink'
            }`}
          >
            عرض شامل متكامل
          </button>

          <button
            type="button"
            onClick={() => setActiveSectionView('interactive')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeSectionView === 'interactive'
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                : 'bg-paper hover:bg-surface text-ink border-ink'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow" />
            <span>{catConfig.modeName}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSectionView('academic')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeSectionView === 'academic'
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                : 'bg-paper hover:bg-surface text-ink border-ink'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>شرح الملزمة والملاحظات</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSectionView('exercises')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeSectionView === 'exercises'
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm'
                : 'bg-paper hover:bg-surface text-ink border-ink'
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
            <div className="p-6 sm:p-8 bg-surface border-4 border-ink shadow-brutal-modal space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink pb-3">
                <h2 className="text-base sm:text-lg font-black text-ink flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cobalt" />
                  <span>أمثلة وتطبيقات نموذجية</span>
                </h2>
                <span className="text-xs font-mono font-bold text-ink/60">CLICK SPEAKER TO LISTEN</span>
              </div>

              <div className="space-y-3">
                {lesson.examples.map((ex, idx) => (
                  <div key={idx} className="p-4 bg-paper border-2 border-ink shadow-brutal-sm space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <p dir="ltr" className="font-mono text-sm sm:text-base font-bold text-ink text-left min-w-0 break-words">
                        {ex.en}
                      </p>

                      <div className="flex items-center gap-2 shrink-0">
                        {ex.note && (
                          <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-yellow text-ink border border-ink whitespace-nowrap">
                            {ex.note}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleSpeak(ex.en)}
                          className={`p-1.5 border-2 border-ink transition-all cursor-pointer shadow-brutal-press active:translate-x-0.5 active:translate-y-0.5 ${
                            speakingText === ex.en 
                              ? 'bg-cobalt text-surface animate-pulse' 
                              : 'bg-surface hover:bg-yellow text-ink'
                          }`}
                          title="استمع للنطق الإنجليزي"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-ink/80 text-right leading-relaxed font-bold">
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
        <div className="p-6 sm:p-8 bg-surface border-4 border-ink shadow-brutal-modal space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink pb-3">
            <div>
              <h2 className="text-base sm:text-lg font-black text-ink">
                تمارين واختبارات فورية
              </h2>
              <p className="text-xs text-ink/70 font-bold mt-1">
                اختر الإجابة الصحيحة للتحقق من فهمك والحصول على نقاط الخبرة XP
              </p>
            </div>
            <span className="text-xs font-mono font-black px-3 py-1 bg-yellow text-ink border-2 border-ink shadow-brutal-sm">
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
                  className={`p-5 border-3 border-ink transition-all ${
                    isAnswered
                      ? isCorrect 
                        ? 'bg-yellow/30 shadow-brutal-action' 
                        : 'bg-coral/20 shadow-brutal-action'
                      : 'bg-paper shadow-brutal-callout'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p dir="ltr" className="font-bold text-sm sm:text-base text-ink text-left min-w-0 break-words">
                      <span className="bg-ink text-yellow font-black mr-2 font-mono px-1.5 py-0.5 text-xs">
                        Q{idx + 1}
                      </span>
                      {exercise.question}
                    </p>
                    {exercise.ministerialYear && (
                      <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-surface text-ink border border-ink whitespace-nowrap shrink-0 shadow-brutal-press">
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

                        let btnStyle = "bg-surface border-ink text-ink hover:bg-yellow";
                        if (isAnswered) {
                          if (isThisCorrect) {
                            btnStyle = "bg-cobalt text-surface border-ink font-black shadow-brutal-sm";
                          } else if (isThisSelected) {
                            btnStyle = "bg-coral text-ink border-ink font-black shadow-brutal-sm";
                          } else {
                            btnStyle = "bg-surface/60 border-ink/40 text-ink/40 opacity-60";
                          }
                        }

                        return (
                          <button
                            type="button"
                            key={opt}
                            disabled={isAnswered}
                            onClick={() => handleSelectOption(exercise, opt)}
                            className={`p-3 border-2 rounded-[4px] text-sm font-bold text-left transition-all flex items-center justify-between cursor-pointer active:translate-x-0.5 active:translate-y-0.5 shadow-brutal-sm ${btnStyle}`}
                          >
                            <span dir="ltr">{opt}</span>
                            {isAnswered && isThisCorrect && <Check className="w-4 h-4 text-surface shrink-0 ml-2" />}
                            {isAnswered && isThisSelected && !isThisCorrect && <X className="w-4 h-4 text-semantic-error shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Clear model answer and concise explanation */}
                  {isAnswered && (
                    <div className={`lesson-answer ${isCorrect ? 'lesson-answer--correct' : 'lesson-answer--review'}`}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="lesson-answer__label">الإجابة النموذجية</span>
                        <span className="text-xs font-bold">{isCorrect ? 'إجابتك صحيحة' : 'راجع الحل'}</span>
                      </div>
                      <p dir="ltr" className="lesson-answer__value">{exercise.correctAnswer}</p>
                      <p className="lesson-answer__explanation">{exercise.explanation}</p>
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
        <div className="p-6 bg-yellow text-ink border-4 border-ink shadow-brutal-modal flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 bg-cobalt text-surface border-2 border-ink shadow-brutal-sm flex items-center justify-center font-black text-xl shrink-0">
            🏆
          </div>
          <div className="space-y-1 text-center sm:text-right flex-1">
            <h4 className="text-lg font-black text-ink flex items-center justify-center sm:justify-start gap-2">
              <span>أحسنت يا بطل! أتممت هذا الدرس بجدارة 🎉</span>
            </h4>
            <p className="text-xs text-ink/80 font-bold leading-relaxed">
              لقد سجلت إنجازاً جديداً وأضفت نقاط خبرة XP إلى رصيدك. تابع التحدي وانتقل إلى الدرس التالي أو تدرب في محاكي الامتحان!
            </p>
          </div>
        </div>
      )}

      {/* 9. Prev / Next Navigation in Unit */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-ink">
        {prevLesson ? (
          <button
            type="button"
            id="prev-lesson-btn"
            onClick={() => onSelectLesson(prevLesson)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface hover:bg-paper border-3 border-ink text-ink font-black text-xs sm:text-sm shadow-brutal-callout hover:shadow-brutal-press hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>الدرس السابق: {prevLesson.titleAr}</span>
          </button>
        ) : <div />}

        <button
          type="button"
          onClick={() => (grade ? navigate(`/grade/${grade}/unit/${unit.id}`) : onBackToDashboard())}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-paper hover:bg-surface text-ink border-2 border-ink shadow-brutal-sm text-xs font-black transition-all cursor-pointer"
        >
          <span>فهرس الوحدة 0{unit.id} 📂</span>
        </button>

        {nextLesson ? (
          <button
            type="button"
            id="next-lesson-btn"
            onClick={() => onSelectLesson(nextLesson)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-cobalt hover:bg-cobalt-hover text-surface font-black text-xs sm:text-sm border-3 border-ink rounded-[4px] shadow-brutal-callout hover:shadow-brutal-press hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>الدرس التالي: {nextLesson.titleAr}</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => (grade ? navigate(`/grade/${grade}/unit/${unit.id}`) : onBackToDashboard())}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-yellow hover:bg-yellow-hover text-ink font-black text-xs sm:text-sm border-3 border-ink rounded-[4px] shadow-brutal-callout transition-all cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-cobalt" />
            <span>أكملت جميع دروس هذه الوحدة!</span>
          </button>
        )}
      </div>

    </div>
  );
};
