"use strict"

function oneWord(str)
{
    return str.replaceAll(" ", "").toLowerCase();
}

function upperFirstWord(str)
{
    const [first, ...others] = str.toLowerCase().split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

//High-Order Function
const transformer = function(str, fn) //fn is a callback function
{
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed By: ${fn.name}`);
}

transformer("JavaScript is the best!", upperFirstWord);
console.log();
transformer("JavaScript is the best!", oneWord);
console.log();

const add = function(n1, n2) { return n1 + n2; } //Function Expression

const sub = (n1, n2) => n1 - n2; //Arrow Function

function calculator(n1, n2, fn) //Function Declaration
{
    console.log(`${fn(n1, n2)}`);
}

calculator(10, 30, add);
calculator(10, 30, sub);