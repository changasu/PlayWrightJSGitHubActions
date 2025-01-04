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

  test('Click Google Search Results', async ({ page }) => {
    await page.goto('https://www.google.com/');
    //await page.getByLabel('Search', { exact: true }).click();
    await page.getByLabel('Search', { exact: true }).fill('PlayWright Automation');
    await page.getByRole('button', { name: 'Google Search' }).click();
    await page.locator("(//div[@id='search']//a)[1]").click();
    await page.locator("(//*[contains(@class,'navbar__title') and text()='Playwright'])[1]").isVisible();
  });