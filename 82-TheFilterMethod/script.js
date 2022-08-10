"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter((value) => value > 0);
const withdrwals = movements.filter((value) => value < 0);

console.log(deposit);
console.log(deposit.length);
console.log(withdrwals);
console.log(withdrwals.length);
