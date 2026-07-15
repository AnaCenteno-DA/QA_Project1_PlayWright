//Código base del page para manejar los elementos del Login en el sitio web
// Se importa Page y Locator desde Playwright
// src/pages/login.page.ts

import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Contraseña' });
    this.loginButton = page.getByRole('button', { name: 'Ingresar' });
  }

  async goto() {
    await this.page.goto('https://staging.testertestarudo.com/es/login');
  }

 async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    
    await this.loginButton.click();

    await this.page.waitForURL(/dashboard|admin/, { timeout: 10000 });
}

async isLoginPage() {
    await expect(this.page).toHaveURL(/login/);
}

}