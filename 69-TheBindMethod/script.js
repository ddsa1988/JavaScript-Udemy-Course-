"use strict"

/*
The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
with a given sequence of arguments preceding any provided when the new function is called.
*/

const myData = {
    firstName: "Diego",
    lastName: "Alexandre",
    birthday: "22/01/1988",
    sex: "male",
    printData: function(country){
        console.log(`My name is ${this.firstName} ${this.lastName} born in ${this.birthday}. I'm ${this.sex} and from ${country}.`);
    }
};

const yourData = {
    firstName: "Lucia",
    lastName: "Brother",
    birthday: "10/11/1972",
    sex: "female"
};

const printData = myData.printData.bind(yourData);

console.log(myData);
myData.printData("France");
console.log(yourData);
printData("Brazil");
console.log();

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));
console.log(addVat(23));
console.log();

function addTaxRate(rate)
{
    return function(value)
    {
        return value + value * rate;
    }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));