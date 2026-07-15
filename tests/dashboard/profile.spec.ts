import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { ProfilePage } from '../../src/pages/profile.page';

test('Actualizar perfil', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const profile = new ProfilePage(page);

    // Ir al login
    await loginPage.goto();

    // Autenticarse
    await loginPage.login(
        'testcomprauno@yopmail.com',
        'travian88'
    );

    // Abrir perfil
    await profile.open();

    // Actualizar nombre
    await profile.updateName('ANA C.');

    // Validar valor actualizado
    await expect(profile.nameInput)
        .toHaveValue('ANA C.');

});