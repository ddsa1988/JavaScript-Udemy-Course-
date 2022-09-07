"use strict";

const now = new Date();

const options1 = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    weekday: "long",
};

const options2 = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
};

console.log(now);

console.log(new Intl.DateTimeFormat("en-US").format(now)); //United States
console.log(new Intl.DateTimeFormat("en-GB", options1).format(now)); //England
console.log(new Intl.DateTimeFormat("pt-PT", options2).format(now)); //Portugal

const locale = navigator.language;
console.log(locale);
console.log(new Intl.DateTimeFormat(locale).format(now)); //United States
