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
    await expect(page.locator('text=Past Simple vs Past Continuous')).toBeVisible();

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
    await expect(page.locator('text=Giving Reasons')).toBeVisible();

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
    // Fetch all sources for sixth-preparatory
    const listRes = await request.get('/api/curriculum/sources?gradeId=sixth-preparatory');
    expect(listRes.status()).toBe(200);
    const data = await listRes.json();
    expect(Array.isArray(data.sources)).toBe(true);

    // Find the uploaded source
    const found = data.sources.find((s: any) => s.title === 'E2E Test Iraqi Heritage Source');
    expect(found).toBeDefined();
    expect(found.fileSha256).toBeDefined();
    expect(found.status).toBe('structured');
  });

});
