/*
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array.
*/

"use strict"

function calcTip(billValue)
{
    return (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.2; //Ternary Operator
}

function calcAverage(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return (sum / arr.length);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++)
{
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}
//Show Arrays
console.log(bills);
console.log(tips);
console.log(total);

//Show Arrays Average
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));