const countriesApi = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const readCatsApi = async (api, lastIndex = 10) =>
{
    const response = await fetch(api);
    const data = await response.json();
    const averageWeightArray = data.map(d =>
        {
            let weight = `${d.weight.metric}`;
            let pattern = /\d/g;
            let matches = weight.match(pattern);
            let averageWeight = (parseFloat(matches[0]) + parseFloat(matches[1])) / 2;

            return ({ name: d.name, avgWeight: averageWeight });
        });
    const result = averageWeightArray.sort((a, b) => b.avgWeight -  a.avgWeight);
    console.log(result.slice(0, lastIndex));
}
readCatsApi(catsAPI);

const readCountriesApi = async (api, lastIndex = 10) =>
{
    const response = await fetch(api);
    const data = await response.json();
    const largestCountriesArray = data.map(d =>
        {
            return ({ name: d.name, area: d.area });
        });
    const result = largestCountriesArray.sort((a, b) => b.area - a.area);
    console.log(result.slice(0, lastIndex));
}
readCountriesApi(countriesApi);

const totalOfficialLanguages = async (api) =>
{
    const response = await fetch(api);
    const data = await response.json();
    const langsList = [];
    data.map(d => d.languages.map((lang) => langsList.push(lang.name)));

    const langsSet = new Set(langsList);
    console.log(langsSet.size);
}
totalOfficialLanguages(countriesApi);
