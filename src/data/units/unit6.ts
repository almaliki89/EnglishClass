import { Unit } from '../../types';

export const UNIT_6: Unit = {
  id: 6,
  number: 6,
  titleAr: "الوحدة السادسة: البنوك، المبني للمجهول، والاستثمار",
  titleEn: "Unit 6: Banking, Passive Voice & Investments",
  description: "المصطلحات البنكية، المتلازمات المالية، المبني للمجهول (Passive Voice) في كافة الأزمنة والتحويل الوزاري، الاستنتاجات، قطعة موظف البنك (Meet a Banker)، وقطعة كسب المال (Making Money).",
  accentColor: "from-emerald-700 to-green-600",
  bgGradient: "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200",
  lessons: [
    {
      id: "u6-l1",
      unitId: 6,
      lessonNumber: 1,
      titleAr: "الدرس الأول: تعاريف المصطلحات والبطاقات البنكية",
      titleEn: "Lesson 1: Banking Terms & Cards Vocabulary",
      category: "vocabulary",
      summary: "تعاريف المصطلحات البنكية الأساسية (Bank card, ATM, PIN, Cheque, Credit card) من صفحة 122 من الملزمة (تمرين A ص 119 كتاب النشاط).",
      grammarRuleFormula: "Banking Definitions:\nbank card = a piece of plastic used to pay for things or get money in the street\nATM = a machine where you can get money using a bank card\nPIN = a secret number used with a bank card to stop others using it\ncheque = a piece of paper used to pay for things\ncredit card = a plastic card used to buy things now and pay later",
      detailedContent: [
        "تعاريف البنوك الوزارية (ص 122 من ملزمة الأستاذ مصطفى تركي):",
        "1. bank card (بطاقة بنكية): a piece of plastic you can use to pay for things or get money in the street.",
        "2. ATM / Automated Teller Machine (صراف آلي): a machine you can get money from using a bank card.",
        "3. PIN / Personal Identification Number (الرقم السري): a secret number you use with your bank card to stop other people using it.",
        "4. cheque (صك / شيك): a piece of paper you can use to pay for things or get money.",
        "5. credit card (بطاقة ائتمان): a piece of plastic you can use to buy things and pay for them later.",
        "معاني كشف الحساب المصرفي (ص 123):",
        "- bank statement (كشف حساب بنكي): a document showing all transactions.",
        "- account number (رقم الحساب): the unique number given to your account.",
        "- balance (الرصيد): the total amount of money in your account.",
        "- transaction (معاملة مالية): activity in your account (deposits and withdrawals)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تعاريف تمرين A ص 119 تأتي نصاً في السؤال الثالث فرع B إما توصيل أو إسقاطات.",
        "انتبه للفرق بين credit card (الشراء والدفع لاحقاً pay later) و bank card (للسحب ودفع المشتريات فوراً)."
      ],
      commonMistakes: [
        "الخلط بين PIN (الرقم السري) و password.",
        "الخلط بين balance (الرصيد المتبقي) و transaction (الحركة المالية)."
      ],
      examples: [
        {
          en: "a secret number you use with your bank card = PIN.",
          ar: "رقم سري تستخدمه مع بطاقتك البنكية = PIN.",
          highlight: "PIN",
          note: "وزاري 2017 و 2021"
        }
      ],
      exercises: [
        {
          id: "u6-l1-ex1",
          question: "A plastic card you can use to buy things now and pay for them later is a _________.",
          options: ["credit card", "cheque", "PIN", "bank statement"],
          correctAnswer: "credit card",
          explanation: "البطاقة التي تتيح الشراء الآن والدفع لاحقاً هي بطاقة الائتمان (credit card).",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        }
      ]
    },
    {
      id: "u6-l2",
      unitId: 6,
      lessonNumber: 2,
      titleAr: "الدرس الثاني: المتلازمات البنكية والمبني للمجهول الشامل",
      titleEn: "Lesson 2: Bank Collocations & Complete Passive Voice",
      category: "grammar",
      summary: "متلازمات البنوك وقواعد المبني للمجهول (Passive Voice) في كافة الأزمنة وطريقة الحل الوزاري المضمونة (ص 124 - 128 من الملزمة).",
      grammarRuleFormula: "General Passive Formula: New Object + verb 'to be' (in tense) + Past Participle [p.p.]\nPresent Simple: am/is/are + p.p.\nPast Simple: was/were + p.p.\nPresent Continuous: is/are being + p.p.\nPast Continuous: was/were being + p.p.\nPresent Perfect: have/has been + p.p.\nPast Perfect: had been + p.p.\nModals (will/can/must): will be + p.p.",
      detailedContent: [
        "1. المتلازمات اللفظية البنكية (ص 124 من الملزمة):",
        "- open an account = يفتح حساباً.",
        "- pay interest = يدفع فائدة.",
        "- deposit money = يودع أموالاً.",
        "- make a withdrawal = يقوم بعملية سحب.",
        "- maintain a minimum balance = يحافظ على الحد الأدنى للرصيد.",
        "- charge a fee = يفرض رسوماً.",
        "2. قواعد المبني للمجهول (Passive Voice) - ص 125 - 128:",
        "- خطوات التحويل الوزاري:",
        "  1) نحذف الفاعل القديم تماماً.",
        "  2) نقدم المفعول به إلى بداية الجملة (غالباً الكلمة الثالثة بعد الفعل، المسبوقة بـ the, a, my, his).",
        "  3) نضع فعل الكينونة المناسب لزمن الجملة والمطابق لمفرد أو جمع المفعول به الجديد:",
        "     - إذا كان الفعل مضارعاً بسيطاً: am / is / are + p.p.",
        "     - إذا كان الفعل ماضياً بسيطاً: was / were + p.p.",
        "     - إذا كان الفعل مضارعاً مستمراً: is / are being + p.p.",
        "     - إذا كان الفعل ماضياً مستمراً: was / were being + p.p.",
        "     - إذا كان الفعل مضارعاً تاماً: have / has been + p.p.",
        "     - إذا كان الفعل يحتوي will / can / must: will be + p.p.",
        "  4) نحول الفعل الرئيسي للجملة إلى التصريف الثالث (p.p)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: دائماً انتبه لجمع ومفرد المفعول به الجديد!",
        "إذا كان المفعول به جمعاً (The machines / The letters)، نستخدم are أو were حتى لو كان الفاعل الأصلي مفرداً.",
        "في جمل ترتيب المبني للمجهول (Unscramble the words): ابدأ دائماً بـ The + الاسم، ثم الفعل المساعد والتصريف الثالث."
      ],
      commonMistakes: [
        "نسيان كلمة being في أزمنة الاستمرار (is being + p.p / was being + p.p).",
        "نسيان been في أزمنة التام (has been + p.p).",
        "اختيار was مع مفعول به جمع."
      ],
      examples: [
        {
          en: "Somebody stole my wallet last week. -> My wallet was stolen last week.",
          ar: "سرق شخص محفظتي الأسبوع الماضي -> سرقت محفظتي الأسبوع الماضي.",
          highlight: "was stolen",
          note: "وزاري 2017 و 2020"
        },
        {
          en: "Somebody is cleaning the room right now. -> The room is being cleaned right now.",
          ar: "ينظف شخص ما الغرفة حالياً -> الغرفة تُنظف حالياً.",
          highlight: "is being cleaned",
          note: "تمرين B ص 122 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u6-l2-ex1",
          question: "Somebody will grade our homework over the weekend. (Rewrite in passive voice)",
          options: [
            "Our homework will be graded over the weekend.",
            "Our homework will graded over the weekend.",
            "Our homework is graded over the weekend.",
            "Our homework was graded over the weekend."
          ],
          correctAnswer: "Our homework will be graded over the weekend.",
          explanation: "قاعدة المستقبل في المبني للمجهول: will be + p.p (will be graded).",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u6-l2-ex2",
          question: "The decision (was made / made) by the bank manager yesterday.",
          options: ["was made", "made"],
          correctAnswer: "was made",
          explanation: "الجملة مبنية للمجهول في زمن الماضي (yesterday)، فنختار was made.",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور أول"
        }
      ]
    },
    {
      id: "u6-l3",
      unitId: 6,
      lessonNumber: 3,
      titleAr: "الدرس الثالث: قطعة موظف البنك (Meet a Banker)",
      titleEn: "Lesson 3: Meet a Banker (Reading Comprehension)",
      category: "reading",
      summary: "قطعة الكتاب الوزارية لمهنة موظف البنك: تنوع المهام اليومية، إقناع الناس والشركات بفتح الحسابات، تقييم القروض والاستثمارات، ومهارات التواصل والرياضيات.",
      grammarRuleFormula: "Key Skills of a Banker:\n- Convince people to use the bank\n- Assess loan requests for businesses and homes\n- Good at maths and reading financial graphs\n- Excellent communicator with all types of clients",
      detailedContent: [
        "قطعة الكتاب الرسمية: موظف البنك (ص 129 - 132 من ملزمة الأستاذ مصطفى تركي):",
        "- لماذا يحب موظف البنك وظيفته؟ بسبب التنوع (variety)؛ فلا يوجد يومان متشابهان، ويتعامل مع أفراد وشركات من كافة الشرائح.",
        "- أهم المهام: إقناع الناس بفتح حسابات بنكية، تقديم العروض والخدمات الجديدة للعملاء والطلاب.",
        "- منح القروض (loans): مساعدة الناس على شراء منازل أو سيارات، ومساعدة أصحاب المشاريع والشركات على بدء أعمالهم أو توسعتها.",
        "- مهارات الموظف المصرفي: أن يكون بارعاً في الرياضيات وقراءة الرسوم البيانية (graphs and charts)، ولديه مهارات تواصل ممتازة (good communicator) للتعامل مع العملاء وشرح التفاصيل المعقدة بوضوح.",
        "أسئلة وزارية نموذجية:",
        "- What makes a banker's job interesting? The variety (every day is different).",
        "- One of the most important skills of a banker is being good at (maths).",
        "- A banker needs to be a good communicator because (he works with many different people and needs to explain things clearly)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة موظف البنك من القطع المتكررة في السؤال الأول فرع B.",
        "سؤال صح وخطأ وزاري: A banker only needs to know about financial subjects. (False - needs communication skills too)."
      ],
      commonMistakes: [
        "القول بأن عمل المصرفي ممل ورتيب؛ بينما هو مليء بالتنوع والتفاعل البشري.",
        "القول بأن وظيفته فقط عد النقود."
      ],
      examples: [
        {
          en: "What is the most difficult part of a banker's job? He cannot always approve a loan.",
          ar: "ما أصعب جزء في وظيفة المصرفي؟ أنه لا يستطيع دائماً الموافقة على القرض.",
          highlight: "cannot always approve a loan",
          note: "وزاري 2017 و 2020"
        }
      ],
      exercises: [
        {
          id: "u6-l3-ex1",
          question: "A banker needs to be a good communicator because _________.",
          options: [
            "he deals with many different clients and needs to explain things clearly",
            "he only works on computers",
            "he doesn't like working in an office",
            "he has to travel abroad every week"
          ],
          correctAnswer: "he deals with many different clients and needs to explain things clearly",
          explanation: "يحتاج للتواصل الجيد لأنه يتعامل مع عملاء مختلفين ويشرح الأمور المالية المعقدة ببساطة.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        }
      ]
    },
    {
      id: "u6-l4",
      unitId: 6,
      lessonNumber: 4,
      titleAr: "الدرس الرابع: استنتاجات المضارع والماضي (Deductions)",
      titleEn: "Lesson 4: Present & Past Deductions (must, might, can't)",
      category: "grammar",
      summary: "التعبير عن الاستنتاجات والتأكد (Certainty & Possibility) في الحاضر والماضي باستخدام (must, can't, might, could) من صفحة 133 بالملزمة.",
      grammarRuleFormula: "Present: Subject + must / might / can't + base verb\nPast: Subject + must / might / can't + have + Past Participle [p.p.]",
      detailedContent: [
        "الاستنتاجات في المضارع والماضي (ص 133 - 134 من الملزمة):",
        "1. الاستنتاج المؤكد بالإثبات (must): عندما تكون متأكداً 100% أن الشيء صحيح:",
        "   He has three luxury cars; he must be very rich.",
        "   In the past: He had lived in Paris for 10 years; he must have spoken French fluently.",
        "2. الاستنتاج المؤكد بالنفي (can't): عندما تكون متأكداً 100% أن الشيء مستحيل الحدوث:",
        "   He was in hospital yesterday; he can't have committed the robbery.",
        "3. الاحتمال والشك (might / may / could): عندما لا تكون متأكداً 50%:",
        "   I'm not sure where my keys are; they might be in the car."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: كلمة (can't) هي نفي التأكيد المستحيل، ولا نستخدم mustn't للاستنتاج إطلاقاً في هذا الموضوع."
      ],
      commonMistakes: [
        "استخدام mustn't بدلاً من can't في استنتاج الاستحالة.",
        "نسيان have قبل التصريف الثالث في استنتاجات الماضي."
      ],
      examples: [
        {
          en: "You have run 20 kilometres; you (must / can't) be exhausted.",
          ar: "ركضت 20 كيلومتراً؛ لا بد أنك مرهق للغاية (must).",
          highlight: "must be exhausted",
          note: "ص 133"
        }
      ],
      exercises: [
        {
          id: "u6-l4-ex1",
          question: "He left his office an hour ago. He _________ arrived home by now.",
          options: ["must have", "can't have", "couldn't", "might not"],
          correctAnswer: "must have",
          explanation: "استنتاج مؤكد في الماضي لوصوله إلى المنزل: must have arrived.",
          type: "mcq",
          ministerialYear: "تمرين ص 134"
        }
      ]
    },
    {
      id: "u6-l5",
      unitId: 6,
      lessonNumber: 5,
      titleAr: "الدرس الخامس: مفردات السفر والأموال ومطابقة الشرطيات",
      titleEn: "Lesson 5: Money Abroad & Conditional Matching",
      category: "vocabulary",
      summary: "مصطلحات أسعار الصرف وتحويل العملات والتعامل المالي في السفر (تمرين B ص 131 كتاب النشاط).",
      grammarRuleFormula: "Money Vocabulary:\nexchange rate = the value of one currency compared to another\ntraveller's cheques = safe cheques used when travelling abroad\nfreeze an account = stop transactions temporarily",
      detailedContent: [
        "مفردات السفر والأموال (ص 135 من ملزمة الأستاذ مصطفى تركي):",
        "- exchange rate (سعر الصرف): how much one currency is worth against another.",
        "- currency (العملة): the money used in a country.",
        "- commission (عمولة): money paid to a bank or service for a transaction.",
        "- credit limit (الحد الائتماني): the maximum amount you can borrow on a card."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي هذه المصطلحات في أسئلة الإسقاطات والتوصيلات."
      ],
      commonMistakes: [
        "الخلط بين exchange rate و interest rate."
      ],
      examples: [
        {
          en: "What is the exchange rate for the US dollar today?",
          ar: "ما هو سعر صرف الدولار الأمريكي اليوم؟",
          highlight: "exchange rate",
          note: "ص 135"
        }
      ],
      exercises: [
        {
          id: "u6-l5-ex1",
          question: "The value of one currency against another is the _________ rate.",
          options: ["exchange", "interest", "speed", "tax"],
          correctAnswer: "exchange",
          explanation: "سعر صرف العملات يسمى exchange rate.",
          type: "mcq",
          ministerialYear: "تمرين B ص 131"
        }
      ]
    },
    {
      id: "u6-l6",
      unitId: 6,
      lessonNumber: 6,
      titleAr: "الدرس السادس: تعاريف مالية هامة واستثمارات",
      titleEn: "Lesson 6: Financial Terms & Property Investments",
      category: "vocabulary",
      summary: "تعاريف الأقساط والتمويل (down payment, monthly instalments, investment, make a profit) من صفحة 136 بالملزمة.",
      grammarRuleFormula: "Financial Terms:\ndown payment = an initial part payment made when buying something expensive\nmonthly instalments = part of the total cost paid every month\ninvestment = money put into a business or property to make a profit\ngo up in value = increase in worth",
      detailedContent: [
        "تعاريف التمويل والاستثمار (ص 136 من الملزمة - تمرين B ص 133 كتاب النشاط):",
        "1. down payment = part of the total cost paid first (الدفعة الأولى/المقدمة).",
        "2. monthly instalments = part of the total cost that is paid every month (الأقساط الشهرية).",
        "3. investment = money you put into a scheme to make a profit (استثمار).",
        "4. go up in value = the amount you can sell something for increases (يرتفع في القيمة).",
        "5. car insurance = money you pay to a company so you can get money if your car is damaged or stolen (تأمين سيارة)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تعاريف تمرين B ص 133 تأتي في السؤال الثالث فرع B (توصيلات) أو فرع A (إسقاطات) سنوياً!"
      ],
      commonMistakes: [
        "الخلط بين down payment (الدفعة المقدمة الأولى) و monthly instalments (الأقساط الشهرية المتكررة)."
      ],
      examples: [
        {
          en: "part of the total cost that is paid every month = monthly instalments.",
          ar: "جزء من التكلفة الكلية يُدفع شهرياً = أقساط شهرية.",
          highlight: "monthly instalments",
          note: "وزاري 2018 و 2021"
        }
      ],
      exercises: [
        {
          id: "u6-l6-ex1",
          question: "An initial payment made when buying a car or a house is a _________.",
          options: ["down payment", "monthly instalment", "cheque", "fee"],
          correctAnswer: "down payment",
          explanation: "الدفعة الأولى المدفوعة مقدماً تسمى down payment.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        }
      ]
    },
    {
      id: "u6-l8",
      unitId: 6,
      lessonNumber: 8,
      titleAr: "الدرس الثامن: مطابقة الجمل البنكية الوزارية",
      titleEn: "Lesson 8: Banking Collocations & Sentence Matching",
      category: "vocabulary",
      summary: "مطابقة أنصاف الجمل للتعاملات المصرفية والحسابات الجارية من صفحة 137 بالملزمة (تمرين B ص 140 كتاب النشاط).",
      grammarRuleFormula: "Bank Sentences Matching:\nIf you have a student account => you don't have to pay a fee\nIf you maintain a minimum balance => you don't have to pay a charge",
      detailedContent: [
        "مطابقة الجمل البنكية (تمرين B ص 140 كتاب النشاط):",
        "1. If I open a student account, I can get free banking.",
        "2. If you maintain a minimum balance of 1,000 dinars, you don't have to pay a fee.",
        "3. If you use an ATM belonging to another bank, you will be charged a fee.",
        "4. If you stay at school, you can get a better job in the future."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: جمل هذا التمرين تجمع بين القواعد (حالات If الشرطية) والمفردات البنكية."
      ],
      commonMistakes: [
        "مطابقة شروط الرصيد الأدنى مع غرامة السحب الخاطئة."
      ],
      examples: [
        {
          en: "If you maintain a minimum balance, you don't have to pay charges.",
          ar: "إذا حافظت على الحد الأدنى للرصيد، فلن تضطر لدفع رسوم.",
          highlight: "maintain a minimum balance",
          note: "تمرين B ص 140"
        }
      ],
      exercises: [
        {
          id: "u6-l8-ex1",
          question: "If you open a student account, you _________.",
          options: [
            "can get free banking without fees",
            "must pay 50 dollars a month",
            "cannot use an ATM",
            "must invest in property"
          ],
          correctAnswer: "can get free banking without fees",
          explanation: "حساب الطالب يمنح خدمات مصرفية مجانية دون رسوم إضافية.",
          type: "mcq",
          ministerialYear: "تمرين B ص 140"
        }
      ]
    },
    {
      id: "u6-l9",
      unitId: 6,
      lessonNumber: 9,
      titleAr: "الدرس التاسع: قطعة كسب المال واستثماره (Making Money)",
      titleEn: "Lesson 9: Making Money & Investments (Reading Comprehension)",
      category: "reading",
      summary: "قطعة الكتاب الوزارية الرسمية حول طرق ادخار واستثمار الأموال: خطط التقاعد، حسابات التوفير، الأسهم والبورصة، والعقارات (Property).",
      grammarRuleFormula: "Investment Options:\n- Savings accounts: pay interest over time, good for regular savers\n- Pension plans: save for old age and retirement\n- Stocks and shares: high risk, high potential profit or loss\n- Property: buying houses/land to rent or sell at higher value (safest long-term)",
      detailedContent: [
        "قطعة الكتاب الرسمية: كسب المال (ص 138 - 141 من ملزمة الأستاذ مصطفى تركي):",
        "- ادخار المال للمستقبل ثقافة يتعلمها الناس منذ الطفولة لضمان حياة كريمة عند الكبر والتقاعد (retirement).",
        "- طرق استثمار المال الشائعة:",
        "1) حسابات التوفير البنكية (Savings accounts): تفيد من لا يحتاج المال فوراً وتدفع فائدة بمرور الوقت.",
        "2) خطط التقاعد (Pension plans): استقطاع مالي شهري منتظم للإنفاق منه بعد التقاعد.",
        "3) الأسهم والسندات (Stocks and shares): استثمار مالي تجاري في الشركات، فيه مخاطرة (risk)؛ فقد يربح الشخص أموالاً طائلة أو يخسر كل شيء (no guarantees).",
        "4) العقارات (Property): شراء أراضٍ ومنازل، وهو الاستثمار الأكثر أماناً وشعبية في بريطانيا والعالم؛ لأن العقارات ترتفع قيمتها بمرور الوقت (goes up in value) وتدر عائداً شهرياً عبر الإيجار (rent).",
        "أسئلة وزارية نموذجية:",
        "- When we start work, we are encouraged to put money into (pension plans to save for our retirement).",
        "- Investing in stocks and shares is a risky business because (there are no guarantees; you can make or lose money).",
        "- Why is investing in property considered safe? Because property usually goes up in value and can provide rental income."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة كسب المال من أكثر القطع تردداً في الدور الأول والثاني.",
        "سؤال وزاري متكرر: People can get interest on their money when they leave it in a (savings account)."
      ],
      commonMistakes: [
        "القول بأن الأسهم استثمار مضمون بدون خسائر، بينما هو استثمار فيه مخاطرة عالية.",
        "الخلط بين فوائد حسابات التوفير وأرباح العقارات."
      ],
      examples: [
        {
          en: "Investing in stocks and shares is for many people both a hobby and a way of making money.",
          ar: "الاستثمار في الأسهم هو للكثيرين هواية وطريقة لكسب المال في آن معاً.",
          highlight: "a hobby and a way of making money",
          note: "وزاري 2016 و 2019"
        }
      ],
      exercises: [
        {
          id: "u6-l9-ex1",
          question: "Why is investing in property considered a safe investment?",
          options: [
            "Because property usually goes up in value over time and provides rent.",
            "Because banks give property away for free.",
            "Because there is no need to pay any money initially.",
            "Because it always loses value."
          ],
          correctAnswer: "Because property usually goes up in value over time and provides rent.",
          explanation: "العقارات استثمار آمن لأن قيمتها ترتفع مع الوقت وتوفر عائداً إيجارياً.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u6-l9-ex2",
          question: "People save money for their retirement so that they can _________.",
          options: [
            "continue to enjoy a good standard of living when they are older",
            "buy stocks and shares every day",
            "give all their money to charity",
            "stop exercising"
          ],
          correctAnswer: "continue to enjoy a good standard of living when they are older",
          explanation: "يدخر الناس لتقاعدهم للحفاظ على مستوى معيشي جيد في سن الشيخوخة.",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور أول"
        }
      ]
    }
  ]
};
