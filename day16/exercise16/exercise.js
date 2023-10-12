const skills = [ 'HTML', 'CSS', 'JS', 'React','Node', 'Python' ];
let age = 250;
let isMarried = true;
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    isMarried: true,
    skills: [ 'HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const skillsTxt = JSON.stringify(skills, undefined, 8);
console.log(skillsTxt);

let ageTxt = JSON.stringify(age, undefined, 4);
console.log(ageTxt);

let isMarriedTxt = JSON.stringify(isMarried, undefined, 8);
console.log(isMarriedTxt);

const studentTxt = JSON.stringify(student, undefined, 8);
console.log(studentTxt);
