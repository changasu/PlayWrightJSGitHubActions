const { test, expect } = require('@playwright/test'); //Kind of Importing a package or test annotation

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

  // Read JSON data 
  const fs = require('fs'); 
  const data = JSON.parse(fs.readFileSync('testdata/testData.json', 'utf-8'));
  test('Read Test Data from json file', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search', { exact: true }).fill(data.googleSearchInput);
    await page.getByLabel('Google Search').first().click();
    await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  });