const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map((num)=> num+10)
// const newNums=myNumbers.map((num)=>{return num+10})


//Chaning

const newNums=myNumbers
                .map((num)=>{return num*10})
                .map((num)=>num+1)
                .map((num)=>num-20)
                .filter((num)=>num>=40)

console.log(newNums);

