"use strict";

console.log(Math.sqrt(25));
console.log(Math.max(...[45, 200, 123, 199, 5]));
console.log(Math.min(...[45, 200, 123, 199, 5]));
console.log();

//Get random numbers
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(15, 25));
console.log();

//Rouding integers
console.log(Math.trunc(25.2));
console.log(Math.trunc(25.8));
console.log();

console.log(Math.floor(25.2));
console.log(Math.floor(25.8));
console.log();

console.log(Math.ceil(25.2));
console.log(Math.ceil(25.8));
console.log();

console.log(Math.round(25.2));
console.log(Math.round(25.8));
console.log();

console.log(Math.trunc(-0.5));
console.log(Math.floor(-0.5));
console.log();

//Rounding decimals
console.log(Number((3.725).toFixed(0)));
console.log(Number((3.725).toFixed(1)));
console.log(Number((3.725).toFixed(3)));
