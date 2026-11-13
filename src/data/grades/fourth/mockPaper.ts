import { MockExamPaper } from '../../mockExamPapers';

// =========================================================================
// النموذج الامتحاني النهائي الشامل للصف الرابع الإعدادي (100 درجة)
// مستخرج نصاً وتوزيعاً من ملزمة النموذجية 2026 (ص 149 - 150)
// =========================================================================

export const FOURTH_PREPARATORY_MOCK_PAPER: MockExamPaper = {
  id: "mock-4th-prep-final-2026",
  title: "الامتحان النهائي الشامل لمادة اللغة الإنكليزية - الرابع الإعدادي (100 درجة)",
  subtitle: "مبني وفق نموذج الأسئلة الامتحانية في ملزمة النموذجية 2026 (ص 149)",
  year: "2025-2026",
  session: "الدور الأول - الامتحان النهائي العام",
  durationMinutes: 150,
  totalMarks: 100,
  sections: [
    {
      id: "4th-mock-sec-1",
      sectionCode: "Q1",
      titleAr: "السؤال الأول: استيعاب القطع ونصوص الكتاب",
      titleEn: "Question 1: Reading Comprehension & Texts",
      instructionsAr: "السؤال الأول: القطعة الخارجية ونصوص الكتاب المقررة (20 درجة):",
      instructionsEn: "Question 1: Unseen Reading Passage & Textbook Comprehension (20 Marks):",
      totalMarks: 20,
      items: [
        {
          id: "4th-mock-q1-1",
          number: 1,
          questionText: "What are the two official languages spoken in Canada?",
          type: "choice",
          options: ["English and French", "English and Spanish", "French and German", "English and Arabic"],
          correctAnswer: "English and French",
          explanation: "اللغتان الرسميتان لكندا هما الإنكليزية والفرنسية (الملزمة ص 17).",
          maxScore: 4
        },
        {
          id: "4th-mock-q1-2",
          number: 2,
          questionText: "When was UNICEF originally created, and why?",
          type: "choice",
          options: [
            "In 1946 to help children after World War II",
            "In 2000 to build space stations",
            "In 1980 to organize sports events",
            "In 1920 to build roads"
          ],
          correctAnswer: "In 1946 to help children after World War II",
          explanation: "تأسست اليونيسيف عام 1946 لمساعدة الأطفال بعد الحرب العالمية الثانية (الملزمة ص 38).",
          maxScore: 4
        },
        {
          id: "4th-mock-q1-3",
          number: 3,
          questionText: "Where is the National Museum of Iraq located, and what is its famous winged bull called?",
          type: "choice",
          options: [
            "Located in Al-Alawi, Baghdad, and the winged bull is Lamassu",
            "Located in Erbil, and the bull is Sphinx",
            "Located in Mosul, and the bull is Babylon",
            "Located in Basra, and the bull is Pharaoh"
          ],
          correctAnswer: "Located in Al-Alawi, Baghdad, and the winged bull is Lamassu",
          explanation: "يقع المتحف في العلاوي ببغداد واسم الثور المجنح هو Lamassu (الملزمة ص 84).",
          maxScore: 4
        },
        {
          id: "4th-mock-q1-4",
          number: 4,
          questionText: "According to Dr Ibrahim Ansari, how many hours of sleep do teenagers need per night?",
          type: "choice",
          options: ["Between 8 and 10 hours", "4 hours", "12 hours", "6 hours"],
          correctAnswer: "Between 8 and 10 hours",
          explanation: "يحتاج المراهقون بين 8 إلى 10 ساعات نوم ليلية (الملزمة ص 102).",
          maxScore: 4
        },
        {
          id: "4th-mock-q1-5",
          number: 5,
          questionText: "What are the Al-Hammaar Marshes in southern Iraq recognized as?",
          type: "choice",
          options: [
            "One of the largest wetland ecosystems and a UNESCO World Heritage site",
            "A dry desert without water",
            "A modern airport runway",
            "A industrial oil refining station"
          ],
          correctAnswer: "One of the largest wetland ecosystems and a UNESCO World Heritage site",
          explanation: "أهوار الحمار هي منطقة رطبة عالمية وموقع تراث عالمي لليونسكو (الملزمة ص 130).",
          maxScore: 4
        }
      ]
    },
    {
      id: "4th-mock-sec-2",
      sectionCode: "Q2",
      titleAr: "السؤال الثاني: القواعد النحوية والوظائف اللغوية",
      titleEn: "Question 2: Grammar, Structures & Functions",
      instructionsAr: "السؤال الثاني: القواعد النحوية والوظائف اللغوية (30 درجة):",
      instructionsEn: "Question 2: Grammar, Structures and Language Functions (30 Marks):",
      totalMarks: 30,
      items: [
        {
          id: "4th-mock-q2-1",
          number: 1,
          questionText: "Direct: 'Where is the main library?'\nIndirect: Could you tell me ______?",
          type: "choice",
          options: [
            "where the main library is",
            "where is the main library",
            "is where the main library",
            "where main library is"
          ],
          correctAnswer: "where the main library is",
          explanation: "تقدم الفاعل (the main library) على الفعل المساعد is في السؤال غير المباشر (الملزمة ص 21).",
          maxScore: 5
        },
        {
          id: "4th-mock-q2-2",
          number: 2,
          questionText: "While we ______ (walk) in Erbil Citadel, it started raining.",
          type: "choice",
          options: ["were walking", "walked", "are walking", "walks"],
          correctAnswer: "were walking",
          explanation: "ماضي مستمر بعد أداة الربط While (were walking) (الملزمة ص 27).",
          maxScore: 5
        },
        {
          id: "4th-mock-q2-3",
          number: 3,
          questionText: "There ______ to be a traditional market here, but now there is a big shopping centre.",
          type: "choice",
          options: ["used", "use", "using", "uses"],
          correctAnswer: "used",
          explanation: "صيغة used to للتعبير عن عادة وحالة في الماضي (الملزمة ص 32).",
          maxScore: 5
        },
        {
          id: "4th-mock-q2-4",
          number: 4,
          questionText: "We have lived in Baghdad ______ ten years.",
          type: "choice",
          options: ["for", "since", "from", "ago"],
          correctAnswer: "for",
          explanation: "مدة زمنية مجملة ومحسوبة بالسنوات (ten years) تأخذ for (الملزمة ص 59).",
          maxScore: 5
        },
        {
          id: "4th-mock-q2-5",
          number: 5,
          questionText: "They decided ______ a new car next month.",
          type: "choice",
          options: ["to buy", "buying", "buy", "bought"],
          correctAnswer: "to buy",
          explanation: "الفعل decided يأخذ تركيب to + المصدر المجرد (to buy) (الملزمة ص 91).",
          maxScore: 5
        },
        {
          id: "4th-mock-q2-6",
          number: 6,
          questionText: "At 10:00 AM tomorrow, I ______ my final physics exam.",
          type: "choice",
          options: ["will be taking", "will take", "am taking", "took"],
          correctAnswer: "will be taking",
          explanation: "مستقبل مستمر لوجود وقت محدد صباح غدٍ (At 10:00 AM tomorrow) (الملزمة ص 98).",
          maxScore: 5
        }
      ]
    },
    {
      id: "4th-mock-sec-3",
      sectionCode: "Q3",
      titleAr: "السؤال الثالث: المعاني والمفردات والإملاء",
      titleEn: "Question 3: Vocabulary & Spelling",
      instructionsAr: "السؤال الثالث: المفردات والتصانيف والإملاء (20 درجة):",
      instructionsEn: "Question 3: Vocabulary, Adverbs & Spelling (20 Marks):",
      totalMarks: 20,
      items: [
        {
          id: "4th-mock-q3-1",
          number: 1,
          questionText: "Ali is a good player; he plays football very ______.",
          type: "choice",
          options: ["well", "goodly", "good", "better"],
          correctAnswer: "well",
          explanation: "ظرف الطريقة الشاذ من الصفة good هو well (الملزمة ص 46).",
          maxScore: 5
        },
        {
          id: "4th-mock-q3-2",
          number: 2,
          questionText: "A person who frequently forgets appointments is described as ______.",
          type: "choice",
          options: ["forgetful", "lively", "slim", "smart"],
          correctAnswer: "forgetful",
          explanation: "الشخص الذي ينسى المواعيد يوصف بـ forgetful (الملزمة ص 87).",
          maxScore: 5
        },
        {
          id: "4th-mock-q3-3",
          number: 3,
          questionText: "The acronym 'DOB' on an application form stands for Date of ______.",
          type: "choice",
          options: ["Birth", "Business", "Bachelor", "Booking"],
          correctAnswer: "Birth",
          explanation: "الرمز DOB يعني Date of Birth (تاريخ الميلاد) (الملزمة ص 23).",
          maxScore: 5
        },
        {
          id: "4th-mock-q3-4",
          number: 4,
          questionText: "The man who gets married at a wedding celebration is the ______.",
          type: "choice",
          options: ["groom", "bride", "waiter", "guest"],
          correctAnswer: "groom",
          explanation: "الرجل الذي يتزوج يسمى العريس (groom) (الملزمة ص 42).",
          maxScore: 5
        }
      ]
    },
    {
      id: "4th-mock-sec-4",
      sectionCode: "Q4",
      titleAr: "السؤال الرابع: نصوص الأدب المقرّر (جزيرة الكنز وحول العالم في 80 يوماً)",
      titleEn: "Question 4: Literature Spot (Treasure Island & Around the World in 80 Days)",
      instructionsAr: "السؤال الرابع: الأدب المقرّر (جزيرة الكنز وحول العالم في 80 يوماً) (10 درجات):",
      instructionsEn: "Question 4: Literature Spot - Treasure Island & Around the World in 80 Days (10 Marks):",
      totalMarks: 10,
      items: [
        {
          id: "4th-mock-q4-1",
          number: 1,
          questionText: "In R.L. Stevenson's 'Treasure Island', who was Ben Gunn and what had he done with Flint's treasure?",
          type: "choice",
          options: [
            "He was a marooned pirate who dug up the treasure and carried it to his cave",
            "He was the captain of Hispaniola who burned the ship",
            "He was a merchant who bought the treasure from Silver",
            "He was a doctor who destroyed the map"
          ],
          correctAnswer: "He was a marooned pirate who dug up the treasure and carried it to his cave",
          explanation: "بن غان بحار معزول بالجزيرة استخرج الكنز ونقله إلى كهفه (الملزمة ص 159).",
          maxScore: 5
        },
        {
          id: "4th-mock-q4-2",
          number: 2,
          questionText: "In Jules Verne's 'Around the World in 80 Days', how did Phileas Fogg win his £20,000 bet?",
          type: "choice",
          options: [
            "By travelling constantly eastwards, he gained a full day (24 hours) crossing time zones",
            "By taking a secret shortcut across the North Pole",
            "By bribing Detective Fix with £55,000",
            "By using an airplane to fly over Europe"
          ],
          correctAnswer: "By travelling constantly eastwards, he gained a full day (24 hours) crossing time zones",
          explanation: "بسفره الدائم شرقاً كسب يوماً كاملاً في فارق التوقيت ووصل في الوقت المحدد (الملزمة ص 169).",
          maxScore: 5
        }
      ]
    }
  ],
  essayOptions: [
    {
      id: "4th-mock-essay-a",
      optionLetter: "A",
      titleEn: "Traditional Wedding Customs and Celebrations in Iraq",
      titleAr: "إنشاء (أ): عادات وتقاليد الزفاف والأعراس في العراق (الوحدة الرابعة - ص 176)",
      prompt: "Write a paragraph describing Iraqi wedding customs, including Thursday celebrations, henna decorations, formal clothing, and family hospitality.",
      suggestedModel: "Wedding customs differ from one culture to another, but in Iraq, marriage celebrations are steeped in deep joy and family hospitality. Weddings usually take place on Thursday. A day before, female relatives gather at the bride's house to decorate her hands with henna. On the wedding day, the groom wears a suit while the bride wears a white dress symbolizing purity. The groom's family hosts a grand feast for friends and relatives where traditional Iraqi food is served, and guests bring thoughtful presents to wish the couple happiness.",
      keywords: ["henna night", "Thursday", "bride & groom", "purity", "hospitality"],
      maxScore: 20
    },
    {
      id: "4th-mock-essay-b",
      optionLetter: "B",
      titleEn: "A Package Holiday Experience in Erbil and Northern Iraq",
      titleAr: "إنشاء (ب): رحلة سياحية جماعية شاملة إلى أربيل وشمال العراق (الوحدة الثانية - ص 173)",
      prompt: "Write a letter to a friend describing a package holiday trip to Erbil, mentioning the hotel, visited sights (Erbil Citadel, waterfalls), food, and overall experience.",
      suggestedModel: "Dear Alex, Last month I went with my family on an amazing package holiday to Erbil in northern Iraq. The trip cost $200 per person and included travel fare, tours, and full accommodation. We stayed in a modern 5-star hotel near the city centre. According to our programme, we visited the historic Citadel of Erbil, local bazaars, and beautiful mountain waterfalls at Gali Ali Bag. In the evening, we enjoyed traditional Iraqi kebab in a luxurious restaurant. It was a fantastic holiday! Best wishes, Ammar",
      keywords: ["package holiday", "Erbil Citadel", "accommodation", "waterfalls", "traditional kebab"],
      maxScore: 20
    }
  ]
};
