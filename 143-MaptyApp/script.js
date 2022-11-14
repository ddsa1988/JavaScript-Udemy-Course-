"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class WorkOut {
    date = new Date();
    id = (Date.now() + "").slice(-10);
    clicks = 0;

    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(
            1
        )} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}

class Running extends WorkOut {
    type = "running";

    constructor(coords, distance, duration, cadance) {
        super(coords, distance, duration);
        this.cadance = cadance;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends WorkOut {
    type = "cycling";

    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycle1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1);
console.log(cycle1);

class App {
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition();
        form.addEventListener("submit", this._newWorkout.bind(this));
        inputType.addEventListener("change", this._toogleElevationField);

        containerWorkouts.addEventListener(
            "click",
            this._moveToPopUp.bind(this)
        );
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function () {
                    alert("Could not get your position");
                }
            );
        }
    }

    _loadMap(position) {
        //console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
        console.log(`https://www.google.com.br/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        this.#map = L.map("map").setView(coords, this.#mapZoomLevel);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        this.#map.on("click", this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
    }

    _hideForm() {
        inputDistance.value =
            inputDuration.value =
            inputCadence.value =
            inputElevation.value =
                "";

        form.style.display = "none";
        form.classList.add("hidden");
        setTimeout(() => (form.style.display = "grid"), 1000);
    }

    _toogleElevationField() {
        inputElevation
            .closest(".form__row")
            .classList.toggle("form__row--hidden");
        inputCadence
            .closest(".form__row")
            .classList.toggle("form__row--hidden");
    }

    _newWorkout(event) {
        event.preventDefault();

        // function validInputs(...inputs) {
        //     return inputs.every(function (input) {
        //         return Number.isFinite(input);
        //     });
        // }

        const validInputs = (...inputs) =>
            inputs.every((input) => Number.isFinite(input));

        const allPositive = (...inputs) => inputs.every((input) => input > 0);

        //Get data from form
        const type = inputType.value;
        const distance = Number(inputDistance.value);
        const duration = Number(inputDuration.value);
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        //If workout running, create runnig object
        if (type === "running") {
            const cadence = Number(inputCadence.value);

            //Check if data is valid
            if (
                // !Number.isFinite(distance) ||
                // !Number.isFinite(duration) ||
                // !Number.isFinite(cadence)
                !validInputs(distance, duration, cadence) ||
                !allPositive(distance, duration, cadence)
            )
                return alert("Inputs have to be positive numbers!");

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        //If workout cycling, create cycling object
        if (type === "cycling") {
            const elevation = Number(inputElevation.value);
            if (
                !validInputs(distance, duration, elevation) ||
                !allPositive(distance, duration)
            )
                return alert("Inputs have to be positive numbers!");

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        //Add new object to workout arrar
        this.#workouts.push(workout);
        console.log(this.#workouts);

        //Display marker
        this._renderWorkoutMarker(workout);

        //Render workout on list
        this._renderWorkout(workout);

        //Clear inputs field
        this._hideForm();
    }
    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                })
            )
            .setPopupContent(
                `${"running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`
            )
            .openPopup();
    }

    _renderWorkout(workout) {
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${
                    workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
                }</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>
            `;

        if (workout.type === "running") {
            html += `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadance}</span>
                <span class="workout__unit">spm</span>
              </div>`;
        }

        if (workout.type === "cycling") {
            html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>`;
        }

        form.insertAdjacentHTML("afterend", html);
    }
    _moveToPopUp(event) {
        const workoutEl = event.target.closest(".workout");
        //console.log(workoutEl);

        if (!workoutEl) return;

        const workout = this.#workouts.find(
            (work) => work.id === workoutEl.dataset.id
        );
        //console.log(workout);

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1,
            },
        });

        workout.click();
    }
}

const app = new App();
