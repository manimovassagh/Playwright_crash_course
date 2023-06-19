import { test, expect } from '@playwright/test';
import { Login } from './pages/Login';
import { Purchase } from './pages/purchase';


test('login to saucedemo website and buy some articles from that', async ({ page }) => {

  const login = new Login(page);
  const purchase = new Purchase(page)


  await login.gotoLoginPage()
  await login.fillCredentialAndLogin()
  await purchase.gotoPurachseAndBuy()

});