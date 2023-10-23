const button = document.querySelector('button');
button.addEventListener('click', e=>
{
    console.log('e gives the event listener object: ', e);
    console.log('e.target gives the selected element: ', e.target);
    console.log('e.target.textContent gives content of selected element: ', e.target.textContent);
});

button.addEventListener('dblclick', e=>
{
    console.log('e gives the event listener object:', e);
    console.log('e.target gives the selected element:', e.target);
    console.log('e.target.textContent gives content of selected element:', e.target.textContent);
});

button.addEventListener('mouseenter', e=>
{
    console.log('e gives the event listener object:', e);
    console.log('e.target gives the selected element:', e.target);
    console.log('e.target.textContent gives the content of the selected element:', e.target.textContent);
});

const mass = document.querySelector('#mass');
const height = document.querySelector('#height');
const bmiButton = document.querySelector('.bmi');

let bmi;
bmiButton.addEventListener('click', ()=>
{
    bmi = mass.value / height.value ** 2;
    alert(`Your bmi is ${bmi.toFixed(2)}`);
    console.log(bmi);
});

const input = document.querySelector('.input');
const p = document.querySelector('.para');
input.addEventListener('input', e=>
{
    p.textContent = e.target.value;
});

const inputBlur = document.querySelector('.input-blur');
const pBlur = document.querySelector('.para-blur');
inputBlur.addEventListener('blur', (e)=>
{
    pBlur.textContent = 'Field is required';
    pBlur.style.color = 'red';
});

document.body.addEventListener('keypress', e=>
{
    alert(e.keyCode);
});
