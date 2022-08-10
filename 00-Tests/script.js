"use strict"

let x;
console.log(x);
console.log(typeof(x));

if (x === undefined)
{
    console.log(`The x variable contains the value of ${x}.`);
}

if (typeof(x) === "undefined")
{
    console.log(`The x variable is the type of ${typeof(x)}.`);
}

const y = null;
console.log(y);
console.log(typeof(y));

function recursion(number)
{
    if (number < 0)
    {
        return 0;
    }
    console.log(number);
    recursion(number - 1);
}

recursion(5);

console.log(a);
var a = 8;

// Closures
function z()
{
    let a = 0;
    function w()
    {
        a++;
        console.log(a);
    }
    return w;
}

const v = z();
console.log(v);
v();
v();
v();