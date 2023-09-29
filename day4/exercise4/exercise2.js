// let score = parseInt(prompt('Enter your score: '));
// if (score >= 80 && score <= 100)
// {
//     console.log('A');
// }
// else if (score >= 70 && score <= 89)
// {
//     console.log('B');
// }
// else if (score >= 60 && score <= 69)
// {
//     console.log('C');
// }
// else if (score >= 50 && score <= 59)
// {
//     console.log('D');
// }
// else if (score >= 0 && score <= 49)
// {
//     console.log('F');
// }
// else
// {
//     console.log('Invalid score.');
// }

// let month = prompt('Enter current month: ').toLowerCase();
// if (month == 'september' || month == 'october' || month == 'november')
// {
//     console.log('The season is Autumn.');
// }
// else if (month == 'december' || month == 'january' || month == 'february')
// {
//     console.log('The season is Winter.');
// }
// else if (month == 'march' || month == 'april' || month == 'may')
// {
//     console.log('The season is Spring.');
// }
// else if (month == 'june' || month == 'july' || month == 'august')
// {
//     console.log('The season is Summer.');
// }
// else
// {
//     console.log('Invalid month');
// }

let today = prompt('What is the day today? ').toLowerCase();
if (today === 'saturday' || today === 'sunday')
{
    console.log(`${today[0].toUpperCase()}${today.substr(1)} is a weekend.`);
}
else if (today === 'monday' || today === 'tuesday' || today === 'wednesday' || today === 'thursday' || today === 'friday')
{
    console.log(`${today[0].toUpperCase()}${today.substr(1)} is a working day.`);
}
else
{
    console.log(`${today} is not a day of the week.`);
}
