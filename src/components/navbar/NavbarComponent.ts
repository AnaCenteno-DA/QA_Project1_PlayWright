//Código de base para la barra de navegación del sitio web
import { Page } from '@playwright/test'

export class navBar {

        readonly page: Page;
    
        constructor(page: Page) {
            this.page = page;
        }
    
        async clickLoginSection() {
             await this.page.getByTestId('nav-login-btn').click();
        }
    
}