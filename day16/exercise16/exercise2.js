const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    isMarried: true,
    skills: [ 'HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const studentTxt = JSON.stringify(student, [ 'firstName', 'lastName', 'skills' ], 4);
console.log(studentTxt);
