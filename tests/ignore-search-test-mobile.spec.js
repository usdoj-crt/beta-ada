const { test, expect } = require('@playwright/test');
test('Mobile tests', async ({ page }) => {
  // Go to http://localhost:4000/
  await page.goto('http://localhost:4000/');

  // Open the main menu:
  await page.locator('button.usa-menu-btn').click();

  // Click input[name="query"]
  await page.locator('input[name="query"]').click();

  // Fill input[name="query"]
  await page.locator('input[name="query"]').fill('test');

  // Click button:has-text("Search Beta.ADA.gov")
  await page.locator('button:has-text("Search Beta.ADA.gov")').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test'
  );

  // Expect there to be 20 results on the page:
  await expect(page.locator('div.content-url')).toHaveCount(20);

  // Expect there to be a pagination feature:
  await expect(page.locator('nav[aria-label="Results Pagination"]')).toHaveCount(1);

  // Expect there to be a previous button that is disabled:
  await expect(page.locator('a[aria-label="Previous page"]')).toHaveAttribute('disabled', 'true');

  // Expect there to be a next button that is enabled:
  await expect(page.locator('a[aria-label="Next page"]')).not.toHaveAttribute('disabled', 'true');

  // Click text=Next Page
  await page.locator('text=Next Page').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=20'
  );

  // Click text=946 results found
  await expect(page.locator('div[role="status"]')).toHaveText('946 results found');

  // Expect there to be a previous button that is not disabled:
  await expect(page.locator('a[aria-label="Previous page"]')).not.toHaveAttribute('disabled', 'true');

  // Click text=Next Page
  await page.locator('[aria-label="Next page"]').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=40'
  );

  // Click text=Previous Page
  await page.locator('[aria-label="Previous page"]').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=20'
  );

  // Click text=Previous Page
  await page.locator('[aria-label="Previous page"]').click();
  await expect(page).toHaveURL(
    'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=0'
  );
});
