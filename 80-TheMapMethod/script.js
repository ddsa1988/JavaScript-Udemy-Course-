"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//Using the For Of method
const newArray = [];

for (const value of movements) {
    newArray.push(value * eurToUsd);
}
console.log(newArray);
console.log();

//Using the Map Method

// const movementsUsd = movements.map(function (movement) {
//     return movement * eurToUsd;
// });

const movementsUsd = movements.map((movement) => movement * eurToUsd);
console.log(movements);
console.log(movementsUsd);
console.log();

const movDescription = movements.map(
    (value, index) =>
        `Movement ${index + 1}: Tou ${
            value > 0 ? "deposit" : "withdrew"
        } ${Math.abs(value)}`
);
console.log(movDescription);
