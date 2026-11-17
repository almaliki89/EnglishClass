import React, { useState } from 'react';
import {
  ArrowLeft, ArrowRight, BookOpen, CalendarDays, Check, CheckCircle2,
  Clock3, Lightbulb, ListChecks, Target, Trophy, Volume2, X,
} from 'lucide-react';
import { EducationalGrade, Lesson } from '../types';
import { getGradeMeta } from '../data/gradeContentResolver';
import { TenseTeachingGuide } from '../data/tenseTeachingGuides';
import { speakEnglish } from '../utils/speech';

interface TenseLearningJourneyProps {
  lesson: Lesson;
  guide: TenseTeachingGuide;
  grade?: EducationalGrade;
  onOpenExercises: () => void;
}

const STAGES = [
  { title: 'افهم الفكرة', subtitle: 'المعنى وخط الزمن', icon: Lightbulb },
  { title: 'شاهد المثال', subtitle: 'لاحظ الزمن في السياق', icon: BookOpen },
  { title: 'ابنِ القاعدة', subtitle: 'الإثبات والنفي والسؤال', icon: ListChecks },
  { title: 'انتبه للأخطاء', subtitle: 'التمييز ومفاتيح الاختيار', icon: Target },
  { title: 'اختبر نفسك', subtitle: 'تدريب مع تفسير', icon: Trophy },
] as const;

const TIMELINE = [
  { key: 'past', label: 'الماضي', icon: Clock3 },
  { key: 'present', label: 'الآن', icon: CalendarDays },
  { key: 'future', label: 'المستقبل', icon: CalendarDays },
] as const;

function timePointActive(focus: TenseTeachingGuide['timeFocus'], point: string): boolean {
  if (focus === 'mixed') return true;
  if (focus === 'past-to-present') return point === 'past' || point === 'present';
  if (focus === 'past-sequence') return point === 'past';
  if (focus === 'future-in-past') return point === 'past' || point === 'future';
  return focus === point;
}

export const TenseLearningJourney: React.FC<TenseLearningJourneyProps> = ({
  lesson,
  guide,
  grade,
  onOpenExercises,
}) => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeExample, setActiveExample] = useState(0);
  const [activeForm, setActiveForm] = useState(0);
  const [activePractice, setActivePractice] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answerChecked, setAnswerChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const gradeMeta = grade ? getGradeMeta(grade) : null;
  const currentExample = guide.examples[activeExample];
  const currentForm = guide.forms[activeForm];
  const currentPractice = guide.practice[activePractice];
  const answerIsCorrect = !!currentPractice && selectedAnswer === currentPractice.answer;
  const sourcePages = lesson.sourcePages || lesson.provenance?.pageNumbers;

  const movePractice = () => {
    if (!answerChecked) return;
    if (activePractice < guide.practice.length - 1) {
      setActivePractice((value) => value + 1);
      setSelectedAnswer('');
      setAnswerChecked(false);
    }
  };

  const renderMeaning = () => (
    <div className="space-y-5" data-testid="grammar-understand-stage">
      <article className="rounded-xl border-2 border-ink bg-blue-mist p-5 sm:p-7 shadow-brutal-callout">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink bg-surface px-3 py-1 text-[11px] font-black text-cobalt">
          <Lightbulb className="h-4 w-4" />
          ابدأ بالموقف، لا بالمعادلة
        </span>
        <h3 className="mt-4 text-xl sm:text-2xl font-black leading-relaxed text-ink">{guide.topic}</h3>
        <p className="mt-3 whitespace-pre-line text-sm sm:text-base font-semibold leading-8 text-ink">{guide.context}</p>
        <div className="mt-5 rounded-lg border-2 border-ink bg-surface p-4">
          <p className="text-[10px] font-black text-cobalt">ماذا يعني هذا الزمن؟</p>
          <p className="mt-1 text-sm sm:text-base font-semibold leading-8 text-ink">{guide.meaning}</p>
        </div>
      </article>

      <section className="rounded-xl border-2 border-ink bg-surface p-5" aria-label="خط الزمن">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-black text-ink">ضع الحدث على خط الزمن</h3>
          <span className="text-[10px] font-mono font-black text-cobalt">TIME MAP</span>
        </div>
        <div className="relative mt-5 grid grid-cols-3 gap-2">
          <div className="absolute left-[16%] right-[16%] top-4 h-1 rounded-full bg-ink/20" />
          {TIMELINE.map((point) => {
            const active = timePointActive(guide.timeFocus, point.key);
            const Icon = point.icon;
            return (
              <div key={point.key} className="relative z-10 flex flex-col items-center gap-2 text-center">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink ${active ? 'bg-yellow text-ink shadow-brutal-sm' : 'bg-paper text-ink/40'}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className={`text-xs font-black ${active ? 'text-cobalt' : 'text-ink/45'}`}>{point.label}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 rounded-lg border border-ink/20 bg-paper p-3 text-sm font-semibold leading-7 text-ink">{guide.timeline}</p>
      </section>

      <section className="rounded-xl border-2 border-ink bg-surface p-5">
        <h3 className="flex items-center gap-2 text-base font-black text-ink">
          <Target className="h-4 w-4 text-cobalt" />
          بعد هذا الدرس ستتمكن من
        </h3>
        <ul className="mt-3 space-y-2">
          {guide.outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-2 text-sm font-semibold leading-7 text-ink">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-semantic-success" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

  const renderExamples = () => (
    <div className="space-y-5" data-testid="grammar-examples-stage">
      <div>
        <h3 className="text-lg font-black text-ink">شاهد الزمن داخل موقف مفهوم</h3>
        <p className="mt-1 text-sm font-semibold leading-7 text-ink/65">
          اقرأ الجملة، استمع إليها، ثم لاحظ لماذا اختير هذا الزمن تحديداً.
        </p>
      </div>
      {currentExample ? (
        <article className="overflow-hidden rounded-xl border-2 border-ink bg-surface shadow-brutal-callout">
          <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-paper p-3">
            <span className="text-xs font-black text-ink">مثال {activeExample + 1} من {guide.examples.length}</span>
            <button type="button" onClick={() => speakEnglish(currentExample.en)}
              className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-yellow px-3 py-2 text-xs font-black text-ink">
              <Volume2 className="h-4 w-4" /> استمع إلى النطق
            </button>
          </div>
          <div className="space-y-4 p-5 sm:p-7">
            <p dir="ltr" className="text-left text-xl sm:text-2xl font-bold leading-relaxed text-ink">{currentExample.en}</p>
            <div className="rounded-lg border border-ink bg-yellow/25 p-3">
              <p className="text-[10px] font-black text-cobalt">ركز على هذه الصيغة</p>
              <p dir="ltr" className="mt-1 text-base font-black text-ink">{currentExample.focus}</p>
            </div>
            <div className="rounded-lg border-2 border-ink bg-blue-mist/60 p-4">
              <p className="text-[10px] font-black text-cobalt">المعنى بالعربية</p>
              <p className="mt-1 text-sm sm:text-base font-bold leading-8 text-ink">{currentExample.ar}</p>
            </div>
            <div className="rounded-lg border-r-4 border-cobalt bg-paper p-4">
              <p className="text-[10px] font-black text-cobalt">لماذا استخدمنا هذا الزمن؟</p>
              <p className="mt-1 text-sm font-semibold leading-7 text-ink">{currentExample.why}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 border-t-2 border-ink bg-paper p-3">
            <button type="button" disabled={activeExample === 0} onClick={() => setActiveExample((value) => Math.max(0, value - 1))}
              className="rounded-md border-2 border-ink bg-surface px-3 py-2 text-xs font-black text-ink disabled:opacity-35">
              السابق
            </button>
            <span className="text-xs font-mono font-black text-ink/60">{activeExample + 1} / {guide.examples.length}</span>
            <button type="button" disabled={activeExample >= guide.examples.length - 1} onClick={() => setActiveExample((value) => Math.min(guide.examples.length - 1, value + 1))}
              className="rounded-md border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface disabled:opacity-35">
              المثال التالي
            </button>
          </div>
        </article>
      ) : (
        <p className="rounded-lg border-2 border-dashed border-ink/40 bg-paper p-4 text-sm font-semibold text-ink/70">لا توجد أمثلة تعليمية مسجلة لهذا الدرس.</p>
      )}
    </div>
  );

  const renderForms = () => (
    <div className="space-y-5" data-testid="grammar-build-stage">
      <div className="rounded-xl border-2 border-ink bg-lavender/60 p-5">
        <h3 className="text-lg font-black text-ink">ابنِ الجملة خطوة خطوة</h3>
        <p className="mt-2 text-sm font-semibold leading-7 text-ink">
          لا تحفظ الصيغة وحدها. لاحظ ترتيب الفاعل والفعل المساعد والفعل الرئيسي، ثم قارن بين الإثبات والنفي والسؤال.
        </p>
      </div>
      <section className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {guide.forms.map((form, index) => (
            <button key={form.title} type="button" onClick={() => setActiveForm(index)}
              aria-pressed={activeForm === index}
              className={`rounded-md border-2 border-ink px-3 py-2 text-xs font-black transition-all ${activeForm === index ? 'bg-cobalt text-surface shadow-brutal-sm' : 'bg-paper text-ink hover:bg-yellow/50'}`}>
              {form.title}
            </button>
          ))}
        </div>
        {currentForm && (
          <article className="rounded-xl border-2 border-ink bg-surface p-5 shadow-brutal-callout">
            <span className="rounded-full border border-ink bg-yellow px-3 py-1 text-[10px] font-black text-ink">خطوة {activeForm + 1} من {guide.forms.length}</span>
            <h4 className="mt-3 text-lg font-black text-ink">{currentForm.title}</h4>
            <p className="mt-2 text-sm font-semibold leading-7 text-ink">{currentForm.explanation}</p>
            {currentForm.pattern && (
              <div className="mt-4 rounded-lg border-2 border-ink bg-ink p-4">
                <p className="text-[10px] font-black text-yellow">ترتيب الكلمات</p>
                <pre dir="ltr" className="mt-2 whitespace-pre-wrap break-words text-left text-sm sm:text-base font-bold leading-8 text-surface">{currentForm.pattern}</pre>
              </div>
            )}
            {currentForm.example && (
              <div className="mt-4 rounded-lg border border-ink/25 bg-blue-mist p-4">
                <p dir="ltr" className="text-left text-lg font-black text-ink">{currentForm.example}</p>
                {currentForm.translation && <p className="mt-2 text-sm font-semibold text-ink">{currentForm.translation}</p>}
              </div>
            )}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button type="button" disabled={activeForm === 0} onClick={() => setActiveForm((value) => Math.max(0, value - 1))}
                className="rounded-md border-2 border-ink bg-paper px-3 py-2 text-xs font-black disabled:opacity-35">الصيغة السابقة</button>
              <button type="button" disabled={activeForm >= guide.forms.length - 1} onClick={() => setActiveForm((value) => Math.min(guide.forms.length - 1, value + 1))}
                className="rounded-md border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface disabled:opacity-35">الصيغة التالية</button>
            </div>
          </article>
        )}
      </section>
      <section className="rounded-xl border-2 border-ink bg-paper p-5">
        <h4 className="text-sm font-black text-ink">ملاحظات عند تكوين الفعل</h4>
        <ul className="mt-3 space-y-2">
          {guide.verbTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm font-semibold leading-7 text-ink">
              <Check className="mt-1 h-4 w-4 shrink-0 text-cobalt" /> <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

  const renderDistinctions = () => (
    <div className="space-y-5" data-testid="grammar-mistakes-stage">
      <div className="rounded-xl border-2 border-ink bg-yellow/40 p-5">
        <h3 className="text-lg font-black text-ink">كيف تختار؟ وما الذي يجب ألا تخلط بينه؟</h3>
        <p className="mt-2 text-sm font-semibold leading-7 text-ink/75">
          الكلمات الدالة تساعدك، لكنها لا تختار الزمن نيابة عنك. افهم معنى الجملة، ثم استخدم العلامات لتأكيد اختيارك.
        </p>
      </div>
      {guide.contrast.map((item, index) => (
        <article key={index} className="rounded-xl border-2 border-ink bg-surface p-5">
          <h4 className="text-base font-black text-cobalt">{item.title}</h4>
          <p className="mt-2 text-sm font-semibold leading-7 text-ink">{item.explanation}</p>
          {item.pattern && <p dir="ltr" className="mt-3 rounded-md bg-paper p-3 text-left text-xs font-black text-ink">{item.pattern}</p>}
          {item.example && <p dir="ltr" className="mt-3 text-left text-base font-bold text-ink">{item.example}</p>}
          {item.translation && <p className="mt-1 text-sm font-semibold text-ink/75">{item.translation}</p>}
        </article>
      ))}
      <section className="rounded-xl border-2 border-ink bg-blue-mist/50 p-5">
        <h4 className="text-sm font-black text-ink">كلمات وإشارات تساعدك</h4>
        <div className="mt-3 space-y-3">
          {guide.clues.map((clue, index) => (
            <div key={index} className="rounded-lg border border-ink/25 bg-surface p-3">
              <p className="text-sm font-black text-cobalt">{clue.title}</p>
              <p className="mt-1 text-sm font-semibold leading-7 text-ink">{clue.explanation}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-xl border-2 border-ink bg-answer-review-bg p-5">
        <h4 className="flex items-center gap-2 text-sm font-black text-ink"><X className="h-4 w-4" /> أخطاء يقع فيها الطلاب</h4>
        <div className="mt-3 space-y-3">
          {guide.commonErrors.map((error, index) => (
            <article key={index} className="rounded-lg border border-ink bg-surface p-3">
              <p className="text-[10px] font-black text-semantic-error">{error.title}</p>
              {error.pattern && <p dir="ltr" className="mt-1 text-left text-sm font-bold text-ink line-through decoration-coral">{error.pattern}</p>}
              <p className="mt-2 text-sm font-semibold leading-7 text-ink">{error.explanation}</p>
              {error.example && <p dir="ltr" className="mt-2 rounded bg-soft-mint p-2 text-left text-sm font-black text-ink">{error.example}</p>}
            </article>
          ))}
        </div>
      </section>
    </div>
  );

  const renderPractice = () => (
    <div className="space-y-5" data-testid="grammar-recap-stage">
      <div className="rounded-xl border-2 border-ink bg-soft-mint/55 p-5">
        <div className="flex items-center gap-2 text-sm font-black text-ink"><Trophy className="h-5 w-5" /> دورك الآن — فكّر قبل أن ترى الإجابة</div>
        <h3 className="mt-3 text-xl font-black text-ink">تدريب متدرج على فهم الزمن</h3>
        <p className="mt-2 text-sm font-semibold leading-7 text-ink">{guide.takeaway}</p>
        <p className="mt-3 text-xs font-bold text-ink/65">أنجزت {correctCount} من {guide.practice.length} إجابات صحيحة حتى الآن.</p>
      </div>
      {currentPractice && (
        <article className="overflow-hidden rounded-xl border-2 border-ink bg-surface shadow-brutal-callout">
          <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-paper p-3">
            <span className="text-xs font-black text-ink">تدريب {activePractice + 1} من {guide.practice.length}</span>
            <span className="rounded-full border border-ink bg-yellow px-2.5 py-1 text-[10px] font-black text-ink">{currentPractice.skill}</span>
          </div>
          <div className="space-y-4 p-5">
            <p dir="auto" className="text-base sm:text-lg font-bold leading-8 text-ink">{currentPractice.prompt}</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {currentPractice.options.map((option, index) => (
                <button key={index} type="button" data-testid="tense-practice-option" disabled={answerChecked} onClick={() => setSelectedAnswer(option)}
                  className={`rounded-lg border-2 p-3 text-right text-sm font-bold transition-all ${selectedAnswer === option ? 'border-ink bg-yellow shadow-brutal-sm' : 'border-ink/30 bg-paper hover:border-ink'} disabled:cursor-default`}>
                  <span dir="auto">{option}</span>
                </button>
              ))}
            </div>
            {!answerChecked ? (
              <button type="button" disabled={!selectedAnswer} onClick={() => { setAnswerChecked(true); if (answerIsCorrect) setCorrectCount((value) => value + 1); }}
                className="rounded-md border-2 border-ink bg-cobalt px-5 py-3 text-sm font-black text-surface disabled:opacity-40">
                تحقق من إجابتي
              </button>
            ) : (
              <div className={`rounded-lg border-2 border-ink p-4 ${answerIsCorrect ? 'bg-soft-mint' : 'bg-answer-review-bg'}`}>
                <p className="flex items-center gap-2 text-sm font-black text-ink">
                  {answerIsCorrect ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                  {answerIsCorrect ? 'إجابة صحيحة — أحسنت.' : 'ليست الإجابة الصحيحة. تعلّم من السبب.'}
                </p>
                <p className="mt-2 text-sm font-bold text-ink">الإجابة الصحيحة: <span dir="auto">{currentPractice.answer}</span></p>
                <p className="mt-2 text-sm font-semibold leading-7 text-ink">{currentPractice.explanation}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" onClick={() => { setSelectedAnswer(''); setAnswerChecked(false); }}
                    className="rounded-md border-2 border-ink bg-surface px-3 py-2 text-xs font-black text-ink">أعد المحاولة</button>
                  {activePractice < guide.practice.length - 1 && (
                    <button type="button" onClick={movePractice}
                      className="rounded-md border-2 border-ink bg-cobalt px-3 py-2 text-xs font-black text-surface">السؤال التالي</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </article>
      )}
      {activePractice === guide.practice.length - 1 && answerChecked && (
        <div className="rounded-xl border-2 border-ink bg-yellow/35 p-4">
          <p className="text-sm font-black text-ink">انتهى تدريب هذا الدرس.</p>
          <p className="mt-1 text-sm font-semibold text-ink">راجع سبب الإجابة، ثم انتقل إلى تمارين الكتاب لتطبيق القاعدة في أسئلة أطول.</p>
        </div>
      )}
      <div className="rounded-xl border-2 border-ink bg-surface p-5">
        <h4 className="text-sm font-black text-ink">خلاصة تحفظها بالفهم</h4>
        <p className="mt-2 text-sm font-semibold leading-8 text-ink">{guide.takeaway}</p>
        <button type="button" onClick={onOpenExercises} disabled={lesson.exercises.length === 0}
          className="mt-4 inline-flex items-center gap-2 rounded-md border-2 border-ink bg-cobalt px-4 py-3 text-xs font-black text-surface disabled:cursor-not-allowed disabled:opacity-40">
          افتح تمارين الدرس كاملة <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const renderStage = () => {
    switch (activeStage) {
      case 0: return renderMeaning();
      case 1: return renderExamples();
      case 2: return renderForms();
      case 3: return renderDistinctions();
      default: return renderPractice();
    }
  };

  return (
    <section className="tense-learning-journey space-y-5" dir="rtl"
      aria-label="التعلم التفاعلي للأزمنة"
      data-testid="grammar-learning-journey"
      data-tense-journey="true"
      data-lesson-id={lesson.id}>
      <header className="rounded-xl border-2 border-ink bg-surface p-4 sm:p-5 shadow-brutal-action">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink bg-cobalt px-3 py-1 text-[10px] font-black text-surface">
              <BookOpen className="h-3.5 w-3.5" /> مختبر فهم الأزمنة
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-black text-ink">نتعلّمها بالفهم، لا بحفظ المعادلة</h2>
            <p className="mt-1 text-xs sm:text-sm font-semibold leading-6 text-ink/65">
              {gradeMeta?.nameAr || guide.gradeLabel} · {guide.topic}
            </p>
          </div>
          <div className="rounded-lg border-2 border-ink bg-yellow px-4 py-3 text-center">
            <span className="block text-[10px] font-black text-ink/65">مرحلتك الحالية</span>
            <span className="text-lg font-black text-ink">{activeStage + 1} / {STAGES.length}</span>
          </div>
        </div>
        <div className="mt-4 h-2.5 overflow-hidden rounded-full border border-ink bg-paper">
          <div className="h-full rounded-full bg-cobalt transition-all" style={{ width: `${((activeStage + 1) / STAGES.length) * 100}%` }} />
        </div>
        <nav className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5" aria-label="مراحل تعلم الزمن">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const active = activeStage === index;
            const completed = activeStage > index;
            return (
              <button key={stage.title} type="button" onClick={() => setActiveStage(index)}
                aria-current={active ? 'step' : undefined}
                className={`flex min-w-0 items-center gap-2 rounded-lg border-2 px-2.5 py-3 text-right transition-all sm:flex-col sm:items-center sm:text-center ${active ? 'border-ink bg-cobalt text-surface shadow-brutal-sm' : completed ? 'border-ink bg-soft-mint text-ink' : 'border-ink/30 bg-paper text-ink hover:bg-yellow/50'}`}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink bg-surface text-ink">
                  {completed ? <CheckCircle2 className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-black">{stage.title}</span>
                  <span className="hidden text-[9px] font-semibold text-current/70 sm:block">{stage.subtitle}</span>
                </span>
              </button>
            );
          })}
        </nav>
      </header>

      <div className="min-h-[280px]">{renderStage()}</div>

      <footer className="flex items-center justify-between gap-3 border-t-2 border-ink/15 pt-4">
        <button type="button" onClick={() => setActiveStage((value) => Math.max(0, value - 1))} disabled={activeStage === 0}
          className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-paper px-3 py-2.5 text-xs font-black text-ink disabled:opacity-35">
          <ArrowRight className="h-4 w-4" /> السابقة
        </button>
        {activeStage < STAGES.length - 1 ? (
          <button type="button" onClick={() => setActiveStage((value) => Math.min(STAGES.length - 1, value + 1))}
            className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-cobalt px-4 py-2.5 text-xs font-black text-surface shadow-brutal-sm">
            {activeStage === 0 ? 'شاهد مثالاً' : activeStage === 1 ? 'انتقل إلى الصيغ' : activeStage === 2 ? 'قارن بين الأزمنة' : 'اختبر فهمك بنفسك'}
            <ArrowLeft className="h-4 w-4" />
          </button>
        ) : (
          <button type="button" onClick={onOpenExercises} disabled={lesson.exercises.length === 0}
            className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-soft-mint px-4 py-2.5 text-xs font-black text-ink disabled:opacity-35">
            انتقل إلى تمارين الدرس <ArrowLeft className="h-4 w-4" />
          </button>
        )}
      </footer>

      {sourcePages && (
        <p className="text-[10px] font-semibold text-ink/55">المرجع المسجل في المنهج: {sourcePages}</p>
      )}
    </section>
  );
};
