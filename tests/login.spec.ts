import { test, expect } from './fixtures/baseFixture';

test('Login with valid credentials using POM', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoginSuccess();
});
