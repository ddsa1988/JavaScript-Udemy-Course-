"use strict";

const Person = {
    init(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    },

    showData() {
        console.log(this.fullName, this.birthYear);
    },
};

const diego = Object.create(Person);

diego.init("Diego", 1988);
console.log(diego);

const Student = Object.create(Person);
Student.init = function (fullName, birthYear, course) {
    Person.init.call(this, fullName, birthYear);
    this.course = course;
};

Student.showData = function () {
    console.log(this.fullName, this.birthYear, this.course);
};

Student.showParentData = function () {
    Person.showData.call(this, this.fullName, this.birthYear);
};

const amanda = Object.create(Student);

amanda.init("Amanda", 1988, "Software");
console.log(amanda);
amanda.showData();
amanda.showParentData();
