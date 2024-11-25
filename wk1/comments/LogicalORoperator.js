
/*

Logical operator OR (||)

// check if given day is weekemd or not
 
*/

let day =  "Saturday"

if(day=== "Saturday" || day ==="Sunday"){

    console.log(`Given day: ${day} is a weekend`)

}else{

    console.log(`Given day: ${day} is not a weekend`)
}

let targetbrowser

let browser = targetbrowser || "chrome"
console.log(browser)