import { test, expect } from '@playwright/test';

const grammarLessons = [
  {
    grade: 'third-intermediate',
    unitId: 103,
    lessonId: '3rd-u3-l1',
    lessonName: 'درجات المقارنة والتفضيل',
  },
  {
    grade: 'fourth-preparatory',
    unitId: 41,
    lessonId: '4th-u1-l1',
    lessonName: 'المضارع البسيط',
  },
  {
    grade: 'fifth-preparatory',
    unitId: 51,
    lessonId: '5th-u1-l1',
    lessonName: 'المضارع البسيط مقابل المضارع المستمر',
  },
  {
    grade: 'sixth-preparatory',
    unitId: 1,
    lessonId: 'u1-l2',
    lessonName: 'الماضي البسيط والماضي المستمر',
  },
] as const;

test.describe('Unified grammar learning experience', () => {
  for (const item of grammarLessons) {
    test(`${item.grade} renders the same guided grammar teaching journey`, async ({ page }) => {
      await page.goto(`/grade/${item.grade}/unit/${item.unitId}/lesson/${item.lessonId}`);
      await page.waitForLoadState('networkidle');

      const journey = page.getByTestId('grammar-learning-journey');
      await expect(journey).toBeVisible();
      await expect(journey).toHaveAttribute('data-lesson-id', item.lessonId);
      await expect(journey.getByRole('heading', { name: 'نتعلّمها بالفهم، لا بحفظ المعادلة' })).toBeVisible();

      // Grammar lessons now have one teaching path instead of competing generic modes.
      await expect(page.getByRole('button', { name: 'شرح القاعدة خطوة بخطوة' })).toBeVisible();
      await expect(page.getByRole('button', { name: /^حل التمارين/ })).toBeVisible();
      await expect(page.getByRole('button', { name: 'رحلة التعلم خطوة بخطوة' })).toHaveCount(0);
      await expect(page.getByRole('button', { name: 'كل أقسام الدرس' })).toHaveCount(0);
      await expect(page.getByRole('button', { name: 'شرح الملزمة والملاحظات' })).toHaveCount(0);
      await expect(page.getByText('INTERACTIVE GRAMMAR LAB')).toHaveCount(0);
      await expect(page.getByText('ACADEMIC DISSECTION ENGINE')).toHaveCount(0);
      await expect(page.getByRole('button', { name: 'تلميحات ذكية' })).toHaveCount(0);

      // Observe a real lesson example before studying the rule formula.
      await journey.getByRole('button', { name: /شاهد المثال/ }).click();
      await expect(journey.getByTestId('grammar-examples-stage')).toBeVisible();

      // Tense lessons use a dedicated meaning → examples → forms → contrast → practice path.
      // Other grammar lessons retain the progressive source-point explanation.
      const usesTenseJourney = (await journey.getAttribute('data-tense-journey')) === 'true';
      if (!usesTenseJourney) {
        const reflection = journey.getByTestId('grammar-example-reflection');
        await expect(reflection).toBeVisible();
        await expect(reflection).toHaveAttribute('data-details-revealed', 'false');
        const revealDetails = reflection.getByRole('button', { name: 'اكشف موضع القاعدة والمعنى' });
        await revealDetails.click();
        await expect(reflection).toHaveAttribute('data-details-revealed', 'true');
        await expect(journey.getByTestId('grammar-example-revealed-details')).toBeVisible();

        const nextExample = journey.getByRole('button', { name: 'التالي' });
        if (await nextExample.isEnabled()) {
          await nextExample.click();
          await expect(reflection).toHaveAttribute('data-details-revealed', 'false');
          await expect(journey.getByTestId('grammar-example-revealed-details')).toHaveCount(0);
        }
      }

      await journey.getByRole('button', { name: /ابنِ القاعدة/ }).click();
      await expect(journey.getByTestId('grammar-build-stage')).toBeVisible();
      if (usesTenseJourney) {
        await expect(journey.getByRole('heading', { name: 'ابنِ الجملة خطوة خطوة' })).toBeVisible();
        await expect(journey.getByTestId('grammar-build-stage').getByRole('button', { name: 'الإثبات' }).first()).toBeVisible();
      } else {
        await expect(journey.getByText(/الفكرة 1/)).toBeVisible();
        const nextRulePoint = journey.getByRole('button', { name: 'الفكرة التالية' });
        if (await nextRulePoint.isEnabled()) {
          await nextRulePoint.click();
          await expect(journey.getByText(/الفكرة 2/)).toBeVisible();
        }
      }

      await journey.getByRole('button', { name: /انتبه للأخطاء/ }).click();
      await expect(journey.getByTestId('grammar-mistakes-stage')).toBeVisible();

      await journey.getByRole('button', { name: /اختبر نفسك/ }).click();
      await expect(journey.getByTestId('grammar-recap-stage')).toBeVisible();
      await expect(journey.getByText('دورك الآن — فكّر قبل أن ترى الإجابة')).toBeVisible();

      await page.getByRole('button', { name: /^حل التمارين/ }).click();
      await expect(page.getByRole('heading', { name: 'تمارين واختبارات فورية' })).toBeVisible();
    });
  }
});
