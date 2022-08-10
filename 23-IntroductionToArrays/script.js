/*
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. 
Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

"use strict"

const percentageOfWorld = population => (population / 7900) * 100;

const populations = [];
const percentages = new Array();

//console.log(populations.length)
//console.log(populations[0]);

populations[0] = 1441;
populations[1] = 1000;
populations[2] = 2257;
populations[3] = 5936;

console.log(populations);
console.log(populations.length)

percentages.push(percentageOfWorld(populations[0]));
percentages.push(percentageOfWorld(populations[1]))
percentages.push(percentageOfWorld(populations[2]))
percentages.push(percentageOfWorld(populations[3]))
console.log(percentages);