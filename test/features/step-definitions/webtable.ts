import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

/*  WebTables:- */
/*  1. Check number of row and column
    2. Check whole table data
    3. Get single row [] based on condition]
    4. Get single column
    5. Get single cell value [based on another cell]
*/  

Given(/^Open the website$/, async function () {

await browser.url("/tables");
await browser.maximizeWindow();
await browser.pause(4000)
console.log("Website open sucessfully...")

})

// 1. Check number of row and column

let rowcount;
let colcount;

 Then(/^Check number of row and column$/, async function(){

 rowcount = await $$(`//table[@id='table1']/tbody/tr`).length
 expect(rowcount).to.be.equal(4);
 console.log(`number of ros: ${rowcount}`);
 await browser.pause(4000);

 colcount = await $$(`//table[@id='table1']/thead/tr/th`).length
 console.log(`number of columns: ${colcount}`)
 expect(colcount).to.be.equal(6);
 await browser.pause(4000);
})

  // 2. Check whole table data
  // table[@id='table1']/tbody/tr[4]/td[6]

  let array = []
 Then(/^Check whole table data$/, async function(){

     for(let i=0; i<rowcount; i++){
        let personObj = {
            lastname:"",
            firstname:"",
            email:"",
            due:"",
            website:"",
            action:"",

        }
         for(let j=0; j<colcount; j++){
             let cellval = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[${j+1}]`).getText()
             console.log(`Cell value is:-${cellval}`)

             if(j===0)personObj.lastname = cellval
             if(j===1)personObj.firstname = cellval
             if(j===2)personObj.email = cellval
             if(j===3)personObj.due = cellval
             if(j===4)personObj.website = cellval
             if(j===5)personObj.action = cellval
          }
         
          array.push(personObj)
        }
        
        console.log(`Whole table: ${JSON.stringify(array, null, 1)}`);
  })

  // 3. Get single row [] based on condition]

  Then(/^Get single row based on condition$/, async function(){
    
    for(let i=0; i<rowcount; i++){
        let personObj = {
            lastname:"",
            firstname:"",
            email:"",
            due:"",
            website:"",
            action:"",

        }
         for(let j=0; j<colcount; j++){
             let cellval = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[${j+1}]`).getText()
             let firstname = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[2]`).getText()
             console.log(`Cell value is:-${cellval}`)
            if(firstname ==="Jason"){
             if(j===0)personObj.lastname = cellval
             if(j===1)personObj.firstname = cellval
             if(j===2)personObj.email = cellval
             if(j===3)personObj.due = cellval
             if(j===4)personObj.website = cellval
             if(j===5)personObj.action = cellval
          }
        }
          if(personObj.firstname)
          array.push(personObj)
        }        
        console.log(`Whole table: ${JSON.stringify(array, null, 1)}`);
      })

      //  4. Get single column

      Then(/^Get single column$/, async function(){

        let arr = []
        for(let i=0; i< rowcount; i++){

          let cellval = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[4]`).getText()
          arr.push(cellval)
        }
        console.log(`Single column values: ${arr}`);

})
  
  // 5. Get single cell value based on another cell

 Then(/^Get single cell value based on another cell$/, async function(){

  let arr = []
  for(let i=0; i<rowcount; i++){
    
     // let cellval = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[${j+1}`).getText()
      let price = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[4]`).getText()
      let Firtname = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[2]`).getText()
      if(+(price.replace("$", "")) >50) {
        arr.push(Firtname)
      
    }
  }
  console.log(`Single column values: ${arr}`);
})
 
 
