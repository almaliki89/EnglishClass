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
    titleAr: 'الوحدة السابعة: المهن والطقس والأهوار والنفط والبيئة',
    titleEn: 'Unit 7: Careers, Weather, Marshes, Petroleum and the Environment',
    description: 'تجمع الوحدة نصوصاً عن المهن العلمية والأقمار الصناعية والطقس والرياح، والحالة الشرطية الصفرية والأولى، وأهوار الحمار، وظروف التأكيد، وتكوّن النفط والمبني للمجهول، والسلاحف البحرية والتسوق عبر الإنترنت.',
    accentColor: 'bg-cobalt text-surface',
    bgGradient: 'bg-blue-mist border-ink',
    sourcePages: 'الملزمة ص 119 - 143',
    academicYear: '2025',
    lessons: [
      makeLesson({
        id: '4th-u7-l1',
        unitId: 47,
        lessonNumber: 1,
        titleAr: 'الدرس الأول: المهن العلمية والأقمار الصناعية',
        titleEn: 'Lesson 1: Science Careers and Satellites',
        category: 'reading',
        summary: 'مفردات المهن العلمية مثل marine biologist وforester وaerospace engineer وmeteorologist وgeologist، واستخدام الأقمار الصناعية في نقل المعلومات.',
        sourcePages: 'الملزمة ص 119 - 122',
        detailedContent: [
          'تربط صفحات القراءة بين المهن العلمية وما تدرسه أو تعمل به، مثل عالم الأحياء البحرية، وعالم الغابات، ومهندس الطيران والفضاء، وعالم الأرصاد، والجيولوجي.',
          'تتضمن القراءة أمثلة على استخدام الأقمار الصناعية في الاتصالات ومراقبة الطقس والتلوث وجمع المعلومات عن الأرض.',
          'تظهر مهن أخرى مرتبطة بالتنبؤ بالطقس واستخدام المعلومات لحماية الطيران والسكان من العواصف.'
        ],
        examples: [{ en: 'A meteorologist studies the weather.', ar: 'يدرس عالم الأرصاد الجوية الطقس.', highlight: 'meteorologist', note: 'مفردات المهن العلمية' }],
        exercises: [practice('4u7-ex1', 'A geologist studies ______.', ['the Earth', 'the weather', 'trees', 'the sea only'], 'the Earth', 'الجيولوجي يدرس الأرض', 'ص 119 - 122')]
      }),
      makeLesson({
        id: '4th-u7-l2',
        unitId: 47,
        lessonNumber: 2,
        titleAr: 'الدرس الثاني: الرياح والطقس والأعاصير',
        titleEn: 'Lesson 2: Wind, Weather and Hurricanes',
        category: 'reading',
        summary: 'شرح نشوء الرياح بسبب اختلاف الضغط الجوي، والرياح التجارية والشمال، ودور خبراء الأرصاد والأقمار الصناعية في توقع الأعاصير.',
        sourcePages: 'الملزمة ص 123 - 126',
        grammarRuleFormula: 'Zero Conditional: If + Present Simple, Present Simple.\\nFirst Conditional: If + Present Simple, will / may / might + base verb.',
        detailedContent: [
          'تشرح القراءة أن الرياح تحدث عندما ينتقل الهواء من مناطق الضغط المرتفع إلى مناطق الضغط المنخفض.',
          'الرياح التجارية تهب من المناطق شبه المدارية باتجاه خط الاستواء، ويذكر النص رياح الشمال بوصفها رياحاً محلية في منطقة الخليج العربي.',
          'يذكر النص أن خبراء الأرصاد يستخدمون الأقمار الصناعية لمحاولة توقع تكون الأعاصير ومسارها.',
          'تشرح الصفحات الحالة الشرطية الصفرية للحقائق العامة، والحالة الشرطية الأولى للنتائج المستقبلية الممكنة.'
        ],
        examples: [
          { en: 'Wind happens when air moves from areas of high pressure to areas of low pressure.', ar: 'تنشأ الرياح عندما يتحرك الهواء من مناطق الضغط المرتفع إلى مناطق الضغط المنخفض.', highlight: 'high pressure / low pressure', note: 'حقيقة علمية في النص' },
          { en: 'If it isn’t too hot tomorrow, I might play tennis.', ar: 'إذا لم يكن الجو حاراً جداً غداً، فقد ألعب التنس.', highlight: 'If ... might', note: 'احتمال مستقبلي' }
        ],
        exercises: [practice('4u7-ex2', 'Meteorologists use ______ to try to predict hurricanes.', ['satellites', 'shopping lists', 'museums', 'receipts'], 'satellites', 'النص يذكر استخدام الأقمار الصناعية لتوقع الأعاصير', 'ص 123 - 126')]
      }),
      makeLesson({
        id: '4th-u7-l3',
        unitId: 47,
        lessonNumber: 3,
        titleAr: 'الدرس الثالث: أهوار الحمار - استعادة جنة عدن',
        titleEn: 'Lesson 3: Restoring the Garden of Eden - The Al-Hammaar Marshes',
        category: 'reading',
        summary: 'قراءة عن أهوار الحمار بوصفها من أكبر المناطق الرطبة وأهمها في العالم، وسكانها والتجفيف الذي تعرضت له ومشروع استعادتها.',
        sourcePages: 'الملزمة ص 127 - 128',
        detailedContent: [
          'يصف النص أهوار الحمار، المعروفة باسم Garden of Eden، بأنها من أكبر الأراضي الرطبة وأكثرها أهمية في العالم.',
          'تضم الأهوار تنوعاً من النباتات والحيوانات وتشكل محطة للطيور المهاجرة، ويعيش فيها أكثر من نصف مليون شخص يُعرفون بعرب الأهوار.',
          'تتناول القراءة ما حدث للأهوار في تسعينيات القرن الماضي وأهداف مشروع استعادة البيئة وتحسين حياة السكان.'
        ],
        examples: [{ en: 'The Al-Hammaar Marshes are one of the largest and most important wetlands in the world.', ar: 'تُعد أهوار الحمار من أكبر المناطق الرطبة وأكثرها أهمية في العالم.', highlight: 'wetlands', note: 'وصف مباشر في نص الملزمة' }],
        exercises: [practice('4u7-ex3', 'The Al-Hammaar Marshes are described as important ______.', ['wetlands', 'deserts', 'mountains', 'cities'], 'wetlands', 'النص يصفها بأنها wetlands', 'ص 127 - 128')]
      }),
      makeLesson({
        id: '4th-u7-l4',
        unitId: 47,
        lessonNumber: 4,
        titleAr: 'الدرس الرابع: ظروف التأكيد والاحتمال',
        titleEn: 'Lesson 4: Adverbs of Certainty',
        category: 'grammar',
        summary: 'استخدام definitely وprobably وperhaps للتعبير عن درجة التأكد، وموقع الظرف في الجملة.',
        sourcePages: 'الملزمة ص 129 - 130',
        detailedContent: [
          'تشرح الصفحات استعمال ظروف التأكيد والاحتمال، ومنها definitely وprobably وperhaps.',
          'توضح الأمثلة أن بعض الظروف تأتي قبل الفعل الرئيسي أو بعد فعل be أو في بداية الجملة بحسب تركيبها.'
        ],
        examples: [
          { en: 'He definitely wants to come with us.', ar: 'إنه يريد بالتأكيد أن يأتي معنا.', highlight: 'definitely', note: 'ظرف تأكيد' },
          { en: 'Perhaps I’ll be a geologist when I’m older.', ar: 'ربما سأصبح جيولوجياً عندما أكبر.', highlight: 'Perhaps', note: 'احتمال' }
        ],
        exercises: [practice('4u7-ex4', 'Choose the word that expresses possibility: ______ I’ll be a geologist.', ['Perhaps', 'Never', 'Already', 'Yesterday'], 'Perhaps', 'Perhaps تعبر عن الاحتمال', 'ص 129 - 130')]
      }),
      makeLesson({
        id: '4th-u7-l5',
        unitId: 47,
        lessonNumber: 5,
        titleAr: 'الدرس الخامس: تكوّن النفط والمبني للمجهول',
        titleEn: 'Lesson 5: From the Earth to the Refinery and Passive Voice',
        category: 'reading',
        summary: 'قراءة عن تكون النفط والتنقيب عنه واستخراجه ونقله إلى المصافي، مع استعمال المبني للمجهول في أزمنة مختلفة.',
        sourcePages: 'الملزمة ص 131 - 137',
        grammarRuleFormula: 'Passive Voice: object + the appropriate form of be + past participle.\\nExamples: is / are + P.P.; was / were + P.P.; has / have been + P.P.; will be + P.P.',
        detailedContent: [
          'يشرح النص أن النفط تكوّن قبل ملايين السنين من بقايا النباتات والحيوانات التي غطتها طبقات من الطين والماء، ثم أثّر الضغط والحرارة فيها.',
          'يذكر النص استخدام عينات الصخور وصور الأقمار الصناعية وخرائط الرادار في البحث عن النفط، ثم حفر الآبار وبناء برج الحفر.',
          'بعد استخراج النفط يُنقل إلى المصفاة حيث يُعالج ويفصل إلى منتجات مختلفة.',
          'تشرح صفحات القواعد تحويل المفعول به إلى بداية الجملة واستخدام صيغة be المناسبة مع التصريف الثالث.'
        ],
        examples: [{ en: 'Petroleum was formed millions of years ago.', ar: 'تكوّن النفط قبل ملايين السنين.', highlight: 'was formed', note: 'المبني للمجهول في الماضي البسيط' }],
        exercises: [practice('4u7-ex5', 'Petroleum ______ millions of years ago.', ['was formed', 'is form', 'forms', 'has form'], 'was formed', 'حدث التكوّن في الماضي، والجملة مبنية للمجهول', 'ص 131 - 137')]
      }),
      makeLesson({
        id: '4th-u7-l6',
        unitId: 47,
        lessonNumber: 6,
        titleAr: 'الدرس السادس: السلاحف البحرية صقرية المنقار',
        titleEn: 'Lesson 6: The Hawksbill Sea Turtle',
        category: 'reading',
        summary: 'قراءة عن شكل سلحفاة صقرية المنقار وموطنها وغذائها ووضعها المهدد بسبب الصيد والمواد البلاستيكية.',
        sourcePages: 'الملزمة ص 138 - 142',
        detailedContent: [
          'يصف النص سلحفاة صقرية المنقار بأنها متوسطة الحجم، ذات صدفة جميلة بألوان داكنة وفاتحة، وفم يشبه منقار الصقر.',
          'يذكر النص أن وزنها يقارب 60 كيلوغراماً وطولها نحو متر، وأنها تعيش في المحيطات الأطلسي والهادئ والهندي.',
          'تتغذى على الإسفنج وقناديل البحر وحيوانات ونباتات بحرية صغيرة، ويشرح النص أخطار الصيد من أجل الصدفة وابتلاع قطع البلاستيك.'
        ],
        examples: [{ en: 'The hawksbill weighs about 60 kilograms and is about one meter long.', ar: 'يبلغ وزن سلحفاة صقرية المنقار نحو 60 كيلوغراماً ويبلغ طولها نحو متر واحد.', highlight: '60 kilograms', note: 'معلومة كما وردت في القراءة' }],
        exercises: [practice('4u7-ex6', 'What can make hawksbill turtles ill?', ['Pieces of plastic they eat', 'Fresh water', 'Coral sand', 'Small fish only'], 'Pieces of plastic they eat', 'يحذر النص من أن السلاحف قد تبتلع قطع البلاستيك ظناً أنها طعام', 'ص 138 - 142')]
      }),
      makeLesson({
        id: '4th-u7-l7',
        unitId: 47,
        lessonNumber: 7,
        titleAr: 'الدرس السابع: التسوق عبر الإنترنت',
        titleEn: 'Lesson 7: Online Shopping',
        category: 'reading',
        summary: 'مفردات ونص قصير عن التسوق عبر الإنترنت ومقارنته بالتسوق من المتاجر.',
        sourcePages: 'الملزمة ص 143',
        detailedContent: [
          'تتضمن نهاية الوحدة مفردات وتمارين قراءة مرتبطة بالتسوق عبر الإنترنت.',
          'تقارن التمارين بين الشراء عبر الإنترنت والشراء من المتاجر من حيث الراحة والتوصيل والتكلفة.'
        ],
        examples: [{ en: 'Online shopping can be more convenient than buying in shops.', ar: 'قد يكون التسوق عبر الإنترنت أكثر ملاءمة من الشراء من المتاجر.', highlight: 'Online shopping', note: 'صياغة تدريبية توضح موضوع القراءة' }],
        exercises: [practice('4u7-ex7', 'Products bought online are ______ to your house.', ['delivered', 'forgotten', 'borrowed', 'grown'], 'delivered', 'من موضوع التسوق عبر الإنترنت والتوصيل', 'ص 143')]
      })
    ]
  },
  {
    id: 48,
    number: 8,
    titleAr: 'الوحدة الثامنة: زحل ونظام تحديد المواقع واللياقة في الفضاء',
    titleEn: 'Unit 8: Saturn, GPS and Keeping Fit in Space',
    description: 'تضم الوحدة قراءة عن كوكب زحل وحلقاته والمركبات الفضائية، وقراءة عن أجهزة استقبال GPS وطريقة عملها، وموضوع المحافظة على لياقة رواد الفضاء. لا تتضمن صفحات الوحدة نموذج امتحان نهائي بدرجة رسمية.',
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
        sourcePages: 'الملزمة ص 144 - 145',
        detailedContent: [
          'يصف النص زحل بأنه كوكب عملاق وثاني أكبر كواكب المجموعة الشمسية بعد المشتري، وأنه يتكون أساساً من الغازات.',
          'يتحدث النص عن حلقات زحل التي تتكون في معظمها من الجليد وبعض الصخور، وعن المركبات Pioneer II وVoyager 1 وVoyager 2 وCassini.',
          'تذكر القراءة أقمار زحل، ومنها Titan، والصور التي أرسلتها المركبة Cassini.'
        ],
        examples: [{ en: 'Saturn is a giant planet.', ar: 'زحل كوكب عملاق.', highlight: 'giant planet', note: 'افتتاح قراءة زحل' }],
        exercises: [practice('4u8-ex1', 'Saturn is made mainly of ______.', ['gases', 'wood', 'water', 'iron only'], 'gases', 'يذكر النص أن زحل يتكون أساساً من الغازات', 'ص 144 - 145')]
      }),
      makeLesson({
        id: '4th-u8-l2',
        unitId: 48,
        lessonNumber: 2,
        titleAr: 'الدرس الثاني: نظام تحديد المواقع العالمي GPS',
        titleEn: 'Lesson 2: The Global Positioning System (GPS)',
        category: 'reading',
        summary: 'قراءة عن أجهزة استقبال GPS واتصالها بالأقمار الصناعية والإشارات الراديوية وقياس المسافة لتحديد الموقع.',
        sourcePages: 'الملزمة ص 145 - 147',
        detailedContent: [
          'يوضح النص أن أجهزة GPS تتصل بشبكة من الأقمار الصناعية وتبحث عن أربعة أقمار صناعية على الأقل.',
          'ترسل الأقمار إشارات راديوية إلى جهاز الاستقبال، ويقيس الجهاز الزمن الذي تستغرقه الإشارات للوصول إليه لتقدير المسافة.',
          'يذكر النص استعمال أجهزة GPS المحمولة لدى الصيادين وممارسي الأنشطة الخارجية، ويذكر أن الجهاز يحتوي على خريطة في ذاكرته.'
        ],
        examples: [{ en: 'GPS satellites send radio signals to the receiver.', ar: 'ترسل أقمار GPS إشارات راديوية إلى جهاز الاستقبال.', highlight: 'radio signals', note: 'آلية عمل الجهاز كما يشرحها النص' }],
        exercises: [practice('4u8-ex2', 'A GPS receiver looks for at least ______ GPS satellites.', ['four', 'two', 'ten', 'one hundred'], 'four', 'يذكر النص أن الجهاز يبحث عن أربعة أقمار صناعية على الأقل', 'ص 145 - 147')]
      }),
      makeLesson({
        id: '4th-u8-l3',
        unitId: 48,
        lessonNumber: 3,
        titleAr: 'الدرس الثالث: المحافظة على اللياقة في الفضاء',
        titleEn: 'Lesson 3: Keeping Fit in Space',
        category: 'reading',
        summary: 'قراءة عن أثر بيئة الفضاء في جسم رواد الفضاء وضرورة ممارسة التمارين للمحافظة على اللياقة.',
        sourcePages: 'الملزمة ص 147 - 148',
        detailedContent: [
          'تتناول القراءة المحافظة على اللياقة البدنية في الفضاء، وما يواجهه رواد الفضاء من اختلافات عن بيئة الأرض.',
          'تشرح أهمية ممارسة التمارين للحفاظ على قوة العضلات واللياقة أثناء الرحلات الفضائية.'
        ],
        examples: [{ en: 'Astronauts need to keep fit in space.', ar: 'يحتاج رواد الفضاء إلى المحافظة على لياقتهم في الفضاء.', highlight: 'keep fit', note: 'موضوع القراءة' }],
        exercises: [practice('4u8-ex3', 'The space fitness text is mainly about keeping astronauts ______.', ['fit', 'hungry', 'asleep', 'lost'], 'fit', 'يركز النص على المحافظة على اللياقة في الفضاء', 'ص 147 - 148')]
      })
    ]
  }
];
