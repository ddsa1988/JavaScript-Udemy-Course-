"use strict";

class Person {
    constructor(fullName, birthyear) {
        this.setFullName(fullName);
        this.birthyear = birthyear;
    }

    setFullName(name) {
        this.fullName = name.includes(" ") ? name : undefined;
        if (!this.fullName) alert(`"${name} is not a full name!`);
    }

    getFullName() {
        return this.fullName;
    }

    //The static keyword is used to construct methods that will exist regardless of whether or not any instances of the class are generated.
    static hello() {
        console.log(`Hello`);
    }
}

const diego = new Person("Diego Alexandre", 1988);
console.log(diego);
console.log(diego.getFullName());

Person.hello();
console.log(Person.prototype);
