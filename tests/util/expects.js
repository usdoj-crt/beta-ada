const { restrictToLocalhost } = require('./network');

export async function toRedirect(page, from, to) {
  restrictToLocalhost(page);

  let errorText = "requestfailed wasn't called";
  let attemptedUrl;
  page.on('requestfailed', request => {
    errorText = request.failure().errorText;
    attemptedUrl = request.url();
  });

  await page.goto(from);

  // Confirm this failed because we're blocking external urls to avoid making
  // 900 requests to prod, and not because of an unexpected reason.
  if (errorText !== 'net::ERR_BLOCKED_BY_CLIENT') {
    return {
      message: () => `The redirect failed for an unexpected reason: ${errorText}`,
      pass: false,
    };
  }

  if (attemptedUrl !== to) {
    return {
      message: () => `Expected ${from} to redirect to ${to}, but was ${attemptedUrl}`,
      pass: false,
    };
  }

  return { pass: true };
}
