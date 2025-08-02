// tests/login.spec.ts
import { test, expect } from '../fixtures/baseFixture';

test('Login and check inventory page', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const productNames = await inventoryPage.getProductNames();
  expect(productNames.length).toBeGreaterThan(0);
  console.log('Products:', productNames);
});
