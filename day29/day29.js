const main = document.querySelector("[data-color-main]");
const h1 = document.querySelector("[data-color-h1]");
const text = h1.textContent;
h1.textContent = '';

const selectRandomColor = () =>
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0 ; i < 6 ; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return (color);
}

for (let i = 0 ; i < text.length; i++)
{
    const letter = text[i]
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.color = selectRandomColor();
    h1.appendChild(span);
}

setInterval(() =>
{
    const color = selectRandomColor();
    main.style.backgroundColor = color;
}, 1000)
