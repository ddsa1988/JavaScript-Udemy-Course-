/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
*/

"use strict"

const calcAverage = (a, b, c) => (a + b + c)/3;

function checkWinner(avgKoalas, avgDolhins)
{
    if (avgKoalas >= (avgDolhins * 2))
    {
        console.log(`Koalas's Win (${avgKoalas} vs. ${avgDolhins})`);
    }
    else if (avgDolhins >= (avgKoalas * 2))
    {
        console.log(`Dolphin's Win (${avgDolhins} vs. ${avgKoalas})`);
    }
    else
    {
        console.log(`No team wins. Koalas's ${avgKoalas} vs. Dolphin's ${avgDolhins}`);
    }
}

const dolphinsScore1 = Number(prompt("Type the Dolphins' first score:"));
const dolphinsScore2 = Number(prompt("Type the Dolphins' second score:"));
const dolphinsScore3 = Number(prompt("Type the Dolphins' thirth score:"));

const koalasScore1 = Number(prompt("Type the Koalas' first score:"));
const koalasScore2 = Number(prompt("Type the Koalas' second score:"));
const koalasScore3 = Number(prompt("Type the Koalas' thirth score:"));

const dolphinsAvgScore = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const koalasAvgScore = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(koalasAvgScore, dolphinsAvgScore);