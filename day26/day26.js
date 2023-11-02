const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
const main = document.querySelector("main");
const container = document.querySelector(".countries-div");
const span = document.querySelector(".countries-count-span");
const btnSearchByStartingWord = document.querySelector(".btn-search-by-starting-word");
const btnSearchByWord = document.querySelector(".btn-search-by-word");
const btnSortSearchResult = document.querySelector(".btn-sort-search-result");
const searchBoxDiv = document.querySelector(".search-box-div");
const searchBoxInput = document.querySelector(".search-box-input");
const containerP = document.querySelector(".container-p");

span.textContent = countries.length;
const countryStyles = {
    textTransform: 'uppercase',
    color: 'white',
    padding: '3rem 0',
    fontWeight: 700,
    fontSize: '1.25rem',
    display: 'inline-block',
    gap: '.5rem',
    textAlign: 'center',
    width: '15%',
    backgroundImage: 'url(images/map-image.jpeg)',
}

const generateCountries = (parentElement, childElementStyles, array)=>
{
    parentElement.innerHTML = '';
    for (let i = 0 ; i < array.length ; i++)
    {
        const country = document.createElement("div");
        country.classList = ('country', `${array[i]}`, 'm-2');
        Object.assign(country.style, childElementStyles);
        country.textContent = array[i];
        parentElement.appendChild(country);
    }
}
generateCountries(container, countryStyles, countries);

const searchWord = (searchValue, array, p, searchType = 'word')=>
{
    const newArray = [];
    if (searchType === 'word')
    {
        array.map((country)=>
        {
            if (country.toLowerCase().includes(searchValue.toLowerCase())) newArray.push(country);
        });
        p.innerHTML = `Countries containing <span class="text-danger">${searchValue}</span> are <span class="text-success">${newArray.length}</span>.`;
    }
    else
    {
        array.map((country)=>
        {
            if (country.toLowerCase().startsWith(searchValue.toLowerCase())) newArray.push(country);
        });
        p.innerHTML = `Countries starting with <span class="text-danger">${searchValue}</span> are <span class="text-success">${newArray.length}</span>.`;
    }

    localStorage.setItem('array', JSON.stringify(newArray));
    return (newArray);
}

const sortSearchResult = ()=>
{
    const array = JSON.parse(localStorage.getItem('array')).reverse();
    localStorage.setItem('array', JSON.stringify(array));
    return (array.reverse());
}

searchBoxInput.addEventListener("input", (e)=>
{
    const searchArray = searchWord(e.target.value, countries, containerP);
    generateCountries(container, countryStyles, searchArray);
});

btnSearchByWord.addEventListener("click", ()=>
{
    const searchArray = searchWord(searchBoxInput.value, countries, containerP);
    generateCountries(container, countryStyles, searchArray);
});

btnSearchByStartingWord.addEventListener("click", ()=>
{
    const searchArray = searchWord(searchBoxInput.value, countries, containerP, 'starting word');
    generateCountries(container, countryStyles, searchArray);
});

btnSortSearchResult.addEventListener("click", ()=>
{
    const sortSearchArray = sortSearchResult();
    generateCountries(container, countryStyles, sortSearchArray);
});
