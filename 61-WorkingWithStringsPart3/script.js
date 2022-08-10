"use strict"

const myFullName = "Diego Santos Alexandre";
const [firstName, middleName, lastName] = myFullName.split(' ');
console.log(myFullName.split(' '));
console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log("\n");

const myNameArray = ["Diego", "dos", "Santos", "Alexandre"];
console.log(myNameArray.join(' '));
console.log("\n");

function capitalizeWord(word)
{
    const capitalizeArray = [];
    const wordArray = word.toLowerCase().trim().split(' ');
    for (const words of wordArray) 
    { 
        //capitalizeArray.push(words[0].toUpperCase() + words.slice(1)); 
        capitalizeArray.push(words.replace(words[0], words[0].toUpperCase()));
    }
    
    return capitalizeArray.join(' ');
}
console.log(capitalizeWord("   diego dos sAntOs aLeXandre \n"));
console.log(capitalizeWord("tomorrow it will rain."));
console.log("\n");

const myName = "Diego";
console.log(myName.padStart(10, '+'));
console.log(myName.padEnd(20, '+'));
console.log("\n");
console.log(myName.repeat(5));