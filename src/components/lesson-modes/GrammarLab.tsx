import React, { useState } from 'react';
import { 
  Cpu, ArrowRight, Zap, CheckCircle2, RotateCcw, Volume2, 
  Sparkles, Layers, Sliders, Play, BookmarkCheck 
} from 'lucide-react';
import { Lesson } from '../../types';
import { speakEnglish } from '../../utils/speech';

interface GrammarLabProps {
  lesson: Lesson;
}

export const GrammarLab: React.FC<GrammarLabProps> = ({ lesson }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState<'formula' | 'stepper' | 'radar'>('formula');
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  const handleSpeak = (text: string) => {
    setSpeakingText(text);
    speakEnglish(text, () => setSpeakingText(null));
  };

  // Extract signal words/clues based on lesson content
  const getSignalWords = () => {
    const id = lesson.id;
    if (id.includes('u1-l1')) {
      return [
        { word: 'while / as', rule: 'يأتي بعدهما ماضٍ مستمر (was / were + v-ing)', tag: 'استمرار' },
        { word: 'when / and', rule: 'يأتي بعدهما ماضٍ بسيط (verb-ed)', tag: 'حدث مفاجئ' },
      ];
    }
    if (id.includes('u2-l2')) {
      return [
        { word: 'must / have to / need to', rule: 'للإلزام والضرورة القصوى (قانون / سلامة)', tag: 'إلزام' },
        { word: "mustn't", rule: 'للتحذير والمنع التام (خطر أو عقوبة)', tag: 'منع قاطع' },
        { word: "don't have to / needn't", rule: 'لعدم الحاجة (أمر اختياري غير مفروض)', tag: 'اختياري' },
      ];
    }
    if (id.includes('u2-l4')) {
      return [
        { word: 'I think ... will', rule: 'تحول إلى should + base verb عند التوقع', tag: 'توقع إيجابي' },
        { word: "I don't think ... will", rule: 'تحول إلى shouldn\'t + base verb', tag: 'توقع سلبي' },
      ];
    }
    if (id.includes('u2-l7')) {
      return [
        { word: 'had / got + object', rule: 'يأتي بعدها تصريف ثالث (p.p.) لعمل أُنجز لشخص آخر', tag: 'غير رسمي' },
        { word: 'made + object', rule: 'يأتي بعدها فعل مجرد (base verb) دال على الإجبار والسبب', tag: 'سبب وإجبار' },
      ];
    }
    if (id.includes('u3-l2')) {
      return [
        { word: 'Zero Conditional', rule: 'If (Present Simple) => (Present Simple) حقائق علمية وعامة', tag: 'حقيقة' },
        { word: 'First Conditional', rule: 'If (Present Simple) => (will + base) احتمال حقيقي بالمستقبل', tag: 'احتمال' },
        { word: 'Second Conditional', rule: 'If (Past Simple) => (would + base) موقف تخيلي أو غير واقعي', tag: 'تخيل' },
        { word: 'Third Conditional', rule: 'If (had + p.p.) => (would have + p.p.) ندم وافتراض ماضٍ مستحيل', tag: 'مستحيل' },
      ];
    }
    if (id.includes('u3-l4')) {
      return [
        { word: 'Direct Question', rule: 'تقديم الفاعل على الفعل المساعد دائماً وحذف علامة الاستفهام', tag: 'ترتيب' },
        { word: 'if / whether', rule: 'نربط بهما إذا كان السؤال يبدأ بفعل مساعد (Do, Is, Can...)', tag: 'أداة ربط' },
        { word: 'Tense Step-Back', rule: 'Present -> Past | Past Simple -> Past Perfect', tag: 'تراجع الزمن' },
      ];
    }
    if (id.includes('u3-l5')) {
      return [
        { word: 'I wish / If only', rule: 'دائماً يتبعهما ماضٍ تام (had / hadn\'t + p.p.) للتعبير عن الندم', tag: 'قاعدة ثابتة' },
        { word: 'عكس الإثبات والنفي', rule: 'إذا كانت الجملة الأصلية مثبتة نستخدم hadn\'t، وإذا كانت منفية نستخدم had', tag: 'سر الوزاري' },
      ];
    }
    if (id.includes('u5-l2') || id.includes('u5-l3')) {
      return [
        { word: 'just / already / yet', rule: 'just/already مع الإثبات، yet في نهاية جملة النفي والاستفهام', tag: 'ظروف التام' },
        { word: 'since', rule: 'تأتي مع نقطة بداية محددة: 2010, October, 8 o\'clock, I was young', tag: 'نقطة بداية' },
        { word: 'for', rule: 'تأتي مع فترة زمنية مجملة محسوبة: 10 years, two hours, a long time', tag: 'مدة محسوبة' },
        { word: 'been vs gone', rule: 'been: ذهب وعاد | gone: ذهب ولم يعد بعد حتى الآن', tag: 'حركة الشخص' },
      ];
    }
    if (id.includes('u5-l6')) {
      return [
        { word: 'who', rule: 'للعاقل المتبوع بفعل أو ضمير', tag: 'عاقل' },
        { word: 'which / that', rule: 'لغير العاقل (جماد أو حيوان)', tag: 'غير عاقل' },
        { word: 'whose', rule: 'للتملك (بين اسمين، الثاني يعود للأول)', tag: 'ملكية' },
        { word: 'where', rule: 'للمكان المتبوع بفاعل وفعل (يصف ما يحدث فيه)', tag: 'مكان' },
      ];
    }
    if (id.includes('u6-l2')) {
      return [
        { word: 'حذف الفاعل', rule: 'أول خطوة: احذف الفاعل القديم تماماً من الجملة', tag: 'خطوة 1' },
        { word: 'تقديم المفعول به', rule: 'نبدأ به الجملة (غالباً الكلمة الثالثة بعد الفعل)', tag: 'خطوة 2' },
        { word: 'فعل be المناسب', rule: 'نضعه حسب زمن الجملة ومطابقاً لمفرد/جمع المفعول به الجديد', tag: 'خطوة 3' },
        { word: 'التصريف الثالث (p.p)', rule: 'تحويل الفعل الرئيسي الأصلي إلى التصريف الثالث', tag: 'خطوة 4' },
      ];
    }
    if (id.includes('u7-l2') || id.includes('u7-l4')) {
      return [
        { word: 'Present Simple', rule: 'لجداول المواعيد الثابتة (course, class, train begins/leaves)', tag: 'جدول مواعيد' },
        { word: 'Going to', rule: 'للخطط والنوايا والقرارات المسبقة (decided, planned)', tag: 'نوايا وخطط' },
        { word: 'Present Continuous', rule: 'للترتيبات الثابتة مع أشخاص ومواعيد محددة (meeting, visiting)', tag: 'ترتيب مسبق' },
        { word: 'will -> would', rule: 'في المستقبل في الماضي نحول أول فعل فقط (will -> would / is -> was)', tag: 'تحويل ماضٍ' },
      ];
    }
    return [
      { word: 'المفتاح الوزاري', rule: 'حدد أولاً دلالة الزمن في الجملة قبل اختيار الصيغة.', tag: 'تلميح' },
      { word: 'المطابقة', rule: 'انتبه لمطابقة المفرد والجمع بين الفاعل والفعل المساعد.', tag: 'دقة' },
    ];
  };

  // Dynamic transformation stepper for grammar lessons
  const getTransformationSteps = () => {
    const id = lesson.id;
    if (id.includes('u6-l2')) {
      return [
        {
          stepNumber: 1,
          title: 'الخطوة 1: حذف الفاعل القديم',
          desc: 'احذف الفاعل (Somebody, Someone, The police) تماماً، فهو لن يظهر في الجملة الجديدة.',
          example: 'Somebody stole my wallet yesterday. => [Somebody يحذف]',
        },
        {
          stepNumber: 2,
          title: 'الخطوة 2: تقديم المفعول به في البداية',
          desc: 'المفعول به يقع عادة بعد الفعل مباشرة، ويكون مسبوقاً بـ (the, a, an, my, his).',
          example: 'نبدأ الجملة بـ: My wallet ...',
        },
        {
          stepNumber: 3,
          title: 'الخطوة 3: إضافة فعل الكينونة (Be) المناسب للزمن',
          desc: 'الجملة ماضٍ بسيط (stole) والمفعول به مفرد (wallet) => نضع was.',
          example: 'My wallet was ...',
        },
        {
          stepNumber: 4,
          title: 'الخطوة 4: تحويل الفعل إلى التصريف الثالث (P.P)',
          desc: 'الفعل (stole) تصريفه الثالث هو (stolen)، ثم نكتب باقي الجملة.',
          example: 'الناتج النهائي الوزاري: My wallet was stolen yesterday.',
        },
      ];
    }
    if (id.includes('u7-l4') || id.includes('u7-l6')) {
      return [
        {
          stepNumber: 1,
          title: 'الخطوة 1: قراءة بداية الجملة في الماضي',
          desc: 'يعطيك الوزاري بداية محددة مثل: I thought... أو He told me that...',
          example: 'He will become an engineer. => He told me that...',
        },
        {
          stepNumber: 2,
          title: 'الخطوة 2: تحديد أول فعل أو فعل مساعد في الجملة',
          desc: 'ابحث عن الفعل المساعد (will, is, am, are, can) أو الفعل الرئيسي في المضارع.',
          example: 'الفعل المساعد هنا هو (will)',
        },
        {
          stepNumber: 3,
          title: 'الخطوة 3: تحويله إلى صيغة الماضي التام المقابلة',
          desc: 'will تصبح would | is/am تصبح was | are تصبح were | can تصبح could.',
          example: 'will => would',
        },
        {
          stepNumber: 4,
          title: 'الخطوة 4: كتابة بقية الجملة بدون أي تغيير إضافي',
          desc: 'لا تغير الفعل المجرد بعد would أو to أبداً!',
          example: 'الناتج النهائي: He told me that he would become an engineer.',
        },
      ];
    }
    if (id.includes('u3-l4')) {
      return [
        {
          stepNumber: 1,
          title: 'الخطوة 1: كتابة جملة القول وأداة الربط',
          desc: 'نكتب He asked me... وإذا كان السؤال بأداة استفهام ننزلها، وإن كان بفعل مساعد نربط بـ (if).',
          example: 'Where did you lose your purse? => She asked me where...',
        },
        {
          stepNumber: 2,
          title: 'الخطوة 2: تقديم الفاعل وتحويل الضمائر',
          desc: 'في السؤال المباشر يكون الفعل قبل الفاعل؛ في المنقول نعكس: الفاعل أولاً (you -> I).',
          example: 'where I ...',
        },
        {
          stepNumber: 3,
          title: 'الخطوة 3: إرجاع زمن الفعل خطوة إلى الماضي',
          desc: 'السؤال بالماضي البسيط (did lose) فيتحول إلى ماضٍ تام (had lost).',
          example: 'where I had lost ...',
        },
        {
          stepNumber: 4,
          title: 'الخطوة 4: تعديل ضمائر التملك وحذف علامة الاستفهام',
          desc: 'your purse تصبح my purse ونضع نقطة بدلاً من علامة الاستفهام.',
          example: 'She asked me where I had lost my purse.',
        },
      ];
    }
    if (id.includes('u3-l5')) {
      return [
        {
          stepNumber: 1,
          title: 'الخطوة 1: كتابة أداة التمني والندم',
          desc: 'ابدأ بـ I wish أو If only كما يطلب منك السؤال الوزاري بين قوسين.',
          example: 'I ate too much chocolate. => If only...',
        },
        {
          stepNumber: 2,
          title: 'الخطوة 2: تنزيل الفاعل وملاحظة الإثبات والنفي',
          desc: 'الفاعل هو I. الجملة الأصلية مثبتة (ate) => إذن نحتاج نفياً (hadn\'t)!',
          example: 'If only I hadn\'t ...',
        },
        {
          stepNumber: 3,
          title: 'الخطوة 3: تحويل الفعل إلى التصريف الثالث P.P',
          desc: 'الفعل ate تصريفه الثالث eaten.',
          example: 'If only I hadn\'t eaten ...',
        },
        {
          stepNumber: 4,
          title: 'الخطوة 4: حذف عبارات النتيجة والختام بنقطة',
          desc: 'احذف أي عبارة مثل (and now I feel sick) وأكمل باقي الجملة.',
          example: 'If only I hadn\'t eaten so much chocolate.',
        },
      ];
    }
    // Default 3-step grammar protocol
    return [
      {
        stepNumber: 1,
        title: 'الخطوة 1: فحص مفتاح الزمن والكلمة الدلالية',
        desc: 'ابحث عن الظرف أو الأداة (yesterday, since, while, if...) لتحديد القاعدة الدقيقة.',
        example: 'حدد دلالة الجملة قبل البدء بالحل.',
      },
      {
        stepNumber: 2,
        title: 'الخطوة 2: تطبيق المعادلة الرياضية للزمن',
        desc: 'ضع التركيب النحوي الخاص بالزمن مع مراعاة المفرد والجمع.',
        example: 'المفرد يأخذ (is, was, has, s) والجمع يأخذ (are, were, have).',
      },
      {
        stepNumber: 3,
        title: 'الخطوة 3: مراجعة التصريف الثالث وشواذ الأفعال',
        desc: 'تأكد من كتابة التصريف الصحيح وتجنب إضافة ed للأفعال الشاذة.',
        example: 'راجع قائمة الأفعال الشاذة في الملزمة.',
      },
    ];
  };

  const steps = getTransformationSteps();
  const signals = getSignalWords();

  return (
    <div className="bg-surface border-2 border-ink text-ink p-6 sm:p-8 shadow-brutal-lg space-y-6 relative overflow-hidden rounded-md">
      
      {/* 3D Visual Banner & Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-ink/15 pb-5">
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative overflow-hidden border-2 border-ink shadow-brutal-callout w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-paper rounded">
            <img 
              src="/assets/images/grammar_lab_3d_1793868639624.jpg" 
              alt="Grammar Lab 3D" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-yellow text-ink border border-ink text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm">
                INTERACTIVE GRAMMAR LAB
              </span>
              <span className="text-xs font-mono font-bold text-muted-gray">• معمل القواعد الذكي</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-ink mt-1 tracking-tight">
              خوارزمية حل القواعد خطوة بخطوة
            </h2>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-paper border border-ink shadow-brutal-sm w-full md:w-auto rounded">
          <button
            type="button"
            onClick={() => setActiveTab('formula')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border cursor-pointer rounded-sm ${
              activeTab === 'formula' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 shrink-0" />
            <span>المعادلة</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('stepper')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border cursor-pointer rounded-sm ${
              activeTab === 'stepper' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>خطوات التحويل</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('radar')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border cursor-pointer rounded-sm ${
              activeTab === 'radar' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Zap className="w-3.5 h-3.5 shrink-0" />
            <span>رادار الكلمات</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Formula Tokenizer */}
      {activeTab === 'formula' && (
        <div className="space-y-4">
          <div className="p-5 bg-paper border-2 border-ink shadow-brutal-callout rounded-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs">
              <span className="font-bold text-ink flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cobalt shrink-0" />
                الصيغة الرياضية المقررة في القاعدة
              </span>
              <span className="text-[11px] font-mono font-bold text-muted-gray">RULE SYNTAX MATRIX</span>
            </div>

            <div className="font-mono text-base sm:text-lg font-bold text-ink bg-surface p-4 border border-ink whitespace-pre-wrap break-words min-w-0 leading-relaxed shadow-brutal-sm rounded">
              {lesson.grammarRuleFormula || lesson.summary}
            </div>
          </div>

          {/* Quick Examples with Pronunciation */}
          {lesson.examples && lesson.examples.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-bold text-ink">أمثلة تطبيقية مع النطق الإنجليزي السليم:</p>
              <div className="grid grid-cols-1 gap-2.5">
                {lesson.examples.slice(0, 3).map((ex, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 bg-surface border border-ink shadow-brutal-sm hover:bg-paper transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded"
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <p dir="ltr" className="font-mono font-bold text-sm text-ink text-left break-words">
                        {ex.en}
                      </p>
                      <p className="text-xs font-bold text-muted-gray">
                        {ex.ar}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {ex.note && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-yellow text-ink border border-ink rounded-sm">
                          {ex.note}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => handleSpeak(ex.en)}
                        aria-label="استمع للنطق الإنجليزي"
                        className={`p-2 border border-ink transition-all cursor-pointer shadow-brutal-press active:translate-x-0.5 active:translate-y-0.5 rounded ${
                          speakingText === ex.en 
                            ? 'bg-cobalt text-surface animate-pulse' 
                            : 'bg-surface hover:bg-yellow text-ink'
                        }`}
                        title="استمع للنطق الإنجليزي"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Step-by-Step Transformation Stepper */}
      {activeTab === 'stepper' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-ink">
              تتبع خطوات الحل بنفس التسلسل المطلوب في الدفتر الامتحاني:
            </span>
            <div className="flex items-center gap-1 text-xs font-mono font-bold text-muted-gray">
              <span>STEP {activeStep + 1} OF {steps.length}</span>
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {steps.map((step, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3 border text-right transition-all flex flex-col gap-1 cursor-pointer rounded min-w-0 ${
                  activeStep === idx 
                    ? 'bg-cobalt text-surface border-ink shadow-brutal-callout -translate-y-0.5' 
                    : activeStep > idx 
                      ? 'bg-yellow text-ink border-ink shadow-brutal-sm'
                      : 'bg-paper hover:bg-surface text-ink border-ink'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold">خطوة {step.stepNumber}</span>
                  {activeStep > idx ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-ink" />
                  ) : (
                    <span className="w-2 h-2 bg-current" />
                  )}
                </div>
                <span className="text-xs font-bold truncate">{step.title.split(':')[1] || step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Content Card */}
          <div className="p-6 bg-paper border-2 border-ink shadow-brutal-callout space-y-3 rounded-md">
            <div className="flex items-center justify-between border-b border-ink/20 pb-2">
              <h3 className="text-base sm:text-lg font-bold text-ink flex items-center gap-2 min-w-0">
                <span className="w-6 h-6 bg-cobalt text-surface border border-ink flex items-center justify-center text-xs font-bold font-mono rounded-sm shrink-0">
                  {steps[activeStep].stepNumber}
                </span>
                <span>{steps[activeStep].title}</span>
              </h3>
            </div>

            <p className="text-sm text-ink font-medium leading-relaxed">
              {steps[activeStep].desc}
            </p>

            <div className="p-4 bg-surface border border-ink font-mono text-sm text-ink flex items-center justify-between gap-3 shadow-brutal-sm rounded">
              <span dir="ltr" className="font-bold text-left break-words min-w-0 flex-1">{steps[activeStep].example}</span>
              <button
                type="button"
                onClick={() => handleSpeak(steps[activeStep].example)}
                aria-label="استمع للنطق"
                className="p-1.5 bg-paper hover:bg-yellow border border-ink text-ink shrink-0 cursor-pointer shadow-brutal-press rounded"
                title="استمع للنطق"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="px-3.5 py-1.5 bg-surface border border-ink text-xs font-bold text-ink hover:bg-paper disabled:opacity-40 disabled:pointer-events-none transition-all shadow-brutal-sm cursor-pointer rounded"
              >
                الخطوة السابقة
              </button>

              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                className="px-4 py-1.5 bg-cobalt text-surface border border-ink text-xs font-bold hover:bg-cobalt-hover disabled:opacity-40 disabled:pointer-events-none shadow-brutal-sm transition-all cursor-pointer rounded"
              >
                الخطوة التالية
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Signal Words Radar */}
      {activeTab === 'radar' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/20 pb-2">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-ink fill-coral shrink-0" />
              رادار الكلمات المفتاحية والدلائل الزمنية
            </span>
            <span className="text-[11px] font-mono font-bold text-muted-gray">RADAR KEYWORDS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {signals.map((sig, idx) => (
              <div 
                key={idx}
                className="p-4 bg-surface border border-ink shadow-brutal-sm hover:bg-paper transition-all space-y-2 rounded min-w-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span dir="ltr" className="font-mono text-sm font-bold text-ink text-left break-words px-2.5 py-1 bg-yellow border border-ink rounded-sm">
                    {sig.word}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-cobalt text-surface border border-ink rounded-sm shrink-0">
                    {sig.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                  {sig.rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
