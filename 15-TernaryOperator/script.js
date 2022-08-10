const age = 32;

const drink1 = age >= 18 ? "beer" : "wine"; //Ternary operator: if and else statement in only line
console.log(drink1)

let drink2;

if (age >=18 )
{
    drink2 = "beer";
}
else
{
    drink2 = "water"
}
console.log(drink2);

console.log(`I'd like to drink ${age >= 18 ? "beer" : "wine."}`);