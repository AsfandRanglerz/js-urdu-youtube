let userName = 'Max'
let repoCount = 50
console.log(userName + ' ' +  repoCount)
console.log(`User-Name: ${userName} Repo-Count: ${repoCount}`)

let gameName = new String('Beyblade45')
// console.log(fullName)
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.__proto__)
// console.log(gameName.toLocaleUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('a'))

let newString = gameName.substring(0, 4)
console.log(newString)

let anotherString = gameName.slice(-8, 4)
console.log(anotherString)

let spaceName = '  Alpha   '
console.log(spaceName)
console.log(spaceName.trim())

let url = 'https://www.w3schools.com/alpha%20beta%20omega'
console.log(url.replace('%20', '-'));
console.log(url.replaceAll('%20', '-'));
console.log(url.includes('Test'))
console.log(url.includes('https'))

let actorName = 'His name is Mike Tyson'
console.log(actorName.split());
console.log(actorName.split(' '));
let stringToArray = actorName.split(' ')
console.log(stringToArray[1])