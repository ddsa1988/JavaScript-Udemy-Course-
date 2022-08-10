"use strict"

const myData = {
    firstName: "Diego",
    lastName: "Alexandre",
    birthday: "22/01/1988",
    country: "Brazil",
    siblings: ["Rodrigo", "Tainara"],
    workHours: {
        monday: {
            from: 7,
            until: 17
        },
        tuesday: {
            from: 8,
            until: 18
        },
        wednesday: {
            from: 9,
            until: 19
        },
        thursday: {
            from: 7,
            until: 17 
        },
        friday: {
            from: 7,
            until: 16
        }
    }
};

const properties = Object.keys(myData.workHours);
console.log(properties);
console.log();

const values = Object.values(myData.workHours);
console.log(values);
console.log();

const entries = Object.entries(myData.workHours);
console.log(entries);

for (const [key, {from, until}] of entries)
{
    console.log(`On ${key} I work from ${from} until ${until}.`);
}

console.log();