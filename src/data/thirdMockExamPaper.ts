import { MockExamPaper } from './mockExamPapers';

/**
 * الامتحان الوزاري الشامل للصف الثالث المتوسط
 * مطابق حرفياً للنموذج الوزاري الرسمي المشروح في ملزمة:
 * «النموذجية في اللغة الانكليزية للصف الثالث المتوسط 2025 - الأستاذ عمار غالب» (الصفحتان 2 و 3 / 4 و 5)
 */
export const THIRD_INTERMEDIATE_MOCK_PAPER: MockExamPaper = {
  id: '3rd-ministerial-mock-official-2025',
  title: 'الامتحان الوزاري الشامل النموذجي - الثالث المتوسط (أسئلة 2020 إلى 2026)',
  subtitle: 'إشراف الأستاذ مصطفى تركي • الاعتماد الحصري على كتاب الطالب (Student\'s Book) وكتاب النشاط (Activity Book)',
  session: 'الدور الوزاري الشامل (2020-2026)',
  year: '2020 - 2026',
  totalMarks: 100,
  durationMinutes: 180,
  sections: [
    // ========================================================
    // Q1 - SECTION A: UNSEEN PASSAGE (10 MARKS)
    // ========================================================
    {
      id: '3rd-q1-a',
      sectionCode: 'Q1-A',
      titleAr: 'السؤال الأول (أ): القطعة الخارجية غير المرئية (ألبرت أينشتاين)',
      titleEn: 'Question 1 (A): Reading Comprehension - Unseen Passage',
      instructionsAr: 'اقرأ القطعة بعناية ثم أجب عن (5) فقط من الأسئلة التالية (لكل نقطة درجتان):',
      instructionsEn: 'Read this text carefully, then answer (Five) of the following questions (2 marks each):',
      totalMarks: 10,
      unseenPassage: "Albert Einstein was a famous physicist. He developed the special and general theories of relativity, and won the Nobel Prize for physics in 1921. Two experiences deeply affected his childhood. The first one was at age five when he saw a compass for the first time in his life. He wondered how invisible forces could make the compass needle move! The second happened at age (12) when he discovered a book of geometry, he read it with great excitement. He called it his “sacred little geometry book.”",
      items: [
        {
          id: '3rd-q1a-1',
          number: 1,
          questionText: 'What did Einstein develop?',
          requirement: 'Comprehension',
          type: 'text',
          correctAnswer: 'He developed the special and general theories of relativity.',
          alternativeAnswers: ['The special and general theories of relativity', 'Special and general theories of relativity'],
          explanation: 'السطر الأول يذكر: He developed the special and general theories of relativity.',
          maxScore: 2
        },
        {
          id: '3rd-q1a-2',
          number: 2,
          questionText: 'What happened with him at age twelve?',
          requirement: 'Comprehension',
          type: 'text',
          correctAnswer: 'He discovered a book of geometry and read it with great excitement.',
          alternativeAnswers: ['He discovered a book of geometry', 'He discovered geometry book'],
          explanation: 'في سن الثانية عشرة اكتشف كتاب الهندسة وقرأه بحماس شديد.',
          maxScore: 2
        },
        {
          id: '3rd-q1a-3',
          number: 3,
          questionText: 'What affected his childhood?',
          requirement: 'Comprehension',
          type: 'text',
          correctAnswer: 'Two experiences deeply affected his childhood: seeing a compass at age five and discovering a book of geometry at age twelve.',
          alternativeAnswers: ['Two experiences', 'Two experiences deeply affected his childhood'],
          explanation: 'تجربتان أثرتا في طفولته بعمق: رؤية البوصلة في سن الخامسة وكتاب الهندسة في سن الثانية عشرة.',
          maxScore: 2
        },
        {
          id: '3rd-q1a-4',
          number: 4,
          questionText: 'When did he win the Nobel Prize?',
          requirement: 'Comprehension',
          type: 'text',
          correctAnswer: 'In 1921.',
          alternativeAnswers: ['1921', 'He won the Nobel Prize in 1921'],
          explanation: 'فاز بجائزة نوبل في الفيزياء عام 1921.',
          maxScore: 2
        },
        {
          id: '3rd-q1a-5',
          number: 5,
          questionText: 'Was the Nobel Prize for physics or geometry?',
          requirement: 'Choice',
          type: 'text',
          correctAnswer: 'For physics.',
          alternativeAnswers: ['Physics', 'It was for physics'],
          explanation: 'نال جائزة نوبل في الفيزياء (for physics).',
          maxScore: 2
        },
        {
          id: '3rd-q1a-6',
          number: 6,
          questionText: 'What did he call the book of geometry?',
          requirement: 'Comprehension',
          type: 'text',
          correctAnswer: 'He called it his “sacred little geometry book.”',
          alternativeAnswers: ['Sacred little geometry book', 'His sacred little geometry book'],
          explanation: 'سماه: sacred little geometry book (كتاب الهندسة الصغير المقدس).',
          maxScore: 2
        }
      ]
    },

    // ========================================================
    // Q1 - SECTION B: TRUE / FALSE ON UNSEEN PASSAGE (5 MARKS)
    // ========================================================
    {
      id: '3rd-q1-b',
      sectionCode: 'Q1-B',
      titleAr: 'السؤال الأول (ب): صح أو خطأ عن القطعة الخارجية (5 درجات)',
      titleEn: 'Question 1 (B): Describe whether the following sentences are True or False',
      instructionsAr: 'أجب بـ (True) أو (False) عن (5) فقط من الجمل التالية (درجة واحدة لكل نقطة):',
      instructionsEn: 'Describe whether (Five) of the following sentences are True or False (1 mark each):',
      totalMarks: 5,
      items: [
        {
          id: '3rd-q1b-1',
          number: 1,
          questionText: 'He read a book of Maths at the age (12).',
          requirement: 'True/False',
          type: 'choice',
          options: ['False', 'True'],
          correctAnswer: 'False',
          explanation: 'خطأ؛ قرأ كتاب هندسة (geometry) وليس رياضيات عامة (maths).',
          maxScore: 1
        },
        {
          id: '3rd-q1b-2',
          number: 2,
          questionText: 'At age (5), he saw a compass for the first time.',
          requirement: 'True/False',
          type: 'choice',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'صح؛ رأى البوصلة لأول مرة في حياته في سن الخامسة.',
          maxScore: 1
        },
        {
          id: '3rd-q1b-3',
          number: 3,
          questionText: 'The two experiences affected his childhood deeply.',
          requirement: 'True/False',
          type: 'choice',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'صح؛ النص يذكر حرفياً: Two experiences deeply affected his childhood.',
          maxScore: 1
        },
        {
          id: '3rd-q1b-4',
          number: 4,
          questionText: 'He wondered how the compass needle move.',
          requirement: 'True/False',
          type: 'choice',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'صح؛ تعجب كيف للقوى غير المرئية أن تحرك إبرة البوصلة.',
          maxScore: 1
        },
        {
          id: '3rd-q1b-5',
          number: 5,
          questionText: 'Albert Einstein was a famous doctor.',
          requirement: 'True/False',
          type: 'choice',
          options: ['False', 'True'],
          correctAnswer: 'False',
          explanation: 'خطأ؛ كان عالم فيزياء شهيراً (famous physicist) وليس طبيباً (doctor).',
          maxScore: 1
        },
        {
          id: '3rd-q1b-6',
          number: 6,
          questionText: 'Einstein had theories about reading and writing.',
          requirement: 'True/False',
          type: 'choice',
          options: ['False', 'True'],
          correctAnswer: 'False',
          explanation: 'خطأ؛ طور نظريتي النسبية العامة والخاصة وليس نظريات قراءة وكتابة.',
          maxScore: 1
        }
      ]
    },

    // ========================================================
    // Q1 - SECTION C: TEXTBOOK PASSAGES (10 MARKS)
    // ========================================================
    {
      id: '3rd-q1-c',
      sectionCode: 'Q1-C',
      titleAr: 'السؤال الأول (ج): قطع ونصوص الكتاب المقررة (10 درجات)',
      titleEn: 'Question 1 (C): Information from your Textbook',
      instructionsAr: 'أجب أو أكمل (5) فقط من الأسئلة التالية مستعيناً بنصوص الكتاب (لكل نقطة درجتان):',
      instructionsEn: 'Answer or complete (Five) of the following questions using information from your textbook (2 marks each):',
      totalMarks: 10,
      items: [
        {
          id: '3rd-q1c-1',
          number: 1,
          questionText: 'The highest temperature in the world, 58 degrees centigrade, was recorded in ______ in 1972.',
          requirement: 'Completion',
          type: 'text',
          correctAnswer: 'Libya',
          alternativeAnswers: ['in Libya', 'libya'],
          explanation: 'سجلت أعلى درجة حرارة في العالم 58 درجة مئوية في ليبيا عام 1972 (قطعة ليبيا والسودان - ص 125).',
          maxScore: 2
        },
        {
          id: '3rd-q1c-2',
          number: 2,
          questionText: 'Houses in the marshlands are built at the waterside or on ______',
          requirement: 'Completion',
          type: 'text',
          correctAnswer: 'artificial reed islands.',
          alternativeAnswers: ['artificial reed islands', 'reed islands', 'artificial islands'],
          explanation: 'تبنى منازل عرب الأهوار على حافة المياه أو على جزر القصب الاصطناعية (ص 76).',
          maxScore: 2
        },
        {
          id: '3rd-q1c-3',
          number: 3,
          questionText: 'Abu Ali Al Hasan Ibn Al Haitham, known to the west as ______',
          requirement: 'Completion',
          type: 'text',
          correctAnswer: 'Alhazen',
          alternativeAnswers: ['Alhazen (The Physicist)', 'The Physicist', 'Alhazen'],
          explanation: 'عرف أبو علي الحسن بن الهيثم في الغرب باسم Alhazen أو The Physicist (ص 109).',
          maxScore: 2
        },
        {
          id: '3rd-q1c-4',
          number: 4,
          questionText: 'The other standard features for the new Panther 3.0D is GPS. (True / False)',
          requirement: 'True/False',
          type: 'choice',
          options: ['False', 'True'],
          correctAnswer: 'False',
          explanation: 'خطأ؛ نظام الملاحة GPS يعتبر من الميزات الإضافية (Extra features) وليس القياسية الثابتة (ص 11 و 12).',
          maxScore: 2
        },
        {
          id: '3rd-q1c-5',
          number: 5,
          questionText: 'What is a hobby?',
          requirement: 'Definition',
          type: 'text',
          correctAnswer: 'Something you do in your spare time for pleasure and relaxation.',
          alternativeAnswers: ['Something you do in your spare time', 'An activity done for pleasure in spare time'],
          explanation: 'الهواية: شيء تفعله في وقت فراغك من أجل المتعة والاسترخاء (ص 144).',
          maxScore: 2
        },
        {
          id: '3rd-q1c-6',
          number: 6,
          questionText: 'Whose idea was it to hold the Asian games?',
          requirement: 'Comprehension',
          type: 'text',
          correctAnswer: 'India (the idea came from India).',
          alternativeAnswers: ['India', 'The idea came from India'],
          explanation: 'جاءت فكرة إقامة الألعاب الآسيوية لأول مرة من الهند عام 1951 (ص 123).',
          maxScore: 2
        }
      ]
    },

    // ========================================================
    // Q2 - SECTION A: GRAMMAR & FUNCTIONS - DO AS REQUIRED (10 MARKS)
    // ========================================================
    {
      id: '3rd-q2-a',
      sectionCode: 'Q2-A',
      titleAr: 'السؤال الثاني (أ): القواعد والوظائف اللغوية - افعل ما هو مطلوب (10 درجات)',
      titleEn: 'Question 2 (A): Grammar & Functions - Do as required',
      instructionsAr: 'أجب عن (5) فقط مما يأتي حسب ما هو مطلوب بين الأقواس (لكل نقطة درجتان):',
      instructionsEn: 'Do (Five) of the following as required between brackets (2 marks each):',
      totalMarks: 10,
      items: [
        {
          id: '3rd-q2a-1',
          number: 1,
          questionText: 'Where can you find wild flamingo? (Change into passive)',
          requirement: 'Passive Voice',
          type: 'text',
          correctAnswer: 'Where can wild flamingo be found?',
          alternativeAnswers: ['Where can wild flamingos be found?'],
          explanation: 'في السؤال مع can: كلمة السؤال + can + المفعول به + be + التصريف الثالث (be found).',
          maxScore: 2
        },
        {
          id: '3rd-q2a-2',
          number: 2,
          questionText: 'The president (read) his emails when he got the invitation to visit Iraq. (Correct)',
          requirement: 'Past Continuous',
          type: 'text',
          correctAnswer: 'was reading',
          alternativeAnswers: ['The president was reading his emails when he got the invitation to visit Iraq.'],
          explanation: 'الجملة قبل when تمثل الحدث المستمر الطويل بالماضي: was reading.',
          maxScore: 2
        },
        {
          id: '3rd-q2a-3',
          number: 3,
          questionText: 'brown / Sally / curly / has / hair. (Re-order the sentence)',
          requirement: 'Sentence & Adjective Order',
          type: 'text',
          correctAnswer: 'Sally has curly brown hair.',
          alternativeAnswers: ['Sally has got curly brown hair.'],
          explanation: 'ترتيب الصفات: الشكل (curly) ثم اللون (brown) ثم الاسم (hair).',
          maxScore: 2
        },
        {
          id: '3rd-q2a-4',
          number: 4,
          questionText: 'I (see / never) a crocodile. (Present Perfect)',
          requirement: 'Present Perfect',
          type: 'text',
          correctAnswer: 'I have never seen a crocodile.',
          alternativeAnswers: ['have never seen'],
          explanation: 'صيغة المضارع التام مع I: have + never + التصريف الثالث seen.',
          maxScore: 2
        },
        {
          id: '3rd-q2a-5',
          number: 5,
          questionText: 'The arts team were performing very well. (Make negative)',
          requirement: 'Negative Sentence',
          type: 'text',
          correctAnswer: 'The arts team weren’t performing very well.',
          alternativeAnswers: ['The arts team were not performing very well.'],
          explanation: 'نحول were إلى were not (weren’t).',
          maxScore: 2
        },
        {
          id: '3rd-q2a-6',
          number: 6,
          questionText: '(watch a film). (Expressing preferences using: I’d rather)',
          requirement: 'Preferences',
          type: 'text',
          correctAnswer: 'I’d rather watch a film.',
          alternativeAnswers: ["I'd rather watch a film."],
          explanation: 'قاعدة I’d rather يأتي بعدها فعل مجرد خالي من أي إضافة: I’d rather watch a film.',
          maxScore: 2
        }
      ]
    },

    // ========================================================
    // Q2 - SECTION B: GRAMMAR - CHOOSE CORRECT CHOICE (10 MARKS)
    // ========================================================
    {
      id: '3rd-q2-b',
      sectionCode: 'Q2-B',
      titleAr: 'السؤال الثاني (ب): قواعد - اختيارات بين الأقواس (10 درجات)',
      titleEn: 'Question 2 (B): Grammar - Choose the correct choice',
      instructionsAr: 'اختر الجواب الصحيح لـ (5) فقط من الجمل التالية (لكل نقطة درجتان):',
      instructionsEn: 'Choose the correct choice for (Five) of the following (2 marks each):',
      totalMarks: 10,
      items: [
        {
          id: '3rd-q2b-1',
          number: 1,
          questionText: 'The match is (will / going to) start at 7 o’clock.',
          requirement: 'Future with going to',
          type: 'choice',
          options: ['going to', 'will'],
          correctAnswer: 'going to',
          explanation: 'وجود is قبل القوس يفرض استخدام going to (is going to start).',
          maxScore: 2
        },
        {
          id: '3rd-q2b-2',
          number: 2,
          questionText: 'TV presenter have to speak (clearly / clear) so that people can understand them.',
          requirement: 'Adverbs of manner',
          type: 'choice',
          options: ['clearly', 'clear'],
          correctAnswer: 'clearly',
          explanation: 'لوصف طريقة التحدث (فعل speak) نستخدم ظرف الحال المنتهي بـ ly: clearly.',
          maxScore: 2
        },
        {
          id: '3rd-q2b-3',
          number: 3,
          questionText: 'How about (to go / going) to the mall?',
          requirement: 'Suggestions',
          type: 'choice',
          options: ['going', 'to go'],
          correctAnswer: 'going',
          explanation: 'بعد صيغة الاقتراح How about يأتي دائماً فعل مضاف له ing: going.',
          maxScore: 2
        },
        {
          id: '3rd-q2b-4',
          number: 4,
          questionText: '(12:10). It’s ______ (twelve ten / ten twelve)',
          requirement: 'Telling Time',
          type: 'choice',
          options: ['twelve ten', 'ten twelve'],
          correctAnswer: 'twelve ten',
          explanation: 'في الطريقة المباشرة نذكر الساعات أولاً 12 (twelve) ثم الدقائق 10 (ten).',
          maxScore: 2
        },
        {
          id: '3rd-q2b-5',
          number: 5,
          questionText: 'Traditional boats (are used / used) as transport.',
          requirement: 'Passive Voice',
          type: 'choice',
          options: ['are used', 'used'],
          correctAnswer: 'are used',
          explanation: 'القوارب مفعول به لا تستخدم نفسها، فالصيغة مبني للمجهول: are used.',
          maxScore: 2
        },
        {
          id: '3rd-q2b-6',
          number: 6,
          questionText: 'Ahmed gave his mother and father a present. He gave it to (they / them) yesterday.',
          requirement: 'Object Pronouns',
          type: 'choice',
          options: ['them', 'they'],
          correctAnswer: 'them',
          explanation: 'بعد حرف الجر to نستخدم ضمير المفعول به them وليس فاعل they.',
          maxScore: 2
        }
      ]
    },

    // ========================================================
    // Q3 - SECTION A: VOCABULARY FILL FROM LIST (5 MARKS)
    // ========================================================
    {
      id: '3rd-q3-a',
      sectionCode: 'Q3-A',
      titleAr: 'السؤال الثالث (أ): مفردات وإسقاطات في الجمل (5 درجات)',
      titleEn: 'Question 3 (A): Vocabulary - Fill in blanks from the list',
      instructionsAr: 'اختر الكلمة المناسبة من الصندوق لكل فراغ مما يأتي (درجة واحدة لكل نقطة):',
      instructionsEn: 'Choose the correct word from the list to each sentence (1 mark each):',
      totalMarks: 5,
      boxedWords: ['drops', 'prize', 'need', 'grow', 'concentrating', 'wheelchair'],
      items: [
        {
          id: '3rd-q3a-1',
          number: 1,
          questionText: 'Elephant ______ very big, but it takes many years.',
          requirement: 'Vocabulary Blank',
          type: 'choice',
          options: ['grow', 'drops', 'prize', 'need', 'concentrating', 'wheelchair'],
          correctAnswer: 'grow',
          explanation: 'تنمو الفيلة لتصبح ضخمة جداً (Elephants grow very big).',
          maxScore: 1
        },
        {
          id: '3rd-q3a-2',
          number: 2,
          questionText: 'My brother ______ things and falls over.',
          requirement: 'Vocabulary Blank',
          type: 'choice',
          options: ['drops', 'grow', 'prize', 'need', 'concentrating', 'wheelchair'],
          correctAnswer: 'drops',
          explanation: 'يسقط الأشياء ويتعثر (drops things and falls over).',
          maxScore: 1
        },
        {
          id: '3rd-q3a-3',
          number: 3,
          questionText: 'Leena is ______ very hard on her maths homework.',
          requirement: 'Vocabulary Blank',
          type: 'choice',
          options: ['concentrating', 'drops', 'prize', 'grow', 'need', 'wheelchair'],
          correctAnswer: 'concentrating',
          explanation: 'تركز بجد على واجب الرياضيات (concentrating).',
          maxScore: 1
        },
        {
          id: '3rd-q3a-4',
          number: 4,
          questionText: 'He was so pleased when he won first ______ in poetry competition.',
          requirement: 'Vocabulary Blank',
          type: 'choice',
          options: ['prize', 'drops', 'grow', 'need', 'concentrating', 'wheelchair'],
          correctAnswer: 'prize',
          explanation: 'فاز بالجائزة الأولى في مسابقة الشعر (first prize).',
          maxScore: 1
        },
        {
          id: '3rd-q3a-5',
          number: 5,
          questionText: 'If someone is unable to walk easily, they may need a ______',
          requirement: 'Vocabulary Blank',
          type: 'choice',
          options: ['wheelchair', 'prize', 'drops', 'grow', 'need', 'concentrating'],
          correctAnswer: 'wheelchair',
          explanation: 'يحتاج لكرسي متحرك (wheelchair).',
          maxScore: 1
        },
        {
          id: '3rd-q3a-6',
          number: 6,
          questionText: 'We don’t ______ to get tickets in advance.',
          requirement: 'Vocabulary Blank',
          type: 'choice',
          options: ['need', 'wheelchair', 'prize', 'drops', 'grow', 'concentrating'],
          correctAnswer: 'need',
          explanation: 'لا نحتاج للحصول على تذاكر مسبقاً (don’t need).',
          maxScore: 1
        }
      ]
    },

    // ========================================================
    // Q3 - SECTION B: VOCABULARY - CHOOSE CORRECT CHOICE (5 MARKS)
    // ========================================================
    {
      id: '3rd-q3-b',
      sectionCode: 'Q3-B',
      titleAr: 'السؤال الثالث (ب): مفردات واختيارات بين الأقواس (5 درجات)',
      titleEn: 'Question 3 (B): Choose the correct choice',
      instructionsAr: 'اختر الكلمة الصحيحة لـ (5) فقط من الجمل التالية (درجة واحدة لكل نقطة):',
      instructionsEn: 'Choose the correct choice for (Five) of the following (1 mark each):',
      totalMarks: 5,
      items: [
        {
          id: '3rd-q3b-1',
          number: 1,
          questionText: 'News about art, plays, paintings, etc. ______ (fashion / Arts)',
          requirement: 'Definition Choice',
          type: 'choice',
          options: ['Arts', 'fashion'],
          correctAnswer: 'Arts',
          explanation: 'أخبار الفنون والمسرحيات واللوحات تسمى فنون (Arts).',
          maxScore: 1
        },
        {
          id: '3rd-q3b-2',
          number: 2,
          questionText: 'Samara’s brother is ______ than her. (older / younger)',
          requirement: 'Textbook Knowledge',
          type: 'choice',
          options: ['younger', 'older'],
          correctAnswer: 'younger',
          explanation: 'شقيق سمارة أصغر منها سناً (younger brother).',
          maxScore: 1
        },
        {
          id: '3rd-q3b-3',
          number: 3,
          questionText: 'Conversations between famous people ______ (quiz show / talk show)',
          requirement: 'Definition Choice',
          type: 'choice',
          options: ['talk show', 'quiz show'],
          correctAnswer: 'talk show',
          explanation: 'المحادثات والحوارات بين المشاهير تسمى برنامج حواري (talk show).',
          maxScore: 1
        },
        {
          id: '3rd-q3b-4',
          number: 4,
          questionText: 'The fastest bird in the world ______ (falcon / flamingo)',
          requirement: 'Textbook Fact',
          type: 'choice',
          options: ['falcon', 'flamingo'],
          correctAnswer: 'falcon',
          explanation: 'أسرع طائر في العالم هو الصقر (falcon).',
          maxScore: 1
        },
        {
          id: '3rd-q3b-5',
          number: 5,
          questionText: 'Things that a country produces and sells to other countries ______ (exports / imports)',
          requirement: 'Definition Choice',
          type: 'choice',
          options: ['exports', 'imports'],
          correctAnswer: 'exports',
          explanation: 'السلع التي ينتجها البلد ويبيعها للخارج تسمى صادرات (exports).',
          maxScore: 1
        },
        {
          id: '3rd-q3b-6',
          number: 6,
          questionText: 'I am ______ a picture for the school competition. (painting / watching)',
          requirement: 'Collocation Choice',
          type: 'choice',
          options: ['painting', 'watching'],
          correctAnswer: 'painting',
          explanation: 'مع الصورة (picture) نستخدم يرسم (painting a picture).',
          maxScore: 1
        }
      ]
    },

    // ========================================================
    // Q3 - SECTION C: MATCHING LIST A & LIST B (5 MARKS)
    // ========================================================
    {
      id: '3rd-q3-c',
      sectionCode: 'Q3-C',
      titleAr: 'السؤال الثالث (ج): توصيل ومطابقة المفردات والكلمات المركبة (5 درجات)',
      titleEn: 'Question 3 (C): Match the words in List (A) with List (B)',
      instructionsAr: 'طابق الكلمات في القائمة (A) بما يناسبها في القائمة (B) لـ (5) فقط (درجة واحدة لكل نقطة):',
      instructionsEn: 'Match the words in List (A) with the suitable words in List (B) (1 mark each):',
      totalMarks: 5,
      items: [
        {
          id: '3rd-q3c-1',
          number: 1,
          questionText: '1. Kick',
          requirement: 'Matching',
          type: 'choice',
          options: ['c. ball', 'a. time', 'b. bag', 'd. medal', 'e. a business', 'f. a magazine'],
          correctAnswer: 'c. ball',
          explanation: 'Kick a ball (يركل كرة).',
          maxScore: 1
        },
        {
          id: '3rd-q3c-2',
          number: 2,
          questionText: '2. Spend',
          requirement: 'Matching',
          type: 'choice',
          options: ['a. time', 'b. bag', 'c. ball', 'd. medal', 'e. a business', 'f. a magazine'],
          correctAnswer: 'a. time',
          explanation: 'Spend time (يقضي وقتاً).',
          maxScore: 1
        },
        {
          id: '3rd-q3c-3',
          number: 3,
          questionText: '3. Read',
          requirement: 'Matching',
          type: 'choice',
          options: ['f. a magazine', 'a. time', 'b. bag', 'c. ball', 'd. medal', 'e. a business'],
          correctAnswer: 'f. a magazine',
          explanation: 'Read a magazine (يقرأ مجلة).',
          maxScore: 1
        },
        {
          id: '3rd-q3c-4',
          number: 4,
          questionText: '4. Air',
          requirement: 'Matching',
          type: 'choice',
          options: ['b. bag', 'a. time', 'c. ball', 'd. medal', 'e. a business', 'f. a magazine'],
          correctAnswer: 'b. bag',
          explanation: 'Air bag (كيس هوائي للأمان).',
          maxScore: 1
        },
        {
          id: '3rd-q3c-5',
          number: 5,
          questionText: '5. Run',
          requirement: 'Matching',
          type: 'choice',
          options: ['e. a business', 'a. time', 'b. bag', 'c. ball', 'd. medal', 'f. a magazine'],
          correctAnswer: 'e. a business',
          explanation: 'Run a business (يدير عملاً تجارياً).',
          maxScore: 1
        },
        {
          id: '3rd-q3c-6',
          number: 6,
          questionText: '6. Win',
          requirement: 'Matching',
          type: 'choice',
          options: ['d. medal', 'a. time', 'b. bag', 'c. ball', 'e. a business', 'f. a magazine'],
          correctAnswer: 'd. medal',
          explanation: 'Win a medal (يفوز بميدالية).',
          maxScore: 1
        }
      ]
    },

    // ========================================================
    // Q3 - SECTION D: PUNCTUATION (5 MARKS)
    // ========================================================
    {
      id: '3rd-q3-d',
      sectionCode: 'Q3-D',
      titleAr: 'السؤال الثالث (د): التنقيط وعلامات الترقيم (5 درجات)',
      titleEn: 'Question 3 (D): Punctuation',
      instructionsAr: 'أعد كتابة الجملة التالية باستخدام الحروف الكبيرة وعلامات التنقيط الصحيحة (5 درجات):',
      instructionsEn: 'Re-write the sentence below using correct capital letters and punctuation marks (5 marks):',
      totalMarks: 5,
      items: [
        {
          id: '3rd-q3d-1',
          number: 1,
          questionText: 'batool and i cant travel to turkey next november.',
          requirement: 'Punctuation',
          type: 'text',
          correctAnswer: 'Batool and I can’t travel to Turkey next November.',
          alternativeAnswers: ["Batool and I can't travel to Turkey next November."],
          explanation: 'التغييرات الخمسة: 1. Batool (بداية واسم علم) 2. I (ضمير المتكلم) 3. can’t (فاصلة الاختصار) 4. Turkey (اسم بلد) 5. November (اسم شهر) والنقطة بالنهاية.',
          maxScore: 5
        }
      ]
    },

    // ========================================================
    // Q4 - SECTION A: STORY TIME (10 MARKS)
    // ========================================================
    {
      id: '3rd-q4-a',
      sectionCode: 'Q4-A',
      titleAr: 'السؤال الرابع (أ): قصص المنهج المقررة - Story Time (10 درجات)',
      titleEn: 'Question 4 (A): Story Time',
      instructionsAr: 'أجب أو أكمل (5) فقط من الجمل التالية (لكل نقطة درجتان):',
      instructionsEn: 'Answer or complete (Five) of the following sentences (2 marks each):',
      totalMarks: 10,
      items: [
        {
          id: '3rd-q4a-1',
          number: 1,
          questionText: 'What is the name of the new book Kareem wants to buy?',
          requirement: 'Story Time - Unit 1',
          type: 'text',
          correctAnswer: 'Islands of Salt.',
          alternativeAnswers: ['Islands of Salt', 'islands of salt'],
          explanation: 'اسم المجموعة الشعرية الجديدة هو: جزر الملح (Islands of Salt) للشاعر مظفر النواب (ص 26).',
          maxScore: 2
        },
        {
          id: '3rd-q4a-2',
          number: 2,
          questionText: 'What happened to the hungry lion at the end of the deer story?',
          requirement: 'Story Time - Deer Story',
          type: 'text',
          correctAnswer: 'It was killed by the hunter’s arrow after the hunter was blinded by lightning.',
          alternativeAnswers: ['It was killed by an arrow', 'The arrow struck the lion', 'It died by the arrow'],
          explanation: 'أصيب الأسد بسهم الصياد الطائش بعد أن ضرب البرق وأعمى الصياد فمات الأسد.',
          maxScore: 2
        },
        {
          id: '3rd-q4a-3',
          number: 3,
          questionText: 'Every year, Al Sabah newspaper makes a ______ to two young students.',
          requirement: 'Story Time - Unit 5',
          type: 'text',
          correctAnswer: 'special offer',
          alternativeAnswers: ['special offer', 'offer'],
          explanation: 'تقدم جريدة الصباح عرضاً خاصاً (special offer) لطالبين محليين للعمل كمراسلين في الصيف (ص 99).',
          maxScore: 2
        },
        {
          id: '3rd-q4a-4',
          number: 4,
          questionText: 'The alumni went to the house of their professor by ______',
          requirement: 'Story Time - Cup of Coffee',
          type: 'text',
          correctAnswer: 'rickshaw.',
          alternativeAnswers: ['rickshaw', 'by rickshaw', 'a rickshaw'],
          explanation: 'ذهب خريجو الجامعة لمنزل أستاذهم في حيدر آباد بواسطة عربة الريكشا (rickshaw).',
          maxScore: 2
        },
        {
          id: '3rd-q4a-5',
          number: 5,
          questionText: 'When Kareem has got the big prize, he felt a surge of ______',
          requirement: 'Story Time - Unit 1',
          type: 'text',
          correctAnswer: 'happiness.',
          alternativeAnswers: ['happiness', 'joy'],
          explanation: 'شعر كريم بموجة غامرة من السعادة (surge of happiness) لأن صبره قد كوفئ (ص 25).',
          maxScore: 2
        },
        {
          id: '3rd-q4a-6',
          number: 6,
          questionText: 'The deer finds a safe place in the field to give birth. (True / False)',
          requirement: 'Story Time - Deer Story',
          type: 'choice',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'صح؛ بحثت الغزالة عن مكان عشبي بعيد وآمن لتضع وليدها (ص 5).',
          maxScore: 2
        }
      ]
    },

    // ========================================================
    // Q4 - SECTION B: SPELLING & WORD FORMS (10 MARKS)
    // ========================================================
    {
      id: '3rd-q4-b',
      sectionCode: 'Q4-B',
      titleAr: 'السؤال الرابع (ب): الإملاء وتحويل الكلمات (10 درجات)',
      titleEn: 'Question 4 (B): Spelling - Write the missing words',
      instructionsAr: 'اكتب الكلمات المفقودة لـ (5) فقط من الآتي (لكل نقطة درجتان):',
      instructionsEn: 'Write the missing words for (Five) of the following (2 marks each):',
      totalMarks: 10,
      items: [
        {
          id: '3rd-q4b-1',
          number: 1,
          questionText: 'old, new; uncomfortable, ______',
          requirement: 'Opposite',
          type: 'text',
          correctAnswer: 'comfortable',
          alternativeAnswers: ['comfortable'],
          explanation: 'معاكس uncomfortable هو comfortable (ص 24).',
          maxScore: 2
        },
        {
          id: '3rd-q4b-2',
          number: 2,
          questionText: 'want, wanted; get, ______',
          requirement: 'Past Tense',
          type: 'text',
          correctAnswer: 'got',
          alternativeAnswers: ['got'],
          explanation: 'الماضي الشاذ للفعل get هو got (ص 41).',
          maxScore: 2
        },
        {
          id: '3rd-q4b-3',
          number: 3,
          questionText: 'clean, cleanest; interesting, ______',
          requirement: 'Superlative',
          type: 'text',
          correctAnswer: 'most interesting',
          alternativeAnswers: ['the most interesting', 'most interesting'],
          explanation: 'التفضيل للصفة متعددة المقاطع interesting هو most interesting (ص 59).',
          maxScore: 2
        },
        {
          id: '3rd-q4b-4',
          number: 4,
          questionText: 'Egypt, Egyptian; England, ______',
          requirement: 'Nationality',
          type: 'text',
          correctAnswer: 'English',
          alternativeAnswers: ['english'],
          explanation: 'الجنسية من England هي English (ص 113).',
          maxScore: 2
        },
        {
          id: '3rd-q4b-5',
          number: 5,
          questionText: 'we, us; she, ______',
          requirement: 'Object Pronoun',
          type: 'text',
          correctAnswer: 'her',
          alternativeAnswers: ['her'],
          explanation: 'ضمير المفعول به من she هو her (ص 72).',
          maxScore: 2
        },
        {
          id: '3rd-q4b-6',
          number: 6,
          questionText: 'eat, eating; make, ______',
          requirement: 'Ing Adding Rule',
          type: 'text',
          correctAnswer: 'making',
          alternativeAnswers: ['making'],
          explanation: 'نحذف حرف e الصامت عند إضافة ing فتصبح making (ص 91).',
          maxScore: 2
        }
      ]
    }
  ],

  // ========================================================
  // Q5: WRITTEN COMPOSITION / ESSAYS (15 MARKS)
  // ========================================================
  essayOptions: [
    {
      id: '3rd-essay-opt-a',
      optionLetter: 'A',
      titleEn: 'A Career of a Real Person (Noor Sabri)',
      titleAr: 'سيرة شخص حقيقي: نور صبري (الوحدة السادسة)',
      prompt: 'Write a paragraph about a career of a real person. Write about: name, present job, history/career, and plans for the future.',
      suggestedModel: `Noor Sabri is an Iraqi football player. He was born in 1984 in Baquba. He played football with the national Iraqi team. After he had finished school, he achieved his dream to be a footballer.
He worked and practised a lot to be a good player. He enjoys playing football and making his family and people happy. His plan for the future is to be a coach. He is on his way to be a successful coach.`,
      keywords: ['football player', 'Baquba', 'national team', 'practised', 'coach'],
      maxScore: 15
    },
    {
      id: '3rd-essay-opt-b',
      optionLetter: 'B',
      titleEn: 'A TV Programme About Elephants',
      titleAr: 'برنامج تلفزيوني عن الفيلة (الوحدة الخامسة)',
      prompt: 'Write a paragraph about a TV programme you watched. Describe what it was about and why it was interesting or funny.',
      suggestedModel: `I watched a good programme with my family last night. It was a really interesting programme about elephants. It was also funny.
There were some elephants by a pool and they were very thirsty. There was a cameraman filming and a reporter talking to the camera. One of the elephants blew water into the air. The cameraman and the reporter got wet. We laughed a lot.`,
      keywords: ['interesting', 'elephants', 'pool', 'thirsty', 'cameraman', 'reporter', 'wet'],
      maxScore: 15
    }
  ]
};

