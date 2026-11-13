import assert from 'node:assert/strict';

import { THIRD_INTERMEDIATE_UNITS } from '../src/data/thirdIntermediateData';
import { THIRD_INTERMEDIATE_STORIES } from '../src/data/thirdIntermediateStories';
import { THIRD_INTERMEDIATE_ESSAYS } from '../src/data/thirdIntermediateEssays';
import { FIFTH_PREPARATORY_ESSAYS } from '../src/data/grades/fifth/essays';
import { FIFTH_PREPARATORY_QUESTIONS } from '../src/data/grades/fifth/questions';
import { FIFTH_PREPARATORY_MOCK_PAPER } from '../src/data/grades/fifth/mockPaper';
import { IRREGULAR_VERBS } from '../src/data/verbsData';
import { FIFTH_PREPARATORY_LITERATURE } from '../src/data/grades/fifth/literature';
import { FOURTH_PREPARATORY_UNITS } from '../src/data/grades/fourth/units';
import { FOURTH_PREPARATORY_ESSAYS } from '../src/data/grades/fourth/essays';
import { FOURTH_PREPARATORY_QUESTIONS } from '../src/data/grades/fourth/questions';
import { FOURTH_PREPARATORY_MOCK_PAPER } from '../src/data/grades/fourth/mockPaper';

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


const fourthNumbers = FOURTH_PREPARATORY_UNITS.map((unit) => unit.number);
assert.deepEqual(fourthNumbers, [1, 2, 3, 4, 5, 6, 7, 8], 'Fourth preparatory must contain exactly eight consecutive source units');

const fourthUnit = (number: number) => FOURTH_PREPARATORY_UNITS.find((unit) => unit.number === number);
const fourthUnit4 = fourthUnit(4);
const fourthUnit5 = fourthUnit(5);
const fourthUnit6 = fourthUnit(6);
const fourthUnit7 = fourthUnit(7);
const fourthUnit8 = fourthUnit(8);

assert.ok(fourthUnit4?.titleEn.includes('Gap Year'), 'Fourth-grade Unit 4 must cover Gap Year, not wedding revision or a fabricated mid-year exam');
assert.ok(fourthUnit4?.lessons.some((lesson) => lesson.titleEn.includes('Obligation')), 'Unit 4 must include the source lesson on have to / do not have to');
assert.ok(!fourthUnit4?.lessons.some((lesson) => /Official|100-Mark|Mid-Year Exam/i.test(lesson.titleEn)), 'Unit 4 must not claim an official examination absent from the source pages');

assert.ok(fourthUnit5?.lessons.some((lesson) => lesson.titleEn.includes('Future Continuous')), 'Future Continuous belongs to Unit 5 source pages 85-87');
assert.ok(fourthUnit5?.lessons.some((lesson) => lesson.titleEn.includes('Glass-blowing')), 'Unit 5 must retain the Lebanese glass-blowing reading');
assert.ok(fourthUnit5?.lessons.some((lesson) => lesson.titleEn.includes('National Museum of Iraq')), 'Unit 5 must retain the National Museum school-trip reading');

assert.ok(!fourthUnit6?.lessons.some((lesson) => lesson.titleEn.includes('Future Continuous')), 'Future Continuous must not be assigned to Unit 6');
const sleepLesson = fourthUnit6?.lessons.find((lesson) => lesson.titleEn.includes('Sleep'));
assert.ok(sleepLesson?.detailedContent.some((line) => line.includes('بمعدل ثماني ساعات')), 'Sleep reading must preserve the source statement: an average of eight hours');
assert.ok(!sleepLesson?.detailedContent.some((line) => /8\s*-\s*10|8 إلى 10/.test(line)), 'Sleep reading must not replace the source statement with an unsupported 8-10-hour range');
assert.ok(fourthUnit6?.lessons.some((lesson) => lesson.titleEn.includes('Reported Speech')), 'Unit 6 must include reported speech');
assert.ok(fourthUnit6?.lessons.some((lesson) => lesson.titleEn.includes('FIFA World Cup')), 'Unit 6 must include the FIFA World Cup reading');

assert.ok(fourthUnit7?.lessons.some((lesson) => lesson.titleEn.includes('Al-Hammaar Marshes')), 'Unit 7 must include the Al-Hammaar Marshes reading');
assert.ok(fourthUnit7?.lessons.some((lesson) => lesson.titleEn.includes('Petroleum')), 'Unit 7 must include the petroleum reading');
assert.ok(fourthUnit7?.lessons.some((lesson) => lesson.titleEn.includes('Hawksbill')), 'Unit 7 must include the hawksbill turtle reading');
assert.ok(fourthUnit7?.lessons.some((lesson) => lesson.titleEn.includes('Online Shopping')), 'Unit 7 must include the online shopping source content');
assert.ok(fourthUnit7?.lessons.some((lesson) => lesson.titleEn.includes('International Space Station')), 'Unit 7 must include the International Space Station presentation');
assert.ok(fourthUnit7?.lessons.some((lesson) => lesson.titleEn.includes('Hawksbill Sea Turtle')), 'Unit 7 must include the hawksbill turtle reading after the ISS presentation');
assert.equal(new Set(fourthUnit7?.lessons.map((lesson) => lesson.id)).size, fourthUnit7?.lessons.length, 'Unit 7 lesson IDs must be unique and must not duplicate content');
assert.equal(fourthUnit7?.lessons.length, 10, 'Unit 7 must include its ten source-ordered lesson and reading blocks');
assert.ok(fourthUnit6?.lessons.some((lesson) => lesson.titleEn.includes('Future Simple')), 'Unit 6 must start with Future Simple on source page 97');
assert.ok(!fourthUnit7?.description.includes('UNESCO'), 'Do not add unsupported UNESCO accreditation claims to the Marshes lesson');

assert.ok(fourthUnit8?.titleEn.includes('Saturn') && fourthUnit8.titleEn.includes('GPS'), 'Unit 8 must reflect the Saturn and GPS source content');
assert.ok(fourthUnit8?.lessons.some((lesson) => lesson.titleEn.includes('Keeping Fit in Space')), 'Unit 8 must include the space fitness reading');
assert.ok(!fourthUnit8?.lessons.some((lesson) => /Final Exam|Official|100-Mark/i.test(lesson.titleEn)), 'Unit 8 must not claim an official final exam absent from pages 144-148');

assert.equal(FOURTH_PREPARATORY_ESSAYS.length, 7, 'Fourth preparatory booklet has seven writing models on pages 171-177');
assert.deepEqual(
  FOURTH_PREPARATORY_ESSAYS.map((essay) => essay.unitId),
  [41, 42, 43, 44, 45, 46, 47],
  'Fourth-grade writing models must map to the source-aligned units 1-7'
);
assert.deepEqual(
  FOURTH_PREPARATORY_ESSAYS.map((essay) => essay.titleEn),
  ['Application Form', 'An Accident', 'Hello from Erbil', 'Wedding Customs in Iraq', 'My Eating Habits', 'My Family’s Future', 'An Email to a Friend About Tomorrow'],
  'Fourth-grade writing titles must match source pages 171-177'
);
assert.ok(FOURTH_PREPARATORY_ESSAYS.every((essay, index) => essay.ministerialWeight.includes('الملزمة ص ' + (171 + index))), 'Each fourth-grade writing item must cite its printed source page, not an invented mark allocation');
assert.equal(FOURTH_PREPARATORY_ESSAYS[4].wordCountMin, 90, 'My Eating Habits minimum word count is 90');
assert.equal(FOURTH_PREPARATORY_ESSAYS[4].wordCountMax, 100, 'My Eating Habits maximum word count is 100');
assert.equal(FOURTH_PREPARATORY_ESSAYS[5].wordCountMin, 70, 'My Family’s Future minimum word count is 70');
assert.equal(FOURTH_PREPARATORY_ESSAYS[5].wordCountMax, 90, 'My Family’s Future maximum word count is 90');
assert.ok(FOURTH_PREPARATORY_ESSAYS[1].paragraphsEn.join(' ').includes('Mother’s Day'), 'The Accident writing model must be present in Unit 2');
assert.ok(FOURTH_PREPARATORY_ESSAYS[2].paragraphsEn.join(' ').includes('Hello from Erbil'), 'The Erbil email must be present in Unit 3');
assert.ok(!FOURTH_PREPARATORY_ESSAYS.some((essay) => essay.titleEn.includes('UNICEF')), 'Do not add a UNICEF essay that is not among the source writing models');

assert.ok(FOURTH_PREPARATORY_QUESTIONS.every((question) => question.year === 'تدريبي' && question.session === 'تدريب إضافي'), 'Fourth-grade generated questions must be labeled as supplementary training, not past ministerial sessions');
assert.ok(FOURTH_PREPARATORY_QUESTIONS.every((question) => question.contentOrigin === 'ai_generated' && question.provenanceVerified === false), 'Fourth-grade generated questions must carry explicit unverified AI provenance');
const futureContinuousQuestion = FOURTH_PREPARATORY_QUESTIONS.find((question) => question.topic === 'Future Continuous');
assert.equal(futureContinuousQuestion?.unitId, 45, 'Future Continuous question must be assigned to Unit 5');
assert.ok(futureContinuousQuestion?.sourceReference?.includes('85'), 'Future Continuous question must reference booklet pages 85-87');

assert.ok(FOURTH_PREPARATORY_MOCK_PAPER.id.includes('training'), 'Fourth-grade practice paper must be clearly identified as training');
assert.ok(FOURTH_PREPARATORY_MOCK_PAPER.subtitle.includes('ليست ورقة وزارية'), 'Fourth-grade practice paper must explicitly disclaim official status');
const fourthMockQuestions = FOURTH_PREPARATORY_MOCK_PAPER.sections.flatMap((section) => section.items);
const museumQuestion = fourthMockQuestions.find((item) => item.id === '4th-mock-q1-3');
assert.ok(museumQuestion?.correctAnswer.includes('Al-Salihiya') && museumQuestion.correctAnswer.includes('Al-Karkh'), 'Museum location must match the booklet');
const sleepQuestion = fourthMockQuestions.find((item) => item.id === '4th-mock-q1-4');
assert.equal(sleepQuestion?.correctAnswer, 'An average of eight hours', 'Mock paper sleep fact must match the source');
const marshQuestion = fourthMockQuestions.find((item) => item.id === '4th-mock-q1-5');
assert.ok(!marshQuestion?.correctAnswer.includes('UNESCO'), 'Marshes answer must not include an unsupported UNESCO designation');

console.log('Source content alignment passed: third-grade unit repair; fifth-grade source writing and verbs; fourth-grade eight-unit sequence, seven writing models, question provenance, page references and non-official training assessment.');
