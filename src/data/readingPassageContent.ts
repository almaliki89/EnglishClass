import { ReadingPassage } from '../types';

/**
 * Complete, source-matched passage material.
 * Each record keeps the source title/pages, complete source text, its Arabic
 * translation, and the exact source exercise wording with its answer key.
 */
const READING_PASSAGE_CONTENT: Record<string, ReadingPassage> = {
  '6p-u1-ammar': {
    id: '6p-u1-ammar',
    titleAr: 'عمار وتقنية الهيكل الخارجي',
    titleEn: "Ammar's Story",
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 10؛ كتاب النشاط: ص 8؛ PDF ص 12–13',
    originalText: [
      "When I was 16, life was great! I was finally part of the school basketball team and had loads of friends. But one day, everything changed. I was swimming in a river with my friends. It was a sunny day and we were all having lots of fun. I decided to jump off a bridge above us. I climbed up carefully and looked down. It seemed a lot higher than when looking up from the water. It was a bit scary, but my friends were all watching, so I couldn’t give up now. I closed my eyes and jumped. That was the last thing I remember.",
      "I woke up in hospital. My parents were sitting next to me. My father told me what happened; the river wasn’t deep enough and I hit the bottom when I dived.",
      "I hurt my back very seriously. Luckily, I was alive, but the doctors said I might not walk again. While my father was talking to me, I was thinking about that moment and how one decision changed my whole life. I decided then to do everything I could to walk again.",
      "After a few days, I started doing physical therapy. The days turned into weeks, the weeks into months, and I was feeling very upset because I wasn’t making enough progress. I could have a regular life with my wheelchair: go to school, hang out with friends, that kind of thing. But I wanted to stand up, walk, and more than anything, go back to playing basketball.",
      "That was when the doctors told me they were trying a new technology for patients like me: an exoskeleton. It is a machine that needs to be worn and would help me to not only stand up, but also to walk. I couldn’t believe it! The week after, we tried it out. The feeling was absolutely amazing; after nearly six months, I was walking again!",
      "I continued my treatment, even more motivated than before. Now I’m completely recovered, thanks to the amazing technology and medical professionals. They believe one day exoskeletons will replace wheelchairs completely. And yes, I’m back to playing basketball."
    ],
    translation: [
      'عندما كنتُ في السادسة عشرة من عمري، كانت الحياة رائعة! انضممتُ أخيرًا إلى فريق كرة السلة في المدرسة وكان لدي الكثير من الأصدقاء. ولكن في يوم من الأيام، تغيّر كل شيء. كنتُ أسبح في النهر مع أصدقائي. كان يومًا مشمسًا وكنا جميعًا نمرح كثيرًا. قررتُ أن أقفز من فوق جسر فوقنا. تسلقتُ بحذر ونظرتُ إلى الأسفل. بدا أعلى بكثير مما كان عليه عند النظر إليه من الماء. كان الأمر مخيفًا بعض الشيء، ولكن أصدقائي كانوا جميعًا يراقبونني، لذلك لم أستطع الاستسلام حينها. أغمضتُ عينيّ وقفزتُ. كان هذا آخر شيء أتذكره.',
      'استيقظتُ في المستشفى. كان والداي يجلسان بجواري. أخبرني والدي بما حدث؛ لم يكن النهر عميقًا بما فيه الكفاية، وقد ارتطمتُ بالقاع عندما قفزتُ.',
      'أصبتُ ظهري إصابة خطيرة جدًا. لحسن الحظ، كنتُ على قيد الحياة، لكن الأطباء قالوا إنني قد لا أستطيع المشي مرة أخرى. بينما كان والدي يتحدث معي، كنتُ أفكر في تلك اللحظة وكيف أن قرارًا واحدًا غيّر حياتي بأكملها. قررتُ حينها أن أفعل كل ما بوسعي لكي أمشي مرة أخرى.',
      'بعد بضعة أيام، بدأتُ العلاج الطبيعي. تحولت الأيام إلى أسابيع، والأسابيع إلى أشهر، وكنتُ أشعر بالحزن الشديد لأنني لم أحرز تقدمًا كافيًا. كان بإمكاني أن أعيش حياة طبيعية بكرسيّ المتحرك: أذهب إلى المدرسة، وأخرج مع الأصدقاء، وما إلى ذلك. لكنني أردتُ أن أقف وأمشي، وأكثر من أي شيء أردتُ أن أعود للعب كرة السلة.',
      'حينها أخبرني الأطباء أنهم كانوا يجربون تقنية جديدة لمرضى مثلي: الهيكل الخارجي الآلي. هو جهاز يُلبس ويساعدني ليس فقط على الوقوف، بل على المشي أيضًا. لم أصدق ذلك! في الأسبوع التالي، جربناه. كان الشعور مذهلًا للغاية؛ بعد ما يقرب من ستة أشهر، عدتُ للمشي!',
      'واصلتُ علاجي بدافع أكبر من ذي قبل. الآن تعافيتُ تمامًا، بفضل هذه التقنية الرائعة والمهنيين الطبيين. يعتقدون أن الهياكل الخارجية ستحل يومًا ما محل الكراسي المتحركة تمامًا. ونعم، عدتُ للعب كرة السلة.'
    ],
    exerciseSets: [
      {
        id: '6p-u1-ammar-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — Answer the questions',
        sourcePages: 'كتاب النشاط ص 8',
        instruction: 'Read the blog post on page 8 of the Student’s Book and answer the questions.',
        instructionTranslation: 'اقرأ منشور المدونة في صفحة 8 من كتاب الطالب وأجب عن الأسئلة.',
        items: [
          { id: 'ammar-a1', question: 'What was Ammar’s life like when he was 16? Why?', questionTranslation: 'كيف كانت حياة عمار عندما كان عمره 16 سنة؟ ولماذا؟', answer: 'It was great because he was finally part of the school basketball team and had lots of friends.', answerTranslation: 'كانت رائعة لأنه أصبح أخيرًا جزءًا من فريق كرة السلة في المدرسة وكان لديه الكثير من الأصدقاء.' },
          { id: 'ammar-a2', question: 'How did Ammar hurt himself?', questionTranslation: 'كيف أصاب عمار نفسه؟', answer: 'He jumped off a bridge and hit the bottom as the river wasn’t deep enough.', answerTranslation: 'قفز من جسر وارتطم بالقاع لأن النهر لم يكن عميقًا بما فيه الكفاية.' },
          { id: 'ammar-a3', question: 'How did Ammar feel about his progress in therapy? Why?', questionTranslation: 'كيف شعر عمار بتقدمه في العلاج؟ ولماذا؟', answer: 'He was upset because he wasn’t making enough progress.', answerTranslation: 'شعر بالإحباط لأنه لم يكن يحرز تقدمًا كافيًا.' },
          { id: 'ammar-a4', question: 'What technology did the doctors want to try with Ammar?', questionTranslation: 'ما التقنية التي أراد الأطباء تجربتها مع عمار؟', answer: 'An exoskeleton.', answerTranslation: 'تقنية الهيكل الخارجي.' },
          { id: 'ammar-a5', question: 'Why did Ammar feel more motivated to continue his treatment?', questionTranslation: 'لماذا شعر عمار بتحفيز أكبر لمواصلة علاجه؟', answer: 'Because he was making great progress.', answerTranslation: 'لأنه كان يحرز تقدمًا كبيرًا.' },
          { id: 'ammar-a6', question: 'What do Ammar’s doctors think will happen in the future?', questionTranslation: 'ماذا يعتقد أطباء عمار أنه سيحدث في المستقبل؟', answer: 'Exoskeletons will replace wheelchairs completely.', answerTranslation: 'سوف تحل الهياكل الخارجية محل الكراسي المتحركة تمامًا.' }
        ]
      },
      {
        id: '6p-u1-ammar-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Choose the correct option',
        sourcePages: 'كتاب النشاط ص 8–9',
        instruction: 'Read the blog post again and choose the correct option to complete each sentence.',
        instructionTranslation: 'اقرأ منشور المدونة مرة ثانية واختر الخيار الصحيح لإكمال كل جملة.',
        items: [
          { id: 'ammar-b1', question: 'Ammar decided to jump off the bridge because:', options: ['It didn’t look very high looking down from above.', 'He didn’t want to feel embarrassed in front of his friends.', 'He was a good swimmer and wasn’t scared of high places.'], answer: 'He didn’t want to feel embarrassed in front of his friends.' },
          { id: 'ammar-b2', question: 'Ammar hurt his back because:', options: ['He fell into the water in a bad position.', 'He hit the side of the bridge when he fell.', 'He hit the bottom of the river when he dived.'], answer: 'He hit the bottom of the river when he dived.' },
          { id: 'ammar-b3', question: 'On the day he woke up in hospital, Ammar:', options: ['Was told he would wear an exoskeleton.', 'Knew he would never be able to walk again.', 'Realized how one choice could change the rest of his life.'], answer: 'Realized how one choice could change the rest of his life.' },
          { id: 'ammar-b4', question: 'The thing Ammar most wanted to do was:', options: ['Play basketball again.', 'Hang out with his friends again.', 'Go back to school.'], answer: 'Play basketball again.' },
          { id: 'ammar-b5', question: 'On the day Ammar tried the exoskeleton, he was able to:', options: ['Only stand up.', 'Stand up and walk.', 'Play basketball.'], answer: 'Stand up and walk.' }
        ]
      }
    ]
  },

  '6p-u1-diet': {
    id: '6p-u1-diet',
    titleAr: 'لنبدأ بالنظام الغذائي',
    titleEn: "Let's Start with Diet",
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 25؛ PDF ص 27',
    originalText: [
      'People should take responsibility for their own health. By Dr. Samir Ramzi',
      'Every year, the government spends millions of pounds on healthcare on people who have brought their illnesses on themselves through bad diet, lack of exercise or smoking. Let’s start with diet. In Britain, the number of diabetics goes up every year. The main reason is that people are eating food that contains too much fat, sugar and salt. As a result of this unhealthy diet, 60% of British people are overweight and, therefore, at risk of becoming diabetic.',
      'Next, we need to look at exercise. In the past, people used to walk more or use a bicycle to get around. Now everyone gets in their car instead of walking, even if the distance is just a kilometre or two.',
      'Furthermore, children spend hours playing TV and computer games instead of running about outside. Yet we all know that regular exercise helps us to control our weight and keep our heart healthy.',
      'Finally, let’s talk about smoking. There’s almost nothing that’s worse for your health than this habit. Smoking damages the lungs and heart, and smokers generally need more medical attention than non-smokers.',
      'In my opinion, the government should not give free healthcare to people who don’t take care of themselves. People who lead unhealthy lives should pay for their own healthcare. And if they bring up their children in an unhealthy way, they should pay for their children’s healthcare, too.'
    ],
    translation: [
      'على الناس أن يتحملوا مسؤولية صحتهم. بقلم الدكتور سمير رمزي.',
      'تنفق الحكومة ملايين الجنيهات الإسترلينية سنويًا على الرعاية الصحية للأشخاص الذين جلبوا أمراضهم على أنفسهم بسبب سوء التغذية أو قلة التمارين الرياضية أو التدخين. لنبدأ بالنظام الغذائي. في بريطانيا، يرتفع عدد مرضى السكري سنويًا. والسبب الرئيسي هو تناول الناس أطعمة تحتوي على كميات كبيرة من الدهون والسكر والملح. ونتيجة لهذا النظام الغذائي غير الصحي، يعاني 60% من البريطانيين من زيادة الوزن، وبالتالي فهم معرضون لخطر الإصابة بالسكري.',
      'بعد ذلك، علينا أن نلقي نظرة على التمارين الرياضية. في الماضي، كان الناس يمشون أكثر أو يستخدمون الدراجات للتنقل. أما الآن، فيركب الجميع سياراتهم بدلًا من المشي، حتى لو كانت المسافة كيلومترًا أو كيلومترين فقط.',
      'علاوة على ذلك، يقضي الأطفال ساعات في لعب ألعاب التلفزيون والكمبيوتر بدلًا من الجري في الخارج. ومع ذلك، نعلم جميعًا أن ممارسة الرياضة بانتظام تساعدنا على التحكم في وزننا والحفاظ على صحة قلوبنا.',
      'أخيرًا، لنتحدث عن التدخين. لا شيء يضر بصحتك أكثر من هذه العادة تقريبًا. يُلحق التدخين الضرر بالرئتين والقلب، ويحتاج المدخنون عمومًا إلى رعاية طبية أكثر من غير المدخنين.',
      'برأيي، لا ينبغي للحكومة أن تقدم رعاية صحية مجانية لمن لا يعتنون بأنفسهم. وعلى من يعيشون حياة غير صحية أن يدفعوا تكاليف رعايتهم الصحية. وإذا ربّوا أطفالهم تربية غير صحية، فعليهم أن يدفعوا تكاليف الرعاية الصحية لأطفالهم أيضًا.'
    ],
    exerciseSets: [
      {
        id: '6p-u1-diet-ab-d',
        source: 'activity_book',
        sourceTitle: 'Exercise D — Complete the definitions',
        sourcePages: 'كتاب النشاط ص 17',
        instruction: 'Complete the definitions with words from the text on page 17.',
        instructionTranslation: 'أكمل التعاريف بكلمات من النص الموجود في صفحة 17.',
        items: [
          { id: 'diet-d1', question: 'diet (noun) = what you eat', answer: 'diet' },
          { id: 'diet-d2', question: 'overweight (adjective) = weighing more than you should', answer: 'overweight' },
          { id: 'diet-d3', question: 'regular (adjective) = when you do something often', answer: 'regular' },
          { id: 'diet-d4', question: 'lungs (noun) = the part of your body responsible for breathing', answer: 'lungs' },
          { id: 'diet-d5', question: 'non-smokers (noun) = people who don’t smoke', answer: 'non-smokers' },
          { id: 'diet-d6', question: 'bring up (phrasal verb) = to raise children', answer: 'bring up' }
        ]
      }
    ]
  },

  '6p-u1-najla': {
    id: '6p-u1-najla',
    titleAr: 'نجلة عماد لفتة',
    titleEn: 'Najla Imad Lafta',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 27–28؛ كتاب النشاط: ص 20–21؛ PDF ص 29–31',
    originalText: [
      'Najla Imad Lafta was a happy little Iraqi girl who waited patiently at her doorstep for her father, Mr Imad Lafta, to come home from work. One day, however, when Najla was only three years old, disaster struck: a bomb attached to her father’s car went off when Najla Imad Lafta was nearby. She was rushed to hospital and survived the shameless attack, but she lost much of her right arm and both legs.',
      'With the love of her parents and siblings, and the support of the Iraqi healthcare system, which provided the necessary treatments and medication to help her, Najla Imad Lafta grew up and adjusted to life in a wheelchair. She went to school and did most things other girls her age did, but still longed to run around like the other children.',
      'At the age of ten, her life would change a second time: she discovered table tennis. Even though she had to train to use her left hand to hold the racket (she was born right-handed), she practiced tirelessly and soon became very skilled at the sport.',
      'Najla started taking part in competitions, and, with hard daily practice, she continued improving her game. She earned a place in the Iraqi Paralympic team aged only 12, when she started receiving support like a small salary and equipment, including prostheses. These proved useful to her because she was able to play standing, which made a big difference to her game. At the age of 16, Najla became the youngest table tennis player to qualify for the Tokyo 2020 Paralympics and won gold at the 2022 Asian Para Games.',
      'In 2024, at just 19 years old, she faced her biggest sporting moment: the Paris 2024 Paralympics. She played skillfully, defeating the main names in the sport, and reaching the final against Tokyo 2020 champion Maryna Lyotovoschenko from Ukraine. In an exciting match, Najla successfully beat her opponent by three sets to one, winning the gold medal she wanted so much and writing her name in history books.',
      'In an interview before setting off to Paris, Najla said: “Never stop, nothing is impossible. With our determination and resolve, we can achieve what we want and make our dreams a reality.”'
    ],
    translation: [
      'كانت نجلة عماد لفتة فتاة عراقية صغيرة سعيدة انتظرت بصبر على عتبة بابها عودة والدها، السيد عماد لفتة، من العمل. ولكن في أحد الأيام، عندما كانت نجلة في الثالثة من عمرها فقط، وقعت كارثة: انفجرت قنبلة مثبتة في سيارة والدها عندما كانت نجلة عماد لفتة قريبة. نُقلت إلى المستشفى ونجت من الهجوم المشين، لكنها فقدت جزءًا كبيرًا من ذراعها اليمنى وساقيها.',
      'بفضل حب والديها وإخوتها، ودعم نظام الرعاية الصحية العراقي الذي وفر لها العلاجات والأدوية اللازمة لمساعدتها، نشأت نجلة عماد لفتة وتكيفت مع الحياة على كرسي متحرك. التحقت بالمدرسة وفعلت معظم ما تفعله الفتيات الأخريات في سنها، لكنها ظلت تتوق إلى الركض مثل الأطفال الآخرين.',
      'في سن العاشرة، تغيرت حياتها للمرة الثانية: اكتشفت تنس الطاولة. وعلى الرغم من أنها اضطرت إلى التدرب على استخدام يدها اليسرى للإمساك بالمضرب لأنها وُلدت يمنى، فإنها تدربت بلا كلل وسرعان ما أصبحت ماهرة جدًا في هذه الرياضة.',
      'بدأت نجلة المشاركة في المسابقات، ومع التدريب اليومي الجاد واصلت تحسين أدائها. حصلت على مكان في الفريق البارالمبي العراقي وهي في الثانية عشرة فقط، عندما بدأت تتلقى دعمًا مثل راتب بسيط ومعدات، بما في ذلك أطراف اصطناعية. أثبتت هذه الأطراف فائدتها لأنها تمكنت من اللعب واقفة، مما أحدث فرقًا كبيرًا في أدائها. وفي سن السادسة عشرة، أصبحت نجلة أصغر لاعبة تنس طاولة تتأهل إلى دورة الألعاب البارالمبية طوكيو 2020، وفازت بالميدالية الذهبية في دورة الألعاب البارالمبية الآسيوية 2022.',
      'في عام 2024، وهي في التاسعة عشرة فقط، واجهت أهم لحظة رياضية لها: دورة الألعاب البارالمبية باريس 2024. لعبت بمهارة، وهزمت أسماء بارزة في هذه الرياضة، ووصلت إلى النهائي ضد بطلة طوكيو 2020، مارينا ليوتوفوشينكو من أوكرانيا. في مباراة حماسية، تغلبت نجلة على منافستها بثلاث مجموعات مقابل مجموعة واحدة، محققة الميدالية الذهبية التي طالما حلمت بها ومسجلة اسمها في سجلات التاريخ.',
      'في مقابلة قبل انطلاقها إلى باريس، قالت نجلة: «لا تيأسوا، لا شيء مستحيل. بعزيمتنا وإصرارنا، نستطيع تحقيق ما نريده وتحويل أحلامنا إلى واقع».'
    ],
    exerciseSets: [
      {
        id: '6p-u1-najla-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — Answer the questions',
        sourcePages: 'كتاب النشاط ص 20',
        instruction: 'Answer the questions.',
        instructionTranslation: 'أجب عن الأسئلة.',
        items: [
          { id: 'najla-a1', question: 'What did Najla like to do as a little girl?', questionTranslation: 'ماذا كانت نجلة تحب أن تفعل عندما كانت طفلة صغيرة؟', answer: 'She liked waiting at her doorstep for her father to arrive from work.', answerTranslation: 'كانت تحب الانتظار على عتبة بابها حتى يصل والدها من العمل.' },
          { id: 'najla-a2', question: 'What happened to Najla as a result of the bomb attack?', questionTranslation: 'ماذا حدث لنجلة نتيجة الهجوم بالقنبلة؟', answer: 'She lost much of her right arm and both legs.', answerTranslation: 'فقدت جزءًا كبيرًا من ذراعها اليمنى وكلتا ساقيها.' },
          { id: 'najla-a3', question: 'How did the Iraqi healthcare system help Najla?', questionTranslation: 'كيف ساعد نظام الرعاية الصحية العراقي نجلة؟', answer: 'It provided the necessary treatments and medication.', answerTranslation: 'قدم لها العلاجات والأدوية اللازمة.' },
          { id: 'najla-a4', question: 'How did Najla’s life change a second time?', questionTranslation: 'كيف تغيرت حياة نجلة للمرة الثانية؟', answer: 'She discovered table tennis.', answerTranslation: 'اكتشفت تنس الطاولة.' },
          { id: 'najla-a5', question: 'Why did the prostheses help Najla play better?', questionTranslation: 'لماذا ساعدت الأطراف الاصطناعية نجلة على اللعب بشكل أفضل؟', answer: 'Because she could play standing.', answerTranslation: 'لأنها استطاعت اللعب وهي واقفة.' },
          { id: 'najla-a6', question: 'How did Najla win the Paralympic gold medal?', questionTranslation: 'كيف حصلت نجلة على الميدالية الذهبية في الألعاب البارالمبية؟', answer: 'She beat the Tokyo 2020 champion 3–1.', answerTranslation: 'هزمت بطلة طوكيو 2020 بنتيجة 3–1.' },
          { id: 'najla-a7', question: 'What did Najla say in an interview before the Paralympics?', questionTranslation: 'ماذا قالت نجلة في مقابلة قبل الألعاب البارالمبية؟', answer: 'That we can do anything with determination and resolve.', answerTranslation: 'قالت إننا نستطيع فعل أي شيء بالعزيمة والإصرار.' }
        ]
      },
      {
        id: '6p-u1-najla-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Choose the correct answer',
        sourcePages: 'كتاب النشاط ص 20',
        instruction: 'Read the article again and choose the correct answer.',
        instructionTranslation: 'اقرأ المقال مرة أخرى واختر الإجابة الصحيحة.',
        items: [
          { id: 'najla-b1', question: 'What did Najla want to do but couldn’t anymore?', options: ['Go to school.', 'Run around.', 'Use a wheelchair.'], answer: 'Run around.' },
          { id: 'najla-b2', question: 'How old was Najla when she started playing table tennis?', options: ['10', '16', '19'], answer: '10.' },
          { id: 'najla-b3', question: 'When Najla earned a place in the Iraqi Paralympic team, she started receiving:', options: ['Financial support.', 'Educational support.', 'Support from the Paralympic Games.'], answer: 'Financial support.' },
          { id: 'najla-b4', question: 'The prostheses allowed Najla to:', options: ['Play in a different position.', 'Hold the racket with her other hand.', 'Take part in competitions.'], answer: 'Play standing.' },
          { id: 'najla-b5', question: 'Najla won the Paris Paralympic gold medal in:', options: ['2020.', '2022.', '2024.'], answer: '2024.' }
        ]
      },
      {
        id: '6p-u1-najla-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Complete the sentences',
        sourcePages: 'كتاب النشاط ص 21',
        instruction: 'Complete the sentences with a word or number from the text.',
        instructionTranslation: 'أكمل الجمل بكلمة أو رقم من النص.',
        items: [
          { id: 'najla-c1', question: 'Najla was only three years old when a bomb changed her ________ forever.', answer: 'life.' },
          { id: 'najla-c2', question: 'Najla had to learn to live in a ________.', answer: 'wheelchair.' },
          { id: 'najla-c3', question: 'When Najla started playing table tennis, she had to learn how to hold the racket in her ________ hand.', answer: 'left.' },
          { id: 'najla-c4', question: 'Najla joined the Iraqi Paralympic team when she was only ________.', answer: '12.' },
          { id: 'najla-c5', question: 'At 16, she won the gold medal in the 2022 Asian Para ________ Games.', answer: 'Para.' },
          { id: 'najla-c6', question: 'Her opponent in the final match of the Paris Paralympics had won first place in the Tokyo 2020 ________.', answer: 'Games.' }
        ]
      }
    ]
  },

  '6p-u2-police': {
    id: '6p-u2-police',
    titleAr: 'واجبات ضابط الشرطة',
    titleEn: 'Police Officer Duties',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 30–31؛ كتاب النشاط: ص 30؛ PDF ص 32–35',
    originalText: [
      'People have to follow the law so that we can all live together safely. There are a lot of different laws, so police officers have a lot of different duties. Some officers direct traffic to make sure that drivers can use the roads easily and without having accidents. They also use radar speed guns to identify people who are driving fast. This is very important. Drivers mustn’t speed because speeding is one of the leading causes of death on the road. Police officers also check that drivers and passengers are wearing their seat belts. Some people get angry because they don’t like to wear them, but seat belts can prevent serious injuries if you have an accident. So remember, when you get into a car, you must wear your seat belt!',
      'Of course, police officers also investigate crimes and robberies. When there has been a crime, police officers are sent to the place where it happened. They need to look for evidence, like fingerprints and footprints, which can be used to identify and arrest the criminal. Of course, they don’t have to recognize the fingerprints themselves! There are fingerprint experts who do that. Police officers also have to ask a lot of questions. They interview witnesses who they think might have information about the crime. Witnesses can help the police by telling them what a criminal looks like or the time a crime was committed.',
      'Police officers try to prevent crimes as well as solve crimes. They often watch places where they think crimes are likely to happen. For example, crowded areas attract pickpockets who try to steal people’s wallets. Shops that sell expensive items also attract thieves. But police officers also help people with everyday problems. For example, if you’re lost, you needn’t worry, you can just ask a police officer for directions!'
    ],
    translation: [
      'يجب على الناس اتباع القانون حتى نتمكن جميعًا من العيش معًا بأمان. هناك قوانين مختلفة كثيرة، ولذلك لدى ضباط الشرطة واجبات كثيرة ومختلفة. ينظم بعض الضباط حركة المرور للتأكد من أن السائقين يستطيعون استخدام الطرق بسهولة ومن دون وقوع حوادث. كما يستخدمون أجهزة قياس السرعة بالرادار للتعرف على الأشخاص الذين يقودون بسرعة. وهذا أمر مهم جدًا. يجب ألا يتجاوز السائقون السرعة لأن السرعة من الأسباب الرئيسية للوفاة على الطرق. ويتحقق ضباط الشرطة أيضًا من أن السائقين والركاب يرتدون أحزمة الأمان. يغضب بعض الناس لأنهم لا يحبون ارتداءها، لكن أحزمة الأمان يمكن أن تمنع الإصابات الخطيرة عند وقوع حادث. لذا تذكر، عندما تدخل السيارة، يجب أن ترتدي حزام الأمان!',
      'بالطبع، يحقق ضباط الشرطة أيضًا في الجرائم والسرقات. عندما تقع جريمة، يُرسل ضباط الشرطة إلى المكان الذي حدثت فيه. عليهم البحث عن أدلة، مثل بصمات الأصابع وآثار الأقدام، التي يمكن استخدامها للتعرف على المجرم واعتقاله. وبالطبع، ليس عليهم التعرف على بصمات الأصابع بأنفسهم! فهناك خبراء بصمات يقومون بذلك. كما يجب على ضباط الشرطة طرح الكثير من الأسئلة. ويقابلون الشهود الذين يعتقدون أن لديهم معلومات عن الجريمة. ويمكن للشهود مساعدة الشرطة بإخبارهم بشكل المجرم أو وقت ارتكاب الجريمة.',
      'يحاول ضباط الشرطة منع الجرائم وكذلك حلها. وغالبًا ما يراقبون الأماكن التي يعتقدون أن الجرائم قد تحدث فيها. فعلى سبيل المثال، تجذب المناطق المزدحمة النشالين الذين يحاولون سرقة محافظ الناس. كما تجذب المتاجر التي تبيع السلع باهظة الثمن اللصوص. لكن ضباط الشرطة يساعدون أيضًا الأشخاص الذين يواجهون مشكلات يومية. فعلى سبيل المثال، إذا أضعت الطريق، فلا داعي للقلق؛ يمكنك ببساطة سؤال ضابط الشرطة عن الاتجاهات!'
    ],
    exerciseSets: [
      {
        id: '6p-u2-police-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — Find words in the text',
        sourcePages: 'كتاب النشاط ص 30',
        instruction: 'Find words in the texts on page 17 of the Student’s Book that mean the same as the words and phrases below.',
        instructionTranslation: 'جد كلمات في النصوص الموجودة في صفحة 17 من كتاب الطالب لها المعاني نفسها للكلمات والعبارات أدناه.',
        items: [
          { id: 'police-a1', question: 'put someone in prison', answer: 'arrest', answerTranslation: 'يعتقل' },
          { id: 'police-a2', question: 'get information about a crime', answer: 'investigate', answerTranslation: 'يحقق' },
          { id: 'police-a3', question: 'rules that everybody in the country must follow', answer: 'laws', answerTranslation: 'قوانين' },
          { id: 'police-a4', question: 'a person who steals money from your pocket', answer: 'pickpocket', answerTranslation: 'نشّال' },
          { id: 'police-a5', question: 'a person who saw or heard something at the time of a crime', answer: 'witness', answerTranslation: 'شاهد' }
        ]
      },
      {
        id: '6p-u2-police-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Complete the sentences',
        sourcePages: 'كتاب النشاط ص 30',
        instruction: 'Complete the following sentences with words or phrases from the texts on page 19 of the Student’s Book.',
        instructionTranslation: 'أكمل الجمل التالية بكلمات أو عبارات من نصوص صفحة 19 من كتاب الطالب.',
        items: [
          { id: 'police-b1', question: 'Police officers can also direct traffic so that drivers stay safe.', answer: 'direct traffic' },
          { id: 'police-b2', question: 'Police officers use radar speed guns to make sure people are not driving too fast.', answer: 'radar speed guns' },
          { id: 'police-b3', question: 'At a crime scene, they try to find evidence, like fingerprints and footprints.', answer: 'evidence' },
          { id: 'police-b4', question: 'They also interview witnesses who might have some important information related to the crime.', answer: 'witnesses' },
          { id: 'police-b5', question: 'Police officers not only solve crimes but also prevent crimes.', answer: 'prevent' },
          { id: 'police-b6', question: 'For example, they watch crowded places where pickpockets might act.', answer: 'pickpockets' }
        ]
      },
      {
        id: '6p-u2-police-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Answer the questions',
        sourcePages: 'كتاب النشاط ص 30',
        instruction: 'Read the texts again and answer the following questions.',
        instructionTranslation: 'اقرأ النصوص مرة ثانية وأجب عن الأسئلة التالية.',
        items: [
          { id: 'police-c1', question: 'Where do police officers go when a crime has been committed?', answer: 'They go to visit the crime scene.' },
          { id: 'police-c2', question: 'Who helps police officers identify fingerprints?', answer: 'Fingerprint experts.' },
          { id: 'police-c3', question: 'Where do pickpockets often commit crimes?', answer: 'Crowded areas.' },
          { id: 'police-c4', question: 'How can witnesses help the police?', answer: 'By telling them what a criminal looks like or what time the crime was committed.' },
          { id: 'police-c5', question: 'What should you do if you are lost and need help?', answer: 'You should ask a police officer for directions.' }
        ]
      }
    ]
  },

  '6p-u2-home-safety': {
    id: '6p-u2-home-safety',
    titleAr: 'كتيب سلامة المنازل',
    titleEn: 'Home Safety Brochure',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 49؛ كتاب النشاط: ص 40؛ PDF ص 51–52',
    originalText: [
      'EVERYONE SHOULD THINK ABOUT HOME SAFETY',
      'Why should you think about home safety? Every year, hundreds of people have their homes robbed. Thieves take money, jewellery, computers and even television sets. Then they sell them again, often to people who don’t realize they are buying stolen property. Many people have insurance that pays for things that get stolen. But some things can’t be replaced. For example, jewellery can have sentimental value. And if you get your computer stolen, you could lose hours of work on your hard disk.',
      'Basic measures: windows, doors and locks',
      'What are the most important things for home safety? Good windows, doors and locks are extremely important. Many thieves come in through open windows. Make sure your windows have good locks, and lock them when you go out. Burglars can hide behind trees and bushes, so don’t plant any near your windows. Get good locks for your doors, too. Some are unbelievably easy to open without a key for an experienced burglar. They can open your door with a bank card or a paper clip! But a good lock is almost impossible to unlock without the key. A good door is also essential. Make sure your door is solid. Have your house examined by an expert, who can tell you if you need to make your house more secure.'
    ],
    translation: [
      'على الجميع التفكير في أمن المنزل.',
      'لماذا يجب أن تفكر في أمن المنزل؟ في كل عام، تُسرق منازل مئات الأشخاص. يسرق اللصوص الأموال والمجوهرات وأجهزة الكمبيوتر وحتى أجهزة التلفزيون. ثم يبيعونها مجددًا، غالبًا لأشخاص لا يدركون أنهم يشترون ممتلكات مسروقة. لدى كثير من الناس تأمين يغطي الأشياء المسروقة. لكن بعض الأشياء لا يمكن تعويضها. فعلى سبيل المثال، قد تكون للمجوهرات قيمة عاطفية. وإذا سُرق جهاز الكمبيوتر، فقد تفقد ساعات من العمل المخزن على القرص الصلب.',
      'إجراءات أساسية: النوافذ والأبواب والأقفال.',
      'ما أهم الأشياء لسلامة المنزل؟ النوافذ والأبواب والأقفال الجيدة مهمة للغاية. يدخل كثير من اللصوص من النوافذ المفتوحة. تأكد من أن نوافذك مزودة بأقفال جيدة، وأغلقها عندما تخرج. يستطيع اللصوص الاختباء خلف الأشجار والشجيرات، لذا لا تزرع أيًا منها بالقرب من نوافذك. واحصل على أقفال جيدة لأبوابك أيضًا. فبعضها يسهل فتحه بشكل لا يصدق من دون مفتاح على اللص ذي الخبرة. ويمكنهم فتح بابك ببطاقة مصرفية أو مشبك ورق! لكن القفل الجيد يكاد يكون من المستحيل فتحه دون المفتاح. والباب الجيد ضروري أيضًا. تأكد من أن بابك متين. واطلب من خبير فحص منزلك ليخبرك إن كنت بحاجة إلى جعله أكثر أمانًا.'
    ],
    exerciseSets: [
      {
        id: '6p-u2-home-safety-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — Answer the questions',
        sourcePages: 'كتاب النشاط ص 40',
        instruction: 'Answer the following questions.',
        instructionTranslation: 'أجب عن الأسئلة التالية.',
        items: [
          { id: 'safety-a1', question: 'Why should people think about home safety?', answer: 'Every year, hundreds of houses are robbed.' },
          { id: 'safety-a2', question: 'What do thieves usually steal from homes?', answer: 'Money, jewellery, computers and even television sets.' },
          { id: 'safety-a3', question: 'Who often buys stolen property without realizing it?', answer: 'People in general buy stolen property without knowing anything about it.' },
          { id: 'safety-a4', question: 'How can people prevent burglars from entering through windows?', answer: 'Make sure your windows have good locks, and lock them when you go out.' },
          { id: 'safety-a5', question: 'Where should people avoid planting trees and bushes for better safety?', answer: 'Near windows because burglars can hide behind them.' }
        ]
      },
      {
        id: '6p-u2-home-safety-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Find a word or phrase',
        sourcePages: 'كتاب النشاط ص 40',
        instruction: 'Find a word or phrase in the brochure that means the following.',
        instructionTranslation: 'جد كلمة أو عبارة في الكتيب تحمل المعنى الآتي.',
        items: [
          { id: 'safety-b1', question: 'expensive items like gold rings and necklaces', answer: 'jewellery' },
          { id: 'safety-b2', question: 'how you feel about an object', answer: 'sentimental' },
          { id: 'safety-b3', question: 'things you do for a specific reason', answer: 'measures' },
          { id: 'safety-b4', question: 'thieves who break into homes', answer: 'burglars' },
          { id: 'safety-b5', question: 'extremely, so much that you can’t believe it', answer: 'unbelievably' },
          { id: 'safety-b6', question: 'very important', answer: 'essential' }
        ]
      }
    ]
  },

  '6p-u2-radar': {
    id: '6p-u2-radar',
    titleAr: 'مسدس الرادار لقياس السرعة',
    titleEn: 'Radar Speed Gun',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 51؛ كتاب النشاط: ص 44–45؛ PDF ص 53–55',
    originalText: [
      'Radar was invented during World War II to detect enemy aircraft and ships. After that, it was used for many other things, including weather prediction. Police officers started using radar speed guns to catch speeders over 70 years ago. Although new technology like speed cameras are also in use today, radar speed guns are still one of the most common tools in law enforcement.',
      'A radar speed gun works by sending waves towards a car. When the waves hit the car, they bounce back towards the radar gun. If the car isn’t moving, however, the radio waves are the same as when they were sent. If the car is moving, however, the space between the radio waves changes. The radar gun uses this information to calculate the speed of the car. Radar guns work when the car is moving towards or away from them. So, you can’t avoid a ticket by speeding away!',
      'There are different types of radar guns. Some are hand-held and are shaped a bit like guns. They can be used by police officers who are waiting for speeders by the side of the road. Police officers can also use them from moving vehicles. In that case, the radar gun takes into account the speed of the police vehicle. Some radar guns can take a picture of a car’s license plate as well as measure its speed. With this type of radar gun, police don’t have to stop the speeding car. They use the information on the number plate to identify the owner of the car. They then send him or her a speeding ticket.',
      'Some drivers try to avoid radar guns so that they won’t get tickets. They use radar detectors that detect if a radar gun is being used nearby. These machines make a beeping sound when they detect a radar gun, and the driver slows down. However, some police officers don’t turn on their radar guns until they see a car that they think is speeding. If that happens, the radar gun measures the driver’s speed before the driver even knows the radar gun is there. Another problem is that, in some places, radar detectors are illegal and you can get a fine for having one. There are also apps that use information reported by other drivers to let you know when there is a police officer with a radar gun or a speed camera, but they’re not always reliable. The best way to avoid a speeding ticket and stay safe, therefore, is to drive under the speed limit.',
      'Some people claim radar guns can make mistakes and that drivers get tickets when they shouldn’t. However, there aren’t many mistakes if the radar guns are used correctly and police officers are trained to use them properly. There are also rules about radar gun maintenance. If the radar guns are checked and fixed regularly, they are an essential tool in helping keep our roads safe.'
    ],
    translation: [
      'اخترع الرادار خلال الحرب العالمية الثانية لاكتشاف طائرات وسفن العدو. وبعد ذلك استُخدم لأشياء أخرى كثيرة، بما في ذلك التنبؤ بالطقس. بدأ ضباط الشرطة باستخدام أجهزة قياس السرعة بالرادار للقبض على متجاوزي السرعة منذ أكثر من 70 عامًا. وعلى الرغم من استخدام تقنيات جديدة مثل كاميرات السرعة اليوم، فإن أجهزة الرادار لا تزال من أكثر أدوات تطبيق القانون شيوعًا.',
      'يعمل جهاز قياس السرعة بالرادار بإرسال موجات باتجاه سيارة. وعندما تصطدم الموجات بالسيارة، ترتد نحو جهاز الرادار. إذا كانت السيارة لا تتحرك، تكون موجات الراديو عند ارتدادها كما كانت عند إرسالها. أما إذا كانت السيارة تتحرك، فتتغير المسافة بين موجات الراديو. يستخدم جهاز الرادار هذه المعلومات لحساب سرعة السيارة. وتعمل أجهزة الرادار عندما تتحرك السيارة باتجاهها أو بعيدًا عنها. لذلك لا يمكنك تجنب المخالفة بالابتعاد بسرعة!',
      'هناك أنواع مختلفة من أجهزة الرادار. بعضها محمول باليد ويشبه شكله البنادق قليلًا. ويمكن أن يستخدمها ضباط الشرطة الذين ينتظرون متجاوزي السرعة على جانب الطريق. كما يستطيع الضباط استخدامها من المركبات المتحركة. وفي هذه الحالة يأخذ جهاز الرادار في الاعتبار سرعة مركبة الشرطة. ويمكن لبعض أجهزة الرادار التقاط صورة للوحة تسجيل السيارة إلى جانب قياس سرعتها. ومع هذا النوع، لا يتعين على الشرطة إيقاف السيارة المسرعة؛ بل تستخدم المعلومات الموجودة على لوحة الأرقام للتعرف على مالك السيارة، ثم ترسل إليه مخالفة سرعة.',
      'يحاول بعض السائقين تجنب أجهزة الرادار حتى لا يحصلوا على مخالفات. ويستخدمون كواشف الرادار التي تكتشف ما إذا كان جهاز رادار يُستخدم في مكان قريب. تصدر هذه الأجهزة صوت صفير عند اكتشاف الرادار، فيبطئ السائق. لكن بعض ضباط الشرطة لا يشغلون أجهزة الرادار حتى يروا سيارة يعتقدون أنها مسرعة. وإذا حدث ذلك، يقيس جهاز الرادار سرعة السائق قبل أن يعرف السائق بوجوده. ومشكلة أخرى هي أن كواشف الرادار غير قانونية في بعض الأماكن، وقد تحصل على غرامة لامتلاك واحد منها. وهناك أيضًا تطبيقات تستخدم معلومات يبلغ عنها سائقون آخرون لإخبارك بوجود ضابط شرطة يحمل جهاز رادار أو كاميرا سرعة، لكنها ليست موثوقة دائمًا. لذلك فإن أفضل طريقة لتجنب مخالفة السرعة والبقاء آمنًا هي القيادة بسرعة أقل من الحد الأقصى.',
      'يزعم بعض الناس أن أجهزة الرادار قد ترتكب أخطاء وأن السائقين يحصلون على مخالفات لا ينبغي أن تُفرض عليهم. لكن الأخطاء قليلة إذا استُخدمت أجهزة الرادار على نحو صحيح ودُرّب ضباط الشرطة على استخدامها بشكل مناسب. وهناك أيضًا قواعد لصيانة أجهزة الرادار. وإذا فُحصت الأجهزة وأُصلحت بانتظام، فإنها تكون أداة أساسية للمساعدة في الحفاظ على سلامة طرقنا.'
    ],
    exerciseSets: [
      {
        id: '6p-u2-radar-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — Answer the questions',
        sourcePages: 'كتاب النشاط ص 44',
        instruction: 'Answer the following questions.',
        instructionTranslation: 'أجب عن الأسئلة التالية.',
        items: [
          { id: 'radar-a1', question: 'When did police officers start using radar speed guns?', answer: 'Over 70 years ago.' },
          { id: 'radar-a2', question: 'What happens when radio waves from a radar speed gun hit a car that’s stopped?', answer: 'They are the same when they bounce back to the gun.' },
          { id: 'radar-a3', question: 'Can radar guns take pictures?', answer: 'Some of them can.' },
          { id: 'radar-a4', question: 'What is a radar detector?', answer: 'A machine that makes a beeping sound when it detects a radar gun.' },
          { id: 'radar-a5', question: 'What other way can drivers find out if a radar speed gun is being used ahead?', answer: 'With apps that use information reported by other drivers.' },
          { id: 'radar-a6', question: 'How can mistakes with radar speed guns be avoided?', answer: 'Police officers are trained to use them properly and they are checked and fixed regularly.' }
        ]
      },
      {
        id: '6p-u2-radar-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — True or False',
        sourcePages: 'كتاب النشاط ص 44',
        instruction: 'Reread your text more carefully and write True or False.',
        instructionTranslation: 'أعد قراءة النص بعناية واكتب صح أو خطأ.',
        items: [
          { id: 'radar-b1', question: 'Police departments don’t use radar guns anymore.', answer: 'False.' },
          { id: 'radar-b2', question: 'Radar guns can only calculate the speed of a car moving towards them.', answer: 'False.' },
          { id: 'radar-b3', question: 'Some radar guns are shaped a bit like guns.', answer: 'True.' },
          { id: 'radar-b4', question: 'A radar detector makes a beeping noise if it senses a radar being used in the area.', answer: 'True.' },
          { id: 'radar-b5', question: 'There are two main problems with radar detectors.', answer: 'True.' },
          { id: 'radar-b6', question: 'Some people think radar guns don’t work well.', answer: 'True.' },
          { id: 'radar-b7', question: 'Police must be trained to use the radar gun correctly.', answer: 'True.' },
          { id: 'radar-b8', question: 'Radar guns don’t need any maintenance.', answer: 'False.' }
        ]
      },
      {
        id: '6p-u2-radar-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Complete the sentences',
        sourcePages: 'كتاب النشاط ص 44',
        instruction: 'Complete the sentences with a word or phrase from the text.',
        instructionTranslation: 'أكمل الجمل بكلمة أو عبارة من النص.',
        items: [
          { id: 'radar-c1', question: 'The first use of radar was to find airplanes and ships in a war.', answer: 'airplanes and ships' },
          { id: 'radar-c2', question: 'A radar speed gun sends radio waves, which hit the car and bounce back.', answer: 'radio waves' },
          { id: 'radar-c3', question: 'Radar speed guns work in both directions, so you can get a ticket even after you’ve passed the police officer.', answer: 'both directions' },
          { id: 'radar-c4', question: 'Radar speed guns can be hand-held or fitted in police cars.', answer: 'hand-held' },
          { id: 'radar-c5', question: 'The police know who broke the law by checking the number plate of the car in photos.', answer: 'number plate' },
          { id: 'radar-c6', question: 'Apps that tell you about speed cameras and radar speed guns aren’t reliable.', answer: 'aren’t reliable' },
          { id: 'radar-c7', question: 'Radar detectors are not permitted in many places, so you can receive a fine for having one.', answer: 'not permitted' },
          { id: 'radar-c8', question: 'If used properly and checked regularly, radar speed guns rarely make mistakes.', answer: 'rarely make mistakes' }
        ]
      },
      {
        id: '6p-u2-radar-ab-d',
        source: 'activity_book',
        sourceTitle: 'Exercise D — Find a word or phrase',
        sourcePages: 'كتاب النشاط ص 45',
        instruction: 'Find a word or phrase in the text that means the following.',
        instructionTranslation: 'جد كلمة أو عبارة في النص تحمل المعنى التالي.',
        items: [
          { id: 'radar-d1', question: 'not friendly (Paragraph 1)', answer: 'enemy' },
          { id: 'radar-d2', question: 'people who break the speed limit (Paragraph 1)', answer: 'speeders' },
          { id: 'radar-d3', question: 'to measure using maths (Paragraph 2)', answer: 'calculate' },
          { id: 'radar-d4', question: 'considers (Paragraph 3)', answer: 'takes into account' },
          { id: 'radar-d5', question: 'a fine you receive for going over the speed limit (Paragraph 3)', answer: 'speeding ticket' },
          { id: 'radar-d6', question: 'not allowed by law (Paragraph 4)', answer: 'illegal' },
          { id: 'radar-d7', question: 'to say something is true (Paragraph 5)', answer: 'claim' },
          { id: 'radar-d8', question: 'actions taken to keep something in good condition (Paragraph 5)', answer: 'maintenance' }
        ]
      }
    ]
  },

  '6p-u4-fitness-tech': {
    id: '6p-u4-fitness-tech',
    titleAr: 'تقنيات اللياقة البدنية',
    titleEn: 'Fitness Tech',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 80؛ PDF ص 82',
    originalText: [
      'Technology is changing the way we exercise. In the past, people used to go to the gym to work out, but now the gym is going to people’s houses!',
      'Until a few years ago, people didn’t use to have a gym at home, unless they were very rich. But with new technologies and equipment, it’s easier now to work out from home.',
      'A good example of this are online exercise communities. In the past, you used to join a club if you wanted to cycle with others, for example. Nowadays, you can buy a stationary bike, have online lessons and work out with lots of people online, without leaving your house.',
      'Fitness apps are another example of technology changing fitness. The first ones used to measure basic things like distances and speed, but more modern apps now are able to measure a lot more, including how fast your heart is beating, how many calories you are burning, and even how well you sleep.',
      'So, is this the end for gyms? Experts say things are harder than they used to be for gym owners. They used to compete only with other gyms in the area, but now they also have to compete with online and home gyms. However, sports clubs that also take advantage of the new technology will stay open.',
      'Gyms now offer much more advanced technology than they used to be. They are investing in devices that most people still can’t afford to have in their homes. A good example is the workout mirror. People used to look at mirrors in gyms just to see how they look while doing exercise, but now these hi-tech mirrors can actually teach you how to work out!',
      'Another thing lots of gyms are using now is Artificial Intelligence (AI). AI systems allow gyms to have much more data about their clients and build an ideal workout plan for them, as well as check their progress. For this reason, it’s also important for personal trainers to learn how to use these devices. Being good with technology didn’t use to be a requirement for personal trainers, but now it’s a key part of their job.',
      'So what does the future of fitness look like? It’s hard to say, but for sure, whether at home or at a smart gym, technology is going to continue to help you stay fit more and more.'
    ],
    translation: [
      'تُغيّر التكنولوجيا الطريقة التي نمارس بها الرياضة. في الماضي، كان الناس يذهبون إلى الصالة الرياضية للتمرن، أما الآن فقد أصبحت الصالة الرياضية تأتي إلى منازل الناس!',
      'حتى قبل بضع سنوات، لم يكن الناس يمتلكون صالة رياضية في المنزل، إلا إذا كانوا أثرياء جدًا. لكن مع التقنيات والمعدات الجديدة، أصبح التمرن من المنزل أسهل الآن.',
      'ومن الأمثلة الجيدة على ذلك مجتمعات التمارين الرياضية عبر الإنترنت. في الماضي، كنت تنضم إلى نادٍ إذا أردت ركوب الدراجة مع الآخرين مثلًا. أما اليوم، فيمكنك شراء دراجة ثابتة، وتلقي دروس عبر الإنترنت، والتمرن مع كثير من الأشخاص عبر الإنترنت دون مغادرة منزلك.',
      'تُعد تطبيقات اللياقة البدنية مثالًا آخر على تغيير التكنولوجيا للياقة. كانت التطبيقات الأولى تقيس أشياء أساسية مثل المسافات والسرعة، لكن التطبيقات الحديثة أصبحت قادرة على قياس أشياء أكثر بكثير، بما في ذلك سرعة ضربات القلب وعدد السعرات الحرارية التي تحرقها وحتى جودة نومك.',
      'فهل هذه نهاية الصالات الرياضية؟ يقول الخبراء إن الأمور أصبحت أصعب مما كانت عليه لأصحاب الصالات. كانوا يتنافسون سابقًا مع الصالات الأخرى في المنطقة فقط، لكن عليهم الآن أيضًا منافسة الصالات عبر الإنترنت والصالات المنزلية. ومع ذلك، ستبقى النوادي الرياضية التي تستفيد من التكنولوجيا الجديدة مفتوحة.',
      'تقدم الصالات الرياضية الآن تقنيات أكثر تطورًا بكثير مما كانت عليه سابقًا. فهي تستثمر في أجهزة لا يستطيع معظم الناس حتى الآن تحمل تكلفتها في منازلهم. ومن الأمثلة الجيدة مرآة التمرين. كان الناس ينظرون إلى المرايا في الصالات لمجرد رؤية مظهرهم أثناء التمرن، لكن هذه المرايا عالية التقنية تستطيع الآن تعليمك كيفية التمرن فعلًا!',
      'ومن الأمور الأخرى التي تستخدمها كثير من الصالات الآن الذكاء الاصطناعي. تتيح أنظمة الذكاء الاصطناعي للصالات جمع بيانات أكثر بكثير عن عملائها وبناء خطة تمرين مثالية لهم، فضلًا عن متابعة تقدمهم. ولهذا السبب من المهم أيضًا أن يتعلم المدربون الشخصيون كيفية استخدام هذه الأجهزة. لم تكن إجادة التكنولوجيا شرطًا للمدربين الشخصيين سابقًا، لكنها أصبحت الآن جزءًا أساسيًا من عملهم.',
      'كيف يبدو مستقبل اللياقة البدنية؟ من الصعب القول، لكن المؤكد أن التكنولوجيا ستواصل مساعدتك على الحفاظ على لياقتك أكثر فأكثر، سواء في المنزل أو في صالة رياضية ذكية.'
    ],
    exerciseSets: [
  {
    id: '6p-u4-fitness-tech-ab-a', source: 'activity_book', sourceTitle: 'Exercise A — Answer the questions', sourcePages: 'كتاب النشاط ص 78',
    instruction: 'Answer the questions.', instructionTranslation: 'أجب عن الأسئلة.',
    items: [
      { id: 'fitness-a1', question: 'Why is it now easier for people to work out from home?', answer: 'It’s easier thanks to new technologies and equipment.' },
      { id: 'fitness-a2', question: 'What are some ways technology has changed fitness?', answer: 'Online lessons, fitness apps, etc.' },
      { id: 'fitness-a3', question: 'How do modern fitness apps help people track their workouts?', answer: 'They can measure how fast your heart is beating, how many calories you burn and how well you sleep.' },
      { id: 'fitness-a4', question: 'Who do gym owners have to compete with nowadays?', answer: 'They have to compete with online and home gyms.' },
      { id: 'fitness-a5', question: 'Where can people use workout mirrors to improve their exercise routines?', answer: 'They can use them at the gym because they are too expensive to buy.' }
    ]
  },
  {
    id: '6p-u4-fitness-tech-ab-b', source: 'activity_book', sourceTitle: 'Exercise B — Choose the correct option', sourcePages: 'كتاب النشاط ص 78',
    instruction: 'Choose the correct option.', instructionTranslation: 'اختر الخيار الصحيح.',
    items: [
      { id: 'fitness-b1', question: 'Nowadays, more and more people are working out (at the gym / from home).', answer: 'from home.' },
      { id: 'fitness-b2', question: '(The first / Modern) fitness apps measured just how far you ran and how fast.', answer: 'The first.' },
      { id: 'fitness-b3', question: 'Experts say it’s (easier / harder) than before for gym owners now.', answer: 'harder.' },
      { id: 'fitness-b4', question: 'In the past, gyms only used to have (other gyms / home gyms) to compete with.', answer: 'other gyms.' },
      { id: 'fitness-b5', question: 'The writer believes there will be (less / more) technology in fitness in the future.', answer: 'more.' }
    ]
  },
  {
    id: '6p-u4-fitness-tech-ab-c', source: 'activity_book', sourceTitle: 'Exercise C — Complete the sentences', sourcePages: 'كتاب النشاط ص 78–79',
    instruction: 'Complete the sentences with words from the article.', instructionTranslation: 'أكمل الجمل بكلمات من المقال.',
    items: [
      { id: 'fitness-c1', question: 'Before, people used to be part of a club to cycle with others.', answer: 'club' },
      { id: 'fitness-c2', question: 'Modern fitness apps can even measure the quality of your sleep.', answer: 'quality' },
      { id: 'fitness-c3', question: 'Gyms now have equipment that most clients can’t afford to buy themselves.', answer: 'equipment' },
      { id: 'fitness-c4', question: 'Some mirrors now can teach people how to exercise.', answer: 'mirrors' },
      { id: 'fitness-c5', question: 'Personal trainers now have to be more familiar with technology to do their job.', answer: 'technology' },
      { id: 'fitness-c6', question: 'AI is providing a lot of data about the clients of a gym.', answer: 'data' }
    ]
  }
]
  },

  '6p-u5-kerkennah': {
    id: '6p-u5-kerkennah',
    titleAr: 'رحلة جزر قرقنة التونسية',
    titleEn: 'Kerkennah Islands Holiday',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 99؛ PDF ص 101',
    originalText: [
      'My cousin and I have recently returned from a wonderful fortnight in the Tunisian Kerkennah Islands. It was a package deal and cost us £300. This included the flight from London to Sfax, bus transfers to and from Sfax airport and the ferry to and from the island. The accommodation was in a three-star hotel with breakfast and dinner every day. The cost even included entertainment in the evenings. I couldn’t believe how cheap it was!',
      'From Sfax airport we were taken to the ferry port, where we boarded a rather old ferry! It took us across to the islands, which looked really beautiful in the evening sun. We were delighted that our hotel overlooked the beach and was just a short walk away. Although not very luxurious, it was a really pleasant two-storey building that was set in an attractive garden with its own swimming pool and tennis courts. Our room had its own private bathroom and balcony with a spectacular view of the calm, blue Mediterranean Sea. The atmosphere was really peaceful – that’s what I really liked.',
      'The food was exceptionally good. There was a self-service buffet in the dining room with a variety of dishes, both regional and international. You could eat as much as you wanted! Breakfast consisted of fruit, cereal, eggs, cakes, bread, honey, olives and cheese. There was a different selection of dishes for supper every night, and there was a lot of great seafood. I loved the octopus, which is a speciality in Kerkennah.',
      'We weren’t bored for a moment. One day, we hired a taxi and went on a tour of the island. We saw the villages where the fishermen catch octopus in clay pots. Another day we went for a camel ride on the beach, and we even hired surfboards from the hotel and learnt to windsurf. We also went for a ride in a donkey cart and toured some villages. What really impressed me was the hospitality of the local people. Several islanders invited us into their homes for mint tea and cakes. We also took the ferry back to the mainland to see the magnificent Roman theatre at El Jem. Something else that we really enjoyed was the free entertainment in the hotel after supper. One evening, a fakir and his team gave an incredible display of lying on a bed of nails and glass, walking over hot coals, breathing fire and letting scorpions walk all over their faces! We shall certainly never forget that holiday.',
      'Anna Johnson, Reading, Berkshire'
    ],
    translation: [
      'عدتُ أنا وابن عمي مؤخرًا من رحلة رائعة مدتها أسبوعان في جزر قرقنة التونسية. كانت رحلة شاملة كلفتنا 300 جنيه إسترليني. وشمل ذلك الرحلة من لندن إلى صفاقس، والنقل بالحافلة من وإلى مطار صفاقس، والعبّارة من وإلى الجزيرة. كانت الإقامة في فندق من ثلاث نجوم مع الفطور والعشاء كل يوم. وشملت التكلفة حتى الترفيه في المساء. لم أصدق كم كانت رخيصة!',
      'نُقلنا من مطار صفاقس إلى ميناء العبّارات، حيث ركبنا عبّارة قديمة نوعًا ما! أخذتنا إلى الجزر التي بدت جميلة جدًا تحت شمس المساء. سررنا لأن فندقنا كان يطل على الشاطئ ولا يبعد عنه سوى مسافة قصيرة سيرًا على الأقدام. وعلى الرغم من أنه لم يكن فاخرًا جدًا، فإنه كان مبنى لطيفًا من طابقين يقع في حديقة جذابة تضم مسبحًا خاصًا وملاعب تنس. كانت لغرفتنا حمام خاص وشرفة ذات إطلالة رائعة على البحر الأبيض المتوسط الهادئ الأزرق. كان الجو هادئًا جدًا، وهذا ما أعجبني حقًا.',
      'كان الطعام جيدًا بشكل استثنائي. كان هناك بوفيه خدمة ذاتية في غرفة الطعام يضم مجموعة متنوعة من الأطباق المحلية والعالمية. كان بإمكانك تناول ما تشاء! تألف الفطور من الفاكهة والحبوب والبيض والكعك والخبز والعسل والزيتون والجبن. وكانت هناك مجموعة مختلفة من الأطباق للعشاء كل ليلة، فضلًا عن كثير من المأكولات البحرية الرائعة. أحببت الأخطبوط، وهو طبق مميز في قرقنة.',
      'لم نشعر بالملل لحظة واحدة. في أحد الأيام استأجرنا سيارة أجرة وقمنا بجولة في الجزيرة. شاهدنا القرى التي يصطاد فيها الصيادون الأخطبوط في أوانٍ فخارية. وفي يوم آخر ركبنا الجمال على الشاطئ، واستأجرنا ألواح ركوب الأمواج من الفندق وتعلمنا ركوب الأمواج بالرياح. كما ركبنا عربة يجرها حمار وتجولنا في بعض القرى. أكثر ما أثار إعجابي هو ضيافة السكان المحليين. دعا العديد من سكان الجزيرة إلى منازلهم لتناول شاي النعناع والكعك. كما استقللنا العبارة عائدين إلى البر الرئيسي لمشاهدة المسرح الروماني الرائع في الجم. ومن الأشياء الأخرى التي استمتعنا بها حقًا الترفيه المجاني في الفندق بعد العشاء. في إحدى الأمسيات قدم أحد الفقراء وفريقه عرضًا مذهلًا تضمن الاستلقاء على سرير من المسامير والزجاج، والمشي فوق الجمر الساخن، ونفث النار، وترك العقارب تمشي على وجوههم! بالتأكيد لن ننسى تلك العطلة أبدًا.',
      'آنا جونسون، ريدينغ، بيركشاير.'
    ],
    exerciseSets: [
  {
    id: '6p-u5-kerkennah-ab-a', source: 'activity_book', sourceTitle: 'Exercise A — Answer these questions', sourcePages: 'كتاب النشاط ص 96',
    instruction: 'Answer these questions.', instructionTranslation: 'أجب عن هذه الأسئلة.',
    items: [
      { id: 'kerkennah-a1', question: 'Where did Anna and her cousin go on holiday?', answer: 'Kerkennah Islands.' },
      { id: 'kerkennah-a2', question: 'How long did they stay?', answer: 'Two weeks / a fortnight.' },
      { id: 'kerkennah-a3', question: 'How much did it cost?', answer: '£300.' },
      { id: 'kerkennah-a4', question: 'What was the name of the nearest airport to the islands?', answer: 'Sfax.' },
      { id: 'kerkennah-a5', question: 'What sports facilities were there at the hotel?', answer: 'A swimming pool and tennis courts.' },
      { id: 'kerkennah-a6', question: 'What was the local seafood speciality?', answer: 'Octopus.' },
      { id: 'kerkennah-a7', question: 'Where did they go by taxi?', answer: 'On a tour of the island.' }
    ]
  },
  {
    id: '6p-u5-kerkennah-ab-b', source: 'activity_book', sourceTitle: 'Exercise B — Read and answer', sourcePages: 'كتاب النشاط ص 96',
    instruction: 'Read the text carefully and answer these questions.', instructionTranslation: 'اقرأ النص بعناية وأجب عن هذه الأسئلة.',
    items: [
      { id: 'kerkennah-b1', question: 'What did the cost of the holiday include?', answer: 'The flight, transfers, accommodation, breakfast and dinner, and entertainment.' },
      { id: 'kerkennah-b2', question: 'How far from the beach was the hotel?', answer: 'Very close / a short walk.' },
      { id: 'kerkennah-b3', question: 'What did Anna really like about the hotel?', answer: 'The peaceful atmosphere.' },
      { id: 'kerkennah-b4', question: 'Name three activities Anna and her cousin did during the day.', answer: 'They toured the island in a taxi, went for a camel ride, learnt to windsurf, rode in a donkey cart, and visited the Roman theatre.' },
      { id: 'kerkennah-b5', question: 'What did they do when they didn’t go out in the evening?', answer: 'They watched the free entertainment at the hotel.' }
    ]
  },
  {
    id: '6p-u5-kerkennah-ab-c', source: 'activity_book', sourceTitle: 'Exercise C — Find words in the text', sourcePages: 'كتاب النشاط ص 96',
    instruction: 'Find words in the text that mean the following.', instructionTranslation: 'جد كلمات في النص تحمل المعاني التالية.',
    items: [
      { id: 'kerkennah-c1', question: 'a boat that transports people and goods', answer: 'ferry' },
      { id: 'kerkennah-c2', question: 'extremely comfortable', answer: 'luxurious' },
      { id: 'kerkennah-c3', question: 'something which is wonderful to look at', answer: 'spectacular' },
      { id: 'kerkennah-c4', question: 'something special to a locality', answer: 'speciality' },
      { id: 'kerkennah-c5', question: 'a fine welcome', answer: 'hospitality' },
      { id: 'kerkennah-c6', question: 'a show/performance', answer: 'display' }
    ]
  }
]
  },

  '6p-u5-holidays': {
    id: '6p-u5-holidays',
    titleAr: 'لماذا العطل مهمة؟',
    titleEn: 'Why Are Holidays So Important?',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 104؛ PDF ص 106',
    originalText: [
      'Today it is more important than ever to ensure that we take enough breaks and holidays. Life is so fast, and we spend such a large part of our time working hard that we really need to take sufficient time out. If we don’t, the pressure of life can affect both our physical and mental health.',
      'The stress of modern life can cause severe problems. It can cause high blood pressure, which can then cause strokes and heart attacks. It also has an effect on our minds. If we are always on the move, we don’t always notice how far we push our bodies. We don’t eat regular meals, we don’t get enough sleep, and our free time is often interrupted by phone calls. The human body cannot continue like this indefinitely. Both brain and body need a break. If we push them too far, they will eventually let us down.',
      'There are more and more “workaholics” these days who think that their work is too important to leave in the hands of others. These people cannot bear to be away from the office for more than a few hours. They put off taking holidays or breaks because there is always another deadline or another deal around the corner. They often discover too late that there is more to life than work.',
      'People like this risk hurting not only their health but their personal relationships, too. Everyone needs to spend time with family or friends, and this time needs to be more than the occasional snatched hour here or there. People who are close to us need to know that we care about them. Giving them a significant amount of our time is how we show this. Holiday time can give us this opportunity.',
      'Holidays are important for everyone, not just the businessman. We all need a change of scene and a change of pace. We need to relax and take our minds off work, school, the house or whatever problems are worrying us at the time. It doesn’t matter whether we choose to spend this time lying on a beach, trekking through rainforests or sightseeing. What is important is the change. A change of routine often helps us to look at our own lives in a different way. Holidays are vital to our general well-being. And leaving the mobile phone switched off. That is vital too!'
    ],
    translation: [
      'من المهم اليوم أكثر من أي وقت مضى أن نضمن حصولنا على فترات راحة وعطل كافية. فالحياة سريعة جدًا، ونقضي جزءًا كبيرًا من وقتنا في العمل الشاق، لذلك نحتاج حقًا إلى أخذ وقت كافٍ للراحة. وإذا لم نفعل ذلك، فقد يؤثر ضغط الحياة في صحتنا الجسدية والعقلية.',
      'يمكن أن يسبب ضغط الحياة الحديثة مشكلات خطيرة. فقد يسبب ارتفاع ضغط الدم، الذي قد يؤدي بدوره إلى السكتات الدماغية والنوبات القلبية. وله أيضًا تأثير في أذهاننا. إذا كنا دائمًا في حركة، فإننا لا نلاحظ دائمًا إلى أي مدى نرهق أجسادنا. لا نتناول وجبات منتظمة، ولا نحصل على قسط كافٍ من النوم، وغالبًا ما تقاطع المكالمات الهاتفية أوقات فراغنا. لا يستطيع جسم الإنسان الاستمرار على هذا النحو إلى ما لا نهاية. يحتاج كل من الدماغ والجسم إلى استراحة. وإذا أرهقناهما أكثر من اللازم، فسوف يخذلاننا في النهاية.',
      'يزداد عدد مدمني العمل هذه الأيام، وهم يعتقدون أن عملهم مهم جدًا بحيث لا يمكن تركه في أيدي الآخرين. ولا يستطيع هؤلاء الأشخاص تحمل الابتعاد عن المكتب لأكثر من بضع ساعات. ويؤجلون أخذ العطل أو فترات الراحة لأن هناك دائمًا موعدًا نهائيًا آخر أو صفقة أخرى تلوح في الأفق. وغالبًا ما يكتشفون بعد فوات الأوان أن في الحياة أشياء أخرى غير العمل.',
      'يخاطر أشخاص كهؤلاء بالإضرار بصحتهم وكذلك بعلاقاتهم الشخصية. يحتاج الجميع إلى قضاء وقت مع العائلة أو الأصدقاء، وينبغي أن يكون هذا الوقت أكثر من ساعة عابرة تُقتنص من حين إلى آخر. يحتاج المقربون منا إلى معرفة أننا نهتم بهم. ومنحهم قدرًا كبيرًا من وقتنا هو الطريقة التي نظهر بها ذلك. ويمكن أن يمنحنا وقت العطلة هذه الفرصة.',
      'العطل مهمة للجميع، وليس لرجال الأعمال فقط. نحتاج جميعًا إلى تغيير المكان وتغيير وتيرة الحياة. نحتاج إلى الاسترخاء وإبعاد أذهاننا عن العمل أو المدرسة أو المنزل أو أي مشكلات تقلقنا في ذلك الوقت. لا يهم إن اخترنا قضاء هذا الوقت مستلقين على الشاطئ أو متجولين في الغابات المطيرة أو مشاهدين للمعالم السياحية. المهم هو التغيير. غالبًا ما يساعد تغيير الروتين على النظر إلى حياتنا بطريقة مختلفة. العطل ضرورية لرفاهيتنا العامة. وإبقاء الهاتف المحمول مغلقًا أمر ضروري أيضًا!'
    ],
    exerciseSets: [
  {
    id: '6p-u5-holidays-ab-a', source: 'activity_book', sourceTitle: 'Exercise A — Circle the correct answer', sourcePages: 'كتاب النشاط ص 102',
    instruction: 'Read the text on page 51 of the Student’s Book and circle the correct answer.', instructionTranslation: 'اقرأ نص صفحة 51 من كتاب الطالب وضع دائرة حول الإجابة الصحيحة.',
    items: [
      { id: 'holidays-a1', question: 'The pressure of life will: (a) kill us. (b) cause health problems. (c) make us lose our jobs.', answer: 'cause health problems.' },
      { id: 'holidays-a2', question: 'Some people don’t take holidays because: (a) they don’t think other people can do their work. (b) they want to make lots of money. (c) the company doesn’t let them.', answer: 'they don’t think other people can do their work.' },
      { id: 'holidays-a3', question: 'Some people find out too late that: (a) they should have a different job. (b) work is not the only thing in life. (c) they missed their holiday.', answer: 'work is not the only thing in life.' },
      { id: 'holidays-a4', question: 'We need to give families and friends: (a) a good holiday. (b) at least an hour of our time. (c) a lot of our time.', answer: 'a lot of our time.' },
      { id: 'holidays-a5', question: 'Holidays can give us a chance to: (a) learn new activities. (b) stop thinking about our problems. (c) recover from illnesses.', answer: 'stop thinking about our problems.' }
    ]
  },
  {
    id: '6p-u5-holidays-ab-b', source: 'activity_book', sourceTitle: 'Exercise B — Complete the sentences', sourcePages: 'كتاب النشاط ص 102',
    instruction: 'Read the text again and complete the sentences.', instructionTranslation: 'اقرأ النص مرة أخرى وأكمل الجمل.',
    items: [
      { id: 'holidays-b1', question: 'Today it is more important than ever to ensure that we take enough breaks and holidays.', answer: 'take enough breaks and holidays' },
      { id: 'holidays-b2', question: 'If we are always on the move, we don’t always notice how far we push our bodies.', answer: 'how far we push our bodies' },
      { id: 'holidays-b3', question: 'The human body cannot continue like this indefinitely.', answer: 'indefinitely' },
      { id: 'holidays-b4', question: 'We all need a change of scene and a change of pace.', answer: 'a change of scene and a change of pace' },
      { id: 'holidays-b5', question: 'A change of routine often helps us to look at our own lives in a different way.', answer: 'in a different way' }
    ]
  },
  {
    id: '6p-u5-holidays-ab-c', source: 'activity_book', sourceTitle: 'Exercise C — Find words or phrases', sourcePages: 'كتاب النشاط ص 103',
    instruction: 'Find words or phrases in the text that mean the following.', instructionTranslation: 'جد كلمات أو عبارات في النص تحمل المعاني التالية.',
    items: [
      { id: 'holidays-c1', question: 'make certain', answer: 'ensure' },
      { id: 'holidays-c2', question: 'forever', answer: 'indefinitely' },
      { id: 'holidays-c3', question: 'a time limit', answer: 'deadline' },
      { id: 'holidays-c4', question: 'about to happen', answer: 'around the corner' },
      { id: 'holidays-c5', question: 'taken quickly', answer: 'snatched' },
      { id: 'holidays-c6', question: 'health', answer: 'wellbeing' },
      { id: 'holidays-c7', question: 'very important', answer: 'vital' }
    ]
  },
  {
    id: '6p-u5-holidays-ab-d', source: 'activity_book', sourceTitle: 'Exercise D — Complete the words with vowels', sourcePages: 'كتاب النشاط ص 103',
    instruction: 'Complete the words from the text with vowels a, e, i, o or u.', instructionTranslation: 'أكمل الكلمات من النص مستخدمًا حروف العلة.',
    items: [
      { id: 'holidays-d1', question: 'A person who works too much is often called a workaholic.', answer: 'workaholic' },
      { id: 'holidays-d2', question: 'When you go sightseeing, you visit interesting places as a tourist.', answer: 'sightseeing' },
      { id: 'holidays-d3', question: 'If you walk a long distance in nature, you go trekking.', answer: 'trekking' },
      { id: 'holidays-d4', question: 'Something that doesn’t happen very often is occasional.', answer: 'occasional' },
      { id: 'holidays-d5', question: 'A severe problem is a very serious one.', answer: 'severe' },
      { id: 'holidays-d6', question: 'If you are interrupted, you have to stop what you are doing.', answer: 'interrupted' },
      { id: 'holidays-d7', question: 'If something is significant, it has an important effect.', answer: 'significant' },
      { id: 'holidays-d8', question: 'When you are working a lot and you suddenly slow down, you have a change of pace.', answer: 'pace' }
    ]
  }
]
  },

  '6p-u6-banker': {
    id: '6p-u6-banker',
    titleAr: 'مقابلة موظف البنك',
    titleEn: 'Meet a Banker',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 112–113؛ كتاب النشاط: ص 114؛ PDF ص 114–115',
    originalText: [
      'I’ve been a banker for twenty years and I love my job. What makes it particularly interesting is the variety. I have to do many different things and use a number of different skills. No two days are ever the same. Most importantly, we have to convince people to use the bank, and one way to do this is to offer new services. For example, we can attract students by offering special student accounts if the bank is close to a university or college. We also advise people on the most suitable accounts for their needs.',
      'Another of my main responsibilities is to decide whether or not to give people or businesses loans. This is one way the bank uses the money people put into their accounts. The money doesn’t simply sit there but is used to make more money. Many people need loans for a special project such as buying a car or a house.',
      'We also lend money to people who want to start their own businesses. It is often up to me to decide whether the business is a good idea or not, and sometimes I must make suggestions to improve their plans. For example, if a man wants to open a bookshop on a street that already has several bookshops, I might suggest that he opens it on another street where he can get more customers. Unfortunately, I cannot always approve a loan. This is a difficult part of my job as I do not like to disappoint my clients.',
      'Some bankers work mostly with large companies, while others have more to do with small businesses and individuals. Both types of banking can be enjoyable. Banks that work with large companies can help them improve and extend their businesses. This can be very interesting and exciting, as you have to be quite knowledgeable about many different subjects. If you work with a company that makes chemical products, for example, you have to understand how the products are made and used. My main work is with individuals and small businesses. What I particularly enjoy about this is that I meet a range of different people. It is also very satisfying to be able to help them with their problems and make a difference in their lives.',
      'Being a banker requires many different skills. To begin with, you have to be good at Maths and able to read and understand graphs and charts quickly. Another important skill is being able to work with other experts who can give you important information. When a client wants a loan to buy a house, for example, I need to know about the value and structure of the house and what sort of neighbourhood it is in. A specialist can give me this information. Finally, a banker needs to be a good communicator. Your clients need information about many different things, some of them quite complex. They need a banker who can explain these things clearly and who enjoys helping them.'
    ],
    translation: [
      'أنا موظف بنك منذ عشرين عامًا وأحب عملي. وما يجعل عملي ممتعًا على نحو خاص هو التنوع. عليّ القيام بأشياء مختلفة كثيرة واستخدام مهارات متعددة. فلا يوجد يومان متشابهان. والأهم من ذلك أننا يجب أن نقنع الناس باستخدام البنك، وإحدى طرق ذلك تقديم خدمات جديدة. فعلى سبيل المثال، يمكننا جذب الطلاب من خلال تقديم حسابات خاصة بهم إذا كان البنك قريبًا من جامعة أو كلية. كما ننصح الناس بالحسابات الأنسب لاحتياجاتهم.',
      'ومن مسؤولياتي الرئيسية الأخرى أن أقرر ما إذا كنت سأمنح الأشخاص أو الشركات قروضًا أم لا. وهذه إحدى الطرق التي يستخدم بها البنك الأموال التي يودعها الناس في حساباتهم. فالأموال لا تبقى ساكنة هناك، بل تُستخدم لكسب المزيد من المال. يحتاج كثير من الناس إلى قروض لمشروع خاص مثل شراء سيارة أو منزل.',
      'نقرض أيضًا الأموال للأشخاص الذين يريدون بدء أعمالهم التجارية الخاصة. وغالبًا ما يعود إليّ قرار ما إذا كان المشروع فكرة جيدة أم لا، وأحيانًا يجب أن أقدم اقتراحات لتحسين خططهم. فعلى سبيل المثال، إذا أراد رجل فتح مكتبة في شارع توجد فيه بالفعل عدة مكتبات، فقد أقترح أن يفتحها في شارع آخر حيث يستطيع الحصول على زبائن أكثر. ولسوء الحظ، لا أستطيع الموافقة على كل قرض. وهذا جزء صعب من عملي لأنني لا أحب أن أخيب آمال عملائي.',
      'يعمل بعض موظفي البنوك في الغالب مع الشركات الكبيرة، بينما يتعامل آخرون أكثر مع الشركات الصغيرة والأفراد. ويمكن أن يكون كلا النوعين من العمل المصرفي ممتعًا. فالبنوك التي تعمل مع الشركات الكبيرة يمكنها مساعدتها على تحسين أعمالها وتوسيعها. وقد يكون ذلك ممتعًا ومثيرًا لأن عليك أن تكون واسع المعرفة بموضوعات مختلفة كثيرة. فإذا عملت مع شركة تصنع منتجات كيميائية، مثلًا، فعليك فهم كيفية تصنيع المنتجات واستخدامها. يتركز عملي بشكل أساسي مع الأفراد والشركات الصغيرة. وأكثر ما أستمتع به هو مقابلة مجموعة متنوعة من الأشخاص. ومن المرضي أيضًا أن أتمكن من مساعدتهم في مشكلاتهم وإحداث فرق في حياتهم.',
      'يتطلب العمل المصرفي مهارات مختلفة كثيرة. بدايةً، يجب أن تكون جيدًا في الرياضيات وقادرًا على قراءة الرسوم البيانية والمخططات وفهمها بسرعة. ومن المهارات المهمة الأخرى القدرة على العمل مع خبراء آخرين يستطيعون تزويدك بمعلومات مهمة. فعندما يريد أحد العملاء قرضًا لشراء منزل، مثلًا، أحتاج إلى معرفة قيمة المنزل وهيكله ونوع الحي الذي يقع فيه. ويمكن لمختص أن يزودني بهذه المعلومات. وأخيرًا، يحتاج موظف البنك إلى مهارات تواصل جيدة. يحتاج عملاؤك إلى معلومات عن أشياء مختلفة كثيرة، بعضها معقد إلى حد ما. وهم بحاجة إلى موظف بنك يستطيع شرح هذه الأمور بوضوح ويستمتع بمساعدتهم.'
    ],
    exerciseSets: [
      {
        id: '6p-u6-banker-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — True or False',
        sourcePages: 'كتاب النشاط ص 114',
        instruction: 'Decide if these statements are true or false.',
        instructionTranslation: 'قرر ما إذا كانت هذه الجمل صحيحة أم خاطئة.',
        items: [
          { id: 'banker-a1', question: 'The banker’s job has a daily routine.', answer: 'False.' },
          { id: 'banker-a2', question: 'Bankers do not encourage students to open accounts.', answer: 'False.' },
          { id: 'banker-a3', question: 'Bankers have to assess new business ideas.', answer: 'True.' },
          { id: 'banker-a4', question: 'Sometimes a banker can’t agree to give a loan.', answer: 'True.' },
          { id: 'banker-a5', question: 'Bankers only need to know about financial subjects.', answer: 'False.' },
          { id: 'banker-a6', question: 'A banker does all his work alone.', answer: 'False.' }
        ]
      }
    ]
  },

  '6p-u6-making-money': {
    id: '6p-u6-making-money',
    titleAr: 'كسب المال واستثماره',
    titleEn: 'Making Money',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 121–122؛ PDF ص 123–124',
    originalText: [
      'Saving for the future is something that is instilled in us from an early age. As children, we learn not to spend all our pocket money at once but to put some aside to buy something bigger later on. When we start work, we are encouraged to put money into pension plans to save for our retirement so that we can continue to enjoy a good standard of living when we are older.',
      'There are many ways in which we can make our money work for us. Banks inform us of different types of savings accounts, with more or less interest the longer we leave our money with them. Some savings accounts suit regular savers, others are more appropriate for those of us who wish to invest a fixed sum. Savings accounts benefit people who do not need to access this money, and if we can forget it is there, so much the better!',
      'Financially-minded people who follow the markets invest in stocks and shares. For many, this can be both a hobby and a way of making a lot of money. It’s a risky business, however, and there are no guarantees. The major players in this game are the specialists. You can certainly lose a lot of money as well as gain it, and it is not the answer for people who need a fixed sum at the end of their investment period.',
      'Money can also be made through investing in property. Spending a lot of money to begin with can bring significant profit if the property is sold on at a later date when property prices have increased. Once again, there is no guarantee that you will make a profit or even break even, but generally speaking, money invested in property is safe in the long term. It is this type of investment that is becoming more and more popular in the UK at the moment.',
      'People are beginning to see the value of buying up property to rent out. The rent pays the instalments on the loan or mortgage, and then when the investor needs the money he or she can sell up and realize the profit. This is particularly popular with people who inherit an amount of money who want to do more with the money than let it sit in a savings account.',
      'However people choose to invest their money, whether it is in savings accounts, pension plans, stocks and shares or property, etc., it is more sensible than keeping it in a box under the bed as our grandparents often used to do! And although some young people cannot see the value in saving for their old age when they are still in their twenties, there are a lot of retired people today who wish they had done more with their money when they were younger.'
    ],
    translation: [
      'الادخار للمستقبل شيء يُغرس فينا منذ سن مبكرة. فعندما نكون أطفالًا، نتعلم ألا ننفق مصروفنا كله دفعة واحدة، بل أن ندخر جزءًا منه لشراء شيء أكبر لاحقًا. وعندما نبدأ العمل، نشجع على وضع المال في خطط المعاشات التقاعدية للادخار من أجل تقاعدنا، حتى نتمكن من مواصلة التمتع بمستوى معيشي جيد عندما نتقدم في السن.',
      'هناك طرق كثيرة يمكننا من خلالها جعل أموالنا تعمل لصالحنا. تخبرنا البنوك بأنواع مختلفة من حسابات التوفير، وبمقدار الفائدة التي نحصل عليها كلما تركنا أموالنا لديها مدة أطول. تناسب بعض حسابات التوفير المدخرين المنتظمين، بينما تكون حسابات أخرى أنسب لمن يرغبون في استثمار مبلغ ثابت. وتفيد حسابات التوفير الأشخاص الذين لا يحتاجون إلى الوصول إلى هذه الأموال، وكلما استطعنا نسيان وجودها كان ذلك أفضل!',
      'يستثمر الأشخاص ذوو التفكير المالي الذين يتابعون الأسواق في الأسهم والحصص. وبالنسبة إلى كثيرين، يمكن أن يكون ذلك هواية وطريقة لكسب الكثير من المال. لكنه عمل محفوف بالمخاطر، ولا توجد ضمانات. واللاعبون الرئيسيون في هذا المجال هم المختصون. فمن المؤكد أنك قد تخسر الكثير من المال كما قد تكسبه، وهذا ليس الخيار المناسب للأشخاص الذين يحتاجون إلى مبلغ ثابت في نهاية فترة استثمارهم.',
      'يمكن أيضًا جني المال من خلال الاستثمار في العقارات. فقد يؤدي إنفاق مبلغ كبير في البداية إلى تحقيق ربح كبير إذا بيع العقار في وقت لاحق عندما ترتفع أسعار العقارات. ومرة أخرى، لا يوجد ضمان لتحقيق الربح أو حتى استرداد رأس المال، لكن المال المستثمر في العقارات يكون عمومًا آمنًا على المدى الطويل. وهذا النوع من الاستثمار يزداد شعبية في المملكة المتحدة في الوقت الحالي.',
      'بدأ الناس يدركون قيمة شراء العقارات لتأجيرها. فيدفع الإيجار أقساط القرض أو الرهن العقاري، وعندما يحتاج المستثمر إلى المال يمكنه بيع العقار وتحقيق الربح. وهذا شائع خصوصًا بين الأشخاص الذين يرثون مبلغًا من المال ويريدون الاستفادة منه أكثر من تركه في حساب توفير.',
      'أيًا كانت الطريقة التي يختارها الناس لاستثمار أموالهم، سواء في حسابات التوفير أو خطط التقاعد أو الأسهم والحصص أو العقارات وغيرها، فهي أكثر منطقية من الاحتفاظ بها في صندوق تحت السرير كما اعتاد أجدادنا! وعلى الرغم من أن بعض الشباب لا يرون قيمة الادخار للشيخوخة وهم لا يزالون في العشرينات، فإن هناك كثيرًا من المتقاعدين اليوم يتمنون لو أنهم فعلوا المزيد بأموالهم عندما كانوا أصغر سنًا.'
    ],
    exerciseSets: [
  {
    id: '6p-u6-making-money-ab-b', source: 'activity_book', sourceTitle: 'Exercise B — Choose the correct option', sourcePages: 'كتاب النشاط ص 126',
    instruction: 'Choose the correct option to complete each sentence.', instructionTranslation: 'اختر الخيار الصحيح لإكمال كل جملة.',
    items: [
      { id: 'money-b1', question: 'When we are children: (a) we start to save for when we are older. (b) we are taught the value of saving. (c) we often buy big things.', answer: 'we are taught the value of saving.' },
      { id: 'money-b2', question: 'We can get more interest: (a) if we keep our money in our account for a long time. (b) if we change accounts often. (c) if we put in a fixed amount.', answer: 'if we keep our money in our account for a long time.' },
      { id: 'money-b3', question: 'Investing in stocks and shares: (a) is a good way for anyone to make money. (b) will always make a profit. (c) is fun for some people.', answer: 'is fun for some people.' },
      { id: 'money-b4', question: 'If you buy property: (a) you can make a lot of profit from rent. (b) you don’t need a loan. (c) you may get a lot of money when you sell it.', answer: 'you may get a lot of money when you sell it.' }
    ]
  },
  {
    id: '6p-u6-making-money-ab-c', source: 'activity_book', sourceTitle: 'Exercise C — Answer the questions', sourcePages: 'كتاب النشاط ص 126',
    instruction: 'Answer the questions.', instructionTranslation: 'أجب عن الأسئلة.',
    items: [
      { id: 'money-c1', question: 'What are we told to do when we start work?', answer: 'Put money into pension plans.' },
      { id: 'money-c2', question: 'What is the best type of account for those who can forget they invested money?', answer: 'A savings account.' },
      { id: 'money-c3', question: 'What profile of people invest in stocks and shares?', answer: 'Financially-minded people.' },
      { id: 'money-c4', question: 'What do many people who receive money from relatives that died often do?', answer: 'Buy property.' },
      { id: 'money-c5', question: 'What did our elder relatives use to do according to the text?', answer: 'Keep money in a box under the bed.' }
    ]
  },
  {
    id: '6p-u6-making-money-ab-d', source: 'activity_book', sourceTitle: 'Exercise D — Find a word or phrase', sourcePages: 'كتاب النشاط ص 127',
    instruction: 'Find a word or phrase in the text that means the following.', instructionTranslation: 'جد كلمة أو عبارة في النص تحمل المعنى التالي.',
    items: [
      { id: 'money-d1', question: 'put in our minds gradually', answer: 'instilled' },
      { id: 'money-d2', question: 'level of material comfort', answer: 'standard of living' },
      { id: 'money-d3', question: 'money you pay for a loan', answer: 'interest' },
      { id: 'money-d4', question: 'money that you make in a financial transaction', answer: 'profit' },
      { id: 'money-d5', question: 'regular payments that you make to pay for something', answer: 'instalments' },
      { id: 'money-d6', question: 'able to make good decisions', answer: 'sensible' }
    ]
  },
  {
    id: '6p-u6-making-money-ab-e', source: 'activity_book', sourceTitle: 'Exercise E — Complete the phrases', sourcePages: 'كتاب النشاط ص 127',
    instruction: 'Find the words in the text that complete the following phrases.', instructionTranslation: 'جد الكلمات في النص التي تكمل العبارات التالية.',
    items: [
      { id: 'money-e1', question: 'put some ______', answer: 'aside' },
      { id: 'money-e2', question: 'pension ______', answer: 'plans' },
      { id: 'money-e3', question: 'regular ______', answer: 'savers' },
      { id: 'money-e4', question: 'a fixed ______', answer: 'sum' },
      { id: 'money-e5', question: 'financially ______', answer: 'minded' },
      { id: 'money-e6', question: 'a risky ______', answer: 'business' },
      { id: 'money-e7', question: 'major ______', answer: 'players' },
      { id: 'money-e8', question: 'break ______', answer: 'even' },
      { id: 'money-e9', question: 'realize the ______', answer: 'profit' }
    ]
  }
]
  },

  '6p-u7-work-today': {
    id: '6p-u7-work-today',
    titleAr: 'العمل اليوم',
    titleEn: 'Work Today',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 130؛ PDF ص 132',
    originalText: [
      'There are many ways in which you can improve your job prospects. One of them is to take computer classes. Computers are used in more and more businesses, and most jobseekers should be familiar with basic computers. Learning new computer skills can also help you change careers, and the number of people enrolling in computer classes is increasing.',
      'Depending on the class they choose, students can learn basic or more advanced computer skills. Classes that teach the use of spreadsheets are popular, since spreadsheets are used in many businesses to show information in table form. For example, spreadsheets are very often used to show financial information. Photographers and artists may want to take classes in digital graphic design.',
      'People with these skills can help create illustrations for publishers or advertising agencies or work in television. Classes in web design, which teach how to create and maintain a company website, are becoming more and more popular.',
      'While computer classes are a part of many university programmes, you don’t have to be a student to take a computer class. Many universities offer continuing education classes that you can take in the evening. There are also an increasing number of online classes that you can take from home. The advantage of these classes is that you can study whenever you want. If you decide to take a class online, make sure you get information about the site that is offering the class. Some are excellent and can help you get a better job, but others are not very good. Finally, if you are self-disciplined and can work without a teacher, you can buy a book about computers and teach yourself, but explanations can sometimes be quite complex and need practical demonstration.'
    ],
    translation: [
      'هناك طرق كثيرة يمكنك من خلالها تحسين فرصك الوظيفية. ومن هذه الطرق الالتحاق بدورات في الحاسوب. يُستخدم الحاسوب في عدد متزايد من الشركات، وينبغي لمعظم الباحثين عن عمل الإلمام بأساسياته. كما أن تعلم مهارات حاسوبية جديدة قد يساعدك على تغيير مسارك المهني، ويتزايد عدد الأشخاص الذين يلتحقون بدورات الحاسوب.',
      'بحسب الدورة التي يختارونها، يستطيع الطلاب تعلم مهارات حاسوبية أساسية أو أكثر تقدمًا. تحظى الدورات التي تعلم استخدام جداول البيانات بشعبية، لأن جداول البيانات تُستخدم في شركات كثيرة لعرض المعلومات في شكل جداول. فعلى سبيل المثال، كثيرًا ما تُستخدم لعرض المعلومات المالية. وقد يرغب المصورون والفنانون في الالتحاق بدورات في التصميم الرسومي الرقمي.',
      'يستطيع الأشخاص الذين يمتلكون هذه المهارات المساعدة في إنشاء رسوم توضيحية لدور النشر أو وكالات الإعلان، أو العمل في التلفزيون. كما تزداد شعبية دورات تصميم المواقع الإلكترونية التي تعلم كيفية إنشاء موقع الشركة وصيانته.',
      'على الرغم من أن دورات الحاسوب جزء من كثير من البرامج الجامعية، فليس عليك أن تكون طالبًا لتلتحق بدورة حاسوب. تقدم جامعات كثيرة دورات تعليم مستمر يمكنك حضورها في المساء. وهناك أيضًا عدد متزايد من الدورات عبر الإنترنت التي يمكنك دراستها من المنزل. وميزة هذه الدورات أنك تستطيع الدراسة متى شئت. وإذا قررت الالتحاق بدورة عبر الإنترنت، فتأكد من الحصول على معلومات عن الموقع الذي يقدمها. فبعض المواقع ممتاز ويمكن أن يساعدك في الحصول على وظيفة أفضل، لكن بعضها الآخر ليس جيدًا. وأخيرًا، إذا كنت منضبطًا ذاتيًا وقادرًا على العمل من دون معلم، فيمكنك شراء كتاب عن الحاسوب وتعليم نفسك، لكن الشروحات قد تكون معقدة أحيانًا وتحتاج إلى تطبيق عملي.'
    ],
    exerciseSets: [
      {
        id: '6p-u7-work-today-ab',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Answer the questions',
        sourcePages: 'كتاب النشاط ص 138',
        instruction: 'Answer the following questions.',
        instructionTranslation: 'أجب عن الأسئلة التالية.',
        items: [
          { id: 'work-b1', question: 'Give two reasons for improving computer skills.', answer: 'To improve job prospects and to help find a new career.' },
          { id: 'work-b2', question: 'Why are spreadsheets used a lot in businesses?', answer: 'Because they can show information in table form.' },
          { id: 'work-b3', question: 'What sort of company would a graphic designer work for?', answer: 'A publisher, advertising agency or TV station.' },
          { id: 'work-b4', question: 'Why is it becoming easier to find courses in computer skills?', answer: 'Because you can study whenever you want.' },
          { id: 'work-b5', question: 'What are the three main ways of studying computer skills?', answer: 'On a course, online or from a book.' }
        ]
      },
      {
        id: '6p-u7-work-today-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Complete the sentences',
        sourcePages: 'كتاب النشاط ص 138',
        instruction: 'Complete the following sentences.',
        instructionTranslation: 'أكمل الجمل التالية.',
        items: [
          { id: 'work-c1', question: 'One way to improve your job prospects is to take computer classes.', answer: 'take computer classes' },
          { id: 'work-c2', question: 'Many businesses use spreadsheets to show information in table form.', answer: 'show information in table form' }
        ]
      }
    ]
  },

  '6p-u7-library': {
    id: '6p-u7-library',
    titleAr: 'استخدام المكتبة',
    titleEn: 'Using the Library',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 135–136؛ كتاب النشاط: ص 150–151؛ PDF ص 137–140',
    originalText: [
      'When I left school, I started working for a bank. I gave people information about their accounts and cashed cheques. I enjoyed it for a while, but then I decided it wasn’t what I wanted to do for the rest of my life. I had this idea that I would quite like a job which involved travelling. However, I didn’t know what sorts of jobs there were or what I needed to study. So, I started coming to the Central Library of Baghdad regularly to look for information that might help me. I was astounded by the help that is available to people like me.',
      'The library has a range of information for people who are looking for the right career. Firstly, there’s a whole section of books about different careers. They describe the various jobs and also tell you what skills or qualifications you need to do them. I’ve been taking a different book out each week. It’s really interesting. A lot of the time, we only think about the jobs that we often hear about, but there are so many unusual jobs around. And with new technology, new jobs are appearing all the time. There are also books with advice on how to find job vacancies and also how to prepare for and get through interviews. I’ve learnt a lot about how important body language is in an interview and also how to look businesslike. They explain how to write a good CV, too, which is really important.',
      'If I need to learn new things or take extra qualifications, I can get information about classes at the library, too. They have some school and college catalogues, and there are computers where I can look for information about evening and summer classes. I hadn’t realized there were so many different things I could study! Since I want to travel, I’m sure I’ll need better language skills, so I definitely need to improve my English, and maybe learn another language, too. In addition to information about the classes, the library also has a lot of its own materials to help me do this. It has books in English, and also lets you borrow DVDs with language-learning games and exercises. They have information about language tests and practice books to help prepare for examinations if you need the qualifications.',
      'Another important section at the library is its daily selection of newspapers and magazines. I look through these to find job offers because it’s good to know what jobs are available. I also look at interesting job sites on the Internet. The librarians have told me how to get information about companies. I can find out where they are, what they do and how big they are. This will be useful information when I decide to apply for a new job. I’m sure all this research will pay off and that one day I will have my dream job. And it will all be thanks to the library.'
    ],
    translation: [
      'عندما تركت المدرسة، بدأت العمل في أحد البنوك. كنت أعطي الناس معلومات عن حساباتهم وأصرف الشيكات. استمتعت بالعمل لبعض الوقت، لكنني قررت بعد ذلك أنه ليس ما أريد فعله لبقية حياتي. خطرت لي فكرة أنني أرغب في وظيفة تتضمن السفر. لكنني لم أكن أعرف أنواع الوظائف المتاحة أو ما الذي أحتاج إلى دراسته. لذلك بدأت أذهب بانتظام إلى المكتبة المركزية في بغداد للبحث عن معلومات قد تساعدني. وقد أذهلني مقدار المساعدة المتاحة لأشخاص مثلي.',
      'تضم المكتبة مجموعة واسعة من المعلومات للأشخاص الذين يبحثون عن المهنة المناسبة. أولًا، هناك قسم كامل من الكتب عن المهن المختلفة. تصف هذه الكتب الوظائف المختلفة وتخبرك أيضًا بالمهارات أو المؤهلات التي تحتاج إليها للقيام بها. بدأت أستعير كتابًا مختلفًا كل أسبوع. وهذا أمر ممتع جدًا. فكثيرًا ما نفكر فقط في الوظائف التي نسمع عنها، لكن هناك وظائف غير مألوفة كثيرة حولنا. ومع التكنولوجيا الجديدة، تظهر وظائف جديدة باستمرار. وهناك أيضًا كتب تقدم نصائح حول كيفية العثور على الوظائف الشاغرة وكيفية الاستعداد للمقابلات واجتيازها. تعلمت الكثير عن أهمية لغة الجسد في المقابلة وكيف أبدو بمظهر مهني. كما تشرح الكتب كيفية كتابة سيرة ذاتية جيدة، وهذا مهم جدًا.',
      'إذا احتجت إلى تعلم أشياء جديدة أو الحصول على مؤهلات إضافية، فيمكنني الحصول على معلومات عن الدورات في المكتبة أيضًا. لديهم بعض فهارس المدارس والكليات، وهناك أجهزة كمبيوتر يمكنني البحث من خلالها عن معلومات حول الدروس المسائية والصيفية. لم أكن أدرك أن هناك أشياء مختلفة كثيرة يمكنني دراستها! وبما أنني أرغب في السفر، فأنا متأكد من أنني سأحتاج إلى مهارات لغوية أفضل، لذلك يجب أن أحسن لغتي الإنجليزية وربما أتعلم لغة أخرى أيضًا. وإضافة إلى المعلومات عن الدورات، تحتوي المكتبة على الكثير من المواد الخاصة بها لمساعدتي على ذلك. ففيها كتب باللغة الإنجليزية، كما تسمح لك باستعارة أقراص DVD تحتوي على ألعاب وتمارين لتعلم اللغة. ولديهم معلومات عن اختبارات اللغة وكتب تدريبية تساعد على الاستعداد للامتحانات إذا كنت بحاجة إلى المؤهلات.',
      'ومن الأقسام المهمة الأخرى في المكتبة مجموعتها اليومية من الصحف والمجلات. أتصفحها للعثور على عروض العمل لأنه من الجيد معرفة الوظائف المتاحة. كما أطلع على مواقع وظائف مفيدة على الإنترنت. وقد أخبرني أمناء المكتبة بكيفية الحصول على معلومات عن الشركات. ويمكنني معرفة أماكنها وما تفعله وحجمها. وستكون هذه معلومات مفيدة عندما أقرر التقدم لوظيفة جديدة. وأنا متأكد من أن كل هذا البحث سيؤتي ثماره، وأنني سأحصل يومًا ما على وظيفة أحلامي. وسيكون كل ذلك بفضل المكتبة.'
    ],
    exerciseSets: [
      {
        id: '6p-u7-library-ab-a',
        source: 'activity_book',
        sourceTitle: 'Exercise A — True or False',
        sourcePages: 'كتاب النشاط ص 150',
        instruction: 'Decide if these statements are true or false.',
        instructionTranslation: 'قرر ما إذا كانت هذه الجمل صحيحة أم خاطئة.',
        items: [
          { id: 'library-a1', question: 'The writer wants to change jobs because he travels too much.', answer: 'False.' },
          { id: 'library-a2', question: 'At the library, the writer can learn how to apply for jobs.', answer: 'True.' },
          { id: 'library-a3', question: 'The writer can borrow DVDs from the library.', answer: 'True.' },
          { id: 'library-a4', question: 'The writer reads newspapers at the library to find out what is happening in the world.', answer: 'False.' },
          { id: 'library-a5', question: 'The writer has already applied to some companies.', answer: 'False.' }
        ]
      },
      {
        id: '6p-u7-library-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Choose the correct answer',
        sourcePages: 'كتاب النشاط ص 150',
        instruction: 'Choose the correct answer.',
        instructionTranslation: 'اختر الإجابة الصحيحة.',
        items: [
          { id: 'library-b1', question: 'astounded', options: ['disappointed', 'surprised', 'upset'], answer: 'surprised' },
          { id: 'library-b2', question: 'body language', options: ['how you sit and move', 'how you dress', 'how you talk'], answer: 'how you sit and move' },
          { id: 'library-b3', question: 'businesslike', options: ['professional', 'spontaneous', 'relaxed'], answer: 'professional' }
        ]
      },
      {
        id: '6p-u7-library-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Complete the sentences',
        sourcePages: 'كتاب النشاط ص 151',
        instruction: 'Complete the sentences about the text.',
        instructionTranslation: 'أكمل الجمل المتعلقة بالنص.',
        items: [
          { id: 'library-c1', question: 'The author enjoyed his job for a while. However, it wasn’t what he wanted to do for the rest of his life.', answer: 'it wasn’t what he wanted to do for the rest of his life' },
          { id: 'library-c2', question: 'The author didn’t know what to do next. So, he started coming to the Central Library of Baghdad regularly to look for information that might help him.', answer: 'to look for information that might help him' },
          { id: 'library-c3', question: 'While some jobs are very popular and you hear about them more often, there are lots of unusual jobs, and other jobs are appearing all the time because of technology.', answer: 'because of technology' },
          { id: 'library-c4', question: 'At the library, you can learn skills for looking for a job, such as how to find job vacancies and also how to prepare for and get through interviews.', answer: 'how to find job vacancies and prepare for interviews' },
          { id: 'library-c5', question: 'The author wants to travel. Therefore, he needs better language skills, especially English.', answer: 'better language skills, especially English' },
          { id: 'library-c6', question: 'The library has information about language tests. It also has a lot of its own materials to help learn languages.', answer: 'its own materials to help learn languages' }
        ]
      }
    ]
  },

  '6p-u8-wind-power': {
    id: '6p-u8-wind-power',
    titleAr: 'مصدر متجدد: طاقة الرياح',
    titleEn: 'A Renewable Resource: Wind Power',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'القطعة: ص 145؛ كتاب النشاط: ص 162؛ PDF ص 147 و149',
    originalText: [
      'The wind is a natural resource that people have been using for thousands of years. People have used it to power sailing boats all over the world, and it was used in Europe for a long time to grind corn into flour for bread. Now we have developed ways to use it to provide electricity for many other purposes.',
      'The main advantage of wind power is that it is clean energy. Wind power doesn’t produce any waste or greenhouse gases. Another advantage is that it is renewable. Wind is caused by changing temperatures in the air, and it will never run out. Finally, wind power is efficient. Because wind turbines are quite tall, the land under the turbines can still be used for agriculture.',
      'Wind power does have some disadvantages, however. People who live near the turbines find them unattractive and think they spoil the landscape. The turbines are also said to be quite noisy, although it is quite possible that new technologies may make them quieter in the future. There is also a lot of expense involved in installing and maintaining the wind turbines. Finally, wind turbines cannot supply all our energy needs, so we will always have to rely on additional sources of energy.'
    ],
    translation: [
      'الرياح مورد طبيعي يستخدمه الناس منذ آلاف السنين. استخدمها الناس لتسيير القوارب الشراعية في جميع أنحاء العالم، واستُخدمت في أوروبا مدة طويلة لطحن الذرة وتحويلها إلى دقيق لصنع الخبز. والآن طورنا طرقًا لاستخدامها في توفير الكهرباء لأغراض أخرى كثيرة.',
      'الميزة الرئيسية لطاقة الرياح هي أنها طاقة نظيفة. لا تنتج طاقة الرياح نفايات أو غازات دفيئة. ومن مزاياها الأخرى أنها متجددة. تنتج الرياح عن تغير درجات الحرارة في الهواء، ولن تنفد أبدًا. وأخيرًا، طاقة الرياح ذات كفاءة. ونظرًا إلى أن توربينات الرياح طويلة نسبيًا، فلا يزال من الممكن استخدام الأرض الواقعة تحتها للزراعة.',
      'لكن لطاقة الرياح بعض العيوب. فالناس الذين يعيشون بالقرب من التوربينات يجدونها غير جذابة ويعتقدون أنها تفسد المنظر الطبيعي. ويقال أيضًا إن التوربينات صاخبة إلى حد ما، مع أن من الممكن جدًا أن تجعلها التقنيات الجديدة أكثر هدوءًا في المستقبل. كما أن تركيب توربينات الرياح وصيانتها ينطويان على نفقات كبيرة. وأخيرًا، لا تستطيع توربينات الرياح توفير كل احتياجاتنا من الطاقة، لذلك سنظل مضطرين إلى الاعتماد على مصادر طاقة إضافية.'
    ],
    exerciseSets: [
      {
        id: '6p-u8-wind-power-ab-b',
        source: 'activity_book',
        sourceTitle: 'Exercise B — Short answers',
        sourcePages: 'كتاب النشاط ص 162',
        instruction: 'Read the article more carefully and write short answers to the questions.',
        instructionTranslation: 'اقرأ المقال بعناية أكبر واكتب إجابات قصيرة عن الأسئلة.',
        items: [
          { id: 'wind-b1', question: 'In what ways has wind power been used for thousands of years?', answer: 'To power sailing boats and grind corn into flour.' },
          { id: 'wind-b2', question: 'What is the most important aspect of wind power?', answer: 'It is clean energy.' },
          { id: 'wind-b3', question: 'Why does the author say wind power is efficient?', answer: 'Because the land under the turbines can still be used for agriculture.' },
          { id: 'wind-b4', question: 'What two complaints do people who live near wind turbines have about them?', answer: 'They are unattractive and noisy.' },
          { id: 'wind-b5', question: 'Why can’t we only use wind power to supply our energy?', answer: 'It can’t supply enough energy to meet our needs.' }
        ]
      },
      {
        id: '6p-u8-wind-power-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Compare the email and article',
        sourcePages: 'كتاب النشاط ص 162',
        instruction: 'Read the email more carefully. What disadvantages of wind turbines does the writer mention that the writer of the article doesn’t mention?',
        instructionTranslation: 'اقرأ البريد الإلكتروني بعناية. ما عيوب توربينات الرياح التي ذكرها الكاتب ولم يذكرها كاتب المقال؟',
        items: [
          { id: 'wind-c1', question: 'What disadvantage affects birds?', answer: 'They are a danger to birds.' },
          { id: 'wind-c2', question: 'What disadvantage affects fishing?', answer: 'They scare away fish.' },
          { id: 'wind-c3', question: 'What other danger at sea is mentioned?', answer: 'They may interfere with boat radars.' }
        ]
      }
    ]
  },

  '6p-u8-angry-reader': {
    id: '6p-u8-angry-reader',
    titleAr: 'رسالة قارئ غاضب',
    titleEn: 'An Angry Reader',
    status: 'verified',
    sourceTitle: 'ملزمة السادس 2027 — إعداد الأستاذ عمار غالب',
    sourcePages: 'الرسالة: ص 146؛ كتاب النشاط: ص 162؛ PDF ص 148–149',
    originalText: [
      'Dear Sir/Madam,',
      'I am writing about the government’s plan to build a wind farm off the coast. I think this plan is ridiculous. Wind turbines are incredibly ugly and really noisy, and I can understand why people don’t want them on land. But that is no reason to put them in the sea! People who live on the coast want a view of the ocean, not of a wind farm. Some scientists say wind power is clean energy and is good for the environment, but it’s certainly not good for the birds! Hundreds of them fly into wind turbines and die every year. They’re also bad for fishing. They scare away fish. I am a fisherman with a small boat, and I can’t go into very deep waters to catch fish. If this wind farm project is completed, I won’t be able to earn a living anymore, and I won’t be the only one. Finally, I’ve heard that wind turbines might interfere with radars on boats. If that’s true, the turbines could cause dangerous accidents at sea. Surely this project can’t go ahead!',
      'An angry reader.'
    ],
    translation: [
      'السيد/السيدة المحترم/ة،',
      'أكتب إليكم بشأن خطة الحكومة لإنشاء مزرعة رياح قبالة الساحل. أرى أن هذه الخطة سخيفة. توربينات الرياح قبيحة للغاية ومزعجة جدًا، ويمكنني فهم سبب عدم رغبة الناس في وجودها على اليابسة. لكن هذا ليس سببًا لوضعها في البحر! يريد الأشخاص الذين يعيشون على الساحل إطلالة على المحيط، لا على مزرعة رياح. يقول بعض العلماء إن طاقة الرياح طاقة نظيفة وجيدة للبيئة، لكنها بالتأكيد ليست جيدة للطيور! إذ تصطدم مئات الطيور بتوربينات الرياح وتموت كل عام. وهي أيضًا سيئة للصيد؛ لأنها تُخيف الأسماك وتُبعدها. أنا صياد أملك قاربًا صغيرًا، ولا أستطيع الذهاب إلى مياه عميقة جدًا لصيد الأسماك. وإذا اكتمل مشروع مزرعة الرياح هذا، فلن أتمكن من كسب لقمة عيشي بعد الآن، ولن أكون المتضرر الوحيد. وأخيرًا، سمعت أن توربينات الرياح قد تتداخل مع أجهزة الرادار في القوارب. وإذا كان ذلك صحيحًا، فقد تتسبب التوربينات في حوادث خطيرة في البحر. بالتأكيد، لا ينبغي المضي قدمًا في هذا المشروع!',
      'قارئ غاضب.'
    ],
    exerciseSets: [
      {
        id: '6p-u8-angry-reader-ab-c',
        source: 'activity_book',
        sourceTitle: 'Exercise C — Identify additional disadvantages',
        sourcePages: 'كتاب النشاط ص 162',
        instruction: 'Read the email more carefully. What disadvantages of wind turbines does the writer mention that the writer of the article doesn’t mention?',
        instructionTranslation: 'اقرأ البريد الإلكتروني بعناية أكبر. ما عيوب توربينات الرياح التي ذكرها الكاتب ولم يذكرها كاتب المقال؟',
        items: [
          { id: 'angry-c1', question: 'What disadvantage do wind turbines cause for birds?', answer: 'They are a danger to birds.' },
          { id: 'angry-c2', question: 'What do they do to fish?', answer: 'They scare away fish.' },
          { id: 'angry-c3', question: 'What might they interfere with on boats?', answer: 'They may interfere with boat radars.' }
        ]
      }
    ]
  }
};

export function getBookPassageContent(passageId: string): ReadingPassage | undefined {
  return READING_PASSAGE_CONTENT[passageId];
}

export function getBookPassageContentIds(): string[] {
  return Object.keys(READING_PASSAGE_CONTENT);
}
