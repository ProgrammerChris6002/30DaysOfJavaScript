const callback = (n) =>
{
    return (n ** 2);
}

function cube(callback, n)
{
    return (callback(n) * n);
}
console.log(cube(callback, 3));

const higherOrder = n =>
{
    const doSomething = m =>
    {
        const doWhatever = t =>
        {
            return (2 * n + 3 * m + t);
        }
        return (doWhatever);
    }
    return (doSomething);
}
console.log(higherOrder(2)(3)(10));

const numbers = [ 1, 2, 3, 4, 5 ];
// const sumArray = arr =>
// {
//     let sum = 0;
//     const callback = function(element)
//     {
//         sum += element;
//     }
//     arr.forEach(callback);
//     return (sum);
// }
// console.log(sumArray(numbers));

const sumArray = arr =>
{
    let sum = 0;
    arr.forEach(function(element)
    {
        sum += element;
    });
    return (sum);
}
console.log(sumArray([ 1, 2, 3, 4, 5 ]));

function sayHello()
{
    console.log('Hello');
}
// setInterval(sayHello, 1000);
// setTimeout(sayHello, 2000);

// let sum = 0;
// numbers.forEach(num => console.log(num));
// console.log(sum);

// numbers.forEach(num => sum += num);
// console.log(sum);

// const countries = [ 'Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland' ];
// countries.forEach((country, index) => console.log(`countries[${index}] = ${country.toUpperCase()}`));

const numbersSquared = numbers.map((num) => num * num);
console.log(numbersSquared);
const names = [ 'Asabeneh', 'Mathias', 'Elias', 'Brook' ];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];
// const countriesToUpperCase = countries.map((country) => country.toUpperCase());
// console.log(countriesToUpperCase);
// Arrow function
const countriesToUpperCase = countries.map((country)=>
{
    return (country.toUpperCase());
})
console.log(countriesToUpperCase);

const countriesFirstThreeLetters = countries.map((country) => country.toUpperCase().slice(0, 3));
console.log(countriesFirstThreeLetters);

const countriesContainingLand = countries.filter((country) => country.includes('land'));
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'));
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries.filter((country) => country.length === 5);
console.log(countriesHaveFiveLetters);

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
];
const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
const factorial = numbers.reduce(function(accumulator, currentValue)
{
    return (accumulator * currentValue);
}, 1);

console.log(factorial);

// const areAllStr = names.every((name) => typeof name === "string")
// console.log(areAllStr);

const bools = [ true, true, true, true ];
const areAllTrue = bools.every((bool) => bool === true);
console.log(areAllTrue);

const ages = [ 24, 22, 25, 32, 35, 18 ];
// const age = ages.find((age) => age < 20);
// console.log(age);

// const result = names.find((name) => name.length > 7);
// console.log(result);

const score = scores.find((user) => user.score > 80);
console.log(score);

const result = names.findIndex((name) => name.length > 7);
console.log(result);
const age = ages.findIndex((age) => age < 20);
console.log(age);

const bools2 = [ true, true, false, true ];

const areSomeTrue = bools2.some((b) => b === true);
console.log(areSomeTrue);
const areAllStr = names.some((name) => typeof name === "number");
console.log(areAllStr);

const products = [ 'Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot' ];
console.log(products.sort());

const nums = [ 9.81, 3.14, 100, 37 ];
console.log(nums.sort());
nums.sort(function(a, b)
{
    // console.log(a, b);
    return (a - b);
})
console.log(nums);

const users2 = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
];
users2.sort((a, b) =>
{
    if (a.age < b.age) return (-1);
    if (a.age > b.age) return (1);
    return (0);
});
console.log(users2);
