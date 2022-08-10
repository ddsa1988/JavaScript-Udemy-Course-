"use strict"

const myArray = ["Diego", "Amanda", "Tainara", "Ivanice"];

for (const item of myArray) {console.log(item);}
console.log();

for (const item of myArray.entries()) {console.log(item);}
console.log();

for (const [index, value] of myArray.entries())
{
    console.log(`${index + 1}: ${value}`);
}