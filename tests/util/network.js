const LOCALHOST = 'http://localhost:4000';
const PROD = 'https://www.ada.gov';

/** Prevents tests from making http requests outside of the local machine.
 *
 * Useful for running automated tests many times, or in a github action where
 * accidental networking or redirects can make unnecessary extra load on
 * production services.
 */
export async function restrictToLocalhost(page) {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith(PROD)) {
      // Force requests to prod to use localhost instead.
      return route.fulfill({
        status: 301,
        headers: {
          Location: url.replace(PROD, LOCALHOST),
        },
      });
    }
    // Block any other requests (e.g., to archive.ada.gov).
    if (!url.startsWith(LOCALHOST)) {
      return route.abort('blockedbyclient');
    }
    return route.continue();
  });
}
