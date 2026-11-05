import { Unit } from '../../../types';

// =========================================================================
// الوحدة الأولى والثانية - ملزمة الرابع الإعدادي (2025-2026)
// مرجع الصفحات: ص 1 - 53
// =========================================================================

export const FOURTH_PREPARATORY_UNITS_1_2: Unit[] = [
  {
    id: 41,
    number: 1,
    titleAr: "الوحدة الأولى: طرق التعلم والتواصل (Getting in Touch)",
    titleEn: "Unit 1: Learning Methods, Languages of Canada, Present Simple vs Continuous & Indirect Questions",
    description: "مفردات مراكز التعلم الذاتي، المضارع البسيط والمستمر، أفعال الحالة (Stative Verbs)، اللغات الرسمية لكندا، الأسئلة غير المباشرة المهذبة، صفات ed/ing، وتأطير البرامج الصيفية.",
    accentColor: "from-violet-600 to-indigo-600",
    bgGradient: "bg-gradient-to-r from-violet-50 to-indigo-50 border-violet-200",
    sourcePages: "الملزمة ص 1 - 25",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "4th-u1-l1",
        unitId: 41,
        lessonNumber: 1,
        titleAr: "الدرس الأول: مراكز التعلم الذاتي والمضارع البسيط (Self-Access Centre & Present Simple)",
        titleEn: "Lesson 1: Self-Access Centre Vocabulary & Present Simple Tense Rules",
        category: "grammar",
        summary: "دراسة مفردات مراكز التعلم الذاتي (bilingual dictionary, exchange programme, self-access centre) وزمن المضارع البسيط للحقائق الروتينية والدائمة.",
        sourcePages: "الملزمة ص 1 - 5",
        grammarRuleFormula: "1) Present Simple:\n   - Affirmative: Subject + V (s/es with He/She/It) / Base (I/You/We/They)\n   - Negative: Subject + don't / doesn't + Base verb\n   - Question: Do / Does + Subject + Base verb...?\n   - Adverbs: always, usually, often, sometimes, rarely, never, every day/month\n   - Special Case: 'be' -> am / is / are (e.g., I am a student / The university isn't far).",
        detailedContent: [
          "مفردات التعلم (Vocabulary p. 3): language school (مدرسة لغات)، self-access centre (مركز التعلم الذاتي)، bilingual dictionary (قاموس ثنائي اللغة)، exchange programme (برنامج تبادل ثقافي)، index cards (بطاقات فهرسة)، learning diary (مذكرة تعلم).",
          "استخدامات المضارع البسيط (Present Simple): للتعبير عن الحقائق الثابتة والعادات والجدول الزمني المنتظم: I live in Baghdad but my friend Ali lives in Basra.",
          "تمرين كتاب النشاط ص 4: ملء الفراغات بالصيغة الصحيحة للمضارع البسيط ونفي الأفعال."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 3: مع الفاعل المفرد (He, She, It, Sarah, my father) نضيف s الشخص الثالث للفعل الرئيسي في الإثبات: She speaks French fluently."
        ],
        commonMistakes: [
          "نسيان إضافة s للمفرد: *My brother work in a bank* (الصحيح: My brother works in a bank).",
          "استخدام don't مع المفرد: *He don't know the answer* (الصحيح: He doesn't know)."
        ],
        examples: [
          {
            en: "My brother works in a bank in the city centre.",
            ar: "يعمل أخي في بنك في مركز المدينة.",
            highlight: "works",
            note: "مضارع بسيط مع الفاعل المفرد My brother"
          },
          {
            en: "How often do you go to the self-access centre?",
            ar: "كم مرة تذهب إلى مركز التعلم الذاتي؟",
            highlight: "do you go",
            note: "سؤال بالمضارع البسيط مع الفاعل you"
          }
        ],
        exercises: [
          {
            id: "4u1-ex1",
            question: "My friend Ali ______ in Basra.",
            options: ["lives", "live", "is living", "lived"],
            correctAnswer: "lives",
            explanation: "حقيقة دائمة مع الفاعل المفرد Ali تتطلب مضارعاً بسيطاً بإضافة s الشخص الثالث (lives) (الملزمة ص 4).",
            type: "mcq",
            sourcePages: "الملزمة ص 4"
          },
          {
            id: "4u1-ex2",
            question: "How much ______ that bilingual dictionary cost?",
            options: ["does", "do", "is", "are"],
            correctAnswer: "does",
            explanation: "الفاعل المفرد (that bilingual dictionary) يأخذ الفعل المساعد does في الاستفهام بالمضارع البسيط (الملزمة ص 4).",
            type: "mcq",
            sourcePages: "الملزمة ص 4"
          }
        ]
      },
      {
        id: "4th-u1-l2",
        unitId: 41,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: إحصائيات تعلم اللغات والمضارع المستمر (Languages Statistics & Present Continuous)",
        titleEn: "Lesson 2: Language Statistics, Present Continuous & Dynamic Changes",
        category: "grammar",
        summary: "التعبير عن الأنشطة الجارية والتغيرات المتصاعدة والمستمرة (rising, falling, going up, going down) باستخدام المضارع المستمر.",
        sourcePages: "الملزمة ص 5 - 8",
        grammarRuleFormula: "Present Continuous Formula:\n- Subject + am / is / are + V-ing\n- Negative: Subject + am not / isn't / aren't + V-ing\n- Question: Am / Is / Are + Subject + V-ing...?\n- Key adverbs: now, right now, at this moment, currently, today, at present\n- Dynamic change verbs: rise (يرتفع), fall (ينخفض), go up (يزداد), go down (يتراجع).",
        detailedContent: [
          "تقرير إحصائيات اللغات (Student's Book p. 5): عدد الطلاب الأمريكيين الذين يتعلمون اللغة الإسبانية في تراجع، بينما يرتفع عدد الطلاب الأجانب في جامعات المملكة المتحدة وفي الإقبال على اللغة العربية.",
          "قاعدة التغيرات الجارية: نستخدم المضارع المستمر لتوصيف حالات الحركة والتغير المستمر في العالم: The number of international students is rising.",
          "تمرين كتاب النشاط ص 8: إكمال التقرير بصيغ المضارع المستمر للجمل المثبتة والمنفية."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 7: إذا رأيت أحد أفعال النمو والتغير (rise, fall, go up, go down, get better) استخدم المضارع المستمر فوراً لأنها تعبر عن عملية جارية."
        ],
        examples: [
          {
            en: "The number of UK university international students is rising every year.",
            ar: "عدد الطلاب الدوليين في جامعات المملكة المتحدة يرتفع كل عام.",
            highlight: "is rising",
            note: "مضارع مستمر يعبر عن تغير ونمو مستمر"
          }
        ],
        exercises: [
          {
            id: "4u1-ex3",
            question: "The number of people learning Arabic in American universities ______ up.",
            options: ["is going", "goes", "go", "went"],
            correctAnswer: "is going",
            explanation: "العبارة The number of مفردة وتدل على تغير جاري فتأخذ is going up (الملزمة ص 5).",
            type: "mcq",
            sourcePages: "الملزمة ص 5"
          }
        ]
      },
      {
        id: "4th-u1-l3",
        unitId: 41,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: خيارات البرامج الصيفية وسطوة الصفات (-ed vs -ing)",
        titleEn: "Lesson 3: Choosing a Summer Programme & Adjectives Ending in (-ed) vs (-ing)",
        category: "grammar",
        summary: "معايير اختيار الكورس الصيفي وقاعدة التمييز الحاسمة بين الصفات المنهية بـ (-ed) والصفات المنتهية بـ (-ing).",
        sourcePages: "الملزمة ص 9 - 14",
        grammarRuleFormula: "(-ed) vs (-ing) Adjectives Rules:\n1) -ed Adjectives: تصف شعور وإحساس الكائن الحي الداخلي (I felt embarrassed / He was excited).\n2) -ing Adjectives: تصف الشيء أو الموقف الذي يسبب ذلك الشعور (The lesson was interesting / It was an amazing summer).\n* قاعدة الاختبار السرية بالملزمة ص 11:\n- إذا جاء بعد الفراغ اسم (اسم موصوف) اختر صفة (-ing) حتماً!\n- إذا جاء بعد الفراغ (حرف جر مثل in, at, about, with أو كلمة when/that) أو انتهت الجملة، وكان الفاعل عاقلاً يشعر بالشيء فاختر (-ed).",
        detailedContent: [
          "نصائح اختيار البرنامج الصيفي (Student's Book p. 9): مراعاة حجم البرنامج، عدد ساعات اللغة، الجولات الثقافية، الأنشطة الرياضية، ونوع السكن.",
          "الصفات الشائعة: amazing / amazed, boring / bored, exciting / excited, interesting / interested, surprising / surprised, terrifying / terrified, embarrassing / embarrassed.",
          "تمرين كتاب النشاط ص 11-12: حل جمل الاختيارات النحوية المكررة في الامتحانات المدرسية."
        ],
        teacherNotes: [
          "سر الملزمة ص 11: انظر بعد الفراغ مباشرة: وجدت اسماً (person, book, film, day) اختر -ing بدون تردد! وجدت in أو about أو when اختر -ed."
        ],
        examples: [
          {
            en: "I was very interested in learning about the ancient history of Mesopotamia.",
            ar: "كنت مهتماً جداً بالتعلم عن تاريخ بلاد ما بين النهرين القديم.",
            highlight: "interested in",
            note: "صفة ed متبوعة بحرف الجر in لشخص يشعر بالاهتمام"
          },
          {
            en: "It was an amazing summer camp; we met friends from ten different countries.",
            ar: "كان مخيماً صيفياً مذهلاً؛ التقينا بأصدقاء من عشر دول مختلفة.",
            highlight: "amazing summer camp",
            note: "صفة ing متبوعة باسم موصوف (summer camp)"
          }
        ],
        exercises: [
          {
            id: "4u1-ex4",
            question: "I read an ______ article about space exploration yesterday.",
            options: ["interesting", "interested", "interest", "interests"],
            correctAnswer: "interesting",
            explanation: "بعد الفراغ يوجد اسم موصوف (article)، لذا نختار صفة -ing (الملزمة ص 11).",
            type: "mcq",
            sourcePages: "الملزمة ص 11"
          },
          {
            id: "4u1-ex5",
            question: "He was so ______ when he dropped his tray in the dining hall.",
            options: ["embarrassed", "embarrassing", "embarrass", "embarrasses"],
            correctAnswer: "embarrassed",
            explanation: "الفاعل عاقل (He) ونصف شعوره الداخلي بالإحراج، لذا نختار صفة -ed (الملزمة ص 12).",
            type: "mcq",
            sourcePages: "الملزمة ص 12"
          }
        ]
      },
      {
        id: "4th-u1-l4",
        unitId: 41,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: كندا واللغات الرسمية (Canada & Official Languages)",
        titleEn: "Lesson 4: Country Factfile: Canada's Geography, Population & Official Languages",
        category: "reading",
        summary: "القطعة الاستيعابية حول كندا، مساحتها الجغرافية الشاسعة، العاصمة أتاوا، واللغتين الرسميتين (الإقليميتين): الإنكليزية والفرنسية.",
        sourcePages: "الملزمة ص 15 - 18",
        detailedContent: [
          "حقائق عن كندا (Canada Factfile): ثاني أكبر دولة في العالم من حيث المساحة بعد روسيا؛ عاصمتها أتاوا (Ottawa) بينما أكبر مدنها تورونتو (Toronto).",
          "اللغات الرسمية: اللغة الإنكليزية واللغة الفرنسية هما اللغتان الرسميتان المعتمدتان في البلاد، ويتحدث بالفرنسية حوالي 20% من السكان خاصة في إقليم كيبك (Quebec).",
          "المعالم الطبيعية: تشتهر بشلالات نياجرا (Niagara Falls) والبحيرات العظمى والأنهار والغابات الشاسعة.",
          "أسئلة الاستيعاب المدرسية (الملزمة ص 17): ما هي عاصمة كندا؟ ما هما اللغتان الرسميتان؟ وما هي أكبر مدنها؟"
        ],
        teacherNotes: [
          "أسئلة الملزمة النموذجية ص 17:",
          "1. What are the official languages of Canada? -> English and French.",
          "2. What is the capital of Canada? -> Ottawa.",
          "3. What is the largest city in Canada? -> Toronto."
        ],
        examples: [
          {
            en: "Canada has two official languages: English and French.",
            ar: "لكندا لغتان رسميتان: الإنكليزية والفرنسية.",
            highlight: "English and French",
            note: "حقيقة استيعابية من قطعة كندا"
          }
        ],
        exercises: [
          {
            id: "4u1-ex6",
            question: "The capital city of Canada is ______.",
            options: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
            correctAnswer: "Ottawa",
            explanation: "عاصمة كندا هي أتاوا (Ottawa) بينما تورونتو هي كبرى مدنها (الملزمة ص 17).",
            type: "mcq",
            sourcePages: "الملزمة ص 17"
          }
        ]
      },
      {
        id: "4th-u1-l5",
        unitId: 41,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: الأسئلة غير المباشرة المهذبة (Polite Indirect Questions)",
        titleEn: "Lesson 5: Direct to Indirect Questions (Could you tell me... / Do you know...)",
        category: "grammar",
        summary: "القواعد الصارمة لتحويل الأسئلة المباشرة إلى أسئلة غير مباشرة لبقة ومؤدبة واستخدام if في أسئلة Yes/No.",
        sourcePages: "الملزمة ص 19 - 22",
        grammarRuleFormula: "Indirect Questions Formula:\n1) Wh-questions:\n   Could you tell me + Wh-word + Subject + Verb...?\n   - Direct: 'Where is the nearest bank?'\n   - Indirect: Could you tell me where the nearest bank is?\n2) Questions with do / does / did:\n   - Direct: 'How much does this book cost?'\n   - Indirect: Could you tell me how much this book costs? (حذف does وإضافة s للفعـل)\n3) Yes / No questions:\n   Could you tell me if + Subject + Verb...?\n   - Direct: 'Do you have a swimming pool?'\n   - Indirect: Could you tell me if you have a swimming pool?",
        detailedContent: [
          "مفهوم السؤال غير المباشر: أسلوب راقٍ ولبق لطلب المعلومات من الغرباء أو الموظفين.",
          "التحويل النحوي: ينقلب الترتيب الاستفهامي إلى ترتيب خبري (الفاعل يسبق الفعل المساعد).",
          "تمرين كتاب النشاط ص 14: تحويل 6 أسئلة مباشرة إلى أسئلة غير مباشرة مؤدبة."
        ],
        teacherNotes: [
          "فخ امتحاني بالملزمة ص 21: عند وجود does في السؤال المباشر، نحذف does ونضيف s للفعل الرئيسي: Where does he live? -> Could you tell me where he lives?"
        ],
        examples: [
          {
            en: "Direct: 'Where is the self-access centre?'\nIndirect: Could you tell me where the self-access centre is?",
            ar: "مباشر: 'أين مركز التعلم الذاتي؟'\nغير مباشر: هل يمكنك أن تخبرني أين يقع مركز التعلم الذاتي؟",
            highlight: "where the self-access centre is",
            note: "تقدم الفاعل على الفعل المساعد is"
          }
        ],
        exercises: [
          {
            id: "4u1-ex7",
            question: "Direct: 'What time does the lesson start?'\nIndirect: Could you tell me what time the lesson ______?",
            options: ["starts", "does start", "is start", "started"],
            correctAnswer: "starts",
            explanation: "عند حذف does في السؤال غير المباشر نضيف s الشخص الثالث للفعل الرئيسي (starts) (الملزمة ص 21).",
            type: "mcq",
            sourcePages: "الملزمة ص 21"
          }
        ]
      },
      {
        id: "4th-u1-l6",
        unitId: 41,
        lessonNumber: 6,
        titleAr: "الدرس السادس: استمارة المعومات واختبار الوحدة الأولى (Information Form & Unit 1 Test)",
        titleEn: "Lesson 6: Filling in an Official Information Form & Comprehensive Unit 1 Test",
        category: "reading",
        summary: "كيفية ملء استمارات التقديم المدرسية والبرامج الصيفية (Surname, First name, DOB, Address, Level of English) واختبار الوحدة الأولى الشامل.",
        sourcePages: "الملزمة ص 23 - 25",
        detailedContent: [
          "مصطلحات الاستمارة الرسمية (Information Form): Surname (لقب العائلة)، First name (الاسم الأول)، Date of Birth / DOB (تاريخ الميلاد)، Address (العنوان)، Email address (البريد الإلكتروني).",
          "نموذج الاختبار الشامل للوحدة الأولى من الملزمة ص 24-25: يغطي القواعد والمفردات وكندا والإنشاء."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 23: في استمارات المعاملات الرسمية تكتب الأسماء بحروف كبيرة (CAPITAL LETTERS) لتفادي الأخطاء الإملائية."
        ],
        examples: [
          {
            en: "When filling an application form, your surname refers to your family name.",
            ar: "عند تعبئة استمارة التقديم، يشير مصطلح surname إلى لقب أو اسم عائلتك.",
            highlight: "surname",
            note: "مصطلح إداري واستثماري مهم"
          }
        ],
        exercises: [
          {
            id: "4u1-ex8",
            question: "On an official information form, 'DOB' stands for ______.",
            options: ["Date of Birth", "Degree of Bachelor", "Department of Business", "Day of Beginning"],
            correctAnswer: "Date of Birth",
            explanation: "الاختصار DOB يعني تاريخ الميلاد (Date of Birth) (الملزمة ص 23).",
            type: "mcq",
            sourcePages: "الملزمة ص 23"
          }
        ]
      }
    ]
  },
  {
    id: 42,
    number: 2,
    titleAr: "الوحدة الثانية: الشعوب والمجتمعات والماضي البسيط والمستمر (People & Cultures)",
    titleEn: "Unit 2: People & Cultures, Past Simple vs Continuous, used to, UNICEF & Package Holidays",
    description: "الماضي البسيط والماضي المستمر مع الربط بـ when/while، الاعتياد في الماضي بـ used to، منظمة يونيسيف (UNICEF) وحماية الأطفال، عادات الأعراس، ظروف الطريقة، ورحلة أربيل الجماعية.",
    accentColor: "from-blue-600 to-sky-600",
    bgGradient: "bg-gradient-to-r from-blue-50 to-sky-50 border-blue-200",
    sourcePages: "الملزمة ص 25 - 53",
    academicYear: "2025-2026",
    lessons: [
      {
        id: "4th-u2-l1",
        unitId: 42,
        lessonNumber: 1,
        titleAr: "الدرس الأول: الماضي البسيط مقابل الماضي المستمر (Past Simple vs Past Continuous)",
        titleEn: "Lesson 1: Narrative Tenses: Past Simple vs Past Continuous with Linking Words",
        category: "grammar",
        summary: "ربط الأحداث السردية في الماضي باستخدام الماضي البسيط للحدث المفاجئ القصير والماضي المستمر للحدث المستمر الأطول بأدوات الربط (while, as, when, and).",
        sourcePages: "الملزمة ص 25 - 29",
        grammarRuleFormula: "Past Narrative Rules:\n1) Past Simple: S + V-ed / V2 (حدث مفاجئ قاطع)\n2) Past Continuous: S + was / were + V-ing (حدث مستمر أطول)\n3) Linking Patterns:\n   - While / As + Past Continuous , Past Simple\n   - When / And + Past Simple , Past Continuous",
        detailedContent: [
          "شرح الأزمنة السردية (Narrative Tenses): نستخدم الماضي المستمر لخلفية الحدث، والماضي البسيط للحدث القاطع المفاجئ.",
          "تمرين كتاب النشاط ص 26: تصحيح أفعال القصة وتوظيف أدوات الربط في السياق السليم."
        ],
        teacherNotes: [
          "قاعدة الملزمة ص 27: أثناء القراءة أو الامتحان: بعد while و as ضع دائماً (was/were + ing)! وبعد when ضع ماضياً بسيطاً."
        ],
        examples: [
          {
            en: "While we were driving to Erbil, it started to rain heavily.",
            ar: "بينما كنا نقود نحو أربيل، بدأت تمطر بغزارة.",
            highlight: "While were driving / started",
            note: "ماضي مستمر بعد while وماضي بسيط للحدث القاطع"
          }
        ],
        exercises: [
          {
            id: "4u2-ex1",
            question: "While she ______ (walk) in the park, she lost her golden ring.",
            options: ["was walking", "walked", "is walking", "walks"],
            correctAnswer: "was walking",
            explanation: "بعد أداة الربط While يأتي ماضي مستمر was walking (الملزمة ص 27).",
            type: "mcq",
            sourcePages: "الملزمة ص 27"
          }
        ]
      },
      {
        id: "4th-u2-l2",
        unitId: 42,
        lessonNumber: 2,
        titleAr: "الدرس الثاني: العادات القديمة وتعبير used to (Past Habits with used to)",
        titleEn: "Lesson 2: Describing Past Habits & Changes with (used to + Infinitive)",
        category: "grammar",
        summary: "التعبير عن عادات وأحوال كانت مستمرة ومألوفة في الماضي ولكنها تغيرت الآن في الحاضر باستخدام (used to + مصدر).",
        sourcePages: "الملزمة ص 30 - 34",
        grammarRuleFormula: "used to Formula:\n- Affirmative: Subject + used to + Base Verb\n  Example: People used to send letters, but now they send emails.\n- Negative: Subject + didn't use to + Base Verb (تنبيه: حذف d من use)\n  Example: Cities didn't use to be so crowded.\n- Question: Did + Subject + use to + Base Verb...?\n  Example: Did you use to play football when you were young?",
        detailedContent: [
          "مفهوم used to: تعبر عن فعل أو حالة كانت تتكرر بانتظام في الماضي وانقطعت تماماً في الحاضر.",
          "النفي والاستفهام: عند دخول didn't أو Did يجرد الفعل بترك d الأخيرة وتصبح (didn't use to) أو (Did you use to).",
          "تمرين كتاب النشاط ص 30: المقارنة بين وسائل النقل والاتصال القديمة والحديثة."
        ],
        teacherNotes: [
          "فخ وزاري بالملزمة ص 32: في النفي نكتب (didn't use to) بدون حرف d! وكتابة didn't used to تعتبر خطأً إملائياً ونحوياً."
        ],
        examples: [
          {
            en: "There used to be a small traditional souq here, but now there is a big shopping mall.",
            ar: "كان يوجد سوق تراثي صغير هنا، لكن يوجد الآن مركز تسوق كبير.",
            highlight: "used to be",
            note: "عادة حالة في الماضي تغيرت في الحاضر"
          }
        ],
        exercises: [
          {
            id: "4u2-ex2",
            question: "I didn't ______ to like seafood, but now I love it.",
            options: ["use", "used", "uses", "using"],
            correctAnswer: "use",
            explanation: "بعد didn't في النفي نستخدم use to بالمصدر المجرد بدون d (الملزمة ص 32).",
            type: "mcq",
            sourcePages: "الملزمة ص 32"
          }
        ]
      },
      {
        id: "4th-u2-l3",
        unitId: 42,
        lessonNumber: 3,
        titleAr: "الدرس الثالث: منظمة اليونيسيف وحماية الأطفال (UNICEF & Helping Disadvantaged Children)",
        titleEn: "Lesson 3: UNICEF - United Nations International Children's Emergency Fund",
        category: "reading",
        summary: "القطعة الاستيعابية الخاصة بتمويل وحماية الأطفال حول العالم عبر منظمة اليونيسيف (UNICEF) ودورها في التعليم والرعاية الصحية والتغذية.",
        sourcePages: "الملزمة ص 35 - 39",
        detailedContent: [
          "منظمة اليونيسيف (UNICEF): ترمز إلى (United Nations International Children's Emergency Fund)؛ تأسست عام 1946 لمساعدة الأطفال المتأثرين بالحروب والأزمات.",
          "أهداف اليونيسيف: (1) توفير التعليم المجاني والإجباري، (2) تقديم الرعاية الصحية واللقاحات، (3) توفير المياه النظيفة والتغذية السليمة، (4) منع عمالة الأطفال القصري (child labour).",
          "أسئلة الاستيعاب المدرسية (الملزمة ص 38): ما الذي تعنيه حروف الكلمة؟ متى تأسست المنظمة؟ وما هي مهامها الرئيسية؟"
        ],
        teacherNotes: [
          "أسئلة الملزمة ص 38:",
          "1. What does UNICEF stand for? -> United Nations International Children's Emergency Fund.",
          "2. When was UNICEF created? -> In 1946.",
          "3. Why was it created? -> To help children who were sick, hungry, or homeless after World War II."
        ],
        examples: [
          {
            en: "UNICEF works in over 190 countries to protect children's rights to health and education.",
            ar: "تعمل منظمة اليونيسيف في أكثر من 190 دولة لحماية حقوق الأطفال في الصحة والتعليم.",
            highlight: "protect children's rights",
            note: "الهدف الرئيسي لمنظمة اليونيسيف"
          }
        ],
        exercises: [
          {
            id: "4u2-ex3",
            question: "UNICEF was established in 1946 to help children after ______.",
            options: ["World War II", "World War I", "The Gulf War", "Industrial Revolution"],
            correctAnswer: "World War II",
            explanation: "تأسست اليونيسيف عام 1946 لإعانة الأطفال بعد الحرب العالمية الثانية (الملزمة ص 38).",
            type: "mcq",
            sourcePages: "الملزمة ص 38"
          }
        ]
      },
      {
        id: "4th-u2-l4",
        unitId: 42,
        lessonNumber: 4,
        titleAr: "الدرس الرابع: عادات الزفاف والتقاليد في العراق (Wedding Customs in Iraq)",
        titleEn: "Lesson 4: Traditional Wedding Customs & Celebrations Across Cultures & Iraq",
        category: "reading",
        summary: "عادات وتقاليد حفلات الأعراس والزفاف في العراق والبلدان العربية، نقش الحناء، ثوب العروس الأبيض، ودعوة الأقارب للأولائم.",
        sourcePages: "الملزمة ص 40 - 44",
        detailedContent: [
          "تقاليد الأعراس العراقي (Iraqi Wedding Customs): تجري حفل الزفاف عادة يوم الخميس؛ وقبل الزفاف بيوم تزين يدا العروس وقدميها بالحناء التراثية.",
          "يوم الزفاف: يرتدي العريس بدلة رسمية وترتدي العروس فستاناً أبيض يرمز للنقاء والبراءة، وتدعى العوائل والأصدقاء لمأدبة عشاء فاخرة ويتبادلون التهاني والهدايا.",
          "تمرين كتاب النشاط ص 38: توصيل مفردات الزفاف (bride, groom, henna, suit, wedding party) بالتعاريف."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 42: العروس تسمى (bride) والعريس يسمى (groom)، وفستان الزفاف الأبيض يرمز للنقاء (purity)."
        ],
        examples: [
          {
            en: "In Iraq, the bride traditionally decorates her hands with henna the day before the wedding.",
            ar: "في العراق، تزين العروس يديها بالحناء عادة قبل يوم من حفل الزفاف.",
            highlight: "decorates her hands with henna",
            note: "عادة تراثية عراقية أصيلة"
          }
        ],
        exercises: [
          {
            id: "4u2-ex4",
            question: "The man who is getting married is called the ______.",
            options: ["groom", "bride", "guest", "waiter"],
            correctAnswer: "groom",
            explanation: "الرجل الذي يتزوج يسمى العريس (groom) (الملزمة ص 42).",
            type: "mcq",
            sourcePages: "الملزمة ص 42"
          }
        ]
      },
      {
        id: "4th-u2-l5",
        unitId: 42,
        lessonNumber: 5,
        titleAr: "الدرس الخامس: ظروف الطريقة وتكوينها (Adverbs of Manner)",
        titleEn: "Lesson 5: Formation & Function of Adverbs of Manner (Adjective + ly)",
        category: "grammar",
        summary: "كيفية تحويل الصفات إلى ظروف طريقة بإضافة ly لبيان طريقة وقوع الفعل والظروف الشاذة (good -> well, fast -> fast, hard -> hard).",
        sourcePages: "الملزمة ص 45 - 48",
        grammarRuleFormula: "Adverbs of Manner Formation:\n- Regular: Adjective + ly -> Adverb (quiet -> quietly, careful -> carefully, happy -> happily)\n- Irregular Adverbs (حفظ شاذ):\n  * good -> well (e.g., He plays the guitar well.)\n  * fast -> fast (e.g., He drives fast.)\n  * hard -> hard (e.g., She works hard.)\n  * late -> late / early -> early",
        detailedContent: [
          "مفهوم ظرف الطريقة: يصف كيف تم الفعل ويوضع عادة بعد الفعل الرئيسي أو بعد المفعول به المباشر.",
          "التغييرات الإملائية: إذا انتهت الصفة بـ y وقبلها حرف صحيح تقلب إلى i وتضاف ly (easy -> easily).",
          "تمرين كتاب النشاط ص 42: ملء الفراغات بظروف الطريقة المناسبة للسياق."
        ],
        teacherNotes: [
          "فخ امتحاني بالملزمة ص 46: الكلمة good تتحول في الظرف إلى well (وليس *goodly)، وكلمة fast تبقى كما هي fast بدون إضافة ly!"
        ],
        examples: [
          {
            en: "She speaks English fluently and writes compositions very carefully.",
            ar: "هي تتحدث الإنكليزية بطلاقة وتكتب الإنشاءات بعناية شديدة.",
            highlight: "fluently / carefully",
            note: "ظروف طريقة توضح كيفية الحديث والكتابة"
          }
        ],
        exercises: [
          {
            id: "4u2-ex5",
            question: "Ali is a good footballer; he plays football very ______.",
            options: ["well", "goodly", "good", "better"],
            correctAnswer: "well",
            explanation: "ظرف الطريقة المشتق شذوذاً من الصفة good هو well (الملزمة ص 46).",
            type: "mcq",
            sourcePages: "الملزمة ص 46"
          }
        ]
      },
      {
        id: "4th-u2-l6",
        unitId: 42,
        lessonNumber: 6,
        titleAr: "الدرس السادس: الرحلة الجماعية لأربيل واختبار الوحدة الثانية (Package Holiday to Erbil & Unit 2 Test)",
        titleEn: "Lesson 6: Package Tour Experience to Erbil & Comprehensive Unit 2 Test",
        category: "reading",
        summary: "التقرير عن الرحلة السياحية الجماعية الشاملة إلى شمال العراق ومدن كردستان، واختبار الوحدة الثانية الشامل.",
        sourcePages: "الملزمة ص 49 - 53",
        detailedContent: [
          "رحلة أربيل (Package Holiday to Erbil): رحلة سياحية متكاملة شملت الإقامة في فندق 5 نجوم وشملت جولات لقلعة أربيل التاريخية والشلالات والأسواق والمولات.",
          "اختبار الوحدة الثانية الشامل من الملزمة ص 52-53: يغطي القواعد واليونيسيف والإنشاء."
        ],
        teacherNotes: [
          "ملاحظة الملزمة ص 50: مصطلح (package holiday) يعني رحلة سياحية شاملة تشتمل النقل والإقامة والإطعام والجولات بسعر موحد."
        ],
        examples: [
          {
            en: "A package holiday includes accommodation, travel fare, and guided tours in one price.",
            ar: "تتضمن الرحلة السياحية الشاملة السكن وتكلفة السفر والجولات الإرشادية بسعر واحد.",
            highlight: "package holiday",
            note: "تعريف الرحلة الشاملة"
          }
        ],
        exercises: [
          {
            id: "4u2-ex6",
            question: "A holiday where travel, hotel, and meals are arranged and paid together is called a ______ holiday.",
            options: ["package", "private", "lonely", "cheap"],
            correctAnswer: "package",
            explanation: "الرحلة المنظمة الشاملة تسمى package holiday (الملزمة ص 50).",
            type: "mcq",
            sourcePages: "الملزمة ص 50"
          }
        ]
      }
    ]
  }
];
