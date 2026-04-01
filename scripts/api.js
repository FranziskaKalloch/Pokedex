async function logPokemon() {
  let pikachuHttpRespone = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  let pikachu = await pikachuHttpRespone.json();
  console.log(pikachu);
}
logPokemon();

allPokemon = [];
let loadedPokemom = [];
