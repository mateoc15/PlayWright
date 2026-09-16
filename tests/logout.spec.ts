import { test, expect } from '@playwright/test';

test.describe('Logout', () => {
  test('logs out successfully', async ({ page }) => {
    await page.goto('/');

    // Add login steps here if the test requires an authenticated user.
    await page.getByRole('button', { name: /logout|sign out/i }).click();

    await expect(page).toHaveURL(/login|sign-in/i);
  });

  test('prevents access to protected pages after logout', async ({ page }) => {
    await page.goto('/');

    // Add login and logout steps here if the test requires an authenticated user.
    await page.getByRole('button', { name: /logout|sign out/i }).click();
    await page.goto('/dashboard');

    await expect(page).toHaveURL(/login|sign-in/i);
  });
});