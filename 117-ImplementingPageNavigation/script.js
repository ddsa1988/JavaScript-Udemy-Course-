"use strict";

// document.querySelectorAll(".nav__link").forEach(function (element) {
//     element.addEventListener("click", function (e) {
//         e.preventDefault();
//         const id = this.getAttribute("href");
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});
