"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstValue = movements.find((value) => value < 0); //Returns the first element in the array that satisfy the condition
console.log(firstValue);
