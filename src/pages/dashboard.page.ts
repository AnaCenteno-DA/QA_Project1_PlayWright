//Código base del page para manejar los elementos del dashboard en el sitio web

import { expect, Page } from '@playwright/test';
//import { DashboardPage } from '../src/pages/dashboard.page';

export class DashboardPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

      async isAdminLogged() {
        await expect(this.page)
            .toHaveURL('https://staging.testertestarudo.com/es/admin');
    }

    async isStudentLogged() {
        await expect(this.page)
            .toHaveURL('https://staging.testertestarudo.com/es/dashboard');
    }

    async isDashboardVisible() {
        await expect(
            this.page.getByRole('heading', { name: 'Mi Panel' })
        ).toBeVisible();
    }

    async isAdminPanel() {
        await expect(
            this.page.getByRole('heading', { name: 'Panel de administración' })
        ).toBeVisible();
    }

    async isStudentPanel() {
        await expect(
            this.page.getByRole('heading', { name: 'Mi Panel' })
        ).toBeVisible();
    }

    async logout() {
        await this.page
            .getByRole('button', { name: /Dashboard/i })
            .click();

        await this.page.getByText('Cerrar sesión').click();
    }
}