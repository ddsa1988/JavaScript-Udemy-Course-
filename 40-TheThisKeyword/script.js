"use strict"

console.log("The this Keyword in Global Scope:");
console.log(this);

function test()
{
    console.log("The this Keyword in Regular Function Scope:");
    console.log(this);
}

test();

const testArrow = () => {
    console.log("The this Keyword in Arrow Function Scope:");
    console.log("Call the This Keyword from the parent function. In this case from Global Scope.");
    console.log(this);
}

testArrow();

const myobject1 = {
    name: "Diego",
    birthday: 1988,
    calcAge: function()
    {
        console.log("The this Keyword in Object Scope:");
        console.log(this);
        console.log(2022 - this.birthday)
    }
};

myobject1.calcAge();

const myobject2 = {
    name: "Amanda",
    birthday: 1993,
};

console.log(myobject2);
myobject2.calcAge = myobject1.calcAge;
console.log("The this Keyword in Object Scope from another object:");
myobject2.calcAge();