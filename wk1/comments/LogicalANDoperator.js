
/*
 Logical operator
1. &&
2. ||
3. !

Two main purposes:-
1. In conditional statements (e.g. false, true)
2. To have a default value
*/

// Use case 1:- AND (&&) check if given val is text


let val = "Monday"
console.log(typeof val)

if(typeof val === "string" && val.length>1){

    console.log(`Given value: ${val} is valid string`)

}else{

    console.log(`Given value: ${val} is not a valid string`)
}
