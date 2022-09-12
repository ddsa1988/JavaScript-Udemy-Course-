"use strict";

const header = document.querySelector(".header");
const msg = document.createElement("div");

msg.classList.add("cookie-message");
msg.innerHTML =
    'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

header.append(msg);

//Styles
msg.style.backgroundColor = "rgb(55, 56, 61)";
msg.style.width = "120%";

console.log(msg.style.backgroundColor);
console.log(msg.style.color); //Nothing appers because we didn't set a value for this

console.log(getComputedStyle(msg));
console.log(getComputedStyle(msg).color);
console.log(getComputedStyle(msg).height);

msg.style.height =
    Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + "px";

console.log(getComputedStyle(msg).height);

document.documentElement.style.setProperty("--color-primary", "orangered");

//Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); //Get the absolute path
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute("alt")); //Get the relative path
console.log(logo.getAttribute("src"));
logo.setAttribute("company", "Bankist");
