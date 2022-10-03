"use strict";

const PersonProtoype = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const diego = Object.create(PersonProtoype);
console.log(diego);
diego.init("Diego", 1988);
console.log(diego);
diego.calcAge();
