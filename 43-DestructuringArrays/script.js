"use strict"

//Simple Array
const mySimpleArray = [1, 3, 5, 10, 15];
const [a, b, c, , d] = mySimpleArray;
console.log(a, b, c, d);

//Nested Array
const myNestedArray = ["Diego", "Maria", ["João", "Carlos"]];
const [e, f, [g, h]] = myNestedArray;
console.log(e, f, g, h);

//Function Return With Array
function myFunction()
{
    return [1, 2, 3];
}

const [i, j, k] = myFunction();
console.log(i, j, k);

//Mutating Variables
const anotherArray = ["A", "B", "C"];
let [firstLetter, secondLetter, thirdLetter] = anotherArray;
console.log(firstLetter, secondLetter, thirdLetter);
[firstLetter, secondLetter, thirdLetter] = [thirdLetter, firstLetter, secondLetter];
console.log(firstLetter, secondLetter, thirdLetter);