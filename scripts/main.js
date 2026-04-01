function init() {
  console.log('Pokedex startet');
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
