/** Prevents tests from making http requests outside of the local machine.
 *
 * Useful for running automated tests many times, or in a github action where
 * accidental networking or redirects can make unnecessary extra load on
 * production services.
 */
export async function restrictToLocalhost(page) {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (!url.startsWith('http://localhost')) {
      return route.abort('blockedbyclient');
    }
    return route.continue();
  });
}
