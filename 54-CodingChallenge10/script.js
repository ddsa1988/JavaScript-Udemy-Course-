"use strict"

/*
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
    {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
    }
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};

//1
for(const [index, value] of game.scored.entries())
{
    console.log(`Goal ${index + 1}: ${value}`);
}

//2
function oddAverage(oddObj)
{
    let sum = 0;
    const values = Object.values(oddObj);
    for (const value of values)
    {
        sum += value;
    }
    console.log(`The average value is ${sum / values.length}`);
}
oddAverage(game.odds);
console.log();

//3
function printOdd(oddObj)
{
    const entries = Object.entries(game.odds);
    for (const [key, value] of entries)
    {
        const teamString = key === 'x' ? "draw" : `victory ${game[key]}`;
        console.log(`Odd of ${teamString}: ${value}`);

        /*if (key === 'x')
        {
            console.log(`Odd of draw: ${value}`);
            continue;
        }
        console.log(`Odd of victory ${game[key]}: ${value}`); */
    }
}
printOdd(game.odds);
console.log();

//4
const scorers = {};
for (const player of game.scored)
{
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
    /*if (scorers[player]) {scorers[player]++;}
    else {scorers[player] = 1;}*/
}
console.log(scorers);