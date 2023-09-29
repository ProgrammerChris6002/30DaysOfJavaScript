let word = "JavaScript"
word[0] = 'Y'

// console.log(word)

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)


let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)

nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

console.log(userOne == userTwo)
// console.log([1, 2] == [1, 2])

nums = [1, 2, 3]
numbers = nums

console.log(nums == numbers)

userTwo = userOne
console.log(userOne == userTwo)


let age = 35
const gravity = 9.81
let mass = 72
// const PI = 3.14

const boilingPoint = 100
const bodyTemp = 37

// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)


const PI = Math.PI
console.log(PI)

console.log(Math.round(PI))
console.log(Math.round(9.81))

console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10))

const randNum = Math.random()
console.log(randNum)

const num = Math.floor(Math.random() * 11)
console.log(num)

console.log(Math.abs(-10))
console.log(Math.sqrt(100))
console.log(Math.sqrt(2))
console.log(Math.pow(3, 2))
console.log(Math.E)

console.log(Math.log(2))
console.log(Math.log(10))
console.log(Math.LN2)
console.log(Math.LN10)

Math.sin(0)
Math.sin(60)
Math.cos(0)
Math.cos(60)

let randomNum = Math.random()
let numBtnZeroAndTen = randomNum * 11
console.log(numBtnZeroAndTen)

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)

let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quoteWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName = firstName + space + lastName
console.log(fullName);

age = 250
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5
console.log(personInfoOne)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)

fullName = firstName + ' ' + lastName
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a > b}`)

console.log(js.length)
console.log(firstName.length)

let string = 'JavaScript'
let firstLetter = string[0]
let secondLetter = string[1]
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(firstLetter)
console.log(lastLetter)

let lastIndex = string.length - 1
console.log(lastIndex)
console.log(string[lastIndex])

console.log(string.toUpperCase())
console.log(firstName.toUpperCase())
console.log(country.toUpperCase())

console.log(string.toLowerCase())
console.log(firstName.toLowerCase())
console.log(country.toLowerCase())

console.log(string.substr(4, 6))
console.log(country.substr(3, 4))

console.log(string.substring(0, 4))
console.log(string.substring(4, 10))
console.log(string.substring(4))

console.log(country.substring(0, 3))
console.log(country.substring(3, 7))
console.log(country.substring(3))

string = '30 Days Of JavaScript'

console.log(string.split())
console.log(string.split(' '))

// firstName = 'Asa beneh'
console.log(firstName.split())
console.log(firstName.split(''))

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))
console.log(countries.split(', '))

string = '   30 Days Of JavaScript   '
console.log(string)
console.log(string.trim())

firstName = ' Asabeneh '
console.log(firstName)
console.log(firstName.trim())

string = '30 Days Of JavaScript'
console.log(string.includes('Days'))
console.log(string.includes('days'))
console.log(string.includes('Script'))
console.log(string.includes('script'))
console.log(string.includes('java'))
console.log(string.includes('Java'))

console.log(country.includes('fin'))
console.log(country.includes('Fin'))
console.log(country.includes('land'))
console.log(country.includes('Land'))

console.log(string.replace('JavaScript', 'Python'))
console.log(country.replace('Fin', 'Noman'))

console.log(string.charAt(0))
lastIndex = string.length - 1
console.log(string.charAt(lastIndex))

console.log(string.charCodeAt(3))
console.log(string.charCodeAt(lastIndex))

console.log(string.indexOf('D'))
console.log(string.indexOf('Days'))
console.log(string.indexOf('days'))
console.log(string.indexOf('a'))
console.log(string.indexOf('JavaScript'))
console.log(string.indexOf('Script'))
console.log(string.indexOf('script'))

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.lastIndexOf('love'))
console.log(string.lastIndexOf('you'))
console.log(string.lastIndexOf('JavaScript'))

string = '30'
console.log(string.concat("Days", "Of", "JavaScript"))

country = 'Fin'
console.log(country.concat("land"))

string = 'Love is the best to in this world'
console.log(string.startsWith('Love'))
console.log(string.startsWith('love'))
console.log(string.startsWith('world'))

country = 'Finland'
console.log(country.startsWith('Fin'))
console.log(country.startsWith('fin'))
console.log(country.startsWith('land'))

string = 'Love is the most powerful feeling in the world'
console.log(string.endsWith('world'))
console.log(string.endsWith('love'))
console.log(string.endsWith('in the world'))

console.log(country.endsWith('land'))
console.log(country.endsWith('fin'))
console.log(country.endsWith('Fin'))

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))
console.log(string.search(/javascript/gi))

string = 'love'
let patternOne = /love/
let patternTwo = /love/gi

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

let pattern = /love/gi
console.log(string.match(pattern))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d/g
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))

string = 'love'
console.log(string.repeat(10))

let job2;
console.log(typeof 'Asabeneh')
console.log(typeof firstName)
console.log(typeof 10)
console.log(typeof 3.14)
console.log(typeof true)
console.log(typeof false)
console.log(typeof NaN)
console.log(typeof job2)
console.log(typeof undefined)
console.log(typeof null)

let num2 = '10'
let numInt = parseInt(num2)
console.log(numInt)

numInt = Number(num2)
console.log(numInt)

numInt = +num2
console.log(numInt)

num2 = '9.81'
let numFloat = parseFloat(num2)
console.log(numFloat)

numFloat = Number(num2)
console.log(numFloat)

numFloat = +num2
console.log(numFloat)

num2 = 9.81
numInt = parseInt(num2)
console.log(numInt);