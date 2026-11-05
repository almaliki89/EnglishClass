export interface MockQuestionItem {
  id: string;
  number: number;
  questionText: string;
  requirement?: string;
  type: 'mcq' | 'text' | 'choice' | 'blank' | 'match';
  options?: string[];
  correctAnswer: string;
  alternativeAnswers?: string[];
  explanation: string;
  maxScore: number;
}

export interface MockExamSection {
  id: string;
  sectionCode: string; // 'Q1-A', 'Q1-B', 'Q2-A', etc.
  sectionLetter?: string;
  title?: string;
  titleAr: string;
  titleEn: string;
  instructions?: string;
  instructionsAr: string;
  instructionsEn: string;
  totalMarks: number;
  unseenPassage?: string;
  boxedWords?: string[];
  items: MockQuestionItem[];
  matchingLeft?: { id: string; text: string }[];
  matchingRight?: { id: string; text: string }[];
}

export interface MockExamPaper {
  id: string;
  title: string;
  subtitle: string;
  session: string;
  year: string;
  totalMarks: number;
  durationMinutes: number;
  sections: MockExamSection[];
  essayOptions: {
    id: string;
    optionLetter: 'A' | 'B';
    titleEn: string;
    titleAr: string;
    prompt: string;
    suggestedModel: string;
    keywords: string[];
    maxScore: number;
  }[];
}

export const MOCK_EXAM_PAPERS: MockExamPaper[] = [
  {
    id: 'ministerial-2027-first-round',
    title: 'الامتحان الوزاري الشامل النموذجي - الدور الأول (اعتماداً على أسئلة 2020 إلى 2026)',
    subtitle: 'إشراف الأستاذ مصطفى تركي • الاعتماد الحصري على كتاب الطالب (Student\'s Book) وكتاب النشاط (Activity Book)',
    session: 'الدور الأول الوزاري (2020-2026)',
    year: '2020 - 2026',
    totalMarks: 100,
    durationMinutes: 180, // 3 hours
    sections: [
      // Q1 - SECTION A: UNSEEN PASSAGE (10 MARKS)
      {
        id: 'q1-a',
        sectionCode: 'Q1 (A)',
        titleAr: 'السؤال الأول (A): القطعة الخارجية الاستيعابية',
        titleEn: 'Reading Comprehension (Unseen Passage)',
        instructionsAr: 'اقرأ النص الخارجي التالي بعناية ثم أجب عن (5) من الأسئلة التالية (لكل نقطة درجتان):',
        instructionsEn: 'Read the following text carefully, then answer (5) of the questions below (2 marks each):',
        totalMarks: 10,
        unseenPassage: `Sleep is one of the most essential biological needs of the human body. Scientists have discovered that during deep sleep, the brain cleans itself from toxic proteins that accumulate during waking hours. Moreover, sleep plays a critical role in memory consolidation. When high school students study for exams, information is transferred from short-term memory to long-term memory predominantly while they sleep. 
Deprivation of sleep leads to a decrease in concentration, weakened immunity, and high stress levels. Most doctors recommend that adolescents and students sleep between 7 to 8 hours daily. Sleeping before midnight is considered twice as beneficial as sleeping in late mornings because it aligns with the body's natural circadian rhythm. Therefore, prioritizing quality sleep is as important as healthy diet and exercise for achieving academic success.`,
        items: [
          {
            id: 'q1a-1',
            number: 1,
            questionText: 'What happens to the brain during deep sleep?',
            requirement: 'Answer from the text',
            type: 'text',
            correctAnswer: 'The brain cleans itself from toxic proteins that accumulate during waking hours.',
            alternativeAnswers: ['It cleans toxic proteins', 'The brain cleans itself from toxic proteins'],
            explanation: 'حسب السطر الثاني من القطعة: during deep sleep, the brain cleans itself from toxic proteins.',
            maxScore: 2
          },
          {
            id: 'q1a-2',
            number: 2,
            questionText: 'How is studying information transferred to long-term memory?',
            requirement: 'Answer from the text',
            type: 'text',
            correctAnswer: 'Information is transferred from short-term memory to long-term memory predominantly while students sleep.',
            alternativeAnswers: ['While sleeping', 'Predominantly while students sleep', 'During sleep'],
            explanation: 'تنتقل المعلومات إلى الذاكرة طويلة المدى أثناء نوم الطالب.',
            maxScore: 2
          },
          {
            id: 'q1a-3',
            number: 3,
            questionText: 'Doctors recommend that students should sleep between ______ hours daily.',
            requirement: 'Complete the sentence',
            type: 'text',
            correctAnswer: '7 to 8',
            alternativeAnswers: ['7-8', 'seven to eight', '7 to 8 hours'],
            explanation: 'ذكر النص بوضوح أن المدة الموصى بها هي 7 إلى 8 ساعات يومياً.',
            maxScore: 2
          },
          {
            id: 'q1a-4',
            number: 4,
            questionText: 'Deprivation of sleep leads to high concentration and strong immunity.',
            requirement: 'Choose: True / False',
            type: 'choice',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'خطأ (False) لأن قلة النوم تؤدي إلى ضعف التركيز ونقص المناعة (decrease in concentration and weakened immunity).',
            maxScore: 2
          },
          {
            id: 'q1a-5',
            number: 5,
            questionText: 'Why is sleeping before midnight considered twice as beneficial?',
            requirement: 'Answer from the text',
            type: 'text',
            correctAnswer: 'Because it aligns with the body\'s natural circadian rhythm.',
            alternativeAnswers: ['It aligns with the natural circadian rhythm', 'Because of circadian rhythm'],
            explanation: 'لأنه يتوافق مع الإيقاع البيولوجي والساعة الطبيعية للجسم.',
            maxScore: 2
          },
          {
            id: 'q1a-6',
            number: 6,
            questionText: 'Give the passage a suitable title.',
            requirement: 'Write a suitable title',
            type: 'text',
            correctAnswer: 'The Importance of Sleep',
            alternativeAnswers: ['Sleep and Health', 'Why Sleep is Essential', 'Sleep for Students', 'Healthy Sleep'],
            explanation: 'أي عنوان يدور حول أهمية النوم وصحة الجسم يُعتبر صحيحاً وزارياً.',
            maxScore: 2
          }
        ]
      },

      // Q1 - SECTION B: TEXTBOOK PASSAGES (10 MARKS)
      {
        id: 'q1-b',
        sectionCode: 'Q1 (B)',
        titleAr: 'السؤال الأول (B): قطع الكتاب الاستيعابية',
        titleEn: 'Textbook Reading Passages',
        instructionsAr: 'أجب أو أكمل (5) من الأسئلة التالية مستعيناً بمعلومات قطع الكتاب المقررة (لكل نقطة درجتان):',
        instructionsEn: 'Answer or complete (5) of the following using information from your textbook (2 marks each):',
        totalMarks: 10,
        items: [
          {
            id: 'q1b-1',
            number: 1,
            questionText: 'What was Ammar trying to do when he had the terrible accident?',
            requirement: 'Unit 1: Ammar’s Story',
            type: 'text',
            correctAnswer: 'He decided to jump off the bridge into the lake.',
            alternativeAnswers: ['Jump off the bridge', 'Jump from a bridge into the water', 'Jumping off the bridge'],
            explanation: 'قرر عمار القفز من الجسر إلى البحيرة استعراضاً أمام أصدقائه.',
            maxScore: 2
          },
          {
            id: 'q1b-2',
            number: 2,
            questionText: 'A radar speed gun works by sending ______ towards a car.',
            requirement: 'Unit 2: Radar',
            type: 'text',
            correctAnswer: 'radio waves',
            alternativeAnswers: ['Radio waves', 'radio-waves'],
            explanation: 'يعمل جهاز الرادار بإرسال موجات راديوية (radio waves) باتجاه السيارة.',
            maxScore: 2
          },
          {
            id: 'q1b-3',
            number: 3,
            questionText: 'What is the most important quality in a conference interpreter like Samira?',
            requirement: 'Unit 3: Samira Al-Mahmoud',
            type: 'text',
            correctAnswer: 'To remain calm under pressure.',
            alternativeAnswers: ['Remaining calm under pressure', 'Stay calm under pressure', 'Calm under pressure'],
            explanation: 'الصفة الأهم للمترجم الفوري هي البقاء هادئاً تحت الضغط ونقل المعنى بسرعة.',
            maxScore: 2
          },
          {
            id: 'q1b-4',
            number: 4,
            questionText: 'Workaholics are people who think that their work is too important to leave in the hands of others.',
            requirement: 'Unit 5: Holidays - True / False',
            type: 'choice',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'صحيح (True)، مدمنو العمل يعتقدون أن عملهم مهم جداً ولا يمكن تركه بأيدي الآخرين.',
            maxScore: 2
          },
          {
            id: 'q1b-5',
            number: 5,
            questionText: 'Why do banks want to attract students?',
            requirement: 'Unit 6: Banking',
            type: 'text',
            correctAnswer: 'Because when they have jobs, they will keep their money with the same bank.',
            alternativeAnswers: ['To keep their money when they work', 'Because they will be future valuable customers'],
            explanation: 'لأن الطلاب عندما يتخرجون ويعملون سيحتفظون بحساباتهم وأموالهم في نفس البنك.',
            maxScore: 2
          },
          {
            id: 'q1b-6',
            number: 6,
            questionText: 'Wind power is renewable and does not produce any waste or greenhouse gases.',
            requirement: 'Unit 8: Green Energy - True / False',
            type: 'choice',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'صحيح (True)، طاقة الرياح طاقة متجددة ونظيفة لا تطلق غازات الاحتباس الحراري.',
            maxScore: 2
          }
        ]
      },

      // Q2 - SECTION A: GRAMMAR DO AS REQUIRED (20 MARKS)
      {
        id: 'q2-a',
        sectionCode: 'Q2 (A)',
        titleAr: 'السؤال الثاني (A): القواعد والوظائف اللغوية - افعل كما هو مطلوب',
        titleEn: 'Grammar and Functions: Do as Required',
        instructionsAr: 'أعد كتابة الجمل التالية مطبقاً القواعد بين القوسين. أجب عن (10) فقط (لكل نقطة درجتان):',
        instructionsEn: 'Re-write the sentences following the instructions in brackets. Choose (10) only (2 marks each):',
        totalMarks: 20,
        items: [
          {
            id: 'q2a-1',
            number: 1,
            questionText: 'She (not be) so slim, but she had an illness last year and lost a lot of weight.',
            requirement: 'Use the correct form of (used to)',
            type: 'text',
            correctAnswer: 'didn’t use to be',
            alternativeAnswers: ['didn\'t use to be', 'did not use to be'],
            explanation: 'نفي used to يكون: didn’t use to + فعل مجرد (be).',
            maxScore: 2
          },
          {
            id: 'q2a-2',
            number: 2,
            questionText: 'As he (run), he tripped and broke his ankle.',
            requirement: 'Correct the form of the verb in brackets',
            type: 'text',
            correctAnswer: 'was running',
            explanation: 'أداة الربط (As) يأتي بعدها ماضٍ مستمر (Past Continuous: was running).',
            maxScore: 2
          },
          {
            id: 'q2a-3',
            number: 3,
            questionText: 'If I (know) about his illness, I would have visited him in hospital.',
            requirement: 'Correct the verb to make a conditional sentence',
            type: 'text',
            correctAnswer: 'had known',
            explanation: 'بما أن جواب الشرط (would have visited) يمثل الحالة الشرطية الثالثة، ففعل الشرط يكون ماضياً تاماً (had known).',
            maxScore: 2
          },
          {
            id: 'q2a-4',
            number: 4,
            questionText: 'Somebody stole my passport yesterday. (Change into Passive Voice)',
            requirement: 'Rewrite in the passive voice',
            type: 'text',
            correctAnswer: 'My passport was stolen yesterday.',
            alternativeAnswers: ['My passport was stolen'],
            explanation: 'مبني للمجهول في الماضي البسيط: المفعول به (My passport) + was + التصريف الثالث (stolen).',
            maxScore: 2
          },
          {
            id: 'q2a-5',
            number: 5,
            questionText: 'I asked the mechanic, "How long will the repair take?"',
            requirement: 'Reported question: I asked the mechanic...',
            type: 'text',
            correctAnswer: 'I asked the mechanic how long the repair would take.',
            alternativeAnswers: ['how long the repair would take'],
            explanation: 'في السؤال المنقول: نضع أداة السؤال (how long) ثم الفاعل (the repair) ثم نحول will إلى would ثم الفعل المجرد.',
            maxScore: 2
          },
          {
            id: 'q2a-6',
            number: 6,
            questionText: 'You didn’t train hard for the marathon. That’s why you lost.',
            requirement: 'Express regret using (If only...)',
            type: 'text',
            correctAnswer: 'If only I had trained hard for the marathon.',
            alternativeAnswers: ['If only you had trained hard for the marathon', 'If only I had trained hard'],
            explanation: 'قاعدة الندم: If only + الفاعل + had + التصريف الثالث (trained) لأن الجملة الأصلية منفية.',
            maxScore: 2
          },
          {
            id: 'q2a-7',
            number: 7,
            questionText: 'My friend asked me to fix the car. (Use the correct form of "have" or "make")',
            requirement: 'Causative verb structure',
            type: 'text',
            correctAnswer: 'I had the car fixed.',
            explanation: 'الفاعل (I) + had + المفعول به (the car) + التصريف الثالث (fixed).',
            maxScore: 2
          },
          {
            id: 'q2a-8',
            number: 8,
            questionText: 'Salwa wants to be an interpreter. She speaks three languages.',
            requirement: 'Combine using a relative pronoun (who)',
            type: 'text',
            correctAnswer: 'Salwa, who speaks three languages, wants to be an interpreter.',
            alternativeAnswers: ['Salwa who speaks three languages wants to be an interpreter.'],
            explanation: 'جملة وصل معرفة/غير معرفة لعاقل: Salwa, who speaks three languages, wants to be an interpreter.',
            maxScore: 2
          },
          {
            id: 'q2a-9',
            number: 9,
            questionText: 'I bought a new computer last week. I (not try) it yet.',
            requirement: 'Put the verb into Present Perfect Simple',
            type: 'text',
            correctAnswer: 'haven’t tried',
            alternativeAnswers: ['haven\'t tried', 'have not tried'],
            explanation: 'وجود كلمة (yet) في النهاية يستوجب المضارع التام البسيط المنفي: haven’t tried.',
            maxScore: 2
          },
          {
            id: 'q2a-10',
            number: 10,
            questionText: 'You have studied hard. You will pass the final exam easily.',
            requirement: 'Express expectation using (should)',
            type: 'text',
            correctAnswer: 'You should pass the final exam easily.',
            alternativeAnswers: ['You have studied hard, so you should pass the final exam easily.'],
            explanation: 'أسلوب التوقع: استبدال will بـ should + فعل مجرد (pass).',
            maxScore: 2
          },
          {
            id: 'q2a-11',
            number: 11,
            questionText: 'I will learn Chinese because it is useful. (Rewrite using Future in the Past)',
            requirement: 'Future in the past: I decided...',
            type: 'text',
            correctAnswer: 'I decided I would learn Chinese because it was useful.',
            alternativeAnswers: ['I decided that I would learn Chinese', 'I would learn Chinese'],
            explanation: 'المستقبل في الماضي: تحويل will إلى would وتحويل is إلى was.',
            maxScore: 2
          },
          {
            id: 'q2a-12',
            number: 12,
            questionText: 'Can you (turn / down / the music)?',
            requirement: 'Put the phrasal verb in the correct order',
            type: 'text',
            correctAnswer: 'turn down the music',
            alternativeAnswers: ['turn the music down'],
            explanation: 'الاسم الصريح (the music) يمكن وضعه بعد حرف الجر أو قبله كلاهما صحيح.',
            maxScore: 2
          }
        ]
      },

      // Q2 - SECTION B: GRAMMAR CHOICES (10 MARKS)
      {
        id: 'q2-b',
        sectionCode: 'Q2 (B)',
        titleAr: 'السؤال الثاني (B): القواعد والوظائف - الاختيارات بين القوسين',
        titleEn: 'Grammar and Functions: Choices',
        instructionsAr: 'اختر الكلمة الصحيحة من بين القوسين. أجب عن (5) فقط (لكل نقطة درجتان):',
        instructionsEn: 'Choose the correct word between brackets. Choose (5) only (2 marks each):',
        totalMarks: 10,
        items: [
          {
            id: 'q2b-1',
            number: 1,
            questionText: 'It was the most (frightened / frightening) day of my entire life.',
            requirement: 'Choose the correct adjective',
            type: 'choice',
            options: ['frightened', 'frightening'],
            correctAnswer: 'frightening',
            explanation: 'اخترنا صفة (-ing) لأنها تصف اليوم والشيء المسبب للخوف (day).',
            maxScore: 2
          },
          {
            id: 'q2b-2',
            number: 2,
            questionText: 'We need a (few / little) more apples to make the pie.',
            requirement: 'Choose the correct quantifier',
            type: 'choice',
            options: ['few', 'little'],
            correctAnswer: 'few',
            explanation: 'كلمة (apples) اسم معدود جمع يأخذ (few).',
            maxScore: 2
          },
          {
            id: 'q2b-3',
            number: 3,
            questionText: 'You (mustn’t / needn’t) smoke in the hospital; it is strictly forbidden.',
            requirement: 'Choose modal verb of prohibition',
            type: 'choice',
            options: ['mustn’t', 'needn’t'],
            correctAnswer: 'mustn’t',
            explanation: 'المنع والتحريم القانوني الصارم (forbidden) يأخذ حتماً (mustn’t).',
            maxScore: 2
          },
          {
            id: 'q2b-4',
            number: 4,
            questionText: 'She has lived in Mosul (since / for) 2015.',
            requirement: 'Choose since or for',
            type: 'choice',
            options: ['since', 'for'],
            correctAnswer: 'since',
            explanation: 'تاريخ السنة المحددة (2015) يأخذ (since).',
            maxScore: 2
          },
          {
            id: 'q2b-5',
            number: 5,
            questionText: 'The car is being (repaired / repairing) in the workshop right now.',
            requirement: 'Passive continuous form',
            type: 'choice',
            options: ['repaired', 'repairing'],
            correctAnswer: 'repaired',
            explanation: 'في صيغة المبني للمجهول بعد being نضع دائماً التصريف الثالث (repaired).',
            maxScore: 2
          },
          {
            id: 'q2b-6',
            number: 6,
            questionText: 'The plane (leaves / will leave) at 6:00 pm tomorrow according to the timetable.',
            requirement: 'Future timetables schedule',
            type: 'choice',
            options: ['leaves', 'will leave'],
            correctAnswer: 'leaves',
            explanation: 'المواعيد وجداول السفر الثابتة (Timetables) يُعبر عنها بالمضارع البسيط (leaves).',
            maxScore: 2
          }
        ]
      },

      // Q3 - SECTION A: VOCABULARY DROPS / BOXED WORDS (10 MARKS)
      {
        id: 'q3-a',
        sectionCode: 'Q3 (A)',
        titleAr: 'السؤال الثالث (A): الإسقاطات - صندوق الكلمات الوزاري',
        titleEn: 'Vocabulary: Complete sentences with words from the box',
        instructionsAr: 'أكمل (5) من الجمل التالية بالكلمات المناسبة من الصندوق أعلاه (لكل نقطة درجتان):',
        instructionsEn: 'Complete (5) sentences with the appropriate words from the box (2 marks each):',
        totalMarks: 10,
        boxedWords: ['architect', 'vacant', 'renewable', 'maintain', 'allergic', 'bilingual'],
        items: [
          {
            id: 'q3a-1',
            number: 1,
            questionText: 'An ______ is a person who designs and plans buildings.',
            requirement: 'Drop from box',
            type: 'text',
            correctAnswer: 'architect',
            explanation: 'المهندس المعماري (architect) هو من يصمم المباني.',
            maxScore: 2
          },
          {
            id: 'q3a-2',
            number: 2,
            questionText: 'I can’t eat peanuts because I am ______ to them.',
            requirement: 'Drop from box',
            type: 'text',
            correctAnswer: 'allergic',
            explanation: 'لديه حساسية من الفول السوداني (allergic).',
            maxScore: 2
          },
          {
            id: 'q3a-3',
            number: 3,
            questionText: 'The hotel room has been ______ for three days; no one is staying in it.',
            requirement: 'Drop from box',
            type: 'text',
            correctAnswer: 'vacant',
            explanation: 'الغرفة شاغرة وفارغة (vacant).',
            maxScore: 2
          },
          {
            id: 'q3a-4',
            number: 4,
            questionText: 'Solar and wind energy are examples of ______ natural resources.',
            requirement: 'Drop from box',
            type: 'text',
            correctAnswer: 'renewable',
            explanation: 'طاقة متجددة ونظيفة (renewable).',
            maxScore: 2
          },
          {
            id: 'q3a-5',
            number: 5,
            questionText: 'You need to ______ a minimum balance in your account to avoid fees.',
            requirement: 'Drop from box',
            type: 'text',
            correctAnswer: 'maintain',
            explanation: 'الحفاظ على حد أدنى من الرصيد (maintain a minimum balance).',
            maxScore: 2
          },
          {
            id: 'q3a-6',
            number: 6,
            questionText: 'Samira is ______ because her parents are from Iraq and she grew up in Britain.',
            requirement: 'Drop from box',
            type: 'text',
            correctAnswer: 'bilingual',
            explanation: 'تتحدث لغتين بطلاقة (bilingual).',
            maxScore: 2
          }
        ]
      },

      // Q3 - SECTION B: MATCHING & COLLOCATIONS (5 MARKS)
      {
        id: 'q3-b',
        sectionCode: 'Q3 (B)',
        titleAr: 'السؤال الثالث (B): التوصيلات والمتلازمات اللفظية',
        titleEn: 'Matching and Collocations',
        instructionsAr: 'طابق الكلمات أو العبارات من القائمة (A) بما يناسبها من القائمة (B) (درجة لكل نقطة):',
        instructionsEn: 'Match words from List A with their corresponding items in List B (1 mark each):',
        totalMarks: 5,
        matchingLeft: [
          { id: '1', text: '1. security' },
          { id: '2', text: '2. direct' },
          { id: '3', text: '3. pay' },
          { id: '4', text: '4. speed' },
          { id: '5', text: '5. packed' },
        ],
        matchingRight: [
          { id: 'a', text: 'a. interest (فوائد)' },
          { id: 'b', text: 'b. camera (كاميرا مراقبة)' },
          { id: 'c', text: 'c. lunch (غداء معلب)' },
          { id: 'd', text: 'd. limit (الحد الأقصى للسرعة)' },
          { id: 'e', text: 'e. traffic (تنظيم حركة السير)' },
        ],
        items: [
          {
            id: 'q3b-1',
            number: 1,
            questionText: '1. security',
            requirement: 'Match with List B',
            type: 'choice',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'b',
            explanation: 'security camera (كاميرا مراقبة أمنية).',
            maxScore: 1
          },
          {
            id: 'q3b-2',
            number: 2,
            questionText: '2. direct',
            requirement: 'Match with List B',
            type: 'choice',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'e',
            explanation: 'direct traffic (ينظم حركة السير).',
            maxScore: 1
          },
          {
            id: 'q3b-3',
            number: 3,
            questionText: '3. pay',
            requirement: 'Match with List B',
            type: 'choice',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'a',
            explanation: 'pay interest (يدفع فوائد مصرفية).',
            maxScore: 1
          },
          {
            id: 'q3b-4',
            number: 4,
            questionText: '4. speed',
            requirement: 'Match with List B',
            type: 'choice',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'd',
            explanation: 'speed limit (الحد الأقصى للسرعة).',
            maxScore: 1
          },
          {
            id: 'q3b-5',
            number: 5,
            questionText: '5. packed',
            requirement: 'Match with List B',
            type: 'choice',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'c',
            explanation: 'packed lunch (وجبة طعام معلبة).',
            maxScore: 1
          }
        ]
      },

      // Q3 - SECTION C: SPELLING & MORPHOLOGY (5 MARKS)
      {
        id: 'q3-c',
        sectionCode: 'Q3 (C)',
        titleAr: 'السؤال الثالث (C): الإملاء والمشتقات والشواذ',
        titleEn: 'Spelling and Morphology',
        instructionsAr: 'أكمل الفراغات التالية وفق المثال المعطى (أجب عن 5 فقط، درجة لكل نقطة):',
        instructionsEn: 'Complete the blanks with the correct words according to the example (1 mark each):',
        totalMarks: 5,
        items: [
          {
            id: 'q3c-1',
            number: 1,
            questionText: 'direct, indirect ; polite, ______',
            requirement: 'Prefix of negation',
            type: 'text',
            correctAnswer: 'impolite',
            explanation: 'الصفات المبدوءة بحرف p تأخذ البادئة im- فتصبح impolite.',
            maxScore: 1
          },
          {
            id: 'q3c-2',
            number: 2,
            questionText: 'ankle, joint ; knee, ______',
            requirement: 'Joints classification',
            type: 'text',
            correctAnswer: 'joint',
            explanation: 'الركبة (knee) مفصل (joint) في الساق.',
            maxScore: 1
          },
          {
            id: 'q3c-3',
            number: 3,
            questionText: 'attract, attractive ; peace, ______',
            requirement: 'Adjective suffix',
            type: 'text',
            correctAnswer: 'peaceful',
            explanation: 'الصفة من peace هي peaceful.',
            maxScore: 1
          },
          {
            id: 'q3c-4',
            number: 4,
            questionText: 'catch, caught ; spend, ______',
            requirement: 'Past participle / past',
            type: 'text',
            correctAnswer: 'spent',
            explanation: 'الماضي والتصريف الثالث للفعل spend هو spent.',
            maxScore: 1
          },
          {
            id: 'q3c-5',
            number: 5,
            questionText: 'exp., experience ; co., ______',
            requirement: 'Official abbreviation',
            type: 'text',
            correctAnswer: 'company',
            explanation: 'اختصار كلمة company هو co.',
            maxScore: 1
          },
          {
            id: 'q3c-6',
            number: 6,
            questionText: 'legal, illegal ; moral, ______',
            requirement: 'Prefix of negation',
            type: 'text',
            correctAnswer: 'immoral',
            explanation: 'الصفات المبدوءة بحرف m تأخذ البادئة im- فتصبح immoral.',
            maxScore: 1
          }
        ]
      },

      // Q4: LITERATURE FOCUS (10 MARKS)
      {
        id: 'q4',
        sectionCode: 'Q4',
        titleAr: 'السؤال الرابع: الأدب الوزاري المقرّر (كبرياء وتحامل لجين أوستن وكما تشاء لشكسبير)',
        titleEn: 'Literature Focus: Pride and Prejudice (Jane Austen) & As You Like It (Shakespeare)',
        instructionsAr: 'أجب أو أكمل (5) من الأسئلة التالية مستعيناً بنصوص الأدب المقررة في الملزمة (لكل نقطة درجتان):',
        instructionsEn: 'Answer or complete (5) of the following literature questions from the syllabus (2 marks each):',
        totalMarks: 10,
        items: [
          {
            id: 'q4-1',
            number: 1,
            questionText: 'Who wrote the celebrated novel "Pride and Prejudice"?',
            requirement: 'Author Identification',
            type: 'text',
            correctAnswer: 'Jane Austen',
            alternativeAnswers: ['Jane Austen.', 'The novelist Jane Austen'],
            explanation: 'مؤلفة رواية «كبرياء وتحامل» هي الكاتبة الإنجليزية جين أوستن (Jane Austen).',
            maxScore: 2
          },
          {
            id: 'q4-2',
            number: 2,
            questionText: 'In "Pride and Prejudice", Elizabeth Bennet re-evaluates her prejudice against Mr. Darcy after reading his ______.',
            requirement: 'Plot detail completion',
            type: 'text',
            correctAnswer: 'letter',
            alternativeAnswers: ['explanatory letter', 'private letter', 'letter.'],
            explanation: 'أعادت إليزابيث تقييم نظرتها وحكمها المسبق بعد قراءة رسالة السيد دارسي التوضيحية (letter).',
            maxScore: 2
          },
          {
            id: 'q4-3',
            number: 3,
            questionText: 'Where does most of the action take place in Shakespeare\'s pastoral comedy "As You Like It"?',
            requirement: 'Setting identification',
            type: 'text',
            correctAnswer: 'In the Forest of Arden',
            alternativeAnswers: ['Forest of Arden', 'The Forest of Arden', 'In Arden forest'],
            explanation: 'تدور معظم أحداث مسرحية «كما تشاء» في غابة آردن (Forest of Arden).',
            maxScore: 2
          },
          {
            id: 'q4-4',
            number: 4,
            questionText: 'In "As You Like It", Rosalind disguises herself as a young shepherd named ______.',
            requirement: 'Character disguise',
            type: 'text',
            correctAnswer: 'Ganymede',
            alternativeAnswers: ['ganymede', 'Ganymede.'],
            explanation: 'تنكرت البطلة روزاليند بزي شاب راعٍ يُدعى غانيميد (Ganymede).',
            maxScore: 2
          },
          {
            id: 'q4-5',
            number: 5,
            questionText: 'Jane Austen was born in Steventon, England in the year ______.',
            requirement: 'Author biography',
            type: 'text',
            correctAnswer: '1775',
            alternativeAnswers: ['in 1775', '1775.'],
            explanation: 'ولدت الروائية جين أوستن عام 1775.',
            maxScore: 2
          },
          {
            id: 'q4-6',
            number: 6,
            questionText: 'What is the famous opening line spoken by Jaques in "As You Like It"? "All the world\'s a ______"',
            requirement: 'Famous quotation completion',
            type: 'text',
            correctAnswer: 'stage',
            alternativeAnswers: ['stage,', 'stage.', 'Stage'],
            explanation: 'مقولة جاك الشهيرة: "كل العالم مسرح" (All the world\'s a stage).',
            maxScore: 2
          }
        ]
      }
    ],

    // Q5: WRITTEN COMPOSITION / ESSAYS (20 MARKS)
    essayOptions: [
      {
        id: 'essay-opt-a',
        optionLetter: 'A',
        titleEn: 'Cigarette Advertising Should Be Illegal',
        titleAr: 'إعلانات السجائر يجب أن تكون غير قانونية وممنوعة (الوحدة الأولى)',
        prompt: 'Write a short article of 100 to 120 words for a health magazine about why cigarette advertising should be banned.',
        suggestedModel: `Cigarette advertising is extremely harmful to public health, especially for young people and teenagers. Every day, tobacco commercials display smoking as an attractive, fashionable, and successful lifestyle. However, medical research has conclusively proven that smoking leads to severe diseases such as lung cancer, heart problems, and respiratory illnesses.
Moreover, passive smoking harms non-smokers and children who inhale toxic smoke in public places. When advertisements are placed on billboards and social media, teenagers are easily influenced to try smoking without realizing the dangerous addictive effects of nicotine.
In conclusion, governments should completely ban all forms of cigarette advertising to protect younger generations and build a healthier, smoke-free society.`,
        keywords: ['harmful', 'public health', 'lung cancer', 'passive smoking', 'ban', 'society'],
        maxScore: 20
      },
      {
        id: 'essay-opt-b',
        optionLetter: 'B',
        titleEn: 'The Benefits of Studying English in the UK',
        titleAr: 'فوائد دراسة اللغة الإنكليزية في بريطانيا (الوحدة الثالثة)',
        prompt: 'Write an essay of 100 to 120 words advising an Iraqi student on why studying English in the UK is the best choice.',
        suggestedModel: `Studying English in the United Kingdom is one of the most rewarding educational experiences for any student. First of all, you will be fully immersed in an authentic English-speaking environment. You will hear and practice the language all day long in shops, public transport, and university halls.
In addition, living with a British host family allows you to practice conversational English naturally and experience the local culture and customs firsthand. British universities and language institutes also provide top-quality education with highly qualified native teachers.
To sum up, although studying in the UK might be costly, the immense improvement in your fluency and self-confidence will open incredible future career opportunities for you.`,
        keywords: ['immersive', 'environment', 'host family', 'fluency', 'career opportunities'],
        maxScore: 20
      }
    ]
  }
];
