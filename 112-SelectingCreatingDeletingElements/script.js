"use strict";

//Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
console.log(header);

const allSections = document.querySelectorAll(".section");
console.log(allSections);

const oneSection = document.getElementById("section--1");
console.log(oneSection);

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//Creating and Inserting Elements
const msg = document.createElement("div");

msg.classList.add("cookie-message");
msg.innerHTML =
    'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

//header.prepend(msg);
header.append(msg);
//header.append(msg.cloneNode(true));

//header.before(msg);
//header.after(msg);

//Delete Elements
document
    .querySelector(".btn--close-cookie")
    .addEventListener("click", function () {
        msg.remove();
        //msg.parentElement.removeChild(msg);
    });
