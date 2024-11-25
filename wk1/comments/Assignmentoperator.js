
// Assignment operator

const { textChangeRangeIsUnchanged } = require("typescript")

// =, +=, -=, *=, /=

// Use case 1: Basic

    let a =1;

//Use case 2: Chaining

    let x=y=1;
   // console.log(x)
    //console.log(y)


//Use case 3: +=

let start=5;
for(let i=1; i<=5; i++){

    // 24 and 25 number line will give the same output.
    
    //start = start+i; 
    start +=1;
    console.log(start)

}



