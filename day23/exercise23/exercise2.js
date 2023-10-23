const pKeyName = document.querySelector('.p-key-name');
const pKeyNumber = document.querySelector('.p-key-number');
pKeyNumber.classList.remove('p-key-number');

document.body.addEventListener('keypress', e =>
{
    pKeyName.innerHTML = `You pressed <span style="color: green">${e.key}</span>`;
    pKeyNumber.innerHTML = e.keyCode;
    pKeyNumber.classList.add('p-key-number');
});
