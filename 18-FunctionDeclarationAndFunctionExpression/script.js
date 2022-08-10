/*
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of
the world population

2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

"use strict";

//Function Declaration

function percentageOfWorld1(population)
{
    return `${(population / 7900) * 100}%`;
}

let China = percentageOfWorld1(1441);
let Brazil = percentageOfWorld1(1235);
let EUA = percentageOfWorld1(2568);
console.log(China);
console.log(Brazil);
console.log(EUA);

//Function Expression

const percentageOfWorld2 = function(population){
    return `${(population / 7900) * 100}%`;
};

China = percentageOfWorld2(1441);
Brazil = percentageOfWorld2(1235);
EUA = percentageOfWorld2(2568);
console.log(China);
console.log(Brazil);
console.log(EUA);