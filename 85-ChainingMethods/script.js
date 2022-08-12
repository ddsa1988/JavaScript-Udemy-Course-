"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const totalDepositUsd = movements
    .filter((value) => value > 0)
    .map((value) => value * eurToUsd)
    .reduce((acc, value) => acc + value, 0);
console.log(totalDepositUsd);
