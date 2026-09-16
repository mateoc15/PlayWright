//@ts-check
import {test, expect} from '@playwright/test';

test('Successful login', async ({page}) =>{
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: 'Signup / Login' }).click();
});