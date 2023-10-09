const numbers = [ 1, 2, 3, 4, 5 ];

let i = 0;
console.time('while loop');
while (i < numbers.length)
{
    console.log(numbers[i]);
    i++;
}
console.timeEnd('while loop');

console.time('for loop');
for (let i = 0 ; i < numbers.length ; i++)
{
    console.log(numbers[i]);
}
console.timeEnd('for loop');

console.time('for of loop');
for (const num of numbers)
{
    console.log(num);
}
console.timeEnd('for of loop');

console.time('forEach loop');
numbers.forEach((num) => console.log(num));
console.timeEnd('forEach loop');
