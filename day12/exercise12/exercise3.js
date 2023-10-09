const { mostFrequentWords } = require('./exercise2');

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(text)
{
    let pattern = /[%$@&#;!]/gi;
    let matches = text.replace(pattern, '');

    return (matches);
}
let cleanedText = cleanText(sentence);
console.log(mostFrequentWords(cleanedText, 3));
