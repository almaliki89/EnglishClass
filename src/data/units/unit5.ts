import { Unit } from '../../types';

export const UNIT_5: Unit = {
  id: 5,
  number: 5,
  titleAr: "الوحدة الخامسة: السفر، العطل، وأزمنة التام وعبارات الوصل",
  titleEn: "Unit 5: Travel, Perfect Tenses & Relative Clauses",
  description: "الأسماء المركبة في السفر، المضارع التام البسيط والمستمر، أدوات (Ever, Never, Just, Already, Yet, Since, For)، الفرق بين Been و Gone، الماضي التام، عبارات الوصل (Who, Which, Where, Whose)، قطعة جزر قرقنة، وقطعة أهمية العطل.",
  accentColor: "from-cyan-600 to-blue-600",
  bgGradient: "bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200",
  lessons: [
    {
      id: "u5-l1",
      unitId: 5,
      lessonNumber: 1,
      titleAr: "الدرس الأول: الأسماء المركبة في السفر والعطل",
      titleEn: "Lesson 1: Travel & Holiday Compound Nouns",
      category: "vocabulary",
      summary: "حفظ الأسماء المركبة الخاصة بالسياحة والعطل من صفحة 92 من الملزمة (تمرين A ص 89 كتاب النشاط).",
      grammarRuleFormula: "Compound Nouns in Travel:\nboarding card | travel agency | five-star hotel | package deal | packed lunch | ski resort | car hire | self-catering apartment | sight-seeing | sea front",
      detailedContent: [
        "الأسماء المركبة في السفر والسياحة (ص 92 من ملزمة الأستاذ مصطفى تركي):",
        "1. boarding card = بطاقة صعود الطائرة (You cannot board the plane without it).",
        "2. travel agency = وكالة سفر وسياحة (A company that arranges holidays).",
        "3. five-star hotel = فندق خمس نجوم (A luxury place to stay).",
        "4. package deal = صفقة سفر شاملة (Includes flights, hotel and meals).",
        "5. packed lunch = وجبة غداء معلبة/مجهزة مسبقاً (Food in a box for an excursion).",
        "6. ski resort = منتجع تزلج شتوي (A place where people go skiing).",
        "7. car hire = استئجار سيارة (Renting a car on holiday).",
        "8. self-catering apartment = شقة بنظام الخدمة الذاتية (An apartment where you cook your own food).",
        "9. sight-seeing = جولة لمشاهدة المعالم السياحية (Visiting famous buildings and places).",
        "10. sea front = الواجهة البحرية (The part of a town facing the sea)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي هذه الأسماء في السؤال الثالث فرع B إما توصيل كلمتين أو اختيارات من جمل كتاب النشاط ص 89."
      ],
      commonMistakes: [
        "الخلط بين boarding card (بطاقة الطائرة) و credit card (بطاقة الائتمان).",
        "الخطأ في كتابة self-catering apartment."
      ],
      examples: [
        {
          en: "If we get a (self-catering apartment) in Spain, we can buy food at the market and cook our own meals.",
          ar: "إذا استأجرنا شقة بنظام الخدمة الذاتية في إسبانيا، سنشتري الطعام ونطبخ بأنفسنا.",
          highlight: "self-catering apartment",
          note: "تمرين وزاري مكرر ص 92"
        },
        {
          en: "You can't get on a plane if you don't have your (boarding card).",
          ar: "لا يمكنك صعود الطائرة دون بطاقة الصعود.",
          highlight: "boarding card",
          note: "وزاري 2017 و 2020"
        }
      ],
      exercises: [
        {
          id: "u5-l1-ex1",
          question: "A holiday where flights, hotel and meals are all included is a _________.",
          options: ["package deal", "boarding card", "car hire", "ski resort"],
          correctAnswer: "package deal",
          explanation: "العطلة الشاملة لتذاكر الطيران والفندق والوجبات تسمى (package deal).",
          type: "mcq",
          ministerialYear: "تمرين A ص 89"
        },
        {
          id: "u5-l1-ex2",
          question: "Let's go for a walk along the (sea front / boarding card) this evening.",
          options: ["sea front", "boarding card"],
          correctAnswer: "sea front",
          explanation: "المشي على الكورنيش أو الواجهة البحرية يسمى sea front.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        }
      ]
    },
    {
      id: "u5-l2",
      unitId: 5,
      lessonNumber: 2,
      titleAr: "الدرس الثاني: المضارع التام البسيط وأدواته (Present Perfect Simple)",
      titleEn: "Lesson 2: Present Perfect Simple & Adverbs",
      category: "grammar",
      summary: "شرح زمن المضارع التام البسيط (have/has + p.p) واستخدامات (ever, never, just, already, yet, so far).",
      grammarRuleFormula: "Subject + have / has + (just / already / never) + Past Participle [p.p.]\nQuestion: Have / Has + Subject + ever + Past Participle?\nNegative / Question ending: ... yet?",
      detailedContent: [
        "1. المضارع التام البسيط (Present Perfect Simple) - ص 93 - 97:",
        "- التكوين: I, We, You, They + have + p.p. | He, She, It + has + p.p.",
        "- أدواته الوزارية ومواقعها:",
        "1) (ever): تأتي في السؤال فقط وتقع قبل التصريف الثالث: Have you ever stayed in an unusual hotel?",
        "2) (never): تعطي معنى النفي للجملة وتوضع في الجملة المثبتة قبل التصريف الثالث: I have never flown in a plane.",
        "3) (just): تعني للتو وتوضع بين الفعل المساعد والتصريف الثالث: I have just finished my homework.",
        "4) (already): تعني مسبقاً وتوضع في الوسط أو في نهاية الجملة: I have already seen this film.",
        "5) (yet): تعني لحد الآن وتوضع في نهاية الجملة المنفية أو السؤال فقط: I haven't packed my suitcase yet. / Have you booked a hotel yet?",
        "6) (so far): تعني حتى الآن وتوضع في نهاية الجملة: He has written three letters so far."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: الفرق بين ever و never: (ever) تأتي حصراً مع السؤال المنتهي بعلامة استفهام، بينما (never) تأتي مع الجواب المثبت المنتهي بنقطة!",
        "أداة (yet) لا تأتي أبداً إلا في نهاية الجملة المنفية بـ haven't/hasn't أو في نهاية السؤال.",
        "احفظ تصاريف الأفعال الشاذة الشائعة في التام: see -> seen, fly -> flown, meet -> met, ride -> ridden, hold -> held, spend -> spent."
      ],
      commonMistakes: [
        "استخدام ever في جملة جواب منتهية بنقطة.",
        "استخدام never مع فعل منفي (مثل: haven't never وهذا خطأ فادح).",
        "وضع yet في وسط الجملة."
      ],
      examples: [
        {
          en: "Have you (ever / never) camped in the desert?",
          ar: "هل خيمت يوماً في الصحراء؟",
          highlight: "Have you ever camped (سؤال)",
          note: "وزاري مكرر ص 94"
        },
        {
          en: "I have never ridden an elephant.",
          ar: "لم أركب فيلاً قط.",
          highlight: "have never ridden",
          note: "تمرين B ص 91 كتاب النشاط"
        },
        {
          en: "I haven't bought the tickets yet.",
          ar: "لم أشترِ التذاكر لحد الآن.",
          highlight: "haven't bought ... yet",
          note: "وزاري 2018 دور أول"
        }
      ],
      exercises: [
        {
          id: "u5-l2-ex1",
          question: "Have you (ever / never) booked a flight online?",
          options: ["ever", "never"],
          correctAnswer: "ever",
          explanation: "الجملة سؤال منتهٍ بعلامة استفهام فنستخدم ever.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u5-l2-ex2",
          question: "Would you like a cup of coffee? - No, thanks. I (already have) one. (Complete with just/already)",
          options: ["have already had", "already have had", "had already", "am already having"],
          correctAnswer: "have already had",
          explanation: "المضارع التام: I have already had one.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور ثانٍ"
        }
      ]
    },
    {
      id: "u5-l3",
      unitId: 5,
      lessonNumber: 3,
      titleAr: "الدرس الثالث: المضارع التام المستمر وقواعد For و Since و How long",
      titleEn: "Lesson 3: Present Perfect Continuous, For / Since & How Long",
      category: "grammar",
      summary: "المضارع التام المستمر (have/has been + v-ing)، المقارنة بينه وبين البسيط، استخدامات Since و For مع الفترات الزمنية، وتكوين أسئلة How long.",
      grammarRuleFormula: "Subject + have / has + been + verb-ing\nHow long + have / has + Subject + been + verb-ing?\nSince + نقطة بداية زمن محددة (2015, Sunday, 8 o'clock, July, I was born)\nFor + مدة زمنية مجمعة (three hours, two days, a month, ten years, a long time)",
      detailedContent: [
        "1. المضارع التام المستمر (Present Perfect Continuous) - ص 98 - 100:",
        "- التكوين: فاعل + have / has + been + فعل مضاف له ing.",
        "- يعبر عن حدث بدأ في الماضي وما زال مستمراً حتى لحظة التكلم: He has been sleeping for ten hours.",
        "- أفعال الحركة التي تستمر في الزمن: study, wait, cook, sleep, work, talk, rain, play, learn, write.",
        "- أفعال السكون والحواس والملكية لا تأخذ ing وتستخدم مع المضارع التام البسيط فقط: be, see, know, understand, have, like, love, lose, drop, finish.",
        "2. أسئلة How long (ص 99):",
        "- How long have you been studying English? (مع أفعال الاستمرار).",
        "- How long have you known each other? (مع أفعال السكون مثل know).",
        "3. الفرق بين Since و For (ص 100 - 101):",
        "- (Since) تأتي مع نقطة البداية المحددة: yesterday, last year, 1999, Monday, July, breakfast, 2 o'clock, I was six, he arrived.",
        "- (For) تأتي مع المدة المحسوبة مجمعة المسبوقة برقم أو a/an: for three hours, for a long time, for ages, for ten days, for a year, for two weeks."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: في الامتحان الوزاري، انظر للكلمة بعد الفراغ مباشرة:",
        "- إذا كانت تبدأ بـ (a / an) أو عدد ومعدود ينتهي بـ s الجمع (hours, days, years, weeks) أو ages / a long time -> اختر (For).",
        "- إذا كانت اسماً صريحاً لسنة، شهر، يوم، مناسبة، أو جملة في الماضي (I was ten, we met) -> اختر (Since).",
        "الفعل (know) والفعل (be) لا يأخذان ing إطلاقاً! نقول: I have known him since 2010."
      ],
      commonMistakes: [
        "إضافة ing لفعل السكون know (كتابة been knowing خطأ شائع جداً).",
        "اختيار since مع a long time أو for ages (كلاهما يأخذ For).",
        "نسيان been في المضارع التام المستمر."
      ],
      examples: [
        {
          en: "I haven't seen him (since / for) 2012.",
          ar: "لم أره منذ عام 2012.",
          highlight: "since 2012",
          note: "سنة محددة تأخذ since"
        },
        {
          en: "She has been talking on the phone (since / for) half an hour.",
          ar: "تتحدث على الهاتف لمدة نصف ساعة.",
          highlight: "for half an hour",
          note: "مدة مسبوقة بـ half an تأخذ for"
        },
        {
          en: "How long have you (been knowing / known) your best friend? -> known.",
          ar: "منذ متى وأنت تعرف صديقك المفضل؟",
          highlight: "have you known (فعل سكون)",
          note: "وزاري 2016 و 2021"
        }
      ],
      exercises: [
        {
          id: "u5-l3-ex1",
          question: "They have lived here (since / for) fifteen years.",
          options: ["for", "since"],
          correctAnswer: "for",
          explanation: "مدة زمنية مجمعة (15 سنة) تأخذ حرف الجر for.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u5-l3-ex2",
          question: "I have had this car (since / for) November.",
          options: ["since", "for"],
          correctAnswer: "since",
          explanation: "شهر محدد من شهور السنة (November) يأخذ since.",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور أول"
        },
        {
          id: "u5-l3-ex3",
          question: "How long have you _________ (wait) for the doctor? (Present perfect continuous)",
          options: ["been waiting", "waited", "waiting", "wait"],
          correctAnswer: "been waiting",
          explanation: "صيغة المضارع التام المستمر للسؤال: have you been waiting.",
          type: "mcq",
          ministerialYear: "وزاري 2021 تمهيدي"
        }
      ]
    },
    {
      id: "u5-l4",
      unitId: 5,
      lessonNumber: 4,
      titleAr: "الدرس الرابع: الفرق بين Been و Gone والماضي البسيط",
      titleEn: "Lesson 4: Been vs Gone & Past Simple Distinction",
      category: "grammar",
      summary: "التمييز بين ذهب وعاد (have been to) وذهب ولم يعد بعد (have gone to)، والتمييز بين الماضي البسيط والمضارع التام عند وجود دلائل زمنية ماضية (yesterday, ago, last).",
      grammarRuleFormula: "have / has been to = ذهب إلى مكان وعاد منه أو لم يذهب أصلاً\nhave / has gone to = ذهب إلى مكان وما زال هناك (لم يعد بعد)",
      detailedContent: [
        "1. الفرق بين (been to) و (gone to) - ص 102 من الملزمة:",
        "- (have / has gone to): الشخص ذهب إلى مكان وهو الآن هناك، أو في طريقه إلى هناك ولم يعد بعد.",
        "- (have / has been to): الشخص ذهب إلى مكان وعاد منه، أو لم يزر ذلك المكان في حياته إطلاقاً (مع never).",
        "دلائل سريعة في الامتحان:",
        "- إذا كانت الجملة تدل على الغياب وعدم التواجد (He is not here / away / on holiday) -> نختار (gone).",
        "- إذا كان الشخص موجوداً أمامك يتحدث معك، أو مع الضمائر (I, We, You) في السؤال أو الإثبات -> نختار (been).",
        "2. تصحيح الجمل بين الماضي البسيط والمضارع التام (ص 103 - 104):",
        "- إذا وجدت في الجملة دليلاً ماضياً صريحاً (yesterday, last night, last year, in 2010, ago) يجب تصحيح الجملة إلى الماضي البسيط (Past Simple) وحذف have/has.",
        "- مثال: Fadia didn't speak to me since her sister's wedding. (Incorrect)",
        "  الصحيح: Fadia hasn't spoken to me since her sister's wedding.",
        "- مثال: Has he gone to the bank yesterday? (Incorrect)",
        "  الصحيح: Did he go to the bank yesterday? (لوجود yesterday)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: جمل تصحيح الأزمنة (تمرين ص 104) تأتي نصاً في السؤال الثاني فرع A بصيغة: Correct the sentence.",
        "مع الضمير (I) لا نستخدم gone إطلاقاً في جملة مثل: I have been to Dubai because I'm back now."
      ],
      commonMistakes: [
        "اختيار gone مع شخص يتكلم معك في نفس الغرفة.",
        "إبقاء have/has عند وجود yesterday أو last night في الجملة."
      ],
      examples: [
        {
          en: "The Badri family isn't here at the moment. They have (been / gone) on holiday to Morocco.",
          ar: "عائلة البدري ليست هنا حالياً. لقد ذهبوا في عطلة إلى المغرب.",
          highlight: "isn't here -> gone",
          note: "وزاري 2017 دور أول"
        },
        {
          en: "I haven't (been / gone) to China yet, but I would like to one day.",
          ar: "لم أذهب إلى الصين بعد، لكنني أرغب بذلك يوماً ما.",
          highlight: "haven't been to",
          note: "تمرين A ص 97 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u5-l4-ex1",
          question: "Latifa and her family are not at home. They have _________ on holiday.",
          options: ["gone", "been", "went", "go"],
          correctAnswer: "gone",
          explanation: "بما أنهم ليسوا في المنزل (not at home)، فهم قد ذهبوا ولم يعودوا بعد (gone).",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور ثانٍ"
        },
        {
          id: "u5-l4-ex2",
          question: "I have bought him a new mobile phone last week. (Correct the sentence)",
          options: [
            "I bought him a new mobile phone last week.",
            "I have buy him a new mobile phone.",
            "I had bought him a new mobile phone last week.",
            "I am buying him a new mobile phone."
          ],
          correctAnswer: "I bought him a new mobile phone last week.",
          explanation: "وجود last week يفرض تحويل الجملة إلى ماضٍ بسيط وحذف have.",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور أول"
        }
      ]
    },
    {
      id: "u5-l5",
      unitId: 5,
      lessonNumber: 5,
      titleAr: "الدرس الخامس: الماضي التام البسيط وأدوات الربط",
      titleEn: "Lesson 5: Past Perfect Simple & Conjunctions",
      category: "grammar",
      summary: "شرح زمن الماضي التام البسيط (had + p.p) للحدث الأسبق في الماضي، وقواعد أدوات الربط (After, Because, When, Before, So) من صفحة 105 بالملزمة.",
      grammarRuleFormula: "After / Because + Past Perfect [had + p.p.] , Past Simple [v-ed]\nWhen / Before / So + Past Simple [v-ed] , Past Perfect [had + p.p.]",
      detailedContent: [
        "الماضي التام البسيط (Past Perfect Simple) - ص 105 - 108 من الملزمة:",
        "- نستخدم الماضي التام للتعبير عن الحدث الذي وقع أولاً وانتهى قبل حدث آخر في الماضي:",
        "  الحدث الأول الأقدم = ماضي تام (had + p.p).",
        "  الحدث الثاني الأحدث = ماضي بسيط (فعل ماضٍ).",
        "- أدوات الربط وقواعدها الصارمة:",
        "1) (After / Because) يتبعهما ماضٍ تام دائماً (had + p.p)، والشق الآخر ماضٍ بسيط:",
        "   After we had spoken to the teacher, we left the classroom.",
        "   We couldn't get a room because we hadn't booked.",
        "2) (Before / When / So) يتبعها ماضٍ بسيط دائماً، والشق الآخر ماضٍ تام:",
        "   The wedding had finished before we arrived.",
        "   When we got to the cinema, the film had already started."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: احفظ القاعدة الذهبية: (After و Because) تحبان الماضي التام (had + p.p) بعدهما مباشرة!",
        "بينما (Before و When و So) تأخذان ماضياً بسيطاً بعدهما مباشرة."
      ],
      commonMistakes: [
        "وضع الماضي البسيط بعد After أو Because.",
        "نسيان التصريف الثالث بعد had."
      ],
      examples: [
        {
          en: "After we (speak) to the teacher, we left the classroom. -> had spoken.",
          ar: "بعد أن تحدثنا إلى المعلم، غادرنا الصف.",
          highlight: "After we had spoken",
          note: "تمرين B ص 100 كتاب النشاط"
        },
        {
          en: "When we arrived at the airport, we found that the airline (change) our flight. -> had changed.",
          ar: "عندما وصلنا المطار، وجدنا أن شركة الطيران قد غيرت رحلتنا.",
          highlight: "had changed",
          note: "وزاري 2019 دور أول"
        }
      ],
      exercises: [
        {
          id: "u5-l5-ex1",
          question: "We couldn't get a room because we (not book). (Correct the verb)",
          options: ["hadn't booked", "didn't book", "haven't booked", "not booked"],
          correctAnswer: "hadn't booked",
          explanation: "بعد because يأتي ماضٍ تام، والنفي يكون بـ hadn't booked.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u5-l5-ex2",
          question: "The bus had left before I _________ (reach) the station.",
          options: ["reached", "had reached", "reach", "was reaching"],
          correctAnswer: "reached",
          explanation: "بعد before يأتي زمن ماضٍ بسيط (reached).",
          type: "mcq",
          ministerialYear: "تمرين B ص 100"
        }
      ]
    },
    {
      id: "u5-l6",
      unitId: 5,
      lessonNumber: 6,
      titleAr: "الدرس السادس: قطعة رحلة جزر قرقنة التونسية (Kerkennah Islands)",
      titleEn: "Lesson 6: Kerkennah Islands Holiday & Anna's Trip",
      category: "reading",
      summary: "قطعة واستيعاب رحلة آنا جونسون الترويجية إلى جزر قرقنة الهادئة في تونس، جمال الشواطئ، الرحلة بالعبارة، والصفات السياحية المترادفة.",
      grammarRuleFormula: "Key Vocabulary:\npeace and quiet = calm atmosphere\nferry = boat that transports people and cars\nunspoiled = natural and not ruined by tourism\nfascinating = extremely interesting",
      detailedContent: [
        "قطعة جزر قرقنة في تونس (ص 109 - 110 من ملزمة الأستاذ مصطفى تركي):",
        "- جزر قرقنة (Kerkennah Islands) مجموعة جزر هادئة قبالة الساحل الشرقي لتونس.",
        "- توفر مكاناً مثالياً للباحثين عن الراحة والهدوء (peace and quiet) بعيداً عن صخب المدن والمنتجعات السياحية المزدحمة.",
        "- الوصول إليها: ركوب عبارة (ferry) من مدينة صفاقس مرتين يومياً.",
        "- تمتاز بشواطئها العذراء غير الملوثة (unspoiled beaches) وأشجار النخيل والتقاليد التونسية الأصيلة لصيد السمك بالشباك التقليدية (charfia).",
        "- تعاريف مهمة (تمرين B ص 103 كتاب النشاط):",
        "1. boat that transports people and cars = ferry (عبارة).",
        "2. extremely comfortable = luxurious (فاخر).",
        "3. something wonderful to look at = spectacular (مبهر/مذهل).",
        "4. special to a particular person or place = unique (فريد من نوعه).",
        "5. fine welcome = hospitality (حسن الضيافة).",
        "6. a performance or show = display (عرض)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تعاريف تمرين B ص 103 (ferry, luxurious, spectacular, unique, hospitality) تأتي سنوياً في السؤال الثالث فرع B."
      ],
      commonMistakes: [
        "الخطأ في إملاء ferry أو luxurious.",
        "الخلط بين hospitality (كرم الضيافة) و hostility (عداء)."
      ],
      examples: [
        {
          en: "a boat that transports people and goods = ferry.",
          ar: "قارب ينقل الناس والبضائع = عبارة.",
          highlight: "ferry",
          note: "تمرين B ص 103"
        }
      ],
      exercises: [
        {
          id: "u5-l6-ex1",
          question: "A fine welcome and friendly treatment is called _________.",
          options: ["hospitality", "ferry", "spectacular", "luxurious"],
          correctAnswer: "hospitality",
          explanation: "حسن الاستقبال والضيافة يسمى hospitality.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور ثانٍ"
        }
      ]
    },
    {
      id: "u5-l7",
      unitId: 5,
      lessonNumber: 7,
      titleAr: "الدرس السابع: عبارات الوصل التعريفية وغير التعريفية",
      titleEn: "Lesson 7: Defining & Non-Defining Relative Clauses",
      category: "grammar",
      summary: "ضمائر الوصل (who, which, that, where, whose)، الفرق بين الجمل المعرفة وغير المعرفة، قواعد وضع الفواصل، وطرق دمج جملتين وزارياً.",
      grammarRuleFormula: "who = للعاقل (شخص + who + فعل أو فاعل)\nwhich / that = لغير العاقل (جماد أو حيوان + which/that)\nwhere = للمكان (مكان + where + فاعل + فعل)\nwhose = للتملك (اسم + whose + اسم يملكه)",
      detailedContent: [
        "عبارات الوصل (Relative Clauses) - ص 111 - 117 من ملزمة الأستاذ مصطفى تركي:",
        "1. ضمائر الوصل واختياراتها:",
        "- للعاقل: who (The man who lives next door is a doctor).",
        "- لغير العاقل: which أو that (The car which he bought is fast).",
        "- للمكان: where (The hotel where we stayed had a swimming pool).",
        "- للتملك: whose (The woman whose car was stolen called the police).",
        "2. الجمل التعريفية (Defining) وغير التعريفية (Non-defining):",
        "- الجمل التعريفية تعطي معلومة أساسية بدون فواصل.",
        "- الجمل غير التعريفية تعطي معلومة إضافية عن اسم علم محدد وتوضع بين فاصلتين (commas).",
        "  مثال: My uncle Albert, who is 73, still rides a bike.",
        "3. خطوات ربط جملتين وزارياً:",
        "- الحالة الأولى: إذا كان الاسم الموصوف في بداية الجملة الأولى:",
        "  نكتب الاسم الموصوف + ضمير الوصل + الجملة الثانية بعد حذف الضمير العائد + باقي الجملة الأولى.",
        "  Salwa wants to be an interpreter. She speaks three languages.",
        "  -> Salwa, who speaks three languages, wants to be an interpreter.",
        "- الحالة الثانية: إذا كان الاسم الموصوف في نهاية الجملة الأولى:",
        "  نكتب الجملة الأولى كاملة + ضمير الوصل + الجملة الثانية بدون الضمير العائد:",
        "  I always go to that garage for repairs. It was closed today.",
        "  -> I always go to that garage, which was closed today, for repairs."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قاعدة اختيار whose الذهبية:",
        "إذا كان قبل القوس اسم شخص عاقل (man, girl, lady) وبعد القوس اسم مملوك له (car, dog, son, phone, bag)، اختر (whose) فوراً!",
        "إذا كان بعد القوس فعل (is, lives, bought) اختر (who).",
        "مع المكان: إذا جاء بعد الفراغ فاعل وفعل بدون حرف جر، نختار (where). وإذا كان بعد الفراغ فعل مثل (is) نختار (which)."
      ],
      commonMistakes: [
        "نسيان حذف الضمير العائد (he, she, it, they, his, her) من الجملة الثانية عند الربط.",
        "نسيان الفواصل عند ربط جملة اسم علم مثل (Babylon City, Salwa, Dr Fayadh).",
        "اختيار where مع وجود فعل مساعد بعد الفراغ (مثل: The restaurant which is near our house)."
      ],
      examples: [
        {
          en: "Fatima (who / whose) photo was in the newspaper is a talented student.",
          ar: "فاطمة التي صورتها في الجريدة طالبة موهوبة.",
          highlight: "whose photo (اسم بعد الفراغ)",
          note: "وزاري 2016 دور أول"
        },
        {
          en: "The hotel (where / which) has a swimming pool is very expensive.",
          ar: "الفندق الذي يمتلك مسبحاً مكلف جداً -> which لوجود فعل بعد الفراغ.",
          highlight: "which has",
          note: "تمرين ص 106 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u5-l7-ex1",
          question: "My brother, (who / whose) lives in London, is a doctor.",
          options: ["who", "whose"],
          correctAnswer: "who",
          explanation: "جاء بعد القوس فعل (lives)، فالضمير المناسب للعاقل هو who.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u5-l7-ex2",
          question: "The girl (whose / who) father is a doctor is my classmate.",
          options: ["whose", "who"],
          correctAnswer: "whose",
          explanation: "قبل القوس اسم شخص عاقل وبعده اسم (father)، فنختار أداة الملكية whose.",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور ثانٍ"
        }
      ]
    },
    {
      id: "u5-l9",
      unitId: 5,
      lessonNumber: 9,
      titleAr: "الدرس التاسع: قطعة لماذا العطل مهمة جداً؟ (Why are holidays so important?)",
      titleEn: "Lesson 9: Why are Holidays so Important? (Reading)",
      category: "reading",
      summary: "قطعة الكتاب الوزارية الرسمية حول أهمية أخذ العطل والإجازات، مخاطر الإجهاد وضغط الدم، ظاهرة مدمني العمل (workaholics)، والعلاقات الأسرية.",
      grammarRuleFormula: "Key Vocabulary:\nat least = no less than\nworkaholics = people who think their work is too important to leave to others\ndeadline = a time limit to finish work\non the verge of = about to happen\nsnatched = taken quickly",
      detailedContent: [
        "قطعة الكتاب الرسمية: لمَ العطل مهمة جداً؟ (ص 118 - 121 من ملزمة الأستاذ مصطفى تركي):",
        "- في عالم اليوم السريع، يتعرض الدماغ والجسد لضغوط هائلة بسبب العمل؛ وإذا أهملنا الراحة فقد ينهار الجسد (let us down).",
        "- ضغط الحياة يسبب ارتفاع ضغط الدم (high blood pressure) الذي قد يؤدي إلى نوبات قلبية وسكتات دماغية (strokes and heart attacks).",
        "- مدمنو العمل (Workaholics): أشخاص يعتقدون أن أعمالهم بالغة الأهمية ولا يمكن تركها للآخرين، ولا يتحملون البقاء بعيداً عن مكاتبهم. يكتشفون بعد فوات الأوان أن الحياة فيها أمور أكثر أهمية من العمل.",
        "- العطلة لا تعني مجرد تغيير المكان والجلوس مع هاتف العمل واللابتوب، بل تعني غلق الهواتف وإعطاء الوقت الكافي للعائلة والأصدقاء لأن العلاقات بحاجة إلى وقت لتغذيتها وتقويتها.",
        "أسئلة وزارية نموذجية:",
        "- Why are holidays so important? Because life is so fast and we need to take a break to rest our brain and body.",
        "- What can high blood pressure cause? It can cause strokes and heart attacks.",
        "- What are workaholics? People who think their work is too important to leave in the hands of others.",
        "- What can the stress of life cause? Severe health problems."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة العطل من أكثر القطع وروداً في السؤال الأول فرع B في الامتحانات الوزارية.",
        "سؤال وزاري متكرر: Both the brain and the body need (a break).",
        "سؤال وزاري: Families and friends feel that we care about them when we (give them significant time of our holidays)."
      ],
      commonMistakes: [
        "القول بأن مدمني العمل يقضون الكثير من الوقت مع عائلاتهم، بينما هم يهملون عائلاتهم وصحتهم.",
        "الخلط بين مسببات ارتفاع ضغط الدم وعواقبه."
      ],
      examples: [
        {
          en: "Workaholics are people who think that their work is too important to leave in the hands of others.",
          ar: "مدمنو العمل هم أشخاص يظنون أن عملهم أهم من أن يترك بأيدي الآخرين.",
          highlight: "too important to leave in the hands of others",
          note: "وزاري 2016 و 2018 و 2021"
        },
        {
          en: "What can the stress of modern life cause? It can cause high blood pressure, strokes and heart attacks.",
          ar: "ماذا يمكن أن يسبب ضغط الحياة الحديثة؟ ارتفاع ضغط الدم والسكتات والنوبات القلبية.",
          highlight: "high blood pressure, strokes and heart attacks",
          note: "وزاري 2019 دور أول"
        }
      ],
      exercises: [
        {
          id: "u5-l9-ex1",
          question: "High blood pressure can cause _________.",
          options: ["strokes and heart attacks", "broken bones", "diabetes only", "weight loss"],
          correctAnswer: "strokes and heart attacks",
          explanation: "ارتفاع ضغط الدم يمكن أن يؤدي إلى جلطات وأزمات قلبية.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u5-l9-ex2",
          question: "What do workaholics discover too late?",
          options: [
            "That there is more to life than work.",
            "That they need a new computer.",
            "That money is everything.",
            "That work is the only goal in life."
          ],
          correctAnswer: "That there is more to life than work.",
          explanation: "يكتشفون بعد فوات الأوان أن الحياة فيها ما هو أهم من مجرد العمل.",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور أول"
        }
      ]
    }
  ]
};
