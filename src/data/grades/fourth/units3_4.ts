import { Unit } from '../../../types';

// =========================================================================
// الوحدة الثالثة والرابعة - ملزمة الرابع الإعدادي (طبعة 2025)
// مرجع الصفحات: ص 53 - 73
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
    sourcePages: "الملزمة ص 53 - 68",
    academicYear: "2025",
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
        sourcePages: "الملزمة ص 68",
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
    titleAr: 'الوحدة الرابعة: سنة الفجوة والسفر والواجبات',
    titleEn: 'Unit 4: Taking a Gap Year, Travel and Obligation',
    description: 'تبدأ الوحدة بقراءة Taking a Gap Year وما يرتبط بها من تغيرات في حياة الناس والدراسة والعمل، ثم تعرض have to وdo not have to للتعبير عن الواجب وعدم الوجوب، ومفردات السفر.',
    accentColor: 'bg-yellow text-ink',
    bgGradient: 'bg-paper border-ink',
    sourcePages: 'الملزمة ص 69 - 73',
    academicYear: '2025',
    lessons: [
      {
        id: '4th-u4-l1',
        unitId: 44,
        lessonNumber: 1,
        titleAr: 'الدرس الأول: سنة الفجوة والتغيرات في الحياة',
        titleEn: 'Lesson 1: Taking a Gap Year and Changing Situations',
        category: 'reading',
        summary: 'قراءة عن أخذ سنة فجوة قبل متابعة الدراسة أو العمل، مع تمارين مرتبطة بالتغيرات التي تحدث بمرور الوقت.',
        sourcePages: 'الملزمة ص 69 - 70',
        detailedContent: [
          'تتناول القراءة فكرة Taking a Gap Year والأسباب أو المزايا التي قد تدفع بعض الأشخاص إلى أخذ سنة فاصلة.',
          'تتبع القراءة تمارين فهم وأسئلة حول مزايا سنة الفجوة وما إذا كان الطالب يرغب في تجربتها.',
          'تظهر في تمارين الوحدة جمل عن تغيرات مستمرة باستخدام المضارع المستمر، مثل ازدياد أعداد الدارسين في الخارج أو ارتفاع درجات الحرارة.'
        ],
        teacherNotes: [
          'هذا محتوى الوحدة الرابعة بحسب صفحات الملزمة؛ لا تصف هذه الصفحات مراجعة عادات الزفاف أو امتحان نصف السنة.'
        ],
        examples: [
          { en: 'More and more people are studying abroad.', ar: 'يدرس عدد متزايد من الناس في الخارج.', highlight: 'are studying', note: 'المضارع المستمر لوصف تغير متزايد' }
        ],
        exercises: [
          {
            id: '4u4-ex1',
            question: 'More and more people ______ abroad as part of their university degree.',
            options: ['are studying', 'studies', 'studied', 'has studied'],
            correctAnswer: 'are studying',
            explanation: 'تُستخدم صيغة المضارع المستمر للتغير الذي يحدث بصورة متزايدة.',
            type: 'mcq',
            sourcePages: 'الملزمة ص 69 - 70',
            contentOrigin: 'ai_generated'
          }
        ]
      },
      {
        id: '4th-u4-l2',
        unitId: 44,
        lessonNumber: 2,
        titleAr: 'الدرس الثاني: have to وdo not have to',
        titleEn: 'Lesson 2: Obligation and No Obligation',
        category: 'grammar',
        summary: 'التعبير عن الواجب أو الضرورة باستخدام have to، والتعبير عن عدم الوجوب باستخدام do not have to / does not have to.',
        sourcePages: 'الملزمة ص 71 - 72',
        grammarRuleFormula: 'Affirmative: Subject + have / has to + base verb.\\nNegative: Subject + do not / does not have to + base verb.\\nQuestion: Do / Does + subject + have to + base verb?',
        detailedContent: [
          'تشرح القاعدة استعمال have to للتعبير عن واجب أو ضرورة.',
          'تُستخدم do not have to أو does not have to للدلالة على أن الفعل ليس واجباً أو ضرورياً.',
          'تتضمن الصفحات أمثلة وتمارين لإكمال الجمل بالصيغة الصحيحة.'
        ],
        teacherNotes: [
          'لا تخلط بين عدم الوجوب (do not have to) والمنع (must not)، فهما ليسا المعنى نفسه.'
        ],
        examples: [
          { en: 'You have to show your passport.', ar: 'يجب عليك إظهار جواز سفرك.', highlight: 'have to', note: 'واجب أو ضرورة' },
          { en: 'You do not have to pay today.', ar: 'ليس عليك أن تدفع اليوم.', highlight: 'do not have to', note: 'عدم الوجوب' }
        ],
        exercises: [
          {
            id: '4u4-ex2',
            question: 'You ______ bring your own food; the hotel provides meals.',
            options: ['do not have to', 'has to', 'having to', 'does has to'],
            correctAnswer: 'do not have to',
            explanation: 'الجملة تنفي وجود ضرورة لإحضار الطعام.',
            type: 'mcq',
            sourcePages: 'الملزمة ص 71 - 72',
            contentOrigin: 'ai_generated'
          }
        ]
      },
      {
        id: '4th-u4-l3',
        unitId: 44,
        lessonNumber: 3,
        titleAr: 'الدرس الثالث: مفردات السفر والرحلات',
        titleEn: 'Lesson 3: Travel Vocabulary',
        category: 'vocabulary',
        summary: 'مفردات مرتبطة بالسفر والحجوزات والأمتعة والتوقف بين الرحلات، مع تمارين توظيف الكلمات في سياقها.',
        sourcePages: 'الملزمة ص 72 - 73',
        detailedContent: [
          'تتضمن الصفحات مفردات السفر مثل receipt وborrow وporter وform وreturn ticket وstopover وalmost.',
          'تُستخدم المفردات في جمل وتمارين تتعلق بالسفر والفنادق والحجوزات والرحلات.',
          'تشير إحالات الحلول في نهاية الملزمة إلى تمارين الوحدة الرابعة ضمن صفحات الحلول.'
        ],
        teacherNotes: [
          'هذه المفردات مأخوذة من تمارين السفر في الملزمة؛ التمرين التفاعلي المضاف هنا تدريب من المنصة وليس نقلاً لامتحان سابق.'
        ],
        examples: [
          { en: 'There is a two-hour stopover in Kuwait City.', ar: 'هناك توقف لمدة ساعتين في مدينة الكويت.', highlight: 'stopover', note: 'مفردة في سياق السفر' }
        ],
        exercises: [
          {
            id: '4u4-ex3',
            question: 'There is a two-hour ______ in Kuwait City.',
            options: ['stopover', 'receipt', 'porter', 'surname'],
            correctAnswer: 'stopover',
            explanation: 'stopover تعني توقفاً مؤقتاً أثناء الرحلة.',
            type: 'mcq',
            sourcePages: 'الملزمة ص 72 - 73',
            contentOrigin: 'ai_generated'
          }
        ]
      }
    ]
  }
];
