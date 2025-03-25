// const myNums=[1,2,3]

// const sumWithInitial=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc}and currval:${currval}`);
    
// return acc + currval
// },0)


// console.log(sumWithInitial);



// const myNums=[1,2,3]

// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

// console.log(myTotal);




const shoppingCart=[
    {
        itemName:"jscourse",
        price:2999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"datascience",
        price:12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
