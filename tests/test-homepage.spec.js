// @ts-check
const { test, expect } = require('@playwright/test');

const title = 'The Americans with Disabilities Act | Beta.ADA.gov';
const h1Content = 'The Americans with Disabilities Act (ADA) protects people with disabilities from discrimination.';
const h1Locator = 'h1:not(.h2)';

test('find page title', async ({ page }) => {
    await page.goto('https://beta.ada.gov/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(title);
    await expect(page.locator(h1Locator)).toHaveText(h1Content);
  
    // // Expect an attribute "to be strictly equal" to the value.
    // await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
  
    // await page.click('text=Get Started');
    // // Expect some text to be visible on the page.
    // await expect(page.locator('text=Introduction').first()).toBeVisible();
  });