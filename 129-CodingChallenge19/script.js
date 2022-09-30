"use strict";

/*
Your tasks:

1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h

2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console

3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console

4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
*/

function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    this.speed = this.speed >= 0 ? this.speed : 0;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const car1 = new Car("BMW", 110);
const car2 = new Car("Mercedes", 100);

car1.accelerate();
car2.brake();

car1.accelerate();
car2.brake();

console.log(car1);
console.log(car2);

console.log(Car.prototype);
console.log(car1.__proto__);
