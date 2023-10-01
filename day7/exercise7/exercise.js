function fullName()
{
    let firstName = 'Christian';
    let lastName = 'Nwachukwu';
    console.log(firstName + ' ' + lastName);
}
fullName();

function fullName(firstName, lastName)
{
    return (`${firstName} ${lastName}`);
}
console.log(fullName('Christian', 'Nwachukwu'));

function addNumbers(numOne, numTwo)
{
    return (numOne + numTwo);
}
console.log(addNumbers(2, 4));

function areaOfRectangle(length, breadth)
{
    return (length * breadth);
}
console.log(areaOfRectangle(4, 10));

function perimeterOfRectangle(length, width)
{
    return (2 * (length + width));
}
console.log(perimeterOfRectangle(6, 8));

function volumeOfRectPrism(length, width, height)
{
    return (`Volume: ${length * width * height} m3`);
}
console.log(volumeOfRectPrism(5, 2, 10));

function areaOfCircle(radius)
{
    let area = Math.PI * radius * radius;
    return (`Area: ${area} m2`);
}
console.log(areaOfCircle(10));

function circumOfCircle(radius)
{
    let circum = 2 * Math.PI * radius;
    return (`Circumference: ${circum} m`);
}
console.log(circumOfCircle(10));

function calculateDensity(mass, volume)
{
    let density = mass * volume;
    return (`Density = ${density} m3`);
}
console.log(calculateDensity(100, 4));

function calculateSpeed(distance, time)
{
    let speed = distance / time;
    return (`Speed = ${speed} m/s2`);
}
console.log(calculateSpeed(100, 8));

function calculateWeight(mass, gravity)
{
    let weight = mass * gravity;
    return (`Weight = ${weight} N`);
}
console.log(calculateWeight(50, 9.81));

function convertCelsiusToFahrenheit(celsius)
{
    let fahrenheit = (celsius * 9 / 5) + 32;
    return (`${celsius}oC = ${fahrenheit}oF`);
}
console.log(convertCelsiusToFahrenheit(0));

function calculateBmi(weight, height)
{
    let bmi = weight / ((height * height) / 10000);
    let group;
    if (bmi < 18.5)
    {
        group = 'Underweight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9)
    {
        group = 'Normal weight';
    }
    else if (bmi >= 25 && bmi <= 29.9)
    {
        group = 'Overweight';
    }
    else
    {
        group = 'Obese';
    }

    return (`BMI = ${Math.round(bmi)}. You are ${group}.`);
}
console.log(calculateBmi(57.5, 175));

function checkSeason(month)
{
    let season;
    month = month.toLowerCase();

    if (month === 'september' || month === 'october' || month === 'november')
    {
        season = 'Autumn';
    }
    else if (month === 'december' || month === 'january' || month === 'february')
    {
        season = 'Winter';
    }
    else if (month === 'march' || month === 'april' || month === 'may')
    {
        season = 'Spring';
    }
    else if (month === 'june' || month === 'july' || month === 'august')
    {
        season = 'Summer';
    }
    else
    {
        return (`'${month}' is not a month of the year!`);
    }

    return (`The season is ${season}.`);
}
console.log(checkSeason('JanuAry'));
console.log(checkSeason('AprIl'));
console.log(checkSeason('junE'));
console.log(checkSeason('NovembeR'));
console.log(checkSeason('Novemberr'));

function findMax()
{
    if (arguments.length > 0)
    {
        maxNum = arguments[0];
    }
    else
    {
        return ('No argument passed!');
    }
    for (const num of arguments)
    {
        if (num > maxNum)
        {
            maxNum = num;
        }
    }

    return (maxNum);
}
console.log(findMax());
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
