"use strict";

function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

console.log(Person.prototype);

function Student(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

console.log(Student.prototype);

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

console.log(Student.prototype);

const diego = new Student("Diego", 1988, "Computer Science");
console.log(diego);

diego.calcAge();
