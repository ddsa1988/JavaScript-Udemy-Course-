"use strict"

let myArray = ['a', 'b', 'c', 'd', 'e'];

//Slice
console.log(myArray.slice(1));
console.log(myArray.slice(2, 4));
console.log(myArray.slice(-2));
console.log(myArray.slice());
console.log([...myArray]);
console.log();

//Splice
console.log(myArray.splice(-1));
console.log(myArray);
console.log(myArray.splice(1, 2));
console.log(myArray);
console.log();

//Reverse
myArray = ['j', 'i', 'h', 'g', 'f'];
myArray.reverse();
console.log(myArray);
console.log();

//Concat
const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = ['j', 'i', 'h', 'g', 'f'];
const letters = array1.concat(array2);
console.log(letters);
console.log([...array1, ...array2]);
console.log();

//Join
console.log(letters.join(' - '));