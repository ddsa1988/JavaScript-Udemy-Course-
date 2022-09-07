"use strict";

// setInterval(function () {
//     const now = new Date();
//     console.log(
//         `${now.getHours()}`.padStart(2, 0) +
//             ":" +
//             `${now.getMinutes()}`.padStart(2, 0) +
//             ":" +
//             `${now.getSeconds()}`.padStart(2, 0)
//     );
// }, 1000);

const labelTimer = document.querySelector(".timer");
let time = 120; //Seconds

const timer = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //console.log(`${min}:${sec}`);
    labelTimer.textContent = `${min}:${sec}`;

    if (time <= 0) clearInterval(timer);
    time--;
}, 1000);
