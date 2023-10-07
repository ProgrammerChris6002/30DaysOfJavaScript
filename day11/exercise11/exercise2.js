const users = [
    {
        name:'Brook',
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'David',
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    },
    {
        name:'John',
        scores:85,
        skills:['HTML'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
];

for (const user of users)
{
    let { name, scores, skills, age } = user;
    console.log(name, scores, skills, age);
}

for (const user of users)
{
    let { name, scores, skills, age } = user;
    if (skills.length < 2)
    {
        console.log(name);
    }
}
