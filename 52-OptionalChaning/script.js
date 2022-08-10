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

//console.log(myData.workHours.saturday.from); This way generate an error
console.log(myData.workHours.saturday?.open); // This way when it encounter the undefined value it stops to search the next property
console.log();

const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

for (const day of weekDays)
{
    const from = myData.workHours[day]?.from;
    const until = myData.workHours[day]?.until;

    from && until && console.log(`On ${day} I work from ${from} until ${until}.`);
}

console.log();

const myArray = [
    {
        name: "Diego", 
        email: "test@outlook.com"
    }
];
console.log(myArray[0]?.name ?? "Array Empty!");