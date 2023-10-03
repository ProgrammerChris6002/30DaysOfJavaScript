const dog = {};
//console.log(dog);

dog.name = 'snowy';
dog.legs = 4;
dog.color = 'white';
dog.age = 1;
dog.bark = function()
{
    return ('woof woof');
}
//console.log(dog.name);
//console.log(dog.legs);
//console.log(dog.color);
//console.log(dog.age);
//console.log(dog.bark());

dog.breed = 'chihuahua';
dog.getDogInfo = function()
{
    let name = this.name[0].toUpperCase() + this.name.slice(1);
    return(`${name} is ${this.age} years old, ${this.color} in color and has ${this.legs} legs.\n${name} says ${this.bark()}.`);
}
//console.log(dog);
console.log(dog.getDogInfo());
