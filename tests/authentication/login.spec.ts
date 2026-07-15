//creacion de test para la pagina login
// importar librerias y la pagina de login.page.ts

import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { DashboardPage } from '../../src/pages/dashboard.page';

test('Login funciona correctamente', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Navegar a la página de login
    await loginPage.goto();

    // Iniciar sesión
    await loginPage.login(
        'testcomprauno@yopmail.com',
        'travian88'
    );

    // Validar que estamos dentro del dashboard
    await dashboardPage.isDashboardVisible();
});