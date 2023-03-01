const { test, expect } = require('@playwright/test');

const RESOURCES = 'http://localhost:4000/resources';

test.describe('TA Landing Page UI Tests', () => {
  test('Checkbox tests', async ({ page }) => {
    await page.goto(RESOURCES)
    // Find the checkboxes and confirm they are initially unchecked
    await expect(page.locator('#title-ii')).not.toBeChecked();
    await expect(page.locator('#title-iii')).not.toBeChecked();

    // Find based on checkbox label
    await expect(page.locator('label[for="title-ii"]')).toContainText('State and local government');
    await expect(page.locator('label[for="title-iii"]')).toContainText('Businesses');

    // Check the boxes
    await page.locator('label:has-text("State and local government")').click();
    // Make sure the button is checked:
    await expect(page.isChecked('label:has-text("State and local government")')).toBeTruthy();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=title-ii'
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#title-ii-badge')).toBeVisible();
    // Make sure the content is filtered appropriately:
    const titleTwoResults = await page.locator('.visibilityTarget:visible').count();
    await expect(titleTwoResults).toBeGreaterThanOrEqual(3);

    await page.locator('label:has-text("Businesses")').click();
    // Make sure the button is checked:
    await expect(page.isChecked('label:has-text("Businesses")')).toBeTruthy();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=title-ii;title-iii'
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#title-iii-badge')).toBeVisible();
    // Make sure the content is filtered appropriately:
    const titleThreeResults = await page.locator('.visibilityTarget:visible').count();
    await expect(titleThreeResults).toBeGreaterThanOrEqual(2);

    // Confirm the corresponding badge is removed when the checkbox is unchecked
    await page.locator('label:has-text("State and local government")').click();
    // Make sure the button is unchecked:
    expect(await page.isChecked('label:has-text("State and local government")')).toBeFalsy();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=title-iii'
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#title-ii-badge')).not.toBeVisible();

    // Confirm the corresponding badge is removed when the checkbox is unchecked
    await page.locator('label:has-text("Businesses")').click();
    // Make sure the button is checked:
    expect(await page.isChecked('label:has-text("Businesses")')).toBeFalsy();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters='
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#title-iii-badge')).not.toBeVisible();
  });

  test('Combobox tests', async ({ page }) => {
    await page.goto(RESOURCES)
    // Confirm the combobox updates the URL with the appropriate selection
    await page.locator('span:has-text("Select a category")').click();
    await page.locator('label:has-text("Service animals")').click();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=service-animals'
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#service-animals-badge')).toBeVisible();
    // Make sure the content is filtered appropriately:
    const serviceAnimalResults = await page.locator('.visibilityTarget:visible').count();
    await expect(serviceAnimalResults).toBeGreaterThanOrEqual(2);

    // Add another badge and confirm that filtering is exclusive:
    await page.locator('label:has-text("Web access")').click();
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#web-access-badge')).toBeVisible();
    // Make sure the content is filtered appropriately:
    const serviceAnimalAndWebAccessResults = await page.locator('.visibilityTarget:visible').count();
    await expect(serviceAnimalAndWebAccessResults).toBe(0);
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=service-animals;web-access'
    );
  });

  test('Badge Tests', async ({ page }) => {
    await page.goto(RESOURCES)
    // Click the Title 2 checkbox:
    await page.locator('label:has-text("State and local government")').click();
    // Make sure the url is updated
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=title-ii'
    );
    // Click label:has-text("Businesses")
    await page.locator('label:has-text("Businesses")').click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=title-ii;title-iii'
    );
    // Click [aria-label="Toggle the dropdown list"]
    await page.locator('span:has-text("Select a category")').click();
    // Click li[role="option"]:has-text("Service animals")
    await page.locator('label:has-text("Service animals")').click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=title-ii;title-iii;service-animals'
    );
    // Click text=X Press enter to remove State and Local government filter.
    await page.locator("button:has-text('Press enter to remove State and local government filter.')").click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=title-iii;service-animals'
    );
    // Click text=X Press enter to remove Businesses filter.
    await page.locator('button:has-text("Press enter to remove Businesses filter.")').click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters=service-animals'
    );
    // Click text=X Press enter to remove service-animals filter.
    await page.locator("button:has-text('Press enter to remove service animals filter.')").click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?filters='
    );
  });

  test('URL provides state for checkboxes', async ({ page }) => {
    await page.goto('http://localhost:4000/resources/?filters=title-ii;title-iii;service-animals');
    // Make sure the buttons are checked:
    await expect(page.isChecked('label:has-text("State and local government")')).toBeTruthy();
    await expect(page.isChecked('label:has-text("Businesses")')).toBeTruthy();
    // Check the value of the combobox (should be 'Select a Category')
    await expect(page.locator('span:has-text("Select a category")')).toBeVisible();
    // Expect the checkbox badges to be visible:
    await expect(page.locator('button:has-text("Press enter to remove State and local government filter.")')).toBeVisible();
    await expect(page.locator('button:has-text("Press enter to remove Businesses filter.")')).toBeVisible();
    // Check the value of the combobox (should be 'Service animals')
    await expect(page.isChecked('label:has-text("Service animals")')).toBeTruthy();
    // Expect the combobox badge to exist:
    await expect(page.locator('button:has-text("Press enter to remove service animals filter.")')).toBeVisible();
  })
});
