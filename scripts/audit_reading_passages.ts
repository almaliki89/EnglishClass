import { ORDERED_GRADES, getUnitsForGrade } from '../src/data/gradeContentResolver';

type AuditRow = {
  grade: string;
  readingLessons: number;
  passagesAttached: number;
  verified: number;
  reconstructed: number;
  pendingSource: number;
  pendingIds: string[];
};

const rows: AuditRow[] = [];
const errors: string[] = [];

for (const grade of ORDERED_GRADES) {
  const lessons = getUnitsForGrade(grade).flatMap((unit) => unit.lessons);
  const readingLessons = lessons.filter(
    (lesson) => lesson.category === 'reading' || Boolean(lesson.readingPassage)
  );

  let verified = 0;
  let reconstructed = 0;
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
    pendingSource,
    pendingIds,
  });
}

console.table(rows.map(({ pendingIds, ...row }) => row));
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
      pendingSource: acc.pendingSource + row.pendingSource,
    }),
    { readingLessons: 0, verified: 0, reconstructed: 0, pendingSource: 0 }
  );
  console.log('Reading-passage integrity checks passed.', totals);
}
