let randomId = Math.random().toString(36).substr(2);
console.log(randomId);

// 2***
// let hexaDecimalNumber = '#';
// Math.random()

let rgbArray = [];
for (let i = 0 ; i < 3 ; i++)
{
    let randomRgbColorNumber = Math.floor(Math.random() * 256);
    rgbArray.push(randomRgbColorNumber);
}
console.log(`rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`);

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
    'Kenya'
];
const newArray = [];
for (let i = 0 ; i < countries.length ; i++)
{
    newArray.push(countries[i].toUpperCase());
}
console.log(newArray);

newArray.splice(0, newArray.length);
for (let i = 0 ; i < countries.length ; i++)
{
    newArray.push(countries[i].length);
}
console.log(newArray);

newArray.splice(0, newArray.length);
for (let i = 0 ; i < countries.length ; i++)
{
    newArray.push([ countries[i], countries[i].substr(0, 3).toUpperCase(), countries[i].length ]);
}
console.log(newArray);

newArray.splice(0, newArray.length);
for (let i = 0 ; i < countries.length ; i++)
{
    if (countries[i].includes('land'))
    {
        newArray.push(countries[i]);
    }
}
if (newArray.length > 0)
{
    console.log(newArray);
}
else
{
    console.log('All these countries are without land');
}

newArray.splice(0, newArray.length);
for (let i = 0 ; i < countries.length ; i++)
{
    if (countries[i].includes('ia'))
    {
        newArray.push(countries[i]);
    }
}
if (newArray.length > 0)
{
    console.log(newArray);
}
else
{
    console.log('These countries ends without ia');
}

let countriesWithMaxCharacters = countries[0];
for (let i = 1 ; i < countries.length ; i++)
{
    if (countries[i].length > countriesWithMaxCharacters.length)
    {
        countriesWithMaxCharacters = countries[i];
    }
}
console.log(countriesWithMaxCharacters);

newArray.splice(0, newArray.length);
for (let i = 0 ; i < countries.length ; i++)
{
    if (countries[i].length === 5)
    {
        newArray.push(countries[i]);
    }
}
console.log(newArray);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
newArray.splice(0, newArray.length);
for (let i = 0 ; i < webTechs.length ; i++)
{
    newArray[i] = [ webTechs[i], webTechs[i].length ];
}
console.log(newArray);

const mernStack = [ 'MongoDB', 'Express', 'React', 'Node' ];
let acronym = '';
for (let i = 0 ; i < mernStack.length ; i++)
{
    acronym += mernStack[i][0];
}
console.log(acronym);

for (const tech of webTechs)
{
    console.log(tech);
}

newArray.splice(0, newArray.length);
const fruits = [ 'banana', 'orange', 'mango', 'lemon' ];
for (let i = 0 ; i < fruits.length ; i++)
{
    newArray.unshift(fruits[i]);
}
console.log(newArray);

const fullStack = [
    [ 'HTML', 'CSS', 'JS', 'React' ],
    [ 'Node', 'Express', 'MongoDB' ]
];
for (let i = 0 ; i < fullStack.length ; i++)
{
    for (let j = 0 ; j < fullStack[i].length ; j++)
    {
        console.log(fullStack[i][j].toUpperCase());
    }
}
for (const stack of fullStack)
{
    for (const skill of stack)
    {
        console.log(skill.toUpperCase());
    }
}