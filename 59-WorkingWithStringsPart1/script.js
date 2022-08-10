"use strict"

const myName = "Diego";

for (let i = 0; i < myName.length; i++)
{
    console.log(myName[i]);
}
console.log("\n");

for (const char of myName)
{
    console.log(char);
}
console.log("\n");

const myLastName = "dos Santos Alexandre";
console.log(myLastName.indexOf('a'));
console.log(myLastName.lastIndexOf('a'));
console.log(myLastName.slice(4));
console.log(myLastName.slice(4, 10));
console.log(myLastName.slice(0, myLastName.indexOf(' ')));
console.log(myLastName.slice(myLastName.lastIndexOf(' ') + 1));
console.log(myLastName.slice(-16, -10));
console.log("\n");

function checkMiddleSeat(seat)
{
    seat = seat.toUpperCase();
    seat.endsWith('B') || seat.endsWith('E') ? console.log("You got the middle seat!") : console.log("You got luck!");
}

checkMiddleSeat("11b");
checkMiddleSeat("23C");
checkMiddleSeat("3E");