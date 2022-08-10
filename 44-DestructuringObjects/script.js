"use strict"

const restaurant = {
    restaurantName: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 23
        },
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

//The variables names created have to be iqual the keys names of the object
const { restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName);
console.log(openingHours);
console.log(categories);
console.log();

//This way the variables names creted can be different from the keys names of the object
const { restaurantName: names, openingHours: hours, categories: tags } = restaurant;
console.log(names);
console.log(openingHours);
console.log(categories);
console.log();

//Set a default value if the key name in the object is not found
const { lastMenu: menu = null, starterMenu: starters = [] } = restaurant;
console.log(menu);
console.log(starters);
console.log();

//Mutating Variables
let a = 111;
let b = 999;

const myObj = { a: 23, b: 7, c: 14 };
({a, b} = myObj);
console.log(a, b);
console.log();

//Nested Objects
const { fri: { open, close } } = openingHours;
console.log(open, close);
console.log();

const { fri: { open: openHour, close: closeHour } } = openingHours;
console.log(openHour, closeHour);
console.log();

//Object as a function argument
function orderDelivery({ starterIndex = 0, mainIndex = 0, time = "00:00", address = null })
{
    console.log(starterIndex, mainIndex, time, address);
}

orderDelivery({
    time: "21:32",
    address: "Seven Avenue",
    mainIndex: 3,
    starterIndex: 1
});
console.log();

orderDelivery({});