import { test, expect } from '@playwright/test';

test.describe('Logout', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });

  test('logs out successfully', async ({ page }) => {
    await page.goto('/');

    // Add login steps here if the test requires an authenticated user.
    await page.getByRole('button', { name: /logout|sign out/i }).click();

    await expect(page).toHaveURL(/login|sign-in/i);
  });

  
});