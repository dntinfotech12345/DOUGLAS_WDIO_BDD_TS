import { Browser } from 'webdriverio';
import { Logger } from 'winston';

interface Fixture {
    browser: Browser<'async'> | undefined;
    logger: Logger | undefined;
}

export const fixture: Fixture = {
    browser: undefined,
    logger: undefined,
};
