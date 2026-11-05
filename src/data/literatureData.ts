import { LiteratureItem } from '../types';
const prideSceneImg = '/assets/images/pride_prejudice_scene_1789805723711.jpg';
const darcyPemberleyImg = '/assets/images/darcy_pemberley_1789806586209.jpg';
const ardenForestImg = '/assets/images/forest_of_arden_1789805734536.jpg';
const rosalindArdenImg = '/assets/images/rosalind_arden_1789806603896.jpg';

export const LITERATURE_DATA: LiteratureItem[] = [
  {
    id: "lit-pride",
    title: "Pride and Prejudice",
    titleAr: "كبرياء وتحامل",
    author: "Jane Austen",
    authorAr: "جين أوستن",
    authorYears: "1775 - 1817",
    image: prideSceneImg,
    galleryImages: [
      {
        url: prideSceneImg,
        captionEn: "Elizabeth Bennet reflecting on Mr. Darcy's letter amidst the English countryside.",
        captionAr: "إليزابيث بينيت مستغرقة في التفكير والتأمل عقب قراءة رسالة السيد دارسي التوضيحية."
      },
      {
        url: darcyPemberleyImg,
        captionEn: "Mr. Darcy and Elizabeth walking in the magnificent grounds of Pemberley estate.",
        captionAr: "السيد دارسي وإليزابيث في حدائق قصر بمبرلي المهيبة، حيث زالت الفوارق والأحكام المسبقة."
      }
    ],
    imageCaptionEn: "Elizabeth Bennet in the pavilion garden, re-evaluating her hasty judgments after reading Darcy's explanatory letter.",
    imageCaptionAr: "إليزابيث بينيت تعيد تقييم أحكامها المتسرعة وكبريائها بعد استيعاب الحقائق الواردة في رسالة السيد دارسي.",
    genre: "Romantic Novel / Classic Fiction / Social Satire",
    genreAr: "رواية رومانسية كلاسيكية / نقد اجتماعي وأخلاقي هادف",

    // سيرة الكاتبة وفق الملزمة الوزارية
    authorBioEn: [
      "Jane Austen was a world-renowned English novelist, born in Steventon, Hampshire, on December 16, 1775.",
      "She was the seventh of eight children born to the Reverend George Austen, an educated clergyman.",
      "She was educated primarily at home through her father's guidance and by reading broadly in his personal library.",
      "She began writing stories, plays, and parodies in her teenage years to entertain her family.",
      "She lived in Steventon, Bath, Southampton, and finally settled in Chawton Cottage, Hampshire, where she revised and completed her greatest novels.",
      "Her published masterpieces include Sense and Sensibility (1811), Pride and Prejudice (1813), Mansfield Park (1814), and Emma (1815).",
      "She published her works anonymously during her lifetime, signed simply 'By a Lady'.",
      "She passed away in Winchester on July 18, 1817, at the age of 41 and was buried in Winchester Cathedral."
    ],
    authorBioAr: [
      "جين أوستن روائية إنجليزية ذات شهرة عالمية خالدة، ولدت في قرية ستيفنتون بمقاطعة هامبشاير في 16 كانون الأول عام 1775.",
      "كانت الابنة السابعة من بين ثمانية أبناء للقس جورج أوستن، وهو رجل دين مثقف ومحب للعلم والأدب.",
      "تلقّت تعليمها وثقافتها في المنزل بفضل رعاية والدها وتشجيعه ومطالعتها الواسعة في مكتبته الضخمة.",
      "بدأت كتابة القصص القصيرة والمسرحيات الساخرة في سن المراهقة بهدف إمتاع أفراد أسرتها.",
      "عاشت في ستيفنتون وباث وساوثهامبتون، ثم استقرت في كوخ تشاوتون بمقاطعة هامبشاير حيث أتمت كتابة أروع رواياتها.",
      "من أشهر أعمالها الروائية الخالدة: العقل والعاطفة (1811)، كبرياء وتحامل (1813)، مانسفيلد بارك (1814)، وإيما (1815).",
      "نشرت رواياتها خلال حياتها دون أن تضع اسمها الصريح عليها، بل كانت تحمل عبارة 'بقلم سيدة' (By a Lady).",
      "توفيت في مدينة وينشستر في 18 تموز عام 1817 عن عمر يناهز 41 عاماً ودُفنت في كاتدرائية وينشستر التاريخية."
    ],
    authorPrizes: [
      "Celebrated as one of the greatest stylists and prose writers in the history of the English novel.",
      "Master of dramatic irony, sharp wit, and psychological character development.",
      "Pride and Prejudice has sold over 20 million copies worldwide and remains a staple of world literature."
    ],

    historicalContextEn: "Set in rural Regency England during the Napoleonic Wars. At this time, women had limited legal and property rights; daughters could not inherit entailed family estates, making strategic marriage the primary pathway to social status, financial security, and survival.",
    historicalContextAr: "تدور أحداث الرواية في الريف الإنجليزي إبان عصر الوصاية والحروب النابليونية مطلع القرن التاسع عشر؛ حيث كانت القوانين تحرم الإناث من وراثة العقارات والأملاك العائلية، مما جعل الزواج الوسيلة الأساسية لتأمين مستقبل الفتيات وحمايتهن من العوز.",

    summaryEn: "The story focuses on the Bennet family living at Longbourn estate: cynical Mr. Bennet, frivolous Mrs. Bennet, and their five unmarried daughters—Jane, Elizabeth, Mary, Kitty, and Lydia. Because Longbourn is entailed to a distant cousin (the pompous clergyman Mr. Collins), Mrs. Bennet is obsessed with marrying her daughters to wealthy men.\n\nWhen wealthy, agreeable Mr. Charles Bingley leases nearby Netherfield Park, he falls in love with the sweet eldest sister, Jane. However, his haughty, aristocratic friend Mr. Fitzwilliam Darcy refuses to dance with Elizabeth at a local ball, declaring her 'tolerable, but not handsome enough to tempt me.' Elizabeth immediately forms a deep prejudice against Darcy's perceived arrogance.\n\nHer dislike deepens when charming militia officer George Wickham lies to her, claiming Darcy unjustly cheated him of an inheritance. Meanwhile, Elizabeth rejects a foolish marriage proposal from Mr. Collins, who promptly marries her sensible friend Charlotte Lucas. Bingley then suddenly abandons Netherfield and Jane, persuaded by Darcy and his sisters that Jane does not truly love him.\n\nWhile visiting Charlotte at Hunsford, Elizabeth encounters Darcy visiting his wealthy aunt, Lady Catherine de Bourgh. Overcome by passion, Darcy proposes marriage to Elizabeth, while tactlessly emphasizing her inferior social standing. Elizabeth indignantly refuses him, accusing him of ruining Jane's happiness and destroying Wickham's life. The next morning, Darcy hands her a private letter explaining his actions: he genuinely doubted Jane's feelings, and reveals that Wickham is a reckless scoundrel who attempted to seduce Darcy's 15-year-old sister Georgiana for her £30,000 fortune. Reading this, Elizabeth is deeply humbled by her own blindness and prejudice.\n\nMonths later, Elizabeth tours Derbyshire with her kind aunt and uncle Gardiner, visiting Pemberley, Darcy's breathtaking estate. Hearing Darcy's housekeeper praise him as the kindest, most generous master, Elizabeth's heart begins to soften. Darcy unexpectedly appears and treats Elizabeth and her working-class relatives with extraordinary gentleness and respect.\n\nCrisis strikes when news arrives that 16-year-old Lydia has recklessly eloped with Wickham, threatening the Bennet family with ruinous social scandal. Darcy secretly discovers the couple in London, pays Wickham's massive gambling debts, purchases an officer's commission for him, and secures their legal marriage, saving the family's honor while swearing everyone to secrecy.\n\nBingley returns to Netherfield and proposes to Jane. After Darcy's haughty aunt Lady Catherine unsuccessfully attempts to bully Elizabeth into promising never to marry Darcy, Darcy realizes Elizabeth's feelings have changed. He proposes a second time with genuine humility, and Elizabeth joyfully accepts. The novel concludes with the triumph of genuine love and mutual respect over foolish pride and hasty prejudice.",
    summaryAr: "تتمحور الرواية حول عائلة بينيت المقيمة في ضيعة لونغبورن: الأب الساخر والمنعزل، والأم السطحية الثرثارة التي يستبد بها هاجس تزويج بناتها الخمس (جين، إليزابيث، ماري، كيتي، وليديا) لرجال أثرياء، لأن الضيعة ستنتقل بعد وفاة الأب بموجب القانون الإنجليزي إلى قريب بعيد هو القس المتملق (السيد كولينز).\n\nحين يستأجر الشاب الثري والدمث (تشارلز بينغلي) قصر نيذر فيلد المجاور، يقع في حب الابنة الكبرى الرقيقة (جين). غير أن صديقه الأرستقراطي شديد الثراء (فيتزويليام دارسي) يرفض بغطرسة دعوة للرقص مع الابنة الثانية الذكية (إليزابيث) في حفلة ميريتون، قائلاً إنها 'مقبولة ولكنها ليست فاتنة بما يكفي لتغريني'، مما يزرع في نفس إليزابيث كرهاً شديداً وتحاملاً عميقاً ضد كبريائه.\n\nيتفاقم هذا التحامل حين تلتقي إليزابيث بالضابط الوسيم (جورج ويكهام)، الذي يلفق أكاذيب يدعي فيها أن دارسي ظلمه وحرمه من إرث شرعي وعده به والده الراحل. ترفض إليزابيث طلباً مضحكاً للزواج من القس كولينز، الذي يسارع للزواج من صديقتها العقلانية شارلوت لوكاس. وفي هذه الأثناء يغادر بينغلي الضيعة فجأة بناءً على نصيحة دارسي الذي اعتقد أن جين باردة المشاعر ولا تبادله الحب الصادق، مما يحطم قلب جين.\n\nتسافر إليزابيث لزيارة صديقتها شارلوت، فتصادف دارسي هناك في قصر خالته الأرستقراطية المتغطرسة (الليدي كاثرين دي بورغ). يعترف دارسي فجأة بحبه العاصف لإليزابيث ويطلب يدها للزواج، لكنه يركز بصلف على الفارق الطبقي وضعة أصل عائلتها. ترفضه إليزابيث بغضب عارم وتصفه بأنه آخر رجل في العالم يمكن أن ترضى بالزواج منه، وتتهمه بتحطيم سعادة أختها جين وظلم ويكهام. وفي اليوم التالي، يسلّمها دارسي رسالة خطية توضيحية تكشف الحقيقة الصادمة: كان يشك في مشاعر جين حقاً، بينما ويكهام شخص محتال وفاسق حاول التغرير بأخت دارسي الصغرى جورجيانا (ذات الـ 15 عاماً) للسطو على ثروتها. تشعر إليزابيث بالخجل العميق من تسرعها وحكمها الأعمى.\n\nفي رحلة مع خالها وخالتها غاردينر، تزور إليزابيث قصر بمبرلي المهيب (مقر دارسي)، وتسمع من مدبرة المنزل شهادة صادقة عن كرم دارسي وطيبته وعطفه على الخدم والفقراء. يظهر دارسي فجأة ويعامل إليزابيث وعائلتها بمنتهى اللباقة والتواضع.\n\nتنفجر أزمة مروعة حين تهرب الابنة الصغرى الطائشة ليديا (16 عاماً) مع ويكهام دون زواج، مما يهدد عائلة بينيت بفضيحة اجتماعية تسقط مكانتها بالكامل. يتدخل دارسي سراً ويبحث عن الفارين في أحياء لندن، ويدفع ديون ويكهام الضخمة ويشتري له رتبة عسكرية ويدبر زواجهما رسمياً لينقذ عائلة بينيت من العار، مشترطاً كتمان سره.\n\nيعود بينغلي ويخطب جين بموافقة دارسي. وحين تأتي الليدي كاثرين متغطرسة لتهديد إليزابيث وتطالبها برفض دارسي، تتصدى لها إليزابيث بكرامة وشجاعة. يعلم دارسي بموقف إليزابيث فيطلب يدها مجدداً بتواضع وحب حقيقي، فتقبل إليزابيث بسعادة غامرة، لتنتهي الرواية بانتصار التفاهم الإنساني والاحترام المتبادل على قيود الكبرياء والتحامل.",

    moralLessonEn: "Pride and prejudice blind individuals from discovering the true virtue of others and recognizing their own flaws. True love and lasting happiness demand self-examination, intellectual honesty, overcoming societal arrogance, and treating others with respect regardless of social status.",
    moralLessonAr: "الكبرياء الزائف والأحكام المسبقة المتسرعة يعميان البصيرة عن إدراك الحقائق والاعتراف بالعيوب الذاتية. السعادة الحقيقية والاحترام المتبادل يقومان على التواضع والنزاهة الفكرية وكسر الحواجز الطبقية الأنانية.",

    keyThemesEn: [
      "Pride: Darcy's aristocratic aloofness and Elizabeth's stubborn pride in her own quick perceptions.",
      "Prejudice: Elizabeth's hasty misjudgment of Darcy and gullible trust in Wickham's falsehoods.",
      "Social Class and Status: The strict social hierarchies of Regency England and the obsession with wealth.",
      "Marriage and Security: Contrasting mercenary marriages (Collins & Charlotte) and scandalous lust (Lydia & Wickham) with genuine companionate love (Elizabeth & Darcy, Jane & Bingley).",
      "Self-Knowledge: The painful necessity of acknowledging one's mistakes to achieve mature moral growth."
    ],
    keyThemes: [
      "الكبرياء: تعالي دارسي الأرستقراطي في البداية، وكبرياء إليزابيث واعتزازها المفرط بفطنتها وحدسها.",
      "التحامل والحكم المسبق: تسرع إليزابيث في تصديق أكاذيب ويكهام وسوء ظنها بأفعال دارسي.",
      "الطبقية والمكانة الاجتماعية: الصراع بين قيود المجتمع الإنجليزي الصارمة والكرامة الإنسانية الحرة.",
      "فلسفة الزواج: المفارقة بين زواج المصلحة والضمان المالي (كولينز وشارلوت)، والزواج القائم على الحب والنضج المشترك (إليزابيث ودارسي).",
      "معرفة الذات: شجاعة الإنسان في مراجعة قناعاته والاعتراف بالخطأ لتحقيق النضج العقلي والعاطفي."
    ],

    characters: [
      {
        name: "Elizabeth Bennet (Lizzie)",
        nameAr: "إليزابيث بينيت (ليزي)",
        role: "The Intelligent & Spirited Heroine",
        roleAr: "البطلة الذكية والمستقلة",
        description: "The second Bennet daughter, sharp-witted, independent, and insightful, whose sharp intellect initially blinds her to her own prejudice against Mr. Darcy.",
        descriptionAr: "الابنة الثانية لعائلة بينيت، شابة ذكية ولماحة وتتمتع بروح مرحة واستقلالية فكرية، لكنها تقع ضحية التسرع في الحكم المسبق على دارسي حتى تكتشف معدنه الأصيل."
      },
      {
        name: "Mr. Fitzwilliam Darcy",
        nameAr: "السيد فيتزويليام دارسي",
        role: "The Master of Pemberley",
        roleAr: "سيد قصر بمبرلي والنبيل الثري",
        description: "A wealthy, honourable nobleman with an annual income of £10,000. Initially reserved and proud, he proves to be deeply noble, selfless, and truly loving.",
        descriptionAr: "رجل نبيل وشديد الثراء دخلُه السنوي 10 آلاف جنيه إسترليني، يبدو متحفظاً ومغروراً في البداية، لكنه صاحب قلب وفيّ ومستعد لأعظم التضحيات لحماية من يحب."
      },
      {
        name: "Jane Bennet",
        nameAr: "جين بينيت",
        role: "The Gentle Eldest Sister",
        roleAr: "الأخت الكبرى الرقيقة والجميلة",
        description: "The most beautiful and forgiving Bennet daughter, who refuses to think ill of anyone and finds true love with Charles Bingley.",
        descriptionAr: "الابنة الأجمل والأكثر طيبة وتسامحاً، ترفض الظن السيئ بأي شخص، وتتكلل قصتها بالزواج من تشارلز بينغلي."
      },
      {
        name: "Mr. Charles Bingley",
        nameAr: "السيد تشارلز بينغلي",
        role: "Darcy's Amiable Best Friend",
        roleAr: "صديق دارسي الدمث والثري",
        description: "A kind, friendly, and wealthy gentleman who falls in love with Jane, though easily influenced by the advice of his close friend Darcy.",
        descriptionAr: "شاب نبيل متواضع، بشوش ولطيف المعشر، يقع في حب جين من أول نظرة، لكنه يتردد بسهولة تحت تأثير نصائح صديقه دارسي."
      },
      {
        name: "George Wickham",
        nameAr: "جورج ويكهام",
        role: "The Deceitful Officer",
        roleAr: "الضابط المخادع والوصولي",
        description: "A charming but unprincipled militia lieutenant who invents stories to defame Darcy and recklessly elopes with young Lydia.",
        descriptionAr: "ضابط جذاب ومراوغ في ظاهره، لكنه مجرد مخادع ومقامر ينشر الافتراءات ضد دارسي ويهرب مع ليديا الصغرى مهدداً سمعة العائلة."
      },
      {
        name: "Mr. William Collins",
        nameAr: "السيد ويليام كولينز",
        role: "The Pompous Clergyman",
        roleAr: "القس المتملق والوارث للضيعة",
        description: "A foolish, conceited clergyman who will inherit Longbourn. He sycophantically serves Lady Catherine de Bourgh and marries Charlotte Lucas.",
        descriptionAr: "رجل دين أبله شديد التملق والغرور، يرث ضيعة لونغبورن شرعاً، يتودد بابتذال لليدي كاثرين ويتزوج من شارلوت بعد رفض إليزابيث له."
      },
      {
        name: "Mrs. Bennet",
        nameAr: "السيدة بينيت",
        role: "The Foolish Mother",
        roleAr: "الأم المهووسة بتزويج بناتها",
        description: "A foolish, noisy, and nervous woman whose single obsession in life is finding wealthy husbands for her five daughters.",
        descriptionAr: "امرأة ساذجة وعصبية المزاج، همها الأوحد في الحياة تزويج بناتها من رجال أثرياء لتأمين مستقبلهن."
      },
      {
        name: "Lady Catherine de Bourgh",
        nameAr: "الليدي كاثرين دي بورغ",
        role: "Darcy's Arrogant Aunt",
        roleAr: "خالة دارسي الأرستقراطية المتسلطة",
        description: "Darcy's wealthy and autocratic aunt, who expects everyone to obey her and furiously demands that Elizabeth reject Darcy.",
        descriptionAr: "امرأة أرستقراطية طاغية ومتعجرفة، تفرض وصايتها على الجميع وتحاول عبثاً إجبار إليزابيث على التخلي عن دارسي."
      }
    ],

    keyVocabulary: [
      {
        word: "Pride",
        meaningAr: "الكبرياء / الاعتزاز بالنفس",
        contextEn: "Darcy's pride stemmed from his high social standing and family lineage.",
        contextAr: "كان كبرياء دارسي نابعاً من مكانته الطبقية الرفيعة ونسب عائلته."
      },
      {
        word: "Prejudice",
        meaningAr: "الحكم المسبق / التحامل",
        contextEn: "Elizabeth's prejudice led her to blindly believe Wickham's slander.",
        contextAr: "قاد التحامل إليزابيث لتصديق افتراءات ويكهام دون تفكير."
      },
      {
        word: "Entail",
        meaningAr: "حصر الإرث للذكور فقط",
        contextEn: "The Longbourn estate was entailed upon a male heir, Mr. Collins.",
        contextAr: "كانت ضيعة لونغبورن محصورة قانونياً في الورثة الذكور لصالح كولينز."
      },
      {
        word: "Proposal",
        meaningAr: "طلب الزواج / عرض خطوبة",
        contextEn: "Elizabeth indignantly refused Mr. Darcy's first marriage proposal.",
        contextAr: "رفضت إليزابيث بغضب عرض الزواج الأول الذي قدمه السيد دارسي."
      },
      {
        word: "Elopement",
        meaningAr: "الهروب للزواج السري",
        contextEn: "Lydia's elopement with Wickham brought disgrace upon the family.",
        contextAr: "تسبب هروب ليديا مع ويكهام بفضيحة اجتماعية لعائلة بينيت."
      }
    ],

    quotes: [
      {
        textEn: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        textAr: "إنها لحقيقة يعترف بها العالم بأسره؛ أن الرجل الأعزب ذا الثروة لا بد أنه بحاجة إلى زوجة.",
        speaker: "Famous Opening Line of the Novel (المقدمة الخالدة للرواية)"
      },
      {
        textEn: "She is tolerable; but not handsome enough to tempt me.",
        textAr: "إنها مقبولة؛ ولكنها ليست حسناء بما يكفي لتغريني بالرقص.",
        speaker: "Mr. Darcy about Elizabeth at the Meryton Ball (دارسي عن إليزابيث)"
      },
      {
        textEn: "Till this moment, I never knew myself.",
        textAr: "حتى هذه اللحظة، لم أكن أعرف نفسي على حقيقتها أبداً.",
        speaker: "Elizabeth after reading Darcy's letter (إليزابيث بعد قراءة الرسالة)"
      }
    ],

    ministerialQA: [
      {
        id: "pp-q1",
        question: "Who wrote the classic novel 'Pride and Prejudice'?",
        questionAr: "من هي مؤلفة رواية 'كبرياء وتحامل' الشهيرة؟",
        answer: "Jane Austen wrote 'Pride and Prejudice'.",
        answerAr: "الكاتبة الإنجليزية جين أوستن (Jane Austen).",
        year: "2016 دور أول • 2021 تمهيدي",
        keyHint: "Jane Austen"
      },
      {
        id: "pp-q2",
        question: "When and where was Jane Austen born?",
        questionAr: "متى وأين ولدت الكاتبة جين أوستن؟",
        answer: "She was born in Steventon, Hampshire, England, in 1775.",
        answerAr: "ولدت في ستيفنتون بمقاطعة هامبشاير في إنجلترا عام 1775.",
        year: "2017 دور أول",
        keyHint: "Steventon, Hampshire / 1775"
      },
      {
        id: "pp-q3",
        question: "Why is Mrs. Bennet so obsessed with marrying her daughters off?",
        questionAr: "لماذا تهتم السيدة بينيت بجنون بتزويج بناتها الخمس؟",
        answer: "Because the Longbourn estate is entailed to a male relative (Mr. Collins), and her daughters will be left without financial security or home after their father dies.",
        answerAr: "لأن أملاك العائلة محصورة قانوناً للورثة الذكور (السيد كولينز)، وستبقى بناتها دون معيل أو مأوى بعد وفاة والدهن.",
        year: "2018 دور أول • 2022 تمهيدي",
        keyHint: "Estate is entailed / no financial security"
      },
      {
        id: "pp-q4",
        question: "What did Mr. Darcy say about Elizabeth at the Meryton assembly ball?",
        questionAr: "ماذا قال السيد دارسي عن إليزابيث في حفلة ميريتون الراقصة؟",
        answer: "He said: 'She is tolerable; but not handsome enough to tempt me' and refused to dance with her.",
        answerAr: "قال: 'إنها مقبولة؛ لكنها ليست حسناء بما يكفي لتغريني' ورفض الرقص معها.",
        year: "2018 دور ثانٍ • 2023 دور أول",
        keyHint: "She is tolerable; but not handsome enough to tempt me"
      },
      {
        id: "pp-q5",
        question: "Why did Elizabeth reject Mr. Darcy's first marriage proposal?",
        questionAr: "لماذا رفضت إليزابيث طلب السيد دارسي الأول للزواج منها؟",
        answer: "Because of his insulting arrogance, his role in separating her sister Jane from Mr. Bingley, and his alleged mistreatment of Mr. Wickham.",
        answerAr: "بسبب غطرسته وإهانته لأصل عائلتها، وتسببه في تفريق أختها جين عن بينغلي، وظلمه المزعوم للضابط ويكهام.",
        year: "2019 دور أول • 2023 دور ثانٍ",
        keyHint: "His arrogance / separating Jane & Bingley / mistreating Wickham"
      },
      {
        id: "pp-q6",
        question: "How did Mr. Darcy explain his actions to Elizabeth after she rejected him?",
        questionAr: "كيف شرح السيد دارسي دوافعه لإليزابيث بعد أن رفضت عرضه؟",
        answer: "He gave her an explanatory letter revealing that Wickham was a liar and a scoundrel who tried to elope with Georgiana, and that he truly thought Jane was indifferent to Bingley.",
        answerAr: "سلّمها رسالة خطية كشف فيها حقيقة ويكهام المخادع الذي حاول التغرير بأخته جورجيانا، وأوضح أنه اعتقد بصدق أن جين لا تبادل بينغلي الحب.",
        year: "2019 دور ثانٍ • 2024 تمهيدي",
        keyHint: "Handed her an explanatory letter revealing Wickham's true character"
      },
      {
        id: "pp-q7",
        question: "How did Darcy secretly save the Bennet family from disgrace?",
        questionAr: "كيف أنقذ السيد دارسي عائلة بينيت سراً من الفضيحة والعار؟",
        answer: "He tracked down Wickham and Lydia in London, paid all Wickham's debts, bought him an army commission, and financed their marriage.",
        answerAr: "تتبع ويكهام وليديا في لندن، ودفع ديون ويكهام واشترى له رتبة في الجيش وتكفل بمصاريف زواجهما.",
        year: "2020 دور أول • 2024 دور أول",
        keyHint: "Tracked Wickham & Lydia / paid debts / bought commission"
      },
      {
        id: "pp-q8",
        question: "What are the main themes of 'Pride and Prejudice'?",
        questionAr: "ما هي الثيمات والأفكار الرئيسية في رواية 'كبرياء وتحامل'؟",
        answer: "Pride, prejudice, social status, the importance of marriage in 19th-century England, and the necessity of self-knowledge.",
        answerAr: "الكبرياء، التحامل والحكم المسبق، الطبقية الاجتماعية، قضية الزواج، وأهمية معرفة الإنسان لذاته.",
        year: "2021 دور أول",
        keyHint: "Pride, prejudice, social class, marriage, self-knowledge"
      },
      {
        id: "pp-q9",
        question: "Who did Mr. Collins marry after Elizabeth rejected his proposal?",
        questionAr: "بمن تزوج السيد كولينز بعد أن رفضت إليزابيث عرضه للزواج؟",
        answer: "He married Elizabeth's practical friend, Charlotte Lucas.",
        answerAr: "تزوج من صديقة إليزابيث العقلانية شارلوت لوكاس (Charlotte Lucas).",
        year: "2022 دور أول",
        keyHint: "Charlotte Lucas"
      },
      {
        id: "pp-q10",
        question: "What changed Elizabeth's opinion of Mr. Darcy?",
        questionAr: "ما الذي غيّر نظرة إليزابيث ورأيها في السيد دارسي؟",
        answer: "Reading his letter, hearing his housekeeper at Pemberley praise his generosity, and discovering that he saved Lydia and the family from ruin.",
        answerAr: "قراءة رسالته التوضيحية، وسماع مديح مدبرة منزله في قصر بمبرلي، ومعرفة أنه هو من أنقذ ليديا والعائلة من الضياع.",
        year: "2023 تمهيدي • 2024 دور ثانٍ",
        keyHint: "His letter / housekeeper's praise at Pemberley / saving Lydia"
      }
    ]
  },
  {
    id: "lit-asyoulikeit",
    title: "As You Like It",
    titleAr: "كما تشاء",
    author: "William Shakespeare",
    authorAr: "ويليام شكسبير",
    authorYears: "1564 - 1616",
    image: ardenForestImg,
    galleryImages: [
      {
        url: ardenForestImg,
        captionEn: "The enchanted, serene Forest of Arden where courtiers found freedom and moral healing.",
        captionAr: "غابة آردن الساحرة حيث وجد المنفيون الحرية والسلام وتطهرت النفوس من نفاق البلاط."
      },
      {
        url: rosalindArdenImg,
        captionEn: "Rosalind disguised as the young shepherd Ganymede, tutoring Orlando in love.",
        captionAr: "روزاليند متخفية في زي الشاب غانيميد، تختبر مشاعر أورلاندو وتلقنه دروس الحب الحقيقي."
      }
    ],
    imageCaptionEn: "The mystical canopy of the Forest of Arden, a pastoral refuge from court tyranny where poems of love hang upon the boughs.",
    imageCaptionAr: "رياض غابة آردن الخضراء، الملاذ الرعوي الحر من طغيان البلاط، حيث عُلقت قصائد الحب على جذوع الأشجار.",
    genre: "Pastoral Comedy / Shakespearean Drama / Romantic Comedy",
    genreAr: "كوميديا رعوية كلاسيكية / مسرحية شعرية رومانسية",

    // سيرة الكاتب وفق الملزمة الوزارية
    authorBioEn: [
      "William Shakespeare is universally recognized as the greatest playwright and poet in the English language.",
      "He was born in Stratford-upon-Avon, Warwickshire, and was baptized on April 26, 1564.",
      "His father was John Shakespeare, a successful glove-maker and town alderman, and his mother was Mary Arden.",
      "He attended the local grammar school (King's New School) where he acquired a solid foundation in Latin, literature, and rhetoric.",
      "In 1582, at age 18, he married Anne Hathaway, and they had three children: Susanna, and twins Hamnet and Judith.",
      "He moved to London around 1590, establishing himself as a talented actor, respected playwright, and partner in the Globe Theatre.",
      "He was a leading shareholder in the Lord Chamberlain's Men (later the King's Men under King James I).",
      "He authored 38 plays, 154 sonnets, and narrative poems before retiring to Stratford, where he died on April 23, 1616, at age 52."
    ],
    authorBioAr: [
      "ويليام شكسبير يُعد أعظم مسرحي وشاعر في تاريخ اللغة الإنجليزية والأدب العالمي على الإطلاق.",
      "ولد في بلدة ستراتفورد أبون آفون بمقاطعة واريكشاير، وعُمّد في 26 نيسان عام 1564.",
      "كان والده جون شكسبير صانع قفازات مرموقاً وعضواً في مجلس البلدة، ووالدته ماري آردن من عائلة عريقة.",
      "تلقى تعليمه في مدرسة القواعد المحلية (King's New School) حيث درس اللاتينية والبلاغة والآداب الكلاسيكية.",
      "تزوج عام 1582 في سن الثامنة عشرة من آن هاثاواي، وأنجبا ثلاثة أبناء: سوزانا، والتوأمين هامت وجوديث.",
      "انتقل إلى لندن قرابة عام 1590 وأثبت براعته كممثل بارع ومؤلف مسرحي عبقري وشريك مؤسس في مسرح غلوب (Globe Theatre).",
      "كان عضواً قيادياً في فرقة مسرح رجال اللورد تشامبرلين (التي سميت لاحقاً رجال الملك تحت رعاية الملك جيمس الأول).",
      "ألّف 38 مسرحية خالدة و154 سونيتة شعرية، وتقاعد في مسقط رأسه حتى وفاته في 23 نيسان عام 1616 عن عمر يناهز 52 عاماً."
    ],
    authorPrizes: [
      "Known as England's National Poet and affectionately dubbed 'The Bard of Avon'.",
      "His plays have been translated into every major living language and performed worldwide more than any other writer in history.",
      "Pioneered pastoral comedy, combining witty wordplay, gender disguises, and profound philosophical inquiry."
    ],

    historicalContextEn: "Written around 1599 during the reign of Queen Elizabeth I. Elizabethan audiences loved pastoral literature, which idealized the simple, innocent life of rural shepherds in direct contrast to the dangerous ambition, deception, and jealousy of royal courts.",
    historicalContextAr: "كُتبت المسرحية قرابة عام 1599 في أوج العصر الإليزابيثي الذهبي؛ حيث كان الجمهور يعشق الأدب الرعوي (Pastoral) الذي يمجّد بساطة الريف وحرية الطبيعة ونقاءها في مواجهة دسائس البلاط الملكي وغدر السلطة وصراعاتها.",

    summaryEn: "The play opens with injustice in both court and country. In a French duchy, the rightful ruler, Duke Senior, has been deposed and banished to the Forest of Arden by his usurping, tyrannical younger brother, Duke Frederick. Duke Senior's daughter, Rosalind, is permitted to stay at court only because of her inseparable bond with Frederick's daughter, Celia.\n\nIn the countryside, the noble youth Orlando is bitterly oppressed by his eldest brother, Oliver, who withholds his inheritance and denies him an education. Orlando enters a court wrestling match against the champion Charles. To everyone's astonishment, Orlando wins. Rosalind and Orlando fall in love at first sight, and Rosalind gives Orlando a chain from her neck as a token of admiration.\n\nSoon after, Duke Frederick banishes Rosalind in a paranoid fit of jealousy. Devoted Celia insists on fleeing with her. To travel safely, Rosalind disguises herself as a handsome young man named Ganymede, while Celia poses as a poor shepherdess named Aliena. They take the court jester Touchstone with them and escape into the Forest of Arden, where they purchase a cottage and sheep.\n\nMeanwhile, warned by the faithful servant Adam that Oliver plans to murder him, Orlando also flees to the Forest of Arden. Duke Senior and his exiled lords warmly welcome Orlando into their brotherhood.\n\nDeeply in love, Orlando carves love poems to Rosalind onto tree trunks and hangs verses on bushes throughout the forest. Rosalind (disguised as Ganymede) finds these poems and encounters Orlando. Pretending to be an expert in the follies of love, Ganymede promises to 'cure' Orlando of his lovesickness if Orlando agrees to woo Ganymede every day as if he were Rosalind. Orlando eagerly accepts the challenge.\n\nComedic romantic subplots unfold: Touchstone falls for the simple goat-herd Audrey, and the shepherd Silvius suffers for the proud shepherdess Phebe. However, Phebe scorns Silvius and falls hopelessly in love with the disguised Ganymede.\n\nThe drama peaks when Oliver enters the forest sent by Duke Frederick to hunt down Orlando. Oliver falls asleep and is threatened by a serpent and a hungry lioness. Orlando bravely intervenes, slaying the lioness and saving his brother's life, though suffering a wounded arm. Overcome by Orlando's selfless nobility, Oliver repents his wickedness and falls in love with Aliena (Celia).\n\nWith everyone assembled, Ganymede promises to resolve every romantic knot through 'magic' the following morning. The next day, Rosalind and Celia cast off their disguises. Rosalind is joyfully reunited with her father Duke Senior and gives her hand to Orlando. Phebe, discovering Ganymede is a woman, keeps her promise to marry the loyal Silvius. Touchstone weds Audrey, and Oliver weds Celia.\n\nAt the height of the fourfold wedding, news arrives that Duke Frederick marched an army toward the forest, but on entering, met an old religious hermit. Miraculously transformed by spirituality, Frederick renounced his crown, restored the dukedom to Duke Senior, and entered a monastery. The play ends in joyous celebration, dance, and reconciliation in the healing heart of nature.",
    summaryAr: "تفتتح المسرحية بمظاهر الظلم في البلاط والريف على السواء. في إحدى الدوقيات الفرنسية، يُطرد الحاكم الشرعي الدوق الأكبر (Duke Senior) إلى غابة آردن على يد شقيقه الأصغر الطاغية فريدريك الذي اغتصب العرش. تبقى ابنة الدوق روزاليند في البلاط لوفاء ابنة عمها سيليا وتعلقهما الشديد ببعضهما.\n\nفي الريف، يضطهد الأخ الأكبر أوليفر شقيقه الأصغر النبيل أورلاندو، فيحرمه من حقه في التعليم وميراث والده الراحل سير رولاند. يشارك أورلاندو في مباراة مصارعة بالقصر ضد البطل تشارلز وينتصر عليه ببراعة. تقع روزاليند في حب أورلاندو من النظرة الأولى وتهديه قلادة من عنقها، ويبادلها أورلاندو مشاعر العشق.\n\nينفي الدوق فريدريك روزاليند فجأة بدافع الشك والغيرة، فترفض سيليا فراقها وتقرر الهروب معها. ومن أجل السفر بأمان دون أن يتعرض أحد لفتاتين وحيدتين، تتنكر روزاليند بزي شاب وسيم باسم (غانيميد)، بينما تتنكر سيليا بزي راعية فقيرة تدعى (ألينا)، وتصطحبان معهما مهرج البلاط الساخر تاتشستون (Touchstone) إلى غابة آردن، حيث تشتركان في شراء كوخ وقطيع غنم.\n\nوفي هذه الأثناء، يهرب أورلاندو أيضاً إلى الغابة برفقة خادمه الوفي العجوز آدم بعد أن علم بمؤامرة شقيقه لقتله حرقاً، فيستقبله الدوق الأكبر ورجاله المنفيون بحفاوة وكرم.\n\nيستبد العشق بأورلاندو، فيبدأ بنقش قصائد الغزل لروزاليند على جذوع أشجار الغابة وتعليق الأبيات على أغصانها. تعثر روزاليند (المتنكرة بزي غانيميد) على القصائد وتلتقي بأورلاندو، فتعرض عليه أن 'تشافيه' من داء الحب بشرط أن يأتي إليها يومياً ويتعامل معها كأنها حبيبته روزاليند ليتعلم أسرار الهوى العاقل، فيوافق أورلاندو بحماس.\n\nتتشابك الخيوط الكوميدية في الغابة: يقع المهرج تاتشستون في حب راعية الماعز البسيطة أودري، بينما يعاني الراعي سيلفيوس من صدود محبوبته الراعية المغرورة فيبي، غير أن فيبي تقع في غرام غانيميد (روزاليند المتنكرة) ظناً منها أنه فتى حقيقي!\n\nتبلغ الأحداث ذروتها حين يدخل أوليفر الغابة بتكليف من فريدريك لقتل أورلاندو، فينام تحت شجرة وتكاد تفتك به أفعى ولبؤة جائعة. يتدخل أورلاندو بشجاعة منقذاً حياة شقيقه ويصرع اللبؤة بعد أن جُرحت ذراعه. يهتز ضمير أوليفر لشهامة أخيه فيتوب عن شروره ويندم، ويقع في حب ألينا (سيليا).\n\nيعد غانيميد الجميع بحل جميع العقد العاطفية في صباح الغد بواسطة 'السحر'. وفي اليوم التالي، تخلع روزاليند وسيليا رداء التنكر، وتلتقي روزاليند بوالدها الدوق وتتزوج من حبيبها أورلاندو، وتضطر فيبي للزواج من سيلفيوس بعد اكتشاف حقيقة غانيميد، ويتزوج أوليفر من سيليا، وتاتشستون من أودري.\n\nوفي قمة بهجة الأعراس الأربعة، تصل الأنباء بأن الدوق فريدريك زحف بجيش لاقتحام الغابة، لكنه التقى عند مدخلها بناسك تقي ألهمه التوبة والورع، فتنازل عن العرش المستلب وأعاده لأخيه الدوق الأكبر واعتزل في دير ديني، لتعم السعادة وتنتصر المحبة والتسامح في ظلال الطبيعة الشافية.",

    moralLessonEn: "Nature and pastoral simplicity hold a profound power to heal human malice and restore moral harmony. Genuine love transcends vanity and courtly posturing, and active forgiveness and brotherly sacrifice are infinitely nobler than vengeance.",
    moralLessonAr: "الحياة البسيطة في أحضان الطبيعة تملك القدرة على تطهير القلوب من ضغائن الحكم وزيف القصور. الحب الصادق يسمو على المظاهر والتصنع، والتسامح الأخوي أسمى وأبقى من مشاعر الانتقام والعداوة.",

    keyThemesEn: [
      "Court Politics vs. Pastoral Freedom: The contrast between corrupt ambition at court and peace in the Forest of Arden.",
      "The Nature of True Love: Mocking foolish, exaggerated infatuation while celebrating mature, enduring affection.",
      "Forgiveness and Regeneration: Brothers reconciling (Orlando saves Oliver; Frederick converts).",
      "The World as a Stage: Jaques' famous contemplation of the seven stages of human life.",
      "Disguise and Self-Knowledge: How playing a role (Ganymede) allows Rosalind to speak freely and discover authentic truths."
    ],
    keyThemes: [
      "صراع البلاط والريف: المقارنة بين مؤامرات القصور وزيفها، وبين حرية وطهارة الحياة في غابة آردن.",
      "جوهر الحب الحقيقي: السخرية من العشق الوهمي المسرحي، والاحتفاء بالحب الواقعي العاقل.",
      "التسامح والتطهر الروحي: إصلاح العلاقات الأسرية (إنقاذ أورلاندو لأخيه وتوبة فريدريك).",
      "الدنيا مسرح كبير: حكمة جاك التأملية الشهيرة حول مراحل عمر الإنسان السبع.",
      "التنكر واكتشاف الذات: تمكين روزاليند بزي غانيميد من التعبير عن أفكارها بحرية واختبار القلوب بصدق."
    ],

    characters: [
      {
        name: "Rosalind (Ganymede)",
        nameAr: "روزاليند (غانيميد)",
        role: "The Radiant Protagonist",
        roleAr: "البطلة اللامعة والذكية",
        description: "Duke Senior's quick-witted, affectionate, and brave daughter who disguises herself as the youth Ganymede to guide Orlando toward true love.",
        descriptionAr: "ابنة الدوق الأكبر، فتاة شجاعة وفطنة وحسناء، تتنكر بزي الفتى غانيميد لحماية نفسها واختبار صدق مشاعر أورلاندو بحكمة ومرح."
      },
      {
        name: "Orlando",
        nameAr: "أورلاندو",
        role: "The Chivalrous Young Hero",
        roleAr: "الفارس الشاب الشهم والمحب",
        description: "Sir Rowland de Boys' youngest son, brave and gentle, who defeats the court wrestler and risks his life to save the brother who mistreated him.",
        descriptionAr: "الابن الأصغر للسير رولاند، شاب شهم ونبيل، هزم مصارع القصر وضحى بنفسه لإنقاذ شقيقه الذي ظلمه من براثن اللبؤة."
      },
      {
        name: "Celia (Aliena)",
        nameAr: "سيليا (ألينا)",
        role: "Rosalind's Loyal Cousin",
        roleAr: "ابنة العم المخلصة والوفية",
        description: "Duke Frederick's daughter whose deep sisterly devotion to Rosalind leads her to forfeit court luxury and flee to Arden disguised as Aliena.",
        descriptionAr: "ابنة الدوق فريدريك، صديقة وفية تضحي برفاهية القصر وترافق روزاليند في منفاها متخفية بزي الراعية ألينا حتى تتزوج من أوليفر."
      },
      {
        name: "Duke Senior",
        nameAr: "الدوق الأكبر",
        role: "The Rightful Banished Ruler",
        roleAr: "الحاكم الشرعي المنفي",
        description: "Rosalind's wise, benevolent father who finds philosophical contentment, brotherhood, and virtue in the simple life of the forest.",
        descriptionAr: "والد روزاليند، حاكم عادل وحكيم يجد في حياة الغابة حرية وسلاماً أعمق من نفاق القصور، ويعود لحكمه في النهاية."
      },
      {
        name: "Duke Frederick",
        nameAr: "الدوق فريدريك",
        role: "The Usurping Brother",
        roleAr: "الحاكم المغتصب التائب",
        description: "Duke Senior's tyrannical brother who banishes his own brother and niece, but undergoes a profound spiritual conversion after meeting a hermit.",
        descriptionAr: "شقيق الدوق الأكبر الذي غصب العرش، لكنه يتوب ويتنازل عن السلطة بعد لقائه بناسك صالح في الغابة."
      },
      {
        name: "Oliver de Boys",
        nameAr: "أوليفر دي بويز",
        role: "The Repentant Eldest Brother",
        roleAr: "الأخ الأكبر التائب",
        description: "Orlando's jealous brother who plots to destroy Orlando, but is transformed by Orlando's forgiveness after Orlando saves him from a lioness.",
        descriptionAr: "شقيق أورلاندو الأكبر الذي اضطهده وحاول حرقه، لكنه يتوب بندم حين ينقذ أورلاندو حياته من اللبؤة المفترسة."
      },
      {
        name: "Jaques",
        nameAr: "جاك",
        role: "The Melancholy Lord",
        roleAr: "اللورد الفيلسوف المتشائم",
        description: "A contemplative philosopher in Duke Senior's retinue who delivers the famous monologue 'All the world's a stage'.",
        descriptionAr: "أحد لوردات الدوق الأكبر في الغابة، رجل فيلسوف متأمل يلقي المونولوج التاريخي الشهير عن مراحل عمر الإنسان السبع."
      },
      {
        name: "Touchstone",
        nameAr: "تاتشستون",
        role: "The Witty Court Jester",
        roleAr: "مهرج البلاط الساخر والذكي",
        description: "A sharp, cynical clown who travels with the women to Arden and offers humorous philosophical critiques of pastoral life and love.",
        descriptionAr: "مهرج القصر الفطن واللسن، يرافق الفتاتين إلى الغابة ويطلق النكات الذكية والمقارنات الساخرة عن طبائع البشر والريف."
      }
    ],

    keyVocabulary: [
      {
        word: "Pastoral",
        meaningAr: "رعوي / مرتبط بحياة الريف والطبيعة",
        contextEn: "The play is set in the pastoral sanctuary of the Forest of Arden.",
        contextAr: "تدور أحداث المسرحية في واحة غابة آردن الرعوية الهادئة."
      },
      {
        word: "Usurp",
        meaningAr: "يغتصب العرش / ينتزع بالقوة",
        contextEn: "Duke Frederick usurped his elder brother's rightful dukedom.",
        contextAr: "اغتصب الدوق فريدريك سلطة أخيه الأكبر الشرعية."
      },
      {
        word: "Disguise",
        meaningAr: "تنكّر / تخفٍّ في هيئة أخرى",
        contextEn: "Rosalind assumed a male disguise under the name Ganymede.",
        contextAr: "ارتدت روزاليند زياً ذكورياً متنكرة باسم غانيميد."
      },
      {
        word: "Banish",
        meaningAr: "ينفي / يطرد من البلاد",
        contextEn: "Duke Frederick decided to banish Rosalind from his court.",
        contextAr: "قرر الدوق فريدريك نفي روزاليند وطرده من البلاط."
      },
      {
        word: "Hermit",
        meaningAr: "ناسك / عابد معتزل في الطبيعة",
        contextEn: "Meeting a holy hermit led Duke Frederick to renounce his throne.",
        contextAr: "قاد لقاء الناسك التقي الدوق فريدريك إلى التوبة والتخلي عن العرش."
      }
    ],

    quotes: [
      {
        textEn: "All the world's a stage, and all the men and women merely players; they have their exits and their entrances, and one man in his time plays many parts.",
        textAr: "ما العالم إلا مسرح كبير، وجميع الرجال والنساء فيه ممثلون؛ لهم أوقات خروج ودخول، والإنسان في زمانه يلعب أدواراً عديدة.",
        speaker: "Jaques' Famous Monologue - Seven Ages of Man (مونولوج جاك الشهير)"
      },
      {
        textEn: "Sweet are the uses of adversity, which, like the toad, ugly and venomous, wears yet a precious jewel in his head.",
        textAr: "عذبة هي ثمار الشدائد والنوائب، فهي كالضفدع قبيح المظهر وسام، لكنه يحمل في رأسه جوهرة ثمينة.",
        speaker: "Duke Senior in the Forest of Arden (الدوق الأكبر في الغابة)"
      },
      {
        textEn: "Love is merely a madness, and, I tell you, deserves as well a dark house and a whip as madmen do.",
        textAr: "الحب ضرب من الجنون، وأقول لك إنه يستحق الحبس والجلد كما يستحق المجانين.",
        speaker: "Rosalind as Ganymede to Orlando (روزاليند لأورلاندو)"
      }
    ],

    ministerialQA: [
      {
        id: "ayl-q1",
        question: "Who wrote the pastoral comedy 'As You Like It'?",
        questionAr: "من هو مؤلف المسرحية الكوميدية الرعوية 'كما تشاء'؟",
        answer: "William Shakespeare wrote 'As You Like It'.",
        answerAr: "الشاعر والمسرحي الإنجليزي ويليام شكسبير (William Shakespeare).",
        year: "2015 دور أول • 2020 دور أول",
        keyHint: "William Shakespeare"
      },
      {
        id: "ayl-q2",
        question: "When and where was William Shakespeare born?",
        questionAr: "متى وأين ولد ويليام شكسبير؟",
        answer: "He was born in Stratford-upon-Avon, England, in April 1564.",
        answerAr: "ولد في بلدة ستراتفورد أبون آفون بإنجلترا في نيسان عام 1564.",
        year: "2016 دور أول • 2021 تمهيدي",
        keyHint: "Stratford-upon-Avon / April 1564"
      },
      {
        id: "ayl-q3",
        question: "Why did Rosalind disguise herself as a young man named Ganymede?",
        questionAr: "لماذا تنكرت روزاليند بزي شاب يدعى غانيميد؟",
        answer: "To travel safely to the Forest of Arden without being recognized, attacked, or harmed as a defenseless woman.",
        answerAr: "لتسافر بأمان إلى غابة آردن دون أن يتعرف عليها أحد أو تتعرض للأذى والاعتداء كامرأة وحيدة لا حامي لها.",
        year: "2017 دور أول • 2022 دور ثانٍ",
        keyHint: "Travel safely without being attacked or recognized"
      },
      {
        id: "ayl-q4",
        question: "Where did Duke Senior live after his brother banished him?",
        questionAr: "أين عاش الدوق الأكبر بعد أن نفاه شقيقه من البلاط؟",
        answer: "He lived in the Forest of Arden with his loyal followers, enjoying freedom and nature like Robin Hood.",
        answerAr: "عاش في غابة آردن برفقة رجاله المخلصين، متمتعاً بالحرية وبساطة الطبيعة مثل روبن هود.",
        year: "2018 دور أول • 2022 تمهيدي",
        keyHint: "In the Forest of Arden with his loyal followers"
      },
      {
        id: "ayl-q5",
        question: "Why did Oliver hate his younger brother Orlando?",
        questionAr: "لماذا كان أوليفر يكره شقيقه الأصغر أورلاندو؟",
        answer: "Because Orlando was noble, brave, beloved by all the people, and naturally gentle, which made Oliver intensely jealous.",
        answerAr: "لأن أورلاندو كان نبيلاً وشجاعاً ومحبوباً من الجميع وذا خلق رفيع، مما أشعل في قلب أوليفر غيرة وحسداً شديدين.",
        year: "2019 دور أول • 2023 دور أول",
        keyHint: "Jealous of Orlando's gentleness, nobility, and popularity"
      },
      {
        id: "ayl-q6",
        question: "What did Orlando do to express his love for Rosalind in the Forest of Arden?",
        questionAr: "ماذا فعل أورلاندو ليعبر عن حبه لروزاليند في غابة آردن؟",
        answer: "He carved love poems to Rosalind on tree trunks and hung romantic verses on bushes.",
        answerAr: "قام بنقش قصائد الحب لروزاليند على جذوع أشجار الغابة وعلق أبيات الغزل على الأغصان.",
        year: "2019 دور ثانٍ • 2024 تمهيدي",
        keyHint: "Carved love poems on tree trunks / hung verses on bushes"
      },
      {
        id: "ayl-q7",
        question: "How did Orlando save his brother Oliver's life in the forest?",
        questionAr: "كيف أنقذ أورلاندو حياة شقيقه أوليفر في الغابة؟",
        answer: "He found Oliver asleep threatened by a serpent and a hungry lioness; Orlando fought and killed the lioness, getting wounded in the arm.",
        answerAr: "وجده نائماً وتوشك أفعى ولبؤة جائعة أن تفتكا به؛ فقاتل أورلاندو اللبؤة وقتلها وأصيبت ذراعه.",
        year: "2020 دور ثانٍ • 2023 دور ثانٍ",
        keyHint: "Fought and killed a hungry lioness to save sleeping Oliver"
      },
      {
        id: "ayl-q8",
        question: "How did Duke Frederick change at the end of the play?",
        questionAr: "كيف تغير الدوق فريدريك في ختام أحداث المسرحية؟",
        answer: "He met an old religious hermit at the edge of the forest, converted to a spiritual life, gave up his usurped dukedom, and restored everything to Duke Senior.",
        answerAr: "التقى بناسك تقي عند مدخل الغابة، فتأثر به وتخلى عن العرش المغتصب وأعاده لشقيقه الدوق الأكبر واعتزل في دير للعبادة.",
        year: "2021 دور أول • 2024 دور أول",
        keyHint: "Met a holy hermit / converted / restored dukedom to Duke Senior"
      },
      {
        id: "ayl-q9",
        question: "What is the famous philosophical speech delivered by Jaques in 'As You Like It'?",
        questionAr: "ما هي الخطبة الفلسفية الشهيرة التي يلقيها اللورد جاك في المسرحية؟",
        answer: "The 'All the world's a stage' monologue, describing the seven ages of man from infancy to old age.",
        answerAr: "مونولوج 'ما العالم إلا مسرح كبير' (All the world's a stage)، الذي يصف فيه مراحل عمر الإنسان السبع من الطفولة إلى الهرم.",
        year: "2022 دور أول",
        keyHint: "All the world's a stage / seven ages of man"
      },
      {
        id: "ayl-q10",
        question: "What are the main themes explored in 'As You Like It'?",
        questionAr: "ما هي الأفكار والثيمات الرئيسية التي تناقشها مسرحية 'كما تشاء'؟",
        answer: "The contrast between corrupt court life and peaceful pastoral nature, the power of forgiveness and reconciliation, and the nature of true romantic love.",
        answerAr: "التناقض بين فساد القصور وبساطة الطبيعة، فضيلة العفو والتسامح الأخوي، وجوهر الحب الحقيقي الصادق.",
        year: "2023 تمهيدي • 2024 دور ثانٍ",
        keyHint: "Court vs. country, forgiveness, true romantic love"
      }
    ]
  }
];
