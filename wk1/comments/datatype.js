/*
1. String
2. number
3. boolean
4. object
5. Array
6. Regexp
7. undefined and null
*/

// 1. String

let String = "Hello"
let string1 = 'Hello good morning'
let string3 = `${String}, world!`

console.log(String)
console.log(string1)
console.log(string3)

// 2.number

let num1 = 123;
let num2 = 10.6;

// 3. boolean

let boolean = true;

// 4. Object

let obj = {}

// 5. Array

let Array = []

// 6. Regex

let regex = /abc/

// 7. Undefined ,null
let val1 
let tempobj = null

//console.log(`The type of str is: ${typeof string3}`);

console.log(`The type of str is: ${typeof string}`); // return string
console.log(`The type of number is: ${typeof num1}`); // return number
console.log(`The type of object is: ${typeof obj}`); // return object
console.log(`The type of array is: ${typeof Array}`); // return object
console.log(`The type of regex is: ${typeof regex}`); // return object
console.log(`The type of undefined is: ${typeof val1}`); // return undefined
console.log(`The type of null is: ${typeof tempobj}`); // return object
