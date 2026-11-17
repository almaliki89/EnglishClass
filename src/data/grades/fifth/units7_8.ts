import { Unit } from '../../../types';

// =========================================================================
// الوحدة السابعة والثامنة - ملزمة الخامس الإعدادي (الأستاذ مصطفى تركي 2026)
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
        pedagogy: {
          "warmup": "يمكن تغيير معنى الكلمة بإضافة بادئة في بدايتها أو لاحقة في نهايتها؛ وهذا يساعد على فهم كلمات جديدة وبناء مفردات مترابطة.",
          "learningObjectives": [
            "أميز prefix عن suffix.",
            "أتعرف على البادئات المعاكسة الواردة في الدرس.",
            "أتعرف على اللواحق التي تكوّن كلمات أو تغير نوعها.",
            "أحافظ على تهجئة الكلمة بعد الاشتقاق."
          ],
          "arabicExplanation": "الـ prefix يضاف في بداية الكلمة وقد يغيّر معناها مثل un- أو dis- للدلالة على العكس أو النفي. أما suffix فيضاف في نهاية الكلمة وقد يغيّر نوعها أو وظيفتها، مثل -ful و-less و-ment بحسب أمثلة المنهج. لا توجد قاعدة واحدة تصلح لكل الكلمات؛ اربط كل كلمة مشتقة بأصلها ومعناها واستخدامها.",
          "solvingClues": [
            "إذا جاءت الإضافة في بداية الكلمة فهي prefix.",
            "إذا جاءت في نهاية الكلمة فهي suffix.",
            "قارن معنى الكلمة الأصلية بالمشتقة.",
            "حدد هل تغير المعنى فقط أم نوع الكلمة أيضاً."
          ],
          "commonTraps": [
            "لا تخلط بين prefix وsuffix.",
            "لا تضف لاحقة دون مراعاة التهجئة.",
            "لا تفترض أن كل كلمة تقبل جميع البادئات واللواحق."
          ],
          "recapSummary": "Prefix قبل الكلمة؛ suffix بعدها. احفظ كل اشتقاق مع المعنى ونوع الكلمة.",
          "nextStepRecommendation": "أنشئ جدولاً من عمودين: الأصل والمشتق، وحدد البادئة أو اللاحقة ومعناها."
        },
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
        pedagogy: {
          "warmup": "عندما ترتب لإصلاح سيارتك، لا تصلحها بنفسك بالضرورة؛ بل تجعل شخصاً آخر يقوم بالخدمة.",
          "learningObjectives": [
            "أستخدم have/get + object + V3.",
            "أحدد الشيء الذي تلقى الخدمة.",
            "أفرق بين تنفيذ الفعل وترتيب تنفيذه بواسطة شخص آخر."
          ],
          "arabicExplanation": "Causative structure يصف ترتيب خدمة يقوم بها شخص آخر: I had my car repaired. الصيغة have/get + object + past participle. يتغير have أو get بحسب الزمن والفاعل، لكن الفعل الذي يصف الخدمة يأتي بالتصريف الثالث.",
          "solvingClues": [
            "اسأل هل الفاعل ينفذ العمل أم يرتب الخدمة.",
            "حدد object الذي تقع عليه الخدمة.",
            "ضع V3 بعد object.",
            "صرّف have/get وفق الزمن."
          ],
          "commonTraps": [
            "لا تستخدم المصدر بعد object.",
            "لا تخلط I repaired مع I had it repaired.",
            "لا تنسَ تصريف have/get."
          ],
          "recapSummary": "have/get + object + past participle = ترتيب خدمة ينفذها شخص آخر.",
          "nextStepRecommendation": "حوّل أمثلة الخدمات إلى causative وحدد object وV3."
        },
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
        pedagogy: {
          "warmup": "ضمير الوصل يتيح ربط معلومة عن سوق أو شخص أو مكان بجملة واحدة دون تكرار الاسم.",
          "learningObjectives": [
            "أستخدم who للأشخاص.",
            "أستخدم which/that للأشياء.",
            "أستخدم where للمكان وwhose للملكية.",
            "أدمج الجمل دون تكرار."
          ],
          "arabicExplanation": "تربط relative clause اسماً بالمعلومة التي تحدده. who للأشخاص، which/that للأشياء والحيوانات، where للمكان الذي يقع فيه الحدث، وwhose للملكية. افحص وظيفة الجملة بعد الفراغ لتحديد الأداة المناسبة، ولا تختَر where لمجرد أن الاسم السابق مكان.",
          "solvingClues": [
            "شخص: who.",
            "شيء أو حيوان: which/that.",
            "مكان + حدث يقع فيه: where.",
            "ملكية + اسم مملوك: whose."
          ],
          "commonTraps": [
            "لا تستخدم who لغير العاقل.",
            "لا تختَر where لمجرد وجود اسم مكان.",
            "لا تخلط whose مع who's."
          ],
          "recapSummary": "who / which / that / where / whose بحسب نوع الاسم والعلاقة.",
          "nextStepRecommendation": "ادمج أزواج الجمل في أمثلة الدرس بضمير الوصل المناسب."
        },
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
        pedagogy: {
          "warmup": "قد نصف موقفاً بأنه surprising، ونقول إن الشخص كان surprised. وقد نستخدم extreme adjectives للتعبير عن درجة قوية جداً بدلاً من very + صفة عادية.",
          "learningObjectives": [
            "أميز بين الصفة التي تصف سبب الشعور والصفة التي تصف من يشعر به.",
            "أتعرف على extreme adjectives الواردة في الدرس.",
            "أختار intensifier مناسباً مع الصفة.",
            "أستخدم الصفة في جملة صحيحة."
          ],
          "arabicExplanation": "بعض الصفات تصف الشيء الذي يسبب الشعور، مثل surprising، وأخرى تصف الشخص الذي يشعر به، مثل surprised. أما extreme adjectives فهي صفات تحمل معنى قوياً بذاتها مثل exhausted أو boiling، وغالباً لا نستخدم معها very في الاستعمال القياسي؛ بل نستخدم intensifiers مناسبة مثل absolutely أو really بحسب الصفة وقاعدة الدرس. احفظ كل صفة مع درجة قوتها والكلمات التي تلائمها.",
          "solvingClues": [
            "حدّد هل تصف الشيء أم الشخص المتأثر بالشعور.",
            "ميّز الصفة العادية من الصفة الشديدة.",
            "راجع intensifier المناسب لكل صفة شديدة في قائمة الدرس."
          ],
          "commonTraps": [
            "لا تستخدم very آلياً مع كل extreme adjective.",
            "لا تخلط surprised مع surprising.",
            "لا تفترض أن absolutely وvery يتبادلان المواقع مع جميع الصفات."
          ],
          "recapSummary": "-ing غالباً لسبب الشعور و-ed لصاحبه؛ extreme adjectives قوية وتحتاج intensifier مناسباً.",
          "nextStepRecommendation": "صنّف صفات المشاعر إلى -ed/-ing ثم اربط الصفات الشديدة بالمقوي المناسب."
        },
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
        summary: "قراءة عن متجر Harrods في لندن: تأسيسه سنة 1834 في شرق لندن، انتقاله إلى Knightsbridge بعد 15 سنة، توسع نشاطه، ومعلومات عن أقسامه وشعاره وزبائنه.",
        sourcePages: "الملزمة ص 177 - 178",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "177–178",
          verificationNote: "النص بعنوان LONDON’S MOST FAMOUS STORE في الصفحة المطبوعة 177، وتليه أسئلة الفهم في الصفحة 178.",
          originalText: [
            "LONDON’S MOST FAMOUS STORE\nWithout a doubt, Harrods is London’s most famous department store. It is situated in Knightsbridge, one of London’s most expensive areas.",
            "Harrods, which was founded in 1834 by Charles Henry Harrod in East London, was moved to its current site in Knightsbridge, Central London, 15 years later. To begin with, the shop was just one room with two shop assistants and a messenger boy. By 1880, Harrod’s son, Charles Digby, had built up the business so that the shop sold medicines, perfumes, notebooks and paper, fruit and vegetables. In 1883, there was a fire and the shop burnt to the ground. A new building was immediately constructed, however, and since then Harrods has gone from strength to strength.",
            "Today, Harrods is a huge department store with 35,000 customers every day. During the sales, there are 300,000 customers a day. The shop has 4,000 people working in the store. The food department sells 250 different kinds of cheese and 130 different types of bread. The confectionery department sells 100 tonnes of chocolate per year. The exterior of the store is lit by 12,500 bulbs and 300 of them have to be changed every day.",
            "Harrods has a motto which is ‘Everything for Everybody Everywhere’. If you are rich enough, you can buy diamond-covered shoes which cost a million pounds! And there are many more true stories about unusual things which have been sold to important customers. In the early 1900s, wealthy customers could even buy planes and sailing boats from Harrods. Of course, they had to be ordered first, then paid for, then delivered. Later, in the 1930s, Harrods had on show one of the world’s first television sets. The famous British writer, Noel Coward, was once given an alligator which had been ordered and bought at Harrods as a Christmas gift. The American president, Ronald Regan, was given a baby elephant which had been bought at Harrods. The British film director, Alfred Hitchcock, used to have his favourite fresh fish flown out to him in America by Harrods.",
            "While it is true that Harrods sells just about anything you could want, it is one of the most expensive shops in Britain. So perhaps Harrods should change their motto to ‘Everything for Everybody Rich Everywhere’!"
          ]
        },
        detailedContent: [
          "تأسس Harrods سنة 1834 على يد Charles Henry Harrod في شرق لندن، وكان في البداية غرفة واحدة يعمل فيها مساعدا متجر وصبي مراسلة؛ ثم انتقل إلى موقعه الحالي في Knightsbridge بعد 15 سنة.",
          "بحلول عام 1880 كان Charles Digby، ابن Harrod، قد وسّع النشاط ليبيع الأدوية والعطور والدفاتر والورق والفواكه والخضراوات. وشعار المتجر في النص هو ‘Everything for Everybody Everywhere’.",
          "في عام 1883 احترق المتجر بالكامل، ثم شُيّد مبنى جديد. وتذكر القراءة أن المتجر يبيع اليوم 250 نوعاً من الجبن و130 نوعاً من الخبز، ويبيع قسم الحلويات 100 طن من الشوكولاتة سنوياً.",
          "تذكر القراءة أن المتجر يستقبل 35,000 زبون يومياً، ويرتفع العدد إلى 300,000 أثناء التنزيلات، ويعمل فيه 4,000 شخص، وتضاء واجهته بـ12,500 مصباح."
        ],
        teacherNotes: [
          "أسئلة فهم النص:",
          "1. When was Harrods founded? -> In 1834 by Charles Henry Harrod.",
          "2. Where was the original shop located? -> In East London.",
          "3. Why was a new building constructed? -> Because the shop burnt to the ground in a fire in 1883."
        ],
        examples: [
          {
            en: "The exterior of the store is lit by 12,500 bulbs.",
            ar: "تضاء واجهة المتجر بـ12,500 مصباح.",
            highlight: "12,500 bulbs",
            note: "حقيقة تاريخية بارزة من قطعة الكتاب"
          }
        ],
        exercises: [
          {
            id: "5u7-ex11",
            question: "Harrods was founded in East London in ______ by Charles Henry Harrod.",
            options: ["1834", "1849", "1883", "1930"],
            correctAnswer: "1834",
            explanation: "تأسس متجر Harrods في شرق لندن عام 1834 على يد Charles Henry Harrod (الملزمة ص 177).",
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
    titleEn: "Unit 8: Semester 2 Consolidation, London Boa Constrictor & Olympics Volunteer Interview",
    description: "مراجعة شاملة لقواعد الفصل الثاني وقراءاته: التعاريف بضمائر الوصل، الشرطية الثانية، قصة الأصلة العاصرة في شقق لندن، ومقابلة هدى للتطوع في الأولمبياد مع تدريبات الكلام المنقول.",
    accentColor: "bg-soft-mint text-ink",
    bgGradient: "bg-paper border-ink",
    sourcePages: "الملزمة ص 179 - 187",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u8-l1",
        pedagogy: {
          "warmup": "التعريف الجيد يحدد الشيء أو المهنة بعبارة دقيقة، وقد يحتاج إلى ضمير وصل لشرح الوظيفة أو المكان.",
          "learningObjectives": [
            "أصوغ تعريفاً يبدأ بالفئة المناسبة.",
            "أستخدم who/which/where بحسب المرجع.",
            "أراجع توافق الفعل مع الاسم."
          ],
          "arabicExplanation": "عند تعريف شخص يمكن استخدام someone who، وللشيء something which/that، وللمكان a place where. أضف خاصية أو وظيفة تميز المصطلح عن غيره، ثم راجع توافق الفعل مع الاسم. الهدف تعريف محدد لا وصف عام.",
          "solvingClues": [
            "شخص: someone who.",
            "شيء: something which/that.",
            "مكان: a place where.",
            "أضف وظيفة أو خاصية مميزة."
          ],
          "commonTraps": [
            "لا تستخدم who لتعريف شيء.",
            "لا تجعل التعريف عاماً وغير مميز.",
            "لا تنسَ أداة التنكير مع الاسم المفرد المعدود."
          ],
          "recapSummary": "Person → someone who؛ thing → something which/that؛ place → a place where.",
          "nextStepRecommendation": "اكتب تعريفين لمفردات الوحدة واختبر دقتهما."
        },
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
        pedagogy: {
          "warmup": "سؤال What would you do if you won…? يضعك في موقف خيالي لتشرح ما ستفعله.",
          "learningObjectives": [
            "أستخدم Second Conditional للمواقف الافتراضية.",
            "أضع past simple بعد if.",
            "أستخدم would + base في النتيجة."
          ],
          "arabicExplanation": "Second Conditional: If + past simple, would + base verb. يستخدم للمواقف الخيالية أو غير المرجحة في الحاضر أو المستقبل. الماضي بعد if لا يعني أن الحدث وقع فعلاً. عند الإجابة اذكر النتيجة باستخدام I would…",
          "solvingClues": [
            "الموقف خيالي أو غير مرجح.",
            "بعد if استخدم past simple.",
            "بعد would استخدم المصدر.",
            "حافظ على معنى السؤال الافتراضي."
          ],
          "commonTraps": [
            "لا تضع would بعد if في الصيغة القياسية.",
            "لا تستخدم V2 بعد would.",
            "لا تخلط الشرط الثاني بالأول."
          ],
          "recapSummary": "If + past simple, would + base verb.",
          "nextStepRecommendation": "أجب عن ثلاثة أسئلة افتراضية باستخدام I would."
        },
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
        summary: "قصة خبرية عن أصلة عاصرة بطول ثلاثة أمتار شوهدت في مراحيض مختلفة داخل مبنى شقق في لندن طوال ثلاثة أشهر، ثم عُثر عليها في حمام بالطابق الثامن وأُعيدت إلى حديقة الحيوان.",
        sourcePages: "الملزمة ص 182 - 183",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "182–183",
          verificationNote: "النص Caught at last! في الصفحة المطبوعة 182؛ وتتبعه أسئلة المبني للمجهول والمفردات في الصفحة 183.",
          originalText: [
            "Caught at last!\nThe terrified residents of a block of flats in London can finally sleep peacefully at night. An enormous snake that was living in toilet pipes in the block of flats has been caught last night.",
            "The snake, a three-metre long boa constrictor, had been seen in different toilets in the building over the past three months. At first, no one knew where the animal had come from. Then, one of the residents saw a local news report about the escape of a boa constrictor from London Zoo.",
            "The snake was first seen by James Andrews, ‘I got up in the night to go to the bathroom,’ Mr Andrews told reporters, ‘and I saw a huge snake in the toilet. It was horrible. I didn’t know what to do. I wondered if I was dreaming. My wife came to look and she was very frightened. We put some heavy books on the toilet seat and went back to bed. In the morning, the snake had gone.’",
            "People in six other flats in the building also saw the snake, but they were all too frightened to try to catch it. On two occasions, the fire brigade were called, but when they arrived, the snake had already disappeared.",
            "Finally, the snake was found last night on Mr and Mrs Mailer’s bathroom floor, on the eighth floor of the building. It was caught in a large bucket and the police were called. The snake was taken back to its home in the zoo, to everyone’s relief."
          ]
        },
        detailedContent: [
          "الثعبان أصلة عاصرة بطول ثلاثة أمتار شوهدت في مراحيض مختلفة بالمبنى خلال الأشهر الثلاثة السابقة. وذكر النص أن أحد السكان قرأ خبراً محلياً عن هروب أصلة من حديقة حيوان لندن.",
          "شوهد الثعبان أولاً بواسطة James Andrews، ثم رآه سكان ست شقق أخرى. استُدعيت فرقة الإطفاء مرتين، لكنه كان يختفي قبل وصولها. وفي النهاية عُثر عليه في أرضية حمام السيد والسيدة Mailer بالطابق الثامن، وأُمسك به في دلو كبير وأعيد إلى حديقة الحيوان.",
          "المفردات الصحفية في النص: terrified residents، block of flats، toilet pipes، news report، fire brigade، disappeared، bucket، relief."
        ],
        teacherNotes: [
          "أسئلة الفهم من القصة:",
          "1. What kind of snake was seen in the block of flats? -> A three-metre boa constrictor.",
          "2. For how long had the snake been seen in different toilets? -> Over the past three months.",
          "3. Where was the snake finally found? -> On the bathroom floor of Mr and Mrs Mailer’s flat on the eighth floor."
        ],
        examples: [
          {
            en: "The three-metre boa constrictor was caught in a large bucket and taken back to its home in the zoo.",
            ar: "أُمسكت الأصلة العاصرة التي يبلغ طولها ثلاثة أمتار في دلو كبير وأُعيدت إلى موطنها في حديقة الحيوان.",
            highlight: "caught in a large bucket",
            note: "تفصيل صريح في الفقرة الأخيرة"
          }
        ],
        exercises: [
          {
            id: "5u8-ex3",
            question: "The escaped boa constrictor in London was approximately ______ metres long.",
            options: ["3", "1", "6", "10"],
            correctAnswer: "3",
            explanation: "كان طول الثعبان حوالي 3 أمتار (three metres long) (الملزمة ص 182).",
            type: "mcq",
            sourcePages: "الملزمة ص 182"
          }
        ]
      },
      {
        id: "5th-u8-l4",
        unitId: 58,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: مقابلة هدى للتطوع في الأولمبياد (Olympics Volunteer Interview)",
        titleEn: "Lesson 4: Olympics Volunteer Interview & Reported Questions",
        category: "reading",
        summary: "حوار قصير عن مقابلة Huda للتطوع في دورة الألعاب الأولمبية، يتضمن أسئلة المقابلة وتدريباً على تحويلها إلى الكلام المنقول.",
        sourcePages: "الملزمة ص 184 - 185",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "184–185",
          verificationNote: "حوار Huda وAmeena في الصفحة 184، مع تدريبات تحويل أسئلة المقابلة إلى reported questions في الصفحتين 184–185. أبقينا الفراغات كما في نشاط كتاب الطالب مع إظهار صندوق الكلمات.",
          originalText: [
            "Word box: headteacher | interview | job | volunteer",
            "Huda: I had my __________ this morning.\nAmeena: What for?\nHuda: You know! I applied to be a __________ at the next Olympics.\nAmeena: Oh, yes. Sorry, I forgot. What did they ask you?\nHuda: The director asked me if I had any previous experience in sports management. And he also asked me how many foreign languages I spoke. Then his assistant asked me if I enjoyed meeting new people.\nAmeena: Do you think you’ll get the __________?\nHuda: I think so. At the end of the interview, the director asked me if he could get a reference from my __________."
          ]
        },
        detailedContent: [
          "مقابلة Huda: تقدمت لتكون متطوعة في الأولمبياد القادم. سألها المدير عن خبرتها السابقة في إدارة الرياضة وعدد اللغات الأجنبية التي تتحدثها، وسألتها مساعدته إن كانت تستمتع بالتعرف على أشخاص جدد. وفي النهاية طلب المدير مرجعاً من مديرة مدرستها.",
          "نشاط الكلام المنقول من المقابلة: يحوّل الطالب أسئلة مباشرة مثل What computer programs are used in your current job? إلى reported questions.",
          "1. The director asked Huda if she had any previous experience in sports management.",
          "2. He asked her how many foreign languages she spoke.",
          "3. His assistant asked her if she enjoyed meeting new people.",
          "4. The director asked if he could get a reference from her headteacher.",
          "لا يعرض هذا المقطع توزيع درجات امتحان نهائي؛ إنه نشاط مقابلة وكلام منقول."
        ],
        teacherNotes: [
          "مرجع النشاط: حوار المقابلة في الصفحة 184، وتحويل الأسئلة إلى كلام منقول في الصفحة 185."
        ],
        examples: [
          {
            en: "The director asked Huda if she had any previous experience in sports management.",
            ar: "سأل المدير هدى إن كانت لديها خبرة سابقة في إدارة الرياضة.",
            highlight: "reported questions",
            note: "مثال على الكلام المنقول من المقابلة"
          }
        ],
        exercises: [
          {
            id: "5u8-ex4",
            question: "What post had Huda applied for?",
            options: ["A volunteer at the next Olympics", "A sports manager", "A reporter", "A tennis coach"],
            correctAnswer: "A volunteer at the next Olympics",
            explanation: "تقدمت هدى لتكون متطوعة في دورة الألعاب الأولمبية القادمة (الملزمة ص 184).",
            type: "mcq",
            sourcePages: "الملزمة ص 184"
          }
        ]
      }
    ]
  }
];
