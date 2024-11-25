// Video 86 - Variable

const { isVariableStatement } = require("typescript");

/*
 Variable rules:-
 1. Variable name should start with a letter, or underscore(_), or dollar sign ($)
 2. System reserved keyword can't be used. e.g if, else, throw, break
 3. Variable name are case sensitive
 4. Can't have sanme name for other types (e.g function name, object name)
 5. Multiple variable can be declared in single line (seperated by comma)
 6. When you just declare a variable, data type will be undefined. 
*/


let gretting = "Hello, world", gretting1 = "Good, morning.."
console.log(gretting, gretting1);

//function gretting(){

 // to
// }

// Var, let and const use cases

// let val = 0; 
// val = "Ten";
// console.log("value is:- "+val);

// // const

// const App_url = "https://www.google.com";
// console.log("App url is:- "+App_url);

// Video 88: variable scoping

var count = 0;
var count = 10;
if(true){

   const count = 10;

    console.log("The value of count inside if block", count);

}
    console.log("The value of count outside if block", count);
