// Varirables

let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
let country = 'Finalnd';
let city = 'Helsinki';

const PI = Math.PI;
const gravity = 9.81;

// Arrays

const names = [ 'Asabeneh', 'Mathias', 'Elias', 'Brook' ];
const numbers = [ 0, 3.14, 9.81, 37, 98.6, 100 ];
const countrues = [ 'Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland' ];
const languages = [ 'Amharic', 'Arabic', 'English', 'French', 'Spanish' ];
const skills = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Python' ];
const fruits = [ 'banana', 'orange', 'mango', 'lemon' ];
const vegetables = [ 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot' ];

// Functions

const printFullName = (firstName, lastName)=> firstName + ' ' + lastName;

const square = (n)=> n * n;

const hexaColor = ()=>
{
    const str = '0123456789abcdef';
    let hexa = '#';
    let index;
    for (let i = 0 ; i < 6 ; i++)
    {
        index = Math.floor(Math.random() * str.length);
        hexa += str[index];
    }
    return (hexa);
}

const showDateTime = ()=>
{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours < 10 ? hours = '0' + hours : hours = hours;
    minutes < 10 ? minutes = '0' + minutes : minutes = minutes;

    const dateMonthYear = date + '.' + month + '.' + year;
    const time = hours + ':' + minutes;
    const fullTime = dateMonthYear + ' ' + time;
    return (fullTime);
}

// console.log(printFullName('Christian', 'Nwachukwu'));
// console.log(square(4));
// console.log(hexaColor());
// console.log(showDateTime());

// Loops

let n;
for (let i = 0 ; i < n ; i++)
{
    console.log();
}

let len = names.length;
for (let i = 0 ; i < len ; i++)
{
    console.log(names[i].toUpperCase());
}

for (const name of names)
{
    console.log(name.toUpperCase());
}

names.forEach((name)=> console.log(name.toUpperCase()));

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [ 'HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js' ],
//     isMarried: true
// }
// for (const key in person)
// {
//     console.log(key);
// }

// Objects

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [ 'HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js' ],
    isMarried: true
}
for (const key in person)
{
    console.log(key, person[key]);
}

// Conditional

let num = 3;
if (num > 0)
{
    console.log(`${num} is a positive number`);
}
else
{
    console.log(`${num} is a negative number`);
}

let a = 0;
if (a > 0)
{
    console.log(`${a} is a positive number`);
}
else if (a < 0)
{
    console.log(`${a} is a negative number`);
}
else if (a === 0)
{
    console.log(`${a} is a zero`);
}
else
{
    console.log(`${a} is a not a number`);
}

// let dayUserInput = prompt('What is the day today?');
// let day = dayUserInput.toLowerCase();

// switch (day)
// {
//     case 'monday':
//         console.log('Today is Monday');
//         break;
//     case 'tuesday':
//         console.log('Today is Tuesday');
//         break;
//     case 'wednesday':
//         console.log('Today is Wednesday');
//         break;
//     case 'thursday':
//         console.log('Today is Thursday');
//         break;
//     case 'friday':
//         console.log('Today is Friday');
//         break;
//     case 'saturday':
//         console.log('Today is Saturday');
//         break;
//     case 'saturday':
//         console.log('Today is Saturday');
//         break;
//     default:
//         console.log('It is not a week day'); 
// }

let isRaining = true;
isRaining ? console.log('You need a rain coat.') : console.log('No need for rain coat.');

// Classes

class Person
{
    constructor(firstName, lastName)
    {
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
