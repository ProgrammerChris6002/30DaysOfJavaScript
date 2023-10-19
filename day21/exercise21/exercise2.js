console.log(paragraphs);

paragraphs.forEach(para =>
    {
        para.style.fontSize = '24px';
        para.style.fontFamily = 'Verdana';
    });

paragraphs.forEach((para, i)=>
{
    if (i % 2 === 0)
    {
        para.style.color = 'green';
        para.style.backgroundColor = 'red';
    }
    else
    {
        para.style.color = 'red';
        para.style.backgroundColor = 'green';
    }
});

for (const para of paragraphs)
{
    if (!(para.textContent.includes('Fourth')))
    {
        para.id += `para-${para.textContent.slice(10).toLowerCase()}`;
        para.id += `parag-${para.textContent.slice(10).toLowerCase()}`;
    }
    para.textContent += '(edited)';
}

console.log(paragraphs);
