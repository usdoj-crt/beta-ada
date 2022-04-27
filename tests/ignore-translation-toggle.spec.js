const { test, expect } = require('@playwright/test');

const enURL = '/file-a-complaint/';
const esURL = '/es/presente-una-queja/';

test.describe('Toggle translations', () => {
  test('Find button and click', async ({ page }) => {
    // Set up some element locators:
    const toggleID = page.locator('#crt-page--langtogglebutton');
    const html = page.locator('html');
    const alternate = page.locator('link[rel="alternate"]');

    // Go to http://localhost:4000/file-a-complaint/
    await page.goto('http://localhost:4000/file-a-complaint/');

    // Expect there to be only one toggle button:
    await expect(toggleID).toHaveCount(1);

    //Expect there to be two alternate links, one for each translation:
    await expect(alternate).toHaveCount(2);

    // Check for english alternate link:
    await expect(page.locator('link[rel="alternate"] >> nth=0')).toHaveAttribute('href', enURL);
    await expect(page.locator('link[rel="alternate"] >> nth=0')).toHaveAttribute('hreflang', 'en');

    // Should have spanish alternate
    await expect(page.locator('link[rel="alternate"] >> nth=1')).toHaveAttribute('href', esURL);
    await expect(page.locator('link[rel="alternate"] >> nth=1')).toHaveAttribute('hreflang', 'es');

    // The page lang should be English
    await expect(html).toHaveAttribute('lang', 'en');

    // There should be a toggle language button, it should say 'En espanol'
    await expect(toggleID).toHaveText(['En español']);

    // Toggle the language:
    await toggleID.click();

    // Expect to be directed to the spanish language page
    await expect(page).toHaveURL('http://localhost:4000/es/presente-una-queja/');

    // The page lang should be Spanish
    await expect(html).toHaveAttribute('lang', 'es');

    //Expect there to be two alternate links, one for each translation:
    await expect(alternate).toHaveCount(2);

    // Check for english alternate link:
    await expect(page.locator('link[rel="alternate"] >> nth=0')).toHaveAttribute('href', enURL);
    await expect(page.locator('link[rel="alternate"] >> nth=0')).toHaveAttribute('hreflang', 'en');

    // Should have spanish alternate
    await expect(page.locator('link[rel="alternate"] >> nth=1')).toHaveAttribute('href', esURL);
    await expect(page.locator('link[rel="alternate"] >> nth=1')).toHaveAttribute('hreflang', 'es');

    // There should be a toggle language button, it should say 'English'
    await expect(toggleID).toHaveText(['English']);

    // Expect there to be only one toggle button:
    await expect(toggleID).toHaveCount(1);
  });
});
