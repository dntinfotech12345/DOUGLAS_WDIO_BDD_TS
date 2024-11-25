import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";


    Given(/^Open the amazon website$/, async function () {

        await browser.url("https://www.sodapdf.com/pdf-merge/");
        await browser.maximizeWindow();
        await browser.pause(7000)
        console.log("Amazon Website open sucessfully...")
        console.log(`broserobj:- ${JSON.stringify(browser)}`);

        })
    
        /* 
Scrolling visible portion
Windows object
1. scrollBy 
y -> [-] window.innerHeight

Scroll down

*/
  Then(/^Scroll by$/, async function(){
             
        await browser.execute(() => {
                
     // await browser.pause(7000);
        window.scrollBy(0, 100);
     //await browser.pause(7000);
         console.log("Scroll down sucessfully");
              })
         })

/* 
Scrolling Invisible portion
Windows object
1. scrollTo 
y -> [-] window.body.scroll[scrollHeight]

*/