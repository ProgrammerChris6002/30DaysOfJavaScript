try
{
    let lastName = 'Yetayeh';
    let fullName = fistName + ' ' + lastName;
}
catch (err)
{
    console.error('Name of the error', err.name);
    console.log('Error message', err.message);
}
finally
{
    console.log('In any case, I will be executed');
}

// throw 'Error2';
// throw 42;
// throw true;
// throw new Error('Required');

const throwErrorExampleFun = () =>
{
    let message;
    let x = prompt('Enter a number: ');
    try
    {
        if (x == '') throw 'empty';
        if (isNaN(x)) throw 'not a number';
        x = Number(x);
        if (x < 5) throw 'too low';
        if (x > 10) throw 'too high';
    }
    catch (err)
    {
        console.log(err.name);
        console.log(err.message);
        console.error(err);
    }
}
// throwErrorExampleFun();

// let firstName = 'Asabeneh';
// let fullName = fistName + ' ' + lastName;
// console.log(fullName);

// let square = 2 x 2;
// console.log(square);
// console.log('Hello, world');

let num = 10;
console.log(num.toLowerCase());
