import { Unit } from '../../../types';

// =========================================================================
// الوحدة الثالثة والرابعة - ملزمة الرابع الإعدادي (2025-2026)
// مرجع الصفحات: ص 53 - 74
// =========================================================================

export const FOURTH_PREPARATORY_UNITS_3_4: Unit[] = [
  {
    id: 43,
    number: 3,
    titleAr: "الوحدة الثالثة: العلوم والاختراعات والمضارع التام (Science & Inventions)",
    titleEn: "Unit 3: Scientific Inventions, Present Perfect Simple, for & since, Present Perfect Continuous & Water Pollution",
    description: "استخدام المضارع التام البسيط مع ever/never/just/already/yet، الفروق بين for و since، المضارع التام المستمر، تلوث المياه وحمايتها، واختراعات غيرت وجه الحياة.",
    accentColor: "bg-soft-mint text-ink",
    bgGradient: "bg-paper border-ink",
    sourcePages: "الملزمة ص 53 - 69",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "4th-u3-l1",
        unitId: 43,
        lessonNumber: 1,
        titleAr: "الدرس الأول: المضارع التام البسيط والظروف (Present Perfect Simple & Adverbs)",
        titleEn: "Lesson 1: Present Perfect Simple with ever, never, just, already and yet",
        category: "grammar",
        summary: "ربط الماضي بالحاضر باستخدام المضارع التام البسيط وتوظيف ظروف الزمان الخاصة به.",
        sourcePages: "الملزمة ص 53 - 57",
        grammarRuleFormula: "Present Perfect Simple:\n- Subject + have / has + Past Participle (P.P.)\n- Adverbs Usage:\n  * ever: في الأسئلة فقط (Have you ever visited London?)\n  * never: في الجمل الإيجابية لتعطي معنى النفي القطعي (I have never eaten sushi.)\n  * just / already: مع الإثبات بعد have/has مباشرة\n  * yet: في نهاية جمل النفي والاستفهام فقط (I haven't finished my homework yet.)",
        detailedContent: [
          "مفهوم المضارع التام البسيط: حدث وقع في الماضي دون تحديد زمن دقيق، أو فعل تم بالماضي ولا تزال أثاره واضحة في الحاضر.",
          "تصاريف P.P. الشائعة: do -> done, see -> seen, write -> written, go -> gone/been, buy -> bought.",
          "تمرين كتاب النشاط ص 54: ملء الفراغات بالظروف والتصانيف الصحيحة."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 55: كلمة yet تأتي دائماً في نهاية الجملة وتستلزم أن تكون الجملة منفية بـ haven't/hasn't أو سؤالاً!"
        ],
        examples: [
          {
            en: "Have you ever used a self-access centre to practise your English?",
            ar: "هل سبق لك أبداً أن استخدمت مركز التعلم الذاتي لممارسة لغتك الإنكليزية؟",
            highlight: "Have you ever used",
            note: "استخدام ever في السؤال بالمضارع التام"
          }
        ],
        exercises: [
          {
            id: "4u3-ex1",
            question: "I haven't received my exam results ______.",
            options: ["yet", "already", "never", "ever"],
            correctAnswer: "yet",
            explanation: "في نهاية الجملة المنفية بالمضارع التام نستخدم yet (الملزمة ص 55).",
            type: "mcq",
            sourcePages: "الملزمة ص 55"
          }
        ]
      },
      {
        id: "4th-u3-l2",
        unitId: 43,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: قواعد for و since مع المضارع التام (for vs since)",
        titleEn: "Lesson 2: Duration with (for) vs Starting Time with (since)",
        category: "grammar",
        summary: "التمييز بين for المدة الزمنية المحسوبة و since نقطة البداية المحددة للحدث.",
        sourcePages: "الملزمة ص 58 - 61",
        grammarRuleFormula: "1) Since + بداية زمنية اسمية ومحددة:\n   - 2010, October, Monday, 8 o'clock, yesterday, last week, I was a child.\n2) For + مدة زمنية محسوبة بإجمالي الوحدات:\n   - three hours, ten days, five years, a long time, ages, two centuries.",
        detailedContent: [
          "القاعدة العامة: since تجيب عن سؤال (متى بدأ الفعل بالضبط؟)، بينما for تجيب عن سؤال (كم هي المدة المستغرقة إجمالاً؟).",
          "تمرين كتاب النشاط ص 58: اختيارات وزارية متكررة بين for و since."
        ],
        teacherNotes: [
          "سر امتحاني بالملزمة ص 59: إذا وجدت رقماً متبوعاً بـ (seconds, minutes, hours, days, months, years) اختر for فوراً! أما إذا وجدت سنة بالرقم مثل 2018 أو يوماً بالاسم مثل Friday اختر since."
        ],
        examples: [
          {
            en: "We have lived in this neighbourhood since 2015.",
            ar: "نحن نعيش في هذا الحي منذ عام 2015.",
            highlight: "since 2015",
            note: "since مع نقطة بداية محددة بالرقم"
          }
        ],
        exercises: [
          {
            id: "4u3-ex2",
            question: "She has been studying in the library ______ three hours.",
            options: ["for", "since", "from", "ago"],
            correctAnswer: "for",
            explanation: "وجود مدة محسوبة باللغات (three hours) يقتضي استخدام for (الملزمة ص 59).",
            type: "mcq",
            sourcePages: "الملزمة ص 59"
          }
        ]
      },
      {
        id: "4th-u3-l3",
        unitId: 43,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: المضارع التام المستمر (Present Perfect Continuous)",
        titleEn: "Lesson 3: Present Perfect Continuous (have/has been + V-ing) & How long",
        category: "grammar",
        summary: "التعبير عن أفعال بدأت بالماضي واستمرت حتى الحاضر ولا تزال جارية مع التركيز على طول المدة واستخدام How long.",
        sourcePages: "الملزمة ص 62 - 64",
        grammarRuleFormula: "Present Perfect Continuous:\n- Subject + have / has + been + V-ing\n- Negative: Subject + haven't / hasn't + been + V-ing\n- Question: How long + have / has + Subject + been + V-ing...?\n- Example: How long have you been learning French? - I've been learning French for two years.",
        detailedContent: [
          "الفرق بين البسيط والمستمر: المضارع التام المستمر يركز على استمرارية الفعل والنشاط وطول المدة الزمنية المستغرقة.",
          "تمرين كتاب النشاط ص 62: تكوين أسئلة بـ How long وإجاباتها بـ for و since."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 63: أفعال الإدراك والحالة مثل know, be, have لا تأخذ المضارع التام المستمر! نقول I have known him for years (وليس I have been knowing)."
        ],
        examples: [
          {
            en: "How long have you been waiting for the school bus?",
            ar: "كم من الوقت وأنت تنتظر حافلة المدرسة؟",
            highlight: "How long have you been waiting",
            note: "سؤال عن استمرارية الانتظار بالمضارع التام المستمر"
          }
        ],
        exercises: [
          {
            id: "4u3-ex3",
            question: "It has ______ raining continuously since early morning.",
            options: ["been", "be", "being", "was"],
            correctAnswer: "been",
            explanation: "تركيب المضارع التام المستمر يتطلب been بعد has متبوعة بـ V-ing (has been raining) (الملزمة ص 63).",
            type: "mcq",
            sourcePages: "الملزمة ص 63"
          }
        ]
      },
      {
        id: "4th-u3-l4",
        unitId: 43,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: تلوث المياه والكوارث البيئية (Water Pollution & Environment)",
        titleEn: "Lesson 4: Water Pollution, Environmental Threats & Protecting Rivers",
        category: "reading",
        summary: "القطعة البيئية حول مخاطر تلوث الأنهار والمياه بالنفايات الكيميائية والبلاستيكية وآثارها على صحة الإنسان والكائنات البحرية.",
        sourcePages: "الملزمة ص 65 - 67",
        detailedContent: [
          "تلوث المياه (Water Pollution): إلقاء المخلفات الصناعية والمياه العادمة والبلاستيك في الأنهار والمحيطات يقتل ملايين الكائنات البحرية ويسمم مياه الشرب.",
          "الحلول البيئية: تصفية مياه الصرف، تدوير البلاستيك، فرض غرامات على المصانع الملوثة، وتنظيف الشواطئ وضفاف الأنهار.",
          "أسئلة الاستيعاب البيئية (الملزمة ص 67)."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 66: Clean water is essential for human survival and maintaining natural ecosystems."
        ],
        examples: [
          {
            en: "Dumping toxic industrial waste into rivers causes severe water pollution.",
            ar: "إلقاء النفايات الصناعية السامة في الأنهار يسبب تلوثاً مائياً خطيراً.",
            highlight: "toxic industrial waste",
            note: "مصطلح بيئي رئيسي"
          }
        ],
        exercises: [
          {
            id: "4u3-ex4",
            question: "Water pollution harms marine life and makes drinking water ______.",
            options: ["unsafe", "clean", "fresh", "delicious"],
            correctAnswer: "unsafe",
            explanation: "تلوث المياه يجعل مياه الشرب غير آمنة للاستخدام البشري (unsafe) (الملزمة ص 67).",
            type: "mcq",
            sourcePages: "الملزمة ص 67"
          }
        ]
      },
      {
        id: "4th-u3-l5",
        unitId: 43,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: اختراعات غيّرت وجه الحياة واختبار الوحدة (Inventions & Unit 3 Test)",
        titleEn: "Lesson 5: Life-Changing Inventions & Comprehensive Unit 3 Test",
        category: "reading",
        summary: "استعراض أهم الاختراعات العلمية والتكنولوجية واختبار الوحدة الثالثة الشامل.",
        sourcePages: "الملزمة ص 68 - 69",
        detailedContent: [
          "الاختراعات الكبرى: المصباح الكهربائي، الهاتف، الحواسيب، والإنترنت.",
          "اختبار الوحدة الثالثة الشامل في القواعد والمفردات وقواعد for/since والتام المستمر."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 68: Inventions make daily tasks faster, safer, and more efficient."
        ],
        examples: [
          {
            en: "Scientific inventions have radically transformed modern medicine and transportation.",
            ar: "غيرت الاختراعات العلمية جذرياً الطب والتنقل في العصر الحديث.",
            highlight: "scientific inventions",
            note: "أهمية التطور العلمي"
          }
        ],
        exercises: [
          {
            id: "4u3-ex5",
            question: "The invention of the internet has allowed people to communicate ______.",
            options: ["instantly", "slowly", "hardly", "rarely"],
            correctAnswer: "instantly",
            explanation: "سمح الإنترنت بالاتصال الفوري والسريع حول العالم (instantly) (الملزمة ص 68).",
            type: "mcq",
            sourcePages: "الملزمة ص 68"
          }
        ]
      }
    ]
  },
  {
    id: 44,
    number: 4,
    titleAr: "الوحدة الرابعة: المراجعة الشاملة للفصل الأول (Semester 1 Comprehensive Revision)",
    titleEn: "Unit 4: Semester 1 Consolidation, Iraqi Wedding Customs & Mid-Year Exam",
    description: "مراجعة كبرى ومكثفة لجميع قواعد وقراءات ومفردات الوحدات 1 و2 و3: مراجعة عادات الزفاف في العراق، دمج الأزمنة، والامتحان التحريري الشامل لنصف السنة (100 درجة).",
    accentColor: "bg-yellow text-ink",
    bgGradient: "bg-paper border-ink",
    sourcePages: "الملزمة ص 69 - 74",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "4th-u4-l1",
        unitId: 44,
        lessonNumber: 1,
        titleAr: "الدرس الأول: مراجعة عادات وتقاليد الزفاف في العراق (Iraqi Wedding Customs Revision)",
        titleEn: "Lesson 1: Revision of Wedding Customs & Cultural Celebrations",
        category: "reading",
        summary: "مراجعة استيعابية مكثفة لقطعة عادات الزفاف في العراق، نقش الحناء، والزي التراثي للعروسين.",
        sourcePages: "الملزمة ص 69 - 71",
        detailedContent: [
          "مراجعة تفاصيل الزفاف العراقي (Student's Book p. 40): مراسم يوم الخميس، ليلة الحناء، والبدلة وفستان الزفاف الأبيض والمأدبة الجماعية.",
          "تمرين التوصيل المفاهيمي الشامل في كتاب النشاط."
        ],
        teacherNotes: [
          "أسئلة المراجعة بالملزمة ص 70:",
          "1. On which day do people usually get married in Iraq? -> On Thursday.",
          "2. What does the bride's white dress symbolize? -> Purity."
        ],
        examples: [
          {
            en: "Relatives and friends give valuable gifts to the new bride and groom.",
            ar: "يقدم الأقارب والأصدقاء هدايا قيمة للعروسين الجديدين.",
            highlight: "bride and groom",
            note: "مصطلحات الزفاف التراثية"
          }
        ],
        exercises: [
          {
            id: "4u4-ex1",
            question: "In Iraqi weddings, the white dress worn by the bride symbolizes ______.",
            options: ["purity", "wealth", "anger", "speed"],
            correctAnswer: "purity",
            explanation: "يرمز الفستان الأبيض للعروس إلى النقاء والبراءة (purity) (الملزمة ص 70).",
            type: "mcq",
            sourcePages: "الملزمة ص 70"
          }
        ]
      },
      {
        id: "4th-u4-l2",
        unitId: 44,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: مراجعة القواعد التراكمية للفصل الأول (Cumulative Grammar Revision)",
        titleEn: "Lesson 2: Revision of Present & Past Tenses, Indirect Questions & Present Perfect",
        category: "grammar",
        summary: "مراجعة شاملة لجميع صيغ القواعد المدروسة في الوحدات 1 و2 و3 استعداداً لامتحان نصف السنة المدرسي.",
        sourcePages: "الملزمة ص 71 - 73",
        grammarRuleFormula: "Semester 1 Grammar Summary:\n1) Present Simple vs Present Continuous\n2) Indirect Questions (Could you tell me...)\n3) -ed vs -ing Adjectives\n4) Past Narrative: Past Simple vs Continuous (while / when)\n5) used to + Infinitive for past habits\n6) Adverbs of Manner (Adjective + ly & irregulars)\n7) Present Perfect Simple (ever/never/just/already/yet)\n8) Duration with for & since\n9) Present Perfect Continuous",
        detailedContent: [
          "جدول القواعد والمقارنات النحوية الشامل بالملزمة ص 72.",
          "تمارين اختيارات مجمعة من امتحانات نصف السنة السابقة."
        ],
        teacherNotes: [
          "نصيحة الملزمة ص 73: ركز جيداً على قاعدة الأسئلة غير المباشرة وfor/since والتصريف الثالث للأفعال الشاذه."
        ],
        examples: [
          {
            en: "Could you tell me where the library is?",
            ar: "هل يمكن أن تخبرني أين تقع المكتبة؟",
            highlight: "where the library is",
            note: "تطبيق الأسئلة غير المباشرة"
          }
        ],
        exercises: [
          {
            id: "4u4-ex2",
            question: "She has been working in this company ______ 2018.",
            options: ["since", "for", "ago", "from"],
            correctAnswer: "since",
            explanation: "وجود سنة محددة بالرقم 2018 يوجب استخدام since (الملزمة ص 72).",
            type: "mcq",
            sourcePages: "الملزمة ص 72"
          }
        ]
      },
      {
        id: "4th-u4-l3",
        unitId: 44,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: الاختبار التحريري الشامل لنصف السنة (Semester 1 Comprehensive Exam)",
        titleEn: "Lesson 3: Official 100-Mark Mid-Year Examination Model Paper",
        category: "reading",
        summary: "النموذج الامتحاني الشامل المكتوب في الملزمة ص 74 لنصف السنة (100 درجة كاملة) موزع وفق معايير وزارة التربية العراقية.",
        sourcePages: "الملزمة ص 74",
        detailedContent: [
          "توزيع درجات امتحان نصف السنة الرسمي (100 درجة):",
          "1. السؤال الأول (20 درجة): قطعة خارجية ونصوص الكتاب المقررة (كندا، اليونيسيف، الزفاف).",
          "2. السؤال الثاني (30 درجة): القواعد والوظائف اللغوية (الأزمنة، الأسئلة غير المباشرة، used to، for/since).",
          "3. السؤال الثالث (20 درجة): المفردات والإملاء وتصانيف الكلمات وضروف الطريقة.",
          "4. السؤال الرابع (10 درجات): الأدب المقرّر (قصة جزيرة الكنز لروبرت لويس ستيفنسون).",
          "5. السؤال الخامس (20 درجة): الإنشاء التحريري (استمارة المعلومات أو رحلة أربيل أو اليونيسيف)."
        ],
        teacherNotes: [
          "توجيه الملزمة ص 74: وزع وقت الامتحان البالغ ساعتين ونصف بدقة، وابدأ بإجابة القواعد والإنشاء الضامنة للدرجات."
        ],
        examples: [
          {
            en: "An official 100-mark mid-year exam tests all linguistic and functional skills.",
            ar: "يختبر امتحان نصف السنة الرسمي المكون من 100 درجة جميع المهارات اللغوية والوظيفية.",
            highlight: "100-mark exam",
            note: "الدرجة الكلية الرسمية"
          }
        ],
        exercises: [
          {
            id: "4u4-ex3",
            question: "The standard total mark for the official Iraqi mid-year exam is ______ marks.",
            options: ["100", "50", "75", "120"],
            correctAnswer: "100",
            explanation: "الدرجة الكلية الرسمية للامتحان التحريري النهائي لنصف السنة هي 100 درجة (الملزمة ص 74).",
            type: "mcq",
            sourcePages: "الملزمة ص 74"
          }
        ]
      }
    ]
  }
];
