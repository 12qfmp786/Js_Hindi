const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// To fixed is used for giving the value after the point 
// console.log(balance.toFixed(1))

const otherNumber = 123.899
// Precision Value Means Almost Value
// console.log(otherNumber.toPrecision(4))

const hundreds = 2000000
console.log(hundreds.toLocaleString('en-IN'));


// ----------------------------------------  Math  ----------------------------------------------------- //

console.log(Math);
// Abs Converts Negative integer into positive
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,23,4,2));
// console.log(Math.max(4,3,2,22,33));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



