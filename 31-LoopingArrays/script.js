//Using Normal Array Index

"use strict"

let myArray = [];
let myArrayInverted = [];

for (let i = 0; i < 10; i++)
{
    if (i > 5)
    {
        continue;
    }
    myArray[i] = i;
    
}

console.log(myArray);

for (let i = 0; i < myArray.length; i++)
{
    myArrayInverted[(myArray.length - 1) - i] = myArray[i];
}

console.log(myArrayInverted);

// Using Push and Unshift Method

myArray = [];
myArrayInverted = []

for (let i = 0; i < 10; i++)
{
    if (i === 4)
    {
        break;
    }
    myArray.push(100 + i);
}

console.log(myArray);

for (let i = 0; i < myArray.length; i++)
{
    myArrayInverted.unshift(100 + i);
}

console.log(myArrayInverted);