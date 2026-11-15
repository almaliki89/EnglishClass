import { test, expect } from '@playwright/test';

test.describe('Source-aware reading passages', () => {
  test('third intermediate shows the verified Ibrahim original text', async ({ page }) => {
    await page.goto('/grade/third-intermediate/unit/104/lesson/3rd-u4-l3');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.getByRole('heading', { name: 'Original English Passage' })).toBeVisible();
    await expect(page.locator('p[lang="en"]').first()).toContainText('Ibrahim lived in a small village in the south of Iraq');
    await expect(page.getByText('ملزمة الثالث المتوسط 2025')).toBeVisible();
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fourth preparatory shows the verified Wedding Customs passage', async ({ page }) => {
    await page.goto('/grade/fourth-preparatory/unit/45/lesson/4th-u5-l4');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('Weddings are different from country to country');
    await expect(page.getByText('In Iraq, the bride wears white to symbolize purity.')).toBeVisible();
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory mixed reading/grammar lesson shows its full Souq Al-Shorja text', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/51/lesson/5th-u1-l3');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('Last week, I visited a very special place in Baghdad');
    await expect(page.getByText('Souq Al-Shorja isn’t just a simple market')).toBeVisible();
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('sixth preparatory does not present the Ammar summary as an original passage', async ({ page }) => {
    await page.goto('/grade/sixth-preparatory/unit/1/lesson/u1-l3');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.getByRole('heading', { name: 'لم يتم توثيق نص القطعة الأصلي بعد' })).toBeVisible();
    await expect(page.getByText(/لن نعرضه على أنه نص الكتاب الأصلي/)).toBeVisible();

    await page.getByRole('button', { name: 'معمل القصة والبطاقات القلابة' }).click().catch(() => {});
    await expect(page.getByText('زيد طارق (Zaid Tariq - 20 years old)')).toHaveCount(0);
  });
});
