import { Lesson, Unit } from '../../../types';

type LessonSeed = Pick<
  Lesson,
  'id' | 'unitId' | 'lessonNumber' | 'titleAr' | 'titleEn' | 'category' | 'summary' | 'detailedContent' | 'sourcePages'
> & Partial<Pick<Lesson, 'grammarRuleFormula' | 'teacherNotes' | 'commonMistakes' | 'examples' | 'exercises'>>;

const lesson = (data: LessonSeed): Lesson => ({
  teacherNotes: [],
  examples: [],
  exercises: [],
  ...data
});

const exercise = (
  id: string,
  question: string,
  correctAnswer: string,
  explanation: string,
  sourcePages: string,
  options?: string[]
) => ({
  id,
  question,
  correctAnswer,
  explanation,
  sourcePages,
  type: options ? 'mcq' as const : 'fill' as const,
  ...(options ? { options } : {})
});

/**
 * Source-aligned map of the 2025-cover edition of "النموذجية في اللغة الإنكليزية
 * للصف الرابع الإعدادي". Printed page references below refer to the booklet,
 * not the PDF viewer's physical page numbers (the PDF has two front-matter pages).
 * Unit boundaries follow the booklet's contents page; page 143 contains the
 * closing Unit 7 exercises and the beginning of the Saturn reading.
 */
export const FOURTH_PREPARATORY_UNITS: Unit[] = [
  {
    id: 41,
    number: 1,
    titleAr: 'الوحدة الأولى: التعلم واللغات والتواصل',
    titleEn: 'Unit 1: Learning, Languages & Communication',
    description: 'تتدرج الوحدة من مفردات التعلم الذاتي والمضارع البسيط والمستمر إلى البرامج الصيفية والأسئلة غير المباشرة وقراءات عن اللغات.',
    accentColor: 'bg-lavender text-ink',
    bgGradient: 'bg-blue-mist border-ink',
    sourcePages: 'الملزمة ص 1–24',
    lessons: [
      lesson({
        id: '4th-u1-l1', unitId: 41, lessonNumber: 1,
        titleAr: 'مراكز التعلم الذاتي والمضارعان البسيط والمستمر',
        titleEn: 'Self-access Learning, Present Simple & Present Continuous',
        category: 'grammar',
        summary: 'مفردات تعلم اللغة وطرائق الدراسة، ثم مراجعة المضارع البسيط والمستمر واستخدامهما في وصف العادات والأنشطة والتغيرات.',
        sourcePages: 'الملزمة ص 1–8',
        grammarRuleFormula: 'Present Simple: subject + base verb (add s/es with he/she/it). Negative: do/does not + base verb. Present Continuous: am/is/are + verb-ing.',
        detailedContent: [
          'تتضمن مفردات البداية: language school, self-access centre, bilingual dictionary, exchange programme, index cards, learning diary.',
          'تشرح الصفحات 2–4 المضارع البسيط للإجراءات المعتادة والحقائق، مع النفي والاستفهام باستخدام do وdoes، وحالة الفعل be: am/is/are.',
          'تقدم الصفحات 5–8 إحصاءات تعلم اللغات ثم المضارع المستمر للحدث الجاري والتغيرات، مع أمثلة على now وat the moment وعمليات الارتفاع والانخفاض.',
          'توضح الملزمة أن أفعال الحالة مثل know وunderstand وlike وbelieve لا تستعمل عادة في صيغة الاستمرار.'
        ],
        teacherNotes: ['لا يُستخدم does مع الفعل الرئيسي بصيغة s؛ بعد does يعود الفعل إلى المصدر.'],
        examples: [
          { en: 'My brother works in a bank.', ar: 'يعمل أخي في مصرف.', highlight: 'works', note: 'مضارع بسيط مع فاعل مفرد.' },
          { en: 'The number of people learning Arabic is going up.', ar: 'عدد الأشخاص الذين يتعلمون العربية آخذ بالازدياد.', highlight: 'is going up', note: 'مضارع مستمر لوصف تغير جارٍ.' }
        ],
        exercises: [
          exercise('4th-u1-src-ex1', 'My friend Ali ______ in Basra.', 'lives', 'الفاعل المفرد Ali يأخذ s في المضارع البسيط.', 'الملزمة ص 2', ['live', 'lives', 'is live', 'living']),
          exercise('4th-u1-src-ex2', 'How much ______ that dictionary cost?', 'does', 'يُستخدم does مع الفاعل المفرد في السؤال، ثم يأتي الفعل بصيغته الأساسية.', 'الملزمة ص 4', ['do', 'does', 'is', 'are'])
        ]
      }),
      lesson({
        id: '4th-u1-l2', unitId: 41, lessonNumber: 2,
        titleAr: 'البرامج الصيفية وصفات -ed و-ing',
        titleEn: 'Summer Programmes & -ed / -ing Adjectives',
        category: 'reading',
        summary: 'قراءة إرشادية عن اختيار البرنامج الصيفي، يليها التمييز بين الصفات التي تصف شعور الشخص والصفات التي تصف الشيء المسبب للشعور.',
        sourcePages: 'الملزمة ص 9–13',
        detailedContent: [
          'تتناول قراءة How to choose a summer programme أهداف التعلم، وعدد ساعات الدروس، والأنشطة، ومكان البرنامج، وحجم الصف.',
          'تقدم الصفحات 11–13 أزواج الصفات مثل bored/boring وexcited/exciting وinterested/interesting.',
          'الصفة المنتهية بـ -ed تصف غالباً شعور الشخص، أما -ing فتصف الشيء أو الموقف الذي يسبب ذلك الشعور.'
        ],
        examples: [
          { en: 'I was tired after the trip.', ar: 'كنت متعباً بعد الرحلة.', highlight: 'tired' },
          { en: 'The trip was tiring.', ar: 'كانت الرحلة متعبة.', highlight: 'tiring' }
        ],
        exercises: [
          exercise('4th-u1-src-ex3', 'The film was very ______. I almost fell asleep.', 'boring', 'الصفة تصف الفيلم الذي يسبب الملل، لذلك نستخدم -ing.', 'الملزمة ص 11', ['bored', 'boring', 'bore', 'bores'])
        ]
      }),
      lesson({
        id: '4th-u1-l3', unitId: 41, lessonNumber: 3,
        titleAr: 'الأسئلة غير المباشرة وطلب الاتجاهات',
        titleEn: 'Indirect Questions & Asking for Directions',
        category: 'grammar',
        summary: 'تحويل السؤال المباشر إلى صيغة مهذبة مع ترتيب الجملة الخبري، واستخدام if في أسئلة نعم/لا، مع عبارات الاتجاهات.',
        sourcePages: 'الملزمة ص 14–16',
        grammarRuleFormula: 'Could/Can you tell me + wh-word + subject + verb...? For yes/no questions: Could/Can you tell me if + subject + verb...?',
        detailedContent: [
          'في السؤال غير المباشر يعود ترتيب الجملة إلى subject + verb بدلاً من ترتيب السؤال المباشر.',
          'عند تحويل سؤال يحتوي do/does/did يُحذف الفعل المساعد ويُصرف الفعل الرئيسي بحسب الزمن والفاعل.',
          'تُستخدم if بعد عبارة الطلب عندما يكون السؤال الأصلي من نوع yes/no.',
          'تتضمن الصفحة 16 عبارات الاتجاهات باستعمال كلمات مثل left, right, past, straight وthrough.'
        ],
        examples: [
          { en: 'Where is the café? → Can you tell me where the café is?', ar: 'أين المقهى؟ ← هل يمكنك أن تخبرني أين يقع المقهى؟', highlight: 'where the café is' }
        ],
        exercises: [
          exercise('4th-u1-src-ex4', 'Could you tell me where the school ______?', 'is', 'في السؤال غير المباشر يأتي الفاعل قبل الفعل المساعد.', 'الملزمة ص 14–16', ['is', 'is the school', 'does', 'school is'])
        ]
      }),
      lesson({
        id: '4th-u1-l4', unitId: 41, lessonNumber: 4,
        titleAr: 'العربية وتاريخ اللغة الإنكليزية وقراءات البلدان',
        titleEn: 'Arabic Today, History of English & Country Factfiles',
        category: 'reading',
        summary: 'قراءات ومفردات عن اللغة العربية وأنواعها وتاريخ اللغة الإنكليزية، ثم معلومات وأسئلة عن كندا وباكستان.',
        sourcePages: 'الملزمة ص 17–24',
        detailedContent: [
          'الصفحة 17 بعنوان Arabic Today وتعرض معلومات عامة عن انتشار العربية ومكانتها وأنواعها واختلاف اللهجات.',
          'تشرح الصفحات 18–20 بعض أسباب تنوع مفردات اللغة الإنكليزية وتطورها التاريخي، وتدريبات على المرادفات والاختصارات.',
          'تتضمن الصفحات 21–23 مفردات وأسئلة مرتبطة بكندا وبلدان أخرى، ومنها اللغات والحدود والمنشأ والخصائص الطبيعية.',
          'تقدم الصفحة 24 قراءة عن باكستان وأسئلة عن معالمها الطبيعية ومحاصيلها ومدنها والدول المجاورة.'
        ]
      })
    ]
  },
  {
    id: 42,
    number: 2,
    titleAr: 'الوحدة الثانية: المدرسة والمجتمع والأحداث الماضية',
    titleEn: 'Unit 2: School, Society & Past Events',
    description: 'تجمع الوحدة مفردات الدراسة والاستعارة والمقارنة، وقراءة UNICEF، ثم أزمنة الماضي والسرد القصصي.',
    accentColor: 'bg-lime text-ink',
    bgGradient: 'bg-lime/10 border-ink',
    sourcePages: 'الملزمة ص 25–52',
    lessons: [
      lesson({
        id: '4th-u2-l1', unitId: 42, lessonNumber: 1,
        titleAr: 'المواد الدراسية والاستعارة والمقارنة',
        titleEn: 'School Subjects, Borrow / Lend & Comparisons',
        category: 'vocabulary',
        summary: 'مفردات المواد الدراسية والتمييز بين borrow وlend، ثم المقارنة والتشابه والاختلاف باستخدام both وneither وlike وas...as.',
        sourcePages: 'الملزمة ص 25–29',
        detailedContent: [
          'تبدأ الوحدة بمفردات المواد الدراسية مثل History وGeography وPhysics وChemistry وBiology وMaths.',
          'توضح التدريبات الفرق بين borrow (يستعير) وlend (يُعير).',
          'تقدم قراءة Two Students للمقارنة بين طالبين، ثم تراكيب as...as وnot as...as وboth وneither وlike.'
        ],
        examples: [
          { en: 'Can I borrow your book?', ar: 'هل يمكنني استعارة كتابك؟', highlight: 'borrow' },
          { en: 'She is as tall as me.', ar: 'هي بطولي نفسه.', highlight: 'as tall as' }
        ],
        exercises: [
          exercise('4th-u2-src-ex1', 'Can I ______ your dictionary? I left mine at home.', 'borrow', 'المتكلم يطلب أن يستعير القاموس.', 'الملزمة ص 26', ['borrow', 'lend', 'loaned', 'lending'])
        ]
      }),
      lesson({
        id: '4th-u2-l2', unitId: 42, lessonNumber: 2,
        titleAr: 'منظمة UNICEF وتعليم الأطفال',
        titleEn: 'UNICEF, Children & Education',
        category: 'reading',
        summary: 'قراءة عن تأسيس UNICEF بعد الحرب العالمية الثانية، وعملها مع الأطفال والتعليم والصحة ومكافحة عمالة الأطفال.',
        sourcePages: 'الملزمة ص 29–32',
        detailedContent: [
          'تذكر الملزمة تأسيس UNICEF عام 1946 في سياق مساعدة الأطفال بعد الحرب العالمية الثانية.',
          'تتناول القراءة الأطفال الذين لا يلتحقون بالمدرسة، وعمالة الأطفال، والرعاية الصحية والتغذية والكوارث والطوارئ.',
          'تتضمن الصفحات أسئلة فهم ومفردات عن المدارس والمساعدات والمنظمات التي تعمل مع الأطفال.'
        ],
        exercises: [
          exercise('4th-u2-src-ex2', 'In which year was UNICEF created?', '1946', 'تذكر القراءة أن المنظمة أُنشئت عام 1946.', 'الملزمة ص 29–30')
        ]
      }),
      lesson({
        id: '4th-u2-l3', unitId: 42, lessonNumber: 3,
        titleAr: 'الماضي البسيط: الإثبات والنفي والاستفهام',
        titleEn: 'Past Simple: Statements, Negatives & Questions',
        category: 'grammar',
        summary: 'تصريف الأفعال المنتظمة وغير المنتظمة في الماضي البسيط، واستعمال did وdidn’t، وصيغ was وwere.',
        sourcePages: 'الملزمة ص 33–37',
        grammarRuleFormula: 'Affirmative: subject + past form. Negative: subject + did not + base verb. Question: Did + subject + base verb...? Be: was/were.',
        detailedContent: [
          'توضح الصفحات تكوين الماضي في الأفعال المنتظمة بإضافة -ed مع تغييرات إملائية لبعض الأفعال.',
          'تقدم قائمة من الأفعال غير المنتظمة وأمثلة على استعمالها في جمل.',
          'في النفي والاستفهام يُستخدم didn’t أو did ويتبع ذلك الفعل بصيغته الأساسية، بينما يستعمل was/were مع be.'
        ],
        examples: [
          { en: 'I bought a new watch yesterday.', ar: 'اشتريت ساعة جديدة أمس.', highlight: 'bought' },
          { en: 'Did you sleep well last night?', ar: 'هل نمت جيداً الليلة الماضية؟', highlight: 'Did you sleep' }
        ],
        exercises: [
          exercise('4th-u2-src-ex3', 'Sally ______ (not / steal) the money.', 'didn’t steal', 'بعد didn’t نستخدم المصدر steal وليس صيغة الماضي.', 'الملزمة ص 36')
        ]
      }),
      lesson({
        id: '4th-u2-l4', unitId: 42, lessonNumber: 4,
        titleAr: 'المدرسة الخاصة MSCA والماضي المستمر',
        titleEn: 'The MSCA School & Past Continuous',
        category: 'reading',
        summary: 'قراءة عن مدرسة للطلاب الممثلين والموسيقيين والرياضيين، ثم قاعدة الماضي المستمر وعلاقته بالماضي البسيط.',
        sourcePages: 'الملزمة ص 38–44',
        grammarRuleFormula: 'Past Continuous: subject + was/were + verb-ing. It can describe an action in progress when another past event happened.',
        detailedContent: [
          'تعرض الصفحات 38–39 رسالة مدرسة MSCA واحتياجات الطلاب الذين يجمعون بين الدراسة والتدريب.',
          'تشرح الصفحات 40–42 الماضي المستمر في الإثبات والنفي والاستفهام، وأفعالاً يتغير رسمها عند إضافة -ing.',
          'تستخدم while وas وwhen لربط الحدث المستمر بالحدث الذي وقع أثناءه.',
          'تتضمن الصفحتان 43–44 قراءة عن Sally وتجربتها في السفر والعمل.'
        ],
        examples: [
          { en: 'My dad knocked at the door while I was sleeping.', ar: 'طرق أبي الباب بينما كنت نائماً.', highlight: 'was sleeping' }
        ],
        exercises: [
          exercise('4th-u2-src-ex4', 'While she ______ (read), the telephone rang.', 'was reading', 'القراءة كانت مستمرة عندما رن الهاتف.', 'الملزمة ص 41–42')
        ]
      }),
      lesson({
        id: '4th-u2-l5', unitId: 42, lessonNumber: 5,
        titleAr: 'الماضي التام والماضي التام المستمر والقصص',
        titleEn: 'Past Perfect, Past Perfect Continuous & Stories',
        category: 'grammar',
        summary: 'توضيح الحدث الأسبق في الماضي باستخدام had + past participle، واستعمال had been + verb-ing للمدة السابقة، مع قراءات وتمارين سردية.',
        sourcePages: 'الملزمة ص 45–52',
        grammarRuleFormula: 'Past Perfect: subject + had + past participle. Past Perfect Continuous: subject + had been + verb-ing.',
        detailedContent: [
          'تشرح الصفحات 45–47 الماضي التام عند وقوع حدث قبل حدث آخر في الماضي، مع روابط مثل before وafter وwhen وbecause.',
          'تقدم أمثلة على الماضي التام المستمر لوصف نشاط كان مستمراً قبل نقطة أو حدث في الماضي.',
          'تتضمن الصفحات 48–52 قصة The Monkey in the Principal’s Office وتمارين ترتيب الأحداث واستخدام الأزمنة.'
        ],
        examples: [
          { en: 'When it was time to go, I hadn’t found my passport.', ar: 'عندما حان وقت المغادرة، لم أكن قد وجدت جواز سفري.', highlight: 'hadn’t found' }
        ],
        exercises: [
          exercise('4th-u2-src-ex5', 'When we arrived, the train ______ (leave).', 'had left', 'مغادرة القطار سبقت وصولنا، لذلك نستخدم الماضي التام.', 'الملزمة ص 45–47')
        ]
      })
    ]
  },
  {
    id: 43,
    number: 3,
    titleAr: 'الوحدة الثالثة: العجائب والرحلات والتجارب',
    titleEn: 'Unit 3: Wonders, Travel & Experiences',
    description: 'قراءات عن المعالم التاريخية والأنشطة السياحية، مع المضارع التام البسيط والمستمر والمفردات المرتبطة بالفنادق والسفر.',
    accentColor: 'bg-sky text-ink',
    bgGradient: 'bg-sky/10 border-ink',
    sourcePages: 'الملزمة ص 53–68',
    lessons: [
      lesson({
        id: '4th-u3-l1', unitId: 43, lessonNumber: 1,
        titleAr: 'المعالم التاريخية والعجائب القديمة',
        titleEn: 'Ancient Wonders & Historic Places',
        category: 'reading',
        summary: 'قراءة سردية عن Stonehenge وحدائق بابل المعلقة والهرم الأكبر والبارثينون، وأسئلة عن تاريخ هذه المعالم وزيارتها.',
        sourcePages: 'الملزمة ص 53–55',
        detailedContent: [
          'تبدأ الوحدة بقراءة عن Stonehenge وعمر الأحجار والغرض المحتمل من نصبها.',
          'تتضمن القراءة زيارة حدائق بابل المعلقة قرب نهر الفرات، والهرم الأكبر، والبارثينون في أثينا.',
          'ترافق النص أسئلة فهم عن وسائل الوصول إلى الأماكن وتاريخ المعالم وأسباب بعض الأحداث التاريخية.'
        ]
      }),
      lesson({
        id: '4th-u3-l2', unitId: 43, lessonNumber: 2,
        titleAr: 'المضارع التام البسيط وقراءة رياضات المغامرة',
        titleEn: 'Present Perfect Simple & Adventure Sports',
        category: 'grammar',
        summary: 'استخدام have/has مع التصريف الثالث وever وnever وjust وalready وyet، ثم قراءة عن أنشطة رياضية ومغامرات السفر.',
        sourcePages: 'الملزمة ص 55–60',
        grammarRuleFormula: 'Present Perfect Simple: subject + have/has + past participle. Use ever/never for experience, just/already for completed actions, and yet mainly in questions and negatives.',
        detailedContent: [
          'تشرح الصفحات 55–58 تكوين المضارع التام البسيط مع have/has والتصريف الثالث.',
          'تعرض ever وnever وjust وalready وyet في أمثلة وتمارين عن التجارب والإنجازات.',
          'تقرأ الصفحات 59–60 عن whitewater rafting وsnowboarding وquad biking، وتناقش متطلبات السلامة والخبرة.'
        ],
        examples: [
          { en: 'Have you ever eaten sushi?', ar: 'هل سبق أن أكلت السوشي؟', highlight: 'Have you ever eaten' }
        ],
        exercises: [
          exercise('4th-u3-src-ex1', 'Have you ever ______ (see) an oryx?', 'seen', 'بعد have يأتي التصريف الثالث للفعل see وهو seen.', 'الملزمة ص 56–57')
        ]
      }),
      lesson({
        id: '4th-u3-l3', unitId: 43, lessonNumber: 3,
        titleAr: 'أداة التعريف the والجداول الزمنية ومفردات الفنادق',
        titleEn: 'The, Timetables & Hotel Vocabulary',
        category: 'vocabulary',
        summary: 'استخدام the مع أسماء جغرافية ومعالم محددة، والمضارع البسيط للجداول والمواعيد، ومفردات التعامل في الفندق.',
        sourcePages: 'الملزمة ص 60–66',
        detailedContent: [
          'تشرح الصفحات 60–62 استعمال the مع أسماء بحار وأنهار وسلاسل جبلية وأسماء دول محددة، ضمن قراءة عن السفر والكهوف.',
          'توضح الصفحة 63 استعمال المضارع البسيط للجداول والمواعيد الثابتة مثل مواعيد القطارات والطائرات.',
          'تقدم الصفحة 64 مفردات فندقية مثل ask for, check in, guest, lift, luggage, menu, order, pillow, porter وreceptionist.',
          'تتناول الصفحتان 65–66 معالم سياحية في أوروبا، ومنها Piazza Navona، مع مفردات وصف المعالم.'
        ],
        examples: [
          { en: 'The plane takes off at 2 p.m.', ar: 'تقلع الطائرة عند الساعة الثانية ظهراً.', highlight: 'takes off' }
        ]
      }),
      lesson({
        id: '4th-u3-l4', unitId: 43, lessonNumber: 4,
        titleAr: 'المضارع التام المستمر وfor وsince وHow long',
        titleEn: 'Present Perfect Continuous, for, since & How long',
        category: 'grammar',
        summary: 'تكوين have/has been + verb-ing لوصف فعل بدأ في الماضي واستمر، مع بيان المدة أو نقطة البداية.',
        sourcePages: 'الملزمة ص 67–68',
        grammarRuleFormula: 'Present Perfect Continuous: subject + have/has been + verb-ing. Use for with a period of time and since with a starting point.',
        detailedContent: [
          'تقدم الصفحتان 67–68 صيغة المضارع التام المستمر في الإثبات والنفي والاستفهام.',
          'تستخدم for مع مدة زمنية، وsince مع نقطة بداية، وHow long للسؤال عن المدة.',
          'تذكر الملزمة أفعال حالة لا تستعمل عادة مع الصيغة المستمرة مثل know وbelieve وunderstand وwant.'
        ],
        examples: [
          { en: 'I have been waiting for two hours.', ar: 'أنا أنتظر منذ ساعتين.', highlight: 'have been waiting' }
        ],
        exercises: [
          exercise('4th-u3-src-ex2', 'We have been waiting ______ 8 o’clock.', 'since', '8 o’clock نقطة بداية محددة، لذلك نستخدم since.', 'الملزمة ص 67–68', ['for', 'since', 'during', 'from'])
        ]
      })
    ]
  },
  {
    id: 44,
    number: 4,
    titleAr: 'الوحدة الرابعة: سنة الفجوة والسفر والالتزامات',
    titleEn: 'Unit 4: Gap Years, Travel & Obligations',
    description: 'تتناول الوحدة فكرة سنة الفجوة، والالتزام وعدم الضرورة، ومراجعة الأزمنة ومفردات السفر.',
    accentColor: 'bg-peach text-ink',
    bgGradient: 'bg-peach/10 border-ink',
    sourcePages: 'الملزمة ص 69–73',
    lessons: [
      lesson({
        id: '4th-u4-l1', unitId: 44, lessonNumber: 1,
        titleAr: 'قراءة سنة الفجوة والتغيرات الحالية',
        titleEn: 'A Gap Year & Changing Trends',
        category: 'reading',
        summary: 'قراءة عن سنة الفجوة وما يختاره الشباب خلالها، مع تمارين على المضارع المستمر لوصف التغيرات المتزايدة.',
        sourcePages: 'الملزمة ص 69–70',
        detailedContent: [
          'تعرّف القراءة gap year بوصفها فترة يأخذها الشخص بعيداً عن الدراسة أو العمل للقيام بنشاط مختلف.',
          'تتضمن القراءة أسباب أخذ سنة الفجوة وبعض الأنشطة المحتملة، ثم أسئلة استيعاب.',
          'تراجع التدريبات المضارع المستمر في أوصاف الاتجاهات والتغيرات مثل get better وstudy abroad وrise.'
        ],
        examples: [
          { en: 'The number of people taking a gap year is rising.', ar: 'عدد الأشخاص الذين يأخذون سنة فجوة يتزايد.', highlight: 'is rising' }
        ]
      }),
      lesson({
        id: '4th-u4-l2', unitId: 44, lessonNumber: 2,
        titleAr: 'have to وdon’t have to ومراجعة السفر',
        titleEn: 'Have to / Don’t Have to & Travel Revision',
        category: 'grammar',
        summary: 'التعبير عن الواجب وعدم الضرورة باستخدام have to، ثم مراجعة المضارع التام ومفردات السفر والقراءة.',
        sourcePages: 'الملزمة ص 71–73',
        grammarRuleFormula: 'Obligation: I/you/we/they have to; he/she/it has to. No obligation: don’t have to / doesn’t have to.',
        detailedContent: [
          'تشرح الصفحة 71 have to وhas to للضرورة، وdon’t have to وdoesn’t have to لعدم الضرورة.',
          'تضم الصفحة 72 مراجعة المضارع التام البسيط والمستمر وتمارين تصحيح الجمل.',
          'تراجع الصفحة 73 مفردات السفر مثل receipt وborrow وporter وapplication form وreturn ticket وstopover، إضافة إلى اختيار الزمن المناسب في جمل عن السفر.'
        ],
        examples: [
          { en: 'You don’t have to give me a lift.', ar: 'ليس من الضروري أن توصلني.', highlight: 'don’t have to' }
        ],
        exercises: [
          exercise('4th-u4-src-ex1', 'English teachers ______ speak the language very well.', 'have to', 'الجملة تعبّر عن متطلب أو واجب.', 'الملزمة ص 71')
        ]
      })
    ]
  },
  {
    id: 45,
    number: 5,
    titleAr: 'الوحدة الخامسة: المظهر والدعوات والمستقبل والتراث',
    titleEn: 'Unit 5: Appearance, Invitations, Future & Heritage',
    description: 'تتدرج الوحدة من وصف المظهر والشخصية إلى الدعوات والعروض والمستقبل، ثم العادات والحرف والمتحف الوطني العراقي.',
    accentColor: 'bg-coral text-ink',
    bgGradient: 'bg-coral/10 border-ink',
    sourcePages: 'الملزمة ص 74–96',
    lessons: [
      lesson({
        id: '4th-u5-l1', unitId: 45, lessonNumber: 1,
        titleAr: 'وصف المظهر والشخصية والمضارع التام',
        titleEn: 'Describing Appearance & Personality',
        category: 'vocabulary',
        summary: 'مفردات لوصف الصفات الجسدية والشخصية، مع تمارين على المضارع التام البسيط والمستمر.',
        sourcePages: 'الملزمة ص 74–75',
        detailedContent: [
          'تجمع الصفحة 74 مفردات appearance وcharacter مثل bald وdark-complexioned وwavy hair وslim وsmart وwell-dressed وlively وreliable وforgetful.',
          'تتضمن الصفحة 75 قراءة قصيرة عن أشخاص وتمارين فهم، ثم مراجعة للمضارع التام البسيط والمستمر.'
        ],
        exercises: [
          exercise('4th-u5-src-ex1', 'A person who often forgets things is ______.', 'forgetful', 'المفردة forgetful تصف الشخص كثير النسيان.', 'الملزمة ص 74')
        ]
      }),
      lesson({
        id: '4th-u5-l2', unitId: 45, lessonNumber: 2,
        titleAr: 'الدعوات والعروض والوعود والمستقبل البسيط',
        titleEn: 'Invitations, Offers, Promises & Future Simple',
        category: 'grammar',
        summary: 'الاستجابة للدعوات، وتقديم عرض أو وعد باستخدام Would you like وShall I وwill، ثم صيغة المستقبل البسيط.',
        sourcePages: 'الملزمة ص 76–79',
        grammarRuleFormula: 'Future Simple: subject + will + base verb. Negative: won’t + base verb. Question: Will + subject + base verb...? Offers: Shall I...? / I’ll...',
        detailedContent: [
          'تعرض الصفحة 76 نماذج دعوات وآراء حول أفلام، مع الاستجابة بعبارات مثل I’d love to وI’m afraid I can’t.',
          'توضح الصفحة 77 عروض المساعدة والوعود باستخدام Shall I وI will، وكيفية قبول العرض أو رفضه.',
          'تشرح الصفحتان 78–79 المستقبل البسيط مع will وwon’t في الإثبات والنفي والاستفهام، واستعماله للتوقعات والقرارات.'
        ],
        examples: [
          { en: 'Shall I buy the cinema tickets?', ar: 'هل أشتري تذاكر السينما؟', highlight: 'Shall I' },
          { en: 'I will do it tomorrow.', ar: 'سأفعل ذلك غداً.', highlight: 'will do' }
        ],
        exercises: [
          exercise('4th-u5-src-ex2', 'We ______ forget your bag.', 'won’t', 'صيغة النفي للمستقبل هي will not أو won’t.', 'الملزمة ص 77–78', ['will', 'won’t', 'are', 'did'])
        ]
      }),
      lesson({
        id: '4th-u5-l3', unitId: 45, lessonNumber: 3,
        titleAr: 'الزفاف حول العالم وصيغة have/get something done',
        titleEn: 'Wedding Customs & Have / Get Something Done',
        category: 'grammar',
        summary: 'مفردات الاستعداد للزفاف وعاداته في بلدان مختلفة، مع الصيغة التي تعبر عن ترتيب الشخص قيام شخص آخر بعمل ما، ثم أدوات الكمية.',
        sourcePages: 'الملزمة ص 80–84',
        grammarRuleFormula: 'Have/Get something done: subject + have/get + object + past participle. Quantifiers in the unit include all, some, both, few and more.',
        detailedContent: [
          'تبدأ الصفحتان 80–81 بتعبيرات تجهيز حفلة الزفاف، مثل اختيار الزهور وطلب الطعام وتجهيز المنزل، ثم قاعدة have/get something done.',
          'تتناول الصفحتان 82–83 عادات الزفاف وتفاصيل الاحتفال في بلدان مختلفة.',
          'تعرض الصفحة 84 أدوات كمية وتراكيب مرتبطة بالتعبير عن الكمية.'
        ],
        examples: [
          { en: 'They had the house cleaned.', ar: 'جعلوا المنزل يُنظَّف.', highlight: 'had the house cleaned' }
        ]
      }),
      lesson({
        id: '4th-u5-l4', unitId: 45, lessonNumber: 4,
        titleAr: 'المستقبل المستمر',
        titleEn: 'Future Continuous',
        category: 'grammar',
        summary: 'التعبير عن فعل سيكون جارياً في وقت محدد في المستقبل باستخدام will be + verb-ing.',
        sourcePages: 'الملزمة ص 85–86',
        grammarRuleFormula: 'Future Continuous: subject + will be + verb-ing.',
        detailedContent: [
          'تشرح الصفحتان 85–86 صيغة المستقبل المستمر في الإثبات والنفي والاستفهام.',
          'تستخدم الصيغة لوصف نشاط سيكون مستمراً في لحظة أو فترة محددة في المستقبل.'
        ],
        examples: [
          { en: 'At this time tomorrow, I will be travelling.', ar: 'في مثل هذا الوقت غداً سأكون مسافراً.', highlight: 'will be travelling' }
        ],
        exercises: [
          exercise('4th-u5-src-ex3', 'At 9 p.m. tomorrow, we ______ (study).', 'will be studying', 'وقت محدد في المستقبل يناسب المستقبل المستمر.', 'الملزمة ص 85–86')
        ]
      }),
      lesson({
        id: '4th-u5-l5', unitId: 45, lessonNumber: 5,
        titleAr: 'الحرف التقليدية والأفعال المتبوعة بالمصدر',
        titleEn: 'Traditional Crafts & Verbs Followed by to-infinitive',
        category: 'reading',
        summary: 'قراءة عن صناعة الزجاج التقليدية في لبنان، ثم دراسة أفعال يتبعها to + infinitive.',
        sourcePages: 'الملزمة ص 87–91',
        detailedContent: [
          'تتناول الصفحتان 87–88 حرفة نفخ الزجاج في لبنان وتاريخها وطريقة انتقالها بين الأجيال.',
          'تتضمن الصفحة 89 رسالة وتمارين مفردات مرتبطة بالنص.',
          'تشرح الصفحتان 90–91 أفعالاً يتبعها to + infinitive مثل agree وdecide وoffer وrefuse وwant.'
        ],
        exercises: [
          exercise('4th-u5-src-ex4', 'They decided ______ (visit) the museum.', 'to visit', 'الفعل decide يتبعه to + infinitive.', 'الملزمة ص 90–91')
        ]
      }),
      lesson({
        id: '4th-u5-l6', unitId: 45, lessonNumber: 6,
        titleAr: 'المتحف الوطني العراقي',
        titleEn: 'The National Museum of Iraq',
        category: 'reading',
        summary: 'قراءة عن المتحف الوطني العراقي ومقتنياته ومعالم الحضارات القديمة، مع أسئلة ومفردات مرتبطة بالزيارة.',
        sourcePages: 'الملزمة ص 92–96',
        detailedContent: [
          'تقدم الصفحات 92–94 قراءة عن المتحف الوطني العراقي في بغداد ومقتنياته الأثرية، ثم أسئلة فهم.',
          'تتضمن الصفحتان 95–96 تمارين ومراجعة للمفردات والموضوعات التي تناولتها الوحدة.'
        ]
      })
    ]
  },
  {
    id: 46,
    number: 6,
    titleAr: 'الوحدة السادسة: الغذاء والنوم والصحة والكلام المنقول',
    titleEn: 'Unit 6: Food, Sleep, Health & Reported Speech',
    description: 'تتناول الوحدة التغذية والنوم والصحة، والكلام المنقول، وتقديم النصيحة والاحتمال، وكأس العالم والرياضة.',
    accentColor: 'bg-mint text-ink',
    bgGradient: 'bg-mint/10 border-ink',
    sourcePages: 'الملزمة ص 97–118',
    lessons: [
      lesson({
        id: '4th-u6-l1', unitId: 46, lessonNumber: 1,
        titleAr: 'التغذية الصحية ونوم المراهقين',
        titleEn: 'Healthy Eating & Teenagers’ Sleep',
        category: 'reading',
        summary: 'مفردات المجموعات الغذائية والعناصر التي يحتاجها الجسم، ثم قراءة عن أهمية النوم للمراهقين وإرشادات النوم الصحي.',
        sourcePages: 'الملزمة ص 97–100',
        detailedContent: [
          'تعرض الصفحتان 97–98 مفردات عن الفيتامينات والكالسيوم ومنتجات الألبان والدهون والبروتين والنظام الغذائي.',
          'تبدأ قراءة النوم في الصفحة 99 وتتضمن مقابلة مع Dr Ibrahim Ansari عن حاجة المراهقين إلى النوم ومراحل النوم والعادات التي ينبغي تجنبها قبل النوم.',
          'تتضمن الصفحة 100 أسئلة فهم حول مدة النوم وتأثير قلته ومراحل النوم.'
        ]
      }),
      lesson({
        id: '4th-u6-l2', unitId: 46, lessonNumber: 2,
        titleAr: 'الكلام المنقول',
        titleEn: 'Reported Speech',
        category: 'grammar',
        summary: 'نقل الأقوال والأسئلة مع تغيير الضمائر والأزمنة وبعض الكلمات الدالة على الزمان والمكان بحسب السياق.',
        sourcePages: 'الملزمة ص 101–103',
        grammarRuleFormula: 'Reported statements commonly shift the tense back (e.g. present simple → past simple; will → would). Adjust pronouns and time expressions to the reporting context.',
        detailedContent: [
          'تقدم الصفحة 101 جدول تحويل الضمائر وبعض التحولات الزمنية في الكلام المنقول.',
          'تشرح الصفحة 102 تحويل أسئلة نعم/لا باستخدام if، مع تغيير ترتيب الجملة إلى ترتيب خبري.',
          'تتضمن الصفحتان 102–103 تمارين تحويل أسئلة وأقوال عن موضوع النوم.'
        ],
        examples: [
          { en: '“Do you smoke?” → My friend asked if I smoked.', ar: '«هل تدخن؟» ← سألني صديقي إن كنت أدخن.', highlight: 'asked if I smoked' }
        ]
      }),
      lesson({
        id: '4th-u6-l3', unitId: 46, lessonNumber: 3,
        titleAr: 'مفردات الأمراض وتقديم النصيحة',
        titleEn: 'Illness Vocabulary & Giving Advice',
        category: 'vocabulary',
        summary: 'أسماء الأعراض والإصابات ثم استعمال should وshouldn’t وought to وcould لتقديم النصيحة والاقتراح.',
        sourcePages: 'الملزمة ص 104–108',
        detailedContent: [
          'تتضمن الصفحتان 104 و107 مفردات مثل sore throat وcough وheadache وfever وsprain وsunburn وcut.',
          'تعرض الصفحتان 105–106 استعمال should وshouldn’t للنصيحة، وcould في الاقتراح.',
          'تتناول الصفحة 108 أهمية النشاط البدني وطرق ممارسة الرياضة وما ينبغي التفكير فيه قبل البدء.'
        ],
        examples: [
          { en: 'You should wear a hat in the sun.', ar: 'ينبغي أن ترتدي قبعة تحت الشمس.', highlight: 'should wear' }
        ],
        exercises: [
          exercise('4th-u6-src-ex1', 'I have a fever. You ______ rest.', 'should', 'تُستخدم should لتقديم نصيحة.', 'الملزمة ص 105–106', ['should', 'shouldn’t', 'mustn’t', 'did'])
        ]
      }),
      lesson({
        id: '4th-u6-l4', unitId: 46, lessonNumber: 4,
        titleAr: 'السوابق والاحتمال باستخدام may وmight',
        titleEn: 'Prefixes & Possibility with May / Might',
        category: 'grammar',
        summary: 'تكوين بعض الكلمات باستخدام im-/de-/re-، والتعبير عن الاحتمال أو عدمه باستخدام may وmight.',
        sourcePages: 'الملزمة ص 109–111',
        grammarRuleFormula: 'May / might + base verb expresses possibility. May not / might not expresses a possible negative situation.',
        detailedContent: [
          'تراجع الصفحة 109 مفردات وتكوين كلمات باستخدام سوابق مثل im- وde- وre-.',
          'تشرح الصفحتان 110–111 استعمال may وmight للتعبير عن احتمال وقوع حدث أو عدم وقوعه، مع ذكر سبب محتمل.'
        ],
        examples: [
          { en: 'People might live longer, healthier lives.', ar: 'قد يعيش الناس حياة أطول وأكثر صحة.', highlight: 'might live' }
        ]
      }),
      lesson({
        id: '4th-u6-l5', unitId: 46, lessonNumber: 5,
        titleAr: 'كأس العالم والرياضة والصحة الذهنية والبدنية',
        titleEn: 'The World Cup, Exercise & Wellbeing',
        category: 'reading',
        summary: 'قراءة عن بطولة كأس العالم، ثم فوائد التمارين الرياضية للعقل والجسم ونصائح الغذاء واللياقة.',
        sourcePages: 'الملزمة ص 111–118',
        detailedContent: [
          'تتناول الصفحات 111–113 تاريخ كأس العالم وبعض معلومات البطولة والبلدان المستضيفة والفرق المشاركة.',
          'تقدم الصفحتان 114–115 مقالاً عن فوائد ممارسة التمارين للعقل، مثل تخفيف التوتر وتحسين الذاكرة والنوم والثقة بالنفس.',
          'تتضمن الصفحات 116–117 محادثات وتمارين عن الغذاء والنصيحة والكلام المنقول.',
          'تختتم الصفحة 118 بقراءة عن أثر الرياضة في العضلات والقلب والصحة الجسدية.'
        ]
      })
    ]
  },
  {
    id: 47,
    number: 7,
    titleAr: 'الوحدة السابعة: العلوم والطقس والبيئة والنفط',
    titleEn: 'Unit 7: Science, Weather, Environment & Petroleum',
    description: 'تجمع الوحدة مهن العلوم والأرصاد الجوية والشرطيات والأهوار والظروف الدالة على اليقين، ثم النفط والمبني للمجهول والتسوق والعروض والسلاحف البحرية.',
    accentColor: 'bg-violet text-ink',
    bgGradient: 'bg-violet/10 border-ink',
    sourcePages: 'الملزمة ص 119–143',
    lessons: [
      lesson({
        id: '4th-u7-l1', unitId: 47, lessonNumber: 1,
        titleAr: 'المهن العلمية والطقس والرياح',
        titleEn: 'Scientific Careers, Weather & Winds',
        category: 'vocabulary',
        summary: 'مفردات عن المهن العلمية ودراسة البيئة والطقس، وقراءة عن الرياح العالمية وأنظمة الطقس والتنبؤ بالعواصف.',
        sourcePages: 'الملزمة ص 119–122',
        detailedContent: [
          'تقدم الصفحة 119 مهنًا مثل marine biologist وforester وaerospace engineer وmeteorologist.',
          'تتضمن الصفحتان 120–121 مفردات وأدوات علمية مثل satellite وlaboratory وweather map وtest tube.',
          'تشرح الصفحة 122 الرياح العالمية والرياح التجارية والشمال (Shamal) وكيف يستخدم خبراء الأرصاد الأدوات للتنبؤ بالأعاصير.'
        ]
      }),
      lesson({
        id: '4th-u7-l2', unitId: 47, lessonNumber: 2,
        titleAr: 'الحالتان الشرطيتان الصفرية والأولى',
        titleEn: 'Zero & First Conditionals',
        category: 'grammar',
        summary: 'استخدام الشرطية الصفرية للحقائق العامة والعلمية، والشرطية الأولى للنتائج المحتملة في المستقبل.',
        sourcePages: 'الملزمة ص 123–126',
        grammarRuleFormula: 'Zero conditional: if + present simple, present simple. First conditional: if + present simple, will/may/might + base verb.',
        detailedContent: [
          'تشرح الصفحة 123 ترتيب if-clause وmain clause.',
          'تتضمن الصفحة 124 تمارين لتصحيح الجمل المتعلقة بالحقائق العلمية والبيئية.',
          'تعرض الصفحتان 125–126 توقعات الطقس وتمارين تطبيق الشرطية على المواقف المستقبلية.'
        ],
        examples: [
          { en: 'If you heat water to 100°C, it boils.', ar: 'إذا سخنت الماء إلى 100 درجة مئوية فإنه يغلي.', highlight: 'it boils' },
          { en: 'If it isn’t too hot tomorrow, I might play tennis.', ar: 'إذا لم يكن الجو حاراً جداً غداً، فقد ألعب التنس.', highlight: 'might play' }
        ],
        exercises: [
          exercise('4th-u7-src-ex1', 'If plants do not get enough water, they ______.', 'die', 'حقيقة عامة، لذلك نستخدم المضارع البسيط في طرفي الجملة.', 'الملزمة ص 124')
        ]
      }),
      lesson({
        id: '4th-u7-l3', unitId: 47, lessonNumber: 3,
        titleAr: 'أهوار الحمار واستعادة جنة عدن',
        titleEn: 'The Al-Hammaar Marshes: Restoring the Garden of Eden',
        category: 'reading',
        summary: 'قراءة عن أهوار الحمار وسكانها وتنوعها الحيوي، وما تعرضت له في التسعينيات ومشروع استعادتها.',
        sourcePages: 'الملزمة ص 127–128',
        detailedContent: [
          'تصف القراءة أهوار الحمار بوصفها من المناطق الرطبة المهمة والغنية بالنباتات والحيوانات والطيور المهاجرة.',
          'تتحدث عن سكان الأهوار المعروفين باسم Marsh Arabs، والتغيرات التي أصابت الأهوار في التسعينيات.',
          'تسأل التدريبات عن مشروع Restoring the Garden of Eden والخدمات التي يفتقر إليها بعض السكان.'
        ]
      }),
      lesson({
        id: '4th-u7-l4', unitId: 47, lessonNumber: 4,
        titleAr: 'ظروف اليقين والاحتمال',
        titleEn: 'Adverbs of Certainty & Probability',
        category: 'grammar',
        summary: 'توظيف ظروف مثل definitely وprobably وperhaps لترتيب درجة اليقين في الجملة.',
        sourcePages: 'الملزمة ص 129–130',
        detailedContent: [
          'تشرح الصفحة 129 موقع ظروف اليقين والاحتمال بالنسبة إلى الفعل أو الجملة.',
          'تقدم الصفحة 130 تدريبات ترتيب كلمات لتكوين جمل صحيحة باستعمال definitely وperhaps وprobably.'
        ],
        exercises: [
          exercise('4th-u7-src-ex2', 'Choose the word that means “possibly”: ______.', 'perhaps', 'تستخدم perhaps للتعبير عن احتمال غير مؤكد.', 'الملزمة ص 129–130', ['definitely', 'perhaps', 'always', 'never'])
        ]
      }),
      lesson({
        id: '4th-u7-l5', unitId: 47, lessonNumber: 5,
        titleAr: 'تكوّن النفط والمبني للمجهول',
        titleEn: 'Petroleum Formation & Passive Voice',
        category: 'grammar',
        summary: 'قراءة عن تكوّن النفط وانتقاله من الأرض إلى المصافي، ثم تحويل الجمل إلى المبني للمجهول في أزمنة مختلفة.',
        sourcePages: 'الملزمة ص 131–133',
        grammarRuleFormula: 'Passive voice: be + past participle. Choose the correct form of be for the tense and subject.',
        detailedContent: [
          'تشرح قراءة From the Earth to the refinery تكوّن النفط عبر ملايين السنين تحت تأثير الضغط والحرارة.',
          'تقدم الصفحتان 132–133 قاعدة المبني للمجهول وتدريبات تشمل المضارع البسيط والماضي البسيط والمضارع المستمر والمضارع التام والمستقبل.'
        ],
        examples: [
          { en: 'Petroleum was formed millions of years ago.', ar: 'تكوّن النفط قبل ملايين السنين.', highlight: 'was formed' }
        ],
        exercises: [
          exercise('4th-u7-src-ex3', 'This book ______ (write) by my favourite author.', 'was written', 'الفاعل متلقٍ للفعل، والجملة في الماضي البسيط للمجهول.', 'الملزمة ص 133')
        ]
      }),
      lesson({
        id: '4th-u7-l6', unitId: 47, lessonNumber: 6,
        titleAr: 'التسوق عبر الإنترنت',
        titleEn: 'Online Shopping',
        category: 'reading',
        summary: 'قراءة عن مزايا التسوق عبر الإنترنت وبعض المخاوف والتكاليف، مع مفردات واستيعاب.',
        sourcePages: 'الملزمة ص 133–135',
        detailedContent: [
          'تقارن القراءة بين التسوق عبر الإنترنت والتسوق في المتاجر من حيث الراحة والتوصيل والتكاليف.',
          'تتضمن الصفحات 134–135 أسئلة فهم وتدريبات مفردات وتعريفات كلمات من النص.'
        ]
      }),
      lesson({
        id: '4th-u7-l7', unitId: 47, lessonNumber: 7,
        titleAr: 'العروض التقديمية والسلاحف البحرية',
        titleEn: 'Presentations, the ISS & Hawksbill Sea Turtles',
        category: 'reading',
        summary: 'إرشادات عرض تقديمي وقراءة عن محطة الفضاء الدولية، ثم نص عن سلحفاة صقرية المنقار المهددة وتمارين مراجعة.',
        sourcePages: 'الملزمة ص 136–143',
        detailedContent: [
          'تعرض الصفحة 136 إرشادات لتنظيم العرض التقديمي، وتقدم الصفحة 137 عرضاً عن International Space Station.',
          'تبدأ الصفحة 138 قراءة The hawksbill sea turtle التي تصف شكل السلحفاة وخصائصها والأخطار التي تهددها.',
          'تتضمن الصفحات 139–140 أسئلة فهم وتمارين لغوية عن السلاحف.',
          'تقدم الصفحات 141–143 تدريبات تكوين الكلمات والمفردات والمراجعة. ويبدأ نص Saturn في نهاية الصفحة 143 وفق النص المستخرج، بينما يذكر الفهرس بداية الوحدة التالية في الصفحة 144.'
        ]
      })
    ]
  },
  {
    id: 48,
    number: 8,
    titleAr: 'الوحدة الثامنة: زحل وتقنية GPS واللياقة في الفضاء',
    titleEn: 'Unit 8: Saturn, GPS & Fitness in Space',
    description: 'قراءة عن كوكب زحل وأقماره، وشرح كيفية عمل جهاز GPS، ثم تطبيقات المبني للمجهول ومقابلة عن الحفاظ على اللياقة في الفضاء.',
    accentColor: 'bg-gold text-ink',
    bgGradient: 'bg-gold/10 border-ink',
    sourcePages: 'الملزمة ص 143–148 (يبدأ نص Saturn في نهاية ص 143؛ الفهرس يذكر ص 144)',
    lessons: [
      lesson({
        id: '4th-u8-l1', unitId: 48, lessonNumber: 1,
        titleAr: 'كوكب زحل وحلقاته وأقماره',
        titleEn: 'Saturn: Rings, Moons & Spacecraft',
        category: 'reading',
        summary: 'قراءة عن حجم زحل وتركيبه وحلقاته، وزيارات المركبات الفضائية له وبعض المعلومات عن قمر Titan.',
        sourcePages: 'الملزمة ص 143–144',
        detailedContent: [
          'تصف القراءة زحل بأنه كوكب عملاق يتكون أساساً من الغازات، وتشرح حلقاته التي تتكون في معظمها من الجليد مع بعض الصخور.',
          'تذكر القراءة مركبات Pioneer II وVoyager 1 وVoyager 2 وCassini، وتعرض معلومات عن أقمار زحل ومنها Titan.',
          'تتضمن الصفحة 144 أسئلة فهم عن الكوكب وحلقاته وأقماره.'
        ]
      }),
      lesson({
        id: '4th-u8-l2', unitId: 48, lessonNumber: 2,
        titleAr: 'كيف يعمل جهاز استقبال GPS',
        titleEn: 'How a GPS Receiver Works',
        category: 'reading',
        summary: 'شرح اتصال جهاز GPS بالأقمار الصناعية وقياس زمن وصول الإشارات لتحديد الموقع ومطابقته بالخريطة المخزنة.',
        sourcePages: 'الملزمة ص 144–145',
        detailedContent: [
          'توضح القراءة استخدام أجهزة GPS المحمولة لدى الصيادين وممارسي الأنشطة الخارجية.',
          'يبحث المستقبل عن أربعة أقمار صناعية على الأقل، ثم يقيس زمن وصول الإشارات الراديوية لحساب المسافة وتحديد الموقع.',
          'بعد حساب الموقع تتم مطابقته بخريطة مخزنة في ذاكرة الجهاز.'
        ]
      }),
      lesson({
        id: '4th-u8-l3', unitId: 48, lessonNumber: 3,
        titleAr: 'تطبيقات المبني للمجهول',
        titleEn: 'Passive Voice Practice',
        category: 'grammar',
        summary: 'تدريبات تحويل جمل من المبني للمعلوم إلى المبني للمجهول باستخدام أزمنة مختلفة.',
        sourcePages: 'الملزمة ص 146',
        grammarRuleFormula: 'Passive voice: object + the correct form of be + past participle (+ by + agent when needed).',
        detailedContent: [
          'تطلب الصفحة 146 إعادة صياغة جمل عن الهواتف والأغاني والإنقاذ والأقمار الصناعية إلى المبني للمجهول.'
        ]
      }),
      lesson({
        id: '4th-u8-l4', unitId: 48, lessonNumber: 4,
        titleAr: 'الحفاظ على اللياقة البدنية في الفضاء',
        titleEn: 'Keeping Fit in Space',
        category: 'reading',
        summary: 'مقابلة مع رائد فضاء عن أثر انعدام الجاذبية في العضلات والعظام والنوم، ووسائل الحفاظ على الصحة بالتمرين والغذاء.',
        sourcePages: 'الملزمة ص 147–148',
        detailedContent: [
          'توضح المقابلة أن قلة الجاذبية تقلل استخدام بعض العضلات وقد تضعف العظام أثناء البقاء في الفضاء.',
          'يمارس رواد الفضاء التمارين يومياً باستخدام أجهزة مقاومة خاصة، ويتناولون غذاءً متوازناً يحتوي على الكالسيوم والفيتامينات.',
          'تشرح القراءة صعوبات النوم في الفضاء واستخدام أقنعة العين وسدادات الأذن.',
          'تحتوي الصفحة 148 على مفردات وتمارين فهم عن العضلات والعظام والغذاء واللياقة.'
        ]
      })
    ]
  }
];
