let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function mostFrequentWords(paragraph, lastIndex = paragraph.split(' ').length)
{
    const result = [];
    let pattern = /[a-z0-9]+/gi;
    let words = paragraph.match(pattern);
    const wordsSet = new Set(words);

    for (const word of wordsSet)
    {
        const filteredWord = words.filter((w) => w === word);
        result.push({ word: word, count: filteredWord.length });
    }
    result.sort((a, b) => b.count - a.count);
    return (result.slice(0, lastIndex));
}
console.log(mostFrequentWords(paragraph));
console.log(mostFrequentWords(paragraph, 10));

module.exports = { mostFrequentWords };