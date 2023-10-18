function outerFunction()
{
    let count = 0;
    function innerFunction()
    {
        count--;
        return (count);
    }

    return innerFunction;
}

const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
