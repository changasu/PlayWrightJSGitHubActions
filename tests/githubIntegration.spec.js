import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'
//const { test, expect } = require('@playwright/test'); //Kind of Importing a package or test annotation

//test.only annotation helps in running only a particular test in a file.
test('Launch Google with new browser instance', async ({ browser }) => {
    // Creates a new Instance of a browser with the required settings
    const context = await browser.newContext();
  
    // Creates new page on the new browser instance.
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
  });

test.describe('AI Registration submission', () => {
    test('Sample Registration form', async ({ page }) => {
        await page.goto('file:///C:/Users/suvic/Downloads/SampleRegistrationForm.html');
        await ai('Input in the First Name field as Tester', { page, test })
        await ai('Input in the Last Name field as Testing', { page, test })
        await ai('Input the Email with a realistic email id', { page, test })
        await ai('Input the Password with a realistic password', { page, test })
        await ai('Select Gender as Male from the dropdown', { page, test })
        await ai('Select a random date in Date of Birth field', { page, test })
    });
});

test.describe('AI Form submission', () => {
    test('Sample HTML form submission', async ({ page }) => {
        await page.goto('file:///C:/Users/suvic/Downloads/DynamicSampleForm.html');
        await ai('Fill out the text fields with realistic values', { page, test })
        await ai('Select one of the radio button value', { page, test })
        await ai('Select all of the checkbox values', { page, test })
        await ai('Submit the form', { page, test })
    });
});