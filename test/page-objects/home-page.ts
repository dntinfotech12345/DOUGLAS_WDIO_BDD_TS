import logger from "../helper/logger";
import { WebDriverWrapper } from "../helper/wrapper/wdio-wrapper";

export class HomePage {

    protected async getHeadingTabNameEl(tabName: string) {
        return await $(`//a[@type='nav-heading' and text()='${tabName}']`);
    };

    protected async getAcceptAllEl() {
        return await $('[data-testid="uc-accept-all-button"]');
    };

    async acceptCookies() {
        try {
            logger?.info("Waiting for 'Accept All' cookies button to be visible");
            const acceptButton = await this.getAcceptAllEl();
            await acceptButton.waitForDisplayed({ timeout: 10000 });

            logger?.info("Clicking 'Accept All' cookies button");
            await acceptButton.click();

            logger?.info("Accepted all cookies");
        } catch (error) {
            logger?.error("Failed to accept cookies via the UI. Clearing cookies programmatically.", error);

            logger?.info("Clearing cookies programmatically");
            await browser.deleteAllCookies();

            logger?.info("Cookies cleared programmatically after failure");
        }
    }

    async clickHomePageTab(tabName: string) {
        logger?.info(`Waiting for the '${tabName}' tab to be visible`);
        await browser!.waitUntil(
            async () => (await (this.getHeadingTabNameEl(tabName))).isDisplayed(),
            { timeout: 5000, timeoutMsg: `'${tabName}' tab is not visible` }
        );

        logger?.info(`Clicking the '${tabName}' tab`);
        await (await this.getHeadingTabNameEl(tabName)).click();

        logger?.info(`Navigated to the ${tabName} page`);
    }

    async getHomePageTitle(): Promise<string> {
        logger?.info("Waiting for the homepage to fully load");
        await browser!.waitUntil(async () => {
            const readyState = await browser!.execute(() => document.readyState);
            return readyState === 'complete';
        });

        logger?.info("Fetching the homepage title");
        const title = await browser!.getTitle();

        logger?.info(`Homepage title is: ${title}`);
        return title;
    }
}
