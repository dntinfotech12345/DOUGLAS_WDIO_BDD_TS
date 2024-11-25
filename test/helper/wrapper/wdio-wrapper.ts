import { Browser } from 'webdriverio';

export class WebDriverWrapper {
    constructor(private browser: Browser<'async'>) {}

    public async goto(url: string) {
        await browser.url(url);
        // Wait for DOM content to load (default WebDriverIO behavior)
        await browser.waitUntil(async () => {
            const readyState = await browser.execute(() => document.readyState);
            return readyState === 'complete' || readyState === 'interactive';
        });
    }

    public async waitAndClick(locator: string) {
        const element = await browser.$(locator);
        await element.waitForDisplayed();
        await element.click();
    }

    public async navigateTo(link: string) {
        const element = await browser.$(link);
        await Promise.all([
            element.click(),
            browser.waitUntil(async () => {
                const readyState = await browser.execute(() => document.readyState);
                return readyState === 'complete';
            }),
        ]);
    }

    public async fillInput(locator: string, text: string) {
        const element = await browser.$(locator);
        await element.waitForDisplayed();
        await element.setValue(text);
    }

    public async getText(locator: string): Promise<string> {
        const element = await browser.$(locator);
        await element.waitForDisplayed();
        return await element.getText();
    }

    public async isVisible(locator: string): Promise<boolean> {
        const element = await browser.$(locator);
        return await element.isDisplayed();
    }

    public async waitForElementToBeHidden(locator: string) {
        const element = await browser.$(locator);
        await element.waitForDisplayed({ reverse: true });
    }
}
