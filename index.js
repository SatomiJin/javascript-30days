const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

let getData = async () => {
  try {
    let res = await fetch(endpoint);
    let data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

fetch(endpoint)
  .then((data) => data.json())
  .then((data) => cities.push(...data));

let findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, `gi`);
    return place.city.match(regex) || place.state.match(regex);
  });
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
};

let displayMatches = (e) => {
  const matchArray = findMatches(e.target.value, cities);
  const html =
    matchArray && matchArray.length > 0
      ? matchArray
          .map((place) => {
            const regex = new RegExp(e.target.value, `gi`);
            const cityName = place.city.replace(regex, `<span class='h1'>${e.target.value}</span>`);
            const stateName = place.state.replace(regex, `<span class='h1'>${e.target.value}</span>`);
            return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
          })
          .join("")
      : `<li>Data Empty</li>`;
  suggestions.innerHTML = e.target.value ? html : `<li>Filter with city or State</li>`;
};

const searchInput = document.querySelector(`.search`);

const suggestions = document.querySelector(`.suggestions`);

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
