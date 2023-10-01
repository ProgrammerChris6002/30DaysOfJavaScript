const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

function userIdGeneratedByUser()
{
    let userIdLength = parseInt(prompt('Enter ID length: '));
    let userIdAmount = parseInt(prompt('Enter amount of ID\'s: '));
    let userIdArray = [];
    
    for (let i = 0 ; i < userIdAmount ; i++)
    {
        let userId = '';
        for (let j = 0 ; j < userIdLength ; j++)
        {
            userId += Math.random().toString(36).substr(2, 1);
        }
        userIdArray.push(userId);
        console.log(userId);
    }

    return (userIdArray);
}
// console.log(userIdGeneratedByUser());

function rgbColorGenerator()
{
    let rgbColorArray = [];
    for (let i = 0 ; i < 3 ; i++)
    {
        rgbColorArray.push(Math.floor(Math.random() * 256));
    }
    let rgbColor = `rgb(${rgbColorArray.join(',')})`
    return (rgbColor);
}
console.log(rgbColorGenerator());

function arrayOfHexaColors(count)
{
    let hexaColorsArray = [];
    let hexaNumberArray = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    let hexaDigit = '';

    for (i = 0 ; i < count ; i++)
    {
        let hexaColor = '#';
        while (hexaColor.length < 7)
        {
            hexaDigit = Math.random().toString(36).substr(2, 1);
            if (hexaNumberArray.includes(hexaDigit))
            {
                hexaColor += hexaDigit;
            }
        }
        hexaColorsArray.push(hexaColor);
    }
    return (hexaColorsArray);
}
console.log(arrayOfHexaColors(3));
console.log(arrayOfHexaColors(5));

function arrayOfRgbColors(count)
{
    let rgbColorsArray = [];
    for (let i = 0 ; i < count ; i++)
    {
        let rgbArray = [];
        for (let i = 0 ; i < 3 ; i++)
        {
            rgbArray.push(Math.floor(Math.random() * 256));
        }
        let rgbColor = `rgb(${rgbArray.join(',')})`;
        rgbColorsArray.push(rgbColor);
    }
    return (rgbColorsArray);
}
console.log(arrayOfRgbColors(2));
console.log(arrayOfRgbColors(6));

function convertHexaToRgb(hexaColor)
{
    hexaColor = hexaColor.substr(1);
    let start = 0;
    let end = 2;
    let rgbColorArray = [];

    for (let i = 0 ; i < 3 ; i++, start += 2, end += 2)
    {
        let color = hexaColor.substr(start, end);
        let rgbColor;
        
        if (typeof parseInt(color) === 'number' && !(Number.isNaN(parseInt(color))))
        {
            rgbColor = parseInt(color);
        }
        else
        {
            rgbColor = ((color.charCodeAt(0) - 97 + 10) * 16) + (color.charCodeAt(1) - 97 + 10); // same as = color.charCodeAt(i) - 87
        }
        rgbColorArray.push(rgbColor);
    }

    let rgbColors = `rgb(${rgbColorArray.join(',')})`
    return (rgbColors);
}
console.log(convertHexaToRgb('#ffffff'));
console.log(convertHexaToRgb('#000000'));
console.log(convertHexaToRgb(arrayOfHexaColors(1)[0]));

console.log();
function convertRgbToHexa(rgbColor)
{
    const hexaNumbersArray = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
    let lastIndex = rgbColor.length - 1;
    const colorArray = rgbColor.substr(4).substring(0, lastIndex - 4).split(',');
    let hexaColor = '#';
    
    for (let color of colorArray)
    {
        let hexaColorArray = [];
        while (color > 0)
        {
            let hexaDigit = color % 16;
            if (hexaDigit > 9)
            {
                hexaColorArray.push(hexaNumbersArray[hexaDigit - 10]);
            }
            else
            {
                hexaColorArray.push(hexaDigit);
            }
            color = parseInt(color / 16);
        }
        hexaColor += hexaColorArray.reverse().join('');
    }
    
    return (hexaColor);
}
console.log(convertRgbToHexa('rgb(255,255,255)'));
let rgbColor = arrayOfRgbColors(1)[0];
console.log(rgbColor);
console.log(convertRgbToHexa(rgbColor));

// function generateColors(color, amount)
// {
//     let result;
//     if (color === 'hexa' && typeof amount === 'number')
//     {
//         result = arrayOfHexaColors(amount);
//     }
//     else if (color === 'rgb')
//     {
//         result = arrayOfRgbColors(amount);
//     }
//     else
//     {
//         return ('Invalid argument passed!');
//     }

//     if (amount === 1)
//     {
//         return (result[0]);
//     }
//     return (result);
// }
// console.log(generateColors('hexa', 3))
// console.log(generateColors('hexa', 1))
// console.log(generateColors('rgb', 3))
// console.log(generateColors('rgb', 1))

function shuffleArray(array)
{
    for (let i = array.length - 1 ; i >= 0 ; i--)
    {
        let currentIndex = array.indexOf(array[i]);
        let randomIndex = Math.floor(Math.random() * currentIndex);

        let temp = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = temp;
    }
    return (array);
}
console.log(shuffleArray([ 1, 2, 3, 4, 5, 6 ]));

// function fatorial(number)
// {
//     let result = 1;
//     for (let i = 1 ; i <= number ; i++)
//     {
//         result *= i;
//     }
//     return (result);
// }
// console.log(fatorial(3));
// console.log(fatorial(5));

// // TODO 10***
// function isEmpty(parameter)
// {}

// function sum()
// {
//     let result = 0;
//     for (const num of arguments)
//     {
//         result += num;
//     }
//     return (result);
// }
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5, 6));

// function sumOfArrayItems(array)
// {
//     for (const item of array)
//     {
//         if (typeof item !== "number")
//         {
//             return ('All array items must be of number data type!');
//         }
//     }

//     let sum = 0;
//     for (const number of array)
//     {
//         sum += number;
//     }
//     return (sum);
// }
// console.log(sumOfArrayItems([ 1, 2, 3, 4 ]));
// console.log(sumOfArrayItems([ 1, 2, 3, '4' ]));

// function average(array)
// {
//     for (const item of array)
//     {
//         if (typeof item !== "number")
//         {
//             return ('All array items must be of number data type!');
//         }
//     }

//     let sum = 0;
//     for (const number of array)
//     {
//         sum += number;
//     }
//     return (sum / array.length);
// }
// console.log(average([ 1, 2, 3, 4 ]));
// console.log(average([ 1, 2, 3, '4' ]));

function modifyArray(array)
{
    if (array.length < 5)
    {
        return ("'Not found'");
    }
    array[4] = array[4].toUpperCase();
    return (array);
}
console.log(modifyArray([ 'Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot' ]));
console.log(modifyArray([ 'Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM' ]));
console.log(modifyArray([ 'Google', 'Facebook','Apple', 'Amazon' ]));


// function isPrime(number)
// {
//     for (let i = 2 ; i < number ; i++)
//     {
//         if (number % i === 0)
//         {
//             return (`${number} is not a prime number.`);
//         }
//     }
//     return (`${number} is a prime number.`);
// }
// console.log(isPrime(5));
// console.log(isPrime(9));
// console.log(isPrime(20));

// console.log('a'.charAt(0));

function isUnique(array)
{
    let i = 0;
    while (i < array.length)
    {
        for (j = 0 ; j < array.length ; j++)
        {
            if (array[i] === array[j] && i !== j)
            {
                return ('Array items are not unique');
            }
        }
        i++;
    }
    return ('Array items are unique');
}
console.log(isUnique([ 1, 2, 3, 4, 5 ]));
console.log(isUnique([ 1, 2, 3, 4, 3 ]));

function sameDataType(array)
{
    for (let i = 1 ; i < array.length ; i++)
    {
        if (typeof array[0] !== typeof array[i])
            return ('Array items are not of the same data type.');
    }
    return ('Array items are of the same data type.');
}
console.log(sameDataType([ 1, 2, 3, '4' ]));
console.log(sameDataType([ 1, 2, 3, 4 ]));

function isValidVariable(variable)
{
    let pattern = /[a-z0-9$_]/gi;
    let matches = variable.match(pattern);
    if (matches.length !== variable.length) return ('Invalid variable name');
    return ('Valid variable name');
}
console.log(isValidVariable('firstname'));
console.log(isValidVariable('firstName'));
console.log(isValidVariable('first-name'));
console.log(isValidVariable('first_name'));

function sevenRandomNumbers()
{
    let randNumsArray = [];
    do
    {
        randNum = Math.floor(Math.random() * 10);
        if (!(randNumsArray.includes(randNum)))
        {
            randNumsArray.push(randNum);
        }
    }
    while (randNumsArray.length < 7);
    return (randNumsArray);
}
console.log(sevenRandomNumbers());

function reverseCountries(array)
{
    const ArrayCopy = array.slice(0);
    return (array.reverse());
}
console.log(reverseCountries(countries));