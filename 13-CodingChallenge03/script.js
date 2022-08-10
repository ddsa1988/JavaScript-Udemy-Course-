/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:

1. Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
2. Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
3. Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinsScore1 = Number(prompt("Type the Dolphins' first score:"));
const dolphinsScore2 = Number(prompt("Type the Dolphins' second score:"));
const dolphinsScore3 = Number(prompt("Type the Dolphins' thirth score:"));

const koalasScore1 = Number(prompt("Type the Koalas' first score:"));
const koalasScore2 = Number(prompt("Type the Koalas' second score:"));
const koalasScore3 = Number(prompt("Type the Koalas' thirth score:"));

const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if ((dolphinsAverageScore > koalasAverageScore) && (dolphinsAverageScore >= 100))
{
    console.log(`The Dolphins' won with the average score of ${dolphinsAverageScore} against koalas' average score of ${koalasAverageScore}`);
}
else if ((dolphinsAverageScore < koalasAverageScore) && (koalasAverageScore >= 100 ))
{
    console.log(`The Koalas' won with the average score of ${koalasAverageScore} against Dolphins' average score of ${dolphinsAverageScore}`);
}
else if((dolphinsAverageScore === koalasAverageScore) && (dolphinsAverageScore >= 100) && (koalasAverageScore >= 100))
{
    console.log(`There is a draw because the Dolphin's average score of ${dolphinsAverageScore} is equal to koalas's average score of ${koalasAverageScore}`);
}
else
{
    console.log(`No team has won becaues the score was below of 100. Dolphins' average score is ${dolphinsAverageScore} and Koalas' average score is ${koalasAverageScore}`);
}