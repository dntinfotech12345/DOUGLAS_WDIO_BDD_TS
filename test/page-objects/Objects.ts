import Page from "./page"
import chai from "chai"
import reporter from "../helper/reporter"


export default class Obbject{
    constructor(){

    }

//  Page Objects

 get usernameInputbox() {return $(`#user-name`)}
 get passwordInputbox() {return $(`#password`)}
 get loginbutton() {return $(`#login-button`)}


}