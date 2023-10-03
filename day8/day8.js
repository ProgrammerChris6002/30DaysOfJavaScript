// a = 'JavaScript';
// b = 10;
// function letsLearnScope()
// {
//     console.log(a, b);
//     if (true)
//     {
//         console.log(a, b);
//     }
// }
// console.log(a, b);

// let a = 'JavaScript';
// let b = 10;
// function letsLearnScope()
// {
//     console.log(a, b);
//     if (true)
//     {
//         let a = 'Python';
//         let b = 100;
//         console.log(a, b);
//     }
//     console.log(a, b);
// }
// letsLearnScope();
// console.log(a, b);

// let a = 'JavaScript';
// let b = 10;
// function letsLearnScope()
// {
//     console.log(a, b);
//     let value = false;
//     if (true)
//     {
//         let a = 'Python';
//         let b = 20;
//         let c = 30;
//         let d = 40;
//         value = !value;
//         console.log(a, b, c, value);
//     }
//     console.log(a, b, value);
// }
// letsLearnScope();
// console.log(a, b);

// function letsLearnScope()
// {
//     var gravity = 9.81;
//     console.log(gravity);
// }
// letsLearnScope();

// if (true)
// {
//     var gravity = 9.81;
//     console.log(gravity);
// }
// console.log(gravity);

// for (var i = 0 ; i < 3  ; i++)
// {
//     console.log(i);
// }
// console.log(i);

function letsLearnScope()
{
    const gravity = 9.81;
    console.log(gravity);
}

if (true)
{
    const gravity = 9.81;
    console.log(gravity);
}
for (let i = 0 ; i < 3 ; i++)
{
    console.log(i);
}

const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle);

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: true,
    getFullName: function()
    {
        return (`${this.firstName} ${this.lastName}`);
    },
    'phone number': '+3584545454545'
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person['age']);
console.log(person['location']);
console.log(person['phone number']);
console.log(person.getFullName());

person.nationality = 'Ethiopian';
person.country = 'Finland';
person.title = 'Teacher';
person.skills.push('Meteor');
person.skills.push('SasS');
person.isMarried = true;

person.getPersonInfo = function()
{
    let skillsWithoutLastSkills = this.skills.splice(0, this.skills.length - 1).join(', ');
    let lastSkill = this.skills.splice(this.skills.length - 1)[0];
    let skills = `${skillsWithoutLastSkills}, and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;

    return (statement);
}
console.log(person);
console.log(person.getPersonInfo());

const person2 = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [ 'HTML', 'CSS', 'JS' ],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    getPersonInfo()
    {
        return (`I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}`);
    }
}
const copyPerson = Object.assign({}, person2);
console.log(copyPerson);

const keys = Object.keys(copyPerson);
console.log(keys);
const address = Object.keys(copyPerson.address);
console.log(address);

const values = Object.values(copyPerson);
console.log(values);
const entries = Object.entries(copyPerson);
console.log(entries);
console.log(copyPerson.hasOwnProperty('firstName'));
console.log(copyPerson.hasOwnProperty('score'));
