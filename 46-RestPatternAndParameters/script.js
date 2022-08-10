"use strict"

//Rest Operator in Arrays
const [a, b, ...restElementsArray] = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(b);
console.log(restElementsArray);
console.log();

//Rest Operator in Objects
const restaurant = {
    openingHours: {
        sunday : {
            open : 7,
            close: 21
        },
        monday: {
            open: 9,
            close: 23
        },
        tuesday: {
            open: 6,
            close: 20
        }
    }
};

const { monday, ...restElementsObj } = restaurant.openingHours;
console.log(restElementsObj);
console.log();

//Rest Operator in Funcitons

function sumNumbers(...numbers)
{
    let sum = 0;

    for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }
    console.log(`The sum is ${sum}.`);
}

sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
const x = [10, 20, 30];
sumNumbers(x);
sumNumbers(...x);