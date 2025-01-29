const name="tushar"
const repoCount=50

console.log(name + repoCount)

console.log(`hello my name is ${name} and my name is ${repoCount} `)// string interpolation


const gamename=new String('Tuhsar Bharambe')

console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toLocaleUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('h'))
console.log(gamename.indexOf('T'))



const newString =gamename.substring(0,4)
console.log(newString);

const anotherString=gamename.slice(-7,4)
console.log(anotherString)


const newStringOne="    hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url="https://hitesh.com/hitesh%20Chaudhary"

console.log(url.replace('%20','-'))

 
console.log(url.includes('hitesh'));


