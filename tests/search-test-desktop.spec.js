const { test, expect } = require('@playwright/test');

test.describe('Desktop tests', () => {
  test('First page of results', async ({ page }) => {
    await page.goto(
      'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test'
    );

    // Expect there to be a text section with the total number of results available:
    await expect(page.locator('div[role="status"]')).toHaveText('946 results found');

    // Expect there to be 20 results on the page:
    await expect(page.locator('div.content-url')).toHaveCount(20);

    // Expect there to be a pagination feature:
    await expect(page.locator('nav[aria-label="Results Pagination"]')).toHaveCount(1);

    // Expect there to be a previous button that is disabled:
    await expect(page.locator('a[aria-label="Previous page"]')).toHaveAttribute('disabled', 'true');

    // Expect there to be a next button that is enabled:
    await expect(page.locator('a[aria-label="Next page"]')).not.toHaveAttribute('disabled', 'true');

    // Expect there to be a first page button:
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('aria-current', 'true');
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('data-offset', '0');

    // Expect there to be a second page button:
    await expect(page.locator('a[aria-label="Page 2"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 2"]')).toHaveAttribute('data-offset', '20');

    // Expect there to be a third page button:
    await expect(page.locator('a[aria-label="Page 3"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 3"]')).toHaveAttribute('data-offset', '40');

    // Expect there to be a fourth page button:
    await expect(page.locator('a[aria-label="Page 4"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 4"]')).toHaveAttribute('data-offset', '60');

    // Expect there to be an ellipsis:
    await expect(page.locator('li.usa-pagination__item[role="none"]')).toHaveAttribute(
      'tabIndex',
      '-1'
    );

    // Expect there to be a last page/page 48 button:
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'aria-current',
      'false'
    );
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'data-offset',
      '940'
    );

    // Expect there to be a page of text section:
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'aria-current',
      'false'
    );
  });

  test('Second page of results', async ({ page }) => {
    await page.goto(
      'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test'
    );

    // Expect there to be a text section with the total number of results available:
    await expect(page.locator('div[role="status"]')).toHaveText('946 results found');

    // Expect there to be 20 results on the page:
    await expect(page.locator('div.content-url')).toHaveCount(20);

    // Expect there to be a pagination feature:
    await expect(page.locator('nav[aria-label="Results Pagination"]')).toHaveCount(1);

    // Expect there to be a previous button that is disabled:
    await expect(page.locator('a[aria-label="Previous page"]')).not.toHaveAttribute(
      'disabled',
      'true'
    );

    // Expect there to be a next button that is enabled:
    await expect(page.locator('a[aria-label="Next page"]')).not.toHaveAttribute('disabled', 'true');

    // Expect there to be a first page button:
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('data-offset', '0');

    // Expect there to be a second page button:
    await expect(page.locator('a[aria-label="Page 2"]')).toHaveAttribute('aria-current', 'true');
    await expect(page.locator('a[aria-label="Page 2"]')).toHaveAttribute('data-offset', '20');

    // Expect there to be a third page button:
    await expect(page.locator('a[aria-label="Page 3"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 3"]')).toHaveAttribute('data-offset', '40');

    // Expect there to be a fourth page button:
    await expect(page.locator('a[aria-label="Page 4"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 4"]')).toHaveAttribute('data-offset', '60');

    // Expect there to be an ellipsis:
    await expect(page.locator('li.usa-pagination__item[role="none"]')).toHaveAttribute(
      'tabIndex',
      '-1'
    );

    // Expect there to be a last page/page 48 button:
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'aria-current',
      'false'
    );
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'data-offset',
      '940'
    );

    // Expect there to be a page of text section:
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'aria-current',
      'false'
    );
  });

  test('Last page of results', async ({ page }) => {
    await page.goto(
      'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=940'
    );

    // Expect there to be a text section with the total number of results available:
    await expect(page.locator('div[role="status"]')).toHaveText('946 results found');

    // Expect there to be 20 results on the page:
    await expect(page.locator('div.content-url')).toHaveCount(6);

    // Expect there to be a pagination feature:
    await expect(page.locator('nav[aria-label="Results Pagination"]')).toHaveCount(1);

    // Expect there to be a previous button that is disabled:
    await expect(page.locator('a[aria-label="Previous page"]')).not.toHaveAttribute(
      'disabled',
      'true'
    );

    // Expect there to be a next button that is enabled:
    await expect(page.locator('a[aria-label="Next page"]')).toHaveAttribute('disabled', 'true');

    // Expect there to be a first page button:
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('data-offset', '0');

    // Expect there to be a third page button:
    await expect(page.locator('a[aria-label="Page 45"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 45"]')).toHaveAttribute('data-offset', '880');

    // Expect there to be a third page button:
    await expect(page.locator('a[aria-label="Page 46"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 46"]')).toHaveAttribute('data-offset', '900');

    // Expect there to be a fourth page button:
    await expect(page.locator('a[aria-label="Page 47"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 47"]')).toHaveAttribute('data-offset', '920');

    // Expect there to be an ellipsis:
    await expect(page.locator('li.usa-pagination__item[role="none"]')).toHaveAttribute(
      'tabIndex',
      '-1'
    );

    // Expect there to be a last page/page 48 button:
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'aria-current',
      'true'
    );
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'data-offset',
      '940'
    );

    // Expect there to be a page of text section:
    await expect(page.locator('a[aria-label="Last page; Page 48"]')).toHaveAttribute(
      'aria-current',
      'true'
    );
  });


  test('Next Page Button', async ({page}) => {

    await page.goto('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test');

    page.locator('a[aria-label="Next page"]').click();

    await exppect(page).toHaveURL('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=20');

    page.locator('a[aria-label="Next page"]').click();

    await expect(page).toHaveURL('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=40');

    await page.goto('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=940');

    await expect(page.locator('a[aria-label="Next page"]')).toHaveAttribute('disabled', 'true');

  });

  test('Previous Page Button', async ({page}) => {

    await page.goto('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test');

    page.locator('a[aria-label="Previous page"]').toHaveAttribute('disabled', 'true');

    await page.goto('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=940');

    page.locator('a[aria-label="Previous page"]').click();

    await exppect(page).toHaveURL('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=920');

    page.locator('a[aria-label="Previous page"]').click();

    await expect(page).toHaveURL('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=900');

    await page.goto('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=20');

    page.locator('a[aria-label="Previous page"]').click();

    await expect(page).toHaveURL('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=0');

    await expect(page.locator('a[aria-label="Previous page"]')).toHaveAttribute('disabled', 'true');

  });


  test('First pagination button', async ({page}) => {

    await page.goto('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test');
    // Expect there to be a first page button:
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('aria-current', 'true');
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('data-offset', '0');

    await page.goto('http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test&offset=100');
    // Expect there to be a first page button:
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('aria-current', 'false');
    await expect(page.locator('a[aria-label="Page 1"]')).toHaveAttribute('data-offset', '0');


  });

  test('Interim pagination button', async ({page}) => {
    
  });

  test('Last pagination button', async ({page}) => {
    
  });


});

// // Functions to intercept our api call and deliver our mocked data:
// const searchRoute = (page, request) => {
//   page.route(
//     'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test',
//     (route) => {
//       route.fulfill({
//         status: 200,
//         body: JSON.stringify(request),
//       });
//     }
//   );
// };

// const searchRoute_serverError = (page) => {
//   page.route(
//     'http://localhost:4000/search/?utf8=%E2%9C%93&affiliate=justice-ada-beta&query=test',
//     (route) => {
//       route.fulfill({
//         status: 500,
//       });
//     }
//   );
// };
