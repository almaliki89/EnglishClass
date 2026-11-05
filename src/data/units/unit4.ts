import { Unit } from '../../types';

export const UNIT_4: Unit = {
  id: 4,
  number: 4,
  titleAr: "الوحدة الرابعة: المراجعة الشاملة وتقنيات اللياقة البدنية",
  titleEn: "Unit 4: Comprehensive Review & Fitness Tech",
  description: "مراجعة أزمنة الماضي البسيط والمستمر، قطعة تقنيات اللياقة الذكية (Fitness Tech)، مطابقة نصائح النجاح المهني، التدريب المركز على الندم والحالة الشرطية الثالثة، مع اختبار الوحدة الرابعة الشامل وتمارين الإملاء.",
  accentColor: "from-purple-600 to-violet-600",
  bgGradient: "bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200",
  lessons: [
    {
      id: "u4-l1",
      unitId: 4,
      lessonNumber: 1,
      titleAr: "الدرس الأول: شركة راشد ورنا للأزياء (Rashid & Rana Designs)",
      titleEn: "Lesson 1: Rashid & Rana Designs & Past Tenses Review",
      category: "reading",
      summary: "قطعة شركة راشد ورنا للأزياء (ص 42 كتاب الطالب وص 76 كتاب النشاط): تأسيس الشركة، تصميم القمصان والجينز، التصدير لدول الخليج والمملكة المتحدة، المنافسة الصينية، وأسبوع الموضة في لندن، مع مراجعة الماضي البسيط والمستمر.",
      grammarRuleFormula: "Key Vocabulary:\ndesigner, marketing, personal assistant, business, profit, sales, compete, contracts, flight\nGrammar: Past Simple vs Past Continuous (when, while, as)",
      detailedContent: [
        "قطعة الكتاب الرسمية: تصاميم راشد ورنا (Rashid & Rana Designs - ص 42 كتاب الطالب):",
        "1. التأسيس والنشاط: أسس راشد ورنا شركتهما في أيلول الماضي لإنتاج القمصان وبناطيل الجينز (shirts and jeans).",
        "2. الأدوار: رنا هي المصممة (designer)، راشد يتولى التسويق (marketing)، وابنة عمهما سليمة تعمل مساعدة شخصية لراشد (personal assistant).",
        "3. المبيعات والأرباح: استثمروا أموالاً كثيرة في المشروع، ولم يحققوا أرباحاً بعد لكن المبيعات جيدة جداً، ويصدرون إلى الإمارات وعمان والبحرين والمملكة المتحدة.",
        "4. المنافسة: يصعب منافسة السوق الصينية لإنتاجها ملابس رخيصة، لكن تصاميم راشد ورنا مبتكرة وأصلية ومحبوبة في الخليج.",
        "5. أسبوع لندن للموضة: سافروا للبنان والمغرب لاختيار أقمشة الحرير والقطن، ثم إلى لندن وعرضوا قمصانهم في أسبوع الموضة ووقعوا عقوداً مع ثلاثة متاجر كبرى.",
        "6. مطار هيثرو: التقوا بزميلتهم القديمة منى شاكر وزوجها غسان أحمد وابنهما كمال أثناء انتظار رحلة العودة لبغداد.",
        "تمرين A و C ص 76 - 77 كتاب النشاط (الماضي البسيط والمستمر):",
        "- Rana wrote an email to Bidor to tell her about her new clothes company.",
        "- She and her brother, Rashid, set up the company last September.",
        "- When I met her at the airport, Muna was wearing a long blue dress.",
        "- We were driving to the beach when we heard a loud crash."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تمرين الإسقاطات في كتاب الطالب ص 42 يأتي بالوزاري للكلمات: (designer, marketing, assistant, business, profit, sales, compete, contracts, flight).",
        "سؤال وزاري: What does the company produce? It produces shirts and jeans."
      ],
      commonMistakes: [
        "الخلط بين compete (ينافس) و complete (يكمل).",
        "نسيان أن رنا هي المصممة (designer) وراشد هو المسوق (marketing)."
      ],
      examples: [
        {
          en: "Rashid & Rana Designs produce shirts and jeans.",
          ar: "تنتج شركة تصاميم راشد ورنا القمصان وبناطيل الجينز.",
          highlight: "shirts and jeans",
          note: "ص 42 كتاب الطالب"
        },
        {
          en: "We were driving to the beach when we heard a loud crash.",
          ar: "كنا نقود السيارة نحو الشاطئ عندما سمعنا صوتاً مدوياً.",
          highlight: "were driving ... heard",
          note: "تمرين C ص 77 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u4-l1-ex1",
          question: "Rana is the _________ and Rashid does all the marketing in their new company.",
          options: ["designer", "driver", "pilot", "accountant"],
          correctAnswer: "designer",
          explanation: "رنا هي مصممة الأزياء (designer) بينما راشد يتولى التسويق.",
          type: "mcq",
          ministerialYear: "ص 42 كتاب الطالب"
        },
        {
          id: "u4-l1-ex2",
          question: "When I met her at the airport, Muna _________ (wear) a long blue dress.",
          options: ["was wearing", "wore", "is wearing", "wears"],
          correctAnswer: "was wearing",
          explanation: "الحدث المستمر في الماضي مع when: was wearing.",
          type: "mcq",
          ministerialYear: "تمرين C ص 77"
        }
      ]
    },
    {
      id: "u4-l2",
      unitId: 4,
      lessonNumber: 2,
      titleAr: "الدرس الثاني: قطعة تقنيات اللياقة البدنية (Fitness Tech)",
      titleEn: "Lesson 2: Fitness Technology & Smart Gyms",
      category: "reading",
      summary: "قطعة استيعاب أحدث التقنيات الرقمية في ممارسة الرياضة: الساعات الذكية، تتبع ضربات القلب، السعرات الحرارية، مرايا اللياقة التفاعلية، والذكاء الاصطناعي في التمرين.",
      grammarRuleFormula: "Fitness Tech Key Concepts:\n- Smart watches & trackers: monitor heart rate, sleep quality and burned calories\n- Smart fitness mirrors: interactive screens providing instant trainer feedback\n- AI workout apps: tailor personalized routines to personal fitness goals",
      detailedContent: [
        "قطعة تقنيات اللياقة البدنية (ص 84 - 86 من ملزمة الأستاذ مصطفى تركي):",
        "- كيف غيرت التكنولوجيا الحديثة عالم اللياقة والتمارين البدنية في السنوات الأخيرة؟",
        "- أجهزة التتبع القابلة للارتداء (Wearable fitness trackers): تقيس نبضات القلب، عدد الخطوات، جودة النوم، وحرق السعرات الحرارية بدقة عالية.",
        "- المرايا الذكية (Smart mirrors): شاشات متطورة تعكس صورة المتدرب وتوفر له توجيهات فورية لتصحيح وضعية التمرين وحركات الجسد لمنع الإصابات.",
        "- تطبيقات الذكاء الاصطناعي (AI fitness apps): تصمم برامج تدريبية مخصصة تناسب أهداف كل شخص وتتكيف مع تقدمه الرياضي.",
        "- الهدف الرئيسي: تشجيع الناس على ممارسة النشاط البدني المنتظم ومكافحة نمط الحياة الخامل والسمنة."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة اللياقة والتقنية الذكية من قطع الوحدة الرابعة الحديثة المضافة لمنهاج 2027.",
        "احفظ المفردات التقنية: monitor heart rate, burn calories, smart mirrors, personalized routines."
      ],
      commonMistakes: [
        "الخلط بين وظيفة ساعة التتبع (wearable tracker) ووظيفة المرآة الذكية (fitness mirror)."
      ],
      examples: [
        {
          en: "Fitness trackers help users monitor their daily steps and heart rate.",
          ar: "تساعد أجهزة تتبع اللياقة المستخدمين على مراقبة خطواتهم ونبضات قلوبهم اليومية.",
          highlight: "monitor daily steps and heart rate",
          note: "ص 85"
        }
      ],
      exercises: [
        {
          id: "u4-l2-ex1",
          question: "What do wearable fitness trackers monitor?",
          options: [
            "Daily steps, heart rate, sleep and burned calories.",
            "Car engine temperature and speed.",
            "Weather forecasts for the month.",
            "Bank account transactions."
          ],
          correctAnswer: "Daily steps, heart rate, sleep and burned calories.",
          explanation: "تقيس أجهزة التتبع الخطوات والنبض وجودة النوم والسعرات الحرارية.",
          type: "mcq",
          ministerialYear: "منهاج 2027 الحديث"
        }
      ]
    },
    {
      id: "u4-l3",
      unitId: 4,
      lessonNumber: 3,
      titleAr: "الدرس الثالث: كيف تصبح الأفضل! (How to be the best!)",
      titleEn: "Lesson 3: How to be the best! (Sentence Matching)",
      category: "vocabulary",
      summary: "مطابقة أنصاف الجمل الشرطية والنصائح المهنية والشخصية الرسمية من كتاب الطالب ص 44 وكتاب النشاط ص 80.",
      grammarRuleFormula: "Conditional & Advice Matching:\nIf you want a successful restaurant -> you must employ a good chef\nIf you want to be successful in business -> you have to be ambitious",
      detailedContent: [
        "مطابقة أنصاف الجمل الرسمية من كتاب الطالب ص 44 (تمرين 1):",
        "1. If you want to have a successful restaurant -> you must employ a good chef.",
        "2. If you want to make a good impression at a job interview -> you should dress well and be punctual.",
        "3. If you want to have a successful party -> you should make sure there is plenty of good food.",
        "4. If you want to be successful in business -> you have to be ambitious.",
        "5. If you want to be a good secretary -> you need good computer skills.",
        "6. If you want to be healthy -> you must do a lot of exercise.",
        "7. If you work for an airline -> you don't have to pay for plane tickets.",
        "8. When you are in a meeting -> you should turn your mobile off.",
        "تعاريف وتطبيقات كتاب النشاط ص 84:",
        "- ambitious: determined to be successful (طموح).",
        "- punctual: always arriving on time (منضبط بالمواعيد).",
        "- personal assistant: a person who works as a secretary for another (مساعد شخصي).",
        "- stationary bike: a fitness machine that looks like a bicycle (دراجة ثابتة للتمرين)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي هذه الجمل الثمانية نصاً في السؤال الثالث فرع B (توصيلات) في الامتحان الوزاري."
      ],
      commonMistakes: [
        "الخلط بين punctual (دقيق في المواعيد) و personal.",
        "توصيل نصيحة المقابلة مع أمر لا يخصها."
      ],
      examples: [
        {
          en: "If you want to make a good impression at a job interview, you should dress well and be punctual.",
          ar: "إذا أردت ترك انطباع جيد في مقابلة العمل، يجب أن ترتدي ملابس أنيقة وتكون دقيقاً في المواعيد.",
          highlight: "dress well and be punctual",
          note: "ص 44 كتاب الطالب"
        },
        {
          en: "When you are in a meeting, you should turn your mobile off.",
          ar: "عندما تكون في اجتماع، ينبغي إغلاق هاتفك المحمول.",
          highlight: "turn your mobile off",
          note: "ص 44 كتاب الطالب"
        }
      ],
      exercises: [
        {
          id: "u4-l3-ex1",
          question: "If you want to have a successful restaurant, you must _________.",
          options: [
            "employ a good chef",
            "turn your mobile off",
            "do a lot of exercise",
            "have good computer skills"
          ],
          correctAnswer: "employ a good chef",
          explanation: "المطابقة الوزارية الصحيحة: توظيف طاهٍ ماهر (employ a good chef) - ص 44 كتاب الطالب.",
          type: "mcq",
          ministerialYear: "ص 44 كتاب الطالب"
        },
        {
          id: "u4-l3-ex2",
          question: "When you are in a meeting, you should _________.",
          options: [
            "turn your mobile off",
            "employ a good chef",
            "dress well and be punctual",
            "do a lot of exercise"
          ],
          correctAnswer: "turn your mobile off",
          explanation: "عندما تكون في اجتماع يجب إغلاق الهاتف المحمول (turn your mobile off) - ص 44 كتاب الطالب.",
          type: "mcq",
          ministerialYear: "ص 44 كتاب الطالب"
        }
      ]
    },
    {
      id: "u4-l4",
      unitId: 4,
      lessonNumber: 4,
      titleAr: "الدرس الرابع: لو فقط... التعبير عن الندم والشرطية الثالثة (If only ...)",
      titleEn: "Lesson 4: Regrets with 'If only / I wish' & Third Conditional",
      category: "grammar",
      summary: "درس كتاب الطالب ص 45 وكتاب النشاط ص 82 - 83: التعبير عن الندم وحالات فؤاد سليم وخديجة ناصر ونزار إبراهيم باستخدام (I wish / If only + Past Perfect) والربط مع الشرطية الثالثة (Third Conditional).",
      grammarRuleFormula: "Regrets Formula:\nI wish / If only + Subject + had / hadn't + p.p.\nThird Conditional Result Link:\nWe'd have won if we'd trained harder.",
      detailedContent: [
        "حالات الندم الرسمية من كتاب الطالب ص 45:",
        "1. فؤاد سليم (Fouad Salim - كابتن فريق كرة القدم في بغداد خسر مباراة كبرى):",
        "   - 'I wish I'd asked Hisham to be in the team.' (تمني)",
        "   - 'We'd have won if I'd asked Hisham to be in the team.' (شرطية ثالثة)",
        "   - 'I wish I'd made them train harder.'",
        "   - 'If only Hasan hadn't got a red card.'",
        "2. خديجة ناصر (Khadija Nasser - مقابلة عمل في شركة نفط ولم تُقبل):",
        "   - 'I wish I'd arrived earlier and been more relaxed.'",
        "   - 'I'd have got the job if I hadn't been so nervous.'",
        "   - 'If only I hadn't done so badly on the typing test.'",
        "3. نزار إبراهيم (Nizar Ibrahim - تحطيم دراجة صديقه النارية):",
        "   - 'I wish I hadn't gone so fast down that hill.'",
        "   - 'If only I'd seen that hole in the road.'",
        "   - 'This wouldn't have happened if I'd slowed down.'",
        "تمرين B ص 83 كتاب النشاط (صياغة الندم والشرطية الثالثة):",
        "- My dad didn't check the oil, and the car broke down. -> The car wouldn't have broken down if he had checked the oil.",
        "- Qais didn't make a copy of his essay, so he had to write it all again. -> If Qais had made a copy, he wouldn't have had to write it again."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي جمل فؤاد وخديجة ونزار نصاً بالوزاري في سؤال القواعد (سؤال 2 فرع A) بصيغة: Rewrite using (I wish) or (If only)."
      ],
      commonMistakes: [
        "استخدام didn't بدلاً من hadn't في جمل الندم.",
        "نسيان تحويل الفعل المثبت إلى منفي والمنفي إلى مثبت للتعبير عن الندم."
      ],
      examples: [
        {
          en: "I wish I'd asked Hisham to be in the team.",
          ar: "أتمنى لو أنني طلبت من هشام الانضمام إلى الفريق.",
          highlight: "I wish I'd asked",
          note: "ص 45 كتاب الطالب"
        },
        {
          en: "This wouldn't have happened if I'd slowed down.",
          ar: "ما كان هذا ليحدث لو أنني خففت السرعة.",
          highlight: "wouldn't have happened if I'd slowed down",
          note: "ص 45 كتاب الطالب"
        }
      ],
      exercises: [
        {
          id: "u4-l4-ex1",
          question: "Fouad Salim: 'We'd have won if we _________ (train) harder.'",
          options: ["had trained", "trained", "have trained", "train"],
          correctAnswer: "had trained",
          explanation: "في جملة If الشرطية الثالثة نستخدم الماضي التام: had trained - ص 45 كتاب الطالب.",
          type: "mcq",
          ministerialYear: "ص 45 كتاب الطالب"
        },
        {
          id: "u4-l4-ex2",
          question: "Khadija Nasser: 'I wish I _________ (arrive) earlier and been more relaxed.'",
          options: ["had arrived", "arrived", "have arrived", "arrive"],
          correctAnswer: "had arrived",
          explanation: "قاعدة الندم I wish تأخذ ماضياً تاماً: had arrived - ص 45 كتاب الطالب.",
          type: "mcq",
          ministerialYear: "ص 45 كتاب الطالب"
        }
      ]
    },
    {
      id: "u4-l5",
      unitId: 4,
      lessonNumber: 5,
      titleAr: "الدرس الخامس: اختبار الوحدة الرابعة والإملاء الوزاري",
      titleEn: "Lesson 5: Unit 4 Test & Ministerial Spelling",
      category: "spelling",
      summary: "حل الاختبار الشامل للوحدة الرابعة، تمارين إكمال نهايات الكلمات الإملائية (fracture, inefficient, spectacles, etc.) وتصحيح الأخطاء (ص 89 - 91 من الملزمة).",
      grammarRuleFormula: "Spelling Endings:\nfracture | inefficient | spectacles | independent | unfortunately | illegal | impolite",
      detailedContent: [
        "إكمال الكلمات الإملائية الوزارية (تمرين C ص 82 وتمرين E ص 83 كتاب النشاط):",
        "1. frac____ -> fracture (كسر عظم).",
        "2. ineffi____ -> inefficient (غير كفء).",
        "3. spec____ -> spectacles (نظارات).",
        "4. indep____ -> independent (مستقل).",
        "5. unfort____ -> unfortunately (لسوء الحظ).",
        "6. unconv____ -> unconventional (غير تقليدي).",
        "7. regu____ -> regular (منتظم).",
        "8. freq____ -> frequent (متكرر).",
        "تعاريف مهمة في اختبار الوحدة (تمرين B ص 80):",
        "- salary = money you get paid every month by your employer.",
        "- vacancy = an available job position in a company.",
        "- recruit = find and hire new staff."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: كلمات تمرين C ص 82 تتكرر باستمرار في سؤال الإملاء الوزاري، احفظ حروف نهاياتها بدقة!"
      ],
      commonMistakes: [
        "الخطأ في إملاء fracture أو spectacles.",
        "الخلط بين salary (راتب شهري) و wage (أجر يومي أو أسبوعي)."
      ],
      examples: [
        {
          en: "frac____ -> fracture ; spec____ -> spectacles",
          ar: "كسر -> fracture ؛ نظارات -> spectacles",
          highlight: "fracture / spectacles",
          note: "سؤال الإملاء ص 90"
        }
      ],
      exercises: [
        {
          id: "u4-l5-ex1",
          question: "Complete the spelling: frac______ (a break in a bone)",
          options: ["fracture", "fraction", "fractal", "fractured"],
          correctAnswer: "fracture",
          explanation: "الكسر في العظام يسمى إملائياً fracture.",
          type: "mcq",
          ministerialYear: "وزاري 2018 و 2021"
        },
        {
          id: "u4-l5-ex2",
          question: "Money you get paid every month is your _________.",
          options: ["salary", "pocket money", "cheque", "deposit"],
          correctAnswer: "salary",
          explanation: "المبلغ الذي يتقاضاه الموظف شهرياً يسمى راتباً (salary).",
          type: "mcq",
          ministerialYear: "تمرين B ص 80"
        }
      ]
    }
  ]
};
