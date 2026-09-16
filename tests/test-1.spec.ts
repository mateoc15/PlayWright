import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator("[href='/login']").click();

  const ad = page.locator(
    'button:has-text("Close"), button:has-text("I agree to"), button:has-text("Accept all"), button:has-text("Accept"), button:has-text("AGREE")'
  );
  if (await ad.count() > 0) {
    await ad.first().click();
  }
  await page.getByRole('textbox', { name: 'Name' }).fill('Mateo ');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('mateo9@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();

  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Pasecampos2023*');
  await page.locator('#days').selectOption('15');
  await page.locator('#months').selectOption('5');
  await page.locator('#years').selectOption('1996');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.locator('div').filter({ hasText: 'Receive special offers from' }).nth(4).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Mateo');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('Cano');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('MC');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('cra 82 65 32');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByRole('textbox', { name: 'State *' }).fill('Florida');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('miami');
  await page.locator('#zipcode').fill('055010');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('3128947587');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
});