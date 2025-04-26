/* prefer not to use var, because of issue in block scope and functional scope */
const accountId = 144553
let accountEmail = 'sales@gmail.com'
var accountPassword = '12345678'
accountCity = 'Lahore'
let accountState;

// accountId = 5 // not allowed
accountEmail = 'alpha@gmail.com'
accountPassword = '87654321'
accountCity = 'Karachi'

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);