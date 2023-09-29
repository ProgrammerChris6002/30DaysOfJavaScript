// let base = prompt('Enter base: ')
// let height = prompt('Enter height: ')
// let area = 0.5 * Number(base) * Number(height)
// console.log(`The area of the triangle is ${area}`)

// let a = prompt('Enter side a: ')
// let b = prompt('Enter side b: ')
// let c = prompt('Enter side c: ')
// let perimeter = Number(a) + Number(b) + Number(c);
// console.log(`The perimeter of the triangle is ${perimeter}`);

// let length = Number(prompt('Enter length of triangle: '))
// let width = Number(prompt('Enter width of triangle: '))
// area = length * width;
// perimeter = 2 * (length + width)
// console.log(`The area of the rectangle is ${area}`)
// console.log(`The perimeter of the rectangle is ${perimeter}`);

// let radius = parseInt(prompt('Enter radius: '))
// const PI = 3.14
// area = PI * radius * radius
// let circumference = parseInt(2 * PI * radius)
// console.log(`The area of a circle is ${area}`)
// console.log(`The circumference of a circle is ${circumference}`)

let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let slope = (y2 - y1) / (x2 - x1);
console.log(slope);

// let hours = parseInt(prompt('Enter hours: '))
// let ratePerHour = parseInt(prompt('Enter rate per hour: '))
// let weeklyEarning = hours * ratePerHour
// console.log(`Your weekly earning is $${weeklyEarning}`)

let name = 'Christian'
let nameLength = name.length;
nameLength > 7
    ? console.log(`Your name '${name}' is long.`)
    : console.log(`Your name '${name}' is short.`)

let firstName = 'Christian';
let familyName = 'Nwachukwu';
firstName.length > familyName.length
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${familyName}`)
    : console.log(`Your first name, ${firstName} is shorter than your family name, ${familyName}`)

let myAge = 250;
let yourAge = 25;
myAge > yourAge
    ? console.log(`I am ${myAge - yourAge} years older than you.`)
    : console.log(`You are ${yourAge - myAge} years older than me.`)

// let now = new Date();
// let birthYear = parseInt(prompt('Enter birth year: '))
// let age = now.getFullYear() - birthYear;
// age > 17
//     ? console.log(`You are ${age}. You are old enough to drive`)
//     : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`)

// let numberOfYears = parseInt(prompt('Enter number of years you lived: '))
// let numberOfSeconds = numberOfYears * 365 * 24 * 60 * 60
// console.log(`You lived ${numberOfSeconds} seconds.`)

const now = new Date();
const years = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${years}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${years} ${hours}:${minutes}`)
console.log(`${date}/${month}/${years} ${hours}:${minutes}`)