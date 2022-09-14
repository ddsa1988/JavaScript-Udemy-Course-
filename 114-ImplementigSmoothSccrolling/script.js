"use strict";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
    const s1Coords = section1.getBoundingClientRect();
    console.log(s1Coords);

    console.log(e.target.getBoundingClientRect());

    console.log(
        "Current scroll (X/Y): ",
        window.pageXOffset,
        window.pageYOffset
    );

    console.log(
        "Height/Width viewport: ",
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    //Scrolling

    // window.scrollTo(
    //     s1Coords.left + window.pageXOffset,
    //     s1Coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //     left: s1Coords.left + window.pageXOffset,
    //     top: s1Coords.top + window.pageYOffset,
    //     behavior: "smooth",
    // });

    section1.scrollIntoView({
        behavior: "smooth",
    });
});
