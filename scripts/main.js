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
      let singlePokemon = await response.json();
      loadedPokemon.push(singlePokemon);
    }
  } catch (error) {
    console.warn('Server ist gerade offline');
  }
  renderPokemon();
}

function renderPokemon() {
  let pokedexRef = document.getElementById('pokedexContainer');
  pokedexRef.innerHTML = '';

  for (let index = 0; index < loadedPokemon.length; index++) {
    const singlePokemon = loadedPokemon[index];

    pokedexRef.innerHTML += `${getMiniCardTemplate()}`;
  }
}

function openDialog() {
  const dialog = document.getElementById('pokemonDialog');
  dialog.showModal();
}

function closeDialog() {
  const dialog = document.getElementById('pokemonDialog');
  dialog.close();
}

//	1.	init()
//	2.	Pokémon-Daten laden
//	3.	Daten verarbeiten
//	4.	Karten rendern
//	5.	Button für mehr laden
//	6.	Overlay öffnen
