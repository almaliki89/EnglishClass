import assert from 'node:assert/strict';

import { THIRD_INTERMEDIATE_UNITS } from '../src/data/thirdIntermediateData';
import { THIRD_INTERMEDIATE_STORIES } from '../src/data/thirdIntermediateStories';
import { THIRD_INTERMEDIATE_ESSAYS } from '../src/data/thirdIntermediateEssays';
import { FIFTH_PREPARATORY_ESSAYS } from '../src/data/grades/fifth/essays';
import { FIFTH_PREPARATORY_QUESTIONS } from '../src/data/grades/fifth/questions';
import { FIFTH_PREPARATORY_MOCK_PAPER } from '../src/data/grades/fifth/mockPaper';
import { IRREGULAR_VERBS } from '../src/data/verbsData';
import { FIFTH_PREPARATORY_LITERATURE } from '../src/data/grades/fifth/literature';
import { FOURTH_PREPARATORY_UNITS, FOURTH_PREPARATORY_ESSAYS, FOURTH_PREPARATORY_QUESTIONS, FOURTH_PREPARATORY_MOCK_PAPER } from '../src/data/grades/fourthPreparatoryData';


const fourthNumbers = FOURTH_PREPARATORY_UNITS.map((unit) => unit.number);
assert.deepEqual(fourthNumbers, [1, 2, 3, 4, 5, 6, 7, 8], 'Fourth preparatory must contain exactly eight booklet units');
assert.deepEqual(
  FOURTH_PREPARATORY_UNITS.map((unit) => unit.lessons.length),
  [4, 5, 4, 2, 6, 5, 7, 4],
  'Fourth preparatory lesson map must retain the eight source-aligned topic groups'
);
assert.ok(FOURTH_PREPARATORY_UNITS.every((unit) => unit.sourcePages && unit.lessons.length > 0), 'Every fourth-grade unit must have booklet page coverage and lessons');
assert.ok(
  FOURTH_PREPARATORY_UNITS.every((unit) => unit.lessons.every((lesson) => lesson.unitId === unit.id && !!lesson.sourcePages)),
  'Every fourth-grade lesson must belong to its unit and identify printed source pages'
);
const fourthAllText = FOURTH_PREPARATORY_UNITS
  .flatMap((unit) => [unit.titleAr, unit.titleEn, unit.description, ...unit.lessons.flatMap((lesson) => [
    lesson.titleAr, lesson.titleEn, lesson.summary, ...lesson.detailedContent
  ])])
  .join(' ');
const fourthUnit1 = FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === 1)!;
const fourthUnit2 = FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === 2)!;
const fourthUnit3 = FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === 3)!;
const fourthUnit4 = FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === 4)!;
const fourthUnit5 = FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === 5)!;
const fourthUnit6 = FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === 6)!;
const fourthUnit7 = FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === 7)!;
const fourthUnit8 = FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === 8)!;
assert.ok(fourthUnit1.lessons.some((lesson) => lesson.sourcePages === 'الملزمة ص 14–16' && lesson.titleEn.includes('Indirect Questions')), 'Indirect Questions must map to booklet pages 14–16');
assert.ok(fourthUnit1.lessons.some((lesson) => lesson.sourcePages === 'الملزمة ص 17–24' && lesson.titleEn.includes('Arabic Today')), 'Arabic Today, English history and country reading must map to pages 17–24');
assert.ok(fourthUnit2.lessons.some((lesson) => lesson.titleEn.includes('UNICEF') && lesson.sourcePages === 'الملزمة ص 29–32'), 'UNICEF must map to Unit 2 pages 29–32');
assert.ok(fourthUnit2.lessons.some((lesson) => lesson.titleEn.includes('Past Perfect') && lesson.sourcePages === 'الملزمة ص 45–52'), 'Past Perfect narrative material must map to Unit 2 pages 45–52');
assert.ok(!fourthUnit2.lessons.some((lesson) => /Wedding|used to|Adverbs of Manner/i.test(lesson.titleEn)), 'Do not assign weddings, used to or adverbs of manner to Unit 2');
assert.ok(fourthUnit3.lessons.some((lesson) => lesson.titleEn.includes('Ancient Wonders') && lesson.sourcePages === 'الملزمة ص 53–55'), 'Unit 3 must begin with the ancient wonders reading');
assert.ok(!fourthUnit3.lessons.some((lesson) => /Water Pollution|Inventions/i.test(lesson.titleEn)), 'Do not attribute water pollution or inventions readings to Unit 3');
assert.ok(fourthUnit4.lessons.some((lesson) => lesson.titleEn.includes('Gap Year') && lesson.sourcePages === 'الملزمة ص 69–70'), 'Gap Year reading must map to Unit 4 pages 69–70');
assert.ok(!fourthUnit4.lessons.some((lesson) => /Official|Mid-Year Exam|Wedding Customs/i.test(lesson.titleEn)), 'Unit 4 must not invent an official mid-year exam or relocate wedding readings');
assert.ok(fourthUnit5.lessons.some((lesson) => lesson.titleEn.includes('National Museum of Iraq') && lesson.sourcePages === 'الملزمة ص 92–96'), 'National Museum reading must map to Unit 5 pages 92–96');
assert.ok(fourthUnit5.lessons.some((lesson) => lesson.titleEn === 'Future Continuous' && lesson.sourcePages === 'الملزمة ص 85–86'), 'Future Continuous must map to Unit 5 pages 85–86');
assert.ok(fourthUnit6.lessons.some((lesson) => lesson.titleEn.includes('Teenagers’ Sleep') && lesson.sourcePages === 'الملزمة ص 97–100'), 'Sleep reading must map to Unit 6 pages 97–100');
assert.ok(fourthUnit6.lessons.some((lesson) => lesson.titleEn.includes('Reported Speech') && lesson.sourcePages === 'الملزمة ص 101–103'), 'Reported Speech must map to Unit 6 pages 101–103');
assert.ok(fourthUnit7.lessons.some((lesson) => lesson.titleEn.includes('Zero & First Conditionals') && lesson.sourcePages === 'الملزمة ص 123–126'), 'Conditionals must map to Unit 7 pages 123–126');
assert.ok(fourthUnit7.lessons.some((lesson) => lesson.titleEn.includes('Al-Hammaar Marshes') && lesson.sourcePages === 'الملزمة ص 127–128'), 'Al-Hammaar Marshes must map to Unit 7 pages 127–128');
assert.ok(fourthUnit7.lessons.some((lesson) => lesson.titleEn.includes('Petroleum Formation') && lesson.sourcePages === 'الملزمة ص 131–133'), 'Petroleum and passive voice must map to Unit 7 pages 131–133');
assert.ok(fourthUnit8.lessons.some((lesson) => lesson.titleEn.includes('GPS Receiver') && lesson.sourcePages === 'الملزمة ص 144–145'), 'GPS receiver reading must map to Unit 8 pages 144–145');
assert.ok(fourthUnit8.lessons.some((lesson) => lesson.titleEn === 'Keeping Fit in Space' && lesson.sourcePages === 'الملزمة ص 147–148'), 'Fitness-in-space reading must map to Unit 8 pages 147–148');
assert.ok(!fourthAllText.includes('Official 100-Mark') && !fourthAllText.includes('Water Pollution'), 'Fourth-grade unit map must remove unsupported exam and misplaced-reading claims');

assert.equal(FOURTH_PREPARATORY_ESSAYS.length, 7, 'Fourth preparatory writing appendix must match the seven source topics on pages 171–177');
assert.ok(FOURTH_PREPARATORY_ESSAYS.some((essay) => essay.titleEn === 'An Accident at School'), 'The page-172 accident writing topic must be represented');
assert.ok(!FOURTH_PREPARATORY_ESSAYS.some((essay) => essay.titleEn.includes('UNICEF')), 'Do not claim an unsupported UNICEF essay in the writing appendix');
assert.ok(FOURTH_PREPARATORY_ESSAYS.every((essay) => essay.ministerialWeight.includes('تدريبي') || essay.ministerialWeight.includes('نموذج')), 'Fourth-grade model writing must be clearly labeled as training content');
assert.ok(FOURTH_PREPARATORY_ESSAYS.every((essay) => essay.paragraphsEn.length > 0 && essay.paragraphsAr.length > 0), 'Every fourth-grade writing item must include English and Arabic support');
assert.ok(FOURTH_PREPARATORY_QUESTIONS.every((question) => question.year === 'تدريب إضافي' && question.session === 'تدريب إضافي'), 'Fourth-grade generated questions must not claim ministerial years or rounds');
assert.ok(FOURTH_PREPARATORY_QUESTIONS.every((question) => question.provenanceVerified === false && question.sourceReference?.includes('تدريبي')), 'Fourth-grade generated questions must carry explicit unverified/supplementary provenance');
assert.ok(FOURTH_PREPARATORY_MOCK_PAPER.id.includes('supplementary'), 'Fourth-grade mock must be identified as supplementary');
assert.ok(FOURTH_PREPARATORY_MOCK_PAPER.subtitle.includes('ليس ورقة امتحان وزارية'), 'Fourth-grade mock must not claim official or ministry status');
assert.equal(FOURTH_PREPARATORY_MOCK_PAPER.sections.reduce((sum, section) => sum + section.totalMarks, 0) + 20, 100, 'Fourth-grade practice assessment marks must total 100 including one selected writing option');

const thirdNumbers = THIRD_INTERMEDIATE_UNITS.map((unit) => unit.number);
assert.deepEqual(thirdNumbers, [1, 2, 3, 4, 5, 6, 7], 'Third intermediate must contain exactly seven consecutive units');

const unitFour = THIRD_INTERMEDIATE_UNITS.find((unit) => unit.number === 4);
assert.ok(unitFour, 'Third intermediate Unit 4 must exist');
assert.ok(unitFour.lessons.some((lesson) => lesson.titleEn.includes("Ibrahim's Life Story")), 'Unit 4 must include Ibrahim reading');
assert.ok(unitFour.lessons.some((lesson) => lesson.titleEn === 'Too Few Leopards'), 'Unit 4 must include Too Few Leopards');
assert.ok(unitFour.lessons.every((lesson) => lesson.exercises.length > 0), 'Every Unit 4 lesson must contain its source-linked exercises');
assert.ok(THIRD_INTERMEDIATE_STORIES.some((story) => story.id === '3rd-story-too-few-leopards'), 'Too Few Leopards must be in the story/reading library');
assert.ok(THIRD_INTERMEDIATE_STORIES.some((story) => story.id === '3rd-story-ali-career' && story.author.includes('Unit Seven')), 'Ali career must not be assigned to a nonexistent Unit 8');
assert.ok(THIRD_INTERMEDIATE_ESSAYS.every((essay) => essay.unitId !== 108), 'Third intermediate essays must not reference nonexistent Unit 8');
const unitSeven = THIRD_INTERMEDIATE_UNITS.find((unit) => unit.number === 7);
assert.ok(unitSeven?.lessons.some((lesson) => lesson.id === '3rd-u7-app-vocabulary' && lesson.sourcePages === '144-167'), 'Third-grade vocabulary appendix must cover its source pages');
assert.ok(unitSeven?.lessons.some((lesson) => lesson.id === '3rd-u7-app-spelling' && lesson.sourcePages === '168-169'), 'Third-grade spelling appendix must cover its source pages');
assert.ok((unitSeven?.lessons.find((lesson) => lesson.id === '3rd-u7-app-vocabulary')?.exercises.length ?? 0) >= 32, 'Vocabulary appendix must include the expanded source exercise set');
assert.ok((unitSeven?.lessons.find((lesson) => lesson.id === '3rd-u7-app-spelling')?.exercises.length ?? 0) >= 8, 'Spelling appendix must include source examples and exercises');

const fifthEssayTitles = FIFTH_PREPARATORY_ESSAYS.map((essay) => essay.titleEn);
const expectedFifthEssays = [
  'My Friend',
  'Trip',
  'Traditional Celebration',
  'Internet',
  'Life without a Mobile Phone',
  'My Town in the Future',
  'Reducing Pollution from Cars in Cities',
  'How Can We Save Water?',
  'Eating Habits',
  'Complaint Regarding Flat Maintenance Issues',
  'Arabian Gulf Cup 25',
  'Animals Escape from Zoo',
  'Favorite TV Show',
  'A Shopping Trip Gone Wrong',
  'My Audition Introduction'
];
assert.deepEqual(fifthEssayTitles, expectedFifthEssays, 'Fifth preparatory written component must match the 15 source items on pages 212-221');
assert.ok(FIFTH_PREPARATORY_ESSAYS.every((essay) => essay.paragraphsEn.length > 0 && essay.paragraphsAr.length > 0), 'Every source essay must include English text and an Arabic study translation');
assert.ok(FIFTH_PREPARATORY_ESSAYS.every((essay) => /الملزمة ص 21[2-9]|الملزمة ص 22[01]/.test(essay.ministerialWeight)), 'Every fifth-grade essay must retain its printed source page');

const uniqueVerbs = new Set(IRREGULAR_VERBS.map((verb) => verb.base));
assert.equal(IRREGULAR_VERBS.length, 96, 'Irregular verb appendix has 96 unique verbs (97 printed rows with duplicate lose)');
assert.equal(uniqueVerbs.size, 96, 'Irregular verb list must not contain duplicates');
assert.ok(!uniqueVerbs.has('begin') && !uniqueVerbs.has('become'), 'Do not add verbs absent from the source appendix');
const verbByBase = new Map(IRREGULAR_VERBS.map((verb) => [verb.base, verb]));
assert.equal(verbByBase.get('rise')?.group, 'all-different', 'rise/rose/risen has three different forms');
assert.equal(verbByBase.get('light')?.group, 'two-same', 'light/lit/lit has two identical forms');
assert.equal(verbByBase.get('set')?.group, 'all-same', 'set/set/set has identical forms');

assert.ok(FIFTH_PREPARATORY_QUESTIONS.every((question) => question.year === 'تدريب إضافي' && question.session === 'تدريب إضافي'), 'Unverified question-bank items must be labeled supplementary, not ministerial exam years');
assert.ok(FIFTH_PREPARATORY_QUESTIONS.every((question) => question.sourceReference?.includes('لم يُتحقق')), 'Supplementary questions must not claim unverified booklet page references');
assert.ok(FIFTH_PREPARATORY_MOCK_PAPER.id.includes('supplementary'), 'Fifth-grade mock must be identified as supplementary');
assert.ok(FIFTH_PREPARATORY_MOCK_PAPER.subtitle.includes('ليس ورقة امتحان'), 'Fifth-grade mock must not claim to be copied from booklet pages 186-187');
assert.deepEqual(FIFTH_PREPARATORY_MOCK_PAPER.essayOptions.map((essay) => essay.titleEn), ['My Friend', 'How Can We Save Water?'], 'Supplementary writing prompts must use source-matched topics');

const littleWomen = FIFTH_PREPARATORY_LITERATURE.find((item) => item.id === 'lit-5th-little-women');
const tempest = FIFTH_PREPARATORY_LITERATURE.find((item) => item.id === 'lit-5th-the-tempest');
assert.ok(littleWomen && littleWomen.ministerialQA.length >= 17, 'Little Women must include its source reading questions and Activity Book exercises');
assert.ok(tempest && tempest.ministerialQA.length >= 10, 'The Tempest must include its source reading questions and Activity Book exercises');
assert.ok(littleWomen?.historicalContextEn?.includes('more than 50 languages'), 'Little Women context must reflect the booklet');
assert.ok(tempest?.historicalContextEn?.includes('King James'), 'The Tempest context must reflect the booklet');
assert.ok(littleWomen.ministerialQA.some((item) => item.id === 'lw-source-ex-12'), 'Little Women final-section vocabulary exercise must be represented');
assert.ok(tempest.ministerialQA.some((item) => item.id === 'temp-source-ex-4'), 'The Tempest true/false exercise must be represented');
assert.ok(tempest.ministerialQA.some((item) => item.id === 'temp-source-ex-7'), 'The Tempest old-English vocabulary exercise must be represented');

console.log('Source content alignment passed: third-grade Unit 4 readings; fourth-grade eight-unit map, writing appendix and supplementary questions; 15 fifth-grade written items; 96 unique source verbs; and correctly labeled practice assessments.');
