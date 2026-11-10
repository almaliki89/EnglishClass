import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Lightbulb, AlertTriangle, CheckCircle2, 
  HelpCircle, Layers, GitBranch, ArrowLeftRight, Eye, EyeOff, 
  Volume2, Check, X, ShieldAlert, Cpu, ArrowRight, Zap, Target
} from 'lucide-react';
import { Lesson } from '../types';
import { speakEnglish } from '../utils/speech';

interface AcademicExplorationEngineProps {
  lesson: Lesson;
}

export const AcademicExplorationEngine: React.FC<AcademicExplorationEngineProps> = ({ lesson }) => {
  const [activeLens, setActiveLens] = useState<'dissect' | 'mindmap' | 'contrast' | 'stepper'>('dissect');
  const [hiddenNotes, setHiddenNotes] = useState<Record<number, boolean>>({});
  const [understoodPoints, setUnderstoodPoints] = useState<Record<number, boolean>>({});
  const [highYieldOnly, setHighYieldOnly] = useState<boolean>(false);
  const [selectedMindNode, setSelectedMindNode] = useState<number | null>(0);
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const handleSpeak = (text: string) => {
    // Extract English words if any
    const englishMatch = text.match(/[A-Za-z\s',\-?!]+/g);
    if (englishMatch && englishMatch.length > 0) {
      speakEnglish(englishMatch.join(' ').trim());
    } else {
      speakEnglish(text);
    }
  };

  const toggleHidden = (idx: number) => {
    setHiddenNotes(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleUnderstood = (idx: number) => {
    setUnderstoodPoints(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Generate dynamic mindmap structure based on lesson category & content
  const generateMindNodes = () => {
    const nodes = [
      {
        id: 0,
        title: 'جوهر الدرس والقاعدة المركزية',
        category: 'core',
        summary: lesson.titleAr,
        details: lesson.summary,
        color: 'border-indigo-500 bg-indigo-50/70 text-indigo-950',
        badge: 'الركيزة الأساسية'
      },
      ...lesson.detailedContent.slice(0, 4).map((content, idx) => ({
        id: idx + 1,
        title: `المحور ${idx + 1}: تفصيل الحكم الوزاري`,
        category: 'branch',
        summary: content.slice(0, 60) + (content.length > 60 ? '...' : ''),
        details: content,
        color: 'border-slate-300 bg-white text-slate-800',
        badge: `بند ${idx + 1}`
      })),
      {
        id: 5,
        title: 'الفخاخ والشواذ الامتحانية',
        category: 'traps',
        summary: lesson.commonMistakes?.[0] || 'انتبه للشواذ وتطابق الأزمنة وقواعد التحويل الوزارية.',
        details: lesson.commonMistakes?.join(' • ') || 'تجنب خلط القواعد أو نسيان حروف الجر وتصريف الأفعال الشاذة.',
        color: 'border-rose-400 bg-rose-50/70 text-rose-950',
        badge: 'تحذير وزاري'
      }
    ];
    return nodes;
  };

  const mindNodes = generateMindNodes();

  // Generate comparison / contrast data
  const getContrastMatrix = () => {
    const title = lesson.titleEn.toLowerCase();
    
    if (title.includes('while') || title.includes('as') || title.includes('past')) {
      return {
        leftTitle: 'أدوات الربط (While / As)',
        leftRule: 'يأتي بعدها دائماً ماضٍ مستمر (Past Continuous: was/were + v-ing)',
        leftExample: 'While he was swimming, a shark attacked him.',
        rightTitle: 'أدوات الربط (When / And)',
        rightRule: 'يأتي بعدها دائماً ماضٍ بسيط (Past Simple: V2)',
        rightExample: 'We were having breakfast when a bird flew into the kitchen.',
        trap: 'لا تأتي أداة الربط (And) في بداية الجملة إطلاقاً في الامتحان الوزاري!'
      };
    }

    if (title.includes('-ed') || title.includes('-ing') || title.includes('adjective')) {
      return {
        leftTitle: 'الصفات المنتهية بـ (-ed)',
        leftRule: 'تصف شعور وإحساس الشخص العاقل (Person’s feeling / emotion)',
        leftExample: 'She was very frightened when she saw the spider.',
        rightTitle: 'الصفات المنتهية بـ (-ing)',
        rightRule: 'تصف الشيء أو الشخص المسبب للشعور (The cause / giver of feeling)',
        rightExample: 'It was the most exciting movie I have ever watched.',
        trap: 'إذا جاء بعد القوس اسم موصوف مباشرة مثل (book / movie / person / day)، اختر دائماً صفة (-ing) دون تردد!'
      };
    }

    if (title.includes('used to')) {
      return {
        leftTitle: 'صيغة الإثبات (Used to + inf)',
        leftRule: 'تستخدم لعادة كانت موجودة في الماضي وتوقفت الآن.',
        leftExample: 'He used to smoke, but he gave it up last year.',
        rightTitle: 'صيغة النفي (Didn’t use to + inf)',
        rightRule: 'تستخدم لعادة لم تكن موجودة، وانتبه لحذف حرف (d) بعد didn’t!',
        rightExample: 'She didn’t use to wear glasses, but now she does.',
        trap: 'في النفي والاستفهام نكتب use to بدون حرف d!'
      };
    }

    if (title.includes('must') || title.includes('have to') || title.includes('need to')) {
      return {
        leftTitle: 'الإلزام والضرورة (Must / Have to / Need to)',
        leftRule: 'يأتي بعدها فعل مجرد للتعبير عن الإلزام القانوني أو الأمني.',
        leftExample: 'You must put on your seat belt when in a car.',
        rightTitle: 'المنع والتحذير القطعي (Mustn’t)',
        rightRule: 'تعني أن الفعل ممنوع قانونياً أو يسبب خطراً كارثياً (Smoking in hospital).',
        rightExample: 'You mustn’t smoke in the police station or hospital.',
        trap: 'كلمة (needn’t) لا تأخذ حرف (to) إطلاقاً! نقول You needn’t go.'
      };
    }

    if (title.includes('if') || title.includes('conditional')) {
      return {
        leftTitle: 'الشرطية الثانية (Second Conditional)',
        leftRule: 'جملة فعل الشرط (If) ماضٍ بسيط ➔ وجواب الشرط (would + inf)',
        leftExample: 'If I had a lot of money, I would buy a sports car.',
        rightTitle: 'الشرطية الثالثة (Third Conditional)',
        rightRule: 'جملة فعل الشرط ماضٍ تام (had + p.p) ➔ وجواب الشرط (would have + p.p)',
        rightExample: 'If I had known about your problem, I would have helped you.',
        trap: 'إذا وجدْت (would + have + p.p) فالطرف الآخر حتماً ماضٍ تام (had + p.p).'
      };
    }

    // Default Universal Contrast
    return {
      leftTitle: 'الصياغة القياسية المعتمدة',
      leftRule: 'تطبيق القاعدة المباشرة وفق جدول الأزمنة والأدوات المعطاة في الدرس.',
      leftExample: lesson.examples[0]?.en || 'Apply standard grammatical formulas consistently.',
      rightTitle: 'الاستثناءات والتحويل الوزاري',
      rightRule: 'مراعاة مطابقة الفاعل، علامات الترقيم، وحذف الدلائل عند السؤال.',
      rightExample: lesson.examples[1]?.en || 'Mind irregular verbs and pronoun transformations.',
      trap: 'راجع إملاء الكلمات المحولة لتجنب خصم نصف الدرجة في الدفتر الامتحاني.'
    };
  };

  const contrast = getContrastMatrix();

  // Stepper model solver
  const solverSteps = [
    {
      stepNumber: '01',
      title: 'رصد الكلمة المفتاحية (Signal Trigger)',
      desc: 'قراءة الجملة بدقة وتحديد الأداة أو الزمن أو نوع الفاعل والموصوف.',
      tip: 'حدد موضع الأداة في بداية الجملة أو وسطها.'
    },
    {
      stepNumber: '02',
      title: 'استدعاء المعادلة الرياضية للقاعدة',
      desc: 'تطبيق التوافق الزمني والقواعد النحوية المعتمدة في الملزمة.',
      tip: 'انتبه لإثبات أو نفي الجملة.'
    },
    {
      stepNumber: '03',
      title: 'التحويل والصياغة الإملائية الدقيقة',
      desc: 'كتابة الفعل بالشكل الصحيح مع تصريف الأفعال الشاذة وعلامات الترقيم.',
      tip: 'تأكد من كتابة كل حرف بدقة لضمان الدرجة الكاملة.'
    },
    {
      stepNumber: '04',
      title: 'التدقيق النهائي ومطابقة المعنى',
      desc: 'قراءة الجملة كاملة بعد الحل للتأكد من سلاسة المعنى وتطابقه مع المطلوب.',
      tip: 'قارن حلك مع نموذج الكنترول الوزاري.'
    }
  ];

  const filteredDetailedContent = highYieldOnly
    ? lesson.detailedContent.filter((_, idx) => idx % 2 === 0 || idx === 0)
    : lesson.detailedContent;

  return (
    <div className="space-y-6 text-[#202124]">
      
      {/* Pedagogical Control Bar */}
      <div className="p-4 sm:p-5 bg-white border-4 border-[#202124] text-[#202124] shadow-[6px_6px_0px_#202124] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#405DE6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center font-black text-xl shrink-0">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#F3E6A5] text-[#202124] text-[10px] font-mono font-black tracking-wider uppercase border border-[#202124]">
                ACADEMIC DISSECTION ENGINE
              </span>
              <span className="text-xs font-mono font-bold text-[#202124]/60">• تفصيل وشرح المحتوى</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-[#202124] mt-0.5">
              مختبر الشرح والتفكيك الأكاديمي والوزاري
            </h2>
          </div>
        </div>

        {/* 4 Interactive Pedagogical Lenses */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F7F5EF] border-2 border-[#202124] shadow-[2px_2px_0px_#202124]">
          
          <button
            onClick={() => setActiveLens('dissect')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeLens === 'dissect' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>التفكيك المفهومي</span>
          </button>

          <button
            onClick={() => setActiveLens('mindmap')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeLens === 'mindmap' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>الخريطة الشجرية</span>
          </button>

          <button
            onClick={() => setActiveLens('contrast')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeLens === 'contrast' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>مصفوفة المقارنة</span>
          </button>

          <button
            onClick={() => setActiveLens('stepper')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border-2 ${
              activeLens === 'stepper' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>خوارزمية الحل</span>
          </button>

        </div>

      </div>

      {/* LENS 1: CONCEPT DISSECTION (التفكيك المفهومي الذكي) */}
      {activeLens === 'dissect' && (
        <div className="space-y-4">
          
          {/* High-yield filter toggle & Quick actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-800">
                طريقة التفكيك المفهومي: بطاقات تفاعلية مستقلة مع ميزة الفحص الذاتي
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHighYieldOnly(!highYieldOnly)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                  highYieldOnly 
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black' 
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{highYieldOnly ? 'إظهار كامل التفاصيل' : 'تفعيل وضع الزبدة الوزارية'}</span>
              </button>
            </div>
          </div>

          {/* Dissected Content Cards */}
          <div className="grid grid-cols-1 gap-3.5">
            {filteredDetailedContent.map((point, idx) => {
              const isHidden = hiddenNotes[idx] || false;
              const isUnderstood = understoodPoints[idx] || false;

              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-3xl border transition-all duration-200 shadow-xs space-y-3.5 ${
                    isUnderstood 
                      ? 'bg-emerald-50/50 border-emerald-200' 
                      : 'bg-white border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                        isUnderstood ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white'
                      }`}>
                        {idx + 1}
                      </div>
                      
                      <span className="text-xs font-black text-slate-800">
                        {idx === 0 ? 'القاعدة التأسيسية للموضوع' : `الفرع والتطبيق الوزاري رقم (${idx + 1})`}
                      </span>

                      {point.includes('ص') && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 font-bold">
                          توثيق ملزمة الوزاري
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Self-Test Shield Button */}
                      <button
                        onClick={() => toggleHidden(idx)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1"
                        title={isHidden ? 'إظهار الشرح' : 'إخفاء الشرح لاختبار الاستذكار'}
                      >
                        {isHidden ? <Eye className="w-3.5 h-3.5 text-indigo-600" /> : <EyeOff className="w-3.5 h-3.5 text-slate-500" />}
                        <span className="hidden sm:inline text-[11px]">{isHidden ? 'كشف' : 'تسميع ذهني'}</span>
                      </button>

                      {/* Speak Text */}
                      <button
                        onClick={() => handleSpeak(point)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
                        title="استماع صوتي"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Mastery Check Button */}
                      <button
                        onClick={() => toggleUnderstood(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isUnderstood 
                            ? 'bg-emerald-600 text-white shadow-2xs font-black' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>{isUnderstood ? 'تم الاستيعاب ✓' : 'تأكيد الفهم'}</span>
                      </button>
                    </div>

                  </div>

                  {/* Body Content with conditional blur for active self-testing */}
                  <div className={`transition-all duration-300 ${isHidden ? 'filter blur-md select-none opacity-40' : ''}`}>
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                      {point}
                    </p>
                  </div>

                  {isHidden && (
                    <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-center">
                      <p className="text-xs font-bold text-indigo-900">
                        🔒 النص مخفي الآن. حاول استذكار القاعدة وشروطها غيباً ثم اضغط "كشف" للمطابقة.
                      </p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* LENS 2: VISUAL LOGIC MINDMAP (الخريطة الذهنية والشجرة المنطقية) */}
      {activeLens === 'mindmap' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base font-black text-slate-900">
                الشجرة المنطقية والخريطة الهيكلية للدرس
              </h3>
            </div>
            <span className="text-xs text-slate-500">اضغط على أي عقدة لاستعراض تفاصيلها</span>
          </div>

          {/* Visual Node Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Root Hub Node */}
            <div 
              onClick={() => setSelectedMindNode(0)}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedMindNode === 0 
                  ? 'border-indigo-600 bg-indigo-50/80 shadow-md ring-2 ring-indigo-600/20' 
                  : 'border-slate-200 hover:border-slate-400 bg-white'
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-600 text-white">
                الجذر المركزي
              </span>
              <h4 className="text-base font-black text-slate-900 mt-2">
                {lesson.titleAr}
              </h4>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {lesson.summary}
              </p>
            </div>

            {/* Branch Nodes */}
            {mindNodes.slice(1, 4).map((node) => (
              <div 
                key={node.id}
                onClick={() => setSelectedMindNode(node.id)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedMindNode === node.id 
                    ? 'border-indigo-600 bg-indigo-50/80 shadow-md ring-2 ring-indigo-600/20' 
                    : 'border-slate-200 hover:border-slate-400 bg-white'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  {node.badge}
                </span>
                <h4 className="text-sm font-black text-slate-900 mt-2">
                  {node.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {node.summary}
                </p>
              </div>
            ))}

            {/* Traps Node */}
            <div 
              onClick={() => setSelectedMindNode(5)}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedMindNode === 5 
                  ? 'border-rose-600 bg-rose-50/80 shadow-md ring-2 ring-rose-600/20' 
                  : 'border-rose-200 hover:border-rose-400 bg-rose-50/30'
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-600 text-white">
                الفخاخ والشواذ
              </span>
              <h4 className="text-sm font-black text-rose-950 mt-2">
                محاذير الامتحان الوزاري
              </h4>
              <p className="text-xs text-rose-700 mt-1 line-clamp-2">
                تجنب الأخطاء الشائعة والشواذ.
              </p>
            </div>

          </div>

          {/* Active Node Detail Inspector */}
          {selectedMindNode !== null && (
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300">
                  تفصيل العقدة المختارة في الخريطة الذهنية:
                </span>
                <button
                  onClick={() => handleSpeak(mindNodes[selectedMindNode]?.details || '')}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>استماع</span>
                </button>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-100 font-medium">
                {mindNodes[selectedMindNode]?.details}
              </p>
            </div>
          )}

        </div>
      )}

      {/* LENS 3: DUAL CONTRAST & COMPARISON MATRIX (مصفوفة المقارنة والفروقات) */}
      {activeLens === 'contrast' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowLeftRight className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base font-black text-slate-900">
                مصفوفة المقارنة المزدوجة والفروقات الدقيقة
              </h3>
            </div>
            <span className="text-xs text-slate-500">حسم حالات الشك الوزارية</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Left Case */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-black">
                  الحالة الأولى [أ]
                </span>
                <span className="text-xs font-bold text-blue-900">الصيغة والشرط</span>
              </div>

              <h4 className="text-base font-black text-blue-950">
                {contrast.leftTitle}
              </h4>

              <p className="text-xs sm:text-sm text-blue-900 leading-relaxed font-medium">
                {contrast.leftRule}
              </p>

              <div dir="ltr" className="p-3 rounded-xl bg-white border border-blue-200 text-xs font-mono font-bold text-blue-950 text-left en-sentence">
                {contrast.leftExample}
              </div>
            </div>

            {/* Right Case */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-black">
                  الحالة المقابلة [ب]
                </span>
                <span className="text-xs font-bold text-emerald-900">الصيغة والشرط</span>
              </div>

              <h4 className="text-base font-black text-emerald-950">
                {contrast.rightTitle}
              </h4>

              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                {contrast.rightRule}
              </p>

              <div dir="ltr" className="p-3 rounded-xl bg-white border border-emerald-200 text-xs font-mono font-bold text-emerald-950 text-left en-sentence">
                {contrast.rightExample}
              </div>
            </div>

          </div>

          {/* Golden Trap Alert */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-black text-rose-950 block">
                الفخ الوزاري الحاسم للمقارنة:
              </span>
              <p className="text-xs sm:text-sm text-rose-900 mt-0.5 leading-relaxed font-medium">
                {contrast.trap}
              </p>
            </div>
          </div>

        </div>
      )}

      {/* LENS 4: STEPPER PROBLEM SOLVER (خوارزمية الحل الوزاري بالخطوات) */}
      {activeLens === 'stepper' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base font-black text-slate-900">
                خوارزمية التفكير للحل النموذجي بالدفتر الامتحاني
              </h3>
            </div>
            <span className="text-xs text-slate-500">4 خطوات ذهبية لضمان الدرجة الكاملة</span>
          </div>

          {/* Stepper Interactive Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {solverSteps.map((step, idx) => {
              const isActive = activeStepIdx === idx;

              return (
                <div 
                  key={step.stepNumber}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    isActive 
                      ? 'border-indigo-600 bg-indigo-50/90 shadow-md ring-2 ring-indigo-600/20' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-black text-xs px-2 py-0.5 rounded-md bg-slate-900 text-white">
                        خطوة {step.stepNumber}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                      )}
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-indigo-700">
                    💡 {step.tip}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stepper Active Simulation Preview */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-amber-300 block">
              تطبيق خوارزمية الحل على مثال وزاري من الدرس:
            </span>
            <p dir="ltr" className="font-mono text-xs sm:text-sm text-emerald-300 bg-slate-950 p-3 rounded-xl border border-slate-800 text-left en-sentence">
              Example: {lesson.examples[0]?.en || 'I was walking when I saw the accident.'}
            </p>
            <p className="text-xs text-slate-300">
              المعنى والتعليل: {lesson.examples[0]?.ar || 'تم التحويل بتطبيق قاعدة الدرس نصاً ومطابقة الأدوات المعطاة.'}
            </p>
          </div>

        </div>
      )}

      {/* Teacher's Golden Notes Callout (الأستاذ مصطفى تركي) */}
      {lesson.teacherNotes && lesson.teacherNotes.length > 0 && (
        <div 
          id="teacher-golden-notes-box"
          className="p-6 sm:p-7 bg-[#F3E6A5]/30 border-4 border-[#202124] shadow-[6px_6px_0px_#202124] space-y-3.5"
        >
          <div className="flex items-center gap-2 text-[#202124] font-black text-sm sm:text-base border-b-2 border-[#202124] pb-2">
            <Lightbulb className="w-5 h-5 text-[#405DE6] fill-[#405DE6]" />
            <span>ملاحظات الأستاذ مصطفى تركي الذهبية للوزاري 2026/2027</span>
          </div>

          <div className="space-y-2.5">
            {lesson.teacherNotes.map((note, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202124] font-bold leading-relaxed bg-white p-3 border-2 border-[#202124] shadow-[2px_2px_0px_#202124]">
                <span className="text-[#F2A18E] font-mono font-black shrink-0 text-base">✦</span>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Common Ministerial Traps (فخاخ وزارية احذر منها) */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <div 
          id="common-mistakes-box"
          className="p-6 sm:p-7 bg-[#F2A18E]/15 border-4 border-[#202124] shadow-[6px_6px_0px_#202124] space-y-3.5"
        >
          <div className="flex items-center gap-2 text-[#202124] font-black text-sm sm:text-base border-b-2 border-[#202124] pb-2">
            <ShieldAlert className="w-5 h-5 text-[#F2A18E]" />
            <span>فخاخ وزارية شائعة احذر الوقوع بها في الدفتر الامتحاني</span>
          </div>

          <div className="space-y-2.5">
            {lesson.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202124] leading-relaxed bg-white p-3 border-2 border-[#202124] shadow-[2px_2px_0px_#202124] font-bold">
                <X className="w-4 h-4 text-[#F2A18E] shrink-0 mt-0.5 font-black" />
                <p>{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
