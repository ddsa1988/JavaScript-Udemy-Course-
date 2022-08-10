// There are five falsy values -> 0, '', null, undefined, NaN

const zeroValue = 0;
const nullValue = null;
const emptyString = '';
const notANumber = NaN;
let undefinedValue;

console.log(Boolean(zeroValue));
console.log(Boolean(nullValue));
console.log(Boolean(emptyString));
console.log(Boolean(notANumber));
console.log(Boolean(undefinedValue));