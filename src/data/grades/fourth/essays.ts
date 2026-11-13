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
      "Application Form\\nSurname: Alhashimi\\nForenames: Ahmed\\nDate of birth: 1/1/2007\\nAddress: 40 Street, Baghdad, Iraq\\nPhone number: 07901234567\\nEmail: Ahmed123@gmail.com\\n\\nWhy are you interested in our school?\\nI would like to go on a summer programme to improve my English. I am interested in your school because it has fantastic facilities and highly experienced teachers. All your subjects are in English, and this is very important for me to improve my English."
    ],
    paragraphsAr: [
      "استمارة التقديم: اسم العائلة: الهاشمي. الأسماء الشخصية: أحمد. تاريخ الميلاد: 1/1/2007. العنوان: شارع 40، بغداد، العراق. رقم الهاتف: 07901234567. البريد الإلكتروني: Ahmed123@gmail.com.\\n\\nلماذا ترغب في الالتحاق بمدرستنا؟ أود المشاركة في برنامج صيفي لتحسين لغتي الإنكليزية. أنا مهتم بمدرستكم لأنها تمتلك مرافق رائعة ومدرسين ذوي خبرة عالية. جميع موادكم تُدرّس باللغة الإنكليزية، وهذا مهم جداً بالنسبة لي كي أحسّن لغتي الإنكليزية."
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
      "One day, my school organized a celebration on Mother’s Day. I was very happy, and I had a role in a play. I was a grandmother with grey hair. The play was fantastic, and everybody was happy and clapped a lot. But just before we left the stage, my friend Sarah pushed me on the stairs. I fell down and hurt my leg. I couldn’t walk. Then my English teacher brought a big board and they put me on it. They carried me to hospital. Finally, we arrived at hospital. First, the doctor said that I must have an X-ray. Later, a nurse came and told me that there was nothing serious and I could leave the hospital."
    ],
    paragraphsAr: [
      "في أحد الأيام نظمت مدرستي احتفالاً بعيد الأم. كنت سعيدة جداً وكان لي دور في مسرحية، ومثّلت دور جدة ذات شعر رمادي. كانت المسرحية رائعة وكان الجميع سعداء وصفقوا كثيراً. ولكن قبل أن نغادر المنصة بقليل، دفعتني صديقتي سارة على الدرج. سقطت وأصبت ساقي ولم أستطع المشي. أحضر معلم اللغة الإنكليزية لوحاً كبيراً ووضعوني عليه، ثم حملوني إلى المستشفى. وعندما وصلنا، قال الطبيب إن عليّ إجراء أشعة سينية. وبعد ذلك أخبرتني ممرضة أنه لا يوجد شيء خطير ويمكنني مغادرة المستشفى."
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
      "From: Ammar\\nTo: Farah\\nSubject: Hello from Erbil\\n\\nHi Farah,\\nHow are you? Last month I went with my family on a holiday to the north of Iraq. It was a package deal and cost us $200 each. We stayed in a five-star hotel in Erbil. It had big rooms, a wonderful restaurant and two swimming pools. It was clean and tidy. According to the holiday programme, they took us to several places including malls, mosques and museums, and a free tour. In the evening, we visited Erbil Castle and had supper in a luxurious restaurant. The best thing was visiting a variety of old and modern places. The weather was wonderful and the holiday was fantastic. What about you? Tell me your news.\\n\\nBest wishes,\\nAmmar"
    ],
    paragraphsAr: [
      "من: عمار\\nإلى: فرح\\nالموضوع: تحيات من أربيل\\n\\nمرحباً فرح،\\nكيف حالك؟ في الشهر الماضي ذهبت مع عائلتي في عطلة إلى شمال العراق. كانت رحلة شاملة وكلفتنا 200 دولار لكل شخص. أقمنا في فندق خمس نجوم في أربيل، وفيه غرف واسعة ومطعم رائع ومسبحان. كان الفندق نظيفاً ومرتباً. ووفقاً لبرنامج العطلة، أخذونا إلى أماكن عدة، منها مراكز التسوق والمساجد والمتاحف، كما تضمن البرنامج جولة مجانية. وفي المساء زرنا قلعة أربيل وتناولنا العشاء في مطعم فاخر. كان أفضل ما في العطلة هو زيارة أماكن متنوعة قديمة وحديثة. كان الطقس رائعاً وكانت العطلة مذهلة. ماذا عنك؟ أخبريني بأخبارك.\\n\\nمع أطيب التمنيات،\\nعمار"
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
      "Wedding customs differ from country to country. In Iraq, a person usually gets married on Thursday. A day before the wedding, the bride’s hands and feet are decorated with henna. On the wedding day, the groom usually wears a suit, and the bride wears a white dress which symbolizes purity. The groom’s family invites friends and relatives to the wedding party. Sometimes food is served on the wedding day, but some families serve it a day before the wedding. Friends and relatives visit the bride and the groom and give them presents."
    ],
    paragraphsAr: [
      "تختلف عادات الزفاف من بلد إلى آخر. في العراق يتزوج الناس عادة يوم الخميس. وقبل الزفاف بيوم تُزيّن يدا العروس وقدماها بالحناء. وفي يوم الزفاف يرتدي العريس عادة بدلة، وترتدي العروس فستاناً أبيض يرمز إلى النقاء. وتدعو عائلة العريس الأصدقاء والأقارب إلى حفلة الزفاف. ويُقدّم الطعام أحياناً في يوم الزفاف، لكن بعض العائلات تقدمه قبل الزفاف بيوم. ويزور الأصدقاء والأقارب العروس والعريس ويقدمون لهما الهدايا."
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
      "I usually prefer meals with a lot of food groups, because these meals would be healthy. Our bodies need different things to grow and be healthy. For example, my breakfast always contains milk, eggs, cheese and bread, but I sometimes have orange juice instead of milk. For lunch I always have rice and broth with meat, fish, or chicken. I also have some fruit after lunch. For dinner I prefer light meals like grilled chicken, but sometimes I prefer a cup of hot milk. I think these choices help me stay healthy."
    ],
    paragraphsAr: [
      "أفضل عادة الوجبات التي تحتوي على مجموعات غذائية كثيرة، لأن هذه الوجبات تكون صحية. تحتاج أجسامنا إلى أشياء مختلفة كي تنمو وتبقى بصحة جيدة. فمثلاً يحتوي فطوري دائماً على الحليب والبيض والجبن والخبز، لكنني أتناول أحياناً عصير البرتقال بدلاً من الحليب. وفي الغداء أتناول دائماً الأرز والمرق مع اللحم أو السمك أو الدجاج، كما أتناول بعض الفاكهة بعد الغداء. أما العشاء فأفضل الوجبات الخفيفة مثل الدجاج المشوي، لكنني أفضّل أحياناً كوباً من الحليب الساخن. أعتقد أن هذه الخيارات تساعدني على البقاء بصحة جيدة."
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
      "In the future, everything will change, including my family. I have two brothers and one sister. My older brother Ali will travel to Italy to study for a higher degree there. My little brother Hamad will be a university student. He will study law because he wants to be a lawyer. As for my sister, Zahraa, she will become a doctor after finishing her last two years of college. Both my parents will be retired from their current jobs. I think my family will have a happy and peaceful life in the future."
    ],
    paragraphsAr: [
      "في المستقبل سيتغير كل شيء، بما في ذلك عائلتي. لدي أخوان وأخت واحدة. سيسافر أخي الأكبر علي إلى إيطاليا للدراسة والحصول على شهادة أعلى. وسيكون أخي الأصغر حمد طالباً جامعياً، وسيدرس القانون لأنه يريد أن يصبح محامياً. أما أختي زهراء فستصبح طبيبة بعد إكمال آخر سنتين من الكلية. وسيتقاعد والداي من عمليهما الحاليين. أعتقد أن عائلتي ستعيش حياة سعيدة وهادئة في المستقبل."
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
      "Hi Ali,\\nHow are you? Thanks for the email. If there is no housework, I may go to the computer store. I need to buy a new laptop and a camera. In the afternoon, I might visit my uncle, Sam, in hospital. He had an operation yesterday. My brother Osama might go, too. I think the weather will be nice in the evening. Why don’t you come to our house? We can play some video games or football in the garden. Let me know.\\n\\nOmar"
    ],
    paragraphsAr: [
      "مرحباً علي،\\nكيف حالك؟ شكراً على رسالتك الإلكترونية. إذا لم تكن هناك أعمال منزلية، فقد أذهب إلى متجر الحاسوب. أحتاج إلى شراء حاسوب محمول جديد وكاميرا. وفي فترة بعد الظهر قد أزور عمي سام في المستشفى، فقد أجرى عملية جراحية أمس. وقد يذهب أخي أسامة معي أيضاً. أعتقد أن الطقس سيكون جميلاً في المساء. لماذا لا تأتي إلى منزلنا؟ يمكننا لعب بعض ألعاب الفيديو أو كرة القدم في الحديقة. أخبرني.\\n\\nعمر"
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
