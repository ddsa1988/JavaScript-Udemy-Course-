"use strict"

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/

const text = document.querySelector(".text-area").value;
const button = document.querySelector(".button");

button.addEventListener("click", function(){
  console.log(text);
  const rows = text.split("\n");  
  console.log(rows);

  for (const [index, element] of rows.entries())
  {
    console.log(element);
    const [first, second] = element.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(index)}`);
  }
});