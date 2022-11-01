import { chromium } from '@playwright/test';
describe('Launch Browser', () => {
    test('Open DGLD', async () => {
        const browser = await chromium.launch({
            headless: false,
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://staging-admin.dgld.ch/');
        await page.click("button");
        await page.fill("//input[@name='username']", 'nikokodjabashev@abv.bg');
        await page.fill("//input[@name='password']", 'Test124!');
        await page.click('"Continue"');
        await browser.close();
    })
})