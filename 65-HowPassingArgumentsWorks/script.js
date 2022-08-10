"use strict"

//Primitive Values And Reference Values 

const myNumber = 10;            //Primitive Value creates a new variable with the same value
const myString = "Diego";       //Primitive Value
const myArray = [0, 1, 2, 3];   //Reference Value creates a new variable that points to the same object in the heap
const myObject = {              //Reference Value
    name: "Diego",
    cpf: 123456789
};

function myFunction(num, str, arr, obj)
{
    num = 250;
    str = "Alexandre";
    
    for (let i = 0; i < arr.length;  i++)
    {
        arr[i] = arr.length - (i + 1);
    }

    obj.cpf = 987654321;
}

myFunction(myNumber, myString, myArray, myObject);

console.log(myNumber);
console.log(myString);
console.log(myArray);
console.log(myObject);
console.log(typeof(myNumber));
console.log(typeof(myString));
console.log(typeof(myArray));
console.log(typeof(myObject));