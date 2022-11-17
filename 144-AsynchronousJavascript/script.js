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
    countriesContainer.style.opacity = 1;
}

function getCountryData(country) {
    //AJAX call country 1
    const request1 = new XMLHttpRequest();
    request1.open("GET", `https://restcountries.com/v2/name/${country}`);
    request1.send();

    request1.addEventListener("load", function () {
        const [data1] = JSON.parse(this.responseText);
        console.log(JSON.parse(this.responseText));
        console.log(data1);

        //Render country 1
        renderCountry(data1);

        //Get neighbour country
        const neighbour = data1.borders?.[0];

        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener("load", function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            //Render country 2
            renderCountry(data2, "neighbour");
        });
    });
}

getCountryData("portugal");
// getCountryData("usa");
