"use strict";

//Conversion
console.log(Number("256"));
console.log(Number("512.65"));
console.log();

//Parsing
console.log(Number.parseInt("298mm"));
console.log(Number.parseFloat("  32.78 mm"));
console.log();

//Check if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite(20.75));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(20 / 0));
console.log();

//Check if a value is an integer
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.25));
console.log(Number.isInteger(20 / 0));
