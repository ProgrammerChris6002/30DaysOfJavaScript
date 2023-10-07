// const numbers = [ 1, 2, 3 ];
// let [ numOne, numTwo, numThree ] = numbers;
// console.log(numOne, numTwo, numThree);

// const names = [ 'Asabeneh', 'Brook', 'David', 'John' ];
// let [ firstPerson, secondPerson, thirdPerson, fourthPerson ] = names;
// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const scientificConstants = [ 2.72, 3.14, 9.81, 37, 100 ];
let [ e, pi, gravity, bodyTemp, biolingPoint ] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, biolingPoint);

// const fullStack = [
//     [ 'HTML', 'CSS', 'JS', 'React' ],
//     [ 'Node', 'Express', 'MongoDB' ]
// ];
// const [ frontEnd, backEnd ] = fullStack;
// console.log(frontEnd);
// console.log(backEnd);

const numbers = [ 1, 2, 3 ];
[numOne, , numThree] = numbers;
console.log(numOne, numThree);

// const names = [ 'Asabeneh', 'Brook', 'David', 'John' ];
// let [ , secondPerson, , fourthPerson ] = names;
// console.log(secondPerson, fourthPerson);

const names = [ undefined, 'Brook', 'David' ];
let [
    firstPerson = 'Asabeneh',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John',
] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// let [ num1, num2, num3, ...rest ] = nums;
// console.log(num1, num2, num3);
// console.log(rest);

// const countries = [ [ 'Finland', 'Helsinki' ], [ 'Sweden', 'Stockholm' ], [ 'Norway', 'Oslo' ] ];
// for (const [ country, city ] of countries)
// {
//     console.log(country, city);
// }

// for (const [ first, second, third ] of fullStack)
// {
//     console.log(first, second, third);
// }

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);
// let { width: w, height: h, area: a, perimeter: p } = rectangle;
// console.log(w, h, a, p);

let { width, height, area, perimeter = 60 } = rectangle;
console.log(width, height, area, perimeter);

const rect = {
    width: 20,
    height: 10
}
// const calculatePerimeter = rectangle =>
// {
//     return (2 * (rectangle.width + rectangle.height));
// }
// console.log(calculatePerimeter(rect));

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: [ 'Amharic', 'English', 'Suomi(Finnish)' ]
}

const getPersonInfo = obj =>
{
    const skills = obj.skills;
    const formattedSkills = skills.slice(0, -1).join(', ');
    const languages = obj.languages;
    const formattedLanguages = languages.slice(0, -1).join(', ');

    const personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country} he is ${obj.age} years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[ skills.length - 1 ]}. He speaks ${formattedLanguages} and a little bit of ${languages[ languages.length - 1 ]}`;

    return (personInfo);
}
console.log(getPersonInfo(person));

const calculatePerimeter = ({ width, height }) =>
{
    return (2 * (width + height));
}
console.log(calculatePerimeter(rect));

const getPersonInfoWithDestructuring = ({ firstName, lastName, age, country, job, skills, languages }) =>
{
    const formattedSkills = skills.slice(0, -1).join(', ');
    const formattedLanguages = languages.slice(0, -1).join(', ');
    const personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[ skills.length - 1 ]}. He speaks ${formattedLanguages} and a little bit of ${languages[ languages.length - 1 ]}`;

    return (personInfo);
}
console.log(getPersonInfo(person));

const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task:'Give JS Test',
        time:'4/1/2020 10:00',
        completed:false
    },
    {
        task:'Assess Test Result',
        time:'4/1/2020 1:00',
        completed:false
    }
];
for (const { task, time, completed } of todoList)
{
    console.log(task, time, completed);
}

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let [ num1, num2, num3, ...rest ] = nums;
console.log(num1, num2, num3);
console.log(rest);

const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
];
let [ gem, fra, , ...nordicCountries ] = countries;
console.log(gem);
console.log(fra);
console.log(nordicCountries);

const evens = [ 2, 4, 6, 8, 10 ];
const evenNumbers = [ ...evens ];
const odds = [ 1, 3, 5, 7, 9 ];
const oddNumbers = [ ...odds ];
const wholeNumbers = [ ...evens, ...odds ];
console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

const frontEnd = [ 'HTML', 'CSS', 'JS', 'React' ];
const backEnd = [ 'Node', 'Express', 'MongoDB' ];
const fullStack = [ ...frontEnd, ...backEnd ];
console.log(fullStack);

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}
// const copiedUser = { ...user };
// console.log(copiedUser);

const copiedUser = { ...user, title: 'Instructor', age: 50 };
console.log(copiedUser);

const allNums = (...args) =>
{
    console.log(args);
}
allNums(1, 2, 3, 4, 5);

const sumAllNums = (...args) =>
{
    let sum = 0;
    for (const num of args)
    {
        sum += num;
    }
    return (sum);
}
console.log(sumAllNums(1, 2, 3, 4, 5));

