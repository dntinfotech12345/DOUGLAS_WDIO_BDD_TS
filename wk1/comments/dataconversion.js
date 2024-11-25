
// String

let val1 = "5"
let val2 = "5.5"

console.log(`The type of val1: ${typeof val1} and value will be ${val1}`); // strig type
console.log(`The type of val1: ${typeof val2} and value will be ${val2}`); // strig type

// Convert string to number

// numval1 = parseInt(val1)
// numval2 = parseFloat(val2)

// unary plus
numval1 = +(val1)
numval2 = +(val2)

console.log(`The type of val1: ${typeof numval1} and value will be ${numval1}`); // number type
console.log(`The type of val1: ${typeof numval2} and value will be ${numval2}`); // number typer

// Convert number to string

newval1 = numval1.toString()
newval2 = numval2.toString()

console.log(numval1.toString());
console.log(newval2.toString());

console.log(`The type of val1: ${typeof newval1} and value will be ${numval1}`); 
console.log(`The type of val1: ${typeof newval2} and value will be ${newval2}`); 



// point 8:- All primitive data types are imutable

let day = "sunday"
console.log(day);

console.log(day.toUpperCase())

console.log(day); // original state will not be changed


// point 10: Except for undefined and null, every other 5 premitives have wrapper object types (start with uppercase)


let bool = Boolean(true)
let num = Number(10)
String()
console.log(bool);
console.log(num);