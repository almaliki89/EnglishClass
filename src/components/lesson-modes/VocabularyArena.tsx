import React, { useState } from 'react';
import { 
  Compass, CheckCircle2, RotateCcw, Volume2, Sparkles, 
  HelpCircle, Check, X, Award, Lightbulb, Gamepad2, FileText, Layers,
  Activity, Bone, Thermometer, Bandage, AlertCircle, Radar,
  ShieldAlert, Scan, Footprints, Lock, LifeBuoy, HeartPulse,
  Ticket, Utensils, Car, Receipt, Wallet, CreditCard, Coins,
  GraduationCap, BookOpen, SunMedium, Sprout, Recycle, ShieldCheck,
  Puzzle, Eye
} from 'lucide-react';
import { Lesson } from '../../types';
import { speakEnglish } from '../../utils/speech';
import { VISUAL_VOCABULARY_ITEMS, VisualVocabItem } from '../../data/visualVocabData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Activity, Bone, Thermometer, Bandage, AlertCircle, Radar,
  ShieldAlert, Scan, Footprints, Lock, Compass, LifeBuoy,
  HeartPulse, Ticket, Utensils, Car, Receipt, Wallet,
  CreditCard, Coins, GraduationCap, BookOpen, SunMedium,
  Sprout, Recycle, Sparkles, ShieldCheck, Puzzle
};

interface VocabularyArenaProps {
  lesson: Lesson;
}

interface MatchPair {
  id: string;
  left: string;
  right: string;
  arabic: string;
}

interface ConfusableItem {
  word: string;
  partOfSpeech: string;
  meaningAr: string;
  usageRule: string;
  exampleEn: string;
  exampleAr: string;
}

interface DropQuestion {
  id: string;
  sentence: string; // contains [___]
  missingWord: string;
  translationAr: string;
  tip: string;
}

export const VocabularyArena: React.FC<VocabularyArenaProps> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'matcher' | 'confusables' | 'drops' | 'audio'>('visual');
  
  // Collocation Matcher State
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongAttempt, setWrongAttempt] = useState<boolean>(false);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  // Drops Simulator State
  const [selectedWordForDrop, setSelectedWordForDrop] = useState<string | null>(null);
  const [filledDrops, setFilledDrops] = useState<Record<string, string>>({});

  const handleSpeak = (text: string) => {
    setSpeakingWord(text);
    speakEnglish(text, () => setSpeakingWord(null));
  };

  // Derive collocations and pairings based on lesson ID
  const getCollocationPairs = (): MatchPair[] => {
    const id = lesson.id;
    if (id.includes('u6-l1') || id.includes('u6-l2') || id.includes('u6-l8')) {
      return [
        { id: 'p1', left: 'open', right: 'an account', arabic: 'يفتح حساباً بنكياً' },
        { id: 'p2', left: 'pay', right: 'interest', arabic: 'يدفع فوائد' },
        { id: 'p3', left: 'deposit', right: 'money', arabic: 'يودع أموالاً' },
        { id: 'p4', left: 'make', right: 'a withdrawal', arabic: 'يقوم بعملية سحب' },
        { id: 'p5', left: 'maintain', right: 'a minimum balance', arabic: 'يحافظ على حد أدنى للرصيد' },
        { id: 'p6', left: 'charge', right: 'a fee', arabic: 'يفرض رسوماً' },
      ];
    }
    if (id.includes('u1-l2')) {
      return [
        { id: 'p1', left: 'sprained', right: 'wrist / ankle', arabic: 'معصم أو كاحل ملتوٍ' },
        { id: 'p2', left: 'sore', right: 'throat', arabic: 'التهاب حنجرة' },
        { id: 'p3', left: 'take', right: 'painkillers', arabic: 'يتناول مسكنات ألم' },
        { id: 'p4', left: 'broken', right: 'leg / bone', arabic: 'ساق أو عظم مكسور' },
        { id: 'p5', left: 'deep', right: 'cut', arabic: 'جرح عميق' },
      ];
    }
    if (id.includes('u2-l1')) {
      return [
        { id: 'p1', left: 'direct', right: 'traffic', arabic: 'ينظم حركة المرور' },
        { id: 'p2', left: 'investigate', right: 'crimes', arabic: 'يحقق في الجرائم' },
        { id: 'p3', left: 'arrest', right: 'criminals', arabic: 'يعتقل المجرمين' },
        { id: 'p4', left: 'prevent', right: 'accidents', arabic: 'يمنع الحوادث' },
        { id: 'p5', left: 'look for', right: 'fingerprints', arabic: 'يبحث عن البصمات' },
      ];
    }
    if (id.includes('u2-l5')) {
      return [
        { id: 'p1', left: 'security', right: 'camera', arabic: 'كاميرا أمنية' },
        { id: 'p2', left: 'metal', right: 'detector', arabic: 'كاشف معادن' },
        { id: 'p3', left: 'radar speed', right: 'gun', arabic: 'مسدس قياس السرعة' },
        { id: 'p4', left: 'conveyor', right: 'belt', arabic: 'حزام ناقل للأمتعة' },
        { id: 'p5', left: 'speed', right: 'limit', arabic: 'السرعة المحددة' },
      ];
    }
    if (id.includes('u3-l1')) {
      return [
        { id: 'p1', left: 'architect', right: 'designs buildings', arabic: 'المهندس المعماري يصمم المباني' },
        { id: 'p2', left: 'pilot', right: 'flies planes', arabic: 'الطيار يقود الطائرات' },
        { id: 'p3', left: 'surgeon', right: 'operates on people', arabic: 'الجراح يجري العمليات' },
        { id: 'p4', left: 'lifeguard', right: 'saves swimmers', arabic: 'المنقذ يحمي السباحين' },
        { id: 'p5', left: 'journalist', right: 'writes articles', arabic: 'الصحفي يكتب المقالات' },
      ];
    }
    if (id.includes('u5-l1')) {
      return [
        { id: 'p1', left: 'boarding', right: 'card', arabic: 'بطاقة الصعود للطائرة' },
        { id: 'p2', left: 'travel', right: 'agency', arabic: 'وكالة سفر وسياحة' },
        { id: 'p3', left: 'five-star', right: 'hotel', arabic: 'فندق خمس نجوم' },
        { id: 'p4', left: 'packed', right: 'lunch', arabic: 'وجبة غداء جاهزة' },
        { id: 'p5', left: 'car', right: 'hire', arabic: 'تأجير سيارات' },
      ];
    }
    if (id.includes('u7-l1') || id.includes('u7-l5')) {
      return [
        { id: 'p1', left: 'enrol in', right: 'a course', arabic: 'يسجل في دورة تعليمية' },
        { id: 'p2', left: 'attend', right: 'a conference', arabic: 'يحضر مؤتمراً' },
        { id: 'p3', left: 'take', right: 'an exam', arabic: 'يؤدي امتحاناً' },
        { id: 'p4', left: 'pass', right: 'the test', arabic: 'ينجح في الاختبار' },
        { id: 'p5', left: 'enhance', right: 'job skills', arabic: 'يطور المهارات الوظيفية' },
      ];
    }
    if (id.includes('u8-l1') || id.includes('u8-l2') || id.includes('u8-l4')) {
      return [
        { id: 'p1', left: 'renewable', right: 'energy', arabic: 'طاقة متجددة' },
        { id: 'p2', left: 'recycle', right: 'waste materials', arabic: 'إعادة تدوير النفايات' },
        { id: 'p3', left: 'cut down', right: 'trees', arabic: 'قطع الأشجار' },
        { id: 'p4', left: 'greenhouse', right: 'gases', arabic: 'غازات الاحتباس الحراري' },
        { id: 'p5', left: 'fertile', right: 'soil', arabic: 'تربة زراعية خصبة' },
      ];
    }
    // Generic fallback pairs
    return [
      { id: 'p1', left: 'ministerial', right: 'question', arabic: 'سؤال وزاري' },
      { id: 'p2', left: 'correct', right: 'choice', arabic: 'اختيار صحيح' },
      { id: 'p3', left: 'golden', right: 'rule', arabic: 'قاعدة ذهبية' },
    ];
  };

  const pairs = getCollocationPairs();
  const shuffledRight = [...pairs].reverse();

  // Ministerial Confusables & Nuances Table
  const getConfusables = (): ConfusableItem[] => {
    const id = lesson.id;
    if (id.includes('u1-l2')) {
      return [
        {
          word: 'hurt (hurts / hurt)',
          partOfSpeech: 'فعل (Verb)',
          meaningAr: 'يؤلم / يؤذي (فعل ماضٍ أو مضارع)',
          usageRule: 'يأتي بعد الفاعل مباشرة: My back hurts today / My eyes hurt yesterday.',
          exampleEn: 'My back hurts when I lie down.',
          exampleAr: 'ظهري يؤلمني عندما أستلقي.',
        },
        {
          word: 'pain',
          partOfSpeech: 'اسم (Noun)',
          meaningAr: 'ألم / وجع (اسم مفرد غير معدود)',
          usageRule: 'يسبق دائماً بأداة تنكير أو صفة ملكية: I have a pain in my stomach.',
          exampleEn: 'Have you taken any medication for the pain?',
          exampleAr: 'هل تناولت أي دواء للألم؟',
        },
        {
          word: 'sore',
          partOfSpeech: 'صفة (Adjective)',
          meaningAr: 'ملتهب / متقرح / محتقن',
          usageRule: 'تأتي بعد أفعال الكينونة (is/are/was/were/feel) أو قبل الاسم: My throat is sore.',
          exampleEn: 'My throat is sore and I have a temperature.',
          exampleAr: 'حنجرتي ملتهبة ولدي حمّى.',
        }
      ];
    }
    if (id.includes('u2')) {
      return [
        {
          word: 'rob',
          partOfSpeech: 'فعل (Verb)',
          meaningAr: 'يسرق شخصاً أو مكاناً بالقوة',
          usageRule: 'المفعول به يكون شخصاً أو مبنى/بنك: The bank was robbed yesterday.',
          exampleEn: 'Someone robbed the bank yesterday.',
          exampleAr: 'سرق شخص ما المصرف بالأمس.',
        },
        {
          word: 'steal',
          partOfSpeech: 'فعل (Verb)',
          meaningAr: 'يسرق شيئاً أو غرضاً محدداً',
          usageRule: 'المفعول به يكون الشيء المسروق (أموال، مجوهرات، سيارة): He stole my wallet.',
          exampleEn: 'The thief stole my watch while I was sleeping.',
          exampleAr: 'سرق اللص ساعتي وأنا نائم.',
        }
      ];
    }
    if (id.includes('u6')) {
      return [
        {
          word: 'lend',
          partOfSpeech: 'فعل (Verb)',
          meaningAr: 'يقرض / يعير (يعطي المال أو الشيء للغير)',
          usageRule: 'الفاعل هو المانح: Can you lend me some money?',
          exampleEn: 'Banks lend money to people who want to start a business.',
          exampleAr: 'تقرض البنوك الأموال للأشخاص الراغبين ببدء مشروع.',
        },
        {
          word: 'borrow',
          partOfSpeech: 'فعل (Verb)',
          meaningAr: 'يستعير / يقترض (يأخذ المال أو الشيء من الغير)',
          usageRule: 'الفاعل هو المستفيد ويأتي بعدها حرف الجر from: I borrowed money from the bank.',
          exampleEn: 'I need to borrow some cash from my father.',
          exampleAr: 'أحتاج أن أقترض بعض النقود من والدي.',
        }
      ];
    }
    // Generic
    return [
      {
        word: 'official terms',
        partOfSpeech: 'مصطلحات وزارية',
        meaningAr: 'كلمات محورية معتمدة في أسئلة الامتحان',
        usageRule: 'يجب التمييز بين نوع الكلمة (فعل/اسم/صفة) لمعرفة موقعها الصحيح.',
        exampleEn: 'Study the context clues before choosing the word.',
        exampleAr: 'ادرس دلالات السياق قبل اختيار الكلمة المناسبة.',
      }
    ];
  };

  const confusables = getConfusables();

  // Ministerial Drops Simulator Questions (سؤال 3 فرع A)
  const getDropQuestions = (): { words: string[]; questions: DropQuestion[] } => {
    const id = lesson.id;
    if (id.includes('u1-l2')) {
      return {
        words: ['sneezes', 'fractured', 'faint', 'swallowed', 'dizzy'],
        questions: [
          {
            id: 'd1',
            sentence: 'I feel [___]. I think I am going to faint.',
            missingWord: 'dizzy',
            translationAr: 'أشعر بالدوار، أعتقد أنني سأفقد الوعي.',
            tip: 'كلمة feel تأتي بعدها صفة الشعور (dizzy).',
          },
          {
            id: 'd2',
            sentence: 'She always [___] when she puts pepper on her food.',
            missingWord: 'sneezes',
            translationAr: 'هي دائماً تعطس عندما تضع الفلفل على طعامها.',
            tip: 'دلالة الفلفل pepper تعني العطاس (sneezes).',
          },
          {
            id: 'd3',
            sentence: 'The bone was [___] in two places.',
            missingWord: 'fractured',
            translationAr: 'كان العظم مكسوراً في موضعين.',
            tip: 'العظم bone يأتي معه كسر أو تصدع (fractured).',
          }
        ]
      };
    }
    if (id.includes('u6-l1') || id.includes('u6-l2')) {
      return {
        words: ['branch', 'statement', 'balance', 'withdraw', 'valid'],
        questions: [
          {
            id: 'd1',
            sentence: 'A bank [___] shows all your financial transactions.',
            missingWord: 'statement',
            translationAr: 'كشف الحساب البنكي يبين جميع معاملاتك المالية.',
            tip: 'تعبير bank statement هو كشف الحساب.',
          },
          {
            id: 'd2',
            sentence: 'You must maintain a minimum [___] in your savings account.',
            missingWord: 'balance',
            translationAr: 'يجب أن تحافظ على حد أدنى للرصيد في حساب التوفير.',
            tip: 'minimum balance هو الرصيد الأدنى.',
          },
          {
            id: 'd3',
            sentence: 'Our bank has a new [___] near the university.',
            missingWord: 'branch',
            translationAr: 'لمصرفنا فرع جديد قرب الجامعة.',
            tip: 'branch يعني فرع المصرف.',
          }
        ]
      };
    }
    return {
      words: ['accurate', 'vital', 'essential', 'standard'],
      questions: [
        {
          id: 'd1',
          sentence: 'Accurate vocabulary spelling is [___] for the ministerial exam.',
          missingWord: 'vital',
          translationAr: 'الإملاء الصحيح للمفردات أمر حيوي للامتحان الوزاري.',
          tip: 'vital تعني أساسي وجوهري جداً.',
        }
      ]
    };
  };

  const dropsData = getDropQuestions();

  const handleLeftClick = (id: string) => {
    if (matchedIds.includes(id)) return;
    setSelectedLeft(id);
    setWrongAttempt(false);
  };

  const handleRightClick = (id: string) => {
    if (!selectedLeft) return;
    if (matchedIds.includes(id)) return;

    if (selectedLeft === id) {
      setMatchedIds(prev => [...prev, id]);
      setSelectedLeft(null);
      setWrongAttempt(false);
      const matched = pairs.find(p => p.id === id);
      if (matched) {
        speakEnglish(`${matched.left} ${matched.right}`);
      }
    } else {
      setWrongAttempt(true);
      setTimeout(() => {
        setWrongAttempt(false);
        setSelectedLeft(null);
      }, 700);
    }
  };

  const handleResetGame = () => {
    setMatchedIds([]);
    setSelectedLeft(null);
    setWrongAttempt(false);
  };

  const handleSelectDropWord = (word: string) => {
    setSelectedWordForDrop(word);
  };

  const handleFillDrop = (questionId: string) => {
    if (!selectedWordForDrop) return;
    setFilledDrops(prev => ({ ...prev, [questionId]: selectedWordForDrop }));
    setSelectedWordForDrop(null);
  };

  const handleResetDrop = (questionId: string) => {
    setFilledDrops(prev => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  return (
    <div className="bg-white border-2 border-[#202124] text-[#202124] p-6 sm:p-8 shadow-[5px_5px_0px_#202124] space-y-6 relative overflow-hidden">
      
      {/* 3D Visual Banner & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-[#202124]/15 pb-5">
        <div className="flex items-center gap-4">
          <div className="relative overflow-hidden border-2 border-[#202124] shadow-[3px_3px_0px_#202124] w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-[#F7F5EF]">
            <img 
              src="/assets/images/vocabulary_atlas_3d_1793868639767.jpg" 
              alt="Vocabulary Atlas 3D" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#D7E9DA] text-[#202124] border border-[#202124] text-[10px] font-mono font-bold uppercase tracking-wider">
                Vocabulary & Collocations Arena
              </span>
              <span className="text-xs font-mono font-bold text-[#747474]">• ساحة المفردات والإسقاطات والمتلازمات</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#202124] mt-1 tracking-tight">
              مختبر المفردات والمتلازمات الوزارية الذكية
            </h2>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F7F5EF] border border-[#202124] shadow-[2px_2px_0px_#202124] overflow-x-auto no-scrollbar w-full sm:w-auto max-w-full">
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border cursor-pointer ${
              activeTab === 'visual' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Eye className="w-3.5 h-3.5 shrink-0" />
            <span>الرموز البصرية</span>
          </button>

          <button
            onClick={() => setActiveTab('matcher')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border cursor-pointer ${
              activeTab === 'matcher' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5 shrink-0" />
            <span>لعبة التوصيل</span>
          </button>
          
          <button
            onClick={() => setActiveTab('confusables')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border cursor-pointer ${
              activeTab === 'confusables' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>الفروقات الدقيقة</span>
          </button>

          <button
            onClick={() => setActiveTab('drops')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border cursor-pointer ${
              activeTab === 'drops' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>محاكي الإسقاطات</span>
          </button>

          <button
            onClick={() => setActiveTab('audio')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border cursor-pointer ${
              activeTab === 'audio' 
                ? 'bg-[#405DE6] text-white border-[#202124] shadow-[2px_2px_0px_#202124]' 
                : 'bg-white text-[#202124] border-transparent hover:border-[#202124]'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5 shrink-0" />
            <span>القاموس الصوتي</span>
          </button>
        </div>
      </div>

      {/* Tab 0: Visual Mnemonics & Symbols */}
      {activeTab === 'visual' && (() => {
        const unitVisuals = VISUAL_VOCABULARY_ITEMS.filter(it => it.unitId === lesson.unitId);
        const displayItems = unitVisuals.length > 0 ? unitVisuals : VISUAL_VOCABULARY_ITEMS.slice(0, 6);

        return (
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 fill-emerald-300" />
                الترميز البصري والروابط الذهنية الرمزية لمفردات الوحدة {lesson.unitId}:
              </span>
              <span className="text-[11px] text-slate-400">
                الربط الرمزي يسرع استدعاء المعنى بنسبة 65% بالامتحان الوزاري
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayItems.map((item) => {
                const IconComp = ICON_MAP[item.iconKey] || Sparkles;

                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all flex flex-col justify-between space-y-3.5 backdrop-blur-xs"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-300 shadow-inner">
                          <IconComp className="w-6 h-6" />
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">
                            {item.domainAr}
                          </span>
                          <button
                            onClick={() => handleSpeak(item.wordEn)}
                            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                            title="استماع للنطق"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 dir="ltr" className="text-lg font-black font-mono text-emerald-300 text-left bidi-en">
                          {item.wordEn}
                        </h4>
                        <p className="text-xs font-extrabold text-white mt-0.5">
                          {item.wordAr}
                        </p>
                      </div>

                      {/* Visual Mnemonic Anchor */}
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <span className="text-[10px] font-bold text-amber-300 block">
                          💡 الرابط البصري:
                        </span>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {item.visualMnemonic}
                        </p>
                      </div>

                      {/* Ministerial Context */}
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 block font-bold">
                          السياق الوزاري:
                        </span>
                        <p dir="ltr" className="text-[11px] font-mono text-emerald-200 bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/20 text-left en-sentence">
                          {item.ministerialContext}
                        </p>
                      </div>
                    </div>

                    {/* Teacher's Tip */}
                    <div className="pt-2 border-t border-white/10 text-[10px] text-amber-200/90">
                      ✦ {item.ministerialTip}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Tab 1: Interactive Collocations Matcher */}
      {activeTab === 'matcher' && (
        <div className="space-y-4 relative z-10">
          <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/30 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-emerald-200">
              <Gamepad2 className="w-4 h-4 text-emerald-400" />
              <span>طريقة اللعب: اختر كلمة من العمود الأول، ثم اختر الكلمة المتلازمة معها من العمود الثاني لإتمام التوصيل الوزاري!</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-bold text-slate-300">
                تم إنجاز: <span className="text-emerald-400 text-sm font-black">{matchedIds.length}</span> من <span className="text-white">{pairs.length}</span>
              </span>
              <button
                onClick={handleResetGame}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
                title="إعادة تشغيل اللعبة"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-400 mb-2">الفعل أو الكلمة الأولى (Collocation Verb):</p>
              {pairs.map((item) => {
                const isMatched = matchedIds.includes(item.id);
                const isSelected = selectedLeft === item.id;

                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => handleLeftClick(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-right transition-all flex items-center justify-between ${
                      isMatched 
                        ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300 opacity-80' 
                        : isSelected 
                          ? 'bg-emerald-600 text-white border-emerald-300 shadow-md ring-2 ring-emerald-400' 
                          : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-emerald-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold dir-ltr text-right">{item.left}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400">{item.arabic.split(' ')[0]}</span>
                      {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-400 mb-2">المتلازمة التكميلية (Complement):</p>
              {shuffledRight.map((item) => {
                const isMatched = matchedIds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => handleRightClick(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                      isMatched 
                        ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300 opacity-80' 
                        : wrongAttempt && selectedLeft 
                          ? 'bg-rose-950/40 border-rose-500/40 text-rose-200' 
                          : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-emerald-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold dir-ltr">{item.right}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400">{item.arabic}</span>
                      {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {matchedIds.length === pairs.length && (
            <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-center space-y-1 animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-emerald-300 font-extrabold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>رائع جداً! أتقنت جميع متلازمات هذا الدرس بنجاح تام 🎉</span>
              </div>
              <p className="text-xs text-slate-300">
                أنت الآن جاهز بنسبة 100% لسؤال التوصيل والإسقاطات الوزاري لهذه الوحدة!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Ministerial Confusables & Nuances */}
      {activeTab === 'confusables' && (
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              جدول التمييز بين الكلمات المتشابهة والمربكة وزارياً (Confusables Matrix):
            </span>
            <span className="text-[11px] text-slate-400">فهم الفوارق يضمن الدرجة الكاملة في سؤال الاختيارات</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {confusables.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-stone-900/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div>
                    <span className="font-mono text-base font-black text-emerald-300 dir-ltr text-right">
                      {item.word}
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">{item.partOfSpeech}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-200 text-xs font-bold">
                    {item.meaningAr}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-200">
                  <p className="font-bold text-amber-300">قاعدة الاستخدام في الجملة:</p>
                  <p className="leading-relaxed bg-white/5 p-2.5 rounded-xl border border-white/5">{item.usageRule}</p>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-xs font-bold text-emerald-100 dir-ltr text-right">
                      {item.exampleEn}
                    </p>
                    <button
                      onClick={() => handleSpeak(item.exampleEn)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0"
                      title="استمع للنطق"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400">{item.exampleAr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Drops Simulator (سؤال 3 فرع A) */}
      {activeTab === 'drops' && (
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              محاكي سؤال الإسقاطات الوزاري (Drop the Words in the Blanks):
            </span>
            <span className="text-[11px] text-slate-400">السؤال 3 فرع A</span>
          </div>

          {/* Word Bank Box */}
          <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/30 backdrop-blur-md space-y-2">
            <p className="text-xs font-bold text-slate-300">بنك الكلمات المتاحة (انقر على الكلمة ثم انقر على الفراغ المناسب):</p>
            <div className="flex flex-wrap gap-2 dir-ltr">
              {dropsData.words.map((w) => {
                const isSelected = selectedWordForDrop === w;
                const isAlreadyUsed = Object.values(filledDrops).includes(w);

                return (
                  <button
                    key={w}
                    disabled={isAlreadyUsed}
                    onClick={() => handleSelectDropWord(w)}
                    className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                      isAlreadyUsed 
                        ? 'bg-white/5 border-white/10 text-slate-500 line-through opacity-40' 
                        : isSelected 
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-md ring-2 ring-emerald-300' 
                          : 'bg-stone-800 border-white/20 text-emerald-300 hover:bg-stone-700'
                    }`}
                  >
                    {w}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sentences */}
          <div className="space-y-3">
            {dropsData.questions.map((q, idx) => {
              const filled = filledDrops[q.id];
              const isCorrect = filled === q.missingWord;

              return (
                <div 
                  key={q.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    filled 
                      ? isCorrect 
                        ? 'bg-emerald-950/50 border-emerald-500/60' 
                        : 'bg-rose-950/50 border-rose-500/60'
                      : 'bg-stone-900/80 border-white/10 hover:border-emerald-500/30'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <p className="font-mono text-sm font-bold text-white dir-ltr text-right">
                        <span className="text-emerald-400 mr-2">{idx + 1}.</span>
                        {q.sentence.split('[___]')[0]}
                        <button
                          onClick={() => handleFillDrop(q.id)}
                          className={`inline-block px-3 py-0.5 mx-1.5 rounded-lg border font-mono text-xs font-black transition-all ${
                            filled 
                              ? isCorrect 
                                ? 'bg-emerald-600 text-white border-emerald-400' 
                                : 'bg-rose-600 text-white border-rose-400'
                              : selectedWordForDrop 
                                ? 'bg-amber-500/30 border-amber-400 text-amber-200 animate-pulse' 
                                : 'bg-white/10 border-white/20 text-slate-400'
                          }`}
                        >
                          {filled || 'انقر للإسقاط'}
                        </button>
                        {q.sentence.split('[___]')[1]}
                      </p>

                      <p className="text-xs text-slate-300">{q.translationAr}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {filled && (
                        <button
                          onClick={() => handleResetDrop(q.id)}
                          className="p-1.5 rounded-lg bg-white/10 text-slate-400 hover:text-white"
                          title="مسح الإجابة"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {filled && (
                    <div className="mt-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                      <span className="font-bold text-amber-300">تلميح الحل: </span>
                      {q.tip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Audio Pronunciation Dictionary */}
      {activeTab === 'audio' && (
        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 fill-emerald-300" />
              قاموس النطق والمفردات الذاتي المسموع:
            </span>
            <span className="text-[11px] text-slate-400">اضغط للاستماع للنطق الإنجليزي السليم</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {pairs.map((p) => (
              <div 
                key={p.id}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2"
              >
                <div>
                  <p className="font-mono font-bold text-sm text-white dir-ltr text-right">
                    {p.left} {p.right}
                  </p>
                  <p className="text-xs text-slate-400">{p.arabic}</p>
                </div>

                <button
                  onClick={() => handleSpeak(`${p.left} ${p.right}`)}
                  className={`p-2 rounded-xl border transition-all ${
                    speakingWord === `${p.left} ${p.right}`
                      ? 'bg-emerald-400 text-slate-950 border-emerald-400 animate-pulse'
                      : 'bg-white/10 text-slate-300 border-white/10 hover:bg-white/20'
                  }`}
                  title="استمع للنطق"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
