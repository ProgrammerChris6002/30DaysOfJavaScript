function outerFunction()
{
    let count = 0;
    function plus()
    {
        count++;
        return (count);
    }

    function reset()
    {
        count = 0;
        return (count);
    }

    function minus()
    {
        count--;
        return (count);
    }

    return {
        plus: plus,
        reset: reset,
        minus: minus
    }
}

const innerFunc = outerFunction();
console.log(innerFunc.plus());
console.log(innerFunc.reset());
console.log(innerFunc.minus());
