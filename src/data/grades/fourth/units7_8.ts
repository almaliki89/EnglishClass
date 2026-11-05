import { Unit } from '../../../types';

// =========================================================================
// الوحدة السابعة والثامنة - ملزمة الرابع الإعدادي (2025-2026)
// مرجع الصفحات: ص 119 - 149
// =========================================================================

export const FOURTH_PREPARATORY_UNITS_7_8: Unit[] = [
  {
    id: 47,
    number: 7,
    titleAr: "الوحدة السابعة: البيئة والأهوار والمبني للمجهول (Environment & Technology)",
    titleEn: "Unit 7: Zero & First Conditionals, The Al-Hammaar Marshes, Petroleum & Passive Voice, Satellites & Sea Turtles",
    description: "الحالة الشرطية الصفرية والأولى، رياح التجارة والأرصاد الجوية، أهوار الحمار في جنوب العراق، تكون النفط والمبني للمجهول، التجارة الإلكترونية، الأقمار الصناعية، وسلاحف صقرية المنقار المهددة.",
    accentColor: "from-sky-600 to-blue-700",
    bgGradient: "bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200",
    sourcePages: "الملزمة ص 119 - 144",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "4th-u7-l1",
        unitId: 47,
        lessonNumber: 1,
        titleAr: "الدرس الأول: الحالة الشرطية الصفرية والأولى (Zero & First Conditionals)",
        titleEn: "Lesson 1: Conditionals - Zero Conditional (Truths) & First Conditional (Future Real)",
        category: "grammar",
        summary: "التمتيز بين الشرطية الصفرية للحقائق العلمية المؤكدة والشرطية الأولى للاحتمالات المستقبلية الواقعية.",
        sourcePages: "الملزمة ص 119 - 128",
        grammarRuleFormula: "1) Zero Conditional (حقائق وقوانين عامة):\n   - If + Present Simple , Present Simple\n   - Example: If you heat ice, it melts.\n2) First Conditional (احتمال حقيقي في المستقبل):\n   - If + Present Simple , will / won't + Base Verb\n   - Example: If it rains tomorrow, we will stay indoors.",
        detailedContent: [
          "شرح الفروق بين جمل الحالة الصفرية والحالة الأولى وطريقة صياغة فعل الشرط وجواب الشرط.",
          "تمرين كتاب النشاط ص 125-128: ربط الجمل وتصنيف نوع الشرطية."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 125: جملة If في كلا الحالتين الصفرية والأولى تأخذ دائماً المضارع البسيط!"
        ],
        examples: [
          {
            en: "If the temperature falls below zero, water freezes into ice.",
            ar: "إذا انخفضت درجة الحرارة تحت الصفر، يتجمد الماء إلى جليد.",
            highlight: "falls / freezes",
            note: "حالة شرطية صفرية لحقيقة علمية"
          }
        ],
        exercises: [
          {
            id: "4u7-ex1",
            question: "If we don't protect the wetlands, many rare species ______.",
            options: ["will disappear", "disappeared", "disappear", "disappearing"],
            correctAnswer: "will disappear",
            explanation: "حالة شرطية الأولى للاحتمال المستقبلي تتطلب will + المصدر (will disappear) (الملزمة ص 128).",
            type: "mcq",
            sourcePages: "الملزمة ص 128"
          }
        ]
      },
      {
        id: "4th-u7-l2",
        unitId: 47,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: أهوار الحمار في جنوب العراق (The Al-Hammaar Marshes)",
        titleEn: "Lesson 2: Iraqi Heritage: The Al-Hammaar Marshes in Southern Iraq",
        category: "reading",
        summary: "القطعة الاستيعابية الجغرافية لأهوار الحمار جنوب العراق، تاريخ سكان الأهوار، تجفيف الأهوار التسعينات، وإعادتها لمحمية عالمية اليونسكو.",
        sourcePages: "الملزمة ص 129 - 131",
        detailedContent: [
          "أهوار الحمار (Al-Hammaar Marshes): واحدة من أهم وأكبر المناطق الرطبة في العالم الواقعة جنوب العراق بين دجلة والفرات؛ موطن لعرب الأهوار والملايين من الطيور المهاجرة والأسماك النادرة.",
          "تاريخ الأهوار: تعرضت للتجفيف الشديد في تسعينات القرن الماضي مما شرد سكانها ودمر التنوع البيئي، ثم جرى إعادة غمرها بالمياه بعد عام 2003 وانضمت للائحة التراث العالمي لليونسكو.",
          "أسئلة الاستيعاب المدرسية (الملزمة ص 130)."
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 130:",
          "1. What are the Al-Hammaar Marshes? -> One of the most important wetland ecosystems in the Middle East.",
          "2. What happened to the Marshes in the 1990s? -> They were artificially drained and dried up."
        ],
        examples: [
          {
            en: "The Mesopotamian Marshes are recognized by UNESCO as a World Heritage site.",
            ar: "تعد أهوار بلاد ما بين النهرين موقعاً للتراث العالمي المعترف به من قبل اليونسكو.",
            highlight: "World Heritage site",
            note: "الأهمية العالمية للأهوار"
          }
        ],
        exercises: [
          {
            id: "4u7-ex2",
            question: "The Al-Hammaar Marshes are located in the south of ______.",
            options: ["Iraq", "Egypt", "Syria", "Jordan"],
            correctAnswer: "Iraq",
            explanation: "تقع أهوار الحمار في جنوب العراق (الملزمة ص 130).",
            type: "mcq",
            sourcePages: "الملزمة ص 130"
          }
        ]
      },
      {
        id: "4th-u7-l3",
        unitId: 47,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: تكوّن النفط والمبني للمجهول (Petroleum Formation & Passive Voice)",
        titleEn: "Lesson 3: Science & Grammar: Petroleum Formation & Passive Voice Rules",
        category: "grammar",
        summary: "كيفية تكون النفط الخام في باطن الأرض وقواعد المبني للمجهول عبر الأزمنة.",
        sourcePages: "الملزمة ص 132 - 135",
        grammarRuleFormula: "Passive Voice Rules:\n- Present Simple Passive: Object + is / are + P.P.\n  Example: Petroleum is extracted from deep underground oilfields.\n- Past Simple Passive: Object + was / were + P.P.\n  Example: Petroleum was formed millions of years ago from organic matter.",
        detailedContent: [
          "تكون النفط (Petroleum Formation): تكون النفط الخام قبل ملايين السنين من بقايا النباتات والكائنات البحرية الميتة المدفونة تحت طبقات الصخور والضغط العالي.",
          "قواعد المبني للمجهول: التركيز على الفعل والحدث بدلاً من فاعل الفعل.",
          "تمرين كتاب النشاط ص 134: تحويل جمل استخراج النفط وتكريره إلى المبني للمجهول."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 134: في المبني للمجهول نضع المفعول به في البداية ثم صيغة be المناسبة للزمن متبوعة بالتصريف الثالث P.P."
        ],
        examples: [
          {
            en: "Crude oil is refined into petrol, diesel, and kerosene in big refineries.",
            ar: "يُكرر النفط الخام إلى بنزين وديزل وكيروسين في مصافٍ كبرى.",
            highlight: "is refined",
            note: "مبني للمجهول في المضارع البسيط"
          }
        ],
        exercises: [
          {
            id: "4u7-ex3",
            question: "Petroleum ______ millions of years ago under heavy geological pressure.",
            options: ["was formed", "is formed", "forms", "has formed"],
            correctAnswer: "was formed",
            explanation: "حدث تكون النفط تم في الماضي البعيد (millions of years ago) في المبني للمجهول was formed (الملزمة ص 134).",
            type: "mcq",
            sourcePages: "الملزمة ص 134"
          }
        ]
      },
      {
        id: "4th-u7-l4",
        unitId: 47,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: سلاحف صقرية المنقار المهددة بالانقراض (Endangered Hawksbill Sea Turtles)",
        titleEn: "Lesson 4: Marine Biology: The Endangered Hawksbill Sea Turtles",
        category: "reading",
        summary: "القطعة الاستيعابية البحرية حول سلاحف صقرية المنقار، قوقعتها الملونة البديعة، والمخاطر البيئية التي تهدد بيوضها على الشواطئ.",
        sourcePages: "الملزمة ص 140 - 143",
        detailedContent: [
          "سلاحف صقرية المنقار (Hawksbill Turtles): سلاحف بحرية متوسطة الحجم تمتاز بصدفة مزخرفة بألوان زاهية؛ تلعب دوراً مصيرياً في تنظيف الشعاب المرجانية.",
          "مخاطر الانقراض: التلوث البلاستيكي، الصيد الجائر لصدفاتها الفاخرة، وتدمر شواطئ وضع البيض بسبب السياحة غير المنظمة.",
          "أسئلة الاستيعاب البيئية بالملزمة ص 142."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 141: Hawksbill sea turtles are critically endangered due to shell hunting and coastal pollution."
        ],
        examples: [
          {
            en: "Hawksbill sea turtles lay their eggs on sandy beaches at night.",
            ar: "تضع سلاحف صقرية المنقار بيوضها على الشواطئ الرملية ليلاً.",
            highlight: "lay their eggs",
            note: "دورة حياة السلاحف البحرية"
          }
        ],
        exercises: [
          {
            id: "4u7-ex4",
            question: "Hawksbill sea turtles are currently classified as ______ animals.",
            options: ["endangered", "safe", "dangerous", "common"],
            correctAnswer: "endangered",
            explanation: "تعد سلاحف صقرية المنقار كائنات مهددة بالانقراض (endangered) (الملزمة ص 141).",
            type: "mcq",
            sourcePages: "الملزمة ص 141"
          }
        ]
      }
    ]
  },
  {
    id: 48,
    number: 8,
    titleAr: "الوحدة الثامنة: المراجعة الشاملة للفصل الثاني (Semester 2 Comprehensive Revision)",
    titleEn: "Unit 8: Semester 2 Consolidation, GPS Navigation, Planet Saturn & Final Examination",
    description: "مراجعة كبرى مكثفة لجميع القواعد والقراءات والمفردات للفصل الثاني: نظام تحديد المواقع (GPS)، حقائق كوكب زحل، لياقة رواد الفضاء، والامتحان التحريري الشامل النهائي لنهاية العام (100 درجة).",
    accentColor: "from-teal-600 to-emerald-700",
    bgGradient: "bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-200",
    sourcePages: "الملزمة ص 144 - 149",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "4th-u8-l1",
        unitId: 48,
        lessonNumber: 1,
        titleAr: "الدرس الأول: تقنية تحديد المواقع وتطبيق GPS (GPS Technology & Navigation)",
        titleEn: "Lesson 1: GPS Satellite Navigation & Modern Technology Uses",
        category: "reading",
        summary: "كيف تعمل تقنية GPS عبر شبكة الأقمار الصناعية لتحديد المواقع والملاحة الجوية والبرية والبحرية.",
        sourcePages: "الملزمة ص 144 - 147",
        detailedContent: [
          "تقنية GPS (Global Positioning System): شبكة أقمار صناعية تدور حول الأرض وترسل إشارات راديوية فائقة الدقة لأجهزة الاستقبال في الهواتف والسيارات والطائرات لتحديد الإحداثيات.",
          "تطبيقات GPS: الملاحة البحرية، تتبع الرحلات، الطوارئ، والإنقاذ."
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 147: GPS receiver calculates your exact location by receiving signals from multiple satellites."
        ],
        examples: [
          {
            en: "Drivers and pilots rely on GPS navigation to reach their destinations safely.",
            ar: "يعتمد السائقون والطيارون على ملاحة GPS للوصول إلى وجهاتهم بسلام.",
            highlight: "GPS navigation",
            note: "استخدامات الملاحة الرقمية"
          }
        ],
        exercises: [
          {
            id: "4u8-ex1",
            question: "GPS stands for Global ______ System.",
            options: ["Positioning", "Powering", "Printing", "Parking"],
            correctAnswer: "Positioning",
            explanation: "الرمز GPS يعني Global Positioning System (نظام تحديد المواقع العالمي) (الملزمة ص 147).",
            type: "mcq",
            sourcePages: "الملزمة ص 147"
          }
        ]
      },
      {
        id: "4th-u8-l2",
        unitId: 48,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: حقائق كوكب زحل وليساقة رواد الفضاء (Planet Saturn & Astronaut Fitness)",
        titleEn: "Lesson 2: Astronomy & Fitness: Saturn's Rings & Keeping Fit in Space",
        category: "reading",
        summary: "حقائق كوكب زحل وحلقاته الثلجية، وأساليب اللياقة البدنية والتمارين اليومية لرواد الفضاء للوقاية من ضمور العضلات.",
        sourcePages: "الملزمة ص 148 - 149",
        detailedContent: [
          "حقائق كوكب زحل (Planet Saturn): ثاني أكبر كواكب المجموعة الشمسية؛ يشتهر بحلقاته المكونة من ملايين الجسيمات الثلجية والصخرية.",
          "لياقة الفضاء (Keeping Fit in Space): في بيئة انعدام الجاذبية يضعف الجسد وتتراجع كثافة العظام، لذا يلتزم الرواد بممارسة الرياضة لـ 2-3 ساعات يومياً على أجهزة مخصصة."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 149: Astronauts must exercise every day in space to prevent muscle loss in zero gravity."
        ],
        examples: [
          {
            en: "In zero gravity, astronauts exercise daily to maintain bone density and muscle strength.",
            ar: "في انعدام الجاذبية، يمارس رواد الفضاء الرياضة يومياً للحفاظ على كثافة العظام وقوة العضلات.",
            highlight: "zero gravity",
            note: "أهمية الرياضة في الفضاء"
          }
        ],
        exercises: [
          {
            id: "4u8-ex2",
            question: "Astronauts must exercise daily in space mainly to prevent ______ loss.",
            options: ["muscle", "hair", "teeth", "clothing"],
            correctAnswer: "muscle",
            explanation: "يمارس رواد الفضاء الرياضة يومياً لمنع ضمور العضلات وفقدان قوتها في انعدام الجاذبية (الملزمة ص 149).",
            type: "mcq",
            sourcePages: "الملزمة ص 149"
          }
        ]
      },
      {
        id: "4th-u8-l3",
        unitId: 48,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: الامتحان التحريري الشامل النهائي للرابع الإعدادي (Official 100-Mark Final Exam)",
        titleEn: "Lesson 3: Official 100-Mark Final Examination Model Paper for 4th Preparatory",
        category: "reading",
        summary: "النموذج الامتحاني التحريري النهائي الشامل (100 درجة) للرابع الإعدادي المكتوب بالملزمة ص 149.",
        sourcePages: "الملزمة ص 149",
        detailedContent: [
          "نموذج الامتحان النهائي العام (100 درجة):",
          "1. السؤال الأول (20 درجة): قطعتان خارجيتان واستيعاب نصوص كندا وأهوار الحمار والمتحف العراقي.",
          "2. السؤال الثاني (30 درجة): القواعد والوظائف (الأزمنة، الأسئلة غير المباشرة، used to، الشرطيات الصفرية والأولى، المبني للمجهول، المستقبل المستمر).",
          "3. السؤال الثالث (20 درجة): المفردات والإملاء والظروف وصفات ed/ing وتصنيف الكلمات.",
          "4. السؤال الرابع (10 درجات): الأدب المقرّر (قصتا جزيرة الكنز وحول العالم في 80 يوماً).",
          "5. السؤال الخامس (20 درجة): الإنشاء المنهجي (عادات الزفاف في العراق، رحلة أربيل، أو مستقبل عائلتي)."
        ],
        teacherNotes: [
          "توجيه الملزمة ص 149: هذا الاختبار محاكاة امتحانية رسمية معتمدة في المدارس العراقية لمرحلة الرابع الإعدادي."
        ],
        examples: [
          {
            en: "The end-of-year exam for 4th Preparatory covers all reading, grammar, vocabulary, literature and writing units.",
            ar: "يغطي الامتحان النهائي للصف الرابع الإعدادي جميع وحدات الاستيعاب والقواعد والمفردات والأدب والإنشاء.",
            highlight: "100-mark final exam",
            note: "النموذج الامتحاني الشامل"
          }
        ],
        exercises: [
          {
            id: "4u8-ex3",
            question: "The comprehensive final exam for 4th Preparatory is marked out of ______.",
            options: ["100", "50", "80", "120"],
            correctAnswer: "100",
            explanation: "الدرجة الرسمية للامتحان النهائي الشامل للرابع الإعدادي هي 100 درجة (الملزمة ص 149).",
            type: "mcq",
            sourcePages: "الملزمة ص 149"
          }
        ]
      }
    ]
  }
];
