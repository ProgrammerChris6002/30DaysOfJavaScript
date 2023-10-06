// forEach() - iterates through an array and adds a side effect on each element of the array - it takes element, index(optional) and array(optional) parameters

// map() - iterates trhough an array and performs an operation on each element of the array - it takes element, index(optional) and array(optional) parameters

// filter() - iterates through an array and filters elements that fulfill specific filtering criteria - it takes element, index(optional) and array(optional) parameters

// reduce() - reduces an array to just one value - it takes accumulator, current and initialValue(optional) parameters

// (callback) - a callback function is a function passed as a paramer to another function or when a function returns another function, the returned function is referred to as a callback

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

countries.forEach(country => console.log(country));
names.forEach(function(name)
{
    console.log(name);
});
numbers.forEach((number) =>
{
    console.log(number);
});

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);
const numbersSquared = numbers.map(number => number ** 2);
console.log(numbersSquared);
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);
const productsPrices = products.map((product) => product.price);
console.log(productsPrices);

const countriesContainingLand = countries.filter(country => country.includes('land'));
console.log(countriesContainingLand);
const countriesHaveSixLetters = countries.filter((country) => country.length === 6);
console.log(countriesHaveSixLetters);
const countriesHaveSixLettersAndMore = countries.filter((country) => country.length >= 6);
console.log(countriesHaveSixLettersAndMore);
const countriesStartsWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartsWithE);

const productsPricesWithValues = products.filter((product) => typeof product.price === "number");
console.log(productsPricesWithValues);

function getStringLists(array)
{
    const stringsArray = array.filter((element) => typeof element === "string");
    return (stringsArray);
}
console.log(getStringLists(countries));
console.log(getStringLists(numbers));

let sum = numbers.reduce(function(accumulator, currentValue)
{
    return (accumulator + currentValue);
}, 0);
console.log(sum);

let lastIndex = countries.length - 1;
let result = countries.slice(0, lastIndex).reduce(function(accumulator, currentValue){
    return (accumulator + ', ' + currentValue);
}) + ` and ${countries[lastIndex]} are north European countries`;
console.log(result);

// some() - checks if 1 or more elements of an array passes a specific condition - it returns a boolean(true or false)
// every() - checks if all elements of an array passes a specific condition - it returns a boolean(true or false)

const someNamesLengthGreaterThanSeven = names.some((name) => name.length > 7);
console.log(someNamesLengthGreaterThanSeven);
const everyCountryContainsLand = countries.every((country) => country.includes('land'));
console.log(everyCountryContainsLand);

// find() - searches for the first element of an array that passess a certain condition
// findIndex() - searches for the index of the first element of an array that passess a certain condition

const firstCountryWithSixLetters = countries.find((country) => country.length === 6);
console.log(firstCountryWithSixLetters);
const firstCountryWithSixLettersIndex = countries.findIndex((country) => country.length === 6);
console.log(firstCountryWithSixLettersIndex);
console.log(countries.findIndex((country) => country === 'Norway'));
console.log(countries.findIndex((country) => country === 'Russia'));
