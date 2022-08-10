"use strict"

//Sets don't accept duplicated values
const newSet = new Set(["Diego", "Amanda", "Diego", "Rodrigo", "Tainara", "Amanda"]);
console.log(newSet);
console.log();

const newSetString = new Set("Diego");
console.log(newSetString);
console.log();

console.log(newSet.size);
console.log(newSet.has("Diego"));
console.log(newSet.has("diego"));
console.log();

newSet.add("Anna");
newSet.add("Anna");
console.log(newSet);
console.log();

newSet.delete("Tainara");
console.log(newSet);
console.log();

for (const value of newSet) {console.log(value);}
console.log();

//Example
let newArray = [1, 3, 6, 1, 8, 10, 3, 20, 100, 1, 5, 7, 6, 8, 1, 9];
const newSetArray = new Set(newArray);
console.log(newSetArray);
newArray = [...newSetArray];
newArray.sort();
console.log(newArray);