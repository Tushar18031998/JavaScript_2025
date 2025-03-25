// function sayMyName(){
//     console.log("T")
//     console.log("u")
//     console.log("s")
//     console.log("h")
//     console.log("a")
//     console.log("r")
// }

// sayMyName()

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const result = addTwoNumbers(null, 2);

// console.log("result:",result);

/********************************************* */

// function loginUserMessage(username){
//     if(!username){
//     console.log("please enter a valid username")
//     return
//     }
//         return `${username} just Logged in`

// }

// // console.log(loginUserMessage("tushar"))
// console.log(loginUserMessage("tushar"))

// function loginUserMessage(username="sam"){
//     if(!username){
//     console.log("please enter a valid username")
//     return
//     }
//         return `${username} just Logged in`

// }

// // console.log(loginUserMessage("tushar"))
// console.log(loginUserMessage("tushar"))

/*****************************rest operator */

function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(200,300,400));

const user = {
  username: "tushar",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)

handleObject({
    username:'sam',
    price:399
});

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))