import { ORDERED_GRADES, ALL_GRADES_META, getUnitsForGrade, getStoriesForGrade, getEssaysForGrade, getQuestionsForGrade, getMockPapersForGrade, getGradeMeta } from '../src/data/gradeContentResolver';
import { EducationalGrade, Unit, Lesson } from '../src/types';

console.log('========================================================');
console.log('COMPREHENSIVE ARCHITECTURE & EDUCATIONAL CONTENT AUDIT');
console.log('========================================================\n');

let totalChecks = 0;
let passedChecks = 0;
const issues: { category: string; description: string; severity: 'CRITICAL' | 'WARNING' | 'INFO' }[] = [];

function check(condition: boolean, category: string, description: string, severity: 'CRITICAL' | 'WARNING' | 'INFO' = 'CRITICAL') {
  totalChecks++;
  if (condition) {
    passedChecks++;
  } else {
    issues.push({ category, description, severity });
    console.error(`❌ [${severity}] ${category}: ${description}`);
  }
}

// -----------------------------------------------------------------
// 1. CURRICULUM STRUCTURE & LESSON QUALITY AUDIT ACROSS ALL 4 GRADES
// -----------------------------------------------------------------
console.log('--- 1. AUDITING ALL 4 GRADES CURRICULUM DATA ---');

const globalLessonIdMap = new Map<string, { grade: EducationalGrade; unitId: number | string }>();

ORDERED_GRADES.forEach(grade => {
  const meta = getGradeMeta(grade);
  const units = getUnitsForGrade(grade);
  const stories = getStoriesForGrade(grade);
  const essays = getEssaysForGrade(grade);
  const questions = getQuestionsForGrade(grade);
  const mockPapers = getMockPapersForGrade(grade);

  check(units.length > 0, 'CURRICULUM_DATA', `Grade ${grade} has ${units.length} units (> 0)`);
  check(stories.length > 0, 'CURRICULUM_DATA', `Grade ${grade} has ${stories.length} literature/story items (> 0)`);
  check(essays.length > 0, 'CURRICULUM_DATA', `Grade ${grade} has ${essays.length} essays (> 0)`);
  check(questions.length > 0, 'CURRICULUM_DATA', `Grade ${grade} has ${questions.length} questions (> 0)`);
  check(mockPapers.length > 0, 'CURRICULUM_DATA', `Grade ${grade} has ${mockPapers.length} mock exam papers (> 0)`);

  let gradeLessonCount = 0;
  const gradeLessonIds = new Set<string>();

  units.forEach((unit, uIdx) => {
    check(!!unit.id, 'UNIT_INTEGRITY', `Grade ${grade} Unit index ${uIdx} has valid ID`);
    check(!!unit.titleAr && !!unit.titleEn, 'UNIT_INTEGRITY', `Grade ${grade} Unit ${unit.id} has both Arabic and English titles`);
    check(unit.lessons.length > 0, 'UNIT_INTEGRITY', `Grade ${grade} Unit ${unit.id} has lessons (${unit.lessons.length})`);

    // Check lesson sequence
    unit.lessons.forEach((lesson, lIdx) => {
      gradeLessonCount++;
      // Unique lesson ID
      check(!gradeLessonIds.has(lesson.id), 'LESSON_UNIQUENESS', `Lesson ID ${lesson.id} is unique within grade ${grade}`);
      gradeLessonIds.add(lesson.id);

      // Global cross-grade uniqueness check
      if (globalLessonIdMap.has(lesson.id)) {
        const existing = globalLessonIdMap.get(lesson.id)!;
        check(false, 'CROSS_GRADE_LEAK', `Lesson ID collision: ${lesson.id} exists in both ${existing.grade} (Unit ${existing.unitId}) and ${grade} (Unit ${unit.id})`, 'CRITICAL');
      } else {
        globalLessonIdMap.set(lesson.id, { grade, unitId: unit.id });
      }

      // Titles & summaries
      check(!!lesson.titleAr && lesson.titleAr.trim().length > 0, 'LESSON_CONTENT', `Lesson ${lesson.id} has Arabic title`);
      check(!!lesson.titleEn && lesson.titleEn.trim().length > 0, 'LESSON_CONTENT', `Lesson ${lesson.id} has English title`);
      check(!!lesson.summary && lesson.summary.trim().length > 0, 'LESSON_CONTENT', `Lesson ${lesson.id} has non-empty summary`);

      // Educational Quality: Check examples
      if (lesson.examples && lesson.examples.length > 0) {
        lesson.examples.forEach((ex, exIdx) => {
          check(!!ex.en && ex.en.trim().length > 0, 'EXAMPLE_QUALITY', `Lesson ${lesson.id} Example ${exIdx} has English text`);
          check(!!ex.ar && ex.ar.trim().length > 0, 'EXAMPLE_QUALITY', `Lesson ${lesson.id} Example ${exIdx} has Arabic translation`);
        });
      }

      // Educational Quality: Exercises
      if (lesson.exercises && lesson.exercises.length > 0) {
        lesson.exercises.forEach((exercise, eIdx) => {
          check(!!exercise.id, 'EXERCISE_QUALITY', `Lesson ${lesson.id} Exercise ${eIdx} has ID`);
          check(!!exercise.question, 'EXERCISE_QUALITY', `Lesson ${lesson.id} Exercise ${exercise.id} has question text`);
          check(!!exercise.correctAnswer, 'EXERCISE_QUALITY', `Lesson ${lesson.id} Exercise ${exercise.id} has correctAnswer`);
          check(!!exercise.explanation, 'EXERCISE_QUALITY', `Lesson ${lesson.id} Exercise ${exercise.id} has explanation`);
          if (exercise.options) {
            check(exercise.options.includes(exercise.correctAnswer), 'EXERCISE_ANSWER_MATCH', `Lesson ${lesson.id} Exercise ${exercise.id} correctAnswer must be in options list`);
          }
        });
      }
    });
  });

  console.log(`✓ Grade ${meta.nameAr} (${grade}): ${units.length} units, ${gradeLessonCount} lessons, ${stories.length} stories, ${essays.length} essays, ${questions.length} questions`);
});

// -----------------------------------------------------------------
// 2. PROGRESS ISOLATION AUDIT
// -----------------------------------------------------------------
console.log('\n--- 2. AUDITING PROGRESS ISOLATION ---');

// Test scenario: A student completes lessons in 3rd Intermediate.
// Does it affect 6th Preparatory progress percentage?
const thirdUnits = getUnitsForGrade('third-intermediate');
const sixthUnits = getUnitsForGrade('sixth-preparatory');

const thirdLessonIds = thirdUnits.flatMap(u => u.lessons.map(l => l.id));
const sixthLessonIds = sixthUnits.flatMap(u => u.lessons.map(l => l.id));

// Intersection test
const intersection = thirdLessonIds.filter(id => sixthLessonIds.includes(id));
check(intersection.length === 0, 'PROGRESS_ISOLATION', `Zero lesson ID intersection between 3rd Intermediate and 6th Preparatory (found ${intersection.length})`);

// Progress calculation test
const mockCompletedIds = [thirdLessonIds[0], thirdLessonIds[1], thirdLessonIds[2]];

// Scoped completion for 6th prep with 3rd prep lessons in completedLessonIds:
const sixthCompletedCount = sixthLessonIds.filter(id => mockCompletedIds.includes(id)).length;
check(sixthCompletedCount === 0, 'PROGRESS_ISOLATION', `Completing 3rd Intermediate lessons gives 0 completed lessons in 6th Preparatory`);

const thirdCompletedCount = thirdLessonIds.filter(id => mockCompletedIds.includes(id)).length;
check(thirdCompletedCount === 3, 'PROGRESS_ISOLATION', `Completing 3rd Intermediate lessons gives exactly 3 in 3rd Intermediate`);

// -----------------------------------------------------------------
// 3. EXAMINATION SCOPE AUDIT
// -----------------------------------------------------------------
console.log('\n--- 3. AUDITING EXAMINATION SCOPES ---');

ORDERED_GRADES.forEach(g => {
  const meta = getGradeMeta(g);
  const questions = getQuestionsForGrade(g);
  const mockPapers = getMockPapersForGrade(g);

  // Check question grade attribution
  questions.forEach(q => {
    check(q.grade === g || !q.grade, 'QUESTION_GRADE_ATTRIBUTION', `Question ${q.id} in ${g} pool does not belong to different grade`);
  });

  // Check mock exam total marks and classification
  mockPapers.forEach(paper => {
    check(paper.totalMarks === 100, 'EXAM_TOTAL_MARKS', `Paper "${paper.title}" in ${g} has totalMarks === 100 (got ${paper.totalMarks})`);
    if (meta.isMinisterial) {
      check(paper.title.includes('وزاري') || paper.title.includes('الوزاري') || paper.subtitle.includes('وزاري'), 'EXAM_LABEL_ACCURACY', `Ministerial grade ${g} paper is marked as ministerial`);
    }
  });
});

// -----------------------------------------------------------------
// SUMMARY
// -----------------------------------------------------------------
console.log('\n========================================================');
console.log(`AUDIT RESULTS: ${passedChecks} checks passed out of ${totalChecks}.`);
console.log(`Identified Issues: ${issues.length}`);
if (issues.length > 0) {
  console.log('Issues summary:');
  issues.forEach((iss, idx) => {
    console.log(`  ${idx + 1}. [${iss.severity}] ${iss.category}: ${iss.description}`);
  });
}
console.log('========================================================');
