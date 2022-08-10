/*
Write a code that reverses a string, number or array
*/

"use strict"

function reverseString(myString)
{
    let reversedString = "";
    for (let index = myString.length - 1; index >= 0; index--) { reversedString += myString[index]; }
    return reversedString;
}

function reverseNumber(myNumber)
{
    const stringNumber = String(myNumber); 
    let reversedStringNumber = "";
    for (let index = stringNumber.length - 1; index >= 0; index--) { reversedStringNumber += stringNumber[index]; }
    return Number(reversedStringNumber);
}

function reverseArray(myArray) { return myArray.reverse(); }

function reverseVariable(toBeReversed)
{
    if (!(typeof(toBeReversed) === "string") && !(typeof(toBeReversed) === "number") && !(Array.isArray(toBeReversed))) { return toBeReversed; }
    
    if (typeof(toBeReversed) === "string") { return reverseString(toBeReversed); }

    if (typeof(toBeReversed) === "number") { return reverseNumber(toBeReversed); }

    if (Array.isArray(toBeReversed)) { return reverseArray(toBeReversed); }
}

//Test data
const myString = "diego alexandre";
const myIntegerNumber = 52;
const myFloatNumber = 12.58;
const myArray = [1, 2, 3, 4, 5, 6];
const myObj = {
    "Name": "Diego",
    "Age": 34
};

console.log(reverseVariable(myArray));
console.log(reverseVariable(myString));
console.log(reverseVariable(myIntegerNumber));
console.log(reverseVariable(myFloatNumber));
console.log(reverseVariable(myObj));