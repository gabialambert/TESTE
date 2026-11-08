const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {

    // Acessa a página de login
    await page.goto('https://www.blazedemo.com/login');

    // Preenche o e-mail
    await page.locator('input[type="email"]').fill('gabi@teste.com');

    // Preenche a senha
    await page.locator('input[type="password"]').fill('Senha123');

    // Clica no botão Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Valida a mensagem de erro
    await expect(
        page.getByText('419 Page Expired', { exact: true })
    ).toBeVisible();

});