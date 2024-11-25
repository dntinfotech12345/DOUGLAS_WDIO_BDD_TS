import { setWorldConstructor } from "@wdio/cucumber-framework";
//import {chai.from "chai";

class customworld {
    
    testid: string
    appid: string
    Constructor(){
        this.appid = "",
        this.testid = ""
    }
}

setWorldConstructor (customworld)
