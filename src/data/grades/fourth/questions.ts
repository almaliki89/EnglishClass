import { MinisterialExamQuestion } from '../../../types';

// أسئلة تدريبية أنشأتها المنصة على قواعد وموضوعات الملزمة.
// لم تُنسب إلى سنة أو دور وزاري لعدم وجود دليل مصدر يثبت أنها أسئلة امتحان وزاري.

const supplementarySession = 'تدريب إضافي';

export const FOURTH_PREPARATORY_QUESTIONS: MinisterialExamQuestion[] = [
  {
    id: '4th-q-u1-present-simple', unitId: 41, topic: 'Present Simple & Stative Verbs',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'I ______ (not / understand) this question.',
    correctAnswer: 'don’t understand',
    ruleExplanation: 'يُستخدم المضارع البسيط مع أفعال الحالة مثل understand.',
    difficulty: 'medium', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 3–7',
    provenanceVerified: false
  },
  {
    id: '4th-q-u1-indirect', unitId: 41, topic: 'Indirect Questions',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'Could you tell me where the café ______?',
    correctAnswer: 'is',
    ruleExplanation: 'في السؤال غير المباشر يأتي الفاعل قبل الفعل، ولا نستخدم ترتيب السؤال المباشر.',
    difficulty: 'hard', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 14–16',
    provenanceVerified: false
  },
  {
    id: '4th-q-u1-ed-ing', unitId: 41, topic: 'Adjectives Ending in -ed / -ing',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'The film was very ______ (bored / boring).',
    correctAnswer: 'boring',
    ruleExplanation: 'تصف boring الشيء الذي يسبب الملل، بينما bored تصف شعور الشخص.',
    difficulty: 'easy', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 11–13',
    provenanceVerified: false
  },
  {
    id: '4th-q-u2-borrow-lend', unitId: 42, topic: 'Borrow / Lend',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'Can I ______ your book? I left mine at home.',
    correctAnswer: 'borrow',
    ruleExplanation: 'يستخدم borrow عندما يكون الفاعل هو من يستعير الشيء.',
    difficulty: 'easy', category: 'Vocabulary', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 25–26',
    provenanceVerified: false
  },
  {
    id: '4th-q-u2-past-simple', unitId: 42, topic: 'Past Simple',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'Sally ______ (not / steal) the money.',
    correctAnswer: 'didn’t steal',
    ruleExplanation: 'بعد did not أو didn’t يأتي الفعل بصيغته الأساسية.',
    difficulty: 'medium', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 33–37',
    provenanceVerified: false
  },
  {
    id: '4th-q-u2-past-continuous', unitId: 42, topic: 'Past Continuous with While',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'While she ______ (read), the telephone rang.',
    correctAnswer: 'was reading',
    ruleExplanation: 'يصف الماضي المستمر فعلاً كان جارياً عندما وقع حدث آخر.',
    difficulty: 'medium', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 40–42',
    provenanceVerified: false
  },
  {
    id: '4th-q-u2-past-perfect', unitId: 42, topic: 'Past Perfect',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'When we arrived, the train ______ (leave).',
    correctAnswer: 'had left',
    ruleExplanation: 'وقع مغادرة القطار قبل الوصول، لذلك نستخدم الماضي التام.',
    difficulty: 'hard', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 45–47',
    provenanceVerified: false
  },
  {
    id: '4th-q-u3-present-perfect', unitId: 43, topic: 'Present Perfect Simple',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'Have you ever ______ (see) an oryx?',
    correctAnswer: 'seen',
    ruleExplanation: 'يتبع have/has التصريف الثالث للفعل؛ والتصريف الثالث من see هو seen.',
    difficulty: 'easy', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 55–58',
    provenanceVerified: false
  },
  {
    id: '4th-q-u3-for-since', unitId: 43, topic: 'Present Perfect Continuous: for / since',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'We have been waiting ______ 8 o’clock.',
    correctAnswer: 'since',
    ruleExplanation: 'تستخدم since مع نقطة بداية محددة، بينما تستخدم for مع مدة زمنية.',
    difficulty: 'medium', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 67–68',
    provenanceVerified: false
  },
  {
    id: '4th-q-u4-have-to', unitId: 44, topic: 'Have to / Don’t have to',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'Students ______ follow the school rules.',
    correctAnswer: 'have to',
    ruleExplanation: 'تستخدم have to للتعبير عن الضرورة أو الالتزام مع الفاعل الجمع.',
    difficulty: 'easy', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 71',
    provenanceVerified: false
  },
  {
    id: '4th-q-u5-infinitive', unitId: 45, topic: 'Verbs Followed by to-infinitive',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'They decided ______ (visit) the museum.',
    correctAnswer: 'to visit',
    ruleExplanation: 'يتبع الفعل decide مصدر مسبوق بـ to.',
    difficulty: 'easy', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 90–91',
    provenanceVerified: false
  },
  {
    id: '4th-q-u5-future-continuous', unitId: 45, topic: 'Future Continuous',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'At 9 p.m. tomorrow, we ______ (study).',
    correctAnswer: 'will be studying',
    ruleExplanation: 'تُستخدم will be + verb-ing لوصف فعل سيكون جارياً في وقت محدد بالمستقبل.',
    difficulty: 'medium', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 85–86',
    provenanceVerified: false
  },
  {
    id: '4th-q-u6-reported-speech', unitId: 46, topic: 'Reported Speech',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: '“Do you smoke?” My friend asked if I ______.',
    correctAnswer: 'smoked',
    ruleExplanation: 'عند نقل سؤال yes/no في المثال، نستخدم if ثم ترتيب الجملة الخبري مع تحويل الزمن بحسب السياق.',
    difficulty: 'hard', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 101–103',
    provenanceVerified: false
  },
  {
    id: '4th-q-u6-advice', unitId: 46, topic: 'Giving Advice with should',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'I have a fever. You ______ rest.',
    correctAnswer: 'should',
    ruleExplanation: 'تستخدم should لتقديم النصيحة.',
    difficulty: 'easy', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 105–106',
    provenanceVerified: false
  },
  {
    id: '4th-q-u6-might', unitId: 46, topic: 'Possibility with might',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'People ______ live longer in the future.',
    correctAnswer: 'might',
    ruleExplanation: 'تُستخدم might للتعبير عن احتمال غير مؤكد.',
    difficulty: 'easy', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 110–111',
    provenanceVerified: false
  },
  {
    id: '4th-q-u7-zero-conditional', unitId: 47, topic: 'Zero Conditional',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'If plants do not get enough water, they ______.',
    correctAnswer: 'die',
    ruleExplanation: 'تُستخدم الشرطية الصفرية للحقائق العامة، ويأتي المضارع البسيط في طرفي الجملة.',
    difficulty: 'medium', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 123–124',
    provenanceVerified: false
  },
  {
    id: '4th-q-u7-passive', unitId: 47, topic: 'Passive Voice',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'Petroleum ______ (form) millions of years ago.',
    correctAnswer: 'was formed',
    ruleExplanation: 'مبني للمجهول في الماضي البسيط: was/were + past participle.',
    difficulty: 'medium', category: 'Grammar', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 131–133',
    provenanceVerified: false
  },
  {
    id: '4th-q-u8-gps', unitId: 48, topic: 'GPS Reading Comprehension',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'How many GPS satellites does a receiver look for at least?',
    correctAnswer: 'At least four satellites.',
    ruleExplanation: 'يذكر النص أن جهاز الاستقبال يبحث عن أربعة أقمار GPS صناعية على الأقل.',
    difficulty: 'medium', category: 'Reading', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الملزمة ص 144',
    provenanceVerified: false
  },
  {
    id: '4th-q-lit-treasure', unitId: 48, topic: 'Literature: Treasure Island',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'Who was Ben Gunn, and how long had he been on the island?',
    correctAnswer: 'He was a former pirate who had been marooned on the island for three years.',
    ruleExplanation: 'تذكر أحداث جزيرة الكنز أن بن غان تُرك في الجزيرة ثلاث سنوات.',
    difficulty: 'medium', category: 'Literature', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الأدب في الملزمة ص 149–158',
    provenanceVerified: false
  },
  {
    id: '4th-q-lit-around-world', unitId: 48, topic: 'Literature: Around the World in 80 Days',
    year: supplementarySession, session: 'تدريب إضافي',
    questionText: 'How did Phileas Fogg gain a day during his journey?',
    correctAnswer: 'By travelling eastwards around the world and crossing time zones.',
    ruleExplanation: 'توضح خاتمة الرواية أن السفر باتجاه الشرق أكسب فوغ يوماً كاملاً.',
    difficulty: 'hard', category: 'Literature', grade: 'fourth-preparatory',
    sourceReference: 'سؤال تدريبي من إعداد المنصة — يستند إلى الأدب في الملزمة ص 159–169',
    provenanceVerified: false
  }
];
