import { test, expect } from '@playwright/test';

test('ParaBank Login Test', async ({ page }) => {
  // Navigate to the ParaBank login page
  await page.goto('https://parabank.parasoft.com/parabank/index.htm', {
    waitUntil: 'domcontentloaded',
  });

  // Fill in login credentials using reliable locators
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').fill('demo');

  // Click the "Log In" button
  await page.getByRole('button', { name: 'Log In' }).click();

  // Wait for the URL to confirm login success
  await expect(page).toHaveURL(/.*overview.htm/);

  // Take a screenshot after login
  await page.screenshot({ path: 'screenshots/login-success.png', fullPage: true });
});
