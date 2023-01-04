const { restrictToLocalhost } = require('./network');

const CHECK_EXTERNAL_LINKS = process.env.CHECK_EXTERNAL_LINKS?.toLowerCase() === 'true';

function normalizeRedirect(url) {
  return url
    .replace('index.html', '')
    .replace(' ', '%20')
    .replace(/\/$/, '');
}

export async function toRedirect(page, from, to) {
  restrictToLocalhost(page);

  let success = true;
  let status = 416;
  let errorText = "requestfailed wasn't called";
  let attemptedUrl;

  page.on('requestfailed', request => {
    success = false;
    errorText = request.failure().errorText;
    attemptedUrl = request.url();
  });

  page.on('response', response => {
    if (normalizeRedirect(response.url()) !== to) return;
    status = response.status();
  });

  page.on('load', page => {
    if (!success) return;
    attemptedUrl = page.url();
  });

  const response = await page.goto(from);

  // Confirm this failed because we're blocking external urls to avoid making
  // 900 requests to prod, and not because of an unexpected reason.
  if (!success && !errorText.includes('net::ERR_BLOCKED_BY_CLIENT')) {
    return {
      message: () => `The redirect failed for an unexpected reason: ${errorText}`,
      pass: false,
    };
  }

  if (normalizeRedirect(attemptedUrl) !== normalizeRedirect(to)) {
    return {
      message: () => `Expected ${from} to redirect to ${to}, but was ${attemptedUrl}`,
      pass: false,
    };
  }

  if (success && status !== 200) {
    return {
      message: () => `Status ${status} redirecting from ${from} to ${to}`,
      pass: false,
    }
  }

  return { pass: true };
}
