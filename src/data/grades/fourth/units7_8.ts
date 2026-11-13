import { Lesson, Unit } from '../../../types';

type LessonSeed = Omit<Lesson, 'examples' | 'exercises' | 'teacherNotes'> & {
  examples?: Lesson['examples'];
  exercises?: Lesson['exercises'];
};

const makeLesson = ({ examples = [], exercises = [], ...lesson }: LessonSeed): Lesson => ({
  ...lesson,
  teacherNotes: ['المحتوى مرتبط بموضوعات الملزمة المحددة في مرجع الصفحات، والأسئلة التفاعلية المضافة هنا تدريب من المنصة وليست نقلاً لأسئلة وزارية.'],
  examples,
  exercises
});

const practice = (id: string, question: string, options: string[], correctAnswer: string, explanation: string, sourcePages: string) => ({
  id,
  question,
  options,
  correctAnswer,
  explanation: explanation + ' (تدريب إضافي من المنصة؛ موضع الموضوع في الملزمة ' + sourcePages + ').',
  type: 'mcq' as const,
  sourcePages,
  contentOrigin: 'ai_generated' as const
});

export const FOURTH_PREPARATORY_UNITS_7_8: Unit[] = [
  {
    id: 47,
    number: 7,
    titleAr: 'الوحدة السابعة: الرياضة والمهن والطقس والبيئة والتقنية',
    titleEn: 'Unit 7: Exercise, Careers, Weather, Environment and Technology',
    description: 'تبدأ الوحدة بفوائد الرياضة للجسم، ثم المهن العلمية والأقمار الصناعية والرياح والطقس والحالات الشرطية، وأهوار الحمار وظروف التأكيد وتكوّن النفط والمبني للمجهول، والتسوق الإلكتروني ومحطة الفضاء الدولية والسلاحف البحرية.',
    accentColor: 'bg-cobalt text-surface',
    bgGradient: 'bg-blue-mist border-ink',
    sourcePages: 'الملزمة ص 119 - 143',
    academicYear: '2025',
    lessons: [
      makeLesson({
        id: '4th-u7-l1',
        unitId: 47,
        lessonNumber: 1,
        titleAr: 'الدرس الأول: أهمية التمارين للجسم',
        titleEn: 'Lesson 1: Why Exercise Is Important for Your Body',
        category: 'reading',
        summary: 'قراءة عن دور التمارين في بناء العضلات وتقوية القلب والمحافظة على الصحة العامة.',
        sourcePages: 'الملزمة ص 119',
        detailedContent: [
          'توضح القراءة أن التمارين مهمة للجسم بطرائق متعددة، وأن العضلات القوية تساعد على القيام بالأنشطة اليومية.',
          'تذكر القراءة القلب بوصفه عضلة، وتشير إلى فوائد الحركة والنشاط البدني.'
        ],
        examples: [{ en: 'Exercise builds muscles.', ar: 'تساعد التمارين على بناء العضلات.', highlight: 'builds muscles', note: 'فائدة مباشرة مذكورة في النص' }],
        exercises: [practice('4u7-ex1', 'Why do you need strong muscles?', ['To do the things you want to do during the day.', 'To avoid sleeping.', 'To stop your heart.', 'To change the weather.'], 'To do the things you want to do during the day.', 'يذكر النص أن العضلات القوية تساعد على أداء الأنشطة اليومية', 'ص 119')]
      }),
      makeLesson({
        id: '4th-u7-l2',
        unitId: 47,
        lessonNumber: 2,
        titleAr: 'الدرس الثاني: المهن العلمية وتخصصاتها',
        titleEn: 'Lesson 2: Science Careers',
        category: 'vocabulary',
        summary: 'مفردات المهن العلمية مثل عالم الأحياء البحرية وعالم الغابات ومهندس الطيران والفضاء وعالم الأرصاد والجيولوجي.',
        sourcePages: 'الملزمة ص 120 - 121',
        detailedContent: [
          'تربط التمارين بين أسماء المهن العلمية ومجالاتها: marine biologist يدرس النباتات والحيوانات البحرية، forester يدرس الأشجار، aerospace engineer يعمل في مجال الفضاء، meteorologist يدرس الطقس، وgeologist يدرس الأرض.',
          'تتضمن الصفحات مفردات عن المختبرات والصور الفضائية والخرائط التي تعرض كميات الأمطار.'
        ],
        examples: [
          { en: 'A meteorologist studies the weather.', ar: 'يدرس عالم الأرصاد الجوية الطقس.', highlight: 'meteorologist', note: 'مفردات المهن' },
          { en: 'A geologist studies the Earth.', ar: 'يدرس الجيولوجي الأرض.', highlight: 'geologist', note: 'مفردات المهن' }
        ],
        exercises: [practice('4u7-ex2', 'A marine biologist studies ______.', ['plants and animals in the sea', 'trees', 'the weather', 'the Earth'], 'plants and animals in the sea', 'هذا هو مجال عالم الأحياء البحرية في تمرين المطابقة', 'ص 120 - 121')]
      }),
      makeLesson({
        id: '4th-u7-l3',
        unitId: 47,
        lessonNumber: 3,
        titleAr: 'الدرس الثالث: الرياح التجارية والشمال والطقس',
        titleEn: 'Lesson 3: Trade Winds, the Shamal and Weather',
        category: 'reading',
        summary: 'قراءة عن الرياح التجارية ورياح الشمال وكيفية حدوث الرياح وأدوات التنبؤ بالأعاصير.',
        sourcePages: 'الملزمة ص 122',
        detailedContent: [
          'تطرح القراءة أسئلة عن اتجاه هبوب الرياح التجارية، ومعنى Shamal، وكيف تحدث الرياح.',
          'تذكر الصفحات استخدام أدوات الأرصاد والمعلومات الجوية في التنبؤ بالأحوال الجوية.'
        ],
        examples: [{ en: 'What is the Shamal?', ar: 'ما رياح الشمال؟', highlight: 'Shamal', note: 'مصطلح وارد في قراءة الطقس' }],
        exercises: [practice('4u7-ex3', 'The text asks about trade winds and the ______.', ['Shamal', 'Saturn', 'Lamassu', 'Cassini'], 'Shamal', 'Shamal من مفردات موضوع الرياح في النص', 'ص 122')]
      }),
      makeLesson({
        id: '4th-u7-l4',
        unitId: 47,
        lessonNumber: 4,
        titleAr: 'الدرس الرابع: الجمل الشرطية الصفرية والأولى',
        titleEn: 'Lesson 4: Zero and First Conditionals',
        category: 'grammar',
        summary: 'التعبير عن الحقائق العامة والنتائج المستقبلية المحتملة باستخدام If clauses.',
        sourcePages: 'الملزمة ص 123 - 126',
        grammarRuleFormula: 'Zero Conditional: If + Present Simple, Present Simple.\\nFirst Conditional: If + Present Simple, will / may / might + base verb.',
        detailedContent: [
          'تستخدم الحالة الشرطية الصفرية للحقائق العامة والنتائج التي تحدث عادة عند تحقق الشرط.',
          'تستخدم الحالة الشرطية الأولى للحديث عن احتمال أو نتيجة مستقبلية عند تحقق الشرط.',
          'تتضمن الصفحات تمارين تصحيح الجمل وقراءة توقعات الطقس الدولية.'
        ],
        examples: [
          { en: 'If ice melts, it turns into water.', ar: 'إذا انصهر الجليد فإنه يتحول إلى ماء.', highlight: 'If + Present Simple', note: 'حالة شرطية صفرية' },
          { en: 'If it isn’t too hot tomorrow, I might play tennis.', ar: 'إذا لم يكن الجو حاراً جداً غداً، فقد ألعب التنس.', highlight: 'might play', note: 'احتمال مستقبلي' }
        ],
        exercises: [practice('4u7-ex4', 'If you heat water to 100°C, it ______.', ['boils', 'boiled', 'will boiling', 'is boil'], 'boils', 'حقيقة عامة؛ لذلك نستخدم المضارع البسيط في جزأي الجملة', 'ص 123 - 126')]
      }),
      makeLesson({
        id: '4th-u7-l5',
        unitId: 47,
        lessonNumber: 5,
        titleAr: 'الدرس الخامس: أهوار الحمار - استعادة جنة عدن',
        titleEn: 'Lesson 5: Restoring the Garden of Eden - The Al-Hammaar Marshes',
        category: 'reading',
        summary: 'قراءة عن أهوار الحمار بوصفها من أكبر المناطق الرطبة وأهمها في العالم، وسكانها والتجفيف الذي تعرضت له ومشروع استعادتها.',
        sourcePages: 'الملزمة ص 127 - 128',
        detailedContent: [
          'يصف النص أهوار الحمار، المعروفة باسم Garden of Eden، بأنها من أكبر الأراضي الرطبة وأكثرها أهمية في العالم.',
          'تضم الأهوار تنوعاً من النباتات والحيوانات وتشكل محطة للطيور المهاجرة، ويعيش فيها أكثر من نصف مليون شخص يُعرفون بعرب الأهوار.',
          'تتناول القراءة ما حدث للأهوار في تسعينيات القرن الماضي وأهداف مشروع استعادة البيئة وتحسين حياة السكان، بما يشمل الرعاية الصحية والتعليم ومياه الشرب.'
        ],
        examples: [{ en: 'The Al-Hammaar Marshes are one of the largest and most important wetlands in the world.', ar: 'تُعد أهوار الحمار من أكبر المناطق الرطبة وأكثرها أهمية في العالم.', highlight: 'wetlands', note: 'وصف مباشر في نص الملزمة' }],
        exercises: [practice('4u7-ex5', 'The Al-Hammaar Marshes are described as important ______.', ['wetlands', 'deserts', 'mountains', 'cities'], 'wetlands', 'النص يصفها بأنها wetlands', 'ص 127 - 128')]
      }),
      makeLesson({
        id: '4th-u7-l6',
        unitId: 47,
        lessonNumber: 6,
        titleAr: 'الدرس السادس: ظروف التأكيد والاحتمال',
        titleEn: 'Lesson 6: Adverbs of Certainty',
        category: 'grammar',
        summary: 'استخدام definitely وprobably وperhaps للتعبير عن درجة التأكد، وموقع الظرف في الجملة.',
        sourcePages: 'الملزمة ص 129 - 130',
        detailedContent: [
          'تشرح الصفحات استعمال ظروف التأكيد والاحتمال، ومنها definitely وprobably وperhaps.',
          'توضح الأمثلة أن بعض الظروف تأتي قبل الفعل الرئيسي أو بعد فعل be أو في بداية الجملة بحسب تركيبها.'
        ],
        examples: [
          { en: 'He is definitely not at home.', ar: 'هو بالتأكيد ليس في المنزل.', highlight: 'definitely', note: 'ظرف تأكيد' },
          { en: 'Perhaps I’ll be a geologist when I’m older.', ar: 'ربما سأصبح جيولوجياً عندما أكبر.', highlight: 'Perhaps', note: 'ظرف احتمال' }
        ],
        exercises: [practice('4u7-ex6', 'Choose the word that expresses possibility: ______ I’ll be a geologist.', ['Perhaps', 'Never', 'Already', 'Yesterday'], 'Perhaps', 'Perhaps تعبر عن الاحتمال', 'ص 129 - 130')]
      }),
      makeLesson({
        id: '4th-u7-l7',
        unitId: 47,
        lessonNumber: 7,
        titleAr: 'الدرس السابع: تكوّن النفط والمبني للمجهول',
        titleEn: 'Lesson 7: From the Earth to the Refinery and Passive Voice',
        category: 'reading',
        summary: 'قراءة عن تكون النفط والتنقيب عنه واستخراجه ونقله إلى المصافي، مع استعمال المبني للمجهول.',
        sourcePages: 'الملزمة ص 131 - 133',
        grammarRuleFormula: 'Passive Voice: object + the appropriate form of be + past participle.\\nExamples: is / are + P.P.; was / were + P.P.; has / have been + P.P.; will be + P.P.',
        detailedContent: [
          'يشرح النص أن النفط تكوّن قبل ملايين السنين من بقايا النباتات والحيوانات التي غطتها طبقات من الطين والماء، ثم أثّر الضغط والحرارة فيها.',
          'يذكر النص أن الجيولوجيين يفحصون عينات الصخور أو يستخدمون صور الأقمار الصناعية وخرائط الرادار للبحث عن النفط، ثم تحفر الآبار وينقل النفط إلى المصافي.',
          'تشرح صفحات القواعد تحويل المفعول به إلى بداية الجملة واستخدام صيغة be المناسبة مع التصريف الثالث.'
        ],
        examples: [{ en: 'Petroleum was formed millions of years ago.', ar: 'تكوّن النفط قبل ملايين السنين.', highlight: 'was formed', note: 'المبني للمجهول في الماضي البسيط' }],
        exercises: [practice('4u7-ex7', 'Petroleum ______ millions of years ago.', ['was formed', 'is form', 'forms', 'has form'], 'was formed', 'حدث التكوّن في الماضي، والجملة مبنية للمجهول', 'ص 131 - 133')]
      }),
      makeLesson({
        id: '4th-u7-l8',
        unitId: 47,
        lessonNumber: 8,
        titleAr: 'الدرس الثامن: التسوق عبر الإنترنت',
        titleEn: 'Lesson 8: Online Shopping',
        category: 'reading',
        summary: 'مفردات وقراءة عن التسوق عبر الإنترنت ومقارنته بالتسوق من المتاجر من حيث الراحة والتوصيل والتكلفة.',
        sourcePages: 'الملزمة ص 134 - 135',
        detailedContent: [
          'تتناول التمارين أسباب تردد بعض الناس في الشراء عبر الإنترنت، ومقارنة سهولة التسوق الإلكتروني بالشراء من المتاجر.',
          'تشير التمارين إلى توصيل المنتجات إلى المنزل وإلى النفقات التي تتحملها المتاجر التقليدية.'
        ],
        examples: [{ en: 'Products bought online are delivered to your house.', ar: 'تُوصّل المنتجات التي تُشترى عبر الإنترنت إلى منزلك.', highlight: 'delivered to your house', note: 'من تمرين التسوق الإلكتروني' }],
        exercises: [practice('4u7-ex8', 'Products bought online are ______ to your house.', ['delivered', 'forgotten', 'borrowed', 'grown'], 'delivered', 'من موضوع التسوق عبر الإنترنت والتوصيل', 'ص 134 - 135')]
      }),
      makeLesson({
        id: '4th-u7-l9',
        unitId: 47,
        lessonNumber: 9,
        titleAr: 'الدرس التاسع: عرض تقديمي عن محطة الفضاء الدولية',
        titleEn: 'Lesson 9: Presentation - The International Space Station',
        category: 'reading',
        summary: 'عرض تقديمي يشرح محطة الفضاء الدولية وموضوع العرض وترتيب تقديم المعلومات.',
        sourcePages: 'الملزمة ص 136 - 137',
        detailedContent: [
          'يبدأ النص بعرض تقديمي عن International Space Station (ISS)، ويوضح كيف يقدم المتحدث موضوعه وينظم الأفكار التي سيشرحها.',
          'تتضمن الصفحات نص العرض ومهارات ترتيب العرض الشفهي والتعريف بالمحطة.'
        ],
        examples: [{ en: 'The topic of my presentation today is the International Space Station, or ISS.', ar: 'موضوع عرضي اليوم هو محطة الفضاء الدولية، أو ISS.', highlight: 'International Space Station', note: 'الجملة الافتتاحية للعرض' }],
        exercises: [practice('4u7-ex9', 'ISS stands for ______.', ['International Space Station', 'International Satellite Signal', 'Internal Space System', 'International Solar Station'], 'International Space Station', 'الاختصار ISS ورد في بداية العرض التقديمي', 'ص 136 - 137')]
      }),
      makeLesson({
        id: '4th-u7-l10',
        unitId: 47,
        lessonNumber: 10,
        titleAr: 'الدرس العاشر: السلحفاة البحرية صقرية المنقار',
        titleEn: 'Lesson 10: The Hawksbill Sea Turtle',
        category: 'reading',
        summary: 'قراءة عن شكل سلحفاة صقرية المنقار وموطنها وغذائها والأخطار التي تهددها، مع التمارين التابعة للنص.',
        sourcePages: 'الملزمة ص 138 - 143',
        detailedContent: [
          'يصف النص سلحفاة صقرية المنقار بأنها متوسطة الحجم، ذات صدفة جميلة بألوان داكنة وفاتحة، وفم يشبه منقار الصقر.',
          'يذكر النص أنها تعيش في المحيطات الأطلسي والهادئ والهندي، وتتغذى على الإسفنج وقناديل البحر وحيوانات ونباتات بحرية صغيرة.',
          'تشرح القراءة الأخطار التي تتعرض لها بسبب الصيد من أجل الصدفة وابتلاع قطع البلاستيك، وتتبعها تمارين فهم ومفردات وجمل شرطية.'
        ],
        examples: [{ en: 'The hawksbill is a medium-sized sea turtle with a very beautiful shell.', ar: 'سلحفاة صقرية المنقار سلحفاة بحرية متوسطة الحجم ذات صدفة جميلة جداً.', highlight: 'medium-sized sea turtle', note: 'بداية نص القراءة' }],
        exercises: [practice('4u7-ex10', 'What can make hawksbill turtles ill?', ['Pieces of plastic they eat', 'Fresh water', 'Coral sand', 'Small fish only'], 'Pieces of plastic they eat', 'يحذر النص من أن السلاحف قد تبتلع قطع البلاستيك ظناً أنها طعام', 'ص 138 - 143')]
      })
    ]
  },
  {
    id: 48,
    number: 8,
    titleAr: 'الوحدة الثامنة: زحل ونظام تحديد المواقع واللياقة في الفضاء',
    titleEn: 'Unit 8: Saturn, GPS and Keeping Fit in Space',
    description: 'تضم الوحدة قراءة عن كوكب زحل وحلقاته والمركبات الفضائية، وقراءة عن أجهزة استقبال GPS وطريقة عملها، وتدريبات على المبني للمجهول، وموضوع المحافظة على لياقة رواد الفضاء.',
    accentColor: 'bg-soft-mint text-ink',
    bgGradient: 'bg-paper border-ink',
    sourcePages: 'الملزمة ص 144 - 148',
    academicYear: '2025',
    lessons: [
      makeLesson({
        id: '4th-u8-l1',
        unitId: 48,
        lessonNumber: 1,
        titleAr: 'الدرس الأول: كوكب زحل',
        titleEn: 'Lesson 1: Planet Saturn',
        category: 'reading',
        summary: 'معلومات عن زحل بوصفه كوكباً عملاقاً وحلقاته وأقماره والبعثات الفضائية التي زارته.',
        sourcePages: 'الملزمة ص 144',
        detailedContent: [
          'يصف النص زحل بأنه كوكب عملاق وثاني أكبر كواكب المجموعة الشمسية بعد المشتري، وأنه يتكون أساساً من الغازات.',
          'يتحدث النص عن حلقات زحل التي تتكون في معظمها من الجليد وبعض الصخور، وعن المركبات الفضائية التي زارت الكوكب.',
          'تذكر القراءة أقمار زحل، ومنها Titan، والصور التي أرسلتها المركبة Cassini.'
        ],
        examples: [{ en: 'Saturn is a giant planet.', ar: 'زحل كوكب عملاق.', highlight: 'giant planet', note: 'موضوع قراءة زحل' }],
        exercises: [practice('4u8-ex1', 'Saturn is made mainly of ______.', ['gases', 'wood', 'water', 'iron only'], 'gases', 'يذكر النص أن زحل يتكون أساساً من الغازات', 'ص 144')]
      }),
      makeLesson({
        id: '4th-u8-l2',
        unitId: 48,
        lessonNumber: 2,
        titleAr: 'الدرس الثاني: نظام تحديد المواقع العالمي GPS',
        titleEn: 'Lesson 2: The Global Positioning System (GPS)',
        category: 'reading',
        summary: 'قراءة عن أجهزة استقبال GPS واتصالها بالأقمار الصناعية والإشارات الراديوية وقياس المسافة لتحديد الموقع.',
        sourcePages: 'الملزمة ص 145 - 146',
        detailedContent: [
          'يوضح النص أن أجهزة GPS تتصل بشبكة من الأقمار الصناعية وتبحث عن أربعة أقمار صناعية على الأقل.',
          'ترسل الأقمار إشارات راديوية إلى جهاز الاستقبال، ويقيس الجهاز الزمن الذي تستغرقه الإشارات للوصول إليه لتقدير المسافة.',
          'يذكر النص استعمال أجهزة GPS المحمولة لدى الصيادين وممارسي الأنشطة الخارجية، ويذكر أن الجهاز يحتوي على خريطة في ذاكرته.'
        ],
        examples: [{ en: 'GPS satellites send radio signals to the receiver.', ar: 'ترسل أقمار GPS إشارات راديوية إلى جهاز الاستقبال.', highlight: 'radio signals', note: 'آلية عمل الجهاز كما يشرحها النص' }],
        exercises: [practice('4u8-ex2', 'A GPS receiver looks for at least ______ GPS satellites.', ['four', 'two', 'ten', 'one hundred'], 'four', 'يذكر النص أن الجهاز يبحث عن أربعة أقمار صناعية على الأقل', 'ص 145 - 146')]
      }),
      makeLesson({
        id: '4th-u8-l3',
        unitId: 48,
        lessonNumber: 3,
        titleAr: 'الدرس الثالث: المبني للمجهول في الجمل',
        titleEn: 'Lesson 3: Passive Voice Practice',
        category: 'grammar',
        summary: 'تطبيقات على تحويل الجمل إلى المبني للمجهول في أزمنة مختلفة، باستخدام be والتصريف الثالث.',
        sourcePages: 'الملزمة ص 146',
        grammarRuleFormula: 'Passive Voice: object + be (in the required tense) + past participle.',
        detailedContent: [
          'تتضمن الصفحة تمارين لتحويل جمل من المبني للمعلوم إلى المبني للمجهول.',
          'تغطي الأمثلة أزمنة مختلفة، ويُختار شكل be بحسب الزمن ثم يأتي التصريف الثالث للفعل.'
        ],
        examples: [{ en: 'Somebody wrote this song in 2001.', ar: 'كتب شخص ما هذه الأغنية عام 2001.', highlight: 'wrote', note: 'جملة تدريبية للتحويل إلى المبني للمجهول' }],
        exercises: [practice('4u8-ex3', 'The song ______ in 2001.', ['was written', 'is write', 'wrote', 'has wrote'], 'was written', 'نستخدم was + past participle في الماضي البسيط للمبني للمجهول', 'ص 146')]
      }),
      makeLesson({
        id: '4th-u8-l4',
        unitId: 48,
        lessonNumber: 4,
        titleAr: 'الدرس الرابع: المحافظة على اللياقة البدنية في الفضاء',
        titleEn: 'Lesson 4: Keeping Fit in Space',
        category: 'reading',
        summary: 'قراءة عن أثر بيئة الفضاء في جسم رواد الفضاء وضرورة ممارسة التمارين والمحافظة على نظام غذائي متوازن.',
        sourcePages: 'الملزمة ص 147 - 148',
        detailedContent: [
          'تتناول القراءة المحافظة على اللياقة البدنية في الفضاء، وما يواجهه رواد الفضاء من اختلافات عن بيئة الأرض.',
          'تشرح أهمية ممارسة التمارين للحفاظ على قوة العضلات واللياقة أثناء الرحلات الفضائية.',
          'تتضمن تمارين ختامية عن الغذاء والعضلات والتمارين.'
        ],
        examples: [{ en: 'Astronauts need to keep fit in space.', ar: 'يحتاج رواد الفضاء إلى المحافظة على لياقتهم في الفضاء.', highlight: 'keep fit', note: 'موضوع القراءة' }],
        exercises: [practice('4u8-ex4', 'The space fitness text is mainly about keeping astronauts ______.', ['fit', 'hungry', 'asleep', 'lost'], 'fit', 'يركز النص على المحافظة على اللياقة في الفضاء', 'ص 147 - 148')]
      })
    ]
  }
];
