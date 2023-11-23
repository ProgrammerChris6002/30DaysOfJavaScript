const inputNodeList = document.querySelectorAll("input");
const pNodeList = document.querySelectorAll("p");
const submitBtn = document.querySelector("[data-submit-btn]");
const form = document.querySelector("[data-submit-form]");
const nodeList = [ inputNodeList, pNodeList ];
const [ firstNameInput, lastNameInput, emailInput, telephoneInput, passwordInput, bioInput ] = inputNodeList;
const [ firstNameP, lastNameP, emailP, telephoneP, passwordP, bioP ] = pNodeList;
const inputValues = [
    [ 3, 16, '[a-zA-Z0-9]' ],
    [ 3, 16, '[a-zA-Z0-9]' ],
    [ 5, 150, '[a-zA-Z0-9@.]' ],
    [ 6, 20, '[a-zA-Z0-9@-_]' ],
    [ 11, 11, '[0-9]' ],
    [ 8, 50, '[a-z0-9-_]\s?' ],
];

function checkInputFieldLength(inputElement, min = 3, max = 16)
{
    if (inputElement.value.length >= min && inputElement.value.length <= max) return (true);
    return (false);
}

function checkInputFieldContent(inputElement, pattern = '[a-zA0-9]')
{
    const str = inputElement.value;
    const regex = new RegExp(pattern, 'g')
    const matches = str.match(regex);
    
    if (matches.length === str.length) return (true);
    return (false);
}

const validateInputField = (inputElement, pElement, min, max, pattern) =>
{
    if (checkInputFieldLength(inputElement, min, max) && checkInputFieldContent(inputElement, pattern))
    {
        pElement.classList.remove('d-block');
        pElement.classList.add('d-none');
        inputElement.style.borderColor = 'green';
        return (true);
    }
    pElement.classList.remove('d-none');
    pElement.classList.add('d-block');
    inputElement.style.borderColor = 'red';
    return (false);
}

const validateAllInputFields = ()=>
{
    const isValid = [];
    for (let i = 0 ; i < inputValues.length ; i++)
    {
        const [ min, max, pattern ] = inputValues[i];
        document.body.addEventListener('click', ()=> validateInputField(inputNodeList[i], pNodeList[i], min, max, pattern))
        isValid.push(validateInputField(inputNodeList[i], pNodeList[i], min, max, pattern));
    }
    return (isValid.every(valid => valid === true));
}

for (let i = 0 ; i < inputValues.length ; i++)
{
    const [ min, max, pattern ] = inputValues[i];
    inputNodeList[i].addEventListener('blur', ()=> validateInputField(inputNodeList[i], pNodeList[i], min, max, pattern));
}

const setButtonDisplay = (func)=>
{
    if (func())
    {
        submitBtn.classList.remove('btn-dark');
        submitBtn.classList.add('btn-success');
    }
    else
    {
        submitBtn.classList.remove('btn-success');
        submitBtn.classList.add('btn-dark');
    }
}

form.addEventListener("submit", e =>
{
    e.preventDefault();
    setButtonDisplay(validateAllInputFields);
})
document.body.addEventListener("click", ()=> setButtonDisplay(validateAllInputFields));
