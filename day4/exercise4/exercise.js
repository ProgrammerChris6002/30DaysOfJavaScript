// let age = parseInt(prompt("Enter your age: "));
// if (age >= 18)
// {
//     console.log('You are old enough to drive.');
// }
// else if (age < 18)
// {
//     console.log(`You are left with ${18 - age} years to drive.`);
// }
// else
// {
//     console.log("Invalid input!");
// }

// let age = parseInt(prompt("Enter your age: "));
// if (age > 25)
// {
//     console.log(`You are ${age - 25} years older than me.`);
// }
// else if (age < 25)
// {
//     console.log(`I am ${25 - age} years older than you.`);
// }
// else if (age == 25)
// {
//     console.log('We are the same age.');
// }
// else
// {
//     console.log(`${age} is not a valid number.`);
// }

let a = 4;
let b = 3;
if (a > b)
{
    console.log(`${a} is greater than ${b}.`);
}
else if (a < b)
{
    console.log(`${b} is greater than ${a}.`);
}
else
{
    console.log(`${a} = ${b}`);
}

a > b
    ? console.log(`${a} is greater than ${b}.`)
    : console.log(`${b} is greater than ${a}.`);

let num = parseInt(prompt('Enter a number: '))
if (num % 2 === 0)
{
    console.log(`${num} is an even number.`);
}
else
{
    console.log(`${num} is an odd number.`);
}
