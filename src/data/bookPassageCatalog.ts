import { EducationalGrade, Lesson, Unit } from '../types';

/**
 * Curated index of actual textbook reading passages.
 *
 * Deliberately does NOT infer a "book passage" from lesson.category === "reading".
 * Story Time, supplementary reading, standalone dialogues/interviews and unit tests
 * stay in their own curriculum sections.
 *
 * Titles below name the source text itself, not the mixed lesson that may also teach
 * grammar or include a unit test.
 */
export interface BookPassageCatalogItem {
  id: string;
  lessonId: string;
  titleAr: string;
  titleEn: string;
  sourcePages?: string;
}

export interface ResolvedBookPassage extends BookPassageCatalogItem {
  unit: Unit;
  lesson: Lesson;
}

export const BOOK_PASSAGES_BY_GRADE: Record<EducationalGrade, BookPassageCatalogItem[]> = {
  'third-intermediate': [
    { id: '3i-u1-panther', lessonId: '3rd-u1-l4', titleAr: 'سيارة العام: Panther 3.0D', titleEn: 'Car of the Year: Panther 3.0D' },
    { id: '3i-u2-lucy', lessonId: '3rd-u2-l3', titleAr: 'لوسي', titleEn: 'Lucy' },
    { id: '3i-u3-falcon-marshes', lessonId: '3rd-u3-l5', titleAr: 'أسرع الكائنات الحية وعرب الأهوار', titleEn: 'The Fastest Living Thing & Life on the Marshes' },
    { id: '3i-u4-ibrahim', lessonId: '3rd-u4-l3', titleAr: 'إبراهيم', titleEn: 'Ibrahim', sourcePages: '85–87' },
    { id: '3i-u4-leopards', lessonId: '3rd-u4-l4', titleAr: 'النمور الفارسية: أعداد قليلة', titleEn: 'Too Few Leopards', sourcePages: '88' },
    { id: '3i-u5-news', lessonId: '3rd-u5-l2', titleAr: 'أخبار الصباح العراقية', titleEn: 'Iraqi Morning News' },
    { id: '3i-u7-asian-games', lessonId: '3rd-u7-l4', titleAr: 'دورة الألعاب الآسيوية', titleEn: 'The Asian Games' },
  ],

  'fourth-preparatory': [
    { id: '4p-u1-language-statistics', lessonId: '4th-u1-l2', titleAr: 'إحصائيات تعلّم اللغات', titleEn: 'Languages Statistics' },
    { id: '4p-u1-summer-programme', lessonId: '4th-u1-l3', titleAr: 'كيفية اختيار البرنامج الصيفي', titleEn: 'How to Choose a Summer Programme' },
    { id: '4p-u1-canada', lessonId: '4th-u1-l4', titleAr: 'كندا واللغات الرسمية', titleEn: 'Canada & Official Languages' },
    { id: '4p-u2-unicef', lessonId: '4th-u2-l3', titleAr: 'منظمة اليونيسيف وحماية الأطفال', titleEn: 'UNICEF & Helping Disadvantaged Children' },
    { id: '4p-u2-schools', lessonId: '4th-u2-l4', titleAr: 'مدارس للجميع', titleEn: 'Schools for All' },
    { id: '4p-u2-meade', lessonId: '4th-u2-l6', titleAr: 'مدرسة ميد', titleEn: 'The Meade School' },
    { id: '4p-u2-sally', lessonId: '4th-u2-l7', titleAr: 'وظيفة سالي القديمة', titleEn: "Sally's Old Job" },
    { id: '4p-u3-water', lessonId: '4th-u3-l4', titleAr: 'تلوث المياه والكوارث البيئية', titleEn: 'Water Pollution & Environmental Threats' },
    { id: '4p-u3-inventions', lessonId: '4th-u3-l5', titleAr: 'اختراعات غيّرت وجه الحياة', titleEn: 'Life-Changing Inventions' },
    { id: '4p-u4-gap-year', lessonId: '4th-u4-l1', titleAr: 'سنة الفجوة والتغيرات في الحياة', titleEn: 'Taking a Gap Year & Changes in Life' },
    { id: '4p-u5-weddings', lessonId: '4th-u5-l4', titleAr: 'عادات الزواج حول العالم', titleEn: 'Wedding Customs' },
    { id: '4p-u5-glass', lessonId: '4th-u5-l6', titleAr: 'الحرف اللبنانية ونفخ الزجاج', titleEn: 'Lebanese Crafts & Glass-Blowing' },
    { id: '4p-u5-museum', lessonId: '4th-u5-l7', titleAr: 'رحلة مدرسية إلى المتحف الوطني العراقي', titleEn: 'A School Trip to the National Museum of Iraq', sourcePages: '92' },
    { id: '4p-u6-lunch', lessonId: '4th-u6-l0', titleAr: 'الغداء الصحي ومجموعات الطعام', titleEn: 'A Healthy Lunch' },
    { id: '4p-u6-sleep', lessonId: '4th-u6-l2', titleAr: 'النوم وصحة المراهقين', titleEn: "Sleep and Teenagers' Health" },
    { id: '4p-u6-exercise', lessonId: '4th-u6-l5', titleAr: 'التمارين واللياقة البدنية', titleEn: 'Exercise & Fitness' },
    { id: '4p-u6-world-cup', lessonId: '4th-u6-l7', titleAr: 'كأس العالم لكرة القدم', titleEn: 'The FIFA World Cup' },
    { id: '4p-u6-mind', lessonId: '4th-u6-l8', titleAr: 'خمسة أسباب تجعل التمارين مفيدة للعقل', titleEn: 'Five Reasons Exercise Is Good for Your Mind' },
    { id: '4p-u7-body', lessonId: '4th-u7-l1', titleAr: 'أهمية التمارين للجسم', titleEn: 'Why Exercise Is Important for Your Body' },
    { id: '4p-u7-winds', lessonId: '4th-u7-l3', titleAr: 'الرياح التجارية والشمال والطقس', titleEn: 'Trade Winds, the Shamal & Weather' },
    { id: '4p-u7-marshes', lessonId: '4th-u7-l5', titleAr: 'أهوار الحمار: استعادة جنة عدن', titleEn: 'Restoring the Garden of Eden: Al-Hammar Marshes' },
    { id: '4p-u7-oil', lessonId: '4th-u7-l7', titleAr: 'تكوّن النفط من الأرض إلى المصفاة', titleEn: 'From the Earth to the Refinery' },
    { id: '4p-u7-shopping', lessonId: '4th-u7-l8', titleAr: 'التسوق عبر الإنترنت', titleEn: 'Online Shopping' },
    { id: '4p-u7-space-station', lessonId: '4th-u7-l9', titleAr: 'محطة الفضاء الدولية', titleEn: 'The International Space Station' },
    { id: '4p-u7-turtle', lessonId: '4th-u7-l10', titleAr: 'السلحفاة البحرية صقرية المنقار', titleEn: 'The Hawksbill Sea Turtle' },
    { id: '4p-u8-saturn', lessonId: '4th-u8-l1', titleAr: 'كوكب زحل', titleEn: 'Planet Saturn' },
    { id: '4p-u8-gps', lessonId: '4th-u8-l2', titleAr: 'نظام تحديد المواقع العالمي', titleEn: 'The Global Positioning System (GPS)' },
    { id: '4p-u8-space-fitness', lessonId: '4th-u8-l4', titleAr: 'المحافظة على اللياقة البدنية في الفضاء', titleEn: 'Keeping Fit in Space' },
  ],

  'fifth-preparatory': [
    { id: '5p-u1-ramadan', lessonId: '5th-u1-l2', titleAr: 'رمضان في العراق', titleEn: 'Ramadan in Iraq' },
    { id: '5p-u1-souq', lessonId: '5th-u1-l3', titleAr: 'سوق الشورجة', titleEn: 'Souq Al-Shorja' },
    { id: '5p-u1-babylon', lessonId: '5th-u1-l8', titleAr: 'مهرجان بابل الدولي', titleEn: 'The Babylon International Festival' },
    { id: '5p-u2-digital-poverty', lessonId: '5th-u2-l3', titleAr: 'الفقر الرقمي: We Are Connected', titleEn: 'Rashid Zeid & Digital Poverty' },
    { id: '5p-u2-web', lessonId: '5th-u2-l6', titleAr: 'اختراع شبكة الويب العالمية', titleEn: 'The Invention of the World Wide Web' },
    { id: '5p-u2-mobile', lessonId: '5th-u2-l8', titleAr: 'تاريخ الهواتف المحمولة', titleEn: 'The History of Mobile Phones' },
    { id: '5p-u3-wildlife', lessonId: '5th-u3-l2', titleAr: 'ملفات حقائق الكائنات المهددة', titleEn: 'Endangered Wildlife Factfiles' },
    { id: '5p-u3-ngos', lessonId: '5th-u3-l3', titleAr: 'المنظمات البيئية والتطوع', titleEn: 'Environmental NGOs & Eco-Volunteering' },
    { id: '5p-u3-recycling', lessonId: '5th-u3-l5', titleAr: 'إعادة التدوير', titleEn: 'Recycling' },
    { id: '5p-u3-basra-pollution', lessonId: '5th-u3-l6', titleAr: 'التلوث النفطي والغازي في البصرة', titleEn: 'Oil & Gas Pollution in Basra' },
    { id: '5p-u3-hybrid-cars', lessonId: '5th-u3-l8', titleAr: 'السيارات الهجينة', titleEn: 'Hybrid Cars & Terry’s Interview' },
    { id: '5p-u3-oryx', lessonId: '5th-u3-l9', titleAr: 'عودة المها العربي', titleEn: 'The Oryx Is Back' },
    { id: '5p-u4-bakkar', lessonId: '5th-u4-l1', titleAr: 'كارتون بكار والمخرجة منى أبو النصر', titleEn: 'Bakkar & Animator Mona Abu El Nasr' },
    { id: '5p-u5-mike-green', lessonId: '5th-u5-l9', titleAr: 'رسالة شكوى مايك غرين', titleEn: 'Mike Green’s Letter of Complaint' },
    { id: '5p-u6-manchester-fire', lessonId: '5th-u6-l2', titleAr: 'حريق شارع كوين في مانشستر', titleEn: 'Manchester Queen Street Fire' },
    { id: '5p-u6-spanish-captain', lessonId: '5th-u6-l5', titleAr: 'نقد فيلم القبطان الإسباني', titleEn: 'The Spanish Captain: Film Review' },
    { id: '5p-u6-news', lessonId: '5th-u6-l7', titleAr: 'أربعة أخبار صحفية غريبة', titleEn: 'Four Bizarre News Stories' },
    { id: '5p-u6-satellite-tv', lessonId: '5th-u6-l9', titleAr: 'تاريخ البث الفضائي', titleEn: 'The Evolution of Satellite Television' },
    { id: '5p-u7-harrods', lessonId: '5th-u7-l8', titleAr: 'تاريخ متجر هارودز', titleEn: 'The History of Harrods' },
    { id: '5p-u8-boa', lessonId: '5th-u8-l3', titleAr: 'القبض على الأصلة العاصرة في لندن', titleEn: 'Caught at Last! The 3-Metre Boa Constrictor' },
  ],

  'sixth-preparatory': [
    { id: '6p-u1-ammar', lessonId: 'u1-l3', titleAr: 'عمار وتقنية الهيكل الخارجي', titleEn: "Ammar's Story & the Exoskeleton", sourcePages: 'ص 10 من ملزمة السادس 2027' },
    { id: '6p-u1-diet', lessonId: 'u1-l7', titleAr: 'لنبدأ بالنظام الغذائي', titleEn: "Let's Start with Diet", sourcePages: 'ص 25 من ملزمة السادس 2027' },
    { id: '6p-u1-najla', lessonId: 'u1-l9', titleAr: 'نجلة عماد لفتة', titleEn: 'Najla Imad Lafta', sourcePages: 'ص 27–28 من ملزمة السادس 2027' },
    { id: '6p-u2-police', lessonId: 'u2-l2', titleAr: 'واجبات ضابط الشرطة', titleEn: 'Police Officer Duties', sourcePages: 'ص 30–31 من ملزمة السادس 2027' },
    { id: '6p-u2-home-safety', lessonId: 'u2-l7', titleAr: 'كتيب سلامة المنازل', titleEn: 'Home Safety Brochure', sourcePages: 'ص 49 من ملزمة السادس 2027' },
    { id: '6p-u2-radar', lessonId: 'u2-l9', titleAr: 'مسدس الرادار لقياس السرعة', titleEn: 'Radar Speed Gun', sourcePages: 'ص 51 من ملزمة السادس 2027' },
    { id: '6p-u3-samira', lessonId: 'u3-l10', titleAr: 'سميرة المحمود: المترجمة الفورية', titleEn: 'Samira Al Mahmoud: Conference Interpreter', sourcePages: 'ص 74–75 من ملزمة السادس 2027' },
    { id: '6p-u4-rashid-rana', lessonId: 'u4-l1', titleAr: 'شركة راشد ورنا للأزياء', titleEn: 'Rashid & Rana Designs', sourcePages: 'كتاب الطالب ص 42' },
    { id: '6p-u4-fitness-tech', lessonId: 'u4-l2', titleAr: 'تقنيات اللياقة البدنية', titleEn: 'Fitness Technology & Smart Gyms', sourcePages: 'ص 80 من ملزمة السادس 2027' },
    { id: '6p-u5-kerkennah', lessonId: 'u5-l6', titleAr: 'رحلة جزر قرقنة التونسية', titleEn: 'Kerkennah Islands Holiday', sourcePages: 'ص 99 من ملزمة السادس 2027' },
    { id: '6p-u5-holidays', lessonId: 'u5-l9', titleAr: 'لماذا العطل مهمة؟', titleEn: 'Why Are Holidays So Important?', sourcePages: 'ص 104 من ملزمة السادس 2027' },
    { id: '6p-u6-banker', lessonId: 'u6-l3', titleAr: 'مقابلة موظف البنك', titleEn: 'Meet a Banker', sourcePages: 'ص 112–113 من ملزمة السادس 2027' },
    { id: '6p-u6-making-money', lessonId: 'u6-l9', titleAr: 'كسب المال واستثماره', titleEn: 'Making Money & Investments', sourcePages: 'ص 121–122 من ملزمة السادس 2027' },
    { id: '6p-u7-work-today', lessonId: 'u7-l3', titleAr: 'العمل اليوم', titleEn: 'Work Today', sourcePages: 'ص 130 من ملزمة السادس 2027' },
    { id: '6p-u7-library', lessonId: 'u7-l9', titleAr: 'استخدام المكتبة', titleEn: 'Using the Library', sourcePages: 'ص 135–136 من ملزمة السادس 2027' },
    { id: '6p-u8-wind-power', lessonId: 'u8-l3', titleAr: 'مصدر متجدد: طاقة الرياح', titleEn: 'A Renewable Resource: Wind Power', sourcePages: 'ص 145 من ملزمة السادس 2027' },
    { id: '6p-u8-angry-reader', lessonId: 'u8-l3', titleAr: 'رسالة قارئ غاضب', titleEn: 'An Angry Reader', sourcePages: 'ص 146 من ملزمة السادس 2027' },
    { id: '6p-u8-euphrates', lessonId: 'u8-l4', titleAr: 'نهر الفرات', titleEn: 'The Euphrates River', sourcePages: 'كتاب الطالب ص 87' },
  ],
};

export function getBookPassageCatalog(grade: EducationalGrade): BookPassageCatalogItem[] {
  return BOOK_PASSAGES_BY_GRADE[grade] || [];
}

export function resolveBookPassages(grade: EducationalGrade, units: Unit[]): ResolvedBookPassage[] {
  const lessonsById = new Map<string, { unit: Unit; lesson: Lesson }>();
  for (const unit of units) {
    for (const lesson of unit.lessons) {
      lessonsById.set(lesson.id, { unit, lesson });
    }
  }

  return getBookPassageCatalog(grade).flatMap((item) => {
    const found = lessonsById.get(item.lessonId);
    return found ? [{ ...item, ...found }] : [];
  });
}

export function isBookPassageLesson(grade: EducationalGrade, lessonId: string): boolean {
  return getBookPassageCatalog(grade).some((item) => item.lessonId === lessonId);
}
