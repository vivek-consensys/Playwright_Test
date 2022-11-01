import { chromium } from '@playwright/test';
describe('Launch Browser', () => {
    test('Open EducationDAO', async () => {
        const browser = await chromium.launch({
            headless: false,
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://dev.education-dao.org/');
        await page.fill("//input[@name='password']", 'afRW47A*97$J');
        await page.click('"Confirm"');
        await browser.close();
    })
})