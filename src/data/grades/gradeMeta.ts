import { EducationalGrade } from '../../types';

export interface GradeMeta {
  id: EducationalGrade;
  nameAr: string;
  shortName: string;
  nameEn: string;
  stage: 'intermediate' | 'preparatory';
  stageAr: string;
  isMinisterial: boolean;
  themeColor: string;
  accentGradient: string;
  badgeBg: string;
  description: string;
  curriculumBook: string;
  authorNote: string;
}

export const ALL_GRADES_META: Record<EducationalGrade, GradeMeta> = {
  'third-intermediate': {
    id: 'third-intermediate',
    nameAr: 'الثالث المتوسط',
    shortName: 'الثالث',
    nameEn: '3rd Intermediate',
    stage: 'intermediate',
    stageAr: 'المرحلة المتوسطة (شهادة وزارية)',
    isMinisterial: true,
    themeColor: 'yellow',
    accentGradient: 'bg-[#F3E6A5]',
    badgeBg: 'bg-[#F3E6A5] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124]',
    description: 'المنهج الوزاري الرسمي للثالث المتوسط: سيارة النمر Panther 3.0D، المقارنة والتفضيل، التفضيل والدعوات، قطع الكتاب، وقصص لوسي وكريم والغزالة.',
    curriculumBook: 'English for Iraq - 3rd Intermediate (Ministerial)',
    authorNote: 'منهج الامتحان الوزاري الموحد لجمهورية العراق - تركيز 100% على أسئلة الامتحانات الوزارية.'
  },
  'fourth-preparatory': {
    id: 'fourth-preparatory',
    nameAr: 'الرابع الإعدادي',
    shortName: 'الرابع',
    nameEn: '4th Preparatory',
    stage: 'preparatory',
    stageAr: 'المرحلة الإعدادية (العلمي والأدبي)',
    isMinisterial: false,
    themeColor: 'sky',
    accentGradient: 'bg-[#DCD8FA]',
    badgeBg: 'bg-[#DCD8FA] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124]',
    description: 'المنهج الرسمي المعتمد للرابع الإعدادي وفق ملزمة النموذجية 2026: الوحدات الثمانية الكاملة، لغات كندا، الأسئلة غير المباشرة، منظمة اليونيسيف وعادات الأعراس بالعراق، المضارع التام وقواعد for/since، المتحف الوطني العراقي ببغداد، المستقبل المستمر ونوم المراهقين، أهوار الحمار والمبني للمجهول، وأدب جزيرة الكنز لستيفنسون وحول العالم في 80 يوماً لجول فيرن.',
    curriculumBook: 'English for Iraq - 4th Preparatory (النموذجية 2026)',
    authorNote: 'المرجع الحصري المعتمد صفحة بصفحة (205 صفحات): الشروحات والقواعد والتمارين والإنشاءات الـ 7 ونصوص الأدب المعتمدة.'
  },
  'fifth-preparatory': {
    id: 'fifth-preparatory',
    nameAr: 'الخامس الإعدادي',
    shortName: 'الخامس',
    nameEn: '5th Preparatory',
    stage: 'preparatory',
    stageAr: 'المرحلة الإعدادية (العلمي والأدبي)',
    isMinisterial: false,
    themeColor: 'vermilion',
    accentGradient: 'bg-[#F2A18E]',
    badgeBg: 'bg-[#F2A18E] text-[#202124] border-2 border-[#202124] shadow-[2px_2px_0px_#202124]',
    description: 'المنهج الرسمي المعتمد للخامس الإعدادي وفق ملزمة الأستاذ عمار غالب 2026: الوحدات الثمانية الكاملة، رمضان في العراق وسوق الشورجة ومهرجان بابل، تكنولوجيا الهواتف والاستنتاج، الكائنات المهددة والشرطية الأولى، بكار، التغذية والشرطية الثانية والندم، الإعلام والكلام المنقول، المبني للمجهول وفندق الجليد ومتجر هارودز، وأدب لويزا ماي ألكوت (نساء صغيرات) ومسرحية العاصفة لشكسبير.',
    curriculumBook: 'English for Iraq - 5th Preparatory (النموذجية 2026 - أ. عمار غالب)',
    authorNote: 'المرجع الحصري المعتمد صفحة بصفحة (265 صفحة): القواعد والشروحات والتمارين والإنشاءات الـ 15 ونصوص الأدب الكاملة.'
  },
  'sixth-preparatory': {
    id: 'sixth-preparatory',
    nameAr: 'السادس الإعدادي',
    shortName: 'السادس',
    nameEn: '6th Preparatory',
    stage: 'preparatory',
    stageAr: 'المرحلة الإعدادية (البكالوريا الوزارية)',
    isMinisterial: true,
    themeColor: 'cobalt',
    accentGradient: 'bg-[#405DE6]',
    badgeBg: 'bg-[#405DE6] text-white border-2 border-[#202124] shadow-[2px_2px_0px_#202124]',
    description: 'المنهج الوزاري الشامل للبكالوريا وفق الكتاب المعتمد حصراً: الوحدات الثمانية، قطع (عمار وتقنية الهيكل الخارجي، نجلة عماد لفتة، الرادار، سميرة المحمود، تصاميم راشد ورنا، ونهر الفرات)، والأدب المقرّر (كبرياء وتحامل لجين أوستن، كما تشاء لشكسبير).',
    curriculumBook: 'English for Iraq - 6th Preparatory (Baccalaureate)',
    authorNote: 'المرجع الوزاري الشامل للاستعداد للامتحان الوزاري العام لجمهورية العراق.'
  }
};

export const ORDERED_GRADES: EducationalGrade[] = [
  'third-intermediate',
  'fourth-preparatory',
  'fifth-preparatory',
  'sixth-preparatory'
];
