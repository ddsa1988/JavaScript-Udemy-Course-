"use strict"

// The Spread Operador (...) separetes an array values using comas

//Merge Arrays
const newArray = [7, 8, 9];
const badNewArray = [1, 2, 3, newArray[0], newArray[1], newArray[2]];
console.log(badNewArray);
console.log(...badNewArray);
console.log();

const goodNewArray = [4, 5, 6, ...newArray];
console.log(goodNewArray);
console.log(...goodNewArray);
console.log();

const bothNewArray = [...badNewArray, ...goodNewArray];
console.log(bothNewArray);
console.log(...bothNewArray);
console.log();

//Nested Array
const nestedArray = [1, 2, 3, newArray]
console.log(nestedArray);
console.log();

//String To Array

const myNameString = "Diego";
const myNameArray = [...myNameString];
console.log(myNameArray);
console.log(myNameString);
console.log(...myNameString);
console.log();

//Real World Example
function orderPasta(ing1, ing2, ing3)
{
    console.log(`Let's make a pasta with ${ing1}, ${ing2} and ${ing3}!`);
}

const ingredientes = ["aspargus", "cheese", "mushurooms"];
orderPasta(...ingredientes);
console.log();

//Objects
const restaurant = {
    restaurantName: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy"
};

const restaurantCopy = { ...restaurant };
restaurantCopy.restaurantName = "Ristorante Rome";
console.log(restaurant);
console.log(restaurantCopy);