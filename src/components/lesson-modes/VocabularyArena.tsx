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
        word: 'key curriculum terms',
        partOfSpeech: 'مصطلحات المنهج',
        meaningAr: 'كلمات محورية متكررة في أسئلة الامتحان',
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
    <div className="bg-surface border-2 border-ink text-ink p-6 sm:p-8 shadow-brutal-lg space-y-6 relative overflow-hidden rounded-md">
      
      {/* 3D Visual Banner & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-ink/15 pb-5">
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative overflow-hidden border-2 border-ink shadow-brutal-callout w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-paper rounded">
            <img 
              src="/assets/images/vocabulary_atlas_3d_1793868639767.jpg" 
              alt="Vocabulary Atlas 3D" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-soft-mint text-ink border border-ink text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm">
                Vocabulary & Collocations Arena
              </span>
              <span className="text-xs font-mono font-bold text-muted-gray">• ساحة المفردات والإسقاطات والمتلازمات</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-ink mt-1 tracking-tight">
              مختبر المفردات والمتلازمات التفاعلي
            </h2>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-paper border border-ink shadow-brutal-sm w-full md:w-auto rounded">
          <button
            type="button"
            onClick={() => setActiveTab('visual')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border cursor-pointer rounded-sm ${
              activeTab === 'visual' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Eye className="w-3.5 h-3.5 shrink-0" />
            <span>الرموز البصرية</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('matcher')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border cursor-pointer rounded-sm ${
              activeTab === 'matcher' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5 shrink-0" />
            <span>لعبة التوصيل</span>
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('confusables')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border cursor-pointer rounded-sm ${
              activeTab === 'confusables' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>الفروقات الدقيقة</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('drops')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border cursor-pointer rounded-sm ${
              activeTab === 'drops' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
            }`}
          >
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>محاكي الإسقاطات</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('audio')}
            className={`px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 border cursor-pointer rounded-sm ${
              activeTab === 'audio' 
                ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                : 'bg-surface text-ink border-transparent hover:border-ink'
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
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-ink flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cobalt shrink-0" />
                الترميز البصري والروابط الذهنية الرمزية لمفردات الوحدة {lesson.unitId}:
              </span>
              <span className="text-[11px] font-bold text-muted-gray">
                الربط الرمزي يسرع استدعاء المعنى وتثبيته في الذاكرة
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayItems.map((item) => {
                const IconComp = ICON_MAP[item.iconKey] || Sparkles;

                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-md bg-paper border-2 border-ink shadow-brutal-sm hover:bg-surface transition-all flex flex-col justify-between space-y-3.5 min-w-0"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-12 h-12 rounded bg-yellow border-2 border-ink shadow-brutal-press flex items-center justify-center text-ink shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] px-2 py-0.5 rounded-sm bg-soft-mint text-ink border border-ink font-bold">
                            {item.domainAr}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleSpeak(item.wordEn)}
                            aria-label={`استماع لنطق ${item.wordEn}`}
                            className={`p-1.5 rounded border border-ink shadow-brutal-press cursor-pointer transition-all ${
                              speakingWord === item.wordEn
                                ? 'bg-cobalt text-surface'
                                : 'bg-surface hover:bg-yellow text-ink'
                            }`}
                            title="استماع للنطق"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h4 dir="ltr" className="text-lg font-black font-mono text-cobalt text-left break-words">
                          {item.wordEn}
                        </h4>
                        <p className="text-xs font-extrabold text-ink mt-0.5">
                          {item.wordAr}
                        </p>
                      </div>

                      {/* Visual Mnemonic Anchor */}
                      <div className="p-3 rounded bg-surface border border-ink space-y-1">
                        <span className="text-[10px] font-bold text-cobalt block">
                          الرابط البصري:
                        </span>
                        <p className="text-[11px] font-medium text-ink leading-relaxed">
                          {item.visualMnemonic}
                        </p>
                      </div>

                      {/* Context */}
                      <div className="space-y-1 min-w-0">
                        <span className="text-[10px] text-muted-gray block font-bold">
                          السياق التطبيقي:
                        </span>
                        <p dir="ltr" className="text-[11px] font-mono font-bold text-ink bg-answer-correct-bg p-2 rounded border border-ink text-left break-words">
                          {item.ministerialContext}
                        </p>
                      </div>
                    </div>

                    {/* Teacher's Tip */}
                    <div className="pt-2 border-t border-ink/15 text-[10px] font-bold text-muted-gray">
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
          <div className="p-4 rounded-md bg-blue-mist border-2 border-ink shadow-brutal-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-ink">
              <Gamepad2 className="w-4 h-4 text-cobalt shrink-0" />
              <span>طريقة اللعب: اختر كلمة من العمود الأول، ثم اختر الكلمة المتلازمة معها من العمود الثاني لإتمام التوصيل!</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-bold text-ink">
                تم إنجاز: <span className="text-cobalt text-sm font-black font-mono">{matchedIds.length}</span> من <span className="text-ink font-mono">{pairs.length}</span>
              </span>
              <button
                type="button"
                onClick={handleResetGame}
                aria-label="إعادة تشغيل اللعبة"
                className="p-1.5 rounded bg-surface border border-ink shadow-brutal-press hover:bg-yellow text-ink cursor-pointer transition-colors"
                title="إعادة تشغيل اللعبة"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-2 min-w-0">
              <p className="text-xs font-bold text-muted-gray mb-2">الفعل أو الكلمة الأولى (Collocation Verb):</p>
              {pairs.map((item) => {
                const isMatched = matchedIds.includes(item.id);
                const isSelected = selectedLeft === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={isMatched}
                    onClick={() => handleLeftClick(item.id)}
                    className={`w-full p-3.5 rounded border-2 text-right transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isMatched 
                        ? 'bg-answer-correct-bg border-semantic-success text-semantic-success opacity-80' 
                        : isSelected 
                          ? 'bg-cobalt text-surface border-ink shadow-brutal-sm' 
                          : 'bg-paper border-ink text-ink hover:bg-yellow shadow-brutal-press'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span dir="ltr" className="font-mono text-sm font-bold text-left break-words">{item.left}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[11px] font-bold ${isSelected ? 'text-surface/90' : 'text-muted-gray'}`}>{item.arabic.split(' ')[0]}</span>
                      {isMatched && <Check className="w-4 h-4 text-semantic-success shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-2 min-w-0">
              <p className="text-xs font-bold text-muted-gray mb-2">المتلازمة التكميلية (Complement):</p>
              {shuffledRight.map((item) => {
                const isMatched = matchedIds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={isMatched}
                    onClick={() => handleRightClick(item.id)}
                    className={`w-full p-3.5 rounded border-2 text-left transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isMatched 
                        ? 'bg-answer-correct-bg border-semantic-success text-semantic-success opacity-80' 
                        : wrongAttempt && selectedLeft 
                          ? 'bg-coral border-semantic-error text-ink' 
                          : 'bg-paper border-ink text-ink hover:bg-soft-mint shadow-brutal-press'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span dir="ltr" className="font-mono text-sm font-bold text-left break-words">{item.right}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-muted-gray">{item.arabic}</span>
                      {isMatched && <Check className="w-4 h-4 text-semantic-success shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {matchedIds.length === pairs.length && (
            <div className="p-4 rounded-md bg-soft-mint border-2 border-ink shadow-brutal-sm text-center space-y-1">
              <div className="flex items-center justify-center gap-2 text-semantic-success font-extrabold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>رائع جداً! أتقنت جميع متلازمات هذا الدرس بنجاح تام</span>
              </div>
              <p className="text-xs font-bold text-ink">
                أنت الآن مستعد تماماً لسؤال التوصيل والإسقاطات لهذه الوحدة!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Ministerial Confusables & Nuances */}
      {activeTab === 'confusables' && (
        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-cobalt shrink-0" />
              جدول التمييز بين الكلمات المتشابهة والمربكة في الاستخدام (Confusables Matrix):
            </span>
            <span className="text-[11px] font-bold text-muted-gray">فهم الفوارق يضمن الدرجة الكاملة في سؤال الاختيارات</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {confusables.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-md bg-paper border-2 border-ink shadow-brutal-sm hover:bg-surface transition-all space-y-3 min-w-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/15 pb-2.5">
                  <div className="min-w-0">
                    <span dir="ltr" className="font-mono text-base font-black text-cobalt block text-left break-words">
                      {item.word}
                    </span>
                    <p className="text-xs font-bold text-muted-gray mt-0.5">{item.partOfSpeech}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-sm bg-soft-mint border border-ink text-ink text-xs font-bold">
                    {item.meaningAr}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-ink">
                  <p className="font-bold text-cobalt">قاعدة الاستخدام في الجملة:</p>
                  <p className="leading-relaxed bg-surface p-2.5 rounded border border-ink font-medium">{item.usageRule}</p>
                </div>

                <div className="p-3 rounded bg-yellow border border-ink space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <p dir="ltr" className="font-mono text-xs font-bold text-ink text-left break-words min-w-0 flex-1">
                      {item.exampleEn}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleSpeak(item.exampleEn)}
                      aria-label={`استمع لنطق ${item.exampleEn}`}
                      className="p-1.5 rounded bg-surface border border-ink shadow-brutal-press hover:bg-blue-mist text-ink cursor-pointer shrink-0"
                      title="استمع للنطق"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] font-bold text-ink/80">{item.exampleAr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Drops Simulator (سؤال 3 فرع A) */}
      {activeTab === 'drops' && (
        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <Award className="w-4 h-4 text-cobalt shrink-0" />
              محاكي سؤال الإسقاطات (Drop the Words in the Blanks):
            </span>
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-yellow border border-ink rounded-sm text-ink">السؤال 3 فرع A</span>
          </div>

          {/* Word Bank Box */}
          <div className="p-4 rounded-md bg-paper border-2 border-ink shadow-brutal-sm space-y-2">
            <p className="text-xs font-bold text-ink">بنك الكلمات المتاحة (انقر على الكلمة ثم انقر على الفراغ المناسب):</p>
            <div className="flex flex-wrap gap-2" dir="ltr">
              {dropsData.words.map((w) => {
                const isSelected = selectedWordForDrop === w;
                const isAlreadyUsed = Object.values(filledDrops).includes(w);

                return (
                  <button
                    key={w}
                    type="button"
                    disabled={isAlreadyUsed}
                    onClick={() => handleSelectDropWord(w)}
                    className={`px-3.5 py-1.5 rounded border-2 text-xs font-mono font-bold transition-all cursor-pointer ${
                      isAlreadyUsed 
                        ? 'bg-progress-track border-ink/30 text-muted-gray line-through opacity-60 cursor-default' 
                        : isSelected 
                          ? 'bg-cobalt text-surface border-ink font-black shadow-brutal-sm' 
                          : 'bg-surface border-ink text-ink hover:bg-yellow shadow-brutal-press'
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
                  className={`p-4 rounded-md border-2 border-ink shadow-brutal-sm transition-all ${
                    filled 
                      ? isCorrect 
                        ? 'bg-answer-correct-bg' 
                        : 'bg-answer-review-bg'
                      : 'bg-surface'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1 min-w-0 flex-1">
                      <p dir="ltr" className="font-mono text-sm font-bold text-ink text-left break-words">
                        <span className="text-cobalt mr-2">{idx + 1}.</span>
                        {q.sentence.split('[___]')[0]}
                        <button
                          type="button"
                          onClick={() => handleFillDrop(q.id)}
                          className={`inline-block px-3 py-0.5 mx-1.5 rounded border-2 font-mono text-xs font-black transition-all cursor-pointer ${
                            filled 
                              ? isCorrect 
                                ? 'bg-semantic-success text-surface border-ink' 
                                : 'bg-semantic-error text-surface border-ink'
                              : selectedWordForDrop 
                                ? 'bg-yellow border-ink text-ink animate-pulse' 
                                : 'bg-paper border-ink text-muted-gray'
                          }`}
                        >
                          {filled || 'انقر للإسقاط'}
                        </button>
                        {q.sentence.split('[___]')[1]}
                      </p>

                      <p className="text-xs font-medium text-muted-gray">{q.translationAr}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {filled && (
                        <button
                          type="button"
                          onClick={() => handleResetDrop(q.id)}
                          aria-label="مسح الإجابة"
                          className="p-1.5 rounded bg-surface border border-ink shadow-brutal-press text-ink hover:bg-coral cursor-pointer"
                          title="مسح الإجابة"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {filled && (
                    <div className="mt-2 pt-2 border-t border-ink/15 text-xs text-ink">
                      <span className="font-bold text-cobalt">تلميح الحل: </span>
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
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-ink flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cobalt shrink-0" />
              قاموس النطق والمفردات الذاتي المسموع:
            </span>
            <span className="text-[11px] font-bold text-muted-gray">اضغط للاستماع للنطق الإنجليزي السليم</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {pairs.map((p) => (
              <div 
                key={p.id}
                className="p-3.5 rounded bg-paper border-2 border-ink shadow-brutal-sm flex items-center justify-between gap-2 min-w-0"
              >
                <div className="min-w-0">
                  <p dir="ltr" className="font-mono font-bold text-sm text-ink text-left break-words">
                    {p.left} {p.right}
                  </p>
                  <p className="text-xs font-medium text-muted-gray">{p.arabic}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleSpeak(`${p.left} ${p.right}`)}
                  aria-label={`استمع لنطق ${p.left} ${p.right}`}
                  className={`p-2 rounded border border-ink shadow-brutal-press cursor-pointer shrink-0 transition-all ${
                    speakingWord === `${p.left} ${p.right}`
                      ? 'bg-cobalt text-surface animate-pulse'
                      : 'bg-surface text-ink hover:bg-yellow'
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
