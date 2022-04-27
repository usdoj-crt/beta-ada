// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();


/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry twice on CI and once on dev */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  testIgnore: '**/ignore*',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:4000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Since we're running locally, let's ignore HTTPS errors:*/
    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  // This will be configured on a test-by-test basis, so some of this will be overwritten locally
   projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      testIgnore: [/.*mobile.spec.js/, '**/ignore*'],
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
      testIgnore: [/.*mobile.spec.js/, '**/ignore*'],
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
      testIgnore: [/.*mobile.spec.js/, '**/ignore*'],
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
      testIgnore: [/.*desktop.spec.js/, '**/ignore*'],
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
      testIgnore: [/.*desktop.spec.js/, '**/ignore*'],
    },
   ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
   outputDir: './test-results/',
};

module.exports = config;
