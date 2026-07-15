import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { DashboardPage } from '../../src/pages/dashboard.page';

test('Validar dashboard cargado', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  // ir a login
  await login.goto();

  // login válido
  await login.login('testcomprauno@yopmail.com', 'travian88');

  // validar dashboard según tipo de usuario
  await dashboard.isStudentLogged();

  // opcional: validar elemento del dashboard
  await dashboard.isStudentPanel();
});