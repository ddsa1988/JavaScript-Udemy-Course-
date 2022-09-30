"use strict";

class Person {
    constructor(firstName, birthyear) {
        this.firstName = firstName;
        this.birthyear = birthyear;
    }

    //Methods will be added to prototype property
    calcAge() {
        console.log(2022 - this.birthyear);
    }
}

const diego = new Person("Diego", 1988);

console.log(Person.prototype);
console.log(diego.__proto__);
console.log(diego);
diego.calcAge();
