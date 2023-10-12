const student = {
    firstName: 'Christian',
    lastName: 'Nwachukwu',
    age: 17,
    skills: [ 'HTML', 'CSS', 'JS', 'Bootstrap', 'Python', 'Django', 'MySQL', 'C' ],
    country: 'Christian',
    enrolled: true
};

const studentJSON = JSON.stringify(student, undefined, 4);
// localStorage.setItem('student', student);
// localStorage.removeItem('city')
console.log(localStorage);