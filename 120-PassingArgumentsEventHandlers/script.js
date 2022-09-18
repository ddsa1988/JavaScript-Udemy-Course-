"use strict";

function handleHover(e, opacity) {
    //console.log(this);
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((element) => {
            if (element !== link) element.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}

const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));
