"use strict";

function goToSlide(currentSlide) {
    slides.forEach(
        (slide, index) =>
            (slide.style.transform = `translateX(${
                100 * (index - currentSlide)
            }%)`)
        // (slide.style.transform = `translateY(${
        //     100 * (index - currentSlide)
        // }%)`)
    );
}

function nextSlide() {
    currentSlide = currentSlide < maxSlide - 1 ? ++currentSlide : 0;
    goToSlide(currentSlide);
    activateDot(currentSlide);
}

function previousSlide() {
    currentSlide = currentSlide > 0 ? --currentSlide : maxSlide - 1;
    goToSlide(currentSlide);
    activateDot(currentSlide);
}

function creatDots(slides) {
    slides.forEach((_, index) => {
        dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${index}"></button>`
        );
    });
}

function activateDot(slide) {
    document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
}

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector(".slider");
slider.style.transform = "scale(0.5)";
slider.style.overflow = "visible";

creatDots(slides);
activateDot(0);

goToSlide(0);

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

document.addEventListener("keydown", function (e) {
    e.key === "ArrowLeft" && previousSlide();
    e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        //console.log(slide);
        goToSlide(slide);
        activateDot(slide);
    }
});
