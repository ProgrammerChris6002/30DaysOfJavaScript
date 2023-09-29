console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(typeof (Number('10')) === typeof 10)
console.log(Math.ceil(parseFloat('9.8')) == 10)
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))


// random() * (max - min) + min;
// random() * ((max - min) + 1) + min;
console.log(Math.floor(Math.random() * 100))
console.log(Math.floor((Math.random() * ((100 - 50) + 1)) + 50));
console.log(Math.floor(Math.random() * 255))
string = 'JavaScript';

let randNum = Math.floor(Math.random() * 10);
console.log(string[randNum])

console.log('1\t1\t1\t1\t1\n1\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

string = 'You cannot end a sentence with because because because is a conjunction'
let firstIndex = string.indexOf('because');
let lastIndex = ('because'.length * 3) + 2;
console.log(string.substr(firstIndex, lastIndex));

