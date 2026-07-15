import { test } from '@playwright/test';
import { CookiesPage } from '../../src/pages/cookies.page';

test('Cookies modal disappears after acceptance', async ({ page }) => {

  const cookies = new CookiesPage(page);

  await page.goto('https://staging.testertestarudo.com/es/login');

  await cookies.clickAcceptCookies();

  await cookies.isCookiesHidden();

});