"use strict";

const h1 = document.querySelector("h1");

//Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest(".h1").style.background = "var(--gradient-primary)";
