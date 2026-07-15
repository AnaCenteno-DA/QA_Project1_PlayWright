import { Page, Locator, expect } from '@playwright/test';

export class CookiesPage {
  readonly page: Page;

  readonly acceptButton: Locator;
  readonly banner: Locator;

  constructor(page: Page) {
    this.page = page;

    this.acceptButton = page.locator('button').filter({ hasText: /accept|aceptar/i });
    this.banner = page.locator('#cookies, .cookies, [role="dialog"]');
  }

  async clickAcceptCookies() {
    await this.acceptButton.waitFor({ state: 'visible' });
    await this.acceptButton.click();
  }

  async isCookiesHidden() {
    await expect(this.banner).toBeHidden();
  }
}