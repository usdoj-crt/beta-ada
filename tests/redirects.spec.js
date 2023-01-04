const { test, expect } = require('@playwright/test');
const customExpects = require('./util/expects');
const fs = require('fs');
const matter = require('gray-matter');

expect.extend(customExpects);

function readMarkdownRedirect(mdPath) {
  const frontmatter = matter(fs.readFileSync(mdPath).toString());
  const from = frontmatter.data['redirect_from'];
  const to = frontmatter.data['redirect_to'];
  if (!from || !to) {
    console.error(frontmatter);
    throw new Error(`Missing from/to in frontmatter of ${mdPath}`);
  }
  return {
    to,
    from: Array.isArray(from) ? from : [from],
    sitemap: frontmatter.data['sitemap'] ?? true,
  }
}

test.describe.configure({mode: 'parallel'});

const MARKDOWN_REDIRECTS_DIR = './_pages/redirects/';
test.describe('Redirects', () => {
  const paths = fs.readdirSync(MARKDOWN_REDIRECTS_DIR)
  if (paths.length === 0) {
    throw new Error(`No redirects found in ${MARKDOWN_REDIRECTS_DIR}`);
  }
  for (const path of paths) {
    test(path, async ({ page }) => {
      const frontmatter = readMarkdownRedirect(MARKDOWN_REDIRECTS_DIR + path);
      expect(frontmatter['sitemap']).toEqual(false);
      for (const from of frontmatter['from']) {
        await expect(page).toRedirect(from, frontmatter['to']);
      }
    });
  }
});
