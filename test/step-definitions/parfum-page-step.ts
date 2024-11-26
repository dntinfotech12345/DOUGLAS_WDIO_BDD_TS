import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { HomePage } from '../page-objects/home-page';
import { ParfumPage } from '../page-objects/parfum-page';
import { Assert } from '../helper/wrapper/assertions';
import data from '../test-data/douglasPage.json'
import { config } from '../../config/wdio.test.conf';
import logger from '../helper/logger';

let homePage: HomePage;
let parfumPage: ParfumPage;
let assert: Assert;
setDefaultTimeout(60 * 1000 * 5);

Given('User navigates to the application', async function () {
    homePage = new HomePage();
    parfumPage = new ParfumPage();
    assert = new Assert();

    await browser.maximizeWindow();
    await browser.url(config.douglasURL);
    console.log('Navigated to URL:', config.douglasURL);

    logger.info('Validating the home page URL contains dashboard identifier');
    await assert.assertURLContains(data.homePage.dashboardUrl);

    logger.info('Accepting cookies if the popup appears');
    await homePage.acceptCookies();
});

When('User click on {string} tab', async function (tabName: string) {
    logger.info(`Verifying that the page title contains: ${data.homePage.title}`);
    await assert.assertTitleContains(data.homePage.title);

    logger.info(`Clicking on the ${tabName} tab`);
    await homePage.clickHomePageTab(tabName);
});

Then('Verify user on the parfum page', async function () {
    logger.info('Verifying that the user is on the Parfum page');
    await assert.assertURLContains(data.parfumPage.parfumPageUrl);

    logger.info('Validating the title of the Parfum page');
    await assert.assertTitle(data.parfumPage.title);
});

When('I select the {string} dropdown', async function (dropdownOption: string) {
    logger.info(`Selecting the dropdown option: ${dropdownOption}`);
    await parfumPage.selectParfumPageDropdown(dropdownOption);
});

Then('I select the {string} filter option from the dropdown', async function (filterOption: string) {
    logger.info(`Selecting the filter option: ${filterOption}`);
    await parfumPage.selectDropdownOption(filterOption);
});

Then('Verify the {string} filter is applied', async function (filterText: string) {
    logger.info(`Verifying that the filter '${filterText}' is applied`);
    await parfumPage.getTheFilterTextAndVerify(filterText);

    logger.info(`Ensuring the filter '${filterText}' persists across all pages`);
    await parfumPage.verifyTheFilterTagAcrossPages(filterText);
});
