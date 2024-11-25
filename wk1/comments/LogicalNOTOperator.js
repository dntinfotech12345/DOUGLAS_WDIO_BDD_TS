/*

Logical operator NOT (!)

// check if both first and last name is provided or not
 
*/

let firstname = "Rob"
let lastname = "Bob"

if(firstname){
    console.log(firstname);
}

if(!firstname || !lastname){
    console.log(`One of the names: ${firstname} or ${lastname} is not valid`);
}