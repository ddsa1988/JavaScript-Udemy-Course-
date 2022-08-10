"use strict"

const question = new Map([
    ["question", "What is the best language?"],
    [1, "C/C++"],
    [2, "C#"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct!"],
    [false, "Try Again!"]
]);
console.log(question);
console.log("\n");

console.log(question.get("question"));
for (const [key, value] of question)
{
    if (typeof(key) === "number")
    {
        console.log(`Answer ${key}: ${value}`);
    }
}
/*const answer = Number(prompt("Your Answer: "))
console.log(question.get(question.get("correct") === answer));*/
console.log("\n");

//Map to Array
let myArray = new Array;
myArray = [...question];
console.log(myArray);
for (const [line, column] of myArray)
{
    console.log(line, column);;
}
console.log("\n");

//Object to Map
const myObject = {
    firstName: 'Diego',
    lastName: "Alexandre",
    age: 34,
    height: 1.8,
    workHours: {
        monday: {
            from: 7,
            until: 17
        },
        tuesday: {
            from: 8,
            until: 18
        },
        wednesday: {
            from: 9,
            until: 19
        },
        thursday: {
            from: 7,
            until: 17 
        },
        friday: {
            from: 7,
            until: 16
        }
    }
};
console.log(myObject);
const myMap = new Map(Object.entries(myObject.workHours));
console.log(myMap);