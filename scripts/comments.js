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
    typeHTML += `<span class="type">${eachType.type.name}</span>`;
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

// 7. Später weitere Pokémon per Button nachladen
// 8. Später eine Detailansicht im Overlay öffnen

//	2.	Overlay / Detailansicht bauen
//	3.	Farben an Typen koppeln
//	4.	Show-More-Button
//	5.	Filterfunktion / Suche zum Schluss
