"use strict"
/*
function greet(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`);
    }
}

const greeting = greet("Hello");

console.log(greeting);
greeting();
greeting("Diego");

console.log();
*/

const greet = greeting => name => console.log(`${greeting} ${name}`); //Arrow Function returning another Arrow Function

const greeting = greet("Hello");

console.log(greeting);
greeting();
greeting("Diego");
