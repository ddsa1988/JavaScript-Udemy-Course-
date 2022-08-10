"use strict"

const myArray = [10, 32, 51, 87];

//First position of the array
console.log(myArray[0]);
console.log(myArray.at(0));

//Last position of the array
console.log(myArray[myArray.length - 1]);
console.log(myArray.slice(-1)[0]);
console.log(myArray.at(-1));

const myName = "Diego";
console.log(myName.at(0));
console.log(myName.at(-1));