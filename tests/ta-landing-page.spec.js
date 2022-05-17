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
    await page.locator('label:has-text("State and local government")').click();
    // Make sure the button is checked:
    await expect(page.isChecked('label:has-text("State and local government")')).toBeTruthy();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=true;title-iii=false;category='
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#titleTwoTag')).toBeVisible();
    // Make sure the content is filtered appropriately:
    const titleTwoResults = await page.locator('.title-ii').count();
    await expect(titleTwoResults).toBeGreaterThanOrEqual(1);

    await page.locator('label:has-text("Businesses")').click();
    // Make sure the button is checked:
    await expect(page.isChecked('label:has-text("Businesses")')).toBeTruthy();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=true;title-iii=true;category='
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#titleThreeTag')).toBeVisible();
    // Make sure the content is filtered appropriately:
    const titleThreeResults = await page.locator('.title-ii').count();
    await expect(titleThreeResults).toBeGreaterThanOrEqual(1);

    // Confirm the corresponding badge is removed when the checkbox is unchecked
    await page.locator('label:has-text("State and local government")').click();
    // Make sure the button is unchecked:
    expect(await page.isChecked('label:has-text("State and local government")')).toBeFalsy();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=false;title-iii=true;category='
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#titleTwoTag')).not.toBeVisible();

    // Confirm the corresponding badge is removed when the checkbox is unchecked
    await page.locator('label:has-text("Businesses")').click();
    // Make sure the button is checked:
    expect(await page.isChecked('label:has-text("Businesses")')).toBeFalsy();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category='
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#titleThreeTag')).not.toBeVisible();
  });

  test('Combobox tests', async ({ page }) => {
    // Confirm the combobox updates the URL with the appropriate selection
    await page.locator('[aria-label="Toggle the dropdown list"]').click();
    await page.locator('li[role="option"]:has-text("Service animals")').click();
    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category=service-animals'
    );
    // Confirm the corresponding badge appears on the page
    await expect(page.locator('#categoryTag')).toBeVisible();
    // Confirm that the badge has the appropriate category text within it:
    await expect(page.locator('#categoryTag')).toContainText('service-animal');

    // Click the combobox clear button
    await page.locator('[aria-label="Clear the select contents"]').click();

    // Confirm the badge is removed when the combobox value is cleared
    await expect(page.locator('#categoryTag')).not.toBeVisible();

    // Confirm that the URL updates in the way expected
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category='
    );
  });

  test('Badge Tests', async ({ page }) => {
    // Click the Title 2 checkbox:
    await page.locator('label:has-text("State and local government")').click();
    // Make sure the url is updated
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=true;title-iii=false;category='
    );
    // Click label:has-text("Businesses")
    await page.locator('label:has-text("Businesses")').click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=true;title-iii=true;category='
    );
    // Click [aria-label="Toggle the dropdown list"]
    await page.locator('[aria-label="Toggle the dropdown list"]').click();
    // Click li[role="option"]:has-text("Service animals")
    await page.locator('li[role="option"]:has-text("Service animals")').click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=true;title-iii=true;category=service-animals'
    );
    // Click text=X Press enter to remove State and Local government filter.
    await page.locator('text=X Press enter to remove State and Local government filter.').click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=false;title-iii=true;category=service-animals'
    );
    // Click text=X Press enter to remove Businesses filter.
    await page.locator('text=X Press enter to remove Businesses filter.').click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category=service-animals'
    );
    // Click text=X Press enter to remove service-animals filter.
    await page.locator('text=X Press enter to remove service-animals filter.').click();
    await expect(page).toHaveURL(
      'http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category='
    );
  });

  test('URL provides state', async ({ page }) => {
    // Checkboxes should not be checked initially:
    await expect(page.locator('#title-ii')).not.toBeChecked();
    await expect(page.locator('#title-iii')).not.toBeChecked();
    // Checkboxes should be checked and badges should exist:
    await page.goto('http://localhost:4000/resources/?org=title-ii=true;title-iii=true;category=');
    // Make sure the buttons are checked:
    await expect(page.isChecked('label:has-text("State and local government")')).toBeTruthy();
    await expect(page.isChecked('label:has-text("Businesses")')).toBeTruthy();
    // Check the value of the combobox (should be 'Select a Category')
    await expect(page.locator('input[role="combobox"]')).toHaveValue('Select a category');
    // Expect the checkbox badges to be visible:
    await expect(page.locator('text=X Press enter to remove State and local government filter.')).toBeVisible();
    await expect(page.locator('text=X Press enter to remove Businesses filter.')).toBeVisible();
   
    // Now lets test only the combobox:
    await page.goto('http://localhost:4000/resources/?org=title-ii=false;title-iii=false;category=service-animals');
    // Make sure the buttons are not checked:
    expect( await page.isChecked('label:has-text("State and local government")')).toBeFalsy();
    expect( await page.isChecked('label:has-text("Businesses")')).toBeFalsy();
    // Check the value of the combobox (should be 'Service animals')
    await expect(page.locator('input[role="combobox"]')).toHaveValue('Service animals');
    // Expect the checkbox badges not to be visible:
    await expect(page.locator('text=X Press enter to remove State and local government filter.')).not.toBeVisible();
    await expect(page.locator('text=X Press enter to remove Businesses filter.')).not.toBeVisible();
    // Expect the combobox badge to exist:
    await expect(page.locator('text=X Press enter to remove service-animals filter.')).toBeVisible();
  })
});
