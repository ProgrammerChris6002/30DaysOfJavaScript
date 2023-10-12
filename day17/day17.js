// localStorage.setItem('firstName', 'Asabeneh');
console.log(localStorage);

// localStorage.setItem('age', 200);
console.log(localStorage);

// const skills = [ 'HTML', 'CSS', 'JS', 'React' ];
// const skillsJSON = JSON.stringify(skills, undefined, 4);
// localStorage.setItem('skills', skillsJSON);
console.log(localStorage);

// let skills = [
//     { tech: 'HTML', level: 10 },
//     { tech: 'CSS', level: 9 },
//     { tech: 'JS', level: 8 },
//     { tech: 'React', level: 9 },
//     { tech: 'Redux', level: 10 },
//     { tech: 'Node', level: 8 },
//     { tech: 'MongoDB', level: 8 }
// ];
// let skillJSON = JSON.stringify(skills);
// localStorage.setItem('skills', skillJSON);
console.log(localStorage);

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: [ 'HTML', 'CSS', 'JS', 'React' ]
}
const userText = JSON.stringify(user, undefined, 4);
//localStorage.setItem('user', userText);
console.log(localStorage);

let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skills = localStorage.getItem('skills');
console.log(firstName, age, skills);

let skillsObj = JSON.parse(skills);
console.log(skillsObj);

localStorage.clear();
