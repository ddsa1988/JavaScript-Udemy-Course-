"use strict";

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("Link", e.target, e.currentTarget);
    //e.stopPropagation(); //Stop propagation
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("Container", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("Nav", e.target, e.currentTarget);
});
