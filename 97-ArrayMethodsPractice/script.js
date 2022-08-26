"use strict";

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Practice

//const bankDepositSum = accounts.map((account) => account.movements).flat();
const bankDepositSum = accounts
    .flatMap((account) => account.movements)
    .filter((value) => value > 0)
    .reduce((acc, value) => acc + value, 0);

console.log(bankDepositSum);
console.log();

const numDeposit1000 = accounts
    .flatMap((account) => account.movements)
    .reduce((acc, value) => (value >= 1000 ? ++acc : acc), 0);

console.log(numDeposit1000);
console.log();

const sums = accounts
    .flatMap((account) => account.movements)
    .reduce(
        (acc, value) => {
            acc[value > 0 ? "deposits" : "withdrawals"] += value;
            return acc;
        },
        { deposits: 0, withdrawals: 0 }
    );

console.log(sums);
console.log();

function convertTitleCase(title) {
    const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

    const TitleCase = title
        .toLowerCase()
        .split(" ")
        .map((word) =>
            exceptions.includes(word)
                ? word
                : word[0].toUpperCase() + word.slice(1)
        )
        .join(" ");
    return TitleCase;
}

console.log(convertTitleCase("THIS IS A NICE TITLE"));
console.log(convertTitleCase("THIS IS A NICE TITLE, but with an example"));
