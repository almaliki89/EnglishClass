import { EssayItem } from '../../../types';

// Source-aligned writing models from the fourth-preparatory booklet, printed pages 171-177.
// Personal contact details shown in the sample application form are represented as placeholders.
export const FOURTH_PREPARATORY_ESSAYS: EssayItem[] = [
  {
    id: '4th-essay-u1-info-form',
    unitId: 41,
    titleAr: 'استمارة التقديم إلى مدرسة أو برنامج صيفي',
    titleEn: 'Application Form',
    ministerialWeight: 'موضع المصدر: الملزمة ص 171',
    paragraphsEn: [
      'Application Form\\nSurname: [Surname]\\nForenames: [Forenames]\\nDate of birth: [Date of birth]\\nAddress: [Address]\\nPhone number: [Phone number]\\nEmail: [Email]\\nWhy are you interested in our school?\\nI would like to go on a summer program to improve my English. I am interested in your school because it has fantastic facilities and highly experienced teachers. All your subjects are in English, and this is very important for me to improve my English.'
    ],
    paragraphsAr: [
      'استمارة التقديم\\nاسم العائلة: [اسم العائلة]\\nالأسماء: [الأسماء]\\nتاريخ الميلاد: [تاريخ الميلاد]\\nالعنوان: [العنوان]\\nرقم الهاتف: [رقم الهاتف]\\nالبريد الإلكتروني: [البريد الإلكتروني]\\nلماذا أنت مهتم بمدرستنا؟\\nأود الالتحاق ببرنامج صيفي لتحسين لغتي الإنجليزية. أنا مهتم بمدرستكم لأنها تضم مرافق ممتازة ومدرسين ذوي خبرة عالية. جميع المواد لديكم تُدرّس باللغة الإنجليزية، وهذا مهم جداً لتحسين لغتي الإنجليزية.'
    ],
    keywords: [
      { word: 'Surname', meaning: 'اسم العائلة' },
      { word: 'Forenames', meaning: 'الأسماء الشخصية' },
      { word: 'Date of birth', meaning: 'تاريخ الميلاد' },
      { word: 'facilities', meaning: 'مرافق وتجهيزات' },
      { word: 'experienced', meaning: 'ذوو خبرة' }
    ],
    goldenTips: [
      'املأ حقول الاستمارة بالبيانات الصحيحة لصاحب الطلب.',
      'استخدم حقولاً عامة في النماذج الرقمية ولا تنشر بيانات شخصية حقيقية.',
      'اذكر سبب الاهتمام بالمدرسة واربطه بتحسين اللغة والمرافق وخبرة المدرسين.'
    ],
    clozeSentences: [
      { textWithBlanks: 'I would like to go on a summer program to improve my ______.', missingWord: 'English', options: ['English', 'history', 'physics', 'geography'] }
    ]
  },
  {
    id: '4th-essay-u2-accident',
    unitId: 42,
    titleAr: 'إنشاء الوحدة الثانية: حادث في المدرسة',
    titleEn: 'An Accident',
    ministerialWeight: 'موضع المصدر: الملزمة ص 172',
    paragraphsEn: [
      'One day, my school organized a celebration on Mother’s Day. I was very happy, and I had a role in a play. I was a grandmother with grey hair.',
      'The play was fantastic, everybody was happy and they clapped a lot. But just before we left the stage, my friend Sarah pushed me on the stairs. I fell down and hurt my leg.',
      'I couldn’t walk. Then my English teacher brought a big board and they put me on it. Then they carried me to hospital. Finally, we arrived at hospital. First, the doctor said that I must have an x-ray. Later a nurse came and told me that there was nothing serious and I could leave the hospital.'
    ],
    paragraphsAr: [
      'في أحد الأيام، نظمت مدرستي احتفالاً بعيد الأم. كنت سعيداً جداً، وكان لي دور في مسرحية. كنت أؤدي دور جدة ذات شعر رمادي.',
      'كانت المسرحية رائعة، وكان الجميع سعداء وصفقوا كثيراً. لكن قبل أن نغادر المنصة بقليل، دفعتني صديقتي سارة على الدرج. فسقطت وأصبت ساقي.',
      'لم أستطع المشي. ثم أحضر مدرس اللغة الإنجليزية لوحاً كبيراً ووضعوني عليه. بعد ذلك حملوني إلى المستشفى. وأخيراً وصلنا إلى المستشفى. قال الطبيب أولاً إن عليّ إجراء أشعة سينية. وبعد ذلك جاءت ممرضة وأخبرتني أنه لا يوجد شيء خطير وأنني أستطيع مغادرة المستشفى.'
    ],
    keywords: [
      { word: 'celebration', meaning: 'احتفال' },
      { word: 'play', meaning: 'مسرحية' },
      { word: 'stage', meaning: 'منصة المسرح' },
      { word: 'hurt', meaning: 'أصاب / جرح' },
      { word: 'x-ray', meaning: 'أشعة سينية' }
    ],
    goldenTips: [
      'رتب أحداث الحادث بالتسلسل الزمني.',
      'استخدم الماضي البسيط للسرد، وروابط مثل Then وFinally.',
      'اذكر الحادث والإصابة والإجراء الطبي والنتيجة.'
    ],
    clozeSentences: [
      { textWithBlanks: 'I fell down and ______ my leg.', missingWord: 'hurt', options: ['hurt', 'built', 'bought', 'lent'] }
    ]
  },
  {
    id: '4th-essay-u3-erbil-email',
    unitId: 43,
    titleAr: 'إنشاء الوحدة الثالثة: رسالة من أربيل',
    titleEn: 'Hello from Erbil',
    ministerialWeight: 'موضع المصدر: الملزمة ص 173',
    paragraphsEn: [
      'From: Ammar\\nTo: Farah\\nSubject: Hello from Erbil\\n\\nHi Farah,\\nHow are you?\\nLast month I went with my family on a holiday to the north of Iraq. It was a package deal and cost us $200 each.\\nWe stayed in a five-star hotel in Erbil. It has big rooms, a wonderful restaurant and two swimming pools. It was clean and tidy. According to the program of the holiday, they took us to several places including the malls, mosques, museums and a free tour. In the evening, we visited the castle of Erbil and had supper in a luxurious restaurant.\\nThe best thing about the holiday was that we visited a variety of places, old and modern. The weather was wonderful and the holiday was really fantastic.\\nWhat about you? Tell me your news.\\nBest wishes\\nAmmar'
    ],
    paragraphsAr: [
      'من: عمار\\nإلى: فرح\\nالموضوع: تحياتي من أربيل\\n\\nمرحباً فرح،\\nكيف حالك؟\\nفي الشهر الماضي ذهبت مع عائلتي في عطلة إلى شمال العراق. كانت رحلة ضمن عرض سياحي متكامل وكلفت 200 دولار لكل شخص.\\nأقمنا في فندق خمس نجوم في أربيل. يحتوي على غرف كبيرة ومطعم رائع ومسبحيْن. كان نظيفاً ومرتباً. ووفقاً لبرنامج العطلة، أخذونا إلى أماكن عدة، منها المراكز التجارية والمساجد والمتاحف وجولة مجانية. وفي المساء زرنا قلعة أربيل وتناولنا العشاء في مطعم فاخر.\\nأفضل ما في العطلة أننا زرنا أماكن متنوعة، قديمة وحديثة. كان الطقس رائعاً وكانت العطلة ممتعة حقاً.\\nوماذا عنك؟ أخبريني بأخبارك.\\nأطيب التحيات،\\nعمار'
    ],
    keywords: [
      { word: 'package deal', meaning: 'عرض سياحي متكامل' },
      { word: 'five-star hotel', meaning: 'فندق خمس نجوم' },
      { word: 'castle', meaning: 'قلعة' },
      { word: 'luxurious', meaning: 'فاخر' },
      { word: 'variety', meaning: 'تنوع' }
    ],
    goldenTips: [
      'حافظ على عناصر البريد الإلكتروني: From وTo وSubject والتحية والخاتمة.',
      'استخدم الماضي البسيط لوصف الرحلة والأماكن التي زرتها.',
      'اذكر مكان الإقامة والأنشطة وأفضل ما في الرحلة.'
    ],
    clozeSentences: [
      { textWithBlanks: 'In the evening, we visited the castle of ______.', missingWord: 'Erbil', options: ['Erbil', 'Basra', 'Mosul', 'Amara'] }
    ]
  },
  {
    id: '4th-essay-u4-wedding-customs',
    unitId: 44,
    titleAr: 'إنشاء الوحدة الرابعة: عادات الزواج في العراق',
    titleEn: 'Wedding Customs in Iraq',
    ministerialWeight: 'موضع المصدر: الملزمة ص 174',
    paragraphsEn: [
      'Wedding customs differ from country to country. In Iraq, a person usually gets married on Thursday. A day before the wedding, the bride’s hands and feet are decorated with henna. On the wedding day, the groom usually wears a suit, and the bride wears a white dress which symbolizes purity. The groom’s family invites friends and relatives to the wedding party. Sometimes food is served on the wedding day, but some families serve it a day before the wedding. Friends and relatives visit the bride and the groom and give them presents.'
    ],
    paragraphsAr: [
      'تختلف عادات الزواج من بلد إلى آخر. في العراق، يتزوج الشخص عادة يوم الخميس. وقبل يوم من الزفاف، تُزيّن يدا العروس وقدماها بالحناء. وفي يوم الزفاف، يرتدي العريس عادة بدلة، وترتدي العروس فستاناً أبيض يرمز إلى النقاء. تدعو عائلة العريس الأصدقاء والأقارب إلى حفلة الزفاف. وأحياناً يقدم الطعام في يوم الزفاف، لكن بعض العائلات تقدمه في اليوم الذي يسبقه. ويزور الأصدقاء والأقارب العروس والعريس ويقدمون لهما الهدايا.'
    ],
    keywords: [
      { word: 'bride', meaning: 'عروس' },
      { word: 'groom', meaning: 'عريس' },
      { word: 'henna', meaning: 'حناء' },
      { word: 'purity', meaning: 'نقاء' },
      { word: 'relatives', meaning: 'أقارب' }
    ],
    goldenTips: [
      'استخدم المضارع البسيط لوصف العادات المتكررة.',
      'اذكر يوم الزواج والحناء وملابس العروسين ودعوة الأقارب والطعام والهدايا.',
      'لا تضف طقوساً غير مذكورة في نص الملزمة.'
    ],
    clozeSentences: [
      { textWithBlanks: 'The bride’s hands and feet are decorated with ______.', missingWord: 'henna', options: ['henna', 'silver', 'paper', 'wool'] }
    ]
  },
  {
    id: '4th-essay-u5-eating-habits',
    unitId: 45,
    titleAr: 'إنشاء الوحدة الخامسة: عاداتي الغذائية',
    titleEn: 'My Eating Habits',
    ministerialWeight: 'موضع المصدر: الملزمة ص 175',
    wordCountMin: 90,
    wordCountMax: 100,
    paragraphsEn: [
      'I usually prefer meals with a lot of food groups, because these meals would be healthy. Our bodies need different things to grow and be healthy. For example, my breakfast always contains milk, eggs, cheese and bread, but I sometimes have orange juice instead of milk.',
      'For lunch I always have rice and broth with meat, fish, or chicken. I also have some fruit after lunch.',
      'For dinner I prefer light meals like grilled chicken, but sometimes I prefer a cup of hot milk.'
    ],
    paragraphsAr: [
      'أفضل عادةً الوجبات التي تحتوي على مجموعات غذائية كثيرة، لأن هذه الوجبات تكون صحية. تحتاج أجسامنا إلى أشياء مختلفة لكي تنمو وتبقى بصحة جيدة. فعلى سبيل المثال، يتضمن فطوري دائماً الحليب والبيض والجبن والخبز، لكنني أتناول أحياناً عصير البرتقال بدلاً من الحليب.',
      'أما الغداء، فأتناول دائماً الأرز والمرق مع اللحم أو السمك أو الدجاج. كما أتناول بعض الفاكهة بعد الغداء.',
      'وبالنسبة إلى العشاء، أفضل الوجبات الخفيفة مثل الدجاج المشوي، لكنني أفضل أحياناً كوباً من الحليب الساخن.'
    ],
    keywords: [
      { word: 'food groups', meaning: 'مجموعات غذائية' },
      { word: 'broth', meaning: 'مرق' },
      { word: 'grilled', meaning: 'مشوي' },
      { word: 'light meals', meaning: 'وجبات خفيفة' }
    ],
    goldenTips: [
      'تحدد الملزمة لهذا الموضوع فقرة من 90 إلى 100 كلمة.',
      'رتب الأفكار بحسب الوجبات: breakfast ثم lunch ثم dinner.',
      'التزم بالأطعمة والأمثلة الموجودة في نص المصدر عند دراسة النموذج.'
    ],
    clozeSentences: [
      { textWithBlanks: 'For dinner I prefer light meals like grilled ______.', missingWord: 'chicken', options: ['chicken', 'bread', 'rice', 'cheese'] }
    ]
  },
  {
    id: '4th-essay-u6-family-future',
    unitId: 46,
    titleAr: 'إنشاء الوحدة السادسة: مستقبل عائلتي',
    titleEn: 'My Family’s Future',
    ministerialWeight: 'موضع المصدر: الملزمة ص 176',
    wordCountMin: 70,
    wordCountMax: 90,
    paragraphsEn: [
      'In the future, everything will change, including my family. I have two brothers and one sister. My older brother Ali will travel to Italy to study for a higher degree there. My little brother Hamad will be a university student. He will study law because he wants to be a lawyer. As for my sister, Zahraa, she will become a doctor after finishing her last two years of college. Both my parents will be retired from their current jobs. I think my family will have a happy and peaceful life in the future.'
    ],
    paragraphsAr: [
      'في المستقبل، سيتغير كل شيء، بما في ذلك عائلتي. لدي أخوان وأخت واحدة. سيسافر أخي الأكبر علي إلى إيطاليا للدراسة والحصول على شهادة أعلى هناك. وسيكون أخي الصغير حمد طالباً جامعياً، وسيدرس القانون لأنه يريد أن يصبح محامياً. أما أختي زهراء فستصبح طبيبة بعد إنهاء السنتين الأخيرتين من دراستها الجامعية. وسيتقاعد والداي من وظيفتيهما الحاليتين. أعتقد أن عائلتي ستعيش حياة سعيدة وهادئة في المستقبل.'
    ],
    keywords: [
      { word: 'higher degree', meaning: 'شهادة دراسية أعلى' },
      { word: 'law', meaning: 'القانون' },
      { word: 'lawyer', meaning: 'محامٍ' },
      { word: 'retired', meaning: 'متقاعد' },
      { word: 'peaceful', meaning: 'هادئ' }
    ],
    goldenTips: [
      'تحدد الملزمة لهذا الموضوع فقرة من 70 إلى 90 كلمة.',
      'استخدم will + المصدر للحديث عن الأحداث المحتملة في المستقبل.',
      'حافظ على تفاصيل أفراد الأسرة كما وردت في النموذج ولا تضف تخصصات أو تفاصيل أخرى.'
    ],
    clozeSentences: [
      { textWithBlanks: 'He will study law because he wants to be a ______.', missingWord: 'lawyer', options: ['lawyer', 'doctor', 'pilot', 'farmer'] }
    ]
  },
  {
    id: '4th-essay-u7-tomorrow-plans',
    unitId: 47,
    titleAr: 'إنشاء الوحدة السابعة: رسالة إلى صديق عن خطط الغد',
    titleEn: 'An Email to a Friend About Tomorrow',
    ministerialWeight: 'موضع المصدر: الملزمة ص 177',
    paragraphsEn: [
      'Hi Ali,\\nHow are you?\\nThanks for the email. If there is no housework, I may go to the computer store. I need to buy a new laptop and a camera. In the afternoon, I might visit my uncle, Sam, in hospital. He had an operation yesterday. My brother Osama might go, too.\\nI think the weather will be nice in the evening. Why don’t you come to our house? We can play some video games or football in the garden. Let me know.\\nOmar'
    ],
    paragraphsAr: [
      'مرحباً علي،\\nكيف حالك؟\\nشكراً على رسالتك. إذا لم تكن هناك أعمال منزلية، فقد أذهب إلى متجر الحواسيب. أحتاج إلى شراء حاسوب محمول جديد وكاميرا. وفي فترة بعد الظهر، قد أزور عمي سام في المستشفى. لقد أجرى عملية جراحية أمس. وقد يذهب أخي أسامة أيضاً.\\nأعتقد أن الطقس سيكون جميلاً في المساء. لماذا لا تأتي إلى منزلنا؟ يمكننا لعب بعض ألعاب الفيديو أو كرة القدم في الحديقة. أخبرني.\\nعمر'
    ],
    keywords: [
      { word: 'may', meaning: 'قد / ربما' },
      { word: 'might', meaning: 'قد / ربما' },
      { word: 'operation', meaning: 'عملية جراحية' },
      { word: 'computer store', meaning: 'متجر حواسيب' },
      { word: 'Let me know', meaning: 'أخبرني / دعني أعرف' }
    ],
    goldenTips: [
      'ابدأ بتحية مناسبة لصديق واختم باسم المرسل.',
      'استخدم may وmight للتعبير عن الاحتمال، وwill للتوقع.',
      'لا تضف تفاصيل جديدة إلى نص النموذج عند حفظه بوصفه نص الملزمة.'
    ],
    clozeSentences: [
      { textWithBlanks: 'In the afternoon, I ______ visit my uncle in hospital.', missingWord: 'might', options: ['might', 'must', 'did', 'was'] }
    ]
  }
];
