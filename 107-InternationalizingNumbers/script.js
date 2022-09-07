"use strict";

const number = 38754.23;

console.log(number);
console.log(new Intl.NumberFormat("en-US").format(number)); //United States
console.log(new Intl.NumberFormat("de-DE").format(number)); //Germany

const options1 = {
    style: "unit",
    unit: "mile-per-hour",
};

const options2 = {
    style: "percent",
    unit: "mile-per-hour",
};

const options3 = {
    style: "currency",
    unit: "mile-per-hour",
    currency: "EUR",
};

console.log(new Intl.NumberFormat("en-US", options1).format(number)); //United States
console.log(new Intl.NumberFormat("de-DE", options2).format(number)); //Germany
console.log(new Intl.NumberFormat("de-DE", options3).format(number)); //Germany
