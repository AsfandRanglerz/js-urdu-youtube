let age = '30abc';
// age = null; // remove this comment just to see how code behave when age is null
// age = undefined; // remove this comment just to see how code behave when age is undefined
// age = 'thirty'; // remove this comment just to see how code behave when age is thirty
console.log(typeof age);

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NAN (not a number)

// 30 => 30
// 30abc => NAN
// true => 1; false => 0

let isLoggedIn = 1
// isLoggedIn = 'alpha' // remove this comment to see how code behave
// isLoggedIn = '' // remove this comment to see how code behave
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log('isLoggedIn', booleanIsLoggedIn)

// 1 => true; 0 => false
// '' => false
// 'alpha' => true

/* Operations */
let val = 3
let negVal = -val
console.log(negVal);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%3)
// console.log(2**2)
// console.log(2**3)

let firstName = 'Max'
let lastName = 'Tyson'
console.log(firstName + ' ' + lastName)

// console.log('1' + '2')
// console.log('1' + 2)
// console.log(1 + '2')
// console.log(1 + '2' + 2)
// console.log(1 + 2 + '2')
// console.log(1 + (2 + '2'))

// console.log(true)
// console.log(+true)
// console.log(+'')

// let num1, num2, num3

// num1 = 5
// num2 = num1
// num3 = num2
// console.log([num1, num2, num3])

let gameCounter = 1;
console.log(gameCounter);
// gameCounter++;
++gameCounter;
console.log(gameCounter);

let a = 3;
// let b = a++;
let b = ++a;
console.log('a:' + a, 'b:' + b)