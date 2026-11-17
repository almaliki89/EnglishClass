import type { EducationalGrade } from '../types';

export type TenseTimeFocus =
  | 'past'
  | 'present'
  | 'future'
  | 'past-to-present'
  | 'past-sequence'
  | 'future-in-past'
  | 'mixed';

export interface TenseTeachingItem {
  title: string;
  explanation: string;
  pattern?: string;
  example?: string;
  translation?: string;
}

export interface TenseTeachingExample {
  en: string;
  ar: string;
  focus: string;
  why: string;
}

export interface TenseTeachingPractice {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  skill: string;
}

export interface TenseTeachingGuide {
  lessonId: string;
  grade: EducationalGrade;
  gradeLabel: string;
  topic: string;
  timeFocus: TenseTimeFocus;
  context: string;
  meaning: string;
  timeline: string;
  outcomes: string[];
  uses: TenseTeachingItem[];
  forms: TenseTeachingItem[];
  contrast: TenseTeachingItem[];
  clues: TenseTeachingItem[];
  verbTips: string[];
  examples: TenseTeachingExample[];
  commonErrors: TenseTeachingItem[];
  practice: TenseTeachingPractice[];
  takeaway: string;
}

const PS_FORMS: TenseTeachingItem[] = [
  { title: 'الإثبات', pattern: 'I / You / We / They + base verb\nHe / She / It + verb(s/es)', explanation: 'نستخدم الفعل بصورته الأساسية مع معظم الضمائر، ونضيف s أو es مع he / she / it.', example: 'Maha works in Basra.', translation: 'مها تعمل في البصرة.' },
  { title: 'النفي', pattern: 'I / You / We / They + do not + base verb\nHe / She / It + does not + base verb', explanation: 'بعد do not أو does not يعود الفعل إلى صورته الأساسية؛ لا نضيف s بعد does.', example: 'Maha does not work on Fridays.', translation: 'مها لا تعمل أيام الجمعة.' },
  { title: 'السؤال', pattern: 'Do / Does + subject + base verb ...?', explanation: 'نضع Do أو Does في البداية، ثم الفاعل، ثم الفعل الأساسي.', example: 'Does Maha work here?', translation: 'هل تعمل مها هنا؟' },
];

const PC_FORMS: TenseTeachingItem[] = [
  { title: 'الإثبات', pattern: 'Subject + am / is / are + verb-ing', explanation: 'نختار am أو is أو are بحسب الفاعل، ثم نضيف ing إلى الفعل.', example: 'Maha is studying now.', translation: 'مها تدرس الآن.' },
  { title: 'النفي', pattern: 'Subject + am / is / are + not + verb-ing', explanation: 'نضيف not بعد فعل be، ولا نستخدم do أو does.', example: 'Maha is not watching TV.', translation: 'مها لا تشاهد التلفاز الآن.' },
  { title: 'السؤال', pattern: 'Am / Is / Are + subject + verb-ing ...?', explanation: 'نقدّم فعل be على الفاعل، ونبقي الفعل مع ing.', example: 'Is Maha studying?', translation: 'هل تدرس مها الآن؟' },
];

const PAST_SIMPLE_FORMS: TenseTeachingItem[] = [
  { title: 'الإثبات', pattern: 'Subject + V2', explanation: 'نستخدم التصريف الثاني: نضيف ed للفعل القياسي أو نختار التصريف الماضي للفعل الشاذ.', example: 'We visited the museum yesterday.', translation: 'زرنا المتحف أمس.' },
  { title: 'النفي', pattern: 'Subject + did not + base verb', explanation: 'Did يحمل علامة الماضي؛ لذلك يعود الفعل الرئيسي إلى المصدر من دون ed أو تصريف ثانٍ.', example: 'We did not visit the museum.', translation: 'لم نزُر المتحف.' },
  { title: 'السؤال', pattern: 'Did + subject + base verb ...?', explanation: 'نبدأ بـ Did ثم الفاعل ثم المصدر، وليس التصريف الثاني.', example: 'Did you visit the museum?', translation: 'هل زرت المتحف؟' },
];

const PAST_CONTINUOUS_FORMS: TenseTeachingItem[] = [
  { title: 'الإثبات', pattern: 'Subject + was / were + verb-ing', explanation: 'نستخدم was مع I / he / she / it، وwere مع you / we / they.', example: 'They were walking home.', translation: 'كانوا يمشون إلى البيت.' },
  { title: 'النفي', pattern: 'Subject + was / were + not + verb-ing', explanation: 'نضيف not بعد was أو were.', example: 'They were not walking quickly.', translation: 'لم يكونوا يمشون بسرعة.' },
  { title: 'السؤال', pattern: 'Was / Were + subject + verb-ing ...?', explanation: 'نقدّم was أو were على الفاعل.', example: 'Were they walking home?', translation: 'هل كانوا يمشون إلى البيت؟' },
];

const PRESENT_PERFECT_FORMS: TenseTeachingItem[] = [
  { title: 'الإثبات', pattern: 'Subject + have / has + past participle (V3)', explanation: 'have مع I / you / we / they، وhas مع he / she / it. نستخدم التصريف الثالث.', example: 'I have finished my homework.', translation: 'أنهيت واجبي (والنتيجة مهمة الآن).' },
  { title: 'النفي', pattern: 'Subject + have / has + not + V3', explanation: 'نضع not بعد have أو has.', example: 'She has not finished yet.', translation: 'لم تنهِ بعد.' },
  { title: 'السؤال', pattern: 'Have / Has + subject + V3 ...?', explanation: 'نقدّم have أو has على الفاعل، ونبقي الفعل في التصريف الثالث.', example: 'Have you ever travelled by train?', translation: 'هل سبق أن سافرت بالقطار؟' },
];

const PRESENT_PERFECT_CONTINUOUS_FORMS: TenseTeachingItem[] = [
  { title: 'الإثبات', pattern: 'Subject + have / has + been + verb-ing', explanation: 'نجمع have/has مع been ثم الفعل المنتهي بـ ing؛ التركيز على النشاط ومدته.', example: 'Ali has been studying for two hours.', translation: 'علي يدرس منذ ساعتين.' },
  { title: 'النفي', pattern: 'Subject + have / has + not + been + verb-ing', explanation: 'نضع not بعد have أو has.', example: 'Ali has not been sleeping well.', translation: 'علي لا ينام جيداً في هذه الفترة.' },
  { title: 'السؤال', pattern: 'How long + have / has + subject + been + verb-ing?', explanation: 'نستخدم How long للسؤال عن المدة، ثم have/has والفاعل وbeen والفعل مع ing.', example: 'How long have you been learning English?', translation: 'منذ متى وأنت تتعلم الإنجليزية؟' },
];

const FUTURE_SIMPLE_FORMS: TenseTeachingItem[] = [
  { title: 'الإثبات', pattern: 'Subject + will + base verb', explanation: 'بعد will يأتي المصدر من دون to ومن دون s، مع جميع الضمائر.', example: 'I will call you tonight.', translation: 'سأتصل بك الليلة.' },
  { title: 'النفي', pattern: 'Subject + will not (won’t) + base verb', explanation: 'نضيف not بعد will، ولا نغيّر الفعل الأساسي.', example: 'I will not forget.', translation: 'لن أنسى.' },
  { title: 'السؤال', pattern: 'Will + subject + base verb ...?', explanation: 'نقدّم will على الفاعل.', example: 'Will you help me?', translation: 'هل ستساعدني؟' },
];

const PPC_AND_PAST = [
  { title: 'Past Simple', pattern: 'V2 / did + base verb', explanation: 'حدث وقع في وقت ماضٍ منتهٍ ومحدد أو منفصل عن الحاضر.', example: 'I visited Erbil last year.', translation: 'زرت أربيل السنة الماضية.' },
  { title: 'Present Perfect', pattern: 'have / has + V3', explanation: 'تجربة أو حدث ماضٍ من دون تحديد وقت ماضٍ منتهٍ، أو له صلة بالحاضر.', example: 'I have visited Erbil.', translation: 'سبق أن زرت أربيل.' },
];

const GUIDES: TenseTeachingGuide[] = [
  {
    lessonId: '3rd-u5-l1', grade: 'third-intermediate', gradeLabel: 'الثالث المتوسط',
    topic: 'الماضي البسيط والماضي المستمر',
    timeFocus: 'past',
    context: 'تخيّل أنك تحكي ما حدث أمس: كنت تلعب كرة القدم، وفجأة بدأ المطر. نحتاج صيغة تصف المشهد المستمر وصيغة تصف الحدث الذي وقع خلاله.',
    meaning: 'الماضي البسيط يخبرنا بما حدث وانتهى. الماضي المستمر يرسم ما كان جارياً في لحظة ماضية. تخيّل الأول لقطة قصيرة، والثاني مشهداً ممتداً في الخلفية.',
    timeline: 'الزمنان يقعان قبل الآن. المستمر يغطّي فترة في الماضي، والبسيط يحدد حدثاً وقع خلالها أو حدثاً منتهياً.',
    outcomes: ['أميّز بين حدث ماضٍ منتهٍ ومشهد كان مستمراً.', 'أكوّن الإثبات والنفي والسؤال في الزمنين.', 'أختار أداة الربط وفق معنى الجملة، لا بحفظ كلمة وحدها.'],
    uses: [
      { title: 'حدث وقع وانتهى', explanation: 'نختار الماضي البسيط لحدث مكتمل.', pattern: 'Past Simple', example: 'The phone rang.', translation: 'رنّ الهاتف.' },
      { title: 'خلفية أو فعل كان جارياً', explanation: 'نختار الماضي المستمر لوصف ما كان يحدث في ذلك الوقت.', pattern: 'Past Continuous', example: 'I was doing my homework.', translation: 'كنت أؤدي واجبي.' },
      { title: 'حدث قطع فعلاً مستمراً', explanation: 'نجمع الزمنين عندما وقع حدث قصير خلال نشاط أطول.', pattern: 'Past Continuous + when + Past Simple', example: 'I was doing my homework when the phone rang.', translation: 'كنت أؤدي واجبي عندما رنّ الهاتف.' },
    ],
    forms: [...PAST_SIMPLE_FORMS, ...PAST_CONTINUOUS_FORMS],
    contrast: [
      { title: 'كيف أختار؟', explanation: 'اسأل: هل أصف ما كان جارياً في الخلفية، أم أذكر ما حدث؟ لا تعتمد على طول الجملة؛ اعتمد على معنى الحدث.', example: 'While I was cooking, my friend arrived.', translation: 'كنت أطبخ (مستمر)، ثم وصل صديقي (حدث).', pattern: 'was cooking = background | arrived = event' },
      { title: 'When و While', explanation: 'غالباً نقدّم الفعل المستمر بعد while، ونستخدم when لتحديد لحظة وقوع الحدث. لكن أداة الربط وحدها لا تكفي؛ افهم علاقة الفعلين.', example: 'The lights went out while we were studying.', translation: 'انطفأت الأضواء بينما كنا ندرس.', pattern: 'اختر الزمن بحسب العلاقة بين الحدثين.' },
    ],
    clues: [
      { title: 'yesterday / last night / ago', explanation: 'تدل غالباً على وقت ماضٍ منتهٍ، لكنها لا تحدد وحدها إن كان الحدث بسيطاً أو مستمراً.' },
      { title: 'at 8 pm yesterday', explanation: 'إذا كان المقصود ما كان جارياً في تلك اللحظة، فالماضي المستمر مناسب.' },
      { title: 'while / when / as', explanation: 'علامات ربط تحتاج قراءة الحدثين معاً، وليست إجابة آلية.' },
    ],
    verbTips: ['في المستمر: was مع I/he/she/it، وwere مع you/we/they.', 'أضف ing إلى الفعل مع مراعاة حذف e أحياناً ومضاعفة الحرف الأخير في بعض الأفعال.', 'في النفي والسؤال بالماضي البسيط نستخدم did، ثم نعيد الفعل إلى المصدر.'],
    examples: [
      { en: 'I was walking home when I saw an accident.', ar: 'كنت أمشي إلى البيت عندما رأيت حادثاً.', focus: 'was walking / saw', why: 'المشي كان جارياً، والرؤية حدثت خلاله.' },
      { en: 'While Sara was reading, the lights went out.', ar: 'بينما كانت سارة تقرأ، انطفأت الأضواء.', focus: 'was reading / went out', why: 'القراءة خلفية مستمرة، وانطفاء الضوء حدث قصير.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'I was play football.', explanation: 'بعد was/were نحتاج الفعل مع ing.', example: 'I was playing football.' },
      { title: 'خطأ', pattern: 'Did you went?', explanation: 'بعد did نستخدم المصدر، لأن did يحمل علامة الماضي.', example: 'Did you go?' },
    ],
    practice: [
      { prompt: 'The children ___ when their mother came home.', options: ['played', 'were playing', 'are playing'], answer: 'were playing', explanation: 'اللعب كان جارياً وقت وصول الأم؛ نستخدم الماضي المستمر.', skill: 'تمييز المعنى' },
      { prompt: 'While I ___, the doorbell rang.', options: ['studied', 'was studying', 'am studying'], answer: 'was studying', explanation: 'الدراسة خلفية مستمرة، ورنين الجرس حدث وقع خلالها.', skill: 'اختيار الزمن' },
      { prompt: 'اختر الصيغة الصحيحة: She ___ TV last night.', options: ['didn’t watched', 'didn’t watch', 'wasn’t watch'], answer: 'didn’t watch', explanation: 'بعد didn’t يأتي الفعل بالمصدر.', skill: 'النفي' },
    ],
    takeaway: 'الماضي البسيط = ماذا حدث؟ الماضي المستمر = ماذا كان يحدث وقتها؟ وعند اجتماعهما، حدّد الخلفية والحدث القاطع.',
  },
  {
    lessonId: '3rd-u5-l3', grade: 'third-intermediate', gradeLabel: 'الثالث المتوسط',
    topic: 'will و be going to',
    timeFocus: 'future',
    context: 'تخيّل أنك تتحدث عن الغد: قررت الآن أن تساعد صديقك، وفي موقف آخر رتبت مسبقاً للسفر. كلاهما مستقبل، لكن سبب اختيار الصيغة مختلف.',
    meaning: 'نستخدم will كثيراً للقرار الذي نتخذه لحظة الكلام أو التوقع والرأي والوعد. ونستخدم be going to للخطة أو النية التي سبقت الكلام، أو للتوقع المبني على دليل ظاهر.',
    timeline: 'الصيغتان تتحدثان عما بعد الآن. الفرق ليس في وقت الحدث فقط، بل في موقف المتحدث: قرار لحظي أو توقع، مقابل خطة سابقة أو دليل حاضر.',
    outcomes: ['أميّز القرار اللحظي من الخطة المسبقة.', 'أكوّن النفي والسؤال بعد will وgoing to.', 'لا أختار الصيغة من كلمة tomorrow وحدها.'],
    uses: [
      { title: 'قرار الآن أو وعد', explanation: 'قررت أثناء الكلام أو تقدم وعداً.', pattern: 'will + base verb', example: 'I will answer the phone.', translation: 'سأجيب عن الهاتف.' },
      { title: 'خطة أو نية سابقة', explanation: 'كانت الفكرة أو الخطة موجودة قبل لحظة الكلام.', pattern: 'am/is/are going to + base verb', example: 'We are going to visit our grandparents.', translation: 'نحن نخطط لزيارة أجدادنا.' },
      { title: 'توقع بدليل ظاهر', explanation: 'تستدل من شيء تراه الآن.', pattern: 'be going to', example: 'Look at those clouds. It is going to rain.', translation: 'انظر إلى تلك الغيوم. يبدو أنها ستمطر.' },
    ],
    forms: [
      ...FUTURE_SIMPLE_FORMS,
      { title: 'going to', pattern: 'Subject + am / is / are + going to + base verb', explanation: 'غيّر am/is/are بحسب الفاعل، ثم going to، ثم المصدر.', example: 'She is going to study.', translation: 'هي تنوي الدراسة.' },
      { title: 'نفي وسؤال going to', pattern: 'Subject + am/is/are + not + going to + base verb\nAm/Is/Are + subject + going to + base verb?', explanation: 'النفي يكون بعد be، والسؤال بتقديم be على الفاعل.', example: 'Are they going to travel?', translation: 'هل ينوون السفر؟' },
    ],
    contrast: [
      { title: 'قرار الآن أم خطة سابقة؟', explanation: 'اسأل: هل قررت الآن رداً على الموقف، أم كانت لديك نية من قبل؟', example: 'The phone is ringing. I’ll answer it. / I’m going to study medicine.', translation: 'سأجيب الآن. / أنوي دراسة الطب.', pattern: 'قرار لحظي = will | نية سابقة = going to' },
    ],
    clues: [
      { title: 'I think / probably', explanation: 'قد ترافق التوقع باستخدام will، لكن المعنى والسياق هما الأساس.' },
      { title: 'Look! / evidence', explanation: 'وجود دليل ظاهر قد يدعم going to.' },
      { title: 'tomorrow / next week', explanation: 'هذه تحدد زمن المستقبل، لكنها لا تختار وحدها will أو going to.' },
    ],
    verbTips: ['بعد will يأتي المصدر دائماً: will go، وليس will goes أو will to go.', 'في going to نغيّر be حسب الفاعل: am / is / are.', 'في السؤال لا نضع do مع will أو be going to.'],
    examples: [
      { en: 'I’m thirsty. I’ll get some water.', ar: 'أنا عطشان. سأحضر بعض الماء.', focus: 'I’ll get', why: 'قرار اتُخذ الآن بسبب الموقف.' },
      { en: 'They are going to move to a new house next month.', ar: 'سينتقلون إلى بيت جديد الشهر القادم وفق خطة.', focus: 'are going to move', why: 'خطة أو نية سابقة.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'She will goes.', explanation: 'بعد will لا نضيف s للفعل.', example: 'She will go.' },
      { title: 'خطأ', pattern: 'They going to travel.', explanation: 'لا بد من فعل be قبل going to.', example: 'They are going to travel.' },
    ],
    practice: [
      { prompt: 'The phone is ringing. I ___ answer it.', options: ['will', 'am going to'], answer: 'will', explanation: 'اتخذ المتحدث القرار لحظة سماع الهاتف.', skill: 'اختيار بحسب الموقف' },
      { prompt: 'We bought the tickets yesterday. We ___ travel on Friday.', options: ['will', 'are going to'], answer: 'are going to', explanation: 'شراء التذاكر دليل على وجود ترتيب سابق.', skill: 'تمييز الخطة' },
      { prompt: 'She ___ visit us. The tickets are already booked.', options: ['is going to', 'will to'], answer: 'is going to', explanation: 'نستخدم be going to للخطة، وبعدها المصدر.', skill: 'بناء الصيغة' },
    ],
    takeaway: 'لا تحفظ أن will وgoing to تعنيان المستقبل فقط؛ اسأل عن نية المتحدث ودليله ووقت اتخاذ القرار.',
  },
  {
    lessonId: '4th-u1-l1', grade: 'fourth-preparatory', gradeLabel: 'الرابع الإعدادي',
    topic: 'المضارع البسيط',
    timeFocus: 'present',
    context: 'صف يومك المعتاد: متى تستيقظ؟ أين تدرس؟ ماذا تفعل كل أسبوع؟ أنت لا تصف ما يحدث في هذه اللحظة، بل عادات وحقائق تتكرر.',
    meaning: 'المضارع البسيط يصف العادات والروتين والحقائق العامة والجداول الثابتة. وهو لا يعني بالضرورة أن الفعل يحدث الآن.',
    timeline: 'العادة تتكرر عبر الزمن، والحقيقة تبقى صحيحة عموماً. لذلك لا نضع فعلاً واحداً على لحظة الآن فقط.',
    outcomes: ['أتعرف العادة والحقيقة والجدول الثابت.', 'أضيف s/es مع he/she/it في الإثبات.', 'أبني النفي والسؤال باستخدام do/does.'],
    uses: [
      { title: 'عادة متكررة', explanation: 'فعل يحدث بشكل منتظم.', pattern: 'Present Simple', example: 'I study English every evening.', translation: 'أدرس الإنجليزية كل مساء.' },
      { title: 'حقيقة عامة', explanation: 'معلومة لا ترتبط بلحظة الكلام.', pattern: 'Present Simple', example: 'Water boils at 100°C.', translation: 'يغلي الماء عند 100 درجة مئوية.' },
      { title: 'موعد ثابت', explanation: 'جدول أو موعد مقرر.', pattern: 'Present Simple', example: 'The lesson starts at nine.', translation: 'يبدأ الدرس الساعة التاسعة.' },
    ],
    forms: PS_FORMS,
    contrast: [
      { title: 'Present Simple أم Present Continuous؟', explanation: 'البسيط للعادة، والمستمر لما يحدث الآن أو لفترة مؤقتة.', example: 'I work at a school. / I am working now.', translation: 'أعمل في مدرسة (وظيفتي). / أعمل الآن (نشاط جارٍ).', pattern: 'عادة أو حقيقة مقابل فعل جارٍ' },
    ],
    clues: [
      { title: 'always / usually / often', explanation: 'تصف تكرار العادة، وتأتي غالباً قبل الفعل الرئيسي.' },
      { title: 'every day / every week', explanation: 'تحدد تكراراً منتظماً.' },
      { title: 'تنبيه', explanation: 'وجود كلمة زمنية لا يغني عن فهم المعنى؛ لا تحكم من كلمة واحدة فقط.' },
    ],
    verbTips: ['مع he/she/it نضيف s أو es: works, watches.', 'إذا انتهى الفعل بـ consonant + y تتحول y إلى ies: study → studies.', 'مع does/doesn’t نستخدم المصدر: Does she work? وليس Does she works?', 'فعل be حالة خاصة: am/is/are، ولا نستخدم معه do/does.'],
    examples: [
      { en: 'My brother watches the news every evening.', ar: 'يشاهد أخي الأخبار كل مساء.', focus: 'watches', why: 'عادة متكررة مع he؛ لذلك أضفنا es.' },
      { en: 'Do your parents live in Basra?', ar: 'هل يعيش والداك في البصرة؟', focus: 'Do ... live', why: 'سؤال عن حقيقة أو وضع مستقر؛ نستخدم do مع الجمع.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'He don’t work.', explanation: 'مع he نستخدم doesn’t.', example: 'He doesn’t work.' },
      { title: 'خطأ', pattern: 'Does she studies?', explanation: 'بعد does يعود الفعل إلى المصدر.', example: 'Does she study?' },
    ],
    practice: [
      { prompt: 'Ali ___ to school every day.', options: ['go', 'goes', 'is go'], answer: 'goes', explanation: 'فاعل مفرد غائب مع عادة متكررة؛ نضيف s للفعل.', skill: 'الإثبات' },
      { prompt: '___ your sister speak English?', options: ['Do', 'Does', 'Is'], answer: 'Does', explanation: 'sister = she؛ نستخدم Does ثم المصدر speak.', skill: 'السؤال' },
      { prompt: 'They ___ not work on Fridays.', options: ['does', 'do', 'are'], answer: 'do', explanation: 'مع they نستخدم do not.', skill: 'النفي' },
    ],
    takeaway: 'اسأل نفسك: هل هذه عادة أو حقيقة أو موعد ثابت؟ إذا نعم، فكر في المضارع البسيط، ثم راقب الفاعل قبل تصريف الفعل.',
  },
  {
    lessonId: '4th-u1-l2', grade: 'fourth-preparatory', gradeLabel: 'الرابع الإعدادي',
    topic: 'المضارع المستمر والتغيرات الجارية',
    timeFocus: 'present',
    context: 'تصف تقريراً عن شيء يتغير أمامك: عدد الطلاب يرتفع، والطقس يتبدل، وزميلك يكتب الآن. هنا نتحدث عن نشاط جارٍ أو تغير يحدث في هذه الفترة.',
    meaning: 'المضارع المستمر يصف فعلاً يحدث الآن أو وضعاً مؤقتاً أو تغيراً جارياً في الوقت الحالي. ليس كل فعل ينتهي بـ ing مناسباً؛ نحتاج am/is/are.',
    timeline: 'الفعل يقع حول لحظة الآن أو خلال فترة مؤقتة تشمل الآن، ولا نصف عادة دائمة.',
    outcomes: ['أحدد النشاط الجاري أو التغير المؤقت.', 'أختار am/is/are حسب الفاعل.', 'أكوّن الإثبات والنفي والسؤال وأكتب ing بشكل صحيح.'],
    uses: [
      { title: 'يحدث الآن', explanation: 'نشاط جارٍ في لحظة الكلام.', pattern: 'am/is/are + V-ing', example: 'She is writing a report now.', translation: 'هي تكتب تقريراً الآن.' },
      { title: 'تغير يتطور', explanation: 'حالة تتغير تدريجياً خلال الفترة الحالية.', pattern: 'am/is/are + V-ing', example: 'The number of learners is rising.', translation: 'عدد المتعلمين يرتفع.' },
      { title: 'وضع مؤقت', explanation: 'ليس عادة دائمة بل فترة محدودة.', pattern: 'am/is/are + V-ing', example: 'I am staying with my uncle this week.', translation: 'أقيم عند عمي هذا الأسبوع.' },
    ],
    forms: PC_FORMS,
    contrast: [
      { title: 'نشاط جارٍ أم عادة؟', explanation: 'قارن بين ما يحدث هذه الأيام وما يحدث عادةً.', example: 'She studies every night. / She is studying now.', translation: 'تدرس كل ليلة. / تدرس الآن.', pattern: 'عادة = simple | الآن أو مؤقت = continuous' },
    ],
    clues: [
      { title: 'now / at the moment', explanation: 'غالباً تشير إلى لحظة الكلام.' },
      { title: 'currently / at present / today', explanation: 'قد تشير إلى فترة مؤقتة حالية.' },
      { title: 'تنبيه', explanation: 'توجد أفعال حالة مثل know وlike لا تستخدم عادةً بصيغة ing في هذا المعنى.' },
    ],
    verbTips: ['احذف e الصامتة غالباً: write → writing.', 'قد نضاعف الحرف الأخير في فعل قصير مثل sit → sitting.', 'الفعل be يتغير بحسب الفاعل: I am، he is، they are.'],
    examples: [
      { en: 'The number of international students is rising.', ar: 'عدد الطلاب الدوليين في ازدياد.', focus: 'is rising', why: 'نصف تغيراً يحدث ويتطور حالياً.' },
      { en: 'Listen! Someone is knocking at the door.', ar: 'استمع! هناك شخص يطرق الباب.', focus: 'is knocking', why: 'فعل يحدث الآن ونسمع صوته.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'She studying now.', explanation: 'المضارع المستمر يحتاج be قبل ing.', example: 'She is studying now.' },
      { title: 'خطأ', pattern: 'They are study.', explanation: 'بعد are نضع الفعل مع ing.', example: 'They are studying.' },
    ],
    practice: [
      { prompt: 'Look! The bus ___ .', options: ['comes', 'is coming', 'come'], answer: 'is coming', explanation: 'Look! تجعلنا ننتبه إلى حدث يقع الآن.', skill: 'اختيار الزمن' },
      { prompt: 'The number of students ___ every year.', options: ['is increasing', 'increase', 'increased'], answer: 'is increasing', explanation: 'الجملة تصف تغيراً متطوراً؛ صيغة المستمر مناسبة.', skill: 'معنى التغير' },
      { prompt: '___ they working now?', options: ['Do', 'Are', 'Does'], answer: 'Are', explanation: 'نقدّم are على الفاعل في سؤال المضارع المستمر.', skill: 'السؤال' },
    ],
    takeaway: 'المستمر = be + ing. حدّد الفاعل لاختيار am/is/are، ثم اسأل: هل النشاط جارٍ أو مؤقت أو متغير الآن؟',
  },
  {
    lessonId: '4th-u2-l1', grade: 'fourth-preparatory', gradeLabel: 'الرابع الإعدادي',
    topic: 'الماضي البسيط والماضي المستمر في السرد',
    timeFocus: 'past',
    context: 'اقرأ قصة قصيرة: كانت فتاة تمشي إلى المدرسة عندما رأت حادثاً. وصف المشي يرسم خلفية القصة، أما رؤية الحادث فتحدد ما وقع.',
    meaning: 'نستخدم الماضي البسيط للأحداث المكتملة، والماضي المستمر لوصف خلفية أو نشاط كان جارياً في وقت ماضٍ. اختيار الزمن تابع لدور الحدث في القصة.',
    timeline: 'كلا الزمنين ماضٍ. الماضي المستمر يغطي فترة؛ والماضي البسيط قد يحدد نقطة الحدث أو يسرد أحداثاً متتابعة.',
    outcomes: ['أحدد الحدث الخلفية والحدث الذي وقع.', 'أصوغ was/were + ing وV2.', 'أختار while/when من معنى الجملة.'],
    uses: [
      { title: 'خلفية القصة', explanation: 'وصف نشاط كان مستمراً في وقت معين.', pattern: 'was/were + V-ing', example: 'The children were sleeping.', translation: 'كان الأطفال نائمين.' },
      { title: 'حدث مكتمل', explanation: 'حدث وقع وانتهى، وقد يقطع نشاطاً آخر.', pattern: 'V2', example: 'A loud noise woke them.', translation: 'أيقظهم صوت عالٍ.' },
    ],
    forms: [...PAST_SIMPLE_FORMS, ...PAST_CONTINUOUS_FORMS],
    contrast: [
      { title: 'قراءة الحدثين معاً', explanation: 'لا تقل إن كلمة when تعني دائماً الماضي البسيط. اقرأ الجملة وحدد أي فعل كان جارياً وأيهما وقع.', example: 'I was crossing the road when the car stopped.', translation: 'كنت أعبر الطريق عندما توقفت السيارة.', pattern: 'was crossing = خلفية | stopped = حدث' },
    ],
    clues: [
      { title: 'while / as', explanation: 'كثيراً ما تقدمان الخلفية المستمرة في نمط هذا الدرس.' },
      { title: 'when', explanation: 'غالباً تربط حدثاً بوقت وقوع آخر، لكن الزمن يتحدد من معنى الفعل.' },
      { title: 'suddenly', explanation: 'قد ترافق حدثاً مفاجئاً بالماضي البسيط.' },
    ],
    verbTips: ['was للمفرد وwere للجمع، ثم V-ing.', 'في السؤال بالماضي البسيط نستخدم Did + المصدر.', 'لا تضع did مع was/were في السؤال أو النفي.'],
    examples: [
      { en: 'While the teacher was explaining, the bell rang.', ar: 'بينما كان المعلم يشرح، رن الجرس.', focus: 'was explaining / rang', why: 'الشرح مستمر، ورنين الجرس وقع خلاله.' },
      { en: 'The children were playing when it started to rain.', ar: 'كان الأطفال يلعبون عندما بدأ المطر.', focus: 'were playing / started', why: 'اللعب خلفية، وبداية المطر حدث قاطع.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'While I cooked, the phone was ringing.', explanation: 'قد تكون الجملة صحيحة في سياقات أخرى، لكن إذا كان المقصود فعلاً جارياً قطعه رنين الهاتف نحتاج غالباً past continuous للخلفية وpast simple للحدث.', example: 'While I was cooking, the phone rang.' },
      { title: 'خطأ', pattern: 'Did she was sleeping?', explanation: 'لا نجمع did مع was؛ اختر مساعد الزمن المناسب.', example: 'Was she sleeping?' },
    ],
    practice: [
      { prompt: 'I ___ dinner when the lights went out.', options: ['cooked', 'was cooking', 'am cooking'], answer: 'was cooking', explanation: 'الطبخ كان جارياً في لحظة انقطاع الكهرباء.', skill: 'الخلفية' },
      { prompt: 'The lights ___ out while we were studying.', options: ['went', 'were going', 'go'], answer: 'went', explanation: 'انقطاع الضوء حدث مكتمل وقع خلال الدراسة.', skill: 'الحدث القاطع' },
      { prompt: '___ he sleeping at ten last night?', options: ['Did', 'Was', 'Does'], answer: 'Was', explanation: 'السؤال عن نشاط مستمر في وقت ماضٍ محدد؛ نقدّم was.', skill: 'السؤال' },
    ],
    takeaway: 'في القصة اسأل: ما المشهد الذي كان مستمراً؟ وما الحدث الذي وقع؟ هذه الإجابة تحدد الزمنين.',
  },
  {
    lessonId: '4th-u3-l1', grade: 'fourth-preparatory', gradeLabel: 'الرابع الإعدادي',
    topic: 'المضارع التام البسيط',
    timeFocus: 'past-to-present',
    context: 'تسأل صديقك عن تجربة: هل زار لندن من قبل؟ لا تريد معرفة تاريخ الرحلة بالضبط، بل هل حدثت التجربة في حياته وما صلتها بالحاضر.',
    meaning: 'المضارع التام يربط حدثاً ماضياً بالحاضر: تجربة حتى الآن، أو نتيجة ما زالت مهمة، أو حدث وقع من دون ذكر وقت ماضٍ منتهٍ.',
    timeline: 'وقع الحدث قبل الآن، لكن الحديث عنه مرتبط بالحاضر. لا نحدد وقتاً ماضياً منتهياً مثل yesterday مع هذا الاستخدام.',
    outcomes: ['أفهم الصلة بين الماضي والحاضر.', 'أستخدم have/has مع التصريف الثالث.', 'أضع ever/never/just/already/yet في مواضعها.'],
    uses: [
      { title: 'تجربة حتى الآن', explanation: 'نسأل هل حدثت التجربة في أي وقت من حياة الشخص.', pattern: 'Have/Has + subject + ever + V3?', example: 'Have you ever visited London?', translation: 'هل سبق أن زرت لندن؟' },
      { title: 'نتيجة حاضرة', explanation: 'حدث اكتمل وتظهر نتيجته الآن.', pattern: 'have/has + V3', example: 'She has lost her key.', translation: 'أضاعت مفتاحها (ولا تجده الآن).' },
      { title: 'خبر حديث أو إنجاز', explanation: 'نستخدم just أو already بحسب المعنى.', pattern: 'have/has + just/already + V3', example: 'We have just arrived.', translation: 'وصلنا للتو.' },
    ],
    forms: PRESENT_PERFECT_FORMS,
    contrast: PPC_AND_PAST,
    clues: [
      { title: 'ever', explanation: 'تظهر غالباً في أسئلة التجربة قبل التصريف الثالث.' },
      { title: 'never', explanation: 'تدل على عدم حدوث التجربة حتى الآن، وتأتي قبل V3.' },
      { title: 'just / already / yet', explanation: 'توضح حداثة الحدث أو حدوثه قبل المتوقع أو عدم حدوثه حتى الآن؛ انتبه إلى موضعها.' },
    ],
    verbTips: ['احفظ التصريف الثالث للأفعال الشاذة: go–went–gone، see–saw–seen.', 'have مع I/you/we/they، وhas مع he/she/it.', 'لا تستخدم التصريف الثاني بعد have/has.'],
    examples: [
      { en: 'I have never eaten sushi.', ar: 'لم يسبق لي أن أكلت السوشي.', focus: 'have never eaten', why: 'تجربة حياتية حتى الوقت الحالي؛ نستخدم V3.' },
      { en: 'Has the train arrived yet?', ar: 'هل وصل القطار حتى الآن؟', focus: 'Has ... arrived yet?', why: 'نسأل عن نتيجة متوقعة حتى الآن.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'She have finished.', explanation: 'مع she نستخدم has.', example: 'She has finished.' },
      { title: 'خطأ', pattern: 'I have saw it.', explanation: 'بعد have نستخدم التصريف الثالث seen.', example: 'I have seen it.' },
    ],
    practice: [
      { prompt: 'We ___ just arrived.', options: ['has', 'have', 'did'], answer: 'have', explanation: 'we تأخذ have، وبعدها التصريف الثالث arrived.', skill: 'المساعد' },
      { prompt: 'Have you ever ___ a camel?', options: ['ride', 'rode', 'ridden'], answer: 'ridden', explanation: 'بعد have يأتي التصريف الثالث للفعل ride.', skill: 'التصريف الثالث' },
      { prompt: 'I ___ my homework yet.', options: ['haven’t finished', 'didn’t finished', 'haven’t finish'], answer: 'haven’t finished', explanation: 'yet مع النفي هنا؛ الصيغة have not + V3.', skill: 'النفي' },
    ],
    takeaway: 'المضارع التام لا يسأل فقط: متى حدث؟ بل: ما علاقته بالحاضر؟ ثم استخدم have/has + V3.',
  },
  {
    lessonId: '4th-u3-l2', grade: 'fourth-preparatory', gradeLabel: 'الرابع الإعدادي',
    topic: 'for و since مع المضارع التام',
    timeFocus: 'past-to-present',
    context: 'تقول: أدرس الإنجليزية منذ 2020، أو أدرسها لمدة خمس سنوات. المعنى واحد تقريباً، لكنك مرة تذكر نقطة البداية ومرة تذكر طول المدة.',
    meaning: 'Since يحدد نقطة البداية التي انطلقت منها المدة، أما for فيذكر مقدار المدة نفسها. وكلاهما يأتي في هذا الدرس مع معنى ممتد إلى الحاضر.',
    timeline: 'تبدأ المدة في الماضي وتصل إلى الآن. since يضع علامة عند نقطة البداية؛ for يصف المسافة الزمنية بين البداية والآن.',
    outcomes: ['أميّز نقطة البداية من المدة.', 'أختار since أو for من نوع المعلومة.', 'أربط الاختيار بصيغة الزمن المطلوبة في الجملة.'],
    uses: [
      { title: 'نقطة بداية', explanation: 'أجب عن سؤال: منذ متى؟', pattern: 'since + starting point', example: 'I have lived here since 2020.', translation: 'أعيش هنا منذ عام 2020.' },
      { title: 'مدة', explanation: 'أجب عن سؤال: منذ كم من الوقت؟', pattern: 'for + duration', example: 'I have lived here for five years.', translation: 'أعيش هنا منذ خمس سنوات.' },
    ],
    forms: [{ title: 'since', pattern: 'since + نقطة بداية محددة', explanation: 'مثل سنة أو يوم أو ساعة أو حدث يحدد بداية الفترة.', example: 'since Monday / since 8 o’clock', translation: 'منذ يوم الاثنين / منذ الساعة الثامنة.' }, { title: 'for', pattern: 'for + مدة زمنية', explanation: 'مثل ساعتين أو ثلاثة أيام أو خمس سنوات.', example: 'for two hours / for five years', translation: 'لمدة ساعتين / خمس سنوات.' }],
    contrast: [{ title: 'اختبار السؤالين', explanation: 'اسأل: متى بدأ؟ إذا كانت الإجابة تاريخاً أو نقطة محددة فاختر since. اسأل: كم استمر؟ إذا كانت الإجابة مدة فاختر for.', example: 'since 2019 / for six years', translation: 'منذ 2019 / لمدة ست سنوات.', pattern: 'نقطة = since | مدة = for' }],
    clues: [{ title: 'since', explanation: 'تأتي مع نقطة بداية: 2018, Monday, breakfast, I was young.' }, { title: 'for', explanation: 'تأتي مع مدة: three days, two months, a long time.' }],
    verbTips: ['لا تخلط بين since + تاريخ أو حدث، وfor + مدة.', 'اختيار since أو for لا يحدد وحده الزمن؛ انظر إلى معنى الجملة والفعل أيضاً.', 'لا تضع for مع نقطة زمنية مفردة مثل Monday.'],
    examples: [
      { en: 'She has worked here since 2021.', ar: 'تعمل هنا منذ 2021.', focus: 'since 2021', why: '2021 نقطة بداية.' },
      { en: 'She has worked here for four years.', ar: 'تعمل هنا منذ أربع سنوات.', focus: 'for four years', why: 'four years مدة محسوبة.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'since three hours', explanation: 'three hours مدة وليست نقطة بداية.', example: 'for three hours' },
      { title: 'خطأ', pattern: 'for Monday', explanation: 'Monday نقطة بداية محددة.', example: 'since Monday' },
    ],
    practice: [
      { prompt: 'I have known Ali ___ 2022.', options: ['for', 'since'], answer: 'since', explanation: '2022 نقطة بداية محددة.', skill: 'تمييز نقطة البداية' },
      { prompt: 'They have waited ___ thirty minutes.', options: ['for', 'since'], answer: 'for', explanation: 'thirty minutes مدة.', skill: 'تمييز المدة' },
      { prompt: 'How long have you lived here? — ___ ten years.', options: ['Since', 'For'], answer: 'For', explanation: 'ten years تمثل مدة زمنية.', skill: 'الإجابة عن How long' },
    ],
    takeaway: 'Since = منذ أي نقطة؟ For = لمدة كم؟ تخيّل خط الزمن: نقطة البداية مقابل طول المسافة.',
  },
  {
    lessonId: '4th-u3-l3', grade: 'fourth-preparatory', gradeLabel: 'الرابع الإعدادي',
    topic: 'المضارع التام المستمر',
    timeFocus: 'past-to-present',
    context: 'تصل إلى صديقك فتجده متعباً، وتسأله منذ متى يدرس. تريد إبراز النشاط والمدة، لا مجرد نتيجة مكتملة.',
    meaning: 'المضارع التام المستمر يبرز نشاطاً بدأ في الماضي واستمر حتى الآن أو كانت له آثار واضحة الآن. التركيز على الاستمرار أو مدة النشاط.',
    timeline: 'خط يبدأ في الماضي ويمتد إلى لحظة الكلام، وقد يستمر بعدها. لا يعني أن كل فعل يجب أن يكون مستمراً؛ أفعال الحالة مثل know وlike غالباً تستخدم في البسيط التام.',
    outcomes: ['أشرح الصلة بين نشاط بدأ سابقاً والحاضر.', 'أكوّن have/has been + ing.', 'أختار بين التام البسيط والمستمر وفق التركيز والمعنى.'],
    uses: [
      { title: 'نشاط مستمر', explanation: 'بدأ في الماضي وما زال جارياً.', pattern: 'have/has been + V-ing', example: 'I have been reading for an hour.', translation: 'أقرأ منذ ساعة.' },
      { title: 'نشاط حديث وآثاره ظاهرة', explanation: 'قد يكون النشاط انتهى للتو، لكن أثره ظاهر الآن.', pattern: 'have/has been + V-ing', example: 'She is tired because she has been running.', translation: 'هي متعبة لأنها كانت تركض.' },
    ],
    forms: PRESENT_PERFECT_CONTINUOUS_FORMS,
    contrast: [
      { title: 'التام البسيط أم التام المستمر؟', explanation: 'البسيط يركز على النتيجة أو الإنجاز، والمستمر يركز على النشاط والمدة. بعض الأفعال تقبل الصيغتين مع فرق في التركيز.', example: 'I have written three emails. / I have been writing emails for an hour.', translation: 'كتبت ثلاث رسائل (النتيجة). / أكتب الرسائل منذ ساعة (النشاط والمدة).', pattern: 'نتيجة أو كمية مكتملة مقابل نشاط ومدته' },
    ],
    clues: [{ title: 'for / since', explanation: 'قد يحددان مدة النشاط أو نقطة بدايته.' }, { title: 'How long', explanation: 'سؤال شائع عن مدة نشاط مستمر.' }, { title: 'تنبيه', explanation: 'هذه الكلمات ليست دليلاً آلياً؛ افحص نوع الفعل والمعنى.' }],
    verbTips: ['بعد been نستخدم ing.', 'مع he/she/it نستخدم has been، ومع بقية الضمائر have been.', 'أفعال الحالة مثل know وbelieve وown لا تستخدم عادةً في المستمر؛ نختار التام البسيط بحسب المعنى.'],
    examples: [
      { en: 'How long have you been waiting?', ar: 'منذ متى وأنت تنتظر؟', focus: 'have ... been waiting', why: 'السؤال عن مدة الانتظار.' },
      { en: 'The children have been playing since 4 pm.', ar: 'الأطفال يلعبون منذ الساعة الرابعة.', focus: 'have been playing', why: 'نشاط بدأ في وقت سابق وما زال متصلاً بالحاضر.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'She has been study.', explanation: 'بعد been يجب وضع الفعل مع ing.', example: 'She has been studying.' },
      { title: 'خطأ', pattern: 'I have been knowing him for years.', explanation: 'know فعل حالة؛ نستخدم غالباً المضارع التام البسيط.', example: 'I have known him for years.' },
    ],
    practice: [
      { prompt: 'They ___ for the bus for 20 minutes.', options: ['have been waiting', 'has been waiting', 'are wait'], answer: 'have been waiting', explanation: 'they تأخذ have، والتركيب PPC هو have been + ing.', skill: 'تكوين الزمن' },
      { prompt: 'How long ___ she been learning English?', options: ['have', 'has', 'is'], answer: 'has', explanation: 'she تأخذ has.', skill: 'مطابقة الفاعل' },
      { prompt: 'I ___ Ahmed since childhood.', options: ['have been knowing', 'have known', 'am knowing'], answer: 'have known', explanation: 'know فعل حالة ويأتي هنا في المضارع التام البسيط.', skill: 'تمييز نوع الفعل' },
    ],
    takeaway: 'إذا كان التركيز على نشاط امتد ووقته، فكّر في have/has been + ing؛ وإذا كان الفعل حالة أو التركيز على النتيجة فقد يناسب التام البسيط.',
  },
  {
    lessonId: '4th-u5-l2', grade: 'fourth-preparatory', gradeLabel: 'الرابع الإعدادي',
    topic: 'المستقبل باستخدام will',
    timeFocus: 'future',
    context: 'شخص يسألك عن مساعدة، فتقرر في اللحظة نفسها أن تساعده. أو تعد صديقك أنك ستتصل به لاحقاً.',
    meaning: 'will تعبر عن قرار لحظي أو وعد أو عرض أو توقع ورأي بشأن المستقبل. بعد will يأتي الفعل الأساسي مع جميع الضمائر.',
    timeline: 'الحدث يقع بعد لحظة الكلام؛ لكن صيغة will تعبّر أيضاً عن موقف المتحدث كالوعد أو القرار أو التوقع.',
    outcomes: ['أتعرف القرار اللحظي والوعد والتوقع.', 'أكوّن الإثبات والنفي والسؤال.', 'أفصل بين will وbe going to عند مقارنة الصيغ.'],
    uses: [
      { title: 'قرار لحظي', explanation: 'قرار تتخذه الآن.', pattern: 'will + base verb', example: 'I’ll carry that bag for you.', translation: 'سأحمل تلك الحقيبة عنك.' },
      { title: 'وعد أو عرض', explanation: 'تلتزم بفعل أو تعرض المساعدة.', pattern: 'will / Shall I ...?', example: 'I will call you tomorrow.', translation: 'سأتصل بك غداً.' },
      { title: 'توقع أو رأي', explanation: 'تتوقع ما سيحدث.', pattern: 'will + base verb', example: 'I think the team will win.', translation: 'أعتقد أن الفريق سيفوز.' },
    ],
    forms: FUTURE_SIMPLE_FORMS,
    contrast: [{ title: 'will أم going to؟', explanation: 'will لقرار الآن أو وعد أو رأي. going to لخطة سبقت الكلام أو توقع بدليل ظاهر.', example: 'I’ll open the window. / I’m going to visit my aunt.', translation: 'سأفتح النافذة الآن. / أنوي زيارة عمتي.', pattern: 'موقف المتحدث هو الفيصل' }],
    clues: [{ title: 'I think / I hope', explanation: 'غالباً تمهّد لتوقع أو رأي مع will.' }, { title: 'I promise', explanation: 'غالباً تدل على وعد.' }, { title: 'تنبيه', explanation: 'tomorrow وحدها لا تجبرنا على will؛ توجد أكثر من صيغة للمستقبل.' }],
    verbTips: ['will لا تتغير مع الفاعل.', 'بعد will نستخدم المصدر دون to أو s أو ing.', 'السؤال يبدأ بـ Will، والنفي يكون won’t.'],
    examples: [
      { en: 'I think people will use more electric cars.', ar: 'أعتقد أن الناس سيستخدمون سيارات كهربائية أكثر.', focus: 'will use', why: 'توقع ورأي بشأن المستقبل.' },
      { en: 'Don’t worry. I will help you.', ar: 'لا تقلق. سأساعدك.', focus: 'will help', why: 'وعد أو قرار فوري.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'He will helps.', explanation: 'لا نضيف s بعد will.', example: 'He will help.' },
      { title: 'خطأ', pattern: 'Will you to come?', explanation: 'بعد will نستخدم المصدر من دون to.', example: 'Will you come?' },
    ],
    practice: [
      { prompt: 'I’m cold. I ___ close the window.', options: ['will', 'am will', 'will to'], answer: 'will', explanation: 'قرار اتخذ الآن، وبعد will يأتي المصدر close.', skill: 'اختيار الصيغة' },
      { prompt: 'She ___ not forget your birthday.', options: ['will', 'does', 'is'], answer: 'will', explanation: 'النفي المستقبلي: will not + مصدر.', skill: 'النفي' },
      { prompt: '___ they arrive on time?', options: ['Do', 'Will', 'Are'], answer: 'Will', explanation: 'نقدّم will في السؤال عن المستقبل.', skill: 'السؤال' },
    ],
    takeaway: 'will + مصدر. افهم هل الكلام وعد أو قرار الآن أو توقع؛ ولا تجعل كلمة tomorrow وحدها تختار الزمن.',
  },
  {
    lessonId: '4th-u5-l5', grade: 'fourth-preparatory', gradeLabel: 'الرابع الإعدادي',
    topic: 'المستقبل المستمر',
    timeFocus: 'future',
    context: 'حدّد وقتاً غداً الساعة الثامنة: ما الذي ستكون تفعله في تلك اللحظة؟ نريد تصوير نشاط سيكون جارياً في وقت مستقبلي محدد.',
    meaning: 'المستقبل المستمر يصف فعلاً سيكون مستمراً عند نقطة أو خلال فترة في المستقبل، لا مجرد فعل سيحدث في أي وقت.',
    timeline: 'نختار نقطة في المستقبل، ثم نرسم نشاطاً يمتد عبرها: سيكون الفعل جارياً عندما نصل إلى ذلك الوقت.',
    outcomes: ['أفهم معنى فعل جارٍ في وقت مستقبلي.', 'أستخدم will be + ing.', 'أحوّل الصيغة إلى النفي والسؤال.'],
    uses: [{ title: 'نشاط جارٍ في وقت مستقبلي', explanation: 'نحدّد وقتاً في المستقبل ونسأل ماذا سيكون جارياً عنده.', pattern: 'will be + V-ing', example: 'At 9 tomorrow, I will be taking an exam.', translation: 'غداً في التاسعة سأكون أؤدي امتحاناً.' }],
    forms: [
      { title: 'الإثبات', pattern: 'Subject + will be + V-ing', explanation: 'will ثابتة، ثم be، ثم الفعل مع ing.', example: 'They will be travelling at noon.', translation: 'سيكونون مسافرين عند الظهر.' },
      { title: 'النفي', pattern: 'Subject + will not be + V-ing', explanation: 'نضع not بعد will.', example: 'They won’t be travelling at noon.', translation: 'لن يكونوا مسافرين عند الظهر.' },
      { title: 'السؤال', pattern: 'Will + subject + be + V-ing ...?', explanation: 'نقدّم will على الفاعل ونحافظ على be + ing.', example: 'Will they be travelling at noon?', translation: 'هل سيكونون مسافرين عند الظهر؟' },
    ],
    contrast: [{ title: 'Future Simple أم Future Continuous؟', explanation: 'البسيط يخبرنا أن الفعل سيحدث. المستمر يركز على كونه جارياً في وقت مستقبلي محدد.', example: 'I will work tomorrow. / I will be working at 10 tomorrow.', translation: 'سأعمل غداً. / سأكون أعمل غداً الساعة العاشرة.', pattern: 'حدث مستقبلي مقابل نشاط سيكون جارياً في نقطة مستقبلية' }],
    clues: [{ title: 'at this time tomorrow', explanation: 'قد تحدد اللحظة التي سيكون الفعل جارياً فيها.' }, { title: 'at 8 pm next Friday', explanation: 'وقت مستقبلي محدد يفيد في بناء صورة زمنية.' }],
    verbTips: ['بعد will نستخدم be وليس is/are.', 'بعد be نضع الفعل مع ing.', 'لا نستخدم do/does/did في السؤال.'],
    examples: [
      { en: 'This time tomorrow, we will be flying to London.', ar: 'في مثل هذا الوقت غداً سنكون في طريقنا بالطائرة إلى لندن.', focus: 'will be flying', why: 'الطيران سيكون جارياً عند وقت مستقبلي محدد.' },
      { en: 'Will you be using the computer at 6?', ar: 'هل ستكون تستخدم الحاسوب عند السادسة؟', focus: 'Will ... be using', why: 'نسأل عن نشاط سيكون جارياً في ذلك الوقت.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'I will working.', explanation: 'نحتاج be بين will والفعل مع ing.', example: 'I will be working.' },
      { title: 'خطأ', pattern: 'Will she is studying?', explanation: 'بعد will نستخدم be، وليس is.', example: 'Will she be studying?' },
    ],
    practice: [
      { prompt: 'At 8 tonight, I ___ dinner.', options: ['will cook', 'will be cooking', 'am cook'], answer: 'will be cooking', explanation: 'نصف نشاطاً سيكون جارياً عند وقت محدد.', skill: 'اختيار الزمن' },
      { prompt: 'They will ___ working at noon.', options: ['is', 'be', 'being'], answer: 'be', explanation: 'التركيب هو will be + ing.', skill: 'بناء الصيغة' },
      { prompt: '___ you be waiting for me?', options: ['Will', 'Do', 'Are'], answer: 'Will', explanation: 'السؤال يبدأ بـ Will.', skill: 'السؤال' },
    ],
    takeaway: 'Future Continuous = will be + ing. ابحث عن وقت مستقبلي تكون فيه داخل النشاط، لا مجرد موعد حدوثه.',
  },
  {
    lessonId: '5th-u1-l1', grade: 'fifth-preparatory', gradeLabel: 'الخامس الإعدادي',
    topic: 'Present Simple vs Present Continuous',
    timeFocus: 'present',
    context: 'قارن بين جدولك المعتاد وما تفعله في الصف الآن. قد تقول: عادة أذهب إلى المدرسة بالحافلة، لكنني اليوم أمشي.',
    meaning: 'البسيط يصف العادة والحقيقة والحالة المستقرة. المستمر يصف فعلاً جارياً أو وضعاً مؤقتاً أو تغيراً يحدث حالياً. وأفعال الحالة مثل know وlike لا تستخدم عادةً مع ing بهذا المعنى.',
    timeline: 'البسيط يتكرر أو يبقى ثابتاً؛ المستمر يحيط بلحظة الآن أو بفترة مؤقتة تشملها.',
    outcomes: ['أختار الزمن من المعنى لا من الكلمة المفتاحية فقط.', 'أصوغ الأفعال مع do/does وam/is/are.', 'أتعرف أفعال الحالة والحركة.'],
    uses: [
      { title: 'روتين أو حقيقة', explanation: 'شيء يتكرر أو يبقى صحيحاً.', pattern: 'Present Simple', example: 'He walks to school every day.', translation: 'يمشي إلى المدرسة كل يوم.' },
      { title: 'حالة جارية أو مؤقتة', explanation: 'ما يحدث الآن أو خلال فترة مؤقتة.', pattern: 'Present Continuous', example: 'He is taking the bus this week.', translation: 'يستقل الحافلة هذا الأسبوع (مؤقتاً).' },
    ],
    forms: [...PS_FORMS, ...PC_FORMS],
    contrast: [
      { title: 'Stative أم Dynamic؟', explanation: 'أفعال مثل know وbelieve وown وlike تصف حالة، لذلك لا نضعها عادةً في المستمر. أفعال مثل run وwrite وstudy تصف نشاطاً يقبل الاستمرار.', example: 'I know the answer. / I am writing the answer.', translation: 'أعرف الإجابة. / أكتب الإجابة الآن.', pattern: 'حالة ذهنية أو شعورية مقابل نشاط' },
    ],
    clues: [{ title: 'always / usually / often / every', explanation: 'تساعد على اكتشاف التكرار والعادة.' }, { title: 'now / at the moment / Look!', explanation: 'تساعد على اكتشاف نشاط جارٍ.' }, { title: 'تنبيه', explanation: 'ليس كل فعل مع now مستمراً؛ افحص إذا كان الفعل stative.' }],
    verbTips: ['بعد doesn’t استخدم المصدر: doesn’t know.', 'بعد is/are استخدم ing: are studying.', 'بعض الأفعال يتغير معناها بين state وaction بحسب السياق؛ اعتمد على المعنى المقصود.'],
    examples: [
      { en: 'She usually works in the library, but today she is studying at home.', ar: 'تعمل عادة في المكتبة، لكنها تدرس اليوم في البيت.', focus: 'usually works / is studying', why: 'روتين ثابت مقابل وضع مؤقت اليوم.' },
      { en: 'I understand the question now.', ar: 'أفهم السؤال الآن.', focus: 'understand', why: 'understand فعل حالة ويأتي هنا في البسيط رغم وجود now.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'I am knowing him.', explanation: 'know فعل حالة في هذا المعنى.', example: 'I know him.' },
      { title: 'خطأ', pattern: 'She doesn’t studies.', explanation: 'بعد doesn’t نستخدم المصدر.', example: 'She doesn’t study.' },
    ],
    practice: [
      { prompt: 'My father ___ coffee every morning.', options: ['drinks', 'is drinking', 'drink'], answer: 'drinks', explanation: 'عادة تتكرر كل صباح، والفاعل مفرد غائب.', skill: 'العادة' },
      { prompt: 'Be quiet! The baby ___.', options: ['sleeps', 'is sleeping', 'sleep'], answer: 'is sleeping', explanation: 'النوم جارٍ الآن في هذا الموقف.', skill: 'الحدث الجاري' },
      { prompt: 'I ___ what you mean.', options: ['am understanding', 'understand', 'understands'], answer: 'understand', explanation: 'understand فعل حالة، ومع I نستخدم الصورة الأساسية.', skill: 'أفعال الحالة' },
    ],
    takeaway: 'لا تحفظ قائمتين من الكلمات فقط. اسأل: عادة أم نشاط جارٍ؟ ثم اسأل: هل الفعل حالة أم حركة؟',
  },
  {
    lessonId: '5th-u1-l3', grade: 'fifth-preparatory', gradeLabel: 'الخامس الإعدادي',
    topic: 'الماضي البسيط',
    timeFocus: 'past',
    context: 'تصف زيارة إلى سوق الشورجة أمس: ذهبت، شاهدت، اشتريت. انتهت الزيارة في وقت ماضٍ محدد، لذلك تستخدم الماضي البسيط.',
    meaning: 'الماضي البسيط يصف فعلاً حدث وانتهى في الماضي، وغالباً نعرف وقته أو نفهم أنه فترة منتهية. نحتاج معرفة التصريف الثاني في الإثبات، والمصدر بعد did في النفي والسؤال.',
    timeline: 'حدث مكتمل قبل الآن. إذا ذكرت yesterday أو last week أو ago أو سنة ماضية محددة، فأنت تشير إلى وقت منتهٍ.',
    outcomes: ['أميز الفعل القياسي من الشاذ.', 'أكوّن الإثبات والنفي والسؤال.', 'أستخدم was/were عند وصف حالة ماضية.'],
    uses: [{ title: 'حدث مكتمل', explanation: 'فعل وقع وانتهى في الماضي.', pattern: 'V2', example: 'We visited the old market yesterday.', translation: 'زرنا السوق القديم أمس.' }, { title: 'تتابع أحداث', explanation: 'أحداث ماضية حدثت واحدة بعد الأخرى.', pattern: 'V2, V2, V2', example: 'She entered the shop, looked around and bought a scarf.', translation: 'دخلت المتجر، وتطلعت حولها، واشترت وشاحاً.' }],
    forms: PAST_SIMPLE_FORMS,
    contrast: [{ title: 'Past Simple أم Present Perfect؟', explanation: 'إذا حددت وقتاً ماضياً منتهياً مثل yesterday أو last year، استخدم الماضي البسيط. إذا لم تحدد وقتاً منتهياً وكان التركيز على التجربة أو الصلة بالحاضر، فقد تحتاج المضارع التام.', example: 'I went to London last year. / I have been to London.', translation: 'ذهبت إلى لندن السنة الماضية. / سبق أن زرت لندن.', pattern: 'وقت ماضٍ منتهٍ مقابل تجربة حتى الآن' }],
    clues: [{ title: 'yesterday / last / ago', explanation: 'غالباً تشير إلى وقت ماضٍ منتهٍ.' }, { title: 'in 2019', explanation: 'تاريخ محدد في الماضي إذا كان الحديث عن حدث مكتمل.' }],
    verbTips: ['قياسي: visit → visited، live → lived، study → studied.', 'الفعل الشاذ يحتاج تصريفاً محفوظاً: buy → bought، go → went، see → saw.', 'be في الماضي: was مع المفرد، were مع الجمع.', 'بعد did/didn’t استخدم المصدر.'],
    examples: [
      { en: 'We bought spices at the market.', ar: 'اشترينا توابل من السوق.', focus: 'bought', why: 'buy فعل شاذ، وتصريفه الثاني bought.' },
      { en: 'Did you see the old building?', ar: 'هل رأيت المبنى القديم؟', focus: 'Did ... see', why: 'بعد did نستخدم المصدر see وليس saw.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'They didn’t bought it.', explanation: 'didn’t يحمل الماضي؛ نعيد الفعل إلى المصدر.', example: 'They didn’t buy it.' },
      { title: 'خطأ', pattern: 'She goed home.', explanation: 'go فعل شاذ وتصريفه went.', example: 'She went home.' },
    ],
    practice: [
      { prompt: 'Last Friday, we ___ the museum.', options: ['visit', 'visited', 'have visited'], answer: 'visited', explanation: 'Last Friday وقت ماضٍ منتهٍ.', skill: 'التعرف على الزمن' },
      { prompt: 'He didn’t ___ the bus.', options: ['missed', 'miss', 'missing'], answer: 'miss', explanation: 'بعد didn’t نستخدم المصدر.', skill: 'النفي' },
      { prompt: '___ they buy the tickets yesterday?', options: ['Did', 'Do', 'Have'], answer: 'Did', explanation: 'سؤال عن حدث ماضٍ مكتمل؛ نستخدم Did.', skill: 'السؤال' },
    ],
    takeaway: 'في الإثبات استخدم V2؛ مع did/didn’t ارجع إلى المصدر. ولا تخلط وقتاً ماضياً منتهياً بتجربة مرتبطة بالحاضر.',
  },
  {
    lessonId: '5th-u1-l4', grade: 'fifth-preparatory', gradeLabel: 'الخامس الإعدادي',
    topic: 'الماضي المستمر وأدوات الربط',
    timeFocus: 'past',
    context: 'حادث هادي: كان يقود دراجته عندما قفزت قطة أمامه. القصة تحتاج وصف ما كان جارياً، ثم تحديد اللحظة التي غيرت ما يحدث.',
    meaning: 'الماضي المستمر يصف نشاطاً جارياً أو خلفية زمنية في الماضي. غالباً نقرنه بالماضي البسيط إذا وقع حدث خلاله.',
    timeline: 'was/were + ing يمتد عبر فترة ماضية؛ والفعل البسيط يحدد الحدث الذي وقع عند نقطة داخل هذه الفترة.',
    outcomes: ['أشرح دور الخلفية والحدث المفاجئ.', 'أستخدم was/were + ing.', 'أختار أداة الربط من علاقة الحدثين.'],
    uses: [{ title: 'نشاط جارٍ في الماضي', explanation: 'كان الفعل مستمراً عند وقت ماضٍ.', pattern: 'was/were + V-ing', example: 'Hadi was riding his scooter.', translation: 'كان هادي يقود دراجته.' }, { title: 'حدث قاطع', explanation: 'وقع فعل قصير أثناء النشاط.', pattern: 'Past Continuous + when + Past Simple', example: 'A cat ran into the road.', translation: 'قفزت قطة إلى الطريق.' }],
    forms: PAST_CONTINUOUS_FORMS,
    contrast: [{ title: 'while / as مقابل when', explanation: 'في الأمثلة السردية لهذا الدرس، while/as تقدمان عادة الخلفية المستمرة، وwhen تربط الحدث الذي يقع خلالها. ليس الأمر قاعدة آلية منفصلة عن المعنى.', example: 'While Hadi was riding, a cat ran into the road.', translation: 'بينما كان هادي يقود، قفزت قطة إلى الطريق.', pattern: 'حدد أي فعل كان جارياً وأيهما وقع.' }],
    clues: [{ title: 'while / as', explanation: 'كثيراً ما تأتيان مع الخلفية المستمرة.' }, { title: 'when', explanation: 'تحدد توقيت الحدث الآخر.' }],
    verbTips: ['was مع I/he/she/it؛ were مع you/we/they.', 'أضف ing بعد was/were.', 'الماضي البسيط بعد did يعود إلى المصدر.'],
    examples: [
      { en: 'Hadi was riding when a cat ran into the road.', ar: 'كان هادي يقود عندما قفزت قطة إلى الطريق.', focus: 'was riding / ran', why: 'القيادة مستمرة، والقفز حدث مفاجئ.' },
      { en: 'As they were crossing the street, a car stopped.', ar: 'بينما كانوا يعبرون الشارع، توقفت سيارة.', focus: 'were crossing / stopped', why: 'العبور خلفية والتوقف حدث.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'Hadi was ride.', explanation: 'بعد was نستخدم V-ing.', example: 'Hadi was riding.' },
      { title: 'خطأ', pattern: 'A cat was ran.', explanation: 'لا نضع was قبل التصريف الثاني في الماضي البسيط.', example: 'A cat ran.' },
    ],
    practice: [
      { prompt: 'Hadi ___ his scooter when the cat appeared.', options: ['rode', 'was riding', 'is riding'], answer: 'was riding', explanation: 'القيادة كانت جارية عند ظهور القطة.', skill: 'الخلفية' },
      { prompt: 'A cat ___ into the road.', options: ['ran', 'was running', 'runs'], answer: 'ran', explanation: 'الحدث الذي غيّر الموقف حدث مكتمل.', skill: 'الحدث' },
      { prompt: 'They ___ crossing when it started to rain.', options: ['was', 'were', 'did'], answer: 'were', explanation: 'they تأخذ were في الماضي المستمر.', skill: 'مطابقة الفاعل' },
    ],
    takeaway: 'ارسم المشهد: الخلفية تأخذ was/were + ing، والحدث الذي وقع خلالها يأتي غالباً بالماضي البسيط.',
  },
  {
    lessonId: '5th-u1-l5', grade: 'fifth-preparatory', gradeLabel: 'الخامس الإعدادي',
    topic: 'Present Perfect Simple و been / gone',
    timeFocus: 'past-to-present',
    context: 'يسألك شخص: هل زرت اسكتلندا؟ لا يريد تاريخ الرحلة، بل يريد معرفة إن كانت لديك التجربة. وإذا قلت إن صديقك ذهب إلى لندن، هل عاد أم ما زال هناك؟',
    meaning: 'المضارع التام يربط الماضي بالحاضر عند الحديث عن التجارب والنتائج. been to تعني أن الشخص زار المكان وعاد، أما gone to فتعني أنه ذهب وما زال غائباً.',
    timeline: 'الفعل وقع قبل الآن، ولكن التجربة أو النتيجة لها صلة بالحاضر. لا تستخدم معه وقتاً ماضياً منتهياً محدداً.',
    outcomes: ['أكوّن have/has + V3.', 'أميز ever/never/just/already/yet.', 'أفرق بين been وgone في سياق وجود الشخص أو عودته.'],
    uses: [{ title: 'تجربة', explanation: 'نسأل هل سبق أن فعلت شيئاً في حياتك.', pattern: 'Have you ever + V3?', example: 'Have you ever visited Scotland?', translation: 'هل سبق أن زرت اسكتلندا؟' }, { title: 'زيارة وعـودة', explanation: 'الشخص زار المكان ثم عاد.', pattern: 'have/has been to', example: 'Mona has been to London.', translation: 'زارت منى لندن وعادت.' }, { title: 'ذهب وما زال غائباً', explanation: 'الشخص ليس هنا لأنه ذهب ولم يعد بعد.', pattern: 'have/has gone to', example: 'Mona has gone to London.', translation: 'ذهبت منى إلى لندن وما زالت هناك.' }],
    forms: PRESENT_PERFECT_FORMS,
    contrast: PPC_AND_PAST,
    clues: [{ title: 'ever / never', explanation: 'للسؤال عن التجارب أو نفي وقوعها حتى الآن.' }, { title: 'just / already / yet', explanation: 'توضح حداثة الحدث أو إنجازه أو عدم إنجازه حتى الآن.' }, { title: 'away / not here', explanation: 'إذا كان الشخص غائباً لأنه لم يعد، فغالباً المقصود gone.' }],
    verbTips: ['احفظ التصريف الثالث وليس الثاني: go–went–gone، see–saw–seen.', 'been = ذهب وعاد؛ gone = ذهب وما زال هناك.', 'لا تستخدم yesterday مع present perfect في المعنى المعتاد؛ اختر past simple لوقت ماضٍ منتهٍ.'],
    examples: [
      { en: 'Sami has gone to London. He is not here.', ar: 'ذهب سامي إلى لندن، وهو ليس هنا.', focus: 'has gone', why: 'السياق يقول إنه غائب ولم يعد.' },
      { en: 'Sami has been to London twice.', ar: 'زار سامي لندن مرتين وعاد.', focus: 'has been', why: 'نتحدث عن تجربة مكتملة وعاد الشخص.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'He has went to London.', explanation: 'بعد has نستخدم التصريف الثالث gone.', example: 'He has gone to London.' },
      { title: 'خطأ', pattern: 'She has gone to London, but she is here now.', explanation: 'إذا كانت عادت وتتكلم معك فالاختيار المقصود عادة been.', example: 'She has been to London.' },
    ],
    practice: [
      { prompt: 'Ali is away. He has ___ to Baghdad.', options: ['been', 'gone'], answer: 'gone', explanation: 'هو غائب وما زال هناك وفق السياق.', skill: 'been / gone' },
      { prompt: 'I have never ___ a horse.', options: ['ride', 'rode', 'ridden'], answer: 'ridden', explanation: 'بعد have نستخدم التصريف الثالث.', skill: 'V3' },
      { prompt: 'I ___ London last year.', options: ['have visited', 'visited'], answer: 'visited', explanation: 'last year وقت ماضٍ منتهٍ؛ نستخدم الماضي البسيط.', skill: 'PPS مقابل Past Simple' },
    ],
    takeaway: 'المضارع التام = have/has + V3. اسأل عن الصلة بالحاضر، ثم افهم: been عاد، gone لم يعد بعد.',
  },
  {
    lessonId: '5th-u1-l7', grade: 'fifth-preparatory', gradeLabel: 'الخامس الإعدادي',
    topic: 'Present Perfect Continuous مع for و since',
    timeFocus: 'past-to-present',
    context: 'تسأل صديقك عن مدة انتظاره للحافلة. يهمك النشاط نفسه وكم استمر، وليس فقط عدد الأشياء التي أنجزها.',
    meaning: 'يصف نشاطاً بدأ في الماضي وامتد حتى الآن أو كانت آثاره ظاهرة. for تذكر المدة، وsince تذكر نقطة البداية.',
    timeline: 'خط النشاط يبدأ في الماضي ويصل إلى الآن. since علامة عند بداية الخط، وfor تصف طوله.',
    outcomes: ['أكوّن have/has been + ing.', 'أستخدم How long للسؤال عن المدة.', 'أختار for للمدة وsince لنقطة البداية.'],
    uses: [{ title: 'نشاط ممتد', explanation: 'التركيز على استمرار النشاط أو مدته.', pattern: 'have/has been + V-ing', example: 'He has been waiting for forty minutes.', translation: 'ينتظر منذ أربعين دقيقة.' }, { title: 'السؤال عن المدة', explanation: 'نستخدم How long عندما نريد معرفة مدة استمرار النشاط.', pattern: 'How long + have/has + subject + been + V-ing?', example: 'How long have you been studying?', translation: 'منذ متى وأنت تدرس؟' }],
    forms: PRESENT_PERFECT_CONTINUOUS_FORMS,
    contrast: [{ title: 'for أم since؟', explanation: 'for + مدة كاملة؛ since + نقطة البداية. لا تخلط نوع المعلومة.', example: 'for three years / since 2022', translation: 'لمدة ثلاث سنوات / منذ 2022.', pattern: 'المدة مقابل نقطة البدء' }, ...PPC_AND_PAST],
    clues: [{ title: 'How long', explanation: 'تطلب مدة زمنية.' }, { title: 'for + period', explanation: 'for two hours / for a long time.' }, { title: 'since + point', explanation: 'since Monday / since 2020.' }],
    verbTips: ['التركيب يحتوي على been قبل الفعل مع ing.', 'مع he/she/it استخدم has؛ ومع I/you/we/they استخدم have.', 'أفعال الحالة مثل know وlike تذهب غالباً إلى المضارع التام البسيط: have known.'],
    examples: [
      { en: 'We have been learning English for five years.', ar: 'نتعلم الإنجليزية منذ خمس سنوات.', focus: 'for five years', why: 'خمس سنوات مدة.' },
      { en: 'She has been working here since 2021.', ar: 'تعمل هنا منذ 2021.', focus: 'since 2021', why: '2021 نقطة البداية.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'He has been work.', explanation: 'بعد been نستخدم ing.', example: 'He has been working.' },
      { title: 'خطأ', pattern: 'for 2021', explanation: '2021 نقطة زمنية؛ نستخدم since.', example: 'since 2021' },
    ],
    practice: [
      { prompt: 'She has been ___ for two hours.', options: ['study', 'studied', 'studying'], answer: 'studying', explanation: 'بعد been نستخدم الفعل مع ing.', skill: 'تكوين الصيغة' },
      { prompt: 'I have lived here ___ 2018.', options: ['for', 'since'], answer: 'since', explanation: '2018 نقطة بداية.', skill: 'for / since' },
      { prompt: 'How long ___ they been waiting?', options: ['has', 'have', 'are'], answer: 'have', explanation: 'they تأخذ have.', skill: 'مطابقة الفاعل' },
    ],
    takeaway: 'Have/has been + ing يبرز النشاط والمدة. for للطول، since للبداية، وHow long للسؤال عن المدة.',
  },
  {
    lessonId: '5th-u4-l3', grade: 'fifth-preparatory', gradeLabel: 'الخامس الإعدادي',
    topic: 'مراجعة الأزمنة: المضارع والماضي والتام',
    timeFocus: 'mixed',
    context: 'في سؤال المراجعة لا يخبرك السؤال باسم الزمن. عليك أن تفهم معنى الجملة، ثم تكتشف هل تتحدث عن عادة أو فعل جارٍ أو حدث ماضٍ أو تجربة لها صلة بالحاضر.',
    meaning: 'هذه ليست قاعدة زمن واحد؛ إنها تدريب على اتخاذ قرار صحيح بين الأزمنة التي درستها. ابدأ بالمعنى والسياق، ثم افحص شكل الفعل والكلمات الزمنية.',
    timeline: 'ضع الحدث على خط الزمن: عادة متكررة، نشاط الآن، حدث مكتمل في الماضي، أو حدث ماضٍ له صلة بالحاضر/يمتد إلى الآن.',
    outcomes: ['أصنف الجملة قبل اختيار الفعل.', 'أميز البسيط من المستمر والتام.', 'أشرح سبب الاختيار بدلاً من الاعتماد على كلمة مفتاحية منفردة.'],
    uses: [{ title: 'عادة', explanation: 'يتكرر باستمرار.', pattern: 'Present Simple', example: 'He works every day.', translation: 'يعمل كل يوم.' }, { title: 'فعل جارٍ', explanation: 'يحدث الآن أو مؤقتاً.', pattern: 'Present Continuous', example: 'He is working now.', translation: 'يعمل الآن.' }, { title: 'حدث ماضٍ منتهٍ / صلة بالحاضر', explanation: 'اختر بين الماضي البسيط والتام بحسب الوقت والمعنى.', pattern: 'Past Simple / Present Perfect', example: 'He worked yesterday. / He has worked here for years.', translation: 'عمل أمس. / يعمل هنا منذ سنوات.' }],
    forms: [...PS_FORMS, ...PC_FORMS, ...PAST_SIMPLE_FORMS, ...PRESENT_PERFECT_FORMS, ...PRESENT_PERFECT_CONTINUOUS_FORMS],
    contrast: [
      { title: 'روتين أم لحظة الآن؟', explanation: 'البسيط عادة، والمستمر نشاط جارٍ أو مؤقت.', example: 'She drives to work. / She is driving now.', translation: 'تقود إلى العمل عادة. / تقود الآن.', pattern: 'routine / in progress' },
      { title: 'وقت ماضٍ منتهٍ أم صلة بالحاضر؟', explanation: 'وقت محدد منتهٍ مثل yesterday يقود للماضي البسيط؛ التجربة أو النتيجة الآن قد تحتاج المضارع التام.', example: 'I saw him yesterday. / I have seen him before.', translation: 'رأيته أمس. / سبق أن رأيته.', pattern: 'finished time / experience until now' },
    ],
    clues: [{ title: 'every / usually', explanation: 'تساعد على اكتشاف العادة.' }, { title: 'now / at the moment', explanation: 'تساعد على اكتشاف النشاط الجاري، مع الانتباه إلى أفعال الحالة.' }, { title: 'yesterday / ago / last', explanation: 'تشير إلى وقت ماضٍ منتهٍ.' }, { title: 'ever / never / yet', explanation: 'ترتبط غالباً بتجربة أو حدث له صلة بالحاضر.' }],
    verbTips: ['في كل سؤال، افحص الفاعل بعد تحديد الزمن.', 'مع did/didn’t يأتي المصدر؛ ومع have/has يأتي V3؛ ومع be المستمر يأتي ing.', 'الكلمات الدالة قرائن مساعدة وليست بديلاً عن فهم المعنى.'],
    examples: [
      { en: 'She usually walks, but today she is taking the bus.', ar: 'تمشي عادة، لكنها تستقل الحافلة اليوم.', focus: 'usually walks / is taking', why: 'عادة تقابل وضعاً مؤقتاً.' },
      { en: 'We visited Mosul last year, but we have never visited Samarra.', ar: 'زرنا الموصل السنة الماضية، لكننا لم نزر سامراء قط.', focus: 'visited / have never visited', why: 'وقت ماضٍ منتهٍ مقابل تجربة حتى الآن.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'I have seen him yesterday.', explanation: 'yesterday وقت منتهٍ؛ اختر الماضي البسيط.', example: 'I saw him yesterday.' },
      { title: 'خطأ', pattern: 'She doesn’t working.', explanation: 'بعد doesn’t يأتي المصدر، وليس ing.', example: 'She doesn’t work.' },
    ],
    practice: [
      { prompt: 'Look! The boys ___ football.', options: ['play', 'are playing', 'played'], answer: 'are playing', explanation: 'Look! والسياق يشيران إلى نشاط جارٍ.', skill: 'تمييز المضارع' },
      { prompt: 'I ___ my uncle last night.', options: ['have visited', 'visited', 'visit'], answer: 'visited', explanation: 'last night وقت ماضٍ منتهٍ.', skill: 'تمييز الماضي' },
      { prompt: 'Have you ever ___ a camel?', options: ['ride', 'rode', 'ridden'], answer: 'ridden', explanation: 'بعد have ever يأتي V3.', skill: 'المضارع التام' },
    ],
    takeaway: 'لا تبحث عن كلمة واحدة ثم تختار الزمن. افهم المعنى، ضع الحدث على خط الزمن، ثم اختر الصيغة وراجع مطابقة الفاعل.',
  },
  {
    lessonId: '5th-u6-l3', grade: 'fifth-preparatory', gradeLabel: 'الخامس الإعدادي',
    topic: 'تحويل الأزمنة في الكلام المنقول',
    timeFocus: 'past-sequence',
    context: 'تخبر صديقك اليوم بما قاله شخص أمس. أنت الآن تنقل كلاماً قيل من منظور ماضٍ، لذلك قد تتغير صيغة الزمن وبعض كلمات الوقت والضمائر.',
    meaning: 'عندما يكون فعل الإبلاغ في الماضي مثل said أو told، قد نرجع الزمن في الكلام المنقول خطوة إلى الماضي (backshift). هذا تغيير في منظور الكلام، وليس تغييراً عشوائياً لكل فعل.',
    timeline: 'هناك نقطتان: وقت قول الكلام الأصلي، ووقت نقله. إذا كان فعل الإبلاغ ماضياً، ننظر إلى الأحداث من نقطة ماضية.',
    outcomes: ['أحدد فعل الإبلاغ أولاً.', 'أطبق التحويل المناسب على الزمن عند الحاجة.', 'أغيّر الضمائر وكلمات الوقت مع بقاء المعنى.'],
    uses: [{ title: 'نقل كلام عن المضارع البسيط', explanation: 'عند نقل قول ماضٍ، يتحول المضارع البسيط غالباً إلى الماضي البسيط.', pattern: 'Present Simple → Past Simple', example: '“I live in Basra.” → He said he lived in Basra.', translation: 'قال إنه يعيش في البصرة.' }, { title: 'نقل كلام عن المضارع المستمر', explanation: 'يتحول المستمر غالباً إلى الماضي المستمر.', pattern: 'Present Continuous → Past Continuous', example: '“I am studying.” → She said she was studying.', translation: 'قالت إنها كانت تدرس.' }, { title: 'نقل كلام عن الماضي', explanation: 'يتحول الماضي البسيط غالباً إلى الماضي التام.', pattern: 'Past Simple → Past Perfect', example: '“I saw Ali.” → He said he had seen Ali.', translation: 'قال إنه رأى علياً.' }],
    forms: [
      { title: 'المضارع البسيط', pattern: 'am/is/are → was/were\nV / V-s → V2', explanation: 'تغيير الزمن عند نقل الكلام من فعل إبلاغ ماضٍ، مع مراجعة الضمير.', example: 'She said, “I work.” → She said she worked.', translation: 'قالت إنها تعمل.' },
      { title: 'المضارع المستمر', pattern: 'am/is/are + V-ing → was/were + V-ing', explanation: 'نرجع be إلى الماضي ونبقي ing.', example: 'He said, “I am reading.” → He said he was reading.', translation: 'قال إنه كان يقرأ.' },
      { title: 'الماضي البسيط / المضارع التام', pattern: 'V2 / have-has + V3 → had + V3', explanation: 'في النمط المدرسي الشائع يتحول كلاهما إلى الماضي التام عند نقل قول ماضٍ.', example: 'She said, “I have finished.” → She said she had finished.', translation: 'قالت إنها أنهت.' },
    ],
    contrast: [{ title: 'هل نغيّر الزمن دائماً؟', explanation: 'ليس كل سياق يتطلب backshift؛ إذا كانت الحقيقة ما زالت صحيحة أو كان فعل الإبلاغ في الحاضر، قد يبقى الزمن. اتبع قاعدة المنهج والسياق المعطى في السؤال.', example: 'The teacher says, “Water boils at 100°C.” → The teacher says that water boils at 100°C.', translation: 'يقول المعلم إن الماء يغلي عند 100 درجة.', pattern: 'غيّر منظور الزمن، ولا تغيّر الحقائق العامة بلا سبب.' }],
    clues: [{ title: 'said / told / asked', explanation: 'حدّد فعل الإبلاغ وزمنه قبل تغيير الكلام.' }, { title: 'now / today / yesterday', explanation: 'قد تتغير كلمات الوقت بحسب وقت النقل.' }],
    verbTips: ['تأكد من الضمير: I قد تصبح he أو she بحسب المتحدث.', 'told يحتاج مفعولاً به: told me؛ أما said فلا يأتي بالطريقة نفسها.', 'في الكلام المنقول نستخدم ترتيب الجملة الخبرية في الأسئلة، ولا نبقي ترتيب السؤال المباشر.'],
    examples: [
      { en: '“We are ready.” → They said they were ready.', ar: 'قالوا إنهم كانوا مستعدين.', focus: 'are → were', why: 'فعل الإبلاغ said في الماضي.' },
      { en: '“I went home.” → He said he had gone home.', ar: 'قال إنه كان قد ذهب إلى البيت.', focus: 'went → had gone', why: 'الماضي البسيط يتحول غالباً إلى الماضي التام في هذا النمط.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'He said that he is tired.', explanation: 'في تمرين backshift مع said ماضٍ، نرجع is إلى was.', example: 'He said that he was tired.' },
      { title: 'خطأ', pattern: 'She told that she was busy.', explanation: 'told يحتاج الشخص الذي وُجّه إليه الكلام.', example: 'She told me that she was busy.' },
    ],
    practice: [
      { prompt: '“I live in Basra.” → He said he ___ in Basra.', options: ['lives', 'lived', 'had lived'], answer: 'lived', explanation: 'المضارع البسيط يرجع غالباً إلى الماضي البسيط بعد said في الماضي.', skill: 'backshift' },
      { prompt: '“I am working.” → She said she ___ working.', options: ['is', 'was', 'has been'], answer: 'was', explanation: 'المضارع المستمر يتحول إلى الماضي المستمر.', skill: 'backshift' },
      { prompt: '“I saw him.” → He said he ___ him.', options: ['saw', 'has seen', 'had seen'], answer: 'had seen', explanation: 'الماضي البسيط يتحول غالباً إلى الماضي التام.', skill: 'backshift' },
    ],
    takeaway: 'في reported speech: ابدأ بفعل الإبلاغ، ثم ارجع الزمن عند الحاجة، واضبط الضمائر والوقت مع المحافظة على المعنى.',
  },
  {
    lessonId: '5th-u7-l1', grade: 'fifth-preparatory', gradeLabel: 'الخامس الإعدادي',
    topic: 'الأزمنة في المبني للمجهول',
    timeFocus: 'mixed',
    context: 'في وصف فندق الجليد، قد نهتم بالفندق وما يحدث له بدلاً من الشخص الذي يبنيه. هنا ننقل التركيز إلى المفعول به، لكن الزمن الأصلي يبقى محفوظاً.',
    meaning: 'المبني للمجهول ليس زمناً جديداً؛ نحدد زمن الجملة أولاً، ثم نستخدم be في ذلك الزمن + التصريف الثالث. الذي يتغير هو ترتيب الجملة والتركيز.',
    timeline: 'الزمن لا يتغير عند التحويل: إذا كانت الجملة حاضراً بسيطاً تبقى حاضراً بسيطاً، وإذا كانت ماضياً مستمراً تبقى ماضياً مستمراً بصيغة be المناسبة.',
    outcomes: ['أحدد الزمن في الجملة المعلومة.', 'أقدّم المفعول به وأختار be في الزمن نفسه.', 'أضيف التصريف الثالث للفعل الرئيسي.'],
    uses: [{ title: 'الحاضر البسيط', explanation: 'عادات وحقائق يكون التركيز فيها على الشيء الذي يقع عليه الفعل.', pattern: 'am/is/are + V3', example: 'The hotel is rebuilt every winter.', translation: 'يعاد بناء الفندق كل شتاء.' }, { title: 'الحاضر المستمر', explanation: 'عمل جارٍ الآن ويكون الشيء المتأثر هو محور الكلام.', pattern: 'am/is/are + being + V3', example: 'The sculptures are being carved now.', translation: 'تُنحت المنحوتات الآن.' }, { title: 'الماضي البسيط', explanation: 'حدث مكتمل في الماضي.', pattern: 'was/were + V3', example: 'The hotel was opened in 1989.', translation: 'افتُتح الفندق عام 1989.' }],
    forms: [
      { title: 'Present Simple Passive', pattern: 'am / is / are + V3', explanation: 'نحافظ على المضارع البسيط.', example: 'The rooms are cleaned daily.', translation: 'تُنظف الغرف يومياً.' },
      { title: 'Past Simple Passive', pattern: 'was / were + V3', explanation: 'نحافظ على الماضي البسيط.', example: 'The hotel was built in winter.', translation: 'بُني الفندق في الشتاء.' },
      { title: 'Present Continuous Passive', pattern: 'am / is / are + being + V3', explanation: 'نضيف being لأن الزمن مستمر.', example: 'The room is being decorated.', translation: 'تُزيّن الغرفة الآن.' },
      { title: 'Present Perfect Passive', pattern: 'have / has + been + V3', explanation: 'نحافظ على have/has، ثم been، ثم V3.', example: 'The work has been completed.', translation: 'أُنجز العمل.' },
    ],
    contrast: [{ title: 'لا تغيّر الزمن أثناء التحويل', explanation: 'استخرج الفعل المساعد أولاً. ثم انقل المفعول به إلى البداية، واستبدل الفعل بصيغة be المناسبة للزمن نفسه + V3.', example: 'Workers are building the hotel. → The hotel is being built.', translation: 'العمال يبنون الفندق. → يُبنى الفندق الآن.', pattern: 'Present Continuous يبقى Present Continuous' }],
    clues: [{ title: 'every day / each winter', explanation: 'قد تدل على Present Simple.' }, { title: 'now / at the moment', explanation: 'قد تدل على Present Continuous.' }, { title: 'last year / in 1989', explanation: 'قد تدل على Past Simple.' }],
    verbTips: ['لا تنسَ مطابقة am/is/are أو was/were مع المفعول الجديد.', 'في المستمر نضيف being قبل V3.', 'V3 أساسي في كل صيغ المبني للمجهول.'],
    examples: [
      { en: 'Workers clean the rooms every day. → The rooms are cleaned every day.', ar: 'ينظف العمال الغرف يومياً. → تُنظف الغرف يومياً.', focus: 'are cleaned', why: 'المعلوم مضارع بسيط؛ بقي الزمن بسيطاً في المجهول.' },
      { en: 'They are repairing the road. → The road is being repaired.', ar: 'هم يصلحون الطريق. → يجري إصلاح الطريق.', focus: 'is being repaired', why: 'المعلوم مضارع مستمر؛ نستخدم is being + V3.' },
    ],
    commonErrors: [
      { title: 'خطأ', pattern: 'The rooms are clean every day.', explanation: 'هذه صفة clean وليست مبنياً للمجهول.', example: 'The rooms are cleaned every day.' },
      { title: 'خطأ', pattern: 'The road is repaired now.', explanation: 'إذا كان الإصلاح جارياً الآن نحتاج being.', example: 'The road is being repaired now.' },
    ],
    practice: [
      { prompt: 'The hotel ___ every winter.', options: ['is rebuilt', 'is rebuilding', 'rebuilt'], answer: 'is rebuilt', explanation: 'معلومها Present Simple؛ المجهول is/are + V3.', skill: 'المبني للمجهول' },
      { prompt: 'The bridge is ___ now.', options: ['repair', 'being repaired', 'been repair'], answer: 'being repaired', explanation: 'المضارع المستمر للمجهول: is being + V3.', skill: 'المبني للمجهول المستمر' },
      { prompt: 'The rooms were ___ yesterday.', options: ['cleaned', 'cleaning', 'clean'], answer: 'cleaned', explanation: 'الماضي البسيط للمجهول: was/were + V3.', skill: 'المبني للمجهول الماضي' },
    ],
    takeaway: 'في المجهول لا تختر زمناً جديداً. احتفظ بزمن الجملة الأصلية، واستخدم be في ذلك الزمن + V3.',
  },
  {
    lessonId: 'u1-l2', grade: 'sixth-preparatory', gradeLabel: 'السادس الإعدادي',
    topic: 'الماضي البسيط والماضي المستمر وأدوات الربط',
    timeFocus: 'past',
    context: 'تقرأ عن حادثة أو تجربة وقعت في الماضي: كان شخص يؤدي عملاً عندما وقع حدث آخر. المطلوب أن ترى تسلسل المشهد لا أن تحفظ قائمة while/when.',
    meaning: 'الماضي المستمر يرسم النشاط الممتد أو الخلفية، والماضي البسيط يحدد حدثاً مكتملاً. وقد نستخدم الماضي البسيط أيضاً لسرد أحداث متتابعة.',
    timeline: 'الزمنان قبل الآن؛ المستمر يمتد عبر فترة، والبسيط يحدد حدثاً أو نقطة زمنية داخلها أو بعدها.',
    outcomes: ['أرسم علاقة الحدثين على خط الزمن.', 'أكوّن النفي والسؤال في الزمنين.', 'أستخدم أدوات الربط بحسب وظيفة كل جزء من الجملة.'],
    uses: [{ title: 'خلفية ممتدة', explanation: 'نشاط كان جارياً عند لحظة ماضية.', pattern: 'was/were + V-ing', example: 'I was driving along the road.', translation: 'كنت أقود على الطريق.' }, { title: 'حدث يطرأ', explanation: 'حدث مكتمل وقع خلال النشاط.', pattern: 'V2', example: 'A dog ran across the road.', translation: 'ركض كلب عبر الطريق.' }],
    forms: [...PAST_SIMPLE_FORMS, ...PAST_CONTINUOUS_FORMS],
    contrast: [{ title: 'الفرق في وظيفة الفعل', explanation: 'اسأل أي فعل يصنع المشهد وأي فعل يغيّر مجراه. ليس كل ماضٍ بسيط قصيراً دائماً، لكن هذا التقابل يساعد في مشهد المقاطعة.', example: 'I was reading when the lights went out.', translation: 'كنت أقرأ عندما انطفأت الأضواء.', pattern: 'قراءة = خلفية، انطفاء = حدث' }],
    clues: [{ title: 'while / as', explanation: 'غالباً تقودان إلى خلفية مستمرة.' }, { title: 'when', explanation: 'تحدد وقت حدث آخر؛ اقرأ طرفي الجملة.' }],
    verbTips: ['مع did يعود الفعل إلى المصدر.', 'was للمفرد وwere للجمع.', 'لا تحفظ قاعدة while/when دون تحديد المعنى أولاً.'],
    examples: [
      { en: 'While I was driving, it started to rain.', ar: 'بينما كنت أقود، بدأ المطر.', focus: 'was driving / started', why: 'القيادة خلفية، وبداية المطر حدث.' },
      { en: 'The students were talking when the teacher entered.', ar: 'كان الطلاب يتحدثون عندما دخل المعلم.', focus: 'were talking / entered', why: 'الحديث كان جارياً والدخول حدث وقع خلاله.' },
    ],
    commonErrors: [{ title: 'خطأ', pattern: 'Did they were working?', explanation: 'للسؤال عن الماضي المستمر نقدّم were مباشرة، ولا نستخدم did.', example: 'Were they working?' }, { title: 'خطأ', pattern: 'She was wrote.', explanation: 'بعد was نستخدم ing لا التصريف الثاني.', example: 'She was writing.' }],
    practice: [
      { prompt: 'The children ___ when their father arrived.', options: ['were sleeping', 'slept', 'are sleeping'], answer: 'were sleeping', explanation: 'النوم كان مستمراً عند وصول الأب.', skill: 'اختيار الزمن' },
      { prompt: 'The teacher ___ the room while we were writing.', options: ['entered', 'was entering', 'enters'], answer: 'entered', explanation: 'الدخول حدث مكتمل وقع خلال الكتابة.', skill: 'تمييز الحدث' },
      { prompt: '___ you watching TV at nine?', options: ['Did', 'Were', 'Do'], answer: 'Were', explanation: 'سؤال عن نشاط كان جارياً في وقت ماضٍ.', skill: 'السؤال' },
    ],
    takeaway: 'حلّل علاقة الفعلين: خلفية مستمرة أم حدث مكتمل؟ ثم ابنِ الصيغة، وبعدها اختر أداة الربط.',
  },
  {
    lessonId: 'u5-l2', grade: 'sixth-preparatory', gradeLabel: 'السادس الإعدادي',
    topic: 'المضارع التام البسيط وأدواته',
    timeFocus: 'past-to-present',
    context: 'تسأل شخصاً عمّا أنجزه حتى الآن: هل أنهى العمل؟ هل سبق أن زار مكاناً؟ الزمن يربط تجربة أو نتيجة ماضية بالحاضر.',
    meaning: 'المضارع التام يستخدم لحدث ماضٍ دون وقت ماضٍ منتهٍ محدد، أو لتجربة حتى الآن، أو نتيجة ما زالت مؤثرة. ركّز على الصلة بالحاضر قبل النظر إلى الكلمات الدالة.',
    timeline: 'الحدث وقع قبل الآن، وقد تكون نتيجته حاضرة أو تدخل ضمن خبرة الشخص حتى الآن.',
    outcomes: ['أختار have/has بحسب الفاعل.', 'أستخدم التصريف الثالث.', 'أفهم مواقع ever/never/just/already/yet/so far.'],
    uses: [{ title: 'تجربة حياتية', explanation: 'حدثت في وقت غير محدد من حياة الشخص.', pattern: 'have/has + V3', example: 'I have visited three countries.', translation: 'زرت ثلاث دول في حياتي.' }, { title: 'نتيجة الآن', explanation: 'حدث سابق ونتيجته ظاهرة أو مهمة في الحاضر.', pattern: 'have/has + V3', example: 'I have lost my passport.', translation: 'فقدت جواز سفري (ولا أملكه الآن).' }],
    forms: PRESENT_PERFECT_FORMS,
    contrast: PPC_AND_PAST,
    clues: [{ title: 'ever / never', explanation: 'غالباً في سياق التجربة حتى الآن.' }, { title: 'just / already / yet', explanation: 'توضح توقيت الإنجاز أو عدمه حتى الآن.' }, { title: 'so far', explanation: 'حتى الآن، ويشير إلى فترة لم تنتهِ.' }],
    verbTips: ['احفظ V3 للأفعال الشاذة ولا تخلطه مع V2.', 'yet غالباً في نهاية السؤال أو النفي.', 'never يعطي معنى النفي مع صيغة مثبتة؛ لا تضف not معه في هذا التركيب.'],
    examples: [
      { en: 'Have you ever seen a whale?', ar: 'هل سبق أن رأيت حوتاً؟', focus: 'Have ... ever seen', why: 'سؤال عن تجربة في الحياة حتى الآن.' },
      { en: 'The train has just arrived.', ar: 'وصل القطار للتو.', focus: 'has just arrived', why: 'حدث حديث ترتبط نتيجته بالحاضر.' },
    ],
    commonErrors: [{ title: 'خطأ', pattern: 'He has wrote a letter.', explanation: 'بعد has نحتاج التصريف الثالث written.', example: 'He has written a letter.' }, { title: 'خطأ', pattern: 'I haven’t finished already.', explanation: 'في النمط المقصود هنا، yet تأتي في نهاية النفي، وalready في الإثبات غالباً.', example: 'I haven’t finished yet.' }],
    practice: [
      { prompt: 'She has ___ her work.', options: ['finish', 'finished', 'finishing'], answer: 'finished', explanation: 'بعد has نستخدم التصريف الثالث؛ finish فعل قياسي finished.', skill: 'V3' },
      { prompt: 'Have you ___ tried scuba diving?', options: ['ever', 'yet', 'ago'], answer: 'ever', explanation: 'ever شائعة في سؤال التجربة.', skill: 'أداة الزمن' },
      { prompt: 'They haven’t arrived ___.', options: ['already', 'yet', 'yesterday'], answer: 'yet', explanation: 'yet تأتي في نهاية السؤال أو النفي بمعنى حتى الآن.', skill: 'موقع الظرف' },
    ],
    takeaway: 'اسأل: هل أتكلم عن وقت ماضٍ منتهٍ محدد، أم تجربة/نتيجة حتى الآن؟ إذا كانت الثانية، فكر في have/has + V3.',
  },
  {
    lessonId: 'u5-l3', grade: 'sixth-preparatory', gradeLabel: 'السادس الإعدادي',
    topic: 'المضارع التام المستمر و for / since / How long',
    timeFocus: 'past-to-present',
    context: 'تسأل زميلاً عن مدة مذاكرته للامتحان: بدأ قبل ساعتين وما زال يدرس. أنت تركز على استمرار النشاط والمدة التي استغرقها.',
    meaning: 'المضارع التام المستمر يعرض النشاط كخط بدأ في الماضي وامتد حتى الآن أو ترك أثراً واضحاً. For تقيس المدة، وsince تحدد نقطة الانطلاق.',
    timeline: 'بداية في الماضي → نشاط ممتد عبر الزمن → الآن. قد يستمر النشاط بعد لحظة الكلام.',
    outcomes: ['أركّب have/has been + ing.', 'أسأل عن المدة باستخدام How long.', 'أميز for من since وأفرق بين الأفعال الحركية والثابتة.'],
    uses: [{ title: 'استمرار نشاط', explanation: 'بدأ في الماضي وما زال يحدث.', pattern: 'have/has been + V-ing', example: 'He has been studying since 6 pm.', translation: 'يدرس منذ السادسة مساءً.' }, { title: 'أثر نشاط حديث', explanation: 'قد يكون النشاط انتهى للتو، لكن أثره ظاهر.', pattern: 'have/has been + V-ing', example: 'You are wet. Have you been walking in the rain?', translation: 'أنت مبتل. هل كنت تمشي تحت المطر؟' }],
    forms: PRESENT_PERFECT_CONTINUOUS_FORMS,
    contrast: [{ title: 'How long مع فعل حركة أو حالة', explanation: 'مع study/wait/work يمكن استخدام المستمر للتركيز على النشاط. مع know غالباً نستخدم التام البسيط لأن الفعل يصف حالة.', example: 'How long have you been studying? / How long have you known Ali?', translation: 'منذ متى تدرس؟ / منذ متى تعرف علياً؟', pattern: 'نشاط = غالباً PPC | حالة = غالباً PPS' }, ...PPC_AND_PAST],
    clues: [{ title: 'How long', explanation: 'تسأل عن المدة.' }, { title: 'for', explanation: 'مدة: for 40 minutes.' }, { title: 'since', explanation: 'بداية: since 6 pm.' }],
    verbTips: ['لا تنسَ been بين have/has والفعل مع ing.', 'مع الأفعال الثابتة مثل know وunderstand وown، استخدم عادةً present perfect simple.', 'since + نقطة، for + مدة.'],
    examples: [
      { en: 'How long have you been waiting for the bus?', ar: 'منذ متى وأنت تنتظر الحافلة؟', focus: 'have ... been waiting', why: 'السؤال عن نشاط مستمر ومدته.' },
      { en: 'They have been working here for ten years.', ar: 'يعملون هنا منذ عشر سنوات.', focus: 'for ten years', why: 'ten years مدة، لا نقطة بداية.' },
    ],
    commonErrors: [{ title: 'خطأ', pattern: 'She has been worked.', explanation: 'المستمر يحتاج ing وليس التصريف الثالث.', example: 'She has been working.' }, { title: 'خطأ', pattern: 'I have been owning this car.', explanation: 'own فعل حالة؛ نستخدم غالباً have owned.', example: 'I have owned this car for years.' }],
    practice: [
      { prompt: 'How long have they been ___?', options: ['wait', 'waiting', 'waited'], answer: 'waiting', explanation: 'بعد been في هذا الزمن يأتي الفعل مع ing.', skill: 'التكوين' },
      { prompt: 'He has lived here ___ 2017.', options: ['for', 'since'], answer: 'since', explanation: '2017 نقطة بداية.', skill: 'for/since' },
      { prompt: 'How long have you ___ her?', options: ['known', 'been knowing', 'know'], answer: 'known', explanation: 'know فعل حالة ويستخدم هنا في المضارع التام البسيط.', skill: 'نوع الفعل' },
    ],
    takeaway: 'استخدم خطاً من الماضي إلى الآن. إذا كان التركيز على نشاط وامتداده فـ have/has been + ing؛ وإذا كان فعلاً ثابتاً فراجع البسيط التام.',
  },
  {
    lessonId: 'u5-l4', grade: 'sixth-preparatory', gradeLabel: 'السادس الإعدادي',
    topic: 'المضارع التام مقابل الماضي البسيط و been / gone',
    timeFocus: 'past-to-present',
    context: 'تحدث عن رحلة: ربما تقول متى سافرت بالضبط، أو تقول إنك زرت المكان من قبل. وقد تصف شخصاً ذهب إلى مدينة وما زال هناك.',
    meaning: 'الماضي البسيط يحتاج حدثاً في وقت ماضٍ منتهٍ. المضارع التام يتحدث عن تجربة أو نتيجة مرتبطة بالحاضر. been تعني زيارة مع عودة؛ gone تعني ذهاباً مع استمرار الغياب.',
    timeline: 'Past Simple: نقطة مكتملة في الماضي. Present Perfect: حدث قبل الآن مع ارتباط بالحاضر أو تجربة خلال الحياة.',
    outcomes: ['أفصل الوقت المحدد عن التجربة غير المحددة.', 'أختار الزمن من سياق الجملة.', 'أفرق بين been وgone.'],
    uses: [{ title: 'وقت ماضٍ منتهٍ', explanation: 'يحدد الحدث متى وقع.', pattern: 'Past Simple', example: 'I travelled to Amman in 2022.', translation: 'سافرت إلى عمّان عام 2022.' }, { title: 'تجربة حتى الآن', explanation: 'لا يهم متى حدثت التجربة بالضبط.', pattern: 'Present Perfect', example: 'I have travelled to Amman.', translation: 'سبق أن سافرت إلى عمّان.' }, { title: 'حالة الغياب أو العودة', explanation: 'been للزيارة مع العودة، gone للذهاب وما زال غائباً.', pattern: 'been to / gone to', example: 'Sara has gone to school; she is not home.', translation: 'ذهبت سارة إلى المدرسة وما زالت هناك.' }],
    forms: [...PAST_SIMPLE_FORMS, ...PRESENT_PERFECT_FORMS],
    contrast: PPC_AND_PAST,
    clues: [{ title: 'yesterday / last year / ago / in 2010', explanation: 'وقت ماضٍ منتهٍ؛ اختر Past Simple في هذا المعنى.' }, { title: 'ever / never / so far', explanation: 'قد تدل على خبرة أو مدة حتى الآن.' }, { title: 'away / not here', explanation: 'سياق غياب الشخص يرجح gone؛ سياق عودته يرجح been.' }],
    verbTips: ['V2 مع الماضي البسيط؛ V3 بعد have/has.', 'لا تجمع have/has مع yesterday في الاستعمال المعتاد لحدث محدد مكتمل.', 'gone ليس مرادفاً لـ been: راقب هل عاد الشخص.'],
    examples: [
      { en: 'I saw that film last week.', ar: 'شاهدت ذلك الفيلم الأسبوع الماضي.', focus: 'saw', why: 'last week وقت ماضٍ منتهٍ.' },
      { en: 'I have seen that film before.', ar: 'سبق أن شاهدت ذلك الفيلم.', focus: 'have seen', why: 'تجربة من دون وقت محدد.' },
    ],
    commonErrors: [{ title: 'خطأ', pattern: 'I have met him yesterday.', explanation: 'yesterday وقت ماضٍ منتهٍ.', example: 'I met him yesterday.' }, { title: 'خطأ', pattern: 'He has been to London and is still there.', explanation: 'إذا ما زال هناك فنستخدم gone.', example: 'He has gone to London.' }],
    practice: [
      { prompt: 'We ___ the match yesterday.', options: ['have watched', 'watched'], answer: 'watched', explanation: 'yesterday وقت ماضٍ منتهٍ.', skill: 'تمييز الزمن' },
      { prompt: 'Have you ever ___ that book?', options: ['read', 'reading', 'reads'], answer: 'read', explanation: 'read في التصريف الثالث له نفس الكتابة، ويأتي بعد have.', skill: 'V3' },
      { prompt: 'Ali is still in London. He has ___ there.', options: ['been', 'gone'], answer: 'gone', explanation: 'ما زال في لندن، أي ذهب ولم يعد بعد.', skill: 'been/gone' },
    ],
    takeaway: 'وقت محدد منتهٍ = Past Simple. تجربة أو نتيجة حتى الآن = Present Perfect. gone ما زال هناك، been عاد.',
  },
  {
    lessonId: 'u5-l5', grade: 'sixth-preparatory', gradeLabel: 'السادس الإعدادي',
    topic: 'الماضي التام البسيط',
    timeFocus: 'past-sequence',
    context: 'وصلت إلى السينما ووجدت الفيلم قد بدأ. هناك حدثان في الماضي: وصولك، وبداية الفيلم. بداية الفيلم وقعت قبل وصولك.',
    meaning: 'الماضي التام يحدد الحدث الأسبق من بين حدثين ماضيين. أما الحدث الأحدث فيأتي غالباً بالماضي البسيط. فكر في ترتيب الحدثين قبل اختيار الصيغة.',
    timeline: 'حدث أقدم في الماضي → حدث أحدث في الماضي → الآن. past perfect يضع الحدث الأقدم قبل نقطة ماضية أخرى.',
    outcomes: ['أرتب الأحداث زمنياً قبل الكتابة.', 'أستخدم had + V3 للحدث الأسبق.', 'أكوّن النفي والسؤال وأفهم أدوات الربط في سياقها.'],
    uses: [{ title: 'حدث سبق حدثاً آخر', explanation: 'نستخدم الماضي التام للحدث الذي اكتمل أولاً.', pattern: 'had + V3', example: 'The film had started before we arrived.', translation: 'كان الفيلم قد بدأ قبل أن نصل.' }, { title: 'سبب يسبق نتيجة ماضية', explanation: 'نوضح أن سبباً وقع قبل النتيجة في الماضي.', pattern: 'had + V3 + Past Simple', example: 'She was tired because she had worked all day.', translation: 'كانت متعبة لأنها عملت طوال اليوم.' }],
    forms: [
      { title: 'الإثبات', pattern: 'Subject + had + V3', explanation: 'had ثابتة مع جميع الضمائر، ثم التصريف الثالث.', example: 'They had left before noon.', translation: 'كانوا قد غادروا قبل الظهر.' },
      { title: 'النفي', pattern: 'Subject + had not (hadn’t) + V3', explanation: 'نضيف not بعد had.', example: 'They hadn’t eaten before the trip.', translation: 'لم يكونوا قد أكلوا قبل الرحلة.' },
      { title: 'السؤال', pattern: 'Had + subject + V3 ...?', explanation: 'نقدّم had على الفاعل.', example: 'Had they eaten before the trip?', translation: 'هل كانوا قد أكلوا قبل الرحلة؟' },
    ],
    contrast: [{ title: 'ما الحدث الأقدم؟', explanation: 'لا تختر الماضي التام لمجرد رؤية before أو after. رتب الأحداث: أيهما وقع أولاً؟ ذاك غالباً يأخذ had + V3.', example: 'When I arrived, the bus had left.', translation: 'عندما وصلت، كانت الحافلة قد غادرت.', pattern: 'had left أقدم؛ arrived أحدث.' }],
    clues: [{ title: 'before / after / by the time', explanation: 'تساعد على ترتيب الأحداث، لكن اقرأ ترتيب الوقائع.' }, { title: 'already', explanation: 'قد تؤكد أن الفعل وقع قبل نقطة ماضية.' }],
    verbTips: ['had لا تتغير مع الفاعل.', 'بعد had يأتي التصريف الثالث دائماً.', 'الماضي التام ليس مجرد past مع had؛ استخدمه عندما توجد نقطة ماضية أخرى تقارن بها الحدث.'],
    examples: [
      { en: 'By the time we arrived, the train had left.', ar: 'بحلول وقت وصولنا، كانت القطارات قد غادرت.', focus: 'had left / arrived', why: 'مغادرة القطار حدثت قبل الوصول.' },
      { en: 'She had finished dinner before her guests came.', ar: 'كانت قد أنهت العشاء قبل أن يأتي ضيوفها.', focus: 'had finished / came', why: 'إنهاء العشاء أسبق من مجيء الضيوف.' },
    ],
    commonErrors: [{ title: 'خطأ', pattern: 'He had went home.', explanation: 'بعد had نستخدم التصريف الثالث gone.', example: 'He had gone home.' }, { title: 'خطأ', pattern: 'When I arrived, he has left.', explanation: 'نقطة المقارنة ماضية؛ نستخدم had left.', example: 'When I arrived, he had left.' }],
    practice: [
      { prompt: 'The match ___ before we reached the stadium.', options: ['had started', 'has started', 'starts'], answer: 'had started', explanation: 'بداية المباراة سبقت وصولنا في الماضي.', skill: 'ترتيب الأحداث' },
      { prompt: 'She had ___ the letter before I called.', options: ['write', 'wrote', 'written'], answer: 'written', explanation: 'بعد had يأتي التصريف الثالث.', skill: 'V3' },
      { prompt: '___ they left before the rain started?', options: ['Had', 'Have', 'Did'], answer: 'Had', explanation: 'نقدّم had عند السؤال عن الحدث الأسبق.', skill: 'السؤال' },
    ],
    takeaway: 'الماضي التام = had + V3 للحدث الأسبق من نقطة ماضية أخرى. رتّب الأحداث أولاً ثم اكتب.',
  },
  {
    lessonId: 'u6-l2', grade: 'sixth-preparatory', gradeLabel: 'السادس الإعدادي',
    topic: 'الأزمنة في المبني للمجهول',
    timeFocus: 'mixed',
    context: 'في وصف الخدمات البنكية، قد يكون المهم هو الحساب أو الأموال أو الإجراء، لا الموظف الذي قام به. هنا نحافظ على زمن الفعل ونغيّر بناء الجملة.',
    meaning: 'المبني للمجهول يحافظ على الزمن الأصلي: object + be في الزمن نفسه + V3. لذلك تعلّم تحديد زمن المعلوم قبل تحويله.',
    timeline: 'لا يتغير خط الزمن أثناء التحويل. يتغير ترتيب الجملة فقط، وتُصرف be وفق الزمن وعدد الفاعل الجديد.',
    outcomes: ['أحدد الزمن في الجملة المعلومة.', 'أقدّم المفعول به.', 'أختار صيغة be المناسبة ثم V3.'],
    uses: [{ title: 'حقيقة أو إجراء متكرر', explanation: 'المضارع البسيط للمجهول.', pattern: 'am/is/are + V3', example: 'Accounts are checked daily.', translation: 'تُفحص الحسابات يومياً.' }, { title: 'حدث ماضٍ مكتمل', explanation: 'الماضي البسيط للمجهول.', pattern: 'was/were + V3', example: 'The money was transferred yesterday.', translation: 'حُوّلت الأموال أمس.' }, { title: 'حدث مستمر أو تام', explanation: 'أبقِ مؤشرات الاستمرار أو التمام في be.', pattern: 'is being + V3 / has been + V3', example: 'The system is being updated. / The form has been signed.', translation: 'يجري تحديث النظام. / تم توقيع الاستمارة.' }],
    forms: [
      { title: 'Present Simple Passive', pattern: 'am/is/are + V3', explanation: 'حدث متكرر أو حقيقة.', example: 'The account is checked.', translation: 'يُفحص الحساب.' },
      { title: 'Past Simple Passive', pattern: 'was/were + V3', explanation: 'حدث ماضٍ منتهٍ.', example: 'The account was closed.', translation: 'أُغلق الحساب.' },
      { title: 'Present Continuous Passive', pattern: 'am/is/are + being + V3', explanation: 'عملية جارية الآن.', example: 'The account is being checked.', translation: 'يجري فحص الحساب.' },
      { title: 'Present Perfect Passive', pattern: 'have/has + been + V3', explanation: 'عمل اكتمل وله صلة بالحاضر.', example: 'The account has been checked.', translation: 'تم فحص الحساب.' },
      { title: 'Past Perfect / Modal Passive', pattern: 'had been + V3 / will be + V3 / can be + V3', explanation: 'اختر be بحسب الزمن أو الفعل الناقص في الجملة الأصلية.', example: 'The form had been signed. / The money can be transferred.', translation: 'كان قد تم توقيع الاستمارة. / يمكن تحويل المال.' },
    ],
    contrast: [{ title: 'احتفظ بالزمن', explanation: 'إذا كان المعلوم مضارعاً بسيطاً، لا تحوّله إلى ماضٍ. حدّد فعل المساعدة أولاً ثم طبّق صيغة be المطابقة.', example: 'The bank checks the form. → The form is checked by the bank.', translation: 'يفحص البنك الاستمارة. → تُفحص الاستمارة من البنك.', pattern: 'Present Simple يبقى Present Simple' }],
    clues: [{ title: 'every day', explanation: 'غالباً مضارع بسيط.' }, { title: 'yesterday / last week', explanation: 'غالباً ماضٍ بسيط.' }, { title: 'now', explanation: 'قد يشير إلى مستمر؛ افحص صيغة الفعل.' }, { title: 'already / just', explanation: 'قد يشير إلى تام بحسب المعنى.' }],
    verbTips: ['V3 ضروري في المجهول.', 'طابق be مع المفعول الذي أصبح في بداية الجملة.', 'being علامة مهمة للمستمر؛ been تدخل في التام.'],
    examples: [
      { en: 'The bank checks the documents. → The documents are checked.', ar: 'يفحص البنك الوثائق. → تُفحص الوثائق.', focus: 'are checked', why: 'مضارع بسيط وجمع؛ لذلك are + V3.' },
      { en: 'They were repairing the road. → The road was being repaired.', ar: 'كانوا يصلحون الطريق. → كان الطريق قيد الإصلاح.', focus: 'was being repaired', why: 'نحافظ على الماضي المستمر في المجهول.' },
    ],
    commonErrors: [{ title: 'خطأ', pattern: 'The forms is checked.', explanation: 'forms جمع؛ لذلك نستخدم are.', example: 'The forms are checked.' }, { title: 'خطأ', pattern: 'The road was repaired now.', explanation: 'إذا كان الفعل جارياً في الماضي نحتاج was being + V3.', example: 'The road was being repaired.' }],
    practice: [
      { prompt: 'The forms ___ every morning.', options: ['are checked', 'were checked', 'are checking'], answer: 'are checked', explanation: 'every morning عادة؛ مضارع بسيط للمجهول، والفاعل جمع.', skill: 'اختيار be' },
      { prompt: 'The road is ___ at the moment.', options: ['repair', 'being repaired', 'been repaired'], answer: 'being repaired', explanation: 'مضارع مستمر للمجهول: is being + V3.', skill: 'استمرار' },
      { prompt: 'The documents have been ___.', options: ['sign', 'signed', 'signing'], answer: 'signed', explanation: 'بعد been في present perfect passive يأتي V3.', skill: 'V3' },
    ],
    takeaway: 'في المبني للمجهول، لا تفقد الزمن: احتفظ بزمن الجملة الأصلية، غيّر be، ثم ضع التصريف الثالث.',
  },
  {
    lessonId: 'u7-l2', grade: 'sixth-preparatory', gradeLabel: 'السادس الإعدادي',
    topic: 'صيغ المستقبل الخمس',
    timeFocus: 'future',
    context: 'كل الجمل تتحدث عن المستقبل، لكن بعضها مواعيد ثابتة، وبعضها ترتيبات مؤكدة، وبعضها نوايا أو توقعات، وبعضها نشاط سيكون جارياً في ساعة محددة.',
    meaning: 'لا توجد صيغة واحدة لكل المستقبل. نختار الصيغة من نوع المعنى: جدول ثابت، ترتيب شخصي، نية، توقع أو قرار، أو نشاط مستمر في وقت مستقبلي.',
    timeline: 'كل الصيغ تقع بعد الآن؛ ما يميزها هو نوع المستقبل وكيف ينظر المتحدث إلى الحدث.',
    outcomes: ['أفرق بين الصيغ الخمس بمعناها.', 'أبني شكل كل صيغة.', 'أختار من السياق لا من tomorrow وحدها.'],
    uses: [
      { title: 'جدول رسمي ثابت', explanation: 'موعد مقرر ضمن جدول أو برنامج.', pattern: 'Present Simple', example: 'The train leaves at 7.', translation: 'يغادر القطار الساعة السابعة.' },
      { title: 'ترتيب شخصي مثبت', explanation: 'موعد تم ترتيبه مسبقاً.', pattern: 'Present Continuous', example: 'I am meeting the doctor tomorrow.', translation: 'سأقابل الطبيب غداً وفق ترتيب.' },
      { title: 'نية أو خطة', explanation: 'قرار أو نية موجودة قبل الكلام.', pattern: 'be going to + base verb', example: 'We are going to buy a new computer.', translation: 'نخطط لشراء حاسوب جديد.' },
      { title: 'توقع أو قرار أو وعد', explanation: 'رأي أو توقع أو قرار لحظي.', pattern: 'will + base verb', example: 'I think it will be expensive.', translation: 'أعتقد أنه سيكون مكلفاً.' },
      { title: 'نشاط في وقت مستقبلي', explanation: 'ما سيكون جارياً عند لحظة مستقبلية.', pattern: 'will be + V-ing', example: 'At ten, I will be studying.', translation: 'في العاشرة سأكون أدرس.' },
    ],
    forms: [
      { title: 'Present Simple', pattern: 'S + V(s/es)', explanation: 'للمواعيد والجداول الثابتة.', example: 'The plane arrives at noon.', translation: 'تصل الطائرة ظهراً.' },
      { title: 'Present Continuous', pattern: 'am/is/are + V-ing', explanation: 'للترتيب الشخصي المؤكد.', example: 'We are visiting our teacher tomorrow.', translation: 'سنزور معلمنا غداً وفق ترتيب.' },
      { title: 'Going to', pattern: 'am/is/are + going to + base verb', explanation: 'للنية أو الخطة السابقة أو التوقع بدليل.', example: 'Look at the sky. It is going to rain.', translation: 'انظر إلى السماء؛ يبدو أنها ستمطر.' },
      { title: 'Future Simple', pattern: 'will + base verb', explanation: 'للتوقع أو الوعد أو القرار اللحظي.', example: 'I will help you.', translation: 'سأساعدك.' },
      { title: 'Future Continuous', pattern: 'will be + V-ing', explanation: 'لنشاط سيكون جارياً عند وقت مستقبلي.', example: 'This time tomorrow, I will be travelling.', translation: 'في مثل هذا الوقت غداً سأكون مسافراً.' },
    ],
    contrast: [
      { title: 'جدول أم ترتيب شخصي؟', explanation: 'الموعد الرسمي المعلن يأخذ غالباً present simple؛ الموعد الشخصي المتفق عليه يأخذ present continuous.', example: 'The bus leaves at 8. / I am meeting Ali at 8.', translation: 'تنطلق الحافلة الساعة الثامنة. / سأقابل علياً في الثامنة.', pattern: 'جدول / ترتيب' },
      { title: 'نية أم قرار لحظي؟', explanation: 'هل الخطة موجودة مسبقاً أم قررتها الآن؟', example: 'I’m going to study medicine. / I’ll answer the phone.', translation: 'أنوي دراسة الطب. / سأجيب عن الهاتف الآن.', pattern: 'خطة / قرار لحظي' },
    ],
    clues: [{ title: 'timetable / schedule', explanation: 'قد يدل على present simple.' }, { title: 'arranged / booked', explanation: 'قد يدل على present continuous.' }, { title: 'plan / intention / visible evidence', explanation: 'قد يدل على going to.' }, { title: 'promise / I think / decision now', explanation: 'قد يدل على will.' }, { title: 'at this time tomorrow', explanation: 'قد يدل على future continuous.' }],
    verbTips: ['present simple للمواعيد يأخذ s مع he/she/it.', 'present continuous يحتاج be + ing.', 'going to يحتاج be ثم مصدر.', 'will لا يتغير مع الضمائر ويأتي بعده المصدر.', 'future continuous = will be + ing.'],
    examples: [
      { en: 'The lesson starts at 8, and I am meeting my tutor at 9.', ar: 'يبدأ الدرس في الثامنة، وسأقابل مدرسي في التاسعة.', focus: 'starts / am meeting', why: 'موعد ثابت مقابل ترتيب شخصي.' },
      { en: 'I’m going to revise tonight. I think I’ll pass. At 9, I’ll be studying.', ar: 'أنوي المراجعة الليلة. أعتقد أنني سأنجح. في التاسعة سأكون أدرس.', focus: 'going to / will / will be studying', why: 'نية، توقع، ونشاط في وقت مستقبلي.' },
    ],
    commonErrors: [{ title: 'خطأ', pattern: 'The train is leaving at 7 every day.', explanation: 'عندما يكون موعد جدول ثابت، present simple أوضح في هذا المعنى.', example: 'The train leaves at 7 every day.' }, { title: 'خطأ', pattern: 'I will be study at 9.', explanation: 'بعد will be يأتي V-ing.', example: 'I will be studying at 9.' }],
    practice: [
      { prompt: 'The school bus ___ at 7:30 every morning.', options: ['leaves', 'is leaving', 'will be leaving'], answer: 'leaves', explanation: 'موعد جدول ثابت؛ present simple.', skill: 'الجدول' },
      { prompt: 'We have booked a table. We ___ dinner at 8.', options: ['are having', 'have', 'will have'], answer: 'are having', explanation: 'حجز الطاولة يدل على ترتيب سابق.', skill: 'الترتيب' },
      { prompt: 'At this time tomorrow, I ___ my exam.', options: ['will take', 'will be taking', 'take'], answer: 'will be taking', explanation: 'نشاط سيكون جارياً عند وقت مستقبلي محدد.', skill: 'Future Continuous' },
    ],
    takeaway: 'قبل اختيار صيغة المستقبل، سمِّ نوعها: جدول، ترتيب، نية، توقع/وعد، أم نشاط جارٍ في وقت مستقبلي.',
  },
  {
    lessonId: 'u7-l4', grade: 'sixth-preparatory', gradeLabel: 'السادس الإعدادي',
    topic: 'المستقبل في الماضي',
    timeFocus: 'future-in-past',
    context: 'قال شخص أمس: سأزورك غداً. عندما تنقل كلامه اليوم، أصبح الغد الذي قصده جزءاً من ماضٍ نتحدث عنه.',
    meaning: 'المستقبل في الماضي يصف خطة أو توقعاً كان مستقبلاً بالنسبة إلى نقطة ماضية. لذلك تتحول بعض الصيغ مثل will إلى would، وgoing to إلى was/were going to.',
    timeline: 'نقف عند نقطة في الماضي، ثم ننظر إلى حدث كان سيقع بعدها. هو مستقبل بالنسبة للماضي، لكنه قد يكون ماضياً بالنسبة لنا الآن.',
    outcomes: ['أحدد نقطة الماضي التي ننقل الكلام منها.', 'أميز will→would وgoing to→was/were going to.', 'أحافظ على المعنى والزمن المرجعي.'],
    uses: [{ title: 'وعد أو توقع من منظور ماضٍ', explanation: 'كان المتحدث يتوقع أو يعد بشيء سيحدث لاحقاً.', pattern: 'will → would', example: 'He said, “I will call.” → He said he would call.', translation: 'قال إنه سيتصل.' }, { title: 'خطة سابقة', explanation: 'كان لديه ترتيب أو نية في تلك النقطة الماضية.', pattern: 'am/is going to → was going to', example: 'She said, “I am going to study.” → She said she was going to study.', translation: 'قالت إنها كانت تنوي الدراسة.' }],
    forms: [
      { title: 'will إلى would', pattern: 'will + base → would + base', explanation: 'نرجع المستقبل درجة عند نقل الكلام من منظور ماضٍ.', example: 'They said they would arrive at six.', translation: 'قالوا إنهم سيصلون عند السادسة.' },
      { title: 'going to إلى was/were going to', pattern: 'am/is going to → was going to\nare going to → were going to', explanation: 'نغير be إلى الماضي مع الحفاظ على going to والمصدر.', example: 'He was going to travel.', translation: 'كان ينوي السفر.' },
      { title: 'أفعال مساعدة أخرى', pattern: 'can → could | may → might', explanation: 'تتحول بعض الأفعال المساعدة بحسب سياق النقل.', example: 'She said she could help.', translation: 'قالت إنها تستطيع المساعدة.' },
    ],
    contrast: [{ title: 'Future in the Past ليس مستقبلاً من الآن', explanation: 'قِس الحدث إلى نقطة مرجعية ماضية: كان مستقبلاً وقتها. لا تغيّر كل فعل بشكل آلي؛ حدد الصيغة الأصلية ونقطة الإبلاغ.', example: 'In 2020, I thought I would work abroad.', translation: 'في 2020 كنت أعتقد أنني سأعمل في الخارج.', pattern: 'المستقبل منظوراً من الماضي' }],
    clues: [{ title: 'He thought / She said / I decided', explanation: 'قد تضعنا عند نقطة مرجعية ماضية.' }, { title: 'will / going to في الكلام الأصلي', explanation: 'افحص الصيغة التي كانت تشير إلى المستقبل عند نقطة الماضي.' }],
    verbTips: ['would يأتي بعده المصدر.', 'was/were going to يحتاج be في الماضي.', 'future in the past يعتمد على منظور المتحدث؛ لا تطبق backshift إذا لم يكن السياق يتطلبه.'],
    examples: [
      { en: 'I thought the exam would be easy.', ar: 'اعتقدت أن الامتحان سيكون سهلاً.', focus: 'would be', why: 'التوقع كان مستقبلاً من نقطة ماضية.' },
      { en: 'They were going to travel, but the flight was cancelled.', ar: 'كانوا ينوون السفر، لكن الرحلة أُلغيت.', focus: 'were going to travel', why: 'خطة كانت مقررة من منظور ماضٍ.' },
    ],
    commonErrors: [{ title: 'خطأ', pattern: 'He thought he will win.', explanation: 'في سياق المستقبل في الماضي، نستخدم would.', example: 'He thought he would win.' }, { title: 'خطأ', pattern: 'They was going to leave.', explanation: 'مع they نستخدم were.', example: 'They were going to leave.' }],
    practice: [
      { prompt: 'She said she ___ help us.', options: ['will', 'would', 'is'], answer: 'would', explanation: 'will تتحول إلى would في هذا السياق.', skill: 'التحويل' },
      { prompt: 'They ___ going to buy a car, but changed their minds.', options: ['were', 'was', 'are'], answer: 'were', explanation: 'they تأخذ were going to.', skill: 'مطابقة الفاعل' },
      { prompt: 'I thought it ___ rain later.', options: ['will', 'would', 'is'], answer: 'would', explanation: 'كان التوقع مستقبلاً من نقطة ماضية.', skill: 'المنظور الزمني' },
    ],
    takeaway: 'اسأل: ما النقطة الماضية التي ننظر منها إلى المستقبل؟ بعد ذلك حوّل will إلى would أو going to إلى was/were going to بحسب السياق.',
  },
];

export const TENSE_TEACHING_GUIDES: Record<string, TenseTeachingGuide> = Object.fromEntries(
  GUIDES.map((guide) => [guide.lessonId, guide])
);

export const TENSE_TEACHING_GUIDE_IDS = GUIDES.map((guide) => guide.lessonId);

export function getTenseTeachingGuide(lessonId: string): TenseTeachingGuide | undefined {
  return TENSE_TEACHING_GUIDES[lessonId];
}
