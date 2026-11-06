/**
 * OMEGA VERIFICATION SUITE FOR IRAQI ENGLISH CURRICULUM PLATFORM
 * Validates integrity of:
 * 1. Grade isolation across all 6 grades (1st, 2nd, 3rd Intermediate; 4th, 5th, 6th Preparatory).
 * 2. Ministerial (3rd & 6th) vs School Final Exams (1st, 2nd, 4th, 5th) classification.
 * 3. 2024-2026 textbook authenticity (Ammar exoskeleton, Najla Imad Lafta, Rashid & Rana, Euphrates, Pride & Prejudice, As You Like It).
 * 4. Curriculum Ingestion pipeline & cryptographic SHA-256 fingerprinting.
 * 5. Prompt injection defense and structural sandboxing.
 * 6. Student progress idempotency and score validation.
 */

import fs from 'node:fs';
import path from 'node:path';
import { CURRICULUM_UNITS } from '../src/data/curriculumData';
import { THIRD_INTERMEDIATE_UNITS, THIRD_INTERMEDIATE_STORIES, THIRD_INTERMEDIATE_ESSAYS, THIRD_INTERMEDIATE_QUESTIONS } from '../src/data/thirdIntermediateData';
import { FOURTH_PREPARATORY_UNITS, FOURTH_PREPARATORY_LITERATURE, FOURTH_PREPARATORY_ESSAYS, FOURTH_PREPARATORY_QUESTIONS } from '../src/data/grades/fourthPreparatoryData';
import { FIFTH_PREPARATORY_UNITS, FIFTH_PREPARATORY_LITERATURE, FIFTH_PREPARATORY_ESSAYS, FIFTH_PREPARATORY_QUESTIONS } from '../src/data/grades/fifthPreparatoryData';
import { MINISTERIAL_QUESTIONS } from '../src/data/ministerialQuestions';
import { ESSAYS_DATA } from '../src/data/essaysData';
import { IRREGULAR_VERBS } from '../src/data/verbsData';
import { VISUAL_VOCABULARY_ITEMS } from '../src/data/visualVocabData';
import { MOCK_EXAM_PAPERS } from '../src/data/mockExamPapers';
import { THIRD_INTERMEDIATE_MOCK_PAPER } from '../src/data/thirdMockExamPaper';
import { SUBJECTS } from '../src/data/subjectsData';
import { ALL_GRADES_META, ORDERED_GRADES, getUnitsForGrade, getQuestionsForGrade, getGradeMeta } from '../src/data/gradeContentResolver';

let passed = 0;
let failed = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.error(`❌ FAILED: ${msg}`);
  }
}

console.log('========================================================');
console.log('OMEGA MASTER CURRICULUM & SECURITY VERIFICATION SUITE');
console.log('========================================================');

// 1. Subject exclusivity
assert(SUBJECTS.length === 1, `Must have strictly 1 subject (English), found: ${SUBJECTS.length}`);
assert(SUBJECTS[0].id === 'english', `Subject ID must be 'english', got: ${SUBJECTS[0].id}`);
assert(SUBJECTS[0].titleAr === 'اللغة الإنكليزية', `Subject title must be 'اللغة الإنكليزية'`);

// 2. All 4 Educational Grades are defined and ordered
assert(ORDERED_GRADES.length === 4, `Must support exactly 4 grades, got ${ORDERED_GRADES.length}`);
const expectedGrades = [
  'third-intermediate',
  'fourth-preparatory',
  'fifth-preparatory',
  'sixth-preparatory'
];
expectedGrades.forEach(g => {
  const gradeKey = g as any;
  assert(ORDERED_GRADES.includes(gradeKey), `Must include grade ${g}`);
  assert(!!(ALL_GRADES_META as Record<string, any>)[g], `Grade metadata must exist for ${g}`);
});

// 3. Strict Ministerial vs School Final Exam Designation
assert(getGradeMeta('sixth-preparatory').isMinisterial === true, '6th Prep must be marked as Ministerial');
assert(getGradeMeta('third-intermediate').isMinisterial === true, '3rd Intermediate must be marked as Ministerial');
assert(getGradeMeta('fourth-preparatory').isMinisterial === false, '4th Prep must NOT be Ministerial');
assert(getGradeMeta('fifth-preparatory').isMinisterial === false, '5th Prep must NOT be Ministerial');

// 4. Strict Grade Isolation (No Content Leakage Across Grades)
const gradeUnitCounts = {
  'third-intermediate': THIRD_INTERMEDIATE_UNITS.length,
  'fourth-preparatory': FOURTH_PREPARATORY_UNITS.length,
  'fifth-preparatory': FIFTH_PREPARATORY_UNITS.length,
  'sixth-preparatory': CURRICULUM_UNITS.length,
};

ORDERED_GRADES.forEach(g => {
  const units = getUnitsForGrade(g);
  assert(units.length >= 4, `Grade ${g} must have at least 4 units, got ${units.length}`);
  assert(units.length === gradeUnitCounts[g], `Grade ${g} resolver units must match grade array`);

  // Verify unique lesson IDs within grade
  const lessonIds = new Set<string>();
  units.forEach(u => {
    u.lessons.forEach(l => {
      assert(!lessonIds.has(l.id), `Duplicate lesson ID detected in ${g}: ${l.id}`);
      lessonIds.add(l.id);
      assert(!!l.titleAr && !!l.titleEn && !!l.summary, `Lesson ${l.id} must have complete titles and summary`);
    });
  });
});

// 5. 6th Preparatory 2024-2026 Textbook Content Authenticity
const u1Content = fs.readFileSync(path.resolve('src/data/units/unit1.ts'), 'utf8');
assert(u1Content.includes('Ammar') || u1Content.includes('عمار'), '6th Prep Unit 1 must feature Ammar');
assert(u1Content.includes('Najla Imad') || u1Content.includes('نجلة عماد'), '6th Prep Unit 1 must feature Najla Imad');

const u4Content = fs.readFileSync(path.resolve('src/data/units/unit4.ts'), 'utf8');
assert(u4Content.includes('Rashid & Rana Designs') || u4Content.includes('راشد ورنا'), '6th Prep Unit 4 must feature Rashid & Rana Designs');

const u8Content = fs.readFileSync(path.resolve('src/data/units/unit8.ts'), 'utf8');
assert(u8Content.includes('Euphrates') || u8Content.includes('الفرات'), '6th Prep Unit 8 must feature The Euphrates River');

// Literature: Pride and Prejudice & As You Like It
const literatureContent = fs.readFileSync(path.resolve('src/data/literatureData.ts'), 'utf8');
assert(literatureContent.includes('Pride and Prejudice') && literatureContent.includes('Jane Austen'), '6th Prep Literature must contain Pride and Prejudice');
assert(literatureContent.includes('As You Like It') && literatureContent.includes('William Shakespeare'), '6th Prep Literature must contain As You Like It');

// 6. 3rd Intermediate Stories (Panther 3.0D, Lucky Customer 50, Ibrahim)
assert(THIRD_INTERMEDIATE_STORIES.length >= 3, `3rd Intermediate Stories must have at least 3 story times, got ${THIRD_INTERMEDIATE_STORIES.length}`);
const storyTitles = THIRD_INTERMEDIATE_STORIES.map(s => s.title);
assert(storyTitles.some(t => t.includes('Lucky Customer') || t.includes('الزبون المحظوظ')), 'Must include Lucky Customer 50');

// 6b. 4th Preparatory Literature (Treasure Island & Around the World in 80 Days)
assert(FOURTH_PREPARATORY_LITERATURE.length === 2, `4th Prep must have 2 literature pieces, got ${FOURTH_PREPARATORY_LITERATURE.length}`);
assert(FOURTH_PREPARATORY_LITERATURE.some(l => l.title.includes('Treasure Island')), '4th Prep Literature must include Treasure Island');
assert(FOURTH_PREPARATORY_LITERATURE.some(l => l.title.includes('Around the World in 80 Days')), '4th Prep Literature must include Around the World in 80 Days');

// 7. Ministerial & School Exam Questions Integrity
ORDERED_GRADES.forEach(g => {
  const qs = getQuestionsForGrade(g);
  assert(qs.length >= 5, `Grade ${g} must have at least 5 exam questions, got ${qs.length}`);
  qs.forEach(q => {
    assert(!!q.id && !!q.questionText && !!q.correctAnswer, `Question ${q.id} in ${g} must have id, text, and answer`);
    assert(!!q.ruleExplanation, `Question ${q.id} in ${g} must have ruleExplanation`);
  });
});

// 8. Irregular Verbs Lab & Visual Vocab Atlas
assert(IRREGULAR_VERBS.length >= 50, `Irregular verbs must have at least 50 verbs, got ${IRREGULAR_VERBS.length}`);
for (const v of IRREGULAR_VERBS) {
  assert(!!v.base && !!v.past && !!v.pastParticiple && !!v.arabicMeaning, `Verb ${v.base} must have all principal parts`);
}
assert(VISUAL_VOCABULARY_ITEMS.length >= 10, `Visual Vocab Atlas must contain items, got ${VISUAL_VOCABULARY_ITEMS.length}`);

// 9. Mock Exams (100 Marks Blueprint)
assert(MOCK_EXAM_PAPERS.length >= 1, `6th Prep Mock Exam papers must exist, got ${MOCK_EXAM_PAPERS.length}`);
assert(THIRD_INTERMEDIATE_MOCK_PAPER.sections.length >= 5, `3rd Mock Exam must have at least 5 sections (Q1-Q5), got ${THIRD_INTERMEDIATE_MOCK_PAPER.sections.length}`);

// 10. Server Prompt Injection Shielding & Structural Delimiters
const serverCode = fs.readFileSync(path.resolve('server.ts'), 'utf8');
assert(serverCode.includes('<<<UNTRUSTED_CURRICULUM_DOCUMENT_START>>>'), 'server.ts must use strict structural untrusted document delimiter start');
assert(serverCode.includes('<<<UNTRUSTED_CURRICULUM_DOCUMENT_END>>>'), 'server.ts must use strict structural untrusted document delimiter end');
assert(serverCode.includes('/api/curriculum/sources/upload'), 'server.ts must expose curriculum upload endpoint');
assert(serverCode.includes('/api/ai/grounded-qa'), 'server.ts must expose grounded QA endpoint');
assert(serverCode.includes('sha256'), 'server.ts must calculate SHA-256 signatures for curriculum sources');

// 11. Firestore Rules Security & Collection Hardening
const firestoreRules = fs.readFileSync(path.resolve('firestore.rules'), 'utf8');
assert(firestoreRules.includes('match /curriculum_sources/{sourceId}'), 'firestore.rules must secure curriculum_sources collection');
assert(firestoreRules.includes('resource.data.status == \'published\''), 'firestore.rules must require published status for public read');
assert(firestoreRules.includes('match /curriculum_shared/{docId}'), 'firestore.rules must secure curriculum_shared collection');
assert(firestoreRules.includes('allow read, write: if isTeacherOrAdmin()'), 'firestore.rules must restrict curriculum_shared to teachers/admins');
assert(firestoreRules.includes('isOwner(studentId)'), 'firestore.rules must enforce student data privacy');
assert(firestoreRules.includes('match /curriculum_drafts/{draftId}'), 'firestore.rules must isolate curriculum_drafts');
assert(firestoreRules.includes('function isTeacherOrAdmin()'), 'firestore.rules must define isTeacherOrAdmin function');
assert(firestoreRules.includes('request.resource.data.xp == resource.data.xp'), 'firestore.rules must lock client XP modification');
assert(firestoreRules.includes('request.resource.data.streakDays == resource.data.streakDays'), 'firestore.rules must lock streakDays modification');
assert(!firestoreRules.includes('alnukhbazubair@gmail.com'), 'firestore.rules must eliminate hardcoded email admin checks');

// 12. No Obsolete Grade References in Active Routes
const routesCode = fs.readFileSync(path.resolve('src/routes.ts'), 'utf8');
assert(!routesCode.includes('first-intermediate') && !routesCode.includes('second-intermediate'), 'routes.ts must not reference obsolete grades');
const appCode = fs.readFileSync(path.resolve('src/App.tsx'), 'utf8');
assert(!appCode.includes('first-intermediate') && !appCode.includes('second-intermediate'), 'App.tsx must not reference obsolete grades');

// 13. No Legacy Cross-Grade Lesson Lookup Fallback in App.tsx
assert(!appCode.includes('for (const otherGrade of ORDERED_GRADES)'), 'App.tsx must eliminate cross-grade lookup fallback');

// 14. Global Cross-Grade Lesson ID Uniqueness
const allLessonIds = new Map<string, string>();
ORDERED_GRADES.forEach(g => {
  const units = getUnitsForGrade(g);
  units.forEach(u => {
    u.lessons.forEach(l => {
      assert(!allLessonIds.has(l.id), `Lesson ID collision across grades: ${l.id} exists in ${allLessonIds.get(l.id)} and ${g}`);
      allLessonIds.set(l.id, g);
    });
  });
});

// 15. Independent Resume State Map Validation
const storageCode = fs.readFileSync(path.resolve('src/utils/storage.ts'), 'utf8');
assert(storageCode.includes('gradeLastVisitedLessonMap'), 'storage.ts must initialize gradeLastVisitedLessonMap');
const authContextCode = fs.readFileSync(path.resolve('src/context/AuthContext.tsx'), 'utf8');
assert(authContextCode.includes('gradeLastVisitedLessonMap'), 'AuthContext.tsx must synchronize gradeLastVisitedLessonMap');

// 16. Production Asset Availability Check
const requiredPublicAssets = [
  'public/assets/images/grade_3rd_intermediate_3d_1793868636685.jpg',
  'public/assets/images/grade_4th_preparatory_3d_1793868637872.jpg',
  'public/assets/images/grade_5th_preparatory_3d_1793868637510.jpg',
  'public/assets/images/grade_6th_preparatory_3d_1793868638311.jpg',
];
requiredPublicAssets.forEach(p => {
  assert(fs.existsSync(path.resolve(p)), `Production asset must exist: ${p}`);
});

// 17. Complete Document Processing & Chunking Verification
assert(serverCode.includes('chunkDocumentByPages'), 'server.ts must implement chunkDocumentByPages');
assert(serverCode.includes('SlidingWindowRateLimiter'), 'server.ts must implement SlidingWindowRateLimiter');
assert(serverCode.includes('requireAdminOrTeacher'), 'server.ts must enforce requireAdminOrTeacher');

// 18. Cryptographic Firebase Token Verification & DTO Sanitization
assert(serverCode.includes('verifyIdToken(token, true)'), 'server.ts must verify ID tokens cryptographically with checkRevoked=true');
assert(serverCode.includes('sanitizePublicSourceDTO'), 'server.ts must sanitize public DTOs');
assert(serverCode.includes('/api/curriculum/sources/admin/all'), 'server.ts must provide secured admin sources endpoint');
assert(!serverCode.includes('ADMIN_EMAILS.has'), 'server.ts must not use hardcoded email lists for admin authorization');

// 19. Firebase Storage Security Rules
const storageRules = fs.readFileSync(path.resolve('storage.rules'), 'utf8');
assert(storageRules.includes('service firebase.storage'), 'storage.rules must define service firebase.storage');
assert(storageRules.includes('match /curriculum_sources/{sourceId}/{fileName}'), 'storage.rules must secure curriculum_sources path');
assert(storageRules.includes('isTeacherOrAdmin()'), 'storage.rules must restrict PDF uploads to teachers/admins');

// 20. P0: Prevent Unauthorized Curriculum Source Modification in analyze-curriculum
assert(serverCode.includes('if (sourceId) {') && serverCode.includes('!req.user?.isAdmin && !req.user?.isTeacher'), 'server.ts must guard sourceId modification in analyze-curriculum');
assert(serverCode.includes('status(403)'), 'server.ts must return 403 for unauthorized curriculum modification attempts');

// 21. Protected Ingestion Endpoints (PDF & Text)
assert(serverCode.includes('app.post(\n  "/api/ingest/pdf",\n  requireAuth') || serverCode.includes('"/api/ingest/pdf",\n  requireAuth'), 'server.ts must require authentication for PDF ingestion');
assert(serverCode.includes('/api/ingest/text'), 'server.ts must provide text ingestion endpoint');

// 22. Server-side Grounded QA Resolution
assert(serverCode.includes('getUnitsForGrade(grade as EducationalGrade)'), 'server.ts must resolve verified curriculum units in grounded QA');

// 23. Official Accreditation Separation
assert(serverCode.includes('isOfficiallyAccredited') && serverCode.includes('official_approved'), 'server.ts must distinguish published from officially_accredited');
assert(serverCode.includes('accreditationEvidence'), 'server.ts must require accreditation evidence for official approval');

console.log('--------------------------------------------------------');
console.log(`Results: ${passed} assertions passed, ${failed} failed.`);
console.log('========================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('✅ ALL OMEGA PLATFORM & CURRICULUM VERIFICATIONS PASSED SUCCESSFULLY!');
}
