"use strict";

let timerCounter = 0;
const delay = 1000;
const timerLimit = 5;

const myTimer = setInterval(function () {
    timerCounter++;
    console.log(`Hello ${timerCounter}`);
    if (timerCounter >= timerLimit) clearInterval(myTimer);
}, delay);
