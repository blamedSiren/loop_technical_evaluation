import {Page, expect} from '@playwright/test';
export class LoginPage {
    constructor(private page: Page){}

    async login(email: string, password: string){
        await this.page.goto('https://create-asana-like-pr-39y5.bolt.host/');
        await this.page.getByPlaceholder(/email|username/i).or(this.page.getByLabel(/email|username/i)).first().fill(email);
        await this.page.getByPlaceholder(/password/i).or(this.page.getByLabel(/password/i)).first().fill(password);
        await this.page.getByRole('button', {name: /sign in|log in|login/i}).click()
        await expect(this.page.getByPlaceholder(/password/i)).toBeHidden();
    }
}