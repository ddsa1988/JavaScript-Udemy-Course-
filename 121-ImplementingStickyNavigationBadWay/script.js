"use strict";

const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener("scroll", function () {
    //console.log(window.scrollY);
    if (window.scrollY > initialCoords.top) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});
