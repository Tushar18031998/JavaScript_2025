const user = {
  username: "tushar",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this)
  }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);



// function tech(){
//   let username="tushar"
//   console.log(this.username)
// }
// tech()



// const tech =function(){
//   let username="tushar"
//   console.log(this.username)
// }
// tech()


// const tech=()=>{
// let username="tushar"
// console.log(this.username)
// }

// tech()




/**************************************ARROW FUNCTION */

// const addTwo=(num1,num2)=>{

//   return num1+num2

// }

// console.log(addTwo(2,3))


/******************imlecite return mean without use of return */

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)


/*************************************** arrow function with objects*/

// const addTwo=(num1,num2)=> ({username:"hitesh"})




// console.log(addTwo(2,3))



/* ************** NOT IMPORTANT RELATED TO THESE CHAPTER************** */
// const myArray=[2,3,4,5,6,7,8]

// myArray.forEach(()=>())