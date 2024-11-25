import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { idText, SymbolDisplayPartKind } from "typescript";

Given(/^Google Page is opened$/, async function () {
  console.log(`Before opening browser`);
  await browser.url("https://www.google.com/");
  await browser.maximizeWindow();
  await browser.pause(5000);
  console.log(`After opening browser`);
});

When(/^Search with (.*)$/, async function (SearchIteam) {
  let ele = await $(`[name=q]`);
  ele.setValue(SearchIteam);
  await browser.pause(5000);
  await browser.keys("Enter");
});

Then(/^Click on frist result search$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
  await browser.pause(5000);
});

Then(/^Url should match (.*)$/, async function (ExpectedUrl) {
  console.log(` >> ExpectedUrl: ${ExpectedUrl}`);
  await browser.waitUntil(async function(){
    return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  }, {timeout:20000, interval:500, timeoutMsg: `failed loading wdio web page..${await browser.getTitle()}`})
  let url = await browser.getUrl()
  console.log("Get the URL is:-"+url)
  expect(url).to.equal(ExpectedUrl)
  await browser.pause(5000);
});

/*
 * Web Interactions
 */

Given(/^A web page is opened$/, async function () {
  // await browser.url("/inputs");
  // await browser.url("/dropdown");
  // await browser.url("/checkboxes");
  // await browser.url("/windows");
  // await browser.url("/javascript_alerts");
  // await browser.url("/basic_auth");
  // await browser.url("/upload");
     await browser.url("/frames");
  //   await browser.url("/");
  
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
  await browser.pause(5000);
});

When(/^Perform web interaction$/, async function () {
 
  //1. Input box
   // Actions:
  // 1. Type into input Box
   //2. Clear the field and type or just addvalue
   //3. Click and type
   //4. Slow typing
  /*
   let num = 1234566;
  let strnum = num.toString();
  let ele1 = await await $("[type=number]");
  await ele1.click();
  await browser.pause(3000);
   await ele1.scrollIntoView
   await ele1.addValue(strnum)
   await browser.pause(5000);
   await browser.debug()
   
   //below for loop is user for the typing into a slowly in the field
  
   for (let i = 0; i < strnum.length; i++) {
  let chatStrr = strnum.charAt(i);
  await browser.pause(1000);
  await browser.keys(chatStrr);
  
 
  // 2. Dropdown
  //Actions:
  //1. Assert default option is selected or not
  //2. Select by attribute, text , inbox
  //3. Get a list of options
 
  // 1. Assert default option is selected
  // Get the text from drop down
  // let ele2 = await $('//select/option[@selected="selected"]')
  // await browser.pause(2000);
  // let val = await ele2.getText();
  // console.log("Val of the text is :- ",val)
  // await browser.pause(2000);
  // expect(val).to.equal('Please select an option');
  // await browser.pause(2000);
 
  // 2. Select a specific option from drop down
  // let ddele = await $('#dropdown');
  // //await ddele.selectByVisibleText("Option 2");
  // await ddele.selectByAttribute("value", "1")
  // await ddele.selectByIndex(2);
  // await browser.pause(4000);
  // await browser.debug();
 
  // 3. Get a list of options
  // let eleArray = await $$('select > option');
  // let arr = []
  // for (let i = 0; i < eleArray.length; i++) {
  //   let ele = eleArray[i];
  //   let val = await ele.getText();
  //   arr.push(val);
  //   console.log("value of the drop down is:-",val);
  // }
  // console.log('>> option array: ${arr}');
 
  // 4. Checkbox
  // Actions:
  // 1. Select an options
  // 2. Unselect an option (if selected)
  // 3. Assert if option is selected
  // 4. Select all options
  // await browser.pause(3000);
  // let ele = await $("//input[@type='checkbox'][1]");
  // if(! await ele.isSelected()){
  //   await ele.click();
  // }
  // let ele = await $("//input[@type='checkbox'][2]");
  // let ischecked = await ele.isSelected()
  // expect(ischecked).to.be.true
  // await browser.pause(3000);
  // await ele.click();
  // await browser.pause(3000);
  //await browser.debug()
  // let eleArr = await $$("//form[@id='checkboxes']/input");
  
  // for (let i = 0; i < eleArr.length; i++) {
  //   let ele = eleArr[i];
  //   if (!(await ele.isSelected())) {
  //     ele.click();
  //     await browser.pause(5000);
  //   }
  // }
 
  // 5. Window Handling
  //   Steps:
  //   1. Launch the browser
  //   2. Open another window
  //   3. Switch to the window based on title
  //   4. Switch back to the main window
  //   Methods used:
  //   1. getTitle
  //   2. getWindowhandle()
  //   3. getWindowhandles()
  //   4. switchTowindow()
  // open new windows
  // await $("=Click Here").click();
  // await browser.pause(2000);
  // await $("=Elemental Selenium").click();
  // await browser.pause(2000);
  // let currentWinTitle = await browser.getTitle();
  // console.log("Current window title is:- " + currentWinTitle);
  // await browser.pause(2000);
  // // Switch to specific window
  // let winHandles = await browser.getWindowHandles();
  // for (let i = 0; i < winHandles.length; i++) {
  //   console.log(`window handle:- ${winHandles[i]}`);
  //   await browser.switchToWindow(winHandles[i]);
  //   let currentWinTitle = await browser.getTitle();
  //   let parentwinhandle = await browser.getWindowHandle();
  //   if (
  //     currentWinTitle ===
  //     "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
  //   ) {
  //     await browser.switchToWindow(winHandles[i]);
  //     let headerTextsel = await $("<h1>").getText;
  //     console.log(`headerTextsel: ${headerTextsel}`);
  //     // rest of the actions go here...
  //     break;
  //   }
  //   // Switch back to parent window
  //   await browser.switchToWindow(parentwinhandle);
  //   let parentWinheaderText = await $("<h3>").getText();
  //   console.log(`parentWinheaderText: ${parentWinheaderText}`);
  //   console.log(`parentWinheaderText: ${parentWinheaderText}`);
  //   // continue with rest of executiion...
  // }
 
  // 6. Handling Alerts
  // 1. isAlertopen()
  // 2. acceptAlert()
  // 3. dismisAlert()
  // 4. getAlertText()
  // 5. sendAlertText()
  
  // await $(`button=Click for JS Prompt`).click();
  // await browser.pause(2000);
  // if (await browser.isAlertOpen()) {
   //  let alertText = await browser.getAlertText();
   //  console.log(`alert test is:- ` + alertText);
   //  await browser.sendAlertText(`Hello js prompt`);
    // await browser.pause(2000);
    // await browser.acceptAlert();
    // await browser.pause(2000);
   }
*/
   /*
   7. File upload
    
  console.log(process.cwd)

 await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`);
 await browser.pause(3000);
 await $("#file-submit").click;
 await browser.pause(4000);
 */

   /*
   8:- iFrame
    1. Switch to frame
    2. Switch to parent frame
   */
/*
    
   //await browser.pause(3000);
   await $(`=iFrame`).click();
   await browser.pause(3000);
   let ele1 = await $(`#mce_0_ifr`);
  // let ele = await (await $(`#mce_0_ifr`)).switchToFrame;
   await browser.switchToFrame(ele1);

  // await $(`tinymce`).click();
  // await browser.keys(["Meta", "A"])
  // await browser.pause(3000);
  // await browser.keys("Delete")
   await $(`#tinymce`).setValue(`Typing into a frame`);
   await browser.pause(3000);
   //await browser.switchToParentFrame()
*/
   
   /*
    9. Basic scrolling
   */
    // await browser.pause(3000)
    // let ele45 = await $(`Frequently repurchased in Beauty and Personal Care`).scrollIntoView();
    // await browser.pause(3000)
  
  });
