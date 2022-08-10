"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (accumulator, value, index, array) {
//     console.log(`Interation ${index}: ${accumulator}`);
//     return accumulator + value;
// }, 0); // Zero is the start value of the accumulator [You can put an value you want]

const balance = movements.reduce((acc, value) => acc + value, 0);

console.log(`Accumulator total: ${balance}`);
console.log();

const maxValue = movements.reduce((acc, value) => (value > acc ? value : acc));
console.log(`Maximun value: ${maxValue}`);
