"use strict";

class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this._test = 200; //Protected property. It just a convention to show that the data is not supose to be used outside of the class
    }
}

const myData = new Person("Diego", 1988);
console.log(myData);
console.log(myData._test);
