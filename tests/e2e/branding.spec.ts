import { test, expect } from '@playwright/test';

test.describe('LINGORA brand identity', () => {
  test('shows the new name, tagline, browser title and app icon', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/LINGORA — لينغورا/);
    await expect(page.locator('#brand-logo')).toContainText('LINGORA');
    await expect(page.locator('#brand-logo')).toContainText('لينغورا');
    await expect(page.locator('#lingora-brand-lockup')).toBeVisible();
    await expect(page.getByText('Your Language. Your World.').first()).toBeVisible();
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/lingora-mark.svg');
    await expect(page.locator('link[rel="manifest"]')).toHaveAttribute('href', '/manifest.webmanifest');
  });

  test('uses the same LINGORA identity on the student sign-in screen', async ({ page }) => {
    await page.goto('/login?forceSignedOut=true');
    await expect(page.locator('#auth-brand-heading')).toContainText('LINGORA');
    await expect(page.locator('#auth-brand-heading')).toContainText('لينغورا');
  });
});
