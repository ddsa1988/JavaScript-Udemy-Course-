"use strict"

const restaurant1 = {
    name: "Capri",
    numberOfTables: 0,
    numberOfGuests: 10
};

const restaurant2 = {
    name: "La Piazza",
    owner: "Giovanni"
};

restaurant1.numberOfTables ??= 20;
restaurant2.numberOfTables ??= 20;
console.log(restaurant1);
console.log(restaurant2);
console.log();

restaurant1.numberOfGuests ||= 10;
restaurant2.numberOfGuests ||= 10;
console.log(restaurant1);
console.log(restaurant2);
console.log();

restaurant1.owner &&= "<Anonumous>";
restaurant2.owner &&= "<Anonumous>";
console.log(restaurant1);
console.log(restaurant2);
console.log();