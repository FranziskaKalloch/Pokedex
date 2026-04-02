let allPokemon = [];

let loadedPokemon = [];

function init() {
  console.log('Pokedex startet');
  getPokemon();
}

async function getPokemon() {
  try {
    for (let index = 1; index <= 20; index++) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
      let fetchedPokemon = await response.json();
      loadedPokemon.push(fetchedPokemon);
    }
  } catch (error) {
    console.warn('Server ist gerade offline');
  }
  renderPokemon();
}

function renderPokemon(currentPokemon) {
  let pokedexRef = document.getElementById('pokedexContainer');
  pokedexRef.innerHTML = '';

  for (let index = 0; index < loadedPokemon.length; index++) {
    const currentPokemon = loadedPokemon[index];

    pokedexRef.innerHTML += `${getMiniCardTemplate(currentPokemon)}`;
  }
}

function renderTypes(types) {
  let typeHTML = '';

  for (let index = 0; index < types.length; index++) {
    const eachType = types[index];
    typeHTML += `<span class="type ${eachType.type.name}">${eachType.type.name}</span>`;
  }

  return typeHTML;
}

function openDialog() {
  const dialog = document.getElementById('pokemonDialog');
  dialog.showModal();
}

function closeDialog() {
  const dialog = document.getElementById('pokemonDialog');
  dialog.close();
}

console.log(loadedPokemon);

//	1.	init()
//	2.	Pokémon-Daten laden
//	3.	Daten verarbeiten
//	4.	Karten rendern
//	5.	Button für mehr laden
//	6.	Overlay öffnen
