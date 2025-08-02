const { chromium } = require('playwright');

(async () => {
  // 1. Launch browser and context
  const browser = await chromium.launch({ headless: false }); // show the browser
  const context = await browser.newContext();
  const page = await context.newPage();

  // 2. Navigate to Swag Labs
  //await page.goto('https://www.saucedemo.com');
  await page.goto('https://saucedemo.com', { waitUntil: 'domcontentloaded' });


  // 3. Fill in login form (use the credentials from the site):contentReference[oaicite:20]{index=20}
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 4. Verify successful login: check the URL or page title
  await page.waitForSelector('.inventory_list'); 
  console.log('Login successful, inventory displayed.');

  await browser.close();
})();