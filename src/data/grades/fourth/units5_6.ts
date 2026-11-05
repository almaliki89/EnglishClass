import { Unit } from '../../../types';

// =========================================================================
// الوحدة الخامسة والسادسة - ملزمة الرابع الإعدادي (2025-2026)
// مرجع الصفحات: ص 74 - 119
// =========================================================================

export const FOURTH_PREPARATORY_UNITS_5_6: Unit[] = [
  {
    id: 45,
    number: 5,
    titleAr: "الوحدة الخامسة: المعالم والأدب والمتحف العراقي (Places to Visit & Culture)",
    titleEn: "Unit 5: Places to Visit, Future Forms (going to, will, Present Continuous), The National Museum of Iraq & Personality Adjectives",
    description: "صيغ المستقبل (going to, will, المضارع المستمر للمواعيد)، القطعة الذهبية للمتحف الوطني العراقي ببغداد، صفات المظهر والشخصية، الأفعال المتبوعة بـ (to + مصدر)، وتقديم العروض.",
    accentColor: "from-rose-600 to-red-600",
    bgGradient: "bg-gradient-to-r from-rose-50 to-red-50 border-rose-200",
    sourcePages: "الملزمة ص 74 - 97",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "4th-u5-l1",
        unitId: 45,
        lessonNumber: 1,
        titleAr: "الدرس الأول: صيغ المستقبل والتخطيط (Future Forms: going to, will & Present Continuous)",
        titleEn: "Lesson 1: Future Expressive Forms - Intentions, Predictions & Scheduled Arrangements",
        category: "grammar",
        summary: "التمييز بين النوايا والخطط الشخصية بـ going to، والوعود والتوقعات بـ will، والمواعيد والترتيبات المؤكدة بالمضارع المستمر.",
        sourcePages: "الملزمة ص 74 - 79",
        grammarRuleFormula: "1) going to (خطط ونوايا مسبقة / دليل حاضر):\n   - S + am / is / are + going to + Base Verb\n   - Example: We are going to visit the National Museum tomorrow.\n2) will (قرارات سريعة / وعود / توقعات بدون دليل):\n   - S + will ('ll) / won't + Base Verb\n   - Example: I think the weather will be sunny on Friday.\n3) Present Continuous for fixed arrangements (ترتيبات ومواعيد محددة وقتياً):\n   - S + am / is / are + V-ing\n   - Example: I am meeting my uncle at 8:00 PM tonight.",
        detailedContent: [
          "شرح صيغ المستقبل المتعددة في اللغة الإنكليزية وطريقة استخدام كل صيغة بناءً على دلالة الجملة.",
          "تمرين كتاب النشاط ص 76: اختيار صيغة المستقبل الأنسب للموقف.",
          "القرارات المفاجئة الناتجة عن لحظة التحدث تستخدم will: I will answer the phone."
        ],
        teacherNotes: [
          "سر الملزمة ص 76: إذا رأيت ترتيبات محددة بوقت أو موعد ثابت (at 8:00, tomorrow night) اختر المضارع المستمر! وإذا وجد نية ومخطط مسبق (intend, plan) اختر going to."
        ],
        examples: [
          {
            en: "Look at those dark clouds! It is going to rain.",
            ar: "انظر إلى تلك الغيوم الداكنة! إنها ستُمطر (توقع مع دليل حاضر).",
            highlight: "is going to rain",
            note: "going to للتوقع المستند على دليل ملموس"
          }
        ],
        exercises: [
          {
            id: "4u5-ex1",
            question: "I have booked the flight tickets; I ______ to London next Tuesday.",
            options: ["am flying", "will fly", "fly", "flown"],
            correctAnswer: "am flying",
            explanation: "حجز التذاكر ترتيب وموعد مؤكد في المستقبل القريب يستلزم استخدام المضارع المستمر am flying (الملزمة ص 76).",
            type: "mcq",
            sourcePages: "الملزمة ص 76"
          }
        ]
      },
      {
        id: "4th-u5-l2",
        unitId: 45,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: المتحف الوطني العراقي في بغداد (The National Museum of Iraq)",
        titleEn: "Lesson 2: Cultural Heritage: The National Museum of Iraq in Baghdad",
        category: "reading",
        summary: "القطعة الاستيعابية الشهيرة للمتحف الوطني العراقي بمنطقة العلاوي ببغداد، تماثيل الثور المجنح (Lamassu)، والكنوز الأثرية لبلاد ما بين النهرين.",
        sourcePages: "الملزمة ص 80 - 85",
        detailedContent: [
          "المتحف الوطني العراقي (The National Museum of Iraq): يقع في منطقة العلاوي العريقة ببغداد؛ افتتحت مجموعته الأولى الكاتبة والرحالة جيرترود بيل عام 1923، ثم انتقل لمبناه الحالي عام 1966.",
          "الآثار الشامخة: يضم قاعات ضخمة تعكس حضارات السومريين والبابليين والآشوريين والعهد الإسلامي، وأشهر معروضاته الثور الآشوري المجنح (Lamassu) والكنوز الملكية من نمرود وأور.",
          "أسئلة الاستيعاب المدرسية (الملزمة ص 84): متى أُسس المتحف؟ في أي حي يقع؟ وما اسم الثور الآشوري المجنح؟"
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 84:",
          "1. In which district is the National Museum of Iraq located? -> In Al-Salhiyah / Al-Alawi, Baghdad.",
          "2. What is the name of the winged bull? -> Lamassu.",
          "3. When was the current museum building opened? -> In 1966."
        ],
        examples: [
          {
            en: "The National Museum of Iraq houses priceless treasures from ancient Mesopotamian civilizations.",
            ar: "يحتضن المتحف الوطني العراقي كنوزاً لا تقدر بثمن من حضارات بلاد ما بين النهرين القديمة.",
            highlight: "Mesopotamian civilizations",
            note: "حقيقة استيعابية من قطعة المتحف"
          }
        ],
        exercises: [
          {
            id: "4u5-ex2",
            question: "The famous ancient Assyrian winged bull exhibited in the museum is called ______.",
            options: ["Lamassu", "Babylon", "Ziggurat", "Hammurabi"],
            correctAnswer: "Lamassu",
            explanation: "اسم الثور الآشوري المجنح الشهير هو Lamassu (الملزمة ص 84).",
            type: "mcq",
            sourcePages: "الملزمة ص 84"
          }
        ]
      },
      {
        id: "4th-u5-l3",
        unitId: 45,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: صفات المظهر والشخصية (Appearance & Personality Adjectives)",
        titleEn: "Lesson 3: Vocabulary - Describing Physical Appearance & Personality Traits",
        category: "vocabulary",
        summary: "حفظ صفات الوصف الخارجي للشخصية (bald, slim, dark-complexioned, overweight) وصفات الشخصية النفسية (lively, smart, forgetful).",
        sourcePages: "الملزمة ص 86 - 89",
        grammarRuleFormula: "Physical Appearance & Personality Vocab:\n- Physical: bald (أصلع), slim (رشيق), overweight (بدين/زائد الوزن), dark-complexioned (أسمر البشرة), wavy hair (شعر موجي)\n- Personality: lively (مفعم بالحيوية), smart (ذكي/أنيق), forgetful (كثير النسيان), sensible (عاقل/حكيم).",
        detailedContent: [
          "توصيل المفردات بالتعاريف وملاحظة اللباقة في الوصف: نستخدم overweight بدلاً من fat لأنها أكثر تهذيباً وأدباً.",
          "تمرين كتاب النشاط ص 82: وصف أفراد العائلة والأصدقاء بالصفات اللائقة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 87: عند وصف وزن شخص غير نحيف، من الأدب والتهذيب استخدام كلمة overweight بدلاً من كلمة fat."
        ],
        examples: [
          {
            en: "My grandfather is a sensible and lively man despite his old age.",
            ar: "جدي رجل حكيم ومفعم بالحيوية رغم كبر سنه.",
            highlight: "sensible and lively",
            note: "صفات شخصية إيجابية"
          }
        ],
        exercises: [
          {
            id: "4u5-ex3",
            question: "A person who frequently forgets his keys or appointments is described as ______.",
            options: ["forgetful", "lively", "slim", "smart"],
            correctAnswer: "forgetful",
            explanation: "الشخص الذي ينسى كثيراً يوصف بـ forgetful (الملزمة ص 87).",
            type: "mcq",
            sourcePages: "الملزمة ص 87"
          }
        ]
      },
      {
        id: "4th-u5-l4",
        unitId: 45,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: الأفعال المتبوعة بالمصدر (Verbs Followed by to + Infinitive)",
        titleEn: "Lesson 4: Grammar - Verbs Followed by (to + Infinitive: offer, agree, decide, refuse, plan)",
        category: "grammar",
        summary: "دراسة الأفعال التي تتطلب بعدها مجيء المفعول غير المباشر مسبوقاً بـ (to + مصدر) مثل (agree, decide, offer, refuse, promise, plan, hope).",
        sourcePages: "الملزمة ص 90 - 93",
        grammarRuleFormula: "Verbs + to + Infinitive:\n- Subject + Verb + to + Base Verb\n- Pattern Verbs: agree (يوعد/يرافق), decide (يقرر), offer (يعرض), refuse (يرفض), promise (يعد), plan (يخطط), hope (يأمل), expect (يتوقع).\n- Examples:\n  * She refused to tell her secret.\n  * They decided to visit Erbil castle.\n  * He offered to carry my heavy suitcase.",
        detailedContent: [
          "شرح تركيب الأفعال المصدرية: هذه المجموعة من الأفعال لا تقبل -ing بعدها بل تأخذ دائماً to + مصدر مجرد.",
          "تمرين كتاب النشاط ص 86: ربط الأفعال بالمصادر المناسبة لتكوين جمل تامة المعنى."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 91: الأفعال (decide, offer, refuse, agree, promise) تأخذ دائماً (to + مصدر)! فاحذر أن تضع بعدها فعلاً ينتهي بـ -ing."
        ],
        examples: [
          {
            en: "We agreed to meet outside the National Museum at 10:00 AM.",
            ar: "اتفقنا على اللقاء خارج المتحف الوطني في الساعة العاشرة صباحاً.",
            highlight: "agreed to meet",
            note: "الفعل agreed متبوع بـ to + المصدر meet"
          }
        ],
        exercises: [
          {
            id: "4u5-ex4",
            question: "My brother offered ______ me to the airport in his car.",
            options: ["to drive", "driving", "drive", "drove"],
            correctAnswer: "to drive",
            explanation: "الفعل offered يأخذ دائماً تركيب to + المصدر المجرد (to drive) (الملزمة ص 91).",
            type: "mcq",
            sourcePages: "الملزمة ص 91"
          }
        ]
      },
      {
        id: "4th-u5-l5",
        unitId: 45,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: عروض المساعدة والاقتراحات واختبار الوحدة (Offers, Proposals & Unit 5 Test)",
        titleEn: "Lesson 5: Making Offers (Shall I / Would you like me to) & Comprehensive Unit 5 Test",
        category: "grammar",
        summary: "أساليب تقديم العروض والمساعدة واختبار الوحدة الخامسة الشامل.",
        sourcePages: "الملزمة ص 94 - 97",
        grammarRuleFormula: "Offers Formulas:\n1) Shall I + Base Verb...? (Shall I buy the tickets for you?)\n2) Would you like me to + Base Verb...? (Would you like me to open the door?)\n3) I'll + Base Verb... (I'll help you carry that bag.)",
        detailedContent: [
          "تقديم العروض بأسلوب لبق ومؤدب والرد بالقبول أو الرفض.",
          "اختبار الوحدة الخامسة الشامل من ص 96-97 لمراجعة القواعد والمتحف العراقي وصفات الشخصية."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 95: بعد Shall I ضع مصدراً مجرد مباشرة: Shall I help you?"
        ],
        examples: [
          {
            en: "Shall I buy the museum entry tickets for everyone?",
            ar: "هل أشتري تذاكر دخول المتحف للجميع؟",
            highlight: "Shall I buy",
            note: "صيغة عرض بـ Shall I"
          }
        ],
        exercises: [
          {
            id: "4u5-ex5",
            question: "______ I carry those heavy boxes for you? - Yes, please.",
            options: ["Shall", "Would", "Do", "Did"],
            correctAnswer: "Shall",
            explanation: "في تقديم العروض المباشر نستخدم Shall I متبوعة بالمصدر المجرد (الملزمة ص 95).",
            type: "mcq",
            sourcePages: "الملزمة ص 95"
          }
        ]
      }
    ]
  },
  {
    id: 46,
    number: 6,
    titleAr: "الوحدة السادسة: الصحة والمستقبل المجهول والكلام المنقول (Health, Future & Reported Speech)",
    titleEn: "Unit 6: Future Continuous, Health & Diet, Sleep & Teenagers, Reported Speech & FIFA World Cup",
    description: "المستقبل المستمر (will be V-ing)، نصائح التغذية والنوم للمراهقين مع د. الأنصاري، الكلام المنقول للجمل والأسئلة، البادئات واللواحق، احتماليات might، وتاريخ كأس العالم لكرة القدم.",
    accentColor: "from-indigo-600 to-violet-600",
    bgGradient: "bg-gradient-to-r from-indigo-50 to-violet-50 border-indigo-200",
    sourcePages: "الملزمة ص 97 - 119",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "4th-u6-l1",
        unitId: 46,
        lessonNumber: 1,
        titleAr: "الدرس الأول: المستقبل المستمر (Future Continuous: will be + V-ing)",
        titleEn: "Lesson 1: Future Continuous Tense for Ongoing Scheduled Actions",
        category: "grammar",
        summary: "التعبير عن أفعال ستكون مستمرة وجارية في وقت محدد بالضبط في المستقبل.",
        sourcePages: "الملزمة ص 97 - 100",
        grammarRuleFormula: "Future Continuous Formula:\n- Subject + will be + V-ing\n- Negative: Subject + won't be + V-ing\n- Question: Will + Subject + be + V-ing...?\n- Time phrases: at 10:00 AM tomorrow, this time next week, between 2 and 4 PM.\n- Example: At 9:00 PM tonight, I will be studying for my physics exam.",
        detailedContent: [
          "شرح صيغة المستقبل المستمر: نستخدمها عندما يكون الحدث مستغرقاً لوقت وفي منتصف حدوثه في وقت مستقبلي محدد.",
          "تمرين كتاب النشاط ص 99: صياغة جمل المستقبل المستمر وإعادة الترتيب."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 98: إذا رأيت عبارة فيها وقت محدد متبوعاً بـ tomorrow أو next week مثل (at 3:00 tomorrow) استخدم (will be + V-ing)."
        ],
        examples: [
          {
            en: "This time next week, we will be flying over the Mediterranean Sea.",
            ar: "في مثل هذا الوقت من الأسبوع القادم، سنكون نحلق فوق البحر الأبيض المتوسط.",
            highlight: "will be flying",
            note: "حدث مستمر في نقطة زمانية مستقبلية محددة"
          }
        ],
        exercises: [
          {
            id: "4u6-ex1",
            question: "At 10:00 tomorrow morning, I ______ in the classroom taking a test.",
            options: ["will be sitting", "will sit", "am sitting", "sat"],
            correctAnswer: "will be sitting",
            explanation: "وجود وقت محدد صباح غدٍ (At 10:00 tomorrow morning) يتطلب المستقبل المستمر will be sitting (الملزمة ص 98).",
            type: "mcq",
            sourcePages: "الملزمة ص 98"
          }
        ]
      },
      {
        id: "4th-u6-l2",
        unitId: 46,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: نوم المراهقين والصحة مع د. إبراهيم الأنصاري (Sleep & Health with Dr. Ansari)",
        titleEn: "Lesson 2: Health Study: Teenagers, Sleep Science & Expert Advice from Dr. Ansari",
        category: "reading",
        summary: "دراسة د. إبراهيم الأنصاري حول أهمية نوم 8 إلى 10 ساعات للمراهقين وتأثير السهر والأجهزة الإلكترونية على النمو والتحصيل الدراسي.",
        sourcePages: "الملزمة ص 101 - 103",
        detailedContent: [
          "دراسة نوم المراهقين (Sleep & Teenagers): يحتاج المراهقون بين 8 إلى 10 ساعات من النوم المنتظم كل ليلة لاكتكمال نمو الدماغ والجسد.",
          "مراحل النوم (Stages of sleep): المرحلة الأولى هي بداية الاستغراق في النوم، ومرحلة الأحلام (REM sleep) أثنائها يتعافى العقل ويرسخ المعلومات.",
          "نصائح د. الأنصاري: تجنب الشاشات الذكية والأطعمة الثقيلة قبل النوم بساعة لتفادي الأرق."
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 102:",
          "1. How many hours of sleep should teenagers get per night? -> Between 8 and 10 hours.",
          "2. What should teenagers avoid before sleep? -> Heavy meals and using electronic screens."
        ],
        examples: [
          {
            en: "Dr Ansari emphasizes that adequate sleep is vital for teenagers' academic success and physical health.",
            ar: "يؤكد د. الأنصاري أن النوم الكافي مصيري للنجاح الأكاديمي والصحة البدنية للمراهقين.",
            highlight: "adequate sleep",
            note: "فائدة صحية رئيسية من الدراسة"
          }
        ],
        exercises: [
          {
            id: "4u6-ex2",
            question: "According to Dr Ibrahim Ansari, teenagers need between ______ hours of sleep every night.",
            options: ["8 and 10", "4 and 5", "12 and 14", "6 and 7"],
            correctAnswer: "8 and 10",
            explanation: "يحتاج المراهقون من 8 إلى 10 ساعات نوم يومياً حسب دراسة د. الأنصاري (الملزمة ص 102).",
            type: "mcq",
            sourcePages: "الملزمة ص 102"
          }
        ]
      },
      {
        id: "4th-u6-l3",
        unitId: 46,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: الكلام المنقول الأساسي (Reported Speech Statements & Questions)",
        titleEn: "Lesson 3: Direct to Reported Speech - Basic Tense Shifts & Pronoun Changes",
        category: "grammar",
        summary: "تحويل الجمل المباشرة والأسئلة إلى كلام منقول وإرجاع الزمن خطوة للماضي (Present -> Past).",
        sourcePages: "الملزمة ص 103 - 106",
        grammarRuleFormula: "Reported Speech Rules:\n- Present Simple -> Past Simple (speak -> spoke)\n- Present Continuous -> Past Continuous (is sleeping -> was sleeping)\n- Present Perfect -> Past Perfect (has finished -> had finished)\n- Modals: will -> would | can -> could | may -> might\n- Example: 'I am tired,' Ali said. -> Ali said that he was tired.",
        detailedContent: [
          "قواعد إرجاع الزمن والضمائر في الكلام المنقول للجمل الخبرية والأسئلة الاستفهامية البسيطة.",
          "تمرين كتاب النشاط ص 105: نقل تصريحات د. الأنصاري وأسئلة الطلاب."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 104: تحول الضمائر حسب القائل: I تحول إلى he أو she، و my تحول إلى his أو her."
        ],
        examples: [
          {
            en: "Direct: 'I love sports,' Sarah said.\nReported: Sarah said that she loved sports.",
            ar: "مباشر: 'أنا أحب الرياضة'، قالت سارة.\nمنقول: قالت سارة إنها كانت تحب الرياضة.",
            highlight: "loved",
            note: "تحول المضارع البسيط إلى ماضي بسيط"
          }
        ],
        exercises: [
          {
            id: "4u6-ex3",
            question: "Direct: 'I will call you tomorrow,' Ahmed said.\nReported: Ahmed said that he ______ call me the following day.",
            options: ["would", "will", "can", "is going to"],
            correctAnswer: "would",
            explanation: "تتحول will في الكلام المنقول إلى would (الملزمة ص 104).",
            type: "mcq",
            sourcePages: "الملزمة ص 104"
          }
        ]
      },
      {
        id: "4th-u6-l4",
        unitId: 46,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: التعبير عن الاحتمال بـ might وكأس العالم (Modals of Possibility & FIFA World Cup)",
        titleEn: "Lesson 4: Modals of Future Possibility (might) & History of the FIFA World Cup",
        category: "reading",
        summary: "استخدام الفعل الناقص might للتعبير عن الاحتمال المستقبلي غير المؤكد، وتاريخ بطولة كأس العالم لكرة القدم.",
        sourcePages: "الملزمة ص 112 - 115",
        grammarRuleFormula: "Future Possibility (might):\n- Subject + might / might not + Base Verb\n- Degree of certainty: 50% possible (غير مؤكد تماماً / احتمال جائز)\n- Example: Medicine is improving, so people might live longer lives in the future.",
        detailedContent: [
          "تاريخ كأس العالم (FIFA World Cup): أكبر حدث كروي في العالم يقام كل 4 سنوات؛ انطلقت أول بطولة عام 1930 في الأوروغواي، وتستضيف بطولة 2026 ثلاث دول معاً (أمريكا، كندا، المكسيك).",
          "استخدام might: للتعبير عن إمكانيات مستقبلية غير جازمة.",
          "تمرين كتاب النشاط ص 113: تكوين جمل بـ might حول التكنولوجيا والصحة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 113: الفعل بعد might يأتي دائماً مصدراً مجرداً خصالياً من الإضافات: She might join us (وليس might joins)."
        ],
        examples: [
          {
            en: "Scientists think that doctors might find cures for many chronic diseases in the future.",
            ar: "يعتقد العلماء أن الأطباء قد يكتشفون علاجات للعديد من الأمراض المزمنة مستقبلاً.",
            highlight: "might find",
            note: "احتمالية مستقبلية بـ might والمصدر"
          }
        ],
        exercises: [
          {
            id: "4u6-ex4",
            question: "In 2026, the FIFA World Cup will be hosted by three countries together: USA, Canada and ______.",
            options: ["Mexico", "Brazil", "Germany", "France"],
            correctAnswer: "Mexico",
            explanation: "تستضيف بطولة كأس العالم 2026 أمريكا وكندا والمكسيك معاً (الملزمة ص 114).",
            type: "mcq",
            sourcePages: "الملزمة ص 114"
          }
        ]
      },
      {
        id: "4th-u6-l5",
        unitId: 46,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: العقل والرياضة واختبار الوحدة السادسة (Mind & Exercise & Unit 6 Test)",
        titleEn: "Lesson 5: Benefits of Exercise for Mental Health & Comprehensive Unit 6 Test",
        category: "reading",
        summary: "فوائد التمرين البدني للصحة الذهنية والنفسية واختبار الوحدة السادسة الشامل.",
        sourcePages: "الملزمة ص 116 - 119",
        detailedContent: [
          "فوائد الرياضة للعقل: تقليل التوتر، تحسين الذاكرة، زيادة التركيز، وضخ الأكسجين للدماغ.",
          "اختبار الوحدة السادسة الشامل من ص 118-119 لمراجعة المستقبل المستمر والنوم وكأس العالم."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 116: Regular exercise improves memory, sharpens focus, and boosts mental energy."
        ],
        examples: [
          {
            en: "Physical exercise is not only good for muscles, but it also sharpens your mind.",
            ar: "ممارسة الرياضة ليست مفيدة للعضلات فحسب، بل إنها تصقل ذهنك أيضاً.",
            highlight: "sharpens your mind",
            note: "الفائدة الذهنية للرياضة"
          }
        ],
        exercises: [
          {
            id: "4u6-ex5",
            question: "Regular physical exercise helps reduce stress and improves mental ______.",
            options: ["focus", "weight", "height", "shoes"],
            correctAnswer: "focus",
            explanation: "تساعد الرياضة المنتظمة في تقليل التوتر وتحسين التركيز الذهني (focus) (الملزمة ص 116).",
            type: "mcq",
            sourcePages: "الملزمة ص 116"
          }
        ]
      }
    ]
  }
];
