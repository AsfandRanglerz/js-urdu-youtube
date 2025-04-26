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