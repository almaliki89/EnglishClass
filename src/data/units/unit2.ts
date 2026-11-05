import { Unit } from '../../types';

export const UNIT_2: Unit = {
  id: 2,
  number: 2,
  titleAr: "الوحدة الثانية: القانون، واجبات الشرطة، والرادار",
  titleEn: "Unit 2: Law, Police Duties & Radar",
  description: "الأسماء المركبة، واجبات ضابط الشرطة، الضرورة والمنع (Must, Have to, Need to, Mustn't)، الوظائف اللغوية الخمس (نصيحة، طلب مؤدب، اقتراح، عرض، توقع)، الاختصارات، قصة السرقة، الأفعال السببية (Have, Get, Make)، كتيب سلامة المنازل، وقطعة الرادار الوزارية.",
  accentColor: "from-emerald-600 to-teal-600",
  bgGradient: "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200",
  lessons: [
    {
      id: "u2-l1",
      unitId: 2,
      lessonNumber: 1,
      titleAr: "الدرس الأول: الأسماء المركبة في الأمن والمرور",
      titleEn: "Lesson 1: Compound Nouns for Security & Traffic",
      category: "vocabulary",
      summary: "حفظ الأسماء المركبة (Compound Nouns) المكونة من كلمتين والخاصة بأنظمة السلامة والمطارات والمرور كما وردت بصفحة 32 من الملزمة.",
      grammarRuleFormula: "Noun + Noun => Compound Noun\nSecurity Camera, Metal Detector, Radar Speed Gun, Speed Limit, Conveyor Belt",
      detailedContent: [
        "الأسماء المركبة في المنهج الوزاري (ص 32 من ملزمة الأستاذ مصطفى تركي):",
        "1. Security Camera = كاميرا أمنية / كاميرا مراقبة.",
        "2. Footprint = أثر القدم.",
        "3. Fingerprint = بصمة إصبع.",
        "4. Crime Scene = مسرح الجريمة.",
        "5. Metal Detector = كاشف المعادن.",
        "6. Speed Limit = الحد الأقصى للسرعة.",
        "7. Speeding Ticket = مخالفة سرعة.",
        "8. Radar Speed Gun = رادار قياس السرعة.",
        "9. Conveyor Belt = حزام ناقل للأمتعة.",
        "10. Security Guard = حارس أمن.",
        "11. X-Ray Machine = آلة فحص بأشعة إكس."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي هذه الأسماء المركبة في الامتحان الوزاري بالسؤال الثالث فرع B إما على شكل اختيارات أو توصيل كلمات من قائمتين.",
        "احفظ كتابة الكلمات إملائياً لأن بعضها قد يأتي في سؤال الإملاء فرع C."
      ],
      commonMistakes: [
        "الخلط بين Speed limit (حد السرعة) و Speeding ticket (وصل مخالفة السرعة).",
        "الخلط بين Footprint (أثر القدم) و Fingerprint (بصمة الإصبع)."
      ],
      examples: [
        {
          en: "The police found fingerprints and footprints at the crime scene.",
          ar: "عثرت الشرطة على بصمات أصابع وآثار أقدام في مسرح الجريمة.",
          highlight: "fingerprints and footprints at the crime scene",
          note: "تمرين وزاري مكرر"
        },
        {
          en: "Put your luggage on the conveyor belt to be checked by the X-ray machine.",
          ar: "ضع حقائبك على الحزام الناقل لتفحصها آلة الأشعة السينية.",
          highlight: "conveyor belt / X-ray machine",
          note: "ص 32"
        }
      ],
      exercises: [
        {
          id: "u2-l1-ex1",
          question: "Drivers must not exceed the speed _________ on highways.",
          options: ["limit", "ticket", "gun", "belt"],
          correctAnswer: "limit",
          explanation: "المصطلح المركب للسرعة المحددة قانونياً هو speed limit.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور ثانٍ"
        },
        {
          id: "u2-l1-ex2",
          question: "Police officers use a _________ to catch drivers who speed.",
          options: ["radar speed gun", "security camera", "conveyor belt", "metal detector"],
          correctAnswer: "radar speed gun",
          explanation: "الجهاز المستخدم لكشف سرعة السائقين هو مسدس رادار السرعة (radar speed gun).",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور أول"
        }
      ]
    },
    {
      id: "u2-l2",
      unitId: 2,
      lessonNumber: 2,
      titleAr: "الدرس الثاني: واجبات ضابط الشرطة وقواعد الإلزام والمنع",
      titleEn: "Lesson 2: Police Duties & Modals of Necessity / Prohibition",
      category: "reading",
      summary: "قطعة استيعاب واجبات ضابط الشرطة (A police officer's duties)، وقواعد الإلزام (Must, Have to, Need to)، والمنع (Mustn't)، وعدم الإلزام (Don't have to, Needn't).",
      grammarRuleFormula: "Necessity (إلزام): must / have to / need to + base verb\nProhibition (منع قطعي): mustn't + base verb\nNo necessity (لا حاجة): don't have to / doesn't have to / needn't + base verb",
      detailedContent: [
        "1. قطعة واجبات ضابط الشرطة (ص 32 - 35 من الملزمة):",
        "- يجب على الناس اتباع القانون لكي نتمكن جميعاً من العيش بأمان (so that we can all live together safely).",
        "- واجبات ضباط الشرطة: تنظيم المرور (direct traffic)، قياس سرعة السيارات بالرادار (radar speed guns)، التأكد من ارتداء أحزمة الأمان (seat belts)، التحقيق في الجرائم (investigate crimes)، البحث عن الأدلة (evidence like fingerprints and footprints)، ومساعدة التائهين وإعطائهم الاتجاهات (ask for directions).",
        "2. قواعد الإلزام والمنع (ص 36 - 37):",
        "- الإلزام والضرورة (Necessity): نستخدم must أو have to أو need to عندما يكون الشيء إجبارياً وقانونياً: Drivers must obey the speed limit.",
        "- المنع والتحريم (Prohibition): نستخدم mustn't عندما يكون الشيء ممنوعاً أو خطيراً أو يعاقب عليه القانون: You mustn't drive without your seat belt. / You mustn't smoke in hospitals.",
        "- عدم الحاجة (Lack of Necessity): نستخدم don't have to / doesn't have to أو needn't عندما يكون الأمر اختيارياً ولا توجد حاجة له: There is petrol in the car, so you don't have to go to the petrol station. / You needn't give me a lift; I'll take the bus."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: كلمة (needn't) يأتي بعدها فعل مجرد مباشرة بدون (to)! نقول: You needn't go وليس You needn't to go.",
        "عندما ترى خطراً، كسر قانون، أو حريق، أو تدخين في المستشفى، فالجواب حتماً (mustn't).",
        "عندما تجد بدائل مريحة (مثل: يوجد وقود كافٍ، أو سأستقل الحافلة)، فالجواب هو (needn't / don't have to)."
      ],
      commonMistakes: [
        "إضافة to بعد needn't (خطأ شائع جداً).",
        "استخدام mustn't عند التخيير، بينما mustn't تعني منعاً باتاً وعقوبة.",
        "نسيان أن have to تأخذ don't have to مع الجمع و doesn't have to مع المفرد."
      ],
      examples: [
        {
          en: "Why do people have to follow the law? So that we can all live together safely.",
          ar: "لماذا يجب على الناس اتباع القانون؟ لكي نتمكن جميعاً من العيش بأمان معاً.",
          highlight: "live together safely",
          note: "سؤال وزاري مكرر ص 33"
        },
        {
          en: "Please put out your cigarette. You mustn't smoke in the police station.",
          ar: "رجاءً أطفئ سيجارتك. يمنع التدخين في مركز الشرطة.",
          highlight: "mustn't smoke",
          note: "تمرين F ص 31 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u2-l2-ex1",
          question: "You are driving too fast! You (have to / needn't) slow down.",
          options: ["have to", "needn't"],
          correctAnswer: "have to",
          explanation: "السرعة العالية خطيرة وتتطلب إلزاماً بإبطاء السرعة (have to).",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u2-l2-ex2",
          question: "You (mustn't / don't have to) smoke in hospitals.",
          options: ["mustn't", "don't have to"],
          correctAnswer: "mustn't",
          explanation: "التدخين في المستشفيات ممنوع قانونياً وخطير، فنستخدم أداة التحريم والمنع (mustn't).",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور ثانٍ"
        },
        {
          id: "u2-l2-ex3",
          question: "There is petrol in the car, so you (must / needn't) go to the petrol station.",
          options: ["needn't", "must"],
          correctAnswer: "needn't",
          explanation: "بما أن البنزين متوفر في السيارة، فلا توجد حاجة للذهاب لمحطة الوقود (needn't).",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور أول"
        }
      ]
    },
    {
      id: "u2-l3",
      unitId: 2,
      lessonNumber: 3,
      titleAr: "الدرس الثالث: الوظائف اللغوية الخمسة وتعاريف المطار",
      titleEn: "Lesson 3: 5 Language Functions & Airport Vocabulary",
      category: "grammar",
      summary: "القواعد الوزارية الخمس: إعطاء النصيحة (Advice)، الطلب المؤدب (Polite Requests)، الاقتراحات (Suggestions)، تقديم العروض (Offers)، والتوقعات (Expectations)، مع مصطلحات المطار والأمتعة.",
      grammarRuleFormula: "1. Advice: You should / shouldn't + base verb\n2. Polite Request: Would you / Could you / Can you / May I + base verb ... please?\n3. Suggestions: Shall we / Let's / We could + base verb\n4. Offers: Would you like me to + base verb? / Shall I + base verb? / I'll + base verb\n5. Expectations: Subject + should / shouldn't + base verb",
      detailedContent: [
        "الوظائف اللغوية الوزارية (ص 38 - 43 من ملزمة الأستاذ مصطفى تركي):",
        "1. إعطاء النصيحة (Giving Advice): You should / shouldn't + فعل مجرد.",
        "   مثال: You should keep your passport in a safe place.",
        "2. الطلب المؤدب (Making Polite Requests):",
        "   - Would you + فعل مجرد ... please? / Could you + فعل مجرد ... please?",
        "   - Can you + فعل مجرد ... please?",
        "   - May I + فعل مجرد ... please? (نستخدم May I عندما يكون في الجملة your فقط مثل see your ticket).",
        "3. تقديم الاقتراحات (Making Suggestions):",
        "   - Shall we + فعل مجرد؟ / Let's + فعل مجرد. / We could + فعل مجرد.",
        "4. تقديم العروض (Making Offers):",
        "   - Would you like me to + فعل مجرد؟ / Shall I + فعل مجرد؟ / I'll + فعل مجرد.",
        "5. التوقعات (Making Expectations):",
        "   - طريقة الحل: نحذف I think ونضع should + الفعل المجرد.",
        "   - نحذف I don't think ونضع shouldn't + الفعل المجرد.",
        "   - نحذف will أو 'll إن وجدت.",
        "   مثال: I've studied hard for the test, so I think I'll pass. -> I should pass.",
        "6. تعاريف المطار والأمتعة (ص 43 - 44):",
        "- empty = there is nothing in it (فارغ).",
        "- dispose of = throw away / get rid of (يتخلص من).",
        "- unattended = without someone looking after it (متروك بلا مراقبة).",
        "- declare = say you are carrying something to pay duty on (يفصح عن).",
        "- baggage = bags and suitcases that carry your possessions (حقائب السفر)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: في قاعدة التوقع: إذا كانت الجملة الأصلية تحتوي على (is / are / am) بعد think، فعند التحويل تتحول إلى (should be).",
        "مثال: This is a new computer, so I think it is faster. -> It should be faster.",
        "تأتي تعاريف المطار (unattended, baggage, declare) في السؤال الثالث فرع B سنوياً!"
      ],
      commonMistakes: [
        "إبقاء كلمة think أو don't think في جملة التوقع بعد التحويل.",
        "نسيان حذف will عند إدخال should في التوقع.",
        "استخدام May I مع جملة فيها me (مثل: give me your passport - هنا نستخدم Would you أو Could you)."
      ],
      examples: [
        {
          en: "Help you with your baggage. (Offer) -> Would you like me to help you with your baggage?",
          ar: "مساعدتك بحقائبك (عرض) -> هل ترغب بأن أساعدك بحقائبك؟",
          highlight: "Would you like me to help",
          note: "وزاري 2016 دور أول"
        },
        {
          en: "You like exercising, so I don't think you'll have trouble getting fit. (Expectation) -> You shouldn't have trouble getting fit.",
          ar: "تحب ممارسة الرياضة، لذلك لا أتوقع أن تواجه صعوبة في الرشاقة -> لا ينبغي أن تواجه صعوبة.",
          highlight: "You shouldn't have trouble",
          note: "تمرين وزاري مكرر ص 39"
        }
      ],
      exercises: [
        {
          id: "u2-l3-ex1",
          question: "give me your passport. (Make a polite request)",
          options: [
            "Would you give me your passport, please?",
            "Shall we give me your passport?",
            "May I give you your passport?",
            "You should give me your passport."
          ],
          correctAnswer: "Would you give me your passport, please?",
          explanation: "صيغة الطلب المؤدب للطلب من شخص آخر: Would you / Could you + مجرد.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور ثانٍ"
        },
        {
          id: "u2-l3-ex2",
          question: "We left two hours early. We (should / shouldn't) miss the plane.",
          options: ["shouldn't", "should"],
          correctAnswer: "shouldn't",
          explanation: "بما أننا غادرنا قبل ساعتين مبكراً، فالتوقع المنطقي ألا تفوتنا الطائرة (shouldn't miss).",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور أول"
        },
        {
          id: "u2-l3-ex3",
          question: "without someone looking after it means _________.",
          options: ["unattended", "empty", "baggage", "declared"],
          correctAnswer: "unattended",
          explanation: "الشيء المتروك دون مراقبة أو عناية يسمى (unattended).",
          type: "mcq",
          ministerialYear: "تمرين A ص 32"
        }
      ]
    },
    {
      id: "u2-l4",
      unitId: 2,
      lessonNumber: 4,
      titleAr: "الدرس الرابع: الاختصارات الأمنية ومفردات مكافحة الجريمة",
      titleEn: "Lesson 4: Security Abbreviations & Crime-Fighting Tools",
      category: "spelling",
      summary: "حفظ الاختصارات الرسمية في الإعلانات الأمنية والوظائف، وإكمال الحروف المفقودة لوظائف الحماية وأدوات مكافحة الجريمة.",
      grammarRuleFormula: "Abbreviations in Advertisements (ص 44):\nbldgs = buildings | yrs = years | Spk = speak | lic = licence | co = company | appt = appointment | exp = experience",
      detailedContent: [
        "1. الاختصارات الرسمية (ص 44 من ملزمة الأستاذ مصطفى تركي):",
        "- Office bldgs. = office buildings (مباني مكاتب).",
        "- 18 yrs. = 18 years (18 سنة).",
        "- Spk. Engl. And Arab. = speak English and Arabic (يتحدث الإنكليزية والعربية).",
        "- avail. At wknds. = available at weekends (متاح في عطلة نهاية الأسبوع).",
        "- driving lic. = driving licence (إجازة سوق).",
        "- co. = company (شركة).",
        "- comp. = computer (حاسوب).",
        "- appt. = appointment (موعد).",
        "- exp. = experience (خبرة).",
        "- freq. = frequent (متكرر).",
        "2. مفردات الحماية والأمن (إكمال حروف العلة - تمرين A ص 46):",
        "- People who work to keep us safe: security guards, police officers, computer technicians, security experts, customs officers.",
        "- Tools to fight crime: metal detector, X-ray machine, radar speed gun.",
        "- Evidence: fingerprints, footprints, witness, interviews."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: في سؤال الإملاء الوزاري (سؤال 3 فرع C)، يأتي السؤال بصيغتين:",
        "1) إعطاء الاختصار ويطلب كتابة الكلمة كاملة: bldgs -> buildings, exp -> experience.",
        "2) إعطاء الكلمة كاملة ويطلب اختصارها: appointment -> appt., company -> co."
      ],
      commonMistakes: [
        "كتابة licence بدون حرف c أو كتابتها license الأمريكية، التزم بالإملاء البريطاني المعتمد في المنهج العراقي.",
        "نسيان النقطة بعد الاختصارات مثل: appt. و co."
      ],
      examples: [
        {
          en: "appt. -> appointment ; exp. -> experience",
          ar: "موعد -> appointment ؛ خبرة -> experience",
          highlight: "appt -> appointment",
          note: "وزاري 2017 و 2021"
        },
        {
          en: "company -> co. ; computer -> comp.",
          ar: "شركة -> co. ؛ حاسوب -> comp.",
          highlight: "company -> co.",
          note: "وزاري 2019 تمهيدي"
        }
      ],
      exercises: [
        {
          id: "u2-l4-ex1",
          question: "driving lic. -> driving _________ (Complete the abbreviation)",
          options: ["licence", "license", "line", "limit"],
          correctAnswer: "licence",
          explanation: "الاختصار lic. يعني رخصة أو إجازة (licence).",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u2-l4-ex2",
          question: "18 yrs. -> 18 _________ (Complete)",
          options: ["years", "yards", "yesterdays", "yields"],
          correctAnswer: "years",
          explanation: "الاختصار yrs. يرمز لكلمة سنوات (years).",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور ثانٍ"
        }
      ]
    },
    {
      id: "u2-l5",
      unitId: 2,
      lessonNumber: 5,
      titleAr: "الدرس الخامس: مفردات الجيش والوظائف العسكرية",
      titleEn: "Lesson 5: Military Vocabulary & Jobs",
      category: "vocabulary",
      summary: "المصطلحات الخاصة بالقطاعات العسكرية والخدمة الوطنية (branches, join, install, maintain, officer, supervise, civilian) وتوصيلاتها الوزارية.",
      grammarRuleFormula: "Military Terms:\nbranches = parts (فروع/أجزاء)\njoin = become a member (ينضم)\ninstall = put in (يثبت)\nmaintain = make sure it keeps working (يحافظ على/يصين)\nofficer = someone in a higher position (ضابط)\nsupervise = be in charge of (يشرف على)\ncivilian = outside the military (مدني)",
      detailedContent: [
        "المفردات العسكرية وتعاريفها الوزارية (ص 45 من الملزمة - تمرين A ص 36 كتاب النشاط):",
        "1. branches = parts (فروع: أجزاء المؤسسة العسكرية كالقوة البرية والبحرية والجوية).",
        "2. join = become a member (ينضم إلى الخدمة العسكرية).",
        "3. install = put in (يثبت أجهزة ومعدات).",
        "4. maintain = make sure it keeps working (يحافظ على المعدات ويتأكد من عملها).",
        "5. officer = someone in a higher position (ضابط: شخص في رتبة عسكرية رفيعة).",
        "6. supervise = be in charge of (يشرف على عمل الآخرين).",
        "7. civilian = outside the military (مدني: شخص خارج السلك العسكري).",
        "جمل التطبيق (تمرين A ص 48 كتاب النشاط):",
        "- The Land Force, the Navy and the Air Force are all branches of the military.",
        "- You must be 18 years old to join the military.",
        "- The military needs people to maintain its equipment and vehicles.",
        "- In the military, you can take a test to become an officer.",
        "- When you leave the military, your training can help you find a civilian job."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي هذه الكلمات في السؤال الثالث فرع B كتوصيل أو فرع A كإسقاطات، وأحياناً كاختيارات بين قوسين (officer / official) أو (branches / types).",
        "انتبه للفرق بين (maintain) و (care for): مع المعدات والمركبات نستخدم maintain."
      ],
      commonMistakes: [
        "اختيار official بدلاً من officer للشخص العسكري ذي الرتبة الرفيعة.",
        "اختيار criminal بدلاً من civilian للشخص خارج السلك العسكري."
      ],
      examples: [
        {
          en: "The military needs people to (care for / maintain) its equipment.",
          ar: "يحتاج الجيش لأشخاص لصيانة معداته ومركباته.",
          highlight: "maintain its equipment",
          note: "وزاري 2016 و 2021"
        },
        {
          en: "civilian means outside the military.",
          ar: "مدني يعني شخصاً خارج السلك العسكري.",
          highlight: "outside the military",
          note: "تمرين A ص 36 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u2-l5-ex1",
          question: "When you leave the military, your training can help you find a (criminal / civilian) job.",
          options: ["civilian", "criminal"],
          correctAnswer: "civilian",
          explanation: "التدريب العسكري يؤهلك للعمل في وظيفة مدنية (civilian job).",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        },
        {
          id: "u2-l5-ex2",
          question: "someone in a higher position in the military is an _________.",
          options: ["officer", "official", "actor", "author"],
          correctAnswer: "officer",
          explanation: "الشخص في المنصب الرفيع في الجيش هو الضابط (officer).",
          type: "mcq",
          ministerialYear: "تمرين A ص 36"
        }
      ]
    },
    {
      id: "u2-l6",
      unitId: 2,
      lessonNumber: 6,
      titleAr: "الدرس السادس: قصة السرقة والأفعال السببية (have, get, make)",
      titleEn: "Lesson 6: Robbery Story, Formal Words & Causative Verbs",
      category: "grammar",
      summary: "قصة السرقة ورسالة الفتاة سو، مرادفات الكلمات الرسمية وغير الرسمية، وشرح قواعد الأفعال السببية (have / get / make) بالكامل.",
      grammarRuleFormula: "Subject + have / get (in past: had / got) + Object + Past Participle (p.p)\nSubject + make (in past: made) + Object + Base Verb (infinitive)",
      detailedContent: [
        "1. قطعة واستيعاب السرقة (Robbery - ص 46 - 47 من الملزمة):",
        "- حدثت سرقة في منزل عائلة سميث في الساعة 11:00 ليلاً، سُرقت أموال ومجوهرات وحاسوب والد سو الذي احتوى على تقرير العلوم الخاص بها.",
        "- دخل اللص من نافذة الطابق الأرضي، وشاهدت امرأة رجلاً طويلاً في سترة زرقاء يهرب بسيارة حمراء.",
        "2. الكلمات الرسمية وغير الرسمية (تمرين C ص 39 كتاب النشاط):",
        "- occurred = happened (حدث / حصل).",
        "- injured = hurt (أصيب / تأذى).",
        "- alerted = called (أبلغ / نبه).",
        "- investigate = find out (يحقق / يكتشف).",
        "- property = things / stuff (ممتلكات / أغراض).",
        "- robber = burglar (لص / سارق).",
        "3. قواعد الأفعال السببية (Causative Verbs) - ص 48 - 50:",
        "- قاعدة have / get: نستخدمها عندما يقوم شخص آخر بعمل شيء لصالح الفاعل (نطلب خدمة أو نقع ضحية):",
        "  الفاعل + had / got + المفعول به + تصريف ثالث للفعل (p.p).",
        "  مثال: I asked somebody to cut my hair. -> I had my hair cut.",
        "  مثال: Somebody stole their television. -> They had their television stolen.",
        "- قاعدة make: نستخدمها عندما يتسبب شيء أو شخص بحدوث فعل معين (سبب ونتيجة):",
        "  الفاعل السبب + made + المفعول به + فعل مجرد خالٍ من أي إضافة.",
        "  مثال: The leaves fell because of the wind. -> The wind made the leaves fall.",
        "  مثال: He looked outside because he heard a noise. -> The noise made him look outside."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تذكر أن (have و get) يأخذان تصريفاً ثالثاً (p.p)، بينما (make) يأخذ فعلاً مجرداً (base verb)!",
        "عند التحويل لقاعدة make: نحول الفعل الماضي (fell, looked) إلى مجرد (fall, look).",
        "إذا وجدنا told somebody to، نحذف told ونضع made ونحذف to: My mother told me to clean -> My mother made me clean."
      ],
      commonMistakes: [
        "وضع فعل مجرد بعد had/got أو وضع تصريف ثالث بعد made.",
        "نسيان تحويل الفعل إلى زمن الماضي (had, got, made) لأن الجمل الأصلية تكون في الماضي.",
        "نسيان تحويل ضمير الفاعل إلى مفعول به بعد made (He -> him, She -> her, They -> them)."
      ],
      examples: [
        {
          en: "The noise (made / had) her look outside.",
          ar: "الضوضاء جعلتها تنظر إلى الخارج.",
          highlight: "made her look (مجرد)",
          note: "وزاري 2016 و 2020"
        },
        {
          en: "She had her picture (take / taken).",
          ar: "حصلت على صورتها ملتقطة.",
          highlight: "had her picture taken (تصريف ثالث)",
          note: "وزاري 2018 دور أول"
        },
        {
          en: "The wind made the leaves fall.",
          ar: "جعلت الرياح أوراق الشجر تسقط.",
          highlight: "made ... fall",
          note: "تمرين D ص 39 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u2-l6-ex1",
          question: "My father asked somebody to fix the computer. (Rewrite using the correct form of 'get')",
          options: [
            "My father got the computer fixed.",
            "My father got the computer fix.",
            "My father made the computer fixed.",
            "My father got somebody fix the computer."
          ],
          correctAnswer: "My father got the computer fixed.",
          explanation: "قاعدة get في الماضي: الفاعل + got + المفعول به + تصريف ثالث (fixed).",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u2-l6-ex2",
          question: "They arrived late because of the traffic jam. (Rewrite with 'made')",
          options: [
            "The traffic jam made them arrive late.",
            "The traffic jam made them arrived late.",
            "The traffic jam made they arrive late.",
            "The traffic jam had them arrive late."
          ],
          correctAnswer: "The traffic jam made them arrive late.",
          explanation: "السبب (The traffic jam) + made + ضمير المفعول به (them) + فعل مجرد (arrive late).",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور ثانٍ"
        },
        {
          id: "u2-l6-ex3",
          question: "investigate = _________ (Write the less formal equivalent)",
          options: ["find out", "happened", "hurt", "called"],
          correctAnswer: "find out",
          explanation: "المرادف غير الرسمي للفعل investigate هو find out (يكتشف/يحقق).",
          type: "mcq",
          ministerialYear: "تمرين C ص 39"
        }
      ]
    },
    {
      id: "u2-l7",
      unitId: 2,
      lessonNumber: 7,
      titleAr: "الدرس السابع: كتيب سلامة المنازل (Safety Brochure)",
      titleEn: "Lesson 7: Home Safety Brochure",
      category: "reading",
      summary: "نص القراءة الاستيعابي حول أمن وسلامة المنازل وحمايتها من اللصوص، أهمية الأقفال والنوافذ والأبواب القوية، وتعاريف المفردات المتعلقة بها.",
      grammarRuleFormula: "Key Vocabulary:\njewellery = expensive items like gold rings and necklaces\nsentimental = how you feel about an object\nmeasures = things you do for a specific reason\nburglars = thieves who break into homes\nessential = very important",
      detailedContent: [
        "نص كتيب السالمة المنزلية (ص 51 - 52 من ملزمة الأستاذ مصطفى تركي):",
        "- في كل عام تُسرق منازل مئات الأشخاص، ويسرق اللصوص الأموال والمجوهرات والحواسيب والتلفزيونات ويبيعونها.",
        "- بعض الأشياء لا تعوض بالمال لو سرقت كالمجوهرات التي لها قيمة عاطفية (sentimental value) وساعات العمل على قرص الحاسوب.",
        "- أهم عوامل أمان المنزل: النوافذ والأبواب والأقفال الجيدة (good windows, doors and locks).",
        "- النوافذ: يدخل اللصوص من النوافذ المفتوحة؛ يجب غلقها وعدم زراعة الأشجار والشجيرات بالقرب منها حتى لا يختبئ اللصوص خلفها.",
        "- الأبواب والأقفال: بعض الأقفال الرخيصة يفتحها اللصوص ببطاقة بنكية أو مشبك ورق، لذلك يجب تركيب أقفال متينة لا تفتح إلا بالمفتاح وفحص المنزل من قبل خبير أمني.",
        "تعاريف مهمة (تمرين B ص 40 كتاب النشاط):",
        "1. expensive items like gold rings and necklaces = jewellery (مجوهرات).",
        "2. how you feel about an object = sentimental (عاطفي).",
        "3. things you do for a specific reason = measures (إجراءات).",
        "4. thieves who break into homes = burglars (لصوص منازل).",
        "5. extremely, so much that you can't believe it = unbelievably (بشكل لا يصدق).",
        "6. very important = essential (أساسي/ضروري جداً)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تعاريف تمرين B ص 40 من الثوابت الوزارية بالسؤال الثالث فرع B (التوصيلات).",
        "سؤال وزاري استيعابي: Where should people avoid planting trees? الجواب: Near windows because burglars can hide behind them."
      ],
      commonMistakes: [
        "كتابة burglars بإملاء خاطئ.",
        "الخلط بين sentimental (قيمة عاطفية) و expensive (مادي غالي)."
      ],
      examples: [
        {
          en: "thieves who break into homes = burglars.",
          ar: "اللصوص الذين يقتحمون المنازل = burglars.",
          highlight: "burglars",
          note: "تمرين B ص 40 كتاب النشاط"
        },
        {
          en: "Why should people think about home safety? Every year, hundreds of houses are robbed.",
          ar: "لماذا ينبغي التفكير بأمن المنزل؟ لأن مئات المنازل تُسرق سنوياً.",
          highlight: "hundreds of houses are robbed",
          note: "تمرين A ص 40"
        }
      ],
      exercises: [
        {
          id: "u2-l7-ex1",
          question: "Things you do for a specific reason are called _________.",
          options: ["measures", "jewellery", "burglars", "locks"],
          correctAnswer: "measures",
          explanation: "الإجراءات التي تتخذ لسبب محدد تسمى (measures).",
          type: "mcq",
          ministerialYear: "تمرين B ص 40"
        },
        {
          id: "u2-l7-ex2",
          question: "Where should people avoid planting trees and bushes for better safety?",
          options: ["Near windows", "In the garden", "Near the garage", "On the roof"],
          correctAnswer: "Near windows",
          explanation: "يجب تجنب زراعة الأشجار قرب النوافذ لأن اللصوص قد يختبئون خلفها.",
          type: "mcq",
          ministerialYear: "تمرين A ص 40"
        }
      ]
    },
    {
      id: "u2-l9",
      unitId: 2,
      lessonNumber: 9,
      titleAr: "الدرس التاسع: قطعة الرادار الوزارية الشاملة (Radar Speed Gun)",
      titleEn: "Lesson 9: Radar Speed Gun (Ministerial Comprehensive)",
      category: "reading",
      summary: "قطعة الكتاب الوزارية للرادار: تاريخ اختراعه، طريقة عمل مسدس السرعة، أنواع أجهزة الرادار، كواشف الرادار (Radar Detectors)، والصيانة وتدريب رجال الشرطة.",
      grammarRuleFormula: "Radar Key Facts:\n- Invented during WWII to detect enemy aircraft and ships\n- Police use: over 70 years ago to catch speeders\n- Mechanism: sends radio waves that bounce back from cars\n- Radar detectors: make a beeping sound when detecting radar",
      detailedContent: [
        "قطعة الكتاب الرسمية: الرادار (ص 53 - 56 من ملزمة الأستاذ مصطفى تركي):",
        "1. الاختراع والتاريخ: اختُرع الرادار خلال الحرب العالمية الثانية (World War II) للكشف عن طائرات وسفن العدو، ثم استُخدم للتنبؤ بالطقس، وبدأ استخدامه من قبل الشرطة لضبط متجاوزي السرعة منذ أكثر من 70 عاماً (over 70 years ago).",
        "2. مبدأ العمل: يرسل موجات راديوية باتجاه السيارة وترتد نحوه. إذا كانت السيارة متحركة تتغير المسافة بين الموجات فيحسب سرعتها. يعمل عندما تتحرك السيارة باتجاهه أو مبتعدة عنه (moving towards or away from them).",
        "3. أنواع الرادار: بعضها محمول باليد يشبه البندقية، وبعضها يعمل من سيارات الشرطة المتحركة، وبعضها يلتقط صوراً للوحة ترخيص السيارة (number plate).",
        "4. كواشف الرادار (Radar detectors): أجهزة يستخدمها السائقون وتصدر صوت صفير (beeping sound) عند استشعار الرادار، لكنها غير قانونية في بعض الأماكن ويغرم حائزها.",
        "5. الصيانة والأخطاء: الرادار نادر الأخطاء إذا استُخدم بصورة صحيحة وتدرب رجال الشرطة عليه وفُحص وصين بانتظام (checked and fixed regularly).",
        "6. أسئلة صح وخطأ وزارية (تمرين B ص 44 كتاب النشاط):",
        "- Police departments don't use radar guns anymore. (False).",
        "- Radar guns can only calculate the speed of a car moving towards them. (False - towards or away).",
        "- Some radar guns are shaped a bit like guns. (True).",
        "- A radar detector makes a beeping noise if it senses a radar. (True).",
        "- Radar guns don't need any maintenance. (False)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة الرادار من أكثر القطع تكراراً في السؤال الأول فرع B في كل السنوات الوزارية.",
        "سؤال وزاري رئيسي: How does a radar speed gun work? الجواب: By sending radio waves towards a car; when the waves hit the car, they bounce back towards the radar gun.",
        "سؤال وزاري: Can a driver avoid a ticket by speeding away? الجواب: No, because radar guns work when the car is moving towards or away from them."
      ],
      commonMistakes: [
        "القول بأن الرادار يحسب فقط سرعة السيارة القادمة نحوه؛ والصحيح أنه يحسب السرعة في الاتجاهين (towards and away).",
        "القول بأن أجهزة الرادار لا تحتاج صيانة؛ والصحيح أنها تحتاج صيانة وفحصاً دورياً منتظماً."
      ],
      examples: [
        {
          en: "When was the radar invented? During the Second World War to detect enemy aircraft and ships.",
          ar: "متى اختُرع الرادار؟ خلال الحرب العالمية الثانية للكشف عن طائرات وسفن العدو.",
          highlight: "During World War II",
          note: "وزاري 2016 و 2018 و 2022"
        },
        {
          en: "A radar detector makes a beeping sound when it detects a radar gun. (True / False) -> True.",
          ar: "يصدر كاشف الرادار صوتاً عند اكتشافه مسدس الرادار -> صح.",
          highlight: "beeping sound -> True",
          note: "وزاري مكرر"
        }
      ],
      exercises: [
        {
          id: "u2-l9-ex1",
          question: "How long have police officers been using radar speed guns?",
          options: ["Over 70 years ago", "Over 20 years ago", "Over 100 years ago", "Since 1990"],
          correctAnswer: "Over 70 years ago",
          explanation: "بدأ ضباط الشرطة استخدام الرادار منذ أكثر من 70 عاماً.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u2-l9-ex2",
          question: "Radar speed guns can only calculate the speed of a car moving towards them. (True / False)",
          options: ["False", "True"],
          correctAnswer: "False",
          explanation: "خطأ، لأن الرادار يقيس سرعة السيارات المتحركة نحوه أو مبتعدة عنه (towards or away).",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        },
        {
          id: "u2-l9-ex3",
          question: "What is a radar detector?",
          options: [
            "A machine that makes a beeping sound when it detects a radar gun.",
            "A device used to shoot at speeding cars.",
            "A camera that takes pictures of road signs.",
            "An instrument used by airplanes during wartime."
          ],
          correctAnswer: "A machine that makes a beeping sound when it detects a radar gun.",
          explanation: "كاشف الرادار هو جهاز يصدر صوت صفير عند استشعار وجود رادار بالمنطقة.",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور ثانٍ"
        }
      ]
    }
  ]
};
