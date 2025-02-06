//singleton
// Object.create

//object literals
const mySym = Symbol("key1");

const stud = {
  name: "tushar",
  "full name": "tushar vishnu bharambe",
  [mySym]: "mykey1",
  age: 26,
  location: "indore",
  email: "tushar18bharambe@gmail.com",
  isLggedIn: false,
};

// console.log(stud.email)
// console.log(stud["email"])
// console.log(stud["full name"])
// console.log(stud[mySym])

stud.email = "tushar19@gmail.com";
// Object.freeze(stud);
stud.email = "tushar19@outlook.com";
// console.log(stud);

stud.greeting = function () {
  return "hello student to pc"
}
stud.greeting = function () {
  return `hello student ${this["full name"]} to pc"`
}

console.log(stud.greeting())
