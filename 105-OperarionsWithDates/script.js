"use strict";

const now = new Date();
console.log(now);
console.log(Number(now)); //Time stamp miliseconds

const birthday = new Date(1988, 0, 22);
console.log(birthday);
console.log(Number(birthday));

console.log(Math.abs(now - birthday) / (1000 * 60 * 60 * 24) / 365); // 1000 (1 second), 60 (1 minute), 60 (1 hour), 24 (1 day), 365 (1 year)
