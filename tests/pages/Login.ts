import { Page } from '@playwright/test';

export class Login {

  readonly page: Page;


  constructor(page: Page) {
    this.page = page;

  }

  async gotoLoginPage(): Promise<void> {
    await this.page.goto('https://saucedemo.com/');
  }

  async fillCredentialAndLogin(): Promise<void> {
    await this.page.locator('[data-test="username"]').fill("standard_user");
    await this.page.locator('[data-test="password"]').fill("secret_sauce");
    await this.page.locator('[data-test="login-button"]').click();
  }

  //all in one step
  async goToLoginAndLog(): Promise<void> {
    this.gotoLoginPage()
    this.fillCredentialAndLogin()
  }

  async performLogout(): Promise<void> {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }



}