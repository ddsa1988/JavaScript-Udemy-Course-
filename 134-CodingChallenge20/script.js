"use strict";

/*
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.

Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/

class Car {
    constructor(make, speed) {
        this.setCarSpeed(speed);
        this.make = make;
    }

    msg(speed, speedType) {
        console.log(`${this.make} is going at ${speed} ${speedType}.`);
    }

    setCarSpeed(speed) {
        this.speed = speed >= 0 && speed <= 300 ? speed : 0;
    }

    getCarSpeed() {
        this.msg(this.speed, "km/h");
    }

    accelerate() {
        this.speed += 10;
        this.speed = this.speed <= 300 ? this.speed : 300;
        this.msg(this.speed, "km/h");
    }

    brake() {
        this.speed -= 5;
        this.speed = this.speed >= 0 ? this.speed : 0;
        this.msg(this.speed, "km/h");
    }

    setSpeedUs(speed) {
        this.speed = speed * 1.6 >= 0 && speed * 1.6 <= 300 ? speed * 1.6 : 0;
    }

    getSpeedUs() {
        this.msg(this.speed / 1.6, "mi/h");
    }
}

const myCar = new Car("Ford", 120);
console.log(myCar);
myCar.getCarSpeed();
myCar.getSpeedUs();
