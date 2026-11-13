import { Unit } from '../../../types';

// =========================================================================
// الوحدة الثالثة والرابعة - ملزمة الخامس الإعدادي (الأستاذ عمار غالب 2026)
// مرجع الصفحات: ص 72 - 103
// =========================================================================

export const FIFTH_PREPARATORY_UNITS_3_4: Unit[] = [
  {
    id: 53,
    number: 3,
    titleAr: "الوحدة الثالثة: البيئة والكائنات المهددة والشرطية الأولى (The Environment & First Conditional)",
    titleEn: "Unit 3: Endangered Animals, First Conditional, Recycling, Basra Pollution & Hybrid Cars",
    description: "ترتيب الصفات، الحيوانات المهددة بالانقراض، أفعال الإلزام must/mustn't، الحالة الشرطية الأولى، إعادة التدوير والبادئة re-، التلوث النفطي، تقديم العروض، والسيارات الهجينة وعودة المها العربي.",
    accentColor: "bg-soft-mint text-ink",
    bgGradient: "bg-paper border-ink",
    sourcePages: "الملزمة ص 72 - 96",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u3-l1",
        unitId: 53,
        lessonNumber: 1,
        titleAr: "الدرس الأول: الحيوانات المهددة بالانقراض وترتيب الصفات (Endangered Species & Order of Adjectives)",
        titleEn: "Lesson 1: Endangered Species & The Order of Adjectives Before Nouns",
        category: "grammar",
        summary: "دراسة أسماء الحيوانات المهددة بالانقراض والقاعدة الوزارية الصارمة لترتيب الصفات المتعددة أمام الاسم (الرأي، الحجم، العمر، الشكل، اللون، الأصل، المادة).",
        sourcePages: "الملزمة ص 72 - 74",
        grammarRuleFormula: "Order of Adjectives (ترتيب الصفات قبل الاسم):\n1. Opinion (الرأي): beautiful, lovely, nice, horrible, friendly\n2. Size (الحجم): big, huge, small, tiny, long\n3. Age (العمر): old, young, new, ancient\n4. Shape (الشكل): round, square, flat\n5. Colour (اللون): black, white, blue, brown\n6. Origin / Nationality (الأصل/الجنسية): Iraqi, Chinese, African, British\n7. Material (المادة الصنع): leather, wooden, plastic, cotton, metal\n+ Noun (الاسم الموصوف)\n* اختصار الحفظ في الملزمة: (رأي - حجم - عمر - شكل - لون - جنسية - مادة).",
        detailedContent: [
          "الكائنات المهددة بالانقراض (Endangered Animals): الحوت الصائب (Right Whale)، الباندا العملاقة (Giant Panda)، وحيد القرن الأسود (Black Rhino)، وسلحفاة صقرية المنقار (Hawksbill Turtle).",
          "قاعدة ترتيب الصفات: عند وصف اسم بأكثر من صفة، يجب أن تتبع الصفات تسلسلاً منطقياً صارماً يبدأ بالرأي الشخصي وينتهي بالمادة المصنوع منها الشيء.",
          "تمرين كتاب النشاط ص 42: إعادة ترتيب الكلمات لتكوين عبارة وصفية صحيحة: a lovely small round black plastic table."
        ],
        teacherNotes: [
          "تنبيه الملزمة ص 73: في الامتحان غالباً تأتي 3 صفات فقط مثل (رأي + لون + مادة) مثل: beautiful black leather jacket أو (حجم + لون + جنسية) مثل: big blue African elephant."
        ],
        examples: [
          {
            en: "She bought a beautiful little black Italian leather handbag.",
            ar: "اشترت حقيبة يد إيطالية جلدية سوداء صغيرة وجميلة.",
            highlight: "beautiful (opinion) -> little (size) -> black (colour) -> Italian (origin) -> leather (material)",
            note: "تطبيق متكامل لقاعدة تسلسل الصفات السبعة"
          }
        ],
        exercises: [
          {
            id: "5u3-ex1",
            question: "Ali has bought a ______ car.",
            options: [
              "fast new Japanese",
              "Japanese new fast",
              "new fast Japanese",
              "fast Japanese new"
            ],
            correctAnswer: "fast new Japanese",
            explanation: "الترتيب الصحيح هو: الرأي (fast) ثم العمر (new) ثم الجنسية والأصل (Japanese) (الملزمة ص 74).",
            type: "mcq",
            sourcePages: "الملزمة ص 74"
          }
        ]
      },
      {
        id: "5th-u3-l2",
        unitId: 53,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: ملفات حقائق الكائنات وأفعال الإلزام (Animal Factfiles & must/mustn't)",
        titleEn: "Lesson 2: Factfiles on Endangered Wildlife & Obligation (must vs mustn't)",
        category: "grammar",
        summary: "ملفات حقائق الحوت الصائب والسلحفاة والباندا، وقواعد الإلزام والتحريم بـ must و mustn't والفرق بين look و look like.",
        sourcePages: "الملزمة ص 75 - 78",
        grammarRuleFormula: "1) Modals of Obligation & Prohibition:\n   - must + Base Verb (إلزام قوي نابع من ضرورة حتمية أو حماية القانون)\n     Example: We must protect endangered animals from poachers.\n   - mustn't + Base Verb (تحريم ومنع قاطع لوجود ضرر أو عقوبة)\n     Example: You mustn't hunt without a legal license.\n\n2) look vs look like:\n   - look + Adjective (يبدو ... صفة) -> He looks tired.\n   - look like + Noun (يشبه ... اسم) -> That cloud looks like a rabbit.",
        detailedContent: [
          "حقائق الحيوانات (Student's Book p. 28): الحوت الصائب الشمالي لم يتبق منه سوى بضع مئات بسبب الصيد الجائر في القرون الماضية؛ السلاحف تفقد بيوضها على الشواطئ بسبب التلوث البلاستيكي.",
          "Must vs Mustn't: must تعني من الضروري والواجب فعله، بينما mustn't تعني إياك أن تفعل ذلك (منوع تماماً).",
          "Look + صفة (The tiger looks fierce)، بينما Look like + اسم (The baby looks like his father)."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 77: احذر من استخدام to بعد must أو mustn't. الفعل بعدها دائماً مصدر مجرد: You must save (وليس You must to save)."
        ],
        examples: [
          {
            en: "We must stop cutting down rainforests, and we mustn't pollute our oceans.",
            ar: "يجب علينا التوقف عن قطع الغابات المطيرة، ويُحظر علينا تلويث محيطاتنا.",
            highlight: "must stop / mustn't pollute",
            note: "إلزام بحماية البيئة وتحريم للتلويث"
          }
        ],
        exercises: [
          {
            id: "5u3-ex2",
            question: "You ______ throw plastic bottles into the sea; it harms marine creatures.",
            options: ["mustn't", "must", "need to", "should"],
            correctAnswer: "mustn't",
            explanation: "رمي البلاستيك في البحر يسبب أضراراً بالغة للكائنات البحرية، لذا فهو ممنوع ومحرم قطعاً (mustn't) (الملزمة ص 77).",
            type: "mcq",
            sourcePages: "الملزمة ص 77"
          }
        ]
      },
      {
        id: "5th-u3-l3",
        unitId: 53,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: المنظمات البيئية والتطوع (Environmental NGOs & Eco-Volunteering)",
        titleEn: "Lesson 3: Environmental Charities - Dugong Team, Clean Water & GreenMoney",
        category: "reading",
        summary: "أدوار المنظمات غير الحكومية في حماية أبقار البحر (Dugongs)، وحملات توفير المياه النظيفة، والتمويل الأخضر لحماية الطبيعة.",
        sourcePages: "الملزمة ص 79 - 81",
        detailedContent: [
          "فريق حماية بقر البحر (Dugong Team): حيوان ثديي بحري لطيف يتغذى على أعشاب البحر في الخليج العربي والبحر الأحمر، مهدد بشباك الصيد ومحركات القوارب السريعة.",
          "مشاريع المياه النظيفة (We Need Water): توفير آبار مياه ومحطات تنقية للمجتمعات الريفية التي تعاني من الجفاف.",
          "التمويل الأخضر (GreenMoney): مبادرات شبابية لجمع التبرعات وزراعة آلاف الأشجار لمكافحة التصحر وزحف الكثبان الرملية في العراق."
        ],
        teacherNotes: [
          "معلومة الملزمة ص 80: Dugongs are marine mammals that feed exclusively on seagrass and need calm, clean waters to survive."
        ],
        examples: [
          {
            en: "Volunteers joined the Dugong Team to monitor the coral reefs and protect marine life.",
            ar: "انضم المتطوعون إلى فريق بقر البحر لمراقبة الشعاب المرجانية وحماية الحياة البحرية.",
            highlight: "marine life",
            note: "مصطلح بيئي رئيسي"
          }
        ],
        exercises: [
          {
            id: "5u3-ex3",
            question: "Dugongs are endangered mainly because of ______.",
            options: [
              "fishing nets and boat collisions",
              "lack of sunlight in the desert",
              "freezing winter weather",
              "eating dangerous predators"
            ],
            correctAnswer: "fishing nets and boat collisions",
            explanation: "الخطر الأكبر على أبقار البحر هو شباك الصيد المهملة والاصطدام بالقوارب السريعة (الملزمة ص 80).",
            type: "mcq",
            sourcePages: "الملزمة ص 80"
          }
        ]
      },
      {
        id: "5th-u3-l4",
        unitId: 53,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: الحالة الشرطية الأولى والمخلفات الإلكترونية (First Conditional & Toxic E-Waste)",
        titleEn: "Lesson 4: First Conditional & The Danger of Mobile Phone E-Waste",
        category: "grammar",
        summary: "الحالة الشرطية الأولى (First Conditional) للتعبير عن أحداث مستقبلية محتملة وواقعية، والمخاطر السامة للمعادن الثقيلة في الهواتف القديمة.",
        sourcePages: "الملزمة ص 82 - 85",
        grammarRuleFormula: "First Conditional Formula:\n- If + Present Simple (V / V-s) , will / won't + Base Verb\n- Question: Will + S + Base Verb + if + Present Simple...?\n- Negative: If he doesn't recycle his phone, toxic chemicals will leak into the soil.\n- Can also use can / may / must in the main clause instead of will.",
        detailedContent: [
          "صياغة الحالة الشرطية الأولى: تعبر عن احتمال حقيقي وواقعي في المستقبل إذا تحقق شرط المضارع.",
          "مخاطر الهواتف القديمة (AB p. 48): تحتوي الهواتف على مواد سامة ومعادن ثقيلة مثل الرصاص والزئبق والكادميوم؛ إذا رميت في مدافن النفايات العادية فإنها تلوث المياه الجوفية والتربة الزراعية.",
          "الحل: إعادة تدوير الهواتف لاستخراج الذهب والفضة والنحاس منها بأمان."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 83: انتبه: جملة if تأخذ دائماً المضارع البسيط (لا تضع will بعد if إطلاقاً!). والطرف الآخر هو الذي يأخذ (will + مصدر مجرد)."
        ],
        examples: [
          {
            en: "If we don't recycle old phones, toxic chemicals will poison our drinking water.",
            ar: "إذا لم نعد تدوير الهواتف القديمة، فإن المواد الكيميائية السامة ستسمم مياه الشرب لدينا.",
            highlight: "don't recycle / will poison",
            note: "حالة أولى: مضارع بسيط منفي مع will والمصدر"
          }
        ],
        exercises: [
          {
            id: "5u3-ex4",
            question: "If it ______ (rain) tomorrow, we will cancel the field trip to the nature reserve.",
            options: ["rains", "will rain", "rained", "is raining"],
            correctAnswer: "rains",
            explanation: "في الحالة الشرطية الأولى، جملة If تأخذ مضارعاً بسيطاً مع المفرد it (rains) (الملزمة ص 84).",
            type: "mcq",
            sourcePages: "الملزمة ص 84"
          }
        ]
      },
      {
        id: "5th-u3-l5",
        unitId: 53,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: إعادة التدوير والبادئة re- (Recycling & The Prefix re-)",
        titleEn: "Lesson 5: Environmental Recycling & Adding the Prefix (re-) to Verbs",
        category: "vocabulary",
        summary: "استخدام البادئة re- بمعنى (إعادة الفعل مرة أخرى) والفوائد الاقتصادية والبيئية لفصل النفايات الورقية والزجاجية والمعدنية.",
        sourcePages: "الملزمة ص 86 - 88",
        grammarRuleFormula: "The Prefix (re-) = to do something again:\n- recycle (يعيد تدوير)\n- reuse (يعيد استخدام)\n- rebuild (يعيد بناء)\n- rewrite (يعيد كتابة)\n- restart (يعيد تشغيل)\n- refill (يعيد ملء)\n- reheat (يعيد تسخين)\n- reconsider (يعيد النظر)",
        detailedContent: [
          "أهمية إعادة التدوير: إعادة تدوير طن واحد من الورق ينقذ 17 شجرة ويقلل استهلاك الطاقة والمياه بنسبة 50%.",
          "استخدام البادئة re-: تضاف إلى بداية الفعل لتعني تكرار العمل: My teacher asked me to rewrite the composition because it had handwriting errors.",
          "تمرين كتاب النشاط ص 51: تكوين كلمات جديدة باستخدام البادئة re- ووضعها في سياق الجمل المناسبة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 87: ترد أسئلة إضافة البادئة re- في سؤال الإملاء الوزاري، احفظ كيفية كتابتها ملتصقة بالفعل دون فراغ: write -> rewrite, build -> rebuild."
        ],
        examples: [
          {
            en: "You can refill this water bottle many times instead of buying disposable plastic bottles.",
            ar: "يمكنك إعادة ملء قنينة الماء هذه عدة مرات بدلاً من شراء قناني بلاستيكية أحادية الاستخدام.",
            highlight: "refill",
            note: "فعل مع البادئة re-"
          }
        ],
        exercises: [
          {
            id: "5u3-ex5",
            question: "The word 'rebuild' means to ______ a building again.",
            options: ["build", "destroy", "sell", "paint"],
            correctAnswer: "build",
            explanation: "البادئة re- تعني تكرار الفعل، فـ rebuild تعني build again (الملزمة ص 87).",
            type: "mcq",
            sourcePages: "الملزمة ص 87"
          }
        ]
      },
      {
        id: "5th-u3-l6",
        unitId: 53,
        lessonNumber: 6,
        titleAr: "الدرس السادس: التلوث النفطي والغازي في البصرة (Oil & Gas Pollution in Basra)",
        titleEn: "Lesson 6: Basra Gas Flaring, Environmental Pollution & Company Initiatives",
        category: "reading",
        summary: "دراسة استيعابية حول حرق الغاز المصاحب لإنتاج النفط في حقول البصرة، آثاره الصحية على السكان، ومبادرات شركة غاز البصرة للحد من الانبعاثات الكربونية.",
        sourcePages: "الملزمة ص 89 - 91",
        detailedContent: [
          "مشكلة حرق الغاز (Gas Flaring): حرق الغاز الطبيعي المصاحب لاستخراج النفط الخام في حقول جنوب العراق يطلق أطناناً من غازات الدفيئة والمواد الملوثة في الهواء.",
          "الآثار البيئية والصحية: يؤدي إلى أمراض تنفسية وزيادة درجات الحرارة وتلوث الأمطار.",
          "الحلول والمشاريع: استثمار الغاز الطبيعي وتأسيس محطات لمعالجته وتوليد الكهرباء النظيفة بدلاً من حرقه في الهواء، مما يوفر مليارات الدولارات ويحمي سماء البصرة."
        ],
        teacherNotes: [
          "سؤال الملزمة ص 90: How does gas flaring affect the local environment? -> It causes air pollution, releases harmful greenhouse gases, and impacts residents' respiratory health."
        ],
        examples: [
          {
            en: "Capturing flared gas in Basra can generate electricity for thousands of Iraqi homes.",
            ar: "إن حصر الغاز المحترق في البصرة يمكن أن يولد الكهرباء لآلاف المنازل العراقية.",
            highlight: "generate electricity",
            note: "فائدة اقتصادية وبيئية كبرى للمشروع"
          }
        ],
        exercises: [
          {
            id: "5u3-ex6",
            question: "Instead of burning associated gas in oilfields, companies should ______.",
            options: [
              "capture and process it for electricity generation",
              "pump it directly into rivers",
              "release it into the city atmosphere",
              "ignore the rising emissions"
            ],
            correctAnswer: "capture and process it for electricity generation",
            explanation: "الحل العلمي والبيئي الأمثل هو حصر الغاز ومعالجته لتوليد الطاقة الكهربائية (الملزمة ص 90).",
            type: "mcq",
            sourcePages: "الملزمة ص 90"
          }
        ]
      },
      {
        id: "5th-u3-l7",
        unitId: 53,
        lessonNumber: 7,
        titleAr: "الدرس السابع: أساليب تقديم العروض والمساعدة (Making Offers)",
        titleEn: "Lesson 7: Polite Ways of Making Offers (Shall I / Would you like me to / I'll)",
        category: "grammar",
        summary: "الأساليب اللبقة لتقديم المساعدة والعروض للآخرين وصيغ الرد بالقبول أو الرفض المهذب.",
        sourcePages: "الملزمة ص 92 - 93",
        grammarRuleFormula: "Ways to Make Offers:\n1) Shall I + Base Verb...? (Shall I carry this heavy suitcase for you?)\n2) Would you like me to + Base Verb...? (Would you like me to open the window?)\n3) I will (I'll) + Base Verb... (I'll help you clean the classroom.)\n4) Would you like + Noun...? (Would you like a cup of tea?)\n- Accepting an offer: Yes, please. / That's very kind of you.\n- Refusing an offer: No, thank you. I can manage.",
        detailedContent: [
          "تقديم العروض (Offers): استخدام Shall I و Would you like me to يتبعهما دائماً الفعل بالمصدر المجرد.",
          "تمرين كتاب النشاط ص 54: اختيار الأسلوب المناسب للمواقف الاجتماعية اليومية وتقديم المساعدة للشخص المحتاج.",
          "الفروق الدقيقة: Shall I تستخدم عندما تعرض القيام بالفعل بنفسك للمقابل."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 92: انتبه: بعد Shall I يأتي مصدر مجرد بدون to: Shall I help you? لكن بعد Would you like me يأتي المصدر مسبوقاً بـ to: Would you like me to help you?"
        ],
        examples: [
          {
            en: "Would you like me to help you carry those heavy shopping bags?",
            ar: "هل ترغب في أن أساعدك بحمل أكياس التسوق الثقيلة تلك؟",
            highlight: "Would you like me to help",
            note: "صيغة عرض مؤدبة جداً"
          }
        ],
        exercises: [
          {
            id: "5u3-ex7",
            question: "______ I bring you a glass of cold water? - Yes, please.",
            options: ["Shall", "Will", "Would", "Do"],
            correctAnswer: "Shall",
            explanation: "في صيغة العرض الاستفهامي المباشر نستخدم Shall I متبوعة بالمصدر المجرد (الملزمة ص 93).",
            type: "mcq",
            sourcePages: "الملزمة ص 93"
          }
        ]
      },
      {
        id: "5th-u3-l8",
        unitId: 53,
        lessonNumber: 8,
        titleAr: "الدرس الثامن: السيارات الهجينة ومقابلة تيري (Hybrid Cars & Terry Interview)",
        titleEn: "Lesson 8: Eco-Friendly Hybrid Cars & Terry's Technological Experience",
        category: "reading",
        summary: "السيارات الهجينة الصديقة للبيئة، كيفية عمل المحرك المزدوج (بنزين + كهرباء)، ومقابلة تيري حول توفير الوقود وتقليل الانبعاثات.",
        sourcePages: "الملزمة ص 94 - 95",
        detailedContent: [
          "مفهوم السيارة الهجينة (Hybrid Car): سيارة تعمل بمحركين معاً: محرك وقود بنزين ومحرك كهربائي متطور وبطارية قابلة لإعادة الشحن أثناء السير واستخدام المكابح.",
          "مزايا السيارات الهجينة: تقليل استهلاك البنزين إلى النصف، تقليل الانبعاثات الكربونية الضارة في المدن، والهدوء التام عند السرعات المنخفضة داخل الأحياء السكنية.",
          "مقابلة تيري (Student's Book p. 34): يروي تجربته مع سيارته الهجينة بعد سنتين من الاستخدام اليومي وكيف وفر مبالغ طائلة من تكاليف الوقود."
        ],
        teacherNotes: [
          "سؤال الملزمة ص 95: Why are hybrid cars better for the environment? -> Because they use less petrol and produce fewer harmful carbon emissions."
        ],
        examples: [
          {
            en: "Hybrid vehicles switch automatically between electricity and petrol to maximize fuel efficiency.",
            ar: "تتحول المركبات الهجينة تلقائياً بين الكهرباء والبنزين لتحقيق أقصى قدر من كفاءة استهلاك الوقود.",
            highlight: "switch automatically",
            note: "شرح تقنية المحرك المزدوج"
          }
        ],
        exercises: [
          {
            id: "5u3-ex8",
            question: "A hybrid car has ______ engines.",
            options: [
              "two (petrol and electric)",
              "only a petrol",
              "three diesel",
              "only a steam"
            ],
            correctAnswer: "two (petrol and electric)",
            explanation: "تحتوي السيارة الهجينة على محركين: محرك وقود بنزين ومحرك كهربائي (الملزمة ص 95).",
            type: "mcq",
            sourcePages: "الملزمة ص 95"
          }
        ]
      },
      {
        id: "5th-u3-l9",
        unitId: 53,
        lessonNumber: 9,
        titleAr: "الدرس التاسع: عودة المها العربي واختبار الوحدة (The Oryx is Back & Unit 3 Test)",
        titleEn: "Lesson 9: The Conservation Success of The Arabian Oryx & Comprehensive Unit 3 Test",
        category: "reading",
        summary: "قصة النجاح البيئي المذهلة لإنقاذ المها العربي ذي القرنين الجميلين من الانقراض وإعادته إلى موطنه الطبيعي، مع الاختبار الشامل للوحدة الثالثة.",
        sourcePages: "الملزمة ص 96",
        detailedContent: [
          "المها العربي (The Arabian Oryx): ظبي أبيض رشيق بقرون مستقيمة طويلة يعيش في صحاري شبه الجزيرة العربية والعراق، كاد أن ينقرض كلياً في ستينيات القرن العشرين بسبب الصيد بالسيارات الحديثة والبنادق الآلية.",
          "عملية الإنقاذ (Operation Oryx): تم إطلاق برامج إكثار في المحميات الطبيعية وحدائق الحيوان ثم إعادة إطلاق القطعان في بيئتها الصحراوية المحمية بقوانين صارمة تمنع الصيد.",
          "اختبار الوحدة الثالثة الشامل: يغطي القواعد والحيوانات المهددة بالانقراض وعروض المساعدة وحفظ البيئة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 96: The story of the Arabian Oryx proves that human conservation efforts can save species from total extinction."
        ],
        examples: [
          {
            en: "Thanks to protected wildlife reserves, the Arabian Oryx population has successfully recovered.",
            ar: "بفضل المحميات الطبيعية المحمية، تعافت أعداد المها العربي بنجاح.",
            highlight: "wildlife reserves",
            note: "قصة نجاح الحفاظ على الحياة البرية"
          }
        ],
        exercises: [
          {
            id: "5u3-ex9",
            question: "The Arabian Oryx was saved from extinction mainly through ______.",
            options: [
              "breeding programs in protected nature reserves",
              "encouraging more desert hunting",
              "moving them to polar regions",
              "selling them as domestic pets"
            ],
            correctAnswer: "breeding programs in protected nature reserves",
            explanation: "تم إنقاذ المها العربي من خلال برامج الإكثار داخل المحميات الطبيعية وتطبيق قوانين حظر الصيد (الملزمة ص 96).",
            type: "mcq",
            sourcePages: "الملزمة ص 96"
          }
        ]
      }
    ]
  },
  {
    id: 54,
    number: 4,
    titleAr: "الوحدة الرابعة: المراجعة الشاملة للفصل الأول (Semester 1 Comprehensive Revision)",
    titleEn: "Unit 4: Semester 1 Consolidation, Bakkar Cartoon & Comprehensive Mid-Year Exam",
    description: "مراجعة كبرى ومكثفة لجميع قواعد وقراءات ومفردات الفصل الأول: قصة المسلسل الكارتوني الشهير 'بكار' للمخرجة منى أبو النصر، ومباراة التنس، ودمج الأزمنة والشرطية الأولى والاستنتاج، والامتحان التحريري الشامل لنصف السنة (100 درجة).",
    accentColor: "bg-yellow text-ink",
    bgGradient: "bg-paper border-ink",
    sourcePages: "الملزمة ص 97 - 103",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u4-l1",
        unitId: 54,
        lessonNumber: 1,
        titleAr: "الدرس الأول: كارتون بكار والمخرجة منى أبو النصر (Bakkar Cartoon & Mona Abu El Nasr)",
        titleEn: "Lesson 1: The Iconic Egyptian Cartoon 'Bakkar' & Animator Mona Abu El Nasr",
        category: "reading",
        summary: "القطعة التراثية المقررة حول أول مسلسل رسوم متحركة مصري ثلاثي الأبعاد 'بكار' والماعز 'رشيدة' وإبداع المخرجة الرائدة منى أبو النصر.",
        sourcePages: "الملزمة ص 97 - 98",
        detailedContent: [
          "مسلسل بكار (Bakkar): مسلسل كرتوني تلفزيوني رمضاني أنتج عام 1998؛ يروي مغامرات طفل نوبي ذكي يدعى بكار ومعزته الأليفة (رشيدة) وصداقته وقيمه الأخلاقية في صعيد مصر.",
          "المخرجة الدكتورة منى أبو النصر (Mona Abu El Nasr): أستاذة جامعية ومخرجة مصرية رائدة أسست استوديو الرسوم المتحركة الخاص بها وكانت أول من أدخل صناعة الكارتون العربي عالي الجودة إلى شاشات التلفزيون في رمضان وحصلت على جوائز دولية قبل وفاتها عام 2003.",
          "أسئلة الاستيعاب المقررة (الملزمة ص 98): متى بدأ عرض المسلسل؟ من هي المخرجة؟ وما هي رسالته التربوية للأطفال؟"
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 98:",
          "1. Who created Bakkar? -> The talented Egyptian director Dr. Mona Abu El Nasr.",
          "2. Who is Rashida? -> Bakkar's pet goat who accompanies him everywhere.",
          "3. When was Bakkar first broadcast? -> During Ramadan in 1998."
        ],
        examples: [
          {
            en: "Bakkar became a beloved Ramadan television tradition for millions of Arab children.",
            ar: "أصبح بكار تقليداً تلفزيونياً رمضانياً محبوباً لملايين الأطفال العرب.",
            highlight: "beloved Ramadan tradition",
            note: "الأثر الثقافي للمسلسل الكارتوني"
          }
        ],
        exercises: [
          {
            id: "5u4-ex1",
            question: "Bakkar was created and directed by the pioneering animator ______.",
            options: [
              "Dr. Mona Abu El Nasr",
              "Naguib Mahfouz",
              "Umm Kulthum",
              "Taha Hussein"
            ],
            correctAnswer: "Dr. Mona Abu El Nasr",
            explanation: "ابتكرت المسلسل وأخرجته الدكتورة منى أبو النصر (الملزمة ص 98).",
            type: "mcq",
            sourcePages: "الملزمة ص 98"
          }
        ]
      },
      {
        id: "5th-u4-l2",
        unitId: 54,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: مباراة التنس وإصابة الساق (Tennis Match & Leg Injury)",
        titleEn: "Lesson 2: The Tennis Match, Sports Injuries & Narrative Tenses Consolidation",
        category: "reading",
        summary: "قصة مباراة التنس المشوقة والإصابة المفاجئة، مع دمج وتطبيق الأزمنة السردية (الماضي البسيط والماضي المستمر وأدوات الربط).",
        sourcePages: "الملزمة ص 99 - 100",
        detailedContent: [
          "أحداث القصة (AB p. 60): أثناء مباراة التنس الحاسمة، كان حسام يلعب بمهارة ويسدد الكرة بقوة نحو الزاوية البعيدة، وفجأة وهو يركض لصد ضربة المنافس، التوت كاحل قدمه وسقط متألماً.",
          "المصطلحات الطبية والرياضية: ankle sprain (التواء الكاحل)، court (ملعب التنس)، racket (المضرب)، referee (الحكم).",
          "التطبيق النحوي: الربط بين الحدث المستمر الطويل (was serving the ball) والحدث العارض المفاجئ (twisted his ankle)."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 100: هذا الدرس يختبر قدرتك على الجمع بين مفردات الرياضة وقواعد أدوات الربط (While, When) في جملة واحدة متسقة."
        ],
        examples: [
          {
            en: "While he was running towards the net, he slipped and injured his knee.",
            ar: "بينما كان يركض باتجاه الشبكة، انزلق وأصاب ركبته.",
            highlight: "While was running / slipped and injured",
            note: "تطبيق قواعد الوحدة الأولى داخل سياق سردي رياضي"
          }
        ],
        exercises: [
          {
            id: "5u4-ex2",
            question: "While Hussam ______ tennis, he twisted his ankle.",
            options: ["was playing", "played", "is playing", "plays"],
            correctAnswer: "was playing",
            explanation: "بعد أداة الربط While يأتي ماضي مستمر (was playing) (الملزمة ص 100).",
            type: "mcq",
            sourcePages: "الملزمة ص 100"
          }
        ]
      },
      {
        id: "5th-u4-l3",
        unitId: 54,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: مراجعة القواعد التراكمية للفصل الأول (Cumulative Grammar Consolidation)",
        titleEn: "Lesson 3: Revision of Present & Past Tenses, Conditionals & Past Deductions",
        category: "grammar",
        summary: "مراجعة شاملة لجميع صيغ القواعد المدروسة في الوحدات 1 و2 و3 استعداداً لامتحان نصف السنة المدرسي.",
        sourcePages: "الملزمة ص 101 - 102",
        grammarRuleFormula: "Semester 1 Grammar Summary:\n1) Present Simple vs Continuous (habits vs current moments)\n2) Past Continuous with While/When\n3) Present Perfect Simple (ever/never/just/already/yet) & been vs gone\n4) Present Perfect Continuous with for and since\n5) Question Tags (reversal of affirmative/negative)\n6) Zero & First Conditionals\n7) Past Deductions: must have / can't have / might have + P.P.\n8) Order of Adjectives before nouns\n9) Modals: must vs mustn't\n10) Making Offers: Shall I / Would you like me to.",
        detailedContent: [
          "جدول المقارنات النحوية الشامل في الملزمة ص 101: كيف تفرق بين الصيغ المختلفة بناءً على الكلمات المفتاحية في الجملة.",
          "تمارين مختارة من كتاب النشاط ص 62-63 لتصحيح الأخطاء الشائعة وحل جمل الاختيارات الوزارية المتقاطعة."
        ],
        teacherNotes: [
          "نصيحة الملزمة ص 102: راجع جدول الأفعال الشاذة وتصاريف P.P. جيداً، لأن نصف السنة يعتمد بشكل جوهري على زمن المضارع التام والاستنتاج في الماضي."
        ],
        examples: [
          {
            en: "If you don't revise these grammar rules carefully, you might make simple mistakes in the test.",
            ar: "إذا لم تراجع هذه القواعد بدقة، فقد تقع في أخطاء بسيطة في الاختبار.",
            highlight: "don't revise / might make",
            note: "تطبيق الحالة الأولى مع الفعل الناقص might للتعبير عن الاحتمال"
          }
        ],
        exercises: [
          {
            id: "5u4-ex3",
            question: "Ahmed has lived in Mosul ______ 2012.",
            options: ["since", "for", "ago", "from"],
            correctAnswer: "since",
            explanation: "سنة محددة بالرقم (2012) تأخذ since (الملزمة ص 102).",
            type: "mcq",
            sourcePages: "الملزمة ص 102"
          }
        ]
      },
      {
        id: "5th-u4-l4",
        unitId: 54,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: الاختبار التحريري الشامل لنصف السنة (Semester 1 Comprehensive Exam)",
        titleEn: "Lesson 4: Official 100-Mark Mid-Year Examination Model Paper",
        category: "reading",
        summary: "النموذج الامتحاني الشامل المكتوب في الملزمة ص 103 لنصف السنة (100 درجة كاملة) موزع وفق معايير وزارة التربية العراقية.",
        sourcePages: "الملزمة ص 103",
        detailedContent: [
          "السؤال الأول (Reading Comprehension - 20 درجة): قطعة خارجية غير مرئية وأسئلة حول سوق الشورجة ومهرجان بابل.",
          "السؤال الثاني (Grammar & Functions - 30 درجة): الأزمنة، السؤال الذيلي، الشرطية الأولى، الاستنتاج، وعروض المساعدة.",
          "السؤال الثالث (Vocabulary & Spelling - 20 درجة): إسقاطات معاني، تلازم الصفات وحروف الجر، وترتيب الصفات، والبادئة re-.",
          "السؤال الرابع (Literature Spot - 10 درجات): أسئلة حول رواية نساء صغيرات للويزا ماي ألكوت.",
          "السؤال الخامس (Writing / Composition - 20 درجة): كتابة إنشاء عن رمضان في العراق أو الحيوانات المهددة بالانقراض."
        ],
        teacherNotes: [
          "توجيه الملزمة ص 103: وزع وقت الامتحان البالغ ساعتين ونصف بدقة، وابدأ بالأسئلة التي تضمن إجابتها كاملة كالقواعد والإنشاء."
        ],
        examples: [
          {
            en: "An official 100-mark mid-year exam tests all linguistic, lexical, and structural competencies.",
            ar: "يختبر امتحان نصف السنة الرسمي المكون من 100 درجة جميع الكفايات اللغوية والمعجمية والتركيبية.",
            highlight: "100-mark exam",
            note: "توزيع الدرجات الرسمي"
          }
        ],
        exercises: [
          {
            id: "5u4-ex4",
            question: "The standard total mark for the official Iraqi semester exam is ______ marks.",
            options: ["100", "50", "75", "120"],
            correctAnswer: "100",
            explanation: "الدرجة الكلية الرسمية للامتحان التحريري النهائي لنصف السنة هي 100 درجة (الملزمة ص 103).",
            type: "mcq",
            sourcePages: "الملزمة ص 103"
          }
        ]
      }
    ]
  }
];
