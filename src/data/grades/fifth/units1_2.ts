import { Unit } from '../../../types';

// =========================================================================
// الوحدة الأولى والثانية - ملزمة الخامس الإعدادي (الأستاذ مصطفى تركي 2026)
// مرجع الصفحات: ص 1 - 71
// =========================================================================

export const FIFTH_PREPARATORY_UNITS_1_2: Unit[] = [
  {
    id: 51,
    number: 1,
    titleAr: "الوحدة الأولى: رمضان في العراق والأزمنة (Ramadan & Tenses)",
    titleEn: "Unit 1: Ramadan in Iraq, Present & Past Tenses, Scotland & Babylon",
    description: "المضارع البسيط والمستمر، صفات الشخصية ورمضان في العراق، الماضي البسيط والمستمر، المضارع التام البسيط والمستمر، الأسئلة الذيلية، ومهرجان بابل الدولي.",
    accentColor: "bg-coral text-ink",
    bgGradient: "bg-answer-review-bg border-ink",
    sourcePages: "الملزمة ص 1 - 38",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u1-l1",
        unitId: 51,
        lessonNumber: 1,
        titleAr: "الدرس الأول: المضارع البسيط مقابل المضارع المستمر (Present Simple vs Continuous)",
        titleEn: "Lesson 1: Present Simple vs Present Continuous & Dynamic vs Stative Verbs",
        category: "grammar",
        summary: "التمييز الدقيق بين الأحداث الروتينية والحقائق العامة (المضارع البسيط) والأحداث المؤقتة الجارية الآن (المضارع المستمر)، وأفعال الشعور والحواس (Stative Verbs) التي لا تأخذ ing.",
        sourcePages: "الملزمة ص 4 - 6",
        grammarRuleFormula: "1) Present Simple:\n   - Affirmative: Subject + V (s/es with He/She/It) / Base (I/You/We/They)\n   - Negative: Subject + don't / doesn't + Base verb\n   - Question: Do / Does + Subject + Base verb...?\n   - Keywords: always, usually, often, sometimes, never, every day/month\n\n2) Present Continuous:\n   - S + am/is/are + V-ing\n   - Negative: S + am/is/are + not + V-ing\n   - Question: Am/Is/Are + S + V-ing...?\n   - Keywords: now, at the moment, today, at present, Look!, Listen!\n\n3) Stative Verbs (لا تأخذ ing): like, love, hate, know, understand, believe, seem, want, need.",
        detailedContent: [
          "نستخدم المضارع البسيط (Present Simple) للتعبير عن الحقائق العلمية العامة والعادات اليومية المتكررة: The sun rises in the east.",
          "نستخدم المضارع المستمر (Present Continuous) للتعبير عن فعل يحدث في لحظة التكلم الحالية أو نشاط مؤقت محدد بمدة: I am studying for my English exam now.",
          "قاعدة الأفعال الثابتة والحركية (Stative vs Dynamic Verbs): أفعال الحواس والشعور والإدراك (like, love, see, hear, understand, remember, know, cost) تأتي في صيغة البسيط فقط حتى لو وجد ظرف مثل now.",
          "تمرين كتاب النشاط ص 2-3 (AB p. 2-3 Exercises A & B): تحويل الجمل بين البسيط والمستمر وفق الدلائل الزمنية."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 5: احذر من إضافة -ing لأفعال الإدراك والشعور مثل (understand, believe, know). إذا رأيت كلمة (now) مع فعل شعور، استخدم المضارع البسيط وليس المستمر: I understand you now (وليس I am understanding)."
        ],
        commonMistakes: [
          "قول: *I am knowing the answer* (خطأ فادح؛ الفعل know من أفعال الحالة، والصحيح: I know the answer).",
          "نسيان إضافة (s) الشخص الثالث مع He / She / It في المضارع البسيط المثبت: *He play tennis* (الصحيح: He plays tennis)."
        ],
        examples: [
          {
            en: "Muna usually walks to school, but today she is taking the bus.",
            ar: "منى تمشي عادة إلى المدرسة، لكنها اليوم تستقل الحافلة.",
            highlight: "usually walks / today is taking",
            note: "عادة روتينية (simple) مقابل حدث مؤقت استثنائي اليوم (continuous)"
          },
          {
            en: "Look! Somebody is swimming in the river.",
            ar: "انظر! هناك شخص يسبح في النهر الآن.",
            highlight: "is swimming",
            note: "فعل جاري لحظة التكلم بعد أداة التنبيه Look!"
          }
        ],
        exercises: [
          {
            id: "5u1-ex1",
            question: "Listen! Somebody ______ (play) the piano upstairs.",
            options: ["is playing", "plays", "played", "has played"],
            correctAnswer: "is playing",
            explanation: "وجود أداة التنبيه (Listen!) في أول الجملة يدل على أن الحدث يقع الآن في لحظة التكلم، لذا نستخدم المضارع المستمر is playing (الملزمة ص 5).",
            type: "mcq",
            sourcePages: "الملزمة ص 5"
          },
          {
            id: "5u1-ex2",
            question: "Water ______ (boil) at 100 degrees Celsius.",
            options: ["boils", "is boiling", "has boiled", "was boiling"],
            correctAnswer: "boils",
            explanation: "حقيقة علمية ثابتة تتطلب المضارع البسيط مع المفرد الغائب (Water boils) (الملزمة ص 6).",
            type: "mcq",
            sourcePages: "الملزمة ص 6"
          }
        ]
      },
      {
        id: "5th-u1-l2",
        unitId: 51,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: رمضان في العراق وصفات الشخصية (Ramadan in Iraq & Personality Adjectives)",
        titleEn: "Lesson 2: Ramadan in Iraq, Family Customs & Personality Adjectives",
        category: "reading",
        summary: "بريد سميرة إلى Claire عن صيام رمضان من الفجر إلى الغروب، وجبة الإفطار في منزلها، وكرم العائلة والتواصل الاجتماعي في البصرة، مع مفردات صفات الشخصية.",
        sourcePages: "الملزمة ص 7 - 11",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "كتاب الطالب ص 7؛ الملزمة ص 7",
          verificationNote: "بريد Samira إلى Claire بعنوان Ramadan in Iraq. أبقينا الفراغات الست وبنك العبارات كما في تمرين المطابقة في صفحة المصدر 7.",
          originalText: [
            "To: Claire\nSubject: Ramadan in Iraq\n\nHi Claire,\nThanks for your email. You asked me about __________. Well, at the moment it’s Ramadan, so I’ll tell you about that. It’s a 30-day religious fast from dawn to sunset. So there’s no eating or drinking __________. It’s a time when we try to pray more, be more patient with each other, and be kind and generous to people who are less fortunate than us.\n\nAt sunset, we stop fasting, and after prayers, __________. It’s called iftar. My mother is a very traditional person. (She’s also a little bit bossy, __________!) Anyway, she makes sure that iftar in our home is a very traditional meal. We always start with a glass of yoghurt and dates, fruit juice and lentil soup. The main course is usually a stew with meat or chicken and vegetables, served with rice. Then we have tea and cakes. During Ramadan, we always have lots of pastries in the house __________. One thing I really like about Ramadan here in Basra is that people are more sociable. Families and friends __________ in the evenings.\n\nTowards the end of the month, some people get a bit bad-tempered because they’re thirsty, tired and hungry.\n\nI took a taxi yesterday, and the driver was very grumpy. He drove really badly, but you know me – I’m very easy-going. So I smiled and stayed calm!\n\nWrite back soon,\nSamira\n\nPS Here’s a photo of you and me in Liverpool last year!",
            "Phrase bank:\na. all through the day\nb. we have an evening meal\nc. traditions in my country\nd. but that’s another story\ne. spend a lot more time with each other\nf. to offer visitors in the evening"
          ]
        },
        grammarRuleFormula: "Personality Adjectives (صفات الشخصية - ص 8):\n- Positive: generous (كريم), patient (صبور), sociable (اجتماعي), helpful (متعاون), cheerful (مبتهج)\n- Negative/Neutral: bossy (متسلط), stubborn (عنيد), lazy (كسول), shy (خجول), anxious (قلق)",
        detailedContent: [
          "نص القراءة (Student's Book p. 7): تصف سميرة رمضان بأنه صيام ديني لمدة 30 يوماً من الفجر إلى الغروب، وتمتنع فيه عن الأكل والشرب طوال اليوم.",
          "وجبة الإفطار في بيت سميرة: تبدأ بكأس من اللبن والتمر وعصير الفاكهة وحساء العدس، ثم يخنة باللحم أو الدجاج والخضروات مع الأرز، وبعدها الشاي والكعك.",
          "التواصل الاجتماعي: تذكر سميرة أن العائلات والأصدقاء يقضون وقتاً أطول معاً في أمسيات رمضان، وأن أهل بيتها يقدمون المعجنات للزوار مساءً.",
          "صفات الشخصية (الملزمة ص 8): تتضمن كلمات patient وkind وgenerous وsociable وbad-tempered وgrumpy وeasy-going وbossy لوصف الأشخاص."
        ],
        teacherNotes: [
          "سؤال شهير بالملزمة ص 10: 'Why is Ramadan an important month for Muslims?' الجواب النموذجي: Because it is a month of fasting, spiritual devotion, generosity, and family bonding."
        ],
        examples: [
          {
            en: "My uncle is very generous; he always buys gifts for everyone and donates to charity.",
            ar: "عمي كريم جداً؛ يشتري دائماً الهدايا للجميع ويتبرع للجمعيات الخيرية.",
            highlight: "generous",
            note: "صفة شخصية إيجابية مأخوذة من تمرين كتاب النشاط ص 4"
          }
        ],
        exercises: [
          {
            id: "5u1-ex3",
            question: "A person who always tells other people what to do is called ______.",
            options: ["bossy", "generous", "patient", "sociable"],
            correctAnswer: "bossy",
            explanation: "الشخص المتسلط الذي يملي أوامره على الآخرين يسمى bossy (الملزمة ص 9).",
            type: "mcq",
            sourcePages: "الملزمة ص 9"
          }
        ]
      },
      {
        id: "5th-u1-l3",
        unitId: 51,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: سوق الشورجة والماضي البسيط (Souq Al-Shorja & Past Simple)",
        titleEn: "Lesson 3: Visiting Souq Al-Shorja & Past Simple (Regular vs Irregular)",
        category: "grammar",
        summary: "جولة تاريخية في سوق الشورجة القديم في بغداد مع دراسة زمن الماضي البسيط وقواعد إضافة ed وتصريف الأفعال الشاذة الشائعة.",
        sourcePages: "الملزمة ص 12 - 16",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "كتاب الطالب ص 8؛ الملزمة ص 9",
          verificationNote: "النص الكامل لقراءة Souq Al-Shorja موجود في صفحة المصدر 9، وهو مستقل عن شرح قاعدة الماضي البسيط أدناه.",
          originalText: [
            "Last week, I visited a very special place in Baghdad for the first time. It is Souq Al-Shorja. My guide on this amazing visit was my Iraqi friend Hassan. We found out that Souq Al-Shorja stands at the heart of Baghdad, Iraq, a place with a rich history that goes way back. As we stepped into the market, we were surrounded by a variety of shops, each offering something unique. The air was filled with the delightful aromas of spices, and the vibrant colours of clothes caught our eye at every turn. While wandering through the market, we noticed a mix of old and new buildings, telling stories of both the past and the present.",
            "The friendly people selling their goods offered us handmade items and delicious Iraqi snacks to share. While we were walking through the lively crowds, we sensed the energy of daily-life conversations, laughter and the excitement of bargaining. Souq Al-Shorja isn’t just a simple market; it’s a vivid snapshot of Iraqi life and culture, and a place that everyone should visit."
          ]
        },
        grammarRuleFormula: "Past Simple Tense:\n- S + V-ed (Regular) / V2 (Irregular)\n- Negative: S + did not (didn't) + Base verb\n- Question: Did + S + Base verb...?\n- Time expressions: yesterday, ago, last (night/week/year), in 2010.",
        detailedContent: [
          "سوق الشورجة (Souq Al-Shorja): أقدم وأعرق أسواق بغداد؛ يشتهر بروائح التوابل والبهارات والأعشاب والمكسرات والأقمشة التراثية.",
          "صياغة الماضي البسيط: يضاف -ed للأفعال القياسية (visit -> visited, want -> wanted)، وتتحول الأفعال الشاذة إلى صيغتها الثانية (buy -> bought, see -> saw, go -> went, spend -> spent).",
          "فعل الكينونة في الماضي (was / were): المفرد (I, He, She, It) يأخذ was، والجمع (We, You, They) يأخذ were.",
          "نفي الماضي: نستخدم didn't مع تجريد الفعل إلى المصدر: They didn't buy any spices."
        ],
        teacherNotes: [
          "تنبيه ذهبي من الملزمة ص 14: بعد Did أو Didn't يجب دائماً إعادة الفعل إلى المصدر المجرد الخالي من أي إضافة: Did you go? (وليس Did you went)."
        ],
        examples: [
          {
            en: "We visited Souq Al-Shorja yesterday and bought wonderful traditional spices.",
            ar: "زرنا سوق الشورجة أمس واشترينا توابل تراثية رائعة.",
            highlight: "visited / bought",
            note: "فعل قياسي visited وفعل شاذ bought في الماضي البسيط"
          }
        ],
        exercises: [
          {
            id: "5u1-ex4",
            question: "They ______ (not / go) to the market last Friday because it was closed.",
            options: ["didn't go", "didn't went", "don't go", "weren't go"],
            correctAnswer: "didn't go",
            explanation: "في الماضي البسيط مع النفي نستخدم didn't متبوعة بالمصدر المجرد go (الملزمة ص 15).",
            type: "mcq",
            sourcePages: "الملزمة ص 15"
          }
        ]
      },
      {
        id: "5th-u1-l4",
        unitId: 51,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: حادث دراجة هادي والماضي المستمر (Hadi's Accident & Past Continuous)",
        titleEn: "Lesson 4: Hadi's Scooter Accident, Past Continuous & Linking Words (when, while, as)",
        category: "grammar",
        summary: "حادث دراجة هادي وربط الماضي المستمر والماضي البسيط باستخدام أدوات الربط (while, as, when, and).",
        sourcePages: "الملزمة ص 17 - 21",
        grammarRuleFormula: "1) Past Continuous: S + was/were + V-ing\n2) Rules for linking words:\n   - While / As + Past Continuous (was/were + V-ing) , Past Simple (V-ed/V2)\n   - When / And + Past Simple (V-ed/V2) , Past Continuous (was/were + V-ing)",
        detailedContent: [
          "حادث هادي (Hadi's scooter): بينما كان هادي يقود دراجته بسرعة، قفزت قطة فجأة أمام العجلة فسقط وأصيبت ركبته.",
          "الحدث الأطول المستمر يأخذ الماضي المستمر (was riding his scooter)، والحدث المفاجئ القصير المقاطع يأخذ الماضي البسيط (a cat ran into the road).",
          "موقع أداة الربط: تأتي while و as متبوعة دائماً بالماضي المستمر: While he was riding, he fell off.",
          "تأتي when و and متبوعة دائماً بالماضي البسيط: He was riding his scooter when he fell off."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 19: (While و As يحبون ing)، بينما (When و And يحبون الماضي البسيط)."
        ],
        examples: [
          {
            en: "While Hadi was riding his scooter, a cat ran across the street.",
            ar: "بينما كان هادي يقود دراجته، ركضت قطة عبر الشارع.",
            highlight: "While was riding / ran",
            note: "ماضي مستمر بعد while وماضي بسيط للحدث القاطع"
          }
        ],
        exercises: [
          {
            id: "5u1-ex5",
            question: "As she ______ (carry) the shopping bags, she dropped her phone on the pavement.",
            options: ["was carrying", "carried", "is carrying", "were carrying"],
            correctAnswer: "was carrying",
            explanation: "بعد أداة الربط As يأتي ماضي مستمر (she مفرد تأخذ was carrying) (الملزمة ص 20).",
            type: "mcq",
            sourcePages: "الملزمة ص 20"
          }
        ]
      },
      {
        id: "5th-u1-l5",
        unitId: 51,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: رحلة إلى اسكتلندا والمضارع التام البسيط (Trip to Scotland & Present Perfect Simple)",
        titleEn: "Lesson 5: Trip to Scotland, Present Perfect Simple & been vs gone",
        category: "grammar",
        summary: "استخدام المضارع التام البسيط لربط الماضي بالحاضر، الفروقات بين ظروف ever, never, just, already, yet، والفرق الجوهري بين been to و gone to.",
        sourcePages: "الملزمة ص 22 - 26",
        grammarRuleFormula: "Present Perfect Simple:\n- S + have/has + Past Participle (P.P.)\n- have: I / You / We / They\n- has: He / She / It\n- Adverbs:\n  * ever: في السؤال فقط (Have you ever...?)\n  * never: في الجملة المثبتة لتعطي معنى النفي القطعي\n  * just / already: مع الإثبات بعد have/has\n  * yet: في نهاية جملة النفي والاستفهام فقط\n- been to: ذهب وعاد (أو لم يذهب أبداً)\n- gone to: ذهب ولم يعد بعد (ما زال هناك)",
        detailedContent: [
          "رحلة اسكتلندا (Scotland trip): تقرير سياحي عن قلاع اسكتلندا القديمة والبحيرات الجبلية العميقة.",
          "الفرق بين been و gone (الملزمة ص 24): نقول 'Sami has gone to London' إذا كان سامي حالياً في لندن ولم يرجع، ونقول 'Sami has been to London' إذا سافر إلى هناك وعاد إلى العراق.",
          "تصاريف الأفعال الشائعة في P.P.: be -> been, go -> gone, see -> seen, write -> written, eat -> eaten.",
          "استخدام Yet: تأتي دائماً في نهاية الجمل المنفية والأسئلة: Have you packed your suitcase yet? / I haven't finished yet."
        ],
        teacherNotes: [
          "فخ الملزمة ص 25: إذا كان الشخص لا يزال مسافراً في بلد آخر نختار (gone). إذا كان يتحدث أمامك عن رحلته، فهو قد عاد حتماً فنختار (been)."
        ],
        examples: [
          {
            en: "Have you ever visited an ancient castle in Scotland?",
            ar: "هل سبق لك أبداً أن زرت قلعة قديمة في اسكتلندا؟",
            highlight: "Have you ever visited",
            note: "استخدام ever في السؤال بالمضارع التام"
          },
          {
            en: "Tariq is not here right now; he has gone to the supermarket.",
            ar: "طارق ليس هنا الآن؛ لقد ذهب إلى السوبرماركت (ولم يعد بعد).",
            highlight: "has gone",
            note: "استخدام gone لأن الشخص غير موجود حالياً"
          }
        ],
        exercises: [
          {
            id: "5u1-ex6",
            question: "Where is Layla? - She isn't at home; she has ______ (been / gone) to the dentist.",
            options: ["gone", "been", "go", "went"],
            correctAnswer: "gone",
            explanation: "ليلى ليست في المنزل حالياً (she isn't at home) مما يعني أنها ذهبت ولم تعد بعد، لذا نختار gone (الملزمة ص 25).",
            type: "mcq",
            sourcePages: "الملزمة ص 25"
          }
        ]
      },
      {
        id: "5th-u1-l6",
        unitId: 51,
        lessonNumber: 6,
        titleAr: "الدرس السادس: الأسئلة الذيلية (Question Tags)",
        titleEn: "Lesson 6: Question Tags (Positive Statements -> Negative Tags & vice versa)",
        category: "grammar",
        summary: "قواعد تكوين الأسئلة الذيلية القصيرة للتأكد وطلب الموافقة، وتحويل الجمل المثبتة إلى ذيل منفي والمنفية إلى ذيل مثبت.",
        sourcePages: "الملزمة ص 27 - 29",
        grammarRuleFormula: "Question Tag Formula:\n- Auxiliary Verb + Pronoun Subject?\n- Positive sentence -> Negative tag (e.g., You are Iraqi, aren't you?)\n- Negative sentence -> Positive tag (e.g., You haven't seen Ali, have you?)\n- With Present Simple: use do / does -> don't / doesn't\n- With Past Simple: use did -> didn't\n- Special cases: I am -> aren't I? / Let's -> shall we?",
        detailedContent: [
          "تعريف السؤال الذيلي: سؤال قصير يوضع في نهاية الجملة للحصول على تأكيد أو موافقة من السامع.",
          "القاعدة العامة: عكس الإثبات والنفي دائماً. إذا كانت الجملة الأصلية مثبتة يكون الذيل منفياً مختصراً (isn't, aren't, didn't, haven't, won't)، وإذا كانت الجملة منفية يكون الذيل مثبتاً.",
          "الضمير: يجب أن ينتهي السؤال الذيلي بضمير فاعل يعود على اسم الفاعل: Ahmed is clever, isn't he?",
          "الأفعال الخالية من المساعد: إذا كانت الجملة في المضارع البسيط نستخدم do/does، وإذا كانت ماضياً بسيطاً نستخدم did."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 28: احفظ الحالات الشاذة: I am late, aren't I? (وليس amn't I). وكذلك Let's go, shall we?"
        ],
        examples: [
          {
            en: "You live in Baghdad, don't you?",
            ar: "أنت تعيش في بغداد، أليس كذلك؟",
            highlight: "don't you?",
            note: "جملة مضارع بسيط مثبتة بدون فعل مساعد، أخذت don't you"
          }
        ],
        exercises: [
          {
            id: "5u1-ex7",
            question: "Salma speaks English fluently, ______?",
            options: ["doesn't she", "does she", "isn't she", "hasn't she"],
            correctAnswer: "doesn't she",
            explanation: "الجملة مثبتة في المضارع البسيط مع الفاعل Salma (she)، لذا نستخدم الفعل المساعد المنفي doesn't متبوعاً بالضمير she (الملزمة ص 29).",
            type: "mcq",
            sourcePages: "الملزمة ص 29"
          }
        ]
      },
      {
        id: "5th-u1-l7",
        unitId: 51,
        lessonNumber: 7,
        titleAr: "الدرس السابع: المضارع التام المستمر و for/since (Present Perfect Continuous & for/since)",
        titleEn: "Lesson 7: Present Perfect Continuous with for and since",
        category: "grammar",
        summary: "التعبير عن نشاط بدأ في الماضي ولا يزال مستمراً حتى الوقت الحاضر مع بيان المدة الزمنية بواسطة for أو نقطة البداية بواسطة since.",
        sourcePages: "الملزمة ص 30 - 33",
        grammarRuleFormula: "1) Present Perfect Continuous:\n   S + have/has + been + V-ing\n2) Rules for Since & For:\n   - Since + نقطة بداية محددة (2015, yesterday, 8 o'clock, Monday, October, I was young)\n   - For + مدة زمنية محسوبة ومجملة (two hours, three days, five years, a long time, ages)",
        detailedContent: [
          "نستخدم زمن المضارع التام المستمر للتركيز على استمرارية الفعل وطول مدته: He has been waiting for the bus for 40 minutes.",
          "استخدام Since: تأتي مع اسم نقطة البداية الزمنية المحددة: since 2018, since last week, since breakfast.",
          "استخدام For: تأتي مع عدد الوحدات الزمنية الإجمالية: for six months, for ten minutes, for three weeks.",
          "السؤال عن المدة (How long): How long have you been studying English? - I have been studying English for five years."
        ],
        teacherNotes: [
          "قاعدة ذهبية بالملزمة ص 32: إذا رأيت عبارة فيها رقم متبوع بـ (hours, days, weeks, months, years) أو كلمة (a long time, a century) اختر (for). أما إذا رأيت سنة بالرقم مثل (2005) أو يوماً بالاسم مثل (Friday) اختر (since)."
        ],
        examples: [
          {
            en: "Zaid has been working on his project since morning.",
            ar: "زيد يعمل على مشروعه منذ الصباح.",
            highlight: "has been working / since morning",
            note: "مضارع تام مستمر مع نقطة بداية محددة since morning"
          }
        ],
        exercises: [
          {
            id: "5u1-ex8",
            question: "I have lived in this neighbourhood ______ ten years.",
            options: ["for", "since", "ago", "from"],
            correctAnswer: "for",
            explanation: "المدة الزمنية مجملة ومحسوبة بالسنوات (ten years)، لذا نختار for (الملزمة ص 33).",
            type: "mcq",
            sourcePages: "الملزمة ص 33"
          }
        ]
      },
      {
        id: "5th-u1-l8",
        unitId: 51,
        lessonNumber: 8,
        titleAr: "الدرس الثامن: مهرجان بابل الدولي (The Babylon International Festival)",
        titleEn: "Lesson 8: The Babylon International Festival - History, Culture & Venues",
        category: "reading",
        summary: "قراءة عن مهرجان بابل الدولي: تاريخه منذ أول دورة عام 1987، أنشطته الثقافية والفنية، والمسارح الثلاثة التي تستضيف فعالياته.",
        sourcePages: "الملزمة ص 34 - 36",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "32–33",
          verificationNote: "يتضمن المصدر مقال مهرجان بابل الدولي ورسالة Bilal إلى Mike والبرنامج المرفق للفعاليات.",
          originalText: [
            "The Babylon International Festival for International Arts and Cultures is held each year in the ancient city of Babylon, which is about 85 kilometres south of Baghdad. Ever since the first Festival in 1987, the event has attracted many excellent groups from all regions of Iraq and all over the world. They come to perform many types of music, especially folk music, musical theatre, opera and ballet. Famous writers and poets come to discuss and read their works, and there are many lectures and seminars held on a wide range of literary, artistic, cultural and archeological topics. The Festival has become a popular media event and is now discussed in print and on television and on the internet by a very wide audience.",
            "The beautiful and historic city of Babylon is the perfect venue for this kind of international festival. There are three main theatres, all equipped with modern sound and lighting equipment, recording and transmission systems, and the best facilities for the artists to use to prepare for their performances.",
            "The Babylonian Theatre is the biggest amphitheatre in the city and has kept its ancient atmosphere. The Al Arsh (Throne) Auditorium is the largest hall in historical Babylon. It was once the administrative centre of the Babylonian Empire, used to receive kings and victorious military leaders.",
            "Ninimach Temple Hall was once the private temple of Ninimach, the ‘Great Lady of the Heavens’, who used to worship there. It is now used for some of the smaller but very high quality performances in the Festival.",
            "Dear Mike,\nThanks for your email. I’m having a great time at the moment. We’ve got the Babylon International Festival here this month so there’s lots to see and do.\nI’ve been to three plays so far this week! Two of the plays were by Iraqi writers. They were both excellent. One was by a Lebanese writer and had the famous Tunisian artist Latifa in it. At one point she started chanting a really popular poem and some people behind us joined in. My father got really annoyed with them and told them to be quiet! I was really embarrassed.\nI’ve also attended an interesting seminar on the history of Babylon and how the Festival came to be. It had a lot of interesting videos and pictures that amazed me. In fact, I actually bought the documentary CD because I knew my sister would enjoy learning more about the fabulous history of Babylon.\nI’ve also been to a really good photo exhibition. It’s given me some brilliant new ideas. I’ve decided I want to be a professional photographer one day. So when the school holidays start, I’m going to practise all day long with my new camera!\nWrite to me soon,\nBilal\nPS I’m sending you a magazine article about the Babylon International Festival and a programme of the events."
          ]
        },
        detailedContent: [
          "يقام مهرجان بابل الدولي سنوياً في مدينة بابل الأثرية، على بعد نحو 85 كيلومتراً جنوب بغداد. ويذكر النص أن أول دورة أقيمت عام 1987.",
          "تتضمن فعاليات المهرجان الموسيقى الشعبية والمسرح الموسيقي والأوبرا والباليه، إضافة إلى القراءات الأدبية والمحاضرات والندوات.",
          "يذكر النص ثلاثة أماكن رئيسية: Babylonian Theatre، وAl Arsh (Throne) Auditorium، وNinimach Temple Hall.",
          "المسرح البابلي هو أكبر مدرج في المدينة وقد احتفظ بأجوائه القديمة. أما قاعة العرش فهي أكبر قاعة في بابل التاريخية، وكانت مركزاً إدارياً لاستقبال الملوك والقادة العسكريين المنتصرين.",
          "كان Ninimach Temple Hall معبداً خاصاً للإلهة Ninimach، ويُستخدم في المهرجان للعروض الأصغر حجماً ولكن عالية الجودة."
],        teacherNotes: [
          "أسئلة فهم من النص (ص 32–34):",
          "1. When was the first Babylon International Festival held? -> In 1987.",
          "2. How far is Babylon from Baghdad? -> About 85 kilometres south of Baghdad.",
          "3. How many main theatres are there? -> Three.",
          "4. Which venue is the biggest amphitheatre in the city? -> The Babylonian Theatre.",
          "5. Which venue is the largest hall in historical Babylon? -> Al Arsh (Throne) Auditorium."
],        examples: [
          {
            en: "The Babylon International Festival brings together performers from all across the world.",
            ar: "يجمع مهرجان بابل الدولي فنانين ومؤدين من جميع أنحاء العالم.",
            highlight: "Babylon International Festival",
            note: "جملة نموذجية من كتاب الطالب ص 14"
          }
        ],
        exercises: [
          {
                    "id": "5u1-ex9",
                    "question": "How many main theatres are mentioned for the Babylon International Festival?",
                    "options": [
                              "Three",
                              "Two",
                              "Four",
                              "Five"
                    ],
                    "correctAnswer": "Three",
                    "explanation": "يذكر النص وجود ثلاثة مسارح رئيسية مجهزة للمهرجان.",
                    "type": "mcq",
                    "sourcePages": "الملزمة ص 32"
          },
          {
                    "id": "5u1-ex10",
                    "question": "Which venue is described as the biggest amphitheatre in the city?",
                    "options": [
                              "The Babylonian Theatre",
                              "Al Arsh Auditorium",
                              "Ninimach Temple Hall",
                              "City Centre Lobby"
                    ],
                    "correctAnswer": "The Babylonian Theatre",
                    "explanation": "يصف النص المسرح البابلي بأنه أكبر مدرج في المدينة.",
                    "type": "mcq",
                    "sourcePages": "الملزمة ص 32"
          }
]
      }
    ]
  },
  {
    id: 52,
    number: 2,
    titleAr: "الوحدة الثانية: التكنولوجيا والاتصالات والاستنتاج (Technology & Deductions)",
    titleEn: "Unit 2: Mobile Devices, Zero Conditional, Digital Poverty, Past Deductions & Inventions",
    description: "الأجهزة الذكية والأسماء المركبة، صيغة الأمر والحالة الشرطية الصفرية، مؤسسة 'We Are Connected' والفقر الرقمي، عبارات الهاتف، ظروف الطريقة، الاستنتاج في الماضي بـ must/can't/might have، واختراع شبكة الويب.",
    accentColor: "bg-cobalt text-surface",
    bgGradient: "bg-blue-mist border-ink",
    sourcePages: "الملزمة ص 39 - 71",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "5th-u2-l1",
        unitId: 52,
        lessonNumber: 1,
        titleAr: "الدرس الأول: أجهزة الهاتف والأسماء المركبة ومصطلحات الرسائل (Mobile Devices & Compound Nouns)",
        titleEn: "Lesson 1: Smart Mobile Devices, Compound Nouns & SMS Abbreviations",
        category: "vocabulary",
        summary: "الأسماء المركبة الخاصة بالتكنولوجيا الذكية، واختصارات الرسائل النصية الشائعة (SMS text abbreviations).",
        sourcePages: "الملزمة ص 40 - 43",
        grammarRuleFormula: "1) Compound Nouns (أسماء مركبة):\n   mobile phone (هاتف محمول), touch screen (شاشة لمس), memory card (بطاقة ذاكرة), SIM card (شريحة اتصال), text message (رسالة نصية), charger (شاحن), battery life (عمر البطارية)\n2) Text Abbreviations (اختصارات الرسائل):\n   BTW = By the way | C U L8R = See you later | IDK = I don't know | PLS = Please | THX = Thanks",
        detailedContent: [
          "الأسماء المركبة (Compound Nouns): تتكون من كلمتين تجتمعان لتعطيا معنى واحداً جديداً خاصاً بمعدات الهواتف.",
          "اختصارات الرسائل النصية القصيرة (AB p. 24): تستخدم لسرعة الكتابة وتوفير مساحة الأحرف في المحادثات الرقمية.",
          "تمرين كتاب النشاط ص 25: مطابقة الأسماء المركبة وتوصيل التعاريف."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 42: احفظ إملاء الأسماء المركبة (touch screen, memory card, mobile phone) لأنها ترد في سؤال الإملاء والمفردات الوزاري."
        ],
        examples: [
          {
            en: "My smartphone needs a new memory card to store more high-resolution photos.",
            ar: "هاتفي الذكي يحتاج بطاقة ذاكرة جديدة لتخزين المزيد من الصور عالية الدقة.",
            highlight: "memory card",
            note: "اسم مركب من تمرين المفردات"
          }
        ],
        exercises: [
          {
            id: "5u2-ex1",
            question: "In SMS chat messages, the abbreviation 'C U L8R' means ______.",
            options: ["See you later", "Call you later", "Come under light", "Catch you lively"],
            correctAnswer: "See you later",
            explanation: "الاختصار C U L8R يقرأ صوتياً كـ 'See you later' (الملزمة ص 42).",
            type: "mcq",
            sourcePages: "الملزمة ص 42"
          }
        ]
      },
      {
        id: "5th-u2-l2",
        unitId: 52,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: صيغة الأمر والحالة الشرطية الصفرية (Imperatives & Zero Conditional)",
        titleEn: "Lesson 2: Imperatives for Instructions & Zero Conditional for Universal Truths",
        category: "grammar",
        summary: "إعطاء الأوامر والتعليمات بواسطة صيغة الأمر (Imperatives)، والحالة الشرطية الصفرية (Zero Conditional) للحقائق العلمية والعادات الثابتة.",
        sourcePages: "الملزمة ص 44 - 47",
        grammarRuleFormula: "1) Imperatives:\n   - Positive: Base Verb (e.g., Press the button / Plug in the charger)\n   - Negative: Don't + Base Verb (e.g., Don't touch the screen with wet hands)\n\n2) Zero Conditional:\n   - If / When + Present Simple , Present Simple\n   - Example: If you press this switch, the light turns on.\n   - Example: Plants die if they don't get water.",
        detailedContent: [
          "صيغة الأمر (Imperatives): تبدأ بالفعل بالمصدر المجرد بدون فاعل لتقديم التعليمات أو النصائح أو الإرشادات التقنية.",
          "الحالة الشرطية الصفرية (Zero Conditional): تعبر عن حقيقة عامة علمية أو بديهية تحدث دائماً كنتيجة حتمية للشرط، وكلا الفعلين (في جملة الشرط وجواب الشرط) يكونان في زمن المضارع البسيط (Present Simple).",
          "استبدال If بـ When: في الحالة الصفرية يمكن استخدام When محل If دون أي تغيير في المعنى."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 46: في جملة الحالة الصفرية، انتبه إلى مفرد الغائب (He / She / It) حيث يأخذ الفعل حرف (s) في كلا الطرفين: If the temperature drops below zero, water freezes."
        ],
        examples: [
          {
            en: "If you heat water to 100 degrees, it boils.",
            ar: "إذا سخنت الماء إلى 100 درجة مئوية، فإنه يغلي.",
            highlight: "heat / boils",
            note: "حالة صفرية: كلا الفعلين مضارع بسيط لأنها حقيقة علمية مطلقة"
          }
        ],
        exercises: [
          {
            id: "5u2-ex2",
            question: "If water reaches zero degrees Celsius, it ______ (freeze).",
            options: ["freezes", "will freeze", "would freeze", "froze"],
            correctAnswer: "freezes",
            explanation: "حقيقة علمية ثابتة تتطلب الحالة الشرطية الصفرية (Zero Conditional) مع إضافة s المفرد الغائب (freezes) (الملزمة ص 46).",
            type: "mcq",
            sourcePages: "الملزمة ص 46"
          }
        ]
      },
      {
        id: "5th-u2-l3",
        unitId: 52,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: مبادرة راشد زيد والفقر الرقمي (Rashid Zeid & Digital Poverty)",
        titleEn: "Lesson 3: Rashid Zeid & 'We Are Connected' Charity - Tackling Digital Poverty",
        category: "reading",
        summary: "رسالة Justin Cartwright إلى Rashid يعرض فيها إصلاح الحواسيب المتبرع بها مجاناً، ومقال يوضح أثر نقص الحاسوب والإنترنت في تعلم الأطفال والفجوة الرقمية.",
        sourcePages: "الملزمة ص 48 - 51",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "48",
          verificationNote: "صفحة المصدر 48 تتضمن رسالة Justin Cartwright إلى Rashid ونص We need computers؛ أُدرجا كنصين أصليين منفصلين داخل هذا الدرس.",
          originalText: [
            "Dear Rashid,\nYou don’t know me, but I heard about your organization, We Are Connected, through my niece Amy, who is a friend of yours. I loved your idea and would very much like to help. I own a computer repair shop, and I would be happy to fix any computers you receive that have any problems (completely for free, of course).\nPlease let me know if you’re interested and we can arrange the details.\nBye for now,\nJustin Cartwright",
            "We need computers …\nIn recent decades, access to computers and the internet has made a big difference in the education of millions of children. Those without computers at home had difficulties doing homework or searching information. However, an already difficult situation has become even worse during the pandemic. With only lessons online, those without access to the internet cannot study at all. There are many organizations working to close the digital gap, but these students need help urgently."
          ]
        },
        detailedContent: [
          "رسالة Justin Cartwright: سمع عن منظمة We Are Connected من ابنة أخته Amy، وأعجب بفكرتها، وعرض أن يصلح مجاناً أي حواسيب تتلقاها المنظمة وتحتاج إلى إصلاح.",
          "مشكلة الفقر الرقمي: الأطفال الذين لا يملكون حواسيب في المنزل يواجهون صعوبة في أداء الواجبات والبحث عن المعلومات.",
          "أثناء الجائحة ازدادت المشكلة لأن الدروس أصبحت عبر الإنترنت؛ فالطلاب الذين لا يملكون اتصالاً بالإنترنت لا يستطيعون متابعة الدراسة بهذه الطريقة.",
          "يؤكد المقال أن هناك منظمات تعمل على سد الفجوة الرقمية، وأن الطلاب المحتاجين إلى الأجهزة والاتصال يحتاجون إلى المساعدة بصورة عاجلة."
],        teacherNotes: [
          "أسئلة فهم مستندة إلى نص الصفحة 48:",
          "1. What does Justin Cartwright offer to do? -> He offers to repair computers received by the organization for free.",
          "2. Why do children without computers at home have difficulties? -> They have difficulties doing homework or searching for information.",
          "3. Why did the situation become worse during the pandemic? -> Lessons were online, so students without internet access could not study."
],        examples: [
          {
                    "en": "I would be happy to fix any computers you receive that have any problems — completely for free.",
                    "ar": "يسعدني إصلاح أي حواسيب تتلقونها وتكون فيها مشكلات، مجاناً تماماً.",
                    "highlight": "fix any computers / for free",
                    "note": "عرض Justin Cartwright الوارد في الرسالة"
          }
],        exercises: [
          {
                    "id": "5u2-ex3",
                    "question": "What does Justin Cartwright offer to do for We Are Connected?",
                    "options": [
                              "Repair computers the organization receives, free of charge",
                              "Sell new laptops to students",
                              "Provide paid internet subscriptions",
                              "Build a new school computer laboratory"
                    ],
                    "correctAnswer": "Repair computers the organization receives, free of charge",
                    "explanation": "يعرض Justin إصلاح الحواسيب التي تتلقاها المنظمة مجاناً.",
                    "type": "mcq",
                    "sourcePages": "الملزمة ص 48"
          }
]
      },
      {
        id: "5th-u2-l4",
        unitId: 52,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: عبارات المحادثة الهاتفية (Telephone Phrases)",
        titleEn: "Lesson 4: Formal & Informal Telephone Language & Etiquette",
        category: "vocabulary",
        summary: "العبارات والاصطلاحات المستخدمة في المكالمات الهاتفية الرسمية وغير الرسمية (التعريف بالنفس، طلب التحدث، ترك رسالة، والانتظار).",
        sourcePages: "الملزمة ص 52 - 54",
        grammarRuleFormula: "Telephone Phrases:\n- Introducing yourself: 'This is Ali' (not *I am Ali)\n- Asking for someone: 'Could I speak to Mr. Kareem, please?' / 'Is Sarah there?'\n- Asking caller's identity: 'Who's calling, please?'\n- Asking to wait: 'Hold on a moment, please' / 'Hang on'\n- Taking a message: 'Can I take a message?' / 'Would you like to leave a message?'\n- Bad line: 'I'm afraid the line is breaking up / The signal is poor.'",
        detailedContent: [
          "قواعد المكالمات الهاتفية بالإنكليزية: لا نقول 'I am...' عند التعريف بالاسم على الهاتف، بل نقول 'This is...' أو 'Ali speaking'.",
          "اللباقة الرسمية: استخدام Could I و Would you like بدلاً من صيغ الأمر المباشرة.",
          "تمرين كتاب النشاط ص 28: إكمال الحوارات الهاتفية واختيار العبارة الأنسب لكل موقف."
        ],
        teacherNotes: [
          "فخ شائع بالملزمة ص 53: في المكالمة الهاتفية، إذا سألك المتصل من المتكلم، الجواب الصحيح هو: 'This is Ahmed' وليس 'I am Ahmed'."
        ],
        examples: [
          {
            en: "Hold on a moment, please; I will put you through to the manager.",
            ar: "انتظر لحظة رجاءً؛ سأحولك إلى المدير.",
            highlight: "Hold on / put you through",
            note: "عبارة رسمية مستخدمة في خدمة العملاء والمكاتب"
          }
        ],
        exercises: [
          {
            id: "5u2-ex4",
            question: "When answering the phone, you say: 'Hello, ______ Omar speaking.'",
            options: ["this is", "I am", "here is", "myself is"],
            correctAnswer: "this is",
            explanation: "في الأعراف اللغوية للإنكليزية، نقول على الهاتف 'This is [Name] speaking' (الملزمة ص 53).",
            type: "mcq",
            sourcePages: "الملزمة ص 53"
          }
        ]
      },
      {
        id: "5th-u2-l5",
        unitId: 52,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: so / such... that وظروف الطريقة (so / such... that & Adverbs of Manner)",
        titleEn: "Lesson 5: Cause and Effect with so... that, such... that & Adverbs of Manner",
        category: "grammar",
        summary: "الربط بين السبب والنتيجة باستخدام so... that و such... that، وقواعد صياغة ظروف الطريقة بإضافة ly والمفردات الشاذة.",
        sourcePages: "الملزمة ص 55 - 58",
        grammarRuleFormula: "1) Cause & Effect:\n   - Subject + verb + so + Adjective / Adverb + that + Sentence\n     Example: The phone was so expensive that I couldn't buy it.\n   - Subject + verb + such + (a/an) + Adjective + Noun + that + Sentence\n     Example: It was such an interesting lecture that everyone listened carefully.\n\n2) Adverbs of Manner:\n   - Adjective + ly -> Adverb (slow -> slowly, quick -> quickly, careful -> carefully)\n   - Irregulars: good -> well, fast -> fast, hard -> hard, late -> late, early -> early.",
        detailedContent: [
          "الفرق بين so و such: تأتي so متبوعة بصفة فقط أو ظرف فقط (so fast, so tired)، بينما تأتي such متبوعة بصفة يليها اسم موصوف (such a great car, such noisy children).",
          "ظروف الطريقة (Adverbs of Manner): تصف كيف يتم الفعل وتأتي بعد الفعل الرئيسي: He drives carefully.",
          "الظروف الشاذة: Good تتحول إلى well (وليس goodly)، والكلمات fast, hard, late تبقى كما هي بدون إضافة ly."
        ],
        teacherNotes: [
          "قاعدة الملزمة الذهبية ص 56: انظر للكلمات التي بين القوسين و that: إذا وجدت (صفة + اسم) اختر such! إذا وجدت (صفة لوحدها) اختر so!"
        ],
        examples: [
          {
            en: "He spoke so quietly that no one could hear him.",
            ar: "تحدث بهدوء شديد لدرجة أن أحداً لم يتمكن من سماعه.",
            highlight: "so quietly that",
            note: "so متبوعة بظرف طريقة quietly"
          },
          {
            en: "It was such a hot day that we decided to stay at home.",
            ar: "كان يوماً حاراً جداً لدرجة أننا قررنا البقاء في المنزل.",
            highlight: "such a hot day that",
            note: "such متبوعة بـ (a + صفة + اسم)"
          }
        ],
        exercises: [
          {
            id: "5u2-ex5",
            question: "It was ______ a difficult exam that many students couldn't finish in time.",
            options: ["such", "so", "very", "too"],
            correctAnswer: "such",
            explanation: "وجود أداة النكرة والصفة والاسم (a difficult exam) يوجب استخدام such (الملزمة ص 57).",
            type: "mcq",
            sourcePages: "الملزمة ص 57"
          }
        ]
      },
      {
        id: "5th-u2-l6",
        unitId: 52,
        lessonNumber: 6,
        titleAr: "الدرس السادس: اختراعات غيرت العالم وشبكة الويب (Inventions that Changed the World & The Web)",
        titleEn: "Lesson 6: Tim Berners-Lee, Robert Cailliau & The Invention of the World Wide Web",
        category: "reading",
        summary: "قراءة بعنوان Inventions That Have Changed the World تشرح شبكة الإنترنت واستخداماتها، وتعرض النص أسماء Tim Berners-Lee وRobert Cailliau وسنة 1990 كما وردت في الملزمة.",
        sourcePages: "الملزمة ص 59 - 62",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "57",
          verificationNote: "النص الكامل بعنوان Inventions That Have Changed the World / The Internet مطابق لصفحة المصدر 57.",
          originalText: [
            "What do you do if you want to know about a high school volleyball team in Beirut? Who can your brother ask if he wants to find a language school in Scotland where he can study English this summer? Where can your sister get the latest information if she has to write an essay about climate change? And what should you all do if you want to know about a festival? The answer is simple. You go onto the internet and look for a useful website.",
            "The internet – sometimes called the world wide web (www) – is a huge international network of computers. It was invented in 1990 by two computer scientists – Tim Berners-Lee from Britain and Robert Cailliau from Belgium. At the time, they were both working at a physics laboratory in Switzerland. They invented the system to help scientists to share ideas and information. In 1993, the internet became public and it grew very fast. Today, it is used by billions of people all over the world and its use is still growing.",
            "To go online, all you need is a computer and an internet router or Wi-Fi. And if you look at the statistics, all teenagers in the United States are connecting regularly. A recent survey showed that 97% of teenagers use the internet at least daily, and 46% say they use it ‘almost constantly’. They often go online on their phones, through a browser or via apps. Most of these also say that they frequently go online to play games (72%) and listen to music. Most American teens (51%) prefer to stream music these days, rather than download it (20%).",
            "Another very popular online activity among teens is social media. Social media platforms like YouTube (95%) and TikTok (67%) are among the most popular with teens, while others like Facebook (32%) are now less used by teens. Teenagers often use social media to chat, post photos or exchange memes. They also follow their favourite celebrities and influencers to find out what they’re doing."
          ]
        },
        detailedContent: [
          "مقدمة النص: يوضح كيف يمكن استخدام الإنترنت للعثور على معلومات عن فريق رياضي أو مدرسة لغات أو موضوع بحث أو مهرجان.",
          "وفقاً للنص المقرر، يُسمّى الإنترنت أحياناً world wide web (www)، ويذكر أن النظام اخترعه عام 1990 عالما الحاسوب Tim Berners-Lee من بريطانيا وRobert Cailliau من بلجيكا أثناء عملهما في مختبر للفيزياء في سويسرا.",
          "يذكر النص أن الإنترنت أصبح متاحاً للعامة عام 1993، ثم انتشر بسرعة كبيرة.",
          "تتناول الفقرات اللاحقة استخدام المراهقين للإنترنت والألعاب والموسيقى ومنصات التواصل الاجتماعي، مع نسب الاستخدام الواردة في النص."
],        teacherNotes: [
          "التزم بتاريخ النص المقرر في أسئلة الفهم:",
          "1. Who invented the system described in the passage? -> Tim Berners-Lee and Robert Cailliau.",
          "2. Where were they working? -> At a physics laboratory in Switzerland.",
          "3. According to the passage, when was it invented? -> In 1990.",
          "4. When did it become public? -> In 1993."
],        examples: [
          {
            en: "According to the passage, Tim Berners-Lee and Robert Cailliau invented the system in 1990 while working at a physics laboratory in Switzerland.",
            ar: "بحسب نص الملزمة، اخترع تيم بيرنرز لي وروبرت كايو النظام عام 1990 أثناء عملهما في مختبر للفيزياء في سويسرا.",
            highlight: "1990 / Switzerland",
            note: "حقيقة تاريخية أساسية من قطعة الكتاب"
          }
        ],
        exercises: [
          {
            id: "5u2-ex6",
            question: "The World Wide Web (WWW) was invented in ______ by Tim Berners-Lee.",
            options: ["1990", "1989", "1999", "2005"],
            correctAnswer: "1990",
            explanation: "تذكر القطعة أن النظام اخترع عام 1990 (الملزمة ص 57).",
            type: "mcq",
            sourcePages: "الملزمة ص 57"
          }
        ]
      },
      {
        id: "5th-u2-l7",
        unitId: 52,
        lessonNumber: 7,
        titleAr: "الدرس السابع: الاستنتاج في الماضي (Deduction in the Past: must have / can't have / might have)",
        titleEn: "Lesson 7: Modals of Deduction in the Past (must have, can't have, might have + P.P.)",
        category: "grammar",
        summary: "استخدام الأفعال الناقصة مع have والتصريف الثالث لإطلاق استنتاجات منطقية شبه مؤكدة أو محتملة أو مستحيلة حول أحداث وقعت في الماضي.",
        sourcePages: "الملزمة ص 63 - 66",
        grammarRuleFormula: "Past Deductions Formula:\n- Subject + must have + P.P. (استنتاج شبه مؤكد بالإثبات = من المؤكد أنه حدث)\n  Example: The ground is wet; it must have rained last night.\n- Subject + can't have + P.P. (استنتاج شبه مؤكد بالنفي = من المستحيل أنه حدث)\n  Example: He only left five minutes ago; he can't have arrived in Basra already.\n- Subject + might have + P.P. (استنتاج مبني على احتمال ضعيف أو شك = ربما حدث)\n  Example: I can't find my keys; I might have left them at school.",
        detailedContent: [
          "مفهوم الاستنتاج (Deduction): بناء حكم منطقي بناءً على دليل وبصمة موجودة في الوقت الحاضر.",
          "Must have + P.P.: تعبر عن يقين بنسبة 95% بأن الفعل قد حدث في الماضي: He got 100%; he must have studied hard.",
          "Can't have + P.P.: تعبر عن يقين بنسبة 95% بأن الفعل مستحيل الوقوع في الماضي: The door was locked from inside; the thief can't have entered through it.",
          "Might have + P.P.: تعبر عن عدم التأكد والشك بنسبة 50%: Maybe she forgot her wallet; she might have forgotten it."
        ],
        teacherNotes: [
          "قاعدة الملزمة الذهبية ص 64: إذا رأيت عبارة (I am sure / definitely) مع إثبات استخدم (must have). وإذا رأيت (I am sure + not / impossible) استخدم (can't have). وإذا رأيت (perhaps / maybe / I am not sure) استخدم (might have)."
        ],
        examples: [
          {
            en: "Everything in the street is wet; it must have rained heavily during the night.",
            ar: "كل شيء في الشارع مبلل؛ من المؤكد أنها أمطرت بغزارة أثناء الليل.",
            highlight: "must have rained",
            note: "استنتاج إيجابي مؤكد لوجود دليل واضح (الشارع مبلل)"
          },
          {
            en: "Ali can't have stolen the money because he was in another city at the time.",
            ar: "من المستحيل أن يكون علي قد سرق المال لأنه كان في مدينة أخرى آنذاك.",
            highlight: "can't have stolen",
            note: "استنتاج سلبي مؤكد باستحالة الفعل"
          }
        ],
        exercises: [
          {
            id: "5u2-ex7",
            question: "I am certain Ali was not at the party yesterday. He ______ (be) there.",
            options: ["can't have been", "must have been", "might have been", "should have been"],
            correctAnswer: "can't have been",
            explanation: "اليقين بعدم حدوث الشيء (I am certain ... was not) يقتضي استخدام can't have been (من المستحيل أنه كان هناك) (الملزمة ص 65).",
            type: "mcq",
            sourcePages: "الملزمة ص 65"
          }
        ]
      },
      {
        id: "5th-u2-l8",
        unitId: 52,
        lessonNumber: 8,
        titleAr: "الدرس الثامن: تاريخ الهواتف المحمولة واستخداماتها (The History of Mobile Phones)",
        titleEn: "Lesson 8: The History and Uses of Mobile Phones",
        category: "reading",
        summary: "قراءة عن تطور الهواتف المحمولة من جهاز استخدمته الشرطة السويدية عام 1946 إلى الشبكات العامة والهواتف الحديثة، مع بيان فوائد الهواتف ومخاطر استخدامها أثناء القيادة.",
        sourcePages: "الملزمة ص 67 - 71",
        readingPassage: {
          status: "reconstructed",
          sourceTitle: "ملزمة الخامس الإعدادي 2026",
          sourcePages: "69–71",
          verificationNote: "المقال الأصلي وارد بصيغة إكمال فراغات؛ أُعيد ترتيب الجمل الست وفق خيارات تمرين المطابقة في صفحات المصدر. راجع النسخة المطبوعة قبل اعتماد الترتيب النهائي.",
          originalText: [
            "The first mobile phone was used by the Swedish police in 1946. It wasn’t anything like today’s mobile phones. It was only ‘mobile’ because it wasn’t plugged in. It didn’t even have its own battery. It used the car battery. After six calls, the car battery was flat. So it wasn’t a very useful thing and only the Swedish police had it.",
            "The first public mobile phone network, called ARP (AutoRadioPuhelin, or Car Radio Phone in English), came much later. It was made in Finland in 1978. The different parts of the equipment necessary to operate it were very heavy and big. They took up a lot of space in the boot of a car and it was very expensive.",
            "Today, mobile phones are small, light and easy to use. They are also everywhere: there are more than 15 billion mobile phones in use in the world. That means that there are nearly twice as many mobile phones on the planet than people! One reason the use of mobiles is rising so sharply is that they are becoming popular in China, India and Russia. These three countries have very big populations. In China there are now over 1.6 billion users – about 20% of the total number of users on the planet. India also has over a billion users and is the second largest phone market, while Russia has over 250 million users.",
            "Without a doubt, mobile phones can be very useful and can even save lives. After the earthquake in Afghanistan in October 2023, hundreds of people were found and rescued because of their mobile phones. Rescue workers were able to trace them even when the people did not know where they were. Families could get in touch with loved ones using mobile phones when landlines were no longer working.",
            "Mobile phones can cause problems as well. For example, it can be very annoying when someone’s mobile phone rings in a film, a concert or even an exam because the owner has forgotten to turn it off. But there are much more serious problems. A lot of car accidents have been caused by drivers talking on their mobiles. In most countries, it is now illegal to use a mobile while driving a car unless it is ‘hands-free’ (that means that you don’t hold the mobile in your hand). But many people think that even hands-free mobile phones are dangerous in cars. They say that drivers don’t think about the road and the traffic if they are talking on a mobile. They say it is different from talking to another person in a car. Another person in the car can see the traffic problems and will stop talking when the driver is in difficulty. But someone on the phone can’t see the driver’s situation.",
            "Love them or hate them, mobile phones are here to stay. And every year there are more things you can do with a mobile phone. You can use them to record videos, take photos, go on your social media and stream music and video. They are completely different from the Swedish police mobiles of 1946!"
          ]
        },
        detailedContent: [
          "أول هاتف محمول بحسب النص: استخدمته الشرطة السويدية عام 1946، وكان يعمل ببطارية السيارة لا ببطارية مستقلة؛ وبعد ست مكالمات فرغت بطارية السيارة.",
          "أول شبكة عامة للهواتف المحمولة في النص هي ARP (AutoRadioPuhelin)، وصُنعت في فنلندا عام 1978. وكانت المعدات ثقيلة وكبيرة وتشغل مساحة كبيرة في صندوق السيارة، كما كانت مكلفة.",
          "فوائد الهواتف: يذكر النص أن الهواتف ساعدت في العثور على أشخاص وإنقاذهم بعد زلزال أفغانستان في أكتوبر 2023، كما ساعدت العائلات على التواصل عندما تعطلت الخطوط الأرضية.",
          "المخاطر: قد تسبب الهواتف إزعاجاً في السينما أو الحفلات أو الامتحانات، كما أن التحدث بالهاتف أثناء القيادة قد يسبب حوادث حتى عند استخدام نظام hands-free، لأن المتحدث البعيد لا يرى ظروف الطريق."
],        teacherNotes: [
          "أسئلة الفهم من النص (الصفحات 69–71):",
          "1. Where was the first mobile phone used and when? -> By the Swedish police in 1946.",
          "2. Why wasn’t it very useful? -> After six calls, the car battery was flat.",
          "3. Where was the ARP public mobile phone network made? -> In Finland, in 1978.",
          "4. Why can hands-free calls still be dangerous when driving? -> Because the person on the phone cannot see the driver’s situation or traffic problems."
],        examples: [
          {
                    "en": "After six calls, the car battery was flat.",
                    "ar": "بعد ست مكالمات، فرغت بطارية السيارة.",
                    "highlight": "After six calls",
                    "note": "تفصيل من فقرة أول هاتف محمول"
          }
],        exercises: [
          {
                    "id": "5u2-ex8",
                    "question": "Why wasn’t the first mobile phone system used by the Swedish police very useful?",
                    "options": [
                              "After six calls, the car battery was flat",
                              "It could only send text messages",
                              "It was too small to use in a car",
                              "It worked only in other countries"
                    ],
                    "correctAnswer": "After six calls, the car battery was flat",
                    "explanation": "كان الجهاز يستخدم بطارية السيارة، وبعد ست مكالمات كانت البطارية تفرغ.",
                    "type": "mcq",
                    "sourcePages": "الملزمة ص 69"
          }
]
      }
    ]
  }
];
