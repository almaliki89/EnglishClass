import { EducationalGrade, Lesson, Unit } from '../types';

/**
 * Curated index of actual textbook reading passages.
 *
 * Deliberately does NOT infer a "book passage" from lesson.category === "reading".
 * Story Time, supplementary reading, standalone dialogues/interviews and unit tests
 * stay in their own curriculum sections.
 *
 * Titles below name the source text itself, not the mixed lesson that may also teach
 * grammar or include a unit test.
 */
export interface BookPassageCatalogItem {
  id: string;
  lessonId: string;
  titleAr: string;
  titleEn: string;
  sourcePages?: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ResolvedBookPassage extends BookPassageCatalogItem {
  unit: Unit;
  lesson: Lesson;
}

export const BOOK_PASSAGES_BY_GRADE: Record<EducationalGrade, BookPassageCatalogItem[]> = {
  'third-intermediate': [
    {
      id: '3i-u1-panther',
      lessonId: '3rd-u1-l4',
      titleAr: 'سيارة العام: Panther 3.0D',
      titleEn: 'Car of the Year: Panther 3.0D',
      imageSrc: '/images/passages/3i-u1-panther.webp',
      imageAlt: 'رسم توضيحي لسيارة Panther 3.0D الحديثة معروضة داخل معرض للسيارات في بغداد.',
    },
    {
      id: '3i-u2-lucy',
      lessonId: '3rd-u2-l3',
      titleAr: 'لوسي',
      titleEn: 'Lucy',
      imageSrc: '/images/passages/3i-u2-lucy.webp',
      imageAlt: 'رسم توضيحي لمشهد من المسلسل التلفزيوني الكوميدي العائلي لوسي داخل غرفة المعيشة.',
    },
    {
      id: '3i-u3-falcons',
      lessonId: '3rd-u3-l5',
      titleAr: 'الصقور: أسرع الكائنات الحية',
      titleEn: 'The Fastest Living Thing — Falcons',
      sourcePages: '68',
      imageSrc: '/images/passages/3i-u3-falcons.webp',
      imageAlt: 'رسم توضيحي لصقر يحلق وينقض بسرعة عالية فوق الصحراء المفتوحة.',
    },
    {
      id: '3i-u3-marsh-arabs',
      lessonId: '3rd-u3-l5',
      titleAr: 'عرب الأهوار',
      titleEn: 'Life on the Marshes — Marsh Arabs',
      sourcePages: '76–77',
      imageSrc: '/images/passages/3i-u3-marsh-arabs.webp',
      imageAlt: 'رسم توضيحي لبيوت القصب التقليدية والمشحوف وجاموس الماء في أهوار جنوب العراق.',
    },
    {
      id: '3i-u4-ibrahim',
      lessonId: '3rd-u4-l3',
      titleAr: 'إبراهيم',
      titleEn: 'Ibrahim',
      sourcePages: '85–87',
      imageSrc: '/images/passages/3i-u4-ibrahim.webp',
      imageAlt: 'رسم توضيحي للشاب إبراهيم المهتم بعلم الحيوان والكتب الطبيعية في قرية جنوب العراق.',
    },
    {
      id: '3i-u4-leopards',
      lessonId: '3rd-u4-l4',
      titleAr: 'النمور الفارسية: أعداد قليلة',
      titleEn: 'Too Few Leopards',
      sourcePages: '88',
      imageSrc: '/images/passages/3i-u4-leopards.webp',
      imageAlt: 'رسم توضيحي لنمر فارسي في بيئته الجبلية الطبيعية مع رسالة الحفاظ على الحياة البرية.',
    },
    {
      id: '3i-u5-news',
      lessonId: '3rd-u5-l2',
      titleAr: 'أخبار الصباح العراقية',
      titleEn: 'Iraqi Morning News',
      imageSrc: '/images/passages/3i-u5-news.webp',
      imageAlt: 'رسم توضيحي لغرفة أخبار صحفية وصور ميدانية تغطي أخبار الصباح العراقية والمدينة الرياضية في البصرة.',
    },
    {
      id: '3i-u7-asian-games',
      lessonId: '3rd-u7-l4',
      titleAr: 'دورة الألعاب الآسيوية',
      titleEn: 'The Asian Games',
      imageSrc: '/images/passages/3i-u7-asian-games.webp',
      imageAlt: 'رسم توضيحي لرياضيين في ملعب دولي يتنافسون في دورة الألعاب الآسيوية مع الميداليات.',
    },
  ],

  'fourth-preparatory': [
    {
      id: '4p-u1-language-statistics',
      lessonId: '4th-u1-l2',
      titleAr: 'إحصائيات تعلّم اللغات',
      titleEn: 'Languages Statistics',
      imageSrc: '/images/passages/4p-u1-language-statistics.webp',
      imageAlt: 'رسم توضيحي لطلاب يتعلمون عدة لغات عالمية مع كتب وخرائط ورسوم بيانية لتوزع المتحدثين.',
    },
    {
      id: '4p-u1-summer-programme',
      lessonId: '4th-u1-l3',
      titleAr: 'كيفية اختيار البرنامج الصيفي',
      titleEn: 'How to Choose a Summer Programme',
      imageSrc: '/images/passages/4p-u1-summer-programme.webp',
      imageAlt: 'رسم توضيحي لحرم برنامج صيفي لدراسة اللغة الإنجليزية يجمع طلاباً وكتباً وأنشطة صفية.',
    },
    {
      id: '4p-u1-canada',
      lessonId: '4th-u1-l4',
      titleAr: 'كندا واللغات الرسمية',
      titleEn: 'Canada & Official Languages',
      imageSrc: '/images/passages/4p-u1-canada.webp',
      imageAlt: 'رسم توضيحي للمعالم الطبيعية والمدن الكندية التي تعكس التنوع اللغوي والثقافي.',
    },
    {
      id: '4p-u2-unicef',
      lessonId: '4th-u2-l3',
      titleAr: 'منظمة اليونيسيف وحماية الأطفال',
      titleEn: 'UNICEF & Helping Disadvantaged Children',
      imageSrc: '/images/passages/4p-u2-unicef.webp',
      imageAlt: 'رسم توضيحي للدعم الإنساني والتعليمي والرعاية الصحية المقدمة للأطفال حول العالم.',
    },
    {
      id: '4p-u2-schools',
      lessonId: '4th-u2-l4',
      titleAr: 'مدارس للجميع',
      titleEn: 'Schools for All',
      imageSrc: '/images/passages/4p-u2-schools.webp',
      imageAlt: 'رسم توضيحي لمبادرة تعليمية توصل الأطفال إلى الفصول الدراسية المجهزة بالكتب.',
    },
    {
      id: '4p-u2-meade',
      lessonId: '4th-u2-l6',
      titleAr: 'مدرسة ميد',
      titleEn: 'The Meade School',
      imageSrc: '/images/passages/4p-u2-meade.webp',
      imageAlt: 'رسم توضيحي لمدرسة متميزة تستعد لاستقبال تبرعات الكتب والمعدات الدراسية.',
    },
    {
      id: '4p-u2-sally',
      lessonId: '4th-u2-l7',
      titleAr: 'وظيفة سالي القديمة',
      titleEn: "Sally's Old Job",
      imageSrc: '/images/passages/4p-u2-sally.webp',
      imageAlt: 'رسم توضيحي لمعلمة وطالبة تتحدثان عن العمل التطوعي والتدريس في المدرسة.',
    },
    {
      id: '4p-u3-water',
      lessonId: '4th-u3-l4',
      titleAr: 'تلوث المياه والكوارث البيئية',
      titleEn: 'Water Pollution & Environmental Threats',
      imageSrc: '/images/passages/4p-u3-water.webp',
      imageAlt: 'رسم توضيحي لنهر يواجه التلوث البيئي مع جهود التوعية وحماية الموارد المائية.',
    },
    {
      id: '4p-u3-inventions',
      lessonId: '4th-u3-l5',
      titleAr: 'اختراعات غيّرت وجه الحياة',
      titleEn: 'Life-Changing Inventions',
      imageSrc: '/images/passages/4p-u3-inventions.webp',
      imageAlt: 'رسم توضيحي لطاولة دراسية تضم مصباحاً وموسوعة علمية وحاسوباً مكتبياً وهاتفاً ذكياً.',
    },
    {
      id: '4p-u4-gap-year',
      lessonId: '4th-u4-l1',
      titleAr: 'سنة الفجوة والتغيرات في الحياة',
      titleEn: 'Taking a Gap Year & Changes in Life',
      imageSrc: '/images/passages/4p-u4-gap-year.webp',
      imageAlt: 'رسم توضيحي لشاب يخطط لسنة عمل تطوعي وسفر تعليمي بعد المرحلة الثانوية.',
    },
    {
      id: '4p-u5-weddings',
      lessonId: '4th-u5-l4',
      titleAr: 'عادات الزواج حول العالم',
      titleEn: 'Wedding Customs',
      imageSrc: '/images/passages/4p-u5-weddings.webp',
      imageAlt: 'رسم توضيحي يبرز التنوع الثقافي في تقاليد وعادات الأعراس حول العالم.',
    },
    {
      id: '4p-u5-glass',
      lessonId: '4th-u5-l6',
      titleAr: 'الحرف اللبنانية ونفخ الزجاج',
      titleEn: 'Lebanese Crafts & Glass-Blowing',
      imageSrc: '/images/passages/4p-u5-glass.webp',
      imageAlt: 'رسم توضيحي لحرفي تقليدي يصنع أواني زجاجية ملونة بطريقة نفخ الزجاج.',
    },
    {
      id: '4p-u5-museum',
      lessonId: '4th-u5-l7',
      titleAr: 'رحلة مدرسية إلى المتحف الوطني العراقي',
      titleEn: 'A School Trip to the National Museum of Iraq',
      sourcePages: '92',
      imageSrc: '/images/passages/4p-u5-museum.webp',
      imageAlt: 'رسم توضيحي لطلاب يزورون المتحف العراقي ويشاهدون الآثار السومرية والآشورية العريقة.',
    },
    {
      id: '4p-u6-lunch',
      lessonId: '4th-u6-l0',
      titleAr: 'الغداء الصحي ومجموعات الطعام',
      titleEn: 'A Healthy Lunch',
      imageSrc: '/images/passages/4p-u6-lunch.webp',
      imageAlt: 'رسم توضيحي لوجبة غداء متوازنة تضم الفواكه والخضروات والبروتينات والحبوب الكاملة.',
    },
    {
      id: '4p-u6-sleep',
      lessonId: '4th-u6-l2',
      titleAr: 'النوم وصحة المراهقين',
      titleEn: "Sleep and Teenagers' Health",
      imageSrc: '/images/passages/4p-u6-sleep.webp',
      imageAlt: 'رسم توضيحي لغرفة نوم هادئة للمراهقين تؤكد أهمية النوم الكافي والمبكر للصحة.',
    },
    {
      id: '4p-u6-exercise',
      lessonId: '4th-u6-l5',
      titleAr: 'التمارين واللياقة البدنية',
      titleEn: 'Exercise & Fitness',
      imageSrc: '/images/passages/4p-u6-exercise.webp',
      imageAlt: 'رسم توضيحي لطلاب يمارسون الجري وتمارين اللياقة البدنية في الهواء الطلق.',
    },
    {
      id: '4p-u6-world-cup',
      lessonId: '4th-u6-l7',
      titleAr: 'كأس العالم لكرة القدم',
      titleEn: 'The FIFA World Cup',
      imageSrc: '/images/passages/4p-u6-world-cup.webp',
      imageAlt: 'رسم توضيحي لاستاد كرة قدم عالمي مضاء يشهد أجواء بطولة كأس العالم.',
    },
    {
      id: '4p-u6-mind',
      lessonId: '4th-u6-l8',
      titleAr: 'خمسة أسباب تجعل التمارين مفيدة للعقل',
      titleEn: 'Five Reasons Exercise Is Good for Your Mind',
      imageSrc: '/images/passages/4p-u6-mind.webp',
      imageAlt: 'رسم توضيحي يربط بين النشاط الرياضي المنتظم والتركيز الذهني وتخفيف التوتر.',
    },
    {
      id: '4p-u7-body',
      lessonId: '4th-u7-l1',
      titleAr: 'أهمية التمارين للجسم',
      titleEn: 'Why Exercise Is Important for Your Body',
      imageSrc: '/images/passages/4p-u7-body.webp',
      imageAlt: 'رسم توضيحي يبرز فوائد التمرين المنتظم لصحة القلب والعضلات والعظام.',
    },
    {
      id: '4p-u7-winds',
      lessonId: '4th-u7-l3',
      titleAr: 'الرياح التجارية والشمال والطقس',
      titleEn: 'Trade Winds, the Shamal & Weather',
      imageSrc: '/images/passages/4p-u7-winds.webp',
      imageAlt: 'رسم توضيحي لحركة الرياح والطقس فوق الخليج العربي وحوض النهرين.',
    },
    {
      id: '4p-u7-marshes',
      lessonId: '4th-u7-l5',
      titleAr: 'أهوار الحمار: استعادة جنة عدن',
      titleEn: 'Restoring the Garden of Eden: Al-Hammar Marshes',
      imageSrc: '/images/passages/4p-u7-marshes.webp',
      imageAlt: 'رسم توضيحي لاستعادة الحياة البيئية والمياه والقصب والطيور في أهوار الحمار جنوب العراق.',
    },
    {
      id: '4p-u7-oil',
      lessonId: '4th-u7-l7',
      titleAr: 'تكوّن النفط من الأرض إلى المصفاة',
      titleEn: 'From the Earth to the Refinery',
      imageSrc: '/images/passages/4p-u7-oil.webp',
      imageAlt: 'رسم توضيحي تعليمي لطبقات الأرض واستخراج النفط الخام وتكريره في المصفاة.',
    },
    {
      id: '4p-u7-shopping',
      lessonId: '4th-u7-l8',
      titleAr: 'التسوق عبر الإنترنت',
      titleEn: 'Online Shopping',
      imageSrc: '/images/passages/4p-u7-shopping.webp',
      imageAlt: 'رسم توضيحي لشخص يتسوق عبر الإنترنت من المنزل مع طرود التوصيل الإلكترونية.',
    },
    {
      id: '4p-u7-space-station',
      lessonId: '4th-u7-l9',
      titleAr: 'محطة الفضاء الدولية',
      titleEn: 'The International Space Station',
      imageSrc: '/images/passages/4p-u7-space-station.webp',
      imageAlt: 'رسم توضيحي لمحطة الفضاء الدولية بألواحها الشمسية أثناء دورانها فوق كوكب الأرض.',
    },
    {
      id: '4p-u7-turtle',
      lessonId: '4th-u7-l10',
      titleAr: 'السلحفاة البحرية صقرية المنقار',
      titleEn: 'The Hawksbill Sea Turtle',
      imageSrc: '/images/passages/4p-u7-turtle.webp',
      imageAlt: 'رسم توضيحي لسلحفاة بحرية صقرية المنقار تسبح فوق الشعاب المرجانية البحرية.',
    },
    {
      id: '4p-u8-saturn',
      lessonId: '4th-u8-l1',
      titleAr: 'كوكب زحل',
      titleEn: 'Planet Saturn',
      imageSrc: '/images/passages/4p-u8-saturn.webp',
      imageAlt: 'رسم توضيحي علمي لكوكب زحل وحلقاته الواضحة وأقماره في الفضاء.',
    },
    {
      id: '4p-u8-gps',
      lessonId: '4th-u8-l2',
      titleAr: 'نظام تحديد المواقع العالمي',
      titleEn: 'The Global Positioning System (GPS)',
      imageSrc: '/images/passages/4p-u8-gps.webp',
      imageAlt: 'رسم توضيحي لأقمار صناعية ترسل إشارات الملاحة لتحديد المواقع على سطح الأرض.',
    },
    {
      id: '4p-u8-space-fitness',
      lessonId: '4th-u8-l4',
      titleAr: 'المحافظة على اللياقة البدنية في الفضاء',
      titleEn: 'Keeping Fit in Space',
      imageSrc: '/images/passages/4p-u8-space-fitness.webp',
      imageAlt: 'رسم توضيحي لرائد فضاء يتدرب على جهاز مثبت داخل وحدة فضائية في حالة انعدام الوزن.',
    },
  ],

  'fifth-preparatory': [
    {
      id: '5p-u1-ramadan',
      lessonId: '5th-u1-l2',
      titleAr: 'رمضان في العراق',
      titleEn: 'Ramadan in Iraq',
      imageSrc: '/images/passages/5p-u1-ramadan.webp',
      imageAlt: 'رسم توضيحي لعائلة عراقية تجتمع حول مائدة الإفطار الرمضانية في أجواء دافئة.',
    },
    {
      id: '5p-u1-souq',
      lessonId: '5th-u1-l3',
      titleAr: 'سوق الشورجة',
      titleEn: 'Souq Al-Shorja',
      imageSrc: '/images/passages/5p-u1-souq.webp',
      imageAlt: 'رسم توضيحي لسوق الشورجة التراثي في بغداد بممراته المسقوفة وتوابل العطارين والسجاد.',
    },
    {
      id: '5p-u1-babylon',
      lessonId: '5th-u1-l8',
      titleAr: 'مهرجان بابل الدولي',
      titleEn: 'The Babylon International Festival',
      imageSrc: '/images/passages/5p-u1-babylon.webp',
      imageAlt: 'رسم توضيحي للمدرج البابلي التاريخي مضاءً خلال فعاليات مهرجان بابل الدولي للثقافة والفنون.',
    },
    {
      id: '5p-u2-digital-poverty',
      lessonId: '5th-u2-l3',
      titleAr: 'الفقر الرقمي: We Are Connected',
      titleEn: 'Rashid Zeid & Digital Poverty',
      imageSrc: '/images/passages/5p-u2-digital-poverty.webp',
      imageAlt: 'رسم توضيحي لمتطوع يصلح حواسيب محمولة لمساعدة الطلبة في التغلب على الفجوة الرقمية.',
    },
    {
      id: '5p-u2-web',
      lessonId: '5th-u2-l6',
      titleAr: 'اختراع شبكة الويب العالمية',
      titleEn: 'The Invention of the World Wide Web',
      imageSrc: '/images/passages/5p-u2-web.webp',
      imageAlt: 'رسم توضيحي لتطور شبكة الويب العالمية واتصال المعلومات عبر أجهزة الحاسوب والإنترنت.',
    },
    {
      id: '5p-u2-mobile',
      lessonId: '5th-u2-l8',
      titleAr: 'تاريخ الهواتف المحمولة',
      titleEn: 'The History of Mobile Phones',
      imageSrc: '/images/passages/5p-u2-mobile.webp',
      imageAlt: 'رسم توضيحي يوثق تطور الهواتف المحمولة من الأجهزة اللاسلكية المبكرة في السيارات إلى الهواتف الذكية.',
    },
    {
      id: '5p-u3-wildlife',
      lessonId: '5th-u3-l2',
      titleAr: 'ملفات حقائق الكائنات المهددة',
      titleEn: 'Endangered Wildlife Factfiles',
      imageSrc: '/images/passages/5p-u3-wildlife.webp',
      imageAlt: 'رسم توضيحي لحيوانات برية وبحرية مهددة بالانقراض في بيئاتها الطبيعية.',
    },
    {
      id: '5p-u3-ngos',
      lessonId: '5th-u3-l3',
      titleAr: 'المنظمات البيئية والتطوع',
      titleEn: 'Environmental NGOs & Eco-Volunteering',
      imageSrc: '/images/passages/5p-u3-ngos.webp',
      imageAlt: 'رسم توضيحي لمتطوعين بيئيين يزرعون الأشجار ويشاركون في حملات حماية الطبيعة.',
    },
    {
      id: '5p-u3-recycling',
      lessonId: '5th-u3-l5',
      titleAr: 'إعادة التدوير',
      titleEn: 'Recycling',
      imageSrc: '/images/passages/5p-u3-recycling.webp',
      imageAlt: 'رسم توضيحي لفرز المواد القابلة لإعادة التدوير مثل الورق والزجاج والمعادن للحفاظ على البيئة.',
    },
    {
      id: '5p-u3-basra-pollution',
      lessonId: '5th-u3-l6',
      titleAr: 'التلوث النفطي والغازي في البصرة',
      titleEn: 'Oil & Gas Pollution in Basra',
      imageSrc: '/images/passages/5p-u3-basra-pollution.webp',
      imageAlt: 'رسم توضيحي يوضح التلوث الصناعي والانبعاثات قرب المنشآت النفطية في البصرة وأثره البيئي.',
    },
    {
      id: '5p-u3-hybrid-cars',
      lessonId: '5th-u3-l8',
      titleAr: 'السيارات الهجينة',
      titleEn: 'Hybrid Cars & Terry’s Interview',
      imageSrc: '/images/passages/5p-u3-hybrid-cars.webp',
      imageAlt: 'رسم توضيحي لسيارة هجينة صديقة للبيئة تجمع بين المحرك الكهربائي وتقليل الانبعاثات.',
    },
    {
      id: '5p-u3-oryx',
      lessonId: '5th-u3-l9',
      titleAr: 'عودة المها العربي',
      titleEn: 'The Oryx Is Back',
      imageSrc: '/images/passages/5p-u3-oryx.webp',
      imageAlt: 'رسم توضيحي لقطيع من المها العربي يعود للحياة في محمية صحراوية عربية.',
    },
    {
      id: '5p-u4-bakkar',
      lessonId: '5th-u4-l1',
      titleAr: 'كارتون بكار والمخرجة منى أبو النصر',
      titleEn: 'Bakkar & Animator Mona Abu El Nasr',
      imageSrc: '/images/passages/5p-u4-bakkar.webp',
      imageAlt: 'رسم توضيحي لاستوديو رسوم متحركة عربي يستلهم التراث النوبي وشخصيات الأطفال.',
    },
    {
      id: '5p-u5-mike-green',
      lessonId: '5th-u5-l9',
      titleAr: 'رسالة شكوى مايك غرين',
      titleEn: 'Mike Green’s Letter of Complaint',
      imageSrc: '/images/passages/5p-u5-mike-green.webp',
      imageAlt: 'رسم توضيحي لمسافر يكتب رسالة شكوى في غرفة فندق تفتقد المرافق السياحية المعلن عنها.',
    },
    {
      id: '5p-u6-manchester-fire',
      lessonId: '5th-u6-l2',
      titleAr: 'حريق شارع كوين في مانشستر',
      titleEn: 'Manchester Queen Street Fire',
      imageSrc: '/images/passages/5p-u6-manchester-fire.webp',
      imageAlt: 'رسم توضيحي لخبر صحفي يوثق تدخل رجال الإطفاء في حريق شارع كوين بمدينة مانشستر.',
    },
    {
      id: '5p-u6-spanish-captain',
      lessonId: '5th-u6-l5',
      titleAr: 'نقد فيلم القبطان الإسباني',
      titleEn: 'The Spanish Captain: Film Review',
      imageSrc: '/images/passages/5p-u6-spanish-captain.webp',
      imageAlt: 'رسم توضيحي لسفينة شراعية تاريخية تبحر في المحيط يمثل أجواء فيلم القبطان الإسباني.',
    },
    {
      id: '5p-u6-news',
      lessonId: '5th-u6-l7',
      titleAr: 'أربعة أخبار صحفية غريبة',
      titleEn: 'Four Bizarre News Stories',
      imageSrc: '/images/passages/5p-u6-news.webp',
      imageAlt: 'رسم توضيحي مركب بأسلوب صحفي يجمع حوادث يومية طريفة وغريبة من أخبار الصحف.',
    },
    {
      id: '5p-u6-satellite-tv',
      lessonId: '5th-u6-l9',
      titleAr: 'تاريخ البث الفضائي',
      titleEn: 'The Evolution of Satellite Television',
      imageSrc: '/images/passages/5p-u6-satellite-tv.webp',
      imageAlt: 'رسم توضيحي لأطباق استقبال البث الفضائي وإشارات الأقمار الصناعية فوق أسطح المنازل.',
    },
    {
      id: '5p-u7-harrods',
      lessonId: '5th-u7-l8',
      titleAr: 'تاريخ متجر هارودز',
      titleEn: 'The History of Harrods',
      imageSrc: '/images/passages/5p-u7-harrods.webp',
      imageAlt: 'رسم توضيحي لواجهة متجر هارودز التاريخي الكلاسيكي في وسط لندن.',
    },
    {
      id: '5p-u8-boa',
      lessonId: '5th-u8-l3',
      titleAr: 'القبض على الأصلة العاصرة في لندن',
      titleEn: 'Caught at Last! The 3-Metre Boa Constrictor',
      imageSrc: '/images/passages/5p-u8-boa.webp',
      imageAlt: 'رسم توضيحي لمختصي حماية الحيوانات أثناء التعامل مع أفعى عاصرة في بناية سكنية بلندن.',
    },
  ],

  'sixth-preparatory': [
    {
      id: '6p-u1-ammar',
      lessonId: 'u1-l3',
      titleAr: 'عمار وتقنية الهيكل الخارجي',
      titleEn: "Ammar's Story & the Exoskeleton",
      sourcePages: 'ص 10 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u1-ammar.webp',
      imageAlt: 'رسم توضيحي للشاب عمار وهو يقف ويسير مستخدماً جهاز الهيكل الخارجي الطبي الداعم.',
    },
    {
      id: '6p-u1-diet',
      lessonId: 'u1-l7',
      titleAr: 'لنبدأ بالنظام الغذائي',
      titleEn: "Let's Start with Diet",
      sourcePages: 'ص 25 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u1-diet.webp',
      imageAlt: 'رسم توضيحي يقارن بين الأطعمة الصحية والنظام الغذائي غير المتوازن لصحة الإنسان.',
    },
    {
      id: '6p-u1-najla',
      lessonId: 'u1-l9',
      titleAr: 'نجلة عماد لفتة',
      titleEn: 'Najla Imad Lafta',
      sourcePages: 'ص 27–28 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u1-najla.webp',
      imageAlt: 'رسم توضيحي للاعبة تنس طاولة بارالمبية عراقية تتنافس بعزيمة في صالة رياضية دولية.',
    },
    {
      id: '6p-u2-police',
      lessonId: 'u2-l2',
      titleAr: 'واجبات ضابط الشرطة',
      titleEn: 'Police Officer Duties',
      sourcePages: 'ص 30–31 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u2-police.webp',
      imageAlt: 'رسم توضيحي لضابط شرطة ينظم حركة السير ويساعد المواطنين في الحفاظ على أمن الطريق.',
    },
    {
      id: '6p-u2-home-safety',
      lessonId: 'u2-l7',
      titleAr: 'كتيب سلامة المنازل',
      titleEn: 'Home Safety Brochure',
      sourcePages: 'ص 49 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u2-home-safety.webp',
      imageAlt: 'رسم توضيحي يبين إجراءات تأمين الأبواب والأقفال والنوافذ لحماية المنزل.',
    },
    {
      id: '6p-u2-radar',
      lessonId: 'u2-l9',
      titleAr: 'مسدس الرادار لقياس السرعة',
      titleEn: 'Radar Speed Gun',
      sourcePages: 'ص 51 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u2-radar.webp',
      imageAlt: 'رسم توضيحي لضابط مرور يستخدم جهاز قياس السرعة بالرادار لرصد السيارات المسرعة.',
    },
    {
      id: '6p-u3-samira',
      lessonId: 'u3-l10',
      titleAr: 'سميرة المحمود: المترجمة الفورية',
      titleEn: 'Samira Al Mahmoud: Conference Interpreter',
      sourcePages: 'ص 74–75 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u3-samira.webp',
      imageAlt: 'رسم توضيحي للمترجمة الفورية سميرة المحمود داخل مقصورة الترجمة الزجاجية في مؤتمر دولي.',
    },
    {
      id: '6p-u4-rashid-rana',
      lessonId: 'u4-l1',
      titleAr: 'شركة راشد ورنا للأزياء',
      titleEn: 'Rashid & Rana Designs',
      sourcePages: 'كتاب الطالب ص 42',
      imageSrc: '/images/passages/6p-u4-rashid-rana.webp',
      imageAlt: 'رسم توضيحي لورشة تصميم أزياء حديثة يعمل فيها مصممان على الأقمشة والملابس.',
    },
    {
      id: '6p-u4-fitness-tech',
      lessonId: 'u4-l2',
      titleAr: 'تقنيات اللياقة البدنية',
      titleEn: 'Fitness Technology & Smart Gyms',
      sourcePages: 'ص 80 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u4-fitness-tech.webp',
      imageAlt: 'رسم توضيحي للتدريب الرياضي المنزلي مع مرآة ذكية ودراجة تمرين حديثة.',
    },
    {
      id: '6p-u5-kerkennah',
      lessonId: 'u5-l6',
      titleAr: 'رحلة جزر قرقنة التونسية',
      titleEn: 'Kerkennah Islands Holiday',
      sourcePages: 'ص 99 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u5-kerkennah.webp',
      imageAlt: 'رسم توضيحي لسواحل جزر قرقنة التونسية وفندقها الهادئ وقوارب الصيد التقليدية.',
    },
    {
      id: '6p-u5-holidays',
      lessonId: 'u5-l9',
      titleAr: 'لماذا العطل مهمة؟',
      titleEn: 'Why Are Holidays So Important?',
      sourcePages: 'ص 104 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u5-holidays.webp',
      imageAlt: 'رسم توضيحي لعائلة تقضي وقتاً هادئاً في نزهة ساحلية بعيداً عن ضغوط العمل اليومية.',
    },
    {
      id: '6p-u6-banker',
      lessonId: 'u6-l3',
      titleAr: 'مقابلة موظف البنك',
      titleEn: 'Meet a Banker',
      sourcePages: 'ص 112–113 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u6-banker.webp',
      imageAlt: 'رسم توضيحي لموظف بنك يشرح خطط القروض والمشاريع الصغيرة لرائدة أعمال في مكتبه.',
    },
    {
      id: '6p-u6-making-money',
      lessonId: 'u6-l9',
      titleAr: 'كسب المال واستثماره',
      titleEn: 'Making Money & Investments',
      sourcePages: 'ص 121–122 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u6-making-money.webp',
      imageAlt: 'رسم توضيحي رمزي للادخار والاستثمار العقاري وتنمية المدخرات للمستقبل.',
    },
    {
      id: '6p-u7-work-today',
      lessonId: 'u7-l3',
      titleAr: 'العمل اليوم',
      titleEn: 'Work Today',
      sourcePages: 'ص 130 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u7-work-today.webp',
      imageAlt: 'رسم توضيحي لمختبر حاسوب مسائي يتدرب فيه متعلمون على مهارات الحاسوب وتصميم المواقع.',
    },
    {
      id: '6p-u7-library',
      lessonId: 'u7-l9',
      titleAr: 'استخدام المكتبة',
      titleEn: 'Using the Library',
      sourcePages: 'ص 135–136 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u7-library.webp',
      imageAlt: 'رسم توضيحي لقاعة المكتبة المركزية حيث يبحث قارئ بين كتب المهن واللغات والصحف.',
    },
    {
      id: '6p-u8-wind-power',
      lessonId: 'u8-l3',
      titleAr: 'مصدر متجدد: طاقة الرياح',
      titleEn: 'A Renewable Resource: Wind Power',
      sourcePages: 'ص 145 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u8-wind-power.webp',
      imageAlt: 'رسم توضيحي لتوربينات طاقة الرياح النظيفة فوق حقول زراعية خضراء مطلة على الساحل.',
    },
    {
      id: '6p-u8-angry-reader',
      lessonId: 'u8-l3',
      titleAr: 'رسالة قارئ غاضب',
      titleEn: 'An Angry Reader',
      sourcePages: 'ص 146 من ملزمة السادس 2027',
      imageSrc: '/images/passages/6p-u8-angry-reader.webp',
      imageAlt: 'رسم توضيحي لصياد ساحلي يقف قرب قاربه الصغير وينظر بقلق نحو توربينات الرياح البحرية.',
    },
    {
      id: '6p-u8-euphrates',
      lessonId: 'u8-l4',
      titleAr: 'نهر الفرات',
      titleEn: 'The Euphrates River',
      sourcePages: 'كتاب الطالب ص 87',
      imageSrc: '/images/passages/6p-u8-euphrates.webp',
      imageAlt: 'رسم توضيحي لمنظر طبيعي لنهر الفرات وهو يجري عبر الوديان والسهول قرب الآثار القديمة والسد.',
    },
  ],
};

export function getBookPassageCatalog(grade: EducationalGrade): BookPassageCatalogItem[] {
  return BOOK_PASSAGES_BY_GRADE[grade] || [];
}

export function getBookPassageById(passageId: string): BookPassageCatalogItem | undefined {
  for (const grade of Object.keys(BOOK_PASSAGES_BY_GRADE) as EducationalGrade[]) {
    const found = BOOK_PASSAGES_BY_GRADE[grade].find((item) => item.id === passageId);
    if (found) return found;
  }
  return undefined;
}

export function getBookPassagesForLesson(grade: EducationalGrade, lessonId: string): BookPassageCatalogItem[] {
  return getBookPassageCatalog(grade).filter((item) => item.lessonId === lessonId);
}

export function resolveBookPassages(grade: EducationalGrade, units: Unit[]): ResolvedBookPassage[] {
  const lessonsById = new Map<string, { unit: Unit; lesson: Lesson }>();
  for (const unit of units) {
    for (const lesson of unit.lessons) {
      lessonsById.set(lesson.id, { unit, lesson });
    }
  }

  return getBookPassageCatalog(grade).flatMap((item) => {
    const found = lessonsById.get(item.lessonId);
    return found ? [{ ...item, ...found }] : [];
  });
}

export function isBookPassageLesson(grade: EducationalGrade, lessonId: string): boolean {
  return getBookPassageCatalog(grade).some((item) => item.lessonId === lessonId);
}
