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

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelInterest = document.querySelector(".summary__value--interest");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");

const inputLoginUserName = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");

// Functions
function displayMovements(movements, sort = false) {
    containerMovements.innerHTML = "";

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (value, i) {
        const type = value > 0 ? "deposit" : "withdrawal";

        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__value">${value}€</div>
      </div>`;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
}

function calcDisplayBalance(acc) {
    acc.balance = acc.movements.reduce((acc, value) => acc + value, 0);
    labelBalance.textContent = `${acc.balance}€`;
}

function calcDisplaySummary(acc) {
    const incomes = acc.movements
        .filter((value) => value > 0)
        .reduce((acc, value) => acc + value, 0);
    labelSumIn.textContent = `${incomes}`;

    const out = acc.movements
        .filter((value) => value < 0)
        .reduce((acc, value) => acc + value, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
        .filter((value) => value > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((value, index, array) => value >= 1)
        .reduce((acc, value) => acc + value, 0);
    labelInterest.textContent = `${interest}`;
}

function createUsernames(accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
    });
}

createUsernames(accounts);

// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
    //Prevent form from submitting
    e.preventDefault();
    currentAccount = accounts.find(
        (acc) => acc.username === inputLoginUserName.value
    );
    //console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // ?. : Optional Chaining - Checks if the property exists
        labelWelcome.textContent = `Welcome Back, ${
            currentAccount.owner.split(" ")[0]
        }!`;

        //Show page content
        containerApp.style.opacity = 100;

        //Clear input fields
        inputLoginUserName.value = inputLoginPin.value = "";
        inputLoginPin.blur();

        //Display movements
        displayMovements(currentAccount.movements);

        //Display balance
        calcDisplayBalance(currentAccount);

        //Display summary
        calcDisplaySummary(currentAccount);
    }
});
