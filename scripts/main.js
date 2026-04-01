let allPokemon = [];

let loadedPokemon = [];

function init() {
  console.log('Pokedex startet');
  getPokemon();
}

async function getPokemon() {
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.warn('Server ist gerade offline');
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
