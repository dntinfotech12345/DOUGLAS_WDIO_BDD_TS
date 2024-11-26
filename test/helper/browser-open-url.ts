export const browserOpenUrl = async (url: string): Promise<void> => {
    await browser.maximizeWindow();
    await browser.url(url);
    await browser.pause(5000);
    console.log(await browser.getUrl());
};