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
        badgeColor: 'bg-yellow',
      };
    }
    if (id.includes('u1-l10')) {
      return {
        protagonist: 'الطفل مصطفى أحمد (Mustafa Ahmed - 4 years old)',
        location: 'المنزل - صباحاً (His family house)',
        crisis: 'فقدان والدته لطيفة للوعي بسبب انخفاض السكر (Insulin drop)',
        savior: 'اتصل بالطوارئ 999 بهدوء وفتح الباب للمسعفين',
        keyTheme: 'سرعة البديهة والذكاء والشجاعة للأطفال',
        badgeColor: 'bg-coral',
      };
    }
    if (id.includes('u2-l8')) {
      return {
        protagonist: 'جهاز الرادار وكواشف السرعة (Radar & Speed Guns)',
        location: 'الحرب العالمية الثانية وحتى الطرق السريعة اليوم',
        crisis: 'رصد طائرات وسفن العدو ثم تنظيم سرعة الطرق وتقليل الحوادث',
        savior: 'الصيانة الدورية والفحص المستمر للأجهزة لمنع الأخطاء',
        keyTheme: 'التكنولوجيا الأمنية وحماية أرواح المسافرين',
        badgeColor: 'bg-blue-mist',
      };
    }
    if (id.includes('u3-l3')) {
      return {
        protagonist: 'المترجمة الفورية سميرة المحمود (Samira Al-Mahmoud)',
        location: 'قاعات المؤتمرات الدولية - منظمة اليونسكو',
        crisis: 'الضغط النفسي العالي والتفكير تحت وطأة الوقت',
        savior: 'سماع الأخبار يومياً وقراءة الصحف والاطلاع العام الدائم',
        keyTheme: 'الترجمة الفورية ليست كلمة بكلمة بل نقل الفكرة والمعنى',
        badgeColor: 'bg-lavender',
      };
    }
    if (id.includes('u5-l9')) {
      return {
        protagonist: 'الجميع - مدمنو العمل وضغوط الحياة (Workaholics)',
        location: 'الحياة المهنية اليومية والصحة النفسية والجسدية',
        crisis: 'الإجهاد المزمن والجلطات وأمراض ضغط الدم بسبب عدم أخذ عطلة',
        savior: 'أخذ إجازات منتظمة وترك الهاتف والعمل جانباً لقضاء وقت عائلي',
        keyTheme: 'العطلات ليست رفاهية بل ضرورة بيولوجية للبقاء والتركيز',
        badgeColor: 'bg-soft-mint',
      };
    }
    if (id.includes('u6-l3')) {
      return {
        protagonist: 'موظف البنك (The Bank Officer / Banker)',
        location: 'فروع المصارف ومكاتب خدمة العملاء والشركات',
        crisis: 'صعوبة رفض بعض القروض وتنوع التعامل اليومي مع الزبائن',
        savior: 'مهارات التواصل الممتازة والبراعة في الرياضيات والرسوم البيانية',
        keyTheme: 'تنوع العمل المصرفي ومساعدة المشاريع على التطور والنجاح',
        badgeColor: 'bg-soft-mint',
      };
    }
    if (id.includes('u6-l9')) {
      return {
        protagonist: 'المستثمرون والمودعون (Savers & Investors)',
        location: 'حسابات التوفير، البورصة، وصناديق التقاعد والعقارات',
        crisis: 'مخاطر الأسهم والتضخم المالي والحاجة لضمان حياة كريمة عند الكبر',
        savior: 'الاستثمار العقاري الأكثر أماناً وحسابات التوفير طويلة الأجل',
        keyTheme: 'ادخار المال ثقافة ذكية تبدأ مبكراً لضمان المستقبل والتقاعد',
        badgeColor: 'bg-yellow',
      };
    }
    if (id.includes('u7-l9')) {
      return {
        protagonist: 'الباحث عن وظيفة جديدة (Job Seeker at Library)',
        location: 'المكتبة المركزية في بغداد (Central Library of Baghdad)',
        crisis: 'الحاجة لتغيير المسار الوظيفي وتطوير مهارات اللغات والإنترنت',
        savior: 'كتب المهن، صحف إعلانات التوظيف، وحواسيب المكتبة المجانية',
        keyTheme: 'المكتبة كنز معرفي مجاني لتطوير المهارات والحصول على فرص عمل',
        badgeColor: 'bg-coral',
      };
    }
    if (id.includes('u8-l3')) {
      return {
        protagonist: 'طاقة الرياح وتوربينات الهواء (Wind Turbines)',
        location: 'المزارع البرية والمنصات البحرية المفتوحة',
        crisis: 'انبعاثات الغازات الدفيئة وتلوث الوقود الأحفوري التقليدي',
        savior: 'شفرات توربينات الرياح النظيفة التي تشغل القليل من الأراضي',
        keyTheme: 'طاقة خضراء متجددة لا تلوث الهواء ولا تنتج نفايات بيئية',
        badgeColor: 'bg-soft-mint',
      };
    }
    // Default fallback
    return {
      protagonist: 'قطعة الكتاب المقررة',
      location: 'منهج اللغة الإنكليزية للصف السادس الإعدادي',
      crisis: 'الأسئلة الاستيعابية وتحليل تفاصيل القصة بالامتحان',
      savior: 'حفظ الكلمات المفتاحية وأسئلة القطعة بإتقان ودقة',
      keyTheme: 'الفهم العميق للنص الإنجليزي وتفادي الأخطاء الإملائية',
      badgeColor: 'bg-blue-mist',
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
        descAr: 'الخلاصة والإجابات النموذجية في أسئلة الامتحان.',
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
    <div className="bg-surface border-2 border-ink text-ink p-6 sm:p-8 shadow-brutal-action space-y-6 relative overflow-hidden rounded-md">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink pb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 bg-cobalt text-surface border-2 border-ink shadow-brutal-sm flex items-center justify-center font-black text-xl shrink-0 rounded">
            <BookOpen className="w-6 h-6 text-surface" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-yellow text-ink border border-ink text-[10px] font-mono font-black uppercase tracking-wider rounded-sm">
                READING COMPREHENSION DOSSIER
              </span>
              <span className="text-xs font-mono font-bold text-muted-gray">• ملف استيعاب القصة</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-ink mt-1 tracking-tight">
              الملف التحليلي والاستيعابي الشامل لقطعة الكتاب
            </h2>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-paper border-2 border-ink shadow-brutal-sm w-full sm:w-auto rounded">
          <button
            type="button"
            onClick={() => setActiveTab('dossier')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 cursor-pointer rounded-sm shrink-0 ${
              activeTab === 'dossier' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>البطاقة</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 cursor-pointer rounded-sm shrink-0 ${
              activeTab === 'timeline' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Milestone className="w-3.5 h-3.5 shrink-0" />
            <span>الخط الزمني</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 cursor-pointer rounded-sm shrink-0 ${
              activeTab === 'flashcards' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5 shrink-0" />
            <span>البطاقات القلابة</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('drill')}
            className={`px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 border-2 cursor-pointer rounded-sm shrink-0 ${
              activeTab === 'drill' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 shrink-0" />
            <span>تحدي الصح والخطأ</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Dossier Card */}
      {activeTab === 'dossier' && (
        <div className="p-5 sm:p-6 rounded-md bg-paper border-2 border-ink shadow-brutal-callout relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/15 pb-3">
            <div className="flex items-center gap-2 text-ink font-extrabold text-sm">
              <FileText className="w-4 h-4 text-cobalt shrink-0" />
              <span>بطاقة بيانات القصة (Story Dossier Card)</span>
            </div>
            <span className="text-[11px] text-muted-gray font-mono font-bold">Exam Reading Digest</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded bg-surface border border-ink shadow-brutal-sm space-y-1 min-w-0">
              <span className="text-muted-gray font-bold flex items-center gap-1.5 text-xs">
                <User className="w-3.5 h-3.5 text-cobalt shrink-0" />
                الشخصية / البطل الرئيسي
              </span>
              <p className="font-bold text-ink text-xs sm:text-sm break-words">{meta.protagonist}</p>
            </div>

            <div className="p-3.5 rounded bg-surface border border-ink shadow-brutal-sm space-y-1 min-w-0">
              <span className="text-muted-gray font-bold flex items-center gap-1.5 text-xs">
                <MapPin className="w-3.5 h-3.5 text-cobalt shrink-0" />
                مسرح الأحداث / المكان
              </span>
              <p className="font-bold text-ink text-xs sm:text-sm break-words">{meta.location}</p>
            </div>

            <div className="p-3.5 rounded bg-answer-review-bg border border-ink shadow-brutal-sm space-y-1 min-w-0">
              <span className="text-semantic-error font-bold flex items-center gap-1.5 text-xs">
                <ShieldAlert className="w-3.5 h-3.5 text-semantic-error shrink-0" />
                الأزمة / الصراع المحوري
              </span>
              <p className="font-bold text-ink text-xs sm:text-sm break-words">{meta.crisis}</p>
            </div>

            <div className="p-3.5 rounded bg-answer-correct-bg border border-ink shadow-brutal-sm sm:col-span-2 lg:col-span-2 space-y-1 min-w-0">
              <span className="text-semantic-success font-bold flex items-center gap-1.5 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-semantic-success shrink-0" />
                الحل والإنقاذ النموذجي
              </span>
              <p className="font-bold text-ink text-xs sm:text-sm break-words">{meta.savior}</p>
            </div>

            <div className="p-3.5 rounded bg-yellow border border-ink shadow-brutal-sm space-y-1 min-w-0">
              <span className="text-ink font-bold flex items-center gap-1.5 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-cobalt shrink-0" />
                الرسالة والمغزى التربوي
              </span>
              <p className="font-bold text-ink text-xs sm:text-sm break-words">{meta.keyTheme}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Story Chronological Timeline */}
      {activeTab === 'timeline' && (
        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <Milestone className="w-4 h-4 text-cobalt shrink-0" />
              الخط الزمني لتسلسل أحداث القصة من البداية إلى النهاية:
            </span>
            <span className="text-[11px] font-bold text-muted-gray">تتبع الأحداث يسهل تذكر الإجابات</span>
          </div>

          <div className="relative border-r-2 border-ink mr-3 space-y-5 pr-5">
            {timeline.map((event, idx) => (
              <div key={idx} className="relative space-y-2 group">
                {/* Timeline Node Dot */}
                <div className="absolute -right-[29px] top-2 w-4 h-4 rounded-full bg-yellow border-2 border-ink shadow-brutal-press transition-transform group-hover:scale-110" />

                <div className="p-4 rounded-md bg-paper border-2 border-ink shadow-brutal-sm group-hover:bg-surface transition-all space-y-2 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-sm bg-yellow border border-ink text-ink font-black text-[11px]">
                        {event.phaseAr}
                      </span>
                      <span className="text-xs text-muted-gray font-mono font-bold">({event.timeOrPhase})</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span dir="ltr" className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-soft-mint text-ink border border-ink break-words">
                        مفتاح السؤال: {event.ministerialKey}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleSpeak(`timeline-${idx}`, event.descEn)}
                        aria-label="استمع للنطق"
                        className={`p-1.5 rounded border border-ink shadow-brutal-press cursor-pointer transition-all shrink-0 ${
                          speakingId === `timeline-${idx}`
                            ? 'bg-cobalt text-surface animate-pulse'
                            : 'bg-surface text-ink hover:bg-yellow'
                        }`}
                        title="استمع للنطق"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p dir="ltr" className="font-mono text-xs sm:text-sm font-bold text-ink text-left break-words">
                    {event.descEn}
                  </p>

                  <p className="text-xs font-medium text-muted-gray leading-relaxed">
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
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-ink flex items-center gap-2">
                <RotateCw className="w-4 h-4 text-cobalt shrink-0" />
                <span>بطاقات الحفظ الذكي القلابة (Flip Flashcards)</span>
              </h3>
              <p className="text-xs font-medium text-muted-gray">
                اضغط على البطاقة لقلبها وقراءة الإجابة النموذجية
              </p>
            </div>
            <span className="text-xs font-black px-2.5 py-1 rounded-sm bg-yellow text-ink border border-ink shadow-brutal-press">
              {flashcards.length} بطاقات
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {flashcards.map((card) => {
              const isFlipped = flippedCardId === card.id;

              return (
                <div
                  key={card.id}
                  className={`relative rounded-md border-2 border-ink shadow-brutal-sm transition-all ${
                    isFlipped
                      ? 'bg-yellow text-ink'
                      : 'bg-paper hover:bg-surface text-ink'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleSpeak(card.id, isFlipped ? card.a : card.q)}
                    aria-label="استمع للنطق الإنجليزي"
                    className={`absolute top-4 left-4 z-10 p-1.5 rounded border border-ink shadow-brutal-press cursor-pointer transition-all ${
                      speakingId === card.id
                        ? 'bg-cobalt text-surface animate-pulse'
                        : 'bg-surface text-ink hover:bg-blue-mist'
                    }`}
                    title="استمع للنطق الإنجليزي"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleFlip(card.id)}
                    className="w-full p-5 pl-14 text-right cursor-pointer min-h-[140px] flex flex-col justify-between gap-3 rounded-md focus-visible:outline-none"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-sm border border-ink ${
                        isFlipped ? 'bg-cobalt text-surface' : 'bg-surface text-ink'
                      }`}>
                        {isFlipped ? 'الإجابة النموذجية' : 'سؤال القطعة'}
                      </span>
                      {card.note && (
                        <span className="text-[10px] font-bold text-muted-gray">{card.note}</span>
                      )}
                    </div>

                    <div className="w-full min-w-0">
                      {isFlipped ? (
                        <p className="text-xs sm:text-sm font-bold text-ink leading-relaxed break-words">
                          {card.a}
                        </p>
                      ) : (
                        <p dir="ltr" className="font-mono text-xs sm:text-sm font-bold text-ink text-left leading-snug break-words">
                          {card.q}
                        </p>
                      )}
                    </div>

                    <div className="w-full flex items-center justify-between text-[10px] font-bold text-muted-gray">
                      <span>{isFlipped ? 'اضغط للعودة إلى السؤال' : 'اضغط لإظهار الإجابة النموذجية'}</span>
                      <RotateCw className="w-3.5 h-3.5 text-ink shrink-0" />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Rapid True/False Comprehension Drill */}
      {activeTab === 'drill' && (
        <div className="p-5 rounded-md bg-paper border-2 border-ink shadow-brutal-callout relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-ink">
            <HelpCircle className="w-4 h-4 text-cobalt shrink-0" />
            <span>تحدي صح أو خطأ السريع (True / False Rapid Drill)</span>
          </div>

          <div className="space-y-2.5">
            {tfStatements.map((stmt, idx) => {
              const answered = selectedTfAnswers[idx] !== undefined;
              const userChoice = selectedTfAnswers[idx];
              const isCorrect = userChoice === stmt.correct;

              return (
                <div key={idx} className="p-3.5 rounded bg-surface border border-ink shadow-brutal-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 min-w-0 flex-1">
                    <p dir="ltr" className="font-mono text-xs sm:text-sm font-bold text-ink text-left break-words">
                      {stmt.q}
                    </p>
                    {answered && (
                      <p dir="ltr" className={`text-xs text-left break-words ${isCorrect ? 'text-semantic-success font-bold' : 'text-semantic-error font-bold'}`}>
                        {stmt.reason}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      type="button"
                      disabled={answered}
                      onClick={() => setSelectedTfAnswers(prev => ({ ...prev, [idx]: true }))}
                      className={`px-3 py-1.5 rounded text-xs font-bold border border-ink shadow-brutal-press cursor-pointer transition-all ${
                        answered 
                          ? stmt.correct === true 
                            ? 'bg-soft-mint text-semantic-success' 
                            : userChoice === true ? 'bg-coral text-semantic-error' : 'bg-paper text-muted-gray opacity-50'
                          : 'bg-paper text-ink hover:bg-soft-mint'
                      }`}
                    >
                      True (صح)
                    </button>

                    <button
                      type="button"
                      disabled={answered}
                      onClick={() => setSelectedTfAnswers(prev => ({ ...prev, [idx]: false }))}
                      className={`px-3 py-1.5 rounded text-xs font-bold border border-ink shadow-brutal-press cursor-pointer transition-all ${
                        answered 
                          ? stmt.correct === false 
                            ? 'bg-soft-mint text-semantic-success' 
                            : userChoice === false ? 'bg-coral text-semantic-error' : 'bg-paper text-muted-gray opacity-50'
                          : 'bg-paper text-ink hover:bg-coral'
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
