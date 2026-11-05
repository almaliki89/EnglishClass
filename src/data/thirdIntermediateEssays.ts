import { EssayItem } from '../types';

/**
 * الإنشاءات الوزارية النموذجية لمنهج اللغة الإنكليزية - الصف الثالث المتوسط
 * مأخوذة حرفياً من ملزمة:
 * «النموذجية في اللغة الانكليزية للصف الثالث المتوسط 2025 - إعداد الأستاذ عمار غالب» (الصفحات 133 - 143)
 */
export const THIRD_INTERMEDIATE_ESSAYS: EssayItem[] = [
  // 1. الوحدة الأولى: إعلان منتج (Galaxy Watch 5)
  {
    id: "3rd-essay-u1-advert",
    unitId: 101,
    titleAr: "إنشاء الوحدة الأولى: إعلان منتج (ساعة كالاكسي 5)",
    titleEn: "Unit 1: Write an advert on a product (Galaxy Watch 5)",
    ministerialWeight: "15 درجة في السؤال الخامس الوزاري (ص 134 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "Galaxy Watch 5\nFor a better life!\nComes with a large battery, different colors and beautiful design. Works with all devices.",
      "Functions include: step counter, stop watch and heart rate monitor. Easy to set up and use. Water-resistant and drop-proof. Battery life: 6-8 hours. Price: 300,000 IQD."
    ],
    paragraphsAr: [
      "ساعة كالاكسي 5\nلحياة أفضل!\nتأتي ببطارية كبيرة وألوان مختلفة وتصميم جميل. تعمل مع جميع الأجهزة.",
      "المميزات تشمل: عداد الخطوات وساعة التوقف ومراقبة معدل ضربات القلب. سهلة التنصيب والاستخدام. مقاومة للماء والسقوط. عمر البطارية: 6 إلى 8 ساعات. السعر: 300 ألف دينار عراقي."
    ],
    keywords: [
      { word: "battery", meaning: "بطارية" },
      { word: "design", meaning: "تصميم" },
      { word: "step counter", meaning: "عداد الخطوات" },
      { word: "water-resistant", meaning: "مقاوم للماء" },
      { word: "drop-proof", meaning: "مقاوم للسقوط والصدمات" }
    ],
    goldenTips: [
      "نصيحة الأستاذ عمار غالب: اكتب عنوان المنتج بوضوح في الأعلى (Galaxy Watch 5).",
      "قسّم الإنشاء إلى المميزات والمواصفات والسعر."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Galaxy Watch 5 comes with a large ______ and beautiful design.",
        missingWord: "battery",
        options: ["battery", "food", "book", "car"]
      },
      {
        textWithBlanks: "Functions include step counter, stop watch and ______ monitor.",
        missingWord: "heart rate",
        options: ["heart rate", "weather", "music", "animal"]
      }
    ]
  },

  // 2. الوحدة الثانية: دعوة حفل تخرج مدرسي (Graduation Party)
  {
    id: "3rd-essay-u2-invitation",
    unitId: 102,
    titleAr: "إنشاء الوحدة الثانية: دعوة لحضور حفل تخرج مدرسي (Graduation Party)",
    titleEn: "Unit 2: Write an email to invite your friend to attend graduation ceremony",
    ministerialWeight: "15 درجة مضمونة بالسؤال الخامس (ص 135 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "Graduation Party\nFrom: Ammar\nTo: Haider\n\nHi Haider,\nAre you free on Tuesday, 30th of June? There is a school graduation party and I have two tickets.",
      "You must come because the party will be amazing. You will enjoy your time there. The party will be at Babylon Hotel at 5 o’clock in the afternoon. If you can’t come, let me know so I can give the ticket to someone else. Write back soon,\nAmmar"
    ],
    paragraphsAr: [
      "حفل تخرج\nمن: عمار\nإلى: حيدر\n\nمرحباً حيدر،\nهل أنت متفرغ يوم الثلاثاء 30 من حزيران؟ هناك حفل تخرج مدرسي ولدي تذكرتان.",
      "يجب أن تأتي لأن الحفلة ستكون رائعة. سوف تستمتع بوقتك هناك. ستكون الحفلة في فندق بابل الساعة الخامسة عصراً. إذا لم تتمكن من الحضور أخبرني حتى أتمكن من إعطاء التذكرة لشخص آخر. اكتب لي سريعاً،\nعمار"
    ],
    keywords: [
      { word: "graduation party", meaning: "حفل تخرج" },
      { word: "tickets", meaning: "تذاكر" },
      { word: "amazing", meaning: "رائع ومبهر" }
    ],
    goldenTips: [
      "نصيحة الأستاذ عمار غالب: اذكر دائماً التاريخ (30th of June) والمكان (Babylon Hotel) والوقت (5 o'clock)."
    ],
    clozeSentences: [
      {
        textWithBlanks: "There is a school ______ party and I have two tickets.",
        missingWord: "graduation",
        options: ["graduation", "birthday", "dinner", "football"]
      }
    ]
  },

  // 3. الوحدة الثانية (بديل): كتابة معلومات عن فيلم (Fact file on a film - Titanic)
  {
    id: "3rd-essay-u2-film",
    unitId: 102,
    titleAr: "إنشاء الوحدة الثانية (ملف فيلم): فيلم تيتانيك (Titanic)",
    titleEn: "Unit 2: Write a fact file on a film (Titanic)",
    ministerialWeight: "15 درجة بالسؤال الخامس (ص 136 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "Title: Titanic\nReleased: 1997\nGenre: Drama\nDirector: James Cameron\nScriptwriter: James Cameron\nStars: Leonardo DiCaprio, Kate Winslet\nMain Characters: Billy Zane, Leonardo DiCaprio, Kate Winslet",
      "The Story: The story was told by Rose, a survivor of the disaster. She narrates the events of that tragic night when the ship hit an iceberg and sank.\nInteresting Facts: It was the most expensive film at the time. It cost 200 million dollars.\nMy Opinion: I loved it because it is one of the best films on sacrifice. I liked the real-life scenes showing the wreck at the beginning of the film."
    ],
    paragraphsAr: [
      "العنوان: تيتانيك\nتاريخ الإصدار: 1997\nالنوع: دراما\nالمخرج: جيمس كاميرون\nكاتب السيناريو: جيمس كاميرون\nالنجوم: ليوناردو دي كابريو، كيت وينسلت\nالشخصيات الرئيسية: بيلي زين، ليوناردو دي كابريو، كيت وينسلت",
      "القصة: روتها روز، إحدى الناجيات من الكارثة، وتروي أحداث تلك الليلة المأساوية عندما اصطدمت السفينة بجبل جليدي وغرقت.\nحقائق مثيرة للاهتمام: كان أغلى فيلم في ذلك الوقت وبلغت تكلفته 200 مليون دولار.\nرأيي: أحببته لأنه من أفضل الأفلام عن التضحية، وأعجبتني المشاهد الواقعية لحطام السفينة في البداية."
    ],
    keywords: [
      { word: "survivor", meaning: "ناجٍ من الكارثة" },
      { word: "iceberg", meaning: "جبل جليدي" },
      { word: "sacrifice", meaning: "التضحية" }
    ],
    goldenTips: [
      "اكتب الحقول بشكل منظم: Title, Released, Genre, Director, Story, Opinion."
    ],
    clozeSentences: [
      {
        textWithBlanks: "The story was told by Rose, a ______ of the disaster.",
        missingWord: "survivor",
        options: ["survivor", "doctor", "driver", "pilot"]
      }
    ]
  },

  // 4. الوحدة الثالثة: حقائق عن الحياة البرية (Wild Life in Iraqi Marshes)
  {
    id: "3rd-essay-u3-wildlife",
    unitId: 103,
    titleAr: "إنشاء الوحدة الثالثة: حقائق عن الحياة البرية في أهوار العراق",
    titleEn: "Unit 3: Write a fact file on wildlife (Wild Life in Iraqi Marshes)",
    ministerialWeight: "15 درجة (الإنشاء الأكثر وروداً بالوزاري - ص 137)",
    paragraphsEn: [
      "Wild Life\nWild life in Iraqi Marshes is very rich. People raise sheep and cattle there. They also grow rice, wheat and barley. They live in arched houses and use boats for transport.",
      "Many species of birds can be found. However, because of falconry, a lot of them were killed and they are endangered. But the Iraqi government has set up protected areas for birds. People cannot hunt there. These safe areas helped to raise the numbers of rare animals again and the environment is richer now."
    ],
    paragraphsAr: [
      "الحياة البرية\nالحياة البرية في الأهوار العراقية غنية جداً. يربي الناس الأغنام والماشية هناك، كما يزرعون الأرز والقمح والشعير. يعيشون في منازل مقوسة ويستخدمون القوارب للتنقل.",
      "يمكن العثور على العديد من أصناف الطيور. لكن بسبب تربية الصيد بالصقور، قُتل الكثير منها وهم معرضون للخطر. غير أن الحكومة العراقية أقامت مناطق محمية للطيور لا يستطيع الناس الصيد فيها. ساعدت هذه المناطق الآمنة في زيادة أعداد الحيوانات النادرة مجدداً والبيئة أغنى الآن."
    ],
    keywords: [
      { word: "marshes", meaning: "الأهوار" },
      { word: "arched houses", meaning: "بيوت مقوسة" },
      { word: "protected areas", meaning: "مناطق محمية" }
    ],
    goldenTips: [
      "نصيحة الأستاذ عمار غالب: استخدم الكلمات المعطاة في منطوق السؤال: raise, sheep, wheat, boats, protected areas."
    ],
    clozeSentences: [
      {
        textWithBlanks: "People in Iraqi marshes live in arched houses and use ______ for transport.",
        missingWord: "boats",
        options: ["boats", "planes", "trains", "bicycles"]
      }
    ]
  },

  // 5. الوحدة الرابعة: اكتب عن حياتك (My Life - Ammar)
  {
    id: "3rd-essay-u4-mylife",
    unitId: 104,
    titleAr: "إنشاء الوحدة الرابعة: اكتب عن حياتك (My Life)",
    titleEn: "Unit 4: Write about your life (My Life)",
    ministerialWeight: "15 درجة بالسؤال الخامس (ص 138 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "My Life\nMy name is Ammar. I was born in Baghdad in 1990. I live in Baghdad with my family, my father, my mother and my brother. Before school, I was a lazy boy. I used to watch TV all the time. My father used to take me to the cinema to watch a film every weekend. I liked that.",
      "Primary school was very easy to me. I enjoyed intermediate school. My favourite lessons are English and History. Outside school, I used to play football with my friends. When I graduate from school, I will be excited to go to university. I want to study the English language, because I want to be an English teacher one day."
    ],
    paragraphsAr: [
      "حياتي\nاسمي عمار. ولدت في بغداد عام 1990. أعيش في بغداد مع عائلتي وأبي وأمي وأخي. قبل المدرسة كنت فتى كسولاً أشاهد التلفاز طوال الوقت. اعتاد والدي أن يأخذني إلى السينما لمشاهدة فيلم في نهاية كل أسبوع، وأحببت ذلك.",
      "كانت المدرسة الابتدائية سهلة جداً بالنسبة لي. استمتعت بالمدرسة المتوسطة، ودروسي المفضلة هي الإنجليزية والتاريخ. خارج المدرسة كنت ألعب كرة القدم مع أصدقائي. عندما أتخرج من المدرسة سأكون متحمساً للذهاب إلى الجامعة؛ أريد دراسة اللغة الإنجليزية لأنني أريد أن أصبح مدرس لغة إنجليزية يوماً ما."
    ],
    keywords: [
      { word: "born in Baghdad", meaning: "ولدت في بغداد" },
      { word: "intermediate school", meaning: "المدرسة المتوسطة" },
      { word: "English teacher", meaning: "مدرس لغة إنجليزية" }
    ],
    goldenTips: [
      "أجب عن الأسئلة الموجهة بالترتيب: الولادة، الطفولة، المرحلة المتوسطة، والطموح الجامعي."
    ],
    clozeSentences: [
      {
        textWithBlanks: "When I graduate, I want to study English to be an English ______.",
        missingWord: "teacher",
        options: ["teacher", "pilot", "driver", "doctor"]
      }
    ]
  },

  // 6. الوحدة الخامسة: برنامج تلفزيوني (TV Programme about elephants)
  {
    id: "3rd-essay-u5-tv-programme",
    unitId: 105,
    titleAr: "إنشاء الوحدة الخامسة: برنامج تلفزيوني عن الفيلة (TV Programme)",
    titleEn: "Unit 5: Write a paragraph about a TV programme",
    ministerialWeight: "15 درجة بالسؤال الخامس (ص 139 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "TV Programme\nI watched a good programme with my family last night. It was a really interesting programme about elephants. It was also funny.",
      "There were some elephants by a pool and they were very thirsty. There was a cameraman filming and a reporter talking to the camera. One of the elephants blew water into the air. The cameraman and the reporter got wet. We laughed a lot."
    ],
    paragraphsAr: [
      "برنامج تلفزيوني\nشاهدت برنامجاً جيداً مع عائلتي الليلة الماضية. لقد كان برنامجاً مثيراً للاهتمام حقاً عن الفيلة، وكان مضحكاً أيضاً.",
      "كان هناك بعض الفيلة بجانب بركة وكانوا عطشى جداً. كان هناك مصور يصور ومراسل يتحدث إلى الكاميرا. قام أحد الفيلة بنفخ الماء في الهواء فتبلل المصور والمراسل، وضحكنا كثيراً."
    ],
    keywords: [
      { word: "elephants", meaning: "الفيلة" },
      { word: "cameraman", meaning: "المصور" },
      { word: "got wet", meaning: "تبلل بالماء" }
    ],
    goldenTips: [
      "استخدم العبارات: interesting, funny, elephants, cameraman, got wet, laughed a lot."
    ],
    clozeSentences: [
      {
        textWithBlanks: "One of the elephants blew water and the reporter got ______.",
        missingWord: "wet",
        options: ["wet", "dry", "angry", "sad"]
      }
    ]
  },

  // 7. الوحدة السادسة: سيرة شخص حقيقي (Career of a real person - Noor Sabri)
  {
    id: "3rd-essay-u6-noor-sabri",
    unitId: 106,
    titleAr: "إنشاء الوحدة السادسة: سيرة شخص حقيقي (اللاعب نور صبري)",
    titleEn: "Unit 6: Write a paragraph about a career of a real person (Noor Sabri)",
    ministerialWeight: "15 درجة بالسؤال الخامس (ص 140 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "Noor Sabri\nNoor Sabri is an Iraqi football player. He was born in 1984 in Baquba. He played football with the national Iraqi team. After he had finished school, he achieved his dream to be a footballer.",
      "He worked and practised a lot to be a good player. He enjoys playing football and making his family and people happy. His plan for the future is to be a coach. He is on his way to be a successful coach."
    ],
    paragraphsAr: [
      "نور صبري\nنور صبري لاعب كرة قدم عراقي، ولد عام 1984 في بعقوبة. لعب كرة القدم مع المنتخب العراقي الوطني. بعد أن أكمل المدرسة حقق حلمه في أن يصبح لاعب كرة قدم.",
      "عمل وتدرب كثيراً ليكون لاعباً جيداً. يستمتع بلعب كرة القدم وإسعاد عائلته وشعبه. خطته للمستقبل هي أن يكون مدرباً، وهو في طريقه ليكون مدرباً ناجحاً."
    ],
    keywords: [
      { word: "football player", meaning: "لاعب كرة قدم" },
      { word: "national team", meaning: "المنتخب الوطني" },
      { word: "coach", meaning: "مدرب رياضي" }
    ],
    goldenTips: [
      "نصيحة الأستاذ عمار غالب: اذكر الاسم وسنة ومكان الولادة والمهنة والخطط المستقبلية (coach)."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Noor Sabri's plan for the future is to be a ______.",
        missingWord: "coach",
        options: ["coach", "teacher", "dentist", "pilot"]
      }
    ]
  },

  // 8. الوحدة السابعة: اكتب عن بلد (العراق - Iraq)
  {
    id: "3rd-essay-u7-country-iraq",
    unitId: 107,
    titleAr: "إنشاء الوحدة السابعة: اكتب عن بلد (العراق - Iraq)",
    titleEn: "Unit 7: Write about country (Iraq)",
    ministerialWeight: "15 درجة بالسؤال الخامس (ص 141 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "Iraq\nIraq is a big country in Western Asia. The capital and largest city is Baghdad. There are over 40 million people in Iraq. It grows wheat, rice, dates, fruits and vegetables. Oil is the most important resource in Iraq. Iraq has two great rivers, the Tigris and the Euphrates.",
      "Iraq has a lot of historical places to visit in Ur, Babylon and other interesting places. There are also holy places in Najaf and Karbala."
    ],
    paragraphsAr: [
      "العراق\nالعراق بلد كبير في غرب آسيا، العاصمة وأكبر مدينة هي بغداد. هناك أكثر من 40 مليون شخص في العراق. يزرع القمح والأرز والتمور والفواكه والخضروات. النفط هو أهم مورد في العراق، ولدى العراق نهران عظيمان هما دجلة والفرات.",
      "يوجد في العراق الكثير من الأماكن التاريخية التي يمكن زيارتها في أور وبابل وغيرها من الأماكن المثيرة للاهتمام، كما توجد أماكن مقدسة في النجف الأشرف وكربلاء المقدسة."
    ],
    keywords: [
      { word: "capital", meaning: "العاصمة" },
      { word: "Tigris and Euphrates", meaning: "دجلة والفرات" },
      { word: "historical places", meaning: "أماكن تاريخية" }
    ],
    goldenTips: [
      "اذكر العاصمة (Baghdad)، المحاصيل، النهرين (Tigris and Euphrates)، والأماكن التاريخية والمقدسة."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Iraq has two great rivers, the ______ and the Euphrates.",
        missingWord: "Tigris",
        options: ["Tigris", "Nile", "Danube", "Amazon"]
      }
    ]
  },

  // 9. الوحدة الثامنة: حدث بسيط حصل لك (New Year in Erbil)
  {
    id: "3rd-essay-u8-simple-event",
    unitId: 108,
    titleAr: "إنشاء الوحدة الثامنة: حدث بسيط حصل لك (رأس السنة في أربيل)",
    titleEn: "Unit 8: Write about a simple event that happened to you (New Year in Erbil)",
    ministerialWeight: "15 درجة بالسؤال الخامس (ص 142 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "New Year\nLast week, I decided to go with my friends to spend the New Year Day in Erbil. On our way, it was raining heavily. One of the tires of the car got puncture. It was difficult to change the tire in the rain.",
      "We reached Erbil at midnight. We were very tired. We missed the night. So, we went directly to a hotel to rest and sleep."
    ],
    paragraphsAr: [
      "سنة جديدة\nالأسبوع الماضي قررت الذهاب مع أصدقائي لقضاء يوم رأس السنة في أربيل. في طريقنا كانت تمطر بغزارة، وثُقب أحد إطارات السيارة. كان من الصعب تغيير الإطار تحت المطر.",
      "وصلنا إلى أربيل في منتصف الليل وكنا متعبين جداً، وفاتتنا الليلة، لذا ذهبنا مباشرة إلى الفندق لنستريح وننام."
    ],
    keywords: [
      { word: "Erbil", meaning: "أربيل" },
      { word: "puncture", meaning: "ثقب في الإطار" },
      { word: "midnight", meaning: "منتصف الليل" }
    ],
    goldenTips: [
      "احرص على استخدام أفعال الماضي البسيط (decided, was raining, reached, went)."
    ],
    clozeSentences: [
      {
        textWithBlanks: "On our way to Erbil, one of the tires got ______.",
        missingWord: "puncture",
        options: ["puncture", "fast", "hot", "clean"]
      }
    ]
  },

  // 10. مشروع قصة خيالية: الأسد والفأر (Lion and Mouse)
  {
    id: "3rd-essay-project-lion-mouse",
    unitId: 108,
    titleAr: "مشروع قصة خيالية: الأسد والفأر (Lion and Mouse)",
    titleEn: "Project: Write an imaginary story (Lion and Mouse)",
    ministerialWeight: "15 درجة بالسؤال الخامس (ص 143 في ملزمة الأستاذ عمار غالب)",
    paragraphsEn: [
      "Lion and Mouse\nOnce upon a time there lived a lion in a forest. It was sleeping under a tree. A mouse came and it started to play on the lion. The lion got up with anger, jumped on it and started to kill it. The mouse asked the lion to forgive it. The lion felt pity and left it. The mouse ran away.",
      "On another day, a hunter caught the lion in a net. The mouse came there and cut the net. The lion escaped. After that, the mouse and the lion became friends. They lived happily in the forest."
    ],
    paragraphsAr: [
      "أسد وفأر\nذات مرة عاش أسد في غابة وكان ينام تحت شجرة. جاء فأر وبدأ باللعب على الأسد. نهض الأسد غاضباً وقفز عليه وبدأ بقتله، فطلب الفأر من الأسد أن يغفر له. شعر الأسد بالشفقة وتركه، فهرب الفأر بعيداً.",
      "في يوم آخر، أمسك صياد بالأسد بشبكة. جاء الفأر إلى هناك وقطع الشبكة بأسنانها فهرب الأسد. بعد ذلك أصبح الفأر والأسد صديقين وعاشا بسعادة في الغابة."
    ],
    keywords: [
      { word: "forest", meaning: "غابة" },
      { word: "forgive", meaning: "يسامح ويعفو" },
      { word: "hunter's net", meaning: "شبكة الصياد" }
    ],
    goldenTips: [
      "ابدأ بعبارة القصص الشهيرة (Once upon a time) واختم بالعبرة والصداقة."
    ],
    clozeSentences: [
      {
        textWithBlanks: "The mouse cut the ______ and the lion escaped.",
        missingWord: "net",
        options: ["net", "tree", "water", "stone"]
      }
    ]
  }
];
