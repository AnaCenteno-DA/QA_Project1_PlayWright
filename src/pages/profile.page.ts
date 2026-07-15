import { Page, Locator, expect } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;

  readonly nameInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.nameInput = page.locator('input[placeholder="Tu nombre completo"]');
    this.saveButton = page.getByRole('button', { name: 'Guardar cambios' });
  }

 async open() {
    await this.page.goto('https://staging.testertestarudo.com/es/profile');

    await this.page.waitForLoadState('networkidle');


}
 

  async updateName(name: string) {
    await expect(this.nameInput).toBeVisible({ timeout: 10000 });

    await this.nameInput.fill(name);
    await this.saveButton.click();
  }

  async isProfilePage() {
    await expect(this.page).toHaveURL(/profile/);
  }
}