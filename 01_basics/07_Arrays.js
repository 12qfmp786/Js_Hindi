// Array enables Storing a collection of multiple items under single varaible
// Denotes with []
// The data Entered in array called Element
// Javascript arrays are resizable and can contain a mix of different data types

// Shallow Copy
// A shallow copy of an object is a copy whose properties share the same references


// Deep Copy
// A Deep Copy of an object is a copy whose properties do not share the same reference


const myArr = [0,1,2,3,4,5]
const myHeors = ["Shaktiman","Hulk","IronMan","CaptainAmerica"]


// console.log(myHeors[1]);
myArr.push(9)
// console.log(myArr)

// console.log(myArr.pop());
// console.log(myArr);

// UNshift function adds the element at the beginning of the array

// console.log(myArr.unshift(3));
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));
// console.log(myArr.pop())

// Join Converts the array into the string
const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// Slice, Splice
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr)

// Splice will Remove the range of number From the original array
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2)// How many Number are Cutted


