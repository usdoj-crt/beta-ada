const { test, expect } = require('@playwright/test');

const RESOURCES = 'http://localhost:4000/resources';

test.describe('TA Landing Page UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(RESOURCES);
  });

  test('Checkbox tests', async ({ page }) => {
    // Find the checkboxes and confirm they are initially unchecked
    await expect(page.locator('#title-ii')).not.toBeChecked();
    await expect(page.locator('#title-iii')).not.toBeChecked();

    // Find based on checkbox label
    await expect(page.locator('label[for="title-ii"]')).toContainText('State and local government');
    await expect(page.locator('label[for="title-iii"]')).toContainText('Businesses');

    // Check the boxes
    await page.locator('#title-ii').click();
    // Make sure the checkbox is checked:
    await expect(page.locator('#title-ii')).toBeChecked();
    // Confirm that the URL updates in the way expected
    await expect(
      page.toHaveURL('http://localhost:4000/resources/?org=title-ii=true;title-iii=false;category=')
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#titleTwoTag')).toBeVisible();
    // Make sure the content is filtered appropriately:
    await expect(page.locator('.title-ii')).toBeVisible();

    await page.locator('#title-iii').click();
    // Make sure the checkbox is checked
    await expect(page.locator('#title-iii')).toBeChecked();
    // Confirm that the URL updates in the way expected
    await expect(
      page.toHaveURL('http://localhost:4000/resources/?org=title-ii=true;title-iii=true;category=')
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#titleThreeTag')).toBeVisible();
    // Make sure the content is filtered appropriately:
    await expect(page.locator('.title-iii')).toBeVisible();

    // Confirm the corresponding badge is removed when the checkbox is unchecked
    await page.locator('#title-ii').click();
    // Make sure the checkbox is checked:
    await expect(page.locator('#title-ii')).not.toBeChecked();
    // Confirm that the URL updates in the way expected
    await expect(
      page.toHaveURL('http://localhost:4000/resources/?org=title-ii=false;title-iii=true;category=')
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#titleTwoTag')).not.toBeVisible();

    // Confirm the corresponding badge is removed when the checkbox is unchecked
    await page.locator('#title-iii').click();
    // Make sure the checkbox is checked:
    await expect(page.locator('#title-iii')).not.toBeChecked();
    // Confirm that the URL updates in the way expected
    await expect(
      page.toHaveURL(
        'http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category='
      )
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#titleThreeTag')).not.toBeVisible();
  });

  test('Combobox tests', async ({ page }) => {
    // Confirm the combobox updates the URL with the appropriate selection
    await page.selectOption('select[name="category"]', 'service-animals');
    // Confirm that the URL updates in the way expected
    await expect(
      page.toHaveURL(
        'http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category=service-animals'
      )
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#categoryTag')).toBeVisible();
    // Confirm that the badge has the appropriate category text within it:
    await expect(page.locator('#categoryTag')).toContainText('service-animal');

    // Click the combobox clear button
    await page.locator('button[aria-label="Clear the select contents"]').click();

    // Confirm the badge is removed when the combobox value is cleared
    await expect(page.locator('#categoryTag')).not.toBeVisible();

    // Confirm that the URL updates in the way expected
    await expect(
      page.toHaveURL(
        'http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category='
      )
    );
  });

  //test('Badge Tests', async ({ page }) => {
    // Check both checkboxes
    // Select a value from the combobox
    // Find the close button on the badge by visible text
    // Find the close button on the badge by the aria label
    // Click the close button
    // Check the value of the checkboxes and combobox
    // Confirm the url is correct
    // After each badge is removed, check the filtered page content
  //});
});
