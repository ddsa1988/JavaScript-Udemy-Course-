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
