
// my current age
const myAge = 22;

// the first 2 years of a dogs life
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

// the remaining years after taking the first 2 years out 
let laterYears = myAge - 2;

// multiply the remaining years by 4
laterYears = laterYears * 4;

// adding my early years and later years together
let myAgeInDogYears = earlyYears + laterYears;


// my name in lower case
let myName = 'CODY'.toLowerCase();


console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`);
