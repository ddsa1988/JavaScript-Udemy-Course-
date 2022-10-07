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

class Car {
    #make;

    constructor(make, speed) {
        this.#make = make;
        this.setCarSpeed(speed);
    }

    #msg() {
        console.log(`${this.#make} is going at ${this.speed} km/h.`);
    }

    setCarSpeed(speed) {
        this.speed = speed >= 0 && speed <= 300 ? speed : 0;
    }

    accelerate() {
        this.speed += 20;
        this.speed = this.speed <= 300 ? this.speed : 300;
        this.#msg();
        return this;
    }

    brake() {
        this.speed -= 5;
        this.speed = this.speed >= 0 ? this.speed : 0;
        this.#msg();
        return this;
    }
}

class EV extends Car {
    #chargeBattery;
    #make;

    constructor(make, speed, chargeBattery) {
        super(make, speed);
        this.#make = make;
        this.#chargeBattery = chargeBattery;
    }

    #msg() {
        console.log(
            `${this.#make} is going at ${this.speed} km/h, with a charge of ${
                this.#chargeBattery
            }%.`
        );
    }

    accelerate() {
        this.speed += 20;
        this.#chargeBattery -= 1;
        this.speed = this.speed <= 300 ? this.speed : 300;
        this.#chargeBattery =
            this.#chargeBattery >= 0 ? this.#chargeBattery : 0;
        this.#msg();
        return this;
    }

    setChargeBattery(chargeTo) {
        this.chargeBattery = chargeTo;
        this.chargeBattery =
            this.chargeBattery >= 0 && this.chargeBattery <= 100
                ? this.chargeBattery
                : 0;
        return this;
    }
}

const myCar = new EV("Tesla", 120, 22);
console.log(myCar);
myCar.brake();
myCar.accelerate().accelerate();
myCar.accelerate().brake().setChargeBattery(90);
myCar.brake();
myCar.accelerate();
