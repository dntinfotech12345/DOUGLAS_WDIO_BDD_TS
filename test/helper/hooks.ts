// import { BeforeAll, Before } from '@cucumber/cucumber';
// import { remote, Browser } from 'webdriverio';
// import { fixture } from './wrapper/page-fixture';

// BeforeAll(async function () {
//     fixture.browser = await remote({
//         capabilities: {
//             browserName: 'chrome',
//         },
//     });
//     console.log('Browser initialized');
// });

// Before(async function () {
//     if (!fixture.browser) {
//         throw new Error('Browser instance is undefined');
//     }
//     console.log('Browser ready for use');
// });
