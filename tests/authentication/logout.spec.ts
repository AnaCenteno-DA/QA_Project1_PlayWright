import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { DashboardPage } from '../../src/pages/dashboard.page';

test('Logout exitoso', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Ir al login
    await loginPage.goto();

    // Login con usuario válido
    await loginPage.login(
        'testcomprauno@yopmail.com',
        'travian88'
    );

    // Validar que estamos dentro del dashboard
    await dashboardPage.isStudentLogged();

    // Cerrar sesión
    await dashboardPage.logout();

    // Validar que regresamos al login
    await loginPage.isLoginPage();

});