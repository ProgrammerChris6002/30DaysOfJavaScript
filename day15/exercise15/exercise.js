class Animal
{
    constructor(name = 'snowy', age = 1, color = 'black', legs = 4)
    {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    set setName(name)
    {
        if (typeof name !== "string") throw TypeError("Wrong parameter type!");
        this.name = name;
    }
    set setAge(age)
    {
        if (typeof age !== "number") throw TypeError("Wrong parameter type!");
        this.age = age;
    }
    set setColor(color)
    {
        if (typeof color !== "string") throw TypeError("Wrong parameter type!");
        this.color = color;
    }
    set setLegs(legs)
    {
        if (typeof legs !== "number") throw TypeError("Wrong parameter type!");
        this.legs = legs;
    }

    getAnimalInfo()
    {
        let name = this.name.substr(0, 1).toUpperCase() + this.name.substr(1);
        let color = this.color.substr(0, 1).toUpperCase() + this.color.substr(1);
        let info = `${name} is an animal, he is ${this.age} years old. He has ${this.legs} legs and is ${color} in color.`;
        return (info);
    }
}

const animal = new Animal("snowy", 2, "white", 4);
console.log(animal);
console.log(animal.name);
console.log(animal.age);
console.log(animal.color);
console.log(animal.legs);
animal.setName = "snow";
animal.setAge = 4;
console.log(animal);
console.log(animal.getAnimalInfo());


class Cat extends Animal
{
    constructor(name, age, color, legs, type, gender)
    {
        super(name, age, color, legs);
        this.type = type;
        this.gender = gender;
    }

    set setType(type)
    {
        this.type = type;
    }
    set setGender(gender)
    {
        this.gender = gender;
    }

    getAnimalInfo()
    {
        let name = this.name.substr(0, 1).toUpperCase() + this.name.substr(1);
        let color = this.color.substr(0, 1).toUpperCase() + this.color.substr(1);
        let type = this.type.substr(0, 1).toUpperCase() + this.type.substr(1);
        let pronoun = this.gender === 'Male' ? 'He' : 'She';
        let info = `${name} is a ${type}, ${pronoun} is ${this.age} years old. ${pronoun} has ${this.legs} legs and is ${color} in color.`;
        return (info);
    }
}

const cat = new Cat('whiskers', 3, 'brown', 4, 'cat', 'female');
console.log(cat);
console.log(cat.getAnimalInfo());


class Dog extends Animal
{
    constructor(name, age, color, legs, type, gender, breed)
    {
        super(name, age, color, legs);
        this.type = type;
        this.gender = gender;
        this.breed = breed;
    }

    set setType(type)
    {
        this.type = type;
    }
    set setGender(gender)
    {
        this.gender = gender;
    }
    set setBender(breed)
    {
        this.breed = breed;
    }

    getAnimalInfo()
    {
        let name = this.name.substr(0, 1).toUpperCase() + this.name.substr(1);
        let color = this.color.substr(0, 1).toUpperCase() + this.color.substr(1);
        let type = this.type.substr(0, 1).toUpperCase() + this.type.substr(1);
        let breed = this.breed.substr(0, 1).toUpperCase() + this.breed.substr(1);
        let pronoun = this.gender === 'male' ? 'He' : 'She';
        let info = `${name} is a ${breed} ${type}, ${pronoun} is ${this.age} years old. ${pronoun} has ${this.legs} legs and is ${color} in color.`;
        return (info);
    }
}

const dog = new Dog('Busky', 3, 'black', 4, 'dog', 'male', 'german shepard');
console.log(dog);
console.log(dog.getAnimalInfo());
