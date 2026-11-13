import { Unit } from '../../../types';

// =========================================================================
// الوحدة السابعة والثامنة - ملزمة الخامس الإعدادي (الأستاذ عمار غالب 2026)
// مرجع الصفحات: ص 150 - 187
// =========================================================================

export const FIFTH_PREPARATORY_UNITS_7_8: Unit[] = [
  {
    id: 57,
    number: 7,
    titleAr: "الوحدة السابعة: المبني للمجهول والبادئات والأفعال السببية وعبارات الوصل (Passive, Causatives & Relatives)",
    titleEn: "Unit 7: Sweden Ice Hotel, Passive Voice across Tenses, Causatives, Relative Clauses & Harrods",
    description: "فندق الجليد في السويد، المبني للمجهول في جميع الأزمنة، البادئات المعاكسة واللواحق، الأفعال السببية have/get something done، أسواق بغداد التراثية وضمائر الوصل (who, which, where, whose)، ومتجر هارودز الشهير بلندن.",
    accentColor: "bg-cobalt text-surface",
    bgGradient: "bg-blue-mist border-ink",
    sourcePages: "الملزمة ص 150 - 178",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u7-l1",
        unitId: 57,
        lessonNumber: 1,
        titleAr: "الدرس الأول: فندق الجليد في السويد والمبني للمجهول الكامل (Sweden Ice Hotel & Passive Voice)",
        titleEn: "Lesson 1: The Iconic Ice Hotel in Sweden & Passive Voice Across All 8 English Tenses",
        category: "grammar",
        summary: "القطعة السياحية الشهيرة لفندق الجليد السويدي الذي يُعاد بناؤه كل شتاء، والقواعد الشاملة لتحويل الجمل إلى المبني للمجهول (Passive Voice) عبر الأزمنة الثمانية.",
        sourcePages: "الملزمة ص 150 - 155",
        grammarRuleFormula: "Master Passive Voice Formula (Object + appropriate form of 'be' + Past Participle):\n1) Present Simple: is / are + P.P. (e.g., The hotel is rebuilt every winter.)\n2) Present Continuous: is / are + being + P.P. (e.g., The ice sculptures are being carved now.)\n3) Past Simple: was / were + P.P. (e.g., The hotel was first opened in 1989.)\n4) Past Continuous: was / were + being + P.P. (e.g., The rooms were being cleaned.)\n5) Present Perfect: has / have + been + P.P. (e.g., The beds have been made of solid ice.)\n6) Past Perfect: had + been + P.P. (e.g., The design had been approved.)\n7) Future Simple: will + be + P.P. (e.g., The ice will be melted in spring.)\n8) Modals: can / must / should + be + P.P. (e.g., Warm clothes must be worn inside.)",
        detailedContent: [
          "فندق الجليد (The Ice Hotel in Jukkasjärvi, Sweden): يقع على بعد 200 كم شمال الدائرة القطبية الشمالية؛ يُبنى الفندق بالكامل من آلاف الأطنان من الجليد الطبيعي المستخرج من نهر تورن المتجمد، وفيه غرف نوم وقاعات وكنيسة ومعرض منحوتات جليدية، وعندما يحل الربيع في شهر مايو يذوب الفندق تماماً ويعود ماؤه إلى النهر.",
          "خطوات التحويل للمجهول: (1) حذف الفاعل أو وضعه مسبوقاً بـ by في نهاية الجملة، (2) تقديم المفعول به ليكون نائباً للفاعل في البداية، (3) وضع صيغة be المناسبة للزمن ولعدد نائب الفاعل الجديد، (4) تحويل الفعل الرئيسي إلى P.P.",
          "تمرين كتاب النشاط ص 114-116: تمارين وزارية مكثفة لتحويل الجمل في مختلف الأزمنة."
        ],
        teacherNotes: [
          "قاعدة الملزمة الذهبية ص 152: مفتاح المبني للمجهول في الامتحانات: انظر للزمن أولاً لتحدد تصريف be (إذا مضارع مستمر ضع being، إذا تام ضع been، إذا مستقبل أو مودال ضع be المجردة)، ثم ضع التصريف الثالث P.P. دائماً."
        ],
        examples: [
          {
            en: "Active: Artists carve astonishing ice sculptures every December.\nPassive: Astonishing ice sculptures are carved by artists every December.",
            ar: "معلوم: ينحت الفنانون منحوتات جليدية مذهلة كل ديسمبر.\nمجهول: تُنحت منحوتات جليدية مذهلة بواسطة الفنانين كل ديسمبر.",
            highlight: "are carved",
            note: "مبني للمجهول في المضارع البسيط"
          },
          {
            en: "Active: The sun will melt the hotel walls in April.\nPassive: The hotel walls will be melted by the sun in April.",
            ar: "معلوم: ستذيب الشمس جدران الفندق في أبريل.\nمجهول: ستُذاب جدران الفندق بواسطة الشمس في أبريل.",
            highlight: "will be melted",
            note: "مبني للمجهول في المستقبل البسيط"
          }
        ],
        exercises: [
          {
            id: "5u7-ex1",
            question: "Every year, the entire Ice Hotel in Sweden ______ (rebuild) using river ice.",
            options: ["is rebuilt", "rebuilds", "was rebuilt", "is rebuilding"],
            correctAnswer: "is rebuilt",
            explanation: "الحدث روتيني متكرر كل عام (Every year) في المضارع البسيط، والفاعل غير مذكور (مجهول)، لذا نستخدم is rebuilt (الملزمة ص 153).",
            type: "mcq",
            sourcePages: "الملزمة ص 153"
          },
          {
            id: "5u7-ex2",
            question: "All mobile phones must ______ (turn off) during the official examination.",
            options: ["be turned off", "turn off", "been turned off", "being turned off"],
            correctAnswer: "be turned off",
            explanation: "بعد الفعل الناقص must في المبني للمجهول نستخدم be + P.P. (be turned off) (الملزمة ص 154).",
            type: "mcq",
            sourcePages: "الملزمة ص 154"
          }
        ]
      },
      {
        id: "5th-u7-l2",
        unitId: 57,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: انتخابات رئيس الصف والبادئات المعاكسة واللواحق (Prefixes & Suffixes)",
        titleEn: "Lesson 2: Class President Election, Negative Prefixes (un, in, im, il, ir) & Suffixes (-ful, -less)",
        category: "vocabulary",
        summary: "انتخابات رئيس الصف، وقواعد إضافة البادئات المعاكسة (un-, in-, im-, il-, ir-) للكلمات واللواحق (-ful, -less) لتحويل الأسماء إلى صفات دالة على الوفرة أو العدم.",
        sourcePages: "الملزمة ص 156 - 159",
        grammarRuleFormula: "1) Negative Prefixes Rules (صنع عكس المعنى):\n   - im-: قبل الكلمات البادئة بـ m أو p (moral -> immoral, possible -> impossible, polite -> impolite) *شواذ: popular -> unpopular, pleasant -> unpleasant.\n   - il-: قبل الكلمات البادئة بـ l (legal -> illegal, literate -> illiterate).\n   - ir-: قبل الكلمات البادئة بـ r (regular -> irregular, responsible -> irresponsible).\n   - in-: قبل الكلمات البادئة بـ c, a, e (correct -> incorrect, active -> inactive, convenient -> inconvenient).\n   - un-: مع بقية الحروف والكلمات (happy -> unhappy, fair -> unfair, tidy -> untidy, usual -> unusual).\n\n2) Suffixes -ful & -less:\n   - Noun + ful = مليء بالشيء (careful, helpful, hopeful, painful, useful)\n   - Noun + less = خالٍ من الشيء أو عديم (careless, helpless, hopeless, painless, useless)",
        detailedContent: [
          "حوار انتخابات رئيس الصف (Student's Book p. 68): مناظرة بين مرشحين طلابيين وتوزيع الوعود المدرسية.",
          "قواعد سؤال الإملاء الوزاري: كيف تميز البادئة المناسبة بناءً على الحرف الأول من الصفة.",
          "تمرين كتاب النشاط ص 118-119: ملء الفراغات بصفات -ful و -less وتطبيق البادئات المعاكسة."
        ],
        teacherNotes: [
          "سر وزاري بالملزمة ص 157: احفظ الشواذ المكررة وزارياً دائماً: polite تأخذ im- (impolite)، لكن popular شاذة تأخذ un- (unpopular)! وكذلك pleasant تأخذ un- (unpleasant)."
        ],
        examples: [
          {
            en: "It is illegal and irresponsible to drive a car without a valid license.",
            ar: "من غير القانوني وغير المسؤول قيادة السيارة بدون رخصة سارية.",
            highlight: "illegal (il-) / irresponsible (ir-)",
            note: "تطبيق بادئات النفي il- مع حرف l و ir- مع حرف r"
          }
        ],
        exercises: [
          {
            id: "5u7-ex3",
            question: "The opposite of the adjective 'polite' is ______.",
            options: ["impolite", "unpolite", "inpolite", "ilpolite"],
            correctAnswer: "impolite",
            explanation: "الصفة polite تبدأ بحرف p لذا تأخذ البادئة im- لتصبح impolite (الملزمة ص 157).",
            type: "mcq",
            sourcePages: "الملزمة ص 157"
          },
          {
            id: "5u7-ex4",
            question: "A medicine that does not cause any pain is described as ______.",
            options: ["painless", "painful", "painfully", "painlessly"],
            correctAnswer: "painless",
            explanation: "اللاحقة -less تعني انعدام الشيء، فـ painless تعني بدون ألم (الملزمة ص 158).",
            type: "mcq",
            sourcePages: "الملزمة ص 158"
          }
        ]
      },
      {
        id: "5th-u7-l3",
        unitId: 57,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: الأفعال السببية (Causative Verbs: have / get something done)",
        titleEn: "Lesson 3: Causative Structures (have / get + Object + Past Participle)",
        category: "grammar",
        summary: "استخدام الأفعال السببية have و get للتعبير عن ترتيب إنجاز خدمة أو عمل بواسطة شخص آخر متخصص (كالميكانيكي أو مصفف الشعر أو الصباغ).",
        sourcePages: "الملزمة ص 160 - 163",
        grammarRuleFormula: "Causative Formula (have / get something done):\n- Subject + have / get (in the appropriate tense) + Object + Past Participle (P.P.)\n1) Present Simple: I have my teeth checked twice a year.\n2) Past Simple: S + had / got + Object + P.P.\n   Example: Somebody repaired Ali's computer -> Ali had his computer repaired.\n   Example: A mechanic fixed my brakes -> I got my brakes fixed.\n3) Present Continuous: S + is/are having + Object + P.P.\n   Example: She is having her hair cut.\n4) Steps to transform from 'asked somebody to':\n   - Delete 'asked somebody to'\n   - Put Subject + had / got + Object + P.P.",
        detailedContent: [
          "مفهوم الأفعال السببية: الفاعل في الجملة لم يقم بالعمل بنفسه بل تسبب في حدوثه أو طلب من مهني متخصص القيام به نيابة عنه.",
          "الفرق بين have و get: have أكثر رسمية من get لكنهما متطابقتان في القاعدة النحوية والامتحانات الوزارية.",
          "تمرين كتاب النشاط ص 122: تحويل جمل من صيغة المعلوم المباشر إلى صيغة have/get السببية."
        ],
        teacherNotes: [
          "قاعدة ذهبية بالملزمة ص 161: إذا رأيت عبارة (My father asked someone to paint the house)، احذف (asked someone to) وضع بدلها (had) ثم هات المفعول به (the house) ثم التصريف الثالث (painted): My father had the house painted."
        ],
        examples: [
          {
            en: "We had our air conditioner serviced by an engineer yesterday.",
            ar: "قمنا بصيانة مكيف الهواء الخاص بنا بواسطة مهندس أمس.",
            highlight: "had our air conditioner serviced",
            note: "صيغة سببية في الماضي: had + مفعول به + P.P."
          }
        ],
        exercises: [
          {
            id: "5u7-ex5",
            question: "Ahmed asked a photographer to take his picture.\nAhmed ______ his picture taken.",
            options: ["had", "has", "is having", "was"],
            correctAnswer: "had",
            explanation: "الجملة الأصلية في الماضي (asked)، لذا نحذف asked a photographer to ونستخدم had مع المفعول his picture والتصريف الثالث taken (الملزمة ص 162).",
            type: "mcq",
            sourcePages: "الملزمة ص 162"
          }
        ]
      },
      {
        id: "5th-u7-l4",
        unitId: 57,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: أسواق بغداد التراثية وضمائر الوصل (Baghdad Souqs & Relative Clauses)",
        titleEn: "Lesson 4: Baghdad Heritage Souqs & Defining Relative Clauses (who, which, that, where, whose)",
        category: "grammar",
        summary: "جولة في الأسواق الحرفية التراثية في بغداد (سوق الصفافير، سوق السراي، شارع المتنبي)، والقواعد الصارمة لاختيار ضمائر الوصل الصحيحة لربط الجمل.",
        sourcePages: "الملزمة ص 164 - 167",
        grammarRuleFormula: "Defining Relative Pronouns (ضمائر الوصل المحددة):\n1) who: للعاقل (متبوعة بفعل أو ضمير فاعل)\n   - The craftsman who makes copper pots is very talented.\n2) which / that: لغير العاقل (جماد أو حيوان)\n   - Souq Al-Safafir is an ancient market which sells handmade brass items.\n3) where: للمكان (متبوعة بفاعل واسم أو ضمير فاعل، وليس بفعل مباشر)\n   - This is the traditional souq where I bought my antique lantern.\n4) whose: للملكية (اسم عاقل يسبقها واسم مملوك يتبعها مباشرة)\n   - The merchant whose shop caught fire received financial support.",
        detailedContent: [
          "أسواق بغداد التراثية: سوق الصفافير (نحاسيات يدوية تصدح بأصوات المطارق النحاسية منذ العصر العباسي)، سوق السراي ومكتبات شارع المتنبي (تاريخ الطباعة والثقافة العراقية).",
          "الفرق الحاسم بين which و where مع الأماكن (الملزمة ص 165): إذا جاء بعد الفراغ فعل مباشر نستخدم which: The city which has many monuments. أما إذا جاء بعد الفراغ فاعل وفعل (حدث يقع في المكان) نستخدم where: The city where I was born.",
          "تمرين كتاب النشاط ص 125: اختيار ضمير الوصل المناسب وربط الجملتين في جملة وصل واحدة."
        ],
        teacherNotes: [
          "سر وزاري مكرر بالملزمة ص 166: انظر لما بعد الفراغ مباشرة:\n1. إذا عاقل + فراغ + اسم مملوك -> whose\n2. إذا مكان + فراغ + فعل -> which\n3. إذا مكان + فراغ + فاعل (I, we, people) -> where."
        ],
        examples: [
          {
            en: "Souq Al-Safafir is a historic market where craftsmen make handmade copper utensils.",
            ar: "سوق الصفافير هو سوق تاريخي يصنع فيه الحرفيون الأواني النحاسية يدوياً.",
            highlight: "where craftsmen make",
            note: "where متبوعة بفاعل craftsmen وحدث يقع داخل المكان"
          }
        ],
        exercises: [
          {
            id: "5u7-ex6",
            question: "The engineer ______ designed the bridge won an international architectural award.",
            options: ["who", "which", "where", "whose"],
            correctAnswer: "who",
            explanation: "الاسم الموصوف عاقل (The engineer) متبوعاً بفعل مباشر (designed)، لذا نستخدم who (الملزمة ص 166).",
            type: "mcq",
            sourcePages: "الملزمة ص 166"
          },
          {
            id: "5u7-ex7",
            question: "Babylon is a magnificent archaeological site ______ many tourists visit every year.",
            options: ["where", "which", "who", "whose"],
            correctAnswer: "where",
            explanation: "اسم مكان (archaeological site) متبوعاً بفاعل وجملة تعبر عما يفعله الناس في المكان (many tourists visit)، لذا نختار where (الملزمة ص 166).",
            type: "mcq",
            sourcePages: "الملزمة ص 166"
          }
        ]
      },
      {
        id: "5th-u7-l5",
        unitId: 57,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: برنامج من سيربح المليون ومسابقات المعلومات (Who Wants to Be a Millionaire?)",
        titleEn: "Lesson 5: Quiz Show Culture - 'Who Wants to Be a Millionaire?' & Competition Vocab",
        category: "vocabulary",
        summary: "البرنامج التلفزيوني العالمي الشهير 'من سيربح المليون'، وسائل المساعدة (Lifelines)، ومصطلحات مسابقات المعلومات العامة.",
        sourcePages: "الملزمة ص 168 - 169",
        grammarRuleFormula: "Quiz Show Vocabulary:\n- contestant: متسابق / مشارك في برنامج الألعاب\n- presenter / host: مقدم البرنامج\n- studio audience: جمهور الاستوديو الحاضر\n- lifelines: وسائل المساعدة:\n  * 50:50 (fifty-fifty) = حذف إجابتين\n  * Phone a friend = الاتصال بصديق\n  * Ask the audience = الاستعانة بالجمهور\n- jackpot: الجائزة المالية الكبرى",
        detailedContent: [
          "تاريخ البرنامج (Student's Book p. 74): أطلق البرنامج في بريطانيا عام 1998 بواسطة ديفيد بريجز ونال شهرة عالمية وبيعت حقوقه لأكثر من 100 دولة بينها النسخة العربية الشهيرة.",
          "تمرين كتاب النشاط ص 128: مطابقة مصطلحات المسابقات التلفزيونية بتعريفاتها باللغة الإنكليزية."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 169: احفظ معنى كلمة contestant (متسابق) ومصطلح lifelines (وسائل النجاة والمساعدة)."
        ],
        examples: [
          {
            en: "The contestant decided to use the 50:50 lifeline to eliminate two incorrect choices.",
            ar: "قرر المتسابق استخدام وسيلة المساعدة 50:50 لحذف خيارين غير صحيحين.",
            highlight: "lifeline / eliminate",
            note: "مصطلحات مسابقات التلفزيون"
          }
        ],
        exercises: [
          {
            id: "5u7-ex8",
            question: "In a television quiz show, a person who takes part and answers questions is called a ______.",
            options: ["contestant", "referee", "poacher", "waiter"],
            correctAnswer: "contestant",
            explanation: "الشخص المشارك في المسابقات التلفزيونية يسمى contestant (الملزمة ص 169).",
            type: "mcq",
            sourcePages: "الملزمة ص 169"
          }
        ]
      },
      {
        id: "5th-u7-l6",
        unitId: 57,
        lessonNumber: 6,
        titleAr: "الدرس السادس: المحادثات الرقمية وصفات المشاعر القوية (Online Chat & Extreme Adjectives)",
        titleEn: "Lesson 6: Instant Group Messaging & Extreme Emotion Adjectives",
        category: "vocabulary",
        summary: "المحادثات في مجموعات الدردشة، والصفات القوية المطلقة (Extreme Adjectives) التي تعبر عن أقصى درجات المشاعر (exhausted, astonished, terrified, thrilled, furious).",
        sourcePages: "الملزمة ص 170 - 172",
        grammarRuleFormula: "Gradable vs Extreme Adjectives:\n- tired -> exhausted (شديد الإرهاق والتعب)\n- surprised -> astonished / amazed (مندهش ومذهول للغاية)\n- afraid / scared -> terrified (مرعوب لأقصى حد)\n- happy / pleased -> thrilled / delighted (في قمة السعادة والبهجة)\n- angry -> furious (غاضب بشدة / هائج)\n- hot -> boiling (يغلي من الحرارة)\n- cold -> freezing (يتجمد من البرد)\n* قاعدة لغوية: لا نستخدم very مع الصفات القوية! نستخدم معها absolutely أو completely (e.g., absolutely exhausted وليس *very exhausted).",
        detailedContent: [
          "المحادثات الفورية (Online Group Chat): لغة التواصل بين الأصدقاء واستخدام الإيموجي والصفات المعبرة بدقة عن الحالة النفسية.",
          "تمرين كتاب النشاط ص 130: استبدال (very + صفة عادية) بصفة قوية مكافئة: very tired = exhausted, very surprised = astonished.",
          "أسئلة الاختيارات حول الصفات وظروف التشديد (absolutely vs very)."
        ],
        teacherNotes: [
          "فخ الملزمة ص 171: كلمة very تأتي مع الصفات العادية: very cold. لكن مع الصفة القوية freezing لا يجوز استخدام very، بل نستخدم absolutely freezing."
        ],
        examples: [
          {
            en: "After walking twenty miles across the mountains, the hikers were absolutely exhausted.",
            ar: "بعد المشي لمسافة عشرين ميلاً عبر الجبال، كان المتنزهون منهكين تماماً.",
            highlight: "absolutely exhausted",
            note: "صفة قوية مسبوقة بـ absolutely"
          }
        ],
        exercises: [
          {
            id: "5u7-ex9",
            question: "I was ______ when I found out that I had passed the difficult exam with top honours.",
            options: ["thrilled", "furious", "exhausted", "terrified"],
            correctAnswer: "thrilled",
            explanation: "النجاح الباهر بتفوق يشعر الطالب بسعادة بالغة وفرح عارم (thrilled) (الملزمة ص 171).",
            type: "mcq",
            sourcePages: "الملزمة ص 171"
          }
        ]
      },
      {
        id: "5th-u7-l7",
        unitId: 57,
        lessonNumber: 7,
        titleAr: "الدرس السابع: حوار اعتذار لطيفة ومنى والتعبيرات الاصطلاحية (Apology Dialogue & Idioms)",
        titleEn: "Lesson 7: Conversational English - Latifa & Muna's Apology & Everyday Idiomatic Phrases",
        category: "vocabulary",
        summary: "حوار الاعتذار وتصفية الخلافات بين الصديقتين لطيفة ومنى، واستخدام الاصطلاحات اليومية الشائعة لتقديم الاعتذار وقبوله بود ومودة.",
        sourcePages: "الملزمة ص 173 - 175",
        grammarRuleFormula: "Apologizing & Responding to Apologies:\n- Apologizing:\n  * I am terribly sorry for being so late.\n  * Please forgive me; I didn't mean to upset you.\n  * It was completely my fault.\n- Accepting an apology:\n  * Don't worry about it; it's fine.\n  * Never mind; these things happen.\n  * No problem at all; think nothing of it.",
        detailedContent: [
          "حوار لطيفة ومنى (Student's Book p. 78): لطيفة نسيت إحضار المذكرة المهمة لمنى، فبادرت بأسلوب راقٍ للاعتذار وشرح الظروف، وردت منى بروح الصداقة المتسامحة.",
          "التعبيرات الاصطلاحية (Idiomatic Expressions): 'to clear the air' (تصفية الأجواء وإزالة سوء الفهم)، 'to see eye to eye' (الاتفاق في الرأي).",
          "تمرين كتاب النشاط ص 133: تصنيف عبارات الاعتذار وقبول الاعتذار في جدول المواقف اللغوية."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 174: في الامتحان التحريري لسؤال الوظائف اللغوية: 'Apologize to your friend for spilling juice on his desk' -> الجواب النموذجي: I'm really sorry for spilling juice on your desk."
        ],
        examples: [
          {
            en: "I am really sorry for forgetting your birthday. - Never mind, don't mention it!",
            ar: "أنا آسف حقاً لنسيان يوم ميلادك. - لا عليك، لا تشغل بالك إطلاقاً!",
            highlight: "really sorry / Never mind",
            note: "صيغة اعتذار ورد مهذب"
          }
        ],
        exercises: [
          {
            id: "5u7-ex10",
            question: "When someone says: 'I'm terribly sorry for breaking your ruler,' the most polite response is: '______.'",
            options: [
              "Never mind; it's fine.",
              "You must buy me ten rulers.",
              "I am very happy.",
              "No, you are horrible."
            ],
            correctAnswer: "Never mind; it's fine.",
            explanation: "الرد الاجتماعي اللبق لقبول الاعتذار هو Never mind; it's fine (لا تهتم، كل شيء على ما يرام) (الملزمة ص 174).",
            type: "mcq",
            sourcePages: "الملزمة ص 174"
          }
        ]
      },
      {
        id: "5th-u7-l8",
        unitId: 57,
        lessonNumber: 8,
        titleAr: "الدرس الثامن: تاريخ متجر هارودز واختبار الوحدة (Harrods Department Store & Unit 7 Test)",
        titleEn: "Lesson 8: The History of Harrods Department Store & Comprehensive Unit 7 Test",
        category: "reading",
        summary: "القطعة الاستيعابية الشهيرة حول تاريخ متجر هارودز الفاخر في لندن منذ تأسيسه كدكان بقالة صغير عام 1849 حتى أصبح أعرق وأكبر متجر تجزئة في العالم، مع الاختبار الشامل للوحدة السابعة.",
        sourcePages: "الملزمة ص 176 - 178",
        detailedContent: [
          "تاريخ هارودز (Harrods): أسسه تشارلز هنري هارود عام 1849 في منطقة نايتسبريدج بلندن؛ بدأ كمتجر شاي وبقالة صغير بفتيين فقط لخدمة الزبائن.",
          "التطور والشعار: توسع المتجر ليضم اليوم أكثر من 330 قسماً ومطعماً، وشعاره اللاتيني الشهير هو 'Omnia Omnibus Ubique' أي 'كل الأشياء، لكل الناس، في كل مكان'.",
          "أول سلم متحرك (Escalator): كان هارودز أول متجر يركب سلماً كهربائياً متحركاً في بريطانيا عام 1898، وكان يقدم للزبائن الخائفين كأساً من البراندي أو الأملاح المهدئة في أعلى السلم لتهدئة روعهم!",
          "اختبار الوحدة السابعة الشامل (الملزمة ص 177-178): يغطي المبني للمجهول، البادئات، الأفعال السببية، ضمائر الوصل، وتاريخ هارودز."
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 177:",
          "1. When was Harrods founded? -> In 1849 by Charles Henry Harrod.",
          "2. What is Harrods' famous motto? -> 'All things for all people, everywhere'.",
          "3. What historic innovation did Harrods introduce in 1898? -> One of the world's first moving stairs (escalators)."
        ],
        examples: [
          {
            en: "Harrods introduced one of the world's very first escalators in 1898 to assist customers.",
            ar: "قدم متجر هارودز واحداً من أوائل السلالم المتحركة في العالم عام 1898 لمساعدة الزبائن.",
            highlight: "first escalators in 1898",
            note: "حقيقة تاريخية بارزة من قطعة الكتاب"
          }
        ],
        exercises: [
          {
            id: "5u7-ex11",
            question: "Harrods was founded in London in ______ by Charles Henry Harrod.",
            options: ["1849", "1949", "1898", "1905"],
            correctAnswer: "1849",
            explanation: "تأسس متجر هارودز في لندن عام 1849 (الملزمة ص 177).",
            type: "mcq",
            sourcePages: "الملزمة ص 177"
          }
        ]
      }
    ]
  },
  {
    id: 58,
    number: 8,
    titleAr: "الوحدة الثامنة: المراجعة الشاملة للفصل الثاني (Semester 2 Comprehensive Revision)",
    titleEn: "Unit 8: Semester 2 Consolidation, London Boa Constrictor & Final Examination",
    description: "مراجعة كبرى ومكثفة لجميع قواعد وقراءات ومفردات الفصل الثاني: مراجعة ضمائر الوصل، الشرطية الثانية، قصة صيد الأصلة العاصرة (Boa Constrictor) في شقق لندن، مقابلة متطوع الألعاب الأولمبية، والامتحان التحريري الشامل النهائي لنهاية العام (100 درجة).",
    accentColor: "bg-soft-mint text-ink",
    bgGradient: "bg-paper border-ink",
    sourcePages: "الملزمة ص 179 - 187",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u8-l1",
        unitId: 58,
        lessonNumber: 1,
        titleAr: "الدرس الأول: مراجعة ضمائر الوصل والتعاريف (Relative Pronouns & Definitions Revision)",
        titleEn: "Lesson 1: Revision of Relative Pronouns & Formulating Precise Educational Definitions",
        category: "grammar",
        summary: "مراجعة قواعد ضمائر الوصل (who, which, that, where, whose) وصياغة التعاريف اللغوية الدقيقة للأشخاص والأماكن والمهن.",
        sourcePages: "الملزمة ص 179 - 180",
        grammarRuleFormula: "Definition Formula:\n- A / An + Noun + is a person who + Verb-s (e.g., An architect is a person who designs modern buildings.)\n- A / An + Noun + is a place where + Subject + Verb (e.g., A library is a quiet place where people read books.)\n- A / An + Noun + is a device / machine which + Verb-s (e.g., A thermometer is an instrument which measures temperature.)",
        detailedContent: [
          "أهمية كتابة التعاريف الدقيقة: يعتمد سؤال المفردات والقواعد الوزاري على صياغة جمل الوصل المعرفة.",
          "تمرين كتاب النشاط ص 140: كتابة تعاريف المهن والأجهزة والأماكن المحددة.",
          "اختبار الفروق بين which و where في سياق الامتحانات الوزارية المكررة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 180: في سؤال التعاريف: إذا كان الاسم شخصاً ابدأ بـ 'is someone who'؛ إذا كان آلة ابدأ بـ 'is a machine which'؛ إذا كان مكاناً ابدأ بـ 'is a place where'."
        ],
        examples: [
          {
            en: "A surgeon is a specialist doctor who performs medical operations on patients.",
            ar: "الجراح هو طبيب متخصص يقوم بإجراء العمليات الجراحية للمرضى.",
            highlight: "doctor who performs",
            note: "صيغة تعريف قياسية باستخدام who"
          }
        ],
        exercises: [
          {
            id: "5u8-ex1",
            question: "A dictionary is a useful reference book ______ explains the meanings of words.",
            options: ["which", "who", "where", "whose"],
            correctAnswer: "which",
            explanation: "القاموس اسم جماد غير عاقل (reference book) متبوعاً بفعل، لذا نستخدم which (الملزمة ص 180).",
            type: "mcq",
            sourcePages: "الملزمة ص 180"
          }
        ]
      },
      {
        id: "5th-u8-l2",
        unitId: 58,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: حوار المواقف الخيالية والشرطية الثانية (Hypothetical Situations Dialogue)",
        titleEn: "Lesson 2: Conversational Practice - Second Conditional in Hypothetical Life Choices",
        category: "grammar",
        summary: "تطبيق عملي للمحادثة باللغة الإنكليزية حول الخيارات الحياتية الافتراضية باستخدام الحالة الشرطية الثانية (لو ربحت جائزة كبرى، لو عشت في جزيرة نائية).",
        sourcePages: "الملزمة ص 181 - 182",
        detailedContent: [
          "حوار الأصدقاء (Student's Book p. 84): ماذا تفعل لو رأيت ثعباناً في غرفتك؟ لو عثرت على حقيبة نقود في الشارع؟",
          "صياغة الإجابات اللبقة بالاعتماد على: If I saw a snake, I would stay calm and call animal rescue.",
          "تمرين كتاب النشاط ص 142: تحويل التفضيلات والخيارات الشخصية إلى جمل شرطية تامة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 182: انتبه لتصريف الأفعال الشاذة في فعل الشرط: see -> saw, find -> found, have -> had, win -> won."
        ],
        examples: [
          {
            en: "If I found a lost wallet in the school corridor, I would hand it to the principal.",
            ar: "لو وجدت محفظة مفقودة في ممر المدرسة، لسلمتها إلى المدير.",
            highlight: "found / would hand",
            note: "موقف افتراضي بالحالة الشرطية الثانية"
          }
        ],
        exercises: [
          {
            id: "5u8-ex2",
            question: "What would you do if you ______ (win) a trip to Paris?",
            options: ["won", "win", "will win", "have won"],
            correctAnswer: "won",
            explanation: "سؤال في الحالة الشرطية الثانية بوجود would do يتطلب ماضياً بسيطاً في جملة if (won) (الملزمة ص 182).",
            type: "mcq",
            sourcePages: "الملزمة ص 182"
          }
        ]
      },
      {
        id: "5th-u8-l3",
        unitId: 58,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: القبض على الأصلة العاصرة في لندن (Caught at Last! 3-Metre Boa Constrictor)",
        titleEn: "Lesson 3: The Sensational News Story: 3-Metre Boa Constrictor Captured in London Flats",
        category: "reading",
        summary: "القصة الخبرية المشوقة لأصلة عاصرة بطول ثلاثة أمتار هربت من صاحبها واختبأت داخل نظام أنابيب شقق سكنية في لندن لشهور قبل الإمساك بها بسلام.",
        sourcePages: "الملزمة ص 183 - 184",
        detailedContent: [
          "قصة الثعبان الهارب (Student's Book p. 86): ثعبان ضخم من نوع الأصلة العاصرة (Boa Constrictor) يبلغ طوله 3 أمتار هرب من قفصه في عمارة سكنية بحي كينغستون في لندن؛ عاش في أنابيب الصرف والممرات الدافئة لثلاثة أشهر وكان السكان يبلغون عن أصوات غريبة.",
          "عملية الإمساك (Caught at last!): قام خبير الزواحف بالتعاون مع فرق الإطفاء باستدراج الثعبان والإمساك به ونقله إلى حديقة حيوان آمنة دون إصابة أي شخص.",
          "المفردات الصحفية: captured (تم الإمساك به)، reptile specialist (أخصائي زواحف)، terrified residents (سكان مرعوبون)."
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 184:",
          "1. What kind of snake escaped in London? -> A three-metre boa constrictor.",
          "2. How long was it missing? -> For about three months.",
          "3. Was anyone hurt? -> No, it was captured safely without hurting anyone."
        ],
        examples: [
          {
            en: "The runaway boa constrictor was captured safely by a wildlife specialist after weeks of searching.",
            ar: "تم الإمساك بالأصلة العاصرة الهاربة بسلام بواسطة أخصائي حياة برية بعد أسابيع من البحث.",
            highlight: "captured safely",
            note: "ملخص أحداث القصة الخبرية"
          }
        ],
        exercises: [
          {
            id: "5u8-ex3",
            question: "The escaped boa constrictor in London was approximately ______ metres long.",
            options: ["3", "1", "6", "10"],
            correctAnswer: "3",
            explanation: "كان طول الثعبان حوالي 3 أمتار (three metres long) (الملزمة ص 184).",
            type: "mcq",
            sourcePages: "الملزمة ص 184"
          }
        ]
      },
      {
        id: "5th-u8-l4",
        unitId: 58,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: مقابلة متطوع الأولمبياد والاختبار الشامل النهائي (Olympics Volunteer & Final Exam)",
        titleEn: "Lesson 4: Olympics Volunteer Interview, Reported Questions & Official 100-Mark Final Exam",
        category: "reading",
        summary: "مقابلة متطوع دورة الألعاب الأولمبية ونقل أسئلته بالكلام المنقول، والنموذج الامتحاني الشامل المكتوب في الملزمة ص 185-187 للامتحان النهائي لنهاية العام الدراسي (100 درجة كاملة).",
        sourcePages: "الملزمة ص 185 - 187",
        detailedContent: [
          "مقابلة متطوع الأولمبياد (AB p. 146): شاب يروي تجربته التطوعية في مساعدة الرياضيين والوفود وتطبيق نقل الأسئلة: 'The interviewer asked him why he had applied for the volunteer post'.",
          "النموذج الامتحاني الوزاري النهائي لنهاية العام (الملزمة ص 186-187):",
          "1. Question 1 (20 Marks): قطعتان خارجيتان واستيعاب حول فندق الجليد السويدي ومتجر هارودز وأصلة لندن.",
          "2. Question 2 (30 Marks): القواعد النحوية والوظائف (المبني للمجهول، have/get السببية، ضمائر الوصل، الكلام المنقول، التمني والندم).",
          "3. Question 3 (20 Marks): المفردات والتوصيل والبادئات (un-, in-, im-, il-, ir-) واللواحق (-ful, -less) والصفات القوية.",
          "4. Question 4 (10 Marks): الأدب المقرّر (رواية نساء صغيرات للويزا ماي ألكوت ومسرحية العاصفة لشكسبير).",
          "5. Question 5 (20 Marks): الإنشاء المنهجي (كتابة مراجعة فيلم، أو نصيحة لشخص يريد وظيفة، أو فوائد التدوير)."
        ],
        teacherNotes: [
          "توجيه الأستاذ عمار غالب بالملزمة ص 187: هذا الاختبار النهائي يمثل محاكاة تدريبية شاملة للاختبار التحريري في المدارس العراقية لمرحلة الخامس الإعدادي."
        ],
        examples: [
          {
            en: "Mastering the end-of-year comprehensive model exam guarantees academic excellence in the preparatory stage.",
            ar: "إن إتقان الامتحان النموذجي الشامل لنهاية العام يضمن التفوق الأكاديمي في المرحلة الإعدادية.",
            highlight: "comprehensive model exam",
            note: "الهدف التعليمي للامتحان النهائي"
          }
        ],
        exercises: [
          {
            id: "5u8-ex4",
            question: "The comprehensive final examination paper for 5th Preparatory carries a total of ______ marks.",
            options: ["100", "50", "80", "120"],
            correctAnswer: "100",
            explanation: "الامتحان النهائي الشامل لكتاب اللغة الإنكليزية للصف الخامس الإعدادي يوزع على 100 درجة كاملة (الملزمة ص 187).",
            type: "mcq",
            sourcePages: "الملزمة ص 187"
          }
        ]
      }
    ]
  }
];
