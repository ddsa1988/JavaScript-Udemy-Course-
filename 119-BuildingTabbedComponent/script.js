"use strict";

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

console.log(tabs);
console.log(tabsContainer);
console.log(tabsContent);

tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");
    console.log(e.target);
    console.log(clicked);

    if (!clicked) return;

    tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
    clicked.classList.add("operations__tab--active");

    tabsContent.forEach((content) =>
        content.classList.remove("operations__content--active")
    );

    console.log(clicked.dataset.tab);

    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
});
