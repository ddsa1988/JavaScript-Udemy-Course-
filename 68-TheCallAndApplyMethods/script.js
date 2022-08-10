"use strict"

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book: function(flightNumber, name)
    {
        console.log(`${name} book a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name});
    }
};

lufthansa.book(239, "Diego");
lufthansa.book(635, "Amanda");
console.log(lufthansa);
console.log();

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: []
};

const book = lufthansa.book;
console.log(book);

//book(23, "Rodrigo"); Does not work

book.call(eurowings, 23, "Rodrigo"); //The call method set the this keyword of any function we want to call
console.log(eurowings);

const flightData = [583, "Tainara"]; 
book.apply(eurowings, flightData);
console.log(eurowings);
book.call(eurowings, ...flightData);
console.log(eurowings);