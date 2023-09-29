let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3;
let falseValue = 4 < 3;

console.log(isLightOn, isRaining, isHungry, isMarried, truValue, falseValue);

console.log("abc" - 2)
console.log(Math.log(0))
console.log(Math.log(-1))

let firstName;
console.log(firstName);
let empty = null;
console.log(empty);

firstName = 'Asabeneh'
country = 'Finland'

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(sum, diff, mult, div, remainder, powerOf);

const PI = 3.14;
let radius = 10;
const arearOfCircle = PI * radius * radius;
console.log(arearOfCircle);

const gravity = 9.81;
let mass = 72;
const weight = mass * gravity;
console.log(weight);

const boilingPoint = 100;
const bodyTemp = 37
console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`);

console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(2 < 3);
console.log(2 <= 3);
console.log(3 == 2);
console.log(3 != 2);
console.log('\n');
console.log(3 == '3');
console.log(3 === '3');
console.log(3 !== '3');
console.log(3 != '3');
console.log(3 !== 3);
console.log('\n');
console.log(0 == false);
console.log(0 === false);
console.log(0 == '');
console.log(0 == ' ');
console.log(0 === '');
console.log('\n');
console.log(1 == true);
console.log(1 === true);
console.log('\n');
console.log(undefined == null);
console.log(undefined === null);
console.log('\n');
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof NaN);
console.log('\n');

console.log('mango'.length == 'avocado'.length);
console.log('mango'.length != 'avocado'.length);
console.log('mango'.length < 'avocado'.length);
console.log('milk'.length == 'meat'.length);
console.log('milk'.length != 'meat'.length);
console.log('tomato'.length == 'potato'.length);
console.log('python'.length == 'dragon'.length);

let check = 4 > 3 && 10 > 5
check = 4 > 3 && 10 < 5
check = 4 < 3 && 10 < 5

check = 4 > 3 || 10 > 5;
check = 4 > 3 || 10 < 5;
check = 4 < 3 || 10 < 5;

check = 4 > 3;
console.log('\n');
console.log(check);
check = !(4 > 3);
isLightOn = true;
let isLightOff = !isLightOn;
isMarried = !false;
console.log(check, isLightOn, isLightOff, isMarried);
console.log('\n');

let count = 0;
console.log(++count);
console.log(count);

count = 0;
console.log(count++);
console.log(count);
console.log('\n');

count = 0;
console.log(--count);
console.log(count);

count = 0;
console.log(count--);
console.log(count);
console.log('\n');

isRaining = true;
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for rain coat.')
isRaining = false;

    isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for raincoat.')

let number = 5;
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
number = -5;
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
console.log('\n');

// alert('Welcome to 30DaysOfJavaScript')
// number = prompt('Enter number', 'number ges here')
// console.log(number)
// const agree = confirm('Are you sure you like to delete')
// console.log(agree)

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getTime())

const allSeconds = Date.now()
const timeInSeconds = new Date().getTime()
console.log(allSeconds)
console.log(allSeconds == timeInSeconds)

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
