import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Headphones,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import { EducationalGrade, Exercise, Lesson } from '../types';
import { getGradeMeta } from '../data/gradeContentResolver';
import { speakEnglish } from '../utils/speech';

interface GuidedLessonJourneyProps {
  lesson: Lesson;
  grade?: EducationalGrade;
  isCompleted: boolean;
  onComplete: () => void;
  onAnswerExercise: (exerciseId: string, isCorrect: boolean) => void;
  onOpenActivities: () => void;
}

const JOURNEY_STEPS = [
  { title: 'تهيئة', subtitle: 'ابدأ من الفكرة', icon: Sparkles, color: 'bg-yellow' },
  { title: 'افهم', subtitle: 'شرح خطوة بخطوة', icon: Lightbulb, color: 'bg-lavender' },
  { title: 'شاهد', subtitle: 'مثال مع النطق', icon: Eye, color: 'bg-blue-mist' },
  { title: 'جرّب', subtitle: 'تطبيق بنفسك', icon: Target, color: 'bg-coral' },
  { title: 'ثبّت', subtitle: 'مراجعة وإنجاز', icon: Trophy, color: 'bg-soft-mint' },
];

const GRADE_APPROACH: Record<EducationalGrade, string> = {
  'third-intermediate': 'نبدأ بالفكرة الأساسية، ثم مثال واضح، ثم تدريب قصير يساعدك على تثبيت المعلومة والاستعداد للأسئلة الوزارية.',
  'fourth-preparatory': 'نبني الفهم من الأساس، ونربط الشرح بالمثال والمفردات حتى تتضح لك الفكرة قبل الانتقال إلى التطبيق.',
  'fifth-preparatory': 'نربط المفاهيم ببعضها ونقارن بين الاستخدامات، ثم ننتقل إلى تطبيقات تساعدك على التفكير لا الحفظ وحده.',
  'sixth-preparatory': 'نفهم القاعدة بعمق، ونحلل المثال، ثم نتدرب على دقة الإجابة ومهارة التعامل مع نمط الأسئلة الوزارية.',
};

const normalizeAnswer = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[.,!?،؛:()"'’]/g, '')
    .replace(/\s+/g, ' ');

export const GuidedLessonJourney: React.FC<GuidedLessonJourneyProps> = ({
  lesson,
  grade,
  isCompleted,
  onComplete,
  onAnswerExercise,
  onOpenActivities,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeConcept, setActiveConcept] = useState(0);
  const [activeExample, setActiveExample] = useState(0);
  const [revealedTranslations, setRevealedTranslations] = useState<Record<number, boolean>>({});
  const [activeExercise, setActiveExercise] = useState(0);
  const [draftAnswer, setDraftAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, { answer: string; isCorrect: boolean }>>({});
  const [reportedAnswers, setReportedAnswers] = useState<Record<string, boolean>>({});

  const gradeMeta = grade ? getGradeMeta(grade) : null;
  const approach = grade ? GRADE_APPROACH[grade] : 'نتعلم الفكرة تدريجياً، ونشاهد مثالاً، ثم نطبق ونراجع ما تعلمناه.';
  const concepts = lesson.detailedContent || [];
  const examples = lesson.examples || [];
  const exercises = lesson.exercises || [];
  const currentExercise = exercises[activeExercise];
  const currentSubmission = currentExercise ? submittedAnswers[currentExercise.id] : undefined;
  const answeredCount = Object.keys(submittedAnswers).length;
  const correctCount = Object.values(submittedAnswers).filter((answer) => answer.isCorrect).length;
  const lessonObjectives = lesson.pedagogy?.learningObjectives?.length
    ? lesson.pedagogy.learningObjectives
    : [
        `فهم الفكرة الرئيسة في درس «${lesson.titleAr}».`,
        'ملاحظة طريقة استخدام المعلومة في أمثلة الدرس.',
        'تطبيق ما تعلمته في التمارين ثم مراجعة الأخطاء.',
      ];
  const solvingClues = lesson.pedagogy?.solvingClues || [];
  const commonTraps = lesson.pedagogy?.commonTraps?.length
    ? lesson.pedagogy.commonTraps
    : lesson.commonMistakes || [];
  const teacherNotes = lesson.teacherNotes || [];
  const canMoveNext = activeStep < JOURNEY_STEPS.length - 1;

  const submitAnswer = (exercise: Exercise, answer: string) => {
    if (!answer.trim() || submittedAnswers[exercise.id]) return;
    const isCorrect = normalizeAnswer(answer) === normalizeAnswer(exercise.correctAnswer);
    setSubmittedAnswers((previous) => ({
      ...previous,
      [exercise.id]: { answer: answer.trim(), isCorrect },
    }));
    if (!reportedAnswers[exercise.id]) {
      onAnswerExercise(exercise.id, isCorrect);
      setReportedAnswers((previous) => ({ ...previous, [exercise.id]: true }));
    }
  };

  const goToExercise = (index: number) => {
    setActiveExercise(index);
    setDraftAnswer('');
    setShowHint(false);
  };

  const speak = (text: string) => {
    if (text.trim()) speakEnglish(text);
  };

  const renderWarmup = () => (
    <div className="space-y-5">
      <div className="rounded-[6px] border-2 border-ink bg-blue-mist p-5 sm:p-7 shadow-brutal-callout">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-ink bg-surface px-2.5 py-1 text-[10px] font-mono font-black text-ink">
            <Sparkles className="h-3.5 w-3.5 text-cobalt" />
            قبل أن نبدأ
          </span>
          {gradeMeta && <span className="text-xs font-bold text-ink/70">{gradeMeta.nameAr}</span>}
        </div>
        <h2 className="text-xl sm:text-2xl font-black leading-tight text-ink">لن نفترض أنك تعرف الدرس مسبقاً.</h2>
        <p className="mt-3 text-sm sm:text-base leading-8 font-semibold text-ink">
          {lesson.pedagogy?.warmup || lesson.summary}
        </p>
        <p className="mt-4 border-t border-ink/20 pt-3 text-xs sm:text-sm font-bold leading-7 text-ink/75">
          {approach}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-[6px] border-2 border-ink bg-surface p-4 shadow-brutal-sm">
          <div className="flex items-center gap-2 text-sm font-black text-ink">
            <Target className="h-4 w-4 text-cobalt" />
            ماذا ستتعلم؟
          </div>
          <ul className="mt-3 space-y-2">
            {lessonObjectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm font-semibold leading-6 text-ink">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ink bg-yellow text-[10px] font-black">{index + 1}</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[6px] border-2 border-ink bg-yellow p-4 shadow-brutal-sm">
          <div className="flex items-center gap-2 text-sm font-black text-ink">
            <Zap className="h-4 w-4" />
            طريقة الدراسة
          </div>
          <p className="mt-3 text-xs sm:text-sm font-semibold leading-7 text-ink">
            اقرأ جزءاً واحداً فقط في كل مرة. لا تنتقل إلى الخطوة التالية حتى تستطيع شرح الفكرة بكلماتك. الخطأ هنا ليس فشلاً؛ إنه إشارة إلى ما يحتاج إلى توضيح أكثر.
          </p>
          <div className="mt-3 flex items-center gap-2 border-t border-ink/20 pt-3 text-[11px] font-black text-ink">
            <CheckCircle2 className="h-4 w-4" />
            تعلّم بهدوء، ثم طبّق، ثم راجع.
          </div>
        </div>
      </div>
    </div>
  );

  const renderUnderstanding = () => (
    <div className="space-y-4">
      <div className="rounded-[6px] border-2 border-ink bg-lavender p-5 shadow-brutal-callout">
        <div className="flex items-center gap-2 text-sm font-black text-ink">
          <Lightbulb className="h-4 w-4" />
          الفكرة الأساسية بلغة واضحة
        </div>
        <p className="mt-3 whitespace-pre-line text-sm sm:text-base font-semibold leading-8 text-ink">
          {lesson.pedagogy?.arabicExplanation || lesson.summary}
        </p>
      </div>

      {lesson.grammarRuleFormula && (
        <div className="rounded-[6px] border-2 border-ink bg-yellow p-4 shadow-brutal-sm">
          <span className="text-[10px] font-mono font-black text-ink/70">القاعدة / الصيغة</span>
          <p dir="ltr" className="mt-2 text-left font-mono text-base sm:text-lg font-black leading-7 text-ink break-words">
            {lesson.grammarRuleFormula}
          </p>
        </div>
      )}

      {concepts.length > 0 ? (
        <div className="rounded-[6px] border-2 border-ink bg-surface p-5 shadow-brutal-callout">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/10 pb-3">
            <span className="text-sm font-black text-ink">نفكك الدرس إلى أجزاء صغيرة</span>
            <span className="rounded-sm border border-ink bg-blue-mist px-2 py-1 text-[10px] font-mono font-black text-ink">
              {activeConcept + 1} / {concepts.length}
            </span>
          </div>
          <p className="mt-4 whitespace-pre-line text-sm sm:text-base font-semibold leading-8 text-ink">
            {concepts[activeConcept]}
          </p>
          <div className="mt-5 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setActiveConcept((value) => Math.max(0, value - 1))}
              disabled={activeConcept === 0}
              className="inline-flex items-center gap-1 rounded-sm border-2 border-ink bg-paper px-3 py-2 text-xs font-black text-ink disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" /> السابق
            </button>
            <span className="text-[10px] font-bold text-muted-gray">جزء واحد في كل مرة</span>
            <button
              type="button"
              onClick={() => setActiveConcept((value) => Math.min(concepts.length - 1, value + 1))}
              disabled={activeConcept >= concepts.length - 1}
              className="inline-flex items-center gap-1 rounded-sm border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface disabled:opacity-40"
            >
              التالي <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-[6px] border-2 border-ink bg-paper p-4 text-sm font-semibold leading-7 text-ink">
          لا توجد فقرات تفصيلية إضافية لهذا الدرس حالياً. اعتمد على الشرح الموجز والأمثلة الموجودة في المصدر، ثم انتقل إلى التطبيق.
        </div>
      )}
    </div>
  );

  const renderExamples = () => {
    const example = examples[activeExample];
    if (!example) {
      return (
        <div className="rounded-[6px] border-2 border-ink bg-blue-mist p-5 text-sm font-semibold leading-7 text-ink">
          لا توجد أمثلة مستقلة مسجلة لهذا الدرس. يمكنك الانتقال إلى الأنشطة التفاعلية أو التمارين المحفوظة في محتوى الدرس.
        </div>
      );
    }

    const translationVisible = Boolean(revealedTranslations[activeExample]);
    return (
      <div className="space-y-4">
        <div className="rounded-[6px] border-2 border-ink bg-blue-mist p-4 sm:p-5 shadow-brutal-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-sm border border-ink bg-surface px-2 py-1 text-[10px] font-mono font-black text-ink">
              EXAMPLE {activeExample + 1} / {examples.length}
            </span>
            <button
              type="button"
              onClick={() => speak(example.en)}
              className="inline-flex items-center gap-1.5 rounded-sm border-2 border-ink bg-yellow px-3 py-2 text-xs font-black text-ink shadow-brutal-xs"
            >
              <Headphones className="h-4 w-4" /> استمع للمثال
            </button>
          </div>
          <p dir="ltr" className="mt-5 text-left font-mono text-lg sm:text-xl font-black leading-8 text-ink break-words">
            {example.en}
          </p>
          {example.note && (
            <p className="mt-3 inline-flex rounded-sm border border-ink bg-lavender px-2.5 py-1 text-[11px] font-black text-ink">
              {example.note}
            </p>
          )}
          <div className="mt-4 border-t border-ink/20 pt-4">
            {translationVisible ? (
              <div className="rounded-sm border border-ink bg-surface p-3">
                <p className="text-[10px] font-black text-muted-gray">المعنى بالعربية</p>
                <p className="mt-1 text-sm font-bold leading-7 text-ink">{example.ar}</p>
                {example.highlight && <p className="mt-2 text-xs font-black text-cobalt">{example.highlight}</p>}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setRevealedTranslations((previous) => ({ ...previous, [activeExample]: true }))}
                className="inline-flex items-center gap-2 rounded-sm border-2 border-ink bg-surface px-3 py-2 text-xs font-black text-ink hover:bg-yellow"
              >
                <Eye className="h-4 w-4" /> اكشف الترجمة بعد أن تحاول فهمها
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setActiveExample((value) => Math.max(0, value - 1))}
            disabled={activeExample === 0}
            className="inline-flex items-center gap-1 rounded-sm border-2 border-ink bg-paper px-3 py-2 text-xs font-black text-ink disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" /> السابق
          </button>
          <span className="text-xs font-bold text-muted-gray">حاول فهم المعنى قبل إظهار الترجمة</span>
          <button
            type="button"
            onClick={() => setActiveExample((value) => Math.min(examples.length - 1, value + 1))}
            disabled={activeExample >= examples.length - 1}
            className="inline-flex items-center gap-1 rounded-sm border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface disabled:opacity-40"
          >
            التالي <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  };

  const renderPractice = () => {
    if (!currentExercise) {
      return (
        <div className="rounded-[6px] border-2 border-ink bg-soft-mint p-5 space-y-3">
          <div className="flex items-center gap-2 font-black text-ink">
            <CheckCircle2 className="h-5 w-5" /> لا توجد تمارين مسجلة لهذا الدرس
          </div>
          <p className="text-sm font-semibold leading-7 text-ink">
            يمكنك مراجعة الأمثلة مرة أخرى أو الانتقال إلى الأنشطة التفاعلية المتخصصة لهذا النوع من الدروس.
          </p>
          <button type="button" onClick={onOpenActivities} className="rounded-sm border-2 border-ink bg-cobalt px-4 py-2.5 text-xs font-black text-surface shadow-brutal-sm">
            افتح الأنشطة التفاعلية
          </button>
        </div>
      );
    }

    const isSubmitted = Boolean(currentSubmission);
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-black text-ink">تدرّب بنفسك — سؤال واحد في كل مرة</p>
            <p className="mt-1 text-[11px] font-bold text-muted-gray">لا تتعجل. اقرأ السؤال، حدد المطلوب، ثم اختر أو اكتب الإجابة.</p>
          </div>
          <span className="rounded-sm border-2 border-ink bg-yellow px-2.5 py-1 text-[10px] font-mono font-black text-ink">
            {activeExercise + 1} / {exercises.length}
          </span>
        </div>

        <div className="rounded-[6px] border-2 border-ink bg-surface p-4 sm:p-6 shadow-brutal-callout">
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-sm border border-ink bg-blue-mist px-2 py-1 text-[10px] font-mono font-black text-ink">
              QUESTION {activeExercise + 1}
            </span>
            {currentExercise.ministerialYear && (
              <span className="rounded-sm border border-ink bg-paper px-2 py-1 text-[10px] font-mono font-bold text-ink">
                {currentExercise.ministerialYear}
              </span>
            )}
          </div>
          <p dir="auto" className="mt-5 text-base sm:text-lg font-black leading-8 text-ink">
            {currentExercise.question}
          </p>

          {currentExercise.options?.length ? (
            <div dir="ltr" className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentExercise.options.map((option) => {
                const chosen = currentSubmission?.answer === option;
                const correct = normalizeAnswer(option) === normalizeAnswer(currentExercise.correctAnswer);
                const style = !isSubmitted
                  ? 'bg-paper hover:bg-yellow text-ink'
                  : correct
                    ? 'bg-soft-mint text-ink'
                    : chosen
                      ? 'bg-coral text-ink'
                      : 'bg-paper text-ink/50 opacity-60';
                return (
                  <button
                    type="button"
                    key={option}
                    disabled={isSubmitted}
                    onClick={() => submitAnswer(currentExercise, option)}
                    className={`flex items-center justify-between gap-2 rounded-sm border-2 border-ink px-3 py-3 text-left text-sm font-bold shadow-brutal-xs transition-colors disabled:cursor-default ${style}`}
                  >
                    <span>{option}</span>
                    {isSubmitted && correct && <Check className="h-4 w-4 shrink-0" />}
                    {isSubmitted && chosen && !correct && <X className="h-4 w-4 shrink-0" />}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-5 space-y-2">
              <label htmlFor={`guided-answer-${currentExercise.id}`} className="text-xs font-black text-ink">اكتب إجابتك بالإنجليزية</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id={`guided-answer-${currentExercise.id}`}
                  dir="ltr"
                  value={draftAnswer}
                  onChange={(event) => setDraftAnswer(event.target.value)}
                  disabled={isSubmitted}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') submitAnswer(currentExercise, draftAnswer);
                  }}
                  placeholder="Type your answer..."
                  className="min-w-0 flex-1 rounded-sm border-2 border-ink bg-paper px-3 py-3 text-left font-mono text-sm font-bold text-ink outline-none focus:ring-2 focus:ring-cobalt disabled:opacity-60"
                />
                <button
                  type="button"
                  disabled={isSubmitted || !draftAnswer.trim()}
                  onClick={() => submitAnswer(currentExercise, draftAnswer)}
                  className="rounded-sm border-2 border-ink bg-cobalt px-4 py-3 text-xs font-black text-surface shadow-brutal-xs disabled:opacity-40"
                >
                  تحقق من الإجابة
                </button>
              </div>
            </div>
          )}

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowHint((value) => !value)}
              className="inline-flex items-center gap-1.5 text-xs font-black text-cobalt hover:underline"
            >
              <Lightbulb className="h-4 w-4" />
              {showHint ? 'إخفاء التلميح' : 'أحتاج إلى تلميح'}
            </button>
            {showHint && (
              <div className="mt-2 rounded-sm border border-ink bg-yellow/60 p-3 text-xs font-semibold leading-6 text-ink">
                {solvingClues[0] || lesson.grammarRuleFormula || teacherNotes[0] || 'أعد قراءة المثال السابق وحدد الكلمة أو الجزء الذي يوجهك إلى الإجابة.'}
              </div>
            )}
          </div>

          {isSubmitted && (
            <div className={`mt-5 rounded-sm border-2 border-ink p-4 ${currentSubmission?.isCorrect ? 'bg-soft-mint' : 'bg-coral/40'}`}>
              <div className="flex items-center gap-2 font-black text-ink">
                {currentSubmission.isCorrect ? <CheckCircle2 className="h-5 w-5" /> : <RotateCcw className="h-5 w-5" />}
                {currentSubmission.isCorrect ? 'أحسنت! إجابة صحيحة' : 'محاولة جيدة؛ تعلّم من التصحيح'}
              </div>
              <p dir="ltr" className="mt-2 text-left font-mono text-sm font-black text-ink">{currentExercise.correctAnswer}</p>
              <p className="mt-2 text-sm font-semibold leading-7 text-ink">{currentExercise.explanation}</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-muted-gray">
            أجبت عن {answeredCount} من {exercises.length} • الصحيح {correctCount}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToExercise(Math.max(0, activeExercise - 1))}
              disabled={activeExercise === 0}
              className="rounded-sm border-2 border-ink bg-paper p-2 text-ink disabled:opacity-40"
              aria-label="السؤال السابق"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goToExercise(Math.min(exercises.length - 1, activeExercise + 1))}
              disabled={activeExercise >= exercises.length - 1}
              className="inline-flex items-center gap-1 rounded-sm border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface disabled:opacity-40"
            >
              السؤال التالي <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderRecap = () => (
    <div className="space-y-4">
      <div className="rounded-[6px] border-2 border-ink bg-soft-mint p-5 sm:p-6 shadow-brutal-callout">
        <div className="flex items-center gap-2 text-base font-black text-ink">
          <Trophy className="h-5 w-5" />
          خلاصة الدرس — ماذا يجب أن يبقى في ذهنك؟
        </div>
        <p className="mt-3 whitespace-pre-line text-sm sm:text-base font-semibold leading-8 text-ink">
          {lesson.pedagogy?.recapSummary || lesson.summary}
        </p>
      </div>

      {solvingClues.length > 0 && (
        <div className="rounded-[6px] border-2 border-ink bg-blue-mist p-4">
          <h3 className="text-sm font-black text-ink">مفاتيح الحل</h3>
          <ul className="mt-3 space-y-2">
            {solvingClues.map((clue, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm font-semibold leading-6 text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" /> {clue}
              </li>
            ))}
          </ul>
        </div>
      )}

      {commonTraps.length > 0 && (
        <div className="rounded-[6px] border-2 border-ink bg-coral/40 p-4">
          <h3 className="text-sm font-black text-ink">أخطاء انتبه لها</h3>
          <ul className="mt-3 space-y-2">
            {commonTraps.map((trap, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm font-semibold leading-6 text-ink">
                <X className="mt-0.5 h-4 w-4 shrink-0" /> {trap}
              </li>
            ))}
          </ul>
        </div>
      )}

      {teacherNotes.length > 0 && (
        <details className="rounded-[6px] border-2 border-ink bg-surface p-4 shadow-brutal-sm">
          <summary className="cursor-pointer text-sm font-black text-ink">ملاحظات الأستاذ الذهبية — افتحها عند المراجعة</summary>
          <ul className="mt-3 space-y-2">
            {teacherNotes.map((note, index) => (
              <li key={index} className="border-r-4 border-yellow pr-3 text-xs sm:text-sm font-semibold leading-7 text-ink">{note}</li>
            ))}
          </ul>
        </details>
      )}

      <div className="rounded-[6px] border-2 border-ink bg-yellow p-4">
        <h3 className="text-sm font-black text-ink">اختبر ذاكرتك قبل أن تنهي</h3>
        <p className="mt-2 text-sm font-semibold leading-7 text-ink">
          أغلق الشرح وحاول أن تجيب من ذاكرتك: ما الفكرة الأساسية؟ كيف تشرحها بمثال؟ وما الخطأ الذي يجب أن تتجنبه؟
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-[6px] border-2 border-ink bg-surface p-4">
        <div>
          <p className="text-sm font-black text-ink">
            {gradeMeta?.isMinisterial ? 'أصبحت جاهزاً لتحدٍّ بأسلوب الأسئلة الوزارية' : 'أصبحت جاهزاً لتطبيق ما تعلمته'}
          </p>
          <p className="mt-1 text-xs font-semibold text-muted-gray">
            {answeredCount > 0 ? `نتيجتك في التدريب: ${correctCount} من ${answeredCount} إجابة صحيحة.` : 'يمكنك إعادة الأمثلة أو الانتقال إلى الأنشطة لتثبيت الفهم.'}
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenActivities}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border-2 border-ink bg-lavender px-4 py-3 text-xs font-black text-ink shadow-brutal-sm"
        >
          أنشطة إضافية <ArrowLeft className="h-4 w-4" />
        </button>
      </div>

      <button
        type="button"
        onClick={onComplete}
        disabled={isCompleted}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-ink bg-cobalt px-5 py-3.5 text-sm font-black text-surface shadow-brutal-btn disabled:cursor-default disabled:opacity-60"
      >
        <CheckCircle2 className="h-5 w-5" />
        {isCompleted ? 'تم تسجيل إكمال هذا الدرس' : 'أنهيت التعلم — سجّل إكمال الدرس'}
      </button>
    </div>
  );

  const renderActiveStep = () => {
    switch (activeStep) {
      case 0: return renderWarmup();
      case 1: return renderUnderstanding();
      case 2: return renderExamples();
      case 3: return renderPractice();
      default: return renderRecap();
    }
  };

  return (
    <section className="guided-lesson-journey space-y-5" dir="rtl" aria-label="رحلة التعلم الموجهة">
      <div className="rounded-[6px] border-2 border-ink bg-surface p-4 sm:p-5 shadow-brutal-action">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-sm border border-ink bg-cobalt px-2.5 py-1 text-[10px] font-mono font-black text-surface">
              <BookOpen className="h-3.5 w-3.5" /> LEARN BY DOING
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-black text-ink">رحلة التعلم خطوة بخطوة</h2>
            <p className="mt-1 text-xs sm:text-sm font-semibold leading-6 text-muted-gray">
              لا تحتاج إلى قراءة الصفحة كلها دفعة واحدة. انتقل مرحلةً مرحلة.
            </p>
          </div>
          <div className="rounded-sm border-2 border-ink bg-yellow px-3 py-2 text-center">
            <span className="block text-[10px] font-mono font-black text-ink/70">YOUR PROGRESS</span>
            <span className="text-lg font-black text-ink">{activeStep + 1} / {JOURNEY_STEPS.length}</span>
          </div>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-sm border-2 border-ink bg-paper">
          <div className="h-full bg-cobalt transition-all duration-300" style={{ width: `${((activeStep + 1) / JOURNEY_STEPS.length) * 100}%` }} />
        </div>

        <div className="mt-4 grid grid-cols-5 gap-1.5 sm:gap-2">
          {JOURNEY_STEPS.map((step, index) => {
            const Icon = step.icon;
            const active = activeStep === index;
            const passed = activeStep > index;
            return (
              <button
                type="button"
                key={step.title}
                onClick={() => setActiveStep(index)}
                aria-current={active ? 'step' : undefined}
                className={`flex min-w-0 flex-col items-center gap-1 rounded-sm border-2 px-1 py-2 text-center transition-all ${active ? 'border-ink bg-cobalt text-surface shadow-brutal-sm' : passed ? 'border-ink bg-soft-mint text-ink' : 'border-ink/30 bg-paper text-ink hover:bg-yellow'}`}
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-full border border-ink ${active ? 'bg-yellow text-ink' : passed ? 'bg-surface text-ink' : step.color + ' text-ink'}`}>
                  {passed ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                </span>
                <span className="text-[10px] sm:text-xs font-black">{step.title}</span>
                <span className={`hidden sm:block text-[9px] font-semibold ${active ? 'text-surface/80' : 'text-muted-gray'}`}>{step.subtitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-[260px]">
        {renderActiveStep()}
      </div>

      <div className="flex items-center justify-between gap-3 border-t-2 border-ink/15 pt-4">
        <button
          type="button"
          onClick={() => setActiveStep((value) => Math.max(0, value - 1))}
          disabled={activeStep === 0}
          className="inline-flex items-center gap-1 rounded-sm border-2 border-ink bg-paper px-3 py-2.5 text-xs font-black text-ink disabled:opacity-40"
        >
          <ArrowRight className="h-4 w-4" /> الخطوة السابقة
        </button>
        {canMoveNext ? (
          <button
            type="button"
            onClick={() => setActiveStep((value) => Math.min(JOURNEY_STEPS.length - 1, value + 1))}
            className="inline-flex items-center gap-1 rounded-sm border-2 border-ink bg-cobalt px-4 py-2.5 text-xs font-black text-surface shadow-brutal-sm"
          >
            {activeStep === 0 ? 'ابدأ الفهم' : activeStep === 1 ? 'شاهد الأمثلة' : activeStep === 2 ? 'جرّب بنفسك' : 'راجع ما تعلمت'}
            <ArrowLeft className="h-4 w-4" />
          </button>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-sm border-2 border-ink bg-soft-mint px-3 py-2.5 text-xs font-black text-ink">
            <CheckCircle2 className="h-4 w-4" /> وصلت إلى نهاية الرحلة
          </span>
        )}
      </div>
    </section>
  );
};
