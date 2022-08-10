"use strict"

const myName = "Diego";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log("\n");

const myString = "    Hello   \n";
console.log(myString.trimStart());
console.log(myString.trimEnd());
console.log(myString.trim());
console.log("\n");

const priceEurope = "288,97L";
const priceUS = priceEurope.replace('L', '$').replace(',', '.').replaceAll('8', '9');
console.log(priceUS);
console.log("\n")

const myFullName = "Diego dos Santos Alexandre";
console.log(myFullName.includes("dos"));
console.log(myFullName.startsWith("diego"));
console.log(myFullName.endsWith("dre"));