import { Page } from "@playwright/test";


export const PurchaseAndLogout = async (page: Page) => {

    await page.locator('#item_0_title_link').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('a').filter({ hasText: '1' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('mani');
    await page.locator('[data-test="firstName"]').press('Tab');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('movassagh');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('66666');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
}