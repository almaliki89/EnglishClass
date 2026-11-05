import { EssayItem } from '../../../types';

// =========================================================================
// الإنشاءات المنهجية النموذجية للصف الرابع الإعدادي - ملزمة النموذجية 2026
// مرجع الصفحات: ص 171 - 179 (7 إنشاءات معتمدة مع الكلمات المفتاحية والترجمة)
// =========================================================================

export const FOURTH_PREPARATORY_ESSAYS: EssayItem[] = [
  {
    id: "4th-essay-u1-info-form",
    unitId: 41,
    titleAr: "إنشاء الوحدة الأولى: استمارة المعلومات للتقديم على برنامج لغوي صيفي",
    titleEn: "Application & Information Form for a Summer Language Course",
    ministerialWeight: "20 درجة منهجية - الملزمة ص 171",
    paragraphsEn: [
      "Surname: Al-Tamimi | First Name: Ali | Date of Birth: 14/03/2009 | Address: Palestine Street, District 502, Baghdad, Iraq | Email: ali.tamimi2009@gmail.com | Mobile: +964 770 123 4567.",
      "Why I would like to join this language programme: I am a 4th Preparatory student eager to improve my spoken English and academic writing skills during the summer vacation. I am particularly interested in your self-access learning facility and cultural excursion activities, as I plan to pursue higher university studies in international engineering."
    ],
    paragraphsAr: [
      "لقب العائلة: التميمي | الاسم الأول: علي | تاريخ الميلاد: 14/03/2009 | العنوان: شارع فلسطين، محلة 502، بغداد، العراق | البريد الإلكتروني: ali.tamimi2009@gmail.com | الهاتف: +964 770 123 4567.",
      "لماذا أود الانضمام لهذا البرنامج اللغوي: أنا طالب في الصف الرابع الإعدادي وأرغب بشدة في تطوير مهارات المحادثة والكتابة الأكاديمية باللغة الإنكليزية خلال العطلة الصيفية. وأنا مهتم بوجه خاص بمركز التعلم الذاتي التابع لكم وبالأنشطة والرحلات الثقافية، حيث أخطط لإكمال دراستي الجامعية في الهندسة الدولية."
    ],
    keywords: [
      { word: "Surname", meaning: "لقب العائلة" },
      { word: "DOB", meaning: "تاريخ الميلاد" },
      { word: "self-access centre", meaning: "مركز التعلم الذاتي" },
      { word: "cultural excursions", meaning: "رحلات وجولات ثقافية" }
    ],
    goldenTips: [
      "اكتب استمارة المعلومات بدقة مع تعبئة الحقول الشخصية الأساسية.",
      "اذكر هدفك الدراسي كتعلم المحادثة واستخدام مركز التعلم الذاتي."
    ],
    clozeSentences: [
      {
        textWithBlanks: "I am eager to join a summer ______ programme to improve my English.",
        missingWord: "language",
        options: ["language", "cooking", "driving", "swimming"]
      }
    ]
  },
  {
    id: "4th-essay-u2-package-holiday",
    unitId: 42,
    titleAr: "إنشاء الوحدة الثانية: رحلة سياحية جماعية شاملة إلى أربيل وشمال العراق",
    titleEn: "A Package Holiday Experience in Erbil and Northern Iraq",
    ministerialWeight: "20 درجة منهجية - الملزمة ص 173",
    paragraphsEn: [
      "Dear Alex,\nLast month, I went with my family on an amazing package holiday to Erbil in the north of Iraq. The entire trip cost $200 per person and included travel fare, guided tours, and full accommodation.",
      "We stayed in a clean, modern five-star hotel near the city centre, which featured a wonderful restaurant and two swimming pools. According to our tour programme, we visited the ancient Citadel of Erbil, local bazaars, and beautiful mountain waterfalls at Gali Ali Bag. In the evening, we enjoyed a delicious supper of traditional Iraqi kebabs in a luxurious restaurant. It was a truly fantastic holiday! Tell me your news soon.\nBest wishes,\nAmmar"
    ],
    paragraphsAr: [
      "عزيزي أليكس،\nفي الشهر الماضي، ذهبت مع عائلتي في رحلة سياحية جماعية شاملة ومذهلة إلى أربيل في شمال العراق. بلغت تكلفة الرحلة الكلية 200 دولار للشخص الواحد وشملت أجور التنقل والجولات الإرشادية والسكن الكامل.",
      "أقمنا في فندق حديث ونظيف من فئة الخمس نجوم بالقرب من مركز المدينة، يضم مطعماً رائعاً وحوضي سباحة. ووفقاً لبرنامج الرحلة، زرنا قلعة أربيل الأثرية، والأسواق الشعبية، وشلالات كلي علي بك الجبلية الساحرة. وفي المساء، استمتعنا بعشاء شهي من الكباب العراقي التراثي في مطعم فاخر. لقد كانت عطلة رائعة بحق! أطلعني على أخبارك قريباً.\nأطيب التمنيات،\nعمار"
    ],
    keywords: [
      { word: "package holiday", meaning: "رحلة سياحية شاملة" },
      { word: "Citadel of Erbil", meaning: "قلعة أربيل الأثرية" },
      { word: "accommodation", meaning: "سكن وإقامة" },
      { word: "guided tour", meaning: "جولة سياحية بإرشاد" }
    ],
    goldenTips: [
      "اذكر مكان الرحلة (Erbil) وتكلفتها الإجمالية (Package deal).",
      "عدد المعالم المزورة مثل قلعة أربيل والشلالات والمطاعم التراثية."
    ],
    clozeSentences: [
      {
        textWithBlanks: "A ______ holiday includes travel, hotel, and tours in one price.",
        missingWord: "package",
        options: ["package", "cheap", "lonely", "short"]
      }
    ]
  },
  {
    id: "4th-essay-u3-unicef",
    unitId: 43,
    titleAr: "إنشاء الوحدة الثالثة: دور منظمة اليونيسيف في مساعدة الأطفال",
    titleEn: "UNICEF's Humanitarian Role in Helping Disadvantaged Children",
    ministerialWeight: "20 درجة منهجية - الملزمة ص 174",
    paragraphsEn: [
      "UNICEF, which stands for the United Nations International Children's Emergency Fund, is one of the most vital international humanitarian organizations in the world. Established in 1946, UNICEF works tirelessly across more than 190 countries to defend children's rights to survival, health, and education.",
      "The organization provides free vaccines against deadly diseases, builds clean water sanitation facilities, and supplies textbooks and nutritional aid to children living in poverty or war-torn regions. Furthermore, UNICEF fights to abolish child labour and ensure that every child attends school. Supporting UNICEF is an essential moral duty for a peaceful global future."
    ],
    paragraphsAr: [
      "تعد منظمة اليونيسيف (صندوق الأمم المتحدة الدولي لشرطة الطوارئ للأطفال) واحدة من أهم المنظمات الإنسانية الدولية في العالم. تأسست عام 1946 وتعمل بلا كلل في أكثر من 190 دولة لدعم حقوق الأطفال في الحياة والصحة والتعليم.",
      "تقدم المنظمة اللقاحات المجانية ضد الأمراض الفتاكة، وتبني محطات المياه النظيفة، وتوفر الكتب المدرسية والمساعدات الغذائية للأطفال الفقراء أو المتأثرين بالنزاعات المسلحة. علاوة على ذلك، تحارب اليونيسيف عمالة الأطفال لضمان التحاق كل طفل بالمدرسة. إن دعم اليونيسيف واجب أخلاقي لإرساء المستقبل."
    ],
    keywords: [
      { word: "UNICEF", meaning: "منظمة اليونيسيف" },
      { word: "humanitarian", meaning: "إنساني" },
      { word: "vaccines", meaning: "لقاحات وتطعيمات" },
      { word: "child labour", meaning: "عمالة الأطفال" }
    ],
    goldenTips: [
      "اذكر الاختصار المكتمل لاسم المنظمة وسنة تأسيسها (1946).",
      "أبرز دور المنظمة في توفير المياه واللقاحات ومحاربة عمالة الأطفال."
    ],
    clozeSentences: [
      {
        textWithBlanks: "UNICEF was created in 1946 to help ______ affected by war.",
        missingWord: "children",
        options: ["children", "soldiers", "pilots", "drivers"]
      }
    ]
  },
  {
    id: "4th-essay-u4-wedding-customs",
    unitId: 44,
    titleAr: "إنشاء الوحدة الرابعة: عادات وتقاليد الزفاف والأعراس في العراق",
    titleEn: "Traditional Wedding Customs and Celebrations in Iraq",
    ministerialWeight: "20 درجة منهجية - الملزمة ص 176",
    paragraphsEn: [
      "Wedding customs differ from one culture to another, but in Iraq, marriage celebrations are steeped in deep joy and generous family hospitality. Weddings usually take place on Thursday. A day before the main celebration, female relatives and friends gather at the bride's house to decorate her hands and feet with intricate henna designs.",
      "On the wedding day, the groom wears a formal suit, while the bride wears an elegant white dress symbolizing purity and innocence. The groom's family hosts a grand celebration for friends and relatives where traditional Iraqi food and sweets are served. Guests bring thoughtful presents and offer heartfelt congratulations to the new couple, wishing them a lifetime of happiness."
    ],
    paragraphsAr: [
      "تختلف عادات الزفاف من ثقافة لأخرى، ولكن في العراق، تتسم حفلات الزواج ببهجة عارمة وكرم عائلي أصيل. وتجري الأعراس عادة يوم الخميس. وقبل يوم من الاحتفال الرئيسي، تجتمع القريبات والصديقات في منزل العروس لتزيين يديها وقدميها بنقوش الحناء البديعة.",
      "وفي يوم الزفاف، يرتدي العريس بدلة رسمية، بينما ترتدي العروس فستاناً أبيض أنيقاً يرمز للنقاء والبراءة. وتقيم عائلة العريس حتلاً كبيراً تدعو إليه الأقارب والأصدقاء حيث تُقدم الوجبات والحلويات العراقية التراثية. ويحمل الضيوف الهدايا القيمة ويقدمون أحر التهاني للعروسين متمنين لهما حياة ملؤها السعادة."
    ],
    keywords: [
      { word: "henna night", meaning: "ليلة الحناء" },
      { word: "groom & bride", meaning: "العريس والعروس" },
      { word: "purity", meaning: "نقاء وبراءة" },
      { word: "hospitality", meaning: "كرم الضيافة" }
    ],
    goldenTips: [
      "اذكر اليوم المفضل للزفاف بالعراق (Thursday) ومراسم ليلة الحناء.",
      "أوضح رمزية الفستان الأبيض (purity) ودور العائلة في تقديم الطعام والمأدبة."
    ],
    clozeSentences: [
      {
        textWithBlanks: "In Iraq, the bride's white dress symbolizes ______ and innocence.",
        missingWord: "purity",
        options: ["purity", "wealth", "speed", "anger"]
      }
    ]
  },
  {
    id: "4th-essay-u5-eating-habits",
    unitId: 45,
    titleAr: "إنشاء الوحدة الخامسة: عاداتي ونظامي الغذائي المفضل",
    titleEn: "My Daily Eating Habits and Personal Dietary Preferences",
    ministerialWeight: "20 درجة منهجية - الملزمة ص 177",
    paragraphsEn: [
      "I generally prefer balanced meals containing a variety of food groups because a nutritious diet is vital for maintaining physical growth and mental energy. Our bodies require proteins, wholesome carbohydrates, vitamins, and minerals to stay healthy.",
      "For instance, my daily breakfast consists of fresh milk, eggs, cheese, and whole-wheat bread, accompanied by fresh orange juice. For lunch, I usually enjoy Iraqi rice and okra broth with grilled meat or chicken, followed by seasonal fresh fruits. For dinner, I prefer lighter choices like grilled fish or a warm bowl of soup. I also make sure to drink plenty of water throughout the day."
    ],
    paragraphsAr: [
      "أفضل بوجه عام الوجبات المتوازنة التي تحتوي على تنوع من المجموعات الغذائية، لأن النظام الغذائي المغذي مصيري للحفاظ على النمو البدني والنشاط الذهني. فأنشطة أجسادنا تتطلب البروتينات والنشويات الصحية والفيتامينات والمعادن للبقاء بصحة جيدة.",
      "على سبيل المثال، يتكون فطوري اليومي من الحليب الطازج والبيض والجبن وخبز القمح الكامل مصحوباً بعصير البرتقال. وفي الغداء، أتناول عادة الأرز العراقي ومرق البامية مع اللحم أو الدجاج المشوي، تتبعها فواكه طازجة. أما العشاء، فأفضل الخيارات الخفيفة ك السمك المشوي أو حساء دافئ، كما أحرص على شرب وفرة من الماء طوال اليوم."
    ],
    keywords: [
      { word: "balanced meals", meaning: "وجبات متوازنة" },
      { word: "food groups", meaning: "مجموعات غذائية" },
      { word: "carbohydrates", meaning: "كربوهيدرات ونشويات" },
      { word: "vitamins", meaning: "فيتامينات" }
    ],
    goldenTips: [
      "اذكر مكونات الوجبات الثلاث الأساسية (Breakfast, Lunch, Dinner).",
      "أكد على التنوع بين البروتين والفواكه وشرب الماء."
    ],
    clozeSentences: [
      {
        textWithBlanks: "A healthy diet should contain items from all main food ______.",
        missingWord: "groups",
        options: ["groups", "boxes", "streets", "cars"]
      }
    ]
  },
  {
    id: "4th-essay-u6-family-future",
    unitId: 46,
    titleAr: "إنشاء الوحدة السادسة: مستقبل عائلتي والخطط القادمة",
    titleEn: "My Family's Future Plans and Aspirations",
    ministerialWeight: "20 درجة منهجية - الملزمة ص 178",
    paragraphsEn: [
      "In the coming years, many positive changes will take place in my family's life. My elder brother, Ali, will travel to Italy to complete his master's degree in architectural engineering. My younger brother, Hamad, will become a university student studying law because he dreams of becoming a successful lawyer.",
      "As for my sister, Zahraa, she will graduate from medical college after two years and begin her clinical residency as a pediatrician. Meanwhile, my parents will retire from their government jobs to enjoy a peaceful life. I am confident that our family will enjoy a bright and prosperous future together."
    ],
    paragraphsAr: [
      "في السنوات القادمة، ستحدث تغييرات إيجابية كثيرة في حياة عائلتي. شقيقي الأكبر، علي، سيسافر إلى إيطاليا لإكمال دراسة الماجستير في الهندسة المعمارية. وشقيقي الأصغر، حمد، سيلتحق بالجامعة لدراسة القانون لأنه يحلم بأن يصبح محامياً ناجحاً.",
      "أما شقيقتي زهراء، فستتخرج من كلية الطب بعد سنتين وتبدأ تدريبها الطبي كطبيبة أطفال. وفي هذه الأثناء، سيتقاعد والداي من وظائفهما الحكومية ليستمتعا بحياة هادئة. وأنا واثق من أن عائلتنا ستنعم بمستقبل مشرق وسعيد معاً."
    ],
    keywords: [
      { word: "aspirations", meaning: "طموحات وآمال" },
      { word: "architectural engineering", meaning: "هندسة معمارية" },
      { word: "pediatrician", meaning: "طبيبة أطفال" },
      { word: "retire", meaning: "يتقاعد عن العمل" }
    ],
    goldenTips: [
      "استخدم زمن المستقبل البسيط (will + مصدر) للحديث عن خطط المستقبل.",
      "اذكر طموحات الأخوة والوالدين بأسلوب متسلسل."
    ],
    clozeSentences: [
      {
        textWithBlanks: "My sister will become a doctor after graduating from ______ college.",
        missingWord: "medical",
        options: ["medical", "art", "music", "sport"]
      }
    ]
  },
  {
    id: "4th-essay-u7-tomorrow-plans",
    unitId: 47,
    titleAr: "إنشاء الوحدة السابعة: رسالة بريد إلكتروني لصديق عن خطط الغد",
    titleEn: "An Email to a Friend About Tomorrow's Plans and Possibilities",
    ministerialWeight: "20 درجة منهجية - الملزمة ص 179",
    paragraphsEn: [
      "Hi Ali,\nHow are you doing? Thanks for your last email. If there is no heavy housework tomorrow morning, I may go to the computer store to buy a new laptop and a digital camera for my school projects.",
      "In the afternoon, I might visit my uncle Sam in hospital because he had a minor knee operation yesterday; my brother Osama might come along too. In the evening, the weather will be very pleasant. Why don't you come over to our house? We can play video games or football in the garden. Let me know if you can make it.\nOmar"
    ],
    paragraphsAr: [
      "أهلاً علي،\nكيف حالك؟ شكراً على بريدك الأخير. إذا لم تكن هناك أعمال منزلية كثيرة صباح غد، فقد أذهب إلى متجر الحواسيب لشراء حاسوب محمول جديد وكاميرا رقمية لمشاريعي المدرسية.",
      "وفي بعد الظهيرة، قد أزور عمي سام في المستشفى لأنه أجرى عملية جراحية بسيطة في ركبته أمس، وقد يرافقني أخي أسامة أيضاً. وفي المساء، سيكون الجو لطيفاً جداً. لماذا لا تأتي إلى منزلنا؟ يمكننا لعب ألعاب الفيديو أو كرة القدم في الحديقة. أطلعني إذا كنت تستطيع القدوم.\nعمر"
    ],
    keywords: [
      { word: "possibilities", meaning: "احتمالات وإمكانيات" },
      { word: "computer store", meaning: "متجر حواسيب" },
      { word: "operation", meaning: "عملية جراحية" },
      { word: "video games", meaning: "ألعاب الفيديو" }
    ],
    goldenTips: [
      "حافظ على التنسيق غير الرسمي لرسائل الأصدقاء (Hi ... / Let me know).",
      "استخدم الأفعال الناقصة الدالة على الاحتمال المنهجي (may, might, will)."
    ],
    clozeSentences: [
      {
        textWithBlanks: "If I finish my homework, I ______ visit my uncle tomorrow.",
        missingWord: "may",
        options: ["may", "must", "had", "did"]
      }
    ]
  }
];
