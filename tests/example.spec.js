// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Niharika/);
});

test('geometric pattern renders', async ({ page }) => {
  await page.goto('/');
  const pattern = page.locator('[class*="grid"]').first();
  await expect(pattern).toBeVisible();
});

test('navigation header is visible', async ({ page }) => {
  await page.goto('/');
  const header = page.locator('header');
  await expect(header).toBeVisible();
});
