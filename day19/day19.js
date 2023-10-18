function outerFunction()
{
    let count = 0;
    function innerFunction()
    {
        count++;
        return (count);
    }

    // return (innerFunction());
    return (innerFunction);
}
const innerFunc = outerFunction()

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());


function outerFunc()
{
    let count = 0;
    function plusOne()
    {
        count++;
        return (count);
    }
    function minusOne()
    {
        count--;
        return (count);
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne(),
        // plusOne: plusOne,
        // minusOne: minusOne
    }
}
const innerFuncs = outerFunc();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.plusOne);
console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);

// console.log(innerFuncs.plusOne());
// console.log(innerFuncs.plusOne());
// console.log(innerFuncs.plusOne());
// console.log(innerFuncs.minusOne());