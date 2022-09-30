"use strict";

const account = {
    owner: "Diego",
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);
account.latest = 55;
console.log(account.movements);

console.log("\n");

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
}

const diego = new Person("Diego Alexandre", 1988);
console.log(diego);
console.log(diego.getFullName());
