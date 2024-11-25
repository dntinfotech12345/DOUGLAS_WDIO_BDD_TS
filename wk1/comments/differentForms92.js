/*
data type can be represented in one of these forms:

1. Literals
2. Variable
3. Expression
*/

// String
console.log("hello"); // literals
let str = "hello world"; // variable
console.log("hi " + "world")

// boolean
console.log(true); // literals
let bool = true; // variable
console.log(bool);
console.log(typeof (5 < 10)); // expression

// Functions

function sum(num1, num2){

    return num1 + num2 // return type is number
}

sum(2, 2)
console.log(sum(2,2)); // output 4
console.log(typeof (sum(2,2))); Number

