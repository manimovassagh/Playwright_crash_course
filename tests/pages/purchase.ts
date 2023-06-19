import { Page, expect } from '@playwright/test';
export class Purchase {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoPurachseAndBuy(){
    await this.page.locator('#item_0_title_link').click();
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await this.page.locator('a').filter({ hasText: '1' }).click();
    await this.page.locator('[data-test="checkout"]').click();
    await this.page.locator('[data-test="firstName"]').click();
    await this.page.locator('[data-test="firstName"]').fill('mani');
    await this.page.locator('[data-test="firstName"]').press('Tab');
    await this.page.locator('[data-test="lastName"]').click();
    await this.page.locator('[data-test="lastName"]').fill('movassagh');
    await this.page.locator('[data-test="postalCode"]').click();
    await this.page.locator('[data-test="postalCode"]').fill('66666');
    await this.page.locator('[data-test="continue"]').click();
    await this.page.locator('[data-test="finish"]').click();
  
    }





}