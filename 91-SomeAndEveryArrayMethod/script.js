"use strict";

const myArray = [10, 20, 30, -100, -200, 1000, 3000];
const anotherArray = [10, 20, 30, 2000, 5000, 8000];

//Include method checks equality
console.log(myArray.includes(30));
console.log(myArray.includes(2000));

//Some method checks if al least one value of the array satisfy the condition
console.log(myArray.some((value) => value > 2000));

//Every method checks if all values of the array satisfy the condition
console.log(myArray.every((value) => value > 0));
console.log(anotherArray.every((value) => value > 0));
