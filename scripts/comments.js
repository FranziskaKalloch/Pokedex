//	1.	init()
//	2.	Pokémon-Daten laden
//	3.	Daten verarbeiten
//	4.	Karten rendern
//	5.	Button für mehr laden
//	6.	Overlay öffnen

//	1.	init() startet
//	2.	erste Pokémon laden
//	3.	Daten in ein Array speichern
//	4.	Mini-Cards rendern

async function logPokemon() {
  let pikachuHttpRespone = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  let pikachu = await pikachuHttpRespone.json();
  console.log(pikachu);
}
logPokemon();

//allPokemon = [];
//let loadedPokemom = [];

// 	1.	Daten von der PokéAPI abrufen
//	2.	die Antwort in json() umwandeln
//	3.	die Daten danach weiterverarbeiten können
