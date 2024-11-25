import { Given } from "@wdio/cucumber-framework";
import { expect } from "chai";
import logger from "../../helper/logger";
import {format, createLogger, transports, info, Logger } from "winston"
import allure from "@wdio/allure-reporter"
import reporter from "../../helper/reporter";
import sauseHomePage from "../../page-objects/sause.home.page";

import {path} from 'app-root-path';
import {config as configuration} from "dotenv";
import apiHelper from "../../helper/apiHelper";
console.log("appRoot", path);
configuration({ path: `${path}/.env` });
import constants from "../../../data/Constants.json";
import fs from "fs";
import testdata from "../../../csv/testdata";
import sendemail from "../../helper/sendemail";
//import credential from "../../../csv/credential.json"



Given(/^As (a|an) (.*) user I login to inventory web page$/, async function (prefixText, userType, dataTable) {
    
  try{

    reporter.addStep(this.testid, "info", "Login to sause demo.")
    let dt = dataTable.hashes()
    // @ts-ignore

    await sauseHomePage.navigateTo(browser.config.sauceDemoURL)
    let testfunc = await testdata("testdata.csv");
    console.log(`test function value is :- `+ typeof testfunc);
    console.log(`Excel username is:-`+testfunc[0][0]); 
    console.log(`Excel password is:-`+testfunc[0][1]); 
    console.log(`Email id is:-`+testfunc[0][2]);
    console.log(`Email id is:-`+testfunc[0][3]);
    
    //await sauseHomePage.loginTosauceApp(this.testid, process.env.TEST_STD_USERNAME, process.env.TEST_STD_PASSWORD)

    await sauseHomePage.loginTosauceApp(this.testid, testfunc[0][0], testfunc[0][1])

    await sendemail()
    
    // we can write as per below
    // sauseHomePage.enterUsername
    // sauseHomePage.enterpassword
    // sauseHomePage.ClickloginBtn
    
  } catch(err){
    console.log("error is:-"+err)
    //err.message `${this.testid}: Failed at login step.${err.message}`

    throw err
  }
  })

  /* Get list of users from reqres.in API
  
  Sub-test:
  1. Get payload Data
  2. Make get call by using API apiHelper
  3. Store results
  */

  Given(/^Get list of (.*) from reqres.in$/, async function(endpointRef){

   // if(!endpointRef) throw Error(`Given end point ref:${endpointRef} is not valid.`)

    try {
      // 1. Get payload Data
      reporter.addStep(this.testid, "Info", `Getting the payload data for endpoint:${endpointRef}`)
      let endpoint = ""
      if(endpointRef.trim().toUpperCase()==="USERS"){
        endpoint = constants.REQRES.GET_USERS
      }
      if(!endpoint) throw Error(`Error getting endpoint:${endpoint} from the constants.json`)
  
      // 2. Make get call by using API Helper
  
      await browser.call(async function(){
        let testid = this.testid
        let res 
        //@ts-ignore
        res = await apiHelper.GET(testid, browser.config.reqresBaseURL,endpoint,"",constants.REQRES.QUERY_PARAM)
      })
      //@ts-ignore
      if(res.status !==200) expect.fail(`Failed getting users from:${browser.config.reqresBaseURL}/${endpoint}`)
      //@ts-ignore
      reporter.addStep(this.testid, "debug", `API response received, data: ${JSON.stringify(res.body)}`)
    
    // 3. Store results
  
    //@ts-ignore
    let data = JSON.stringify(res.body, undefined, 4)
    let filename = `${process.cwd()}/data/api-res/reqresAPIUsers.json`
    fs.writeFileSync(filename, data)
    reporter.addStep(this.testid, "Info", `API response from: ${endpoint} stored in json file`)
    } catch (err) {
      err.message = `${this.testid}: Failed at getting API users from reqres, ${err.message}`
      throw err
    }

})