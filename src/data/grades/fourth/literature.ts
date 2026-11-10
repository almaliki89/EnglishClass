import { LiteratureItem } from '../../../types';

// =========================================================================
// الأدب المقرّر للصف الرابع الإعدادي - ملزمة النموذجية 2026
// Literature Spot (ص 150 - 170)
// 1. رواية جزيرة الكنز (Treasure Island) - رابرت لويس ستيفنسون (ص 150 - 160)
// 2. رواية حول العالم في 80 يوماً (Around the World in 80 Days) - جول فيرن (ص 161 - 170)
// =========================================================================

export const FOURTH_PREPARATORY_LITERATURE: LiteratureItem[] = [
  {
    id: "lit-4th-treasure-island",
    title: "Treasure Island",
    titleAr: "جزيرة الكنز (رواية مغامرات)",
    author: "Robert Louis Stevenson",
    authorAr: "رابرت لويس ستيفنسون",
    authorYears: "1850 - 1894",
    authorBioEn: [
      "Robert Louis Stevenson was a celebrated Scottish novelist, poet, and travel writer, best known for his classic adventure novels 'Treasure Island' (1883) and 'Strange Case of Dr Jekyll and Mr Hyde' (1886).",
      "Born in Edinburgh, Scotland, Stevenson suffered from chronic lung illness throughout his life, travelling extensively across Europe and the Pacific in search of warmer climates.",
      "'Treasure Island' was originally published as a serialized story in the children's magazine 'Young Folks' between 1881 and 1882 before being published as a standalone novel in 1883, shaping modern pirate mythology."
    ],
    authorBioAr: [
      "رابرت لويس ستيفنسون روائي وشاعر وكاتب أدب رحلات اسكتلندي شهير، عرف بتأليف أشهر روايات المغامرات الكلاسيكية في العالم مثل 'جزيرة الكنز' (1883) و'الدكتور جيكل والمستر هايد' (1886).",
      "ولد في أدنبرة باسكتلندا، وعانى من مرض رنوي مزمن طوال حياته، فارتحل عبر أوروبا والمحيط الهادئ بحثاً عن المناخ الدافئ.",
      "نُشرت 'جزيرة الكنز' أولاً كمجموعة فصول متسلسلة في مجلة الأطفال 'Young Folks' بين عامي 1881 و 1882 قبل أن تصبح رواية قائمة بذاتها عام 1883، صانعة أسطورة القراصنة الحديثة."
    ],
    authorPrizes: [
      "Inducted into the Scottish Writers' Hall of Fame",
      "One of the top 30 most translated authors worldwide"
    ],
    genre: "Classic Nautical Pirate Adventure Novel",
    genreAr: "رواية مغامرات قراصنة وأبحر كلاسيكية",
    image: "/assets/images/treasure_island_scene_1794251330821.jpg",
    imageCaptionAr: "جيم هوكينز مع القرصان لونغ جون سيلفر وخريطة كنز الكابتن فلينت على شاطئ الجزيرة الاستوائية وأمامهما سفينة هسبانيولا.",
    imageCaptionEn: "Jim Hawkins with pirate Long John Silver examining Captain Flint's treasure map on the island shore with the Hispaniola anchored in the bay.",
    galleryImages: [
      {
        url: "/assets/images/treasure_island_scene_1794251330821.jpg",
        captionAr: "جيم هوكينز والقرصان ذو الساق الخشبية لونغ جون سيلفر وخريطة الكنز على شاطئ جزيرة الكنز.",
        captionEn: "Jim Hawkins and one-legged pirate Long John Silver with the treasure map on Treasure Island."
      }
    ],
    summaryAr: "تبدأ الرواية في نزل يملكه والد الصبي الشاب جيم هوكينز (Jim Hawkins)، حيث ينزل بحار قاسي يُدعى بيلي بونز يحمل مفتاح صندوق بحري سري. بعد مقتل بيلي بونز على يد القراصنة، يعثر جيم على الخريطة الأسطورية لكنز الكابتن فلينت الشرير (Captain Flint). يبحر جيم مع الدكتور ليفسي والسيد تريلوني على متن السفينة هسبانيولا، لكن طباخ السفينة ذو الرجل الخشبية لونغ جون سيلفر (Long John Silver) يقود تمرداً خفياً للقراصنة للاستولاء على الخريطة. وعلى الجزيرة المعزولة، يلتقي جيم مع بن غان (Ben Gunn) المتروك هناك منذ 3 سنوات، والذي نجح في استخراج الكنز ونقله إلى كهفه الآمن، لينتصر جيم وحلفاؤه ويتغلبوا على القراصنة.",
    summaryEn: "Treasure Island tells the thrilling adventure of young Jim Hawkins, who discovers a mysterious treasure map in the sea chest of a deceased pirate at his parents' inn. Joining Dr. Livesey and Squire Trelawney aboard the Hispaniola, Jim sets sail for a uncharted island. However, the ship's cook, the one-legged pirate Long John Silver, leads a bloody mutiny to claim Flint's buried gold. Guided by courage and aided by Ben Gunn, a marooned sailor, Jim secures the treasure and outwits the mutineers.",
    keyThemes: [
      "الشجاعة والذكاء في مواجهة الخطر والأعداء",
      "الجموح والطمع مقابل الوفاء والأخلاق",
      "صعوبة التمييز بين الصديق والعدو (شخصية لونغ جون سيلفر المزدوجة)",
      "النضج والاعتماد على الذات في سن الشباب"
    ],
    keyThemesEn: [
      "Courage and quick resourcefulness in times of crisis",
      "Greed versus loyalty and moral duty",
      "The duality of human nature through Long John Silver",
      "Coming-of-age and self-reliance of young Jim Hawkins"
    ],
    characters: [
      {
        name: "Jim Hawkins",
        nameAr: "جيم هوكينز",
        role: "Protagonist & Narrator",
        roleAr: "البطل والراوي الشاب",
        description: "The brave and observant young son of an innkeeper who finds Flint's treasure map, embarks on the voyage, and repeatedly saves the expedition from mutineers.",
        descriptionAr: "الفتى الشاب الشجاع والذكي، ابن صاحب النزل، يعثر على خريطة الكنز ويبحر على متن هسبانيولا وينقذ أصدقاءه عدة مرات من خيانة القراصنة."
      },
      {
        name: "Long John Silver",
        nameAr: "لونغ جون سيلفر",
        role: "One-Legged Pirate Cook",
        roleAr: "طباخ السفينة الأعرج وقائد التمرد",
        description: "The charismatic, cunning one-legged pirate who poses as a friendly cook while secretly recruiting Flint's former crewmates to seize the ship and treasure.",
        descriptionAr: "طباخ السفينة ذو الرجل الخشبية والببغاء المتكلم؛ يتظاهر باللطف والدهاء بينما يخطط لتمرد دامي للسيطرة على الكنز."
      },
      {
        name: "Ben Gunn",
        nameAr: "بن غان",
        role: "Marooned Pirate on the Island",
        roleAr: "البحار المتروك على الجزيرة منذ 3 سنوات",
        description: "A former member of Flint's crew who was abandoned on the island for three years; he digs up the treasure independently and helps Dr Livesey.",
        descriptionAr: "أحد أفراد طاقم الكابتن فلينت القدامى؛ تركه القراصنة وحده في الجزيرة منذ 3 سنوات، فاستخرج الكنز بنفسه ونقله إلى كهفه وحالف جيم والدكتور."
      },
      {
        name: "Dr. Livesey",
        nameAr: "الدكتور ليفسي",
        role: "Fair Magistrate & Ship's Doctor",
        roleAr: "الطبيب الحكيم والقاضي العادل",
        description: "The level-headed doctor and magistrate who maintains discipline, treats sick pirates, and makes a clever strategic deal with Ben Gunn.",
        descriptionAr: "الطبيب الحكيم الشجاع والقاضي الشريف الذي ينظم المدافعة عن الحصن ويعالج المرضى ويتفاوض بحكمة مع بن غان."
      }
    ],
    quotes: [
      {
        speaker: "Long John Silver's Parrot",
        textEn: "Pieces of eight! Pieces of eight!",
        textAr: "قطع من ثمانية! قطع من ثمانية! (صيحة الببغاء التراثية عن قطع النقود الذهبية)."
      },
      {
        speaker: "Ben Gunn",
        textEn: "Marooned. They marooned me. They left me here three years ago.",
        textAr: "تركوني وحيداً معزولاً. تركني القراصنة هنا في الجزيرة منذ ثلاث سنوات."
      }
    ],
    ministerialQA: [
      {
        id: "ti-qa-1",
        question: "Who wrote 'Treasure Island', and in which year was it officially published as a novel?",
        questionAr: "من هو مؤلف رواية 'جزيرة الكنز' وفي أي عام نُشرت رسمياً كرواية؟",
        answer: "It was written by the Scottish author Robert Louis Stevenson and published as a novel in 1883.",
        answerAr: "كتبها المؤلف الاسكتلندي رابرت لويس ستيفنسون ونُشرت كرواية كاملة عام 1883.",
        year: "الملزمة ص 150",
        keyHint: "Robert Louis Stevenson - 1883"
      },
      {
        id: "ti-qa-2",
        question: "Why was Captain Flint considered 'the worst pirate of all'?",
        questionAr: "لماذا كان الكابتن فلينت يُعتبر 'أسوأ القراصنة وأكثرهم شراسة'؟",
        answer: "Because he was ruthlessly violent, robbed dozens of ships, buried immense gold, and killed the six crewmen who helped him bury his treasure.",
        answerAr: "لأنه كان دموي الشراسة، سلب عشرات السفن، ودفن أطنان الذهب وقتل الرجال الستة الذين ساعدوه في دفن الكنز حتى لا يتفوهوا بسره.",
        year: "الملزمة ص 154",
        keyHint: "Violent pirate who killed his own men"
      },
      {
        id: "ti-qa-3",
        question: "Who was Ben Gunn, and how long had he been marooned on the island?",
        questionAr: "من هو بن غان، وكم من الوقت مضى عليه معزولاً ومتروكاً في الجزيرة؟",
        answer: "He was a former pirate from Flint's crew who had been marooned on the island alone for three years.",
        answerAr: "كان بحاراً وقرصاناً سابقاً في طاقم فلينت، تركه القراصنة معزولاً في الجزيرة بمفرده لمدة ثلاث سنوات.",
        year: "الملزمة ص 156",
        keyHint: "Marooned pirate on the island for 3 years"
      },
      {
        id: "ti-qa-4",
        question: "What had Ben Gunn done with Captain Flint's buried treasure before the Hispaniola arrived?",
        questionAr: "ماذا فعل بن غان بكنز الكابتن فلينت المدفون قبل وصول سفينة هسبانيولا؟",
        answer: "During his lonely years on the island, Ben Gunn found Flint's skeleton guide, dug up the treasure, and carried it slowly to his cave for safekeeping.",
        answerAr: "خلال سنوات عزلته، عثر بن غان على مكان الكنز وحفر الحفرة واستخرج الذهب ونقله حجر بحجر إلى كهفه الآمن.",
        year: "الملزمة ص 159",
        keyHint: "Dug up the treasure and stored it in his cave"
      }
    ]
  },
  {
    id: "lit-4th-around-the-world",
    title: "Around the World in 80 Days",
    titleAr: "حول العالم في 80 يوماً (رواية مغامرات رحلات)",
    author: "Jules Verne",
    authorAr: "جول فيرن",
    authorYears: "1828 - 1905",
    authorBioEn: [
      "Jules Verne was a legendary French novelist, poet, and playwright, pioneering the science fiction and modern travel adventure genres through his celebrated 'Extraordinary Journeys' series.",
      "His famous masterpieces include 'Twenty Thousand Leagues Under the Seas' (1870), 'Journey to the Center of the Earth' (1864), and 'Around the World in Eighty Days' (1872).",
      "Verne is the second-most translated author in the world, famed for predicting submarines, space travel, and rapid global transportation systems decades before their invention."
    ],
    authorBioAr: [
      "جول فيرن روائي وشاعر ومسرحي فرنسي أسطوري، يلقب بأب الخيال العلمي وأدب المغامرات العصرية عبر سلسلته الخالدة 'رحلات استثنائية'.",
      "من أشهر شاهكاراته: 'عشرون ألف فرسخ تحت الماء' (1870)، 'رحلة إلى مركز الأرض' (1864)، و'حول العالم في ثمانين يوماً' (1872).",
      "يعتبر ثاني أكثر الكؤلفين ترجمة في تاريخ البشرية، واشتهر بالتنبؤ بالغواصات والرحلات الفضائية ووسائل النقل السريعة قبل اختراعها بعقود."
    ],
    authorPrizes: [
      "Legion of Honour Chevalier (1870) and Officier (1892)",
      "Pioneer of Modern Science Fiction Literature"
    ],
    genre: "Classic Geographical Adventure & Science Romance Novel",
    genreAr: "رواية مغامرة جغرافية وخيال علمي كلاسيكية",
    image: "/assets/images/around_the_world_scene_1794251344918.jpg",
    imageCaptionAr: "فيلياس فوغ ممسكاً بساعته الدقيقة برفقة خادمه باسبارتو والأميرة أودا أمام القطار البخاري ومنطاد الهواء إبان رحلتهم حول العالم.",
    imageCaptionEn: "Phileas Fogg checking his precision pocket watch with valet Passepartout and princess Auda before the steam locomotive and hot air balloon.",
    galleryImages: [
      {
        url: "/assets/images/around_the_world_scene_1794251344918.jpg",
        captionAr: "فيلياس فوغ وباسبارتو والأميرة أودا ومغامرة الطواف حول الكرة الأرضية في 80 يوماً.",
        captionEn: "Phileas Fogg, Passepartout, and Auda on their circumnavigation adventure around the world."
      }
    ],
    summaryAr: "تدور القصة حول السادة الإنجليزي الدقيق والمتحفظ فيلياس فوغ (Phileas Fogg) الذي يقطع رهاناً بقيمة 20,000 جنيه إسترليني مع أعضاء نادi في لندن بإمكانية الطواف حول الكرة الأرضية بأكملها في 80 يوماً فقط، وذلك بفضل فتح قناة السويس وتطور شبكات السكك الحديدية والبخاريات. ينطلق فوغ مع خادمه الفرنسي النشيط باسبارتو (Passepartout). وفي هذه الأثناء، يشتبه المحقق فيكس (Detective Fix) بأن فوغ هو السارق الذي سطا على بنك إنجلترا، فيلاحقهما عبر السويس، والهند، وهونغ كونغ، واليابان، وأمريكا. يواجه فوغ خطوباً ومغامرات جمة وأنقذ الحسناء أودا (Auda) في الهند. وعند عودتهما إلى لندن يظن فوغ أنه خسر الرهان بـ 5 دقائق، لكنه يكتشف أنه كسب يوماً كاملاً (24 ساعة) بسبب سفره باتجاه الشرق عبر خطوط الطول، ليفوز بالرهان ويتزوج أودا.",
    summaryEn: "Around the World in Eighty Days narrates the daring quest of the meticulous English gentleman Phileas Fogg, who wagers £20,000 at the Reform Club that he can circumnavigate the globe in precisely 80 days using new railways and steamships. Accompanied by his French valet Passepartout, Fogg crosses Egypt, India (where he rescues Princess Auda), Hong Kong, Japan, and the United States. Unbeknownst to Fogg, Detective Fix pursues him worldwide believing he stole £55,000 from the Bank of England. Crossing the International Date Line going east, Fogg gains a day, winning the bet and marrying Auda.",
    keyThemes: [
      "الانضباط والهدوء والإرادة الفولاذية أمام المصاعب",
      "تطور التكنولوجيا ووسائل النقل وتصاغر المسافات الجغرافية",
      "الوفاء والشهامة وإيثار إنقاذ الآخرين على المكسب المادي",
      "ظاهرة خطوط الطول وفارق التوقيت الدولي (International Date Line)"
    ],
    keyThemesEn: [
      "Precision, calm composure, and unyielding willpower",
      "Technological progress shrinking global distance",
      "Chivalry and prioritizing human life over monetary gain",
      "Time zones and gaining a day crossing the International Date Line"
    ],
    characters: [
      {
        name: "Phileas Fogg",
        nameAr: "فيلياس فوغ",
        role: "Protagonist & English Gentleman",
        roleAr: "بطل الرواية والشخصية الإنجليزية الدقيقة",
        description: "A wealthy, highly disciplined English gentleman living in London who carefully calculates every second of his schedule and risks his entire fortune on the 80-day bet.",
        descriptionAr: "ثري إنجليزي في لندن، شديد الدقة والانضباط الدقيق بالثواني؛ يخاطر بثروته كلها في الرهان ويظهر شجاعة وإنسانية عالية."
      },
      {
        name: "Jean Passepartout",
        nameAr: "جان باسبارتو",
        role: "French Valet",
        roleAr: "الخادم الفرنسي النشيط والوفي",
        description: "Fogg's newly hired French servant, a former acrobat and gymnast, who is loyal, cheerful, and discovers Fogg gained a day by crossing time zones.",
        descriptionAr: "خادم فوغ الفرنسي؛ كان يعمل لاعب سيرك وألعاب قوى، يتميز بالبهجة والوفاء الشديد وهو من اكتشف كسب اليوم الإضافي في نهاية الرحلة."
      },
      {
        name: "Detective Fix",
        nameAr: "المحقق فيكس",
        role: "Scotland Yard Police Inspector",
        roleAr: "محقق الشرطة الملازم لفوغ",
        description: "The persistent police detective who suspects Fogg of robbing £55,000 from the Bank of England, following him across Asia and America to arrest him.",
        descriptionAr: "محقق شرطة لندن النشيط الذي يظن أن فوغ هو اللص الخفي، فيتعقبه عبر القارات ليعتقله بموجب أمر التوقيف."
      },
      {
        name: "Auda",
        nameAr: "الأميرة أودا",
        role: "Indian Princess & Fogg's Wife",
        roleAr: "الأميرة الهندية الشابة وزوجة فوغ",
        description: "A beautiful young Indian woman rescued by Fogg and Passepartout from a forced sacrificial ritual in India; she accompanies Fogg to London and marries him.",
        descriptionAr: "شابة هندية متعلمة أنقذها فوغ وباسربارتو من الموت حرقاً في طقوس هندية، فتسافر معهما إلى لندن وتتزوج فوغ في ختام المغامرة."
      }
    ],
    quotes: [
      {
        speaker: "Phileas Fogg",
        textEn: "A true Englishman does not joke when he is talking about so serious a matter as a wager.",
        textAr: "الرجل الإنجليزي الحقيقي لا يمزح عندما يتحدث عن أمر جاد كالرهان."
      },
      {
        speaker: "Passepartout",
        textEn: "Boss! Marriage - impossible - for tomorrow is Sunday! - No, today is Saturday!",
        textAr: "سيدي! الزواج غداً غير ممكن أبدأ لأنه الأحد! لا، اليوم هو السبت لقد كسبنا يوماً كاملاً!"
      }
    ],
    ministerialQA: [
      {
        id: "atw-qa-1",
        question: "Who wrote 'Around the World in 80 Days', and in which year was it first published?",
        questionAr: "من هو مؤلف رواية 'حول العالم في 80 يوماً' وفي أي عام نُشرت لأول مرة؟",
        answer: "It was written by the famous French science-fiction novelist Jules Verne and first published in 1872.",
        answerAr: "كتبها الروائي الفرنسي الشهير جول فيرن ونُشرت لأول مرة عام 1872.",
        year: "الملزمة ص 161",
        keyHint: "Jules Verne - 1872"
      },
      {
        id: "atw-qa-2",
        question: "How much was the wager Phileas Fogg made at the Reform Club in London?",
        questionAr: "كم كانت قيمة الرهان الذي قطعه فيلياس فوغ في نادي الإصلاح بلندن؟",
        answer: "He wagered £20,000 (half of his total fortune) that he could travel around the whole world in 80 days.",
        answerAr: "راهن بمبلغ 20,000 جنيه إسترليني (نصف ثروته بالكامل) على قدرته بالطواف حول العالم في 80 يوماً.",
        year: "الملزمة ص 162",
        keyHint: "£20,000 bet to travel world in 80 days"
      },
      {
        id: "atw-qa-3",
        question: "Why did Detective Fix pursue Phileas Fogg and Passepartout across the globe?",
        questionAr: "لماذا تعقب المحقق فيكس فيلياس فوغ وخادمه باسبارتو حول العالم؟",
        answer: "Because he suspected that Phileas Fogg was the bank robber who stole £55,000 from the Bank of England on the day Fogg left London.",
        answerAr: "لأنه اشتبه بأن فوغ هو سارق البنك الخفي الذي سرق 55,000 جنيه من بنك إنجلترا في نفس يوم مغادرته لندن.",
        year: "الملزمة ص 166",
        keyHint: "Suspected Fogg stole £55,000 from Bank of England"
      },
      {
        id: "atw-qa-4",
        question: "How did Phileas Fogg win the bet even though he thought he arrived 5 minutes late in London?",
        questionAr: "كيف فاز فيلياس فوغ بالرهان رغم أنه ظن أنه وصل متأخراً بـ 5 دقائق إلى لندن؟",
        answer: "Because travelling constantly eastwards across time zones allowed him to gain a full 24 hours (one day), arriving in London on Saturday instead of Sunday.",
        answerAr: "لأنه بسفره الدائم باتجاه الشرق عبر خطوط الطول، كسب يوماً كاملاً (24 ساعة) دون أن يدري، فتوصل إلى لندن يوم السبت وليس الأحد.",
        year: "الملزمة ص 169",
        keyHint: "Gained a full day travelling eastwards across time zones"
      }
    ]
  }
];
