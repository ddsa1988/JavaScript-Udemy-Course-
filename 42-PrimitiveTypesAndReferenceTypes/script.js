"use strict"

// Primite Types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName);
console.log(oldLastName);

//Reference Types

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);
console.log();

//Copying Objects
//Swallow Copy: It doesn't copy an object inside an object

const julia = {
    firstName: "Julia",
    lastName: "Williams",
    age: 27,
    family: ["Jonas", "Maria"],
};

const marriedJulia = Object.assign({}, julia);
marriedJulia.lastName = "Davis";

console.log("Before marriage: ", julia);
console.log("After marriage: ", marriedJulia);

marriedJulia.family.push("Derek");
marriedJulia.family.push("Mark");
marriedJulia.family.push("Zoe");

console.log("Before marriage: ", julia);
console.log("After marriage: ", marriedJulia);