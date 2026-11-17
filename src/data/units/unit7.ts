import { Unit } from '../../types';

export const UNIT_7: Unit = {
  id: 7,
  number: 7,
  titleAr: "الوحدة السابعة: الدراسة، صيغ المستقبل، واستخدام المكتبة",
  titleEn: "Unit 7: Education, Future Forms & Using the Library",
  description: "اشتقاق الأسماء واللواحق (Suffixes)، صيغ المستقبل الخمسة (Will, Going to, Present Continuous, Future Continuous, Present Simple)، المستقبل في الماضي (Future in the Past)، قطعة العمل اليوم (Work Today)، وقطعة استخدام المكتبة (Using the Library).",
  accentColor: "bg-coral text-ink",
  bgGradient: "bg-answer-review-bg border-ink",
  lessons: [
    {
      id: "u7-l1",
      unitId: 7,
      lessonNumber: 1,
      titleAr: "الدرس الأول: مصطلحات التعليم واشتقاق الأسماء (Suffixes)",
      titleEn: "Lesson 1: Education Vocabulary & Suffixes",
      category: "vocabulary",
      summary: "اشتقاق الأسماء من الأفعال بإضافة اللواحق (ment, tion, sion, ance) ومصطلحات المؤتمرات والدورات التعليمية (ص 142 من الملزمة).",
      grammarRuleFormula: "Verb => Noun (Suffixes):\nenrol -> enrolment | register -> registration | apply -> application | admit -> admission | attend -> attendance | enhance -> enhancement",
      detailedContent: [
        "1. اشتقاق الأسماء من الأفعال (تمرين A ص 148 كتاب النشاط):",
        "- enhance (يحسن) -> enhancement (تحسين).",
        "- enrol (يسجل/ينخرط) -> enrolment (تسجيل).",
        "- apply (يقدم طلباً) -> application (استمارة تقديم).",
        "- admit (يقبل) -> admission (قبول).",
        "- attend (يحضر) -> attendance (حضور).",
        "- register (يسجل) -> registration (تسجيل).",
        "2. مصطلحات الدورات والمؤتمرات (ص 142):",
        "- conference = a formal meeting for discussion (مؤتمر).",
        "- seminar = an academic class with discussions (حلقة نقاشية).",
        "- workshop = a practical training class (ورشة عمل).",
        "- catalogue = a book listing courses and information (دليل الدورات).",
        "- qualifications = exams you have passed (مؤهلات)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي هذه اللواحق والمشتقات نصاً في السؤال الثالث فرع C (إملاء) وفرع A (إسقاطات) سنوياً."
      ],
      commonMistakes: [
        "الخطأ في إملاء admission (بحرفي ss).",
        "الخطأ في إملاء application أو enrolment (بـ l واحدة أو اثنتين)."
      ],
      examples: [
        {
          en: "register -> registration ; enrol -> enrolment",
          ar: "يسجل -> تسجيل ؛ ينخرط -> تسجيل",
          highlight: "enrolment",
          note: "وزاري 2017 و 2020"
        }
      ],
      exercises: [
        {
          id: "u7-l1-ex1",
          question: "You can improve your computer skills by taking an evening class to _________ your job prospects.",
          options: ["enhance", "enrol", "admit", "attend"],
          correctAnswer: "enhance",
          explanation: "الفعل الذي يعني تحسين وتطوير الفرص هو enhance.",
          type: "mcq",
          ministerialYear: "تمرين A ص 148"
        }
      ]
    },
    {
      id: "u7-l2",
      unitId: 7,
      lessonNumber: 2,
      titleAr: "الدرس الثاني: صيغ المستقبل الخمسة في اللغة الإنكليزية",
      titleEn: "Lesson 2: 5 Future Forms in English",
      category: "grammar",
      summary: "شرح الصيغ الخمس للتعبير عن المستقبل: الجداول والمواعيد الثابتة (Present Simple)، الخطط والنوايا (Going to)، المواعيد والترتيبات الثابتة (Present Continuous)، الاستمرار في وقت محدد (Future Continuous)، والوعود والآراء (Will).",
      grammarRuleFormula: "1. Present Simple (timetables/schedules): Subject + verb-(s)\n2. Present Continuous (fixed arrangements): am/is/are + v-ing\n3. Going to (plans & intentions): am/is/are + going to + inf\n4. Future Continuous (action in progress at a future time): will be + v-ing\n5. Future Simple (predictions/promises/opinions): will + inf",
      detailedContent: [
        "صيغ المستقبل الخمسة (ص 143 - 146 من ملزمة الأستاذ مصطفى تركي):",
        "1. المضارع البسيط للجداول والمواعيد الثابتة (Timetables & Schedules):",
        "   - نستخدمه عند وجود فاعل غير عاقل يدل على جدول مواعيد: (course, term, class, train, plane, match, film).",
        "   - The English course begins (begin) on September 21st.",
        "   - The train leaves (leave) at 11:00.",
        "2. المضارع المستمر للمواعيد والترتيبات الثابتة مع أشخاص (Fixed Arrangements):",
        "   - نستخدم (am/is/are + v-ing) مع وجود وقت محدد ومع أشخاص أو أفعال المقابلة والمغادرة: meet, leave, visit, have a party.",
        "   - I'm meeting the director tomorrow morning at 9:00.",
        "3. صيغة (going to) للخطط والنوايا والقرارات المسبقة (Plans & Intentions):",
        "   - نستخدم (am/is/are + going to + مجرد) عند وجود نية أو قرار شخصي (decided, planned, want to).",
        "   - Dana is going to study medicine next year.",
        "4. المستقبل المستمر لحدث مستمر في وقت محدد بالمستقبل (Future Continuous):",
        "   - نستخدم (will be + v-ing) عند تحديد فترة زمنية معينة في المستقبل: (between 7 and 9, tomorrow morning, this time next week).",
        "   - Between 7:00 and 8:00 tomorrow evening, I will be writing my essay.",
        "5. المستقبل البسيط للتوقعات والآراء بدون دليل (Future Simple with will):",
        "   - نستخدم (will + مجرد) عند وجود أفعال الرأي والاعتقاد: think, hope, believe, promise.",
        "   - I think she will pass the exam easily."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي الذهبية لصيغ المستقبل:",
        "- إذا كانت الجملة تبدأ بموعد دورة أو فصل أو قطار (course, class, term, train) -> اختر المضارع البسيط (begins / leaves).",
        "- إذا حدد لك وقتاً بين ساعتين (between 7 and 8) أو (at this time tomorrow) -> اختر المستقبل المستمر (will be + v-ing).",
        "- إذا وجدت (think / promise / hope) -> اختر (will + مجرد).",
        "- إذا وجدت (decided / planning) -> اختر (going to)."
      ],
      commonMistakes: [
        "اختيار will مع موعد درس أو قطار بدلاً من المضارع البسيط.",
        "نسيان be في المستقبل المستمر (كتابة will doing خطأ والصحيح will be doing)."
      ],
      examples: [
        {
          en: "The train (leaves / is leaving) at 8:00. -> leaves (جدول مواعيد ثابت).",
          ar: "يغادر القطار الساعة 8:00.",
          highlight: "leaves at 8:00",
          note: "وزاري 2017 و 2020"
        },
        {
          en: "She (is going to / will) learn a new language because she decided to work abroad.",
          ar: "ستتعلم لغة جديدة لأنها قررت العمل في الخارج (قرار مسبق -> is going to).",
          highlight: "is going to learn",
          note: "ص 145"
        }
      ],
      exercises: [
        {
          id: "u7-l2-ex1",
          question: "The course (begins / will begin) in September.",
          options: ["begins", "will begin"],
          correctAnswer: "begins",
          explanation: "موعد دورة تعليمية ثابتة يخضع لجدول زمني (timetable) فنستخدم المضارع البسيط (begins).",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u7-l2-ex2",
          question: "This time tomorrow, I (will be flying / fly) to London.",
          options: ["will be flying", "fly"],
          correctAnswer: "will be flying",
          explanation: "تحديد وقت معين في المستقبل (This time tomorrow) يتطلب مستقبلاً مستمراً (will be flying).",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور ثانٍ"
        }
      ]
    },
    {
      id: "u7-l3",
      unitId: 7,
      lessonNumber: 3,
      titleAr: "الدرس الثالث: قطعة العمل اليوم (Work Today)",
      titleEn: "Lesson 3: Work Today (Reading & Tech Skills)",
      category: "reading",
      summary: "قطعة Work Today حول تحسين فرص العمل عبر مهارات الحاسوب: الجداول الإلكترونية، التصميم الرسومي الرقمي، تصميم المواقع، الدورات الحضورية والإلكترونية، والتعلم الذاتي.",
      grammarRuleFormula: "Work Today:\\n- Computer classes improve job prospects and may support a career change\\n- Spreadsheets present information in tables, often financial data\\n- Digital graphic design supports illustration and media work\\n- Web design teaches creating and maintaining company websites\\n- Online classes offer flexible study; self-study requires discipline",
      detailedContent: [
        "قطعة Work Today - ص 130 من ملزمة السادس 2027:",
        "يمكن تحسين فرص العمل بالالتحاق بدورات الحاسوب؛ فالحاسوب مستخدم في قطاعات أكثر، وينبغي للباحثين عن عمل معرفة أساسياته.",
        "الجداول الإلكترونية (Spreadsheets) شائعة لأنها تعرض المعلومات في شكل جداول، وتستخدم كثيراً لعرض المعلومات المالية.",
        "قد يدرس المصورون والفنانون التصميم الرسومي الرقمي لإنشاء رسومات لدور النشر ووكالات الإعلان أو للعمل في التلفزيون.",
        "تعلم تصميم المواقع (Web design) يعلّم إنشاء موقع الشركة وصيانته.",
        "لا يشترط أن يكون المتعلم طالباً جامعياً؛ توجد دورات تعليم مستمر مسائية ودورات عبر الإنترنت يمكن دراستها من المنزل وفي الوقت المناسب.",
        "يمكن للمنضبط ذاتياً التعلم من كتاب حاسوب، لكن الشروح قد تكون معقدة وتحتاج إلى تطبيق عملي.",
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة العمل اليوم تركز على المفردات التقنية الحديثة وسوق العمل المعاصر لمنهاج 2027."
      ],
      commonMistakes: [
        "الخلط بين spreadsheets (جداول البيانات) و graphic design (التصميم)."
      ],
      examples: [
        {
          en: "Spreadsheets are used in many businesses to show information in table form.",
          ar: "تُستخدم الجداول الإلكترونية في شركات كثيرة لعرض المعلومات في شكل جداول.",
          highlight: "show information in table form",
          note: "ص 130 من ملزمة السادس 2027"
        }
      ],
      exercises: [
        {"id":"u7-l3-ex1","question":"What are spreadsheets often used for in businesses?","options":["Showing information in table form, including financial information.","Measuring heart rate during exercise.","Teaching people how to swim.","Detecting speeding cars."],"correctAnswer":"Showing information in table form, including financial information.","explanation":"يوضح نص Work Today أن الجداول الإلكترونية تُستخدم في الشركات لعرض المعلومات على هيئة جداول، ومنها المعلومات المالية.","type":"mcq","ministerialYear":"ملزمة السادس 2027، ص 130"},
      ],
      readingPassage: {
        status: "permission_required",
        sourceTitle: "ملزمة السادس 2027 — إعداد الأستاذ عمار غالب",
        sourcePages: "ص 130 من ملزمة السادس 2027 (PDF ص 132)",
        verificationNote: "عُثر على نص Work Today في ص130. النص يتناول دورات الحاسوب والجداول والتصميم الرسومي وتصميم المواقع والتعلم الحضوري والإلكتروني والتعلم الذاتي؛ لا يتناول telecommuting."
      }
    },
    {
      id: "u7-l4",
      unitId: 7,
      lessonNumber: 4,
      titleAr: "الدرس الرابع: المستقبل في الماضي (Future in the Past)",
      titleEn: "Lesson 4: Future in the Past",
      category: "grammar",
      summary: "شرح قاعدة المستقبل في الماضي والتحويلات الوزارية الإلزامية للأفعال المساعدة (will -> would, is/am -> was, are -> were, can -> could) من صفحة 150 بالملزمة.",
      grammarRuleFormula: "will -> would | can -> could\nam / is going to -> was going to\nare going to -> were going to\nverb-(s) [Present Simple] -> verb-ed [Past Simple]",
      detailedContent: [
        "قواعد المستقبل في الماضي (Future in the Past) - ص 150 - 152:",
        "- يعبر عن خطة أو نية أو توقع كان مقرراً في الماضي للمستقبل.",
        "- خطوات الحل الوزاري:",
        "  1) يعطيك الوزاري بداية الجملة في الماضي: I thought..., He told me..., I decided...",
        "  2) تحول أول فعل مساعد أو فعل في الجملة الأصلية إلى صيغة الماضي فقط، ويبقى باقي الجملة كما هو دون تغيير!",
        "- جدول التحويلات الصارمة:",
        "  - will -> would",
        "  - is / am -> was",
        "  - are -> were",
        "  - can -> could",
        "  - مضارع بسيط (leaves / starts) -> ماضي بسيط (left / started)",
        "أمثلة وزارية نموذجية:",
        "- I'm going to learn Chinese. -> I decided I was going to learn Chinese.",
        "- He is going to be an artist. -> He thought he was going to be an artist.",
        "- The course will start in September. -> I found out the course would start in September.",
        "- The class starts at 6:00. -> I knew the class started at 6:00."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قاعدة المستقبل في الماضي من أسهل القواعد في الوزاري وتأتي سنوياً في السؤال الثاني فرع A!",
        "تذكر: نحول أول فعل فقط! ولا نغير الفعل المجرد الذي يأتي بعد to أو بعد would: was going to learn (الفعل learn يبقى مجرداً)."
      ],
      commonMistakes: [
        "تحويل الأفعال التي بعد to إلى الماضي (مثل: was going to learned وهذا خطأ فادح).",
        "نسيان تحويل are إلى were أو is إلى was."
      ],
      examples: [
        {
          en: "I'm going to register for the course. -> I decided I was going to register for the course.",
          ar: "قررت أنني كنت سأسجل في الدورة.",
          highlight: "was going to register",
          note: "وزاري 2017 دور أول"
        },
        {
          en: "He will become a pilot. -> He told me that he would become a pilot.",
          ar: "أخبرني بأنه سيصبح طياراً.",
          highlight: "would become",
          note: "وزاري 2020 دور أول"
        }
      ],
      exercises: [
        {
          id: "u7-l4-ex1",
          question: "I'm going to learn Chinese. -> I decided I _________ learn Chinese. (Future in the past)",
          options: ["was going to", "am going to", "will", "would"],
          correctAnswer: "was going to",
          explanation: "يتحول am going to إلى was going to في المستقبل في الماضي.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u7-l4-ex2",
          question: "The volunteer promised he (will / would) be back the next day.",
          options: ["would", "will"],
          correctAnswer: "would",
          explanation: "الجملة في الماضي (promised)، فتحول will إلى would.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور ثانٍ"
        }
      ]
    },
    {
      id: "u7-l5",
      unitId: 7,
      lessonNumber: 5,
      titleAr: "الدرس الخامس: صيغ واختيارات الأفعال والتعبيرات",
      titleEn: "Lesson 5: Verb Choices & Expressions",
      category: "vocabulary",
      summary: "تمارين الاختيارات بين الأفعال والمتلازمات اللفظية للغات والدورات الصيفية (تمرين D ص 158 كتاب النشاط).",
      grammarRuleFormula: "Key Collocations:\nenrol in a course | take an exam | pass an exam | fail an exam | attend a seminar",
      detailedContent: [
        "اختيارات الأفعال والتعبيرات (ص 153 من ملزمة الأستاذ مصطفى تركي):",
        "- If you want to improve your career, you should (enrol in) a course.",
        "- After you (take) the test, you will know your level.",
        "- She hopes to (pass) her exams with high grades so she can enter medical school.",
        "- You need to (attend) all classes to get the certificate."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي هذه التعبيرات كاختيارات بين قوسين في السؤال الثاني فرع B."
      ],
      commonMistakes: [
        "الخلط بين take an exam (يؤدي الامتحان) و pass an exam (ينجح في الامتحان)."
      ],
      examples: [
        {
          en: "I hope to (pass / take) all my exams so that I can go to university.",
          ar: "آمل أن أنجح في كل امتحاناتي (pass).",
          highlight: "pass all my exams",
          note: "تمرين D ص 158"
        }
      ],
      exercises: [
        {
          id: "u7-l5-ex1",
          question: "Students who want to study abroad must _________ an English language exam.",
          options: ["take", "make", "admit", "dismiss"],
          correctAnswer: "take",
          explanation: "الامتحان يأخذ الفعل take (take an exam).",
          type: "mcq",
          ministerialYear: "تمرين D ص 158"
        }
      ]
    },
    {
      id: "u7-l6",
      pedagogy: {
        "warmup": "عندما تنقل خطة أو توقعاً من منظور الماضي، قد تحتاج إلى تحويل will أو صيغة مستقبلية أخرى إلى صيغة future in the past.",
        "learningObjectives": [
          "أتعرف على تراكيب المستقبل في الماضي الواردة في الدرس.",
          "أحوّل الجملة مع الحفاظ على نقطة النظر الماضية.",
          "أراجع الفعل المساعد وشكل الفعل بعده.",
          "أميز إعادة الصياغة عن تغيير معنى الجملة."
        ],
        "arabicExplanation": "في إعادة الصياغة، ابدأ بتحديد زمن فعل الإبلاغ أو نقطة النظر الماضية، ثم استخدم صيغة المستقبل في الماضي المناسبة كما يعرضها الدرس، مثل would + base بدلاً من will + base في السياق المنقول. إذا كان المثال يستخدم was/were going to أو صيغة أخرى، حافظ على معنى الخطة أو التوقع الأصلي. لا تغيّر الزمن لمجرد وجود كلمة yesterday؛ اتبع العلاقة بين زمن الإبلاغ والحدث المتوقع.",
        "solvingClues": [
          "حدد الفعل الذي يحدد نقطة النظر الماضية.",
          "حدد صيغة المستقبل الأصلية في الجملة.",
          "حوّلها إلى صيغة future-in-the-past المناسبة في أمثلة الدرس.",
          "تحقق أن المعنى والفاعل والتكملة بقيت كما هي."
        ],
        "commonTraps": [
          "لا تستبدل كل will آلياً دون فحص السياق.",
          "لا تخلط would + base مع would have + V3.",
          "لا تغيّر معنى الخطة إلى حقيقة منجزة."
        ],
        "recapSummary": "حدد نقطة النظر الماضية ثم اختر صيغة future-in-the-past المطابقة للمعنى الأصلي.",
        "nextStepRecommendation": "أعد كتابة جمل الدرس واحدة تلو الأخرى، ثم قارن زمن التوقع بزمن الإبلاغ."
      },
      unitId: 7,
      lessonNumber: 6,
      titleAr: "الدرس السادس: إعادة كتابة الجمل بالمستقبل في الماضي",
      titleEn: "Lesson 6: Rewriting Sentences in Future in the Past",
      category: "grammar",
      summary: "تدريب مكثف على تمارين كتاب النشاط لإعادة كتابة الجمل بالمستقبل في الماضي (تمرين G ص 168 كتاب النشاط).",
      grammarRuleFormula: "Complete Sentences Rewriting:\nShe is going to her computer class. -> I found out she was going to her computer class.",
      detailedContent: [
        "تمارين إعادة الكتابة الوزارية (تمرين G ص 168 كتاب النشاط):",
        "1. He is going to be an artist. -> He thought he was going to be an artist.",
        "2. The library is closed on Mondays. -> I knew the library was closed on Mondays.",
        "3. They will arrive at 7:00. -> They promised they would arrive at 7:00.",
        "4. I can't come to the meeting. -> I told him I couldn't come to the meeting.",
        "5. The match starts at 8:00. -> The referee said the match started at 8:00."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تمرين G ص 168 يأتي نصاً في الأسئلة الوزارية."
      ],
      commonMistakes: [
        "تغيير الكلمات بعد to أو بعد would."
      ],
      examples: [
        {
          en: "They will arrive soon. -> They promised they would arrive soon.",
          ar: "وعدوا بأنهم سيصلون قريباً.",
          highlight: "would arrive",
          note: "تمرين G ص 168"
        }
      ],
      exercises: [
        {
          id: "u7-l6-ex1",
          question: "She is going to visit her aunt. -> She told me that she _________ visit her aunt.",
          options: ["was going to", "is going to", "will", "would be"],
          correctAnswer: "was going to",
          explanation: "تحويل is going to إلى was going to في المستقبل في الماضي.",
          type: "mcq",
          ministerialYear: "تمرين G ص 168"
        }
      ]
    },
    {
      id: "u7-l9",
      unitId: 7,
      lessonNumber: 9,
      titleAr: "الدرس التاسع: قطعة استخدام المكتبة (Using the Library)",
      titleEn: "Lesson 9: Using the Library (Reading Comprehension)",
      category: "reading",
      summary: "قطعة الكتاب المقررة حول الاستفادة من المكتبة المركزية: البحث عن وظائف جديدة، كتب المهن وتطوير السيرة الذاتية، مهارات لغة الجسد في المقابلات، ومصادر تعلم اللغات.",
      grammarRuleFormula: "Library Resources:\n- Books about careers: describe job duties, skills and qualifications\n- Job vacancy newspapers & magazines: find current openings\n- Language learning section: audio CDs, language tests and practice books\n- Computers: search the internet for companies and online courses",
      detailedContent: [
        "قطعة الكتاب المقررة: استخدام المكتبة (ص 135 - 136 من ملزمة السادس 2027، PDF ص 137 - 138):",
        "- ذهب الكاتب إلى المكتبة المركزية للبحث عن مهنة جديدة تناسب شغفه بالسفر والتواصل مع الناس.",
        "- مصادر البحث في المكتبة:",
        "1) كتب المهن (Books about careers): تشرح طبيعة الوظائف والمهارات والمؤهلات المطلوبة لكل مهنة.",
        "2) الصحف والمجلات اليومية: للاطلاع على إعلانات التوظيف الأسبوعية (job vacancies).",
        "3) كتب التحضير للمقابلات: تعلم مهارات كتابة السيرة الذاتية (CVs)، ولغة الجسد (body language)، والهدوء أثناء المقابلات الشخصية.",
        "4) قسم تعلم اللغات الأجنبية: يحتوي على كتب واختبارات لغة وأقراص مدمجة (CDs) لتعلم الإنجليزية واللغات الأخرى المهمة للوظائف الدولية.",
        "5) الحواسيب والإنترنت: للبحث عن الشركات وتاريخها، والتقديم على الوظائف عبر الإنترنت والدورات الإلكترونية.",
        "أسئلة وزارية نموذجية:",
        "- Why did the writer go to the Central Library of Baghdad? To look for information that might help him find a new job.",
        "- How do career books help the writer? They describe different jobs and say what qualifications or training you need.",
        "- How can the library help someone who wants to improve his language? It has books, audio materials, and language practice tests."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة استخدام المكتبة من القطع الهامة في السؤال الأول فرع B.",
        "سؤال وزاري متكرر: The writer went to the library because he (wanted to find a new job involving travel)."
      ],
      commonMistakes: [
        "القول بأن الكاتب ذهب للمكتبة لقراءة الروايات؛ والصحيح أنه ذهب للبحث عن مسار وظيفي جديد.",
        "نسيان أقسام المكتبة المختلفة (الصحف، كتب المهن، قسم اللغات، الحواسيب)."
      ],
      examples: [
        {
          en: "Why did the writer decide to look for a new job? Because he felt his old job was boring and didn't involve travel.",
          ar: "لماذا قرر الكاتب البحث عن عمل جديد؟ لأنه شعر بأن عمله القديم ممل ولا يتضمن سفراً.",
          highlight: "didn't involve travel",
          note: "وزاري 2017 و 2020"
        }
      ],
      exercises: [
        {
          id: "u7-l9-ex1",
          question: "How do books about careers in the library help job seekers?",
          options: [
            "They describe different jobs and explain what qualifications are needed.",
            "They lend people money to start businesses.",
            "They give free airplane tickets.",
            "They teach driving rules."
          ],
          correctAnswer: "They describe different jobs and explain what qualifications are needed.",
          explanation: "كتب المهن تشرح الوظائف والمهارات والمؤهلات المطلوبة لكل مهنة.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        },
        {
          id: "u7-l9-ex2",
          question: "The writer borrowed materials from the library to improve his _________ skills.",
          options: ["language", "cooking", "driving", "painting"],
          correctAnswer: "language",
          explanation: "استعار الكاتب مصادر لتطوير مهاراته اللغوية (language skills).",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور أول"
        }
      ],
      readingPassage: {
        status: "permission_required",
        sourceTitle: "ملزمة السادس 2027 — إعداد الأستاذ عمار غالب",
        sourcePages: "ص 135–136 من ملزمة السادس 2027 (PDF ص 137–138)",
        verificationNote: "عُثر على نص Using the Library في ص135–136. النشر الرقمي للنص الكامل يحتاج إلى تأكيد الإذن."
      }
    }
  ]
};
