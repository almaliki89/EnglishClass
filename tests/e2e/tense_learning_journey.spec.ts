import { test, expect } from '@playwright/test';

const gradeGroups = [
  {
    grade: 'third-intermediate',
    lessons: [
      { unitId: 105, lessonId: '3rd-u5-l1' },
      { unitId: 105, lessonId: '3rd-u5-l3' },
    ],
  },
  {
    grade: 'fourth-preparatory',
    lessons: [
      { unitId: 41, lessonId: '4th-u1-l1' },
      { unitId: 41, lessonId: '4th-u1-l2' },
      { unitId: 42, lessonId: '4th-u2-l1' },
      { unitId: 43, lessonId: '4th-u3-l1' },
      { unitId: 43, lessonId: '4th-u3-l2' },
      { unitId: 43, lessonId: '4th-u3-l3' },
      { unitId: 45, lessonId: '4th-u5-l2' },
      { unitId: 45, lessonId: '4th-u5-l5' },
    ],
  },
  {
    grade: 'fifth-preparatory',
    lessons: [
      { unitId: 51, lessonId: '5th-u1-l1' },
      { unitId: 51, lessonId: '5th-u1-l3' },
      { unitId: 51, lessonId: '5th-u1-l4' },
      { unitId: 51, lessonId: '5th-u1-l5' },
      { unitId: 51, lessonId: '5th-u1-l7' },
      { unitId: 54, lessonId: '5th-u4-l3' },
      { unitId: 56, lessonId: '5th-u6-l3' },
      { unitId: 57, lessonId: '5th-u7-l1' },
    ],
  },
  {
    grade: 'sixth-preparatory',
    lessons: [
      { unitId: 1, lessonId: 'u1-l2' },
      { unitId: 5, lessonId: 'u5-l2' },
      { unitId: 5, lessonId: 'u5-l3' },
      { unitId: 5, lessonId: 'u5-l4' },
      { unitId: 5, lessonId: 'u5-l5' },
      { unitId: 6, lessonId: 'u6-l2' },
      { unitId: 7, lessonId: 'u7-l2' },
      { unitId: 7, lessonId: 'u7-l4' },
    ],
  },
] as const;

test.describe('Dedicated tense teaching for every active grade', () => {
  for (const group of gradeGroups) {
    test(`${group.grade}: every curriculum tense lesson has its own guided teaching experience`, async ({ page }) => {
      for (const item of group.lessons) {
        await page.goto(`/grade/${group.grade}/unit/${item.unitId}/lesson/${item.lessonId}`);
        await page.waitForLoadState('networkidle');

        const journey = page.getByTestId('grammar-learning-journey');
        await expect(journey, item.lessonId).toBeVisible();
        await expect(journey).toHaveAttribute('data-lesson-id', item.lessonId);
        await expect(journey).toHaveAttribute('data-tense-journey', 'true');

        await expect(journey.getByTestId('grammar-understand-stage')).toBeVisible();
        await expect(journey.getByText('ضع الحدث على خط الزمن')).toBeVisible();

        await journey.getByRole('button', { name: 'شاهد المثال' }).click();
        await expect(journey.getByTestId('grammar-examples-stage')).toBeVisible();
        await expect(journey.getByRole('button', { name: /استمع إلى النطق/ })).toBeVisible();

        await journey.getByRole('button', { name: 'ابنِ القاعدة' }).click();
        await expect(journey.getByTestId('grammar-build-stage')).toBeVisible();
        await expect(journey.getByRole('heading', { name: 'ابنِ الجملة خطوة خطوة' })).toBeVisible();
        expect(await journey.locator('button[aria-pressed="true"]').count()).toBeGreaterThan(0);

        await journey.getByRole('button', { name: 'انتبه للأخطاء' }).click();
        await expect(journey.getByTestId('grammar-mistakes-stage')).toBeVisible();
        await expect(journey.getByText('أخطاء يقع فيها الطلاب')).toBeVisible();

        await journey.getByRole('button', { name: 'اختبر نفسك' }).click();
        await expect(journey.getByTestId('grammar-recap-stage')).toBeVisible();
        await expect(journey.getByText('تدريب متدرج على فهم الزمن')).toBeVisible();
        const firstOption = journey.getByTestId('tense-practice-option').first();
        await expect(firstOption).toBeVisible();
        await firstOption.click();
        await journey.getByRole('button', { name: 'تحقق من إجابتي' }).click();
        await expect(journey.getByText(/الإجابة الصحيحة:/)).toBeVisible();
      }
    });
  }
});
