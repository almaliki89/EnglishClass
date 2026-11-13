import { EssayItem } from '../../../types';

// =========================================================================
// الإنشاءات الوزارية النموذجية للصف الخامس الإعدادي - ملزمة الأستاذ عمار غالب 2026
// مرجع الصفحات: ص 212 - 221 (15 إنشاءً منهجياً شاملاً مع الكلمات المفتاحية والترجمة)
// =========================================================================

export const FIFTH_PREPARATORY_ESSAYS: EssayItem[] = [
  {
    id: "5th-essay-u1-ramadan",
    unitId: 51,
    titleAr: "إنشاء الوحدة الأولى: تقاليد شهر رمضان المبارك في العراق",
    titleEn: "Ramadan Traditions and Hospitality in Iraq",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 212",
    paragraphsEn: [
      "The Holy Month of Ramadan is the most sacred and cherished season of the year for Muslims across Iraq. During this holy month, believers abstain from food, drink, and smoking from the first light of dawn until the moment of sunset. Fasting is not merely a physical duty; it is a profound spiritual journey that nurtures self-discipline, patience, empathy with the poor, and deep religious devotion.",
      "In Iraq, Ramadan is characterized by extraordinary social warmth and generous traditions. Families assemble before sundown around dining tables laden with dates, lentil soup (Shorbat Adas), and traditional dishes such as Kubba and Dolma. Mosques and local communities set up collective Iftar banquets for anyone in need. After evening prayers, lively social life begins: relatives visit each other, and neighbours gather in historic cafes to play the celebrated traditional game of Mheibes, reflecting centuries of brotherly solidarity."
    ],
    paragraphsAr: [
      "يعد شهر رمضان المبارك أقدس وأعز مواسم العام لدى المسلمين في عموم العراق. وخلال هذا الشهر الكريم، يمتنع المؤمنون عن الطعام والشراب والتدخين من بزوغ الفجر وحتى لحظة غروب الشمس. وليس الصيام مجرد واجب بدني، بل هو رحلة روحانية عميقة تنمي الانضباط الذاتي، والصبر، والتعاطف مع الفقراء، والتقرب الخالص إلى الله.",
      "وفي العراق، يتميز شهر رمضان بألفة اجتماعية استثنائية وتقاليد أصيلة مفعمة بالجود والكرم. تجتمع العوائل قبل الغروب حول موائد الإفطار المحملة بالتمر، وحساء العدس، والأكلات الشعبية كالكبة والدولمة. وتفتح المساجد والمجالس موائد الرحمن لإطعام المحتاجين. وبعد صلاة التراويح، تدب الحياة الاجتماعية حيث يتبادل الأقارب الزيارات، ويتحلق الجيران في المقاهي التراثية للعبة المحيبس الشهيرة التي تعكس قروناً من التآخي والتكاتف المجتمعي."
    ],
    keywords: [
      { word: "sacred season", meaning: "موسم مقدس" },
      { word: "abstain from", meaning: "يمتنع عن" },
      { word: "self-discipline", meaning: "انضباط ذاتي" },
      { word: "Shorbat Adas", meaning: "شوربة عدس" },
      { word: "Mheibes game", meaning: "لعبة المحيبس" },
      { word: "solidarity", meaning: "تضامن وتكاتف" }
    ],
    goldenTips: [
      "ابدأ بمقدمة روحانية تبين أهمية الصوم كفريضة دينية.",
      "استشهد بأكلات الإفطار العراقية الأصيلة مثل حساء العدس والتمر.",
      "اختم بذكر لعبة المحيبس والتآلف الاجتماعي بعد صلاة التراويح."
    ],
    clozeSentences: [
      {
        textWithBlanks: "During Ramadan, Muslims ______ from eating and drinking from dawn till sunset.",
        missingWord: "abstain",
        options: ["abstain", "prevent", "refuse", "stop"]
      }
    ]
  },
  {
    id: "5th-essay-u1-penfriend",
    unitId: 51,
    titleAr: "إنشاء الوحدة الأولى (ب): رسالة لصديق مراسلة عن العراق وتراثه",
    titleEn: "An Email to a Penfriend About Iraq's Rich Heritage",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 213",
    paragraphsEn: [
      "Dear Alex,\nI am writing to tell you all about my wonderful country, Iraq, which is celebrated as the cradle of human civilization. Iraq is home to ancient Mesopotamia where the first writing, laws, and cities were born. The two legendary rivers, the Tigris and the Euphrates, give life to our fertile valleys and historic towns.",
      "If you visit Iraq, you must explore the magnificent ruins of Babylon and Ur, visit the bustling souqs of Baghdad like Souq Al-Safafir, and experience the lush palm groves of the south. Iraqi people are world-renowned for their hospitality; you will be welcomed with delicious traditional tea, cardamon-infused coffee, and dishes like Masgouf fish. I hope you can visit soon!\nBest wishes,\nAhmed"
    ],
    paragraphsAr: [
      "عزيزي أليكس،\nأكتب إليك لأخبرك عن وطني الرائع، العراق، الذي يُحتفى به كمهد للحضارة الإنسانية. العراق هو موطن بلاد ما بين النهرين القديمة حيث وُلدت أول كتابة وأول قوانين وأولى المدن في التاريخ. ويمنح النهران الخالدان، دجلة والفرات، الحياة لسهولنا الخصبة ومدننا التاريخية.",
      "إذا زرت العراق، فلا بد لك من استكشاف آثار بابل وأور الشامخة، وزيارة أسواق بغداد النابضة كشارع المتنبي وسوق الصفافير، وتأمل بساتين النخيل الغناء في الجنوب. يشتهر العراقيون عالمياً بكرم ضيافتهم؛ وسيستقبلونك بالشاي العراقي المهيل والسمك المسكوف الشهير. آمل أن تزورنا قريباً!\nأطيب التمنيات،\nأحمد"
    ],
    keywords: [
      { word: "cradle of civilization", meaning: "مهد الحضارة" },
      { word: "Mesopotamia", meaning: "بلاد ما بين النهرين" },
      { word: "bustling souqs", meaning: "أسواق نابضة بالحياة" },
      { word: "hospitality", meaning: "كرم الضيافة" },
      { word: "Masgouf fish", meaning: "السمك المسكوف" }
    ],
    goldenTips: [
      "حافظ على التنسيق الرسمي لرسائل البريد الإلكتروني (Dear ... / Best wishes).",
      "اذكر نهري دجلة والفرات وآثار بابل وأور لتعزيز الأصالة التاريخية."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Iraq is historically recognized as the ______ of human civilization.",
        missingWord: "cradle",
        options: ["cradle", "roof", "bridge", "corner"]
      }
    ]
  },
  {
    id: "5th-essay-u1-babylon",
    unitId: 51,
    titleAr: "إنشاء الوحدة الأولى (ج): مهرجان بابل الدولي للثقافة والفنون",
    titleEn: "The Babylon International Festival of Arts & Culture",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 213",
    paragraphsEn: [
      "The Babylon International Festival is a globally recognized cultural celebration held in the ancient city of Babylon, located approximately 85 kilometres south of Baghdad. First inaugurated in 1987, the festival transforms the legendary historical ruins into vibrant theatres of world arts, music, dance, and literature.",
      "Performers and academic delegations from every continent gather to present their creative works in magnificent historical venues, including the grand Babylonian Theatre which seats 2,500 people, the Throne Room of King Nebuchadnezzar, and the Ninmakh Temple. For Iraqis, the festival is a proud demonstration of timeless civilization, cultural resilience, and peaceful dialogue among nations."
    ],
    paragraphsAr: [
      "يعد مهرجان بابل الدولي احتفالية ثقافية عالمية تقام في مدينة بابل الأثرية الواقعة على بعد حوالي 85 كيلومتراً جنوب بغداد. انطلق المهرجان لأول مرة عام 1987، محولاً الآثار التاريخية الأسطورية إلى مسارح نابضة بالفنون العالمية والموسيقى والرقص الفولكلوري والشعر.",
      "تجتمع الفرق الفنية والوفود الأكاديمية من شتى قارات العالم لتقديم إبداعاتها في معالم تاريخية مهيبة، مثل المسرح البابلي الذي يتسع لـ 2,500 متفرج، وقاعة عرش الملك نبوخذ نصر، ومعبد نينماخ. ويمثل المهرجان للعراقيين برهاناً ساطعاً على خلود حضارتهم، وصمودهم الثقافي، ورسالة سلام وتواصل حضاري بين شعوب الأرض."
    ],
    keywords: [
      { word: "inaugurated", meaning: "افتتح / دُشن" },
      { word: "legendary ruins", meaning: "الآثار الأسطورية" },
      { word: "Babylonian Theatre", meaning: "المسرح البابلي" },
      { word: "Throne Room", meaning: "قاعة العرش" },
      { word: "resilience", meaning: "الصمود والمرونة" }
    ],
    goldenTips: [
      "اذكر سنة التأسيس (1987) وبعد بابل عن بغداد (85 km).",
      "عدد المسارح الثلاثة: المسرح البابلي، قاعة العرش، معبد نينماخ."
    ],
    clozeSentences: [
      {
        textWithBlanks: "The Babylonian amphitheatre can accommodate about 2,500 ______.",
        missingWord: "spectators",
        options: ["spectators", "actors", "sailors", "soldiers"]
      }
    ]
  },
  {
    id: "5th-essay-u2-mobiles",
    unitId: 52,
    titleAr: "إنشاء الوحدة الثانية: إيجابيات وسلبيات الهواتف النقالة",
    titleEn: "Mobile Phones: Modern Benefits and Serious Drawbacks",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 214",
    paragraphsEn: [
      "In modern society, mobile phones have become an indispensable part of daily life. On the positive side, smartphones provide instantaneous global communication, immediate access to educational materials, online banking, and vital navigation tools. In emergencies, a mobile phone can be a life-saving device by allowing people to contact emergency services in seconds.",
      "On the other hand, excessive mobile phone usage brings noticeable disadvantages. Many individuals, especially teenagers, suffer from screen addiction, leading to sleep deprivation, poor school performance, and social isolation. Furthermore, using phones while driving is a major cause of fatal traffic accidents. In conclusion, mobile phones are brilliant tools when used with moderation and responsibility."
    ],
    paragraphsAr: [
      "في المجتمع المعاصر، أصبحت الهواتف المحمولة جزءاً لا غنى عنه من الحياة اليومية. ومن الناحية الإيجابية، تتيح الهواتف الذكية اتصالاً فورياً حول العالم، ووصولاً سريعاً لمصادر التعلم، والخدمات المصرفية، وخرائط الملاحة. وفي حالات الطوارئ، قد ينقذ الهاتف الأرواح بالاتصال بخدمات الإسعاف في ثوانٍ معدودة.",
      "ومن جهة أخرى، يسبب الاستخدام المفرط للهواتف أضراراً بالغة؛ إذ يعاني كثير من المراهقين من إدمان الشاشات، واضطرابات النوم، وتراجع التحصيل الدراسي، والعزلة الاجتماعية. فضلاً عن أن استخدام الهاتف أثناء القيادة يعد سبباً رئيساً لحوادث السير القاتلة. وختاماً، تظل الهواتف نعمة تقنية عظيمة إذا استُعملت باعتدال ومسؤولية."
    ],
    keywords: [
      { word: "indispensable", meaning: "لا غنى عنه" },
      { word: "screen addiction", meaning: "إدمان الشاشات" },
      { word: "sleep deprivation", meaning: "الحرمان من النوم" },
      { word: "moderation", meaning: "اعتدال وتوازن" }
    ],
    goldenTips: [
      "قسم الإنشاء إلى فقرتين رئيسيتين: فقرة للإيجابيات (On the one hand) وفقرة للسلبيات (On the other hand).",
      "اختم بنصيحة متوازنة حول الاستخدام المسؤول."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Excessive mobile usage can lead to social ______ and sleep disorders.",
        missingWord: "isolation",
        options: ["isolation", "enjoyment", "freedom", "gathering"]
      }
    ]
  },
  {
    id: "5th-essay-u2-inventions",
    unitId: 52,
    titleAr: "إنشاء الوحدة الثانية (ب): اختراع غير وجه العالم (الإنترنت)",
    titleEn: "An Invention That Changed the World: The Internet & The Web",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 215",
    paragraphsEn: [
      "Throughout human history, numerous inventions have transformed human existence, but few have had as profound an impact as the Internet and the World Wide Web, invented by Sir Tim Berners-Lee in 1989. The Web converted the world into a tiny interconnected digital village where information is accessible at the touch of a button.",
      "The Web revolutionized education, scientific research, international commerce, and human interaction. Today, students can attend university lectures from the comfort of their homes, and doctors can collaborate on life-saving operations across oceans. Without question, the Internet is the foundation of 21st-century civilization."
    ],
    paragraphsAr: [
      "على مر التاريخ البشري، غيرت اختراعات عديدة وجه الحياة، لكن القليل منها امتلك ذلك التأثير الجذري الذي أحدثه الإنترنت وشبكة الويب العالمية التي ابتكرها تيم بيرنرز لي عام 1989. لقد حولت هذه الشبكة العالم إلى قرية رقمية صغيرة ومترابطة تتدفق فيها المعلومات بلمسة زر.",
      "أحدثت الشبكة ثورة كبرى في التعليم، والبحث العلمي، والتجارة الدولية، والتواصل الإنساني. واليوم، يستطيع الطالب حضور المحاضرات الجامعية من منزله، ويتمكن الأطباء من التنسيق في جراحات دقيقة عبر المحيطات. ولا شك أن الإنترنت هو الركيزة الأساسية لحضارة القرن الحادي والعشرين."
    ],
    keywords: [
      { word: "transformed", meaning: "حوّل وغير" },
      { word: "digital village", meaning: "قرية رقمية" },
      { word: "commerce", meaning: "تجارة" },
      { word: "foundation", meaning: "أساس وركيزة" }
    ],
    goldenTips: [
      "اذكر اسم العالم تيم بيرنرز لي (Tim Berners-Lee) وسنة الابتكار (1989).",
      "أبرز دور الويب في التعليم والرعاية الصحية."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Sir Tim Berners-Lee invented the World Wide Web in ______.",
        missingWord: "1989",
        options: ["1989", "1999", "1979", "2005"]
      }
    ]
  },
  {
    id: "5th-essay-u3-endangered",
    unitId: 53,
    titleAr: "إنشاء الوحدة الثالثة: الحيوانات المهددة بالانقراض وكيفية حمايتها",
    titleEn: "Endangered Wildlife and How to Protect Them from Extinction",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 215",
    paragraphsEn: [
      "Our planet is currently experiencing a biodiversity crisis, with thousands of animal species facing the imminent threat of extinction. Magnificent creatures such as the Northern Right Whale, the Giant Panda, the Black Rhino, and marine turtles are dwindling due to human activities like deforestation, illegal poaching, and industrial pollution.",
      "To preserve these endangered species, governments must enforce strict anti-poaching laws and establish protected wildlife sanctuaries. Furthermore, public awareness campaigns must educate communities about the vital role every animal plays in maintaining ecological balance. Saving wildlife is our moral duty to future generations."
    ],
    paragraphsAr: [
      "يواجه كوكبنا حالياً أزمة تنوع بيولوجي حادة، حيث تتهدد آلاف الفصائل الحيوانية مخاطر الانقراض الوشيك. وتتناقص كائنات بديعة مثل الحوت الصائب الشمالي، والباندا العملاقة، ووحيد القرن الأسود، والسلاحف البحرية بسبب الأنشطة البشرية الجائرة كقطع الغابات، والصيد غير القانوني، والتلوث الصناعي.",
      "ولحماية هذه الحياة البرية من الفناء، يتعين على الحكومات فرض قوانين صارمة لمكافحة الصيد الجائر وإنشاء محميات طبيعية آمنة. كما يجب إطلاق حملات توعية مجتمعية لبيان الدور الحيوي الذي يلعبه كل كائن في الحفاظ على التوازن البيئي. إن إنقاذ الكائنات واجب أخلاقي وإنساني تجاه أجيال المستقبل."
    ],
    keywords: [
      { word: "biodiversity crisis", meaning: "أزمة تنوع حيوي" },
      { word: "poaching", meaning: "الصيد الجائر غير القانوني" },
      { word: "sanctuaries", meaning: "محميات طبيعية" },
      { word: "ecological balance", meaning: "توازن بيئي" }
    ],
    goldenTips: [
      "استشهد بالحيوانات المذكورة في كتاب الطالب (Right Whale, Black Rhino, Panda).",
      "اقترح حلولاً عملية: فرض قوانين صارمة وإنشاء محميات طبيعية."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Governments must build protected nature ______ to preserve wildlife.",
        missingWord: "sanctuaries",
        options: ["sanctuaries", "factories", "highways", "prisons"]
      }
    ]
  },
  {
    id: "5th-essay-u3-recycling",
    unitId: 53,
    titleAr: "إنشاء الوحدة الثالثة (ب): أهمية إعادة التدوير لحماية البيئة",
    titleEn: "Why Recycling is Essential for our Planet's Future",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 216",
    paragraphsEn: [
      "Every year, modern society produces billions of tons of municipal and industrial waste. Most of this rubbish ends up buried in landfill sites or dumped into rivers and oceans, causing irreversible ecological destruction. Recycling provides a sustainable and effective solution to this mounting environmental disaster.",
      "When we recycle materials like paper, glass, plastic, and electronic metals, we conserve precious natural resources and save enormous amounts of energy. For example, recycling one ton of paper saves seventeen mature trees and uses fifty percent less water. Therefore, adopting a culture of recycling in our homes and schools is paramount."
    ],
    paragraphsAr: [
      "تنتج المجتمعات الحديثة سنوياً مليارات الأطنان من المخلفات البلدية والصناعية. وينتهي المطاف بغالبية هذه القمامة مدفونة في المكبات أو ملقاة في الأنهار والبحار، مما يسبب دماراً بيئياً لا يمكن علاجه. وتقدم إعادة التدوير حلاً مستداماً وفعالاً لهذه الكارثة البيئية المتصاعدة.",
      "فعندما نعيد تدوير مواد مثل الورق والزجاج والبلاستيك والمعادن الإلكترونية، فإننا نحفظ موارد الأرض الطبيعية الثمينة ونوفر كميات هائلة من الطاقة. فعلى سبيل المثال، يؤدي تدوير طن واحد من الورق إلى إنقاذ 17 شجرة بالغة وخفض استهلاك المياه بنسبة 50%. لذا فإن غرس ثقافة إعادة التدوير في بيوتنا ومدارسنا أمر مصيري."
    ],
    keywords: [
      { word: "municipal waste", meaning: "نفايات بلدية" },
      { word: "landfill sites", meaning: "مكبات النفايات" },
      { word: "conserve resources", meaning: "حفظ الموارد" },
      { word: "paramount", meaning: "مصيري وبالغ الأهمية" }
    ],
    goldenTips: [
      "استخدم إحصائية تدوير الورق المذكورة بالملزمة (1 ton saves 17 trees).",
      "وظف الكلمات المشتقة بالبادئة re- مثل reuse و recycle."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Recycling one ton of paper saves ______ mature trees.",
        missingWord: "seventeen",
        options: ["seventeen", "seven", "seventy", "two"]
      }
    ]
  },
  {
    id: "5th-essay-u3-pollution",
    unitId: 53,
    titleAr: "إنشاء الوحدة الثالثة (ج): التلوث البيئي في العراق والحلول المقترحة",
    titleEn: "Environmental Pollution in Iraq and Practical Remedies",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 217",
    paragraphsEn: [
      "Iraq is confronting severe environmental challenges, primarily air and water pollution, desertification, and declining river levels. In southern cities like Basra, gas flaring in oilfields releases toxic greenhouse gases and black soot, causing respiratory diseases among local citizens and damaging agricultural lands.",
      "To overcome this crisis, the Iraqi government and petroleum corporations must capture flared gas to generate clean electricity rather than wasting it into the sky. Furthermore, nationwide afforestation campaigns—planting millions of palm and olive trees—will create green barriers against blinding dust storms and restore environmental vitality."
    ],
    paragraphsAr: [
      "يواجه العراق تحديات بيئية خطيرة، تتصدرها مشكلات تلوث الهواء والماء، والتصحر، وانخفاض مناسيب الأنهار. وفي المدن الجنوبية كالبصرة، يطلق حرق الغاز المصاحب في حقول النفط غازات دفيئة سامة وسخاماً أسود، مما يسبب أمراضاً تنفسية للسكان ويضر بالأراضي الزراعية.",
      "وللتغلب على هذه الأزمة، يجب على الحكومة والشركات النفطية حصر هذا الغاز ومعالجته لتوليد الكهرباء النظيفة بدلاً من حرقه في الهواء. بالإضافة إلى ذلك، فإن إطلاق حملات تشجير وطنية كبرى لزراعة ملايين أشجار النخيل والزيتون سيشكل مصدات خضراء ضد العواصف الترابية ويعيد الحيوية لبيئة العراق."
    ],
    keywords: [
      { word: "desertification", meaning: "التصحر" },
      { word: "gas flaring", meaning: "حرق الغاز المصاحب" },
      { word: "respiratory diseases", meaning: "أمراض الجهاز التنفسي" },
      { word: "afforestation", meaning: "التشجير وزراعة الأشجار" }
    ],
    goldenTips: [
      "ركز على مشكلة حرق الغاز في البصرة (Gas Flaring) التي وردت في قطعة الوحدة الثالثة.",
      "قدم حلولاً ملموسة: تحويل الغاز إلى كهرباء وحملات التشجير."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Capturing flared gas can generate clean ______ for thousands of homes.",
        missingWord: "electricity",
        options: ["electricity", "smoke", "petrol", "garbage"]
      }
    ]
  },
  {
    id: "5th-essay-u5-healthy",
    unitId: 55,
    titleAr: "إنشاء الوحدة الخامسة: نمط الحياة الصحي والغذاء المتوازن",
    titleEn: "Maintaining a Healthy Lifestyle and a Balanced Nutritional Diet",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 217",
    paragraphsEn: [
      "Good health is our greatest treasure, and maintaining it requires mindful eating habits and consistent lifestyle choices. A nutritious diet should be built upon the food pyramid, including wholesome carbohydrates, lean proteins, calcium-rich dairy, and an abundance of fresh fruits and vegetables.",
      "At the same time, we must limit our intake of deep-fried food, processed snacks, and sugary soft drinks which cause obesity, diabetes, and dental decay. In addition to nutrition, drinking at least two litres of pure water daily and exercising regularly are vital steps towards physical endurance and mental clarity."
    ],
    paragraphsAr: [
      "الصحة تاج على رؤوس الأصحاء، والحفاظ عليها يتطلب عادات غذائية واعية وخيارات حياتية منتظمة. ويجب أن يبنى النظام الغذائي السليم على هرم التغذية، متضمناً النشويات المفيدة، والبروتينات الخالية من الدهون، ومشتقات الحليب الغنية بالكالسيوم، ووفرة من الخضار والفواكه الطازجة.",
      "وفي المقابل، ينبغي تقليل تناول المقليات، والوجبات المصنعة، والمشروبات الغازية السكرية التي تؤدي إلى السمنة ومرض السكري وتسوس الأسنان. وإلى جانب التغذية، فإن شرب ما لا يقل عن لترين من الماء النقي يومياً وممارسة الرياضة بانتظام خطوتان أساسيتان للياقة البدنية وصفاء الذهن."
    ],
    keywords: [
      { word: "food pyramid", meaning: "الهرم الغذائي" },
      { word: "wholesome", meaning: "صحي ونافع" },
      { word: "obesity", meaning: "السمنة المفرطة" },
      { word: "endurance", meaning: "القدرة على التحمل" }
    ],
    goldenTips: [
      "استخدم تصنيفات الطعام المدروسة في الوحدة 5 (carbohydrates, proteins, vitamins).",
      "أكد على شرب الماء وممارسة الرياضة بانتظام."
    ],
    clozeSentences: [
      {
        textWithBlanks: "We should avoid drinking too many ______ soft drinks.",
        missingWord: "sugary",
        options: ["sugary", "healthy", "cold", "fresh"]
      }
    ]
  },
  {
    id: "5th-essay-u5-advice-job",
    unitId: 55,
    titleAr: "إنشاء الوحدة الخامسة (ب): نصيحة لصديق مقبل على وظيفة جديدة",
    titleEn: "Advice to a Dear Friend Starting a Challenging New Job",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 218",
    paragraphsEn: [
      "Dear Zaid,\nCongratulations on landing your new post as an administrative coordinator! Starting a new job can be daunting, but with the right attitude, you will flourish. First of all, punctuality is paramount: you had better arrive fifteen minutes early each morning to review your daily tasks calmly.",
      "Secondly, dress professionally and listen carefully to your supervisors and senior colleagues; if I were you, I would take structured notes during meetings. Finally, never hesitate to ask polite questions when something is unclear. Stay confident, work hard, and maintain good teamwork.\nYour close friend,\nAli"
    ],
    paragraphsAr: [
      "عزيزي زيد،\nأبارك لك من كل قلبي حصولك على وظيفتك الجديدة كمنسق إداري! قد تكون البدايات في عمل جديد باعثة على القلق، لكنك بالروح الإيجابية ستبدع وتتألق. أولاً، الالتزام بالوقت أمر مصيري: من الأفضل لك كثيراً أن تصل قبل الدوام بربع ساعة كل صباح لمراجعة مهامك اليومية بهدوء.",
      "ثانياً، ارتدِ زياً مهنياً لائقاً واستمع بتركيز لتوجيهات المشرفين وزملائك القدامى؛ ولو كنت مكانك لدونت ملاحظات منظمة في الاجتماعات. وأخيراً، لا تتردد في طرح الأسئلة المهذبة حين يلتبس عليك أمر. كن واثقاً من نفسك، واعمل بجد، وحافظ على روح الفريق الواحد.\nصديقك المخلص،\nعلي"
    ],
    keywords: [
      { word: "punctuality", meaning: "الدقة في المواعيد" },
      { word: "paramount", meaning: "بالغ الأهمية" },
      { word: "supervisors", meaning: "المشرفون والمسؤولون" },
      { word: "teamwork", meaning: "العمل الجماعي" }
    ],
    goldenTips: [
      "وظف تراكيب النصيحة الإلزامية مثل (you'd better) و (If I were you).",
      "استخدم أسلوب رسالة شخصية ودودة بين صديقين."
    ],
    clozeSentences: [
      {
        textWithBlanks: "If I were you, I ______ arrive fifteen minutes early.",
        missingWord: "would",
        options: ["would", "will", "did", "have"]
      }
    ]
  },
  {
    id: "5th-essay-u5-complaint",
    unitId: 55,
    titleAr: "إنشاء الوحدة الخامسة (ج): رسالة شكوى رسمية لمدير فندق",
    titleEn: "A Formal Letter of Complaint to a Hotel Manager",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 218",
    paragraphsEn: [
      "Dear Sir or Madam,\nI am writing to express my severe dissatisfaction regarding our recent stay at your coastal hotel from 10th to 15th July. Although we booked a luxury suite overlooking the sea, the room we were assigned had broken air conditioning and a leaking bathroom pipe.",
      "Furthermore, the service in the dining hall was completely unsatisfactory; breakfast was served cold, and the hotel swimming pool was closed for repairs throughout our entire stay without prior notice. Given these unacceptable inconveniences, I expect a formal apology and a fifty percent refund for our booking.\nYours faithfully,\nMike Green"
    ],
    paragraphsAr: [
      "سيدي المحترم / سيدتي الفاضلة،\nأكتب إليكم لأعرب عن استيائي البالغ من إقامتنا الأخيرة في فندقكم الساحلي في الفترة من 10 إلى 15 تموز. ورغم أننا حجزنا جناحاً فاخراً مطلاً على البحر، إلا أن الغرفة التي خُصصت لنا كان مكيفها معطلاً وأنابيب حمامها تسرب المياه.",
      "علاوة على ذلك، كان مستوى الخدمة في صالة الطعام غير مرضٍ على الإطلاق؛ إذ قُدم الإفطار بارداً، وكان حوض السباحة مغلقاً لأعمال الصيانة طوال فترة إقامتنا دون إشعار مسبق. ونظراً لهذه المضايقات غير المقبولة، فإنني أتوقع اعتذاراً رسمياً واسترداداً لـ 50% من تكلفة الحجز.\nوتفضلوا بقبول فائق الاحترام،\nمايك غرين"
    ],
    keywords: [
      { word: "severe dissatisfaction", meaning: "استياء بالغ" },
      { word: "leaking pipe", meaning: "أنبوب يسرب الماء" },
      { word: "prior notice", meaning: "إشعار مسبق" },
      { word: "Yours faithfully", meaning: "وتفضلوا بقبول فائق الاحترام" }
    ],
    goldenTips: [
      "التزم بأسلوب كتابة الرسائل الرسمية بدقة (Dear Sir or Madam -> Yours faithfully).",
      "استخدم ألفاظاً رسمية مثل dissatisfaction و compensation و refund."
    ],
    clozeSentences: [
      {
        textWithBlanks: "I am writing to express my severe ______ with the poor service.",
        missingWord: "dissatisfaction",
        options: ["dissatisfaction", "happiness", "surprise", "pleasure"]
      }
    ]
  },
  {
    id: "5th-essay-u6-film-review",
    unitId: 56,
    titleAr: "إنشاء الوحدة السادسة: مراجعة نقدية لفيلم سينمائي (القبطان الإسباني)",
    titleEn: "A Critical Film Review: 'The Spanish Captain'",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 219",
    paragraphsEn: [
      "'The Spanish Captain' is a breathtaking historical adventure movie directed by Carlos Mendez, set during the stormy Atlantic voyages of the 16th century. The plot centres on Captain Rodrigo, a fearless navigator searching for a mythical sunken galleon laden with gold while fighting against ruthless pirates and brutal ocean storms.",
      "The cinematography and visual effects are truly spectacular, capturing the terrifying power of the raging seas. The lead actor delivers a powerful and convincing performance, supported by an evocative soundtrack. While the dialogue is occasionally predictable, the thrilling climax will keep viewers on the edge of their seats. I highly recommend it."
    ],
    paragraphsAr: [
      "يعد فيلم 'القبطان الإسباني' عملاً سينمائياً تاريخياً يحبس الأنفاس من إخراج كارلوس مينديز، وتدور أحداثه وسط الرحلات العاصفة عبر المحيط الأطلسي في القرن السادس عشر. تتمحور الحبكة حول القبطان رودريغو، وهو ملاح شجاع يبحث عن سفينة غارقة أسطورية محملة بالذهب بينما يواجه قراصنة قساة وعواصف بحرية عاتية.",
      "جاء التصوير السينمائي والمؤثرات البصرية مذهلة ومبهرة بحق، عكست هيبة وهيجان أمواج المحيط. وقدم بطل الفيلم أداءً قوياً ومقنعاً، صاحبته موسيقى تصويرية آسرة. ورغم أن بعض الحوارات كانت متوقعة، إلا أن ذروة الأحداث المشوقة ستشد أنفاس المشاهدين حتى المشهد الأخير. أنصح بمشاهدته بشدة."
    ],
    keywords: [
      { word: "breathtaking", meaning: "يحبس الأنفاس من الروعة" },
      { word: "ruthless pirates", meaning: "قراصنة قساة" },
      { word: "cinematography", meaning: "التصوير السينمائي" },
      { word: "evocative soundtrack", meaning: "موسيقى تصويرية معبرة" }
    ],
    goldenTips: [
      "ضمن عناصر المراجعة السينمائية: اسم الفيلم والمخرج ونوع الفيلم وأداء البطل.",
      "استخدم صفات نقدية سينمائية مثل spectacular و convincing و breathtaking."
    ],
    clozeSentences: [
      {
        textWithBlanks: "The visual effects in the sea battle were truly ______.",
        missingWord: "spectacular",
        options: ["spectacular", "ugly", "boring", "useless"]
      }
    ]
  },
  {
    id: "5th-essay-u6-satellite-tv",
    unitId: 56,
    titleAr: "إنشاء الوحدة السادسة (ب): تأثير القنوات الفضائية على المجتمع",
    titleEn: "Satellite Television: Cultural and Educational Influence on Society",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 220",
    paragraphsEn: [
      "Since the launch of early communication satellites like Telstar in the 1960s, satellite broadcasting has fundamentally reshaped modern society. Satellite TV brings hundreds of diverse channels into millions of homes, broadcasting breaking global news live, educational documentaries, and major sporting events directly to our screens.",
      "However, unrestricted satellite television can also have negative repercussions. It may expose impressionable young children to violent behaviour, commercial materialism, and cultural values that conflict with traditional beliefs. In conclusion, families should exercise conscious discernment, selecting educational and informative programming while limiting passive viewing time."
    ],
    paragraphsAr: [
      "منذ إطلاق أوائل أقمار الاتصالات الصناعية مثل تلستار في ستينيات القرن الماضي، أعاد البث الفضائي تشكيل المجتمع الإنساني بصورة جذرية. تجلب القنوات الفضائية مئات القنوات المتنوعة إلى ملايين المنازل، ناقلة الأخبار العالمية العاجلة على الهواء مباشرة، والأفلام الوثائقية التثقيفية، والبطولات الرياضية الكبرى إلى شاشاتنا.",
      "ومع ذلك، فإن المشاهدة الفضائية المفتوحة بلا ضوابط قد تخلف آثاراً سلبية؛ إذ تعرض الأطفال لمشاهد العنف، والمادية الاستهلاكية، وقيم ثقافية تتعارض مع معتقداتنا وتقاليدنا. وختاماً، يتعين على الأسر ممارسة رقابة واعية واختيار البرامج التعليمية والتثقيفية الهادفة وتحديد أوقات المشاهدة."
    ],
    keywords: [
      { word: "satellite broadcasting", meaning: "البث الفضائي بالأقمار الصناعية" },
      { word: "breaking news", meaning: "أخبار عاجلة" },
      { word: "materialism", meaning: "مادية استهلاكية" },
      { word: "discernment", meaning: "تمييز وحكمة وبصيرة" }
    ],
    goldenTips: [
      "اربط الإنشاء بقمر تلستار (Telstar) المذكور في قطعة الوحدة السادسة.",
      "وازن بين الإيجابيات (الأخبار والتعليم) والسلبيات (العنف وإهدار الوقت)."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Satellite TV enables instant live broadcasting of global ______ news.",
        missingWord: "breaking",
        options: ["breaking", "broken", "silent", "sleeping"]
      }
    ]
  },
  {
    id: "5th-essay-u7-traditional-souqs",
    unitId: 57,
    titleAr: "إنشاء الوحدة السابعة: الأسواق الشعبية التراثية في العراق (الشورجة والصفافير)",
    titleEn: "Historic Souqs of Baghdad: Preserving Ancient Iraqi Craftsmanship",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 220",
    paragraphsEn: [
      "The historic souqs of Baghdad are vibrant living museums that capture the soul and ancient commercial heritage of Iraq. Walking through Souq Al-Safafir, one is greeted by the rhythmic sound of copper-smiths hammering raw sheets of brass into ornate teapots, trays, and antique lanterns, an artisanal craft passed down from father to son since the Abbasid Caliphate.",
      "Just nearby lies Souq Al-Shorja, the city's oldest and most fragrant marketplace, famous for overflowing sacks of cardamom, saffron, aromatic herbs, and traditional sweets. These heritage markets are not merely retail shopping centres; they are cherished cultural sanctuaries where historic architecture, social camaraderie, and authentic Iraqi identity endure."
    ],
    paragraphsAr: [
      "تعد أسواق بغداد التاريخية متاحف حية نابضة تختزل روح العراق وتراثه التجاري العريق. فعند التجوال في سوق الصفافير، تستقبلك إيقاعات مطارق النحاسين الماهرة وهي تشكل صفائح النحاس إلى أباريق شاي مزخرفة وصوانٍ وفوانيس تراثية بديعة، في حرفة يدوية يتوارثها الأبناء عن الآباء منذ العصر العباسي.",
      "وعلى مقربة منه يقع سوق الشورجة، أقدم وأعطر أسواق العاصمة، المشهور بأكياس الهيل والزعفران والأعشاب العطرية والحلويات الشعبية. وليست هذه الأسواق مجرد مراكز للتبضع، بل هي معالم ثقافية أصيلة تخلد العمارة التاريخية والتآلف الاجتماعي والهوية العراقية المتجذرة."
    ],
    keywords: [
      { word: "living museums", meaning: "متاحف حية" },
      { word: "coppersmiths", meaning: "صاغة النحاس والصفافير" },
      { word: "Abbasid Caliphate", meaning: "الخلافة العباسية" },
      { word: "fragrant marketplace", meaning: "سوق عطر وفواح" }
    ],
    goldenTips: [
      "اربط الإنشاء بقطعتي سوق الشورجة وسوق الصفافير المدروسة في الوحدتين الأولى والسابعة.",
      "وظف جمل الوصل (where craftsmen hammer / which is famous for)."
    ],
    clozeSentences: [
      {
        textWithBlanks: "Souq Al-Safafir is famous for artisans who hammer handmade ______ utensils.",
        missingWord: "copper",
        options: ["copper", "plastic", "paper", "glass"]
      }
    ]
  },
  {
    id: "5th-essay-u8-holiday-event",
    unitId: 58,
    titleAr: "إنشاء الوحدة الثامنة: تجربة عطلة لا تُنسى أو حدث غير اعتيادي",
    titleEn: "An Unforgettable Holiday Experience in Northern Iraq",
    ministerialWeight: "20 درجة وزارية - الملزمة ص 221",
    paragraphsEn: [
      "Last spring, my family and I embarked on an extraordinary holiday trip to the mountains of Kurdistan in northern Iraq. Leaving behind the bustling streets of Baghdad, we were welcomed by breathtaking landscapes of snow-capped peaks, verdant green valleys, and crystal-clear waterfalls cascading down the cliffs of Gali Ali Bag.",
      "We spent our days hiking through pristine mountain paths, exploring historic caves, and tasting delicious local walnuts, fresh honey, and grilled kebabs prepared over natural wood fires. Sitting under the starlit mountain sky while drinking hot cardamon tea remains one of the most serene and unforgettable memories of my life."
    ],
    paragraphsAr: [
      "في الربيع الماضي، انطلقت مع عائلتي في رحلة عطلة استثنائية إلى جبال كردستان في شمال العراق. وبعد أن تركنا وراءنا شوارع بغداد الصاخبة، استقبلتنا الطبيعة الساحرة بقممها المغطاة بالثلوج، ووديانها الخضراء اليانعة، وشلالات كلي علي بك النقية المتدفقة من الجروف الصخرية.",
      "أمضينا أيامنا في صعود الممرات الجبلية البكر، واستكشاف الكهوف الأثرية، وتذوق الجوز البري المحلي والعسل الجبلي الصافي والكباب المشوي على الحطب. وتظل لحظات الجلوس تحت سماء الجبال المرصعة بالنجوم واحتساء الشاي المهيل من أصفى وأجمل الذكريات التي لن أنساها طوال حياتي."
    ],
    keywords: [
      { word: "snow-capped peaks", meaning: "قمم تكسوها الثلوج" },
      { word: "verdant valleys", meaning: "وديان خضراء غناء" },
      { word: "cascading waterfalls", meaning: "شلالات متدفقة" },
      { word: "serene memories", meaning: "ذكريات صافية هادئة" }
    ],
    goldenTips: [
      "وظف أسلوب الوصف الجمالي السردي (Last spring, we embarked on...).",
      "استخدم صفات مكانية وطبيعية راقية كـ verdant و breathtaking."
    ],
    clozeSentences: [
      {
        textWithBlanks: "The waterfalls of Gali Ali Bag are surrounded by ______ green valleys.",
        missingWord: "verdant",
        options: ["verdant", "dry", "empty", "polluted"]
      }
    ]
  }
];
