const addPlayerContainer = document.querySelector("[data-add-player-container]");
const addPlayerButton = document.querySelector("[data-add-player-button]");
const errorMessageP = document.querySelector("[data-error-message-p]");
const addPlayerFirstName = document.querySelector("[data-add-player-firstname]");
const addPlayerLastName = document.querySelector("[data-add-player-lastname]");
const addPlayerCountry = document.querySelector("[data-add-player-country]");
const addPlayerScore = document.querySelector("[data-add-player-score]");
const inputFields = [ addPlayerFirstName, addPlayerLastName, addPlayerCountry, addPlayerScore ];
const players = [];


/**
 * validateInputField - validates an input field
 * @input - input field param
 * return: returns true if valid, else false
 */
const validateInputField = (input) => (input.value.trim() !== '');

/**
 * validateNumberInputField - validates a number input field
 * @input - input field param
 * @returnValue - validateInputField return value
 * return: returns true if valid, else false
 */
const validateNumberInputField = (input) => validateInputField(input) && !(Number.isNaN(Number(input.value)));

/**
 * currentDateTime - displays the current data and time
 * return: returns current date and time in the format 'mmm, dd YY hh:mm'
 */
const currentDateTime = () =>
{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    let date = String(now.getDate()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    const months = [ 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER' ];

    const dateTime = `${months[month].slice(0, 3)}, ${date} ${year} ${hours}:${minutes}`;
    return (dateTime);
}

/**
 * createPlayer - creates a new player
 * @playerFirstName - player's firstname
 * @playerLastName - player's lastname
 * @playerCountry - player's country
 * @playerScore - player's score
 * 
 * return: newly created player
 */
const createPlayer = (playerFirstName, playerLastName, playerCountry, playerScore) =>
{
    const div = document.createElement("div");
    const pName = document.createElement("p");
    const pCountry = document.createElement("p");
    const pScore = document.createElement("p");
    const pIcons = document.createElement("p");
    const spanDelete = document.createElement("span");
    const spanIncrease = document.createElement("span");
    const spanDecrease = document.createElement("span");
    const ionIcon = document.createElement("ion-icon");

    const paras = [ pName, pCountry, pScore, pIcons ];
    const spans = [ spanDelete, spanDecrease, spanIncrease ];
    const length = players.length;

    pName.innerHTML = `${playerFirstName.value} ${playerLastName.value}<br><span>${currentDateTime()}</span>`;
    pCountry.innerHTML = `${playerCountry.value}`;
    pScore.innerHTML = `${playerScore.value}`;
    spanIncrease.innerHTML = '+5';
    spanDecrease.innerHTML = '-5';

    div.classList = (`bg-dark d-flex justify-content-around px-1 pt-3 player-container-${length}`);
    pName.classList = ("player-name");
    pCountry.classList = ("player-country");
    pScore.classList = ("player-score");
    pIcons.classList = (`player-icons-${length}`);
    spanDelete.classList = (`d-inline-block text-center pt-3 crud-icon icon-delete-${length}`);
    spanIncrease.classList = (`d-inline-block text-white text-center py-3 crud-icon icon-increase-${length}`);
    spanDecrease.classList = (`d-inline-block text-white text-center py-3 crud-icon icon-decrease-${length}`);
    ionIcon.classList = ("text-danger");
    ionIcon.name = "trash-outline";

    spanDelete.appendChild(ionIcon);
    spans.forEach(span => pIcons.appendChild(span));
    paras.forEach(p => div.appendChild(p));

    playerFirstName.value = '';
    playerLastName.value = '';
    playerCountry.value = '';
    playerScore.value = '';

    const player = {
        div: div,
        p: paras,
        span: spans,
        ionIcon: ionIcon,
        delete: spanDelete,
        decrease: spanDecrease,
        increase: spanIncrease,
        index: length,
    }
    return (player);
}

/**
 * updatePlayer - updates the players array and displays the leaderboard
 * @array - array of players
 * 
 * return: no return
 */
const updatePlayer = (array) =>
{
    array.sort((a, b) => b.p[2].innerHTML - a.p[2].innerHTML);
    localStorage.setItem('players', JSON.stringify(array));
    addPlayerContainer.innerHTML = '';
    array.forEach(player => addPlayerContainer.appendChild(player.div));
}

/**
 * addPlayer - adds a newly created player to the leaderboard
 * @player - newly created player
 * @array - array of players
 * 
 * return: no return
 */
const addPlayer = (array, player) =>
{
    array.push(player);
    updatePlayer(players);
}

/**
 * deletePlayer - Deletes a player from the leaderboard
 * @e - event object
 * @array - array of players
 * 
 * return: no return
 */
const deletePlayer = (e, array) =>
{
    let index;
    for (let i = 0 ; i < array.length ; i++)
    {
        if (e.target.classList[0] === 'text-danger')
        {
            index = e.target.parentElement.parentElement.classList[0].split('-')[2];
            e.target.parentElement.parentElement.parentElement.remove();
            array.splice(index, 1);
        }
    }
}

/**
 * increasePlayerScore - increases a player's score by 5
 * @e - event object
 * return: 
 */
const increasePlayerScore = (e) =>
{
    let index = e.target.classList[e.target.classList.length - 1].split('-')[2];
    if (e.target.classList[e.target.classList.length - 1] === `icon-increase-${index}`)
    {
        let score = parseInt(e.target.parentElement.parentElement.children[2].innerHTML);
        e.target.parentElement.parentElement.children[2].innerHTML = score + 5;
    }
}

/**
 * decreasePlayerScore - decreases a player's score by 5
 * @e - event object
 * return: 
 */
const decreasePlayerScore = (e) =>
{
    let index = e.target.classList[e.target.classList.length - 1].split('-')[2];
    if (e.target.classList[e.target.classList.length - 1] === `icon-decrease-${index}`)
    {
        let score = parseInt(e.target.parentElement.parentElement.children[2].innerHTML);
        e.target.parentElement.parentElement.children[2].innerHTML = score - 5;
    }
}

addPlayerButton.addEventListener('click', () =>
{
    const flag = inputFields.slice(0, 3).map(validateInputField).concat(validateNumberInputField(addPlayerScore));

    if (flag.every(bool => bool === true))
    {
        errorMessageP.className = 'd-none';
        const player = createPlayer(addPlayerFirstName, addPlayerLastName, addPlayerCountry, addPlayerScore);
        addPlayer(players, player);
    }
    else
    {
        errorMessageP.classList = ("text-danger error-message-p");
    }
})

addPlayerContainer.addEventListener("click", e =>
{
    deletePlayer(e, players);
    increasePlayerScore(e);
    decreasePlayerScore(e);
    updatePlayer(players);
})
