//Código de base para el manejo de los cookies ventana de inicio en el sitio web

import { Page } from '@playwright/test'
 

export class Cookies {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickAcceptCookies() {
        await this.page.getByTestId('cookie-accept-all').click();
    }

}