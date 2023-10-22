// let title = document.createElement("h1");
// title.className = 'title';
// title.style.fontSize = '24px';
// title.textContent = 'Creating HTML element DOM Day 2';

// console.log(title);

let title;
for (let i = 0 ; i < 3 ; i++)
{
    title = document.createElement('h1');
    title.className = 'title';
    title.style.fontSize = '24px';
    title.textContent  = i;
    // console.log(i);
    document.body.appendChild(title);
}

const ul = document.querySelector("ul");
const lists = document.querySelectorAll('li');
for (const list of lists)
{
    ul.removeChild(list);
}

// Or
// ul.innerHTML = '';
