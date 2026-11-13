import { EssayItem } from '../../../types';

// نماذج كتابة تدريبية من إعداد المنصة، مستندة إلى موضوعات ملحق الكتابة في الملزمة ص 171–177.
// ليست هذه النماذج نصوصاً وزارية مستقلة ولا درجات معتمدة؛ أما موضوع كل مهمة وصفحتها فمذكوران بوضوح.

export const FOURTH_PREPARATORY_ESSAYS: EssayItem[] = [
  {
    id: '4th-writing-application-form',
    unitId: 41,
    titleAr: 'استمارة معلومات للتقديم إلى برنامج صيفي',
    titleEn: 'Application Form for a Summer Programme',
    ministerialWeight: 'مهمة من الملزمة ص 171 — البيانات أدناه نموذج تدريبي',
    paragraphsEn: [
      'Application Form\nSurname: Alhashimi\nForenames: Ahmed\nDate of birth: 1/1/2007\nAddress: 40 Street, Baghdad, Iraq\nPhone number: 07901234567\nEmail: Ahmed123@gmail.com'
    ],
    paragraphsAr: [
      'استمارة تقديم: اسم العائلة: الهاشمي. الأسماء: أحمد. تاريخ الميلاد: 1/1/2007. العنوان: شارع 40، بغداد، العراق. رقم الهاتف والبريد الإلكتروني كما في نموذج الملزمة.'
    ],
    keywords: [
      { word: 'Surname', meaning: 'اسم العائلة' },
      { word: 'Forenames', meaning: 'الأسماء الشخصية' },
      { word: 'Date of birth', meaning: 'تاريخ الميلاد' },
      { word: 'Address', meaning: 'العنوان' }
    ],
    goldenTips: [
      'انقل المعلومات الشخصية إلى الحقول الصحيحة ولا تخلط بين Surname وForenames.',
      'راجع كتابة التاريخ ورقم الهاتف والبريد الإلكتروني قبل تسليم الاستمارة.'
    ],
    clozeSentences: [
      { textWithBlanks: 'Date of ______: 1/1/2007', missingWord: 'birth', options: ['birth', 'work', 'travel', 'study'] }
    ]
  },
  {
    id: '4th-writing-accident',
    unitId: 42,
    titleAr: 'حادث وقع في المدرسة',
    titleEn: 'An Accident at School',
    ministerialWeight: 'موضوع كتابة في الملزمة ص 172 — النموذج صياغة تدريبية',
    paragraphsEn: [
      'One day, our school held a celebration for Mother’s Day. I took part in a short play and everyone enjoyed it. As we were leaving the stage, my friend accidentally pushed me on the stairs. I fell and hurt my leg. I could not walk, so my teacher arranged for me to be taken to hospital. The doctor examined my leg and gave me the care I needed. It was an upsetting day, but I was grateful to my teachers and friends.'
    ],
    paragraphsAr: [
      'في أحد الأيام أقامت مدرستنا احتفالاً بعيد الأم. شاركت في مسرحية قصيرة واستمتع الجميع بها. وبينما كنا نغادر المنصة، دفعني صديقي من غير قصد على الدرج، فسقطت وأصبت ساقي. لم أستطع المشي، لذلك رتّب معلمي نقلي إلى المستشفى. فحص الطبيب ساقي وقدم لي الرعاية اللازمة. كان يوماً مزعجاً، لكنني كنت ممتناً لمعلمي وأصدقائي.'
    ],
    keywords: [
      { word: 'celebration', meaning: 'احتفال' },
      { word: 'stage', meaning: 'منصة' },
      { word: 'accidentally', meaning: 'عن غير قصد' },
      { word: 'hospital', meaning: 'مستشفى' }
    ],
    goldenTips: [
      'رتّب الأحداث زمنياً باستعمال one day وas وthen وfinally.',
      'استخدم الماضي البسيط للأحداث المتتابعة والماضي المستمر عند وصف حدث كان جارياً.'
    ],
    clozeSentences: [
      { textWithBlanks: 'I fell down and ______ my leg.', missingWord: 'hurt', options: ['hurt', 'built', 'bought', 'sent'] }
    ]
  },
  {
    id: '4th-writing-erbil-postcard',
    unitId: 44,
    titleAr: 'بطاقة بريدية أو رسالة من أربيل',
    titleEn: 'A Postcard from Erbil',
    ministerialWeight: 'موضوع كتابة في الملزمة ص 173 — النموذج صياغة تدريبية',
    paragraphsEn: [
      'Hi Farah,\nHow are you? Last month, I went with my family on a package holiday to the north of Iraq. The package cost us $200 each. We visited the Citadel of Erbil and enjoyed the beautiful scenery. We also saw local markets and tasted traditional food. The trip was well organised, and we had a wonderful time. I hope you can visit Erbil one day.\nBest wishes,\nAmmar'
    ],
    paragraphsAr: [
      'مرحباً فرح، كيف حالك؟ في الشهر الماضي ذهبت مع عائلتي في رحلة شاملة إلى شمال العراق. بلغت كلفة الرحلة 200 دولار لكل شخص. زرنا قلعة أربيل واستمتعنا بالمناظر الجميلة، كما شاهدنا الأسواق المحلية وتذوقنا الطعام التقليدي. كانت الرحلة منظمة جيداً وقضينا وقتاً رائعاً. أتمنى أن تزوري أربيل يوماً ما. مع أطيب التمنيات، عمار.'
    ],
    keywords: [
      { word: 'package holiday', meaning: 'رحلة سياحية شاملة' },
      { word: 'Citadel', meaning: 'قلعة' },
      { word: 'scenery', meaning: 'مناظر طبيعية' },
      { word: 'Best wishes', meaning: 'مع أطيب التمنيات' }
    ],
    goldenTips: [
      'ابدأ الرسالة بالتحية واذكر مكان الرحلة وتكلفتها.',
      'اختم برسالة ودية وتوقيع مناسب.'
    ],
    clozeSentences: [
      { textWithBlanks: 'The package cost us $200 ______.', missingWord: 'each', options: ['each', 'never', 'already', 'since'] }
    ]
  },
  {
    id: '4th-writing-wedding-customs',
    unitId: 45,
    titleAr: 'عادات الزفاف في العراق',
    titleEn: 'Wedding Customs in Iraq',
    ministerialWeight: 'موضوع كتابة في الملزمة ص 174 — النموذج صياغة تدريبية',
    paragraphsEn: [
      'Wedding customs differ from country to country. In Iraq, people usually get married on Thursday. A day before the wedding, the bride’s hands and feet are decorated with henna. On the wedding day, the groom usually wears a suit, while the bride wears a white dress which symbolizes purity. The groom’s family invites friends and relatives to the wedding party. Food may be served on the wedding day or the day before. Friends and relatives visit the couple and give them presents.'
    ],
    paragraphsAr: [
      'تختلف عادات الزواج من بلد إلى آخر. في العراق يتزوج الناس عادة يوم الخميس. وقبل الزفاف بيوم تُزيّن يدا العروس وقدماها بالحناء. وفي يوم الزفاف يرتدي العريس عادة بدلة، بينما ترتدي العروس فستاناً أبيض يرمز إلى النقاء. وتدعو عائلة العريس الأصدقاء والأقارب إلى حفلة الزفاف. وقد يُقدّم الطعام في يوم الزفاف أو في اليوم السابق. ويزور الأصدقاء والأقارب العروسين ويقدمون لهما الهدايا.'
    ],
    keywords: [
      { word: 'wedding customs', meaning: 'عادات الزفاف' },
      { word: 'henna', meaning: 'الحناء' },
      { word: 'groom', meaning: 'العريس' },
      { word: 'bride', meaning: 'العروس' },
      { word: 'purity', meaning: 'النقاء' }
    ],
    goldenTips: [
      'اذكر توقيت الزفاف والحناء وملابس العروسين.',
      'استخدم while للمقارنة بين ما يرتديه العريس وما ترتديه العروس.'
    ],
    clozeSentences: [
      { textWithBlanks: 'The bride’s white dress symbolizes ______.', missingWord: 'purity', options: ['purity', 'pressure', 'weather', 'distance'] }
    ]
  },
  {
    id: '4th-writing-eating-habits',
    unitId: 46,
    titleAr: 'عاداتي الغذائية',
    titleEn: 'My Eating Habits',
    ministerialWeight: 'موضوع كتابة في الملزمة ص 175 — النموذج صياغة تدريبية',
    paragraphsEn: [
      'I usually prefer meals that contain different food groups because a balanced diet helps us stay healthy. For breakfast, I often have milk, eggs, cheese and bread. For lunch, I usually eat rice with meat, fish or chicken, and I have some fruit afterwards. In the evening, I prefer a light meal, such as grilled chicken or a cup of warm milk. I also try to drink enough water every day.'
    ],
    paragraphsAr: [
      'أفضل عادة الوجبات التي تحتوي على مجموعات غذائية مختلفة، لأن الغذاء المتوازن يساعدنا على البقاء بصحة جيدة. أتناول غالباً الحليب والبيض والجبن والخبز في الفطور. وفي الغداء أتناول عادة الأرز مع اللحم أو السمك أو الدجاج، ثم أتناول بعض الفاكهة. وفي المساء أفضل وجبة خفيفة مثل الدجاج المشوي أو كوب من الحليب الدافئ. كما أحاول شرب كمية كافية من الماء كل يوم.'
    ],
    keywords: [
      { word: 'balanced diet', meaning: 'نظام غذائي متوازن' },
      { word: 'food groups', meaning: 'المجموعات الغذائية' },
      { word: 'breakfast', meaning: 'الفطور' },
      { word: 'lunch', meaning: 'الغداء' },
      { word: 'light meal', meaning: 'وجبة خفيفة' }
    ],
    goldenTips: [
      'نظّم الفقرة بحسب الوجبات: breakfast ثم lunch ثم dinner.',
      'استعمل usually وoften وsometimes لوصف العادات.'
    ],
    clozeSentences: [
      { textWithBlanks: 'A ______ diet contains a variety of food groups.', missingWord: 'balanced', options: ['balanced', 'empty', 'dangerous', 'late'] }
    ]
  },
  {
    id: '4th-writing-family-future',
    unitId: 46,
    titleAr: 'مستقبل عائلتي',
    titleEn: 'My Family’s Future',
    ministerialWeight: 'موضوع كتابة في الملزمة ص 176 — النموذج صياغة تدريبية',
    paragraphsEn: [
      'In the future, many things may change in my family. My older brother will travel abroad to continue his studies. My younger brother will go to university, and he hopes to study law. My sister may become a doctor after she finishes college. My parents will retire from their jobs. I hope we will all be happy and successful.'
    ],
    paragraphsAr: [
      'قد تتغير أشياء كثيرة في عائلتي في المستقبل. سيسافر أخي الأكبر إلى الخارج لمواصلة دراسته. وسيلتحق أخي الأصغر بالجامعة، وهو يأمل أن يدرس القانون. وقد تصبح أختي طبيبة بعد إكمال الكلية. وسيتقاعد والداي من عملهما. أتمنى أن نكون جميعاً سعداء وناجحين.'
    ],
    keywords: [
      { word: 'in the future', meaning: 'في المستقبل' },
      { word: 'continue his studies', meaning: 'يواصل دراسته' },
      { word: 'university', meaning: 'الجامعة' },
      { word: 'retire', meaning: 'يتقاعد' }
    ],
    goldenTips: [
      'استخدم will للخطط أو التوقعات التي تعرضها بثقة، وmay/might للاحتمال.',
      'رتّب الأفكار فرداً فرداً مع تجنب تكرار الجملة نفسها.'
    ],
    clozeSentences: [
      { textWithBlanks: 'My parents will ______ from their jobs.', missingWord: 'retire', options: ['retire', 'borrow', 'lend', 'measure'] }
    ]
  },
  {
    id: '4th-writing-tomorrow-email',
    unitId: 46,
    titleAr: 'رسالة إلكترونية إلى صديق عن خطط الغد',
    titleEn: 'An Email about Tomorrow’s Plans',
    ministerialWeight: 'موضوع كتابة في الملزمة ص 177 — النموذج صياغة تدريبية',
    paragraphsEn: [
      'Hi Ali,\nHow are you? Tomorrow, I will probably go to the computer shop because I need a new laptop. In the afternoon, I may visit my uncle in hospital. If the weather is nice in the evening, you can come to our house and we will play video games or football in the garden. Please let me know.\nBest wishes,\nAhmed'
    ],
    paragraphsAr: [
      'مرحباً علي، كيف حالك؟ غداً سأذهب على الأرجح إلى متجر الحاسوب لأنني أحتاج إلى حاسوب محمول جديد. وفي فترة بعد الظهر قد أزور عمي في المستشفى. وإذا كان الطقس جميلاً في المساء، يمكنك أن تأتي إلى منزلنا وسنلعب ألعاب الفيديو أو كرة القدم في الحديقة. أخبرني من فضلك. مع أطيب التمنيات، أحمد.'
    ],
    keywords: [
      { word: 'probably', meaning: 'على الأرجح' },
      { word: 'may / might', meaning: 'قد / من المحتمل' },
      { word: 'in the afternoon', meaning: 'في فترة بعد الظهر' },
      { word: 'let me know', meaning: 'أخبرني' }
    ],
    goldenTips: [
      'ميّز بين will للخطة أو التوقع وmay/might للاحتمال.',
      'تأكد من وجود تحية ومتن وخاتمة وتوقيع.'
    ],
    clozeSentences: [
      { textWithBlanks: 'I ______ visit my uncle in hospital.', missingWord: 'may', options: ['may', 'mustn’t', 'did', 'was'] }
    ]
  }
];
