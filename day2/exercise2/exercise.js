let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0, 2))
console.log(challenge.substr(3))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(' '))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge[12]))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
console.log(' 30 Days Of JavaScript '.trim())
console.log('30 Days Of JavaScript'.startsWith('30'))
console.log('30 Days Of JavaScript'.endsWith('Script'))
console.log('30 Days Of JavaScript'.match(/a+/g))

console.log('30 Days of'.concat(' ', 'JavaScript'))
console.log('30 Days Of JavaScript'.repeat(2))
