"use strict";

function Person(firstName, birthYear) {
    //console.log(this);

    //Instances properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const diegoData = new Person("Diego", 1988);
console.log(diegoData);
console.log(diegoData instanceof Person);

console.log("\n");

const amandaData = new Person("Amanda", 1994);
console.log(amandaData);

/*
    Steps what happens when a constructor is used:
    1. New object is created;
    2. Function is called, this keyword = object;
    3. The object is linked to a prototype;
    4. Function automatically return the object
*/

console.log("\n");

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

diegoData.calcAge();
amandaData.calcAge();

console.log(diegoData.__proto__);

Person.prototype.species = "Homo Sapiens";

console.log(diegoData.species, amandaData.species);
console.log(diegoData.hasOwnProperty("firstName"));
console.log(diegoData.hasOwnProperty("species"));
