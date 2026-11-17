import fs from 'node:fs';
import path from 'node:path';
import { ORDERED_GRADES, getUnitsForGrade } from '../src/data/gradeContentResolver';
import { BOOK_PASSAGES_BY_GRADE, resolveBookPassages } from '../src/data/bookPassageCatalog';

type AuditRow = {
  grade: string;
  readingLessons: number;
  passagesAttached: number;
  verified: number;
  reconstructed: number;
  permissionRequired: number;
  sourceRequired: number;
  pendingSource: number;
  pendingIds: string[];
};

const rows: AuditRow[] = [];
const errors: string[] = [];

for (const grade of ORDERED_GRADES) {
  const units = getUnitsForGrade(grade);
  const lessons = units.flatMap((unit) => unit.lessons);
  const readingLessons = lessons.filter(
    (lesson) => lesson.category === 'reading' || Boolean(lesson.readingPassage)
  );

  let verified = 0;
  let reconstructed = 0;
  let permissionRequired = 0;
  let sourceRequired = 0;
  let pendingSource = 0;
  let passagesAttached = 0;
  const pendingIds: string[] = [];

  for (const lesson of readingLessons) {
    const passage = lesson.readingPassage;
    if (!passage) {
      pendingSource += 1;
      pendingIds.push(lesson.id);
      continue;
    }

    passagesAttached += 1;
    const hasText = Boolean(passage.originalText?.some((paragraph) => paragraph.trim().length > 0));

    if ((passage.status === 'verified' || passage.status === 'reconstructed') && !hasText) {
      errors.push(`${grade}/${lesson.id}: ${passage.status} passage has no originalText.`);
    }
    if (passage.status === 'summary_only' && hasText) {
      errors.push(`${grade}/${lesson.id}: summary_only must not contain originalText.`);
    }
    if (passage.status === 'verified' && (!passage.sourceTitle.trim() || !passage.sourcePages.trim())) {
      errors.push(`${grade}/${lesson.id}: verified passage must identify its source and pages.`);
    }

    if (passage.status === 'verified') verified += 1;
    if (passage.status === 'reconstructed') reconstructed += 1;
    if (passage.status === 'permission_required') {
      permissionRequired += 1;
      if (hasText) errors.push(`${grade}/${lesson.id}: permission_required must not embed source text.`);
      if (!passage.sourceTitle.trim() || !passage.sourcePages.trim()) errors.push(`${grade}/${lesson.id}: permission_required must identify source and pages.`);
    }
    if (passage.status === 'source_required') sourceRequired += 1;
    if (passage.status === 'source_required' || passage.status === 'summary_only') {
      pendingSource += 1;
      pendingIds.push(lesson.id);
    }
  }

  rows.push({
    grade,
    readingLessons: readingLessons.length,
    passagesAttached,
    verified,
    reconstructed,
    permissionRequired,
    sourceRequired,
    pendingSource,
    pendingIds,
  });
}

// Verify all catalog reading passage illustrations and uniqueness
const publicDir = path.resolve(process.cwd(), 'public');
const seenImageSrc = new Map<string, string>();
let totalCatalogPassages = 0;

for (const grade of ORDERED_GRADES) {
  const catalogItems = BOOK_PASSAGES_BY_GRADE[grade] || [];
  const resolved = resolveBookPassages(grade, getUnitsForGrade(grade));
  if (resolved.length !== catalogItems.length) {
    errors.push(`${grade}: only ${resolved.length}/${catalogItems.length} catalog passages resolved to curriculum lessons.`);
  }

  for (const item of catalogItems) {
    totalCatalogPassages += 1;
    const expectedSrc = `/images/passages/${item.id}.webp`;
    if (item.imageSrc !== expectedSrc) {
      errors.push(`${grade}/${item.id}: imageSrc "${item.imageSrc}" must equal "${expectedSrc}".`);
    }
    if (!item.imageAlt || !/[\u0600-\u06FF]/.test(item.imageAlt)) {
      errors.push(`${grade}/${item.id}: imageAlt must contain descriptive Arabic text.`);
    }
    const existingOwner = seenImageSrc.get(item.imageSrc);
    if (existingOwner) {
      errors.push(`${grade}/${item.id}: duplicate imageSrc "${item.imageSrc}" already used by ${existingOwner}.`);
    } else {
      seenImageSrc.set(item.imageSrc, item.id);
    }

    const diskPath = path.join(publicDir, item.imageSrc.replace(/^\//, ''));
    if (!fs.existsSync(diskPath)) {
      errors.push(`${grade}/${item.id}: missing image asset on disk at ${diskPath}.`);
    } else if (fs.statSync(diskPath).size < 10240) {
      errors.push(`${grade}/${item.id}: image asset at ${diskPath} appears unexpectedly small (<10KB).`);
    }
  }
}

const sixthLessons = getUnitsForGrade('sixth-preparatory').flatMap((unit) => unit.lessons);
const fitnessLesson = sixthLessons.find((lesson) => lesson.id === 'u4-l2');
const workTodayLesson = sixthLessons.find((lesson) => lesson.id === 'u7-l3');
const moneyLesson = sixthLessons.find((lesson) => lesson.id === 'u6-l9');

if (!fitnessLesson?.detailedContent.some((line) => line.includes('المجتمعات الرياضية عبر الإنترنت'))) {
  errors.push('sixth-preparatory/u4-l2: Fitness Tech must cover online exercise communities.');
}
if (fitnessLesson?.detailedContent.some((line) => /wearable fitness trackers|تطبيقات الذكاء الاصطناعي/.test(line))) {
  errors.push('sixth-preparatory/u4-l2: remove unsupported wearable trackers or AI fitness apps.');
}
if (!workTodayLesson?.detailedContent.some((line) => line.includes('تصميم المواقع'))) {
  errors.push('sixth-preparatory/u7-l3: Work Today must cover web design.');
}
if (workTodayLesson?.detailedContent.some((line) => /telecommuting|العمل عن بعد/.test(line))) {
  errors.push('sixth-preparatory/u7-l3: telecommuting is not in the uploaded passage.');
}
if (moneyLesson?.detailedContent.some((line) => /الأكثر أماناً|الأكثر أمانًا/.test(line))) {
  errors.push('sixth-preparatory/u6-l9: property must not be presented as a guaranteed safest investment.');
}

console.table(rows.map(({ pendingIds, ...row }) => row));
console.log(`Catalog passage image checks: ${seenImageSrc.size}/${totalCatalogPassages} unique local WebP assets verified.`);
for (const row of rows) {
  if (row.pendingIds.length > 0) {
    console.log(`Pending original source for ${row.grade}: ${row.pendingIds.join(', ')}`);
  }
}

if (errors.length > 0) {
  console.error('Reading-passage integrity failures:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  const totals = rows.reduce(
    (acc, row) => ({
      readingLessons: acc.readingLessons + row.readingLessons,
      verified: acc.verified + row.verified,
      reconstructed: acc.reconstructed + row.reconstructed,
      permissionRequired: acc.permissionRequired + row.permissionRequired,
      sourceRequired: acc.sourceRequired + row.sourceRequired,
      pendingSource: acc.pendingSource + row.pendingSource,
    }),
    { readingLessons: 0, verified: 0, reconstructed: 0, permissionRequired: 0, sourceRequired: 0, pendingSource: 0 }
  );
  const sixth = rows.find((row) => row.grade === 'sixth-preparatory');
  if (!sixth || sixth.readingLessons !== 17 || sixth.permissionRequired !== 15 || sixth.sourceRequired !== 2) {
    console.error('Sixth Preparatory source map changed unexpectedly.', sixth);
    process.exitCode = 1;
  } else {
    console.log('Sixth Preparatory source map: 17 reading lessons; 15 source-located awaiting digital publication permission; 2 requiring the original textbook pages.');
  }
  console.log('Reading-passage integrity checks passed.', totals);
}
