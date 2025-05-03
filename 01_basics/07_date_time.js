let myDate = new Date()
let todayDate = myDate.toLocaleString()
console.log(`Today date is ${myDate}`)
console.log(`Today date is ${todayDate}`)

let janDate = new Date("04-29-2025")
let myTimeStamp = Date.now()

console.log(janDate.getTime());
console.log(myTimeStamp)

console.log(myDate.getMonth() + 1)