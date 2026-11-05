import { EssayItem } from '../types';

export const ESSAYS_DATA: EssayItem[] = [
  // ================= UNIT 1 =================
  {
    id: "essay-u1",
    unitId: 1,
    titleAr: "إعلانات السجائر يجب أن تكون غير قانونية",
    titleEn: "Cigarette Advertising Should Be Illegal",
    ministerialWeight: "20 درجة وزارية - السؤال الخامس فرع A/B (مكرر بكثرة)",
    paragraphsEn: [
      "Smoking is one of the most dangerous habits that damages human health severely. Every year, millions of people worldwide die from smoking-related illnesses such as lung cancer, heart attacks, and respiratory diseases. Furthermore, passive smoking causes terrible harm to non-smokers, especially innocent children.",
      "Cigarette advertisements are extremely deceptive and attractive. They usually show successful, attractive, and famous people smoking in luxurious and heroic settings. This gives teenagers the false impression that smoking is a true symbol of maturity, freedom, and coolness. Consequently, many school students start smoking early and become addicted easily.",
      "In conclusion, governments should ban all forms of cigarette advertising on television, social media, streets, and magazines. Health campaigns must replace these advertisements to educate the youth about the deadly dangers of tobacco. In this way, we can protect future generations and build a healthier society."
    ],
    paragraphsAr: [
      "يعد التدخين واحداً من أخطر العادات التي تدمر صحة الإنسان بشدة. في كل عام، يموت ملايين الأشخاص حول العالم من أمراض مرتبطة بالتدخين مثل سرطان الرئة والنوبات القلبية وأمراض الجهاز التنفسي. علاوة على ذلك، يسبب التدخين السلبي ضرراً مروعاً لغير المدخنين، وبخاصة الأطفال الأبرياء.",
      "إن إعلانات السجائر مضللة وجذابة للغاية. فهي تُظهر في العادة أشخاصاً ناجحين وجذابين ومشاهير يدخنون في أجواء مترفة وبطولية. يعطي هذا انطباعاً زائفاً للمراهقين الصغار بأن التدخين رمز حقيقي للنضج والحرية والجاذبية. ونتيجة لذلك، يبدأ العديد من طلاب المدارس التدخين مبكراً ويصبحون مدمنين عليه بسهولة.",
      "ختاماً، يجب على الحكومات حظر جميع أشكال إعلانات السجائر في التلفاز ووسائل التواصل الاجتماعي والشوارع والمجلات. ويجب استبدال هذه الإعلانات بحملات توعية صحية لتثقيف الشباب حول الأخطار المميتة للتبغ. وبهذه الطريقة، يمكننا حماية الأجيال القادمة وبناء مجتمع أكثر صحة."
    ],
    keywords: [
      { word: "Dangerous habit", meaning: "عادة خطيرة" },
      { word: "Lung cancer", meaning: "سرطان الرئة" },
      { word: "Passive smoking", meaning: "التدخين السلبي" },
      { word: "Deceptive & attractive", meaning: "مضللة وجذابة" },
      { word: "Addicted easily", meaning: "مدمنون بسهولة" },
      { word: "Ban all forms", meaning: "حظر جميع الأشكال" }
    ],
    goldenTips: [
      "اكتب العنوان في منتصف السطر الأول بخط واضح مع وضع خط تحته.",
      "اترك مسافة بادئة لكلمة واحدة (Indentation) في بداية كل فقرة.",
      "قسّم الإنشاء إلى 3 فقرات واضحة: مقدمة عن الخطر، متن عن الخداع الإعلاني، وخاتمة بالحلول.",
      "احرص على ألا يقل عدد الكلمات عن 100 إلى 120 كلمة لنيل الدرجة الكاملة."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Smoking is a very _____ habit that damages people's lungs.",
        missingWord: "dangerous",
        options: ["dangerous", "healthy", "pleasant", "useful"]
      },
      {
        textWithBlanks: "Passive smoking harms children and _____ people.",
        missingWord: "innocent",
        options: ["innocent", "guilty", "careless", "cruel"]
      },
      {
        textWithBlanks: "Governments must _____ all cigarette advertisements.",
        missingWord: "ban",
        options: ["ban", "allow", "support", "encourage"]
      }
    ]
  },

  // ================= UNIT 2 =================
  {
    id: "essay-u2",
    unitId: 2,
    titleAr: "نصائح للحصول على وظيفة حارس أمني",
    titleEn: "Advice on How to Get a Job (Security Guard)",
    ministerialWeight: "20 درجة وزارية - صيغة رسالة نصائح وزارية مكررة",
    paragraphsEn: [
      "Dear Ahmed, I was delighted to hear that you have applied for a job as a security guard at a large company. This job requires vigilance, fitness, and reliability, so here are some practical tips to help you pass the interview successfully.",
      "First of all, you should arrive fifteen minutes before the scheduled time, dressed smartly in a formal suit. During the interview, you must listen carefully to the questions, look confident, and make steady eye contact with the interviewers. Emphasize that you are physically fit, possess a clean driving licence, and can handle emergencies calmly under pressure.",
      "Finally, remember to be polite, thank the interviewers for their time, and show genuine enthusiasm for maintaining security. If you follow these instructions, I am confident you will get the job. Good luck! Best wishes, Ali."
    ],
    paragraphsAr: [
      "عزيزي أحمد، لقد سررت كثيراً بسماع أنك تقدمت لوظيفة حارس أمني في شركة كبرى. تتطلب هذه الوظيفة اليقظة واللياقة البدنية والاعتمادية، لذا إليك بعض النصائح العملية لمساعدتك على اجتياز المقابلة بنجاح.",
      "أولاً وقبل كل شيء، يجب أن تصل قبل الموعد المحدد بخمس عشرة دقيقة مرتدياً زياً رسمياً أنيقاً. خلال المقابلة، يجب أن تصغي بعناية للأسئلة وتبدو واثقاً من نفسك وتتواصل بصرياً بثبات مع المقابلين. أكد على أنك لائق بدنياً وتمتلك رخصة قيادة نظيفة وتستطيع التعامل مع الطوارئ بهدوء تحت الضغط.",
      "أخيراً، تذكر أن تكون مهذباً وتشكر لجنة المقابلة على وقتهم وتظهر حماساً حقيقياً للحفاظ على الأمن. إذا اتبعت هذه الإرشادات، فأنا واثق بأنك ستحصل على الوظيفة. حظاً موفقاً! مع أطيب التمنيات، علي."
    ],
    keywords: [
      { word: "Security guard", meaning: "حارس أمني" },
      { word: "Vigilance & fitness", meaning: "اليقظة واللياقة" },
      { word: "Scheduled time", meaning: "الموعد المحدد" },
      { word: "Formal suit", meaning: "بدلة رسمية" },
      { word: "Handle emergencies", meaning: "التعامل مع الطوارئ" },
      { word: "Under pressure", meaning: "تحت الضغط" }
    ],
    goldenTips: [
      "هذا الإنشاء بصيغة رسالة نصائح (Advice Letter)، ابدأ بـ Dear [Name] واختم بـ Best wishes متبوعة باسمك.",
      "استخدم أفعال الإلزام والنصيحة التي تعلمتها في قواعد الوحدة الثانية: (You should, You must, You have to).",
      "أظهر تسلسلاً منطقياً في النصائح باستخدام روابط: (First of all, Furthermore, Finally)."
    ],
    clozeSentences: [
      {
        textWithBlanks: "You should arrive on time dressed in a _____ suit.",
        missingWord: "formal",
        options: ["formal", "dirty", "casual", "torn"]
      },
      {
        textWithBlanks: "A security guard must be physically _____.",
        missingWord: "fit",
        options: ["fit", "weak", "lazy", "sick"]
      }
    ]
  },

  // ================= UNIT 3 =================
  {
    id: "essay-u3",
    unitId: 3,
    titleAr: "فوائد دراسة اللغة الإنجليزية في بريطانيا",
    titleEn: "The Advantages of Studying English in the UK",
    ministerialWeight: "20 درجة وزارية - شائع جداً في الدور الأول",
    paragraphsEn: [
      "Studying English in the United Kingdom is a golden opportunity for any student seeking true fluency. Britain is the birthplace of the English language, making it the ideal environment to immerse oneself in genuine linguistic culture.",
      "The greatest advantage is that you hear and speak English all day long. From buying groceries to conversing with native speakers on trains and buses, everyday life becomes a continuous classroom. Moreover, staying with an English host family provides invaluable exposure to native pronunciation, idioms, and domestic customs, helping you overcome shyness rapidly.",
      "In addition, British language schools offer world-class certified teachers and modern communicative methodologies. After class, students can visit museums, historical castles, and libraries, combining rigorous academic progress with unforgettable cultural adventures. Therefore, studying in Britain is undoubtedly a transformative investment in your career."
    ],
    paragraphsAr: [
      "إن دراسة اللغة الإنجليزية في المملكة المتحدة فرصة ذهبية لأي طالب يبحث عن الطلاقة الحقيقية. فبريطانيا هي مهد اللغة الإنجليزية، مما يجعلها البيئة المثالية للانغماس في ثقافة لغوية أصيلة.",
      "الميزة الكبرى تكمن في أنك تسمع وتتحدث الإنجليزية طوال اليوم. فمن شراء البقالة إلى التحدث مع المتحدثين الأصليين في القطارات والحافلات، تصبح الحياة اليومية فصلاً دراسياً متواصلاً. فضلاً عن ذلك، فإن الإقامة مع عائلة بريطانية مضيفة تمنحك احتكاكاً لا يقدر بثمن بالنطق الأصلي والمصطلحات والتقاليد المنزلية، مما يساعدك على كسر حاجز الخجل بسرعة.",
      "بالإضافة إلى ذلك، توفر معاهد اللغات البريطانية معلمين معتمدين على مستوى عالمي وطرائق تدريس تواصلية حديثة. وبعد الدروس، يمكن للطلاب زيارة المتاحف والقلاع التاريخية والمكتبات، ليمزجوا بين التقدم الأكاديمي الرصين والمغامرات الثقافية التي لا تُنسى. لذا، فإن الدراسة في بريطانيا استثمار حقيقي ومغير لمستقبلك المهني."
    ],
    keywords: [
      { word: "Golden opportunity", meaning: "فرصة ذهبية" },
      { word: "Fluency", meaning: "الطلاقة" },
      { word: "Native speakers", meaning: "المتحدثون الأصليون" },
      { word: "Host family", meaning: "عائلة مضيفة" },
      { word: "Native pronunciation", meaning: "النطق الأصلي" },
      { word: "Overcome shyness", meaning: "التغلب على الخجل" }
    ],
    goldenTips: [
      "ركز على فوائد الإقامة مع عائلة إنجليزية مضيفة (Host family).",
      "استخدم روابط ربط ثرية مثل: Moreover, In addition, Consequently, Therefore.",
      "احرص على الإملاء الصحيح لكلمات شائعة مثل: Language, Opportunity, British, Environment."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Living with an English host family helps you hear native _____.",
        missingWord: "pronunciation",
        options: ["pronunciation", "silence", "noise", "shouting"]
      },
      {
        textWithBlanks: "Studying abroad helps students overcome their _____.",
        missingWord: "shyness",
        options: ["shyness", "happiness", "health", "cleverness"]
      }
    ]
  },

  // ================= UNIT 4 (ESSAY A) =================
  {
    id: "essay-u4-business",
    unitId: 4,
    titleAr: "تأسيس شركة أو مشروع تجاري جديد",
    titleEn: "Setting Up a New Business / Company",
    ministerialWeight: "20 درجة وزارية - إنشاء الوحدة الرابعة الأساسي (المراجعة الأولى)",
    paragraphsEn: [
      "Starting a new business is an exciting journey that requires careful planning, dedication, and calculated courage. Last year, my friend Zaid and I decided to establish a small company in Baghdad specializing in organic food and fresh natural juices.",
      "First, we conducted comprehensive market research to understand the needs of local consumers. We noticed a rising interest in healthy eating habits. To secure capital, we applied for an entrepreneurial loan from a local bank and prepared a strict feasibility study. We then rented a shop in a bustling commercial area, purchased modern refrigeration equipment, and launched an energetic social media campaign to attract customers.",
      "At first, managing the daily operations was demanding, but our perseverance paid off. Within six months, the company became profitable and reputable. In conclusion, launching a business involves risks, but with passion, thorough research, and financial discipline, success is attainable."
    ],
    paragraphsAr: [
      "يعد تأسيس مشروع تجاري جديد رحلة مثيرة تتطلب تخطيطاً دقيقاً وتفانياً وشجاعة مدروسة. في العام الماضي، قررت أنا وصديقي زيد تأسيس شركة صغيرة في بغداد متخصصة في الأغذية العضوية والعصائر الطبيعية الطازجة.",
      "أولاً، أجرينا دراسة سوقية شاملة لفهم احتياجات المستهلكين المحليين. لاحظنا اهتماماً متزايداً بعادات الأكل الصحي. ولتأمين رأس المال، تقدمنا بطلب للحصول على قرض ريادي من مصرف محلي وأعددنا دراسة جدوى دقيقة. بعد ذلك، استأجرنا محلاً في منطقة تجارية نابضة بالحياة، واشترينا معدات تبريد حديثة، وأطلقنا حملة تسويقية نشطة عبر وسائل التواصل الاجتماعي لجذب الزبائن.",
      "في البداية، كانت إدارة العمليات اليومية شاقة، لكن إصرارنا أتى ثماره. وفي غضون ستة أشهر، أصبحت الشركة مربحة وذات سمعة طيبة. ختاماً، ينطوي إطلاق عمل تجاري على مخاطر، ولكن مع الشغف والبحث العميق والانضباط المالي، يصبح النجاح حقيقة ممكنة."
    ],
    keywords: [
      { word: "Market research", meaning: "بحث السوق" },
      { word: "Feasibility study", meaning: "دراسة جدوى" },
      { word: "Entrepreneurial loan", meaning: "قرض ريادي" },
      { word: "Commercial area", meaning: "منطقة تجارية" },
      { word: "Perseverance", meaning: "المثابرة والإصرار" },
      { word: "Profitable & reputable", meaning: "مربحة وذات سمعة طيبة" }
    ],
    goldenTips: [
      "استخدم تسلسل أزمنة الماضي لسرد قصة تأسيس الشركة (decided, conducted, rented, launched).",
      "استخدم مصطلحات إدارة الأعمال الأساسية: market research, loan, feasibility study, profit.",
      "احرص على تنظيم الإنشاء في ثلاث فقرات: الفكرة، خطوات التنفيذ، والنتيجة مع العبرة."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Before starting the company, we conducted thorough market _____.",
        missingWord: "research",
        options: ["research", "damage", "war", "pollution"]
      },
      {
        textWithBlanks: "With hard work and discipline, our new company became _____.",
        missingWord: "profitable",
        options: ["profitable", "broken", "silent", "lazy"]
      }
    ]
  },

  // ================= UNIT 4 (ESSAY B) =================
  {
    id: "essay-u4-badday",
    unitId: 4,
    titleAr: "يوم سيء قضيته خارج المنزل",
    titleEn: "A Really Bad Day Out",
    ministerialWeight: "20 درجة وزارية - موضوع سردي مكرر في مراجعة الفصل الأول",
    paragraphsEn: [
      "We all experience days when everything seems to go wrong, and last Friday was certainly the worst day out I have ever had. My friends and I had planned a peaceful fishing and barbecue picnic near Lake Habbaniyah, but it turned into an utter disaster.",
      "The trouble began early in the morning when my alarm failed to ring, causing us to depart two hours late. On the highway, our car suddenly suffered a flat tire, and we spent an exhausting hour fixing it under the blazing sun. When we finally arrived at the lake, dark stormy clouds gathered unexpectedly, and violent rain drenched us and ruined all our food and equipment.",
      "To make matters worse, as we were rushing back to the car, my friend dropped his brand-new smartphone into the mud. Soaked, freezing, and disappointed, we drove back home with empty stomachs. That day taught us that meticulous preparation and checking weather forecasts are essential before any outdoor adventure."
    ],
    paragraphsAr: [
      "يمر بنا جميعاً أيام يبدو فيها أن كل شيء يسير على نحو خاطئ، وبالتأكيد كانت الجمعة الماضية أسوأ يوم قضيته خارج المنزل على الإطلاق. كنت قد خططت أنا وأصدقائي لنزهة هادئة لصيد الأسماك والشواء بالقرب من بحيرة الحبانية، لكنها تحولت إلى كارثة تامة.",
      "بدأت المتاعب في الصباح الباكر عندما تعطل منبهي، مما جعلنا نتأخر ساعتين عن موعد الانطلاق. وعلى الطريق السريع، تعرض إطار سيارتنا لثقب مفاجئ، وقضينا ساعة مرهقة في استبداله تحت وطأة الشمس الحارقة. وعندما وصلنا أخيراً إلى البحيرة، تجمعت غيوم عاصفة داكنة على نحو غير متوقع، وهطلت أمطار غزيرة بللتنا وأتلفت جميع طعامنا ومعداتنا.",
      "ولمضاعفة الطين بلة، وأثناء هرولتنا عائدين إلى السيارة، سقط الهاتف الذكي الجديد لصديقي في الوحل. عدنا إلى منازلنا مبتلين، نرتجف من البرد ومحبطين وبطوننا خاوية. لقد علمنا ذلك اليوم أن التحضير الدقيق ومتابعة النشرة الجوية أمران جوهريان قبل أي نزهة خارجية."
    ],
    keywords: [
      { word: "Utter disaster", meaning: "كارثة تامة" },
      { word: "Flat tire", meaning: "إطار مثقوب / بنشر" },
      { word: "Blazing sun", meaning: "شمس حارقة" },
      { word: "Violent rain", meaning: "مطر غزير وعنيف" },
      { word: "Soaked & freezing", meaning: "مبتل بالكامل ويتجمد" },
      { word: "Weather forecast", meaning: "النشرة الجوية" }
    ],
    goldenTips: [
      "استخدم تعابير سردية تزيد من التشويق مثل: The trouble began, To make matters worse, Unexpectedly.",
      "حافظ على صيغة الماضي البسيط والماضي المستمر (We were rushing, clouds gathered).",
      "أنهِ الإنشاء بحكمة أو درس مستفاد في السطرين الأخيرين."
    ],
    clozeSentences: [
      {
        textWithBlanks: "On the highway, our car suffered a flat _____.",
        missingWord: "tire",
        options: ["tire", "window", "cloud", "ticket"]
      },
      {
        textWithBlanks: "Always check the weather _____ before planning an outdoor trip.",
        missingWord: "forecast",
        options: ["forecast", "menu", "homework", "receipt"]
      }
    ]
  },

  // ================= UNIT 5 (ESSAY A) =================
  {
    id: "essay-u5-holiday",
    unitId: 5,
    titleAr: "عطلة رائعة قضيتها",
    titleEn: "A Wonderful Holiday I Have Had",
    ministerialWeight: "20 درجة وزارية - من أكثر الإنشاءات مجيئاً بالامتحانات الوزارية",
    paragraphsEn: [
      "Last summer, I spent an unforgettable holiday in the northern city of Erbil with my family. The weather there was delightfully mild and refreshing, providing an invigorating escape from the scorching summer heat of central Iraq.",
      "We stayed at a comfortable hotel overlooking the historic Citadel of Erbil. During our trip, we visited spectacular waterfalls like Gali Ali Bag and Bekhal. The breathtaking scenery of towering green mountains and crystal-clear streams was truly mesmerizing. We also enjoyed delicious traditional Kurdish dishes, especially kebab and freshly baked bread, and the local people were exceptionally warm, welcoming, and hospitable.",
      "In the cool evenings, we strolled through vibrant traditional bazaars and purchased beautiful handcrafted souvenirs. It was indeed a magical vacation full of joy, serenity, and memorable moments. I genuinely hope to revisit this enchanting destination again soon."
    ],
    paragraphsAr: [
      "في الصيف الماضي، قضيت عطلة لا تُنسى في مدينة أربيل الشمالية مع عائلتي. كان الطقس هناك معتدلاً ومنعشاً بشكل رائع، مما وفر لنا ملاذاً ممتعاً من حرارة صيف وسط العراق اللاهبة.",
      "أقمنا في فندق مريح يطل على قلعة أربيل التاريخية. وخلال رحلتنا، قمنا بزيارة شلالات مذهلة مثل كلي علي بك وبيخال. كانت المناظر الخلابة للجبال الشاهقة الخضراء والجداول الرقراقة الصافية تسحر الألباب حقاً. استمتعنا أيضاً بالأطباق الكردية التقليدية اللذيذة، وبخاصة الكباب والخبز الطازج، وكان الأهالي في غاية الدفء والترحاب وكرم الضيافة.",
      "في الأمسيات اللطيفة، كنا نتجول في الأسواق الشعبية النابضة بالحياة ونشتري تذكارات يدوية جميلة. لقد كانت حقاً إجازة ساحرة مفعمة بالفرح والسكينة واللحظات الخالدة. آمل بصدق أن أزور هذه الوجهة الفاتنة مجدداً في القريب العاجل."
    ],
    keywords: [
      { word: "Unforgettable holiday", meaning: "عطلة لا تُنسى" },
      { word: "Historic citadel", meaning: "قلعة تاريخية" },
      { word: "Spectacular waterfalls", meaning: "شلالات مذهلة" },
      { word: "Breathtaking scenery", meaning: "مناظر تأسر الأنفاس" },
      { word: "Warm & hospitable", meaning: "ودودون وكرماء" },
      { word: "Handcrafted souvenirs", meaning: "تذكارات مصنوعة يدوياً" }
    ],
    goldenTips: [
      "استخدم صفات ثرية ومؤثرة ترفع التقييم مثل: breathtaking, spectacular, mesmerizing, hospitable.",
      "سرد العطلة يكون بالماضي البسيط: spent, stayed, visited, enjoyed, strolled.",
      "اذكر الأماكن والأنشطة والأطعمة لملء الكلمات المطلوبة بانسيابية."
    ],
    clozeSentences: [
      {
        textWithBlanks: "The scenery of the green mountains was _____ and mesmerizing.",
        missingWord: "breathtaking",
        options: ["breathtaking", "boring", "ugly", "dark"]
      },
      {
        textWithBlanks: "The local people were warm and _____ to all visitors.",
        missingWord: "hospitable",
        options: ["hospitable", "hostile", "rude", "cold"]
      }
    ]
  },

  // ================= UNIT 5 (ESSAY B) =================
  {
    id: "essay-u5-tourists",
    unitId: 5,
    titleAr: "نصائح للسياح والزوار في العراق",
    titleEn: "Advice to Tourists in Iraq",
    ministerialWeight: "20 درجة وزارية - موضوع وزاري شائع جداً في الدور الأول والثاني",
    paragraphsEn: [
      "Iraq is a country with a profound civilization spanning thousands of years, offering tourists an extraordinary blend of history, culture, and natural beauty. If you are planning to visit this fascinating country, here are some helpful recommendations to ensure an unforgettable trip.",
      "First, the best time to visit is during spring or autumn, when the climate is pleasantly temperate. You should definitely explore the ancient ruins of Babylon, the majestic Ziggurat of Ur, and the renowned National Museum in Baghdad. In the north, you will be amazed by the lush mountains and cascading waterfalls of Kurdistan, while in the south, taking a boat tour through the historic Mesopotamian Marshes (Al-Ahwar) is an absolute must.",
      "Furthermore, Iraqi cuisine is legendary for its generosity and rich flavours; make sure to taste grilled Masgouf fish and traditional Dolma. Iraqis are globally celebrated for their hospitality, so feel free to interact with locals. Dress modestly when visiting holy shrines, and always carry some local currency for traditional souqs."
    ],
    paragraphsAr: [
      "العراق بلد ذو حضارة ضاربة في القدم تمتد لآلاف السنين، ويقدم للسياح مزيجاً استثنائياً من التاريخ والثقافة والجمال الطبيعي. إذا كنت تخطط لزيارة هذا البلد الرائع، فإليك بعض التوصيات المفيدة لضمان رحلة لا تُنسى.",
      "أولاً، أفضل وقت للزيارة هو فصلا الربيع أو الخريف، حيث يكون المناخ معتدلاً ولطيفاً. ينبغي عليك بالتأكيد استكشاف آثار بابل العريقة، وزقورة أور المهيبة، والمتحف الوطني الشهير في بغداد. وفي الشمال، ستبهرك الجبال الخضراء الخلابة والشلالات المتدفقة في كوردستان، بينما في الجنوب، يعد ركوب الزورق عبر أهوار بلاد الرافدين التاريخية تجربة لا بد منها إطلاقاً.",
      "علاوة على ذلك، يشتهر المطبخ العراقي عالمياً بكرمه ونكهاته الغنية؛ احرص على تذوق سمك المسكوف المشوي والدولمة التقليدية. يُعرف العراقيون بحسن ضيافتهم وترحابهم، لذا لا تتردد في التواصل مع الأهالي. واحرص على ارتداء ملابس محتشمة عند زيارة العتبات المقدسة، واحتفظ دائماً بنقد محلي للتسوق في الأسواق الشعبية."
    ],
    keywords: [
      { word: "Profound civilization", meaning: "حضارة عريقة وضاربة بالقدم" },
      { word: "Ancient ruins", meaning: "آثار قديمة" },
      { word: "Cascading waterfalls", meaning: "شلالات متدفقة" },
      { word: "Mesopotamian Marshes", meaning: "أهوار بلاد الرافدين" },
      { word: "Legendary cuisine", meaning: "مطبخ أسطوري / عريق" },
      { word: "Generosity & hospitality", meaning: "الكرم وحسن الضيافة" }
    ],
    goldenTips: [
      "استخدم صيغ النصيحة والتوصية: You should explore, Make sure to taste, An absolute must.",
      "اذكر معالم متنوعة تمثل العراق جغرافياً: بابل، أور، بغداد، كردستان، والأهوار الجنوبية.",
      "احرص على الإملاء الصحيح لأسماء المعالم مثل: Babylon, Marshes, Shrines, Cuisine."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Taking a boat trip in the southern _____ is an unforgettable adventure.",
        missingWord: "Marshes",
        options: ["Marshes", "Offices", "Airports", "Hospitals"]
      },
      {
        textWithBlanks: "Iraqis are world-famous for their warmth and _____.",
        missingWord: "hospitality",
        options: ["hospitality", "rudeness", "greed", "anger"]
      }
    ]
  },

  // ================= UNIT 6 =================
  {
    id: "essay-u6-bank",
    unitId: 6,
    titleAr: "رسالة شكوى إلى المصرف بشأن سحب خاطئ",
    titleEn: "A Letter of Complaint to a Bank",
    ministerialWeight: "20 درجة وزارية - الإنشاء الرسمي الحصري للوحدة السادسة (العمل المصرفي)",
    paragraphsEn: [
      "Dear Sir / Madam, I am writing this letter to lodge a formal complaint regarding a serious error that appeared on my monthly bank statement for the month of October, account number 4829103.",
      "Upon reviewing the latest statement, I was astonished to discover a debit transaction of 500,000 Iraqi Dinars recorded on the 14th of October at an ATM located on Al-Mansour Street. I would like to clarify that I was travelling outside Baghdad on that specific date and did not carry out any withdrawal. Moreover, my debit card has been continuously in my personal possession and was never misplaced or shared.",
      "I have been a loyal and satisfied client of your reputable bank for over five years, and this is the first time I encounter such an issue. I kindly request you to inspect the ATM camera footage, investigate this unauthorized transaction immediately, and refund the amount to my balance. I look forward to hearing from you promptly. Yours faithfully, Mustafa Kareem."
    ],
    paragraphsAr: [
      "سيدي العزيز / سيدتي العزيزة، أكتب هذه الرسالة لأقدم شكوى رسمية بشأن خطأ فادح ظهر في كشف حسابي المصرفي الشهري لشهر تشرين الأول، للحساب رقم 4829103.",
      "عند مراجعة كشف الحساب الأخير، فوجئت باكتشاف عملية سحب مالي بمبلغ 500,000 دينار عراقي مسجلة بتاريخ 14 تشرين الأول من صراف آلي يقع في شارع المنصور. أود أن أوضح أنني كنت مسافراً خارج بغداد في ذلك التاريخ المحدد ولم أقم بإجراء أي عملية سحب على الإطلاق. فضلاً عن ذلك، كانت بطاقتي المصرفية في حوزتي الشخصية باستمرار ولم تفقد أو تشارك مع أي شخص.",
      "لقد كنت عميلاً مخلصاً وراضياً لمصرفكم الموقر لأكثر من خمس سنوات، وهذه أول مرة أواجه فيها مثل هذا الخلل. أطلب منكم بلطف فحص تسجيلات كاميرات الصراف الآلي، والتحقيق في هذه المعاملة غير المصرح بها على الفور، وإعادة المبلغ المسحوب إلى رصيدي. أتطلع لتلقي ردكم في أقرب وقت. المخلص لكم، مصطفى كريم."
    ],
    keywords: [
      { word: "Formal complaint", meaning: "شكوى رسمية" },
      { word: "Bank statement", meaning: "كشف حساب مصرفي" },
      { word: "Debit transaction", meaning: "عملية سحب / خصم مالي" },
      { word: "ATM machine", meaning: "جهاز الصراف الآلي" },
      { word: "Unauthorized transaction", meaning: "معاملة غير مصرح بها" },
      { word: "Refund the amount", meaning: "استرداد / إرجاع المبلغ" }
    ],
    goldenTips: [
      "هذا الإنشاء رسالة رسمية (Formal Letter): ابدأ بـ Dear Sir / Madam واختم حصراً بـ Yours faithfully (لأنك لا تعرف اسم المدير شخصياً).",
      "استخدم مصطلحات الوحدة السادسة المصرفية: bank statement, debit transaction, ATM, balance, refund.",
      "اذكر رقم حساب وهمي واضح وتاريخ المشكلة وتفاصيل السحب لإعطاء الرسالة طابعاً رسمياً مقنعاً."
    ],
    clozeSentences: [
      {
        textWithBlanks: "I noticed an incorrect debit transaction on my bank _____.",
        missingWord: "statement",
        options: ["statement", "ticket", "homework", "passport"]
      },
      {
        textWithBlanks: "I request the bank manager to _____ the deducted money immediately.",
        missingWord: "refund",
        options: ["refund", "steal", "hide", "burn"]
      }
    ]
  },

  // ================= UNIT 7 =================
  {
    id: "essay-u7-studywork",
    unitId: 7,
    titleAr: "الدراسة أثناء العمل تستحق العناء",
    titleEn: "Studying While Working is Worthwhile",
    ministerialWeight: "20 درجة وزارية - الإنشاء المقرّر للوحدة السابعة (التعليم والعمل)",
    paragraphsEn: [
      "In our rapidly modernizing world, competition in the labour market is fiercer than ever. Consequently, an increasing number of individuals choose to pursue academic degrees or vocational qualifications while maintaining a job. Although balancing employment and education is undeniably exhausting, it is undoubtedly a worthwhile endeavor that yields long-term rewards.",
      "The prime advantage of working while studying is financial self-reliance. Working students can finance their university tuition fees, books, and living expenses without placing heavy economic burdens on their parents. Furthermore, combining theoretical concepts taught in evening classes with actual practical work experience gives students a distinct competitive edge when seeking prestigious career promotions.",
      "Nevertheless, this demanding path requires iron self-discipline, time management, and sacrifice of leisure time. In conclusion, despite the fatigue and pressure, studying while working builds resilience, sharpens professional competence, and paves the road toward a brighter future. It is truly worth every ounce of effort."
    ],
    paragraphsAr: [
      "في عالمنا المتسارع المعاصر، باتت المنافسة في سوق العمل أشرس من أي وقت مضى. ونتيجة لذلك، يختار عدد متزايد من الأفراد متابعة تحصيلهم الأكاديمي أو نيل مؤهلات مهنية مع الاحتفاظ بوظائفهم. ومع أن التوفيق بين العمل والتعليم أمر شاق ومجهد بلا شك، إلا أنه مسعى يستحق العناء بكل تأكيد ويحقق مكاسب طويلة الأمد.",
      "الميزة الأساسية للعمل أثناء الدراسة هي الاعتماد على الذات مادياً. فالطلاب العاملون يستطيعون تغطية رسومهم الجامعية وكتبهم ومصاريفهم المعيشية دون تحميل أسرهم أعباءً اقتصادية ثقيلة. علاوة على ذلك، فإن دمج المفاهيم النظرية التي تُدرّس في المحاضرات المسائية بالخبرة العملية الواقعية يمنح الطالب ميزة تنافسية فارقة عند التطلع لترقيات مهنية مرموقة.",
      "ومع ذلك، فإن هذا الطريق الشاق يتطلب انضباطاً ذاتياً صارماً، وإدارة دقيقة للوقت، والتضحية بأوقات الفراغ والراحة. ختاماً، وعلى الرغم من التعب والضغوط، فإن الدراسة أثناء العمل تصقل العزيمة، وتطور الكفاءة المهنية، وتمهد السبيل لمستقبل أكثر إشراقاً. إنها حقاً تستحق كل ذرة جهد تبذلها."
    ],
    keywords: [
      { word: "Labour market", meaning: "سوق العمل" },
      { word: "Vocational qualifications", meaning: "مؤهلات مهنية" },
      { word: "Financial self-reliance", meaning: "الاعتماد المالي على النفس" },
      { word: "Competitive edge", meaning: "ميزة تنافسية" },
      { word: "Time management", meaning: "إدارة الوقت" },
      { word: "Worth every effort", meaning: "يستحق كل مجهود" }
    ],
    goldenTips: [
      "استخدم روابط التناقض والإضافة المتقدمة: Consequently, Furthermore, Nevertheless, In conclusion.",
      "ناقش الجانبين بموضوعية: المزايا (المادية والخبرة) والتحديات (التعب وتنظيم الوقت).",
      "أبرز العبارة المفتاحية للعنوان: (worthwhile / worth every effort) في الخاتمة لضمان علامة كاملة في ترابط الموضوع."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Combining theory and practice gives employees a competitive _____.",
        missingWord: "edge",
        options: ["edge", "hole", "danger", "mistake"]
      },
      {
        textWithBlanks: "Balancing university study and daily work requires strict time _____.",
        missingWord: "management",
        options: ["management", "wasting", "forgetting", "sleep"]
      }
    ]
  },

  // ================= UNIT 8 =================
  {
    id: "essay-u8-environment",
    unitId: 8,
    titleAr: "حماية البيئة والمحافظة على الموارد الطبيعية",
    titleEn: "Protecting and Preserving the Environment",
    ministerialWeight: "20 درجة وزارية - إنشاء الوحدة الثامنة الختامية (البيئة والطاقة)",
    paragraphsEn: [
      "Our planet Earth is facing unprecedented environmental challenges that threaten the survival of all living creatures. Rapid industrialization, deforestation, and excessive reliance on fossil fuels have led to alarming global warming, severe droughts, and toxic pollution. Therefore, preserving our environment has become an urgent collective responsibility that cannot be postponed.",
      "There are several practical steps we must implement to protect nature. First, governments and societies should invest heavily in renewable clean energy, such as solar panels and wind turbines, instead of burning oil and coal. Second, individuals must reduce everyday waste by recycling plastic, paper, and glass, as well as conserving precious fresh water and electricity in our households.",
      "Furthermore, extensive tree-planting campaigns should be launched across cities and desert areas to combat desertification and purify the air we breathe. In conclusion, Earth is our sole home, and protecting its natural resources today guarantees a safe, green, and sustainable tomorrow for coming generations."
    ],
    paragraphsAr: [
      "يواجه كوكبنا الأرضي تحديات بيئية غير مسبوقة تهدد بقاء جميع الكائنات الحية. لقد أدى التصنيع المتسارع، وقطع الغابات، والاعتماد المفرط على الوقود الأحفوري إلى تفاقم ظاهرة الاحتباس الحراري المقلقة، وموجات الجفاف القاسية، والتلوث السام. ولذلك، باتت حماية بيئتنا مسؤولية جماعية عاجلة لا تحتمل أي تأجيل.",
      "هناك خطوات عملية عديدة يجب علينا تطبيقها لحماية الطبيعة. أولاً، يجب على الحكومات والمجتمعات الاستثمار بكثافة في الطاقة النظيفة المتجددة، مثل الألواح الشمسية وتوربينات الرياح، بدلاً من حرق النفط والفحم. ثانياً، ينبغي على الأفراد تقليل النفايات اليومية من خلال إعادة تدوير البلاستيك والورق والزجاج، فضلاً عن ترشيد استهلاك المياه العذبة الثمينة والكهرباء في المنازل.",
      "علاوة على ذلك، يجب إطلاق حملات تشجير واسعة في المدن والمناطق الصحراوية لمكافحة التصحر وتنقية الهواء الذي نتنفسه. ختاماً، الأرض هي موطننا الوحيد، وحماية مواردها الطبيعية اليوم تضمن غداً آمناً، وأخضر، ومستداماً للأجيال القادمة."
    ],
    keywords: [
      { word: "Environmental challenges", meaning: "تحديات بيئية" },
      { word: "Fossil fuels", meaning: "الوقود الأحفوري" },
      { word: "Global warming", meaning: "الاحتباس الحراري" },
      { word: "Renewable clean energy", meaning: "طاقة نظيفة متجددة" },
      { word: "Conserving fresh water", meaning: "ترشيد المياه العذبة" },
      { word: "Combat desertification", meaning: "مكافحة التصحر" }
    ],
    goldenTips: [
      "استخدم مفردات بيئية تخصصية مأخوذة من نصوص الوحدة الثامنة: renewable energy, deforestation, solar panels, recycling.",
      "قسّم الحلول إلى: حلول حكومية (طاقة متجددة) وحلول فردية (ترشيد وتدوير وتشجير).",
      "احرص على أسلوب الإقناع بالضرورة: (urgent responsibility, we must implement, guarantees a safe future)."
    ],
    clozeSentences: [
      {
        textWithBlanks: "To reduce pollution, countries should switch to _____ clean energy.",
        missingWord: "renewable",
        options: ["renewable", "dirty", "harmful", "costly"]
      },
      {
        textWithBlanks: "Planting more trees in desert areas helps combat _____.",
        missingWord: "desertification",
        options: ["desertification", "wealth", "education", "swimming"]
      }
    ]
  }
];
