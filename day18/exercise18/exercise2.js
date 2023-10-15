const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Using async await
const getCatsData = async (api) =>
{
    const response = await fetch(api);
    const data = await response.json();
    data.map((d) => console.log(d.name));
}
console.log(getCatsData(catsAPI));

// Using fetch(), then()
fetch(catsAPI).then(response => response.json()).then(data => data.map((d) => console.log(d['name']))).catch(err => console.error(err));
