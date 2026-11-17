import { test, expect } from '@playwright/test';

test.describe('Iraqi English Curriculum Platform - Critical Architecture & Security E2E', () => {

  test('1. Exactly four active grades appear on grades selection portal', async ({ page }) => {
    await page.goto('/grades');
    await page.waitForLoadState('networkidle');

    // Verify page title and header
    await expect(page.locator('text=منهاج اللغة الإنكليزية العراقي')).toBeVisible();

    // Verify all four active grades are present
    await expect(page.getByRole('heading', { name: 'الثالث المتوسط', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'الرابع الإعدادي', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'الخامس الإعدادي', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'السادس الإعدادي', exact: true })).toBeVisible();

    // Verify obsolete grades are completely absent
    const pageContent = await page.content();
    expect(pageContent).not.toContain('الأول المتوسط');
    expect(pageContent).not.toContain('الثاني المتوسط');
  });


  test('Curriculum unit and lesson labels use the official source numbers', async ({ page }) => {
    // Fourth Preparatory has internal unit id 41, but its official unit number is 1.
    await page.goto('/grade/fourth-preparatory/unit/41');
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('الوحدة 01 · منهاج العراق', { exact: true })).toBeVisible();
    const fourthUnitText = await page.locator('body').innerText();
    expect(fourthUnitText).not.toContain('الوحدة 041');

    // Third Intermediate Unit Four contains source review sections, not Lesson 1..4.
    await page.goto('/grade/third-intermediate/unit/104/lesson/3rd-u4-l1');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toContainText('مراجعة المفردات والتراكيب');
    await expect(page.locator('body')).toContainText('مراجعة');
    const unnumberedLessonText = await page.locator('body').innerText();
    expect(unnumberedLessonText).not.toContain('LESSON undefined');
    expect(unnumberedLessonText).not.toContain('LESSON 1');
  });

  test('10. Grade portal controls work with real clicks', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // "Explore grades" should scroll to the grade choices, not navigate to an identical page.
    await page.getByRole('button', { name: 'استكشف الصفوف' }).click();
    const thirdGradeCard = page.locator('article.grade-portal-card').filter({
      has: page.getByRole('heading', { name: 'الثالث المتوسط', exact: true }),
    });
    await expect(thirdGradeCard).toBeVisible();
    await expect(thirdGradeCard).toBeInViewport();

    // Clicking the grade title (not only the bottom action button) enters the grade.
    await thirdGradeCard.getByRole('heading', { name: 'الثالث المتوسط', exact: true }).click();
    await expect(page).toHaveURL(/\/grade\/third-intermediate$/);
    await expect(page.getByRole('heading', { name: /منصة الثالث المتوسط/ })).toBeVisible();
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
    await page.goto('/grade/sixth-preparatory/passages');
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


  test('11. Grammar lessons open the new source-driven explanation by default', async ({ page }) => {
    await page.goto('/grade/sixth-preparatory/unit/1/lesson/u1-l2');
    await page.waitForLoadState('networkidle');

    const journey = page.getByTestId('grammar-learning-journey');
    await expect(journey).toBeVisible();
    await expect(journey.getByRole('heading', { name: 'نتعلّمها بالفهم، لا بحفظ المعادلة' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'شرح القاعدة خطوة بخطوة' })).toBeVisible();

    await journey.getByRole('button', { name: /ابنِ القاعدة/ }).click();
    await expect(journey.getByTestId('grammar-build-stage')).toBeVisible();
    await expect(journey.getByTestId('grammar-build-stage').getByRole('heading', { name: 'ابنِ الجملة خطوة خطوة' })).toBeVisible();
  });

  test('12. Homepage presents an interactive learning hub and working destinations', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: /تعلّم، العب، وتقدّم/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /ابدأ مهمة اليوم/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'أيّ عالم ستكتشف اليوم؟' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'الثالث المتوسط', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'الرابع الإعدادي', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'الخامس الإعدادي', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'السادس الإعدادي', exact: true })).toBeVisible();

    await page.getByRole('button', { name: /اكشف الترجمة/ }).click();
    await expect(page.getByText('المعنى بالعربية')).toBeVisible();

    await page.getByRole('button', { name: /ابدأ مهمة اليوم/ }).click();
    await expect(page).toHaveURL(/\/grade\/sixth-preparatory\/unit\//);
    await expect(page.getByRole('heading', { name: 'رحلة التعلم خطوة بخطوة' })).toBeVisible();
  });

  test('13. Students can browse and enter grades without signing in', async ({ page }) => {
    await page.goto('/?forceSignedOut=true');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: /تعلّم، العب، وتقدّم/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'أيّ عالم ستكتشف اليوم؟' })).toBeVisible();

    await page.getByRole('button', { name: /دخول منصة الثالث/ }).click();
    await expect(page).toHaveURL(/\/grade\/third-intermediate$/);
    await expect(page.getByRole('heading', { name: /منصة الثالث المتوسط/ })).toBeVisible();

    // Account creation remains optional and is available only when the student requests it.
    await page.goto('/login?forceSignedOut=true');
    await expect(page.getByRole('button', { name: /دخول سريع كزائر/ })).toBeVisible();
  });

  test('14. Mentor portrait renders cleanly across portal and interactive principles switch', async ({ page, request }) => {
    const portraitUrl = '/assets/aistudio/photo_2026-11-14_19-25-09_02692711.jpg';
    const assetRes = await request.get(portraitUrl);
    expect(assetRes.status()).toBe(200);
    expect(assetRes.headers()['content-type']).toContain('image');

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const spotlightHeading = page.getByRole('heading', { name: 'الأستاذ مصطفى تركي', exact: true });
    await spotlightHeading.scrollIntoViewIfNeeded();
    await expect(spotlightHeading).toBeVisible();
    const headingColor = await spotlightHeading.evaluate((el) => getComputedStyle(el).color);
    expect(headingColor).toBe('rgb(255, 255, 255)');

    const portraitImages = page.locator(`img[src="${portraitUrl}"]`);
    const count = await portraitImages.count();
    expect(count).toBeGreaterThanOrEqual(2);

    for (let i = 0; i < count; i++) {
      const img = portraitImages.nth(i);
      await img.scrollIntoViewIfNeeded();
      await expect(img).toBeVisible();
      const loaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
      expect(loaded, `Portrait image #${i} must decode with naturalWidth > 0`).toBe(true);
    }

    // Switch mentor guidance principle tab
    await page.locator('#mentor-principle-tab-consistency').click();
    await expect(page.getByRole('heading', { name: 'عشرون دقيقة يومياً تصنع التفوق' })).toBeVisible();
  });

  test('15. Direct logout button in Navbar signs user out cleanly', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const logoutBtn = page.locator('#logout-btn');
    await expect(logoutBtn).toBeVisible();
    await expect(logoutBtn).toContainText('تسجيل الخروج');

    await logoutBtn.click();
    await expect(page.locator('#auth-gate-btn')).toBeVisible();
    await expect(page.locator('#auth-gate-btn')).toContainText('دخول');
  });


  test('6. Each active grade exposes a dedicated textbook passages button and isolated library route', async ({ page }) => {
    const gradeCases = [
      {
        grade: 'third-intermediate',
        expectedCount: 8,
        expectedPassage: 'Car of the Year: Panther 3.0D',
        excludedLessonIds: ['3rd-u3-l3', '3rd-u6-l2', '3rd-u7-l3'],
      },
      {
        grade: 'fourth-preparatory',
        expectedCount: 28,
        expectedPassage: 'كندا واللغات الرسمية',
        excludedLessonIds: ['4th-u1-reading-history'],
      },
      {
        grade: 'fifth-preparatory',
        expectedCount: 20,
        expectedPassage: 'Ramadan in Iraq',
        excludedLessonIds: ['5th-u4-l2', '5th-u8-l4'],
      },
      {
        grade: 'sixth-preparatory',
        expectedCount: 18,
        expectedPassage: "Ammar's Story",
        excludedLessonIds: [],
      },
    ];

    for (const item of gradeCases) {
      await page.goto(`/grade/${item.grade}`);
      await page.waitForLoadState('networkidle');

      // The dashboard itself must not embed a second copy of the passage library.
      await expect(page.getByTestId('grade-book-passage-library')).toHaveCount(0);

      const passagesButton = page.locator('#nav-passages-btn');
      await expect(passagesButton).toBeVisible();
      await expect(passagesButton).toContainText('قطع الكتاب');
      await passagesButton.click();
      await expect(page).toHaveURL(`/grade/${item.grade}/passages`);

      const library = page.getByTestId('grade-book-passage-library');
      await expect(library.getByRole('heading', { name: 'قطع الكتاب' })).toBeVisible();
      await expect(library).toHaveAttribute('data-grade', item.grade);
      await expect(library).toHaveAttribute('data-passage-count', String(item.expectedCount));

      const passageCards = library.getByTestId('book-passage-card');
      await expect(passageCards.first()).toBeVisible();
      await expect(passageCards.filter({ hasText: item.expectedPassage }).first()).toBeVisible();
      const indexedLessonIds = await library.getAttribute('data-passage-lesson-ids');
      expect(indexedLessonIds).not.toBeNull();
      for (const excludedId of item.excludedLessonIds) {
        expect(indexedLessonIds!.split(',')).not.toContain(excludedId);
      }
    }
  });

  test('third intermediate lists falcons and Marsh Arabs as separate passages and opens each source text', async ({ page }) => {
    await page.goto('/grade/third-intermediate/passages');
    await page.waitForLoadState('networkidle');
    const library = page.getByTestId('grade-book-passage-library');
    const unitThree = library.locator('[data-testid="book-passage-unit-group"][data-unit-id="103"]');
    await expect(unitThree).toBeVisible();
    await unitThree.getByRole('button').click();

    const falconsCard = library.getByTestId('book-passage-card').filter({ hasText: 'The Fastest Living Thing — Falcons' });
    await expect(falconsCard).toBeVisible();
    await falconsCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();
    await expect(page.getByTestId('original-passage-section')).toContainText('Have you ever watched a falcon diving down from the sky?');
    await expect(page.getByTestId('passage-translation-section')).toContainText('هل سبق لك أن شاهدت صقرًا ينقض من السماء؟');

    await page.goto('/grade/third-intermediate/passages');
    await page.waitForLoadState('networkidle');
    const marshLibrary = page.getByTestId('grade-book-passage-library');
    const marshUnit = marshLibrary.locator('[data-testid="book-passage-unit-group"][data-unit-id="103"]');
    await marshUnit.getByRole('button').click();
    const marshCard = marshLibrary.getByTestId('book-passage-card').filter({ hasText: 'Life on the Marshes — Marsh Arabs' });
    await expect(marshCard).toBeVisible();
    await marshCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();
    await expect(page.getByTestId('original-passage-section')).toContainText('Marsh Arabs can still be found living a traditional life');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('How many species of birds can be found in the marshlands?');
  });

  test('the fifth-grade dialogue/interview and fourth-grade supplementary reading stay outside the textbook-passage index', async ({ page }) => {
    await page.goto('/grade/fourth-preparatory/passages');
    await page.waitForLoadState('networkidle');
    const fourthLibrary = page.getByTestId('grade-book-passage-library');
    await expect(fourthLibrary).not.toHaveAttribute('data-passage-lesson-ids', /4th-u1-reading-history/);

    await page.goto('/grade/fifth-preparatory/passages');
    await page.waitForLoadState('networkidle');
    const fifthLibrary = page.getByTestId('grade-book-passage-library');
    await expect(fifthLibrary).not.toHaveAttribute('data-passage-lesson-ids', /5th-u4-l2/);
    await expect(fifthLibrary).not.toHaveAttribute('data-passage-lesson-ids', /5th-u8-l4/);

    // These are still part of the actual unit lessons; they were not deleted.
    await page.goto('/grade/fifth-preparatory/unit/54');
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('إصابة هيلين في الركبة وحوار المساعدة')).toBeVisible();
  });

  test('the passage library filters by unit and opens the original lesson without duplicating it', async ({ page }) => {
    await page.goto('/grade/sixth-preparatory/passages');
    await page.waitForLoadState('networkidle');

    const library = page.getByTestId('grade-book-passage-library');
    await library.getByLabel('تصفية قطع الكتاب حسب الوحدة').selectOption('1');

    const cards = library.getByTestId('book-passage-card');
    await expect(cards.first()).toBeVisible();
    const countForUnitOne = await cards.count();
    expect(countForUnitOne).toBeGreaterThan(0);

    for (let index = 0; index < countForUnitOne; index += 1) {
      await expect(cards.nth(index)).toHaveAttribute('data-unit-id', '1');
    }

    await library.getByLabel('ابحث في قطع الكتاب').fill('Ammar');
    const ammarCard = library.getByTestId('book-passage-card').filter({ hasText: 'Ammar' });
    await expect(ammarCard).toHaveCount(1);
    await ammarCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();

    await expect(page).toHaveURL((url) => {
      const current = new URL(url);
      return current.pathname === '/grade/sixth-preparatory/unit/1/lesson/u1-l3'
        && current.searchParams.get('passage') === '6p-u1-ammar';
    });
    const ammarDossier = page.getByTestId('reading-passage-dossier');
    await expect(ammarDossier).toBeVisible();
    await expect(ammarDossier.getByTestId('passage-title-ar')).toContainText('عمار وتقنية الهيكل الخارجي');
  });


  test('book passages are removed from the unit lesson index and remain accessible from the grade library', async ({ page }) => {
    await page.goto('/grade/sixth-preparatory/unit/1');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: 'قطع هذه الوحدة في مكتبة الصف' })).toBeVisible();
    await expect(page.getByText('الدرس الثالث: قطعة عمار', { exact: false })).toHaveCount(0);

    await page.getByRole('button', { name: 'فتح مكتبة قطع الكتاب' }).click();
    await expect(page).toHaveURL(/\/grade\/sixth-preparatory\/passages$/);
    await expect(page.getByTestId('grade-book-passage-library')).toBeVisible();
    await expect(
      page.getByTestId('grade-book-passage-library')
        .getByTestId('book-passage-card')
        .filter({ hasText: "Ammar's Story" })
    ).toBeVisible();
  });

  test('verified fourth-grade passage opens as full English text, Arabic translation, then source Q&A', async ({ page }) => {
    await page.goto('/grade/fourth-preparatory/passages');
    await page.waitForLoadState('networkidle');

    const library = page.getByTestId('grade-book-passage-library');
    await library.getByLabel('ابحث في قطع الكتاب').fill('استعادة جنة عدن');
    const passageCard = library.getByTestId('book-passage-card').filter({ hasText: 'استعادة جنة عدن' });
    await expect(passageCard).toHaveCount(1);
    await passageCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();

    await expect(page).toHaveURL((url) => {
      const current = new URL(url);
      return current.pathname.startsWith('/grade/fourth-preparatory/unit/')
        && current.searchParams.get('passage') === '4p-u7-marshes';
    });

    const dossier = page.getByTestId('reading-passage-dossier');
    await expect(dossier).toBeVisible();
    await expect(dossier.getByTestId('passage-title-ar')).toContainText('استعادة جنة عدن: أهوار الحمار');
    const original = dossier.getByTestId('original-passage-section');
    const translation = dossier.getByTestId('passage-translation-section');
    const exercises = dossier.getByTestId('passage-exercises-section');

    await expect(original.getByText(/The Al-Hammaar Marshes, known as the Garden of Eden/)).toBeVisible();
    await expect(translation.getByText(/تُعد أهوار الحمار، المعروفة باسم جنة عدن/)).toBeVisible();
    await expect(exercises.getByText('How many people live in the Al-Hammaar Marshes? Who are they?')).toBeVisible();
    await expect(exercises.getByText(/More than half a million/)).toBeVisible();

    const sectionOrder = await dossier.evaluate((element) =>
      Array.from(element.querySelectorAll(
        '[data-testid="original-passage-section"], [data-testid="passage-translation-section"], [data-testid="passage-exercises-section"]'
      )).map((section) => section.getAttribute('data-testid'))
    );
    expect(sectionOrder).toEqual([
      'original-passage-section',
      'passage-translation-section',
      'passage-exercises-section',
    ]);
  });

});
