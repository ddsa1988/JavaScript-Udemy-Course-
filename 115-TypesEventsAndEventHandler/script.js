"use strict";

const h1 = document.querySelector("h1");
let cont = 0;

const alertH1 = function (e) {
    cont++;
    window.alert("Great! You are reading the heading!");
    if (cont >= 3) h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);
