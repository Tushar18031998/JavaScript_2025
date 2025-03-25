// for of

// const arr=[1,2,3,4,5,6,7]
// for (const element of arr) {
//     console.log(element)
// }

// const greetings="hello world"
// for (const element of greetings) {
//     console.log(`each char is ${element}`)
// }

//***************MAPS */

const map = new Map();
map.set('In',"India")
map.set('usa',"united states of America")
map.set('fr',"france")
map.set('fr',"france")

// console.log(map)

for (const [element,value] of map) {
    console.log(element,":-",value)
    
}



const myObject={
    'game1':"NFS",
    'game2':"spiderman"
}

// with of we can not iterate objects
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    
// }