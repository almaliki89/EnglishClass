import { Unit, LiteratureItem, EssayItem, MinisterialExamQuestion, UploadedMalzama } from '../types';

// ==========================================
// 1. وحدات منهج الثالث المتوسط الرسمية (Units 1 - 7)
// ==========================================
export const THIRD_INTERMEDIATE_UNITS: Unit[] = [
  {
    id: 101,
    number: 1,
    titleAr: "الوحدة الأولى: في المركز التجاري ووصف الأشخاص وسيارات العام",
    titleEn: "Unit 1: At the Mall & Describing People",
    description: "قواعد There is / There are، الإخبار عن الوقت (Telling the time)، الماضي والمضارع المستمر، إعطاء الأسباب (Giving reasons)، الوصف المؤدب للأشخاص، وقطعة سيارة العام (Panther 3.0D).",
    accentColor: "bg-cobalt text-surface",
    bgGradient: "bg-blue-mist border-ink",
    lessons: [
      {
        id: "3rd-u1-l1",
        unitId: 101,
        lessonNumber: 1,
        titleAr: "الدرس الأول: الوصف المكاني (There is / There are / It has)",
        titleEn: "Lesson 1: Describing Places (There is / There are)",
        category: "grammar",
        summary: "كيفية وصف الأماكن والمحلات بالصيغ المثبتة والمنفية والاستفهامية مع المفرد والجمع.",
        grammarRuleFormula: "Singular (مفرد):\n(+) There is a / an + singular noun\n(-) There isn't a / an + singular noun\n(?) Is there a / an + singular noun...?\n\nPlural (جمع):\n(+) There are some / lots of + plural noun\n(-) There aren't any + plural noun\n(?) Are there any + plural noun...?\n\nIt has (تحتوي على):\n(+) It has a / lots of...\n(-) It doesn't have a / any...\n(?) Does it have a / any...?",
        detailedContent: [
          "نستخدم (There is) مع الاسم المفرد المسبوق بأداة التنكير (a / an).",
          "في حالة النفي تصبح (There isn't a / an). وفي السؤال نقدّم الفعل المساعد: (Is there a...?).",
          "نستخدم (There are) مع أسماء الجمع، وتأتي معها كلمات مثل: (some, lots of, many, a few).",
          "ملاحظة وزارية حاسمة: في حالة النفي والسؤال مع الجمع، نستبدل (some) بكلمة (any).",
          "الصيغة مع (It has): في النفي نستخدم (It doesn't have) وليس (It hasn't). وفي السؤال نستخدم (Does it have...?)."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه جيداً لكلمة (any)، تأتي فقط مع النفي والاستفهام!",
          "تنبيه وزاري: إذا رأيت اسماً مفرداً يبدأ بحرف علة (e, a, i, o, u) نستخدم an مثل an information desk.",
          "السؤال الوزاري يتكرر غالباً كاختيارات بين (There is / There are) أو بين (some / any)."
        ],
        commonMistakes: [
          "اختيار some في جملة منفية (الصحيح any).",
          "قول It hasn't instead of It doesn't have.",
          "نسيان حرف s الجمع عند استخدام There are."
        ],
        examples: [
          {
            en: "There is an information desk in the mall.",
            ar: "يوجد مكتب معلومات في المركز التجاري.",
            highlight: "There is an information desk",
            note: "مفرد يبدأ بحرف علة"
          },
          {
            en: "There aren't any sweet shops here.",
            ar: "لا توجد أي محلات حلويات هنا.",
            highlight: "aren't any sweet shops",
            note: "جمع منفي باستخدام any"
          },
          {
            en: "It doesn't have a swimming pool.",
            ar: "لا يحتوي على مسبح.",
            highlight: "doesn't have a",
            note: "صيغة النفي لـ It has"
          }
        ],
        exercises: [
          {
            id: "3u1-l1-ex1",
            question: "There ______ any clothes shops in this mall. (Choose)",
            options: ["aren't", "isn't", "is", "are"],
            correctAnswer: "aren't",
            explanation: "وجود any مع اسم جمع (clothes shops) يفرض صيغة الجمع المنفي aren't.",
            type: "mcq",
            ministerialYear: "وزاري 2019 دور أول"
          },
          {
            id: "3u1-l1-ex2",
            question: "There is (a / an) information desk in the center.",
            options: ["an", "a"],
            correctAnswer: "an",
            explanation: "كلمة information تبدأ بحرف علة لذلك نختار an.",
            type: "mcq",
            ministerialYear: "وزاري 2021 تمهيدي"
          }
        ]
      },
      {
        id: "3rd-u1-l2",
        unitId: 101,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: الإخبار عن الوقت (Telling the Time)",
        titleEn: "Lesson 2: Telling the Time",
        category: "grammar",
        summary: "الطريقة الرقمية المباشرة (Digital Method) وطريقة الدقائق والساعات (Past & To).",
        grammarRuleFormula: "الطريقة المباشرة (الأسهل والأضمن وزارياً):\nIt's + الساعات + الدقائق\n\nإذا كانت الساعات أكثر من 12، نطرح 12:\n15:10 => 15 - 12 = 3 => It's three ten.\n20:45 => 20 - 12 = 8 => It's eight forty-five.\n\nطريقة past / to:\nIt's + الدقائق + (past / to) + الساعات",
        detailedContent: [
          "في الامتحان الوزاري يطلب منك (Tell the time):",
          "إذا كان الوقت تاماً (00)، نقول: It's [Hour] o'clock. مثال: 14:00 => It's two o'clock.",
          "إذا كان هناك دقائق، اقرأ الساعات أولاً ثم الدقائق بالكلمات باللغة الإنكليزية.",
          "تأكد من كتابة الأرقام الإنجليزية بدون أخطاء إملائية: fifteen, twenty, thirty, forty, fifty."
        ],
        teacherNotes: [
          "نصيحة الأستاذ عمار غالب: اعتمد الطريقة المباشرة (الساعات أولاً ثم الدقائق) لأنها واضحة ومعتمدة في التصحيح الوزاري وتبعدك عن أخطاء past و to.",
          "تذكر دائماً كتابة It's في بداية الجواب."
        ],
        commonMistakes: [
          "نسيان طرح 12 من النظام الـ 24 ساعة (مثلاً كتابة It's sixteen بدل It's four).",
          "الخطأ الإملائي في كلمة forty بكتابتها fourty."
        ],
        examples: [
          {
            en: "17:10 => It's five ten.",
            ar: "الساعة الخامسة وعشر دقائق.",
            highlight: "It's five ten",
            note: "17 - 12 = 5"
          },
          {
            en: "13:20 => It's one twenty.",
            ar: "الساعة الواحدة وعشرون دقيقة.",
            highlight: "It's one twenty",
            note: "13 - 12 = 1"
          }
        ],
        exercises: [
          {
            id: "3u1-l2-ex1",
            question: "16:15 (Tell the time)",
            options: ["It's four fifteen.", "It's sixteen fifteen.", "It's four twelve.", "It's five fifteen."],
            correctAnswer: "It's four fifteen.",
            explanation: "16 - 12 = 4، والدقائق 15 (fifteen)، فالجواب It's four fifteen.",
            type: "mcq",
            ministerialYear: "وزاري 2018 دور ثانٍ"
          }
        ]
      },
      {
        id: "3rd-u1-l3",
        unitId: 101,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: إعطاء الأسباب (Giving Reasons) والوصف المؤدب",
        titleEn: "Lesson 3: Giving Reasons & Polite Descriptions",
        category: "grammar",
        summary: "استخدام so you can / can't و to help you، وقواعد الوصف الأكثر تأدباً (more polite).",
        grammarRuleFormula: "1. إعطاء الأسباب:\nالجملة الأولى + so you can / can't + فعل مجرد\nأو: الجملة الأولى + to help you + فعل مجرد\n\n2. الوصف المؤدب:\n- إذا كانت الجملة الأولى مثبتة والثانية مثبتة: نضع (a bit) قبل الصفة السلبية.\n- إذا كانت الجملة الأولى مثبتة والثانية منفية (isn't): نضع (very + عكس الصفة).\n- إذا كان الفاعل لا يستطيع (can't): نستخدم (isn't very good at + v-ing/noun).",
        detailedContent: [
          "أمثلة إعطاء الأسباب الوزارية:",
          "- Cars have GPS so you can't get lost. (السيارات بها نظام ملاحة حتى لا تضيع).",
          "- Cars have airbags so you can be safe in a crash. (وسائد هوائية لتكون آمناً).",
          "- Cars have disc brakes to help you stop quickly. (مكابح لتساعدك على التوقف سريعاً).",
          "قواعد الوصف المؤدب (Make the sentence more polite):",
          "1. He is fat. => He is a bit fat.",
          "2. She is short. => She isn't very tall.",
          "3. He can't play football. => He isn't very good at football."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: في قاعدة so you can / can't انتبه إلى معنى الجملة:",
          "نستخدم can't حصراً مع: get lost (يضيع)، أما بقية الميزات الإيجابية فنستخدم can.",
          "في الوصف المؤدب، الوزاري يكرر جداً جملة (isn't very good at) عند وجود can't."
        ],
        commonMistakes: [
          "وضع can مع get lost (الصحيح can't لأنك لا تريد أن تضيع!).",
          "نسيان إضافة ing بعد good at."
        ],
        examples: [
          {
            en: "Cars have GPS so that you can't get lost.",
            ar: "السيارات مزودة بنظام تحديد المواقع حتى لا تضيع.",
            highlight: "so that you can't get lost",
            note: "وزاري متكرر"
          },
          {
            en: "He is lazy. => He is a bit lazy.",
            ar: "هو كسول => هو كسول قليلاً (وصف أكثر تأدباً).",
            highlight: "a bit lazy",
            note: "وصف مؤدب بإضافة a bit"
          }
        ],
        exercises: [
          {
            id: "3u1-l3-ex1",
            question: "Cars have air conditioning (so you can / to help you) keep cool.",
            options: ["so you can", "to help you"],
            correctAnswer: "to help you",
            explanation: "لأن بعد القوسين جاء الفعل مباشرة بدون فاعل (keep cool) أو تأتي to help you.",
            type: "mcq",
            ministerialYear: "وزاري 2022 دور أول"
          },
          {
            id: "3u1-l3-ex2",
            question: "She is bad at English. (Make it more polite): She is not ______.",
            options: ["very good at English", "bad at English", "a bit bad", "good"],
            correctAnswer: "very good at English",
            explanation: "عند وجود صفة سلبية مع نفي (is not)، نستخدم very + عكس الصفة (very good at English).",
            type: "mcq",
            ministerialYear: "وزاري 2020 دور أول"
          }
        ]
      },
      {
        id: "3rd-u1-l4",
        unitId: 101,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: قطعة الكتاب الوزارية - سيارة العام (Car of the Year: Panther 3.0D)",
        titleEn: "Lesson 4: Car of the Year: Panther 3.0D",
        category: "reading",
        summary: "الأسئلة والأجوبة الوزارية النموذجية لسيارة البانثر 3.0D ومواصفاتها القياسية ووسائل الأمان.",
        grammarRuleFormula: "Key Specs:\n- Seats: 8 people (ثمانية مقاعد)\n- Fuel economy: 12 kilometres to the litre (12 كم لكل لتر)\n- Warranty: 4 years warranty (ضمان 4 سنوات)\n- Safety: Airbags for driver and passengers (وسائد هوائية للسائق والركاب)\n- Price: It looks expensive, but it is quite cheap to run.",
        detailedContent: [
          "1. What is the name of the car of the year? => Panther 3.0D.",
          "2. How many seats are there in the Panther 3.0D? => It has eight (8) seats.",
          "3. What are the safety features in the Panther 3.0D? => There are airbags for the driver and passengers and other safety features.",
          "4. Is the Panther 3.0D expensive or cheap? => It looks expensive, but it is actually quite cheap to run.",
          "5. How many kilometers does it do per litre? => It does 12 kilometers to the litre.",
          "6. What is the warranty on the Panther? => It has a 4-year warranty."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: تأتي أسئلة البانثر في السؤال الأول فرع B من الامتحان الوزاري (قطعة الكتاب 10 درجات).",
          "احفظ جيداً: عدد المقاعد هو 8 (eight seats). إذا قال 6 فـ False!"
        ],
        commonMistakes: [
          "كتابة 6 مقاعد بدلاً من 8.",
          "الاعتقاد بأن السيارة خطرة (السيارة آمنة جداً لوجود وسائد هوائية)."
        ],
        examples: [
          {
            en: "The Panther 3.0D has seats for eight people.",
            ar: "سيارة البانثر 3.0D تحتوي على مقاعد لثمانية أشخاص.",
            highlight: "seats for eight people",
            note: "نقطة وزارية متكررة صح وخطأ"
          }
        ],
        exercises: [
          {
            id: "3u1-l4-ex1",
            question: "The Panther 3.0D has seats for ______ people. (Complete)",
            options: ["8 (eight)", "6 (six)", "4 (four)", "7 (seven)"],
            correctAnswer: "8 (eight)",
            explanation: "تحتوي سيارة البانثر 3.0D على 8 مقاعد.",
            type: "mcq",
            ministerialYear: "وزاري 2017 دور أول"
          },
          {
            id: "3u1-l4-ex2",
            question: "The Panther 3.0D is actually quite cheap to run. (True / False)",
            options: ["True", "False"],
            correctAnswer: "True",
            explanation: "صحيح، تبدو غالية ولكنها اقتصادية ورخيصة التشغيل.",
            type: "mcq",
            ministerialYear: "وزاري 2021 دور ثانٍ"
          }
        ]
      },
      {
        id: "3rd-u1-l5",
        unitId: 101,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: الوصف المؤدب للأشخاص والأسماء المركبة (Polite Descriptions)",
        titleEn: "Lesson 5: Polite Descriptions for People & Compound Nouns",
        category: "grammar",
        summary: "قواعد جعل الصفات السلبية أكثر تهذيباً وأدباً، والأسماء المركبة الشائعة في كتاب النشاط.",
        grammarRuleFormula: "القاعدة 1: وجود is في الجملتين -> نضع a bit قبل الصفة السلبية:\nHe is fat. -> He is a bit fat.\n\nالقاعدة 2: وجود isn't في الجملة الثانية -> نضع not very + عكس الصفة:\nHe is stupid. -> He isn't very clever.\n\nالقاعدة 3: وجود can't مع فعل -> نضع isn't very good at + V-ing أو can't + verb + very well:\nShe can't sing. -> She isn't very good at singing.\n\nالأسماء المركبة (Compound Nouns):\nair bag (وسادة هوائية) | video game (لعبة فيديو) | sun roof (فتحة سقف)\nlitter bin (سلة مهملات) | wind proof (مقاوم للرياح) | disc brakes (مكابح قرصية)",
        detailedContent: [
          "في الامتحان الوزاري يطلب منك: (Make this sentence more polite).",
          "1. إذا كانت الجملة الأولى مثبتة والثانية مثبتة: نضع (a bit) قبل الصفة: He is short. -> He is a bit short.",
          "2. إذا كانت الجملة الأولى مثبتة والثانية منفية بـ isn't: نضع (very) مع عكس الصفة: He is ugly. -> He isn't very good-looking.",
          "3. مع can't: إذا كان الفراغ بعد isn't very good at: نضع اسماً أو فعلاً منتهياً بـ ing: He can't play football. -> He isn't very good at football."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه للأسماء المركبة في سؤال التوصيل والإملاء: air : bag / disc : brakes / sun : roof / sweet : shop."
        ],
        commonMistakes: [
          "نسيان عكس الصفة عند وجود isn't very (مثال: He isn't very lazy خطأ، الصحيح He isn't very hardworking)."
        ],
        examples: [
          {
            en: "He is fat. (More polite) -> He is a bit fat.",
            ar: "هو سمين. (بأسلوب مؤدب) -> هو سمين قليلاً.",
            highlight: "a bit fat",
            note: "تخفيف الصفة بـ a bit"
          }
        ],
        exercises: [
          {
            id: "3u1-l5-ex1",
            question: "Hassan is noisy. Make it more polite: He is ______ noisy.",
            options: ["a bit", "not very", "too much", "very"],
            correctAnswer: "a bit",
            explanation: "بما أن الجملة الثانية بقيت مثبتة بنفس الصفة noisy، نضع a bit قبلها.",
            type: "mcq",
            ministerialYear: "وزاري 2018 دور أول"
          },
          {
            id: "3u1-l5-ex2",
            question: "Compound noun: 'sun ______' (roof / bin / bag / proof)",
            options: ["roof", "bin", "bag", "proof"],
            correctAnswer: "roof",
            explanation: "الاسم المركب هو sun roof (فتحة سقف السيارة).",
            type: "mcq",
            ministerialYear: "وزاري 2019 تمهيدي"
          }
        ]
      }
    ]
  },
  {
    id: 102,
    number: 2,
    titleAr: "الوحدة الثانية: التفضيل، الدعوات، وكوميديا لوسي التلفزيونية",
    titleEn: "Unit 2: Preferences, Invitations & Lucy's TV Comedy",
    description: "قواعد التعبير عن التفضيل والاقتراح (Preferences & Suggestions)، الدعوات (Invitations)، ووقت القصة: قصة لوسي فيشر وعائلتها (Lucy's TV Comedy).",
    accentColor: "bg-soft-mint text-ink",
    bgGradient: "bg-paper border-ink",
    lessons: [
      {
        id: "3rd-u2-l1",
        unitId: 102,
        lessonNumber: 1,
        titleAr: "الدرس الأول: التفضيل والاقتراح (Preferences & Suggestions)",
        titleEn: "Lesson 1: Preferences & Suggestions",
        category: "grammar",
        summary: "صيغ التعبير عن الرغبة والتفضيل والاقتراح والأفعال التي تلي كل صيغة.",
        grammarRuleFormula: "1. يأتي بعدها (to + فعل مجرد):\n- I'd like to + base\n- I'd love to + base\n\n2. يأتي بعدها (فعل مجرد بدون to):\n- I'd rather + base\n- Let's + base\n- Why not + base...?\n\n3. يأتي بعدها (v-ing):\n- How about + v-ing...?",
        detailedContent: [
          "التعبير عن التفضيل (Expressing preference):",
          "- I'd like to go to the park.",
          "- I'd rather stay at home.",
          "تقديم الاقتراحات (Making suggestions):",
          "- How about going to the cinema?",
          "- Let's watch a movie.",
          "- Why not play tennis?",
          "الموافقة على الاقتراح (Accepting suggestions):",
          "- Yes, let's. / Yes, that's a good idea. / Yes, I'd love to.",
          "الرفض (Refusing / Rejecting):",
          "- No, I'd rather not. / No, I'm busy."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه! كلمة (How about) هي الوحيدة التي يأتي بعدها فعل ينتهي بـ ing.",
          "صيغ I'd like / I'd love تحتاج إلى to + مجرد.",
          "صيغ Let's / I'd rather / Why not تحتاج إلى مجرد مباشرة بدون to."
        ],
        commonMistakes: [
          "وضع فعل مجرد بعد How about (الصحيح How about going).",
          "وضع to بعد Let's (الصحيح Let's go وليس Let's to go)."
        ],
        examples: [
          {
            en: "How about going to the match? - Yes, let's.",
            ar: "ما رأيك بالذهاب إلى المباراة؟ - نعم، هيا بنا.",
            highlight: "How about going",
            note: "How about + v-ing"
          },
          {
            en: "I'd rather play chess.",
            ar: "أفضّل أن ألعب الشطرنج.",
            highlight: "I'd rather play",
            note: "I'd rather + base verb"
          }
        ],
        exercises: [
          {
            id: "3u2-l1-ex1",
            question: "How about ______ to the beach? (go / to go / going)",
            options: ["going", "go", "to go"],
            correctAnswer: "going",
            explanation: "بعد How about نستخدم فعلاً مضافاً له ing.",
            type: "mcq",
            ministerialYear: "وزاري 2019 دور ثانٍ"
          },
          {
            id: "3u2-l1-ex2",
            question: "Let's (watch / watching / to watch) television.",
            options: ["watch", "watching", "to watch"],
            correctAnswer: "watch",
            explanation: "بعد Let's نستخدم فعلاً مجرداً خالي من أي إضافة.",
            type: "mcq",
            ministerialYear: "وزاري 2021 دور أول"
          }
        ]
      },
      {
        id: "3rd-u2-l2",
        unitId: 102,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: الدعوات (Invitations)",
        titleEn: "Lesson 2: Invitations & Arrangements",
        category: "grammar",
        summary: "كيفية توجيه الدعوة والترتيب للمواعيد باستخدام Would you like to...?",
        grammarRuleFormula: "قاعدة الدعوة:\nWould you like to + فعل مجرد + تكملة...?\n\nعند السؤال عن التفضيل:\nDo you prefer... or...?\nShall I...?",
        detailedContent: [
          "في الامتحان الوزاري يأتيك السؤال: (Invite your friend to come to your birthday party).",
          "طريقة الحل: نحذف Invite your friend ونبدلها بـ: Would you like to come to...",
          "نحول ضمائر المخاطب: your party تصبح my party، و you تصبح me.",
          "المثال الوزاري: Would you like to come to my graduation party on Thursday?"
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: لا تنسَ تحويل (your) إلى (my) في الامتحان الوزاري عند كتابة الدعوة.",
          "تأكد من وضع علامة الاستفهام في النهاية."
        ],
        commonMistakes: [
          "نسيان to بعد Would you like.",
          "إبقاء your party بدلاً من my party."
        ],
        examples: [
          {
            en: "Would you like to come to my brother's wedding?",
            ar: "هل ترغب في القدوم إلى حفل زفاف أخي؟",
            highlight: "Would you like to come to",
            note: "صيغة الدعوة النموذجية"
          }
        ],
        exercises: [
          {
            id: "3u2-l2-ex1",
            question: "Invite your friend to your birthday party. (Use: Would you like...)",
            options: [
              "Would you like to come to my birthday party?",
              "Would you like coming to my birthday party?",
              "Would you like to your birthday party?",
              "Do you like to go to birthday party?"
            ],
            correctAnswer: "Would you like to come to my birthday party?",
            explanation: "الصيغة الوزارية الصحيحة: Would you like to come to my birthday party?",
            type: "mcq",
            ministerialYear: "وزاري 2017 تمهيدي"
          }
        ]
      },
      {
        id: "3rd-u2-l3",
        unitId: 102,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: قصة لوسي التلفزيونية (Lucy's TV Comedy - Story Time)",
        titleEn: "Lesson 3: Lucy's TV Comedy (Samara's Family)",
        category: "reading",
        summary: "الأسئلة والأجوبة الوزارية المقررة لمسلسل لوسي التلفزيوني والشخصيات والمواقف المضحكة.",
        grammarRuleFormula: "Key Characters:\n- Lucy: A 16-year-old schoolgirl who plays the part of Samara.\n- Samara's brother: Clumsy (أحمق/أرعن) and always having silly accidents.\n- Accidents: Salt instead of sugar in mother's tea, spilling his drink at lunch, slipping in the pool, spilling fizzy drink and dying his hair green.",
        detailedContent: [
          "1. How old is Lucy? => She is 16 years old.",
          "2. Who does Lucy play in the comedy? => She plays the part of Samara.",
          "3. Who is Samara's brother? => He is clumsy and always having silly accidents.",
          "4. What did Samara's brother put in his mother's tea? => He put salt instead of sugar, and it tasted awful.",
          "5. Where did the family stay on holiday? => In a fancy hotel with a swimming pool.",
          "6. What happened to Samara's brother's hair? => He put cleaning fluid on his hair instead of hair gel, and his hair turned green!"
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: قصة لوسي تأتي في السؤال الرابع (Story Time) المخصص للقصص الوزارية (10 درجات).",
          "احفظ معنى كلمة clumsy = أحمق أو كثير الحوادث السخيفة.",
          "انتبه: لوسي هي الممثلة الحقيقية، وسمارة (Samara) هي الشخصية بالمسلسل."
        ],
        commonMistakes: [
          "الخلط بين اسم الممثلة (Lucy) واسم الشخصية في المسلسل (Samara).",
          "كتابة sugar instead of salt (الصحيح وضع الملح بدلاً من السكر)."
        ],
        examples: [
          {
            en: "Samara's brother is very clumsy and is always having silly accidents.",
            ar: "شقيق سمارة أخرق ودائماً ما يتعرض لحوادث سخيفة.",
            highlight: "clumsy and is always having silly accidents",
            note: "وزاري مكرر"
          }
        ],
        exercises: [
          {
            id: "3u2-l3-ex1",
            question: "Lucy plays the part of ______ in the TV comedy. (Complete)",
            options: ["Samara", "Salma", "Lana", "Lina"],
            correctAnswer: "Samara",
            explanation: "لوسي تلعب دور سمارة (Samara).",
            type: "mcq",
            ministerialYear: "وزاري 2018 دور أول"
          },
          {
            id: "3u2-l3-ex2",
            question: "Samara's brother put (sugar / salt) in his mother's tea.",
            options: ["salt", "sugar"],
            correctAnswer: "salt",
            explanation: "وضع الملح (salt) في الشاي بدلاً من السكر.",
            type: "mcq",
            ministerialYear: "وزاري 2022 دور أول"
          }
        ]
      },
      {
        id: "3rd-u2-l4",
        unitId: 102,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: صيغ الدعوة وكتابة إيميل الدعوة الوزاري (Invitations)",
        titleEn: "Lesson 4: Making Invitations & Writing an Invitation Email",
        category: "grammar",
        summary: "صيغ الدعوة الرسمية وغير الرسمية (Would you like to come...?)، وكتابة إيميل الدعوة لحفل تخرج أو زفاف.",
        grammarRuleFormula: "1. صيغة الدعوة الشائعة وزارياً:\nWould you like to come to + [Event / Place]?\n(e.g., Would you like to come to my brother's graduation party?)\n\n2. السؤال عن الوقت المناسب والتفضيل:\nAre you free on + [Day]? (e.g., Are you free on Friday?)\n\n3. القبول والرفض (Accepting & Refusing):\n- Accept: I'd love to / That sounds great!\n- Refuse: I'm sorry, I can't / I have an appointment",
        detailedContent: [
          "في الامتحان الوزاري يطلب منك: (Invite your friend to come to your school graduation party).",
          "نبدأ بعبارة: Would you like to come to...",
          "نحول ضمائر المخاطب والغائب: your -> my / you -> me.",
          "كتابة إيميل الدعوة (إنشاء الوحدة الثانية الوزاري 15 درجة):",
          "يشمل تحديد المناسبة (حفل تخرج أو عيد ميلاد)، التاريخ واليوم، الوقت (من الساعة 4 إلى 8)، والمكان، والتأكيد على الحضور المجاني."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه لتحويل your إلى my عند صياغة الدعوة: Invite your friend to your party -> Would you like to come to my party?"
        ],
        commonMistakes: [
          "نسيان to بعد Would you like (الصحيح Would you like to come)."
        ],
        examples: [
          {
            en: "Would you like to come to the school graduation party with me on Thursday?",
            ar: "هل ترغب في المجيء إلى حفل التخرج المدرسي معي يوم الخميس؟",
            highlight: "Would you like to come to",
            note: "صيغة دعوة وزارية متكررة"
          }
        ],
        exercises: [
          {
            id: "3u2-l4-ex1",
            question: "Invite Ahmed to your birthday party. Say: Would you like ______ to my birthday party?",
            options: ["to come", "coming", "come", "came"],
            correctAnswer: "to come",
            explanation: "بعد Would you like نستخدم دائماً to + المصدر المجرد (to come).",
            type: "mcq",
            ministerialYear: "وزاري 2019 دور ثانٍ"
          }
        ]
      }
    ]
  },
  {
    id: 103,
    number: 3,
    titleAr: "الوحدة الثالثة: المقارنة والتفضيل، عالم الصقور، وقصة الغزالة الحامل",
    titleEn: "Unit 3: Comparatives, Wildlife & The Deer",
    description: "قواعد المقارنة والتفضيل (-er / more / as...as)، جمل الموافقة والرفض (So do I / Neither do I)، الحالات الشرطية (First Conditional)، قطعة أسرع الكائنات (الصقور)، وقصة الغزالة الحامل في الغابة.",
    accentColor: "bg-yellow text-ink",
    bgGradient: "bg-paper border-ink",
    lessons: [
      {
        id: "3rd-u3-l1",
        unitId: 103,
        lessonNumber: 1,
        titleAr: "الدرس الأول: درجات المقارنة والتفضيل (Comparatives & Superlatives)",
        titleEn: "Lesson 1: Comparatives & Superlatives",
        category: "grammar",
        summary: "قواعد إضافة er و est والصفات ذات المقاطع المتعددة (more/most) وصيغة as...as.",
        grammarRuleFormula: "1. صفات المقطع الواحد:\n- fast => faster => fastest\n- big => bigger => biggest (مضاعفة الحرف الصحيح)\n- happy => happier => happiest (قلب y إلى i)\n\n2. صفات المقطعين أو أكثر:\n- beautiful => more beautiful => most beautiful\n- expensive => more expensive => most expensive\n\n3. صيغة النفي والمقارنة العكسية:\nNoun 2 + isn't/aren't + as + صفة مجردة + as + Noun 1\n\n4. شواذ المقارنة الوزارية:\n- good => better => best\n- bad => worse => worst\n- far => farther => farthest",
        detailedContent: [
          "في المقارنة بين شيئين نستخدم (than) بعد صفة المقارنة: A bear is bigger than a wolf.",
          "صيغة التحويل الوزارية الشهيرة: (Re-write using as...as):",
          "A bear is bigger than a wolf. => A wolf is not as big as a bear.",
          "نفي المقارنة يحول الجملة إلى صفة مجردة بين as ... as مع نفي الفعل المساعد."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: الشواذ تأتي في سؤال الإملاء (سؤال 3 فرع C) بصيغة: fast: faster, good: better.",
          "تذكر قاعدة as ... as: تأتي بينهما الصفة مجردة تماماً بدون er وبدون more!"
        ],
        commonMistakes: [
          "وضع صفة مقارنة بين as ... as مثل: as bigger as (الصحيح as big as).",
          "كتابة gooder بدلاً من better."
        ],
        examples: [
          {
            en: "An elephant is bigger than a giraffe.",
            ar: "الفيل أضخم من الزرافة.",
            highlight: "bigger than",
            note: "مقارنة بإضافة er مع مضاعفة g"
          },
          {
            en: "A monkey is not as dangerous as a lion.",
            ar: "القرد ليس خطيراً كالأسد.",
            highlight: "not as dangerous as",
            note: "صفة مجردة بين as...as"
          }
        ],
        exercises: [
          {
            id: "3u3-l1-ex1",
            question: "Gold is (more expensive / expensiver) than silver.",
            options: ["more expensive", "expensiver"],
            correctAnswer: "more expensive",
            explanation: "الصفة expensive تتكون من عدة مقاطع لذلك تأخذ more.",
            type: "mcq",
            ministerialYear: "وزاري 2018 دور ثانٍ"
          },
          {
            id: "3u3-l1-ex2",
            question: "Spelling: small : smaller ; good : ______",
            options: ["better", "gooder", "best", "more good"],
            correctAnswer: "better",
            explanation: "صفة شاذة تتحول إلى better في المقارنة.",
            type: "mcq",
            ministerialYear: "وزاري 2022 تمهيدي"
          }
        ]
      },
      {
        id: "3rd-u3-l2",
        unitId: 103,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: الموافقة والرفض (So do I / Neither do I)",
        titleEn: "Lesson 2: Agreeing & Disagreeing (So do I / Neither do I)",
        category: "grammar",
        summary: "قواعد الموافقة على الجمل المثبتة والمنفية بصيغة So do I و Neither do I.",
        grammarRuleFormula: "1. الموافقة على جملة مثبتة:\n- إذا كانت تحتوي على am: نستخدم (So am I).\n- إذا كانت تحتوي على فعل مضارع عام: نستخدم (So do I).\n\n2. الموافقة على جملة منفية:\n- إذا كانت تحتوي على am not: نستخدم (Neither am I).\n- إذا كانت تحتوي على don't: نستخدم (Neither do I).\n\n3. الرفض (عدم الموافقة):\n- I like spiders. => I don't. / I don't like them.\n- I don't mind flies. => I mind.",
        detailedContent: [
          "الجملة المثبتة تأخذ دائماً (So):",
          "I love chocolate. => So do I.",
          "I am happy. => So am I.",
          "الجملة المنفية تأخذ دائماً (Neither):",
          "I don't like horror stories. => Neither do I.",
          "I am not afraid of dogs. => Neither am I."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: قاعدة ذهبية: إذا رأيت not أو don't في الجملة، فاختر فوراً (Neither)!",
          "إذا كانت الجملة مثبتة بدون نفي، فاختر (So)."
        ],
        commonMistakes: [
          "اختيار So مع جملة منفية.",
          "استخدام Neither do I مع جملة فعلها المساعد am (الصحيح Neither am I)."
        ],
        examples: [
          {
            en: "I don't like spiders. => Neither do I.",
            ar: "أنا لا أحب العناكب => ولا أنا.",
            highlight: "Neither do I",
            note: "موافقة على نفي"
          },
          {
            en: "I love listening to music. => So do I.",
            ar: "أحب الاستماع للموسيقى => وأنا كذلك.",
            highlight: "So do I",
            note: "موافقة على إثبات"
          }
        ],
        exercises: [
          {
            id: "3u3-l2-ex1",
            question: "I don't mind spiders. (Agree): ______",
            options: ["Neither do I", "So do I", "So am I", "Neither am I"],
            correctAnswer: "Neither do I",
            explanation: "الجملة منفية بـ don't فتكون الإجابة Neither do I.",
            type: "mcq",
            ministerialYear: "وزاري 2019 دور أول"
          }
        ]
      },
      {
        id: "3rd-u3-l3",
        unitId: 103,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: قصة الغزالة الحامل (Story Time: The Pregnant Deer)",
        titleEn: "Lesson 3: The Pregnant Deer - Nature's Lesson",
        category: "reading",
        summary: "قصة الغزالة المحاطة بالمخاطر (الصياد، الأسد، حريق الغابة) وكيف واجهت الأقدار بالهدوء والتركيز.",
        grammarRuleFormula: "Key Dangers facing the deer:\n1. On her left: A hunter with his bow.\n2. On her right: A hungry lion.\n3. In front of her: A raging forest fire.\n4. Behind her: A fast-flowing river.\n\nMoral Lesson:\nDo what you should do and leave the rest to God (Focus on what you can control).",
        detailedContent: [
          "1. What dangers was the pregnant deer surrounded by?",
          "Answer: A hunter, a hungry lion, a forest fire, and a fast-flowing river.",
          "2. Which danger was on her right? => A hungry lion.",
          "3. Which danger was on her left? => A hunter aiming his arrow.",
          "4. How did nature solve the dangers?",
          "Answer: Lightning struck and blinded the hunter; his arrow missed the deer and struck the hungry lion, and heavy rain put out the forest fire.",
          "5. Did the deer give birth to a healthy fawn? => Yes, she gave birth to a healthy fawn safely."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: قصة الغزالة الحامل من أكثر القصص التي تتكرر أسئلتها في السؤال الرابع (Story Time).",
          "احفظ المخاطر الأربعة بدقة: hunter, lion, fire, river."
        ],
        commonMistakes: [
          "الخلط بين جهة الأسد (يمين) وجهة الصياد (يسار).",
          "نسيان دور البرق (lightning) في إعماء الصياد."
        ],
        examples: [
          {
            en: "The deer focused on giving birth to her new life.",
            ar: "ركزت الغزالة على ولادة طفلها الجديد بهدوء.",
            highlight: "focused on giving birth",
            note: "الحكمة الأخلاقية من القصة"
          }
        ],
        exercises: [
          {
            id: "3u3-l3-ex1",
            question: "To the deer's left, a ______ was preparing to shoot his arrow.",
            options: ["hunter", "hungry lion", "tiger", "wolf"],
            correctAnswer: "hunter",
            explanation: "على يسار الغزالة كان هناك صياد (hunter).",
            type: "mcq",
            ministerialYear: "وزاري 2021 دور أول"
          },
          {
            id: "3u3-l3-ex2",
            question: "The deer prioritized giving birth to a new fawn. (True / False)",
            options: ["True", "False"],
            correctAnswer: "True",
            explanation: "صحيح، ركزت الغزالة على إنجاب صغيرها وتجاهلت المخاطر الخارجة عن سيطرتها.",
            type: "mcq",
            ministerialYear: "وزاري 2022 دور ثانٍ"
          }
        ]
      },
      {
        id: "3rd-u3-l4",
        unitId: 103,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: الموافقة وعدم الموافقة بالرأي (Agreeing & Disagreeing)",
        titleEn: "Lesson 4: Agreeing & Disagreeing (So do I / Neither do I)",
        category: "grammar",
        summary: "كيفية إظهار الموافقة على جملة مثبتة باستخدام (So do I / So am I) والموافقة على جملة منفية باستخدام (Neither do I / Neither am I).",
        grammarRuleFormula: "1. الموافقة على جملة مثبتة (Affirmative Agreement):\n- So + verb + I\n- فعل مجرد -> So do I (e.g., I like spiders. -> So do I)\n- فعل كينونة -> So am I (e.g., I am afraid of dogs. -> So am I)\n\n2. الموافقة على جملة منفية (Negative Agreement):\n- Neither + verb + I\n- جملة فيها don't -> Neither do I (e.g., I don't like flies. -> Neither do I)\n- جملة فيها am not -> Neither am I (e.g., I'm not afraid of snakes. -> Neither am I)",
        detailedContent: [
          "سؤال تدريبي مهم متكرر وزارياً: يطلب منك (Agree with this statement) أو (Express your preference).",
          "القاعدة الذهبية:",
          "1. إذا كانت الجملة الأصلية مثبتة: اختر (So...)",
          "2. إذا كانت الجملة الأصلية منفية (تحتوي على not أو don't): اختر (Neither...)",
          "3. إذا كان الفعل am نستخدم am I. إذا كان أي فعل عادي نستخدم do I."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه! الجملة المنفية لا تأخذ So إطلاقاً! بمجرد أن ترى don't أو not اختر Neither فوراً."
        ],
        commonMistakes: [
          "استخدام So مع جملة منفية مثل: I don't like cats. -> So do I (خطأ فادح؛ الصحيح Neither do I)."
        ],
        examples: [
          {
            en: "I love reading English poetry. -> So do I.",
            ar: "أنا أحب قراءة الشعر الإنكليزي. -> وأنا كذلك (موافقة على مثبت).",
            highlight: "So do I",
            note: "موافقة على جملة مثبتة"
          },
          {
            en: "I don't mind spiders. -> Neither do I.",
            ar: "لا أمانع وجود العناكب. -> ولا أنا كذلك (موافقة على منفي).",
            highlight: "Neither do I",
            note: "موافقة على جملة منفية"
          }
        ],
        exercises: [
          {
            id: "3u3-l4-ex1",
            question: "I don't like horror stories. (Agree): ______ (So do I / Neither do I / I don't / Neither am I)",
            options: ["Neither do I", "So do I", "Neither am I", "So am I"],
            correctAnswer: "Neither do I",
            explanation: "الجملة منفية بـ don't، لذا نستخدم صيغة النفي Neither do I.",
            type: "mcq",
            ministerialYear: "وزاري 2019 دور أول"
          }
        ]
      },
      {
        id: "3rd-u3-l5",
        unitId: 103,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: أسرع الكائنات الحية وعرب الأهوار (The Falcon & Marsh Arabs)",
        titleEn: "Lesson 5: Reading - The Fastest Living Thing & Life on the Marshes",
        category: "reading",
        summary: "القطعة الوزارية الاستيعابية لصقور الصيد (Falcons) وسرعتها، وأسلوب حياة عرب الأهوار في جنوب العراق.",
        detailedContent: [
          "أسرع الكائنات الحية: الصقور (Falcons):",
          "1. الصقور هي أسرع المخلوقات في الطبيعة (fastest things in the natural world)، حيث تهبط بسرعة تصل إلى 240 كم/ساعة (240 kph).",
          "2. البدو (The Bedouin) اصطادوا بالصقور منذ آلاف السنين على ظهور الجمال والخيول.",
          "3. طائر الحبارى (the Houbara): الطائر المفضل للصيد عند البدو بأرجله الطويلة.",
          "عرب الأهوار في جنوب العراق (Marsh Arabs):",
          "1. يعيشون في هور الحويزة وهور الحمار في محافظات ميسان وذي قار والبصرة.",
          "2. يربون الجاموس المائي (water buffalo) وبعض الأغنام والأبقار.",
          "3. محاصيلهم الرئيسية: الأرز (rice)، القمح (wheat)، والشعير (barley).",
          "4. بيوتهم مقوسة ومبنية من القصب (arched reed houses)، ويتنقلون بقوارب المشحوف والطرادة (Mashhoof & Tarrada)."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: تأتي أسئلة الصقور والأهوار كل سنة وزارياً: How fast can falcons dive? 240 kph. What do Marsh Arabs live in? Arched reed houses."
        ],
        commonMistakes: [
          "الخلط بين سرعة الصقر (240 kph) وأرقام أخرى."
        ],
        examples: [
          {
            en: "Marsh Arabs live in arched houses built from reeds.",
            ar: "يعيش عرب الأهوار في بيوت مقوسة مبنية من القصب.",
            highlight: "arched houses built from reeds",
            note: "سؤال وزاري متكرر"
          }
        ],
        exercises: [
          {
            id: "3u3-l5-ex1",
            question: "How fast can some falcons dive? Up to ______ km/h.",
            options: ["240", "150", "100", "300"],
            correctAnswer: "240",
            explanation: "تصل سرعة انقضاض الصقر إلى 240 كيلومتراً في الساعة.",
            type: "mcq",
            ministerialYear: "وزاري 2018 دور أول"
          },
          {
            id: "3u3-l5-ex2",
            question: "Marsh Arabs use boats called ______ for transport.",
            options: ["Mashhoof and Tarrada", "steamers", "cars", "trains"],
            correctAnswer: "Mashhoof and Tarrada",
            explanation: "يستخدم عرب الأهوار قوارب المشحوف والطرادة للتنقل في القنوات المائية.",
            type: "mcq",
            ministerialYear: "وزاري 2021 تمهيدي"
          }
        ]
      }
    ]
  },
  {
    id: 104,
    number: 4,
    titleAr: "الوحدة الرابعة: قصص إبراهيم والنمور الفارسية",
    titleEn: "Unit 4: Ibrahim's Life Story & Too Few Leopards",
    description: "محتوى الوحدة الرابعة كما ورد في الملزمة: مفردات الأضداد، ترتيب الأسئلة، صيغ to go / go / going، الماضي البسيط، الضمائر وصفات الملكية، الشرطية الأولى، إعادة الصياغة والمبني للمجهول، وقصتا إبراهيم والنمور الفارسية.",
    accentColor: "bg-cobalt text-surface",
    bgGradient: "bg-blue-mist border-ink",
    sourcePages: "82-88",
    academicYear: "2025",
    lessons: [
      {
        id: "3rd-u4-l1",
        unitId: 104,
        lessonNumber: 1,
        titleAr: "مراجعة المفردات والتراكيب",
        titleEn: "Vocabulary, Word Order & Verb Forms",
        category: "vocabulary",
        summary: "تمارين الملزمة على الأضداد، ترتيب الأسئلة، to go / go / going، والماضي البسيط والضمائر.",
        sourcePages: "82-83",
        detailedContent: [
          "Opposites: fast/slow, awful/fantastic, expensive/cheap, ugly/beautiful, dangerous/safe, noisy/quiet, sad/happy, young/old, bright/dark, lazy/hard-working.",
          "Question order: What colour is his hair? / Where does he live? / What does he wear? / Can he play football well? / Is he good at maths and science?",
          "Choose the correct form: I'd love to go; I'd rather go; How about going; Let's go.",
          "Past simple forms in the source exercise: want/wanted, is/was, say/said, arrive/arrived, laugh/laughed, land/landed, send/sent, lose/lost, fly/flew, set/set, get/got, put/put.",
          "Complete sentences with the correct pronoun or possessive adjective, then choose the correct word in first conditional sentences."
        ],
        teacherNotes: ["المحتوى أعلاه من تمارين كتاب النشاط التي أوردتها الملزمة في الصفحات 82-84، وليس قاعدة إضافية من خارج المصدر."],
        commonMistakes: [],
        examples: [
          { en: "I'd love to go to summer school this year.", ar: "أود الذهاب إلى المدرسة الصيفية هذا العام.", highlight: "to go" },
          { en: "I'd rather go to the library.", ar: "أفضل الذهاب إلى المكتبة.", highlight: "go" },
          { en: "How about going fishing?", ar: "ما رأيك بالذهاب للصيد؟", highlight: "going" }
        ],
        exercises: [
          { id: "3u4-l1-ex1", question: "I'd love (go / to go / going) to summer school this year.", options: ["go", "to go", "going"], correctAnswer: "to go", explanation: "الإجابة وفق تمرين الملزمة.", type: "mcq", sourcePages: "83" },
          { id: "3u4-l1-ex2", question: "I'd rather (go / to go / going) to the library.", options: ["go", "to go", "going"], correctAnswer: "go", explanation: "الإجابة وفق تمرين الملزمة.", type: "mcq", sourcePages: "83" },
          { id: "3u4-l1-ex3", question: "How about (go / to go / going) fishing?", options: ["go", "to go", "going"], correctAnswer: "going", explanation: "الإجابة وفق تمرين الملزمة.", type: "mcq", sourcePages: "83" },
          { id: "3u4-l1-ex4", question: "OK. Let's (go / to go / going) fishing.", options: ["go", "to go", "going"], correctAnswer: "go", explanation: "الإجابة وفق تمرين الملزمة.", type: "mcq", sourcePages: "83" },
          { id: "3u4-l1-ex5", question: "Complete: If you (eat / will eat) too many sweets, you will feel ill.", options: ["eat", "will eat"], correctAnswer: "eat", explanation: "الإجابة وفق تمرين الشرطية الأولى في الملزمة.", type: "mcq", sourcePages: "84" }
        ]
      },
      {
        id: "3rd-u4-l2",
        unitId: 104,
        lessonNumber: 2,
        titleAr: "إعادة الصياغة والشرطية والمبني للمجهول",
        titleEn: "First Conditional & Sentence Transformation",
        category: "grammar",
        summary: "تمارين الشرطية الأولى وإعادة صياغة الجمل بالمقارنة والمبني للمجهول وصيغة السؤال المبني للمجهول.",
        sourcePages: "84",
        grammarRuleFormula: "First conditional exercises: If + present simple, will + base verb.\nThe source also asks students to rewrite equivalent sentences, comparative sentences, passive voice, and passive questions.",
        detailedContent: [
          "The workbook exercise asks students to select the correct first-conditional form.",
          "Rewrite equivalent statements: There would be more insects if there were no spiders. / There are more birds than before. / A rat is bigger than a mouse.",
          "Passive transformations in the source: Small animals and birds are eaten by falcons. / Where can wild flamingos be found?"
        ],
        teacherNotes: ["حافظ على صياغة أسئلة الملزمة؛ لا تُحوّل هذه التمارين إلى قواعد أخرى غير واردة في الصفحات المشار إليها."],
        commonMistakes: [],
        examples: [
          { en: "Falcons eat small animals and birds. → Small animals and birds are eaten by falcons.", ar: "تأكل الصقور الحيوانات الصغيرة والطيور ← تُؤكل الحيوانات الصغيرة والطيور بواسطة الصقور.", highlight: "are eaten" }
        ],
        exercises: [
          { id: "3u4-l2-ex1", question: "You (won't do well / don't do well) on your test if you don't study.", options: ["won't do well", "don't do well"], correctAnswer: "won't do well", explanation: "الإجابة وفق تمرين الشرطية الأولى في الملزمة.", type: "mcq", sourcePages: "84" },
          { id: "3u4-l2-ex2", question: "If I bake a cake, (will you / do you) have some?", options: ["will you", "do you"], correctAnswer: "will you", explanation: "الإجابة وفق تمرين الشرطية الأولى في الملزمة.", type: "mcq", sourcePages: "84" },
          { id: "3u4-l2-ex3", question: "Your sister will miss the bus if she (won't / doesn't) get up soon.", options: ["won't", "doesn't"], correctAnswer: "doesn't", explanation: "الإجابة وفق تمرين الشرطية الأولى في الملزمة.", type: "mcq", sourcePages: "84" },
          { id: "3u4-l2-ex4", question: "Rewrite in the passive: Falcons eat small animals and birds.", correctAnswer: "Small animals and birds are eaten by falcons.", explanation: "الإجابة كما وردت في تمرين إعادة الصياغة.", type: "fill", sourcePages: "84" },
          { id: "3u4-l2-ex5", question: "Rewrite in the passive: Where can you find wild flamingos?", correctAnswer: "Where can wild flamingos be found?", explanation: "الإجابة كما وردت في تمرين إعادة الصياغة.", type: "fill", sourcePages: "84" }
        ]
      },
      {
        id: "3rd-u4-l3",
        unitId: 104,
        lessonNumber: 3,
        titleAr: "قصة حياة إبراهيم",
        titleEn: "Ibrahim's Life Story",
        category: "reading",
        summary: "قصة إبراهيم الذي نشأ في قرية جنوب العراق، اهتم بالحيوانات، انتقل إلى بغداد عام 1990، تعلم الفرنسية من بيير، ودرس علم الحيوان في جامعة القاهرة.",
        sourcePages: "85-87",
        detailedContent: [
          "Ibrahim lived in a small village in the south of Iraq when he was a child. He loved the sea and he often went fishing with his father. From an early age, he was interested in animals. He was forever asking questions about animals, for example, 'Why do flies have wings?' and 'Why do fish live in the sea?'",
          "His father had goats and chickens and Ibrahim liked to look after them. He talked to them as if they were friends. His brothers used to laugh at him.",
          "When he went to school, Ibrahim learned to read quickly. He liked reading and he was always asking his father for books. He did not like television, so he spent a lot of time reading. He learnt that there were lots of different animals in other countries.",
          "In 1990, Ibrahim's father got a new job with Iraq Petroleum and the family moved to Baghdad. Life was very different in the city. At first, Ibrahim did not like it, but after a few months, he found that there was a lot to do for a 16-year-old boy.",
          "One day, at the mall, he met a French boy called Pierre. Ibrahim learned to speak some French with him. He also learned about France. The boys used to talk about what they wanted to do when they left school. One day, Ibrahim said 'I think I'll be a zoologist. Then I can study animals in different countries.'",
          "When Ibrahim left school, he studied zoology at Cairo University. Now he is a well-known zoologist. He works in France and he is writing a book about animals in Africa."
        ],
        teacherNotes: ["العمر المذكور في النص عند الانتقال إلى بغداد هو 16 عاماً، وليس 17 عاماً."],
        commonMistakes: ["الخلط بين وقت اهتمام إبراهيم بالحيوانات: منذ سن مبكرة، وليس بعد دخوله المدرسة."],
        examples: [
          { en: "He studied zoology at Cairo University.", ar: "درس علم الحيوان في جامعة القاهرة.", highlight: "Cairo University" }
        ],
        exercises: [
          { id: "3u4-l3-ex1", question: "Where was Ibrahim's village?", correctAnswer: "It was in the south of Iraq.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "86" },
          { id: "3u4-l3-ex2", question: "What did he look after for his father?", correctAnswer: "He looked after his father's goats and chickens.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "86" },
          { id: "3u4-l3-ex3", question: "Why did Ibrahim ask lots of questions?", correctAnswer: "Because he was interested in animals.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "86" },
          { id: "3u4-l3-ex4", question: "Why did Ibrahim ask his father for books?", correctAnswer: "Because he liked reading.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "86" },
          { id: "3u4-l3-ex5", question: "Why did Ibrahim move to Baghdad?", correctAnswer: "Because his father got a new job there with Iraq Petroleum.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "86" },
          { id: "3u4-l3-ex6", question: "What did he learn from Pierre?", correctAnswer: "He learnt to speak French and he learnt about France.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "86" },
          { id: "3u4-l3-ex7", question: "Why did Ibrahim want to be a zoologist?", correctAnswer: "So that he could study animals in different countries.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "86" },
          { id: "3u4-l3-ex8", question: "Where is Ibrahim writing his book?", correctAnswer: "He is writing his book in France.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "86" }
        ]
      },
      {
        id: "3rd-u4-l4",
        unitId: 104,
        lessonNumber: 4,
        titleAr: "النمور الفارسية: أعداد قليلة",
        titleEn: "Too Few Leopards",
        category: "reading",
        summary: "نص عن تناقص أعداد النمور الفارسية في العراق، أسباب التراجع، وجهود الأخوين نباز وبهاز فاروق علي لحمايتها.",
        sourcePages: "88",
        detailedContent: [
          "There used to be many Persian Leopards living in Iraq. However, in 2022, there were only about 25 leopards left in the country. Today, conservationists are increasing efforts to protect the remaining leopards. The loss of habitat, hunting and war has caused a big decrease in leopard numbers.",
          "The leopards are endangered, and it is against the law to hunt them. People do not hunt the leopards, but they do hunt wild goats for food. Unfortunately, this is removing the natural food of the leopards.",
          "Two Iraqi brothers, Nabaz and Bahaz Faruq Ali, want to save the leopards. They believe that the leopards are an important part of Iraqi culture and identity. They are determined to save the leopards, and they have successfully taken photos of the leopards in the Bamo mountain area. Bamo mountain is remote, so the brothers believe it is the perfect place for the leopards to breed and increase their numbers."
        ],
        teacherNotes: ["يذكر النص أن العدد المتبقي كان نحو 25 نمراً في عام 2022."],
        commonMistakes: [],
        examples: [
          { en: "The leopards are endangered.", ar: "النمور مهددة بالانقراض.", highlight: "endangered" }
        ],
        exercises: [
          { id: "3u4-l4-ex1", question: "Why was there a big decrease in numbers?", correctAnswer: "Because of the loss of habitat, hunting and war.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "88" },
          { id: "3u4-l4-ex2", question: "Why do the brothers want to save the leopards?", correctAnswer: "Because they are an important part of Iraqi culture and identity.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "88" },
          { id: "3u4-l4-ex3", question: "Why can't people hunt leopards?", correctAnswer: "Because they are endangered and it is against the law to hunt them.", explanation: "ورد السببان في إجابة الملزمة.", type: "fill", sourcePages: "88" },
          { id: "3u4-l4-ex4", question: "Why is Bamo Mountain the perfect place for leopards?", correctAnswer: "Because it is remote.", explanation: "إجابة الملزمة.", type: "fill", sourcePages: "88" }
        ]
      }
    ]
  },
  {
    id: 105,
    number: 5,
    titleAr: "الوحدة الخامسة: الإعلام وأخبار الصباح والماضي والمستقبل",
    titleEn: "Unit 5: The Media, Morning News & Past Tenses",
    description: "قواعد الماضي البسيط والماضي المستمر (Past Simple & Past Continuous)، أداة الربط When / While، المستقبل البسيط، وقطعة أخبار الصباح العراقية (وزير التربية والطفل المنقذ جون).",
    accentColor: "bg-lavender text-ink",
    bgGradient: "bg-blue-mist border-ink",
    lessons: [
      {
        id: "3rd-u5-l1",
        unitId: 105,
        lessonNumber: 1,
        titleAr: "الدرس الأول: الماضي البسيط والماضي المستمر وأدوات الربط",
        titleEn: "Lesson 1: Past Simple & Past Continuous",
        category: "grammar",
        summary: "قواعد زمن الماضي البسيط والمستمر مع أدوات الربط (When / While / As).",
        grammarRuleFormula: "1. Past Continuous (حدث طويل):\nSubject + was / were + v-ing\n\n2. Past Simple (حدث قاطع قصير):\nSubject + verb (ed / irregular)\n\n3. أدوات الربط:\n- While / As + Past Continuous (was/were + v-ing) , Past Simple\n- When + Past Simple , Past Continuous",
        detailedContent: [
          "إذا بدأت الجملة بـ (While) أو (As) يأتي بعدها مباشرة ماضٍ مستمر (was/were + v-ing).",
          "إذا بدأت الجملة بـ (When) يأتي بعدها مباشرة ماضٍ بسيط (ed أو شاذ).",
          "أمثلة وزارية:",
          "- While I was eating, the phone rang.",
          "- I was playing football when it started to rain."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: تذكر دائماً أن While تحب الـ ing (was/were + ing).",
          "أما When فيأتي بعدها الفعل البسيط."
        ],
        commonMistakes: [
          "وضع ing بعد When مباشرة.",
          "نسيان تصريف الأفعال الشاذة في الماضي."
        ],
        examples: [
          {
            en: "While she was reading, she heard a strange noise.",
            ar: "بينما كانت تقرأ، سمعت صوتاً غريباً.",
            highlight: "While she was reading",
            note: "ماضٍ مستمر بعد While"
          }
        ],
        exercises: [
          {
            id: "3u5-l1-ex1",
            question: "While Ali was having a shower, somebody (knock) on the front door. (Correct)",
            options: ["knocked", "was knocking", "knocks", "had knocked"],
            correctAnswer: "knocked",
            explanation: "الحدث القاطع يأتي بالماضي البسيط (knocked).",
            type: "mcq",
            ministerialYear: "وزاري 2018 دور أول"
          }
        ]
      },
      {
        id: "3rd-u5-l2",
        unitId: 105,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: قطعة أخبار الصباح العراقية (Iraqi Morning News)",
        titleEn: "Lesson 2: Iraqi Morning News",
        category: "reading",
        summary: "الأسئلة الوزارية لأخبار الصباح العراقية (زيارة وزير التربية، افتتاح المدينة الرياضية، والطفل البطل جون).",
        grammarRuleFormula: "Key News Items:\n1. Minister of Education: Arrived in London to discuss English educational programmes.\n2. Minister of Sports: Opened the new Sports City in Basra (cost 1 billion IQD, took 3 years).\n3. John (The Hero from the UK): A 26-year-old man who saved an 8-year-old girl (Israa) from a dangerous dog.",
        detailedContent: [
          "1. Where did the Iraqi Minister of Education arrive? => He arrived in London.",
          "2. What did the meeting focus on? => Developing English educational programmes between schools.",
          "3. What did the Sports Minister open in Basra? => A new Sports City.",
          "4. How long did the Sports City take to build? => It took 3 years.",
          "5. Who was the hero that saved the girl? => John, a 26-year-old UK citizen.",
          "6. What did John use to stop the dog? => He kicked a football at the dog."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: هذه القطعة أساسية في السؤال الأول فرع B في الامتحانات الوزارية.",
          "تذكر اسم الطفل/الرجل البطل: John، واسم الطفلة: Israa."
        ],
        commonMistakes: [
          "الخلط بين وزير التربية (ذهب إلى لندن) ووزير الرياضة (افتتح المدينة الرياضية في البصرة)."
        ],
        examples: [
          {
            en: "The Sports City in Basra cost 1 billion Iraqi dinars and took 3 years to build.",
            ar: "كلفت المدينة الرياضية في البصرة مليار دينار عراقي واستغرقت 3 سنوات لبنائها.",
            highlight: "1 billion IQD, took 3 years",
            note: "نقطة وزارية متكررة"
          }
        ],
        exercises: [
          {
            id: "3u5-l2-ex1",
            question: "The Sports Minister opened a new sports city in (Basra / Baghdad / Erbil).",
            options: ["Basra", "Baghdad", "Erbil"],
            correctAnswer: "Basra",
            explanation: "تم افتتاح المدينة الرياضية في البصرة (Basra).",
            type: "mcq",
            ministerialYear: "وزاري 2019 تمهيدي"
          }
        ]
      },
      {
        id: "3rd-u5-l3",
        unitId: 105,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: زمن المستقبل البسيط مع will و going to (Future Forms)",
        titleEn: "Lesson 3: Future with will vs going to & News Headlines",
        category: "grammar",
        summary: "الفرق بين استخدام will للتنبؤات والوعود وبين be going to للخطط والنوايا المستقبلية المؤكدة.",
        grammarRuleFormula: "1. Future with will (تنبؤات / قرارات فورية):\nSubject + will ('ll) / won't + base verb\n(e.g., The meeting will finish at 1 PM)\n\n2. Future with be going to (خطط مسبقة / نوايا):\nSubject + am / is / are + going to + base verb\n(e.g., The Minister is going to open the exhibition tomorrow)",
        detailedContent: [
          "في أخبار الصباح والتقارير الصحفية (News reports)، نستخدم will للتنبؤ بمواعيد وأحداث رسمية.",
          "نستخدم be going to عندما نكون قد خططنا للحدث مسبقاً ولديك نية حاسمة.",
          "بعد will أو going to يأتي دائماً فعل مجرد خالٍ من أي زيادة.",
          "الظروف الدالة: tomorrow, next year/month, in the future, soon."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه لسؤال الاختيارات الوزاري: The train ______ (will arrive / arrives) at 6 PM."
        ],
        commonMistakes: [
          "وضع verb-ing بعد will (الصحيح will + base)."
        ],
        examples: [
          {
            en: "The conference will begin tomorrow morning in Baghdad.",
            ar: "سيبدأ المؤتمر صباح الغد في بغداد.",
            highlight: "will begin",
            note: "مستقبل بسيط للتنبؤ والإعلانات"
          }
        ],
        exercises: [
          {
            id: "3u5-l3-ex1",
            question: "The President ______ (will open / opened / opening) the new hospital next Sunday.",
            options: ["will open", "opened", "opening", "opens"],
            correctAnswer: "will open",
            explanation: "وجود ظرف المستقبل next Sunday يوجب استخدام will + المصدر open.",
            type: "mcq",
            ministerialYear: "وزاري 2021 دور أول"
          }
        ]
      }
    ]
  },
  {
    id: 106,
    number: 6,
    titleAr: "الوحدة السادسة: المهن وضمائر الوصل وأبو البصريات ابن الهيثم",
    titleEn: "Unit 6: Careers, Relative Pronouns & Ibn Al-Haitham",
    description: "قواعد ضمائر الوصل (who, which, that, where)، السؤال عن الاتجاهات، ووقت القصة: العالم العربي الحسن بن الهيثم (Ibn Al-Haitham).",
    accentColor: "bg-coral text-ink",
    bgGradient: "bg-answer-review-bg border-ink",
    lessons: [
      {
        id: "3rd-u6-l1",
        unitId: 106,
        lessonNumber: 1,
        titleAr: "الدرس الأول: ضمائر الوصل (Relative Pronouns: who, which, where)",
        titleEn: "Lesson 1: Relative Pronouns",
        category: "grammar",
        summary: "استخدام who للعاقل، which/that لغير العاقل، و where للمكان.",
        grammarRuleFormula: "1. who: مع الاسم العاقل (شخص/إنسان)\n- That is the man who helped me.\n\n2. which / that: مع غير العاقل (حيوان/جماد)\n- The car which/that I bought is very fast.\n\n3. where: مع المكان\n- That is the school where I studied.\n\n4. whose: للتملك (اسم عاقل + whose + اسم مملوك)\n- The girl whose bag was stolen cried.",
        detailedContent: [
          "في الامتحان الوزاري يأتيك السؤال كاختيارات بين (who / which / where):",
          "- إذا كان قبل الفراغ اسم إنسان، اختر (who).",
          "- إذا كان قبل الفراغ اسم جماد أو حيوان، اختر (which) أو (that).",
          "- إذا كان قبل الفراغ اسم مكان وبعد الفراغ فاعل أو جملة فعلية تدل على حدث في المكان، اختر (where)."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه للمكان! إذا كان بعد الفراغ فعل مثل is، فنختار which لأنها تصف المكان كشيء، أما إذا كان بعد الفراغ فاعل وجملة مثل we bought things، فنختار where!"
        ],
        commonMistakes: [
          "استخدام who مع الحيوانات أو الجمادات.",
          "الخلط بين where و which مع أسماء الأماكن."
        ],
        examples: [
          {
            en: "That is the engineer who built the bridge.",
            ar: "ذلك هو المهندس الذي بنى الجسر.",
            highlight: "engineer who built",
            note: "اسم عاقل يأخذ who"
          },
          {
            en: "Cawkab is the village where my grandparents live.",
            ar: "كوكب هي القرية التي يعيش فيها أجدادي.",
            highlight: "village where my grandparents live",
            note: "اسم مكان يأخذ where"
          }
        ],
        exercises: [
          {
            id: "3u6-l1-ex1",
            question: "A veterinarian is someone ______ takes care of sick animals.",
            options: ["who", "which", "where", "whose"],
            correctAnswer: "who",
            explanation: "الطبيب البيطري (veterinarian) شخص عاقل لذلك نستخدم who.",
            type: "mcq",
            ministerialYear: "وزاري 2020 دور أول"
          },
          {
            id: "3u6-l1-ex2",
            question: "The mall is a place ______ people buy clothes and gifts.",
            options: ["where", "which", "who", "when"],
            correctAnswer: "where",
            explanation: "المول مكان تقام فيه أفعال الشراء، لذلك نستخدم where.",
            type: "mcq",
            ministerialYear: "وزاري 2021 دور ثانٍ"
          }
        ]
      },
      {
        id: "3rd-u6-l2",
        unitId: 106,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: قصة ابن الهيثم - أبو البصريات (Story Time: Ibn Al-Haitham)",
        titleEn: "Lesson 2: The Father of Optics (Al-Hasan Ibn Al-Haitham)",
        category: "reading",
        summary: "سيرة العالم العربي الحسن بن الهيثم وإنجازاته في البصريات وكتابه الخالد «كتاب المناظر».",
        grammarRuleFormula: "Key Biography Facts:\n- Born: In Basra, Iraq in 965 AD.\n- Known as: The Father of Optics (أبو البصريات) and Al-Basri.\n- Famous Book: Kitab Al-Manazir (Book of Optics - 7 volumes).\n- Death: Died in Cairo, Egypt in 1040 AD.\n- Contribution: Proved that light enters the eye, father of modern camera principles (camera obscura).",
        detailedContent: [
          "1. Where and when was Ibn Al-Haitham born? => He was born in Basra in 965 AD.",
          "2. What was Ibn Al-Haitham called in Medieval Europe? => Alhazen, and sometimes called The Physicist.",
          "3. What was his most famous book? => Kitab Al-Manazir (Book of Optics).",
          "4. What did he prove about vision? => He proved that light reflects off objects into the eyes (not emitted from eyes).",
          "5. Where did he die? => He died in Cairo in 1040 AD."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: تأتي أسئلة ابن الهيثم في السؤال الرابع (Story Time).",
          "احفظ جيداً: ولد في البصرة عام 965، ومات في القاهرة عام 1040."
        ],
        commonMistakes: [
          "كتابة بغداد بدلاً من البصرة لمسقط رأسه.",
          "الخطأ في اسم كتابه الشهير (Kitab Al-Manazir)."
        ],
        examples: [
          {
            en: "Ibn Al-Haitham was called the 'Father of Optics' for his revolutionary work.",
            ar: "لُقّب ابن الهيثم بـ «أبو البصريات» لأعماله الثورية.",
            highlight: "Father of Optics",
            note: "لقب وزاري شهير"
          }
        ],
        exercises: [
          {
            id: "3u6-l2-ex1",
            question: "Ibn Al-Haitham was born in ______ in 965.",
            options: ["Basra", "Baghdad", "Cairo", "Damascus"],
            correctAnswer: "Basra",
            explanation: "ولد ابن الهيثم في البصرة عام 965م.",
            type: "mcq",
            ministerialYear: "وزاري 2017 دور أول"
          },
          {
            id: "3u6-l2-ex2",
            question: "What is Ibn Al-Haitham's most celebrated work?",
            options: ["Kitab Al-Manazir (Book of Optics)", "The Canon of Medicine", "Al-Jabr", "The Republic"],
            correctAnswer: "Kitab Al-Manazir (Book of Optics)",
            explanation: "أشهر مؤلفاته كتاب المناظر (Kitab Al-Manazir).",
            type: "mcq",
            ministerialYear: "وزاري 2022 دور أول"
          }
        ]
      },
      {
        id: "3rd-u6-l3",
        unitId: 106,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: السؤال عن الاتجاهات وإعطاء الاتجاهات (Giving Directions)",
        titleEn: "Lesson 3: Asking for & Giving Directions",
        category: "grammar",
        summary: "كيفية السؤال عن مكان محدد، والعبارات المستخدمة لوصف الطريق (Go straight on, Turn left, It's on the right).",
        grammarRuleFormula: "1. السؤال عن الطريق (Asking for directions):\n- Can you tell me how to get to + [the place]?\n\n2. وصف الطريق (Giving directions):\n- Go to the traffic lights (اذهب إلى إشارات المرور)\n- Turn left / right at... (انعطف يساراً/يميناً عند...)\n- Go straight on along [Street name] (امشِ على طول الشارع)\n- It's on the right / left (إنه على اليمين/اليسار)\n- It's next to / opposite... (إنه بجوار/مقابل...)",
        detailedContent: [
          "في الامتحان الوزاري يطلب منك: (Show the way to the grand library).",
          "نستخدم العبارات الإرشادية حسب المعطيات:",
          "- إذا وجدت (traffic lights) نكتب: Go to the traffic lights.",
          "- إذا وجدت (straight) نكتب: Go straight on.",
          "- إذا وجدت (left/right) نكتب: Turn left / Turn right.",
          "- عند الوصول للمكان نكتب: The library is on the right/left."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه لحرف الجر on مع اليمين واليسار: on the right / on the left."
        ],
        commonMistakes: [
          "كتابة in the right (الصحيح on the right)."
        ],
        examples: [
          {
            en: "Can you tell me how to get to the museum, please?",
            ar: "هل يمكن أن تخبرني كيف أصل إلى المتحف من فضلك؟",
            highlight: "Can you tell me how to get to",
            note: "صيغة السؤال الوزارية"
          }
        ],
        exercises: [
          {
            id: "3u6-l3-ex1",
            question: "Ask someone the way to the post office: Can you tell me ______ get to the post office?",
            options: ["how to", "where to", "what to", "when to"],
            correctAnswer: "how to",
            explanation: "الصيغة الوزارية الرسمية للسؤال عن الطريق هي: Can you tell me how to get to...",
            type: "mcq",
            ministerialYear: "وزاري 2018 تمهيدي"
          }
        ]
      },
      {
        id: "3rd-u6-l4",
        unitId: 106,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: أدوات التنكير والتعريف (Articles: a / an / the)",
        titleEn: "Lesson 4: Definite & Indefinite Articles (a, an, the)",
        category: "grammar",
        summary: "استخدام a و an مع الأسماء المفردة النكرة، واستخدام the مع المعرفة والفريد، والحالات التي لا نستخدم فيها أي أداة.",
        grammarRuleFormula: "1. a / an (النكرة - للمفرد فقط عند ذكره لأول مرة):\n- a + يبدأ بصوت صحيح (a book, a car, a pen)\n- an + يبدأ بصوت علة a, e, i, o, u (an apple, an hour, an umbrella)\n\n2. the (المعرفة - للشيء المحدد أو الوحيد في الكون):\n- The sun, the moon, the sky (أشياء فريدة)\n- الاسم المكرر للمرة الثانية في الجملة\n\n3. No Article (بدون أداة x):\n- قبل أسماء المواد الدراسية: math, English, history\n- قبل أسماء المدن والبلدان: Baghdad, Iraq\n- قبل الجمع العام: I like apples",
        detailedContent: [
          "نستخدم (a / an) عند الحديث عن شيء واحد غير محدد.",
          "نستخدم (the) عندما يكون الشيء معروفاً ومحدداً للمتكلم والسامع، أو فريداً في العالم مثل (the sun, the pyramids).",
          "لا نستخدم أي أداة قبل أسماء الدروس المدرسية، أو الرياضات، أو الأيام، أو الأشياء بصفة عامة."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه! أسماء الدروس المدرسية لا تأخذ the: I am good at English (وليس the English)."
        ],
        commonMistakes: [
          "قول I like the apples (إذا كنت تقصد التفاح عموماً الصحيح I like apples)."
        ],
        examples: [
          {
            en: "There is an apple on the table. The apple is red.",
            ar: "توجد تفاحة على الطاولة (نكرة لأول مرة). التفاحة حمراء (معرفة بالمرة الثانية).",
            highlight: "an apple ... The apple",
            note: "تنكير ثم تعريف"
          }
        ],
        exercises: [
          {
            id: "3u6-l4-ex1",
            question: "I am really good at ______ (the / a / an / -) geography and history.",
            options: ["- (no article)", "the", "a", "an"],
            correctAnswer: "- (no article)",
            explanation: "المواد الدراسية (geography and history) لا تسبق بأي أداة تعريف.",
            type: "mcq",
            ministerialYear: "وزاري 2021 دور ثانٍ"
          }
        ]
      }
    ]
  },
  {
    id: 107,
    number: 7,
    titleAr: "الوحدة السابعة: ترتيب الظروف والمبني للمجهول وفنجان القهوة",
    titleEn: "Unit 7: Adverbs, Passive Voice & Cup of Coffee",
    description: "قواعد ترتيب الظروف الثلاثية (حال، مكان، زمان)، المبني للمجهول (Passive Voice)، ووقت القصة: الحياة مثل فنجان قهوة (A Cup of Coffee).",
    accentColor: "bg-soft-mint text-ink",
    bgGradient: "bg-paper border-ink",
    lessons: [
      {
        id: "3rd-u7-l1",
        unitId: 107,
        lessonNumber: 1,
        titleAr: "الدرس الأول: ترتيب الظروف (Order of Adverbs - قاعدة حمز)",
        titleEn: "Lesson 1: Order of Adverbs (Manner, Place, Time)",
        category: "grammar",
        summary: "القاعدة الذهبية لترتيب الظروف باللغة الإنكليزية: الحال أولاً، ثم المكان، ثم الزمان.",
        grammarRuleFormula: "القاعدة الذهبية المختصرة بكلمة (حَمَز):\n1. ح = حال (Manner): ينتهي بـ ly غالباً، أو fast, well, by bus.\n2. م = مكان (Place): in the garden, at school, in the race.\n3. ز = زمان (Time): yesterday, last night, every day, in the morning.\n\nالترتيب الوزاري الإلزامي:\nManner (حال) + Place (مكان) + Time (زمان)",
        detailedContent: [
          "في الامتحان الوزاري يأتيك السؤال كاختيارات بين ترتيبات متعددة للظروف:",
          "مثال: Ali ran (well in the race yesterday / in the race well yesterday / yesterday well in the race).",
          "خطوات الحل المنهجية:",
          "1. ابحث عن ظرف الحال (well أو كلمة بـ ly) واجعله أولاً.",
          "2. بعده يأتي ظرف المكان (in the race).",
          "3. وأخيراً ظرف الزمان (yesterday).",
          "فالاختيار الصحيح: well in the race yesterday."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: تذكر دائماً كلمة (حَمَز) باللغة العربية:",
          "ح: حال (Manner)",
          "م: مكان (Place)",
          "ز: زمان (Time)",
          "هذه النقطة تتكرر في السؤال الثاني فرع B كاختيارات في 90% من الأدوار الوزارية!"
        ],
        commonMistakes: [
          "وضع ظرف الزمان في المنتصف بين الحال والمكان.",
          "البدء بالمكان قبل الحال."
        ],
        examples: [
          {
            en: "Sami played (well in the garden yesterday).",
            ar: "لعب سامي بشكل جيد (حال) في الحديقة (مكان) البارحة (زمان).",
            highlight: "well in the garden yesterday",
            note: "ترتيب صحيح وفق قاعدة حمز"
          }
        ],
        exercises: [
          {
            id: "3u7-l1-ex1",
            question: "My friend sang ______ at the concert last night.",
            options: [
              "beautifully in the concert last night",
              "last night beautifully in the concert",
              "in the concert beautifully last night",
              "beautifully last night in the concert"
            ],
            correctAnswer: "beautifully in the concert last night",
            explanation: "الترتيب الصحيح: الحال (beautifully) ثم المكان (in the concert) ثم الزمان (last night).",
            type: "mcq",
            ministerialYear: "وزاري 2021 دور أول"
          }
        ]
      },
      {
        id: "3rd-u7-l2",
        unitId: 107,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: المبني للمجهول (Passive Voice)",
        titleEn: "Lesson 2: Passive Voice (Present & Past)",
        category: "grammar",
        summary: "تحويل الجمل من المبني للمعلوم إلى المبني للمجهول في المضارع والماضي وكان.",
        grammarRuleFormula: "خطوات التحويل:\n1. حذف الفاعل.\n2. تقديم المفعول به في بداية الجملة.\n3. وضع فعل مساعد مناسب حسب زمن الجملة ومفرد/جمع المفعول به:\n- مضارع بسيط: is / are + P.P.\n- ماضٍ بسيط: was / were + P.P.\n- مع can: can be + P.P.",
        detailedContent: [
          "أمثلة وزارية شهيرة:",
          "- Crops (are grown) by the marsh Arabs. (المضارع البسيط للمجهول).",
          "- My wallet (was stolen) last week. (الماضي البسيط للمجهول).",
          "- Marsh Arabs (can be found) in the south of Iraq. (صيغة can be + P.P.)."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: تذكر دائماً أن المبني للمجهول يتطلب تصريفاً ثالثاً للفعل (P.P.).",
          "في الاختيارات: إذا كان الفاعل غير قادر على فعل الشيء بنفسه (مثل المحاصيل أو الحقيبة)، فالجملة مبني للمجهول!"
        ],
        commonMistakes: [
          "استخدام was مع الجمع أو were مع المفرد.",
          "نسيان التصريف الثالث للفعل بعد can be."
        ],
        examples: [
          {
            en: "Rice and wheat are grown by farmers.",
            ar: "يُزرع الرز والقمح من قبل المزارعين.",
            highlight: "are grown",
            note: "مبني للمجهول مضارع جمع"
          }
        ],
        exercises: [
          {
            id: "3u7-l2-ex1",
            question: "Cotton and sugar (grow / are grown) in Sudan.",
            options: ["are grown", "grow", "is grown", "growing"],
            correctAnswer: "are grown",
            explanation: "القطن والسكر جمع ولا يزرعان نفسيهما، فيكون الجواب مبني للمجهول are grown.",
            type: "mcq",
            ministerialYear: "وزاري 2019 دور أول"
          }
        ]
      },
      {
        id: "3rd-u7-l3",
        unitId: 107,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: قصة فنجان القهوة (Story Time: Life is Like a Cup of Coffee)",
        titleEn: "Lesson 3: Life is Like a Cup of Coffee",
        category: "reading",
        summary: "قصة البروفيسور الهندي وخريجي الجامعة وأكواب القهوة المختلفة لتعليم قيمة الحياة الحقيقية.",
        grammarRuleFormula: "Key Lesson:\n- The coffee is life, and the jobs, money, and status in society are the cups.\n- The cups merely hold and contain life; they do not change the quality of life.\n- The happiest people don't have the best of everything; they just make the best of everything.",
        detailedContent: [
          "1. Who agreed to visit their old university professor? => A group of alumni from different Iraqi provinces.",
          "2. Where was the professor from? => He was an Indian professor living in Hyderabad.",
          "3. Why did the professor bring out cups of different shapes and materials? => To show them that they all chose the expensive, attractive cups and left the plain, cheap ones.",
          "4. What is the moral of the story?",
          "Answer: Life is the coffee, whereas jobs, wealth, and status are just cups that hold life. True happiness comes from enjoying the coffee, not obsessing over the cup."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: قصة فنجان القهوة قصة فلسفية جميلة وتتكرر في السؤال الرابع.",
          "احفظ التشبيه: Coffee = life, Cups = money and jobs."
        ],
        commonMistakes: [
          "الخلط بين التشبيهين (القهوة هي الحياة، والأكواب هي المناصب والوظائف)."
        ],
        examples: [
          {
            en: "The alumni learned a profound lesson about living life happily.",
            ar: "تعلم الخريجون درساً عميقاً في عيش الحياة بسعادة وقناعة.",
            highlight: "learned a profound lesson",
            note: "العبرة الأساسية للقصة"
          }
        ],
        exercises: [
          {
            id: "3u7-l3-ex1",
            question: "In the story 'A Cup of Coffee', the coffee represents ______.",
            options: ["life", "money", "jobs", "social status"],
            correctAnswer: "life",
            explanation: "القهوة تمثل الحياة (life)، والأكواب تمثل الوظائف والمظاهر.",
            type: "mcq",
            ministerialYear: "وزاري 2022 تمهيدي"
          }
        ]
      },
      {
        id: "3rd-u7-l4",
        unitId: 107,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: دورة الألعاب الآسيوية (The Asian Games)",
        titleEn: "Lesson 4: Reading - The Asian Games (Asiad)",
        category: "reading",
        summary: "القطعة الاستيعابية عن الألعاب الآسيوية: تاريخ التأسيس في الهند عام 1951، الشعار، ومشاركة العراق وإحراز الميداليات.",
        detailedContent: [
          "تاريخ الألعاب الآسيوية (The Asian Games):",
          "1. فكرة البطولة: نشأت لتعزيز الصداقة والسلام بين شعوب قارة آسيا بعد الحرب العالمية الثانية.",
          "2. أول دورة ألعاب آسيوية أقيمت في نيودلهي عاصمة الهند عام 1951 (New Delhi, India).",
          "3. تقام الدورة كل 4 سنوات (every four years) بإشراف المجلس الأولمبي الآسيوي (Olympic Council of Asia - OCA).",
          "4. شعار الألعاب الآسيوية: شمس مشرقة بـ 16 شعاعاً تتوسطها حلقة حمراء (A shining sun with 16 rays).",
          "5. مشاركة العراق: شارك العراق عدة مرات وحصد أبطاله ميداليات في ألعاب القوى والمصارعة ورفع الأثقال وكرة القدم (Doha 2006, Incheon 2014).",
          "المفردات: continent (قارة), motto/slogan (شعار), friendship (صداقة), compete (يتنافس), medals (ميداليات)."
        ],
        teacherNotes: [
          "ملاحظة الأستاذ عمار غالب: انتبه لسؤال متكرر: Where and when did the first Asian Games take place? In New Delhi, India in 1951."
        ],
        commonMistakes: [
          "الخلط بين عام أول دورة (1951) ومكانها (New Delhi)."
        ],
        examples: [
          {
            en: "The first Asian Games were held in New Delhi, India in 1951.",
            ar: "أقيمت أول دورة ألعاب آسيوية في نيودلهي بالهند عام 1951.",
            highlight: "New Delhi, India in 1951",
            note: "تاريخ ومكان أول دورة آسيوية"
          }
        ],
        exercises: [
          {
            id: "3u7-l4-ex1",
            question: "Where were the first Asian Games held? In ______.",
            options: ["New Delhi, India", "Doha, Qatar", "Tokyo, Japan", "Baghdad, Iraq"],
            correctAnswer: "New Delhi, India",
            explanation: "أقيمت أول دورة ألعاب آسيوية في نيودلهي بالهند عام 1951.",
            type: "mcq",
            ministerialYear: "وزاري 2019 دور أول"
          },
          {
            id: "3u7-l4-ex2",
            question: "How often do the Asian Games take place? Every ______ years.",
            options: ["4", "2", "3", "5"],
            correctAnswer: "4",
            explanation: "تقام الألعاب الآسيوية كل 4 سنوات.",
            type: "mcq",
            ministerialYear: "وزاري 2021 تمهيدي"
          }
        ]
      }
    ]
  }
];

// ==========================================
// 2. قصص وأدب الثالث المتوسط المقررة (Story Time)
// ==========================================
export { THIRD_INTERMEDIATE_STORIES } from './thirdIntermediateStories';

// ==========================================
// 3. الإنشاءات الوزارية للثالث المتوسط (Essays)
// ==========================================
export { THIRD_INTERMEDIATE_ESSAYS } from './thirdIntermediateEssays';


// ==========================================
// 4. بنك الوزاريات للثالث المتوسط (2017 - 2025)
// ==========================================
export const THIRD_INTERMEDIATE_QUESTIONS: MinisterialExamQuestion[] = [
  {
    id: "3rd-min-q1",
    unitId: 101,
    topic: "Describing Places (There is / There are)",
    year: "2019",
    session: "دور أول",
    questionText: "There ______ lots of shops in our town. (is / are / isn't)",
    correctAnswer: "are",
    ruleExplanation: "وجود كلمة shops (اسم جمع) مع lots of يفرض استخدام الفعل المساعد are.",
    difficulty: "easy",
    category: "Grammar"
  },
  {
    id: "3rd-min-q2",
    unitId: 101,
    topic: "Telling the Time",
    year: "2021",
    session: "دور أول",
    questionText: "15:20 (Tell the time)",
    correctAnswer: "It's three twenty.",
    ruleExplanation: "15 - 12 = 3، والدقائق 20، فالصيغة: It's three twenty.",
    difficulty: "easy",
    category: "Grammar"
  },
  {
    id: "3rd-min-q3",
    unitId: 101,
    topic: "Polite Description",
    year: "2022",
    session: "دور أول",
    questionText: "He is fat. (Make the sentence more polite)",
    correctAnswer: "He is a bit fat.",
    ruleExplanation: "نضع a bit قبل الصفة السلبية لنجعل الوصف أكثر تهذيباً.",
    difficulty: "medium",
    category: "Grammar"
  },
  {
    id: "3rd-min-q4",
    unitId: 102,
    topic: "Suggestions",
    year: "2020",
    session: "دور أول",
    questionText: "How about ______ to the park? (go / to go / going)",
    correctAnswer: "going",
    ruleExplanation: "بعد How about نستخدم دائماً فعلاً ينتهي بـ ing.",
    difficulty: "easy",
    category: "Grammar"
  },
  {
    id: "3rd-min-q5",
    unitId: 103,
    topic: "Order of Adverbs (قاعدة حمز)",
    year: "2021",
    session: "دور أول",
    questionText: "Sami played ______ in the match yesterday. (well / yesterday / in the match - put in correct order)",
    correctAnswer: "well in the match yesterday",
    ruleExplanation: "الترتيب الصحيح هو: الحال (well) ثم المكان (in the match) ثم الزمان (yesterday).",
    difficulty: "medium",
    category: "Grammar"
  },
  {
    id: "3rd-min-q6",
    unitId: 106,
    topic: "Relative Pronouns",
    year: "2022",
    session: "دور ثانٍ",
    questionText: "That is the engineer ______ built the hospital. (who / which / where)",
    correctAnswer: "who",
    ruleExplanation: "كلمة engineer اسم عاقل، ونستخدم who للوصل مع العاقل.",
    difficulty: "easy",
    category: "Grammar"
  },
  {
    id: "3rd-min-q7",
    unitId: 103,
    topic: "So / Neither",
    year: "2019",
    session: "دور ثانٍ",
    questionText: "I don't like horror films. (Agree): ______",
    correctAnswer: "Neither do I",
    ruleExplanation: "الجملة منفية بـ don't فنوافق عليها بـ Neither do I.",
    difficulty: "easy",
    category: "Grammar"
  },
  {
    id: "3rd-min-q8",
    unitId: 107,
    topic: "Passive Voice",
    year: "2023",
    session: "دور أول",
    questionText: "Wheat and barley (are grown / grow) in Iraq.",
    correctAnswer: "are grown",
    ruleExplanation: "الحنطة والشعير محصولان مفعول به جمع، لذا نستخدم المبني للمجهول are grown.",
    difficulty: "medium",
    category: "Grammar"
  }
];

// ==========================================
// 5. الملزمة الافتراضية الجاهزة (ملزمة الأستاذ عمار غالب)
// ==========================================
export const DEFAULT_PRELOADED_3RD_MALZAMA: UploadedMalzama = {
  id: "malzama-3rd-official",
  name: "النموذجية في اللغة الانكليزية - الثالث المتوسط 2025 (الأستاذ عمار غالب)",
  size: "18.4 MB",
  uploadDate: "2025-01-10",
  fileType: "application/pdf",
  grade: "third-intermediate",
  unitsCount: 7,
  summary: "الملزمة الشاملة والمعتمدة للأستاذ عمار غالب لمرحلة الثالث المتوسط 2025: تغطي كافة القواعد بأسلوب مبسط، قطع استيعابية (سيارة البانثر، الهوايات، الأهوار، لوسي، ابن الهيثم)، المفردات والتعاريف والتوصيلات، قصص الأدب (كريم وشاعر النواب، كرم ولاعب السلة، ملء الفراغ، إبراهيم، سلام أحمد، داليا، تنظيف المدرسة، سيرة علي)، والإنشاءات الوزارية النموذجية العشرة.",
  extractedRules: [
    {
      title: "الوصف المكاني (There is / There are / It has)",
      formula: "There is a/an (Singular) | There aren't any (Plural) | It doesn't have a...",
      explanation: "قاعدة أساسية في السؤال الثاني، تضبط الوصف المفرد والجمع واستخدام any في النفي والاستفهام.",
      examples: [
        "There is an escalator in the mall.",
        "There aren't any sweet shops.",
        "It has a big cinema."
      ]
    },
    {
      title: "الإخبار عن الوقت (Telling the Time)",
      formula: "It's + Hours + Minutes (اطرح 12 إذا تجاوزت الساعة 12)",
      explanation: "الطريقة الرقمية المباشرة المعتمدة في الامتحان الوزاري.",
      examples: [
        "16:10 => It's four ten.",
        "20:45 => It's eight forty-five."
      ]
    },
    {
      title: "ترتيب الظروف (قاعدة حَمَز)",
      formula: "حال (Manner) + مكان (Place) + زمان (Time)",
      explanation: "تأتي نقطة اختيارات أساسية بالسؤال الثاني فرع B في كل دور وزاري.",
      examples: [
        "He drove carefully in the street yesterday."
      ]
    },
    {
      title: "ضمائر الوصل (who, which, that, where)",
      formula: "اسم عاقل + who | اسم غير عاقل + which/that | اسم مكان + where",
      explanation: "تستخدم لربط الجمل وتحديد الأشخاص والأماكن بدقة.",
      examples: [
        "The doctor who helped me was very kind.",
        "This is the school where I studied."
      ]
    }
  ],
  extractedVocab: [
    { word: "airbags", meaning: "وسائد هوائية للأمان", context: "Panther 3.0D has airbags for driver and passengers." },
    { word: "imaginative", meaning: "واسع الخيال ومبتكر", context: "Kareem was hard-working, quiet and imaginative." },
    { word: "lawn mower", meaning: "جزازة العشب", context: "Fahad's brother brought a lawn mower to cut the tall grass." },
    { word: "zoologist", meaning: "عالم حيوان وباحث بيئي", context: "Ibrahim studied zoology at Cairo University." },
    { word: "marshes", meaning: "الأهوار العراقية", context: "Marsh Arabs live in arched houses built from reeds." }
  ],
  extractedQuestions: [
    {
      question: "What was Kareem’s dream?",
      answer: "To be a famous poet one day.",
      type: "Story Time (Lucky Customer 50)"
    },
    {
      question: "Why did Karam run into the road?",
      answer: "To save a little girl from a speeding car.",
      type: "Story Time (Karam's Story)"
    },
    {
      question: "What did Hamad buy to fill the room?",
      answer: "He bought a candle and filled it with light.",
      type: "Story Time (How to Fill a Space)"
    },
    {
      question: "What did the wise old man say to the son in the restaurant?",
      answer: "“You left a lesson for every son and hope for every father.”",
      type: "Story Time (A Powerful Lesson)"
    },
    {
      question: "Put in order: (fast / in the race / yesterday)",
      answer: "fast in the race yesterday (حال ثم مكان ثم زمان)",
      type: "Grammar"
    }
  ],
  rawContentPreview: "جمهورية العراق - وزارة التربية • منهج اللغة الإنكليزية للصف الثالث المتوسط (English for Iraq - 3rd Intermediate) • ملزمة النموذجية للأستاذ عمار غالب 2025 • تغطية شاملة لجميع الوحدات وقصص المنهج الثمانية والإنشاءات الوزارية من ص 134 إلى ص 143 مع بنك الأسئلة الوزارية لسنوات 2017 - 2025."
};
