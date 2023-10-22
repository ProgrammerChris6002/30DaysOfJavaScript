const main = document.querySelector("main");
const container = document.querySelector("div");

const numberStyles = {
    color: 'white',
    padding: '30px 0px',
    fontWeight: 700,
    fontSize: '28px',
    display: 'inline-block',
    gap: '8px',
    textAlign: 'center',
    width: '15%',
}

function isPrime(number)
{
    if (number < 2 || Number.isNaN(number)) return (false);

    for (let i = 2 ; i < number ; i++)
    {
        if (number % i === 0) return (false);
    }
    return (true);
}

const generateNumbers = (parentElement, childElementStyles)=>
{
    for (let i = 0 ; i <= 100 ; i++)
    {
        const number = document.createElement("div");
        number.classList.add('number', 'm-1');
        Object.assign(number.style, childElementStyles);
        number.textContent = i;

        if (isPrime(i)) number.style.backgroundColor = 'red';
        else if (i % 2 === 0) number.style.backgroundColor = 'green';
        else number.style.backgroundColor = 'yellow';
        parentElement.appendChild(number);
    }
}
generateNumbers(container, numberStyles);
