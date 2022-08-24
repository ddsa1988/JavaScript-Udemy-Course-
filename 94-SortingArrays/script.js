"use strict";

//The sort method sorts strings

// Strings
const names = ["Jonas", "Zack", "Adam", "Martha"];
console.log(names.sort());
console.log(names);

//Numbers
const numbers = [500, 1, 0, -200, 100, 5, 10, 3];
console.log(
    numbers.sort((currentValue, nextValue) => currentValue > nextValue)
    //numbers.sort((a,b) => a > b);
);
