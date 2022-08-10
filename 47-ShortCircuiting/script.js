"use strict"

//The || and && operator can be used with any data type, return any databtype and short-circuiting

console.log(3 || "Diego"); //Return the first truthy value
console.log( 0 || "Diego"); 
console.log(0 || "" || undefined || null); //If doesn't find a truthy value it returns the last value
console.log(undefined || 0 || "" || "Hello" || 23 || null); 
console.log();

//Example of set default value: if the variale is ot undefined it will reurn the variable othewise will return 10
let myTest1 = myName1 || 10;
console.log(myTest1);
var myName1 = "Diego"; //Var its a variable declared is the Globlal Execution Context and can be used before declaration but its value is undefined
myTest1 = myName1 || 10;
console.log(myTest1);
console.log();

let myTest2 = myName2 ? myName2 : 10;
console.log(myTest2);
var myName2 = "Diego"; //Var its a variable declared is the Globlal Execution Context and can be used before declaration but its value is undefined
myTest2 = myName2 ? myName2 : 10;
console.log(myTest2);
console.log();

console.log(1 && true && "Diego" && "Hello" && 23 && null && 15.6); //Return the first falsy value
console.log("Diego" && 54); //If doesn't find a falsy value it returns the last value