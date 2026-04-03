let allPokemon = [];
let loadedPokemon = [];
let currentIndex = 0;

let eachLoad = 20; // Anzahl pro Ladevorgang
let nextPokemons = 21; // Startwert

console.log(loadedPokemon);

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

function renderPokemon() {
  let pokedexRef = document.getElementById('pokedexContainer');
  pokedexRef.innerHTML = '';

  for (let index = 0; index < loadedPokemon.length; index++) {
    const currentPokemon = loadedPokemon[index];

    pokedexRef.innerHTML += `${getMiniCardTemplate(currentPokemon, index)}`;
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

function renderOverlay(index) {
  let clickedPokemon = loadedPokemon[index];
  let height = clickedPokemon.height * 10;
  let weight = clickedPokemon.weight / 10;
  let dialogRef = document.getElementById('pokemonDialog');
  dialogRef.innerHTML = `${getOverlayHtml(clickedPokemon, height, weight)}`;
}

function openDialog(index) {
  currentIndex = index;
  const dialog = document.getElementById('pokemonDialog');
  renderOverlay(index);
  dialog.showModal();
}

function nextPokemon() {
  currentIndex++;

  if (currentIndex >= loadedPokemon.length) {
    currentIndex = 0;
  }

  renderOverlay(currentIndex);
}

function prevPokemon() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = loadedPokemon.length - 1;
  }
  renderOverlay(currentIndex);
}

async function showMore() {
  let pokedexRef = document.getElementById('pokedexContainer');
  pokedexRef.innerHTML = getLoadingHTML();

  try {
    for (let index = nextPokemons; index < nextPokemons + eachLoad; index++) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
      let fetchedPokemon = await response.json();
      loadedPokemon.push(fetchedPokemon);
    }
  } catch (error) {
    console.warn('Server ist gerade offline');
  }

  nextPokemons = nextPokemons + eachLoad;
  renderPokemon();
}

function closeDialog() {
  const dialog = document.getElementById('pokemonDialog');
  dialog.close();
}

function closeDialogOutside(event) {
  let dialog = document.getElementById('pokemonDialog');

  if (event.target === dialog) {
    dialog.close();
  }
}
