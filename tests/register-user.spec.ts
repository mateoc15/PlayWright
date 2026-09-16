import { test, expect } from '@playwright/test';

test('Register user', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://automationexercise.com/');

  // Close consent dialog if it appears (different locales have different button text)
  const ad = page.locator(
    'button:has-text("Close"), button:has-text("I agree to"), button:has-text("Accept all"), button:has-text("Accept"), button:has-text("AGREE")'
  );
  if (await ad.count() > 0) {
    await ad.first().click();
  }

  // Find the search box, type the query and submit
  const searchBox = page.locator("[href='/login'");
  await searchBox.waitFor({ state: 'visible', timeout: 10000 });
  await searchBox.fill('Mateo');
  await searchBox.press('Enter');

  // Wait for search results to appear
  const firstResult = page.locator('div#search h3').first();
  await firstResult.waitFor({ state: 'visible', timeout: 10000 });

  // Assert the first result contains the word "Mateo"
  await expect(firstResult).toContainText('Mateo', { timeout: 10000 });
});
