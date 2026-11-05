import { Unit } from '../../types';

export const UNIT_1: Unit = {
  id: 1,
  number: 1,
  titleAr: "الوحدة الأولى: الصحة، القواعد، وقطع الكتاب",
  titleEn: "Unit 1: Health, Grammar & Reading",
  description: "أجزاء الجسم والمشاكل الصحية، أدوات الربط (While, As, When, And)، قطع الكتاب (عمار ونجلة عماد لفتة)، الصفات المنتهية بـ ed/ing، الأفعال المركبة، البادئات، أسلوب الأمر، تعابير الكمية، وقاعدة Used to.",
  accentColor: "from-blue-600 to-indigo-600",
  bgGradient: "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200",
  lessons: [
    {
      id: "u1-l1",
      unitId: 1,
      lessonNumber: 1,
      titleAr: "الدرس الأول: أجزاء الجسم والمشاكل الصحية",
      titleEn: "Lesson 1: Body Parts & Minor Health Problems",
      category: "vocabulary",
      summary: "مفردات أجزاء الجسم والمفاصل (Joints in arm/leg)، تصنيف الكلمات (علاج، مفاصل، أفعال، داخل وخارج الجسم)، والتعبيرات الوزارية للمشاكل الصحية.",
      grammarRuleFormula: "Joints in the arm: shoulder, wrist, elbow\nJoints in the leg: knee, ankle\nTreatment: bandage, cream, medicine, plaster, pills",
      detailedContent: [
        "مفاصل الذراع (Joints in the arm): كتف (shoulder)، معصم (wrist)، كوع (elbow).",
        "مفاصل الساق (Joints in the leg): ركبة (knee)، كاحل (ankle).",
        "تصنيف الكلمات الوزاري (تمرين A ص 4 كتاب النشاط):",
        "1. علاج (Treatment): bandage, cream, medicine, plaster, pills.",
        "2. مفاصل (Joints): ankle, elbow, knee, shoulder, wrist.",
        "3. أفعال (Verbs): breathe, cough, faint, sneeze, swallow.",
        "4. داخل وخارج الجسد (Inside & outside the body): blood, bones, heart, skin, stomach.",
        "جمل المشاكل الصحية الشائعة بالوزاري (ص 4 - 5):",
        "- My shoulder hurts. I did it playing tennis.",
        "- I've got a bad wrist. I sprained it lifting weights in the gym.",
        "- My toe is bleeding. I cut it on a piece of glass on the beach.",
        "- I have a temperature of 39. / I've got a terrible headache.",
        "- I feel dizzy. I think I'm going to faint. / I've got a sore throat. It hurts so much that I can't swallow."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي أسئلة المفاصل بالإملاء الوزاري (سؤال 3 فرع C) بصيغة: Joint in the arm: wrist, Joint in the leg: ankle.",
        "تنبيه وزاري: احفظ كلمتي لف الجرح وتغطيته: Name two things for covering a cut: plaster, bandage.",
        "تأتي جمل المشاكل الصحية كأسئلة إسقاطات (سؤال 3 فرع A) في كل دور وزاري."
      ],
      commonMistakes: [
        "الخلط بين مفاصل الذراع (wrist, elbow, shoulder) ومفاصل الساق (knee, ankle).",
        "الخطأ في إملاء كلمة ankle (كاحل) بكتابتها uncle (عم/خال).",
        "الخلط بين الفعل hurt (يؤلم) والاسم pain (ألم) والصفة sore (ملتهب)."
      ],
      examples: [
        {
          en: "Joint in the arm, (wrist / elbow / shoulder).",
          ar: "مفصل في الذراع (معصم / كوع / كتف).",
          highlight: "Joint in the arm: wrist",
          note: "وزاري مكرر بالسؤال الثالث فرع C"
        },
        {
          en: "She cut her hand while chopping vegetables; it was bleeding a lot.",
          ar: "جرحت يدها عندما كانت تقطع الخضار؛ كانت تنزف بشدة.",
          highlight: "bleeding a lot",
          note: "تمرين C ص 5 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u1-l1-ex1",
          question: "Joint in the leg: k_____ (Complete the spelling)",
          options: ["knee", "kneel", "knife", "know"],
          correctAnswer: "knee",
          explanation: "المفصل في الساق الذي يبدأ بحرف k هو الركبة (knee).",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u1-l1-ex2",
          question: "My back _________ all the time. It only feels OK when I am lying down.",
          options: ["hurts", "sore", "pain", "broken"],
          correctAnswer: "hurts",
          explanation: "الفاعل المفرد (My back) يحتاج فعلاً مضافاً له s الشخص الثالث وهو (hurts).",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور أول"
        },
        {
          id: "u1-l1-ex3",
          question: "Name two things for covering a cut: pl________ and ba________.",
          options: ["plaster, bandage", "plastic, bag", "plate, barrier", "pillow, blanket"],
          correctAnswer: "plaster, bandage",
          explanation: "الشيئان اللذان يغطيان الجروح هما البلاستر والضماد (plaster, bandage).",
          type: "mcq",
          ministerialYear: "تمرين C ص 24"
        }
      ]
    },
    {
      id: "u1-l2",
      unitId: 1,
      lessonNumber: 2,
      titleAr: "الدرس الثاني: الماضي البسيط والماضي المستمر وأدوات الربط",
      titleEn: "Lesson 2: Past Simple, Continuous & Connectors",
      category: "grammar",
      summary: "شرح زمن الماضي البسيط والمستمر، قواعد إضافة ed و ing، ربط الحدثين بأدوات الربط (While, As, When, And)، وأسماء الجمع القياسية والشاذة.",
      grammarRuleFormula: "While / As + Past Continuous [was/were + v-ing] , Past Simple [v-ed/irregular]\nWhen / And + Past Simple [v-ed/irregular] , Past Continuous [was/were + v-ing]",
      detailedContent: [
        "1. الماضي البسيط (Past Simple): فاعل + فعل ماضٍ (إما بإضافة ed أو شاذ). ينفى بـ (didn't + فعل مجرد)، ويسأل بـ (Did + فاعل + فعل مجرد؟).",
        "الفعل (be) يتحول في الماضي إلى (was) مع المفرد (I, He, She, It) و (were) مع الجمع (We, You, They).",
        "دلائل الماضي البسيط: yesterday, ago, last (night, week, month, year), in + سنة ماضية.",
        "2. الماضي المستمر (Past Continuous): فاعل + was / were + فعل مضاف له ing.",
        "3. أدوات الربط:",
        "- (While / As) يتبعهما دائماً ماضي مستمر (was/were + v-ing)، والطرف الآخر ماضي بسيط.",
        "- (When / And) يتبعهما دائماً ماضي بسيط، والطرف الآخر ماضي مستمر.",
        "4. أسماء الجمع القياسية والشاذة (ص 10 - 11):",
        "- الجمع القياسي بإضافة s أو es (بعد s, ss, sh, ch, x, z, o)، وقلب f/fe إلى ves مثل: wife -> wives, wolf -> wolves.",
        "- الجمع الشاذ: child -> children, man -> men, woman -> women, foot -> feet, tooth -> teeth, person -> people, mouse -> mice.",
        "- كلمات لا تتغير عند الجمع: sheep -> sheep, deer -> deer, species -> species, series -> series."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تذكر أن أداة (And) لا تأتي في بداية الجملة إطلاقاً في الأسئلة الوزارية، وموقعها دائماً في الوسط ويتبعها ماضي بسيط.",
        "إذا بدأت الجملة بـ (While أو As)، نضع فارزة (comma) بين الجملتين.",
        "أهم تصاريف الأفعال الشاذة المتكررة مع هذا الموضوع: break -> broke, feel -> felt, hide -> hid, tell -> told, swim -> swam."
      ],
      commonMistakes: [
        "وضع الماضي البسيط مباشرة بعد While أو As.",
        "نسيان مضاعفة الحرف الصحيح عند إضافة ing للأفعال ذات المقطع الواحد المنتهية بحرف صحيح قبله علة: sitting, stopping.",
        "كتابة was بدلاً من were مع الفاعل الجمع أو العكس."
      ],
      examples: [
        {
          en: "While Ali was having a shower, somebody knocked at the front door.",
          ar: "بينما كان علي يستحم، طرق شخص ما الباب الأمامي.",
          highlight: "While Ali was having ... knocked",
          note: "تمرين B ص 7 كتاب النشاط"
        },
        {
          en: "I was cleaning my room and the power went out.",
          ar: "كنت أنظف غرفتي وانقطعت الكهرباء.",
          highlight: "was cleaning ... and ... went out",
          note: "ص 8 من ملزمة الأستاذ مصطفى تركي"
        },
        {
          en: "A thief took our clothes as we were swimming.",
          ar: "أخذ اللص ملابسنا بينما كنا نسبح.",
          highlight: "took ... as we were swimming",
          note: "وزاري 2016 و 2020"
        }
      ],
      exercises: [
        {
          id: "u1-l2-ex1",
          question: "Khaled ____________ (play) football when he broke his ankle. (Correct)",
          options: ["was playing", "played", "is playing", "plays"],
          correctAnswer: "was playing",
          explanation: "قبل أداة (when) يأتي ماضي مستمر، والفاعل خالد مفرد يأخذ was playing.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u1-l2-ex2",
          question: "While my baggage ____________ (go) through the X-ray machine, I walked through the metal detector.",
          options: ["was going", "went", "is going", "has gone"],
          correctAnswer: "was going",
          explanation: "بعد (While) نستخدم ماضي مستمر: baggage مفرد غير معدود يأخذ was going.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u1-l2-ex3",
          question: "She ____________ (cut) her hand while she was chopping vegetables. (Correct)",
          options: ["cut", "was cutting", "cutted", "is cutting"],
          correctAnswer: "cut",
          explanation: "جملة while تحتوي ماضياً مستمراً (was chopping)، فالطرف الآخر ماضي بسيط وشاذ الفعل cut هو cut.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور ثانٍ"
        }
      ]
    },
    {
      id: "u1-l3",
      unitId: 1,
      lessonNumber: 3,
      titleAr: "الدرس الثالث: قطعة عمار والصفات المنتهية بـ ed/ing وظروف الحال",
      titleEn: "Lesson 3: Ammar's Story, -ed/-ing & Adverbs of Manner",
      category: "reading",
      summary: "قطعة الكتاب الرسمية للشاب عمار وحادث الجسر وتقنية روبوت الهيكل الخارجي (Exoskeleton)، قواعد الصفات المنتهية بـ ed و ing، وقواعد الصفات وظروف الحال (-ful / -fully).",
      grammarRuleFormula: "Feelings of a person/animal => -ed\nCause of the feeling => -ing\nAction Verb in sentence => Adverb (-fully)\nState/Linking Verb (is, was, seem) => Adjective (-ful)",
      detailedContent: [
        "1. قطعة الكتاب: قصة عمار (Ammar) - ص 12 - 13 من الملزمة:",
        "- عندما كان عمره 16 سنة كان في فريق السلة للمدرسة ولديه أصدقاء كثيرون.",
        "- في يوم مشمس قفز من فوق جسر إلى النهر، لكن النهر لم يكن عميقاً كفاية فارتطم بالقاع وأصيب ظهره إصابة خطيرة.",
        "- قال الأطباء إنه قد لا يمشي ثانية وبدأ العلاج الطبيعي على كرسي متحرك.",
        "- جرب الأطباء معه تقنية روبوت الهيكل الخارجي (Exoskeleton): جهاز يُلبس ساعده على الوقوف والمشي.",
        "- بعد ستة أشهر عاد للمشي ثم تعافى وعاد للعب كرة السلة.",
        "2. قواعد الصفات المنتهية بـ ed و ing (ص 14):",
        "- الصفات بـ ed تصف شعور الكائن الحي (بشر أو حيوان): tired, bored, excited, frightened.",
        "- الصفات بـ ing تصف مسبب الشعور (عاقل أو غير عاقل): tiring, boring, exciting, frightening.",
        "- إذا جاء بعد القوس اسم موصوف (عاقل أو غير عاقل) نختار ing مباشرة: an interesting person, an exciting film.",
        "- استثناء: الصفة interested نختارها دائماً إذا تبعها حرف الجر in: interested in fashion.",
        "3. الصفات وظروف الحال (-ful / -fully) (ص 15):",
        "- نختار الظرف (-fully) إذا كان بالجملة فعل حركي (action verb) أو اسم ينتهي بـ ing: She dances beautifully. / The story was wonderfully written.",
        "- نختار الصفة (-ful) مع أفعال الكينونة والحواس (am, is, are, was, were, look, feel, seem) بدون فعل رئيسي آخر: Mary is a beautiful girl."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: في قطعة عمار، السؤال المتكرر هو: What technology did the doctors try with Ammar? الجواب: An exoskeleton.",
        "في قاعدة ed / ing: انظر دائماً بعد القوس أولاً، فإذا كان هناك اسم، اختر ing مباشرةً.",
        "في قاعدة ful / fully: إذا كان الفعل الرئيسي تصريفاً ثالثاً (p.p) بعد الفراغ، نختار الظرف المنتهي بـ fully حتماً: painted beautifully."
      ],
      commonMistakes: [
        "اختيار interested بدون وجود حرف الجر in بعدها.",
        "اختيار صفة ful عند وجود فعل حركي مثل drive, sing, write, paint.",
        "الخطأ في سبب قفز عمار: He jumped because he didn't want to feel embarrassed in front of his friends."
      ],
      examples: [
        {
          en: "What was Ammar's life like when he was 16? It was great because he was part of the basketball team.",
          ar: "كيف كانت حياة عمار عندما كان عمره 16؟ كانت رائعة لأنه انضم لفريق كرة السلة.",
          highlight: "part of the basketball team",
          note: "تمرين A ص 8 كتاب النشاط"
        },
        {
          en: "She is not very interested in fashion. She prefers books and music.",
          ar: "هي ليست مهتمة جداً بالأزياء. تفضل الكتب والموسيقى.",
          highlight: "interested in",
          note: "تمرين D ص 9 كتاب النشاط"
        },
        {
          en: "He drives the car carefully.",
          ar: "يقود السيارة بحذر.",
          highlight: "drives ... carefully",
          note: "وزاري مكرر"
        }
      ],
      exercises: [
        {
          id: "u1-l3-ex1",
          question: "Why did Ammar decide to jump off the bridge?",
          options: [
            "He didn't want to feel embarrassed in front of his friends.",
            "He was a professional swimmer.",
            "The river was very deep.",
            "His father told him to jump."
          ],
          correctAnswer: "He didn't want to feel embarrassed in front of his friends.",
          explanation: "قفز عمار لأنه لم يرد أن يشعر بالإحراج أمام أصدقائه الذين كانوا يراقبونه.",
          type: "mcq",
          ministerialYear: "تمرين B ص 8 كتاب النشاط"
        },
        {
          id: "u1-l3-ex2",
          question: "I saw a very (excited / exciting) film on TV last night.",
          options: ["exciting", "excited"],
          correctAnswer: "exciting",
          explanation: "جاء بعد القوس اسم موصوف (film) وهو مسبب الإثارة، فنختار الصفة المنتهية بـ ing.",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور أول"
        },
        {
          id: "u1-l3-ex3",
          question: "The story was (beautiful / beautifully) written.",
          options: ["beautifully", "beautiful"],
          correctAnswer: "beautifully",
          explanation: "جاء بعد القوس تصريف ثالث لفعل حركي (written)، فنختار ظرف الحال المنتهي بـ fully.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        }
      ]
    },
    {
      id: "u1-l4",
      unitId: 1,
      lessonNumber: 4,
      titleAr: "الدرس الرابع: الأفعال المركبة والبادئات المعاكسة",
      titleEn: "Lesson 4: Phrasal Verbs & Negative Prefixes",
      category: "grammar",
      summary: "ترتيب المفعول به مع الأفعال المركبة (Phrasal Verbs) وحالة الضمير الإلزامية في الوسط، وقواعد البادئات المعاكسة (un-, in-, im-, il-, ir-).",
      grammarRuleFormula: "Verb + Pronoun (it/them/him/her/me/us/you) + Preposition (on/off/up/down/away)\nVerb + Noun + Preposition OR Verb + Preposition + Noun",
      detailedContent: [
        "1. الأفعال المركبة (Phrasal Verbs) - ص 16 - 17:",
        "- يتألف الفعل المركب من فعل وحرف جر مثل: turn on, turn off, give up, take up, try on.",
        "- إذا كان المفعول به اسماً (the light, the TV) يجوز وضعه قبل حرف الجر أو بعده:",
        "  Turn off the light. = Turn the light off.",
        "- إذا كان المفعول به ضميراً (it, them, him, her, me, us, you) يجب وضعه بين الفعل وحرف الجر حصراً:",
        "  Turn it off. (وليس Turn off it).",
        "2. البادئات التي تعطي معنى العكس (Prefixes) - ص 18:",
        "- البادئة (im-): توضع قبل الصفات التي تبدأ بحرف m أو p: polite -> impolite, possible -> impossible, moral -> immoral.",
        "  * شواذ مهمة جداً: popular -> unpopular (وليس impopular)، pleasant -> unpleasant.",
        "- البادئة (il-): قبل الصفات التي تبدأ بحرف l: legal -> illegal, literate -> illiterate.",
        "- البادئة (ir-): قبل الصفات التي تبدأ بحرف r: regular -> irregular, responsible -> irresponsible.",
        "- البادئة (in-): قبل الصفات التي تبدأ بـ c, a, e: correct -> incorrect, active -> inactive, expensive -> inexpensive.",
        "- البادئة (un-): قبل بقية الحروف: happy -> unhappy, fair -> unfair, healthy -> unhealthy, usual -> unusual, fortunate -> unfortunate."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: في سؤال الإملاء الوزاري، انتبه جيداً للشواذ: popular تصبح unpopular، و pleasant تصبح unpleasant.",
        "في جمل ترتيب الأفعال المركبة: بمجرد أن ترى الضمير (it) أو (them)، ضعه مباشرة بين الفعل وحرف الجر!",
        "أهم حروف الجر في المنهج: up, down, on, off, away."
      ],
      commonMistakes: [
        "وضع ضمير المفعول به بعد حرف الجر (مثلاً: give up it خطأ والصحيح give it up).",
        "إضافة im لكلمة popular وهذا خطأ وزاري متكرر.",
        "نسيان قلب الصفة كاملة في سؤال الإملاء الوزاري."
      ],
      examples: [
        {
          en: "I've already turned it on.",
          ar: "لقد شغلته مسبقاً.",
          highlight: "turned it on",
          note: "الضمير it في الوسط بين الفعل وحرف الجر"
        },
        {
          en: "Smoking is terrible. You should give it up.",
          ar: "التدخين فظيع. ينبغي عليك أن تقلع عنه.",
          highlight: "give it up",
          note: "تمرين B ص 11 كتاب النشاط"
        },
        {
          en: "polite -> impolite ; popular -> unpopular",
          ar: "مؤدب -> غير مؤدب ؛ ذو شعبية -> غير مرغوب",
          highlight: "popular -> unpopular (شاذة)",
          note: "وزاري 2017 و 2021"
        }
      ],
      exercises: [
        {
          id: "u1-l4-ex1",
          question: "Can you / turn down / it? (Put the verb and object in the correct order)",
          options: ["Can you turn it down?", "Can you turn down it?", "Can you it turn down?", "Turn down can you it?"],
          correctAnswer: "Can you turn it down?",
          explanation: "المفعول به ضمير (it) فيجب أن يأتي بين الفعل (turn) وحرف الجر (down).",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور ثانٍ"
        },
        {
          id: "u1-l4-ex2",
          question: "polite -> impolite ; moral -> ______ (Complete with correct prefix)",
          options: ["immoral", "unmoral", "inmoral", "ilmoral"],
          correctAnswer: "immoral",
          explanation: "الصفة moral تبدأ بحرف m فتأخذ البادئة im- لتصبح immoral.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        },
        {
          id: "u1-l4-ex3",
          question: "direct -> indirect ; pleasant -> ______ (Complete)",
          options: ["unpleasant", "impleasant", "inpleasant", "displeasant"],
          correctAnswer: "unpleasant",
          explanation: "الصفة pleasant شاذة عن قاعدة حرف p وتأخذ البادئة un- لتصبح unpleasant.",
          type: "mcq",
          ministerialYear: "وزاري 2022 تمهيدي"
        }
      ]
    },
    {
      id: "u1-l5",
      unitId: 1,
      lessonNumber: 5,
      titleAr: "الدرس الخامس: أسلوب الأمر للنصيحة وتعابير الكمية",
      titleEn: "Lesson 5: Imperatives for Advice & Quantifiers",
      category: "grammar",
      summary: "النصائح الطبية العشر بصيغة الأمر (Imperatives to give advice) وتعابير الكمية (much, many, a few, a little) وقواعد الأسماء المعدودة وغير المعدودة.",
      grammarRuleFormula: "Countable Nouns (plural): many / a few\nUncountable Nouns (singular): much / a little\nAffirmative => a few / a little\nNegative / Questions => many / much",
      detailedContent: [
        "1. النصائح الطبية العشر بصيغة الأمر (ص 19 من الملزمة - تمرين كتاب الطالب ص 10):",
        "1. Get enough sleep. (An average of eight hours a night is about right).",
        "2. Eat a balanced diet. (Make sure you eat plenty of fresh fruit and vegetables...).",
        "3. Never miss breakfast. (It's the most important meal of the day).",
        "4. Take some exercise every day. (Ideally, do sport three times a week for an hour...).",
        "5. Drink plenty of water. (At least a litre and a half every day...).",
        "6. See the dentist for regular checkups. (And brush your teeth three times a day).",
        "7. Don't drink too much coffee. (Tea is better for your heart and can even lower your blood pressure).",
        "8. Don't smoke. (If you do, ask a doctor for help with giving it up).",
        "9. Look after your eyes. (Get them tested once a year).",
        "10. Be safe when you travel. (Make sure you are up to date with vaccinations...).",
        "2. تعابير الكمية (Expressions of Quantity) - ص 20 - 21:",
        "- الأسماء المعدودة (Countable nouns): تنتهي بـ s الجمع أو جمع شاذ (people, children, men). نستخدم معها: many (كثير), a few (قليل).",
        "- الأسماء غير المعدودة (Uncountable nouns): مفردة لا تجمع (time, money, sleep, exercise, food, space, butter). نستخدم معها: much (كثير), a little (قليل).",
        "- في الجمل المنفية نختار غالباً: much أو many.",
        "- في الجمل المثبتة نختار غالباً: a little أو a few."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تأتي جمل النصائح العشر في الامتحان الوزاري بإعطائك الشرح بين قوسين ويطلب منك كتابة جملة الأمر نصاً!",
        "انتبه لكلمة (time): إذا كانت مفردة بدون s فهي غير معدودة (How much time)، وإذا كانت منتهية بـ s فهي معدودة بمعنى مرات (How many times).",
        "كلمة (exercise): بدون s غير معدودة (much exercise)، ومع s معدودة (many exercises)."
      ],
      commonMistakes: [
        "كتابة نصيحة غير دقيقة بدلاً من الجملة الوزارية المحفوظة نصاً.",
        "اعتبار كلمة people غير معدودة، بينما هي جمع شاذ معدود تأخذ (many / a few).",
        "اعتبار كلمة money معدودة، بينما تعامل كاسم غير معدود تأخذ (much / a little)."
      ],
      examples: [
        {
          en: "_____ (An average of eight hours a night is about right). Use an imperative to give advice.",
          ar: "نل قسطاً كافياً من النوم: Get enough sleep.",
          highlight: "Get enough sleep",
          note: "وزاري 2015 و 2019"
        },
        {
          en: "How many apples do we need? / How much exercise does he take a week?",
          ar: "كم تفاحة نحتاج؟ / كم من التمرين يمارس أسبوعياً؟",
          highlight: "How many apples / How much exercise",
          note: "تمرين C ص 12 كتاب النشاط"
        },
        {
          en: "We need a little butter for this cake. / You'll have to wait a few minutes.",
          ar: "نحتاج القليل من الزبدة لهذه الكعكة. / سيتعين عليك الانتظار بضع دقائق.",
          highlight: "a little butter / a few minutes",
          note: "تمرين D ص 13 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u1-l5-ex1",
          question: "________. (It's the most important meal of the day.) Use an imperative to give advice.",
          options: ["Never miss breakfast", "Eat a balanced diet", "Get enough sleep", "Don't smoke"],
          correctAnswer: "Never miss breakfast",
          explanation: "الجملة المقترنة بوجبة الإفطار هي: Never miss breakfast.",
          type: "mcq",
          ministerialYear: "وزاري 2018 دور أول"
        },
        {
          id: "u1-l5-ex2",
          question: "How (many / much) time do you spend on your homework?",
          options: ["much", "many"],
          correctAnswer: "much",
          explanation: "كلمة time هنا مفردة بدون s وتعني الوقت، وهي غير معدودة فتأخذ much.",
          type: "mcq",
          ministerialYear: "وزاري 2020 دور ثانٍ"
        },
        {
          id: "u1-l5-ex3",
          question: "There were only (a few / a little) people at the party.",
          options: ["a few", "a little"],
          correctAnswer: "a few",
          explanation: "كلمة people جمع شاذ معدود وتأخذ a few.",
          type: "mcq",
          ministerialYear: "وزاري 2022 دور أول"
        }
      ]
    },
    {
      id: "u1-l6",
      unitId: 1,
      lessonNumber: 6,
      titleAr: "الدرس السادس: قاعدة Used to وصفات المقارنة",
      titleEn: "Lesson 6: Used to & Comparative Adjectives",
      category: "grammar",
      summary: "قاعدة used to للتعبير عن عادات الماضي، صفات المقارنة (-er / more than)، والمقارنة بين الحاضر والماضي بقاعدتي (than) و (as...as).",
      grammarRuleFormula: "Subject + used to + infinitive\nNegative: Subject + didn't use to + infinitive\nQuestion: Did + Subject + use to + infinitive?\nSubject + is/are + comparative + than it/they used to be\nSubject + isn't/aren't + as + adj + as it/they used to be",
      detailedContent: [
        "1. قاعدة Used to (ص 22):",
        "- الإثبات: فاعل + used to + فعل مجرد. (I used to smoke).",
        "- النفي: فاعل + didn't use to + فعل مجرد بدون d. (I didn't use to eat carrots).",
        "- السؤال: ?Did + فاعل + use to + فعل مجرد. (Did families use to be bigger?).",
        "2. المقارنة مع الحاضر (but now) - ص 25:",
        "- إذا كانت الجملة الأولى في الماضي مع used to، والشق الثاني يبدأ بـ (but now)، نستخدم المضارع البسيط:",
        "  He used to have his hair cut at the hairdresser's, but now his wife cuts it for him.",
        "- إذا دل الشق الثاني على الماضي (last year, two years ago, yesterday) نستخدم ماضياً بسيطاً:",
        "  I used to have a bicycle, but someone stole it last month.",
        "3. صفات المقارنة (ص 22 - 24):",
        "- صفة المقطع الواحد: نضيف er (tall -> taller, big -> bigger, easy -> easier).",
        "- صفة أكثر من مقطع: نضع more قبلها (more expensive, more dangerous, more boring).",
        "- صفات شاذة: good -> better, bad -> worse, far -> farther, little -> less, many/much -> more.",
        "4. أدوات المقارنة بين الحاضر والماضي (ص 23 - 24):",
        "- قاعدة than: الفاعل + is / are + صفة مقارنة + than it/they used to be.",
        "  Life is faster now than it used to be.",
        "- قاعدة as...as: الفاعل + isn't / aren't + as + صفة مجردة + as it/they used to be.",
        "  Life isn't as easy as it used to be."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: عند استخدام (as...as) نضع صفة مجردة تماماً بين القوسين بدون er وبدون more: as fast as.",
        "في قاعدة (than): نضع صفة مقارنة (faster / more violent) متبوعة بـ than it used to be (للمفرد) أو than they used to be (للجمع).",
        "احذر من حذف حرف d في used to مع didn't: نقول didn't use to وليس didn't used to."
      ],
      commonMistakes: [
        "كتابة d في didn't use to.",
        "وضع صفة مقارنة داخل as...as (مثل as faster as وهذا خطأ فادح).",
        "استخدام it used to be مع الفاعل الجمع (مثل Cars أو Films) والصحيح they used to be."
      ],
      examples: [
        {
          en: "Films are more violent than they used to be.",
          ar: "الأفلام أكثر عنفاً مما كانت عليه سابقاً.",
          highlight: "more violent than they used to be",
          note: "تمرين C ص 15 كتاب النشاط"
        },
        {
          en: "Films aren't as romantic as they used to be.",
          ar: "لم تعد الأفلام رومانسية كما كانت سابقاً.",
          highlight: "aren't as romantic as they used to be",
          note: "تمرين C ص 15 كتاب النشاط"
        },
        {
          en: "She didn't use to be so thin, but she got very ill last year and lost a lot of weight.",
          ar: "لم تكن نحيفة هكذا، لكنها مرضت بشدة العام الماضي وخسرت وزناً كبيراً.",
          highlight: "didn't use to be ... got ... lost",
          note: "تمرين G ص 26 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u1-l6-ex1",
          question: "Cars aren't as (fast / faster) as they used to be.",
          options: ["fast", "faster"],
          correctAnswer: "fast",
          explanation: "بين أداة (as...as) يجب وضع صفة مجردة خالية من أي إضافة.",
          type: "mcq",
          ministerialYear: "وزاري 2017 دور أول"
        },
        {
          id: "u1-l6-ex2",
          question: "He (not like) Chinese food, but now he loves it. (Use correct form of used to)",
          options: ["didn't use to like", "didn't used to like", "used not to like", "doesn't use to like"],
          correctAnswer: "didn't use to like",
          explanation: "نفي used to يكون بـ didn't use to مع حذف حرف الـ d من use.",
          type: "mcq",
          ministerialYear: "وزاري 2019 دور أول"
        },
        {
          id: "u1-l6-ex3",
          question: "Doctors are (well / better) trained than they used to be.",
          options: ["better", "well"],
          correctAnswer: "better",
          explanation: "وجود أداة المقارنة (than) يتطلب صيغة مقارنة؛ وصيغة المقارنة من well/good هي better.",
          type: "mcq",
          ministerialYear: "وزاري 2021 دور ثانٍ"
        }
      ]
    },
    {
      id: "u1-l7",
      unitId: 1,
      lessonNumber: 7,
      titleAr: "الدرس السابع: لنبدأ بالنظام الغذائي (Let's start with diet)",
      titleEn: "Lesson 7: Let's Start with Diet & Healthcare",
      category: "reading",
      summary: "نص القراءة الاستيعابي للدكتور سمير رمزي حول مسؤولية الفرد عن صحته، مخاطر السكر والدهون والسكري، السمنة في بريطانيا، وأثر قلة الحركة والتدخين.",
      grammarRuleFormula: "Key Vocabulary:\ndiet = what you eat\noverweight = weighing more than you should\nregular = when you do something often\nlungs = body part responsible for breathing",
      detailedContent: [
        "نص القراءة: على الناس أن يتحملوا مسؤولية صحتهم - بقلم د. سمير رمزي (ص 27 - 29 من الملزمة):",
        "- تنفق الحكومة البريطانية ملايين الجنيهات سنوياً على الرعاية الصحية لأشخاص جلبوا الأمراض لأنفسهم بسبب سوء التغذية وقلة الرياضة والتدخين.",
        "- النظام الغذائي: 60% من البريطانيين يعانون من زيادة الوزن ومعرضون لخطر الإصابة بالسكري بسبب الإفراط في الدهون والسكريات والأملاح.",
        "- التمارين الرياضية: في الماضي كان الناس يمشون ويركبون الدراجات، والآن يركبون السيارات حتى للمسافات القصيرة، والأطفال يقضون ساعات أمام الشاشات.",
        "- التدخين: يلحق الضرر بالرئتين والقلب، والمدخنون يحتاجون رعاية طبية أكثر من غيرهم.",
        "- رأي الكاتب: يجب ألا تدفع الحكومة الرعاية الصحية المجانية لمن لا يعتنون بأنفسهم أو يربون أطفالهم بطريقة غير صحية.",
        "تعاريف مهمة (تمرين D ص 17 كتاب النشاط):",
        "1. diet (noun) = what you eat (نظام غذائي).",
        "2. overweight (adjective) = weighing more than you should (بدين).",
        "3. regular (adjective) = when you do something often (منتظم).",
        "4. lungs (noun) = the part of your body responsible for breathing (رئتان).",
        "5. non-smokers (noun) = people who don't smoke (غير مدخنين).",
        "6. bring up (phrasal verb) = to raise children (يربي)."
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: تعاريف تمرين D ص 17 تأتي نصاً في السؤال الثالث فرع B (التوصيلات) أو فرع A (الإسقاطات).",
        "سؤال وزاري متكرر: Because of their bad diet, 60% of British people (are overweight and could get diabetes).",
        "سؤال وزاري: Dr Ramzi argues that many illnesses are due to (bad habits)."
      ],
      commonMistakes: [
        "كتابة definition لكلمة diet بشكل خاطئ، تذكر أنها: what you eat.",
        "الخلط بين نسبة البريطانيين المعرضين للسكري (60%)."
      ],
      examples: [
        {
          en: "diet = what you eat ; overweight = weighing more than you should.",
          ar: "النظام الغذائي = ما تأكله ؛ البدين = وزن زائد عن الحد.",
          highlight: "what you eat / weighing more than you should",
          note: "تمرين D ص 17 كتاب النشاط"
        },
        {
          en: "The government spends millions on people who have made themselves ill.",
          ar: "تنفق الحكومة الملايين على أشخاص جعلوا أنفسهم مرضى.",
          highlight: "made themselves ill",
          note: "تمرين A ص 16 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u1-l7-ex1",
          question: "The part of your body responsible for breathing is the ________.",
          options: ["lungs", "heart", "stomach", "bones"],
          correctAnswer: "lungs",
          explanation: "العضو المسؤول عن التنفس في الجسم هو الرئتان (lungs).",
          type: "mcq",
          ministerialYear: "تمرين D ص 17"
        },
        {
          id: "u1-l7-ex2",
          question: "60% of British people are at risk of becoming ________ because of their bad diet.",
          options: ["diabetic", "blind", "paralyzed", "deaf"],
          correctAnswer: "diabetic",
          explanation: "60% من البريطانيين معرضون لخطر الإصابة بمرض السكري (diabetic).",
          type: "mcq",
          ministerialYear: "تمرين C ص 17"
        }
      ]
    },
    {
      id: "u1-l9",
      unitId: 1,
      lessonNumber: 9,
      titleAr: "الدرس التاسع: قطعة نجلة عماد لفتة (Najla Imad Lafta)",
      titleEn: "Lesson 9: Najla Imad Lafta (Paralympic Champion)",
      category: "reading",
      summary: "قصة البطلة العراقية نجلة عماد لفتة، نجاتها من هجوم قنبلة في عمر الثالثة، تحدي الإعاقة واحتراف تنس الطاولة، والتتويج بذهبية الألعاب البارالمبية في باريس 2024.",
      grammarRuleFormula: "Key Fact:\nAge 3: lost right arm and both legs in bomb attack\nAge 10: discovered table tennis\nAge 12: joined Iraqi Paralympic team\nAge 16: Tokyo 2020 Paralympics\nAge 19: Paris 2024 Paralympic Gold Medal",
      detailedContent: [
        "قطعة الكتاب الرسمية: نجلة عماد لفتة (ص 29 - 31 من الملزمة):",
        "- طفلة عراقية كانت تنتظر والدها على عتبة الباب، وفي عمر 3 سنوات انفجرت قنبلة بسيارة والدها ففقدت ذراعها اليمنى وكلا ساقيها.",
        "- نشأت وتكيفت مع الحياة على كرسي متحرك بدعم أسرتها ونظام الرعاية الصحية العراقي.",
        "- في عمر 10 سنوات: اكتشفت تنس الطاولة وتدربت بيدها اليسرى رغم أنها ولدت عسراء (right-handed أصلاً وتدربت باليسرى).",
        "- في عمر 12 سنة: انضمت للفريق البارالمبي العراقي وحصلت على أطراف اصطناعية (prostheses) ساعدتها على اللعب واقفة.",
        "- في عمر 16 سنة: أصغر لاعبة تتأهل لبارالمبياد طوكيو 2020، وفازت بذهبية الألعاب الآسيوية 2022.",
        "- في باريس 2024 (عمرها 19 سنة): حققت الميدالية الذهبية البارالمبية بعد فوزها على بطلة طوكيو الأوكرانية مارينا بنتيجة 3-1.",
        "- مقولتها الخالدة: 'Never stop, nothing is impossible. With our determination and resolve, we can achieve what we want and make our dreams a reality.'"
      ],
      teacherNotes: [
        "ملاحظة الأستاذ مصطفى تركي: قطعة نجلة عماد من أهم القطع الاستيعابية الحديثة لعام 2027.",
        "سؤال وزاري رئيسي: How did the prostheses help Najla? الجواب: They allowed her to play standing.",
        "سؤال وزاري: How old was Najla when she joined the Paralympic team? الجواب: She was 12 years old."
      ],
      commonMistakes: [
        "القول بأن نجلة ولدت عسراء (left-handed)، والصحيح أنها ولدت تستخدم يدها اليمنى (right-handed) واضطرت للتدرب باليسرى.",
        "الخطأ في تاريخ فوزها بذهبية باريس البارالمبية (2024)."
      ],
      examples: [
        {
          en: "What did Najla like to do as a little girl? She liked waiting at her doorstep for her father to arrive from work.",
          ar: "ماذا كانت تحب أن تفعل وهي طفلة؟ كانت تحب انتظار والدها عند عتبة الباب عند عودته من العمل.",
          highlight: "waiting at her doorstep for her father",
          note: "تمرين A ص 20 كتاب النشاط"
        },
        {
          en: "The prostheses allowed Najla to play standing, which made a big difference to her game.",
          ar: "سمحت الأطراف الاصطناعية لنجلة باللعب واقفة، مما أحدث فارقاً كبيراً في أدائها.",
          highlight: "play standing",
          note: "تمرين B ص 20 كتاب النشاط"
        }
      ],
      exercises: [
        {
          id: "u1-l9-ex1",
          question: "How did Najla's life change when she was ten years old?",
          options: [
            "She discovered table tennis.",
            "She moved to London.",
            "She learned how to walk without help.",
            "She won a gold medal."
          ],
          correctAnswer: "She discovered table tennis.",
          explanation: "في سن العاشرة، تغيرت حياة نجلة للمرة الثانية عندما اكتشفت رياضة تنس الطاولة.",
          type: "mcq",
          ministerialYear: "تمرين A ص 20"
        },
        {
          id: "u1-l9-ex2",
          question: "Why did the prostheses help Najla play better?",
          options: [
            "Because she could play standing.",
            "Because they were lighter.",
            "Because they were made of plastic.",
            "Because she could run faster."
          ],
          correctAnswer: "Because she could play standing.",
          explanation: "ساعدتها الأطراف الاصطناعية لأنها مكنتها من اللعب وهي واقفة (play standing).",
          type: "mcq",
          ministerialYear: "تمرين A ص 20"
        },
        {
          id: "u1-l9-ex3",
          question: "Najla won the Paris Paralympic gold medal in ________.",
          options: ["2024", "2020", "2022", "2018"],
          correctAnswer: "2024",
          explanation: "فازت نجلة بالميدالية الذهبية البارالمبية في دورة باريس عام 2024.",
          type: "mcq",
          ministerialYear: "تمرين B ص 20"
        }
      ]
    }
  ]
};
