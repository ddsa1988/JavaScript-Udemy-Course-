"use strict";

const delay = 5000; // 5 second delay
const myName = "Diego";
const timer = delay;
const result = false;

console.log("Hello 1");
const myTimer = setTimeout(
    (parameter1, parmater2) =>
        console.log(`Hello ${myName} after ${timer / 1000} seconds`),
    delay,
    myName,
    timer
);
console.log("Hello 2");

if (result) {
    clearTimeout(myTimer);
}
