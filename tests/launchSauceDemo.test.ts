import { chromium } from '@playwright/test';
import { SauceDemoPage } from '../pageFactory/sauceDemoPage';

describe('Launch Browser', () => {
    test('Open SauceDemo and Login Successfully', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.launch();
        await sauceDemo.loginSuccessfully();
        await browser.close();
    })

    test('Open SauceDemo and Login Unsuccessfully with Locked-out user', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.launch();
        await sauceDemo.loginWithLockedOutUser();
        await sauceDemo.verifyLockedOutError();
        await browser.close();
    })

    test('Open SauceDemo and Login Successfully with Problem user', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.launch();
        await sauceDemo.loginWithProblemUser();
        await browser.close();
    })

    test('Open SauceDemo and Login Successfully with Performance Glitch user', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        const sauceDemo = new SauceDemoPage(page);
        await sauceDemo.launch();
        await sauceDemo.loginWithPerformanceGlitchUser();
        await browser.close();
    })
})