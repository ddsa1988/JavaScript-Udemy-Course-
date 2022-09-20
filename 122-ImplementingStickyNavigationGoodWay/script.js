"use strict";

const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const header = document.querySelector(".header");

const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entries);

    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
