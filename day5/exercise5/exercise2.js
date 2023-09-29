let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

// const shoppingCart = [ 'Milk', 'Coffee', 'Tea', 'Honey' ];
// if (!(shoppingCart.includes('Meat')))
// {
//     shoppingCart.unshift('Meat');
// }
// if (!(shoppingCart.includes('Sugar')))
// {
//     shoppingCart.push('Sugar');
// }
// let allergic = confirm('Are you allergic to honey? ');
// if (allergic)
// {
//     let indexOfHoney = shoppingCart.indexOf('Honey');
//     shoppingCart.splice(indexOfHoney, 1);
// }
// let indexOfTea = shoppingCart.indexOf('Tea');
// shoppingCart[indexOfTea] = 'Green Tea';
// console.log(shoppingCart);

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
if (countries.includes('Ethiopia'))
{
    console.log('ETHIOPIA');
}
else
{
    countries.push('Ethiopia');
    console.log(countries);
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
if (webTechs.includes('Sass'))
{
    console.log('Sass is a CSS preprocess');
}
else
{
    webTechs.push('Sass');
    console.log(webTechs);
}

const frontEnd = [ 'HTML', 'CSS', 'JS', 'React', 'Redux' ];
const backEnd = [ 'Node', 'Express', 'MongoDB' ];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);