"use strict"

const buttonAgain = document.querySelector(".button-again");
const buttonCheck = document.querySelector(".button-check");
const secretNumber = document.querySelector(".secret-number");
const guessNumber = document.querySelector(".guess-number");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const body = document.querySelector("body");
const initialScore = 20;
let highScoreSaved = 0;
let isGameOver = false;
let randomNumber;
let actualScore;

function gameStartValues()
{
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    secretNumber.textContent = "?"
    body.style.backgroundColor = "#222";
    message.textContent = "Start Guessing..."
    score.textContent = initialScore;
    guessNumber.disabled = false;
    guessNumber.value = '';
    actualScore = initialScore;
    isGameOver = false;
    
    //secretNumber.textContent = randomNumber;
}

gameStartValues();

buttonCheck.addEventListener("click", function(){
    console.log(guessNumber.value);

    if (!isGameOver)
    {
        if ((!guessNumber.value) || (guessNumber.value < 1) || (guessNumber.value > 20)) 
        {
            message.textContent = "No Valid Number!";
        }
        else if(parseInt(guessNumber.value) === randomNumber)
        {
            message.textContent = "Correct Number!";
            body.style.backgroundColor = "#60B347";
            secretNumber.textContent = randomNumber;
            guessNumber.disabled = true;
            isGameOver = true;

            highScoreSaved = actualScore > highScoreSaved ? actualScore : highScoreSaved;
        }
        else
        {
            message.textContent = guessNumber.value < randomNumber ? "Too Low" : "Too High";
            actualScore--;
        }
            
        if (actualScore < 1)
        {
            message.textContent = "You Lost!";
            body.style.backgroundColor = "#FF0000";
            guessNumber.disabled = true;
            isGameOver = true;
        }

        score.textContent = actualScore;
        highScore.textContent = highScoreSaved;
    }
});

buttonAgain.addEventListener("click", function(){
    gameStartValues();
});