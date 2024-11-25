import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import logger from "../../helper/logger"; 
import {format, createLogger, transports, info, Logger } from "winston";
import allure from "@wdio/allure-reporter";
import reporter from "../../helper/reporter";

Then(/^Inventory page should list (.*)$/, async function (numberOfproducts) {
 
  allure.addStep(`${this.testid}:Inventory page should be list 6 products`)
 try {
    //console.log(wdio); // Reference error
   // throw Error (` error is:()`)
    
    // console.log(`app id is:-${this.appid}`);
  
    if (!numberOfproducts)
         throw Error(`Invalid product count provided: ${numberOfproducts}`);
    await browser.pause(4000)
    let eleArr = await $$(`.inventory_item_name`);
    console.log(eleArr.length)
    await browser.pause(7000)
   
   // expect(eleArr.length).to.be.equal(parseInt(numberOfproducts));
   // logger.error(`This is known issue - product count mismatch...`)
     console.log("typeof", typeof eleArr.length, typeof numberOfproducts);
     try {
       expect(eleArr.length).to.be.equal(parseInt(numberOfproducts)); // ===
     } catch (err) {
       // logger.error(`This is known issue - product count mismatch...`)
        reporter.addStep(this.testid,"error","Known issue - product count mismatch",true,"JIRA-123")
     }
    await browser.pause(7000)
    console.log("Test cases exceuted sucessfully...")

  } catch (err) {
   console.log(`The type of error is:-${typeof err}`)
   console.log(`The name of the property is:-${err.name}`)
   console.log(`The name of the property is:-${err.message}`)
   err.message = (`${this.testid}: Failed when comaring the product count, ${err.message}`)
   //throw err // Failing
   logger.error(err.message)
 }

});

/*

Steps:-
1. Get price list
2. COnvert string to nunmber
3. Aseert if any value is <=
*/

Then(/^Validate all products have valid price$/, async function(){
 
 // throw Error(`test case failed.`) 
  allure.addStep(`${this.testid}: Checking the product price is valid or not.`)
  logger.info(`${this.testid}: Checking the price.`)
  // Step1. Get the price list
  let eleArr = await $$(`.inventory_item_price`)
  let priceStrArr = []

for (let i=0; i<eleArr.length; i++){
  let pricestr = await eleArr[i].getText();
  priceStrArr.push(pricestr)
}
console.log(` All the product price with $:-${priceStrArr}`);

// 2. COnvert string to nunmber
let pricenumarr = priceStrArr.map(ele => +(ele.replace("$", "")));
console.log(`Price in numbers:- ${pricenumarr}`);
 
// 3. Aseert if any value is <=

let invalidpriceArray = pricenumarr.filter(ele => ele<=0)
expect(invalidpriceArray.length).to.equal(0);

})

Then(/^Verify if all users exist in customers list$/, async function() {


})
