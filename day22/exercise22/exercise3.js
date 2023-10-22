const wrapper = document.querySelector('.wrapper');
const h1 = document.querySelector('h1');
const strong = document.querySelector("strong");
const h2 = document.querySelector('h2');
const buttonDiv = document.querySelector(".button-div");
const ul = document.querySelector('ul');
const liNodeList = document.querySelectorAll('li');
const pDays = document.querySelectorAll(".p-days");
const details = document.querySelectorAll("details");
const pDetails = document.querySelectorAll(".p-details");
const pStatus = document.querySelectorAll(".p-status");
const spanNodeList = document.querySelectorAll("span");

wrapper.style.textAlign = 'center';
strong.style.fontSize = '60px';
h2.style.textDecoration = 'underline';
ul.style.listStyleType = 'none';
ul.style.textAlign = 'start';

const generateRandomColor = ()=>
{
    const colorsArray = [ 'green', 'red', 'yellow', 'purple', 'pink', 'violet', 'cyan', 'magenta', 'blue', 'grey', 'skyblue' ];
    const colorsArrayLength = colorsArray.length;
    const randomNumber = Math.floor(Math.random() * colorsArrayLength)
    return (colorsArray[randomNumber]);
}

const getDateTime = ()=>
{
    const now = new Date();
    const year = now.getFullYear();
    const monthIndex = now.getMonth();
    const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = 'PM';

    if (hours < 12)
    {
        hours = '0' + hours;
        time = 'AM';
    }
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    const fullTime = `${monthNames[monthIndex]} ${date}, ${year} ${hours}:${minutes}:${seconds} ${time}`;
    return (fullTime);
}

const styleDateTime = (button)=>
{
    const buttonStyles = {
        backgroundColor: `${generateRandomColor()}`,
        padding: '10px 25px',
        border: 'none',
        fontSize: '18px',
        marginBottom: '20px'
    }
    Object.assign(button.style, buttonStyles);
}

const displayDateTime = (func)=>
{
    const button = document.createElement("button");
    button.innerHTML = getDateTime();
    buttonDiv.appendChild(button);
    styleDateTime(button);
    setInterval(()=>
    {
        strong.style.color = `${generateRandomColor()}`;
        button.style.backgroundColor = `${generateRandomColor()}`;
        button.style.borderRadius = '6px';
        button.innerHTML = func();
    }, 1000);
}
// displayDateTime(getDateTime);

const styleChallenges = (nodeList)=>
{
    const liStyles = {
        width: '60%',
        padding: '24px 60px',
        margin: '8px auto',
        borderRadius: '6px',
        fontSize: '18px',
        display: 'flex',
    }
    nodeList.forEach((li)=>
    {
        Object.assign(li.style, liStyles);
        if (li.innerHTML.includes('Done')) li.style.backgroundColor = 'green'
        else if (li.innerHTML.includes('Ongoing')) li.style.backgroundColor = 'yellow'
        else li.style.backgroundColor = 'red';
    });

    return (nodeList);
}
styleChallenges(liNodeList);

const flexElementDisplay = (element)=> element.forEach((e)=> e.style.flex = '33.3%');
flexElementDisplay(pDays);
flexElementDisplay(details);
flexElementDisplay(pStatus);

const setNodeListElementBackgroundColor = (nodeList)=> nodeList.forEach((element)=> element.style.backgroundColor = generateRandomColor());
setNodeListElementBackgroundColor(spanNodeList);
