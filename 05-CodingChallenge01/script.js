/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
1. Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
2. Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

const massMark = 95;
const heightMark = 1.88;
const bmiMark = massMark / (heightMark ** 2);

const masssJohn = 85;
const heightJohn = 1.76;
const bmiJohn = masssJohn / (heightJohn ** 2);

const hasMarkHigherBMI = bmiMark > bmiJohn; 

console.log(bmiMark, bmiJohn)
console.log("Has Mark a higher BMI than John? %s.", hasMarkHigherBMI);