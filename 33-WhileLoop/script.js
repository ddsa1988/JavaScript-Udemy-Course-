"use strict"

while (true)
{
    let dice = Math.trunc((Math.random() * 6) + 1);
    console.log(`You rolled a dice: ${dice}`)

    if (dice === 6)
    {
        console.log(`You rolled the right number and the loop will end.`)
        break;
    }
}
