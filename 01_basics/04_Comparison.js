// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

// Reference (Non primitive)
// Array, objects, Functions

// Here null is converted into zero
// So 0 = 0 True
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === // Checks The datatype
// console.log("2" === '2');
const outsideTemp = null
let userEmail;

const id = Symbol('1,2,3')
const anotherId = Symbol('1,2,3')

// console.log(id === anotherId);

const heros = ["shaktiman","naagraj","doga"];

// console.log(typeof heros);

const myFunction = function(){
    console.log("Hello World")

}

// console.log(typeof myFunction);

// ---------------------------------------------


// Stack memory (Primitive), Heap memory (Non-Primitive)

const gameName = new String('hiteshhc')

console.log(gameName[0]);

console.log(gameName.length)
