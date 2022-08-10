/*
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

const massMark = 95;
const heightMark = 1.88;
const bmiMark = massMark / (heightMark ** 2);

const masssJohn = 95;
const heightJohn = 1.67;
const bmiJohn = masssJohn / (heightJohn ** 2);

if(bmiMark > bmiJohn)
{
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`);
}
else if(bmiMark < bmiJohn)
{
    console.log(`Mark's BMI (${bmiMark}) is lower than John's BMI (${bmiJohn})`);
}
else
{
    console.log(`Mark's BMI (${bmiMark}) is equal to John's BMI (${bmiJohn})`);
}