import { MinisterialExamQuestion } from '../../../types';

// =========================================================================
// بنك الأسئلة الامتحانية الوزارية والمدرسية للخامس الإعدادي
// مستخرج نصاً وحلاً من ملزمة الأستاذ عمار غالب 2026 (ص 222 - 261)
// =========================================================================

export const FIFTH_PREPARATORY_QUESTIONS: MinisterialExamQuestion[] = [
  // --- Unit 1: Tenses, Question Tags & Souq Al-Shorja ---
  {
    id: "5th-q-u1-1",
    unitId: 51,
    topic: "Present Simple vs Continuous (Stative Verbs)",
    year: "2024",
    session: "دور أول",
    questionText: "I ______ (understand) what you mean right now.",
    correctAnswer: "understand",
    ruleExplanation: "الفعل understand من أفعال الإدراك والحالة (Stative Verbs) التي لا تقبل صيغة الاستمرار -ing حتى بوجود ظرف now، لذا يبقى في المضارع البسيط understand (الملزمة ص 5).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 5"
  },
  {
    id: "5th-q-u1-2",
    unitId: 51,
    topic: "Past Continuous & Past Simple with As / While",
    year: "2023",
    session: "دور أول",
    questionText: "While Hadi ______ (ride) his scooter, a cat jumped in front of him.",
    correctAnswer: "was riding",
    ruleExplanation: "بعد أداة الربط While يأتي ماضٍ مستمر (was/were + V-ing)؛ والفاعل Hadi مفرد فيأخذ was riding (الملزمة ص 19).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 19"
  },
  {
    id: "5th-q-u1-3",
    unitId: 51,
    topic: "Present Perfect Simple: been vs gone",
    year: "2024",
    session: "دور ثانٍ",
    questionText: "Sami isn't in his office; he has ______ (been / gone) to London on business.",
    correctAnswer: "gone",
    ruleExplanation: "سامي ليس في مكتبه الآن (isn't in his office)، مما يعني أنه سافر ولم يعد بعد، لذا نختار gone to (الملزمة ص 25).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 25"
  },
  {
    id: "5th-q-u1-4",
    unitId: 51,
    topic: "Question Tags",
    year: "2023",
    session: "تمهيدي",
    questionText: "Layla speaks English and French fluently, ______?",
    correctAnswer: "doesn't she",
    ruleExplanation: "الجملة مثبتة في زمن المضارع البسيط مع الفاعل Layla (مفرد)، لذا نكون السؤال الذيلي بالفعل المساعد المنفي doesn't متبوعاً بالضمير she (الملزمة ص 28).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 28"
  },
  {
    id: "5th-q-u1-5",
    unitId: 51,
    topic: "Textbook Reading: Babylon International Festival",
    year: "2024",
    session: "دور أول",
    questionText: "When was the first Babylon International Festival held, and where?",
    correctAnswer: "In 1987 in the historic city of Babylon (85 km south of Baghdad).",
    ruleExplanation: "أقيم المهرجان الأول في مدينة بابل الأثرية عام 1987 (الملزمة ص 35).",
    difficulty: "easy",
    category: "Reading",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 35"
  },

  // --- Unit 2: Imperatives, Deductions & Inventions ---
  {
    id: "5th-q-u2-1",
    unitId: 52,
    topic: "Modals of Past Deduction (must have / can't have / might have)",
    year: "2024",
    session: "دور أول",
    questionText: "The streets are completely dry this morning. It ______ (rain) last night. (Use must have or can't have)",
    correctAnswer: "can't have rained",
    ruleExplanation: "الشوارع جافة تماماً (الدليل الحاضر ينفي هطول المطر قطعاً)، لذا نستخدم الاستنتاج السلبي المؤكد can't have rained (الملزمة ص 65).",
    difficulty: "hard",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 65"
  },
  {
    id: "5th-q-u2-2",
    unitId: 52,
    topic: "Cause & Effect with such...that",
    year: "2023",
    session: "دور ثانٍ",
    questionText: "It was ______ (so / such) an exciting match that the crowd cheered for hours.",
    correctAnswer: "such",
    ruleExplanation: "لوجود أداة النكرة والصفة والاسم الموصوف (an exciting match)، يجب استخدام such بدلاً من so (الملزمة ص 56).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 56"
  },
  {
    id: "5th-q-u2-3",
    unitId: 52,
    topic: "Zero Conditional",
    year: "2024",
    session: "دور أول",
    questionText: "If you ______ (press) this red emergency button, the entire alarm system goes off.",
    correctAnswer: "press",
    ruleExplanation: "حالة شرطية صفرية تعبر عن حقيقة تشغيل تقنية دائمة؛ كلا الطرفين مضارع بسيط (الملزمة ص 46).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 46"
  },

  // --- Unit 3: Order of Adjectives, First Conditional & Offers ---
  {
    id: "5th-q-u3-1",
    unitId: 53,
    topic: "Order of Adjectives",
    year: "2024",
    session: "دور أول",
    questionText: "My sister bought a ______ (leather / lovely / black) jacket. (Reorder the adjectives)",
    correctAnswer: "lovely black leather",
    ruleExplanation: "تسلسل الصفات: الرأي lovely، ثم اللون black، ثم المادة leather (الملزمة ص 74).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 74"
  },
  {
    id: "5th-q-u3-2",
    unitId: 53,
    topic: "First Conditional",
    year: "2023",
    session: "دور أول",
    questionText: "If we don't recycle plastic waste, toxic chemicals ______ (leak) into the water supply.",
    correctAnswer: "will leak",
    ruleExplanation: "حالة شرطية أولى: فعل الشرط مضارع بسيط منفي don't recycle، وجواب الشرط يأخذ will متبوعة بالمصدر leak (الملزمة ص 83).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 83"
  },
  {
    id: "5th-q-u3-3",
    unitId: 53,
    topic: "Making Offers",
    year: "2024",
    session: "تمهيدي",
    questionText: "Offer to help your friend carry his heavy books. (Use 'Shall I')",
    correctAnswer: "Shall I help you carry your heavy books?",
    ruleExplanation: "صيغة تقديم العرض بـ Shall I متبوعة بالمصدر المجرد: Shall I help you carry your heavy books? (الملزمة ص 93).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 93"
  },

  // --- Unit 5: Second Conditional, had better & Regret ---
  {
    id: "5th-q-u5-1",
    unitId: 55,
    topic: "Second Conditional: If I were you",
    year: "2024",
    session: "دور أول",
    questionText: "If I ______ (be) you, I would consult a doctor immediately.",
    correctAnswer: "were",
    ruleExplanation: "في الحالة الشرطية الثانية لتقديم النصيحة نستخدم were مع ضمير الفاعل I (If I were you) (الملزمة ص 117).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 117"
  },
  {
    id: "5th-q-u5-2",
    unitId: 55,
    topic: "Expressing Regret with wish / if only",
    year: "2023",
    session: "دور ثانٍ",
    questionText: "You stayed up very late; now you cannot concentrate. Express regret using (I wish).",
    correctAnswer: "I wish I hadn't stayed up so late.",
    ruleExplanation: "الجملة الأصلية مثبتة في الماضي (stayed up)، لذا نندم عليها بصيغة الماضي التام المنفي hadn't + P.P. (الملزمة ص 126).",
    difficulty: "hard",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 126"
  },
  {
    id: "5th-q-u5-3",
    unitId: 55,
    topic: "Strong Advice with had better not",
    year: "2024",
    session: "دور ثانٍ",
    questionText: "You had better ______ (not / eat) unwashed fruit.",
    correctAnswer: "not eat",
    ruleExplanation: "صيغة النفي مع had better هي had better not متبوعة بالمصدر المجرد بدون to (الملزمة ص 114).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 114"
  },

  // --- Unit 6: Reported Speech (Statements, Questions & Orders) ---
  {
    id: "5th-q-u6-1",
    unitId: 56,
    topic: "Reported Wh-Questions",
    year: "2024",
    session: "دور أول",
    questionText: "Direct: 'Where do you sell your paintings?' the journalist asked Widad.\nReported: The journalist asked Widad ______.",
    correctAnswer: "where she sold her paintings",
    ruleExplanation: "في السؤال المنقول: نضع أداة السؤال where، ثم الفاعل she، ثم نحذف do ونحول الفعل إلى الماضي البسيط sold مع تغيير your إلى her (الملزمة ص 140).",
    difficulty: "hard",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 140"
  },
  {
    id: "5th-q-u6-2",
    unitId: 56,
    topic: "Reported Commands & Prohibitions",
    year: "2023",
    session: "دور أول",
    questionText: "Direct: 'Don't shout in the corridor,' the teacher said to Ali.\nReported: The teacher told Ali ______ in the corridor.",
    correctAnswer: "not to shout",
    ruleExplanation: "في النهي والأمر المنفي، تتحول Don't إلى not to متبوعة بالمصدر المجرد shout (الملزمة ص 148).",
    difficulty: "easy",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 148"
  },

  // --- Unit 7: Passive Voice, Causatives & Relative Pronouns ---
  {
    id: "5th-q-u7-1",
    unitId: 57,
    topic: "Passive Voice in Present Simple",
    year: "2024",
    session: "دور أول",
    questionText: "The Swedish Ice Hotel ______ (rebuild) entirely out of frozen river ice each winter.",
    correctAnswer: "is rebuilt",
    ruleExplanation: "المبني للمجهول في المضارع البسيط: نائب الفاعل مفرد (The hotel) يأخذ is متبوعة بالتصريف الثالث rebuilt (الملزمة ص 153).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 153"
  },
  {
    id: "5th-q-u7-2",
    unitId: 57,
    topic: "Causative have / get something done",
    year: "2023",
    session: "دور ثانٍ",
    questionText: "My father asked a mechanic to repair the brakes.\nRewrite using 'got': My father ______.",
    correctAnswer: "got the brakes repaired",
    ruleExplanation: "نحذف asked a mechanic to ونضع got متبوعة بالمفعول the brakes ثم التصريف الثالث repaired (الملزمة ص 161).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 161"
  },
  {
    id: "5th-q-u7-3",
    unitId: 57,
    topic: "Relative Pronouns: which vs where",
    year: "2024",
    session: "دور أول",
    questionText: "Souq Al-Safafir is a traditional bazaar ______ craftsmen produce beautiful copper goods.",
    correctAnswer: "where",
    ruleExplanation: "اسم مكان (traditional bazaar) متبوع بفاعل craftsmen وجملة كاملة تعبر عن النشاط الذي يمارس في المكان، لذا نستخدم where (الملزمة ص 166).",
    difficulty: "medium",
    category: "Grammar",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 166"
  },
  {
    id: "5th-q-u7-4",
    unitId: 57,
    topic: "Negative Prefixes (un, in, im, il, ir)",
    year: "2024",
    session: "دور ثانٍ",
    questionText: "Write the negative prefix form of: (1) polite -> ______ (2) legal -> ______",
    correctAnswer: "impolite, illegal",
    ruleExplanation: "polite تبدأ بـ p فتأخذ im- (impolite)؛ و legal تبدأ بـ l فتأخذ il- (illegal) (الملزمة ص 157).",
    difficulty: "easy",
    category: "Spelling",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 157"
  },

  // --- Literature Spot: Little Women & The Tempest ---
  {
    id: "5th-q-lit-1",
    unitId: 58,
    topic: "Literature: Little Women",
    year: "2024",
    session: "دور أول",
    questionText: "In 'Little Women', why did Jo March sell her hair, and how much did she get for it?",
    correctAnswer: "She sold her hair to help pay for her mother's travel expenses to nurse her sick father in Washington, and she got $25.",
    ruleExplanation: "باعت جو شعرها الطويل مقابل 25 دولاراً لمساعدة والدتها في السفر لمعالجة والدها المريض (الملزمة ص 199).",
    difficulty: "medium",
    category: "Literature",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 199"
  },
  {
    id: "5th-q-lit-2",
    unitId: 58,
    topic: "Literature: The Tempest",
    year: "2024",
    session: "دور أول",
    questionText: "In Shakespeare's 'The Tempest', who was Sycorax and what did she do to Ariel?",
    correctAnswer: "Sycorax was a wicked witch who imprisoned the spirit Ariel inside a cloven pine tree because he refused to obey her evil commands.",
    ruleExplanation: "سيكوراكس ساحرة شريرة حبست روح الهواء أرييل في شجرة صنوبر لرفضه طاعتها (الملزمة ص 207).",
    difficulty: "medium",
    category: "Literature",
    grade: "fifth-preparatory",
    sourceReference: "الملزمة ص 207"
  }
];
