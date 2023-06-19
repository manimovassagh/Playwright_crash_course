import { Page } from '@playwright/test';

export class Login {

  readonly page: Page;
 

  constructor(page: Page) {
    this.page = page;
 
  }

  async gotoLoginPage() {
    await this.page.goto('https://saucedemo.com/');
  }

  async fillCredentialAndLogin() {
    await this.page.locator('[data-test="username"]').fill("standard_user");
    await this.page.locator('[data-test="password"]').fill("secret_sauce");
    await this.page.locator('[data-test="login-button"]').click();
  }


  async performLogout(){
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }
  


}