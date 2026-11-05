import { Unit } from '../../types';

export const UNIT_3: Unit = {
  id: 3,
  number: 3,
  titleAr: "الوحدة الثالثة: المهن، جمل الشرط، الكلام المنقول، والندم",
  titleEn: "Unit 3: Jobs, Conditionals, Reported Speech & Regret",
  description: "التعاريف والمهن، حالات If الشرطية (الصفرية، الأولى، الثانية، الثالثة)، الكلام والأسئلة المنقولة، أفعال الإبلاغ، أسلوب الندم (I wish & If only)، واشتقاق الصفات، مع قطعة المترجمة الفورية سميرة المحمود.",
  accentColor: "from-amber-600 to-orange-600",
  bgGradient: "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200",
  lessons: [
    {
      id: "u3-l1",
      unitId: 3,
      lessonNumber: 1,
      titleAr: "الدرس الأول: أسلوب التعاريف والمهن والواجبات",
      titleEn: "Lesson 1: Defining Jobs & Duties",
      category: "grammar",
      summary: "صياغة تعاريف المهن (A ... is someone who + verb-s) وقائمة الوظائف والواجبات الوزارية (تمرين A ص 52 وتمرين C ص 53).",
      grammarRuleFormula: "A / An + Job Title + is someone who + (verb with -s) + duty",
      detailedContent: [
        "1. قاعدة التعاريف الوزارية (ص 57 - 58 من ملزمة الأستاذ مصطفى تركي):",
        "- نحذف كلمة Define ونضع اسم المهنة مع أداة التنكير (A / An).",
        "- نضع العبارة الثابتة: (is someone who).",
        "- نضع الفعل بين القوسين مضافاً له s الشخص الثالث إذا لم تكن موجودة، ونكمل الجملة.",
        "- إذا كانت العبارة تبدأ بـ (responsible for)، نكتب (is responsible for):",
        "  Define a hotel manager. (Use: responsible for running a hotel)",
        "  -> A hotel manager is someone who is responsible for running a hotel.",
        "2. قائمة المهن والواجبات الوزارية (ص 57 - 58):",
        "- architect (مهندس معماري): designs buildings.",
        "- cameraman (مصور): operates the camera for films or TV programmes.",
        "- engineer (مهندس): designs and builds machines, engines or roads.",
        "- flight attendant (مضيفة طيران): looks after passengers on a plane.",
        "- journalist (صحفي/مراسل): writes articles for newspapers and magazines.",
        "- lawyer (محامي): gives advice to people about the law.",
        "- lifeguard (منقذ سباحة): is responsible for the safety of swimmers.",
        "- pilot (طيار): flies a plane.",
        "- plumber (سباك/سمكري): fixes and installs pipes for water.",
        "- surgeon (جراح): operates on people in hospital.",
        "- secretary (سكرتير): does general office work.",
        "- tour guide (مرشد سياحي): shows tourists around.",
        "- nurse (ممرضة): looks after sick people and helps doctors."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي التعاريف في السؤال الثاني فرع A بصيغة: Define a ... (Use: ...) وهي درجة مضمونة!",
        "انتبه لإضافة s الشخص الثالث للفعل إذا كان مجرداً بين القوسين: operate -> operates, design -> designs.",
        "احفظ كتابة المهن والواجبات وتأتي أيضاً في السؤال الثالث فرع A (إسقاطات)."
      ],
      commonMistakes: [
        "نسيان s الشخص الثالث للفعل الرئيسي بعد who.",
        "نسيان كلمة is قبل responsible for.",
        "الخلط بين plumber (مواصير الماء) و engineer (الآلات والمحركات)."
      ],
      examples: [
        {
          en: "Define a pilot. (Use: flies a plane) -> A pilot is someone who flies a plane.",
          ar: "عرّف الطيار -> الطيار هو شخص يقود الطائرات.",
          highlight: "A pilot is someone who flies a plane",
          note: "وزاري مكرر ص 57"
        },
        {
          en: "Define a surgeon. (Use: operate on people in hospital) -> A surgeon is someone who operates on people in hospital.",
          ar: "عرّف الجراح -> الجراح هو شخص يجري العمليات للناس في المستشفى.",
          highlight: "someone who operates",
          note: "وزاري 2018 دور أول"
        }
      ],
      exercises: [
        {
          id: "u3-l1-ex1",
          question: "Define a lifeguard. (Use: responsible for the safety of swimmers)",
          options: [
            "A lifeguard is someone who is responsible for the safety of swimmers.",
            "A lifeguard is someone who responsible for safety.",
            "A lifeguard is someone who fly a plane.",
            "A lifeguard is someone who operates on people."
          ],
          correctAnswer: "A lifeguard is someone who is responsible for the safety of swimmers.",
          explanation: "القاعدة: A lifeguard is someone who is responsible for the safety of swimmers.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور ثانٍ"
        },
        {
          id: "u3-l1-ex2",
          question: "Someone who fixes and installs pipes for water is a _________.",
          options: ["plumber", "pilot", "nurse", "architect"],
          correctAnswer: "plumber",
          explanation: "الشخص الذي يصلح وينصب أنابيب المياه هو السباك (plumber).",
          type: "mcq",
          ministerialYear: "تمرين A ص 52"
        }
      ]
    },
    {
      id: "u3-l2",
      unitId: 3,
      lessonNumber: 2,
      titleAr: "الدرس الثاني: الجمل الشرطية الصفرية والأولى (Zero & First Conditionals)",
      titleEn: "Lesson 2: Zero & First Conditionals",
      category: "grammar",
      summary: "شرح الجمل الشرطية للحقائق الثابتة (Zero Conditional) والتوقعات والخطط المستقبلية (First Conditional) وقواعد ربط الجمل.",
      grammarRuleFormula: "Zero: If + Present Simple , Present Simple\nFirst: If + Present Simple , Subject + will / can / may / should + base verb\nNegative: don't / doesn't + base verb",
      detailedContent: [
        "1. الحالة الصفرية (Zero Conditional) - ص 59 من الملزمة:",
        "- تعبر عن حقائق علمية أو عادات إنسانية ثابتة قطعية الحدوث 100%:",
        "  If + مضارع بسيط (Present Simple) , مضارع بسيط (Present Simple)",
        "  If ice melts, it turns into water. / If people eat too much, they get fat.",
        "  If people don't get enough rest, they feel tired.",
        "2. الحالة الشرطية الأولى (First Conditional) - ص 59 - 60:",
        "- تعبر عن احتمال ممكن الحدوث في المستقبل:",
        "  If + مضارع بسيط (Present Simple) , الفاعل + will / can / may / might / should + فعل مجرد",
        "  If he gets a visa, he will travel next week. / If I pass, I will have a party.",
        "- قاعدة جملة الأمر في جواب الشرط: If + مضارع بسيط , فعل أمر مجرد (أو Don't + مجرد):",
        "  If he asks you for money, don't give him any.",
        "- كلمة (unless) تعني (إذا لم / ما لم) وتساوي (if not) ويأتي بعدها فعل مضارع مثبت:",
        "  Unless he makes a big effort this term, he won't get through the exams."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: في المضارع البسيط بعد If: إذا كان الفاعل مفرداً (He, She, It) نضيف s الشخص الثالث للفعل (melts, gets, studies). وإذا كان منفياً نستخدم doesn't + مجرد.",
        "وجود (will) أو ('ll) في شق الجواب هو الدليل القاطع على الحالة الأولى (First Conditional)."
      ],
      commonMistakes: [
        "نسيان s الشخص الثالث مع الفاعل المفرد بعد If في زمن المضارع البسيط.",
        "وضع will في جملة If نفسها (will تأتي فقط في جملة جواب الشرط).",
        "استخدام نفي بعد unless لأنها هي بذاتها تحمل معنى النفي."
      ],
      examples: [
        {
          en: "If I don't pass the high school exam this year, I will take it again next year.",
          ar: "إذا لم أنجح في الامتحان هذا العام، سأعيده العام المقبل.",
          highlight: "don't pass ... will take",
          note: "تمرين B ص 55 كتاب النشاط"
        },
        {
          en: "Unless he makes a big effort this term, he won't get through the exams.",
          ar: "ما لم يبذل جهداً كبيراً هذا الفصل، فلن يجتاز الامتحانات.",
          highlight: "Unless he makes ... won't get through",
          note: "وزاري مكرر ص 60"
        }
      ],
      exercises: [
        {
          id: "u3-l2-ex1",
          question: "If she (study) hard, she will pass the exam. (Correct the verb)",
          options: ["studies", "will study", "studied", "study"],
          correctAnswer: "studies",
          explanation: "جواب الشرط يحتوي will (حالة أولى)، والفعل بعد If مضارع بسيط مع فاعل مفرد (she) فيأخذ studies.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u3-l2-ex2",
          question: "If people don't get enough rest, they (feel / feels) tired the next day.",
          options: ["feel", "feels"],
          correctAnswer: "feel",
          explanation: "حالة صفرية تعبر عن حقيقة، والفاعل they جمع يأخذ فعلاً مجرداً (feel).",
          type: "mcq",
          ministerialYear: "تمرين B ص 70"
        }
      ]
    },
    {
      id: "u3-l3",
      unitId: 3,
      lessonNumber: 3,
      titleAr: "الدرس الثالث: الحالة الشرطية الثانية (Second Conditional)",
      titleEn: "Lesson 3: Second Conditional",
      category: "grammar",
      summary: "الحالة الشرطية الثانية للمواقف الخيالية أو غير المحتملة في الحاضر والمستقبل (If + past simple, would/could/might + base verb) وحالة were مع الجميع.",
      grammarRuleFormula: "If + Past Simple [v-ed / irregular / were] , Subject + would / could / might + base verb",
      detailedContent: [
        "قواعد الحالة الشرطية الثانية (ص 61 - 62 من ملزمة الأستاذ مصطفى تركي):",
        "- نستخدم هذا النوع للتحدث عن شيء خيالي أو غير محتمل الحدوث في الحاضر أو المستقبل:",
        "  If + ماضي بسيط (Past Simple) , الفاعل + would / could / might + فعل مجرد",
        "  If I had enough money, I would buy a car. (لو كان لدي مال كافٍ لاشتريت سيارة - لكن في الواقع لا أملك ذلك).",
        "- النفي: في جملة If نستخدم (didn't + مجرد)، وفي جملة الجواب نستخدم (wouldn't / couldn't + مجرد):",
        "  I wouldn't have to spend so long on homework if I had a computer of my own.",
        "- قاعدة النصيحة التخيلية الشاذة مع were:",
        "  نستخدم were مع جميع الضمائر (بما فيها I و He و She) في الحالة الثانية:",
        "  If I were you, I would study hard. / If Jack were you, he could quit his job."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: إذا وجدت (would + مجرد) في جملة الجواب، فالفعل في جملة If يجب أن يكون ماضياً بسيطاً حتماً!",
        "انتبه لتصاريف الأفعال الشاذة الشائعة في الحالة الثانية: have -> had, win -> won, can -> could, shave -> shaved, play -> played.",
        "تختصر would إلى ('d): I'd buy a car."
      ],
      commonMistakes: [
        "استخدام would داخل جملة If.",
        "كتابة was بدلاً من were في جملة النصيحة الشهيرة (If I were you).",
        "نسيان تحويل الفعل بعد If إلى الماضي."
      ],
      examples: [
        {
          en: "If I had lots of money, I would buy a racehorse.",
          ar: "لو كان لدي الكثير من المال، لاشتريت حصان سباق.",
          highlight: "had ... would buy",
          note: "تمرين B ص 56 كتاب النشاط"
        },
        {
          en: "She would look much nicer if she wore contact lenses instead of glasses.",
          ar: "لبدت أجمل بكثير لو أنها ارتدت عدسات لاصقة بدلاً من النظارات.",
          highlight: "would look ... wore",
          note: "وزاري 2017 و 2020"
        }
      ],
      exercises: [
        {
          id: "u3-l3-ex1",
          question: "If I (be) you, I would study hard for the exam. (Correct)",
          options: ["were", "was", "am", "have been"],
          correctAnswer: "were",
          explanation: "في الحالة الشرطية الثانية للتعبير عن النصيحة التخيلية نستخدم were مع الفاعل I.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        },
        {
          id: "u3-l3-ex2",
          question: "If my father knew that I drive so fast, he (be) furious.",
          options: ["would be", "will be", "was", "is"],
          correctAnswer: "would be",
          explanation: "جملة If في الماضي البسيط (knew)، فجواب الشرط يكون would + مجرد (would be).",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور ثانٍ"
        }
      ]
    },
    {
      id: "u3-l4",
      unitId: 3,
      lessonNumber: 4,
      titleAr: "الدرس الرابع: الكلام المنقول والأسئلة المنقولة وأفعال الإبلاغ",
      titleEn: "Lesson 4: Reported Speech, Questions & Reporting Verbs",
      category: "grammar",
      summary: "تحويل الجمل والأسئلة من المباشر إلى غير المباشر (Reported Speech & Questions)، خطوات تغيير الضمائر والأزمنة، وأفعال الإبلاغ (Reporting Verbs).",
      grammarRuleFormula: "Reported Statement: Subj + said that / told [person] that + shifted clause\nReported Question: Subj + asked [me/her/him] + Wh-word / if + Subject + Past Verb\nReporting Verbs: suggested + v-ing | promised / advised / agreed / refused + to + inf",
      detailedContent: [
        "1. الجمل الخبرية المنقولة (ص 63 من الملزمة):",
        "- Ali said: 'I am tired.' -> Ali said that he was tired.",
        "- Mum told Bilal that it was time to get up.",
        "2. الأسئلة المنقولة (Reported Questions) - ص 64 - 67:",
        "- نبدأ بـ: فاعل + asked + المفعول به (me, her, him).",
        "- أداة الربط: إذا بدأ السؤال بأداة استفهام (What, Where, When, How long) ننزلها كما هي. وإذا بدأ بفعل مساعد (Do, Did, Can, Is, Are, Have) نستخدم (if).",
        "- ترتيب الجملة يتحول من صيغة سؤال إلى إثبات: (فاعل ثم فعل ماضٍ).",
        "- تحذف أفعال العمل المساعدة (do, does, did). وإذا حذفت did نحول الفعل إلى ماضٍ تام (had + p.p).",
        "3. جدول تحويل الأزمنة (ص 66):",
        "- مضارع بسيط -> ماضي بسيط (want -> wanted, know -> knew).",
        "- مضارع مستمر -> ماضي مستمر (is reading -> was reading).",
        "- ماضي بسيط -> ماضي تام (made -> had made, didn't phone -> had not phoned).",
        "- مضارع تام -> ماضي تام (have/has -> had + p.p).",
        "- will -> would | can -> could | must / have to -> had to.",
        "4. أفعال الإبلاغ (Reporting Verbs) - ص 68:",
        "- suggested + فعل مضاف له ing: Omar suggested taking a taxi.",
        "- promised + to + فعل مجرد: Adam promised to help with the bags.",
        "- advised + to / not to + فعل مجرد: Zainab advised not to get home late.",
        "- agreed + to + فعل مجرد: Samir agreed to do my homework.",
        "- refused + to + فعل مجرد: Mays refused to travel with me."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: في السؤال المنقول، يتحول الضمير (you) حسب المفعول به بعد asked:",
        "- asked me -> يتحول you إلى I، و your إلى my.",
        "- asked her / Zainab -> يتحول you إلى she، و your إلى her.",
        "- asked him / Faisal -> يتحول you إلى he، و your إلى his.",
        "تذكر دائماً: في السؤال المنقول الفاعل يسبق الفعل! (He asked me what I was doing وليس what was I doing)."
      ],
      commonMistakes: [
        "إبقاء صيغة السؤال بتقديم الفعل المساعد على الفاعل.",
        "نسيان تحويل الأزمنة خطوة إلى الماضي.",
        "نسيان تحويل did إلى had + p.p."
      ],
      examples: [
        {
          en: "“How long have you been flying?” Mike asked me. -> Mike asked me how long I had been flying.",
          ar: "كم مضى عليك وأنت تطير؟ -> سألني مايك كم مضى علي وأنا أطير.",
          highlight: "how long I had been flying",
          note: "وزاري 2016 دور أول"
        },
        {
          en: "“Can you swim?” Martha asked me. -> Martha asked me if I could swim.",
          ar: "هل تستطيع السباحة؟ -> سألتني مارثا إن كنت أستطيع السباحة.",
          highlight: "if I could swim",
          note: "وزاري 2020 تمهيدي"
        },
        {
          en: "Omar: 'Why don't you take a taxi?' -> Omar suggested taking a taxi.",
          ar: "اقترح عمر أخذ سيارة أجرة.",
          highlight: "suggested taking",
          note: "أفعال الإبلاغ ص 68"
        }
      ],
      exercises: [
        {
          id: "u3-l4-ex1",
          question: "“Where did you lose your purse?” I asked her. (Reported question)",
          options: [
            "I asked her where she had lost her purse.",
            "I asked her where did she lose her purse.",
            "I asked her where she lost her purse.",
            "I asked her if she lost her purse."
          ],
          correctAnswer: "I asked her where she had lost her purse.",
          explanation: "حذفت did وتحول الفعل إلى ماضٍ تام (had lost)، وتحول you إلى she و your إلى her.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور ثانٍ"
        },
        {
          id: "u3-l4-ex2",
          question: "“What are you doing?” He asked me. (Reported question)",
          options: [
            "He asked me what I was doing.",
            "He asked me what was I doing.",
            "He asked me if I was doing.",
            "He asked me what you were doing."
          ],
          correctAnswer: "He asked me what I was doing.",
          explanation: "الفاعل I يسبق الفعل الماضي was doing والأداة what تبقى كما هي.",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور أول"
        }
      ]
    },
    {
      id: "u3-l5",
      unitId: 3,
      lessonNumber: 5,
      titleAr: "الدرس الخامس: أسلوب الندم (Regret with If only & I wish)",
      titleEn: "Lesson 5: Expressing Regret (If only & I wish)",
      category: "grammar",
      summary: "التعبير عن الندم على أحداث وقعت أو لم تقع في الماضي باستخدام (If only / I wish) وقاعدة الماضي التام (had / hadn't + p.p).",
      grammarRuleFormula: "If only / I wish + Subject + had + p.p. (إذا كانت الجملة الأصلية منفية)\nIf only / I wish + Subject + hadn't + p.p. (إذا كانت الجملة الأصلية مثبتة)",
      detailedContent: [
        "قواعد أسلوب الندم (ص 71 - 74 من ملزمة الأستاذ مصطفى تركي):",
        "- للتعبير عن الندم عن شيء حصل أو لم يحصل في الماضي نستخدم:",
        "  If only أو I wish + فاعل + ماضي تام بسيط (had / hadn't + p.p).",
        "- خطوات الحل الوزاري:",
        "  1) نحذف عبارات البداية والتعليل: Unfortunately, That's why, Now, as a result.",
        "  2) إذا كانت الجملة الأصلية مثبتة، نحلها بالنفي: (hadn't + p.p).",
        "  3) إذا كانت الجملة الأصلية منفية، نحلها بالإثبات: (had + p.p).",
        "  4) تحويل الضمائر: يتحول (you) إلى (I)، و (your) إلى (my). أما بقية الضمائر فتبقى كما هي.",
        "أمثلة وزارية نموذجية:",
        "- Unfortunately, I ate three bars of chocolate. That's why I felt sick.",
        "  -> If only I hadn't eaten three bars of chocolate. (مكرر وزاري)",
        "- Unfortunately, he fell over during the race. That's why he didn't win.",
        "  -> I wish he hadn't fallen over.",
        "- You didn't study well for the exam. That's why you failed.",
        "  -> If only I had studied well for the exam."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قاعدة الندم عكسية تماماً: الجملة المثبتة تأخذ hadn't، والجملة المنفية تأخذ had!",
        "عند وجود جملتين مفصولتين بنقطة أو That's why، نحذف الجملة الثانية تماماً ونطبق الندم على الجملة الأولى فقط.",
        "احفظ تصاريف p.p الشائعة: eat -> eaten, buy -> bought, wake -> woken, lose -> lost, bring -> brought."
      ],
      commonMistakes: [
        "حل الجملة المثبتة بإثبات، أو المنفية بنفي.",
        "نسيان تحويل you إلى I.",
        "تطبيق الندم على جملة النتيجة (That's why) بدلاً من جملة السبب الأولى."
      ],
      examples: [
        {
          en: "Unfortunately, I spent all my money at the weekend. That's why I can't buy those shoes. -> I wish I hadn't spent all my money.",
          ar: "للأسف أنفقت كل مالي في العطلة -> أتمنى لو أنني لم أنفق كل مالي.",
          highlight: "I wish I hadn't spent",
          note: "تمرين B ص 60 كتاب النشاط"
        },
        {
          en: "You drank a lot of coffee. Now you are in bed, and you can't sleep. -> If only I hadn't drunk so much coffee.",
          ar: "شربت الكثير من القهوة -> أتمنى لو لم أشرب الكثير من القهوة.",
          highlight: "If only I hadn't drunk",
          note: "تمرين ص 71 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u3-l5-ex1",
          question: "Unfortunately, I ate three bars of chocolate. (Express regret using 'If only')",
          options: [
            "If only I hadn't eaten three bars of chocolate.",
            "If only I had eaten three bars of chocolate.",
            "If only I didn't eat three bars of chocolate.",
            "If only I wasn't eating three bars of chocolate."
          ],
          correctAnswer: "If only I hadn't eaten three bars of chocolate.",
          explanation: "الجملة الأصلية مثبتة فتحل بالماضي التام المنفي: hadn't eaten.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u3-l5-ex2",
          question: "You didn't wake up early. That's why you missed your bus. (Use 'I wish')",
          options: [
            "I wish I had woken up early.",
            "I wish I hadn't woken up early.",
            "I wish I woke up early.",
            "I wish you had woken up early."
          ],
          correctAnswer: "I wish I had woken up early.",
          explanation: "الجملة منفية (didn't wake) فتحل بالإثبات (had woken) مع تحويل you إلى I.",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور ثانٍ"
        }
      ]
    },
    {
      id: "u3-l6",
      unitId: 3,
      lessonNumber: 6,
      titleAr: "الدرس السادس: الحالة الشرطية الثالثة (Third Conditional)",
      titleEn: "Lesson 6: Third Conditional",
      category: "grammar",
      summary: "الحالة الشرطية الثالثة للتعبير عن أحداث مستحيلة الوقوع في الماضي والندم الافتراضي (If + past perfect, would/could/might have + p.p).",
      grammarRuleFormula: "If + Past Perfect [had + p.p.] , Subject + would / could / might + have + Past Participle [p.p.]",
      detailedContent: [
        "قواعد الحالة الشرطية الثالثة (ص 74 - 75 من ملزمة الأستاذ مصطفى تركي):",
        "- نستخدم هذا النوع للتحدث عن شيء تخيلي أو ندم على شيء لم يحصل أو حصل في الماضي واستحال تغييره:",
        "  If + ماضي تام (had / hadn't + p.p) , الفاعل + would / could / might + have + تصريف ثالث (p.p).",
        "  If we had known about the problem yesterday, we could have solved it.",
        "  (لو علمنا بالمشكلة بالأمس لكنا حللناها - لكننا لم نعلم ولم نحلها).",
        "  I would have helped you if you had told me about your problem.",
        "  (كنت سأساعدك لو أنك أخبرتني بمشكلتك).",
        "أمثلة وتمارين وزارية هامة (تمرين B ص 62 وتمرين C ص 73 كتاب النشاط):",
        "- If I had known about her problems, I would have lent her some money.",
        "- If we had left a little earlier, we wouldn't have missed the bus.",
        "- If Nour hadn't got a loan, he wouldn't have been able to buy a car.",
        "- If I had known it was raining when I left, I would have brought an umbrella."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: الحالة الثالثة تميزها بوجود (had + p.p) في طرف و (would have + p.p) في الطرف الآخر!",
        "انتبه: have بعد would ثابتة ولا تتحول أبداً إلى had، حتى مع المفرد لا نقول has وإنما have دائماً.",
        "نفي الماضي التام: hadn't + p.p. ونفي الجواب: wouldn't have + p.p."
      ],
      commonMistakes: [
        "نسيان have في شق جواب الشرط (كتابة would + p.p بدلاً من would have + p.p).",
        "كتابة had بدلاً من have بعد would.",
        "الخلط بين الحالة الثانية (would + مجرد) والحالة الثالثة (would have + p.p)."
      ],
      examples: [
        {
          en: "If you had stayed in bed and rested, you (would have got) better more quickly.",
          ar: "لو أنك بقيت في السرير واسترحت، لتحسنت بسرعة أكبر.",
          highlight: "had stayed ... would have got",
          note: "وزاري 2016 دور أول"
        },
        {
          en: "If I hadn't had the operation, I would have died.",
          ar: "لو لم أجرِ العملية، لمت.",
          highlight: "hadn't had ... would have died",
          note: "وزاري 2019 تمهيدي"
        }
      ],
      exercises: [
        {
          id: "u3-l6-ex1",
          question: "If we had left a little earlier, we (not miss) the bus. (Correct the verb)",
          options: ["wouldn't have missed", "won't miss", "wouldn't miss", "hadn't missed"],
          correctAnswer: "wouldn't have missed",
          explanation: "جملة If ماضي تام (had left)، فجواب الشرط حالة ثالثة: wouldn't have missed.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u3-l6-ex2",
          question: "If you had remembered to set your alarm, you _________ up so late.",
          options: ["wouldn't have woken", "won't wake", "wouldn't wake", "didn't wake"],
          correctAnswer: "wouldn't have woken",
          explanation: "حالة شرطية ثالثة: would have + p.p (wouldn't have woken).",
          type: "mcq",
          ministerialYear: "تمرين C ص 70"
        }
      ]
    },
    {
      id: "u3-l7",
      unitId: 3,
      lessonNumber: 7,
      titleAr: "الدرس السابع: اشتقاق الصفات من الأسماء",
      titleEn: "Lesson 7: Forming Adjectives from Nouns",
      category: "vocabulary",
      summary: "اشتقاق الصفات بإضافة اللواحق المناسبة للأسماء (تمرين C ص 65 كتاب النشاط).",
      grammarRuleFormula: "Noun => Adjective:\nqualification -> qualified | residence -> residential | comfort -> comfortable | experience -> experienced | tailor -> tailored | friend -> friendly",
      detailedContent: [
        "اشتقاق الصفات من الأسماء (ص 76 من ملزمة الأستاذ مصطفى تركي):",
        "1. qualification (مؤهل) -> qualified (مؤهل/كفوء).",
        "2. residence (سكن) -> residential (سكني).",
        "3. comfort (راحة) -> comfortable (مريح).",
        "4. experience (خبرة) -> experienced (ذو خبرة).",
        "5. tailor (خياط) -> tailored (مفصل/مخصص).",
        "6. friend (صديق) -> friendly (ودود).",
        "جمل التطبيق:",
        "- All our teachers are qualified.",
        "- Our residential accommodation includes three meals a day.",
        "- The rooms are very comfortable.",
        "- There is an experienced site manager.",
        "- Our tailored lessons will help you learn quickly.",
        "- All our staff members are really friendly."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي هذه المشتقات في سؤال الإملاء أو الإسقاطات الوزاري سنوياً."
      ],
      commonMistakes: [
        "الخطأ في كتابة residential بإضافة l أو تكرار الحروف.",
        "الخلط بين comfortable و convenient."
      ],
      examples: [
        {
          en: "Our (residential / residence) accommodation includes three meals a day.",
          ar: "يشمل سكننا الإقامي ثلاث وجبات يومياً.",
          highlight: "residential accommodation",
          note: "تمرين C ص 65"
        }
      ],
      exercises: [
        {
          id: "u3-l7-ex1",
          question: "The rooms are very _________ (comfort) and have a desk and a bathroom.",
          options: ["comfortable", "comforting", "comforted", "comfortless"],
          correctAnswer: "comfortable",
          explanation: "الصفة المشتقة من comfort هي comfortable (مريح).",
          type: "mcq",
          ministerialYear: "تمرين C ص 65"
        }
      ]
    },
    {
      id: "u3-l10",
      unitId: 3,
      lessonNumber: 10,
      titleAr: "الدرس العاشر: قطعة سميرة المحمود (المترجمة الفورية)",
      titleEn: "Lesson 10: Samira Al Mahmoud (Conference Interpreter)",
      category: "reading",
      summary: "قطعة الكتاب الرسمية للمترجمة الفورية سميرة المحمود: مؤتمر النفط في أبوظبي، العمل الحر (freelance)، مهارات المترجم، الترجمة تحت الضغط، وأهمية اللغة العربية.",
      grammarRuleFormula: "Key Vocabulary:\nfreelance = working when you want and for the organization you want\nunder pressure = in a difficult situation\nconvey the sense = give an idea of the meaning\nbooth = box-like room where interpreters work\nheadphones = listen privately",
      detailedContent: [
        "قطعة الكتاب الرسمية: سميرة المحمود (ص 76 - 81 من ملزمة الأستاذ مصطفى تركي):",
        "- سميرة المحمود: مترجمة مؤتمرات فورية (conference interpreter) من الإنجليزية إلى العربية في فندق هيلتون بأبوظبي خلال مؤتمر النفط العربي السنوي.",
        "- ولدت في بريطانيا من والدين عراقيين، وتحدثت العربية في المنزل والإنجليزية في المدرسة.",
        "- حصلت على شهادة في اللغة العربية من جامعة لندن، ثم دبلوم دراسات عليا في الترجمة الفورية (postgraduate diploma in conference interpreting). كانت الدورة صعبة واجتازها 50% فقط من الطلاب.",
        "- تعمل بشكل مستقل (freelance): تعمل فقط متى تشاء وللمنظمة التي ترغب بالعمل معها (مثل الأمم المتحدة، البنك الدولي، اليونسكو). تكسب حوالي 450 جنيهاً إسترلينياً في اليوم.",
        "- يعمل المترجمون في أزواج داخل الغرفة (booth) لتبادل الأدوار (take turns) وتدوين الأرقام الصعبة لتخفيف التوتر والجهد (less stressful).",
        "- أهم صفة في المترجم الفوري: البقاء هادئاً تحت الضغط (remaining calm under pressure) ونقل المعنى العام (convey the sense) حتى لو غابت عنه كلمة معينة، والتفكير السريع (thinking fast).",
        "- ترجمت المثل الشعبي 'أكل العنب حبة حبة' بذكاء إلى: 'One step at a time' لتوضيح المعنى للمستمع الإنجليزي.",
        "- اللغة العربية لغة مطلوبة جداً، ومن يترجم من العربية إلى الإنجليزية لن يكون عاطلاً عن العمل أبداً."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة سميرة المحمود من الثوابت الوزارية بالسؤال الأول فرع B في كل دور تقريباً.",
        "سؤال وزاري رئيسي: What is the most important quality in an interpreter? الجواب: Remaining calm under pressure.",
        "سؤال وزاري: What does working freelance mean? الجواب: It means you work when you want to and for the organization that you want to work for.",
        "سؤال وزاري: Why should interpreters read newspapers? الجواب: To have good general knowledge and know what is going on in the world."
      ],
      commonMistakes: [
        "القول بأن لغة سميرة النشطة هي الإنجليزية؛ والصحيح أن لغتها النشطة هي العربية (Arabic).",
        "القول بأن المترجم يجب أن يترجم كل كلمة حرفياً (literally)؛ وهذا خطأ لأن الترجمة الحرفية تضيع المعنى.",
        "القول بأن العمل الحر يعني البقاء دائماً في المكتب؛ والصحيح أنه يعني العمل متى تشاء ومع من تشاء."
      ],
      examples: [
        {
          en: "What is the most important quality in an interpreter? Remaining calm under pressure.",
          ar: "ما هي أهم صفة للمترجم؟ البقاء هادئاً تحت الضغط.",
          highlight: "Remaining calm under pressure",
          note: "وزاري مكرر ص 80"
        },
        {
          en: "Samira's active language is Arabic. (True / False) -> True.",
          ar: "اللغة النشطة لسميرة هي العربية -> صح.",
          highlight: "active language is Arabic",
          note: "وزاري 2017 و 2021"
        },
        {
          en: "How did Samira translate 'Akl il-inab habba habba'? -> One step at a time.",
          ar: "كيف ترجمت سميرة 'أكل العنب حبة حبة'؟ -> خطوة تلو الأخرى (بتأنٍ).",
          highlight: "One step at a time",
          note: "تمرين A ص 68 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u3-l10-ex1",
          question: "What does 'freelance' mean?",
          options: [
            "It means you work when you want to and for the organization that you want to work for.",
            "It means people who can't bear to be away from the office.",
            "It means working for free without money.",
            "It means having only one permanent employer."
          ],
          correctAnswer: "It means you work when you want to and for the organization that you want to work for.",
          explanation: "العمل الحر يعني العمل في الأوقات التي تختارها وللجهات التي تختارها.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u3-l10-ex2",
          question: "To train as an interpreter, you need to get a degree in English and then a _________ in interpreting.",
          options: ["postgraduate diploma", "licence", "membership", "passport"],
          correctAnswer: "postgraduate diploma",
          explanation: "المسار المهني للترجمة: شهادة جامعية ثم دبلوم دراسات عليا في الترجمة (postgraduate diploma).",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور أول"
        },
        {
          id: "u3-l10-ex3",
          question: "The box-like room where interpreters work is called a _________.",
          options: ["booth", "stage", "canteen", "library"],
          correctAnswer: "booth",
          explanation: "الغرفة الشبيهة بالصندوق التي يعمل بها المترجمون تسمى مقصورة (booth).",
          type: "mcq",
          ministerialYear: "تمرين D ص 69"
        }
      ]
    }
  ]
};
