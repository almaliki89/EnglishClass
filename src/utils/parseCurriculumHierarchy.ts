export interface CurriculumSourcePage {
  pageNumber: number;
  text?: string;
  preview?: string;
}

export interface ParsedCurriculumUnit {
  unitNumber: number;
  title: string;
  detectedLessonsCount: number;
  sampleGrammarRules: string[];
}

export interface ParsedCurriculumLesson {
  unitNumber: number;
  lessonNumber: number;
  titleAr: string;
  titleEn: string;
  pageNumber: number | null;
}

export interface ParsedCurriculumHierarchy {
  units: ParsedCurriculumUnit[];
  lessons: ParsedCurriculumLesson[];
  unassignedLessonHeadings: string[];
}

const normalizeDigits = (value: string): string =>
  value.replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));

const findSourcePage = (line: string, pages: CurriculumSourcePage[]): number | null => {
  const normalizedLine = line.normalize("NFKC").replace(/\s+/g, " ").trim().toLocaleLowerCase();
  if (!normalizedLine || !pages.length) return null;

  for (const page of pages) {
    const pageText = (page.text || page.preview || "")
      .normalize("NFKC")
      .replace(/\s+/g, " ")
      .toLocaleLowerCase();
    if (pageText.includes(normalizedLine)) return page.pageNumber;
  }
  return null;
};

/**
 * Parse only explicit Unit/Lesson headings. Never invent a default unit,
 * increment a parsed unit number, or assign a lesson before its unit.
 */
export function parseCurriculumHierarchy(
  text: string,
  pages: CurriculumSourcePage[] = []
): ParsedCurriculumHierarchy {
  const units: ParsedCurriculumUnit[] = [];
  const lessons: ParsedCurriculumLesson[] = [];
  const unassignedLessonHeadings: string[] = [];
  let currentUnitNumber: number | null = null;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    const unitMatch = line.match(/(?:\bUnit\s*|الوحدة\s*)([0-9٠-٩]{1,2})/i);
    if (unitMatch) {
      const unitNumber = Number.parseInt(normalizeDigits(unitMatch[1]), 10);
      if (Number.isInteger(unitNumber) && unitNumber > 0) {
        currentUnitNumber = unitNumber;
        if (!units.some((unit) => unit.unitNumber === unitNumber)) {
          units.push({
            unitNumber,
            title: line.slice(0, 80),
            detectedLessonsCount: 0,
            sampleGrammarRules: [],
          });
        }
      }
    }

    const lessonMatch = line.match(/(?:\bLesson\s*|الدرس\s*)([0-9٠-٩]{1,2})/i);
    if (lessonMatch) {
      const lessonNumber = Number.parseInt(normalizeDigits(lessonMatch[1]), 10);
      if (!Number.isInteger(lessonNumber) || lessonNumber <= 0) continue;

      if (currentUnitNumber === null) {
        unassignedLessonHeadings.push(line.slice(0, 120));
        continue;
      }

      const exists = lessons.some(
        (lesson) =>
          lesson.unitNumber === currentUnitNumber &&
          lesson.lessonNumber === lessonNumber
      );
      if (!exists) {
        lessons.push({
          unitNumber: currentUnitNumber,
          lessonNumber,
          titleAr: line.slice(0, 80),
          titleEn: `Lesson ${lessonNumber}`,
          pageNumber: findSourcePage(line, pages),
        });
      }
    }
  }

  for (const unit of units) {
    unit.detectedLessonsCount = lessons.filter(
      (lesson) => lesson.unitNumber === unit.unitNumber
    ).length;
  }

  return { units, lessons, unassignedLessonHeadings };
}
