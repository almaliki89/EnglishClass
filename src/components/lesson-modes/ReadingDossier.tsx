import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Volume2, RotateCw, CheckCircle2, 
  MapPin, User, ShieldAlert, Award, FileText, Check, X, HelpCircle,
  Clock, Milestone, Compass
} from 'lucide-react';
import { Lesson } from '../../types';
import { speakEnglish } from '../../utils/speech';

interface ReadingDossierProps {
  lesson: Lesson;
}

interface TimelineEvent {
  timeOrPhase: string;
  phaseAr: string;
  descEn: string;
  descAr: string;
  ministerialKey: string;
}

export const ReadingDossier: React.FC<ReadingDossierProps> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<'dossier' | 'timeline' | 'flashcards' | 'drill'>('dossier');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [selectedTfAnswers, setSelectedTfAnswers] = useState<Record<number, boolean>>({});

  const handleSpeak = (id: string, text: string) => {
    setSpeakingId(id);
    speakEnglish(text, () => setSpeakingId(null));
  };

  const toggleFlip = (cardId: string) => {
    setFlippedCardId(prev => prev === cardId ? null : cardId);
  };

  // Extract Story Metadata based on lesson ID
  const getStoryMetadata = () => {
    const id = lesson.id;
    if (id.includes('u1-l3')) {
      return {
        protagonist: 'زيد طارق (Zaid Tariq - 20 years old)',
        location: 'شرم الشيخ، مصر (Sharm El Sheikh, Egypt)',
        crisis: 'هجوم القرش وعض ذراعه (Shark bit his arm)',
        savior: 'ستة دلافين صنعت دائرة + جميل العلاوي خفر السواحل',
        keyTheme: 'البقاء والنجدة السريعة والإسعاف الأولي',
        badgeColor: 'from-amber-600 to-yellow-600',
      };
    }
    if (id.includes('u1-l10')) {
      return {
        protagonist: 'الطفل مصطفى أحمد (Mustafa Ahmed - 4 years old)',
        location: 'المنزل - صباحاً (His family house)',
        crisis: 'فقدان والدته لطيفة للوعي بسبب انخفاض السكر (Insulin drop)',
        savior: 'اتصل بالطوارئ 999 بهدوء وفتح الباب للمسعفين',
        keyTheme: 'سرعة البديهة والذكاء والشجاعة للأطفال',
        badgeColor: 'from-rose-600 to-red-600',
      };
    }
    if (id.includes('u2-l8')) {
      return {
        protagonist: 'جهاز الرادار وكواشف السرعة (Radar & Speed Guns)',
        location: 'الحرب العالمية الثانية وحتى الطرق السريعة اليوم',
        crisis: 'رصد طائرات وسفن العدو ثم تنظيم سرعة الطرق وتقليل الحوادث',
        savior: 'الصيانة الدورية والفحص المستمر للأجهزة لمنع الأخطاء',
        keyTheme: 'التكنولوجيا الأمنية وحماية أرواح المسافرين',
        badgeColor: 'from-blue-600 to-cyan-600',
      };
    }
    if (id.includes('u3-l3')) {
      return {
        protagonist: 'المترجمة الفورية سميرة المحمود (Samira Al-Mahmoud)',
        location: 'قاعات المؤتمرات الدولية - منظمة اليونسكو',
        crisis: 'الضغط النفسي العالي والتفكير تحت وطأة الوقت',
        savior: 'سماع الأخبار يومياً وقراءة الصحف والاطلاع العام الدائم',
        keyTheme: 'الترجمة الفورية ليست كلمة بكلمة بل نقل الفكرة والمعنى',
        badgeColor: 'from-purple-600 to-indigo-600',
      };
    }
    if (id.includes('u5-l9')) {
      return {
        protagonist: 'الجميع - مدمنو العمل وضغوط الحياة (Workaholics)',
        location: 'الحياة المهنية اليومية والصحة النفسية والجسدية',
        crisis: 'الإجهاد المزمن والجلطات وأمراض ضغط الدم بسبب عدم أخذ عطلة',
        savior: 'أخذ إجازات منتظمة وترك الهاتف والعمل جانباً لقضاء وقت عائلي',
        keyTheme: 'العطلات ليست رفاهية بل ضرورة بيولوجية للبقاء والتركيز',
        badgeColor: 'from-teal-600 to-emerald-600',
      };
    }
    if (id.includes('u6-l3')) {
      return {
        protagonist: 'موظف البنك (The Bank Officer / Banker)',
        location: 'فروع المصارف ومكاتب خدمة العملاء والشركات',
        crisis: 'صعوبة رفض بعض القروض وتنوع التعامل اليومي مع الزبائن',
        savior: 'مهارات التواصل الممتازة والبراعة في الرياضيات والرسوم البيانية',
        keyTheme: 'تنوع العمل المصرفي ومساعدة المشاريع على التطور والنجاح',
        badgeColor: 'from-emerald-600 to-green-600',
      };
    }
    if (id.includes('u6-l9')) {
      return {
        protagonist: 'المستثمرون والمودعون (Savers & Investors)',
        location: 'حسابات التوفير، البورصة، وصناديق التقاعد والعقارات',
        crisis: 'مخاطر الأسهم والتضخم المالي والحاجة لضمان حياة كريمة عند الكبر',
        savior: 'الاستثمار العقاري الأكثر أماناً وحسابات التوفير طويلة الأجل',
        keyTheme: 'ادخار المال ثقافة ذكية تبدأ مبكراً لضمان المستقبل والتقاعد',
        badgeColor: 'from-amber-600 to-orange-600',
      };
    }
    if (id.includes('u7-l9')) {
      return {
        protagonist: 'الباحث عن وظيفة جديدة (Job Seeker at Library)',
        location: 'المكتبة المركزية في بغداد (Central Library of Baghdad)',
        crisis: 'الحاجة لتغيير المسار الوظيفي وتطوير مهارات اللغات والإنترنت',
        savior: 'كتب المهن، صحف إعلانات التوظيف، وحواسيب المكتبة المجانية',
        keyTheme: 'المكتبة كنز معرفي مجاني لتطوير المهارات والحصول على فرص عمل',
        badgeColor: 'from-pink-600 to-rose-600',
      };
    }
    if (id.includes('u8-l3')) {
      return {
        protagonist: 'طاقة الرياح وتوربينات الهواء (Wind Turbines)',
        location: 'المزارع البرية والمنصات البحرية المفتوحة',
        crisis: 'انبعاثات الغازات الدفيئة وتلوث الوقود الأحفوري التقليدي',
        savior: 'شفرات توربينات الرياح النظيفة التي تشغل القليل من الأراضي',
        keyTheme: 'طاقة خضراء متجددة لا تلوث الهواء ولا تنتج نفايات بيئية',
        badgeColor: 'from-teal-600 to-cyan-600',
      };
    }
    // Default fallback
    return {
      protagonist: 'قطعة الكتاب الوزارية المعتمدة',
      location: 'المنهج الرسمي للصف السادس الإعدادي 2027',
      crisis: 'الأسئلة الاستيعابية وتحليل تفاصيل القصة بالامتحان',
      savior: 'حفظ الكلمات المفتاحية وأسئلة القطعة بدقة 100%',
      keyTheme: 'الفهم العميق للنص الإنجليزي وتفادي الأخطاء الإملائية',
      badgeColor: 'from-indigo-600 to-purple-600',
    };
  };

  const meta = getStoryMetadata();

  // Story Chronological Timeline
  const getStoryTimeline = (): TimelineEvent[] => {
    const id = lesson.id;
    if (id.includes('u1-l3')) {
      return [
        {
          timeOrPhase: 'Phase 1',
          phaseAr: 'الهدوء الصباحي',
          descEn: 'Zaid Tariq was floating peacefully on an air bed 150m from shore.',
          descAr: 'كان زيد طارق يطفو بسلام على فراشه الهوائي على بعد 150 متراً من الشاطئ.',
          ministerialKey: '150 meters / air bed',
        },
        {
          timeOrPhase: 'Phase 2',
          phaseAr: 'لحظة الهجوم والخطر',
          descEn: 'A shark bumped into his bed, knocked him into the water, and bit his arm.',
          descAr: 'صدم القرش الفراش، وسقط زيد بالماء فعضه القرش في ذراعه وبدأ ينزف بغزارة.',
          ministerialKey: 'shark bit his arm / bleeding',
        },
        {
          timeOrPhase: 'Phase 3',
          phaseAr: 'الدروع الحية المنقذة',
          descEn: 'Six dolphins made a circle around him and frightened the shark away.',
          descAr: 'صنعت ستة دلافين حلقة حماية حوله وأخافت القرش فهرب بعيداً.',
          ministerialKey: 'six dolphins / made a circle',
        },
        {
          timeOrPhase: 'Phase 4',
          phaseAr: 'الإنقاذ والإسعاف',
          descEn: 'Coastguard Jameel Elalawi rescued him by boat; Ahmed Masri called an ambulance.',
          descAr: 'سمع خفر السواحل جميل العلاوي صراخه وأنقذه بالقارب، وأحمد المصري استدعى الإسعاف.',
          ministerialKey: 'Jameel Elalawi (boat) / Ahmed Masri (ambulance)',
        }
      ];
    }
    if (id.includes('u1-l10')) {
      return [
        {
          timeOrPhase: 'Phase 1',
          phaseAr: 'استيقاظ الصباح والحيرة',
          descEn: '4-year-old Mustafa woke up and went to look for his mother Latifa.',
          descAr: 'استيقظ مصطفى (4 سنوات) وذهب للبحث عن والدته لطيفة التي لم تأتِ لإيقاظه.',
          ministerialKey: 'Mustafa (4 years old) / mother Latifa',
        },
        {
          timeOrPhase: 'Phase 2',
          phaseAr: 'اكتشاف فقدان الوعي',
          descEn: 'He found her unconscious in her bedroom; her blood sugar had dropped severely.',
          descAr: 'وجدها فاقدة للوعي في غرفة نومها بسبب هبوط حاد في نسبة السكر في دمها.',
          ministerialKey: 'unconscious / diabetes (sugar dropped)',
        },
        {
          timeOrPhase: 'Phase 3',
          phaseAr: 'المحاولة الأولى واتصال الطوارئ',
          descEn: 'He tried to give her a sweet cola can, then called the emergency services (999).',
          descAr: 'حاول إعطاءها علبة كولا، ثم تذكر تدريب جدته واتصل برقم الطوارئ 999 بهدوء.',
          ministerialKey: 'can of cola / 999 emergency',
        },
        {
          timeOrPhase: 'Phase 4',
          phaseAr: 'فتح الباب والإنقاذ الطبي',
          descEn: 'He stood on a chair to open the front door for paramedics, who gave her an insulin injection.',
          descAr: 'وقف على كرسي ليفتح الباب للمسعفين الذين حقنوها بجرعة إنسولين فاستعادت وعيها.',
          ministerialKey: 'stood on a chair / insulin injection',
        }
      ];
    }
    // Default timeline
    return [
      {
        timeOrPhase: 'Phase 1',
        phaseAr: 'المقدمة والتمهيد',
        descEn: 'Introduction to the core topic and primary concepts.',
        descAr: 'التعريف بالشخصيات والمفاهيم الأساسية للقطعة الوزارية.',
        ministerialKey: 'Core Concept',
      },
      {
        timeOrPhase: 'Phase 2',
        phaseAr: 'العقدة والأحداث المحورية',
        descEn: 'The central incident or challenge described in the textbook.',
        descAr: 'الحدث الرئيسي والتحديات المذكورة في نص كتاب الطالب.',
        ministerialKey: 'Key Incident',
      },
      {
        timeOrPhase: 'Phase 3',
        phaseAr: 'النتيجة والعبرة الوزارية',
        descEn: 'The outcome and vital takeaways tested in Question 1 Branch B.',
        descAr: 'الخلاصة والإجابات المعتمدة في أسئلة الامتحان الوزاري.',
        ministerialKey: 'Exam Outcome',
      }
    ];
  };

  const timeline = getStoryTimeline();

  // Extract Flashcards from lesson exercises and examples
  const getFlashcards = () => {
    const cards: Array<{ id: string; q: string; a: string; note?: string }> = [];

    // From exercises
    lesson.exercises.forEach((ex, idx) => {
      cards.push({
        id: `card-ex-${idx}`,
        q: ex.question,
        a: `${ex.correctAnswer} — ${ex.explanation}`,
        note: ex.ministerialYear || 'سؤال وزاري متكرر',
      });
    });

    // From examples
    lesson.examples.forEach((item, idx) => {
      cards.push({
        id: `card-samp-${idx}`,
        q: item.en,
        a: item.ar,
        note: item.note || 'نموذج وزاري',
      });
    });

    return cards.slice(0, 6);
  };

  const flashcards = getFlashcards();

  // True/False Rapid Challenge
  const getTrueFalseStatements = () => {
    const id = lesson.id;
    if (id.includes('u1-l3')) {
      return [
        { q: 'Zaid Tariq was bitten by six dolphins.', correct: false, reason: 'False: He was bitten by a shark; six dolphins protected him.' },
        { q: 'Jameel Elalawi heard Tariq\'s screams and rescued him by boat.', correct: true, reason: 'True: Jameel Elalawi was the coastguard who rescued him.' },
      ];
    }
    if (id.includes('u1-l10')) {
      return [
        { q: 'Mustafa\'s mother suffered from high blood pressure.', correct: false, reason: 'False: She suffered from diabetes (مرض السكر).' },
        { q: 'Mustafa told the emergency operator that his mother was sick and needed a doctor.', correct: true, reason: 'True: He spoke calmly to operator Safia Khouri.' },
      ];
    }
    if (id.includes('u2-l8')) {
      return [
        { q: 'Radar can only detect moving objects towards it.', correct: false, reason: 'False: It can detect vehicles moving towards or away from it.' },
        { q: 'Police officers must be trained to use radar guns properly.', correct: true, reason: 'True: Proper training ensures accurate speed readings.' },
      ];
    }
    if (id.includes('u3-l3')) {
      return [
        { q: 'A good conference interpreter translates every single word literally.', correct: false, reason: 'False: An interpreter translates the idea, not literal words.' },
        { q: 'Samira Al-Mahmoud reads newspapers to have good general knowledge.', correct: true, reason: 'True: Daily reading helps in translating diverse international topics.' },
      ];
    }
    return [
      { q: 'Reading comprehension questions require accurate spelling in ministerial exams.', correct: true, reason: 'True: Clear answers prevent mark deductions.' },
      { q: 'Understanding the key characters helps answer Question 1 Branch B directly.', correct: true, reason: 'True: Almost every exam tests the character roles.' },
    ];
  };

  const tfStatements = getTrueFalseStatements();

  return (
    <div className="bg-white border-2 border-[#202124] text-[#202124] p-6 sm:p-8 shadow-[4px_4px_0px_#202124] space-y-6 relative overflow-hidden rounded-lg">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#202124] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#405DE6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124] flex items-center justify-center font-black text-xl shrink-0 rounded">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#F3E6A5] text-[#202124] border border-[#202124] text-[10px] font-mono font-black uppercase tracking-wider rounded-sm">
                READING COMPREHENSION DOSSIER
              </span>
              <span className="text-xs font-mono font-bold text-[#202124]/60">• ملف استيعاب القصة الوزاري</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#202124] mt-1 tracking-tight">
              الملف الأمني والاستيعابي الشامل للقطعة الوزارية
            </h2>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F7F5EF] border-2 border-[#202124] shadow-[2px_2px_0px_#202124] overflow-x-auto no-scrollbar rounded">
          <button
            onClick={() => setActiveTab('dossier')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 cursor-pointer rounded-sm ${
              activeTab === 'dossier' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>البطاقة</span>
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 cursor-pointer rounded-sm ${
              activeTab === 'timeline' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Milestone className="w-3.5 h-3.5" />
            <span>الخط الزمني</span>
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 cursor-pointer rounded-sm ${
              activeTab === 'flashcards' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>البطاقات القلابة</span>
          </button>
          <button
            onClick={() => setActiveTab('drill')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 cursor-pointer rounded-sm ${
              activeTab === 'drill' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>تحدي الصح والخطأ</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Dossier Card */}
      {activeTab === 'dossier' && (
        <div className="p-5 sm:p-6 rounded-2xl bg-stone-900/90 border border-amber-500/30 backdrop-blur-md relative z-10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
              <FileText className="w-4 h-4" />
              <span>بطاقة بيانات القصة (Story Dossier Card)</span>
            </div>
            <span className="text-[11px] text-stone-400 font-mono">Confidential Exam Digest</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-stone-400 font-bold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-400" />
                الشخصية / البطل الرئيسي
              </span>
              <p className="font-bold text-white text-xs sm:text-sm">{meta.protagonist}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-stone-400 font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                مسرح الأحداث / المكان
              </span>
              <p className="font-bold text-white text-xs sm:text-sm">{meta.location}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-stone-400 font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                الأزمة / الصراع الوزاري
              </span>
              <p className="font-bold text-rose-200 text-xs sm:text-sm">{meta.crisis}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 sm:col-span-2 lg:col-span-2 space-y-1">
              <span className="text-stone-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                الحل والإنقاذ الوزاري المعتمد
              </span>
              <p className="font-bold text-emerald-200 text-xs sm:text-sm">{meta.savior}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-stone-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                الرسالة والمغزى التربوي
              </span>
              <p className="font-bold text-amber-200 text-xs sm:text-sm">{meta.keyTheme}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Story Chronological Timeline */}
      {activeTab === 'timeline' && (
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Milestone className="w-4 h-4 text-amber-400" />
              الخط الزمني لتسلسل أحداث القصة من البداية إلى النهاية:
            </span>
            <span className="text-[11px] text-stone-400">تتبع الأحداث يسهل تذكر الإجابات</span>
          </div>

          <div className="relative border-r-2 border-amber-500/40 mr-4 space-y-6 pr-6">
            {timeline.map((event, idx) => (
              <div key={idx} className="relative space-y-2 group">
                {/* Timeline Node Dot */}
                <div className="absolute -right-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-4 border-stone-900 shadow-md group-hover:scale-125 transition-transform" />

                <div className="p-4 rounded-2xl bg-stone-900/90 border border-white/10 group-hover:border-amber-400/50 transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-black text-[11px]">
                        {event.phaseAr}
                      </span>
                      <span className="text-xs text-stone-400 font-mono">({event.timeOrPhase})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        مفتاح الوزاري: {event.ministerialKey}
                      </span>
                      <button
                        onClick={() => handleSpeak(`timeline-${idx}`, event.descEn)}
                        className={`p-1.5 rounded-lg border transition-all ${
                          speakingId === `timeline-${idx}`
                            ? 'bg-amber-400 text-stone-950 border-amber-400 animate-pulse'
                            : 'bg-white/10 text-stone-300 border-white/10 hover:bg-white/20'
                        }`}
                        title="استمع للنطق"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="font-mono text-xs sm:text-sm font-bold text-amber-100 dir-ltr text-right">
                    {event.descEn}
                  </p>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {event.descAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Flip Flashcard Deck */}
      {activeTab === 'flashcards' && (
        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <RotateCw className="w-4 h-4 text-amber-400" />
                <span>بطاقات الحفظ الذكي القلابة (Flip Flashcards)</span>
              </h3>
              <p className="text-xs text-stone-400">
                اضغط على البطاقة لقلبها وقراءة الإجابة النموذجية المعتمدة بالكنترول
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
              {flashcards.length} بطاقات
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {flashcards.map((card) => {
              const isFlipped = flippedCardId === card.id;

              return (
                <div 
                  key={card.id}
                  onClick={() => toggleFlip(card.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 min-h-[140px] flex flex-col justify-between ${
                    isFlipped 
                      ? 'bg-gradient-to-br from-amber-900/70 to-stone-900 border-amber-400 text-white shadow-lg' 
                      : 'bg-white/5 border-white/10 hover:border-amber-400/50 hover:bg-white/10 text-stone-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                        isFlipped ? 'bg-amber-400 text-stone-950 font-black' : 'bg-white/10 text-amber-300'
                      }`}>
                        {isFlipped ? 'الإجابة النموذجية' : 'السؤال الوزاري'}
                      </span>
                      {card.note && (
                        <span className="text-[10px] text-stone-400">{card.note}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => handleSpeak(card.id, isFlipped ? card.a : card.q)}
                        className={`p-1.5 rounded-lg border transition-all ${
                          speakingId === card.id 
                            ? 'bg-amber-400 text-stone-950 border-amber-400 animate-pulse' 
                            : 'bg-white/10 text-stone-300 border-white/10 hover:bg-white/20'
                        }`}
                        title="استمع للنطق الإنجليزي"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-stone-500 text-[11px] hover:text-amber-300">
                        <RotateCw className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="my-2">
                    {isFlipped ? (
                      <p className="text-xs sm:text-sm font-semibold text-amber-100 leading-relaxed">
                        {card.a}
                      </p>
                    ) : (
                      <p className="font-mono text-xs sm:text-sm font-bold text-white dir-ltr text-right leading-snug">
                        {card.q}
                      </p>
                    )}
                  </div>

                  <div className="text-left text-[10px] text-stone-400">
                    {isFlipped ? 'اضغط للعودة إلى السؤال' : 'اضغط لإظهار الإجابة الوزارية'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Rapid True/False Comprehension Drill */}
      {activeTab === 'drill' && (
        <div className="p-5 rounded-2xl bg-black/40 border border-white/10 relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <HelpCircle className="w-4 h-4" />
            <span>تحدي صح أو خطأ السريع (True / False Rapid Drill)</span>
          </div>

          <div className="space-y-2.5">
            {tfStatements.map((stmt, idx) => {
              const answered = selectedTfAnswers[idx] !== undefined;
              const userChoice = selectedTfAnswers[idx];
              const isCorrect = userChoice === stmt.correct;

              return (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <p className="font-mono text-xs sm:text-sm font-bold text-white dir-ltr text-right">
                      {stmt.q}
                    </p>
                    {answered && (
                      <p className={`text-xs ${isCorrect ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}`}>
                        {stmt.reason}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      disabled={answered}
                      onClick={() => setSelectedTfAnswers(prev => ({ ...prev, [idx]: true }))}
                      className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                        answered 
                          ? stmt.correct === true 
                            ? 'bg-emerald-600 text-white border-emerald-500' 
                            : userChoice === true ? 'bg-rose-600 text-white border-rose-500' : 'opacity-40'
                          : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                      }`}
                    >
                      True (صح)
                    </button>

                    <button
                      disabled={answered}
                      onClick={() => setSelectedTfAnswers(prev => ({ ...prev, [idx]: false }))}
                      className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                        answered 
                          ? stmt.correct === false 
                            ? 'bg-emerald-600 text-white border-emerald-500' 
                            : userChoice === false ? 'bg-rose-600 text-white border-rose-500' : 'opacity-40'
                          : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                      }`}
                    >
                      False (خطأ)
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
