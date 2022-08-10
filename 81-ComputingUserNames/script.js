"use strict";

function creatUserName(user) {
    return user
        .toLowerCase()
        .split(" ")
        .map((word) => word[0])
        .join("");
}

const user = "Diego dos Santos Alexandre";

const account = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

console.log(creatUserName(user));
console.log(creatUserName(account.owner));
