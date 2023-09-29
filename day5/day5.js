// const arr = Array();
// console.log(arr)

// const arr = [];
// console.log(arr);

const numbers = [ 0, 3.14, 9.81, 37, 98.6, 100 ];
const fruits = [ 'banana', 'orange', 'mango', 'lemon' ];
const vegetables = [ 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot' ];
const animalProducts = [ 'milk', 'meat', 'butter', 'yoghurt' ];
const webTechs = [ 'HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB' ];
// const countries = [ 'Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland' ];

console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);
console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);
console.log('Vegetables:', vegetables);
console.log('Number of vegetables:', vegetables.length);
console.log('Animal products:', animalProducts);
console.log('Number of animal products:', animalProducts.length);
console.log('Web technologies:', webTechs);
console.log('Number of web technologies:', webTechs.length);
// console.log('Countries:', countries);
// console.log('Number of countries:', countries.length);

const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: [ 'HTML', 'CSS', 'JS', 'React', 'Python' ]}
];
console.log(arr);

let js = 'JavaScript';
const charsInJavaScript = js.split('');
console.log(charsInJavaScript);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(', ');
console.log(companies);

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ');
console.log(words);

let fristFruit = fruits[0];
console.log(fristFruit);
let secondFruit = fruits[1];
console.log(secondFruit);
let lastFruit = fruits[3];
console.log(lastFruit);

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];
console.log(lastFruit);

console.log(numbers.length);
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[5]);
lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]);

console.log(webTechs);
console.log(webTechs.length);
console.log(webTechs[0]);
console.log(webTechs[6]);
lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex]);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hunagary',
    'Ireland',
    'Japan',
    'Kenya'
];
console.log(countries);
console.log(countries[0]);
console.log(countries[10]);
lastIndex = countries.length - 1;
console.log(countries[lastIndex]);

const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
];
console.log(shoppingCart);
console.log(shoppingCart[0]);
console.log(shoppingCart[7]);
lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]);

numbers[0] = 10;
numbers[1] = 20;
console.log(numbers);

countries[0] = 'Afghanistan';
lastIndex = countries.length - 1;
countries[lastIndex] = 'Korea';
console.log(countries);

const eightEmptyValues = Array(8);
console.log(eightEmptyValues);
const eightXValues = Array(8).fill('X');
console.log(eightXValues);
const eight0Values = Array(8).fill(0);
console.log(eight0Values);
const four4Values = Array(4).fill(4);
console.log(four4Values);

const firstList = [ 1, 2, 3 ];
const secondList = [ 4, 5, 6 ];
const thirdList = firstList.concat(secondList);
console.log(thirdList);
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

let numbers2 = [ 1, 2, 3, 4, 5 ];
console.log(numbers2.length);
console.log(numbers2.indexOf(5));
console.log(numbers2.indexOf(0));
console.log(numbers2.indexOf(1));
console.log(numbers2.indexOf(6));

let index = fruits.indexOf('banana');
if (index === -1)
{
    console.log('This fruit does not existin the array');
}
else
{
    console.log('This fruit does exist in the array');
}
index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array');

let indexOfAvocado = fruits.indexOf('avocado');
if (indexOfAvocado === -1)
{
    console.log('This fruit does not exist in the array');
}
else
{
    console.log('This fruit does exist in the array');
}

numbers2 = [ 1, 2, 3, 4, 5, 3, 1, 2 ];
console.log(numbers2.lastIndexOf(2));
console.log(numbers2.lastIndexOf(0));
console.log(numbers2.lastIndexOf(1));
console.log(numbers2.lastIndexOf(4));
console.log(numbers2.lastIndexOf(6));
console.log(webTechs.includes('Node'));
console.log(webTechs.includes('C'));

console.log(Array.isArray(numbers));
const number = 100;
console.log(Array.isArray(number));
console.log(numbers.toString());
const names = [ 'Asabeneh', 'Mathias', 'Elias', 'Brook' ];
console.log(names.toString());

console.log(numbers.join());
console.log(numbers.join(''));
console.log(numbers.join(' '));
console.log(numbers.join(', '));
console.log(numbers.join(' # '));
console.log(webTechs.join());
console.log(webTechs.join(' # '));

numbers2 = [ 1, 2, 3, 4, 5 ];
console.log(numbers2.slice());
console.log(numbers2.slice(0));
console.log(numbers2.slice(0, numbers2.length));
console.log(numbers2.slice(1, 4));

// numbers2.splice();
// console.log(numbers2);
numbers2.splice(0, 1);
console.log(numbers2);
numbers2 = [ 1, 2, 3, 4, 5, 6 ];
numbers2.splice(3, 3, 7, 8, 9);
console.log(numbers2);
console.log(numbers2.splice(3, 3, 7, 8, 9));

const arr2 = [ 'item1', 'item2', 'item3' ];
arr2.push('new item');
console.log(arr2);
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);
fruits.push('apple');
console.log(fruits);
fruits.push('lime');
console.log(fruits);

numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
numbers.reverse();
console.log(numbers);
numbers.reverse();
console.log(numbers);

webTechs.sort();
console.log(webTechs);
webTechs.reverse();
console.log(webTechs);
const firstNums = [ 1, 2, 3 ];
const secondNums = [ 1, 4, 9 ];
const arrayOfArray = [ [ 1, 2, 3 ], [ 1, 2, 3 ] ];
console.log(arrayOfArray[0]);

const frontEnd = [ 'HTML', 'CSS', 'JS', 'React', 'Redux' ];
const backEnd = [ 'Node', 'Express', 'MongoDB' ];
const fullStack = [ frontEnd, backEnd ];
console.log(fullStack);
console.log(fullStack.length);
console.log(fullStack[0]);
console.log(fullStack[1]);
