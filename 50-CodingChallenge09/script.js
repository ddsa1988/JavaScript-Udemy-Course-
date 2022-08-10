"use strict"

/*
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
    team1: "Bayer Munich",
    team2: "Borussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski"
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze"
        ]
    ],  
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
    printGoals: function(...playersScored)
    {
        let goalsSum = 0;
        for (let i = 0; i < playersScored.length; i++)
        {
            console.log(`The player ${playersScored[i]} scored a goal!!!`);
            goalsSum += 1;
        }
        console.log(`The total of gols scored are ${goalsSum}`);
    }
};

//1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
console.log();

//2
const [goalkeeper1, ...fieldPlayers1] = players1;
console.log(goalkeeper1);
console.log(fieldPlayers1);
console.log();

//3
const allPlayers = [...players1, ...players2]
console.log(allPlayers);
console.log();

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
console.log();

//5
const {odds: {team1, x : draw, team2}} = game;
console.log(team1);
console.log(draw);
console.log(team2);
console.log();

//6
function printGoals(...playeresScored)
{
    let totalGoals = 0;
    for (let i = 0; i < playeresScored.length; i++)
    {
        totalGoals += 1;
        console.log(`The player ${playeresScored[i]} scored a goal!`);
    }
    console.log(`The total of golas are ${totalGoals}.`);
};

const playersScored = ["Davies", "Muller", "Lewandowski", "Kimmich"];
printGoals(...playersScored);
console.log();

//7

team1 < team2 && console.log("Team 1 is more likely to win!");
team2 < team1 && console.log("Team 2 is more likely to win!");