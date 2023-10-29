const dataFieldInput = document.querySelector(".data-field-input");
const dataFieldSelect = document.querySelector(".data-field-select");
const dataFieldBtn = document.querySelector(".data-field-btn");
const containerPlanet = document.querySelector(".container-planet");
const flexPlanetOne = document.querySelector(".flex-planet-one");
const flexPlanetOneImg = document.querySelector(".flex-planet-one-img");
const flexPlanetTwo = document.querySelector(".flex-planet-two");
const flexPlanetTwoP = document.querySelector(".flex-planet-two-p");
const flexPlanetTwoDiv = document.querySelector(".flex-planet-two-div");

function validateDataFields(input, select, flexOne, flexOneImg, flexTwo, flexTwoP, flexTwoDiv)
{
    let message;
    let weight;
    if (input.value.trim() === "" || Number.isNaN(input.value.trim()))
    {
        message = 'Mass is required';
    }
    else if (select[0].selected)
    {
        message = 'You did not choose a planet yet';
    }
    else
    {
        weight = calculatePlanetWeight(parseInt(input.value.trim()), select.selectedIndex - 1);
        console.log(weight);
        message = 'Weight calculated';
    }
    displayPlanetData(message, flexOne, flexOneImg, flexTwo, flexTwoP, flexTwoDiv, select, select.selectedIndex, weight);
    return (message);
}

const calculatePlanetWeight = (mass, index) =>
{
    const gravity = [ 3.7, 8.87, 9.8, 1.625, 3.721, 24.79, 10.44, 8.69, 11.15, 0.62 ];
    const weight = mass * gravity[ index ];
    return (weight.toFixed(2));
}

function displayPlanetData(message, flexOne, flexOneImg, flexTwo, flexTwoP, flexTwoDiv, select, planet, weight)
{
    if (message === 'Mass is required' || message === 'You did not choose a planet yet')
    {
        flexOne.style.display = 'none';
        flexTwoP.textContent = message;
    }
    else
    {
        const flexTwoDivStyles = {
            width: '120px',
            height: '120px',
            borderRadius: '100%',
            backgroundColor: 'grey',
        }
        containerPlanet.classList.add('d-flex', 'justify-content-around', 'align-items-center');
        flexOneImg.src = `images/${select[planet].textContent}.png`;
        flexTwo.classList.add('p-5');
        flexTwoP.innerHTML = `The weight of the object on <strong>${select[planet].textContent.toUpperCase()}</strong>`;
        flexTwoDiv.innerHTML = `<strong>${weight} N</strong>`;
        Object.assign(flexTwoDiv.style, flexTwoDivStyles);
    }
}

dataFieldBtn.addEventListener("click", () => console.log(validateDataFields(dataFieldInput, dataFieldSelect, flexPlanetOne, flexPlanetOneImg, flexPlanetTwo, flexPlanetTwoP, flexPlanetTwoDiv)));
// console.log(dataFieldSelect[5].index)
