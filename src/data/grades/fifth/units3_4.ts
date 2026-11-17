import { Unit } from '../../../types';

// =========================================================================
// الوحدة الثالثة والرابعة - ملزمة الخامس الإعدادي (الأستاذ مصطفى تركي 2026)
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
        pedagogy: {
          "warmup": "عند وصف حيوان، قد نستخدم عدة صفات قبل الاسم؛ ترتيبها يجعل الوصف طبيعياً.",
          "learningObjectives": [
            "أصنّف الصفات بحسب نوعها.",
            "أرتب الصفات قبل الاسم.",
            "أميز الرأي والحجم والعمر واللون والأصل والمادة."
          ],
          "arabicExplanation": "الترتيب الشائع للصفات قبل الاسم: الرأي، الحجم، العمر، الشكل، اللون، الأصل، المادة، الغرض، ثم الاسم. لا يلزم وجود كل الأنواع في كل عبارة. صنّف الصفات أولاً ثم رتّبها.",
          "solvingClues": [
            "صنّف كل صفة.",
            "رتب من الرأي إلى الغرض.",
            "ضع الاسم أخيراً."
          ],
          "commonTraps": [
            "لا تبدّل اللون والحجم عشوائياً.",
            "لا تخلط الأصل بالمادة.",
            "لا تجمع more مع صيغ المقارنة."
          ],
          "recapSummary": "Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose → Noun.",
          "nextStepRecommendation": "رتّب أوصافاً متعددة ثم علّل ترتيب كل صفة."
        },
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
        pedagogy: {
          "warmup": "في حماية الحيوانات توجد أفعال واجبة وأخرى ممنوعة؛ must وmustn't لا يحملان المعنى نفسه.",
          "learningObjectives": [
            "أستخدم must للإلزام.",
            "أستخدم mustn't للمنع.",
            "أميز mustn't عن عدم الضرورة."
          ],
          "arabicExplanation": "must تعني يجب أو يلزم، أما mustn't فتعني ممنوع. لا تخلطها مع don't have to التي تعني ليس من الضروري. يأتي المصدر المجرد بعد الأفعال المساعدة.",
          "solvingClues": [
            "قاعدة واجبة: must.",
            "حظر أو تحذير: mustn't.",
            "عدم وجود ضرورة: don't have to."
          ],
          "commonTraps": [
            "mustn't ليست بمعنى ليس ضرورياً.",
            "لا تضف to بعد must.",
            "لا تضف s للفعل بعد must."
          ],
          "recapSummary": "must = إلزام؛ mustn't = منع؛ don't have to = عدم ضرورة.",
          "nextStepRecommendation": "صنّف مواقف حماية البيئة إلى إلزام ومنع وعدم ضرورة."
        },
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
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "77–78",
          verificationNote: "النصوص الأربعة A–D في المصدر تتناول فريق حماية الأطوم، توفير المياه، GreenMoney، والتطوع البيئي.",
          originalText: [
            "The Dugong Team\nWe are an organization who is trying to save the sweet dugong from extinction and urgently need your help. Did you know that dugongs only eat seagrass? Unfortunately, seagrass is disappearing because of pesticides in the water. Lack of food and hunting are the two main threats to the dugong. They should live up to 70 years, but if they don’t have enough food, they will die way before that.\nHow can you help?\nYou can give money once here, or you can adopt a dugong. It works like this: you choose a dugong from our gallery and pay a monthly fee to help take care of it and keep it safe. If you adopt a dugong, you will get a lovely dugong toy at home and every month you will get updates about your dugong.",
            "We Need Water\nWe Need Water works hard to keep rivers, lakes and oceans clean, and makes sure people have access to drinking water. We work with governments and local communities on projects that make sure there is clean water nearby so people don’t have to risk their lives drinking dirty water. Water is essential to every human being, but there are still around two billion people on the planet that do not have safe access to drinking water. Some have to walk very long distances for water that may carry diseases. We Need Water is doing something about this problem. If you donate money to us, we will use it to build wells in small villages and take drinking water to those who really need it. With clean water, people live longer and healthier lives, and children can go to school to build their future.\nMake a donation today!\nGive once\nGive monthly\nSelect amount: £10 £20 £50 £100\nOther: ______",
            "GREENMONEY\nGreenMoney takes your money and invests it in environmental projects around the world. You can choose from a number of different projects and, when the project is finished, you get your money back, or you can invest it again in another project. If you decide to reinvest, we will suggest the ideal project for you.\nStart investing in the planet today!\nWhich project would you like to help?\nHow much can you invest?\nWhen do you need your money back?",
            "Work for Nature\nWe at Work for Nature don’t want your money, we need your time to make a better world. You can volunteer as much time as you can, from just a couple of hours a week (the more the better, of course!). What will you do in that time? We have a number of ‘green tasks’ to choose from according to your skills. You can do work in your community by, for example, planting trees or visiting schools. If you have skills or training, we will find a suitable job for you. You can also help promote our organization online – so you can help us without even leaving your house!\nIn your holidays, you can join one of our many preservation projects around the world. In our one- to three-month programmes, you will help protect animals by preserving their habitats."
          ]
        },
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
        pedagogy: {
          "warmup": "إذا لم نعد تدوير البطاريات فقد تزداد الأضرار. هذا شرط ممكن ونتيجة مستقبلية.",
          "learningObjectives": [
            "أكوّن الشرط الأول.",
            "أستخدم المضارع البسيط بعد if.",
            "أستخدم will + المصدر في النتيجة."
          ],
          "arabicExplanation": "First Conditional: If + present simple, will + base verb. نستخدمه لشرط ممكن في المستقبل ونتيجته المتوقعة. يمكن تقديم النتيجة أولاً، ولا نستخدم will عادةً داخل جملة if.",
          "solvingClues": [
            "حدّد جملة if.",
            "بعد if استخدم المضارع البسيط.",
            "في النتيجة استخدم will + المصدر."
          ],
          "commonTraps": [
            "لا تضع will بعد if.",
            "لا تستخدم التصريف الثاني بعد will.",
            "لا تخلط الشرط الأول بالصفري."
          ],
          "recapSummary": "If + present simple, will + base verb.",
          "nextStepRecommendation": "اكتب مثالاً بيئياً بالشرط الأول ثم اعكس ترتيب الجملتين."
        },
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
        pedagogy: {
          "warmup": "عندما تعيد استخدام شيء ما، تضيف إلى الفعل أو الاسم السابقة re- التي تدل غالباً على التكرار أو الإعادة.",
          "learningObjectives": [
            "أتعرف على معنى السابقة re-.",
            "أكوّن كلمات تدل على إعادة الفعل.",
            "أميز الكلمة الأصلية من الكلمة المشتقة.",
            "أستخدم الكلمات الجديدة في سياقها."
          ],
          "arabicExplanation": "تأتي السابقة re- قبل بعض الأفعال أو الأسماء لتضيف معنى again أو back، مثل recycle وإعادة التدوير، reuse وإعادة الاستخدام، rebuild وإعادة البناء. ليست كل كلمة تبدأ بالحرفين re مشتقة بهذه الطريقة؛ لذلك تعلّم الكلمات الواردة في الدرس بوصفها مفردات مشتقة، ولا تفصل السابقة عن الكلمة عند التهجئة.",
          "solvingClues": [
            "ابحث عن معنى الإعادة أو التكرار في السياق.",
            "حدّد الكلمة الأصلية ثم لاحظ معنى re-.",
            "تحقق من أن الكلمة المشتقة واردة في مفردات الدرس."
          ],
          "commonTraps": [
            "لا تضف re- إلى أي كلمة عشوائياً.",
            "لا تحذف حرفاً من الكلمة الأصلية دون قاعدة.",
            "لا تخلط re- مع بادئات النفي مثل un- أو dis-."
          ],
          "recapSummary": "re- تضيف غالباً معنى again/back، مثل reuse وrecycle وrebuild.",
          "nextStepRecommendation": "كوّن قائمة من كلمات re- في الوحدة، واكتب معنى كل كلمة وجملة قصيرة."
        },
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
        titleEn: "Lesson 6: Oil and Gas Industries and Environmental Effects in Basra",
        category: "reading",
        summary: "رسالة سلمان أحمد عن أثر صناعة النفط والغاز في البيئة العراقية، مع أمثلة من الشعيبة والزبير والرميلة والبرجسية ومقاطع عن المراقبة البيئية.",
        sourcePages: "الملزمة ص 85 - 86",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "85–86",
          verificationNote: "النص رسالة سلمان أحمد إلى المحرر مع مواضع مطابقة مرقّمة، وتليها خمسة مقاطع (A–E) في صفحة المصدر 86. أبقينا مواضع المطابقة كما وردت ولم نخمّن ترتيب إدراجها داخل الرسالة.",
          originalText: [
            "Dear Editor,\nOil and gas are the main industries in Iraq, and I realize that our economy depends on them. However, I am concerned about the effect of these industries on the environment.\n[Paragraph 1]\nOne obvious problem is global warming. All fossil fuels produce carbon dioxide and ozone, which are two of the main greenhouse gases. The increase in greenhouse gases in our atmosphere may cause climate change.\nThere are other environmental problems in our country. Look at different places in Basra, like Shu’ayba, Zubair, Rumaila and Burjussia. I remember Rumaila as it was in the early nineties. It used to be a lovely, quiet place, full of wildlife, especially in the lakes. I went there two years ago and I saw how industrial development has changed the area.\n[Paragraph 2]\nI expect I would notice more changes if I went there today. How has this development affected the wildlife?\nBurning oil and gas releases pollution into the air.\n[Paragraph 3]\nYou can see flares and smoke around sites like Burjussia in Basra. [Paragraph 4] Pollution of the land caused by these emissions may also damage the habitats of wildlife, in particular the nesting and breeding areas of birds. My concern is how much all of this may affect the food chain – if you destroy one animal in the food chain, then other animals have nothing to eat.\nIraq is a very beautiful country. If we are not careful, we might damage the environment.\nYours sincerely,\nSalman Ahmad,\nBasra.",
            "Paragraph A — Green Oil & Gas Company (GOGC) uses the latest technology to monitor the environment in Iraq. One type of technology used is satellite imagery.",
            "Paragraph B — GOGC has built special stations to monitor air quality. They measure the quantity of gases in the air, such as sulphur dioxide (SO2), oxides of nitrogen, ozone and hydrocarbons.",
            "Paragraph C — Smoke and flares can disturb the breeding patterns of birds. At Burjussia, GOGC has a programme to provide new nesting places, which is already bringing birds back to the area.",
            "Paragraph D — Global warming is caused by CO2 – carbon dioxide. The good news about LNG (liquefied natural gas) is that it contains more hydrogen and less carbon than oil – so it produces much less CO2 when it is used.",
            "Paragraph E — The lakes around Rumaila are a special environment. There is a lot of interesting life in these lakes. But it can easily be damaged by oil or other sorts of pollution. So GOGC has a team which monitors the quality of the lakewater at 15 places around Rumaila. Protecting the environment in this special area is very important to the company."
          ]
        },
        detailedContent: [
          "الاحتباس الحراري: يذكر النص أن الوقود الأحفوري ينتج ثاني أكسيد الكربون والأوزون، ويربط زيادة غازات الدفيئة بإمكان حدوث تغير مناخي.",
          "المواقع العراقية: يذكر سلمان الشعيبة والزبير والرميلة والبرجسية، ويقارن حالة الرميلة في التسعينيات بما شاهده بعد التطور الصناعي.",
          "آثار الانبعاثات: قد تتضرر موائل الحياة البرية ومناطق تعشيش الطيور وتكاثرها، كما يمكن أن تتأثر السلسلة الغذائية."
        ],
        teacherNotes: [
          "سؤال فهم مستند إلى النص: Which Basra locations does Salman mention? -> Shu’ayba, Zubair, Rumaila and Burjussia.",
          "المقاطع A–E معلومات مساندة للمطابقة؛ لا تُدرج في مواضع الفقرات المرقمة من دون الرجوع إلى ترتيب النشاط الأصلي."
        ],
        examples: [
          {
            en: "Burning oil and gas releases pollution into the air.",
            ar: "إن حرق النفط والغاز يطلق التلوث في الهواء.",
            highlight: "releases pollution into the air",
            note: "جملة واردة في رسالة سلمان"
          }
        ],
        exercises: [
          {
            id: "5u3-ex6",
            question: "According to Salman, pollution from emissions may damage the ______ areas of birds.",
            options: ["nesting and breeding", "feeding and sleeping", "hunting and hiding", "migration and resting"],
            correctAnswer: "nesting and breeding",
            explanation: "يذكر النص أن الانبعاثات قد تضر بمناطق تعشيش الطيور وتكاثرها.",
            type: "mcq",
            sourcePages: "الملزمة ص 85"
          }
        ]
      },
      {
        id: "5th-u3-l7",
        pedagogy: {
          "warmup": "عندما ترى شخصاً يحتاج مساعدة، يمكنك عرض القيام بالمهمة بدلاً منه.",
          "learningObjectives": [
            "أستخدم Shall I لعرض المساعدة.",
            "أستخدم Would you like me to للعرض المهذب.",
            "أستخدم I'll للتعبير عن قرار فوري."
          ],
          "arabicExplanation": "Shall I + base verb؟ لعرض القيام بشيء. Would you like me to + base verb؟ لعرض أكثر تهذيباً. I'll + base verb قد تعبّر عن قرار فوري. بعد هذه التراكيب يأتي المصدر المجرد.",
          "solvingClues": [
            "عرض بصيغة سؤال: Shall I…?",
            "عرض مهذب: Would you like me to…?",
            "قرار فوري: I'll…",
            "تحقق من وجود المصدر بعد الصيغة."
          ],
          "commonTraps": [
            "لا تضع to بعد Shall I.",
            "لا تحذف me من Would you like me to.",
            "لا تستخدم V-ing بعد I'll."
          ],
          "recapSummary": "Shall I + base؛ Would you like me to + base؛ I'll + base.",
          "nextStepRecommendation": "اكتب عرضين لمساعدة شخص في سياقين مختلفين."
        },
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
        titleEn: "Lesson 8: Hybrid Cars and Terry’s Interview",
        category: "reading",
        summary: "إعلان ومقابلة عن السيارات الهجينة، وقرار Terry بشراء سيارة هجينة بسبب مشكلة التلوث في لوس أنجلوس وحاجته إلى القيام برحلات طويلة.",
        sourcePages: "الملزمة ص 88 - 89",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "88–89",
          verificationNote: "يشمل النص إعلان Hybrid Car Sales L.A. ثم المقابلة الصحفية A Hybrid Car for Terry? كما وردا في المصدر.",
          originalText: [
            "HYBRID CAR SALES L.A.\nDo you want all the advantages of a petrol engine PLUS all the advantages of an electric motor?\nHave fun AND protect the environment. Get a hybrid!\nWe sell Honda, Toyota, Ford and General Motors hybrid cars.\nHybrid Car Sales, 9466 Beverly Boulevard, Los Angeles, CA 90048\nwww.hybridcarsales.com",
            "A HYBRID CAR FOR TERRY?\nEVERY MONTH WE INTERVIEW A MEMBER OF THE PUBLIC. WE ASK ‘WHICH CAR ARE YOU GOING TO BUY? WHY?’\nWCTB: Terry, you’ve been looking at the new cars on the market. What do you think?\nTerry: Well, I like all the new hybrid cars.\nWCTB: They’re pretty expensive, aren’t they?\nTerry: They’re not cheap. But I expect I’ll buy one anyway. I live in Los Angeles, and we have a big pollution problem there.\nWCTB: The smog?\nTerry: Not just the smog. There are almost four million people in Los Angeles – and everyone drives a car.\nWCTB: Do you think hybrid cars will help?\nTerry: Oh, yes. They will definitely make things better. In the city, you use the electric motor, so there’s no pollution at all.\nWCTB: Why not get an all-electric car, then?\nTerry: Well, the batteries are not good enough for long journeys – that’s the problem. I often drive to my sister’s place in San Francisco, for example. That’s nearly 650 kilometres.\nWCTB: And the hybrid car uses its petrol engine on the open road?\nTerry: Exactly. You get the best of both worlds.\nWCTB: And can you afford the higher price?\nTerry: At the moment, yes. Unless I lose my job or something like that, I’ll certainly buy a hybrid.\nWCTB: Thank you for sharing your ideas with us."
          ]
        },
        detailedContent: [
          "يوضح الإعلان الجمع بين مزايا محرك البنزين والمحرك الكهربائي، ثم تعرض المقابلة استخدام المحرك الكهربائي داخل المدينة ومحرك البنزين على الطريق المفتوح.",
          "يعتقد Terry أن السيارة الهجينة قد تحسّن الوضع في المدينة؛ ويذكر أن السيارة الكهربائية وحدها لا تناسب رحلاته الطويلة لأن البطاريات ليست جيدة بما يكفي لها.",
          "تذكر المقابلة أن Terry يزور أخته في سان فرانسيسكو، وتبلغ المسافة إليها نحو 650 كيلومتراً."
        ],
        teacherNotes: [
          "سؤال فهم مستند إلى المقابلة: Why doesn’t Terry choose an all-electric car? -> The batteries are not good enough for long journeys."
        ],
        examples: [
          {
            en: "A hybrid car uses its petrol engine on the open road.",
            ar: "تستخدم السيارة الهجينة محرك البنزين على الطريق المفتوح.",
            highlight: "petrol engine on the open road",
            note: "معلومة وردت في مقابلة Terry"
          }
        ],
        exercises: [
          {
            id: "5u3-ex8",
            question: "Why doesn’t Terry choose an all-electric car?",
            options: [
              "Because the batteries are not good enough for long journeys",
              "Because there are no electric cars in Los Angeles",
              "Because he never drives outside the city",
              "Because he does not like the colour of electric cars"
            ],
            correctAnswer: "Because the batteries are not good enough for long journeys",
            explanation: "يوضح Terry أن بطاريات السيارات الكهربائية ليست جيدة بما يكفي للرحلات الطويلة التي يقوم بها.",
            type: "mcq",
            sourcePages: "الملزمة ص 89"
          }
        ]
      },
      {
        id: "5th-u3-l9",
        unitId: 53,
        lessonNumber: 9,
        titleAr: "الدرس التاسع: عودة المها العربي واختبار الوحدة (The Oryx is Back & Unit 3 Test)",
        titleEn: "Lesson 9: The Oryx is Back and Unit 3 Review",
        category: "reading",
        summary: "قراءة The oryx is back عن تناقص أعداد المها العربي بسبب الصيد، وبرامج الإكثار في حدائق الحيوان وإعادته إلى البرية في عُمان والسعودية.",
        sourcePages: "الملزمة ص 90 - 91",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "90–91",
          verificationNote: "النص The oryx is back في صفحة المصدر 90، وتتبعه أسئلة الفهم والمفردات في صفحة 91.",
          originalText: [
            "The oryx is back\nThe oryx is a beautiful antelope with two long horns. It is one of the few big animals that can live in the desert. It gets most of its water from plants; it eats at night when there is some water on the leaves. It walks hundreds of kilometres to find food.",
            "In the 1960s, the population of oryx in the Arabian Peninsula was very small. The animal was endangered because of hunting. It was hunted for two reasons: the local Bedouin people hunted it for meat, and city people hunted it for sport. In the past, when the hunters were on horses, the oryx survived. But hunters in big four-wheel-drive cars were able to follow the oryx everywhere – it could not get away from them. In 1972, the last wild oryx was shot.",
            "But, happily, that was not the end of the story. Zoos around the Middle East had quite a good number of oryx. They got the animals to breed, to build up their numbers. Then, in 1982, they put some oryx back into the wild in Oman. The programme was a success, and in 1990 they did the same thing in Saudi Arabia. Of course, hunting the oryx is no longer allowed. Experts say that today the wild population of these wonderful animals is over 1,000, 6,000–7,000 more in zoos and private collections."
          ]
        },
        detailedContent: [
          "المها (Oryx): حيوان صحراوي ذو قرنين طويلين؛ يوضح النص أن أعداده في شبه الجزيرة العربية كانت قليلة في الستينيات وأن الصيد بالسيارات ذات الدفع الرباعي سهّل مطاردته.",
          "استُخدمت حدائق الحيوان لزيادة أعداد المها، ثم أُعيد إطلاق بعض الحيوانات في البرية في عُمان سنة 1982، وتكرر البرنامج في السعودية سنة 1990؛ ويذكر النص أن صيده لم يعد مسموحاً.",
          "يعرض النص مراحل تناقص الأعداد ثم الإكثار وإعادة الإطلاق في البرية."
        ],
        teacherNotes: [
          "سؤال فهم مستند إلى النص: When were oryx reintroduced into the wild in Oman? -> In 1982."
        ],
        examples: [
          {
            en: "They got the animals to breed, to build up their numbers.",
            ar: "عملت حدائق الحيوان على تكثير الحيوانات لزيادة أعدادها.",
            highlight: "got the animals to breed",
            note: "عبارة من النص الأصلي"
          }
        ],
        exercises: [
          {
            id: "5u3-ex9",
            question: "How did zoos in the Middle East help the oryx?",
            options: [
              "They got the animals to breed, to build up their numbers",
              "They encouraged more desert hunting",
              "They moved the animals to polar regions",
              "They sold the animals as domestic pets"
            ],
            correctAnswer: "They got the animals to breed, to build up their numbers",
            explanation: "يذكر النص أن حدائق الحيوان جعلت المها يتكاثر لزيادة أعداده، ثم أُعيد إطلاقه في البرية.",
            type: "mcq",
            sourcePages: "الملزمة ص 91"
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
    description: "مراجعة لقواعد وقراءات الوحدة الرابعة: قراءة بكار والمخرجة منى أبو النصر، وحوار إصابة Helen في الركبة، ثم تدريبات واختبار الوحدة على القواعد والمفردات.",
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
        titleEn: "Lesson 1: Bakkar and Animator Mona Abu El Nasr",
        category: "reading",
        summary: "قراءة عن بكار، الطفل من صعيد مصر الذي يحب الفن والرسم ويهتم بالحيوانات، وعن موضوعات حلقاته ومسيرة المخرجة منى أبو النصر.",
        sourcePages: "الملزمة ص 97 - 98",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "97–98",
          verificationNote: "النص Have you heard of Bakkar? في صفحة المصدر 97، وتتبعها تمارين الاستيعاب في صفحة 98.",
          originalText: [
            "HAVE YOU HEARD OF BAKKAR?\nBakkar is a young country boy in Upper Egypt. His father is dead and he lives with his mother. He loves art and drawing, and he cares for animals. He is not a hero, but he is a very kind and sociable child.",
            "You might have watched Bakkar cartoons during Ramadan. In Egypt, 40 million Egyptians turn on their TVs to watch him every day of Ramadan. The series is also very popular in the United Arab Emirates, Oman and Tunisia. Mona Abu El Nasr, who invented and created Bakkar, explained why people of different ages and classes like watching the series during the month of Ramadan. She said it’s because people can recognize Bakkar’s Muslim values. She also said that he is a nice change from Western cartoon characters, and he speaks Arabic, even if he has got a funny Nubian accent.",
            "The Bakkar shows often have serious topics. For example, one episode is about sympathy for less fortunate people. Habiba, a little blind girl, saves her school friends from danger. Another episode about education shows the importance of teaching everyone in society to read and write. In a more recent show, the main topic is environmental problems. Bakkar works with a Red Sea Ranger. They want to rescue endangered animals from a cruel zookeeper. The cartoon shows children that it’s a bad idea to go fishing or collect sea animals in protected areas.",
            "Mona Abu El Nasr believed that it’s important for the Arab world to have its own cartoon characters. She opened Cairo Cartoon Studios in 1990, and she has been making Egyptian cartoons for TV since then. She started with Kani Wa Mani, then made Sinbad and finally Bakkar.",
            "Perhaps the Bakkar character is so successful because it is the most similar to Mona Abu El Nasr herself. Bakkar loves art and Mona loved art. ‘Art is in my family,’ she said. Mona’s older sister was a painter, and her uncle was an art teacher. She herself always loved drawing funny characters in bright colours in her notebooks at school.\nIs there someone in your class who is good at drawing? Perhaps you have a future Mona Abu El Nasr in your class."
          ]
        },
        detailedContent: [
          "بكار طفل من صعيد مصر يعيش مع أمه، ويحب الفن والرسم ويهتم بالحيوانات؛ ويتحدث العربية بلكنة نوبية.",
          "منى أبو النصر هي مبتكرة بكار؛ افتتحت Cairo Cartoon Studios سنة 1990، ثم أنتجت Kani Wa Mani وSinbad وBakkar.",
          "تتناول حلقات المسلسل موضوعات التعاطف مع الأقل حظاً والتعليم وحماية الحيوانات والمناطق البحرية المحمية."
        ],
        teacherNotes: [
          "أسئلة الفهم في الصفحة 98:",
          "1. Who created Bakkar? -> Mona Abu El Nasr.",
          "2. In which other countries is the series popular? -> The United Arab Emirates, Oman and Tunisia.",
          "3. When did Mona Abu El Nasr open Cairo Cartoon Studios? -> In 1990."
        ],
        examples: [
          {
            en: "Mona Abu El Nasr opened Cairo Cartoon Studios in 1990.",
            ar: "افتتحت منى أبو النصر استوديو القاهرة للرسوم المتحركة سنة 1990.",
            highlight: "Cairo Cartoon Studios in 1990",
            note: "معلومة مؤرخة في نص القراءة"
          }
        ],
        exercises: [
          {
            id: "5u4-ex1",
            question: "Bakkar was created by the Egyptian animator ______.",
            options: ["Mona Abu El Nasr", "Naguib Mahfouz", "Umm Kulthum", "Taha Hussein"],
            correctAnswer: "Mona Abu El Nasr",
            explanation: "تذكر القطعة أن منى أبو النصر هي التي ابتكرت شخصية بكار.",
            type: "mcq",
            sourcePages: "الملزمة ص 97"
          }
        ]
      },
      {
        id: "5th-u4-l2",
        unitId: 54,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: إصابة هيلين في الركبة وحوار المساعدة (Helen’s Knee Injury)",
        titleEn: "Lesson 2: Helen’s Knee Injury and Offering Help",
        category: "reading",
        summary: "حوار مصوّر بين Helen وZeina عن إصابة Helen في الركبة وطلبها المساعدة، مع تعبيرات العرض والتفضيل والتنبؤ بالقدرة.",
        sourcePages: "الملزمة ص 99 - 100",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "99",
          verificationNote: "المشهد الحواري المصوّر في صفحة المصدر 99 بين Helen وZeina؛ يبدأ بعرض Zeina المساعدة على Helen المصابة في ركبتها.",
          originalText: [
            "Zeina: Come on, Helen. I know you’re joking. Don’t waste time.\nHelen: I’m not wasting time. I’ve hurt my knee. It hurts so much that I can’t stand up.",
            "Zeina: Shall I help you walk to that seat?\nHelen: Yes, please, Zeina.",
            "Zeina: If you put your arm around my shoulder, you’ll be able to walk.\nHelen: Ow! It feels really terrible if I move it.",
            "Zeina: You look very white. Would you like me to get you a glass of water?\nHelen: No, I’d prefer you to stay here with me.",
            "Helen: I think I’ve broken my leg, Zeina. If it is broken, I won’t be able to play in the tennis competition on Saturday."
          ]
        },
        detailedContent: [
          "تقول Helen إنها آذت ركبتها ولا تستطيع الوقوف؛ وتساعدها Zeina على الوصول إلى مقعد، ثم تخشى Helen أن تكون قد كسرت ساقها وأن تفوّت مسابقة التنس يوم السبت.",
          "تعبيرات الحوار: Shall I help you…? لعرض المساعدة، Would you like me to…? لتقديم عرض، I’d prefer you to… للتعبير عن التفضيل، وwon’t be able to للتعبير عن عدم القدرة مستقبلاً.",
          "يربط الحوار بين if والنتيجة المستقبلية: If it is broken, I won’t be able to play in the tennis competition on Saturday."
        ],
        teacherNotes: [
          "من عبارات الحوار: عرض المساعدة باستخدام Shall I…? وWould you like me to…?، والتفضيل باستخدام I’d prefer you to…، والنتيجة المستقبلية باستخدام if."
        ],
        examples: [
          {
            en: "If it is broken, I won’t be able to play in the tennis competition on Saturday.",
            ar: "إذا كانت مكسورة، فلن أتمكن من اللعب في مسابقة التنس يوم السبت.",
            highlight: "If it is broken / won’t be able to",
            note: "مثال من الحوار المصوّر"
          }
        ],
        exercises: [
          {
            id: "5u4-ex2",
            question: "Why can’t Helen stand up?",
            options: [
              "Because she has hurt her knee.",
              "Because she has lost her tennis racket.",
              "Because she is tired after a long match.",
              "Because she has hurt her shoulder."
            ],
            correctAnswer: "Because she has hurt her knee.",
            explanation: "تقول Helen إن ركبتها تؤلمها كثيراً لدرجة أنها لا تستطيع الوقوف.",
            type: "mcq",
            sourcePages: "الملزمة ص 99"
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
        pedagogy: {
          "warmup": "اختبار الوحدة يجمع أكثر من قاعدة؛ النجاح يبدأ بتشخيص القاعدة قبل اختيار الإجابة.",
          "learningObjectives": [
            "أحدد موضوع السؤال من تركيبه وسياقه.",
            "أختار القاعدة المناسبة قبل النظر إلى الخيارات.",
            "أراجع المساعد وشكل الفعل.",
            "أفسر سبب الاختيار."
          ],
          "arabicExplanation": "اقرأ الجملة كاملة وحدد هل المطلوب زمن أو شرط أو استنتاج أو صيغة أخرى من مراجعة الوحدة. لا تعتمد على كلمة مفتاحية وحدها؛ افحص تركيب الجملة وشكل الفعل المطلوب. بعد اختيار الإجابة، أعد قراءة الجملة للتأكد من سلامة المعنى.",
          "solvingClues": [
            "اقرأ الجملة كاملة.",
            "سمّ القاعدة أولاً.",
            "افحص الفعل المساعد وشكل الفعل الذي يليه.",
            "تحقق من المعنى بعد إدخال الإجابة."
          ],
          "commonTraps": [
            "لا تعتمد على كلمة زمنية واحدة.",
            "لا تخلط بين أنواع الشرط.",
            "تذكر أن modal يتبعه مصدر وأن perfect يتطلب V3."
          ],
          "recapSummary": "شخّص القاعدة، افحص المساعد وشكل الفعل، ثم راجع المعنى.",
          "nextStepRecommendation": "صنّف أخطاء الاختبار بحسب القاعدة وراجع أكثر موضوع أخطأت فيه."
        },
        unitId: 54,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: اختبار الوحدة الرابعة (Unit Four Test)",
        titleEn: "Lesson 4: Unit Four Test — Past Tenses, Present Perfect & Future Forms",
        category: "grammar",
        summary: "مراجعة اختبار الوحدة الرابعة كما ورد في الصفحتين 102–103 من الملزمة، وتشمل الماضي البسيط والماضي المستمر، والمضارع التام البسيط والمستمر، واستخدام will وwon’t.",
        sourcePages: "الملزمة ص 102 - 103",
        detailedContent: [
          "تمرين A (ص 102): اختيار الصيغة الصحيحة بين المضارع البسيط والمضارع المستمر.",
          "تمرين B (ص 102): إكمال جمل بالماضي البسيط أو الماضي المستمر، مع التمييز بين الحدث الجاري والحدث الذي قطعه.",
          "تمرين C (ص 103): استخدام المضارع التام البسيط أو المضارع التام المستمر، مع for وnever وhow long وyet.",
          "تمرين D (ص 103): إكمال جمل باستخدام will أو won’t وصيغة الفعل المناسبة.",
          "تمرين E (ص 103): اختيار الصيغة الصحيحة للفعل في جمل بالمضارع التام."
        ],
        teacherNotes: [
          "مرجع المصدر: Unit Four Test، الصفحتان 102–103 من الملزمة. هذه صفحة اختبار وحدة تدريبية وليست ورقة امتحان نصف سنة موزعة على 100 درجة."
        ],
        examples: [
          {
            en: "I have been reading this book for two months, but I still have not finished it.",
            ar: "أقرأ هذا الكتاب منذ شهرين، لكنني لم أنتهِ منه بعد.",
            highlight: "for two months / have been reading",
            note: "مثال من تدريب المضارع التام المستمر في الصفحة 103"
          }
        ],
        exercises: [
          {
            id: "5u4-ex4",
            question: "How long has the speaker been reading the book?",
            options: ["For two months", "For two years", "For two weeks", "For two days"],
            correctAnswer: "For two months",
            explanation: "يذكر المتحدث أنه يقرأ الكتاب منذ شهرين: I have been reading this book for two months (الملزمة ص 103).",
            type: "mcq",
            sourcePages: "الملزمة ص 103"
          }
        ]
      }
    ]
  }
];
