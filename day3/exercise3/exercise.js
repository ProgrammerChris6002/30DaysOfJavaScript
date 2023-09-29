let firstName = 'Christian'
let lastName = 'Nwachukwu'
let country = 'Nigeria'
let city = 'Nsukka'
let age = 17;
let isMarried = false;
let year = 2023;

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
console.log();

console.log(typeof '10' == 10)
console.log(parseInt('9.8') == 10)
console.log();

console.log(5 > 2)
console.log(5 >= 2)
console.log(5 != 2)
console.log(5 < 2)
console.log(5 <= 2)
console.log(5 == 2)
console.log()

console.log(4 > 3) // t
console.log(4 >= 3) // t
console.log(4 < 3) // f
console.log(4 <= 3) // f
console.log(4 == 4) // t
console.log(4 === 4) // t
console.log(4 != 4) // f
console.log(4 !== 4) // f
console.log(4 != '4') // f
console.log(4 == '4') // t
console.log(4 === '4') // f
console.log('python'.length != 'dargon'.length)
console.log();

console.log(4 > 3 && 10 < 12) // t
console.log(4 > 3 && 10 > 12) // f
console.log(4 > 3 || 10 < 12) // t
console.log(4 > 3 || 10 > 12) // t
console.log(!(4 > 3)) // f
console.log(!(4 < 3)) // t
console.log(!(false)) // t
console.log(!(4 > 3 && 10 < 12)) // f
console.log(!(4 > 3 && 10 > 12)) // t
console.log(!(4 === '4')) // t
console.log('python'.includes('on') && 'jargon'.includes('on')) // t

const now = new Date();
year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const timeEllapsed = now.getTime()

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
console.log(timeEllapsed);