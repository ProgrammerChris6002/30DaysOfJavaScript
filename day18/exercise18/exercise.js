const countriesApi = 'https://restcountries.com/v2/all';

const getCountriesData = async (api) =>
{
    const response = await fetch(api);
    const data = await response.json();
    data.map((element) =>
    {
        const langs = element.languages.map((lang) => lang.name);
        console.log(`Name: ${element.name} Capital: ${element.capital} Language(s): ${langs.join(', ')} Population: ${element.population} Area: ${element.area}`);
    });
}
getCountriesData(countriesApi);

// Using fetch(), then(), catch()
// fetch(countriesApi).then(response => response.json()).then(data =>
//     {
//         data.map((element) =>
//         {
//             const langs = element.languages.map((lang) => lang.name);
//             console.log(`Name: ${element.name} Capital: ${element.capital} Language(s): ${langs.join(', ')} Population: ${element.population} Area: ${element.area}`);
//         });
//     }).catch(err => console.error(err));
