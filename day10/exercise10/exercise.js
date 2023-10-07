const emptySet = new Set();
console.log(emptySet);

const zeroToTen = new Set();
for (let i = 0 ; i <= 10 ; i++)
{
    zeroToTen.add(i);
}
console.log(zeroToTen);

zeroToTen.delete(5);
console.log(zeroToTen);

zeroToTen.clear();
console.log(zeroToTen);

const courses = [ 'MAT 001', 'MAT 002', 'PHY 001', 'PHY 002', 'CHE 001' ];
const coursesString = new Set(courses);
console.log(coursesString);

const countries = [ 'Finland', 'Sweden', 'Norway', 'Nigeria' ];
const countriesMap = new Map();
for (const country of countries)
{
    countriesMap.set(country, country.length);
}
console.log(countriesMap);
