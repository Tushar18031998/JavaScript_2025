// "use strict";

// let a = 123;
// let b = "abc";
// let c = null;
// let d = 123.123;
// let e = undefined;
// let f = function add(a, b) {
//   c = a + b;
//   return c;
// };

// console.table([typeof a, typeof b, typeof c, typeof d, typeof e, typeof f]);

let name="tushar"
let age=26
let isLoggedIn=false

//number=>2 to power 53
//bigint
// string=>""
// boolean=>true/false
// null=>standalone value
//undefined=>
//symbol=>


// object
console.log(typeof undefined)
console.log(typeof null)

//************************Datatypes

// two types of datatypes

//1. primitive

//7types: String,number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIN = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id===anotherId)

const bigNumber=3444444444444n


//2.Reference Type (Non Primitive)

//Array, Objects, Functions

const heros=["shaktiman","nagraj","doga"]

let myobj={
    name:"tushar",
    age: 22,
}


const myFunction=function(){
    console.log("hello world")
}

console.log(typeof bigNumber)




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



/*
stack(Primitive)
Heap(Non-Primitive)
*/

let myGitName ="Tushar1803198"
let anotherName =myGitName
anotherName ="Cofeewithcode"


console.log(myGitName)
console.log(anotherName)