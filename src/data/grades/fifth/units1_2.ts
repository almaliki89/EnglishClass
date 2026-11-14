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
        summary: "قراءة استيعابية حول عادات شهر رمضان في بغداد والمحافظات، أوقات الإفطار والتراويح، ولعبة المحيبس، بالإضافة إلى صفات الشخصية السلبية والإيجابية.",
        sourcePages: "الملزمة ص 7 - 11",
        grammarRuleFormula: "Personality Adjectives (صفات الشخصية - ص 8):\n- Positive: generous (كريم), patient (صبور), sociable (اجتماعي), helpful (متعاون), cheerful (مبتهج)\n- Negative/Neutral: bossy (متسلط), stubborn (عنيد), lazy (كسول), shy (خجول), anxious (قلق)",
        detailedContent: [
          "نص القراءة (Student's Book p. 7): رمضان هو الشهر التاسع في التقويم الهجري الإسلامي؛ يمتنع المسلمون خلاله عن الطعام والشراب من الفجر حتى الغروب.",
          "وجبة الإفطار (Iftar): يبدأ العراقيون إفطارهم بالتمر واللبن وحساء العدس (Shorbat Adas) تتبعها وجبات الكبة والبرياني واللحم.",
          "الصلوات والتواصل الاجتماعي: بعد الإفطار، يؤدي المصلون صلاة التراويح في المساجد، ثم تجتمع العوائل وتلعب لعبة المحيبس التراثية (Mheibes) في المقاهي والأحياء القديمة.",
          "صفات الشخصية (AB p. 4): وصف الأفراد بصفات مثل generous (يعطي المال والمساعدة لمن يحتاج) و bossy (يأمر الناس بما يفعلونه دائماً)."
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
        summary: "القطعة الاستيعابية الوزارية الأهم في الوحدة الأولى حول مهرجان بابل الدولي للثقافة والفنون، مسارحه التاريخية وفعالياته العالمية.",
        sourcePages: "الملزمة ص 34 - 36",
        detailedContent: [
          "نبذة المهرجان (Babylon Festival): مهرجان ثقافي وفني سنوي انطلق عام 1987 وتوقف لفترة ثم عاد بقوة؛ يقام في مدينة بابل الأثرية على بعد حوالي 85 كم جنوب بغداد.",
          "المسارح والقاعات (Venues):",
          "1. المسرح البابلي (Babylonian Theatre): أكبر مدرج أثري يتسع لـ 2,500 شخص ويعود للعهد الهيلينستي ويستضيف العروض الموسيقية الكبرى.",
          "2. قاعة العرش (The Throne Room): القاعة الإدارية الكبرى التي كان الملك نبوخذ نصر (Nebuchadnezzar) يستقبل فيها الوفود.",
          "3. معبد نينماخ (Ninmakh Temple): قاعة مخصصة للعروض الشعرية والمسرحيات التجريبية الأكثر حميمية.",
          "الأنشطة والوفود: تحضر وفود من كافة قارات العالم لتقديم الفولكلور والمسرح والشعر والندوات الفكرية."
        ],
        teacherNotes: [
          "أسئلة الملزمة النموذجية ص 35:",
          "1. When was the first Babylon Festival held? -> In 1987.",
          "2. How far is Babylon from Baghdad? -> About 85 kilometres south of Baghdad.",
          "3. How many people does the Babylonian amphitheatre hold? -> About 2,500 spectators."
        ],
        examples: [
          {
            en: "The Babylon International Festival brings together performers from all across the world.",
            ar: "يجمع مهرجان بابل الدولي فنانين ومؤدين من جميع أنحاء العالم.",
            highlight: "Babylon International Festival",
            note: "جملة نموذجية من كتاب الطالب ص 14"
          }
        ],
        exercises: [
          {
            id: "5u1-ex9",
            question: "The first Babylon International Festival was held in ______.",
            options: ["1987", "1997", "1978", "2003"],
            correctAnswer: "1987",
            explanation: "أقيم مهرجان بابل الدولي الأول في عام 1987 (الملزمة ص 35).",
            type: "mcq",
            sourcePages: "الملزمة ص 35"
          },
          {
            id: "5u1-ex10",
            question: "The Babylonian Theatre can accommodate approximately ______ spectators.",
            options: ["2,500", "1,000", "5,000", "10,000"],
            correctAnswer: "2,500",
            explanation: "يتسع المسرح البابلي الأثري لحوالي 2,500 متفرج (الملزمة ص 35).",
            type: "mcq",
            sourcePages: "الملزمة ص 35"
          }
        ]
      },
      {
        id: "5th-u1-l9",
        unitId: 51,
        lessonNumber: 9,
        titleAr: "الدرس التاسع: الصفات وحروف الجر واختبار الوحدة (Adjectives + Prepositions & Unit 1 Test)",
        titleEn: "Lesson 9: Adjectives Followed by Specific Prepositions & Comprehensive Unit 1 Test",
        category: "vocabulary",
        summary: "حروف الجر المصاحبة للصفات (good at, interested in, proud of, afraid of) والامتحان الشامل للوحدة الأولى.",
        sourcePages: "الملزمة ص 37 - 38",
        grammarRuleFormula: "Adjectives + Prepositions Fixed Pairs:\n- interested in (مهتم بـ)\n- good at / bad at (جيد / سيء في)\n- proud of (فخور بـ)\n- afraid of / frightened of (خائف من)\n- annoyed with (منزعج من شخص) / annoyed about (منزعج من أمر)\n- bored with (ضجر / ملان من)\n- famous for (مشهور بـ)\n- jealous of (غيور من)",
        detailedContent: [
          "دراسة تلازم حروف الجر مع الصفات (AB p. 12 Exercise A): لا يمكن ترجمة حروف الجر ترجمة حرفية؛ بل يجب حفظ الصفة مع حرف جرها الملازم لها.",
          "تأتي حروف الجر هذه متبوعة إما باسم أو بفعل ينتهي بـ -ing: He is good at playing chess.",
          "نموذج الاختبار الشامل للوحدة الأولى من الملزمة ص 37-38: يغطي القواعد والقطع والمفردات والإملاء والإنشاء."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 37: انتبه جداً للفرق: He is annoyed with his brother (شخص) ولكن He is annoyed about the flight delay (شيء)."
        ],
        examples: [
          {
            en: "My mother is proud of my academic success in English.",
            ar: "أمي فخورة بنجاحي الأكاديمي في اللغة الإنكليزية.",
            highlight: "proud of",
            note: "تلازم الصفة proud مع حرف الجر of"
          }
        ],
        exercises: [
          {
            id: "5u1-ex11",
            question: "Are you interested ______ ancient Iraqi history?",
            options: ["in", "at", "on", "with"],
            correctAnswer: "in",
            explanation: "الصفة interested تأخذ دائماً حرف الجر in (الملزمة ص 37).",
            type: "mcq",
            sourcePages: "الملزمة ص 37"
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
        summary: "قصة الشاب العراقي راشد زيد ومبادرته الخيرية لجمع وإصلاح الأجهزة اللوحية والهواتف القديمة وتوزيعها على الطلاب المتعففين للتغلب على الفقر الرقمي.",
        sourcePages: "الملزمة ص 48 - 51",
        detailedContent: [
          "مفهوم الفقر الرقمي (Digital Poverty): عدم امتلاك الأسر المتعففة أجهزة ذكية أو اتصالاً بالإنترنت لمتابعة التعليم الإلكتروني والدروس.",
          "مبادرة راشد زيد (We Are Connected): بدأ راشد، وهو طالب عراقي مهتم بالتكنولوجيا، بجمع الهواتف والحواسيب المستعملة من المتبرعين، وإعادة برمجتها وصيانتها ثم توزيعها مجاناً على الطلبة في القرى والأحياء الفقيرة.",
          "أثر المبادرة: مكنت مئات الطلاب من إكمال دراستهم ومتابعة المحاضرات التعليمية بنجاح."
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 50:",
          "1. What is 'digital poverty'? -> Not having access to digital devices or the internet for learning.",
          "2. What did Rashid Zeid do with old phones? -> He repaired, refurbished, and distributed them to disadvantaged students for free."
        ],
        examples: [
          {
            en: "Rashid Zeid started the charity to ensure every student has equal access to online education.",
            ar: "أسس راشد زيد المنظمة الخيرية ليضمن حصول كل طالب على فرصة متساوية في التعليم عبر الإنترنت.",
            highlight: "equal access",
            note: "هدف المبادرة الإنسانية والتعليمية"
          }
        ],
        exercises: [
          {
            id: "5u2-ex3",
            question: "The primary goal of the 'We Are Connected' organization was to ______.",
            options: [
              "help students overcome digital poverty",
              "sell expensive modern smartphones",
              "build satellite towers",
              "open private computer companies"
            ],
            correctAnswer: "help students overcome digital poverty",
            explanation: "الهدف الأساسي لمنظمة راشد زيد هو مساعدة الطلاب على التغلب على الفقر الرقمي وتوفير الأجهزة لهم مجاناً (الملزمة ص 50).",
            type: "mcq",
            sourcePages: "الملزمة ص 50"
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
        summary: "القطعة التاريخية المهمة حول اختراع شبكة الويب العالمية (WWW) على يد العالم تيم بيرنرز لي وروبرت كايو في مختبر سيرن بسويسرا.",
        sourcePages: "الملزمة ص 59 - 62",
        detailedContent: [
          "قصة الاختراع (The World Wide Web): في عام 1989، ابتكر العالم البريطاني تيم بيرنرز لي (Tim Berners-Lee) بالتعاون مع البلجيكي روبرت كايو (Robert Cailliau) في مركز الأبحاث CERN نظاماً لربط وتبادل المعلومات بين أجهزة الحاسوب عبر الروابط التشعبية (Hyperlinks).",
          "الفرق بين الإنترنت والويب: الإنترنت هو شبكة الأسلاك والأجهزة المتصلة عالمياً، بينما الويب (WWW) هو النظام والصفحات والروابط التي تتصفح من خلالها المعلومات.",
          "قرار تاريخي: جعل المخترعون شبكة الويب مفتوحة ومجانية للبشرية جمعاء دون احتكار أو رسوم براءات اختراع."
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 61:",
          "1. Who invented the World Wide Web? -> Sir Tim Berners-Lee and Robert Cailliau.",
          "2. Where did they work? -> At CERN in Switzerland.",
          "3. When was it invented? -> In 1989."
        ],
        examples: [
          {
            en: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN.",
            ar: "اخترع تيم بيرنرز لي شبكة الويب العالمية عام 1989 أثناء عمله في منظمة سيرن.",
            highlight: "Tim Berners-Lee / CERN",
            note: "حقيقة تاريخية أساسية من قطعة الكتاب"
          }
        ],
        exercises: [
          {
            id: "5u2-ex6",
            question: "The World Wide Web (WWW) was invented in ______ by Tim Berners-Lee.",
            options: ["1989", "1999", "1979", "2005"],
            correctAnswer: "1989",
            explanation: "تم اختراع شبكة الويب العالمية عام 1989 (الملزمة ص 61).",
            type: "mcq",
            sourcePages: "الملزمة ص 61"
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
        titleAr: "الدرس الثامن: عالم الآثار د. أحمد وتاريخ الهواتف (Dr. Ahmed Abdulaziz & History of Mobile Phones)",
        titleEn: "Lesson 8: Archaeologist Dr. Ahmed Abdulaziz & Evolution of Phones 1946-2023",
        category: "reading",
        summary: "اكتشافات عالم الآثار د. أحمد عبد العزيز لشعب الألوالو (Aloalo) والتطور المذهل للهواتف النقالة من أجهزة بوزن 40 كغم في 1946 إلى الهواتف الذكية الحديثة.",
        sourcePages: "الملزمة ص 67 - 71",
        detailedContent: [
          "دراسات د. أحمد عبد العزيز: عالم الآثار الذي استخدم التقنيات الحديثة وأجهزة تحديد المواقع للكشف عن بقايا الحضارات وتماثيل الألوالو القديمة.",
          "تاريخ الهواتف النقالة (AB p. 34): أول هاتف سيارة تجريبي ظهر عام 1946 وكان يزن 40 كيلوغراماً؛ وفي 1973 أجرى مارتن كوبر أول مكالمة بهاتف محمول باليد؛ وفي التسعينات انتشرت رسائل SMS والجيل الثاني، وصولاً إلى شاشات اللمس والذكاء الاصطناعي اليوم.",
          "اختبار الوحدة الثانية الشامل (الملزمة ص 70-71): مراجعة شاملة لأسئلة المفردات والقواعد والاستنتاج."
        ],
        teacherNotes: [
          "سؤال الملزمة ص 69: In 1946, the first mobile phone equipment weighed about 40 kilograms and could only connect a few calls at a time."
        ],
        examples: [
          {
            en: "Modern smartphones have become compact, multi-functional computers in our pockets.",
            ar: "أصبحت الهواتف الذكية الحديثة حواسيب مدمجة ومتعددة الوظائف في جيوبنا.",
            highlight: "multi-functional",
            note: "مقارنة تاريخية بين هواتف الماضي والحاضر"
          }
        ],
        exercises: [
          {
            id: "5u2-ex8",
            question: "In 1946, the earliest mobile phone systems weighed approximately ______.",
            options: ["40 kg", "4 kg", "400 grams", "100 kg"],
            correctAnswer: "40 kg",
            explanation: "أول نظام هاتف متنقل عام 1946 كان يزن حوالي 40 كيلوغراماً في صندوق السيارة (الملزمة ص 69).",
            type: "mcq",
            sourcePages: "الملزمة ص 69"
          }
        ]
      }
    ]
  }
];
