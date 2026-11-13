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

const practice = (
  id: string,
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  sourcePages: string
) => ({
  id,
  question,
  options,
  correctAnswer,
  explanation: explanation + ' (تدريب إضافي من المنصة؛ موضع الموضوع في الملزمة ' + sourcePages + ').',
  type: 'mcq' as const,
  sourcePages,
  contentOrigin: 'ai_generated' as const
});

export const FOURTH_PREPARATORY_UNITS_5_6: Unit[] = [
  {
    id: 45,
    number: 5,
    titleAr: 'الوحدة الخامسة: وصف الأشخاص، المستقبل، والعادات الاجتماعية',
    titleEn: 'Unit 5: Describing People, Future Forms, Weddings & Reading',
    description: 'تغطي الوحدة مفردات وصف الشكل والشخصية، الدعوات والعروض والوعود، المستقبل البسيط والمستمر، have/get something done، العادات الاجتماعية، الحرف اللبنانية، الأفعال التي تتبعها to-infinitive، ورحلة المتحف الوطني العراقي.',
    accentColor: 'bg-yellow text-ink',
    bgGradient: 'bg-paper border-ink',
    sourcePages: 'الملزمة ص 74 - 96',
    academicYear: '2025',
    lessons: [
      makeLesson({
        id: '4th-u5-l1',
        unitId: 45,
        lessonNumber: 1,
        titleAr: 'الدرس الأول: وصف الشكل والشخصية والصفات المنتهية بـ -ed و-ing',
        titleEn: 'Lesson 1: Describing Appearance and Personality; -ed / -ing Adjectives',
        category: 'vocabulary',
        summary: 'مفردات وصف الأشخاص مثل bald, wavy hair, slim, well-dressed, lively, sensible, reliable وforgetful، والتمييز بين صفات الشعور -ed وصفات المسبب -ing.',
        sourcePages: 'الملزمة ص 74 - 75',
        detailedContent: [
          'تتضمن مفردات الوحدة وصف المظهر الجسدي والشخصية، مثل: bald, dark-complexioned, wavy hair, tall, slim, bright, smart, well-dressed, lively, sensible, foolish, reliable, forgetful.',
          'تُستخدم الصفة المنتهية بـ -ed لوصف شعور الشخص، بينما تُستخدم الصفة المنتهية بـ -ing لوصف الشيء أو الموقف الذي يسبب ذلك الشعور.',
          'تضم الصفحات قراءة عن Lina وأفراد من عائلتها، مع تمارين فهم ووصف.'
        ],
        examples: [{ en: 'I was bored because the film was boring.', ar: 'شعرت بالملل لأن الفيلم كان مملاً.', highlight: 'bored / boring', note: 'الشعور مقابل الشيء المسبب له' }],
        exercises: [practice('4u5-ex1', 'The film was very ______; all the students felt ______.', ['boring / bored', 'bored / boring', 'bore / boring', 'boring / bore'], 'boring / bored', 'نستخدم -ing لوصف الفيلم و-ed لوصف شعور الطلاب', 'ص 74 - 81')]
      }),
      makeLesson({
        id: '4th-u5-l2',
        unitId: 45,
        lessonNumber: 2,
        titleAr: 'الدرس الثاني: الدعوات والعروض والوعود والمستقبل البسيط',
        titleEn: 'Lesson 2: Invitations, Offers, Promises and Future Simple',
        category: 'grammar',
        summary: 'صيغ الدعوة Would you like to…?، والعرض Shall I…?، والتعبير عن القرارات والوعود والتوقعات باستخدام will / will not.',
        sourcePages: 'الملزمة ص 76 - 79',
        grammarRuleFormula: 'Invitation: Would you like to + base verb?\\nOffer: Shall I + base verb?\\nFuture Simple: Subject + will / will not (won’t) + base verb.',
        detailedContent: [
          'تُستخدم Would you like to…? لدعوة شخص إلى نشاط، ويمكن قبول الدعوة بعبارة I’d love to.',
          'تُستخدم Shall I…? لعرض المساعدة أو القيام بشيء للآخرين.',
          'تُستخدم will للتعبير عن قرار أو وعد أو توقع مستقبلي، ويأتي بعدها الفعل بصيغته الأساسية.'
        ],
        examples: [
          { en: 'Would you like to come to my house for dinner?', ar: 'هل ترغب في المجيء إلى منزلي لتناول العشاء؟', highlight: 'Would you like to', note: 'صيغة دعوة' },
          { en: 'Shall I get you a glass of juice?', ar: 'هل أحضر لك كأساً من العصير؟', highlight: 'Shall I', note: 'عرض مساعدة' }
        ],
        exercises: [practice('4u5-ex2', 'You look thirsty. ______ get you something cold to drink.', ['Shall I', 'Would I', 'Do I', 'Am I'], 'Shall I', 'نستخدم Shall I عند عرض المساعدة', 'ص 76 - 79')]
      }),
      makeLesson({
        id: '4th-u5-l3',
        unitId: 45,
        lessonNumber: 3,
        titleAr: 'الدرس الثالث: have / get something done',
        titleEn: 'Lesson 3: Have / Get Something Done',
        category: 'grammar',
        summary: 'تركيب have أو get مع المفعول به والتصريف الثالث للتعبير عن خدمة يؤديها شخص آخر لنا.',
        sourcePages: 'الملزمة ص 80 - 81',
        grammarRuleFormula: 'Subject + have / get + object + past participle.\\nPast: had / got + object + past participle.',
        detailedContent: [
          'يُستخدم التركيب عندما لا ينفذ الفاعل العمل بنفسه، بل يرتب أن يقوم به شخص آخر.',
          'تقدم الملزمة أمثلة مثل get the invitations printed, choose the flowers, have a cake made, have the house cleaned.',
          'تدريبات الوحدة تطلب إكمال جمل باستخدام have أو get والتصريف الثالث للفعل.'
        ],
        examples: [{ en: 'I had my hair cut.', ar: 'جعلت شخصاً يقص شعري.', highlight: 'had my hair cut', note: 'have + مفعول به + تصريف ثالث' }],
        exercises: [practice('4u5-ex3', 'We ______ the house ______ because we did not like the colour.', ['had / painted', 'have / paint', 'got / painting', 'had / paint'], 'had / painted', 'بعد المفعول به نستخدم التصريف الثالث painted', 'ص 80 - 83')]
      }),
      makeLesson({
        id: '4th-u5-l4',
        unitId: 45,
        lessonNumber: 4,
        titleAr: 'الدرس الرابع: العادات الاجتماعية والزواج والمحددات',
        titleEn: 'Lesson 4: Wedding Customs and Quantifiers',
        category: 'reading',
        summary: 'قراءة عن اختلاف عادات الزواج بين البلدان وعبر الزمن، مع استعمال ألفاظ الكمية مثل all, both, either, few وsome.',
        sourcePages: 'الملزمة ص 82 - 84',
        detailedContent: [
          'توضح القراءة أن مراسم الزواج تختلف من بلد إلى آخر، كما تختلف عما كانت عليه في الماضي، وأن بعض حفلات الزواج كانت تستمر عدة أيام.',
          'تتضمن الوحدة مفردات خاصة بالزفاف وأفراد العائلة، وتمارين فهم حول أسباب تغير مدة الاحتفال.',
          'تتدرب الوحدة على all وboth وeither وfew وsome ضمن جمل سياقية. مواضع وتأتي تمارين ألفاظ الكمية في صفحات الوحدة نفسها.'
        ],
        examples: [{ en: 'Both Abdulla and Liam start school at 7:00.', ar: 'يبدأ كل من عبد الله وليام المدرسة عند الساعة السابعة.', highlight: 'Both', note: 'both للإشارة إلى اثنين' }],
        exercises: [practice('4u5-ex4', 'I have two friends who can drive, but ______ of them are busy today.', ['both', 'all', 'few', 'some'], 'both', 'نستخدم both مع شخصين أو شيئين', 'ص 84 - 96')]
      }),
      makeLesson({
        id: '4th-u5-l5',
        unitId: 45,
        lessonNumber: 5,
        titleAr: 'الدرس الخامس: المستقبل المستمر',
        titleEn: 'Lesson 5: Future Continuous',
        category: 'grammar',
        summary: 'التعبير عن فعل سيكون مستمراً في وقت محدد في المستقبل باستخدام will be + V-ing.',
        sourcePages: 'الملزمة ص 85 - 87',
        grammarRuleFormula: 'Affirmative: Subject + will be + V-ing.\\nNegative: Subject + will not be (won’t be) + V-ing.\\nQuestion: Will + subject + be + V-ing?',
        detailedContent: [
          'يُستخدم المستقبل المستمر لوصف فعل سيكون جارياً في وقت محدد مستقبلاً.',
          'تقدم الملزمة صيغ الإثبات والنفي والسؤال وأمثلة مثل At six o’clock, I will be eating dinner.',
          'هذا الدرس يقع في الوحدة الخامسة، وليس في الوحدة السادسة.'
        ],
        examples: [{ en: 'Will you be cooking tonight?', ar: 'هل ستكون تطبخ الليلة؟', highlight: 'Will you be cooking', note: 'سؤال بالمستقبل المستمر' }],
        exercises: [practice('4u5-ex5', 'At six o’clock, I ______ dinner.', ['will be eating', 'will eating', 'am be eating', 'eat'], 'will be eating', 'المستقبل المستمر: will be + V-ing', 'ص 85 - 87')]
      }),
      makeLesson({
        id: '4th-u5-l6',
        unitId: 45,
        lessonNumber: 6,
        titleAr: 'الدرس السادس: الحرف اللبنانية ونفخ الزجاج',
        titleEn: 'Lesson 6: Lebanese Crafts and Glass-blowing',
        category: 'reading',
        summary: 'قراءة عن التطريز والنقش على النحاس ونفخ الزجاج في لبنان، وتاريخ الزجاج ومهارات الحرفيين وانتقالها داخل العائلة.',
        sourcePages: 'الملزمة ص 87 - 90',
        detailedContent: [
          'تذكر القراءة حرفاً لبنانية مثل embroidery وcopper-engraving وglass-blowing.',
          'تذكر أن الزجاج معروف في الشرق الأوسط منذ أكثر من 4,000 سنة، وأن حرفيين سوريين ابتكروا نفخ الزجاج قبل أكثر من 2,100 سنة.',
          'تصف القراءة انتقال المهارات من الأب إلى الابن، وصعوبة كسب المال من نفخ الزجاج وحده.'
        ],
        examples: [{ en: 'Syrian craftsmen invented glass-blowing over 2,100 years ago.', ar: 'ابتكر حرفيون سوريون نفخ الزجاج قبل أكثر من 2100 سنة.', highlight: 'glass-blowing', note: 'معلومة واردة في قراءة الوحدة' }],
        exercises: [practice('4u5-ex6', 'How do the Lebanese glass-blowers learn the skill?', ['The skill is passed down from father to son.', 'They learn only at universities.', 'They learn from television.', 'They learn in large factories.'], 'The skill is passed down from father to son.', 'تذكر القراءة أن المهارات تنتقل من الأب إلى الابن', 'ص 88 - 90')]
      }),
      makeLesson({
        id: '4th-u5-l7',
        unitId: 45,
        lessonNumber: 7,
        titleAr: 'الدرس السابع: الأفعال التي تتبعها to + infinitive ورحلة المتحف الوطني العراقي',
        titleEn: 'Lesson 7: Verb + to-infinitive and A School Trip to the National Museum of Iraq',
        category: 'grammar',
        summary: 'مراجعة الأفعال التي يأتي بعدها to + المصدر، وقراءة رحلة مدرسية إلى المتحف الوطني العراقي وتاريخه ومقتنياته.',
        sourcePages: 'الملزمة ص 91 - 96',
        grammarRuleFormula: 'Verb + to + base form.\\nExample: decide to visit; refuse to say; offer to help.',
        detailedContent: [
          'تعرض الصفحات أفعالاً يتبعها المصدر مع to، مع أمثلة وتمارين لإكمال الجمل.',
          'تتناول قراءة الرحلة المدرسية جمع الآثار في مبنى حكومي ببغداد عام 1922، ثم نقل المجموعة عام 1966 إلى مبنى المتحف ذي الطابقين في الصالحية، الكرخ، بغداد.',
          'تذكر القراءة الثور الآشوري المجنح Lamassu ذي الأرجل الخمس، وتعرض تمارين استيعاب ومفردات مرتبطة بالمتحف.'
        ],
        examples: [{ en: 'They decided to visit the National Museum of Iraq.', ar: 'قرروا زيارة المتحف الوطني العراقي.', highlight: 'decided to visit', note: 'فعل يتبعه to + المصدر' }],
        exercises: [practice('4u5-ex7', 'They decided ______ the National Museum of Iraq.', ['to visit', 'visiting', 'visit', 'visited'], 'to visit', 'يأتي بعد decided تركيب to + المصدر', 'ص 91 - 96')]
      })
    ]
  },
  {
    id: 46,
    number: 6,
    titleAr: 'الوحدة السادسة: المستقبل والتغذية والنوم والصحة والرياضة',
    titleEn: 'Unit 6: Future Forms, Nutrition, Sleep, Health and Exercise',
    description: 'تضم الوحدة المستقبل البسيط، مفردات الغذاء والعناصر الغذائية، النوم، الكلام المنقول، الشكاوى الصحية والنصيحة، التمارين والبادئات، may/might، كأس العالم، وفوائد التمارين للعقل والجسم.',
    accentColor: 'bg-soft-mint text-ink',
    bgGradient: 'bg-blue-mist border-ink',
    sourcePages: 'الملزمة ص 97 - 118',
    academicYear: '2025',
    lessons: [
      makeLesson({
        id: '4th-u6-l0',
        unitId: 46,
        lessonNumber: 1,
        titleAr: 'الدرس الأول: المستقبل البسيط',
        titleEn: 'Lesson 1: Future Simple',
        category: 'grammar',
        summary: 'التعبير عن أحداث مستقبلية باستخدام will وwill not مع المصدر المجرد، كما في أمثلة الوحدة عن الحفلات والعمل والزيارات.',
        sourcePages: 'الملزمة ص 97',
        grammarRuleFormula: 'Affirmative: Subject + will + base verb.\\nNegative: Subject + will not (won’t) + base verb.\\nQuestion: Will + subject + base verb?',
        detailedContent: [
          'تبدأ الوحدة بأمثلة وتمارين على المستقبل البسيط، مثل الاعتذار عن عدم الحضور إلى حفلة، وبيان أن شخصاً لن يعمل خلال الأسبوع، وخطط أو أحداث ستقع لاحقاً.',
          'يأتي الفعل بعد will بصيغته الأساسية دون s أو ed أو ing.'
        ],
        examples: [{ en: 'I will not come to your party.', ar: 'لن آتي إلى حفلتك.', highlight: 'will not come', note: 'النفي في المستقبل البسيط' }],
        exercises: [practice('4u6-ex0', 'Issam ______ this week because he is on holiday.', ['will not work', 'will not working', 'does not worked', 'not will work'], 'will not work', 'بعد will not يأتي الفعل بصيغته الأساسية', 'ص 97')]
      }),
      makeLesson({
        id: '4th-u6-l1',
        unitId: 46,
        lessonNumber: 2,
        titleAr: 'الدرس الثاني: العناصر الغذائية ومجموعات الطعام',
        titleEn: 'Lesson 2: Nutrients and Food Groups',
        category: 'vocabulary',
        summary: 'مفردات العناصر الغذائية التي يحتاجها الجسم، والفيتامينات والمعادن والأطعمة المصنوعة من الحليب.',
        sourcePages: 'الملزمة ص 98',
        detailedContent: [
          'تتضمن الصفحة تعريفات وتمارين عن العناصر التي يحتاجها الجسم ليكون بصحة جيدة، ومنها الفيتامينات التي تسمى بأحرف من الأبجدية.',
          'تتناول التمارين الكالسيوم اللازم لصحة الأسنان والعظام، والأطعمة المصنوعة من الحليب.'
        ],
        examples: [{ en: 'Calcium is needed for healthy teeth and bones.', ar: 'نحتاج إلى الكالسيوم لصحة الأسنان والعظام.', highlight: 'healthy teeth and bones', note: 'مفردات العناصر الغذائية' }],
        exercises: [practice('4u6-ex1', '______ is needed for healthy teeth and bones.', ['Calcium', 'Petroleum', 'Plastic', 'Oxygen only'], 'Calcium', 'الكالسيوم عنصر يرتبط بصحة الأسنان والعظام في الصفحة', 'ص 98')]
      }),
      makeLesson({
        id: '4th-u6-l2',
        unitId: 46,
        lessonNumber: 3,
        titleAr: 'الدرس الثالث: النوم وصحة المراهقين',
        titleEn: 'Lesson 3: Sleep and Teenagers’ Health',
        category: 'reading',
        summary: 'قراءة عن مراحل النوم وأثر النوم في صحة المراهقين ودراستهم، مع معلومة أن المراهقين ينبغي أن يناموا بمعدل ثماني ساعات في الليلة.',
        sourcePages: 'الملزمة ص 99 - 100',
        detailedContent: [
          'ينقل النص عن الدكتور إبراهيم أنصاري أن كثيراً من المراهقين ينامون ست أو سبع ساعات فقط، بينما ينبغي أن يناموا بمعدل ثماني ساعات في الليلة.',
          'يربط النص قلة النوم بالتعب واحتمال التعرض للإصابة عند ممارسة الرياضة وبالتحصيل الدراسي.',
          'تتضمن القراءة شرحاً لمراحل النوم.'
        ],
        examples: [{ en: 'Teenagers should sleep for an average of eight hours per night.', ar: 'ينبغي أن ينام المراهقون بمعدل ثماني ساعات في الليلة.', highlight: 'an average of eight hours', note: 'النص يقول معدل ثماني ساعات، وليس نطاق 8–10 ساعات' }],
        exercises: [practice('4u6-ex2', 'According to Dr Ansari, teenagers should sleep for an ______ of eight hours per night.', ['average', 'maximum', 'minimum', 'period'], 'average', 'المعلومة في النص هي average of eight hours', 'ص 99 - 100')]
      }),
      makeLesson({
        id: '4th-u6-l3',
        unitId: 46,
        lessonNumber: 4,
        titleAr: 'الدرس الرابع: الكلام المنقول',
        titleEn: 'Lesson 4: Reported Speech',
        category: 'grammar',
        summary: 'تحويل الجمل والأسئلة من الكلام المباشر إلى الكلام المنقول، مع مراعاة تغير الضمائر والأزمنة وأفعال المساعدة.',
        sourcePages: 'الملزمة ص 101 - 104',
        grammarRuleFormula: 'Reported statements and questions: adjust pronouns, time expressions and verb forms to fit the reporting context. For yes/no questions, use if / whether and statement word order.',
        detailedContent: [
          'تشرح الصفحات تحويل الضمائر من المتكلم إلى الغائب، وتغيير بعض صيغ الأفعال عند نقل الكلام.',
          'تتناول الصفحات نقل الأسئلة التي تبدأ بأفعال مساعدة، واستعمال if في أسئلة نعم/لا مع ترتيب خبري.'
        ],
        examples: [{ en: 'My friend asked if I could swim.', ar: 'سألني صديقي إن كنت أستطيع السباحة.', highlight: 'asked if', note: 'سؤال منقول' }],
        exercises: [practice('4u6-ex3', '“Can you swim?” My neighbour asked ______ I could swim.', ['if', 'what', 'where', 'who'], 'if', 'نستخدم if عند نقل سؤال نعم/لا', 'ص 101 - 104')]
      }),
      makeLesson({
        id: '4th-u6-l4',
        unitId: 46,
        lessonNumber: 5,
        titleAr: 'الدرس الخامس: المشكلات الصحية وتقديم النصيحة',
        titleEn: 'Lesson 5: Health Problems and Giving Advice',
        category: 'grammar',
        summary: 'مفردات الشكاوى الصحية وأسماء الأعراض، والتعبير عن النصيحة والاقتراح باستخدام should / shouldn’t وcould وought to.',
        sourcePages: 'الملزمة ص 105 - 107',
        grammarRuleFormula: 'Advice: should / should not (shouldn’t) + base verb; ought to + base verb; could + base verb for suggestions.',
        detailedContent: [
          'تعرض الصفحات أسماء حالات صحية وأعراض مثل sore throat وheadache وfever وsprain وsunburn وcut وcough.',
          'تستخدم الحوارات والتمارين should لتقديم النصيحة، وcould للاقتراح، مع تدريبات حول المواقف الصحية.'
        ],
        examples: [{ en: 'You should study hard today.', ar: 'ينبغي أن تدرس بجد اليوم.', highlight: 'should study', note: 'صيغة النصيحة في تمرين الوحدة' }],
        exercises: [practice('4u6-ex4', 'You have a bad headache. You ______ see a doctor.', ['should', 'shouldn’t', 'might not', 'were'], 'should', 'should مناسبة لتقديم النصيحة', 'ص 105 - 107')]
      }),
      makeLesson({
        id: '4th-u6-l5',
        unitId: 46,
        lessonNumber: 6,
        titleAr: 'الدرس السادس: التمارين واللياقة والبادئات',
        titleEn: 'Lesson 6: Exercise, Fitness and Prefixes',
        category: 'reading',
        summary: 'نص عن ممارسة التمارين بانتظام وطرق الحفاظ على اللياقة، مع مفردات وصفات وتمارين على البادئات.',
        sourcePages: 'الملزمة ص 108 - 109',
        detailedContent: [
          'توضح القراءة أن المحافظة على اللياقة والصحة تتطلب ممارسة التمارين بانتظام، وتذكر أمثلة مثل الذهاب إلى النادي أو المشي.',
          'تتضمن الصفحات تمارين مفردات وصفات وتمارين على تكوين الكلمات.'
        ],
        examples: [{ en: 'If you want to be fit and healthy, you need to take regular exercise.', ar: 'إذا أردت أن تكون لائقاً وبصحة جيدة، فعليك ممارسة التمارين بانتظام.', highlight: 'regular exercise', note: 'بداية نص اللياقة' }],
        exercises: [practice('4u6-ex5', 'If you want to be fit and healthy, you need to take ______ exercise.', ['regular', 'careless', 'rare', 'false'], 'regular', 'التعبير في النص هو regular exercise', 'ص 108 - 109')]
      }),
      makeLesson({
        id: '4th-u6-l6',
        unitId: 46,
        lessonNumber: 7,
        titleAr: 'الدرس السابع: التعبير عن الاحتمال باستخدام may وmight',
        titleEn: 'Lesson 7: Expressing Possibility with May and Might',
        category: 'grammar',
        summary: 'استعمال may وmight مع المصدر المجرد للتعبير عن أحداث محتملة، مع صيغ الإثبات والنفي.',
        sourcePages: 'الملزمة ص 110 - 111',
        grammarRuleFormula: 'Subject + may / might + base verb.\\nNegative: Subject + may not / might not + base verb.',
        detailedContent: [
          'تشرح الصفحات أن may وmight تستخدمان للتعبير عن احتمال وقوع حدث في المستقبل.',
          'تتضمن الأمثلة توقعات عن حياة الناس والصحة والتدخين، وتمارين تحويل الجمل إلى صيغة الاحتمال.'
        ],
        examples: [{ en: 'People might live longer, healthier lives because medicine is improving fast.', ar: 'قد يعيش الناس حياة أطول وأكثر صحة لأن الطب يتطور بسرعة.', highlight: 'might live', note: 'التعبير عن احتمال' }],
        exercises: [practice('4u6-ex6', 'People ______ live longer, healthier lives in the future.', ['might', 'must to', 'did', 'are'], 'might', 'might يعبر عن احتمال مستقبلي', 'ص 110 - 111')]
      }),
      makeLesson({
        id: '4th-u6-l7',
        unitId: 46,
        lessonNumber: 8,
        titleAr: 'الدرس الثامن: قراءة كأس العالم لكرة القدم',
        titleEn: 'Lesson 8: The FIFA World Cup',
        category: 'reading',
        summary: 'قراءة معلوماتية عن بطولة كأس العالم لكرة القدم وتاريخها والبلدان التي استضافتها.',
        sourcePages: 'الملزمة ص 112 - 113',
        detailedContent: [
          'تقدم الصفحات قراءة عن تاريخ كأس العالم لكرة القدم والبلدان التي استضافت البطولة.',
          'تتضمن القراءة معلومات مستقبلية كما وردت في طبعة الملزمة، وتُدرس هنا بوصفها نصاً تعليمياً لا تحديثاً للأحداث الرياضية الحالية.'
        ],
        examples: [{ en: 'The text describes the history of the FIFA World Cup.', ar: 'يعرض النص تاريخ بطولة كأس العالم لكرة القدم.', highlight: 'FIFA World Cup', note: 'عنوان القراءة' }],
        exercises: [practice('4u6-ex7', 'The FIFA World Cup reading in this unit is a ______ text.', ['reading', 'grammar formula', 'job application', 'poem'], 'reading', 'هذا الدرس قراءة استيعابية', 'ص 112 - 113')]
      }),
      makeLesson({
        id: '4th-u6-l8',
        unitId: 46,
        lessonNumber: 9,
        titleAr: 'الدرس التاسع: خمسة أسباب تجعل التمارين مفيدة للعقل',
        titleEn: 'Lesson 9: Five Reasons Exercise Is Good for Your Mind',
        category: 'reading',
        summary: 'قراءة عن فوائد التمارين في تخفيف التوتر وتقوية العضلات والمحافظة على صحة الجسم والثقة بالنفس.',
        sourcePages: 'الملزمة ص 114 - 118',
        detailedContent: [
          'توضح القراءة أن التمارين مفيدة للصحة العامة، كما يمكن أن تكون جيدة للعقل.',
          'تذكر الصفحات فوائد مثل إرخاء العضلات المتوترة بسبب الضغط النفسي، والمساعدة على النوم والتحكم في الوزن والشعور بالثقة.',
          'تتضمن الصفحات حوارات وتمارين مراجعة تربط التغذية الجيدة بالنشاط البدني.'
        ],
        examples: [{ en: 'Exercise relaxes muscles that get tense with stress.', ar: 'تساعد التمارين على إرخاء العضلات التي تتوتر بسبب الضغط النفسي.', highlight: 'relaxes muscles', note: 'من فوائد التمارين في النص' }],
        exercises: [practice('4u6-ex8', 'Exercise relaxes muscles that get tense with ______.', ['stress', 'water', 'travel', 'weather'], 'stress', 'هذا السبب مذكور في قراءة فوائد التمارين', 'ص 114 - 118')]
      })
    ]
  }
];
