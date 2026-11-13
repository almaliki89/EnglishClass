import { MockExamPaper } from '../../mockExamPapers';

// =========================================================================
// نموذج تدريبي إضافي للصف الخامس الإعدادي (100 درجة)
// نموذج تدريبي مُنشأ للمنصة؛ ليس ورقة امتحان منقولة من الملزمة. لا تُنسب أسئلته إلى الصفحتين 186-187.
// =========================================================================

export const FIFTH_PREPARATORY_MOCK_PAPER: MockExamPaper = {
  id: "mock-5th-prep-final-2026",
  title: "الامتحان النهائي الشامل لمادة اللغة الإنكليزية - الخامس الإعدادي (100 درجة)",
  subtitle: "مبني وفق نموذج الأسئلة الامتحانية في ملزمة الأستاذ عمار غالب 2026 (ص 186-187)",
  year: "2025-2026",
  session: "الدور الأول - الامتحان النهائي العام",
  durationMinutes: 150,
  totalMarks: 100,
  sections: [
    {
      id: "5th-mock-sec-1",
      sectionCode: "Q1",
      titleAr: "السؤال الأول: استيعاب القطع ونصوص الكتاب",
      titleEn: "Question 1: Reading Comprehension & Texts",
      instructionsAr: "السؤال الأول: القطعة الخارجية ونصوص الكتاب المقررة (20 درجة):",
      instructionsEn: "Question 1: Unseen Reading Passage & Textbook Comprehension (20 Marks):",
      totalMarks: 20,
      items: [
        {
          id: "5th-mock-q1-1",
          number: 1,
          questionText: "The Swedish Ice Hotel is rebuilt every year using thousands of tons of natural river ice.",
          type: "choice",
          options: ["True", "False"],
          correctAnswer: "True",
          explanation: "صحيح، يعاد بناء فندق الجليد كل شتاء في قرية يوكاسيارفي السويدية من جليد نهر تورن (الملزمة ص 150).",
          maxScore: 4
        },
        {
          id: "5th-mock-q1-2",
          number: 2,
          questionText: "When was the first Babylon International Festival inaugurated?",
          type: "choice",
          options: ["1987", "1997", "1978", "2003"],
          correctAnswer: "1987",
          explanation: "انطلق المهرجان الأول في عام 1987 في مدينة بابل الأثرية (الملزمة ص 35).",
          maxScore: 4
        },
        {
          id: "5th-mock-q1-3",
          number: 3,
          questionText: "What was the initial weight of early mobile phone communication units in 1946?",
          type: "choice",
          options: ["Around 40 kilograms", "Around 4 kilograms", "Under 1 kilogram", "80 kilograms"],
          correctAnswer: "Around 40 kilograms",
          explanation: "كانت أجهزة الهاتف الأولى عام 1946 تزن حوالي 40 كغم وتوضع في صندوق السيارة (الملزمة ص 69).",
          maxScore: 4
        },
        {
          id: "5th-mock-q1-4",
          number: 4,
          questionText: "Why is Souq Al-Safafir in Baghdad internationally famous?",
          type: "choice",
          options: [
            "For skilled artisans hammering handmade copper utensils",
            "For manufacturing modern electric cars",
            "For selling only imported digital electronics",
            "For being an international modern airport"
          ],
          correctAnswer: "For skilled artisans hammering handmade copper utensils",
          explanation: "يشتهر سوق الصفافير بالنحاسين المهرة الذين يطرقون النحاس يدوياً لصناعة الأواني التراثية (الملزمة ص 164).",
          maxScore: 4
        },
        {
          id: "5th-mock-q1-5",
          number: 5,
          questionText: "What historic milestone did Harrods store achieve in London in 1898?",
          type: "choice",
          options: [
            "It installed one of the world's very first moving stairs (escalators)",
            "It launched the first commercial satellite",
            "It closed all its shopping floors",
            "It sold the first computer"
          ],
          correctAnswer: "It installed one of the world's very first moving stairs (escalators)",
          explanation: "كان متجر هارودز أول من أدخل السلالم الكهربائية المتحركة في بريطانيا عام 1898 (الملزمة ص 176).",
          maxScore: 4
        }
      ]
    },
    {
      id: "5th-mock-sec-2",
      sectionCode: "Q2",
      titleAr: "السؤال الثاني: القواعد النحوية والوظائف اللغوية",
      titleEn: "Question 2: Grammar, Structures & Functions",
      instructionsAr: "السؤال الثاني: القواعد النحوية والوظائف اللغوية (30 درجة):",
      instructionsEn: "Question 2: Grammar, Structures and Language Functions (30 Marks):",
      totalMarks: 30,
      items: [
        {
          id: "5th-mock-q2-1",
          number: 1,
          questionText: "Listen! Somebody ______ (sing) a traditional Iraqi ballad.",
          type: "choice",
          options: ["is singing", "sings", "sang", "has sung"],
          correctAnswer: "is singing",
          explanation: "أداة التنبيه Listen! تدل على حدث يقع الآن في لحظة التكلم بالمضارع المستمر is singing (الملزمة ص 5).",
          maxScore: 5
        },
        {
          id: "5th-mock-q2-2",
          number: 2,
          questionText: "The ground is soaked with puddles; it ______ (must have / can't have) rained during the storm.",
          type: "choice",
          options: ["must have", "can't have"],
          correctAnswer: "must have",
          explanation: "وجود برك الماء دليل حاضر قاطع يثبت هطول المطر حتماً (must have rained) (الملزمة ص 65).",
          maxScore: 5
        },
        {
          id: "5th-mock-q2-3",
          number: 3,
          questionText: "If I ______ (be) you, I would consult an experienced lawyer.",
          type: "choice",
          options: ["were", "was", "am", "will be"],
          correctAnswer: "were",
          explanation: "حالة ثانية لتقديم النصيحة بـ were مع ضمير I (If I were you) (الملزمة ص 117).",
          maxScore: 5
        },
        {
          id: "5th-mock-q2-4",
          number: 4,
          questionText: "Ali asked a technician to repair his laptop.\nAli ______ his laptop repaired. (Use causative have/get)",
          type: "choice",
          options: ["had", "has", "is having", "was"],
          correctAnswer: "had",
          explanation: "صيغة سببية في الماضي: Ali had his laptop repaired (الملزمة ص 161).",
          maxScore: 5
        },
        {
          id: "5th-mock-q2-5",
          number: 5,
          questionText: "The architect ______ designed the cultural pavilion won a golden medal.",
          type: "choice",
          options: ["who", "which", "where", "whose"],
          correctAnswer: "who",
          explanation: "اسم عاقل (The architect) متبوعاً بفعل مباشر، لذا نستخدم who (الملزمة ص 166).",
          maxScore: 5
        },
        {
          id: "5th-mock-q2-6",
          number: 6,
          questionText: "Direct: 'Where do you buy your canvas?'\nReported: He asked Widad where she ______ her canvas.",
          type: "choice",
          options: ["bought", "buys", "did buy", "buying"],
          correctAnswer: "bought",
          explanation: "تحويل السؤال المباشر إلى كلام منقول مع إرجاع الفعل إلى الماضي البسيط bought (الملزمة ص 140).",
          maxScore: 5
        }
      ]
    },
    {
      id: "5th-mock-sec-3",
      sectionCode: "Q3",
      titleAr: "السؤال الثالث: المعاني والمفردات والإملاء",
      titleEn: "Question 3: Vocabulary & Spelling",
      instructionsAr: "السؤال الثالث: المفردات والتصانيف والإملاء (20 درجة):",
      instructionsEn: "Question 3: Vocabulary, Prefixes, Containers & Spelling (20 Marks):",
      totalMarks: 20,
      items: [
        {
          id: "5th-mock-q3-1",
          number: 1,
          questionText: "What is the correct negative prefix for the adjective 'polite'?",
          type: "choice",
          options: ["im- (impolite)", "un- (unpolite)", "in- (inpolite)", "il- (ilpolite)"],
          correctAnswer: "im- (impolite)",
          explanation: "تبدأ polite بـ p فتأخذ im- لتصبح impolite (الملزمة ص 157).",
          maxScore: 5
        },
        {
          id: "5th-mock-q3-2",
          number: 2,
          questionText: "A medical treatment that causes no pain at all is ______.",
          type: "choice",
          options: ["painless", "painful", "painfully", "painlessly"],
          correctAnswer: "painless",
          explanation: "اللاحقة -less تعني انعدام الشيء، فـ painless تعني عديم الألم (الملزمة ص 158).",
          maxScore: 5
        },
        {
          id: "5th-mock-q3-3",
          number: 3,
          questionText: "The correct quantifier for soup is a ______ of soup.",
          type: "choice",
          options: ["bowl", "bar", "carton", "slice"],
          correctAnswer: "bowl",
          explanation: "الحساء يوضع في وعاء عميق (a bowl of soup) (الملزمة ص 105).",
          maxScore: 5
        },
        {
          id: "5th-mock-q3-4",
          number: 4,
          questionText: "The prefix 're-' in words like 'recycle' and 'rewrite' means ______.",
          type: "choice",
          options: ["again", "never", "before", "without"],
          correctAnswer: "again",
          explanation: "البادئة re- تعني إعادة الفعل وتكراره مرة أخرى (to do again) (الملزمة ص 87).",
          maxScore: 5
        }
      ]
    },
    {
      id: "5th-mock-sec-4",
      sectionCode: "Q4",
      titleAr: "السؤال الرابع: نصوص الأدب المقرّر (نساء صغيرات والعاصفة)",
      titleEn: "Question 4: Literature Spot (Little Women & The Tempest)",
      instructionsAr: "السؤال الرابع: الأدب المقرّر (نساء صغيرات والعاصفة) (10 درجات):",
      instructionsEn: "Question 4: Literature Spot - Little Women & The Tempest (10 Marks):",
      totalMarks: 10,
      items: [
        {
          id: "5th-mock-q4-1",
          number: 1,
          questionText: "In Louisa May Alcott's 'Little Women', how did Jo March obtain $25 to help her sick father?",
          type: "choice",
          options: [
            "She sold her long, beautiful chestnut hair to a wig-maker",
            "She won a national writing competition",
            "She borrowed money from Laurie's grandfather",
            "She worked as an army nurse in Washington"
          ],
          correctAnswer: "She sold her long, beautiful chestnut hair to a wig-maker",
          explanation: "قصت جو شعرها الطويل وباعته لصانع شعر مستعار لتحصل على 25 دولاراً لمصاريف علاج والدها (الملزمة ص 199).",
          maxScore: 5
        },
        {
          id: "5th-mock-q4-2",
          number: 2,
          questionText: "In Shakespeare's 'The Tempest', what moral decision did Prospero make regarding his enemies?",
          type: "choice",
          options: [
            "He chose forgiveness and virtue over vengeance",
            "He executed them all on the island shore",
            "He threw them back into the stormy sea",
            "He imprisoned them inside pine trees forever"
          ],
          correctAnswer: "He chose forgiveness and virtue over vengeance",
          explanation: "اختار بروسبيرو العفو والصفح والفضيلة بدلاً من الانتقام (الملزمة ص 210).",
          maxScore: 5
        }
      ]
    }
  ],
  essayOptions: [
    {
      id: "5th-mock-essay-a",
      optionLetter: "A",
      titleEn: "Ramadan Traditions and Hospitality in Iraq",
      titleAr: "إنشاء (أ): تقاليد شهر رمضان المبارك وكرم الضيافة في العراق (الوحدة الأولى - ص 212)",
      prompt: "Write a well-organized composition about the spiritual and social traditions of Ramadan in Iraq, including family Iftar and the game of Mheibes.",
      suggestedModel: "The Holy Month of Ramadan is the most sacred and cherished season for Muslims across Iraq. During this blessed month, believers abstain from dawn to sunset, cultivating self-discipline, patience, and empathy. Families gather around tables filled with dates, lentil soup (Shorbat Adas), and traditional dishes. Mosques organize collective banquets for the needy. In the evening, people visit relatives and play the traditional game of Mheibes in historic cafes, showcasing centuries of Iraqi warmth and solidarity.",
      keywords: ["sacred season", "abstain", "Shorbat Adas", "Iftar banquets", "Mheibes game", "solidarity"],
      maxScore: 20
    },
    {
      id: "5th-mock-essay-b",
      optionLetter: "B",
      titleEn: "Preserving Endangered Wildlife from Extinction",
      titleAr: "إنشاء (ب): حماية الحيوانات المهددة بالانقراض (الوحدة الثالثة - ص 215)",
      prompt: "Write a composition highlighting endangered species (like the Right Whale, Black Rhino, and Panda) and explain practical ways governments and individuals can protect them.",
      suggestedModel: "Our planet is currently experiencing a biodiversity crisis, with thousands of species facing extinction. Magnificent creatures such as the Northern Right Whale, the Giant Panda, and marine turtles are dwindling due to deforestation, illegal poaching, and pollution. To preserve them, governments must establish protected nature sanctuaries and enforce strict anti-poaching penalties. Raising community awareness is vital to protect our natural heritage for future generations.",
      keywords: ["biodiversity crisis", "deforestation", "poaching", "nature sanctuaries", "ecological balance"],
      maxScore: 20
    }
  ]
};
