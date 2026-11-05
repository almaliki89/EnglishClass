import { MinisterialExamQuestion } from '../../../types';

// =========================================================================
// بنك الأسئلة الامتحانية والمدرسية للرابع الإعدادي
// مستخرج نصاً وحلاً من ملزمة النموذجية 2026 (ص 180 - 205)
// =========================================================================

export const FOURTH_PREPARATORY_QUESTIONS: MinisterialExamQuestion[] = [
  // --- Unit 1: Present Simple/Continuous, Indirect Questions & -ed/-ing ---
  {
    id: "4th-q-u1-1",
    unitId: 41,
    topic: "Present Simple (Stative Verbs)",
    year: "2024",
    session: "دور أول",
    questionText: "I ______ (not / understand) this grammar exercise at the moment.",
    correctAnswer: "don't understand",
    ruleExplanation: "الفعل understand من أفعال الحالة (Stative Verbs) فلا يقبل صيغة ing حتى بوجود at the moment، لذا ينفى بالمضارع البسيط don't understand (الملزمة ص 4).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 4"
  },
  {
    id: "4th-q-u1-2",
    unitId: 41,
    topic: "Indirect Questions",
    year: "2023",
    session: "دور أول",
    questionText: "Direct: 'Where is the self-access centre?'\nIndirect: Could you tell me ______?",
    correctAnswer: "where the self-access centre is",
    ruleExplanation: "في السؤال غير المباشر يتقدم الفاعل (the self-access centre) على الفعل المساعد is (الملزمة ص 21).",
    difficulty: "hard",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 21"
  },
  {
    id: "4th-q-u1-3",
    unitId: 41,
    topic: "Adjectives Ending in -ed vs -ing",
    year: "2024",
    session: "دور ثانٍ",
    questionText: "It was an ______ (amazing / amazed) summer camp in Canada.",
    correctAnswer: "amazing",
    ruleExplanation: "بعد الفراغ يوجد اسم موصوف (summer camp)، لذا نختار صفة المسبب -ing (amazing) (الملزمة ص 11).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 11"
  },

  // --- Unit 2: Narrative Tenses, used to & Adverbs of Manner ---
  {
    id: "4th-q-u2-1",
    unitId: 42,
    topic: "Past Continuous & Past Simple with While",
    year: "2024",
    session: "دور أول",
    questionText: "While we ______ (drive) to Erbil, the bus broke down.",
    correctAnswer: "were driving",
    ruleExplanation: "بعد أداة الربط While يأتي ماضٍ مستمر (were driving) مع الفاعل الجمع we (الملزمة ص 27).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 27"
  },
  {
    id: "4th-q-u2-2",
    unitId: 42,
    topic: "used to for Past Habits",
    year: "2023",
    session: "دور أول",
    questionText: "There ______ (use to / be) a small village here, but now there is a big city.",
    correctAnswer: "used to be",
    ruleExplanation: "في الإثبات للتعبير عن حالة في الماضي نستخدم used to + المصدر (used to be) (الملزمة ص 32).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 32"
  },
  {
    id: "4th-q-u2-3",
    unitId: 42,
    topic: "Irregular Adverbs of Manner",
    year: "2024",
    session: "دور ثانٍ",
    questionText: "Ali is a good pianist; he plays the piano very ______ (good / well).",
    correctAnswer: "well",
    ruleExplanation: "ظرف الطريقة الشاذ المشتق من الصفة good هو well (الملزمة ص 46).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 46"
  },

  // --- Unit 3: Present Perfect Simple, for / since & Present Perfect Continuous ---
  {
    id: "4th-q-u3-1",
    unitId: 43,
    topic: "Present Perfect Simple with yet",
    year: "2024",
    session: "دور أول",
    questionText: "I haven't written the summary ______ (already / yet).",
    correctAnswer: "yet",
    ruleExplanation: "في نهاية الجملة المنفية بالمضارع التام نستخدم yet (الملزمة ص 55).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 55"
  },
  {
    id: "4th-q-u3-2",
    unitId: 43,
    topic: "Duration with for vs since",
    year: "2023",
    session: "دور ثانٍ",
    questionText: "We have been waiting here ______ (for / since) 8 o'clock this morning.",
    correctAnswer: "since",
    ruleExplanation: "الساعة المحددة بـ 8 o'clock تمثل نقطة بداية زمنية فتأخذ since (الملزمة ص 59).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 59"
  },

  // --- Unit 5: Future Forms & Verbs + to + Infinitive ---
  {
    id: "4th-q-u5-1",
    unitId: 45,
    topic: "Verbs followed by to + Infinitive",
    year: "2024",
    session: "دور أول",
    questionText: "They decided ______ (visit) the National Museum of Iraq on Friday.",
    correctAnswer: "to visit",
    ruleExplanation: "الفعل decided يأخذ دائماً تركيب to + المصدر المجرد (to visit) (الملزمة ص 91).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 91"
  },

  // --- Unit 6: Future Continuous & Reported Speech ---
  {
    id: "4th-q-u6-1",
    unitId: 46,
    topic: "Future Continuous",
    year: "2024",
    session: "دور أول",
    questionText: "At 9:00 PM tomorrow, I ______ (study) in the library.",
    correctAnswer: "will be studying",
    ruleExplanation: "وجود موعد محدد في المستقبل (At 9:00 PM tomorrow) يوجب استخدام المستقبل المستمر will be studying (الملزمة ص 98).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 98"
  },

  // --- Unit 7: Zero / First Conditionals & Passive Voice ---
  {
    id: "4th-q-u7-1",
    unitId: 47,
    topic: "First Conditional",
    year: "2024",
    session: "دور أول",
    questionText: "If we don't recycle rubbish, pollution ______ (increase).",
    correctAnswer: "will increase",
    ruleExplanation: "حالة شرطية أولى: جملة If مضارع بسيط منفي don't recycle، والطرف الأخر will + المصدر (will increase) (الملزمة ص 128).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 128"
  },
  {
    id: "4th-q-u7-2",
    unitId: 47,
    topic: "Past Simple Passive",
    year: "2023",
    session: "دور ثانٍ",
    questionText: "Petroleum ______ (form) millions of years ago from organic matter.",
    correctAnswer: "was formed",
    ruleExplanation: "مبني للمجهول في الماضي البسيط: petroleum مفرد غير عاقل يأخذ was formed (الملزمة ص 134).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 134"
  },

  // --- Literature Spot: Treasure Island & Around the World in 80 Days ---
  {
    id: "4th-q-lit-1",
    unitId: 48,
    topic: "Literature: Treasure Island",
    year: "2024",
    session: "دور أول",
    questionText: "In 'Treasure Island', who was Ben Gunn, and how long had he been on the island?",
    correctAnswer: "Ben Gunn was a former pirate from Captain Flint's crew who was marooned alone on the island for three years.",
    ruleExplanation: "بن غان قرصان سابق من طاقم فلينت، تركه القراصنة معزولاً بالجزيرة لمدة 3 سنوات (الملزمة ص 156).",
    difficulty: "medium",
    category: "Literature",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 156"
  },
  {
    id: "4th-q-lit-2",
    unitId: 48,
    topic: "Literature: Around the World in 80 Days",
    year: "2024",
    session: "دور أول",
    questionText: "In 'Around the World in 80 Days', how did Phileas Fogg win his bet despite thinking he was late?",
    correctAnswer: "By travelling constantly eastwards across time zones, he gained 24 hours (one full day), arriving on Saturday instead of Sunday.",
    ruleExplanation: "بسفره الدائم شرقاً كسب 24 ساعة فوصل يوم السبت بدلاً من الأحد وفاز بالرهان (الملزمة ص 169).",
    difficulty: "hard",
    category: "Literature",
    grade: "fourth-preparatory",
    sourceReference: "الملزمة ص 169"
  }
];
