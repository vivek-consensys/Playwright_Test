import { Browser, chromium, Page } from '@playwright/test';
import { SauceDemoPage } from '../pageFactory/sauceDemoPage';

let browser: Browser;
let context;
let page: Page;
let sauceDemo: SauceDemoPage;


beforeEach(async () => {
    browser = await chromium.launch({
        headless: false
    })
    context = await browser.newContext();
    page = await context.newPage();
    sauceDemo = new SauceDemoPage(page);
})

describe('Launch Browser', () => {
    test('Open SauceDemo and Login Successfully', async () => {
        await sauceDemo.launch();
        await sauceDemo.loginSuccessfully();
        await browser.close();
    })

    test('Open SauceDemo and Login Unsuccessfully with Locked-out user', async () => {
        await sauceDemo.launch();
        await sauceDemo.loginWithLockedOutUser();
        await sauceDemo.verifyLockedOutError();
        await browser.close();
    })

    test('Open SauceDemo and Login Successfully with Problem user', async () => {
        await sauceDemo.launch();
        await sauceDemo.loginWithProblemUser();
        await browser.close();
    })

    test('Open SauceDemo and Login Successfully with Performance Glitch user', async () => {
        await sauceDemo.launch();
        await sauceDemo.loginWithPerformanceGlitchUser();
        await browser.close();
    })
})