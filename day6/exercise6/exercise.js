for (let i = 0 ; i <= 10 ; i++)
{
    console.log(i);
}
let i = 0;
while (i <= 10)
{
    console.log(i);
    i++;
}
i = 0;
do
{
    console.log(i);
    i++;
} while (i <= 10);

for (let i = 10 ; i >= 0 ; i--)
{
    console.log(i);
}
i = 10;
while (i >= 0)
{
    console.log(i);
    i--;
}
i = 10;
do
{
    console.log(i);
    i--;
} while (i >= 0);

let n = 5;
for (let i = 0 ; i <= n; i++)
{
    console.log(i);
}

for (let i = 0 ; i <= 6 ; i++)
{
    let hash = '#';
    for (let j = i ; j > 0 ; j--)
    {
        hash += '#';
    }
    console.log(hash);
}

for (let i = 0 ; i <= 10 ; i++)
{
    console.log(`${i} x ${i} = ${i * i}`);
}
for (let i = 0 ; i <= 10 ; i++)
{
    console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}
for (i = 0 ; i <= 100 ; i++)
{
    if (i % 2 === 0)
    {
        console.log(i);
    }
}
for (i = 0 ; i <= 100; i++)
{
    if (i % 2 !== 0)
    {
        console.log(i);
    }
}

// 9***
// console.log();
// let flag;
// for (i = 0 ; i <= 100 ; i++)
// {
//     for (j = 2 ; j < i ; j++)
//     {
//         if (i % j === 0)
//         {
//             break;
//         }
//         flag = true;
//     }
//     if (flag)
//     {
//         console.log(i);
//     }
// }

let sum = 0;
for (let i = 0 ; i <= 100 ; i++)
{
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
let sumOfEvens = 0;
for (let i = 0 ; i <= 100 ; i++)
{
    if (i % 2 === 0)
    {
        sumOfEvens += i;
    }
}
let sumOfOdds = 0;
for (let i = 0 ; i <= 100 ; i++)
{
    if (i % 2 !== 0)
    {
        sumOfOdds += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumOfEvens}. The sum of all odds from 0 to 100 is ${sumOfOdds}.`);
console.log([sumOfEvens, sumOfOdds]);

const randomNumbers = [];
for (let i = 0 ; i < 5 ; i++)
{
    randomNumbers.push(Math.floor(Math.random() * 10));
}
console.log(randomNumbers);

randomNumbers.splice(0, randomNumbers.length);
while (randomNumbers.length < 5)
{
    let num = Math.floor(Math.random() * 10);
    if (!(randomNumbers.includes(num)))
    {
        randomNumbers.push(num);
    }
}
console.log(randomNumbers);

let randomSixCharactersId = Math.random().toString(36).substr(2, 6);
console.log(randomSixCharactersId);
