let emptyArray = [];
let elements = [ 1, 2, 3, 4, 5 ];
console.log(elements.length);
console.log(elements[0]);
let middleIndex;
if (elements.length % 2 === 0)
{
    middleIndex = elements.length / 2;
}
else
{
    middleIndex = (elements.length - 1) / 2;
}
console.log(elements[middleIndex]);
let lastIndex = elements.length - 1;
console.log(elements[lastIndex]);

let mixedDataTypes = [ 1, 3.7, 'hello', null, undefined, 0n, [ 1, 2, 3 ] ];
console.log(mixedDataTypes.length);

let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
if (itCompanies.length % 2 === 0)
{
    middleIndex = itCompanies.length / 2;
}
else
{
    middleIndex = (itCompanies.length - 1) / 2;
}
console.log(itCompanies[middleIndex]);
lastIndex = itCompanies.length - 1;
console.log(itCompanies[lastIndex]);
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

itCompanies[0] = itCompanies[0].toUpperCase()
itCompanies[1] = itCompanies[1].toUpperCase()
itCompanies[2] = itCompanies[2].toUpperCase()
itCompanies[3] = itCompanies[3].toUpperCase()
itCompanies[5] = itCompanies[5].toUpperCase()
itCompanies[6] = itCompanies[6].toUpperCase()

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

itCompanies[0] = itCompanies[0][0] + itCompanies[0].substr(1).toLowerCase()
itCompanies[1] = itCompanies[1][0] + itCompanies[1].substr(1).toLowerCase()
itCompanies[2] = itCompanies[2][0] + itCompanies[2].substr(1).toLowerCase()
itCompanies[3] = itCompanies[3][0] + itCompanies[3].substr(1).toLowerCase()
itCompanies[5] = itCompanies[5][0] + itCompanies[5].substr(1).toLowerCase()
itCompanies[6] = itCompanies[6][0] + itCompanies[6].substr(1).toLowerCase()

let itCompaniesString = itCompanies.slice(0, lastIndex).join(', ');
let result = itCompaniesString.concat(' and ', itCompanies[lastIndex], ' are big IT companies.');
console.log(result);

if (itCompanies.includes('Amazon'))
{
    console.log('Company found.');
}
else
{
    console.log('Company not found.');
}

// 14***

itCompanies.sort();
console.log(itCompanies);
itCompanies.reverse();
console.log(itCompanies);
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

if (itCompanies.length % 2 === 0)
{
    middleIndex = itCompanies.length / 2;
}
else
{
    middleIndex = (itCompanies.length - 1) / 2;
}
console.log(itCompanies.slice(middleIndex));
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice(middleIndex, 1);
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
