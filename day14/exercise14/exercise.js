"use strict";

function divideTwoNums(numOne, numTwo)
{
    let result;
    try
    {
        result = numOne / numTwo;
        if (numTwo === 0) throw Error('Division by zero!');
    }
    catch (err)
    {
        return (`Error: ${err.name}\n${err.message}`);
    }
    return (result);
}
console.log(divideTwoNums(4, 1));

const variable = "Chris";
console.log(variable);

const makeError = () =>
{
    let i = 1;
    while (i <= 5)
    {
        try
        {
            // const name = "Chris";
            // name = "Chris";
            if (i % 2 !== 0) throw new Error("Odd number!");
            console.log("Even number!");
        }
        catch (err)
        {
            // console.error(err.name);
            // console.error(err.message);
            console.error(err.stack);
            // console.error(err);
        }
        finally
        {
            console.log("...finally");
            i++;
        }
    }
}
makeError();

function customError(message)
{
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}