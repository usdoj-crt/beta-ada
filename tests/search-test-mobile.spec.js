const { test, expect } = require('@playwright/test');
test('Mobile tests', async ({ page }) => {
  // Go to http://localhost:4000/
  await page.goto('http://localhost:4000/');

  // Click input[name="query"]
  await page.locator('input[name="query"]').click();

  // Fill input[name="query"]
  await page.locator('input[name="query"]').fill('test');

  // Click button:has-text("Search Beta.ADA.gov")
  await page.locator('button:has-text("Search Beta.ADA.gov")').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test'
  );

  // Click text=Next Page
  await page.locator('text=Next Page').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=20'
  );

  // Click text=946 results found
  await expect(page.locator('div[role="status"]')).toHaveText('946 results found');

  // Click text=Next Page
  await page.locator('[aria-label="Next Page"]').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=20'
  );

  // Click text=Previous Page
  await page.locator('[aria-label="Previous Page"]').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=0'
  );
});
