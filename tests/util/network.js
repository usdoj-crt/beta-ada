const JEKYLL = 'http://localhost:4000';
const PROD = 'https://www.ada.gov';

const CHECK_EXTERNAL_LINKS = process.env.CHECK_EXTERNAL_LINKS?.toLowerCase() === 'true';

/** Prevents tests from making http requests outside of the local machine.
 *
 * Useful for running automated tests many times, or in a github action where
 * accidental networking or redirects can make unnecessary extra load on
 * production services.
 */
export async function restrictToLocalhost(page, options) {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith('http://localhost:')) return route.continue();
    if (url.startsWith(PROD)) {
      // Force requests to prod to use localhost instead.
      return route.fulfill({
        status: 301,
        headers: {
          Location: url.replace(PROD, JEKYLL),
        },
      });
    }
    // This is an external (non-local, non-prod) link, such as:
    // - archive.ada.gov
    // - justice.gov
    // - etc
    // Only make HEAD requests to external links, to avoid DDoSing.
    if (CHECK_EXTERNAL_LINKS) return route.continue({method: 'HEAD'});
    // Block any other requests (e.g., to archive.ada.gov).
    return route.abort('blockedbyclient');
  });
}
