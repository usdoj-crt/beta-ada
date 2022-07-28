const { test, expect } = require('@playwright/test');

const HOME = 'http://localhost:4000/';
const LINKS = [
  'Home',
  'Explore Featured Topics',
  'Explore Topics',
  'Review Laws, Regulations & Standards',
  'Review Laws & Regulations',
  'File a Complaint',
  'View Guidance & Resource Materials',
  'View Resources'
];
const INFOLINE = 'ADA Information Line';

test.describe('Mobile Menu tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(HOME);
    // Open the main menu:
    await page.locator('button:has-text("Menu")').click();
  });

  test('Close the menu', async ({ page }) => {
    // Close the main menu:
    await page.locator('button:has(img[alt="close menu"])').click();
  });

  test('Find each link in the menu', async ({ page }) => {
    const pageLinks = page.locator('ul.usa-nav__primary');
    await expect(pageLinks).toContainText([
      LINKS[0],
      LINKS[1],
      LINKS[2],
      LINKS[3],
      LINKS[4],
      LINKS[5],
      LINKS[6],
      LINKS[7],
    ]);
  });

  test('Find the information line in the menu', async ({ page }) => {
    await expect(page.locator('nav.usa-nav')).toContainText(INFOLINE);
  });

  test('Make sure items outside the nav are hidden', async ({ page }) => {
    // Main content should not receive focus
    await expect(page.locator('main')).toHaveAttribute('aria-hidden', 'true');
    // Footer should not receive focus
    await expect(page.locator('footer')).toHaveAttribute('aria-hidden', 'true');
    // Skip to main content button should not receive focus
    await expect(page.locator('a.usa-skipnav')).toHaveAttribute('aria-hidden', 'true');
    // Banners should not receive focus
    await expect(page.locator('section[aria-label="Official Goverment Website"]')).toHaveAttribute('aria-hidden', 'true');
    await expect(page.locator('section[aria-label="Beta Site"]')).toHaveAttribute('aria-hidden', 'true');
  });
});
