// const companies = new Set();
// console.log(companies);

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

for (const language of setOfLanguages)
{
    console.log(language);
}

// console.log(companies.size);
// companies.add('Google');
// companies.add('Facebook');
// companies.add('Amazon');
// companies.add('Oracle');
// companies.add('Microsoft');
// console.log(companies.size);
// console.log(companies);

const companies = [ 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' ];
const setOfCompanies = new Set();
for (const company of companies)
{
    setOfCompanies.add(company);
}
console.log(setOfCompanies);
console.log(setOfCompanies.delete('Google'));
console.log(setOfCompanies.size);
console.log(setOfCompanies.has('Apple'));
console.log(setOfCompanies.has('Facebook'));
setOfCompanies.clear();
console.log(setOfCompanies);

const langSet = new Set(languages);
console.log(langSet);
console.log(langSet.size);

const counts = [];
const count = {};

for (const l of langSet)
{
    const filteredLang = languages.filter((lng) => lng === l);
    console.log(filteredLang);
    counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

const numbers = [ 5, 3, 2, 5, 5, 9, 4, 5 ];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers);

let a = [ 1, 2, 3, 4, 5 ];
let b = [ 3, 4, 5, 6 ];
let c = [ ...a, ...b ];
let A = new Set(a);
let B = new Set(b);
let C = new Set(c); // (A u B)

console.log(C);

c = a.filter((num) => B.has(num));
C = new Set(c);
console.log(C); // (A n B)

c = a.filter((num) => !(B.has(num)));
C = new Set(c);
console.log(C); // (A - B) or (A / B)


// Map
// const map = new Map();
// console.log(map);

const countries = [
    [ 'Finland', 'Helsinki' ],
    [ 'Sweden', 'Stockholm' ],
    [ 'Norway', 'Oslo' ],
];
const map = new Map(countries);
console.log(map);
console.log(map.size);
for (const entry of map.entries())
{
    console.log(entry);
}
console.log(map.get('Finland'));

const countriesMap = new Map();
console.log(countriesMap.size);
countriesMap.set('Finland', 'Helsinki');
countriesMap.set('Sweden', 'Stockholm');
countriesMap.set('Norway', 'Oslo');
console.log(countriesMap);
console.log(countriesMap.size);
console.log(countriesMap.get('Sweden'));
console.log(countriesMap.has('Finland'));

for (const country of countriesMap)
{
    console.log(country);
}
for (const [ country, city ] of countriesMap)
{
    console.log(country, city);
}
console.log(countriesMap.get('Nigeria'));
