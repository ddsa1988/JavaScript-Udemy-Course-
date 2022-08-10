"use strict"

const bookings = [];

function creatBooking(flightNumber, numberPassangers = 1, price = 100 * numberPassangers)
{
    const booking = {
        flightNumber,
        numberPassangers,
        price
    };
    console.log(booking);
    bookings.push(booking);
}

creatBooking("LH123");
creatBooking("LH123", 5);
creatBooking("LH123", undefined, 200);