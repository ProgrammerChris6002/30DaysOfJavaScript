// 2***

function printArray(array)
{
    for (const element of array)
    {
        console.log(element);
    }
    return (array);
}
printArray([ 1, 2, 3 ]);

function showDateTime()
{
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    month > 10 ? month = month : month = '0' + month;
    day > 10 ? day = day : day = '0' + day;
    hours > 10 ? hours = hours : hours = '0' + hours;
    minutes > 10 ? minutes = minutes : minutes = '0' + minutes;
    let dateTime = `${day}/${month}/${year} ${hours}:${minutes}`;

    return (dateTime);
}
console.log(showDateTime());

function swapValues(x, y)
{
    let temp = x;
    x = y;
    y = temp;
    let result = `x => ${x}, y => ${y}`;
    return (result);
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

function reverseArray(array)
{
    const newArray = [];
    for (let i = 0 ; i < array.length ; i++)
    {
        newArray.unshift(array[i]);
    }
    return (newArray);
}
console.log(reverseArray([ 1, 2, 3, 4, 5 ]));
console.log(reverseArray([ 'A', 'B', 'C' ]));

function capitalizeArray(array)
{
    for (const element of array)
    {
        if (typeof element !== 'string')
        {
            return ('Array must contain only strings');
        }
    }

    for (let i = 0 ; i < array.length ; i++)
    {
        array[i] = `${array[i][0].toUpperCase()}${array[i].slice(1)}`;
    }
    return (array);
}
console.log(capitalizeArray([ 'ebuka', 'christian' ]));

function addItem(array, index, item)
{
    let arrayLength = array.length;
    for (let i = arrayLength - 1 ; i >= 0 ; i--)
    {
        if (i >= index)
        {
            array[i + 1] = array[i];
        }
    }
    array[index] = item;

    return (array);
}
console.log(addItem([ 1, 2, 4, 5, 6 ], 2, 3));

function removeItem(array, index)
{
    let arrayLength = array.length;
    for (let i = 0 ; i < arrayLength ; i++)
    {
        if (i >= index)
        {
            array[i] = array[i + 1];
        }
    }
    array.pop();
    return (array);
}
console.log(removeItem([ 1, 2, 3, 3, 4, 5 ], 3));

function sumOfNumbers(number)
{
    let sum = 0;
    for (let i = 1 ; i <= number ; i++)
    {
        sum += i;
    }
    return (`Sum = ${sum}`);
}
console.log(sumOfNumbers(10));

function sumOfOdds(number)
{
    let sum = 0;
    for (let i = 1 ; i <= number ; i++)
    {
        if (i % 2 !== 0)
        {
            sum += i;
        }
    }
    return (`Sum of odds = ${sum}`);
}
console.log(sumOfOdds(10));

function sumOfEvens(number)
{
    let sum = 0;
    for (let i = 1 ; i <= number ; i++)
    {
        if (i % 2 === 0)
        {
            sum += i;
        }
    }
    return (`Sum of evens = ${sum}`);
}
console.log(sumOfEvens(10));

function evensAnsOdds(number)
{
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 1 ; i <= number ; i++)
    {
        if (i % 2 === 0)
        {
            evenSum += i;
        }
        else
        {
            oddSum += i;
        }
    }
    return (`The number of evens are = ${evenSum}.\nThe number of odds are = ${oddSum}.`);
}
console.log(evensAnsOdds(10));

function sum()
{
    for (number of arguments)
    {
        if (typeof number !== 'number')
        {
            return ('All arguments must be numbers');
        }
    }

    let sum = 0;
    for (number of arguments)
    {
        sum += number;
    }
    return (sum);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

const randomUserId = () => Math.random().toString(36).substring(2);
console.log(randomUserId());

function randomHexaNumberGenerator()
{
    let hexaNumber = '#';
    let hexaNumberList = [ '#', 'a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    let hexaDigit = '';

    while (hexaNumber.length < 7)
    {
        hexaDigit = Math.random().toString(36).substr(2, 1);
        if (hexaNumberList.includes(hexaDigit))
        {
            hexaNumber += `${hexaDigit}`;
        }
    }
    return (hexaNumber);
}
console.log(randomHexaNumberGenerator());

function userIdGenerator()
{
    let userId = '';

    while (userId.length < 7)
    {
        userId += Math.random().toString(36).substring(2, 3);
    }
    return (userId);
}
console.log(userIdGenerator());

