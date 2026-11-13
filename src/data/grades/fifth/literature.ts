import { LiteratureItem } from '../../../types';

// =========================================================================
// دليل مراجعة مختصر للأدب المقرر في ملزمة الأستاذ عمار غالب 2026؛ ليس تفريغاً كاملاً للنصوص أو جميع تدريبات الصفحات.
// Literature Spot source range: printed pages 188-211. Keep this as a study guide, not a claim of complete transcription.
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
    authorYears: "ولدت في 29 نوفمبر 1832 وتوفيت عن عمر 55 عاماً",
    authorBioEn: [
      "Louisa May Alcott was an American writer born in Germantown, Pennsylvania, on 29 November 1832. She was the second of four daughters, whose lives inspired Little Women.",
      "Because her family was poor, she began working at a young age. During the American Civil War she volunteered as a nurse, caught typhoid, and recovered. Her short stories appeared in The Atlantic Monthly, and her later novels helped pay her family's debts.",
      "She later lost her younger sister to scarlet fever and her oldest sister due to complications during childbirth. She raised her niece, who had the same name. Alcott died in Boston at the age of 55 after suffering from ill health."
    ],
    authorBioAr: [
      "لويزا ماي ألكوت كاتبة أمريكية ولدت في جيرمانتاون بولاية بنسلفانيا في 29 نوفمبر 1832. كانت الابنة الثانية من أربع بنات، وقد ألهمت حياتهن رواية نساء صغيرات.",
      "بسبب فقر عائلتها بدأت العمل في سن مبكرة. وخلال الحرب الأهلية الأمريكية تطوعت ممرضة، وأصيبت بالتيفوئيد ثم تعافت. نُشرت قصصها القصيرة في مجلة The Atlantic Monthly، ثم ساعدت رواياتها اللاحقة على سداد ديون عائلتها.",
      "فقدت شقيقتها الصغرى بسبب الحمى القرمزية وشقيقتها الكبرى بسبب مضاعفات الولادة، ثم تولت تربية ابنة أختها التي حملت الاسم نفسه. توفيت ألكوت في بوسطن عن عمر 55 عاماً بعد معاناة صحية."
    ],\n    genre: "Novel",
    genreAr: "رواية",
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
    summaryAr: "تروي الرواية قصة حياة أربع شقيقات من عائلة مارتش (ميغ، جو، بيث، وإيمي) أثناء غياب والدهن أُرسل للقتال مع جيش الاتحاد خلال الحرب الأهلية الأمريكية. تناضل الفتيات مع والدتهن الحبيبة (مارمي) ضد الفقر والحرمان بروح ملؤها الكرم والمحبة والإيثار، ويتعلمن دروساً عميقة في التغلب على عيوبهن الشخصية وصنع الفرح من أبسط الأشياء مع جارهن الثري لوري وجده السيد لورنس.",
    summaryEn: "Little Women chronicles the lives and moral growth of four sisters—Meg, Jo, Beth, and Amy March—living in modest circumstances in New England while their father has been sent to fight for the Union Army during the American Civil War. Guided by their affectionate mother (Marmee), the sisters navigate poverty, societal expectations, personal ambitions, and family devotion.",
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
        answer: "He was away serving with the Union Army during the American Civil War.",
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
      },
      {
        id: "lw-source-ex-1",
        question: "Answer the four Activity Book questions on the Christmas extract: Why might the sisters not see their father for a long time? Why does Mother not want presents? How much money does each sister have? What does Jo suggest?",
        questionAr: "أجب عن أسئلة مقطع عيد الميلاد الأربعة في كتاب النشاط.",
        answer: "Their father is far away serving with the Union Army during the Civil War. Mother does not want presents because the winter will be hard and the family should not spend money for pleasure. Each sister has one dollar. Jo suggests that they buy presents for themselves.",
        answerAr: "والدهن بعيد ويخدم مع جيش الاتحاد في الحرب الأهلية. لا تريد الأم هدايا لأن الشتاء سيكون صعباً ولا ينبغي إنفاق المال على الكماليات. لدى كل أخت دولار واحد. تقترح جو أن يشترين هدايا لأنفسهن.",
        year: "كتاب النشاط ص 168",
        keyHint: "Father away with the Union Army; hard winter; one dollar each; buy presents"
      },
      {
        id: "lw-source-ex-2",
        question: "Why can't Beth practise the piano, and why does Amy think she suffers the most?",
        questionAr: "لماذا لا تستطيع بيث التدرب على البيانو؟ ولماذا تعتقد إيمي أنها الأكثر معاناة؟",
        answer: "Beth's hands become rough and tired from washing dishes and doing housework. Amy says that girls at school make fun of her lessons, dresses and appearance, and that her father is not rich.",
        answerAr: "تصبح يدا بيث خشنتين ومتعبتين بسبب غسل الصحون وأعمال المنزل. وتقول إيمي إن الفتيات في المدرسة يسخرن من دروسها وملابسها ومظهرها، وإن والدها ليس غنياً.",
        year: "كتاب النشاط ص 168-169",
        keyHint: "Beth: tired hands from housework; Amy: teased at school"
      },
      {
        id: "lw-source-ex-3",
        question: "Match each sister with the present she wants.",
        questionAr: "طابق كل أخت مع الهدية التي تريدها.",
        answer: "Jo — books; Beth — music; Amy — drawing materials; Meg — pretty things.",
        answerAr: "جو — الكتب؛ بيث — الموسيقى؛ إيمي — أدوات الرسم؛ ميغ — الأشياء الجميلة.",
        year: "كتاب النشاط ص 168",
        keyHint: "Jo/books; Beth/music; Amy/drawing materials; Meg/pretty things"
      },
      {
        id: "lw-source-ex-4",
        question: "Give the words or phrases from the extract: without saying anything; not necessary, for fun; said loudly; talked about something they were annoyed with; unhappy; opposite of soft; mean; joke about.",
        questionAr: "استخرج الكلمات والعبارات المطلوبة من مقطع نساء صغيرات.",
        answer: "silently; for pleasure; cried; complained; upset; rough; unkind; make fun of.",
        answerAr: "بصمت؛ من أجل المتعة؛ صاحت؛ اشتكت؛ منزعج؛ خشن؛ غير لطيف؛ يسخر من.",
        year: "كتاب النشاط ص 169",
        keyHint: "silently; for pleasure; cried; complained; upset; rough; unkind; make fun of"
      },
      {
        id: "lw-source-ex-5",
        question: "Which sister is a student, does the housework, is a teacher, and keeps an elderly person company?",
        questionAr: "أي أخت تدرس، وأيهن تقوم بأعمال المنزل، وأيهن معلمة، وأيهن ترافق شخصاً مسناً؟",
        answer: "Amy is a student; Beth does the housework; Meg is a teacher; Jo keeps an elderly person company.",
        answerAr: "إيمي طالبة؛ بيث تقوم بأعمال المنزل؛ ميغ معلمة؛ جو ترافق شخصاً مسناً.",
        year: "كتاب النشاط ص 169",
        keyHint: "Amy/student; Beth/housework; Meg/teacher; Jo/elderly companion"
      },
      {
        id: "lw-source-ex-6",
        question: "Why did Jo read Mr Laurence's letter? Why did Mr Laurence give the piano to Beth?",
        questionAr: "لماذا قرأت جو رسالة السيد لورنس؟ ولماذا أعطى السيد لورنس البيانو لبيث؟",
        answer: "Jo read the letter to find out what it said before Beth arrived. Mr Laurence gave Beth the piano because he knew how much she loved playing it and wanted to make her happy.",
        answerAr: "قرأت جو الرسالة لتعرف ما ورد فيها قبل وصول بيث. وأعطى السيد لورنس البيانو لبيث لأنه عرف مدى حبها للعزف وأراد إسعادها.",
        year: "كتاب النشاط ص 170",
        keyHint: "Jo read before Beth arrived; the piano was a gift for Beth"
      },
      {
        id: "lw-source-ex-7",
        question: "Give the seven words or phrases from the Section 2 extract: answered; the part behind (e.g. design or setting); with enthusiasm; without colour; not believing; not modern; thankful.",
        questionAr: "استخرج مرادفات الكلمات السبعة من مقطع القسم الثاني.",
        answer: "replied; background; eagerly; pale; incredulous; old-fashioned; grateful.",
        answerAr: "أجاب؛ الخلفية؛ بحماس؛ شاحب؛ غير مصدق؛ قديم الطراز؛ ممتن.",
        year: "كتاب النشاط ص 171",
        keyHint: "replied; background; eagerly; pale; incredulous; old-fashioned; grateful"
      },
      {
        id: "lw-source-ex-8",
        question: "True or False: Mother never refused Beth's requests because she usually asked for things for others; Meg and Jo helped make the slippers; Amy was going to tell Beth about the piano but Jo stopped her; Beth's sisters had read Mr Laurence's letter before she got home; Mr Laurence cared for his granddaughter's possessions.",
        questionAr: "حدد الصح والخطأ في عبارات تمرين القسم الثاني.",
        answer: "True; True; True; True; True; True. Beth thought Mr Laurence had not liked her gift before his letter arrived.",
        answerAr: "صح؛ صح؛ صح؛ صح؛ صح. أما العبارة التي تقول إن بيث اعتقدت أن السيد لورنس لم يعجبه إهداؤها فهي خطأ.",
        year: "كتاب النشاط ص 170",
        keyHint: "Beth feared that Mr Laurence had not liked the slippers before she received his letter"
      },
      {
        id: "lw-source-ex-9",
        question: "What have Amy and Laurie come to realize? Why is harvest mentioned at the end of the passage?",
        questionAr: "إلى ماذا توصلت إيمي ولوري؟ ولماذا ذُكر الحصاد في نهاية المقطع؟",
        answer: "They understand that beauty, youth, luck and even love cannot prevent pain and loss. The harvest is a metaphor for the loving, patient work of their mother and the good lives her daughters have grown into.",
        answerAr: "أدركا أن الجمال والشباب والحظ وحتى الحب لا تمنع الألم والفقد. والحصاد استعارة لعمل الأم المحب والصبور وللنتائج الطيبة التي أثمرتها تربيتها لبناتها.",
        year: "كتاب الطالب ص 132 / كتاب النشاط ص 172",
        keyHint: "Beauty, youth, luck and love cannot keep pain and loss away; harvest is a metaphor"
      },
      {
        id: "lw-source-ex-10",
        question: "Complete the six True/False statements about the final section and match Jo, Meg, Amy, Laurie and Mother with their actions.",
        questionAr: "أكمل الصح والخطأ وطابق الشخصيات مع أفعالها في القسم الأخير.",
        answer: "True; False; False; True; False; True. Matching: Jo — thinks she was selfish before; Meg — always wanted a family; Amy — wants to make a statue; Laurie — is becoming stronger and more serious; Mother — tells Amy to keep hope for her daughter.",
        answerAr: "صح؛ خطأ؛ خطأ؛ صح؛ خطأ؛ صح. المطابقة: جو — ترى أنها كانت أنانية سابقاً؛ ميغ — كانت تريد دائماً عائلة؛ إيمي — تريد صنع تمثال؛ لوري — يصبح أقوى وأكثر جدية؛ الأم — تطلب من إيمي ألا تفقد الأمل بابنتها.",
        year: "كتاب النشاط ص 172",
        keyHint: "Jo/selfish before; Meg/family; Amy/statue; Laurie/stronger; Mother/hope"
      },
      {
        id: "lw-source-ex-11",
        question: "Answer the three questions about the final extract: What do the castles refer to? Why does Jo think she can write a better book? Why is Amy making a statue of a baby?",
        questionAr: "أجب عن أسئلة المقطع الأخير: إلى ماذا تشير القصور؟ ولماذا تعتقد جو أنها ستكتب كتاباً أفضل؟ ولماذا تصنع إيمي تمثال طفل؟",
        answer: "The castles refer to the sisters' dreams and ambitions. Jo believes her experiences have made her wiser and will help her write a better book. Amy is making a statue of a baby because she wants to preserve the image of her little daughter.",
        answerAr: "تشير القصور إلى أحلام الأخوات وطموحاتهن. تعتقد جو أن تجاربها جعلتها أكثر حكمة وستساعدها على كتابة كتاب أفضل. وتصنع إيمي تمثالاً لطفل لأنها تريد الاحتفاظ بصورة ابنتها الصغيرة.",
        year: "كتاب النشاط ص 172",
        keyHint: "Castles = dreams; Jo's experiences; preserve her daughter's image"
      },
      {
        id: "lw-source-ex-12",
        question: "Give the six words or phrases from the final extract: with love; a wish to do art; make something happen; darkness; acting without thinking; way.",
        questionAr: "استخرج الكلمات المطلوبة من المقطع الأخير.",
        answer: "lovingly; artistic hopes; fulfil/grant; shadow; impulsive; manner.",
        answerAr: "بمحبة؛ آمال فنية؛ يحقق؛ ظل؛ مندفع دون تفكير؛ طريقة/أسلوب.",
        year: "كتاب النشاط ص 173",
        keyHint: "lovingly; artistic hopes; fulfil/grant; shadow; impulsive; manner"
      },
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
      "William Shakespeare is described in the booklet as one of the greatest playwrights. He wrote famous works including Romeo and Juliet, Hamlet, Macbeth and The Merchant of Venice.",
      "He was born in Stratford-upon-Avon, in the centre of England. As a young man he worked as an actor before becoming a writer.",
      "He wrote at least 37 plays, 154 sonnets and two narrative poems. His plays are performed around the world in many languages, and his poetry has been widely translated."
    ],
    authorBioAr: [
      "يصف الكتاب وليم شكسبير بأنه من أعظم كتّاب المسرح، ومن أشهر أعماله روميو وجولييت وهاملت وماكبث وتاجر البندقية.",
      "ولد في ستراتفورد-أبون-أفون وسط إنجلترا، وعمل ممثلاً في شبابه قبل أن يصبح كاتباً.",
      "كتب ما لا يقل عن 37 مسرحية و154 سونيتة وقصيدتين سرديتين. وتُعرض مسرحياته في أنحاء العالم بلغات عديدة، كما تُرجمت أشعاره على نطاق واسع."
    ],
    genre: "Comedy",
    genreAr: "كوميديا",
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
      },
      {
        id: "temp-source-ex-1",
        question: "What happened to the ship and its crew after Prospero raised the tempest?",
        questionAr: "ماذا حدث للسفينة وطاقمها بعد أن أثار بروسبيرو العاصفة؟",
        answer: "The ship and its crew were saved; the passengers were brought safely to shore, and the crew was put under a spell.",
        answerAr: "أُنقذت السفينة وطاقمها؛ ونُقل الركاب بأمان إلى الشاطئ ووُضع الطاقم تحت تأثير تعويذة.",
        year: "كتاب الطالب ص 204-205",
        keyHint: "The ship was saved with its crew; passengers brought to shore"
      },
      {
        id: "temp-source-ex-2",
        question: "Match the seven characters with their descriptions.",
        questionAr: "طابق الشخصيات السبع مع أوصافها.",
        answer: "Prospero — a man with magical powers who wants revenge; Miranda — Prospero's daughter, a princess who does not know it; Antonio — Prospero's brother who betrayed him; Alonso — a powerful king; Ferdinand — the king's son; Caliban — Prospero's slave, treated badly; Ariel — a spirit with great magical powers.",
        answerAr: "بروسبيرو — رجل يمتلك قوى سحرية ويريد الانتقام؛ ميراندا — ابنة بروسبيرو والأميرة التي لا تعرف ذلك؛ أنطونيو — أخو بروسبيرو الذي خانه؛ ألونسو — ملك قوي؛ فرديناند — ابن الملك؛ كاليبان — عبد بروسبيرو الذي يعامله بقسوة؛ أرييل — روح ذات قوى سحرية عظيمة.",
        year: "كتاب النشاط ص 174",
        keyHint: "Prospero/d; Miranda/g; Antonio/a; Alonso/f; Ferdinand/c; Caliban/b; Ariel/e"
      },
      {
        id: "temp-source-ex-3",
        question: "Answer the six multiple-choice questions about Caliban: Who is Sycorax? Why does Caliban think he owns the island? How was the relationship at first? What did Caliban teach Prospero? What did Prospero teach Caliban? Where does Caliban live?",
        questionAr: "أجب عن أسئلة الاختيار الستة حول كاليبان.",
        answer: "Sycorax is Caliban's mother; Caliban thinks he owns the island because he was there first; their relationship was initially friendly; Caliban showed Prospero the island and where things were; Prospero taught Caliban to speak English; Caliban lives in a cave.",
        answerAr: "سيكوراكس هي أم كاليبان؛ يعتقد كاليبان أن الجزيرة ملكه لأنه كان فيها أولاً؛ كانت العلاقة ودية في البداية؛ دلّ كاليبان بروسبيرو على الجزيرة وأماكن الأشياء فيها؛ علّم بروسبيرو كاليبان التحدث بالإنجليزية؛ ويعيش كاليبان في كهف.",
        year: "كتاب النشاط ص 176",
        keyHint: "Caliban's mother; first inhabitant; initially friendly; showed the island; English; cave"
      },
      {
        id: "temp-source-ex-4",
        question: "Mark the eight statements about Caliban and Prospero True or False.",
        questionAr: "حدد الصح والخطأ في العبارات الثماني عن كاليبان وبروسبيرو.",
        answer: "1 True; 2 False; 3 True; 4 True; 5 False; 6 True; 7 True; 8 False.",
        answerAr: "1 صح؛ 2 خطأ؛ 3 صح؛ 4 صح؛ 5 خطأ؛ 6 صح؛ 7 صح؛ 8 خطأ.",
        year: "كتاب النشاط ص 176",
        keyHint: "Caliban accuses Prospero of stealing the island; English only lets him curse"
      },
      {
        id: "temp-source-ex-5",
        question: "What is the central point of Prospero's final speech?",
        questionAr: "ما الفكرة الأساسية في خطاب بروسبيرو الأخير؟",
        answer: "Prospero says his magical powers are gone and asks the audience to release him through their applause and forgiveness, so he can return to Naples.",
        answerAr: "يقول بروسبيرو إن قواه السحرية انتهت ويطلب من الجمهور أن يحرره بالتصفيق والعفو حتى يتمكن من العودة إلى نابولي.",
        year: "كتاب الطالب ص 211",
        keyHint: "His spells are gone; he asks the audience to set him free"
      },
    ]
  }
];
