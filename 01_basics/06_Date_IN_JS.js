// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// Declaring Dates
let myCreatedDate = new Date(2024, 8, 5, 1,15)
// console.log(myCreatedDate.toLocaleString());


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})


