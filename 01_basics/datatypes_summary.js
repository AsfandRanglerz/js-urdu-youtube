// Primitive
// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

// Reference/Non-Primitive
// Arrays, Objects, Functions

// const score:number = 100 // typescript
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log('Testing:', id == anotherId);

const bigNumber = 34554234234324324255435n

const heroes = ['superman', 'batman', 'spiderman']

let myObj = {
    name: 'Max',
    age: 20
}

const myFunction = function() {
    console.log('Hello World')
}
myFunction()

console.log(typeof (bigNumber));
console.log(typeof (myFunction));

// Memory Types
// Stack (Primitive), Heap (Non-Primitive)
// Stack returns copy, Heap returns reference

let userName = 'Max'
let userNameAlpha = userName
userNameAlpha = 'Tyson'
console.log(userName)
console.log(userNameAlpha)

let userBeta = {
    name: 'Rocky'
}
let userOmega = userBeta
userOmega.name = 'Johnson'

console.log(userBeta.name)