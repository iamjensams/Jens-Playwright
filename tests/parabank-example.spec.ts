import { test, expect } from '@playwright/test';
import { dir } from 'console';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').click();
  await page.locator('[id="customer.firstName"]').fill('Jen');
  await page.locator('[id="customer.firstName"]').press('Tab');
  await page.locator('[id="customer.lastName"]').fill('Samonte');
  await page.locator('[id="customer.lastName"]').press('Tab');
  await page.locator('[id="customer.address.street"]').fill('San Pedro');
  await page.locator('[id="customer.address.street"]').press('Tab');
  await page.locator('[id="customer.address.city"]').fill('Laguna');
  await page.locator('[id="customer.address.city"]').press('Tab');
  await page.locator('[id="customer.address.street"]').click();
  await page.locator('[id="customer.address.street"]').fill('Chrysvill');
  await page.locator('[id="customer.address.city"]').click();
  await page.locator('[id="customer.address.city"]').fill('San Pedro');
  await page.locator('[id="customer.address.state"]').click();
  await page.locator('[id="customer.address.state"]').fill('Laguna');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').fill('4023');
  await page.locator('[id="customer.phoneNumber"]').click();
  await page.locator('[id="customer.phoneNumber"]').fill('09157654321');
  await page.locator('[id="customer.ssn"]').click();
  await page.locator('[id="customer.ssn"]').fill('080522');
  await page.locator('[id="customer.username"]').click();
  await page.locator('[id="customer.username"]').fill('Jensam123');
  await page.locator('[id="customer.password"]').click();
  await page.locator('[id="customer.password"]').fill('Qwerty123');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('Qwerty123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.screenshot({ path: 'screenshots/after-register.png' });
  await expect(page.locator('.title')).toHaveText(/Welcome.*/);
 
});
 //await page.screenshot({ path: 'successful-login.png', fullPage: true });
  //await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/index')


