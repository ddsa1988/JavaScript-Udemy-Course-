/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
*/

"use strict"

markObject = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.68,

    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

johnObject = {
    fullName: "John Simith",
    mass: 92,
    height: 1.95,

    calcBMI: function()
    {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

if (markObject.calcBMI() > johnObject.calcBMI())
{
    console.log(`${markObject.fullName}'s BMI ${(markObject.bmi)} is higher than ${johnObject.fullName}'s ${(johnObject.bmi)}!`);
}
else if (markObject.calcBMI() < johnObject.calcBMI())
{
    console.log(`${markObject.fullName}'s BMI ${(markObject.bmi)} is lower than ${johnObject.fullName}'s ${(johnObject.bmi)}!`);
}
else
{
    console.log(`${markObject.fullName}'s BMI ${(markObject.bmi)} is equal as ${johnObject.fullName}'s ${(johnObject.bmi)}!`);
}