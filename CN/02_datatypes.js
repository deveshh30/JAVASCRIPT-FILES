
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object 


let age = 18;
let age2 = "18";

console.log(typeof(age));
console.log(typeof(age2));

let valinNum = Number(age);  // nno matter what the innput is it will changne into number type
console.log(typeof(age));


//  Primitive = these datatypes value are immutable and stored directly into the memory

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) = compared by value

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/* Stack (primitive) -> value's copy is recieved, 
heap(non-primitive) -> changes will occur in original value , value reference will be passed

*/

let myName = devesh;

console.log(myName.charAt(0));