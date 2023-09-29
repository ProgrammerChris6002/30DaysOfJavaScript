// let month = prompt('Enter a month: ').toLowerCase();
// if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december')
// {
//     console.log(`${month[0].toUpperCase()}${month.substring(1)} has 31 days.`);
// }
// else if (month === 'april' || month === 'june' || month === 'september' || month === 'november')
// {
//     console.log(`${month[0].toUpperCase()}${month.substring(1)} has 30 days.`);
// }
// else if (month === 'february')
// {
//     console.log(`${month[0].toUpperCase()}${month.substring(1)} has 28 days.`);
// }
// else
// {
//     console.log(`${month} is not a month of the year.`);
// }

let month = prompt('Enter a month: ').toLowerCase();
if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december')
{
    console.log(`${month[0].toUpperCase()}${month.substring(1)} has 31 days.`);
}
else if (month === 'april' || month === 'june' || month === 'september' || month === 'november')
{
    console.log(`${month[0].toUpperCase()}${month.substring(1)} has 30 days.`);
}
else if (month === 'february')
{
    console.log(`${month[0].toUpperCase()}${month.substring(1)} has 29 days.`);
}
else
{
    console.log(`${month} is not a month of the year.`);
}
