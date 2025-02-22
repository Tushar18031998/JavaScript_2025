// const tinderUser=new Object()  //singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "tushar",
      lastname: "bharambe",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3={obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2}

// console.log(obj3);


const users=[
    {
        id:1,
        email:"Tushar@gmail.com"  
        },
    {
        id:2,
        email:"Tushar@gmail.com"  
        },
    {
        id:3,
        email:"Tushar@gmail.com"  
        }

]

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//******************************Object DeStucturing */

const course={
    coursename:"js in Hindi",
    price:"999",
    courseInstuctor:"hitesh"
}

//course.courseInstructor

// const {courseInstuctor:instuctor}=course

// console.log(instuctor);



/**********************JSON ************************** */
// {
//   "name":"hitesh",
//   "coursename":"js in hindi",
//   "price":"free"

// }



/***********array of Objects */

[
  {},
  {},
  {}
]
