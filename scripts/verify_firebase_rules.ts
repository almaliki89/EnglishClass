import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from '@firebase/rules-unit-testing';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  getBytes,
  ref,
  uploadBytes,
} from 'firebase/storage';

const projectId = 'demo-englishclass-rules-test';
const pdfBytes = new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52, 10]);

async function main() {
  const testEnv = await initializeTestEnvironment({
    projectId,
    firestore: {
      rules: readFileSync(resolve(process.cwd(), 'firestore.rules'), 'utf8'),
    },
    storage: {
      rules: readFileSync(resolve(process.cwd(), 'storage.rules'), 'utf8'),
    },
  });

  try {
    await testEnv.clearFirestore();

    await testEnv.withSecurityRulesDisabled(async (context) => {
      const db = context.firestore();
      await setDoc(doc(db, 'students/student-1'), {
        uid: 'student-1',
        name: 'Student One',
        email: 'student@example.test',
        selectedGrade: 'fourth-preparatory',
        xp: 0,
        streakDays: 0,
        totalQuestionsAttempted: 0,
        totalQuestionsCorrect: 0,
        unlockedBadges: [],
      });
      await setDoc(doc(db, 'students/student-2'), {
        uid: 'student-2',
        name: 'Student Two',
        xp: 0,
        totalQuestionsAttempted: 0,
        totalQuestionsCorrect: 0,
        unlockedBadges: [],
      });
      await setDoc(doc(db, 'leaderboard/public-entry'), {
        displayName: 'Sample Learner',
        xp: 20,
      });
      await setDoc(doc(db, 'curriculum_sources/source-1'), {
        title: 'Draft curriculum source',
        status: 'draft',
        verificationStatus: 'pending_review',
      });
    });

    const anonymous = testEnv.unauthenticatedContext();
    const student = testEnv.authenticatedContext('student-1');
    const otherStudent = testEnv.authenticatedContext('student-2');
    const teacher = testEnv.authenticatedContext('teacher-1', { teacher: true });
    const admin = testEnv.authenticatedContext('admin-1', { admin: true, teacher: true });

    const anonymousDb = anonymous.firestore();
    const studentDb = student.firestore();
    const otherStudentDb = otherStudent.firestore();
    const teacherDb = teacher.firestore();
    const adminDb = admin.firestore();

    // Student profile isolation and protected progression fields.
    await assertSucceeds(getDoc(doc(studentDb, 'students/student-1')));
    await assertFails(getDoc(doc(studentDb, 'students/student-2')));
    await assertFails(getDoc(doc(anonymousDb, 'students/student-1')));
    await assertSucceeds(updateDoc(doc(studentDb, 'students/student-1'), { name: 'Updated Student' }));
    await assertFails(updateDoc(doc(studentDb, 'students/student-1'), { xp: 999 }));
    await assertFails(updateDoc(doc(studentDb, 'students/student-1'), { role: 'admin' }));
    await assertFails(setDoc(doc(studentDb, 'admins/student-1'), { uid: 'student-1' }));

    // Leaderboard access requires a signed-in user; student records remain isolated.
    await assertFails(getDoc(doc(anonymousDb, 'leaderboard/public-entry')));
    await assertSucceeds(getDoc(doc(studentDb, 'leaderboard/public-entry')));

    // Draft curriculum remains private. Teachers can edit content but cannot publish or accredit.
    await assertFails(getDoc(doc(studentDb, 'curriculum_sources/source-1')));
    await assertSucceeds(getDoc(doc(teacherDb, 'curriculum_sources/source-1')));
    await assertSucceeds(updateDoc(doc(teacherDb, 'curriculum_sources/source-1'), {
      title: 'Teacher-edited draft',
    }));
    await assertFails(updateDoc(doc(teacherDb, 'curriculum_sources/source-1'), {
      status: 'published',
    }));
    await assertFails(updateDoc(doc(teacherDb, 'curriculum_sources/source-1'), {
      verificationStatus: 'officially_accredited',
    }));
    await assertSucceeds(updateDoc(doc(adminDb, 'curriculum_sources/source-1'), {
      status: 'published',
      verificationStatus: 'internally_reviewed',
    }));
    await assertSucceeds(getDoc(doc(anonymousDb, 'curriculum_sources/source-1')));

    // Original curriculum PDFs are restricted to teachers/admins; students can only
    // read authenticated, explicitly published derivatives from curriculum_public.
    const teacherStorage = teacher.storage();
    const studentStorage = student.storage();
    const adminStorage = admin.storage();
    const sourcePdfPath = 'curriculum_sources/source-1/source.pdf';

    await assertSucceeds(uploadBytes(
      ref(teacherStorage, sourcePdfPath),
      pdfBytes,
      { contentType: 'application/pdf' },
    ));
    await assertSucceeds(getBytes(ref(teacherStorage, sourcePdfPath)));
    await assertFails(getBytes(ref(studentStorage, sourcePdfPath)));
    await assertFails(uploadBytes(
      ref(studentStorage, 'curriculum_sources/source-1/forbidden.pdf'),
      pdfBytes,
      { contentType: 'application/pdf' },
    ));
    await assertFails(getBytes(ref(anonymous.storage(), sourcePdfPath)));

    const publicDerivative = 'curriculum_public/fourth-preparatory/summary.pdf';
    await assertSucceeds(uploadBytes(
      ref(adminStorage, publicDerivative),
      pdfBytes,
      { contentType: 'application/pdf' },
    ));
    await assertSucceeds(getBytes(ref(studentStorage, publicDerivative)));
    await assertFails(getBytes(ref(anonymous.storage(), publicDerivative)));

    console.log('Firebase Rules Emulator tests passed: student isolation, protected XP/roles, leaderboard authentication, curriculum draft/publish privileges, and Storage source/public derivative boundaries.');
  } finally {
    await testEnv.cleanup();
  }
}

main().catch((error: unknown) => {
  console.error('Firebase Rules Emulator tests failed:', error);
  process.exitCode = 1;
});
