"use strict";

//Example 1
function secureBooking(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers.`);
    };
}

const booker = secureBooking();

console.dir(booker);
booker();
booker();
console.dir(booker);
console.log();

//Example 2
let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);
console.log();

//Example 3
function boardPassengers(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    }, wait * 1000); //The time is in ms

    console.log(`Will start boarding in ${wait} seconds.`);
}

const  perGroup = 1000;
boardPassengers(180, 10);