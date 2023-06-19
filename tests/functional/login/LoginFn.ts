import { Page } from "@playwright/test";

export const LoginFunctional = async (page: Page) => {

    await page.goto('https://saucedemo.com/');

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();



}