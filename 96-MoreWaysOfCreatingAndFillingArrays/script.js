"use strict";

//Fill method
const a = new Array(7);
console.log(a);
// a.fill(1);
a.fill(1, 3, 5);
console.log(a);
console.log();

//From method
const b = Array.from({ length: 7 }, () => 1);
console.log(b);

const c = Array.from({ length: 7 }, (current, index) => index + 1);
console.log(c);

const d = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
console.log(d);
