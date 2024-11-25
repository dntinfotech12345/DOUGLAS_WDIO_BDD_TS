import { fixture } from "../helper/wrapper/page-fixture";
import { WebDriverWrapper } from "../helper/wrapper/wdio-wrapper";


export class ParfumPage {
    private base: WebDriverWrapper;

    constructor() {
        this.base = new WebDriverWrapper(fixture.browser!);
    }

    private Elements = {
        parfumPageDropdown: (dropdownOption: string) => `//div[@class='facet__title' and text()= '${dropdownOption}']`,
        highlightFilterOption: (filterOption: string) => `//div[@class='facet-option__label']//div[text()='${filterOption}']`,
        searchBar: "//input[@data-testid='typeAhead-input']",
        filterTag: (filterTag: string) => `//div[contains(@data-testid,'product-eyecatcher') and text()='${filterTag}']`,
        appliedFilters: "//button[@class='selected-facets__value']",
        pageInfoLocator: "//div[@data-testid='pagination-title-dropdown']",
        nextPageArrow: "//a[@data-testid='pagination-arrow-right']",
    };

    async getParfumPageTitle(): Promise<string> {
        fixture.logger?.info("Waiting for the parfum page to fully load");
        await fixture.browser!.waitUntil(async () => {
            const readyState = await fixture.browser!.execute(() => document.readyState);
            return readyState === 'complete';
        });

        fixture.logger?.info("Fetching the parfum page title");
        const title = await fixture.browser!.getTitle();

        fixture.logger?.info(`Parfum page title is: ${title}`);
        return title;
    }

    async selectParfumPageDropdown(filterOption: string) {
        fixture.logger?.info("Hovering over the search bar to ensure dropdown visibility");
        const searchBar = await $(this.Elements.searchBar);
        await searchBar.moveTo();

        fixture.logger?.info(`Selecting dropdown filter option: ${filterOption}`);
        const dropdownLocator = this.Elements.parfumPageDropdown(filterOption);
        await this.base.waitAndClick(dropdownLocator);

        fixture.logger?.info(`Dropdown filter option '${filterOption}' selected`);
    }

    async selectDropdownOption(filterOption: string) {
        fixture.logger?.info(`Selecting filter option: ${filterOption} from the dropdown`);
        const filterOpt = this.Elements.highlightFilterOption(filterOption);
        await this.base.waitAndClick(filterOpt);

        fixture.logger?.info(`Filter option '${filterOption}' selected`);
    }

    async getTheFilterTextAndVerify(actualFilterText: string) {
        const filters = await browser.$$(this.Elements.appliedFilters);

        fixture.logger?.info("Fetching applied filter texts");
        const filterTexts: string[] = await Promise.all(
            filters.map(async (filter) => (await filter.getText()).trim())
        );

        fixture.logger?.info("Verifying the applied filter text");
        expect(filterTexts).toContain(actualFilterText);
    }

    async verifyTheFilterTagAcrossPages(actualFilterText: string) {
        let currentPage = 1;
        let totalPages = 1;

        fixture.logger?.info("Fetching pagination details");
        const pageInfo = await browser.$(this.Elements.pageInfoLocator);
        const pageInfoText = await pageInfo.getText();

        if (pageInfoText) {
            const match = pageInfoText.match(/Seite (\d+) von (\d+)/);
            if (match) {
                currentPage = parseInt(match[1]);
                totalPages = parseInt(match[2]);
            }
        }

        fixture.logger?.info(`Total pages to validate: ${totalPages}`);

        while (currentPage <= totalPages) {
            fixture.logger?.info(`Validating filter tag on page ${currentPage} of ${totalPages}`);
            const filters = await browser.$$(this.Elements.filterTag(actualFilterText));

            const filterTexts: string[] = await Promise.all(
                filters.map(async (filter) => (await filter.getText()).trim())
            );

            fixture.logger?.info(`Verifying if the applied filters contain: '${actualFilterText}'`);
            expect(filterTexts).toContain(actualFilterText.toUpperCase());
            fixture.logger?.info("Filter verification successful on this page");

            if (currentPage < totalPages) {
                fixture.logger?.info(`Navigating to page ${currentPage + 1}`);
                const nextPageButton = await browser.$(this.Elements.nextPageArrow);
                if (await nextPageButton.isDisplayed()) {
                    await nextPageButton.click();
                    await browser.pause(2000); // Small pause for the new page to load
                    currentPage++;
                } else {
                    fixture.logger?.error("Next page button not found, stopping pagination.");
                    break;
                }
            } else {
                fixture.logger?.info("Reached the last page, stopping pagination.");
                break;
            }
        }
    }
}