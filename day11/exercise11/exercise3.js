const { countries } = require('../../countries'); // importing countries array

for (const object of countries)
{
    let { name, capital, languages, population } = object;
    console.log(name, capital, languages, population)
}

// const student = [ 'David', [ 'HTM', 'CSS', 'JS', 'React' ], [ 98, 85, 90, 95 ] ];
// const [ name, skills, scores ] = student;
// const [ , , jsScore, reactScore ] = scores;
// console.log(name, skills, jsScore, reactScore);

const students = [
    [ 'David', [ 'HTM', 'CSS', 'JS', 'React' ], [ 98, 85, 90, 95 ] ],
    [ 'John', [ 'HTM', 'CSS', 'JS', 'React' ], [ 85, 80, 85, 80 ]]
];

function convertArrayToObject(array)
{
    const object = [];
    for (const arr of array)
    {
        const [ name, skills, scores ] = arr;
        object.push({
            name: name,
            skills: skills,
            scores: scores
        });
    }
    return (object);
}
// console.log(convertArrayToObject(students));

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:[ 'Python', 'R', 'D3.js' ]
    }
};

const newStudent = JSON.parse(JSON.stringify(student));
// console.log(newStudent);

const { skills } = newStudent;
const { frontEnd: fe, backEnd: be, dataBase: db, dataScience: ds } = skills;

fe.push({ skills: 'Bootstrap', level: 8 });
be.push({ skills: 'Express', level: 9 });
db.push({ skills: 'SQL', level: 8 });
ds.push('SQL');

console.log(student.skills);
console.log(newStudent);
