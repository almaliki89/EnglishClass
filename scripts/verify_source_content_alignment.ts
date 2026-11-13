import assert from 'node:assert/strict';

import { THIRD_INTERMEDIATE_UNITS } from '../src/data/thirdIntermediateData';
import { THIRD_INTERMEDIATE_STORIES } from '../src/data/thirdIntermediateStories';
import { THIRD_INTERMEDIATE_ESSAYS } from '../src/data/thirdIntermediateEssays';
import { FIFTH_PREPARATORY_ESSAYS } from '../src/data/grades/fifth/essays';
import { FIFTH_PREPARATORY_QUESTIONS } from '../src/data/grades/fifth/questions';
import { FIFTH_PREPARATORY_MOCK_PAPER } from '../src/data/grades/fifth/mockPaper';
import { IRREGULAR_VERBS } from '../src/data/verbsData';
import { FIFTH_PREPARATORY_LITERATURE } from '../src/data/grades/fifth/literature';

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
assert.ok((unitSeven?.lessons.find((lesson) => lesson.id === '3rd-u7-app-vocabulary')?.exercises.length ?? 0) >= 15, 'Vocabulary appendix must include the expanded source exercise set');
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

console.log('Source content alignment passed: 7 third-grade units, Unit 4 readings, 15 fifth-grade written items, 96 unique source verbs, and correctly labeled supplementary assessments.');
