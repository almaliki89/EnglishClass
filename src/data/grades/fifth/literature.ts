import { LiteratureItem } from '../../../types';

// =========================================================================
// الأدب المقرّر للصف الخامس الإعدادي - ملزمة الأستاذ عمار غالب 2026
// Literature Spot (ص 188 - 211)
// 1. رواية نساء صغيرات (Little Women) - لويزا ماي ألكوت (ص 188 - 200)
// 2. مسرحية العاصفة (The Tempest) - وليم شكسبير (ص 201 - 211)
// =========================================================================

export const FIFTH_PREPARATORY_LITERATURE: LiteratureItem[] = [
  {
    id: "lit-5th-little-women",
    title: "Little Women",
    titleAr: "نساء صغيرات (رواية)",
    author: "Louisa May Alcott",
    authorAr: "لويزا ماي ألكوت",
    authorYears: "1832 - 1888",
    authorBioEn: [
      "Louisa May Alcott was an acclaimed American novelist, short story writer, and poet, best known as the author of the novel 'Little Women' published in 1868.",
      "She was born in Pennsylvania and raised in Boston and Concord, Massachusetts, growing up among prominent intellectuals like Ralph Waldo Emerson and Henry David Thoreau.",
      "Her family was impoverished, and she worked as a teacher, seamstress, and nurse during the American Civil War before achieving immense literary and financial success with her autobiographical masterpiece."
    ],
    authorBioAr: [
      "لويزا ماي ألكوت كاتبة وروائية وشاعرة أمريكية شهيرة، عُرفت عالمياً بتأليف روايتها الخالدة 'نساء صغيرات' المنشورة عام 1868.",
      "ولدت في ولاية بنسلفانيا ونشأت في بوسطن وكونكورد بين كبار المفكرين الأمريكيين مثل إيمرسون وثورو.",
      "عاشت عائلتها في فقر مدقع، فعملت معلمة وخياطة وممرضة في الحرب الأهلية الأمريكية قبل أن تحقق مجداً أدبياً واستقلالاً مالياً عبر روايتها التي عكست سيرة حياتها وحياة شقيقاتها."
    ],
    authorPrizes: [
      "Inducted into the National Women's Hall of Fame (1996)",
      "One of the best-selling works of American literature worldwide"
    ],
    genre: "Classic Semi-Autobiographical Coming-of-Age Novel",
    genreAr: "رواية كلاسيكية شبه ذاتية عن النضج والنشأة الأدبية",
    image: "/assets/images/little_women_scene_1794251359174.jpg",
    imageCaptionAr: "الشقيقات الأربع من عائلة مارتش (ميغ، وجو تكتب مسرحياتها، وبيث تعزف البيانو، وإيمي ترسم) في منزلهن الدافئ بنيو إنغلاند.",
    imageCaptionEn: "The four March sisters (Meg, Jo writing her stories, Beth at the piano, and Amy painting) in their warm New England living room.",
    galleryImages: [
      {
        url: "/assets/images/little_women_scene_1794251359174.jpg",
        captionAr: "فتيات مارتش في غرفة المعيشة: جو المستقلة تكتب بشغف وإيمي ترسم وبيث تعزف الموسيقى.",
        captionEn: "The March sisters in their living room: independent Jo writing with passion, Amy painting, and Beth playing music."
      }
    ],
    summaryAr: "تروي الرواية قصة حياة أربع شقيقات من عائلة مارتش (ميغ، جو، بيث، وإيمي) أثناء غياب والدهن للخدمة كقسيس في الجيش خلال الحرب الأهلية الأمريكية. تناضل الفتيات مع والدتهن الحبيبة (مارمي) ضد الفقر والحرمان بروح ملؤها الكرم والمحبة والإيثار، ويتعلمن دروساً عميقة في التغلب على عيوبهن الشخصية وصنع الفرح من أبسط الأشياء مع جارهن الثري لوري وجده السيد لورنس.",
    summaryEn: "Little Women chronicles the lives and moral growth of four sisters—Meg, Jo, Beth, and Amy March—living in modest circumstances in New England while their father serves as an army chaplain in the American Civil War. Guided by their affectionate mother (Marmee), the sisters navigate poverty, societal expectations, personal ambitions, and family devotion.",
    keyThemes: [
      "التضامن الأسري والمحبة في مواجهة الفقر والحرب",
      "استقلالية المرأة وطموحها الإبداعي (شخصية جو مارتش الكاتبة)",
      "قيمة العطاء ومساعدة الفقراء رغم شح الموارد",
      "التحلي بالصبر وتجاوز الغرور والغيرة"
    ],
    keyThemesEn: [
      "Family solidarity and selfless love amidst hardship",
      "Female independence and literary ambition through Jo March",
      "Generosity and charity toward those with fewer resources",
      "Moral growth, patience, and conquering personal flaws"
    ],
    characters: [
      {
        name: "Jo (Josephine) March",
        nameAr: "جو (جوزفين) مارتش",
        role: "Second Daughter & Aspiring Author",
        roleAr: "الابنة الثانية والكاتبة الطموحة",
        description: "The tomboyish, fiercely independent protagonist who loves books, writes plays for her sisters, and resists traditional societal constraints on women.",
        descriptionAr: "بطلة الرواية المستقلة، عاشقة للقراءة وتأليف المسرحيات، ترفض القيود الاجتماعية التقليدية وتكدّ لدعم عائلتها مالياً بقلمها."
      },
      {
        name: "Meg (Margaret) March",
        nameAr: "ميغ (مارغريت) مارتش",
        role: "Eldest Sister",
        roleAr: "الابنة الكبرى",
        description: "The beautiful eldest daughter who dreams of luxury and fine dresses but embraces duty, maternal warmth, and true love over shallow wealth.",
        descriptionAr: "الابنة الكبرى الجميلة؛ تعشق الأناقة والفساتين الفاخرة ولكنها تتحلى بروح المسؤولية وترعى شقيقاتها وتفضل الحب الحقيقي على الثروة الزائفة."
      },
      {
        name: "Beth (Elizabeth) March",
        nameAr: "بيث (إليزابيث) مارتش",
        role: "Third Sister & Pianist",
        roleAr: "الابنة الثالثة وعازفة البيانو",
        description: "The gentle, shy, and musical sister who stays at home, adores playing the piano, and acts as the moral heartbeat of the family.",
        descriptionAr: "الفتاة الرقيقة الهادئة والخجولة جداً؛ تعشق العزف على البيانو وتمثل الضمير الأخلاقي والقلب الصافي الذي يجمع الأسرة."
      },
      {
        name: "Amy March",
        nameAr: "إيمي مارتش",
        role: "Youngest Sister & Artist",
        roleAr: "الابنة الصغرى والرسامة",
        description: "The vain yet talented youngest sister who loves drawing and painting, striving for refinement and social grace.",
        descriptionAr: "الابنة الصغرى الموهوبة في الرسم؛ تميل إلى الدلال وحب الأناقة وتتعلم بالتجربة كيف تتخلص من الأنانية والغرور."
      },
      {
        name: "Mrs. March (Marmee)",
        nameAr: "السيدة مارتش (مارمي)",
        role: "Mother & Moral Guide",
        roleAr: "الأم والمربية الفاضلة",
        description: "The wise, loving, and patient mother who guides her four daughters through gentle moral lessons and compassionate example.",
        descriptionAr: "الأم الحكيمة الصبورة التي تغرس في نفوس بناتها قيم الإيثار والشجاعة والتسامح ومساعدة الفقراء."
      },
      {
        name: "Theodore Laurence (Laurie)",
        nameAr: "ثيودور لورنس (لوري)",
        role: "Wealthy Orphan Neighbour",
        roleAr: "الجار الشاب الثري واليتيم",
        description: "The lonely boy next door who lives with his wealthy grandfather; he finds joyful family belonging and loyal friendship with the March girls.",
        descriptionAr: "الفتى اليتيم الذي يعيش في القصر المجاور مع جده الثري الصارم؛ يجد في عائلة مارتش الدفء والبهجة والصداقة المخلصة."
      }
    ],
    quotes: [
      {
        speaker: "Jo March",
        textEn: "Christmas won't be Christmas without any presents.",
        textAr: "لن يكون عيد الميلاد عيداً حقيقياً بدون أي هدايا."
      },
      {
        speaker: "Mrs. March (Marmee)",
        textEn: "Money is a needful and precious thing, but I'd rather see you poor men's wives, if you were happy, beloved, contented, than queens on thrones, without self-respect and peace.",
        textAr: "المال أمر نافع وثمين، لكنني أفضل أن أراكن زوجات لرجال فقراء إن كنتن سعيدات ومحبوبات وراضيات، على أن أراكن ملكات على عروش محرومات من احترام الذات والسلام الداخلي."
      }
    ],
    ministerialQA: [
      {
        id: "lw-qa-1",
        question: "Who is the author of 'Little Women', and in which year was it published?",
        questionAr: "من هي مؤلفة رواية 'نساء صغيرات' وفي أي عام نُشرت الرواية؟",
        answer: "The author is the American writer Louisa May Alcott, and the novel was published in 1868.",
        answerAr: "المؤلفة هي الكاتبة الأمريكية لويزا ماي ألكوت، ونُشرت الرواية عام 1868.",
        year: "الملزمة ص 189",
        keyHint: "Louisa May Alcott - 1868"
      },
      {
        id: "lw-qa-2",
        question: "Where was the March sisters' father during the events of the novel?",
        questionAr: "أين كان والد فتيات عائلة مارتش أثناء أحداث الرواية؟",
        answer: "He was serving as a chaplain in the Union army during the American Civil War.",
        answerAr: "كان يخدم كقسيس في جيش الاتحاد خلال الحرب الأهلية الأمريكية.",
        year: "الملزمة ص 191",
        keyHint: "Chaplain in the American Civil War"
      },
      {
        id: "lw-qa-3",
        question: "What generous sacrifice did the March girls make on Christmas morning?",
        questionAr: "ما هي التضحية الكريمة التي قدمتها فتيات مارتش في صباح عيد الميلاد؟",
        answer: "They gave away their delicious Christmas breakfast to the Hummel family, a poor starving mother and her six sick children.",
        answerAr: "تبرعن بفطور عيد الميلاد الشهي لعائلة هامل الفقيرة الجائعة المكونة من أم وستة أطفال مرضى.",
        year: "الملزمة ص 194",
        keyHint: "Gave breakfast to poor Hummel family"
      },
      {
        id: "lw-qa-4",
        question: "How did Mr. Laurence, the wealthy neighbour, reward the March girls for their kindness?",
        questionAr: "كيف كافأ الجار الثري السيد لورنس فتيات مارتش على كرمهن وإيثارهن؟",
        answer: "He sent them a magnificent evening feast of ice cream, cake, fruit, flowers, and French bonbons.",
        answerAr: "أرسل لهن مأدبة عشاء فاخرة من الآيس كريم والكعك والفواكه والزهور والحلوى الفرنسية.",
        year: "الملزمة ص 197",
        keyHint: "Feast of ice cream, cake, and flowers"
      },
      {
        id: "lw-qa-5",
        question: "What did Jo March sell to help her sick father, and how much did she receive?",
        questionAr: "ماذا باعت جو مارتش لمساعدة والدها المريض، وكم المبلغ الذي حصلت عليه؟",
        answer: "She cut and sold her long, beautiful chestnut hair to a wig-maker and received twenty-five dollars ($25).",
        answerAr: "قصت وباعت شعرها الكستنائي الطويل الجميل لصانع شعر مستعار وحصلت على 25 دولاراً لمصاريف سفر والدتها لعلاج والدها.",
        year: "الملزمة ص 199",
        keyHint: "Sold her long hair for $25"
      }
    ]
  },
  {
    id: "lit-5th-the-tempest",
    title: "The Tempest",
    titleAr: "العاصفة (مسرحية)",
    author: "William Shakespeare",
    authorAr: "وليم شكسبير",
    authorYears: "1564 - 1616",
    authorBioEn: [
      "William Shakespeare was an English playwright, poet, and actor, widely regarded as the greatest dramatist in the English language and the world's pre-eminent poet.",
      "He was born in Stratford-upon-Avon, Warwickshire, and wrote 'The Tempest' around 1610-1611, regarded as his last solitary play and profound dramatic farewell.",
      "His works explore universal human themes of power, justice, betrayal, forgiveness, romantic love, and the transience of mortal existence."
    ],
    authorBioAr: [
      "وليم شكسبير كاتب مسرحي وشاعر وممثل إنجليزي، يُعتبر بالإجماع أعظم كاتب مسرحي في تاريخ اللغة الإنكليزية وشاعر العالم الأبرز.",
      "ولد في بلدة ستراتفورد-أبون-أفون، وكتب مسرحية 'العاصفة' في حدود عام 1610-1611، وتُعتبر آخر مسرحية كتبها منفرداً ووداعه الدرامي والمسرحي العظيم.",
      "تتناول أعماله قضايا كونية خالدة حول السلطة، والعدالة، والخيانة، والغفران والتسامح، والحب، وزوال الدنيا."
    ],
    authorPrizes: [
      "The National Poet of England (The Bard of Avon)",
      "Universal cornerstone of global world literature"
    ],
    genre: "Jacobean Dramatic Romance / Romantic Comedy",
    genreAr: "مسرحية رومانسية درامية خيالية (العصر اليعقوبي)",
    image: "/assets/images/the_tempest_scene_1794251373907.jpg",
    imageCaptionAr: "الساحر بروسبيرو يرفع عصاه على صخور الجزيرة السحرية مستحضراً العاصفة، بجانبه روح الهواء أرييل وابنته الرقيقة ميراندا.",
    imageCaptionEn: "Sorcerer Prospero raising his magical staff on the island cliff summoning the tempest, with spirit Ariel and compassionate Miranda.",
    galleryImages: [
      {
        url: "/assets/images/the_tempest_scene_1794251373907.jpg",
        captionAr: "بروسبيرو وأرييل وميراندا ومشهد استحضار العاصفة البحرية على الجزيرة السحرية.",
        captionEn: "Prospero, Ariel, and Miranda witnessing the dramatic tempest raised over the magical island."
      }
    ],
    summaryAr: "تدور المسرحية على جزيرة سحرية نائية في البحر الأبيض المتوسط. بطلها بروسبيرو، دوق ميلانو الشرعي، الذي استولى أخوه الخائن أنطونيو على عرشه بمساعدة ألونسو ملك نابولي ونفاه مع طفلته الرضيعة ميراندا في قارب متهالك إلى البحر. يتعلم بروسبيرو فنون السحر ويسيطر على روح الهواء 'أرييل' والكائن المتوحش 'كاليبان'. وبعد 12 عاماً، يستحضر بروسبيرو عاصفة بحرية هائلة تجلب سفينة أعدائه إلى شاطئ الجزيرة، لكنه بدلاً من الانتقام الدامي يختار الحكمة والعفو والصفح ويزوج ابنته ميراندا للأمير فرديناند ويستعيد دوقيته بسلام.",
    summaryEn: "Set on a remote magical Mediterranean island, The Tempest follows Prospero, the rightful Duke of Milan, who was usurped by his ambitious brother Antonio with the help of Alonso, King of Naples. Exiled with his infant daughter Miranda, Prospero masters the magic arts and controls the spirit Ariel and the earth-bound monster Caliban. When a ship carrying his treacherous enemies passes by, Prospero raises a tempest to bring them to justice, ultimately choosing reconciliation and forgiveness over vengeance.",
    keyThemes: [
      "الغفران والصفح مقابل الانتقام (The rarer action is in virtue than in vengeance)",
      "قوة الفن والسحر ومسؤولية الحاكم العادل",
      "قضية الاستعمار والطبيعة الإنسانية من خلال شخصية كاليبان",
      "الحب البريء والوئام بين العائلات المتخاصمة"
    ],
    keyThemesEn: [
      "Forgiveness and reconciliation prevailing over bitter revenge",
      "The power of art, illusion, and moral authority",
      "Colonialism and nature versus nurture through Caliban",
      "Redemptive love bringing peace to feuding dynasties"
    ],
    characters: [
      {
        name: "Prospero",
        nameAr: "بروسبيرو",
        role: "Rightful Duke of Milan & Sorcerer",
        roleAr: "دوق ميلانو الشرعي والساحر الحكيم",
        description: "The deposed ruler who governs the magical island; he orchestrates events through his magical books and wand, ultimately choosing mercy.",
        descriptionAr: "الحاكم المعزول الذي يسيطر على الجزيرة السحرية؛ يمتلك كتب السحر وعصا التحكم ولكنه يختار الصفح والتخلي عن السحر في النهاية."
      },
      {
        name: "Miranda",
        nameAr: "ميراندا",
        role: "Prospero's Compassionate Daughter",
        roleAr: "ابنة بروسبيرو الرقيقة والرحيمة",
        description: "Brought up on the isolated island with no memory of civilization; she embodies pure empathy, wonder, and innocence.",
        descriptionAr: "نشأت في الجزيرة المعزولة منذ طفولتها؛ تجسد الرحمة الفطرية والبراءة والتعاطف مع ركاب السفينة الغارقة."
      },
      {
        name: "Ariel",
        nameAr: "أرييل",
        role: "Air Spirit & Faithful Servant",
        roleAr: "روح الهواء الخفيفة والخادم الوفي",
        description: "A shapeshifting spirit rescued by Prospero from the cloven pine of the witch Sycorax; he performs magical tasks longing for freedom.",
        descriptionAr: "كائن أثيري سحري أنقذه بروسبيرو من شجرة الصنوبر التي حبسته فيها الساحرة الشريرة سيكوراكس؛ ينفذ أوامر بروسبيرو طمعاً في نيل حريته."
      },
      {
        name: "Caliban",
        nameAr: "كاليبان",
        role: "Savage Native of the Island",
        roleAr: "المتوحش ابن الساحرة وسكان الجزيرة الأصليين",
        description: "The deformed son of Sycorax who claims ownership of the island; he represents primal nature and the grievances of the colonized.",
        descriptionAr: "ابن الساحرة سيكوراكس المشوه؛ يرى أنه صاحب الجزيرة الشرعي ويدخل في صراع مع بروسبيرو حول اللغة والسلطة."
      },
      {
        name: "Ferdinand",
        nameAr: "فرديناند",
        role: "Prince of Naples",
        roleAr: "أمير نابولي وابن الملك ألونسو",
        description: "The noble prince who survives the shipwreck, falls deeply in love with Miranda at first sight, and humbly endures Prospero's trials.",
        descriptionAr: "الأمير الشاب النبيل الذي يقع في حب ميراندا من النظرة الأولى ويعمل بصبر وإخلاص لإثبات جدارته بالزواج منها."
      },
      {
        name: "Antonio",
        nameAr: "أنطونيو",
        role: "Prospero's Usurping Brother",
        roleAr: "شقيق بروسبيرو الخائن والغاصب للعرش",
        description: "The ambitious, treacherous brother who seized the Dukedom of Milan and conspired to murder his own kin.",
        descriptionAr: "الأخ الغادر الذي تآمر مع ملك نابولي لعزل أخيه بروسبيرو والاستيلاء على عرش ميلانو بقوة السلاح."
      }
    ],
    quotes: [
      {
        speaker: "Prospero",
        textEn: "The rarer action is in virtue than in vengeance.",
        textAr: "إن الفضيلة والسمو يكمنان في التسامح والعفو، وليس في الانتقام."
      },
      {
        speaker: "Miranda",
        textEn: "O wonder! How many goodly creatures are there here! How beauteous mankind is! O brave new world, that has such people in't!",
        textAr: "يا للعجب! كم من المخلوقات النبيلة هنا! ما أجمل الجنس البشري! يا له من عالم جديد شجاع يضم مثل هؤلاء الناس!"
      },
      {
        speaker: "Caliban",
        textEn: "You taught me language; and my profit on't is, I know how to curse.",
        textAr: "علمتني لغتكم؛ وكل ما ربحته منها هو أنني تعلمت كيف ألعنكم بها."
      }
    ],
    ministerialQA: [
      {
        id: "temp-qa-1",
        question: "Who wrote 'The Tempest', and what type of play is it?",
        questionAr: "من كتب مسرحية 'العاصفة' وما هو تصنيفها الأدبي؟",
        answer: "It was written by William Shakespeare around 1611, classified as a romantic comedy or Jacobean dramatic romance.",
        answerAr: "كتبها وليم شكسبير حوالي عام 1611، وتصنف كمسرحية رومانسية درامية (Romantic Comedy / Romance).",
        year: "الملزمة ص 201",
        keyHint: "William Shakespeare - 1611 - Romance"
      },
      {
        id: "temp-qa-2",
        question: "Why was Prospero banished from Milan twelve years before the play begins?",
        questionAr: "لماذا نُفي بروسبيرو من ميلانو قبل 12 عاماً من بدء أحداث المسرحية؟",
        answer: "Because his treacherous brother Antonio usurped his throne with the assistance of Alonso, King of Naples, taking advantage of Prospero's dedication to secret studies and books.",
        answerAr: "لأن شقيقه الخائن أنطونيو استولى على عرشه بمساعدة ألونسو ملك نابولي مستغلاً انشغال بروسبيرو بالدراسة والكتب.",
        year: "الملزمة ص 204",
        keyHint: "Antonio usurped his throne with King Alonso"
      },
      {
        id: "temp-qa-3",
        question: "How did Ariel come to be imprisoned, and who freed him?",
        questionAr: "كيف سُجن أرييل ومن الذي حرره؟",
        answer: "The evil witch Sycorax imprisoned Ariel inside a cloven pine tree for refusing her wicked commands, and Prospero released him using his magic.",
        answerAr: "حبسته الساحرة الشريرة سيكوراكس داخل شجرة صنوبر مشقوقة لرفضه تنفيذ أوامرها الشريرة، وحرره بروسبيرو بسحره.",
        year: "الملزمة ص 207",
        keyHint: "Imprisoned in pine tree by Sycorax, freed by Prospero"
      },
      {
        id: "temp-qa-4",
        question: "What did Prospero decide to do with his enemies at the end of the play?",
        questionAr: "ماذا قرر بروسبيرو أن يفعل بأعدائه في نهاية المسرحية؟",
        answer: "He decided to forgive them all instead of taking revenge, declaring that virtue and mercy are far noble than vengeance.",
        answerAr: "قرر أن يصفح عنهم جميعاً ويعفو عن خيانتهم بدلاً من الانتقام، مؤكداً أن الفضيلة والرحمة أسمى بكثير من الثأر.",
        year: "الملزمة ص 210",
        keyHint: "Decided to forgive them instead of taking revenge"
      },
      {
        id: "temp-qa-5",
        question: "What did Prospero do with his magical staff and book before returning to Milan?",
        questionAr: "ماذا فعل بروسبيرو بعصاه وكتبه السحرية قبل العودة إلى ميلانو؟",
        answer: "He broke his staff and buried it deep in the earth, and drowned his book of magic deeper than any plumb-line could plunge into the sea.",
        answerAr: "كسر عصاه السحرية ودفنها في باطن الأرض، وأغرق كتاب سحره في أعمق نقطة من مياه البحر ليعود إنساناً وحاكماً عادلاً.",
        year: "الملزمة ص 211",
        keyHint: "Broke his staff and drowned his book in the sea"
      }
    ]
  }
];
