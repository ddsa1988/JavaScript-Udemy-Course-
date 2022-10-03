"use strict";

/*
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)

2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'

3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'

4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉

Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

function Car(make, speed) {
    this.make = make;
    this.setCarSpeed(speed);
}

Car.prototype.msg = function () {
    console.log(`${this.make} is going at ${this.speed} km/h.`);
};

Car.prototype.setCarSpeed = function (speed) {
    this.speed = speed >= 0 && speed <= 300 ? speed : 0;
};

Car.prototype.accelerate = function () {
    this.speed += 20;
    this.speed = this.speed <= 300 ? this.speed : 300;
    this.msg();
};

Car.prototype.brake = function () {
    this.speed -= 5;
    this.speed = this.speed >= 0 ? this.speed : 0;
    this.msg();
};

console.log(Car.prototype);

function EV(make, speed, chargeBattery) {
    Car.call(this, make, speed);
    this.chargeBattery = chargeBattery;
}

//Linking prototypes
EV.prototype = Object.create(Car.prototype);

console.log(EV.prototype);

EV.prototype.msg = function () {
    console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.chargeBattery}%.`
    );
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.chargeBattery -= 1;
    this.speed = this.speed <= 300 ? this.speed : 300;
    this.chargeBattery = this.chargeBattery >= 0 ? this.chargeBattery : 0;
    this.msg();
};

EV.prototype.setChargeBattery = function (chargeTo) {
    this.chargeBattery = chargeTo;
    this.chargeBattery =
        this.chargeBattery >= 0 && this.chargeBattery <= 100
            ? this.chargeBattery
            : 0;
};

const myCar = new EV("Tesla", 120, 22);
console.log(myCar);
myCar.msg();
myCar.brake();
myCar.accelerate();
myCar.accelerate();
myCar.setChargeBattery(90);
myCar.msg();
