import { test, expect } from '@playwright/test';



test('login to saucedemo website and buy some articles from that', async ({ page }) => {
  //go to sauce demo page
  await page.goto('https://saucedemo.com/');

  //check if the page is saucedemo
  await expect(page).toHaveTitle(/Swag Labs/);
  await expect(page).toHaveURL("https://www.saucedemo.com/")

  //login as standard user
  const standardUserName = "standard_user"
  const standardPassword = "secret_sauce"


  //fillup username and password
  await page.locator('[data-test="username"]').fill(standardUserName);
  await page.locator('[data-test="password"]').fill(standardPassword);
  await page.locator('[data-test="login-button"]').click();


  await page.locator('#item_2_title_link').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();



  //go to shopping basket to finish purchase
  await page.locator('a').filter({ hasText: '1' }).click();


  //checkout
  await page.locator('[data-test="checkout"]').click();


  //fillup checkout form
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('mani');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('movassagh');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('55129');


  //finalize and go back to main page
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();



  //logout from website
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();


});