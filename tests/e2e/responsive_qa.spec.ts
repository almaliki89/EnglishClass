import { test, expect, Page } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';

const VIEWPORTS = [
  { name: '360px', width: 360, height: 800 },
  { name: '390px', width: 390, height: 844 },
  { name: '768px', width: 768, height: 1024 },
  { name: '1024px', width: 1024, height: 768 },
  { name: '1440px', width: 1440, height: 900 },
] as const;

const SCREENSHOT_ROOT = path.resolve(process.cwd(), 'test-results', 'responsive-qa');

async function assertNoHorizontalOverflow(page: Page, contextLabel: string) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }));

  expect(
    metrics.scrollWidth,
    `[${contextLabel}] document.documentElement.scrollWidth (${metrics.scrollWidth}) must be <= window.innerWidth (${metrics.innerWidth})`
  ).toBeLessThanOrEqual(metrics.innerWidth);
}

async function assertNavbarVisibleWithoutClipping(page: Page, viewportWidth: number, contextLabel: string) {
  const header = page.locator('header').first();
  await expect(header, `[${contextLabel}] Navbar <header> should be visible`).toBeVisible();
  const box = await header.boundingBox();
  expect(box, `[${contextLabel}] Navbar boundingBox should exist`).not.toBeNull();
  if (box) {
    expect(box.x, `[${contextLabel}] Navbar left edge must not be negative`).toBeGreaterThanOrEqual(0);
    expect(
      box.x + box.width,
      `[${contextLabel}] Navbar right edge (${box.x + box.width}) must fit within viewport (${viewportWidth})`
    ).toBeLessThanOrEqual(viewportWidth + 1);
  }
}

async function saveQaScreenshot(page: Page, viewportName: string, fileName: string) {
  const dir = path.join(SCREENSHOT_ROOT, viewportName);
  fs.mkdirSync(dir, { recursive: true });
  await page.screenshot({ path: path.join(dir, fileName), fullPage: false });
}

test.describe('Responsive QA Across Required Viewports (360px - 1440px)', () => {
  for (const vp of VIEWPORTS) {
    test(`Viewport ${vp.name}: Grades Portal, Grade Dashboard, Unit Dashboard, Lesson Viewer, Tables, and Exam Engine`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });

      // 1. Grades Portal
      await page.goto('/grades');
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('heading', { name: 'الثالث المتوسط', exact: true })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'الرابع الإعدادي', exact: true })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'الخامس الإعدادي', exact: true })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'السادس الإعدادي', exact: true })).toBeVisible();
      await assertNavbarVisibleWithoutClipping(page, vp.width, `${vp.name} /grades`);
      await assertNoHorizontalOverflow(page, `${vp.name} /grades`);
      await saveQaScreenshot(page, vp.name, '01-grades-portal.png');

      // 2. Grade Dashboard (6th Preparatory)
      await page.goto('/grade/sixth-preparatory');
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await assertNavbarVisibleWithoutClipping(page, vp.width, `${vp.name} /grade/sixth-preparatory`);
      await assertNoHorizontalOverflow(page, `${vp.name} /grade/sixth-preparatory`);
      await saveQaScreenshot(page, vp.name, '02-grade-dashboard.png');

      // 3. Unit Dashboard (6th Preparatory - Unit 1)
      await page.goto('/grade/sixth-preparatory/unit/1');
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await assertNavbarVisibleWithoutClipping(page, vp.width, `${vp.name} /grade/sixth-preparatory/unit/1`);
      await assertNoHorizontalOverflow(page, `${vp.name} /grade/sixth-preparatory/unit/1`);
      await saveQaScreenshot(page, vp.name, '03-unit-dashboard.png');

      // 4. Lesson Viewer + Educational Answer Card
      await page.goto('/grade/sixth-preparatory/unit/1/lesson/1-1');
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

      // Trigger first exercise option to verify .lesson-answer card layout across breakpoints
      const firstExerciseCard = page.locator('[id^="exercise-card-"]').first();
      await expect(firstExerciseCard).toBeVisible();
      await firstExerciseCard.locator('button').first().click();
      const answerCard = firstExerciseCard.locator('.lesson-answer');
      await expect(answerCard).toBeVisible();
      const answerBox = await answerCard.boundingBox();
      expect(answerBox).not.toBeNull();
      if (answerBox) {
        expect(answerBox.x).toBeGreaterThanOrEqual(0);
        expect(answerBox.x + answerBox.width).toBeLessThanOrEqual(vp.width + 1);
      }

      await assertNavbarVisibleWithoutClipping(page, vp.width, `${vp.name} lesson-viewer`);
      await assertNoHorizontalOverflow(page, `${vp.name} lesson-viewer`);
      await saveQaScreenshot(page, vp.name, '04-lesson-viewer.png');

      // 5. Educational Table View (Irregular Verbs Lab)
      await page.goto('/grade/sixth-preparatory/verbs');
      await page.waitForLoadState('networkidle');
      const tableEl = page.locator('table').first();
      await expect(tableEl).toBeVisible();
      await assertNavbarVisibleWithoutClipping(page, vp.width, `${vp.name} verbs-table`);
      await assertNoHorizontalOverflow(page, `${vp.name} verbs-table`);
      await saveQaScreenshot(page, vp.name, '05-verbs-table.png');

      // 6. Exam Engine
      await page.goto('/grade/sixth-preparatory/exam');
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await assertNavbarVisibleWithoutClipping(page, vp.width, `${vp.name} exam-engine`);
      await assertNoHorizontalOverflow(page, `${vp.name} exam-engine`);
      await saveQaScreenshot(page, vp.name, '06-exam-engine.png');

      // 7. Unit-Organized Essays Directory (5th Preparatory has 15 essays across 7 units)
      await page.goto('/grade/fifth-preparatory/essays');
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('#unit-essays-heading-51')).toBeVisible();
      await expect(page.locator('#filter-essay-u1')).toBeVisible();
      await assertNavbarVisibleWithoutClipping(page, vp.width, `${vp.name} essays-directory`);
      await assertNoHorizontalOverflow(page, `${vp.name} essays-directory`);
      await saveQaScreenshot(page, vp.name, '07-essays-directory.png');
    });
  }

  test('Essays directory groups essays cleanly by unit across grades without raw unitIds', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });

    // 3rd Intermediate (uses internal unitIds 101..107)
    await page.goto('/grade/third-intermediate/essays');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#filter-essay-u1')).toBeVisible();
    await expect(page.locator('#unit-essays-heading-101')).toBeVisible();
    await expect(page.locator('#unit-essays-heading-102')).toBeVisible();
    const thirdContent = await page.locator('main, #root').first().innerText();
    expect(thirdContent).not.toContain('الوحدة 101');
    expect(thirdContent).not.toContain('وحدة 101');

    // Filter to Unit 2 (2 essays in 3rd intermediate)
    await page.locator('#filter-essay-u2').click();
    await expect(page.locator('#unit-essays-heading-102')).toBeVisible();
    await expect(page.locator('#unit-essays-heading-101')).toHaveCount(0);
    await expect(page.locator('#essay-tab-3rd-essay-u2-invitation')).toBeVisible();
    await expect(page.locator('#essay-tab-3rd-essay-u2-film')).toBeVisible();

    // 4th Preparatory (uses internal unitIds 41..47)
    await page.goto('/grade/fourth-preparatory/essays');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#filter-essay-u1')).toBeVisible();
    await expect(page.locator('#unit-essays-heading-41')).toBeVisible();
    const fourthContent = await page.locator('#root').innerText();
    expect(fourthContent).not.toContain('الوحدة 41');
    expect(fourthContent).not.toContain('وحدة 41');
  });

  test('Keyboard interaction and reduced-motion accessibility check', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/grades');
    await page.waitForLoadState('networkidle');

    // Keyboard tab focus & activation on a grade action button
    const enterThirdBtn = page.getByRole('button', { name: /دخول منصة الثالث/ });
    await enterThirdBtn.focus();
    await expect(enterThirdBtn).toBeFocused();
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/grade\/third-intermediate/);
  });
});
