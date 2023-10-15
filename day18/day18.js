// const doSomething = callback =>
// {
//     setTimeout(() =>
//     {
//         const skills = [ 'HTML', 'CSS', 'JS' ];
//         callback('It did not go well', skills);
//     }, 2000);
// }

// const callback = (err, result) =>
// {
//     if (err)
//     {
//         return (console.log(err));
//     }
//     return (console.log(result));
// }

// doSomething(callback);

const doSomething = callback =>
{
    setTimeout(() =>
    {
        const skills = [ 'HTML', 'CSS', 'JS' ];
        callback(false, skills);
    }, 2000);
}

const callback = ((err, result) =>
{
    if (err)
    {
        return (console.log(err));
    }
    return (console.log(result));
})

doSomething(callback);

// syntax
const promise = new Promise((resolve, reject) =>
{
    resolve('success');
    reject('failure');
});

// const doPromise = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>
//     {
//         const skills = [ 'HTML', 'CSS', 'JS' ];
//         if (skills.length > 0)
//         {
//             resolve(skills);
//         }
//         else
//         {
//             reject('Something wrong has heppened');
//         }
//     }, 2000);
// });

// doPromise.then(result => console.log(result)).catch(error => console.log(error));

const doPromise = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        const skills = [ 'HTML', 'CSS', 'JS' ];
        if (skills.includes('Node'))
        {
            resolve(skills);
        }
        else
        {
            reject('Something went wrong');
        }
    }, 2000);
});

doPromise.then((result) => console.log(result)).catch((error) => console.log(error));

const url = 'https://restcountries.com/v2/all';
fetch(url).then(response => response.json()).then(data =>
    {
        // console.log(data);
    }).catch(error => console.error(error));

const square = async function(n)
{
    const value = await n * n;
    console.log(value);
    // return (value);
}
console.log(square(5));
square(2);

// fetch(url).then(response => response.json()).then(data => console.log(data)).catch((error) => console.error(error));

const fetchData = async (url) =>
{
    try
    {
        const response = await fetch(url);
        const countries = await response.json();
        console.log(countries[0]);
    }
    catch (err)
    {
        console.error(err);
    }
}

console.log(' ==== async and await');
fetchData(url);
