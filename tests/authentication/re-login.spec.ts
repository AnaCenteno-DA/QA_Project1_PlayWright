import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { DashboardPage } from '../../src/pages/dashboard.page';


test('Login fails with invalid credentials', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

});