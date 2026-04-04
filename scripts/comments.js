//let allPokemon = [];
//let loadedPokemom = [];

// 1. init() startet das Pokédex
// 2. Pokémon-Daten von der API abrufen
// 3. Server-Antwort mit .json() in JavaScript-Daten umwandeln
// 4. Jedes geladene Pokémon in loadedPokemon speichern

function init() {
  console.log('Pokedex startet');
  getPokemon();
}

// init() startet das Pokédex
// getPokemon() lädt die Pokémon-Daten von der API
// Die Antwort wird mit .json() umgewandelt
// Die Daten werden in loadedPokemon gespeichert
// Danach werden die gespeicherten Daten gerendert

async function getPokemon() {
  // lädt und speichert die Daten
  try {
    for (let index = 1; index <= 20; index++) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
      let singlePokemon = await response.json();
      loadedPokemon.push(singlePokemon);
    }
  } catch (error) {
    console.warn('Server ist gerade offline');
  }
}

// 5. Über loadedPokemon loopen
// 6. Pokémon-Karten im HTML rendern

function renderPokemon() {
  let pokedexRef = document.getElementById('pokedexContainer');
  pokedexRef.innerHTML = '';

  for (let index = 0; index < loadedPokemon.length; index++) {
    const currentPokemon = loadedPokemon[index];

    pokedexRef.innerHTML += `${getMiniCardTemplate(currentPokemon)}`;
  }
}

// WICHTIG ----> renderPokekom() kommt in getPokemon() nach ganz unten - nach dem die Daten geladen sind
// werden sie angezeigt!

// 	7.	Types sauber rendern

function renderTypes(types) {
  let typeHTML = '';

  for (let index = 0; index < types.length; index++) {
    const eachType = types[index];
    typeHTML += `<span class="type ${eachType.type.name}" ${eachType.type.name}</span>`;
  }

  return typeHTML;
}

// Erläuterung:
// ----> eachType = das ganze Objekt
// ----> eachType.type = innere Objekt
// ----> eachType.type.name = der eigentliche Text ('grass')
// return typeHTML muss außerhalb der Schleife aufgerufen werden.
// im Template kommt dann ---> ${renderTypes(currentPokemon.types)}
// WARUM -----> die Funktion muss im Template aufgerufen werden, daher renderTypes
// -----------> Die Funktion erwartet einen Parameter mit Types

//	8.	Farben an Typen koppeln
// --->     typeHTML += `<span class="type ${eachType.type.name}" ${eachType.type.name}</span>`;
// mit dieser Zeile habe ich den span Elementen zwei Klassen mitgegeben, die klasse type
// und den jeweiligen typen, also grass, electric - es wird ja durch die Namen iteriert

//	9.	Overlay / Detailansicht bauen
// ----> Es muss der Index mitgegeben werden, damit JS weiß auf welchen Pokemon gerade geklickt wurde.
// ---> "Nimm das Pokemon an der Position 7"

function renderPokemon() {
  pokedexRef.innerHTML += `${getMiniCardTemplate(currentPokemon, index)}`;
}

function renderOverlay(index) {
  let clickedPokemon = loadedPokemon[index];
  let height = clickedPokemon.height * 10;
  let weight = clickedPokemon.weight / 10;
  let dialogRef = document.getElementById('pokemonDialog');
  dialogRef.innerHTML = `${getOverlayHtml(clickedPokemon, height, weight)}`;
}

function openDialog(index) {
  const dialog = document.getElementById('pokemonDialog');
  renderOverlay(index);
  dialog.showModal();
}

//	•	Overlay sauber schließen

function closeDialogOutside(event) {
  let dialog = document.getElementById('pokemonDialog');

  if (event.target === dialog) {
    dialog.close();
  }
}

//	•	Overlay-Navigation vor/zurück

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

//	•	Show-More-Button

let eachLoad = 20; // Anzahl pro Ladevorgang
let nextPokemons = 21; // Startwert

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

//	•	Loaded Spinner

async function showMore() {
  let pokedexRef = document.getElementById('pokedexContainer');
  pokedexRef.innerHTML = getLoadingHTML();
}

//	•	Filter/Suche als letzter Schritt

//	•	Typ-Farben an Karten/Overlay koppeln
//	•	Kategorie/Beschreibung über Species-Daten

//	•	Fehlerfälle
//	•	Responsiveness
//	•	kleine UI-Bugs
//	•	saubere Funktionsstruktur
