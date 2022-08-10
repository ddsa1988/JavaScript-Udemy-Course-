"use strict"

//The ?? operator works with Nullish values (null and undefined), not with NOT or ''

console.log(myNumber ?? "This number is undefined");
var myNumber = 0;
console.log(myNumber ?? "This number is undefined");
console.log();

console.log(myString ?? "This string is undefined");
var myString = "";
console.log(myString ?? "This string is undefined");