"use strict";

class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    showData() {
        console.log(this.fullName, this.birthYear);
    }
}

class Student extends Person {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    showData() {
        console.log(this.fullName, this.birthYear, this.course);
    }

    showDataParentClass() {
        super.showData();
    }
}

const myData = new Student("Diego", 1988, "Software");
myData.showData();
myData.showDataParentClass();
