const { test, expect } = require('@playwright/test');
const customExpects = require('./util/expects');
const fs = require("fs");

expect.extend(customExpects);

test(`Redirects ticketing`, async ({ page }) => {
  await expect(page).toRedirect(
    'https://www.ada.gov/_pages/redirects/ticketing/',
    'https://archive.ada.gov/ticketing/',
  );
});
