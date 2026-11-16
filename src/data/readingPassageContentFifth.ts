import { ReadingPassage } from '../types';

/** Arabic translations and source exercises layered over the English text held in each grade lesson. */
export const FIFTH_READING_PASSAGE_CONTENT: Record<string, Partial<ReadingPassage>> = {
  '5p-u1-ramadan': {
    id: '5p-u1-ramadan',
    titleAr: 'رمضان في العراق',
    titleEn: 'Ramadan in Iraq',
    sourceTitle: 'ملزمة الخامس الإعدادي 2026',
    sourcePages: 'كتاب الطالب ص 7؛ الملزمة ص 7',
    translation: [
      'إلى: كلير\nالموضوع: رمضان في العراق\n\nمرحبًا كلير،\nشكرًا على رسالتك الإلكترونية. لقد سألتِني عن ________. حسنًا، نحن الآن في شهر رمضان، لذا سأخبرك عنه. إنه صيام ديني مدته 30 يومًا من الفجر حتى غروب الشمس. لذلك لا يوجد أكل أو شرب ________. إنه وقت نحاول فيه الإكثار من الصلاة، والتحلي بمزيد من الصبر مع بعضنا، وأن نكون طيبين وكرماء مع الأشخاص الأقل حظًا منا.',
      'عند غروب الشمس نتوقف عن الصيام، وبعد الصلاة ________. ويُسمّى ذلك الإفطار. أمي امرأة تقليدية جدًا (وهي أيضًا متسلطة بعض الشيء، ________!). على أي حال، تحرص على أن تكون وجبة الإفطار في منزلنا وجبة تقليدية جدًا. نبدأ دائمًا بكأس من اللبن والتمر وعصير الفاكهة وحساء العدس. أما الطبق الرئيسي فعادة ما يكون يخنة باللحم أو الدجاج والخضروات، تُقدّم مع الأرز. ثم نتناول الشاي والكعك. وخلال رمضان، يكون لدينا دائمًا الكثير من المعجنات في المنزل ________. ومن الأشياء التي أحبها حقًا في رمضان هنا في البصرة أن الناس يصبحون أكثر اجتماعية. فالعائلات والأصدقاء ________ في الأمسيات.',
      'قرب نهاية الشهر، يصبح بعض الناس سيئي المزاج قليلًا لأنهم يشعرون بالعطش والتعب والجوع. استقللت سيارة أجرة أمس، وكان السائق متجهمًا جدًا. قاد سيارته بطريقة سيئة للغاية، لكنك تعرفينني – أنا هادئة ومتساهلة جدًا. لذلك ابتسمت وحافظت على هدوئي!\nاكتبي إليّ قريبًا،\nسميرة\nملاحظة: أرسل لك صورة لنا معًا في ليفربول العام الماضي!'
    ],
    exerciseSets: [
      {
        id: '5p-u1-ramadan-sb-phrase-bank',
        source: 'malzama',
        sourceTitle: 'Student’s Book Exercise 1 — Match the missing phrases',
        sourcePages: 'كتاب الطالب ص 7؛ الملزمة ص 7',
        instruction: 'Read Samira’s email and match the missing phrases to the spaces (1–6).',
        instructionTranslation: 'اقرأ بريد سميرة الإلكتروني وطابق العبارات المفقودة مع الفراغات (1–6).',
        items: [
          { id: 'ramadan-q1', question: '1. traditions in my country', answer: 'c — traditions in my country' },
          { id: 'ramadan-q2', question: '2. all through the day', answer: 'a — all through the day' },
          { id: 'ramadan-q3', question: '3. we have an evening meal', answer: 'b — we have an evening meal' },
          { id: 'ramadan-q4', question: '4. but that’s another story', answer: 'd — but that’s another story' },
          { id: 'ramadan-q5', question: '5. to offer visitors in the evening', answer: 'f — to offer visitors in the evening' },
          { id: 'ramadan-q6', question: '6. spend a lot more time with each other', answer: 'e — spend a lot more time with each other' }
        ]
      }
    ]
  },

  '5p-u1-souq': {
    id: '5p-u1-souq',
    titleAr: 'سوق الشورجة',
    titleEn: 'Souq Al-Shorja',
    sourceTitle: 'ملزمة الخامس الإعدادي 2026',
    sourcePages: 'كتاب الطالب ص 8؛ الملزمة ص 9؛ كتاب النشاط ص 8',
    translation: [
      'في الأسبوع الماضي، زرت مكانًا مميزًا جدًا في بغداد للمرة الأولى. إنه سوق الشورجة. وكان دليلي في هذه الزيارة الرائعة صديقي العراقي حسن. اكتشفنا أن سوق الشورجة يقع في قلب بغداد، العراق، وهو مكان ذو تاريخ عريق يعود إلى زمن بعيد. وعندما دخلنا السوق، أحاطت بنا مجموعة متنوعة من المتاجر، يقدم كل منها شيئًا فريدًا. كان الهواء ممتلئًا بروائح التوابل الزكية، وجذبت ألوان الملابس الزاهية أنظارنا في كل منعطف. وأثناء تجولنا في السوق، لاحظنا مزيجًا من المباني القديمة والحديثة التي تروي قصص الماضي والحاضر.',
      'قدم لنا البائعون الودودون الذين يعرضون بضائعهم مصنوعات يدوية ووجبات عراقية لذيذة لنتشاركها. وبينما كنا نسير وسط الحشود النابضة بالحياة، شعرنا بحيوية الأحاديث اليومية والضحك ومتعة المساومة. إن سوق الشورجة ليس مجرد سوق عادي؛ بل هو صورة حية للحياة والثقافة العراقية، ومكان ينبغي للجميع زيارته.'
    ],
    exerciseSets: [
      {
        id: '5p-u1-souq-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — True, False or Don’t Know',
        sourcePages: 'كتاب النشاط ص 8',
        instruction: 'Read the text on page 8 of the Student’s Book and mark the sentences True, False or Don’t Know.',
        instructionTranslation: 'اقرأ النص في صفحة 8 من كتاب الطالب وحدد الجمل بصح أو خطأ أو لا أعرف.',
        items: [
          { id: 'souq-a1', question: 'The writer has been to Souq Al-Shorja many times.', answer: 'False.' },
          { id: 'souq-a2', question: 'He visited the market alone.', answer: 'False.' },
          { id: 'souq-a3', question: 'Souq Al-Shorja is the best market in Iraq.', answer: 'Don’t Know.' },
          { id: 'souq-a4', question: 'Souq Al-Shorja is not in central Baghdad.', answer: 'False.' },
          { id: 'souq-a5', question: 'The market offers a variety of shops.', answer: 'True.' },
          { id: 'souq-a6', question: 'The writer enjoys the smells of spices and the beautiful colours of the clothes in the shops.', answer: 'True.' },
          { id: 'souq-a7', question: 'Sellers at the market are not friendly.', answer: 'False.' }
        ]
      },
      {
        id: '5p-u1-souq-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Match words with definitions',
        sourcePages: 'كتاب النشاط ص 8',
        instruction: 'Match a word or phrase with the definitions.',
        instructionTranslation: 'طابق كلمة أو عبارة مع التعاريف.',
        items: [
          { id: 'souq-b1', question: 'a person who shows a place to other people', answer: 'guide' },
          { id: 'souq-b2', question: 'moving around slowly', answer: 'wandering' },
          { id: 'souq-b3', question: 'became aware of something', answer: 'sensed' },
          { id: 'souq-b4', question: 'producing strong emotions', answer: 'vivid' },
          { id: 'souq-b5', question: 'typical, pleasant smells (e.g. food)', answer: 'aromas' },
          { id: 'souq-b6', question: 'something you put in food', answer: 'spices' },
          { id: 'souq-b7', question: 'a quick view or impression of something', answer: 'snapshot' },
          { id: 'souq-b8', question: 'negotiating the sale of something', answer: 'bargaining' }
        ]
      },
      {
        id: '5p-u1-souq-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Complete the extract',
        sourcePages: 'كتاب النشاط ص 8',
        instruction: 'Complete the extract from the text on page 8 of the Student’s Book with one word in each gap.',
        instructionTranslation: 'أكمل المقتطف من النص الموجود في صفحة 8 من كتاب الطالب بكلمة واحدة في كل فراغ.',
        items: [
          { id: 'souq-c1', question: 'Last week, I visited a very special place in Baghdad ____ the first time.', answer: 'for' },
          { id: 'souq-c2', question: 'My guide ____ this amazing visit was my Iraqi friend Hassan.', answer: 'on' },
          { id: 'souq-c3', question: 'We found out ____ Souq Al-Shorja stands ____ the heart of Baghdad.', answer: 'that / in' },
          { id: 'souq-c4', question: 'A place ____ a rich history that goes way back.', answer: 'with' },
          { id: 'souq-c5', question: 'As we stepped ____ the market, we were surrounded ____ a variety ____ shops.', answer: 'into / by / of' }
        ]
      }
    ]
  },

  '5p-u1-babylon': {
    id: '5p-u1-babylon',
    titleAr: 'مهرجان بابل الدولي',
    titleEn: 'The Babylon International Festival',
    sourceTitle: 'ملزمة الخامس الإعدادي 2026',
    sourcePages: 'القطعة: ص 32–33؛ PDF ص 34–35',
    translation: [
      'يُقام مهرجان بابل الدولي للفنون والثقافات الدولية كل عام في مدينة بابل القديمة، التي تبعد نحو 85 كيلومترًا جنوب بغداد. ومنذ المهرجان الأول عام 1987، استقطب الحدث العديد من الفرق الممتازة من جميع مناطق العراق ومن أنحاء العالم. تأتي هذه الفرق لتقديم أنواع كثيرة من الموسيقى، ولا سيما الموسيقى الشعبية والمسرح الموسيقي والأوبرا والباليه. كما يأتي كتّاب وشعراء مشهورون لمناقشة أعمالهم وقراءتها، وتُقام محاضرات وندوات كثيرة حول مجموعة واسعة من الموضوعات الأدبية والفنية والثقافية والآثارية. وأصبح المهرجان حدثًا إعلاميًا شعبيًا، وتتناوله الآن الصحافة والتلفزيون والإنترنت أمام جمهور واسع جدًا.',
      'إن مدينة بابل الجميلة والتاريخية مكان مثالي لهذا النوع من المهرجانات الدولية. وتوجد ثلاثة مسارح رئيسية، جميعها مجهزة بأجهزة صوت وإضاءة حديثة، وأنظمة تسجيل وبث، وأفضل المرافق التي يستخدمها الفنانون للتحضير لعروضهم.',
      'يُعد المسرح البابلي أكبر مدرج في المدينة وقد احتفظ بأجوائه القديمة. أما قاعة العرش فهي أكبر قاعة في بابل التاريخية. وكانت ذات يوم المركز الإداري للإمبراطورية البابلية، حيث استُقبل الملوك والقادة العسكريون المنتصرون.',
      'كان معبد نينماخ في السابق معبدًا خاصًا للإلهة نينماخ، «سيدة السماوات العظيمة»، التي كان الناس يعبدونها هناك. ويُستخدم الآن لتقديم بعض العروض الأصغر حجمًا، ولكنها عالية الجودة، في المهرجان.',
      'عزيزي مايك،\nشكرًا على رسالتك. أقضي وقتًا رائعًا في هذه الفترة. يُقام مهرجان بابل الدولي هنا هذا الشهر، لذلك هناك الكثير مما يمكن مشاهدته والقيام به.\nحضرتُ ثلاث مسرحيات حتى الآن هذا الأسبوع! كانت اثنتان منها لكاتبين عراقيين، وكانتا ممتازتين. أما الثالثة فكانت لكاتب لبناني وشاركت فيها الفنانة التونسية المشهورة لطيفة. وفي إحدى اللحظات بدأت تردد قصيدة شعبية جدًا، وانضم إليها بعض الأشخاص خلفنا. انزعج والدي كثيرًا منهم وطلب منهم الهدوء! شعرت بإحراج شديد.\nكما حضرت ندوة ممتعة عن تاريخ بابل وكيف بدأ المهرجان. وتضمنت الكثير من مقاطع الفيديو والصور المثيرة للاهتمام التي أدهشتني. وفي الواقع، اشتريت قرصًا وثائقيًا لأنني عرفت أن أختي ستستمتع بالتعرف أكثر على تاريخ بابل الرائع.\nكما زرت معرضًا رائعًا للتصوير الفوتوغرافي. وقد منحني أفكارًا جديدة ومميزة. وقررت أنني أريد أن أصبح مصورًا محترفًا يومًا ما. لذلك، عندما تبدأ العطلة المدرسية، سأتمرن طوال اليوم باستخدام كاميرتي الجديدة!\nاكتب إليّ قريبًا،\nبلال\nملاحظة: أرسل لك مقالًا من مجلة عن مهرجان بابل الدولي وبرنامج الفعاليات.'
    ],
    exerciseSets: [
      {
        id: '5p-u1-babylon-reading-qa',
        source: 'malzama',
        sourceTitle: 'Reading comprehension — Questions about the Festival',
        sourcePages: 'الملزمة ص 32–34',
        instruction: 'Answer the questions about the Babylon International Festival.',
        instructionTranslation: 'أجب عن الأسئلة المتعلقة بمهرجان بابل الدولي.',
        items: [
          { id: 'babylon-q1', question: 'When was the first Babylon International Festival held?', answer: 'In 1987.' },
          { id: 'babylon-q2', question: 'How far is Babylon from Baghdad?', answer: 'About 85 kilometres south of Baghdad.' },
          { id: 'babylon-q3', question: 'How many main theatres are there?', answer: 'Three.' },
          { id: 'babylon-q4', question: 'Which venue is the biggest amphitheatre in the city?', answer: 'The Babylonian Theatre.' },
          { id: 'babylon-q5', question: 'Which venue is the largest hall in historical Babylon?', answer: 'Al Arsh (Throne) Auditorium.' }
        ]
      }
    ]
  },

  '5p-u2-digital-poverty': {
    id: '5p-u2-digital-poverty',
    titleAr: 'رشيد زيد والفقر الرقمي',
    titleEn: 'Rashid Zeid & Digital Poverty',
    sourceTitle: 'ملزمة الخامس الإعدادي 2026',
    sourcePages: 'الملزمة ص 48',
    translation: [
      'عزيزي راشد،\nأنت لا تعرفني، لكنني سمعت عن منظمتك «نحن متصلون» من خلال ابنة أختي إيمي، وهي صديقة لك. أعجبتني فكرتك كثيرًا، وأرغب بشدة في المساعدة. أمتلك محلًا لإصلاح أجهزة الكمبيوتر، ويسعدني إصلاح أي أجهزة تتلقاها وتكون فيها مشكلات (مجانًا تمامًا بالطبع).\nيرجى إخباري إذا كنت مهتمًا، ويمكننا ترتيب التفاصيل.\nإلى اللقاء الآن،\nجاستن كارترايت.',
      'نحن بحاجة إلى أجهزة كمبيوتر...\nفي العقود الأخيرة، أحدث الوصول إلى أجهزة الكمبيوتر والإنترنت فرقًا كبيرًا في تعليم ملايين الأطفال. وكان الأطفال الذين لا يمتلكون أجهزة كمبيوتر في منازلهم يواجهون صعوبات في أداء الواجبات المنزلية أو البحث عن المعلومات. لكن وضعًا كان صعبًا أصلًا أصبح أسوأ خلال الجائحة. فمع اقتصار الدروس على الإنترنت، لم يعد بإمكان من لا يملكون إمكانية الوصول إلى الإنترنت الدراسة إطلاقًا. تعمل منظمات كثيرة على سد الفجوة الرقمية، لكن هؤلاء الطلاب بحاجة إلى المساعدة بشكل عاجل.'
    ],
    exerciseSets: [
      {
        id: '5p-u2-digital-poverty-malzama',
        source: 'malzama',
        sourceTitle: 'Reading comprehension — Digital poverty',
        sourcePages: 'الملزمة ص 48',
        instruction: 'Answer the questions about the text.',
        instructionTranslation: 'أجب عن الأسئلة المتعلقة بالنص.',
        items: [
          { id: 'digital-q1', question: 'Why did Justin Cartwright write to Rashid?', answer: 'Because he wanted to help the organization by repairing donated computers for free.' },
          { id: 'digital-q2', question: 'What problem did children without computers have?', answer: 'They had difficulties doing homework or searching for information.' },
          { id: 'digital-q3', question: 'Why did the situation become worse during the pandemic?', answer: 'Because lessons were online, so students without internet access could not study.' }
        ]
      }
    ]
  }
};
