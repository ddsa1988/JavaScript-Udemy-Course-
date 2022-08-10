"use strict"

//Maps
const currencies = new Map([
    ["USD", "United States Dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound Sterling"]
]);

console.log(currencies);
console.log();

currencies.forEach((value, key, map) => console.log(`${key}: ${value}`));
console.log();

//Sets
const mySet = new Set(["Diego", "Amanda", "Diego", "Amanda", "Rodrigo"]);
console.log(mySet);

mySet.forEach((value) => console.log(value));