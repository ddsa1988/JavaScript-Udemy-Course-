"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data, className = "") {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
                Number(data.population) / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
                data.currencies[0].name
            }</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    // countriesContainer.style.opacity = 1;
}

function renderError(msg) {
    countriesContainer.insertAdjacentText("beforeend", msg);
    // countriesContainer.style.opacity = 1;
}

function getJSON(url, erroMsg = "Something went wrong!") {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${erroMsg} ${response.status}`);

        return response.json();
    });
}

// const resquest = fetch(`https://restcountries.com/v2/name/brazil`);
// console.log(resquest);

// function getCountryData(country) {
//     const resquest = fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function (response) {
//             console.log(response);

//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// }

// function getCountryData(country) {
//     // Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then((response) => response.json())
//         .then((data) => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders?.[0];

//             // Country 2
//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//         })
//         .then((response) => response.json())
//         .then((data) => renderCountry(data, "neighbour"))
//         .catch((err) => {
//             console.log(err);
//             renderError(`Something went wrong: ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// }

function getCountryData(country) {
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            if (!neighbour) throw new Error("No neighbour found!");

            // Country 2
            return getJSON(
                `https://restcountries.com/v2/alpha/${neighbour}`,
                "Country not found"
            );
        })
        .then((data) => renderCountry(data, "neighbour"))
        .catch((err) => {
            console.log(err);
            renderError(`Something went wrong: ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
}

// getCountryData("portugal");
getCountryData("Australia");
// getCountryData("germany");
