"use strict"

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const containerMovements = document.querySelector(".movements");

function displayMovements(movements){
    containerMovements.innerHTML = "";

    movements.forEach(function(value, index){
        const type = value > 0 ? "deposit" : "withdrawal";
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                <div class="movements__value">${value} USD</div>
            </div>
            `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
}

displayMovements(movements);