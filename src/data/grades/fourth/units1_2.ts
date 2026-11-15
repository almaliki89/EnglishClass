import { Unit } from '../../../types';

// =========================================================================
// الوحدة الأولى والثانية - ملزمة الرابع الإعدادي (طبعة 2025)
// مرجع الصفحات: ص 1 - 53
// =========================================================================

export const FOURTH_PREPARATORY_UNITS_1_2: Unit[] = [
  {
    id: 41,
    number: 1,
    titleAr: "الوحدة الأولى: طرق التعلم والتواصل (Getting in Touch)",
    titleEn: "Unit 1: Learning Methods, Languages of Canada, Present Simple vs Continuous & Indirect Questions",
    description: "مفردات مراكز التعلم الذاتي، المضارع البسيط والمستمر، أفعال الحالة (Stative Verbs)، اللغات الرسمية لكندا، الأسئلة غير المباشرة المهذبة، صفات ed/ing، وتأطير البرامج الصيفية.",
    accentColor: "bg-lavender text-ink",
    bgGradient: "bg-blue-mist border-ink",
    sourcePages: "الملزمة ص 1 - 24",
    academicYear: "2025",
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
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الرابع الإعدادي",
          sourcePages: "5",
          verificationNote: "أربعة تقارير قصيرة A–D في صفحة المصدر 5، وهي المادة القرائية التي تشرح تغير إحصائيات تعلم اللغات.",
          originalText: [
            "The number of American university students learning Spanish is falling. It is still the most studied language, but in 2006, 822,148 students were studying Spanish at universities in the USA and in 2016, that number was 712,240. Other languages are rising, including American Sign Language. In 2006, there were 79,744 students studying it, while 107,060 were studying it in 2016.",
            "Many students travel abroad to get a degree, learn a language or learn about a new country. The UK is one of the most popular destinations. The number of international students in UK universities is rising. In 2014/2015, the number of international students was 442,255, but in 2020/2021 it was 605,130.",
            "It is difficult to say exactly how many languages are spoken in the world today. Most experts think that there are around 6,800. But the number of languages in the world is going down. Linguists say there will only be 3,000 by 2100. This is because people prefer to learn the most common languages so they can communicate with others, read newspapers from other countries and use the internet.",
            "The number of people learning Arabic in American universities is going up. It rose from 24,010 students to 31,554 students between 2006 and 2016. Most people who study Arabic learn it at university, then go to an Arabic-speaking country to practise speaking and listening."
          ]
        },
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
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الرابع الإعدادي",
          sourcePages: "9, 12–13",
          verificationNote: "يتضمن المصدر مقال How to choose a summer programme وصفحات عروض المدارس الأربع التي تُستخدم في نشاط المطابقة.",
          originalText: [
            "How to choose a summer programme\nThe number of people taking part in summer study programmes is going up all the time. Choosing a programme can be confusing for both parents and children. That’s why you need to think carefully before you make your choice. Here are some questions you should ask yourself.\nWhat are your learning goals? Some summer programmes have classes in all subjects to help you prepare for school in the autumn. They can help you improve in all subjects. Others are especially for students who want to learn or practise a language. There are programmes that have classes all day, for people who need to make a lot of progress quickly. Other programmes offer classes only in the morning, so you can visit interesting places as well as studying.\nWhat do you like doing in your free time? You can do different activities in a city than in the country. If you like doing sport or enjoy being in a quiet place, you should choose a programme in the countryside. But if you like going to museums or the cinema, choose a programme in the city, or you might get bored.\nHow do you learn best? Some people like to be in small classes where they can get plenty of attention and help from their teachers. Others work better in larger groups where they can share their ideas with a lot of other people. Think about what type of class you like best, and find out about class size in the programmes you’re interested in.\nStudy programmes are an exciting way to meet new people, learn new things and have fun. If you choose the right programme, you will have a fantastic time.\nFor more information, email us at summerprogramme@summer.edu or visit our website.",
            "At Worcester School, we offer an intensive English programme for students who really want to learn the language. You study 30 hours of English during the week, then go on trips to popular British destinations, including London, Cambridge and Oxford, at the weekends.",
            "At LSE Bristol, we offer the perfect programme for active teenagers. Apart from studying English five hours a day, practising all skills, you also enjoy a number of physical activities, including football, swimming and tennis. We have students from lots of different nationalities, so you will speak English all the time!",
            "At Bluebell School, you study English in the morning, and you can choose from Spanish, French or German to study in the afternoon. You also practise English with your host family, and at weekends, we take you to visit different parts of Oxford, where our school is located.",
            "Come and study at Rushmore School! Our classes are very small, with a maximum of six students. With a focus on conversation, our lessons are dynamic and get all students talking. In the afternoon, we offer lots of activities, including painting, theatre and music."
          ]
        },
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
        sourcePages: "الملزمة ص 20",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الرابع الإعدادي",
          sourcePages: "20",
          verificationNote: "النص الأصلي Canada، بأجزائه الأربعة A–D، من صفحة المصدر 20.",
          originalText: [
            "A. Canada is the second largest country in the world, after Russia. It is 9,979,619 km2. It has a population of 38.01 million, and that number is growing. But Canada’s population is not large for its size. Most people live near the border with the USA.",
            "B. Canada is a beautiful country. Because it is so big, there are many national parks and wilderness areas. If you travel to Canada, you can see rivers, lakes, forests, and even glaciers. One of Canada’s most famous natural features is Niagara Falls.",
            "C. How do people live in a country with two official languages? The two official languages of Canada are English and French, because some Canadians are of British origin and some are of French origin. Most people don’t speak both languages. About 22% of the population speak French, and about 75% speak English. You will hear more French or English depending on where you are.",
            "D. Canada has several large cities. The biggest of these is Toronto. The capital, Ottawa, is only the fourth largest city. In Ottawa, about half the people speak both French and English. Communication is easier there!"
          ]
        },
        detailedContent: [
          "حقائق عن كندا (Canada Factfile): ثاني أكبر دولة في العالم من حيث المساحة بعد روسيا؛ عاصمتها أتاوا (Ottawa) بينما أكبر مدنها تورونتو (Toronto).",
          "اللغات الرسمية: اللغة الإنكليزية واللغة الفرنسية هما اللغتان الرسميتان المعتمدتان في البلاد، ويتحدث بالفرنسية حوالي 20% من السكان خاصة في إقليم كيبك (Quebec).",
          "المعالم الطبيعية: تشتهر بشلالات نياجرا (Niagara Falls) والبحيرات العظمى والأنهار والغابات الشاسعة.",
          "أسئلة الاستيعاب المدرسية (الملزمة ص 17): ما هي عاصمة كندا؟ ما هما اللغتان الرسميتان؟ وما هي أكبر مدنها؟"
        ],
        teacherNotes: [
          "أسئلة المنهج الوزاري ص 17:",
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
              {
        id: "4th-u1-reading-history",
        unitId: 41,
        lessonNumber: 7,
        titleAr: "قراءة إضافية: تاريخ اللغة الإنكليزية",
        titleEn: "Supplementary Reading: History of the English Language",
        category: "reading",
        summary: "قراءة توضيحية لتاريخ مفردات اللغة الإنكليزية وتأثرها بالأنجلوسكسونية واللغات الإسكندنافية والفرنسية، وتطور المرادفات.",
        sourcePages: "الملزمة ص 18 - 19",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الرابع الإعدادي",
          sourcePages: "18–19",
          verificationNote: "عنوان القراءة وتدريباتها يظهران في الصفحتين 18 و19 من المصدر؛ لم تُذكر لها تسمية Lesson مرقّمة في رأس الصفحة، لذلك أُضيفت بوصفها قراءة تكميلية.",
          originalText: [
            "History of the English Language\nWhy are there so many words with similar meanings in English? Why do we have two words – sick and ill – that look very different but both mean not very well? Why is a reply also an answer? And why are there weddings and marriages in English? The answer lies in the history of Britain.",
            "Old English was a very different language from the English we know today. It included words brought to England by Anglo-Saxons and Vikings. The Anglo-Saxons brought their language with them in the 5th century. The Vikings invaded in the 9th century and brought more words. This mixture of languages was first written down in the 10th century.",
            "The same thing happened after 1066, when the Normans invaded England. They brought the French language and this added more words to the mixture (close for shut, desire for wish and liberty for freedom).",
            "Over time, the pairs of words – or synonyms – started to have very small differences in meaning. In fact, it is almost impossible to find two words that mean exactly the same thing. One word in a pair of synonyms is usually more formal or more specific than the other. The example sentences in dictionaries will help you decide if you can use either word, or if you must choose one."
          ]
        },
        detailedContent: [
          "دخلت مفردات إلى الإنكليزية القديمة عبر الأنجلوسكسونيين والفايكنغ، ثم تأثرت بالفرنسية بعد الغزو النورماني سنة 1066.",
          "تطورت بعض أزواج المرادفات بحيث أصبحت تحمل فروقاً صغيرة في المعنى أو مستوى الرسمية."
        ],
        teacherNotes: [
          "The Anglo-Saxons brought their language in the 5th century.",
          "The Vikings invaded in the 9th century.",
          "The Normans invaded England in 1066 and brought French words."
        ],
        commonMistakes: [],
        examples: [
          {
            en: "One word in a pair of synonyms is usually more formal or more specific than the other.",
            ar: "تكون إحدى كلمتي المرادفات عادةً أكثر رسمية أو أكثر تحديداً من الأخرى.",
            highlight: "synonyms",
            note: "الفكرة الرئيسة في الفقرة الأخيرة"
          }
        ],
        exercises: [
          {
            id: "4u1-history-ex1",
            question: "When did the Normans invade England?",
            options: ["1066", "1492", "1910", "1946"],
            correctAnswer: "1066",
            explanation: "يذكر النص أن النورمان غزوا إنكلترا بعد عام 1066.",
            type: "mcq",
            sourcePages: "الملزمة ص 18"
          },
          {
            id: "4u1-history-ex2",
            question: "When was the mixture of Old English languages first written down?",
            options: ["The 5th century", "The 9th century", "The 10th century", "The 21st century"],
            correctAnswer: "The 10th century",
            explanation: "يوضح النص أن هذا المزيج كُتب لأول مرة في القرن العاشر.",
            type: "mcq",
            sourcePages: "الملزمة ص 18"
          }
        ]
      },
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
    titleEn: "Unit 2: People & Cultures, Past Tenses, UNICEF, Schools for All, The Meade School & Sally’s Old Job",
    description: "تضم الوحدة الأزمنة السردية والعادات الماضية، نصوص UNICEF وSchools for All حول تعليم الأطفال، وقراءتي The Meade School وSally’s Old Job، إلى جانب تدريبات القواعد والمفردات.",
    accentColor: "bg-cobalt text-surface",
    bgGradient: "bg-blue-mist border-ink",
    sourcePages: "الملزمة ص 25 - 52",
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
                sourcePages: "الملزمة ص 29 - 31",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الرابع الإعدادي",
          sourcePages: "29–30",
          verificationNote: "النصّان من وحدة UNICEF في صفحات المصدر: تعريف المنظمة، ثم أسباب عدم التحاق بعض الأطفال بالمدارس وكيف تساعدهم UNICEF.",
          originalText: [
            "What is a UNICEF?\nUNICEF was created in 1946, when many children were sick and hungry in Europe after World War II. UNICEF stands for United Nations International Children’s Emergency Fund because it was created when there was an emergency. In 1953, UNICEF saw the emergency in Europe was over. However, they realized that children in many countries still needed help. It decided to work with children and families all over the world. It changed its name to United Nations Children’s Fund, but people still call it UNICEF. UNICEF believes that all children should have a good education, health care (doctors and medicines) and good nutrition (healthy food).",
            "Why do some children not go to school?\nToday, about 121 million children around the world don’t go to school. In countries such as Thailand, natural disasters like floods can destroy schools. Children in these countries can’t go to school because they don’t have a school building to go to. In other countries, parents don’t want to send their children to school because the schools aren’t clean or safe. In many parts of Asia, Africa and South America, children start working when they are less than 12 years old, and so they can’t go to school. This is called child labour. About 246 million children do child labour. In some places, like the Ivory Coast, children work in the fields. In the Philippines and other countries, children work in factories, where they make toys, clothes or sports equipment.",
            "How does UNICEF help?\nUNICEF does different things to help. When schools have been destroyed by natural disasters, UNICEF organizes emergency classes in tents, so children don’t miss school. It also helps build new schools for these children. It tries to help schools get clean water and good food so that parents are not afraid to send their children there. UNICEF also works with governments to make sure that children go to school instead of going to work when they are very young."
          ]
        },
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
        titleAr: "الدرس الرابع: مدارس للجميع والتعليم حق لكل طفل",
        titleEn: "Lesson 4: Schools for All — Education for Every Child",
        category: "reading",
        summary: "إعلان منظمة Schools for All التي تساعد الأطفال الأكثر فقراً على الالتحاق بالمدارس من خلال توفير الكتب والمدارس الآمنة والتبرعات.",
        sourcePages: "الملزمة ص 31",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الرابع الإعدادي",
          sourcePages: "31",
          verificationNote: "النصّ الإعلاني الإنجليزي في الصفحة 31 من المصدر.",
          originalText: [
            "Unfortunately, not all children can go to school. Schools for All is an organization that helps the poorest children go to school. We give them money to pay for books. We make sure their schools are safe. Last year we built two schools in Kenya, and gave books to 500 children.\nBut Schools for All needs your help. Please donate to help us send more children to school this year."
          ]
        },
        detailedContent: [
          "تساعد منظمة Schools for All الأطفال الأكثر فقراً على الذهاب إلى المدرسة.",
          "توفّر المنظمة المال لشراء الكتب، وتعمل على جعل المدارس آمنة.",
          "بنت المنظمة مدرستين في كينيا وقدمت كتباً إلى 500 طفل، وتطلب التبرعات لمساعدة عدد أكبر من الأطفال."
        ],
        teacherNotes: [
          "أسئلة المصدر: What does Schools for All do? — It helps the poorest children go to school.",
          "Where did it build two schools? — In Kenya.",
          "What does the advertisement ask readers to do? — Donate to help more children go to school."
        ],
        commonMistakes: [],
        examples: [
          {
            en: "Schools for All helps the poorest children go to school.",
            ar: "تساعد منظمة مدارس للجميع الأطفال الأكثر فقراً على الالتحاق بالمدرسة.",
            highlight: "helps the poorest children",
            note: "الفكرة الرئيسية للإعلان"
          }
        ],
        exercises: [
          {
            id: "4u2-ex4",
            question: "Where did Schools for All build two schools last year?",
            options: ["Kenya", "Thailand", "The Philippines", "The Ivory Coast"],
            correctAnswer: "Kenya",
            explanation: "يذكر النص أنها بنت مدرستين في كينيا.",
            type: "mcq",
            sourcePages: "الملزمة ص 31"
          },
          {
            id: "4u2-ex4b",
            question: "What does Schools for All ask readers to do?",
            options: ["Donate money", "Build a hospital", "Teach music", "Travel abroad"],
            correctAnswer: "Donate money",
            explanation: "يطلب الإعلان التبرع لمساعدة المزيد من الأطفال على الدراسة.",
            type: "mcq",
            sourcePages: "الملزمة ص 31"
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
        titleAr: "الدرس السادس: مدرسة ميد (The Meade School)",
        titleEn: "Lesson 6: The Meade School",
        category: "reading",
        summary: "تاريخ مدرسة متخصصة للأطفال الممثلين والموسيقيين والرياضيين، ورسالتها التعليمية، وكيف تطورت لتشمل مركز التعلم الذاتي وغرفة الحاسوب.",
        sourcePages: "الملزمة ص 38 - 39",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الرابع الإعدادي",
          sourcePages: "38–39",
          verificationNote: "النص الكامل مقسّم في المصدر إلى Our Mission وOur History وChanges.",
          originalText: [
            "Our Mission\nChild actors, musicians and athletes have different needs from other students. They need to have time to rehearse and train, but they need a good education, too. Our mission is to give students both these things. At MSCA, students can take classes in the morning or at night. They study Art, Music and Sports, but they also study Biology, Physics and Chemistry so they can go to university when they leave school.",
            "Our History\nIn 1910, John Meade was walking in the street when a boy stopped him. The boy wanted John to help him read a street sign. John was surprised that the boy couldn’t read. He asked the boy about his school, and the boy told him he was an actor. Child actors spent a lot of time rehearsing and didn’t have time to go to school. John decided to start a special school for these children. He decided classes should start later than in other schools, so children would have time to rehearse. When they were working in another city, they could post their lessons to their teachers.",
            "Changes\nOur school has changed with the times. In the beginning, it was only for actors and musicians. Then one day, while John Meade was reading the newspaper, he saw an article about young athletes. He realized that children who did sports needed a special school, too. He brought more sports teachers to the school, and he built a swimming pool.\nOther things have changed at the school, too. We now have a modern self-access centre and a computer room. Students who are working in other cities don’t have to send their lessons by post because they can send them by email."
          ]
        },
        detailedContent: [
          "رسالة المدرسة: تلبية احتياجات الأطفال الممثلين والموسيقيين والرياضيين مع الحفاظ على تعليمهم الأكاديمي.",
          "تأسست الفكرة عندما قابل John Meade طفلاً ممثلاً لا يستطيع قراءة لافتة في الشارع عام 1910.",
          "توسعت المدرسة لاحقاً لتشمل الرياضيين، ومسبحاً، ومركز تعلم ذاتي حديثاً، وغرفة حاسوب."
        ],
        teacherNotes: [
          "The school offers classes in the morning or at night.",
          "John Meade started the school because child actors did not have enough time to attend ordinary school.",
          "Students who work in other cities can send lessons by email."
        ],
        commonMistakes: [],
        examples: [
          {
            en: "Students can take classes in the morning or at night.",
            ar: "يمكن للطلاب حضور الدروس صباحاً أو ليلاً.",
            highlight: "in the morning or at night",
            note: "من رسالة المدرسة"
          }
        ],
        exercises: [
          {
            id: "4u2-ex6",
            question: "Why did John Meade decide to start a special school?",
            options: [
              "Child actors spent a lot of time rehearsing and could not attend ordinary school.",
              "He wanted to teach only university students.",
              "The school had no computer room.",
              "Young athletes did not like sports."
            ],
            correctAnswer: "Child actors spent a lot of time rehearsing and could not attend ordinary school.",
            explanation: "كانت حاجة الأطفال الممثلين إلى وقت للتدريب تمنعهم من الذهاب إلى المدرسة العادية.",
            type: "mcq",
            sourcePages: "الملزمة ص 38"
          },
          {
            id: "4u2-ex6b",
            question: "What can students use to send their lessons from other cities?",
            options: ["Email", "Fax only", "The post only", "Telephone calls"],
            correctAnswer: "Email",
            explanation: "يوضح النص أنهم يستطيعون إرسال الدروس بالبريد الإلكتروني.",
            type: "mcq",
            sourcePages: "الملزمة ص 39"
          }
        ]
      },
      {
        id: "4th-u2-l7",
        unitId: 42,
        lessonNumber: 7,
        titleAr: "الدرس السابع: وظيفة سالي القديمة (Sally’s Old Job)",
        titleEn: "Lesson 7: Sally’s Old Job",
        category: "reading",
        summary: "قصة سالي عن عملها السابق مع الأطفال الممثلين أثناء تصوير الأفلام، والسفر المتكرر، وموقف نسيان جواز السفر، ونوم الطالب بن أثناء الامتحان.",
        sourcePages: "الملزمة ص 43 - 44",
        readingPassage: {
          status: "verified",
          sourceTitle: "ملزمة الرابع الإعدادي",
          sourcePages: "43",
          verificationNote: "النص الإنجليزي الكامل لقطعة Sally’s Old Job في صفحة 43، وتتبعها أسئلة الفهم في صفحة 44.",
          originalText: [
            "I travelled a lot with my students because films are often made in other countries. I liked travelling and seeing new places, but I didn’t like being away from my family. And the job was tiring, too. I had to pack all the children’s school books and take them to the airport.",
            "Once, I went to Italy with two actors. I had a lot of books to pack, and it took a long time. I didn’t want to be late, so I left the house as fast as possible. When I got to the airport, I couldn’t get on the plane because I had forgotten my passport. I had to catch a flight the next day.",
            "It was tiring for the children, too. They had to act and study too, so they worked a lot.",
            "Once, I had to give a student called Ben a Maths exam. He was tired because he had been working on the film set all morning. I gave him his exam paper and started reading a book. Suddenly I heard a snore. I looked up and realized Ben had fallen asleep."
          ]
        },
        detailedContent: [
          "كانت سالي تسافر كثيراً مع طلابها لأن الأفلام تُصوّر أحياناً في بلدان أخرى.",
          "نسيت جواز سفرها في إحدى الرحلات إلى إيطاليا، فلم تتمكن من ركوب الطائرة واضطرت إلى الانتظار حتى اليوم التالي.",
          "في امتحان الرياضيات، غلب النوم الطالب بن لأنه كان يعمل طوال الصباح في موقع التصوير."
        ],
        teacherNotes: [
          "Why didn’t Sally like her job? — She didn’t like being away from her family.",
          "Why couldn’t Sally get on the plane? — She had forgotten her passport.",
          "What happened during the Maths exam? — Ben fell asleep."
        ],
        commonMistakes: [],
        examples: [
          {
            en: "I couldn’t get on the plane because I had forgotten my passport.",
            ar: "لم أتمكن من ركوب الطائرة لأنني كنت قد نسيت جواز سفري.",
            highlight: "had forgotten",
            note: "مثال من نص القراءة على الماضي التام"
          }
        ],
        exercises: [
          {
            id: "4u2-ex7-1",
            question: "What didn’t Sally like about her job?",
            options: [
              "Being away from her family",
              "Seeing new places",
              "Using a computer"
            ],
            correctAnswer: "Being away from her family",
            explanation: "تذكر سالي أنها لم تكن تحب الابتعاد عن عائلتها.",
            type: "mcq",
            sourcePages: "الملزمة ص 43"
          },
          {
            id: "4u2-ex7-2",
            question: "Why couldn’t Sally get on the plane to Italy?",
            options: [
              "She had forgotten her passport",
              "She was carrying too many suitcases",
              "She went to the airport on the wrong day"
            ],
            correctAnswer: "She had forgotten her passport",
            explanation: "نسيت سالي جواز سفرها.",
            type: "mcq",
            sourcePages: "الملزمة ص 43"
          },
          {
            id: "4u2-ex7-3",
            question: "What happened during Ben’s Maths exam?",
            options: ["Ben fell asleep", "Sally fell asleep", "Ben left the room"],
            correctAnswer: "Ben fell asleep",
            explanation: "سمعت سالي شخيراً ثم أدركت أن بن قد نام.",
            type: "mcq",
            sourcePages: "الملزمة ص 43"
          }
        ]
      }
    ]
  }
];
