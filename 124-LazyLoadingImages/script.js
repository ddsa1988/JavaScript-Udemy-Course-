"use strict";

const imgTargets = document.querySelectorAll("img[data-src]");
//console.log(imgTargets);

function loadImg(entries, observer) {
    const [entry] = entries;
    console.log(entries);

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
});

imgTargets.forEach((img) => imgObserver.observe(img));
