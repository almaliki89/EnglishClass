import { test, expect } from '@playwright/test';

test.describe('ORBIT brand identity', () => {
  test('shows the ORBIT name, tagline, browser title and app icon', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/ORBIT — أوربت/);
    await expect(page.locator('#brand-logo')).toContainText('ORBIT');
    await expect(page.locator('#brand-logo')).toContainText('أوربت');
    await expect(page.locator('#orbit-brand-lockup')).toBeVisible();
    await expect(page.getByText('Explore. Learn. Achieve.').first()).toBeVisible();
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/orbit-mark.svg');
    await expect(page.locator('link[rel="manifest"]')).toHaveAttribute('href', '/manifest.webmanifest');
  });

  test('uses the same ORBIT identity on the student sign-in screen', async ({ page }) => {
    await page.goto('/login?forceSignedOut=true');
    await expect(page.locator('#auth-brand-heading')).toContainText('ORBIT');
    await expect(page.locator('#auth-brand-heading')).toContainText('أوربت');
  });

  test('shows Mustafa Turki copyright notice and social links in footer and spotlight', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toContainText('جمهورية العراق - البصرة - الزبير');
    await expect(footer).toContainText('جميع الحقوق محفوظة للأستاذ مصطفى تركي');
    const locationBox = await footer.getByText('جمهورية العراق - البصرة - الزبير').boundingBox();
    const copyrightBox = await footer.getByText(/جميع الحقوق محفوظة للأستاذ مصطفى تركي/).boundingBox();
    expect(locationBox).not.toBeNull();
    expect(copyrightBox).not.toBeNull();
    if (locationBox && copyrightBox) {
      expect(locationBox.x).toBeGreaterThan(copyrightBox.x);
    }
    await expect(footer.locator('a[data-social-link="whatsapp"]')).toHaveAttribute('href', 'https://wa.me/9647705658419');
    await expect(footer.locator('a[data-social-link="facebook"]')).toHaveAttribute('href', 'https://www.facebook.com/mustafa.almaliki');
    await expect(footer.locator('a[data-social-link="instagram"]')).toHaveAttribute('href', 'https://www.instagram.com/mustafa.turki.almaliki/');
  });
});
