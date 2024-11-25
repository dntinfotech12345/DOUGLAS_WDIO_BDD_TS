import Page from "./page"
import chai from "chai"
import reporter from "../helper/reporter"
import Obbject from "./Objects"

class Homepage extends Page{

    public testData  = new Obbject();
    constructor(){
        super()
    }
    // //  Page Objects

    //    get usernameInputbox() {return $(`#user-name`)}
    //    get passwordInputbox() {return $(`#password`)}
    //    get loginbutton() {return $(`#login-button`)}

    // Page Actions

    async enterUsername(testid: string, username: string){
        
        if(!username) throw Error (`Given username: ${username} is not valid`)
        
        try {
            username = username.trim()
            await this.typeInto(await this.testData.usernameInputbox, username)
            reporter.addStep(testid, "Info", `Username:${username} entered successfully`)
        } catch (err) {
            err.message = `Error entering username: ${username}, ${err.message}`
            throw err
        } 
    }

    async enterpassword(testid: string, password: string){
        if(!password) throw Error (`Given password: ${password} is not valid`)
        
        try {
            password = password.trim()
            await this.typeInto(await this.testData.passwordInputbox, password)
            reporter.addStep(testid, "Info", `password entered successfully`)
        } catch (err) {
            err.message = `Error entering password: ${err.message}`
            throw err
        }
    }
   
    async ClickloginBtn(testid: string){
        
        try {
            
            await this.click(await this.testData.loginbutton)
            reporter.addStep(testid, "Info", `Login button clicked.`)
        } catch (err) {
            err.message = `Error clicking login button: ${err.message}`
            throw err
        }
    }

    async loginTosauceApp(testid:string, username: string, password: string){

        try {
            await this.enterUsername(testid,username)
            await this.enterpassword(testid,password)
            await this.ClickloginBtn(testid)
        } catch (err) {
            throw err
        }
    }
}
export default new Homepage()