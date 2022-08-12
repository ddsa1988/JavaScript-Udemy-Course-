"use strict";

/*Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]*/

function calcAverageHumanAge(dogsAge) {
    if (Array.isArray(dogsAge)) {
        const averageHumanAges = dogsAge
            .map((value) => (value <= 2 ? value * 2 : value * 4 + 16))
            .filter((value) => value >= 18)
            .reduce(
                (acc, value, index, array) => acc + value / array.length,
                0
            );
        console.log(`Average Human Ages: ${averageHumanAges}`);
        return;
    }
    console.log("The data is not an array!!!");
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log();
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
