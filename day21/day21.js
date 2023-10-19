let allTitles = document.getElementsByTagName('h1');

console.log(allTitles);
console.log(allTitles.length);

for (let i = 0 ; i < allTitles.length ; i++)
{
    console.log(allTitles[i]);
}

let firstTitle = document.getElementById('first-title');
firstTitle = document.querySelector('h1');
firstTitle = document.querySelector('#first-title');
firstTitle = document.querySelector('.title');
console.log(firstTitle);

allTitles = document.querySelectorAll('h1');
console.log(allTitles.length);
for (let i = 0 ; i < allTitles.length ; i++)
{
    console.log(allTitles[i]);
}

allTitles.forEach(title => console.log(title));
allTitles = document.querySelectorAll('.title');

const titles = document.querySelectorAll('h1');
// titles[3].className = 'title';
// titles[3].id = 'fourth-title';
titles[3].setAttribute('class', 'title');
titles[3].setAttribute('id', 'fourth-title');

titles[3].classList.add('title', 'header-title');
titles[3].textContent = 'Fourth Title';

const lists = `<li>30DaysOfPython Challenge Done</li>
    <li>30DaysOfJavaScript Challenge Ongoing</li>
    <li>30DaysOfReact Challenge Coming</li>
    <li>30DaysOfFullStack Challenge Coming</li>
    <li>30DaysOfDataAnalysis Challenge Coming</li>
    <li>30DaysOfReactNative Challenge Coming</li>
    <li>30DaysOfMachineLearning Challenge Coming</li>`;
const ul = document.querySelector('ul');
ul.innerHTML = lists;
ul.innerHTML = '';

// titles.forEach((title, i)=>
// {
//     title.style.fontSize = '24px';
//     if (i % 2 === 0) title.style.color = 'green'
//     else title.style.color = 'red';
// });

titles.forEach((title, i)=>
{
    title.style.fontSize = '24px';
    if (i % 2 === 0) title.style.backgroundColor = 'green'
    else title.style.backgroundColor = 'red';
});

titles.forEach((title, i)=>
{
    // title.style.fontSize = '24px';
    if (i % 2 === 0) title.style.fontSize = '20px'
    else title.style.fontSize = '30px';
});

