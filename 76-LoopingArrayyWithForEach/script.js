"use strict"

//For of method
const myNumbers = [1, 10, 20, 30];

for (const number of myNumbers){
    console.log(number);
}
console.log();

//For each method with function declaration
myNumbers.forEach(function(number){
    console.log(number);
});
console.log();

//For each method with arrow function
myNumbers.forEach((number) => console.log(number));
console.log();

myNumbers.forEach((number) => console.log(`Hello ${number}`));
console.log();

myNumbers.forEach(() => console.log(`Hello`));
console.log();

//All arguments that for each can show: value, index and the array itself
myNumbers.forEach((value, index, array) => console.log(`Index: ${index} - Value: ${value} - Array: ${array}`));