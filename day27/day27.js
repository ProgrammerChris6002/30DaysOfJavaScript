const strong = document.querySelector("[data-strong-tech-skills]");
const p = document.querySelector("[data-p-talents]");
const div = document.querySelector("[data-div-talents]");
const skills = [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Python', 'Django', 'Flask', 'SQL', 'GIT' ];
const colors = [ 'red', 'blue', 'yellow', 'purple', 'darkblue', 'green' ];
const talents = [
    { talent: 'Motivational Speaker', emoji: '&#x1F525;' },
    { talent: 'Motivator', emoji: '&#x1F525;' },
    { talent: 'Programmer', emoji: '&#x1F4BB;' },
    { talent: 'Educator', emoji: '&#x1F9D1;' },
    { talent: 'Developer', emoji: '&#x1F468;&#x200D;&#x1F4BB;' },
    { talent: 'Student', emoji: '&#x1F468;&#x200D;&#x1F393;' },
];

const selectRandomElement = (array)=>
{
    const randomNumber = Math.floor(Math.random() * array.length);
    const randomElement = array[ randomNumber ];
    return (randomElement);
}

const selectTalent = (array) =>
{
    const randomNumber = Math.floor(Math.random() * array.length);
    const randomTalent = array[ randomNumber ];
    return ({ talent: randomTalent.talent, emoji: randomTalent.emoji });
}

setInterval(() =>
{
    const talent = selectTalent(talents);
    div.innerHTML = `${talent.emoji} <p class="d-inline-block p-talents" data-p-talents>${talent.talent}</p>`;
}, 2500)

setInterval(() =>
{
    strong.innerHTML = selectRandomElement(skills);
    strong.style.color = selectRandomElement(colors);
    strong.style.fontSize = '2rem';
}, 2000)


