import { Unit } from '../../../types';

// =========================================================================
// الوحدة الخامسة والسادسة - ملزمة الخامس الإعدادي (الأستاذ عمار غالب 2026)
// مرجع الصفحات: ص 104 - 149
// =========================================================================

export const FIFTH_PREPARATORY_UNITS_5_6: Unit[] = [
  {
    id: 55,
    number: 5,
    titleAr: "الوحدة الخامسة: الصحة والتغذية والنصيحة والشرطية الثانية والندم (Health, Diet & Conditionals)",
    titleEn: "Unit 5: Food & Nutrition, Modals of Necessity, Second Conditional, Wishes & Regrets",
    description: "تصنيفات الأغذية وحاوياتها، النظام الغذائي الصحي، أفعال الإلزام have to/don't have to، أفعال المطبخ وتقديم النصيحة بـ had better، الحالة الشرطية الثانية، التمني، والندم على الماضي بـ wish / if only، ورسالة شكوى مايك غرين.",
    accentColor: "bg-coral text-ink",
    bgGradient: "bg-answer-review-bg border-ink",
    sourcePages: "الملزمة ص 104 - 129",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u5-l1",
        unitId: 55,
        lessonNumber: 1,
        titleAr: "الدرس الأول: الأطعمة والمشروبات وأسماء الحاويات (Food, Drinks & Food Containers)",
        titleEn: "Lesson 1: Food Categories, Quantifiers & Packaging Containers",
        category: "vocabulary",
        summary: "مفردات الأطعمة والمشروبات وتصنيفها، والأسماء الخاصة بحاويات التعبئة (packet, tin, can, carton, bottle, bar, bowl, slice).",
        sourcePages: "الملزمة ص 104 - 106",
        grammarRuleFormula: "Containers & Food Quantifiers:\n- a bar of chocolate (قطعة/لوح شوكولاتة)\n- a bottle of water / milk / oil (قنينة ماء/حليب/زيت)\n- a bowl of soup / rice (وعاء حساء/أرز)\n- a can of cola / lemonade (علبة صودا معدنية)\n- a carton of juice / milk (علبة كرتون عصير/حليب)\n- a loaf of bread / slices of bread (رغيف خبز / شرائح خبز)\n- a packet of biscuits / crisps (كيس/علبة بسكويت/شيبس)\n- a tin of beans / tuna (علبة معلبات فاصوليا/تونة)",
        detailedContent: [
          "تصنيف الأغذية: الكربوهيدرات (carbohydrates)، البروتينات (proteins)، الدهون والسكريات (fats & sugars)، الفواكه والخضار (fruit & vegetables).",
          "أسماء الحاويات (Containers): تستخدم لتحويل الأسماء غير المعدودة (uncountable) إلى أسماء قابلة للعد والقياس.",
          "تمرين كتاب النشاط ص 70: مطابقة أسماء الأغذية بالحاويات المناسبة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 105: الكلمات المعدودة وغير المعدودة: نقول water (غير معدود)، لكن a bottle of water تصبح معدودة ويمكن جمعها: two bottles of water."
        ],
        examples: [
          {
            en: "He bought a packet of biscuits and two bottles of mineral water.",
            ar: "اشترى علبة بسكويت وقنينتي ماء معدني.",
            highlight: "packet of biscuits / bottles of mineral water",
            note: "استخدام أسماء الحاويات مع الأطعمة"
          }
        ],
        exercises: [
          {
            id: "5u5-ex1",
            question: "I would like a ______ of soup to start my lunch, please.",
            options: ["bowl", "bar", "carton", "slice"],
            correctAnswer: "bowl",
            explanation: "الحساء (soup) يقدم دائماً في وعاء عميق (a bowl of soup) (الملزمة ص 105).",
            type: "mcq",
            sourcePages: "الملزمة ص 105"
          }
        ]
      },
      {
        id: "5th-u5-l2",
        unitId: 55,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: النظام الغذائي الصحي وأفعال الإلزام (Healthy Diet & Modals of Necessity)",
        titleEn: "Lesson 2: Nutritional Balance & Modals: can, must, should, mustn't, don't have to",
        category: "grammar",
        summary: "إرشادات التغذية الصحية وأفعال الضرورة والإلزام والنصيحة (must, should, can, mustn't, don't have to).",
        sourcePages: "الملزمة ص 107 - 109",
        grammarRuleFormula: "Modals of Necessity & Advice:\n- must: ضرورة قاطعة وإلزام صحي (You must drink enough water daily.)\n- should: نصيحة وتوجيه إيجابي مفيد (You should eat plenty of fresh vegetables.)\n- mustn't: تحريم ومنع بسبب الضرر (You mustn't eat too much refined sugar.)\n- don't have to: عدم وجود ضرورة أو إلزام (You don't have to finish all the bread if you are full.)",
        detailedContent: [
          "الهرم الغذائي (The Food Pyramid): التوازن بين النشويات والبروتين والخضار لضمان طاقة مستدامة.",
          "الفرق بين mustn't و don't have to: mustn't تعني أن الفعل ممنوع ومضر، بينما don't have to تعني أنك مخير ولست مجبراً على الفعل.",
          "تمرين كتاب النشاط ص 72: ملء الفراغات بالأفعال الناقصة المناسبة للنظام الغذائي."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 108: انتبه للفرق الحاسم بين النفيين: (You mustn't drink sea water) لأنها سامة وممنوعة، بينما (You don't have to wake up early on Friday) لأنها عطلة وأنت مخير."
        ],
        examples: [
          {
            en: "You shouldn't drink too many fizzy drinks; they contain excessive sugar.",
            ar: "لا ينبغي أن تشرب الكثير من المشروبات الغازية؛ فهي تحتوي على سكر مفرط.",
            highlight: "shouldn't drink",
            note: "نصيحة صحية بالنفي"
          }
        ],
        exercises: [
          {
            id: "5u5-ex2",
            question: "Tomorrow is Saturday and school is closed, so I ______ wake up at 6:00 AM.",
            options: ["don't have to", "mustn't", "must", "can't"],
            correctAnswer: "don't have to",
            explanation: "غداً عطلة، لذا لست مضطراً للاستيقاظ مبكراً (عدم وجود ضرورة = don't have to) (الملزمة ص 108).",
            type: "mcq",
            sourcePages: "الملزمة ص 108"
          }
        ]
      },
      {
        id: "5th-u5-l3",
        unitId: 55,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: المهن والالتزامات الوظيفية (Jobs & Obligation: have to / mustn't)",
        titleEn: "Lesson 3: Professional Duties & Necessity: have to vs don't have to vs mustn't",
        category: "grammar",
        summary: "الالتزامات والمسؤوليات في المهن المختلفة (أطباء، طيارون، مهندسون، معلمون) واستخدام have to و has to في الإثبات والنفي.",
        sourcePages: "الملزمة ص 110 - 112",
        grammarRuleFormula: "Obligation in Present:\n- I / You / We / They + have to + Base Verb\n- He / She / It + has to + Base Verb\n- Negative: don't have to / doesn't have to + Base Verb\n- Question: Do / Does + S + have to + Base Verb...?\n- Past: had to / didn't have to.",
        detailedContent: [
          "واجبات الطيار (A pilot): He has to wear a uniform and check flight instruments before takeoff.",
          "واجبات الجراح (A surgeon): She has to sterilize surgical tools and mustn't be careless.",
          "المعلم (A teacher): Doesn't have to work on weekends but has to mark exam papers carefully.",
          "تمرين كتاب النشاط ص 75: مطابقة المهن بواجباتها القانونية والأخلاقية."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 111: انتبه: عند النفي مع He/She/It يتحول has to إلى doesn't have to (يعود have إلى أصله المصدر)."
        ],
        examples: [
          {
            en: "An airline pilot has to speak English fluently for international aviation communication.",
            ar: "يجب على طيار الخطوط الجوية أن يتحدث الإنكليزية بطلاقة من أجل التواصل في الطيران الدولي.",
            highlight: "has to speak",
            note: "إلزام وظيفي مفروض بقوانين الطيران"
          }
        ],
        exercises: [
          {
            id: "5u5-ex3",
            question: "A doctor ______ be very careful when prescribing medication to children.",
            options: ["has to", "have to", "doesn't have to", "mustn't"],
            correctAnswer: "has to",
            explanation: "الطبيب (مفرد غائب) تفرض عليه واجباته المهنية الدقة التامة (has to) (الملزمة ص 111).",
            type: "mcq",
            sourcePages: "الملزمة ص 111"
          }
        ]
      },
      {
        id: "5th-u5-l4",
        unitId: 55,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: النصيحة القوية وأفعال المطبخ (had better vs should & Kitchen Verbs)",
        titleEn: "Lesson 4: Strong Advice with had better / had better not & Cooking Verbs",
        category: "grammar",
        summary: "تقديم النصيحة العاجلة والقوية بـ had better / had better not، وحفظ أفعال الطبخ (chop, slice, grate, boil, fry, bake).",
        sourcePages: "الملزمة ص 113 - 115",
        grammarRuleFormula: "1) had better (نصيحة قوية وضرورية لتجنب مشكلة أو خطر):\n   - S + had better ('d better) + Base Verb (e.g., You'd better see a doctor right now.)\n   - Negative: S + had better not + Base Verb (e.g., You'd better not eat this expired meat.)\n\n2) Kitchen & Cooking Verbs:\n   - chop (يفرم مكعبات/يقطع) | slice (يقطع شرائح)\n   - grate (يبرش بالبراشة) | peel (يقشر)\n   - boil (يغلي بالماء) | fry (يقلي بالزيت) | bake (يخبز بالفرن) | grill (يشوي على النار)",
        detailedContent: [
          "الفرق بين should و had better: should نصيحة عامة مقترحة، بينما had better نصيحة عاجلة وقوية وإذا لم تتبعها فقد تحدث نتيجة سيئة أو خطيرة.",
          "صيغة النفي: had better not بدون فعل مساعد إضافي وبدون to.",
          "تمرين كتاب النشاط ص 77: وصف خطوات إعداد الوجبات باستخدام أفعال الطبخ."
        ],
        teacherNotes: [
          "فخ الملزمة ص 114: احذر من قول had not better! الترتيب الصحيح هو (had better not) متبوعة بمصدر بدون to."
        ],
        examples: [
          {
            en: "You look exhausted; you'd better go to bed early tonight.",
            ar: "تبدو مرهقاً؛ من الأفضل لك كثيراً أن تذهب إلى الفراش مبكراً الليلة.",
            highlight: "you'd better go",
            note: "نصيحة قوية بـ had better مع المصدر المجرد"
          }
        ],
        exercises: [
          {
            id: "5u5-ex4",
            question: "It is getting late and the last bus leaves in ten minutes. We ______ hurry.",
            options: ["had better", "had better to", "better had", "would better"],
            correctAnswer: "had better",
            explanation: "نصيحة قوية وعاجلة لتفادي تفويت الحافلة تتطلب had better متبوعة بالمصدر المجرد بدون to (الملزمة ص 114).",
            type: "mcq",
            sourcePages: "الملزمة ص 114"
          }
        ]
      },
      {
        id: "5th-u5-l5",
        unitId: 55,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: الحالة الشرطية الثانية ولو كنت مكانك (Second Conditional & If I were you)",
        titleEn: "Lesson 5: Second Conditional (Unreal Present/Future) & Advice with 'If I were you'",
        category: "grammar",
        summary: "الحالة الشرطية الثانية للمواقف الخيالية أو غير الواقعية في الحاضر والمستقبل، واستخدام If I were you لتقديم النصيحة.",
        sourcePages: "الملزمة ص 116 - 119",
        grammarRuleFormula: "Second Conditional Formula:\n- If + Past Simple (V-ed / V2 / were) , would / wouldn't + Base Verb\n- In the if-clause: we use 'were' with all subjects (I, he, she, it) in formal style & advice:\n  * If I were you, I would consult a specialist doctor.\n  * If I had a million dollars, I would travel around the world.\n- Can also use could or might in place of would.",
        detailedContent: [
          "مفهوم الحالة الشرطية الثانية: تعبر عن مواقف افتراضية أو خيالية أو مستحيلة في الوقت الحاضر.",
          "الصياغة: فعل الشرط ماضٍ بسيط (Past Simple)، وجواب الشرط (would + مصدر مجرد).",
          "استخدام were مع الفاعل المفرد (If I were / If he were): للتعبير عن افتراض خيالي محض أو لتقديم النصيحة بأسلوب لبق: If I were in your shoes, I would apologize.",
          "تمرين كتاب النشاط ص 80-81: تكملة الجمل الخيالية والتحويل بين أطراف الشرطية."
        ],
        teacherNotes: [
          "قاعدة ذهبية بالملزمة ص 117: إذا رأيت في أحد الطرفين (would + مصدر)، ضع في طرف If ماضياً بسيطاً فوراً! وإذا رأيت في طرف If ماضياً بسيطاً، ضع في الطرف الآخر (would + مصدر)."
        ],
        examples: [
          {
            en: "If I won first prize in the competition, I would donate part of the money to charity.",
            ar: "لو فزت بالجائزة الأولى في المسابقة، لتبرعت بجزء من المال للأعمال الخيرية.",
            highlight: "won (past) / would donate",
            note: "حالة ثانية افتراضية خيالية"
          },
          {
            en: "If I were you, I would study at least two hours every evening.",
            ar: "لو كنت مكانك، لدرست ساعتين على الأقل كل مساء.",
            highlight: "If I were you, I would study",
            note: "صيغة تقديم نصيحة قياسية بـ were"
          }
        ],
        exercises: [
          {
            id: "5u5-ex5",
            question: "If I had wings, I ______ (fly) to the top of the mountains.",
            options: ["would fly", "will fly", "flew", "had flown"],
            correctAnswer: "would fly",
            explanation: "فعل الشرط ماضٍ بسيط خيالي (had)، لذا يتطلب جواب الشرط would متبوعة بالمصدر fly (الملزمة ص 118).",
            type: "mcq",
            sourcePages: "الملزمة ص 118"
          }
        ]
      },
      {
        id: "5th-u5-l6",
        unitId: 55,
        lessonNumber: 6,
        titleAr: "الدرس السادس: طلب وتقديم النصيحة في المواقف الاجتماعية (Giving & Asking for Advice)",
        titleEn: "Lesson 6: Communicative Functions - Giving & Inquiring for Advice in Daily Situations",
        category: "grammar",
        summary: "الأساليب اللغوية التداولية لطلب النصيحة والمشورة من الأصدقاء والمعلمين وتقديم الحلول للمشكلات اليومية.",
        sourcePages: "الملزمة ص 120 - 121",
        grammarRuleFormula: "Patterns for Asking & Giving Advice:\n- Asking: What should I do? / What do you advise me to do? / Do you think I ought to...?\n- Giving:\n  * You should / shouldn't + Base Verb\n  * If I were you, I'd + Base Verb\n  * Why don't you + Base Verb...?\n  * You ought to + Base Verb\n  * You'd better + Base Verb.",
        detailedContent: [
          "حوارات المواقف الاجتماعية (Student's Book p. 50): مواقف فقدان المحفظة، صعوبة تنظيم وقت الدراسة، واختيار تخصص الكلية.",
          "تمرين كتاب النشاط ص 83: إعادة صياغة النصائح باستخدام التراكيب اللغوية المتنوعة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 121: في الأسئلة الامتحانية: إذا طلب منك (Give advice using If I were you): ابدأ بـ If I were you, I would ثم ضع الفعل المقترح."
        ],
        examples: [
          {
            en: "What do you think I should do about my lost library book? - If I were you, I would inform the librarian.",
            ar: "ماذا تعتقد أنه ينبغي أن أفعل بشأن كتاب المكتبة المفقود؟ - لو كنت مكانك، لأخبرت أمين المكتبة.",
            highlight: "If I were you, I would inform",
            note: "طلب نصيحة وإجابة نموذجية"
          }
        ],
        exercises: [
          {
            id: "5u5-ex6",
            question: "Your friend has a terrible toothache. You say: 'If I were you, I ______ see a dentist immediately.'",
            options: ["would", "will", "did", "have to"],
            correctAnswer: "would",
            explanation: "تركيب النصيحة الافتراضي يبدأ بـ If I were you ويكتمل بـ would والمصدر (الملزمة ص 121).",
            type: "mcq",
            sourcePages: "الملزمة ص 121"
          }
        ]
      },
      {
        id: "5th-u5-l7",
        unitId: 55,
        lessonNumber: 7,
        titleAr: "الدرس السابع: التمني في الحاضر والمستقبل (Wishes for Present & Future)",
        titleEn: "Lesson 7: Expressing Wishes with (wish / if only) for Present & Future Desires",
        category: "grammar",
        summary: "التعبير عن الرغبات والأمنيات المخالفة للواقع الحاضر أو الرغبة في تغيير سلوك مزعج في المستقبل باستخدام wish و if only.",
        sourcePages: "الملزمة ص 122 - 124",
        grammarRuleFormula: "1) Wish about the Present (أمنية حول الحاضر غير متحققة):\n   - S + wish / If only + Subject + Past Simple\n   - Example: I don't have a car -> I wish I had a car.\n   - Example: It is too hot -> If only it were cooler.\n\n2) Wish about the Future / Complaint (شكوى من تصرف أو رغبة في تغيير):\n   - S + wish / If only + Subject + would / could + Base Verb\n   - Use 'could' with I & We (e.g., I wish I could speak French.)\n   - Use 'would' with other subjects for annoyance (e.g., I wish he would stop shouting.)",
        detailedContent: [
          "الفرق بين الحاضر والمستقبل: عندما نتمنى شيئاً مختلفاً عن وضعنا الحالي الآن نرجع خطوة للوراء إلى الماضي البسيط (Past Simple).",
          "عندما ننزعج من تصرف شخص آخر ونريده أن يتغير في المستقبل نستخدم would + مصدر.",
          "تمرين كتاب النشاط ص 85: تحويل الجمل الواقعية المنفية إلى جمل تمني مثبتة في الماضي البسيط."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 123: إذا كانت الجملة الحالية منفية في المضارع (I don't know)، تصبح في التمني ماضياً مثبتاً: I wish I knew! وإذا كانت مثبتة (I am short)، تصبح منفية: I wish I were taller!"
        ],
        examples: [
          {
            en: "I don't have enough free time. -> I wish I had more free time.",
            ar: "ليس لدي ما يكفي من وقت الفراغ. -> أتمنى لو كان لدي وقت فراغ أكبر.",
            highlight: "wish I had",
            note: "تمني في الحاضر بصيغة الماضي البسيط"
          }
        ],
        exercises: [
          {
            id: "5u5-ex7",
            question: "I can't play the guitar. -> I wish I ______ (can / could) play the guitar.",
            options: ["could", "can", "will", "would have"],
            correctAnswer: "could",
            explanation: "للتعبير عن أمنية حول القدرة في الحاضر نحول can إلى could مع الفاعل I (الملزمة ص 123).",
            type: "mcq",
            sourcePages: "الملزمة ص 123"
          }
        ]
      },
      {
        id: "5th-u5-l8",
        unitId: 55,
        lessonNumber: 8,
        titleAr: "الدرس الثامن: الندم على الماضي وقصة دانة (Regret with wish/if only & Dana's Story)",
        titleEn: "Lesson 8: Expressing Regret (wish / if only + Past Perfect) & Dana's Careless Mistake",
        category: "grammar",
        summary: "التعبير عن الندم على أحداث وقعت في الماضي وانتهت باستخدام Past Perfect (had / hadn't + P.P.)، وقصة دانة وتفويتها لرحلة التخييم العائلية.",
        sourcePages: "الملزمة ص 125 - 127",
        grammarRuleFormula: "Regret Formula (قاعدة الندم على الماضي):\n- Subject + wish / If only + Subject + had / hadn't + Past Participle (P.P.)\n- إذا كان الفعل الأصلي مثبتاً (حدث شيء مؤسف) -> نستخدم hadn't + P.P.\n  Example: You ate too much chocolate; now you have a stomach ache.\n  -> I wish I hadn't eaten so much chocolate.\n- إذا كان الفعل الأصلي منفياً (لم تفعل شيئاً وتندم) -> نستخدم had + P.P.\n  Example: You didn't study for the exam; you failed.\n  -> If only I had studied for the exam.",
        detailedContent: [
          "قصة دانة (Dana's story): تأخرت دانة في النوم واستيقظت متأخرة، ونسيت حزم حقيبتها وفوّتت الحافلة التي أقلت العائلة إلى بحيرة الحبانية للتخييم، فجلست في المنزل تشعر بندم شديد.",
          "جمل ندم دانة: 'I wish I had set my alarm clock' / 'If only I hadn't stayed up late watching television'.",
          "تمرين كتاب النشاط ص 88: جمل وزارية مكررة لتحويل مواقف الندم إلى صيغة wish / if only."
        ],
        teacherNotes: [
          "سر وزاري من الملزمة ص 126: قاعدة الندم هي نفس قاعدة السادس الإعدادي تماماً! (إذا كانت الجملة الأصلية مثبتة اعكسها واستخدم hadn't + P.P. وإذا كانت منفية استخدم had + P.P.)."
        ],
        examples: [
          {
            en: "I didn't revise my notes, so I made several errors. -> If only I had revised my notes!",
            ar: "لم أراجع مذكراتي، لذا ارتكبت أخطاء عدة. -> لو أنني فقط راجعت مذكراتي!",
            highlight: "If only I had revised",
            note: "ندم على فعل منفي في الماضي تحول إلى had + P.P."
          }
        ],
        exercises: [
          {
            id: "5u5-ex8",
            question: "You drove through the red traffic light and got a heavy fine. Express regret:\n'I wish I ______ through the red light.'",
            options: ["hadn't driven", "didn't drive", "haven't driven", "wouldn't drive"],
            correctAnswer: "hadn't driven",
            explanation: "الحدث في الماضي كان مثبتاً (drove)، لذا نندم عليه باستخدام الماضي التام المنفي hadn't متبوعاً بالتصريف الثالث driven (الملزمة ص 126).",
            type: "mcq",
            sourcePages: "الملزمة ص 126"
          }
        ]
      },
      {
        id: "5th-u5-l9",
        unitId: 55,
        lessonNumber: 9,
        titleAr: "الدرس التاسع: رسالة شكوى مايك غرين واختبار الوحدة (Mike Green's Complaint & Unit 5 Test)",
        titleEn: "Lesson 9: Mike Green's Hotel Complaint Email & Comprehensive Unit 5 Test",
        category: "reading",
        summary: "رسالة الشكوى الرسمية التي أرسلها مايك غرين لإدارة الفندق بسبب سوء الخدمة، الفروق بين الأسلوب الرسمي وغير الرسمي، والاختبار الشامل للوحدة الخامسة.",
        sourcePages: "الملزمة ص 128 - 129",
        grammarRuleFormula: "Formal vs Informal Register in Writing:\n- Salutation: Dear Sir/Madam (Formal) vs Hi / Hello (Informal)\n- Reason: I am writing to express my dissatisfaction (Formal) vs I am writing to complain (Informal)\n- Food: The cuisine was unsatisfactory (Formal) vs The food was awful (Informal)\n- Demands: I request a full refund (Formal) vs Give me my money back (Informal)\n- Sign-off: Yours faithfully (Formal) vs Best wishes / See ya (Informal).",
        detailedContent: [
          "رسالة مايك غرين (Mike Green): حجز غرفة في فندق شاطئي ولكن المكيف كان معطلاً، وحوض السباحة مغلقاً للصيانة، ووجبة الإفطار باردة، فكتب بريداً إلكترونياً رسمياً للمدير يطالب فيه بتعويض واعتذار رسمي.",
          "مفردات الشكوى الرسمية: dissatisfaction (عدم رضا)، compensation (تعويض)، unacceptable (غير مقبول).",
          "اختبار الوحدة الخامسة الشامل (الملزمة ص 129): يغطي الشرطية الثانية، التمني، الندم، والتغذية الصحية."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 128: في الرسائل الرسمية تجنب استخدام الاختصارات (لا تكتب I'm أو didn't، بل اكتب I am و did not)."
        ],
        examples: [
          {
            en: "I am writing to express my dissatisfaction with the poor service provided at your resort.",
            ar: "أكتب إليكم لأعرب عن استيائي البالغ من مستوى الخدمة المتدني المقدم في منتجعكم.",
            highlight: "express my dissatisfaction",
            note: "أسلوب كتابة رسمي راقٍ لرسائل الشكوى"
          }
        ],
        exercises: [
          {
            id: "5u5-ex9",
            question: "In a formal letter of complaint, the most appropriate closing phrase when the recipient's name is unknown is: 'Yours ______.'",
            options: ["faithfully", "sincerely", "cheers", "affectionately"],
            correctAnswer: "faithfully",
            explanation: "عند بدء الرسالة الرسمية بـ Dear Sir or Madam يكون الختام المتّبع دائماً Yours faithfully (الملزمة ص 128).",
            type: "mcq",
            sourcePages: "الملزمة ص 128"
          }
        ]
      }
    ]
  },
  {
    id: 56,
    number: 6,
    titleAr: "الوحدة السادسة: الإعلام والتلفزيون والكلام المنقول (Media, Television & Reported Speech)",
    titleEn: "Unit 6: TV & Film Genres, Manchester Fire, Reported Speech & Artist Widad Al-Orfali",
    description: "أنواع البرامج والأفلام التلفزيونية، حريق شارع كوين في مانشستر والمفردات الرسمية، الكلام المنقول للجمل الخبرية والاستفهامية، مقابلة الفنانة وداد الأورفلي، نقد فيلم القبطان الإسباني، قواعد الفواصل، ونقل الأوامر والطلبات وتاريخ البث الفضائي.",
    accentColor: "bg-lavender text-ink",
    bgGradient: "bg-blue-mist border-ink",
    sourcePages: "الملزمة ص 130 - 149",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u6-l1",
        unitId: 56,
        lessonNumber: 1,
        titleAr: "الدرس الأول: أنواع البرامج والأفلام التلفزيونية (TV & Film Genres)",
        titleEn: "Lesson 1: Television & Cinema Genres (documentary, sitcom, costume drama, thriller)",
        category: "vocabulary",
        summary: "تصنيفات البرامج التلفزيونية والسينمائية (documentary, sitcom, animation, costume drama, thriller, soap opera, sci-fi) وتعريفاتها الدقيقة.",
        sourcePages: "الملزمة ص 130 - 132",
        grammarRuleFormula: "TV & Cinema Genres:\n- documentary: فيلم وثائقي يقدم حقائق علمية وتاريخية حقيقية\n- sitcom (situation comedy): مسلسل كوميدي مواقف فكاهي\n- costume drama: دراما تاريخية يرتدي فيها الممثلون أزياء العصور القديمة\n- thriller: فيلم إثارة وتشويق وحبس أنفاس مليء بالمغامرات والغموض\n- soap opera: مسلسل درامي يومي يتابع المشاكل العائلية والعاطفية\n- sci-fi (science fiction): خيال علمي يستكشف الفضاء والمستقبل\n- animation: رسوم متحركة مرسومة باليد أو عبر الحاسوب",
        detailedContent: [
          "دراسة أنواع المحتوى الإعلامي المرئي (Student's Book p. 58): ربط كل نوع بمميزاته وعناصره الفنية.",
          "تمرين كتاب النشاط ص 92: إكمال الجمل بإسقاط أسماء أنواع البرامج في الفراغات السياقية المناسبة.",
          "المفردات الوصفية: plot (الحبكة)، soundtrack (الموسيقى التصويرية)، cast (طاقم الممثلين)."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 131: احفظ تعاريف الأنواع لأنها تتكرر كسؤال مطابقة (Match) في أسئلة الامتحان: 'A film that gives factual information about real events' -> documentary."
        ],
        examples: [
          {
            en: "I watched an astonishing nature documentary about wild animals in the Amazon rainforest.",
            ar: "شاهدت فيلماً وثائقياً طبيعياً مذهلاً عن الحيوانات البرية في غابات الأمازون المطيرة.",
            highlight: "nature documentary",
            note: "نوع إعلامي وثائقي"
          }
        ],
        exercises: [
          {
            id: "5u6-ex1",
            question: "A television series that takes place in a historical period with period costumes is a ______.",
            options: ["costume drama", "sitcom", "sci-fi", "soap opera"],
            correctAnswer: "costume drama",
            explanation: "الدراما التاريخية التي يرتدي فيها الممثلون أزياء العصور السابقة تسمى costume drama (الملزمة ص 131).",
            type: "mcq",
            sourcePages: "الملزمة ص 131"
          }
        ]
      },
      {
        id: "5th-u6-l2",
        unitId: 56,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: حريق شارع كوين والمفردات الرسمية (Manchester Fire & Formal Words)",
        titleEn: "Lesson 2: News Report on Manchester Queen Street Fire & Formal vs Informal Vocabulary",
        category: "reading",
        summary: "التقرير الإخباري لحريق مبنى متجر أثاث في شارع كوين بمدينة مانشستر، ومقارنة المفردات الإخبارية الرسمية بنظيراتها اليومية غير الرسمية.",
        sourcePages: "الملزمة ص 133 - 135",
        grammarRuleFormula: "Formal vs Informal News Equivalents:\n- occurred / took place = happened (حدث)\n- injured = hurt (أصيب / جُرح)\n- extinguished = put out (أخمد الحريق)\n- alerted = warned / told (أبلغ / حذر)\n- evacuated = cleared out (أخلى المكان)\n- residence = home (مسكن / منزل)\n- commence = start / begin (بدأ)\n- terminate = end (أنهى)",
        detailedContent: [
          "تقرير الحادث (AB p. 94): اندلع حريق في مستودع أثاث في مانشستر؛ وصلت فرق الإطفاء في غضون 6 دقائق وأخلت 25 شخصاً دون وقوع وفيات.",
          "المقارنة اللغوية: تستخدم الصحف ونشرات الأخبار ألفاظاً لاتينية الأصل أكثر رسمية ورصانة مقارنة بلغة الشارع اليومية.",
          "تمرين كتاب النشاط ص 95: استبدال الكلمات غير الرسمية بمرادفاتها الرسمية المعتمدة في الصحافة."
        ],
        teacherNotes: [
          "تنبيه وزاري بالملزمة ص 134: يأتي هذا التمرين في سؤال المرادفات: write the formal equivalent of 'hurt' -> injured. / 'put out' -> extinguish."
        ],
        examples: [
          {
            en: "The blaze occurred late at night, but firefighters successfully extinguished the flames.",
            ar: "وقع الحريق في وقت متأخر من الليل، لكن رجال الإطفاء نجحوا في إخماد ألسنة اللهب.",
            highlight: "occurred / extinguished",
            note: "مفردات رسمية رفيعة مستخدمة في نشرات الأخبار"
          }
        ],
        exercises: [
          {
            id: "5u6-ex2",
            question: "The formal newspaper equivalent for the phrase 'put out the fire' is ______.",
            options: ["extinguish", "occur", "injure", "evacuate"],
            correctAnswer: "extinguish",
            explanation: "المرادف الرسمي للفعل المركب put out (يخمد الحريق) هو extinguish (الملزمة ص 134).",
            type: "mcq",
            sourcePages: "الملزمة ص 134"
          }
        ]
      },
      {
        id: "5th-u6-l3",
        unitId: 56,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: الكلام المنقول للجمل الخبرية (Reported Speech: Statements)",
        titleEn: "Lesson 3: Direct to Reported Speech Statements & Tense Backshift Rules",
        category: "grammar",
        summary: "قواعد تحويل الجمل الخبرية المباشرة إلى كلام غير مباشر منقول وتطبيق قاعدة إرجاع الزمن خطوة إلى الماضي وتغيير الضمائر وظروف الزمان والمكان.",
        sourcePages: "الملزمة ص 136 - 138",
        grammarRuleFormula: "Reported Statements & Tense Backshift:\n- Present Simple -> Past Simple (am/is/are -> was/were | like -> liked)\n- Present Continuous -> Past Continuous (is playing -> was playing)\n- Past Simple -> Past Perfect (went -> had gone | played -> had played)\n- Present Perfect -> Past Perfect (has finished -> had finished)\n- Modals: will -> would | can -> could | may -> might | must -> had to\n- Pronouns shift: I -> he/she | my -> his/her | we -> they | our -> their\n- Time shifts: now -> then | today -> that day | tomorrow -> the following day | yesterday -> the day before.",
        detailedContent: [
          "فعل القول: نستخدم said أو told me: He said that he was feeling ill.",
          "حذف أو إبقاء that: أداة الربط that اختيارية في الجمل الخبرية المنقولة.",
          "تمرين كتاب النشاط ص 97: تحويل جمل المحادثات المباشرة إلى جمل غير مباشرة مع ضبط الأزمنة والضمائر بدقة."
        ],
        teacherNotes: [
          "قاعدة الملزمة الذهبية ص 137: كل زمن يرجع خطوة للماضي! والمضارع التام والماضي البسيط يلتقيان كلاهما في (الماضي التام had + P.P.)."
        ],
        examples: [
          {
            en: "Direct: 'I am reading a fantastic novel,' Huda said.\nReported: Huda said that she was reading a fantastic novel.",
            ar: "مباشر: 'أنا أقرأ رواية رائعة'، قالت هدى.\nمنقول: قالت هدى إنها كانت تقرأ رواية رائعة.",
            highlight: "was reading",
            note: "تحول المضارع المستمر إلى ماضي مستمر"
          }
        ],
        exercises: [
          {
            id: "5u6-ex3",
            question: "Direct: 'I have lost my passport,' said Kareem.\nReported: Kareem said that he ______ his passport.",
            options: ["had lost", "has lost", "lost", "would lose"],
            correctAnswer: "had lost",
            explanation: "يتحول زمن المضارع التام (have lost) في الكلام المنقول إلى ماضٍ تام (had lost) (الملزمة ص 137).",
            type: "mcq",
            sourcePages: "الملزمة ص 137"
          }
        ]
      },
      {
        id: "5th-u6-l4",
        unitId: 56,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: مقابلة الفنانة وداد الأورفلي والأسئلة المنقولة (Widad Al-Orfali & Reported Questions)",
        titleEn: "Lesson 4: Interview with Pioneer Iraqi Artist Widad Al-Orfali & Reported Questions",
        category: "grammar",
        summary: "السيرة الفنية الرائدة للفنانة التشكيلية العراقية وداد الأورفلي، وقواعد تحويل الأسئلة المباشرة (Wh-questions و Yes/No questions) إلى أسئلة منقولة.",
        sourcePages: "الملزمة ص 139 - 141",
        grammarRuleFormula: "Reported Questions Formula:\n1) Wh-questions:\n   - S + asked (me/him/her) + Wh-word + Subject + Verb in Past...\n   - Direct: 'Where do you live?' -> He asked me where I lived.\n   - Direct: 'What time will the gallery open?' -> She asked what time the gallery would open.\n\n2) Yes / No questions:\n   - S + asked + if / whether + Subject + Verb in Past...\n   - Direct: 'Are you ready?' -> He asked me if I was ready.\n   - Direct: 'Did you enjoy the exhibition?' -> She asked if I had enjoyed the exhibition.\n* ملحوظة حاسمة: ينقلب ترتيب السؤال إلى ترتيب جملة خبرية (الفاعل يسبق الفعل) وتحذف علامة الاستفهام وتوضع نقطة.",
        detailedContent: [
          "الفنانة وداد الأورفلي (Widad Al-Orfali): رائدة الفن التشكيلي العراقي وصاحبة قاعة الأورفلي الشهيرة في بغداد؛ دمجت الموسيقى الكلاسيكية مع التراث المعماري البغدادي والشناشيل في لوحاتها الزيتية البديعة.",
          "خطوات نقل السؤال: (1) استخدام asked، (2) استخدام كلمة السؤال أو if، (3) تقديم الفاعل على الفعل، (4) إرجاع الفعل خطوة للماضي وحذف do/does/did.",
          "تمرين كتاب النشاط ص 100: تحويل أسئلة المقابلة الصحفية مع وداد الأورفلي إلى أسئلة منقولة."
        ],
        teacherNotes: [
          "أخطر فخ في قواعد السادس والخامس ص 140: لا تحتفظ بصيغة الاستفهام! بعد كلمة السؤال أو if ضع الفاعل أولاً ثم الفعل: He asked me where I was (وليس where was I)."
        ],
        examples: [
          {
            en: "Direct: 'How long have you lived in Baghdad?'\nReported: The reporter asked Widad how long she had lived in Baghdad.",
            ar: "مباشر: 'كم عشتِ في بغداد؟'\nمنقول: سأل المراسل وداد كم من الوقت كانت قد عاشت في بغداد.",
            highlight: "she had lived",
            note: "الفاعل she سبق الفعل الماضي التام had lived"
          }
        ],
        exercises: [
          {
            id: "5u6-ex4",
            question: "Direct: 'Do you play the piano?'\nReported: He asked me ______ the piano.",
            options: [
              "if I played",
              "if did I play",
              "that I play",
              "whether played I"
            ],
            correctAnswer: "if I played",
            explanation: "في سؤال Yes/No نستخدم if ونحذف do ونقدم الفاعل I ونحول الفعل للمصدر الماضي played (الملزمة ص 140).",
            type: "mcq",
            sourcePages: "الملزمة ص 140"
          }
        ]
      },
      {
        id: "5th-u6-l5",
        unitId: 56,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: نقد فيلم القبطان الإسباني (The Spanish Captain Film Review)",
        titleEn: "Lesson 5: Critical Film Review of 'The Spanish Captain' & Evaluative Adjectives",
        category: "reading",
        summary: "مراجعة نقدية لفيلم المغامرات التاريخية 'القبطان الإسباني'، وتعلم الصفات المستخدمة في تقييم الأعمال السينمائية وأداء الممثلين.",
        sourcePages: "الملزمة ص 142 - 143",
        detailedContent: [
          "قصة الفيلم (The Spanish Captain): مغامرة بحرية تدور في القرن السادس عشر حول سفينة إسبانية تبحث عن كنز مفقود وسط العواصف وقراصنة المحيط الأطلسي.",
          "عناصر المراجعة النقدية (Film Review): عنوان الفيلم، المخرج، الأبطال، ملخص الحبكة دون إفساد النهاية (no spoilers)، وتقييم الإخراج والموسيقى التصويرية.",
          "الصفات النقدية: gripping (شديد الإثارة والتشويق)، predictable (متوقع ومبتذل)، spectacular (مبهر بصرياً)، convincing (مقنع)."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 143: عند كتابة إنشاء مراجعة فيلم، استخدم صفات تقييمية متنوعة مثل (gripping, visual effects, outstanding performance) للحصول على الدرجة الكاملة."
        ],
        examples: [
          {
            en: "The special effects were spectacular, and the lead actor gave an exceptionally convincing performance.",
            ar: "كانت المؤثرات البصرية مبهرة، وقدم الممثل الرئيسي أداءً مقنعاً للغاية.",
            highlight: "spectacular / convincing",
            note: "صفات تقييم نقد سينمائي"
          }
        ],
        exercises: [
          {
            id: "5u6-ex5",
            question: "A movie with a storyline so thrilling that it completely holds your attention is described as ______.",
            options: ["gripping", "boring", "dull", "terrible"],
            correctAnswer: "gripping",
            explanation: "العمل المشوق والمثير الذي يشد انتباه المشاهد بالكامل يوصف بـ gripping (الملزمة ص 143).",
            type: "mcq",
            sourcePages: "الملزمة ص 143"
          }
        ]
      },
      {
        id: "5th-u6-l6",
        unitId: 56,
        lessonNumber: 6,
        titleAr: "الدرس السادس: قواعد علامات الترقيم واستخدام الفواصل (Punctuation & Comma Rules)",
        titleEn: "Lesson 6: Punctuation Masterclass - Correct Usage of Commas in Complex Sentences",
        category: "grammar",
        summary: "القواعد الأساسية لوضع الفواصل (commas) في الجمل المعقدة، والفصل بين بنود القوائم، وبعد العبارات الظرفية التمهيدية، ومع الجمل الاعتراضية.",
        sourcePages: "الملزمة ص 144 - 145",
        grammarRuleFormula: "Rules for Commas (,):\n1) In lists: apples, bananas, oranges, and grapes.\n2) After introductory clauses: Although it rained heavily, we went out.\n3) With direct speech: She said, 'I will call you later.'\n4) In conditional sentences when if is first: If it rains, we will stay at home. (No comma if if is in middle: We will stay at home if it rains).\n5) Non-defining relative clauses: Baghdad, which is the capital of Iraq, is on the Tigris.",
        detailedContent: [
          "أهمية علامات الترقيم: تغيير موضع الفاصلة يغير المعنى النحوي للجملة بالكامل.",
          "تمرين كتاب النشاط ص 104: تصحيح نصوص خالية من علامات الترقيم وإضافة الحروف الكبيرة (capital letters) والنقاط والفواصل.",
          "أسئلة سؤال الخط والتنقيط الوزاري المكرر."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 145: إذا بدأت الجملة بأداة ربط مثل (If, When, While, Because, Although)، ضع فاصلة بين الجملتين! أما إذا جاءت الأداة في المنتصف فلا تضع فاصلة."
        ],
        examples: [
          {
            en: "When the television broadcast ended, the family went to sleep.",
            ar: "عندما انتهى البث التلفزيوني، ذهبت العائلة للنوم.",
            highlight: "When ..., the family",
            note: "فاصلة بعد العبارة الظرفية التمهيدية"
          }
        ],
        exercises: [
          {
            id: "5u6-ex6",
            question: "Which of the following sentences is correctly punctuated?",
            options: [
              "Although he was tired, he finished his homework.",
              "Although he was tired he finished, his homework.",
              "He finished his homework, although he was tired.",
              "Although, he was tired he finished his homework."
            ],
            correctAnswer: "Although he was tired, he finished his homework.",
            explanation: "عندما تبدأ الجملة بأداة ربط تمهيدية (Although) يجب وضع الفاصلة في نهاية عبارة التمهيد وقبل الجملة الرئيسية (الملزمة ص 145).",
            type: "mcq",
            sourcePages: "الملزمة ص 145"
          }
        ]
      },
      {
        id: "5th-u6-l7",
        unitId: 56,
        lessonNumber: 7,
        titleAr: "الدرس السابع: أربعة أخبار صحفية غريبة (Four Bizarre News Stories)",
        titleEn: "Lesson 7: Four Unusual News Headlines (Boy Bites Snake, Golf in Gulf, Thames Oil, Top Camel)",
        category: "reading",
        summary: "أربعة تقارير إخبارية طريفة وغريبة من صحف العالم: طفل يعض أفعى سامة في الهند وينجو، بطولة غولف شاطئية في الخليج، تسرب نفطي في نهر التايمز، ومسابقة ملكة جمال الإبل.",
        sourcePages: "الملزمة ص 146 - 147",
        detailedContent: [
          "طفل يعض ثعباناً (Boy bites snake): طفل هندي في الثامنة تعرض للدغة كوبرا فقام بعض الثعبان دفاعاً عن نفسه فمات الثعبان ونجا الطفل بعد تلقي المصل المضاد في المستشفى.",
          "مسابقة مزاين الإبل (Top Camel): مهرجان تراثي خليجي لاختيار أجمل الإبل الأصيلة بمشاركة ملاك الإبل وجوائز بملايين الدولارات.",
          "تسرب نهر التايمز (Thames oil spill): قارب وقود تسرب منه الديزل قرب جسر البرج في لندن وتدخلت فرق الحماية البيئية لحماية البجع والطيور النهرية.",
          "تمرين كتاب النشاط ص 107: استخراج الأفكار الرئيسية وكتابة عناوين صحفية مختصرة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 147: عناوين الصحف في الإنكليزية (Newspaper Headlines) تكتب عادة بالمضارع البسيط وتحذف منها أدوات التعريف والتنكير والأفعال المساعدة للاختصار وجذب الانتباه."
        ],
        examples: [
          {
            en: "An eight-year-old boy made global headlines after surviving a dangerous cobra bite.",
            ar: "تصدر صبي يبلغ من العمر ثماني سنوات عناوين الأخبار العالمية بعد نجاته من لدغة كوبرا خطيرة.",
            highlight: "made global headlines",
            note: "صياغة خبرية صحفية نموذجية"
          }
        ],
        exercises: [
          {
            id: "5u6-ex7",
            question: "In newspaper headlines, articles (a, an, the) and auxiliary verbs are usually ______ to save space.",
            options: ["omitted", "doubled", "capitalized", "italicized"],
            correctAnswer: "omitted",
            explanation: "في عناوين الأخبار الصحفية تحذف عادة أدوات التعريف والتنكير والأفعال المساعدة لتوفير المساحة وجذب النظر (الملزمة ص 147).",
            type: "mcq",
            sourcePages: "الملزمة ص 147"
          }
        ]
      },
      {
        id: "5th-u6-l8",
        unitId: 56,
        lessonNumber: 8,
        titleAr: "الدرس الثامن: نقل الأوامر والطلبات (Reported Commands & Requests)",
        titleEn: "Lesson 8: Reporting Imperatives, Orders and Requests with (told / asked + to / not to)",
        category: "grammar",
        summary: "نقل الأوامر والتعليمات وصيغ الطلب المؤدب باستخدام أفعال القول told و asked متبوعة بـ (to + مصدر) للإثبات و (not to + مصدر) للنهي والنفي.",
        sourcePages: "الملزمة ص 148",
        grammarRuleFormula: "Reported Commands & Requests:\n- Subject + told / asked / ordered + Object + to / not to + Base Verb\n1) Positive command:\n   Direct: 'Sit down and open your books,' the teacher said.\n   Reported: The teacher told us to sit down and open our books.\n2) Negative command (prohibition):\n   Direct: 'Don't make noise in the library,' the librarian said.\n   Reported: The librarian asked them not to make noise in the library.\n3) Polite request:\n   Direct: 'Could you please lend me your pen?'\n   Reported: Ali asked me to lend him my pen.",
        detailedContent: [
          "الأوامر والطلبات: نحذف كلمة Please وصيغ الاستئذان مثل Could you / Would you.",
          "نفي الأمر: يتحول Don't مباشرة إلى (not to + مصدر مجرد).",
          "تمرين كتاب النشاط ص 110: تحويل تعليمات الأطباء وإرشادات المرور وأوامر أولياء الأمور إلى كلام منقول."
        ],
        teacherNotes: [
          "فخ الملزمة ص 148: لا تقل *told not to make* بدون مفعول به! الفعل told يحتاج دائماً إلى مفعول به: The teacher told ME to... أما asked فيمكن أن تأتي مع مفعول أو بدونه."
        ],
        examples: [
          {
            en: "Direct: 'Don't exceed the speed limit,' the police officer said.\nReported: The officer told the driver not to exceed the speed limit.",
            ar: "مباشر: 'لا تتجاوز السرعة المحددة'، قال ضابط الشرطة.\nمنقول: أمر الضابط السائق ألا يتجاوز السرعة المحددة.",
            highlight: "told the driver not to exceed",
            note: "أمر منفي منقول بـ told + مفعول + not to ومصدر"
          }
        ],
        exercises: [
          {
            id: "5u6-ex8",
            question: "Direct: 'Don't touch the broken glass,' mother said.\nReported: Mother told me ______ the broken glass.",
            options: ["not to touch", "to not touch", "didn't touch", "don't touch"],
            correctAnswer: "not to touch",
            explanation: "في نقل النهي والأمر المنفي، تتحول Don't إلى not to متبوعة بالمصدر المجرد (not to touch) (الملزمة ص 148).",
            type: "mcq",
            sourcePages: "الملزمة ص 148"
          }
        ]
      },
      {
        id: "5th-u6-l9",
        unitId: 56,
        lessonNumber: 9,
        titleAr: "الدرس التاسع: تاريخ البث الفضائي واختبار الوحدة (Satellite TV & Unit 6 Test)",
        titleEn: "Lesson 9: The Evolution of Satellite Television & Comprehensive Unit 6 Test",
        category: "reading",
        summary: "تاريخ إطلاق الأقمار الصناعية للاتصالات (تيلستار 1962) وثورة البث التلفزيوني الفضائي المباشر في المنازل، مع الاختبار الشامل للوحدة السادسة.",
        sourcePages: "الملزمة ص 149",
        detailedContent: [
          "تاريخ التلفزيون الفضائي (Satellite Broadcasting): في عام 1962 أُطلق القمر الصناعي تلستار (Telstar) لينقل أول بث تلفزيوني حي عبر المحيط الأطلسي بين الولايات المتحدة وأوروبا.",
          "ثورة الصحن اللاقط (Satellite dishes): في الثمانينيات والتسعينيات تحولت أجهزة الاستقبال من صحون ضخمة بقطر أمتار إلى أطباق منزلية صغيرة وملايين القنوات الرقمية المشفرة والمفتوحة.",
          "اختبار الوحدة السادسة الشامل: يغطي أنواع الأفلام، المفردات الرسمية، الكلام المنقول، والأسئلة المنقولة والأوامر."
        ],
        teacherNotes: [
          "سؤال الملزمة ص 149: Telstar was launched in 1962 and relayed the very first live transatlantic television signal."
        ],
        examples: [
          {
            en: "The launch of communication satellites revolutionized global news coverage and home entertainment.",
            ar: "أحدث إطلاق أقمار الاتصالات ثورة في التغطية الإخبارية العالمية والترفيه المنزلي.",
            highlight: "revolutionized global news",
            note: "الأثر التاريخي للأقمار الصناعية"
          }
        ],
        exercises: [
          {
            id: "5u6-ex9",
            question: "The very first satellite to relay live television pictures across the Atlantic Ocean was ______ in 1962.",
            options: ["Telstar", "Apollo", "Sputnik", "Hubble"],
            correctAnswer: "Telstar",
            explanation: "القمر الصناعي تلستار (Telstar) أُطلق عام 1962 وكان أول قمر ينقل بثاً تلفزيونياً حياً عبر الأطلسي (الملزمة ص 149).",
            type: "mcq",
            sourcePages: "الملزمة ص 149"
          }
        ]
      }
    ]
  }
];
