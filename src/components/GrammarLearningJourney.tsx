import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Lightbulb,
  ListChecks,
  Volume2,
  Target,
  Trophy,
} from 'lucide-react';
import { EducationalGrade, Lesson } from '../types';
import { getGradeMeta } from '../data/gradeContentResolver';
import { speakEnglish } from '../utils/speech';
import { getTenseTeachingGuide } from '../data/tenseTeachingGuides';
import { TenseLearningJourney } from './TenseLearningJourney';

interface GrammarLearningJourneyProps {
  lesson: Lesson;
  grade?: EducationalGrade;
  onOpenExercises: () => void;
}

const STAGES = [
  { title: 'افهم الفكرة', subtitle: 'المعنى قبل الحفظ', icon: Lightbulb },
  { title: 'شاهد المثال', subtitle: 'لاحظها في جملة', icon: BookOpen },
  { title: 'ابنِ القاعدة', subtitle: 'استنتج كيف تتكوّن', icon: ListChecks },
  { title: 'انتبه للأخطاء', subtitle: 'ما الذي يجب تجنّبه؟', icon: CircleAlert },
  { title: 'اختبر نفسك', subtitle: 'جرّب قبل رؤية الحل', icon: Trophy },
] as const;

function HighlightedSentence({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight?.trim()) return <>{text}</>;
  const index = text.toLocaleLowerCase().indexOf(highlight.toLocaleLowerCase());
  if (index < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <mark className="rounded-sm bg-yellow px-1 text-ink underline decoration-cobalt decoration-2 underline-offset-4">
        {text.slice(index, index + highlight.length)}
      </mark>
      {text.slice(index + highlight.length)}
    </>
  );
}

function normalizeGrammarAnswer(value: string): string {
  return value
    .toLocaleLowerCase()
    .replace(/[.,!?;:،؛]/g, ' ')
    .replace(/\\s+/g, ' ')
    .trim();
}

export const GrammarLearningJourney: React.FC<GrammarLearningJourneyProps> = ({
  lesson,
  grade,
  onOpenExercises,
}) => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeExample, setActiveExample] = useState(0);
  const [exampleDetailsRevealed, setExampleDetailsRevealed] = useState(false);
  const [activeRulePoint, setActiveRulePoint] = useState(0);
  const [activeExercise, setActiveExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answerChecked, setAnswerChecked] = useState(false);
  const [activeRecallAnswer, setActiveRecallAnswer] = useState('');
  const [activeRecallChecked, setActiveRecallChecked] = useState(false);

  const tenseGuide = getTenseTeachingGuide(lesson.id);
  if (tenseGuide) {
    return (
      <TenseLearningJourney
        lesson={lesson}
        guide={tenseGuide}
        grade={grade}
        onOpenExercises={onOpenExercises}
      />
    );
  }

  const gradeMeta = grade ? getGradeMeta(grade) : null;
  const formulaLines = (lesson.grammarRuleFormula || '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const detailedPoints = lesson.detailedContent || [];
  const examples = lesson.examples || [];
  const teacherNotes = lesson.teacherNotes || [];
  const commonMistakes = lesson.commonMistakes || [];
  const solvingClues = lesson.pedagogy?.solvingClues || [];
  const commonTraps = lesson.pedagogy?.commonTraps || [];
  const sourcePages = lesson.sourcePages || lesson.provenance?.pageNumbers || '';

  const previousStage = () => setActiveStage((current) => Math.max(0, current - 1));
  const nextStage = () => setActiveStage((current) => Math.min(STAGES.length - 1, current + 1));

  const currentExample = examples[activeExample];
  const currentRulePoint = detailedPoints[activeRulePoint];
  const currentExercise = lesson.exercises[activeExercise];
  const activeRecallExample = examples.find((example) => Boolean(example.highlight?.trim()));
  const answerIsCorrect = !!currentExercise && selectedAnswer.trim() === currentExercise.correctAnswer.trim();
  const activeRecallIsCorrect = Boolean(
    activeRecallExample?.highlight &&
    normalizeGrammarAnswer(activeRecallAnswer) === normalizeGrammarAnswer(activeRecallExample.highlight)
  );

  const renderWarmup = () => (
    <div className="space-y-5" data-testid="grammar-understand-stage">
      <div className="rounded-xl border-2 border-ink bg-blue-mist p-5 sm:p-7 shadow-brutal-callout">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink bg-surface px-3 py-1 text-[11px] font-black text-cobalt">
          <Lightbulb className="h-4 w-4" />
          لنفهم المعنى أولاً
        </span>
        <h3 className="mt-4 text-xl sm:text-2xl font-black leading-relaxed text-ink">
          ما الفكرة التي نريد التعبير عنها؟
        </h3>
        <p className="mt-3 whitespace-pre-line text-sm sm:text-base font-semibold leading-8 text-ink">
          {lesson.pedagogy?.warmup || lesson.summary}
        </p>
        {lesson.summary && lesson.pedagogy?.warmup && (
          <div className="mt-4 border-t border-ink/20 pt-4">
            <p className="text-[11px] font-black text-cobalt">ملخص موضوع الدرس</p>
            <p className="mt-1 text-sm font-semibold leading-7 text-ink">{lesson.summary}</p>
          </div>
        )}
      </div>

      {lesson.pedagogy?.learningObjectives?.length ? (
        <div className="rounded-xl border-2 border-ink bg-surface p-5">
          <h4 className="flex items-center gap-2 text-sm font-black text-ink">
            <Target className="h-4 w-4 text-cobalt" />
            ماذا ستستطيع أن تفعل بعد الدرس؟
          </h4>
          <ol className="mt-3 space-y-2.5">
            {lesson.pedagogy.learningObjectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-3 text-sm font-semibold leading-7 text-ink">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink bg-yellow text-[11px] font-black">
                  {index + 1}
                </span>
                <span>{objective}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <div className="rounded-xl border-2 border-ink bg-paper p-4">
        <p className="text-sm font-black text-ink">طريقة التعلّم في هذا الدرس</p>
        <p className="mt-1 text-xs sm:text-sm font-medium leading-7 text-ink/75">
          لن نبدأ بحفظ رموز القاعدة. سنفهم المقصود، ثم نرى كيف تكوّنت الصيغة، وبعدها نقرأ أمثلة الدرس ونلاحظ الفرق قبل الانتقال إلى الحل.
        </p>
      </div>
    </div>
  );

  const renderRule = () => (
    <div className="space-y-5" data-testid="grammar-build-stage">
      <div className="rounded-xl border-2 border-ink bg-lavender/70 p-5">
        <h3 className="text-base font-black text-ink">نفكّك القاعدة خطوة واحدة في كل مرة</h3>
        <p className="mt-2 text-sm font-semibold leading-8 text-ink">
          لا تحفظ كل شيء دفعة واحدة. اقرأ الفكرة، اربطها بالمثال الذي شاهدته، ثم انتقل إلى النقطة التالية.
        </p>
        {lesson.pedagogy?.arabicExplanation && (
          <p className="mt-3 whitespace-pre-line border-t border-ink/20 pt-3 text-sm font-semibold leading-8 text-ink">
            {lesson.pedagogy.arabicExplanation}
          </p>
        )}
      </div>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-black text-ink">خطوات فهم القاعدة</h3>
          {detailedPoints.length > 0 && (
            <span className="rounded-full border border-ink bg-yellow px-3 py-1 text-[10px] font-black text-ink">
              {activeRulePoint + 1} / {detailedPoints.length}
            </span>
          )}
        </div>
        {detailedPoints.length ? (
          <article className="min-h-[180px] rounded-xl border-2 border-ink bg-surface p-5 shadow-brutal-callout">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-ink bg-cobalt text-sm font-black text-surface">
                {activeRulePoint + 1}
              </span>
              <span className="text-xs font-black text-cobalt">الفكرة {activeRulePoint + 1}</span>
            </div>
            <p className="whitespace-pre-line text-base font-semibold leading-9 text-ink">{currentRulePoint}</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full border border-ink bg-paper">
              <div className="h-full bg-cobalt transition-all" style={{ width: `${((activeRulePoint + 1) / detailedPoints.length) * 100}%` }} />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <button type="button" disabled={activeRulePoint === 0}
                onClick={() => setActiveRulePoint((n) => Math.max(0, n - 1))}
                className="rounded-md border-2 border-ink bg-paper px-3 py-2 text-xs font-black text-ink disabled:opacity-35">
                الفكرة السابقة
              </button>
              <button type="button" disabled={activeRulePoint >= detailedPoints.length - 1}
                onClick={() => setActiveRulePoint((n) => Math.min(detailedPoints.length - 1, n + 1))}
                className="rounded-md border-2 border-ink bg-cobalt px-4 py-2 text-xs font-black text-surface disabled:opacity-35">
                الفكرة التالية
              </button>
            </div>
          </article>
        ) : (
          <p className="rounded-lg border-2 border-dashed border-ink/40 bg-paper p-4 text-sm font-semibold text-ink/70">
            لا يوجد شرح تفصيلي مسجّل لهذا الدرس.
          </p>
        )}
      </section>

      <section className="space-y-3">
        <div>
          <h3 className="text-lg font-black text-ink">الصيغة بعد فهم الفكرة</h3>
          <p className="mt-1 text-xs font-semibold text-ink/65">ارجع إلى هذه الصيغة بعد فهم النقاط، لا قبلها.</p>
        </div>
        {formulaLines.length ? formulaLines.map((line, index) => (
          <div key={index} className="rounded-lg border-2 border-ink bg-paper p-4">
            <span className="mb-2 block text-[10px] font-black text-cobalt">الصيغة {index + 1}</span>
            <p dir="auto" className="whitespace-pre-wrap break-words text-sm sm:text-base font-bold leading-8 text-ink">{line}</p>
          </div>
        )) : (
          <p className="rounded-lg border-2 border-dashed border-ink/40 bg-paper p-4 text-sm font-semibold leading-7 text-ink/75">
            لا توجد صيغة مستقلة مسجّلة لهذا الدرس. اعتمد على النقاط والأمثلة المسجلة فقط.
          </p>
        )}
      </section>
    </div>
  );

  const renderExamples = () => (
    <div className="space-y-4" data-testid="grammar-examples-stage">
      <div>
        <h3 className="text-lg font-black text-ink">لنرَ القاعدة وهي تعمل</h3>
        <p className="mt-1 text-xs sm:text-sm font-semibold text-ink/65">
          اقرأ الجملة الإنجليزية، ثم لاحظ معناها والجزء الذي ركّز عليه شرح الدرس.
        </p>
      </div>

      {currentExample ? (
        <article className="overflow-hidden rounded-xl border-2 border-ink bg-surface shadow-brutal-callout">
          <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-paper p-3">
            <span className="text-xs font-black text-ink">مثال {activeExample + 1} من {examples.length}</span>
            <button
              type="button"
              onClick={() => speakEnglish(currentExample.en)}
              className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-yellow px-3 py-2 text-xs font-black text-ink hover:-translate-y-0.5 transition-transform"
            >
              <Volume2 className="h-4 w-4" />
              استمع
            </button>
          </div>
          <div className="space-y-4 p-5 sm:p-7">
            <p dir="ltr" className="text-left text-lg sm:text-2xl font-bold leading-relaxed text-ink">
              <HighlightedSentence text={currentExample.en} highlight={currentExample.highlight} />
            </p>
            <div
              data-testid="grammar-example-reflection"
              data-details-revealed={exampleDetailsRevealed ? 'true' : 'false'}
              className="rounded-lg border-2 border-ink bg-yellow/20 p-4 space-y-3"
            >
              <div>
                <p className="text-xs font-black text-ink">توقّف وفكّر قبل كشف الشرح</p>
                <p className="mt-1 text-xs font-semibold leading-6 text-ink/75">
                  ما الجزء الذي يحمل القاعدة في هذه الجملة؟ حاول تحديده، ثم اكشف التلميح والمعنى.
                </p>
              </div>
              <button
                type="button"
                aria-expanded={exampleDetailsRevealed}
                onClick={() => setExampleDetailsRevealed((revealed) => !revealed)}
                className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface"
              >
                {exampleDetailsRevealed ? 'أخفِ التلميح' : 'اكشف موضع القاعدة والمعنى'}
              </button>
              {exampleDetailsRevealed && (
                <div data-testid="grammar-example-revealed-details" className="space-y-3">
                  {currentExample.highlight && (
                    <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-md border border-ink bg-yellow/35 px-3 py-2">
                      <span className="text-[10px] font-black text-ink/65">موضع التركيز</span>
                      <span dir="ltr" className="break-words text-sm font-black text-ink">{currentExample.highlight}</span>
                    </div>
                  )}
                  <div className="rounded-lg border-2 border-ink bg-blue-mist/60 p-4">
                    <p className="text-[10px] font-black text-cobalt">المعنى بالعربية</p>
                    <p className="mt-1 text-sm sm:text-base font-bold leading-8 text-ink">{currentExample.ar}</p>
                  </div>
                  {currentExample.note && (
                    <p className="border-r-4 border-cobalt bg-paper px-3 py-2 text-xs font-semibold leading-7 text-ink">
                      {currentExample.note}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 border-t-2 border-ink bg-paper p-3">
            <button
              type="button"
              disabled={activeExample === 0}
              onClick={() => {
                setActiveExample((value) => Math.max(0, value - 1));
                setExampleDetailsRevealed(false);
              }}
              className="inline-flex items-center gap-1 rounded-md border-2 border-ink bg-surface px-3 py-2 text-xs font-black text-ink disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" /> السابق
            </button>
            <div className="flex items-center gap-1.5" aria-label="ترقيم الأمثلة">
              {examples.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`الانتقال إلى المثال ${index + 1}`}
                  aria-current={activeExample === index ? 'step' : undefined}
                  onClick={() => {
                    setActiveExample(index);
                    setExampleDetailsRevealed(false);
                  }}
                  className={`h-2.5 rounded-full border border-ink transition-all ${activeExample === index ? 'w-7 bg-cobalt' : 'w-2.5 bg-surface'}`}
                />
              ))}
            </div>
            <button
              type="button"
              disabled={activeExample >= examples.length - 1}
              onClick={() => {
                setActiveExample((value) => Math.min(examples.length - 1, value + 1));
                setExampleDetailsRevealed(false);
              }}
              className="inline-flex items-center gap-1 rounded-md border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface disabled:opacity-35"
            >
              التالي <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
        </article>
      ) : (
        <div className="rounded-xl border-2 border-dashed border-ink/40 bg-paper p-5 text-sm font-semibold leading-7 text-ink/70">
          لا توجد أمثلة مستقلة مسجّلة لهذا الدرس. لن نضيف أمثلة من خارج محتوى الدرس وننسبها إلى المنهج.
        </div>
      )}
    </div>
  );

  const renderWarnings = () => {
    const hasWarnings = commonMistakes.length > 0 || commonTraps.length > 0;
    const hasNotes = teacherNotes.length > 0 || solvingClues.length > 0;
    return (
      <div className="space-y-5" data-testid="grammar-mistakes-stage">
        <div className="rounded-xl border-2 border-ink bg-yellow/40 p-5">
          <h3 className="flex items-center gap-2 text-lg font-black text-ink">
            <CircleAlert className="h-5 w-5" />
            راقب هذه النقاط قبل الإجابة
          </h3>
          <p className="mt-2 text-sm font-semibold leading-7 text-ink/75">
            هذه الملاحظات مأخوذة من أخطاء الدرس وملاحظات المدرّس المسجّلة، وليست قواعد إضافية.
          </p>
        </div>

        {hasWarnings ? (
          <div className="space-y-2.5">
            {commonMistakes.map((mistake, index) => (
              <div key={`mistake-${index}`} className="flex items-start gap-3 rounded-lg border-2 border-ink bg-answer-review-bg p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink bg-coral text-[11px] font-black">
                  !
                </span>
                <p className="text-sm font-semibold leading-7 text-ink">{mistake}</p>
              </div>
            ))}
            {commonTraps.map((trap, index) => (
              <div key={`trap-${index}`} className="rounded-lg border-2 border-ink bg-paper p-4">
                <p className="text-[10px] font-black text-semantic-error">فخ شائع</p>
                <p className="mt-1 text-sm font-semibold leading-7 text-ink">{trap}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-lg border-2 border-dashed border-ink/40 bg-paper p-4 text-sm font-semibold text-ink/70">
            لا توجد أخطاء شائعة مسجّلة لهذا الدرس. لا نضيف قائمة عامة لا تخص القاعدة.
          </p>
        )}

        {hasNotes && (
          <div className="rounded-xl border-2 border-ink bg-surface p-5">
            <h4 className="text-sm font-black text-ink">ملاحظات الدرس ومفاتيح الحل</h4>
            {solvingClues.length > 0 && (
              <ul className="mt-3 space-y-2">
                {solvingClues.map((clue, index) => (
                  <li key={`clue-${index}`} className="flex items-start gap-2 text-sm font-semibold leading-7 text-ink">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cobalt" />
                    <span>{clue}</span>
                  </li>
                ))}
              </ul>
            )}
            {teacherNotes.length > 0 && (
              <ul className={`space-y-2 ${solvingClues.length ? 'mt-4 border-t border-ink/15 pt-4' : 'mt-3'}`}>
                {teacherNotes.map((note, index) => (
                  <li key={`note-${index}`} className="flex items-start gap-2 text-sm font-semibold leading-7 text-ink">
                    <BookOpen className="mt-1 h-4 w-4 shrink-0 text-cobalt" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderPractice = () => (
    <div className="space-y-5" data-testid="grammar-recap-stage">
      <div className="rounded-xl border-2 border-ink bg-soft-mint/55 p-5 sm:p-7">
        <div className="flex items-center gap-2 text-sm font-black text-ink">
          <Trophy className="h-5 w-5" />
          دورك الآن — فكّر قبل أن ترى الإجابة
        </div>
        <h3 className="mt-3 text-xl font-black leading-relaxed text-ink">هل تستطيع استخدام القاعدة بنفسك؟</h3>
        <p className="mt-2 text-sm sm:text-base font-semibold leading-8 text-ink">
          {lesson.pedagogy?.recapSummary || lesson.summary}
        </p>
      </div>

      {currentExercise ? (
        <article className="overflow-hidden rounded-xl border-2 border-ink bg-surface shadow-brutal-callout">
          <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-paper p-3">
            <span className="text-xs font-black text-ink">تحدّي {activeExercise + 1} من {lesson.exercises.length}</span>
            <span className="rounded-full border border-ink bg-yellow px-2.5 py-1 text-[10px] font-black text-ink">{currentExercise.type === 'mcq' ? 'اختر الإجابة' : currentExercise.type === 'fill' ? 'أكمل الفراغ' : 'صحّح الخطأ'}</span>
          </div>
          <div className="space-y-4 p-5">
            <p dir="auto" className="text-base font-bold leading-8 text-ink">{currentExercise.question}</p>
            {currentExercise.options?.length ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {currentExercise.options.map((option, index) => (
                  <button key={index} type="button" disabled={answerChecked}
                    onClick={() => setSelectedAnswer(option)}
                    className={`rounded-lg border-2 p-3 text-right text-sm font-bold transition-all ${selectedAnswer === option ? 'border-ink bg-yellow shadow-brutal-sm' : 'border-ink/30 bg-paper hover:border-ink'} disabled:cursor-default`}>
                    <span dir="auto">{option}</span>
                  </button>
                ))}
              </div>
            ) : (
              <input value={selectedAnswer} disabled={answerChecked}
                onChange={(event) => setSelectedAnswer(event.target.value)}
                placeholder="اكتب إجابتك هنا"
                className="w-full rounded-lg border-2 border-ink bg-paper p-3 text-sm font-semibold text-ink"
                dir="auto" />
            )}
            {!answerChecked ? (
              <button type="button" disabled={!selectedAnswer.trim()} onClick={() => setAnswerChecked(true)}
                className="rounded-md border-2 border-ink bg-cobalt px-5 py-3 text-sm font-black text-surface disabled:opacity-40">
                تحقّق من إجابتي
              </button>
            ) : (
              <div className={`rounded-lg border-2 border-ink p-4 ${answerIsCorrect ? 'bg-soft-mint' : 'bg-answer-review-bg'}`}>
                <p className="flex items-center gap-2 text-sm font-black text-ink">
                  {answerIsCorrect ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                  {answerIsCorrect ? 'أحسنت! إجابتك صحيحة.' : 'ليست الإجابة الصحيحة بعد. راجع السبب أدناه.'}
                </p>
                <p className="mt-2 text-sm font-bold leading-7 text-ink">الإجابة الصحيحة: <span dir="auto">{currentExercise.correctAnswer}</span></p>
                {currentExercise.explanation && <p className="mt-2 border-t border-ink/20 pt-2 text-sm font-semibold leading-7 text-ink">{currentExercise.explanation}</p>}
                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" onClick={() => { setSelectedAnswer(''); setAnswerChecked(false); }}
                    className="rounded-md border-2 border-ink bg-surface px-3 py-2 text-xs font-black text-ink">حاول مرة أخرى</button>
                  {activeExercise < lesson.exercises.length - 1 && (
                    <button type="button" onClick={() => { setActiveExercise((n) => n + 1); setSelectedAnswer(''); setAnswerChecked(false); }}
                      className="rounded-md border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface">السؤال التالي</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </article>
      ) : activeRecallExample ? (
        <article
          data-testid="grammar-example-practice"
          data-practice-source="lesson-example"
          className="overflow-hidden rounded-xl border-2 border-ink bg-surface shadow-brutal-callout"
        >
          <div className="border-b-2 border-ink bg-paper p-4">
            <span className="inline-flex rounded-full border border-ink bg-yellow px-2.5 py-1 text-[10px] font-black text-ink">
              تدريب ملاحظة من أمثلة الدرس
            </span>
            <h4 className="mt-3 text-base font-black text-ink">اكتشف الجزء الذي يطبّق القاعدة</h4>
            <p className="mt-1 text-xs font-semibold leading-6 text-ink/70">
              هذا تدريب تعلّم مبني على مثال مسجّل في الدرس، وليس سؤالاً من الكتاب أو سؤالاً وزارياً.
            </p>
          </div>
          <div className="space-y-4 p-5">
            <p dir="ltr" className="text-left text-base sm:text-xl font-bold leading-relaxed text-ink">
              {activeRecallExample.en}
            </p>
            <label className="block space-y-2">
              <span className="text-xs font-black text-ink">اكتب العبارة التي ركّز عليها شرح المثال</span>
              <input
                value={activeRecallAnswer}
                disabled={activeRecallChecked}
                onChange={(event) => setActiveRecallAnswer(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && activeRecallAnswer.trim()) setActiveRecallChecked(true);
                }}
                placeholder="اكتب العبارة باللغة الإنكليزية"
                dir="auto"
                className="w-full rounded-lg border-2 border-ink bg-paper p-3 text-sm font-semibold text-ink disabled:opacity-70"
              />
            </label>
            {!activeRecallChecked ? (
              <button
                type="button"
                disabled={!activeRecallAnswer.trim()}
                onClick={() => setActiveRecallChecked(true)}
                className="rounded-md border-2 border-ink bg-cobalt px-5 py-3 text-sm font-black text-surface disabled:opacity-40"
              >
                تحقّق من ملاحظتي
              </button>
            ) : (
              <div className={`rounded-lg border-2 border-ink p-4 ${activeRecallIsCorrect ? 'bg-soft-mint' : 'bg-answer-review-bg'}`}>
                <p className="flex items-center gap-2 text-sm font-black text-ink">
                  {activeRecallIsCorrect ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                  {activeRecallIsCorrect ? 'أحسنت، لاحظت موضع القاعدة.' : 'راجع موضع التركيز في المثال.'}
                </p>
                <p className="mt-2 text-sm font-bold leading-7 text-ink">
                  موضع التركيز: <span dir="ltr">{activeRecallExample.highlight}</span>
                </p>
                {activeRecallExample.ar && (
                  <p className="mt-2 border-t border-ink/20 pt-2 text-sm font-semibold leading-7 text-ink">
                    المعنى: {activeRecallExample.ar}
                  </p>
                )}
                {activeRecallExample.note && (
                  <p className="mt-2 text-sm font-semibold leading-7 text-ink">{activeRecallExample.note}</p>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setActiveRecallAnswer('');
                    setActiveRecallChecked(false);
                  }}
                  className="mt-3 rounded-md border-2 border-ink bg-surface px-3 py-2 text-xs font-black text-ink"
                >
                  حاول مرة أخرى
                </button>
              </div>
            )}
          </div>
        </article>
      ) : (
        <div className="rounded-xl border-2 border-dashed border-ink/40 bg-paper p-5">
          <h4 className="text-base font-black text-ink">التدريب غير متاح لهذا الدرس</h4>
          <p className="mt-2 text-sm font-semibold leading-7 text-ink/70">لا توجد تمارين أصلية أو أمثلة تحتوي على موضع تركيز مسجّل لهذا الدرس. لن نخترع سؤالاً وننسبه إلى المنهج.</p>
        </div>
      )}

      <div className="rounded-xl border-2 border-ink bg-surface p-5">
        <h4 className="text-sm font-black text-ink">ماذا بعد؟</h4>
        <p className="mt-1 text-xs font-semibold leading-6 text-ink/65">بعد تجربة السؤال هنا، يمكنك الانتقال إلى جميع تمارين الدرس المسجّلة.</p>
        <button type="button" onClick={onOpenExercises} disabled={lesson.exercises.length === 0}
          className="mt-3 inline-flex items-center gap-2 rounded-md border-2 border-ink bg-cobalt px-4 py-3 text-xs font-black text-surface disabled:cursor-not-allowed disabled:opacity-40">
          افتح تمارين الدرس كاملة <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const renderActiveStage = () => {
    switch (activeStage) {
      case 0: return renderWarmup();
      case 1: return renderExamples();
      case 2: return renderRule();
      case 3: return renderWarnings();
      default: return renderPractice();
    }
  };

  return (
    <section
      className="grammar-learning-journey space-y-5"
      dir="rtl"
      aria-label="شرح القاعدة خطوة بخطوة"
      data-testid="grammar-learning-journey"
      data-lesson-id={lesson.id}
    >
      <header className="rounded-xl border-2 border-ink bg-surface p-4 sm:p-5 shadow-brutal-action">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink bg-cobalt px-3 py-1 text-[10px] font-black text-surface">
              <BookOpen className="h-3.5 w-3.5" />
              مسار تعلّم القواعد
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-black text-ink">نتعلّمها بالفهم، لا بحفظ المعادلة</h2>
            <p className="mt-1 text-xs sm:text-sm font-semibold leading-6 text-ink/65">
              {gradeMeta?.nameAr ? `درس القواعد · ${gradeMeta.nameAr}` : 'درس القواعد'} · {lesson.titleEn}
            </p>
          </div>
          <div className="rounded-lg border-2 border-ink bg-yellow px-4 py-3 text-center">
            <span className="block text-[10px] font-black text-ink/65">المرحلة الحالية</span>
            <span className="text-lg font-black text-ink">{activeStage + 1} / {STAGES.length}</span>
          </div>
        </div>

        <div className="mt-4 h-2.5 overflow-hidden rounded-full border border-ink bg-paper">
          <div className="h-full rounded-full bg-cobalt transition-all" style={{ width: `${((activeStage + 1) / STAGES.length) * 100}%` }} />
        </div>

        <nav className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5" aria-label="مراحل تعلم القاعدة">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const active = activeStage === index;
            const completed = activeStage > index;
            return (
              <button
                type="button"
                key={stage.title}
                onClick={() => setActiveStage(index)}
                aria-current={active ? 'step' : undefined}
                className={`flex min-w-0 items-center gap-2 rounded-lg border-2 px-2.5 py-3 text-right transition-all sm:flex-col sm:items-center sm:text-center ${active ? 'border-ink bg-cobalt text-surface shadow-brutal-sm' : completed ? 'border-ink bg-soft-mint text-ink' : 'border-ink/30 bg-paper text-ink hover:bg-yellow/50'}`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink ${active ? 'bg-yellow text-ink' : 'bg-surface text-ink'}`}>
                  {completed ? <CheckCircle2 className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-black">{stage.title}</span>
                  <span className={`hidden text-[9px] font-semibold sm:block ${active ? 'text-surface/75' : 'text-ink/55'}`}>{stage.subtitle}</span>
                </span>
              </button>
            );
          })}
        </nav>
      </header>

      <div className="min-h-[280px]">
        {renderActiveStage()}
      </div>

      <footer className="flex items-center justify-between gap-3 border-t-2 border-ink/15 pt-4">
        <button
          type="button"
          onClick={previousStage}
          disabled={activeStage === 0}
          className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-paper px-3 py-2.5 text-xs font-black text-ink disabled:opacity-35"
        >
          <ArrowRight className="h-4 w-4" />
          السابقة
        </button>
        {activeStage < STAGES.length - 1 ? (
          <button
            type="button"
            onClick={nextStage}
            className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-cobalt px-4 py-2.5 text-xs font-black text-surface shadow-brutal-sm"
          >
            {activeStage === 0 ? 'شاهد مثالاً' : activeStage === 1 ? 'فكّك القاعدة خطوة خطوة' : activeStage === 2 ? 'تجنّب هذه الأخطاء' : 'اختبر فهمك بنفسك'}
            <ArrowLeft className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onOpenExercises}
            disabled={lesson.exercises.length === 0}
            className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-soft-mint px-4 py-2.5 text-xs font-black text-ink disabled:opacity-35"
          >
            انتقل إلى التمارين
            <ArrowLeft className="h-4 w-4" />
          </button>
        )}
      </footer>

      {sourcePages && (
        <p className="text-[10px] font-semibold text-ink/55">
          الصفحات المسجّلة لهذا الدرس: {sourcePages}
        </p>
      )}
    </section>
  );
};
