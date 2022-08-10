"use strict"

function sum(a, b)
{
    console.log(arguments);
    
    let sum = 0;
    for (let i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(2, 5));
console.log(sum(2, 5, 10, 15));