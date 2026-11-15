import { ReadingPassage } from '../types';

export const THIRD_READING_PASSAGE_CONTENT: Record<string, Partial<ReadingPassage>> = {
  '3i-u1-panther': {
    id: '3i-u1-panther',
    titleAr: 'سيارة العام: Panther 3.0D',
    titleEn: 'Car of the Year: Panther 3.0D',
    status: 'reconstructed',
    sourceTitle: 'ملزمة الثالث المتوسط 2025',
    sourcePages: 'القطعة ص 11؛ أسئلة الوزاريات ص 12؛ كتاب النشاط ص 8',
    verificationNote: 'النص مطابق للصفحة 11. آخر جملة إنجليزية في أسفل الصفحة مقطوعة في النسخة المصورة بعد عبارة “airbags for the driver and”، وأُكملت نهايتها من الترجمة العربية المقابلة في الصفحة نفسها؛ لذلك وُسمت القطعة بأنها معاد بناؤها.',
    originalText: [
      "I’m here at one of Baghdad’s motor shows, and the car everyone is talking about is the Panther 3.0D. The new Panther is Car of the Year, and it’s really fantastic! Some people just stand and gaze at its beautiful shape. Some young men want to sit in the driver’s seat and dream. However, this car is not just good-looking; it is also a hybrid car. With its combination of an electric motor and petrol engine, this fuel-saving car is good for the planet, and good for your pocket, too! The Panther is self-charging, so you don’t need to worry about finding a charging point. You just drive like you always do.",
      "It is not only the driver who will be impressed by the Panther 3.0D. Inside, children can sit in the back and try the electric seats and windows while their older brothers and sisters play with the built-in video-game player. These are standard for all models. Extra features include: GPS, the sunroof, tinted windows and an excellent Bluetooth connection.",
      "Switch on the engine and it runs so quietly. All of the features are really fun to try. But there’s more! There’s loads of space inside. The Panther 3.0D has seats for eight people – two in the front, three in the middle and three in the back. And there’s space for all of their bags.",
      "It looks very expensive, but the Panther 3.0D is actually quite cheap. And you don’t need a lot of money to run this car. It does 12 kilometres to the litre and has a four-year warranty.",
      "But there’s something even more important. This is a really safe car. You don’t have to worry in an accident. There are airbags for the driver and passengers, and many other safety features in this car."
    ],
    translation: [
      'أنا هنا في أحد معارض السيارات في بغداد، والسيارة التي يتحدث عنها الجميع هي Panther 3.0D. سيارة Panther الجديدة هي سيارة العام، وهي رائعة حقًا! يقف بعض الناس وينظرون بإعجاب إلى شكلها الجميل. ويرغب بعض الشباب في الجلوس في مقعد السائق والحلم. ومع ذلك، فهذه السيارة ليست جميلة المظهر فقط، بل هي أيضًا سيارة هجينة. وبفضل الجمع بين المحرك الكهربائي ومحرك البنزين، فإن هذه السيارة الموفرة للوقود جيدة للبيئة وجيدة لجيبك أيضًا! تشحن Panther نفسها، لذلك لا داعي للقلق بشأن العثور على نقطة شحن. كل ما عليك هو القيادة كالمعتاد.',
      'ليس السائق وحده من سيُعجب بسيارة Panther 3.0D. ففي الداخل، يستطيع الأطفال الجلوس في الخلف وتجربة المقاعد والنوافذ الكهربائية، بينما يلعب إخوتهم الأكبر سنًا بمشغل ألعاب الفيديو المدمج. وهذه التجهيزات قياسية في جميع الطرازات. وتشمل الميزات الإضافية نظام GPS والسقف الزجاجي والنوافذ الملونة واتصال Bluetooth ممتازًا.',
      'عند تشغيل المحرك، يعمل بهدوء شديد. وجميع الميزات ممتعة حقًا للتجربة. لكن هناك المزيد! فالمساحة الداخلية واسعة جدًا. تتسع Panther 3.0D لثمانية أشخاص: اثنان في الأمام، وثلاثة في الوسط، وثلاثة في الخلف. وهناك مساحة لجميع حقائبهم.',
      'تبدو السيارة باهظة الثمن جدًا، لكن Panther 3.0D رخيصة فعليًا. ولا تحتاج إلى الكثير من المال لتشغيل هذه السيارة. فهي تقطع 12 كيلومترًا لكل لتر، ولديها ضمان لمدة أربع سنوات.',
      'لكن هناك أمرًا أكثر أهمية. هذه سيارة آمنة جدًا. لا داعي للقلق عند وقوع حادث. توجد وسائد هوائية للسائق والركاب، والعديد من ميزات الأمان الأخرى في هذه السيارة.'
    ],
    exerciseSets: [
      {
        id: '3i-u1-panther-malzama-ministerial',
        source: 'malzama',
        sourceTitle: 'وزاريات قطعة Panther 3.0D',
        sourcePages: 'الملزمة ص 12',
        instruction: 'Answer the questions and mark the statements True or False.',
        instructionTranslation: 'أجب عن الأسئلة وحدد الجمل بصح أو خطأ.',
        items: [
          { id: 'panther-m1', question: 'The “Panther 3.0D” has seats for eight people. (True / False)', answer: 'True.' },
          { id: 'panther-m2', question: 'The “Panther 3.0D” is actually very cheap. (True / False)', answer: 'True.' },
          { id: 'panther-m3', question: 'Children are interested in the “Panther 3.0D” and they sit in the back and try the electric seats and windows. (True / False)', answer: 'True.' },
          { id: 'panther-m4', question: 'Some young men are more interested in the engine of “Panther 3.0D”. (True / False)', answer: 'False.' },
          { id: 'panther-m5', question: 'The “Panther 3.0D” is actually very expensive. (True / False)', answer: 'False.' },
          { id: 'panther-m6', question: 'There’s loads of space inside “Panther 3.0D”. (True / False)', answer: 'True.' },
          { id: 'panther-m7', question: 'The “Panther 3.0D” has no standard features. (True / False)', answer: 'False.' },
          { id: 'panther-m8', question: 'What are the safety features in the Panther 3.0D?', answer: 'They are airbags, electric windows, electric seats, GPS, sunroof and tinted windows.' },
          { id: 'panther-m9', question: 'What is the name of the car of the year?', answer: 'Panther 3.0D.' },
          { id: 'panther-m10', question: 'The Panther 3.0D has a warranty for four years. (True / False)', answer: 'True.' },
          { id: 'panther-m11', question: 'Is Panther 3.0D a safe or dangerous car?', answer: 'It is a safe car.' },
          { id: 'panther-m12', question: 'In Panther 3.0D, there are airbags for the driver and passengers. (True / False)', answer: 'True.' },
          { id: 'panther-m13', question: 'The other standard features for the new Panther 3.0D include GPS. (True / False)', answer: 'True.' }
        ]
      },
      {
        id: '3i-u1-panther-ab-ex3',
        source: 'activity_book',
        sourceTitle: 'Exercise 3 — True or False',
        sourcePages: 'كتاب النشاط ص 8',
        instruction: 'Read the sentences and mark them True (T) or False (F).',
        instructionTranslation: 'اقرأ الجمل واكتب صح أو خطأ.',
        items: [
          { id: 'panther-ab3-a', question: 'Not all passengers can feel safe inside the Panther.', answer: 'False.' },
          { id: 'panther-ab3-b', question: 'You don’t need to think about charging points when you own a Panther.', answer: 'True.' },
          { id: 'panther-ab3-c', question: 'Only the front of the car has electric seats and windows.', answer: 'False.' },
          { id: 'panther-ab3-d', question: 'The Panther takes care of your pocket and the planet.', answer: 'True.' }
        ]
      }
    ]
  },

  '3i-u2-lucy': {
    id: '3i-u2-lucy',
    titleAr: 'لوسي في مسلسل عائلة البدري',
    titleEn: 'Lucy Fisher and The Badri Family',
    status: 'verified',
    sourceTitle: 'ملزمة الثالث المتوسط 2025 — نص Lucy Fisher وتمارين كتاب النشاط',
    sourcePages: 'نص القطعة في الملزمة بعد ص 45؛ كتاب النشاط ص 32–33؛ أسئلة وزارية ص 47',
    originalText: [
      'Lucy Fisher, 16, talks to Star! Magazine about her part in the new TV comedy, The Badri Family.',
      'In this comedy, I play Samara, the daughter in a traditional family. I live with my mother, father and younger brother. My brother is very clumsy and is always having silly accidents. In the first episode, he accidentally put salt instead of sugar in my mother’s tea and it tasted awful! In every episode he trips over a lot and drops things.',
      'I really enjoyed filming the latest episode because we go away as a family on a holiday. We stay in a fancy hotel with a swimming pool and my brother falls in the pool with all his clothes on! He gets soaked. Later that day, he spills his drink at lunch and then slips in the puddle.',
      'Next week, we are filming an episode where my brother puts cleaning fluid on his hair instead of hair gel and his hair turns green. It’s going to be so funny!'
    ],
    translation: [
      'لوسي فيشر، البالغة من العمر 16 عامًا، تتحدث إلى مجلة Star! عن دورها في المسلسل الكوميدي التلفزيوني الجديد «عائلة البدري».',
      'في هذا المسلسل الكوميدي، ألعب دور سمارة، ابنة عائلة تقليدية. أعيش مع أمي وأبي وأخي الأصغر. أخي أخرق جدًا، ويتعرض دائمًا لحوادث سخيفة. في الحلقة الأولى، وضع الملح بدلًا من السكر في شاي أمي عن طريق الخطأ، وكان مذاقه فظيعًا! وفي كل حلقة يتعثر كثيرًا ويسقط الأشياء.',
      'لقد استمتعت حقًا بتصوير الحلقة الأخيرة لأننا نسافر في عطلة بصفتنا عائلة. نقيم في فندق فاخر فيه مسبح، ويسقط أخي في المسبح بكل ملابسه! فيبتل تمامًا. وفي وقت لاحق من ذلك اليوم، يسكب شرابه أثناء الغداء ثم ينزلق في البركة.',
      'في الأسبوع المقبل، سنصور حلقة يضع فيها أخي سائل التنظيف على شعره بدلًا من جل الشعر، فيتحول شعره إلى اللون الأخضر. سيكون ذلك مضحكًا جدًا!'
    ],
    exerciseSets: [
      {
        id: '3i-u2-lucy-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — True or False',
        sourcePages: 'كتاب النشاط ص 25',
        instruction: 'Are the sentences True (T) or False (F)?',
        instructionTranslation: 'هل الجمل صحيحة أم خاطئة؟',
        items: [
          { id: 'lucy-a1', question: 'Lucy’s brother is clumsy.', answer: 'False.' },
          { id: 'lucy-a2', question: 'Samara is the name of the girl Lucy plays.', answer: 'True.' },
          { id: 'lucy-a3', question: 'Samara’s brother is older than her.', answer: 'False.' },
          { id: 'lucy-a4', question: 'Samara’s mother liked her tea.', answer: 'False.' },
          { id: 'lucy-a5', question: 'Lucy’s character fell in the pool.', answer: 'False.' },
          { id: 'lucy-a6', question: 'Lucy’s brother got very wet.', answer: 'False.' }
        ]
      },
      {
        id: '3i-u2-lucy-ab-short-answers',
        source: 'activity_book',
        sourceTitle: 'Exercise 1 — Answer the questions',
        sourcePages: 'كتاب النشاط ص 32',
        instruction: 'Answer the questions. Write short answers.',
        instructionTranslation: 'أجب عن الأسئلة واكتب إجابات قصيرة.',
        items: [
          { id: 'lucy-q1', question: 'What’s the name of the girl Lucy plays?', answer: 'Samara.' },
          { id: 'lucy-q2', question: 'What’s Samara’s brother like?', answer: 'Clumsy.' },
          { id: 'lucy-q3', question: 'What was in the mother’s tea?', answer: 'Salt.' },
          { id: 'lucy-q4', question: 'What does Lucy say about filming the latest episode?', answer: 'She enjoyed it.' },
          { id: 'lucy-q5', question: 'How did Samara’s brother get so wet?', answer: 'He fell in the pool with all his clothes on.' },
          { id: 'lucy-q6', question: 'What did Samara’s brother spill at lunch?', answer: 'His drink.' }
        ]
      },
      {
        id: '3i-u2-lucy-ab-match',
        source: 'activity_book',
        sourceTitle: 'Exercise 2 — Match the sentence halves',
        sourcePages: 'كتاب النشاط ص 32',
        instruction: 'These sentences come from Lucy’s article. Match the beginning and ending of each sentence.',
        instructionTranslation: 'هذه الجمل مأخوذة من مقال لوسي. صِل بداية كل جملة بنهايتها.',
        items: [
          { id: 'lucy-match1', question: 'My brother is very clumsy', answer: 'and is always having silly accidents.' },
          { id: 'lucy-match2', question: 'In the first episode, he accidentally put salt instead of sugar in my mother’s tea', answer: 'and it tasted awful!' },
          { id: 'lucy-match3', question: 'I really enjoyed filming the latest episode', answer: 'because we go away as a family on a holiday.' },
          { id: 'lucy-match4', question: 'We stay in a fancy hotel with a swimming pool', answer: 'and my brother falls in the pool with all his clothes on!' },
          { id: 'lucy-match5', question: 'Later that day, he spills his drink at lunch', answer: 'and then slips in the puddle.' }
        ]
      },
      {
        id: '3i-u2-lucy-ab-complete',
        source: 'activity_book',
        sourceTitle: 'Exercise 3 — Complete the sentences',
        sourcePages: 'كتاب النشاط ص 33',
        instruction: 'Complete these sentences about Lucy’s TV show in the present simple. Use verbs from the box.',
        instructionTranslation: 'أكمل الجمل عن برنامج لوسي التلفزيوني بالمضارع البسيط مستخدمًا الأفعال من الصندوق.',
        items: [
          { id: 'lucy-c1', question: 'My brother ______ very clumsy.', answer: 'is' },
          { id: 'lucy-c2', question: 'In the first episode, my brother ______ salt in my mother’s tea instead of sugar.', answer: 'puts' },
          { id: 'lucy-c3', question: 'My brother ______ things and ______ over.', answer: 'drops; falls' },
          { id: 'lucy-c4', question: 'My brother ______ in the hotel pool.', answer: 'falls' },
          { id: 'lucy-c5', question: 'Then he ______ his drink and ______ in the puddle.', answer: 'spills; slips' }
        ]
      }
    ]
  },

  '3i-u3-falcons': {
    id: '3i-u3-falcons',
    titleAr: 'الصقور: أسرع الكائنات الحية',
    titleEn: 'The Fastest Living Thing — Falcons',
    status: 'verified',
    sourceTitle: 'ملزمة الثالث المتوسط 2025',
    sourcePages: 'ص 68',
    originalText: [
      'Have you ever watched a falcon diving down from the sky? They are the fastest things in the natural world. They fly high up and then dive down to kill a bird or a small animal. Some falcons can dive at 240 kph!',
      'More than a thousand years ago, the people from the deserts of Arabia, the Bedouin, used to watch falcons catching birds and animals for food. The Bedouin lived mostly on dates, milk and bread because it was difficult to catch animals and birds. Then they learned how to catch falcons. Soon, the Bedouin were eating meat their falcons caught for them. Their favourite bird was the large, long-legged houbara. They cooked it over a fire and it tasted delicious.',
      'The Bedouin used to hunt on camels. They rode fast as they followed their flying falcons. Today, falconry is a sport, not a necessity, and many falconers arrive in the deserts and valleys of Muthanna, Samarra and Dhi Qar in Iraq in air-conditioned 4WDs.',
      'One disadvantage of this sport is that too many rare birds might be killed. If nothing was done about this, there would soon be no birds left. However, the government has set up protected areas for birds. People cannot hunt there. These safe areas for birds are also good habitats for other animals. As a result, wildlife numbers have gone up and the environment is richer.'
    ],
    translation: [
      'هل سبق لك أن شاهدت صقرًا ينقض من السماء؟ إنها أسرع الكائنات في العالم الطبيعي. تطير عاليًا ثم تهبط بسرعة لقتل طائر أو حيوان صغير. تستطيع بعض الصقور الانقضاض بسرعة تصل إلى 240 كيلومترًا في الساعة!',
      'قبل أكثر من ألف سنة، اعتاد سكان صحارى الجزيرة العربية، وهم البدو، مشاهدة الصقور وهي تصطاد الطيور والحيوانات من أجل الطعام. وكان البدو يعيشون في الغالب على التمر والحليب والخبز لأنه كان من الصعب اصطياد الحيوانات والطيور. ثم تعلموا كيفية الإمساك بالصقور. وسرعان ما أصبح البدو يأكلون اللحوم التي تصطادها لهم صقورهم. وكان طائرهم المفضل هو الحبارى الكبيرة ذات الأرجل الطويلة. كانوا يطبخونها على النار وكان مذاقها لذيذًا.',
      'اعتاد البدو الصيد على ظهور الجمال. وكانوا يركبون بسرعة وهم يتبعون صقورهم المحلقة. أما اليوم، فالصقارة رياضة وليست ضرورة، ويصل كثير من الصقارين إلى صحارى ووديان المثنى وسامراء وذي قار في العراق بسيارات دفع رباعي مكيفة.',
      'من عيوب هذه الرياضة أنه قد يُقتل عدد كبير جدًا من الطيور النادرة. ولو لم يُتخذ أي إجراء بشأن ذلك، لما بقيت طيور قريبًا. لكن الحكومة أنشأت مناطق محمية للطيور لا يستطيع الناس الصيد فيها. وهذه المناطق الآمنة للطيور تُعد أيضًا موائل جيدة للحيوانات الأخرى. ونتيجة لذلك، ازدادت أعداد الحيوانات البرية وأصبحت البيئة أكثر غنى.'
    ],
    exerciseSets: [
      {
        id: '3i-u3-falcons-malzama-ministerial',
        source: 'malzama',
        sourceTitle: 'وزاريات على قطعة الصقور',
        sourcePages: 'الملزمة ص 75',
        instruction: 'Choose the correct answer or complete the sentence.',
        instructionTranslation: 'اختر الإجابة الصحيحة أو أكمل الجملة.',
        items: [
          { id: 'falcon-m1', question: 'How fast can some falcons dive? Up to ______ km/h.', options: ['240', '150', '100', '300'], answer: '240.' },
          { id: 'falcon-m2', question: 'In falconry sport too many rare birds ________. (a. killed b. might kill c. might be killed)', answer: 'might be killed.' },
          { id: 'falcon-m3', question: 'Where can you find wild flamingos? (Change into passive)', answer: 'Where can wild flamingos be found?' }
        ]
      }
    ]
  },

  '3i-u3-marsh-arabs': {
    id: '3i-u3-marsh-arabs',
    titleAr: 'عرب الأهوار',
    titleEn: 'Life on the Marshes — Marsh Arabs',
    status: 'verified',
    sourceTitle: 'ملزمة الثالث المتوسط 2025',
    sourcePages: 'ص 76–77',
    originalText: [
      'Ways of life',
      'Marsh Arabs can still be found living a traditional life in the marshlands in the south-east of Iraq. They raise domestic buffalo. Some sheep and cattle are also kept. Crops such as rice, wheat and barley are grown by the Marsh Arabs. Most Marsh Arabs live in arched houses which they build from reeds. Their houses are usually about three metres wide and about six metres long. They are less than three metres high. Houses are built at the waterside or on artificial reed islands. Houses have entrances at both ends. One part of the house is for the family and the other half is for their animals. Guest houses are built separately. Traditional boats (mashhoof and tarrada) are used as transport.',
      'Wildlife',
      'Forty species of birds can be found in the marshlands. The marshes were once home to millions of birds and the stopover for millions of other migratory birds, including flamingos, pelicans and herons as they travelled from Siberia to Africa.',
      'What has changed in recent years?',
      '40% to 60% of the Marsh Arabs are at risk because most of the wetland has dried up. Many species of birds are also at risk. Some are now extinct or near extinction. The draining of marshes in the 1990s caused a significant change in the ecosystem. However, some of the marshes have recently been restored after flooding the area.'
    ],
    translation: [
      'طرق الحياة',
      'لا يزال من الممكن العثور على عرب الأهوار وهم يعيشون حياة تقليدية في أهوار جنوب شرق العراق. يربون الجاموس الداجن، كما يربون بعض الأغنام والأبقار. وتُزرع محاصيل مثل الأرز والقمح والشعير على أيدي عرب الأهوار. ويعيش معظمهم في بيوت مقوسة يبنونها من القصب. ويبلغ عرض بيوتهم عادة نحو ثلاثة أمتار وطولها نحو ستة أمتار، وارتفاعها أقل من ثلاثة أمتار. تُبنى البيوت على حافة الماء أو على جزر اصطناعية من القصب. وللبيوت مداخل من الطرفين؛ جزء منها للعائلة والنصف الآخر لحيواناتهم. أما بيوت الضيافة فتُبنى بصورة منفصلة. وتُستخدم القوارب التقليدية (المشحوف والطرادة) وسيلةً للنقل.',
      'الحياة البرية',
      'يمكن العثور على أربعين نوعًا من الطيور في الأهوار. وكانت الأهوار في الماضي موطنًا لملايين الطيور ومحطة توقف لملايين الطيور المهاجرة الأخرى، ومنها طيور النحام والبجع ومالك الحزين أثناء انتقالها من سيبيريا إلى أفريقيا.',
      'ما الذي تغير في السنوات الأخيرة؟',
      'يواجه ما بين 40% و60% من عرب الأهوار خطرًا بسبب جفاف معظم الأراضي الرطبة. كما أن أنواعًا كثيرة من الطيور معرضة للخطر، وقد انقرض بعضها أو أصبح قريبًا من الانقراض. وأدى تجفيف الأهوار في التسعينيات إلى تغير كبير في النظام البيئي. ومع ذلك، أُعيد إغراق بعض الأهوار مؤخرًا فعادت إليها المياه واستُعيدت بعض مناطقها.'
    ],
    exerciseSets: [
      {
        id: '3i-u3-marsh-arabs-malzama',
        source: 'malzama',
        sourceTitle: 'أسئلة وزارية على عرب الأهوار',
        sourcePages: 'الملزمة ص 77',
        instruction: 'Answer the questions and mark the statements True or False.',
        instructionTranslation: 'أجب عن الأسئلة وحدد الجمل بصح أو خطأ.',
        items: [
          { id: 'marsh-m1', question: 'Where can Marsh Arabs be found?', answer: 'Marsh Arabs can still be found living a traditional life in the marshlands in the south-east of Iraq.' },
          { id: 'marsh-m2', question: 'What do Marsh Arabs raise?', answer: 'Domestic buffalo, some sheep and cattle.' },
          { id: 'marsh-m3', question: 'Rice, wheat and barley are known as ________.', answer: 'Crops.' },
          { id: 'marsh-m4', question: 'What do Marsh Arabs use as transport?', answer: 'Traditional boats: mashhoof and tarrada.' },
          { id: 'marsh-m5', question: 'Marsh Arabs live in arched houses built from reeds. (True / False)', answer: 'True.' },
          { id: 'marsh-m6', question: 'What crops are grown by the Marsh Arabs?', answer: 'Rice, wheat and barley.' },
          { id: 'marsh-m7', question: 'Marsh Arabs live in arched houses built from concrete and bricks. (True / False)', answer: 'False.' },
          { id: 'marsh-m8', question: 'Most Marsh Arabs live in arched houses built from reeds. (True / False)', answer: 'True.' },
          { id: 'marsh-m9', question: 'How many species of birds can be found in the marshlands?', answer: 'Forty species.' },
          { id: 'marsh-m10', question: 'The houses of Marsh Arabs are built from reeds. (True / False)', answer: 'True.' },
          { id: 'marsh-m11', question: 'Most Marsh Arabs live in arched houses which they build from reeds. (True / False)', answer: 'True.' },
          { id: 'marsh-m12', question: 'Houses in the marshlands are built at the waterside or on artificial reed islands. (True / False)', answer: 'True.' },
          { id: 'marsh-m13', question: 'Flamingos, pelicans and herons are migratory birds. (True / False)', answer: 'True.' }
        ]
      }
    ]
  },

  '3i-u4-ibrahim': {
    id: '3i-u4-ibrahim',
    titleAr: 'قصة حياة إبراهيم',
    titleEn: 'Ibrahim’s Life Story',
    status: 'verified',
    sourceTitle: 'ملزمة الثالث المتوسط 2025',
    sourcePages: 'القطعة ص 85؛ كتاب النشاط ص 56 و59؛ الوزاريات ص 87',
    translation: [
      'عاش إبراهيم في قرية صغيرة في جنوب العراق عندما كان طفلًا. كان يحب البحر، وكثيرًا ما كان يذهب للصيد مع والده. ومنذ سن مبكرة كان مهتمًا بالحيوانات، وكان يطرح باستمرار أسئلة عنها، مثل: «لماذا للذباب أجنحة؟» و«لماذا تعيش الأسماك في البحر؟».',
      'كان والده يملك الماعز والدجاج، وكان إبراهيم يحب الاعتناء بها. وكان يتحدث إليها كما لو كانت أصدقاءه. وكان إخوته يضحكون عليه.',
      'عندما ذهب إلى المدرسة، تعلم إبراهيم القراءة بسرعة. كان يحب القراءة ويطلب من والده الكتب دائمًا. ولم يكن يحب التلفزيون، لذلك كان يقضي وقتًا طويلًا في القراءة. وتعلم أن هناك أنواعًا كثيرة ومختلفة من الحيوانات في بلدان أخرى.',
      'في عام 1990، حصل والد إبراهيم على وظيفة جديدة في شركة نفط العراق، وانتقلت العائلة إلى بغداد. كانت الحياة مختلفة جدًا في المدينة. في البداية لم يحب إبراهيم ذلك، لكنه بعد بضعة أشهر وجد أن هناك الكثير مما يمكن أن يفعله فتى يبلغ من العمر 16 عامًا.',
      'في أحد الأيام، التقى في مركز التسوق فتى فرنسيًا يُدعى بيير. تعلم إبراهيم التحدث ببعض الفرنسية معه، كما تعلم عن فرنسا. وكان الفتيان يتحدثان عما يريدان فعله بعد ترك المدرسة. وفي أحد الأيام قال إبراهيم: «أعتقد أنني سأصبح عالمًا في علم الحيوان، وعندها أستطيع دراسة الحيوانات في بلدان مختلفة».',
      'عندما ترك إبراهيم المدرسة، درس علم الحيوان في جامعة القاهرة. وهو الآن عالم حيوان معروف. يعمل في فرنسا ويكتب كتابًا عن الحيوانات في أفريقيا.'
    ],
    exerciseSets: [
      {
        id: '3i-u4-ibrahim-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — True or False',
        sourcePages: 'كتاب النشاط ص 59',
        instruction: 'Mark the sentences True (T) or False (F).',
        instructionTranslation: 'ضع علامة صح أو خطأ أمام الجمل.',
        items: [
          { id: 'ibrahim-b1', question: 'Ibrahim was not interested in animals until he went to school.', answer: 'False.' },
          { id: 'ibrahim-b2', question: 'He found out about animals from television.', answer: 'False.' },
          { id: 'ibrahim-b3', question: 'He moved to Baghdad when he was 17.', answer: 'False.' },
          { id: 'ibrahim-b4', question: 'Pierre helped Ibrahim learn French.', answer: 'True.' },
          { id: 'ibrahim-b5', question: 'Ibrahim wrote a book at university.', answer: 'False.' }
        ]
      },
      {
        id: '3i-u4-ibrahim-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Answer the questions',
        sourcePages: 'كتاب النشاط ص 56',
        instruction: 'Answer the questions.',
        instructionTranslation: 'أجب عن الأسئلة.',
        items: [
          { id: 'ibrahim-c1', question: 'Where was Ibrahim’s village?', answer: 'It was in the south of Iraq.' },
          { id: 'ibrahim-c2', question: 'What did he look after for his father?', answer: 'He looked after his father’s goats and chickens.' },
          { id: 'ibrahim-c3', question: 'Why did Ibrahim ask lots of questions?', answer: 'Because he was interested in animals.' },
          { id: 'ibrahim-c4', question: 'Why did Ibrahim ask his father for books?', answer: 'Because he liked reading.' },
          { id: 'ibrahim-c5', question: 'Why did Ibrahim move to Baghdad?', answer: 'Because his father got a new job there / with Iraq Petroleum.' },
          { id: 'ibrahim-c6', question: 'What did he learn from Pierre?', answer: 'He learnt to speak some French and he learnt about France.' },
          { id: 'ibrahim-c7', question: 'Why did Ibrahim want to be a zoologist?', answer: 'So that he could study animals in different countries.' },
          { id: 'ibrahim-c8', question: 'Where is Ibrahim writing his book?', answer: 'He is writing his book in France.' }
        ]
      },
      {
        id: '3i-u4-ibrahim-malzama-ministerial',
        source: 'malzama',
        sourceTitle: 'وزاريات قصة إبراهيم',
        sourcePages: 'الملزمة ص 87',
        instruction: 'Mark the statements True or False and answer the question.',
        instructionTranslation: 'حدد الجمل بصح أو خطأ وأجب عن السؤال.',
        items: [
          { id: 'ibrahim-m1', question: 'From an early age, Ibraheem was interested in animals. (True / False)', answer: 'True.' },
          { id: 'ibrahim-m2', question: 'Ibrahim lived in a small village in the south of Iraq when he was a child. (True / False)', answer: 'True.' },
          { id: 'ibrahim-m3', question: 'Ibrahim moved to Baghdad when he was 17. (True / False)', answer: 'False. He moved when he was 16.' },
          { id: 'ibrahim-m4', question: 'When Ibraheem left school, he studied zoology at Cairo University. (True / False)', answer: 'True.' },
          { id: 'ibrahim-m5', question: 'Ibraheem was not interested in animals before he went to school. (True / False)', answer: 'False.' },
          { id: 'ibrahim-m6', question: 'Ibraheem was interested in animals from an early age. (True / False)', answer: 'True.' },
          { id: 'ibrahim-m7', question: 'Ibrahim’s small village was in the south of Iraq when he was a child. (True / False)', answer: 'True.' },
          { id: 'ibrahim-m8', question: 'Pierre helped Ibrahim to speak some French with him. (True / False)', answer: 'True.' },
          { id: 'ibrahim-m9', question: 'Pierre helped Ibrahim learn French. (True / False)', answer: 'True.' },
          { id: 'ibrahim-m10', question: 'What did Ibrahim look after for his father?', answer: 'Goats and chickens.' }
        ]
      }
    ]
  },

  '3i-u4-leopards': {
    id: '3i-u4-leopards',
    titleAr: 'النمور الفارسية: أعداد قليلة',
    titleEn: 'Too Few Leopards',
    status: 'verified',
    sourceTitle: 'ملزمة الثالث المتوسط 2025',
    sourcePages: 'القطعة والأسئلة ص 88',
    originalText: [
      'There used to be many Persian Leopards living in Iraq. However, in 2022, there were only about 25 leopards left in the country. Today, conservationists are increasing efforts to protect the remaining leopards. The loss of habitat, hunting and war has caused a big decrease in leopard numbers.',
      'The leopards are endangered, and it is against the law to hunt them. People do not hunt the leopards, but they do hunt wild goats for food. Unfortunately, this is removing the natural food of the leopards.',
      'Two Iraqi brothers, Nabaz and Bahaz Faruq Ali, want to save the leopards. They believe that the leopards are an important part of Iraqi culture and identity. They are determined to save the leopards, and they have successfully taken photos of the leopards in the Bamo mountain area. Bamo mountain is remote, so the brothers believe it is the perfect place for the leopards to breed and increase their numbers.'
    ],
    translation: [
      'كان هناك في السابق كثير من النمور الفارسية التي تعيش في العراق. لكن في عام 2022 لم يتبق في البلاد سوى نحو 25 نمرًا. واليوم يزيد المحافظون على البيئة جهودهم لحماية النمور المتبقية. وقد تسبب فقدان الموائل والصيد والحرب في انخفاض كبير في أعداد النمور.',
      'النمور مهددة بالانقراض، ومن غير القانوني صيدها. لا يصطاد الناس النمور، لكنهم يصطادون الماعز البري من أجل الطعام. وللأسف، يؤدي ذلك إلى إزالة الغذاء الطبيعي للنمور.',
      'يريد أخوان عراقيان، نباز وبهاز فاروق علي، إنقاذ النمور. ويعتقدان أن النمور جزء مهم من الثقافة والهوية العراقية. وهما مصممان على إنقاذها، وقد نجحا في التقاط صور للنمور في منطقة جبل بمو. ويقع جبل بمو في منطقة نائية، لذلك يعتقد الأخوان أنه المكان المثالي لتتكاثر فيه النمور وتزيد أعدادها.'
    ],
    exerciseSets: [
      {
        id: '3i-u4-leopards-malzama',
        source: 'malzama',
        sourceTitle: 'أسئلة وزارية على Too Few Leopards',
        sourcePages: 'الملزمة ص 88',
        instruction: 'Answer the questions.',
        instructionTranslation: 'أجب عن الأسئلة.',
        items: [
          { id: 'leopard-q1', question: 'Why was there a big decrease in numbers?', answer: 'Because of the loss of habitat, hunting and war.' },
          { id: 'leopard-q2', question: 'Why do the brothers want to save the leopards?', answer: 'Because they are an important part of Iraqi culture and identity.' },
          { id: 'leopard-q3', question: 'Why can’t people hunt leopards?', answer: 'Because they are endangered and it is against the law to hunt them.' },
          { id: 'leopard-q4', question: 'Why is Bamo Mountain the perfect place for leopards?', answer: 'Because it is remote.' }
        ]
      }
    ]
  },

  '3i-u5-news': {
    id: '3i-u5-news',
    titleAr: 'أخبار الصباح العراقية',
    titleEn: 'Iraqi Morning News',
    status: 'source_required',
    sourceTitle: 'ملزمة الثالث المتوسط 2025',
    sourcePages: 'موضع النص الكامل غير محدد في النسخة المرفوعة',
    verificationNote: 'تحتوي بيانات الدرس الحالية على أسئلة وأجوبة عن زيارة وزير التربية وافتتاح المدينة الرياضية في البصرة وقصة جون، لكن نص الخبر الإنجليزي الكامل وصفحة مصدره غير موجودين في الصفحات التي أمكن مطابقتها. نحتاج صفحة القطعة الأصلية قبل عرضها كنص كتاب.'
  },

  '3i-u7-asian-games': {
    id: '3i-u7-asian-games',
    titleAr: 'دورة الألعاب الآسيوية',
    titleEn: 'The Asian Games',
    status: 'verified',
    sourceTitle: 'ملزمة الثالث المتوسط 2025',
    sourcePages: 'القطعة ص 123؛ كتاب النشاط ص 114؛ الوزاريات ص 124',
    originalText: [
      'The Asian Games are held every four years. Young people from all over Asia compete in more than 30 kinds of sport. It is an exciting festival. Strength and skill are tested and friendships are built between people from different countries. The Games are also an opportunity for cultural exchange because the programme includes musical performances and exhibitions of architecture and the arts.',
      'History of the Games',
      'The Asian Games were started after the end of the Second World War. The idea was to build international friendship through sport. This idea came from India, so the first Games were held in the Indian capital, New Delhi, in 1951. In that year, 489 athletes from 11 countries took part in the Games. Since then, the number has grown, and now more than 40 countries compete in the Games.',
      'The OCA',
      'The Asian Games are organized by the OCA. These letters stand for the Olympic Council of Asia. Forty-five countries and regions are members of the OCA, and most of them have won medals at the Games.',
      'Where They’ve Been Held',
      'Most recently the Asian Games have been held in Doha, Qatar (2006), Guangzhou, China (2010), and Incheon, South Korea (2014) and Jakarta and Palembang, Indonesia (2018).',
      'Iraq’s Record in the Games',
      'An Iraqi team has attended the Asian Games eight times since 1974. Up to 2018, Iraq has won seven gold medals, 17 silver medals and 23 bronze medals, which is unusually good for a country in a difficult situation. An extraordinary Iraqi competitor was Ali Adnan Amir, who at just 10 years old competed in a men’s 200m individual medley heat at the Asian Games in Doha, Qatar on December 2006. More recently, in 2018, Iraq has shone in weightlifting, with Safaa Rashed winning gold in the Men’s 85 kg event and Salwan Jassim taking silver in the Men’s 105 kg event.'
    ],
    translation: [
      'تقام الألعاب الآسيوية كل أربع سنوات. ويتنافس الشباب من جميع أنحاء آسيا في أكثر من 30 نوعًا من الرياضات. إنها مهرجان ممتع؛ إذ تُختبر القوة والمهارة وتُبنى الصداقات بين أشخاص من بلدان مختلفة. كما تمثل الألعاب فرصة للتبادل الثقافي لأن البرنامج يتضمن عروضًا موسيقية ومعارض للعمارة والفنون.',
      'تاريخ الألعاب',
      'بدأت الألعاب الآسيوية بعد نهاية الحرب العالمية الثانية. وكانت الفكرة هي بناء الصداقة الدولية من خلال الرياضة. جاءت الفكرة من الهند، لذلك أقيمت الألعاب الأولى في العاصمة الهندية نيودلهي عام 1951. وفي ذلك العام شارك 489 رياضيًا من 11 دولة في الألعاب. ومنذ ذلك الحين ازداد العدد، وأصبح أكثر من 40 بلدًا يتنافس في الألعاب.',
      'المجلس الأولمبي الآسيوي OCA',
      'ينظم المجلس الأولمبي الآسيوي الألعاب الآسيوية. وتشير هذه الأحرف إلى Olympic Council of Asia. وتضم عضوية المجلس 45 دولة ومنطقة، وقد فاز معظمها بميداليات في الألعاب.',
      'أماكن إقامة الألعاب',
      'أقيمت أحدث الدورات في الدوحة بقطر عام 2006، وغوانزو في الصين عام 2010، وإنشيون في كوريا الجنوبية عام 2014، وجاكرتا وباليمبانغ في إندونيسيا عام 2018.',
      'سجل العراق في الألعاب',
      'شارك فريق عراقي في الألعاب الآسيوية ثماني مرات منذ عام 1974. وحتى عام 2018، فاز العراق بسبع ميداليات ذهبية و17 فضية و23 برونزية، وهو إنجاز جيد على نحو غير معتاد لبلد يمر بظروف صعبة. وكان علي عدنان أمير منافسًا عراقيًا استثنائيًا؛ إذ شارك وهو في العاشرة فقط في تصفيات سباق فردي متنوع للرجال لمسافة 200 متر في دورة الألعاب الآسيوية في الدوحة بقطر في ديسمبر 2006. ومؤخرًا، تألق العراق في رفع الأثقال عام 2018، حيث فاز صفاء راشد بالذهبية في فئة 85 كغم للرجال، وحصل سلوى جاسم على الفضية في فئة 105 كغم للرجال.'
    ],
    exerciseSets: [
      {
        id: '3i-u7-asian-games-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Answer the questions',
        sourcePages: 'كتاب النشاط ص 114',
        instruction: 'Answer the questions.',
        instructionTranslation: 'أجب عن الأسئلة.',
        items: [
          { id: 'asian-ab1', question: 'How often do the Games take place?', answer: 'Every four years.' },
          { id: 'asian-ab2', question: 'When did they begin?', answer: '1951.' },
          { id: 'asian-ab3', question: 'Whose idea was it to hold the Games?', answer: 'The idea came from India.' },
          { id: 'asian-ab4', question: 'Where were the first Games held?', answer: 'New Delhi.' },
          { id: 'asian-ab5', question: 'Where and when were the last Games held?', answer: 'Jakarta and Palembang, Indonesia (2018).' },
          { id: 'asian-ab6', question: 'Has Iraq won any medals in the Games?', answer: 'Yes, it has seven gold, 17 silver and 23 bronze medals.' }
        ]
      },
      {
        id: '3i-u7-asian-games-malzama',
        source: 'malzama',
        sourceTitle: 'وزاريات على The Asian Games',
        sourcePages: 'الملزمة ص 124',
        instruction: 'Answer the questions.',
        instructionTranslation: 'أجب عن الأسئلة.',
        items: [
          { id: 'asian-m1', question: 'Where were the first Asian Games held?', options: ['Iraq', 'India', 'Qatar'], answer: 'India.' },
          { id: 'asian-m2', question: 'How often do the Asian Games take place?', answer: 'Every four years.' },
          { id: 'asian-m3', question: 'Has Iraq won any medals in the Asian Games?', answer: 'Yes, Iraq has won.' },
          { id: 'asian-m4', question: 'When did the Asian Games begin?', answer: '1951.' },
          { id: 'asian-m5', question: 'What was the idea behind the Asian Games?', answer: 'To build international friendship through sport.' },
          { id: 'asian-m6', question: 'Whose idea was it to hold the Asian Games?', answer: 'India.' }
        ]
      }
    ]
  }
};
