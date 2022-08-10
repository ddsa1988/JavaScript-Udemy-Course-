"use strict"

const buttonNew = document.querySelector(".button-new");
const buttonRoll = document.querySelector(".button-roll");
const buttonHold = document.querySelector(".button-hold");
const elementDice = document.querySelector(".dice");

let [elementPlayer, elementScore, elementCurrent]  = [[], [], []];
elementPlayer[0] = document.querySelector(".player-0");
elementScore[0] = document.querySelector("#score-0");
elementCurrent[0] = document.querySelector("#current-0");
elementPlayer[1] = document.querySelector(".player-1");
elementScore[1] = document.querySelector("#score-1");
elementCurrent[1] = document.querySelector("#current-1");

const numberPlayers = 2;
const gameMaxPoints = 20;
let isGameOver = false;
let activePlayer = 0;
let currentScore = 0;
let totalScore = [0,0];

function init()
{
    for(let i = 0; i < numberPlayers; i++)
    {
        elementPlayer[i].classList.remove("player-winner")
        elementPlayer[i].classList.remove("player-active");
        elementScore[i].textContent = 0;
        elementCurrent[i].textContent = 0;
        totalScore[i] = 0;
    }
    //activePlayer = 0;
    elementPlayer[activePlayer].classList.add("player-active");
    elementDice.classList.add("hidden");
    isGameOver = false;
    currentScore = 0;
}

function switchPlayer()
{
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    for(let i = 0; i < numberPlayers; i++)
    {
        elementPlayer[i].classList.toggle("player-active");
        elementCurrent[i].textContent = 0
    }
}

init();

buttonNew.addEventListener("click", init);

buttonRoll.addEventListener("click", function(){
    if (isGameOver) { return; }
    const diceValue = Math.trunc(Math.random() * 6 + 1);
    elementDice.src = `Images/dice-${diceValue}.png`;
    elementDice.classList.remove("hidden");
    
    if (diceValue !== 1)
    {
        currentScore += diceValue;
        elementCurrent[activePlayer].textContent = currentScore;
        return;
    }
    switchPlayer();
});
    
buttonHold.addEventListener("click", function(){
    if (isGameOver) { return; }
    totalScore[activePlayer] += currentScore;
    elementScore[activePlayer].textContent =  totalScore[activePlayer];
        
    if (totalScore[activePlayer] >= gameMaxPoints)
    {
        elementPlayer[activePlayer].classList.add("player-winner");
        elementDice.classList.add("hidden");
        isGameOver = true;
        return;
    }
    switchPlayer();     
});