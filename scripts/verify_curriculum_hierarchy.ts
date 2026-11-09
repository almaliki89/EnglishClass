import assert from "node:assert/strict";
import { parseCurriculumHierarchy } from "../src/utils/parseCurriculumHierarchy";

const pages = [
  { pageNumber: 2, text: "Unit 1\nLesson 1\nLesson 2" },
  { pageNumber: 8, text: "Unit 3\nLesson 1" },
];

const parsed = parseCurriculumHierarchy(
  "Lesson 9\nUnit 1\nLesson 1\nLesson 2\nUnit 3\nLesson 1",
  pages
);

assert.deepEqual(parsed.units.map((unit) => unit.unitNumber), [1, 3]);
assert.deepEqual(
  parsed.lessons.map((lesson) => [lesson.unitNumber, lesson.lessonNumber]),
  [[1, 1], [1, 2], [3, 1]]
);
assert.equal(parsed.units[0].detectedLessonsCount, 2);
assert.equal(parsed.units[1].detectedLessonsCount, 1);
assert.equal(parsed.unassignedLessonHeadings.length, 1);
assert.equal(parsed.unassignedLessonHeadings[0], "Lesson 9");
assert.equal(parsed.lessons[0].pageNumber, 2);
assert.equal(parsed.lessons[2].pageNumber, 8);

const arabicDigits = parseCurriculumHierarchy(
  "الوحدة ٤\nالدرس ٢",
  [{ pageNumber: 11, text: "الوحدة ٤\nالدرس ٢" }]
);
assert.deepEqual(arabicDigits.units.map((unit) => unit.unitNumber), [4]);
assert.deepEqual(
  arabicDigits.lessons.map((lesson) => [lesson.unitNumber, lesson.lessonNumber]),
  [[4, 2]]
);
assert.equal(arabicDigits.lessons[0].pageNumber, 11);

const noHeadings = parseCurriculumHierarchy("A grammar paragraph. A vocabulary paragraph.");
assert.equal(noHeadings.units.length, 0);
assert.equal(noHeadings.lessons.length, 0);

console.log("Curriculum hierarchy tests passed: explicit units, lesson scoping, Arabic digits, page evidence, and no fabricated defaults.");
