import { chromium, expect, Locator, Page } from '@playwright/test';
import { testConfig } from '../testConfig';

export class SauceDemoPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly lockedOutError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@id='user-name']");
    this.passwordInput = page.locator("//input[@id='password']");
    this.loginBtn = page.locator("//input[@id='login-button']");
    this.lockedOutError = page.locator("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out.')]");
  }

  async launch() {
    await this.page.goto(testConfig.url);
  }

  async loginSuccessfully() {
    await this.usernameInput.fill(testConfig.successfulUsername);
    await this.passwordInput.fill(testConfig.password);
    await expect(this.loginBtn).toBeVisible();
    await this.loginBtn.click();
  }

  async loginWithLockedOutUser() {
    await this.usernameInput.fill(testConfig.lockedOutUsername);
    await this.passwordInput.fill(testConfig.password);
    await this.loginBtn.click();
  }

  async verifyLockedOutError() {
    await expect(this.lockedOutError).toBeVisible();
  }

  async loginWithProblemUser() {
    await this.usernameInput.fill(testConfig.problemUsername);
    await this.passwordInput.fill(testConfig.password);
    await expect(this.loginBtn).toBeVisible();
    await this.loginBtn.click();
  }

  async loginWithPerformanceGlitchUser() {
    await this.usernameInput.fill(testConfig.performanceGlitchUsername);
    await this.passwordInput.fill(testConfig.password);
    await expect(this.loginBtn).toBeVisible();
    await this.loginBtn.click();
  }
}