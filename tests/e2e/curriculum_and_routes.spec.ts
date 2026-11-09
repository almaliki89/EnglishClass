import { test, expect } from '@playwright/test';

test.describe('Iraqi English Curriculum Platform - Critical Architecture & Security E2E', () => {

  test('1. Exactly four active grades appear on grades selection portal', async ({ page }) => {
    await page.goto('/grades');
    await page.waitForLoadState('networkidle');

    // Verify page title and header
    await expect(page.locator('text=منهاج اللغة الإنكليزية العراقي')).toBeVisible();

    // Verify all four active grades are present
    await expect(page.locator('text=الثالث المتوسط')).toBeVisible();
    await expect(page.locator('text=الرابع الإعدادي')).toBeVisible();
    await expect(page.locator('text=الخامس الإعدادي')).toBeVisible();
    await expect(page.locator('text=السادس الإعدادي')).toBeVisible();

    // Verify obsolete grades are completely absent
    const pageContent = await page.content();
    expect(pageContent).not.toContain('الأول المتوسط');
    expect(pageContent).not.toContain('الثاني المتوسط');
  });

  test('2. Strict 404 routing: obsolete and invalid grades return NotFound page', async ({ page }) => {
    // Attempt navigating to obsolete First Intermediate
    await page.goto('/grade/first-intermediate');
    await page.waitForLoadState('networkidle');

    // Must show 404 NotFound page
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.locator('text=الصفحة غير موجودة')).toBeVisible();

    // Attempt navigating to obsolete Second Intermediate
    await page.goto('/grade/second-intermediate');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=404')).toBeVisible();

    // Attempt navigating to completely invalid grade ID
    await page.goto('/grade/seventh-unknown');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=404')).toBeVisible();
  });

  test('3. Grade-scoped section routing works seamlessly across all grades', async ({ page }) => {
    // 6th Preparatory Mock Exam
    await page.goto('/grade/sixth-preparatory/mock');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=الامتحانات الوزارية التجريبية')).toBeVisible();

    // 3rd Intermediate Mock Exam
    await page.goto('/grade/third-intermediate/mock');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=الامتحان الوزاري التجريبي الشامل')).toBeVisible();

    // 4th Preparatory Mock Exam
    await page.goto('/grade/fourth-preparatory/mock');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=نماذج الامتحانات التجريبية')).toBeVisible();

    // 5th Preparatory Mock Exam
    await page.goto('/grade/fifth-preparatory/mock');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=نماذج الامتحانات التجريبية')).toBeVisible();
  });

  test('4. Independent resume state: changing lesson in one grade does not overwrite another', async ({ page }) => {
    // Navigate to 6th Preparatory
    await page.goto('/grade/sixth-preparatory');
    await page.waitForLoadState('networkidle');

    // Click on a specific lesson in 6th Preparatory
    await page.goto('/grade/sixth-preparatory/unit/1/lesson/1-1');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=Past Simple vs Past Continuous').first()).toBeVisible();

    // Check localStorage has recorded 6th prep resume lesson
    const storageState = await page.evaluate(() => {
      const saved = localStorage.getItem('iraqi_english_student_state_v3');
      return saved ? JSON.parse(saved) : null;
    });

    expect(storageState).not.toBeNull();
    expect(storageState.gradeLastVisitedLessonMap['sixth-preparatory']).toBe('1-1');

    // Now navigate to 3rd Intermediate lesson
    await page.goto('/grade/third-intermediate/unit/unit-1/lesson/lesson-3-1');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=Giving Reasons').first()).toBeVisible();

    // Verify 3rd prep was updated while 6th prep remained 1-1
    const updatedStorageState = await page.evaluate(() => {
      const saved = localStorage.getItem('iraqi_english_student_state_v3');
      return saved ? JSON.parse(saved) : null;
    });

    expect(updatedStorageState.gradeLastVisitedLessonMap['third-intermediate']).toBe('lesson-3-1');
    expect(updatedStorageState.gradeLastVisitedLessonMap['sixth-preparatory']).toBe('1-1');
  });

  test('5. Production 3D illustration assets load with HTTP 200', async ({ request }) => {
    const assetUrls = [
      '/assets/images/grade_3rd_intermediate_3d_1793868636685.jpg',
      '/assets/images/grade_4th_preparatory_3d_1793868637872.jpg',
      '/assets/images/grade_5th_preparatory_3d_1793868637510.jpg',
      '/assets/images/grade_6th_preparatory_3d_1793868638311.jpg',
    ];

    for (const url of assetUrls) {
      const res = await request.get(url);
      expect(res.status(), `Asset ${url} must load with 200 OK`).toBe(200);
      const contentType = res.headers()['content-type'];
      expect(contentType).toContain('image');
    }
  });

  test('6. API Security & Role-Based Authorization Enforcement', async ({ request }) => {
    // 1. Unauthenticated request to upload curriculum source must be rejected (401)
    const unauthUploadRes = await request.post('/api/curriculum/sources/upload', {
      data: {
        rawText: 'Sample textbook text',
        title: 'Unauthenticated Attempt',
        gradeId: 'sixth-preparatory',
      },
    });
    expect(unauthUploadRes.status()).toBe(401);

    // 2. Student role request to upload curriculum source must be rejected (403)
    const studentUploadRes = await request.post('/api/curriculum/sources/upload', {
      headers: {
        Authorization: 'Bearer e2e-student-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'student',
      },
      data: {
        rawText: 'Sample textbook text from student',
        title: 'Student Upload Attempt',
        gradeId: 'sixth-preparatory',
      },
    });
    expect(studentUploadRes.status()).toBe(403);

    // 3. Admin request to upload curriculum source must succeed (200)
    const adminUploadRes = await request.post('/api/curriculum/sources/upload', {
      headers: {
        Authorization: 'Bearer e2e-admin-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'admin',
      },
      data: {
        rawText: `Unit 1: The Iraqi Heritage
Lesson 1: Ancient Civilization and Archaeology in Mesopotamia.
Key Rule: Past Simple is used for completed historical events.
Vocabulary:
- Excavation: الحفريات الأثرية
- Artifact: تحفة أثرية نادرة
Ministerial Question:
What did archaeologists discover in Babylon in 1980? Answer: Ancient cuneiform tablets.`,
        title: 'E2E Test Iraqi Heritage Source',
        gradeId: 'sixth-preparatory',
        subjectId: 'english',
        academicYear: '2024-2026',
        curriculumEdition: 'طبعة 2024-2026 المعتمدة',
        sourceType: 'students_book',
      },
    });
    expect(adminUploadRes.status()).toBe(200);
    const uploadData = await adminUploadRes.json();
    expect(uploadData.success).toBe(true);
    expect(uploadData.source.fileSha256).toBeDefined();

    // Verify rate limit headers are present
    expect(adminUploadRes.headers()['x-ratelimit-limit']).toBeDefined();
    expect(adminUploadRes.headers()['x-ratelimit-remaining']).toBeDefined();
  });

  test('7. Curriculum persistence across server operations', async ({ request }) => {
    // Fetch all sources for sixth-preparatory from admin endpoint
    const listRes = await request.get('/api/curriculum/sources/admin/all?gradeId=sixth-preparatory', {
      headers: {
        Authorization: 'Bearer e2e-admin-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'admin',
      },
    });
    expect(listRes.status()).toBe(200);
    const data = await listRes.json();
    expect(Array.isArray(data.sources)).toBe(true);

    // Find the uploaded source
    const found = data.sources.find((s: any) => s.title === 'E2E Test Iraqi Heritage Source');
    expect(found).toBeDefined();
    expect(found.fileSha256).toBeDefined();
    expect(found.status).toBe('pending_review');
  });

  test('8. P0 PDF Protection: Students forbidden from ingesting or downloading raw PDFs', async ({ request }) => {
    // 1. Student attempting PDF ingestion must receive 403 Forbidden
    const fakePdfBase64 = Buffer.from('%PDF-1.4 test document').toString('base64');
    const studentIngestRes = await request.post('/api/ingest/pdf', {
      headers: {
        Authorization: 'Bearer e2e-student-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'student',
      },
      data: {
        base64Data: `data:application/pdf;base64,${fakePdfBase64}`,
        fileName: 'student_attempt.pdf',
      },
    });
    expect(studentIngestRes.status()).toBe(403);

    // 2. Student attempting to download original curriculum PDF must receive 403 Forbidden
    const studentDownloadRes = await request.get('/api/curriculum/sources/src-6th-sb-2025/download', {
      headers: {
        Authorization: 'Bearer e2e-student-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'student',
      },
    });
    expect(studentDownloadRes.status()).toBe(403);

    // 3. Anonymous user attempting to download must receive 401 Unauthorized
    const anonDownloadRes = await request.get('/api/curriculum/sources/src-6th-sb-2025/download');
    expect(anonDownloadRes.status()).toBe(401);
  });

  test('9. P9 Student Exam Integrity: Server-side grading, XP calculation, and rapid replay protection', async ({ request }) => {
    // 1. Student submits exam results
    const examPayload = {
      examId: 'quick-10-challenge',
      grade: 'sixth-preparatory',
      answers: {
        'mq-1': 'knocked',
        'mq-2': 'frightening',
        'mq-3': 'give it up',
        'mq-4': "didn't use to be",
        'mq-5': 'An exoskeleton',
        'mq-6': '',
        'mq-7': '',
        'mq-8': '',
        'mq-9': '',
        'mq-10': '',
      },
      timeSpentSeconds: 120,
      idempotencyKey: 'e2e-exam-idempotency-key-01',
    };

    const firstSubmitRes = await request.post('/api/student/exam-submit', {
      headers: {
        Authorization: 'Bearer e2e-student-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'student',
      },
      data: examPayload,
    });
    expect(firstSubmitRes.status()).toBe(200);
    const submitData = await firstSubmitRes.json();
    expect(submitData.success).toBe(true);
    expect(submitData.record.isVerifiedByServer).toBe(true);
    expect(typeof submitData.earnedXp).toBe('number');
    expect(submitData.earnedXp).toBeGreaterThan(0);

    // 2. Retrying with the same idempotency key returns the stored result without awarding XP twice.
    const duplicateSubmitRes = await request.post('/api/student/exam-submit', {
      headers: {
        Authorization: 'Bearer e2e-student-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'student',
      },
      data: examPayload,
    });
    expect(duplicateSubmitRes.status()).toBe(200);
    const duplicateData = await duplicateSubmitRes.json();
    expect(duplicateData.success).toBe(true);
    expect(duplicateData.isIdempotentReplay).toBe(true);
    expect(duplicateData.record.id).toBe(submitData.record.id);
    expect(duplicateData.earnedXp).toBe(0);
    expect(duplicateData.studentProgress.xp).toBe(submitData.studentProgress.xp);

    // A genuinely new attempt is subject to the server-side cooldown.
    const newAttemptRes = await request.post('/api/student/exam-submit', {
      headers: {
        Authorization: 'Bearer e2e-student-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'student',
      },
      data: { ...examPayload, idempotencyKey: 'e2e-exam-idempotency-key-02' },
    });
    expect(newAttemptRes.status()).toBe(429);
  });

  test('10. P8 Grounded QA: AI queries enforce authenticated rate limits and provenance citations', async ({ request }) => {
    const qaRes = await request.post('/api/ai/grounded-qa', {
      headers: {
        Authorization: 'Bearer e2e-student-token',
        'x-e2e-mode': 'true',
        'x-e2e-role': 'student',
      },
      data: {
        question: 'ما هي قاعدة ربط الماضي البسيط والماضي المستمر باستخدام while؟',
        grade: 'sixth-preparatory',
        unitTitle: 'Health & Emergencies',
        lessonTitle: 'Past Simple vs Past Continuous',
      },
    });
    expect(qaRes.status()).toBe(200);
    const qaData = await qaRes.json();
    expect(qaData.isGrounded).toBe(true);
    expect(qaData.citation).toBeDefined();
    expect(typeof qaData.answer).toBe('string');
  });

});
