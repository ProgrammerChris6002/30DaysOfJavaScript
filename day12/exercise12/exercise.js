let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let pattern = /\d+/g;
let incomes = txt.match(pattern);
incomes = incomes.map((match) => match = parseInt(match));

let monthlyIncome = incomes[0] + incomes[2];
let annaulIncome = (monthlyIncome * 12) + incomes[1];
// console.log(`Total annual income = $${annaulIncome}`);

txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction';
pattern = /-?\d/g;
let points = txt.match(pattern);
// console.log(points);
let sortedPoints = points.map((point) => point = parseInt(point));
// console.log(sortedPoints);
sortedPoints.sort((a, b) => a - b);

let lastIndex = sortedPoints.length - 1;
let distance = sortedPoints[lastIndex] - sortedPoints[0];
// console.log(distance);


function isValidVariable(variable)
{
    let pattern = /[a-z0-9_$]/gi;
    let matches = variable.match(pattern);
    let first = matches[0];
    let condition1 = variable.length !== matches.length;
    let condition2 = typeof Number(first) === "number" && !(Number.isNaN(Number(first)));

    if (condition1 || condition2)
    {
        return (false);
    }
    return (true);
}
console.log(isValidVariable('first_name'));
console.log(isValidVariable('first-name'));
console.log(isValidVariable('1first_name'));
console.log(isValidVariable('firstname'));