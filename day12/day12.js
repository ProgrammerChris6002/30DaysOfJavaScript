let pattern = 'love';
let regEx = new RegExp(pattern);
console.log(regEx);
let flag = 'gi';
regEx = new RegExp(pattern, flag);
console.log(regEx);

regEx = new RegExp('love', 'gi');
console.log(regEx);

regEx = /love/gi;
console.log(regEx);

let str = 'I love JavaScript';
pattern = /love/;
let result = pattern.test(str);
console.log(result);

result = str.match(pattern);
console.log(result);

pattern = /love/g;
result = str.match(pattern);
console.log(result);

result = str.search(pattern);
console.log(result);

let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';
let matchReplaced = txt.replace(/Python|python/, 'JavaScript');
console.log(matchReplaced);

matchReplaced = txt.replace(/Python|python/g, 'JavaScript');
console.log(matchReplaced);

matchReplaced = txt.replace(/Python/gi, 'JavaScript');
console.log(matchReplaced);

txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.';
matches = txt.replace(/%/g, '');
console.log(matches);

pattern = '[Aa]pple';
txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away';
matches = txt.match(pattern)
console.log(matches)

pattern = /[Aa]pple/g;
matches = txt.match(pattern);
console.log(matches);

pattern = /[Aa]pple|[Bb]anana/g;
txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat eat too.';
matches = txt.match(pattern);
console.log(matches);

pattern = /\d/g;
txt = 'This regular expression example was made in January 12,  2020.';
matches = txt.match(pattern);
console.log(matches);

pattern = /\d+/g;
matches = txt.match(pattern);
console.log(matches);

pattern = /[a]./g;
txt = 'Apple and banana are fruits';
matches = txt.match(pattern);
console.log(matches);

pattern = /[a].+/g;
matches = txt.match(pattern);
console.log(matches);

pattern = /[a].*/g;
matches = txt.match(pattern);
console.log(matches);

txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
pattern = /[Ee]-?mail/g;
matches = txt.match(pattern);
console.log(matches);

txt = 'This regular expression example was made in December 6,  2019.';
pattern = /\b[a-zA-Z]{4}\b/g;
matches = txt.match(pattern);
console.log(matches);

pattern = /\d{4}/g;
matches = txt.match(pattern);
console.log(matches);

pattern = /\d{1,4}/g;
matches = txt.match(pattern);
console.log(matches);

pattern = /^This/g;
matches = txt.match(pattern);
console.log(matches);

pattern = /[^a-zA-Z,. ]+/g;
matches = txt.match(pattern);
console.log(matches);

pattern = /^[A-Z][a-z]{3,12}$/g;
let name = 'Asabeneh';
result = name.match(pattern);
console.log(result);
