"use strict";

class Person {
    #cpf;
    static classValue = 0;

    constructor(fullName, birthday, cpf) {
        this.fullName = fullName;
        this.birthday = birthday;
        this.#cpf = cpf;
    }

    //Static method: only available for the class, not for the instances
    static getData() {
        console.log(Person.prototype);
    }

    getFullName() {
        console.log(this.fullName);
        return this; //The keyword this return the object
    }

    getBirthday() {
        console.log(this.birthday);
        return this; //The keyword this return the object
    }

    getCpf() {
        console.log(this.#cpf);
        return this; //The keyword this return the object
    }
}

const diego = new Person("Diego", 1988, "02547788");
console.log(diego);

console.log("\n");

diego.getFullName().getBirthday().getCpf();

console.log("\n");

Person.classValue = 10;
Person.getData();
Person.classValue = 250;
Person.getData();
