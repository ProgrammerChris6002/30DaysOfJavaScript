// const firstPara = document.querySelector("p");
const firstPara = document.getElementById("first-para");
const secondPara = document.getElementById("second-para");
const thirdPara = document.getElementById("third-para");
const fourthPara = document.getElementById("fourth-para");
console.log(firstPara, secondPara, thirdPara, fourthPara);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

paragraphs.forEach(para=> console.log(para.textContent));
// fourthPara.textContent = 'Fourth Paragraph';
paragraphs[3].textContent = 'Fourth Paragraph';

firstPara.className = 'first-paragraph';
secondPara.classList = ('para', 'second-paragraph');
thirdPara.setAttribute('class', 'para third-paragraph');
fourthPara.setAttribute('class', 'para fourth-paragraph');

firstPara.id = 'first-parag';
secondPara.id = 'second-parag';
thirdPara.setAttribute('id', 'para third-parag');
fourthPara.setAttribute('id', 'para fourth-parag');
