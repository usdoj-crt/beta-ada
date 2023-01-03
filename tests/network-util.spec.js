const { test, expect } = require('@playwright/test');
const { restrictToLocalhost } = require('./util/network');

test('Allows localhost requests', async ({ page }) => {
  restrictToLocalhost(page);

  await page.goto('http://localhost:4000');
  await expect(page.locator('body')).toContainText('ADA.gov');
});

test('Allows relative URL requests', async ({ page }) => {
  restrictToLocalhost(page);

  await page.goto('/topics/');
  await expect(page.locator('body')).toContainText('ADA.gov');
});

test('Disallows external requests', async ({ page }) => {
  restrictToLocalhost(page);

  let failure = undefined;
  page.on('requestfailed', request => {
    failure = request.failure().errorText;
  });
  await page.evaluate(() => {
    window.location.href = 'https://archive.ada.gov'
  });

  expect(failure).toEqual('net::ERR_BLOCKED_BY_CLIENT');
});
