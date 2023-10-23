const formInput = document.querySelector('.form-input');
const formButton = document.querySelector('.form-button');
const formP = document.querySelector('.form-p');
const divNumbers = document.querySelector('.div-numbers');

const numberStyles = {
    color: 'white',
    padding: '8px 0px',
    fontWeight: 700,
    fontSize: '40px',
    display: 'inline-block',
    textAlign: 'center',
    width: '10%',
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

function validateInputField(inputField, inputP)
{
    const inputFieldValue = inputField.value.trim();
    if (Number.isNaN(Number(inputFieldValue)) || inputFieldValue.length === 0)
    {
        inputP.textContent = 'Enter number value on the input field to generate numbers';
        return ([ false, null ]);
    }
    inputP.textContent = '';
    return ([ true, parseInt(inputFieldValue) ]);
}

const generateNumbers = (parentElement, childElementStyles, input, p)=>
{
    const returnValue = validateInputField(input, p);
    if (!(returnValue[0])) return (false);
    let upperLimit = parseInt(returnValue[1]);
    parentElement.innerHTML = '';

    for (let i = 0 ; i < upperLimit ; i++)
    {
        const number = document.createElement("div");
        number.classList = ('number', 'col-1 col-2-lg', 'm-1');
        Object.assign(number.style, childElementStyles);
        number.textContent = i;

        if (isPrime(i)) number.style.backgroundColor = 'red';
        else if (i % 2 === 0) number.style.backgroundColor = 'green';
        else number.style.backgroundColor = 'yellow';
        parentElement.appendChild(number);
    }
}

formButton.addEventListener('click', e => generateNumbers(divNumbers, numberStyles, formInput, formP));
