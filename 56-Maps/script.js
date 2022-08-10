"use strict"

const myMap = new Map();

myMap.set("name", "Diego");
myMap.set(1, "Number 1");
myMap.set(10, 200);
console.log(myMap.set("Address", "Street Avenue")); //Calling the Set Method returns the updated Map 
console.log(myMap.get("name"));
console.log(myMap);
console.log();

const restaurant = new Map();
restaurant.set("open", 17);
restaurant.set("close", 23);
restaurant.set(true, "We're open.");
restaurant.set(false, "We're closed.")
console.log(restaurant);

const time = 21;
console.log(restaurant.get(time > restaurant.get("open") && time < restaurant.get("close")));
console.log();

console.log(restaurant.has("open"));
console.log(restaurant.size)
console.log(restaurant.entries());
console.log(restaurant.keys());
console.log(restaurant.values());
restaurant.delete(false);
console.log(restaurant);