"use strict";

class Person {
    //Public Attributes
    testPublic = 300;

    //Private Attributes
    #testPrivate = 600;
    #birthYear;

    constructor(name, birthYear) {
        this.name = name;
        this.#birthYear = birthYear;
    }

    //Public Method
    getPublicData() {
        this.#getPrivateData();
    }

    //Private Method
    #getPrivateData() {
        console.log(this.name, this.#birthYear);
    }
}

const myData = new Person("Diego", 1988);
console.log(myData);
console.log(myData.testPublic);
// console.log(myData.#testPrivate); Error
// console.log(myData.#birthYear); Error
myData.getPublicData();
// myData.#getPublicData(); Error
