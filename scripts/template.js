function getMiniCardTemplate(currentPokemon) {
  return `
        <div class="mini-card" onclick="openDialog()">
            <div class="card-img-container">
              <img src="${currentPokemon.sprites.other['official-artwork'].front_default}" class="card-img" />
            </div>

            <header class="card-header">
              <span class="pokemon-id"><strong>#</strong> ${currentPokemon.id}</span>
              <h3>${currentPokemon.name}</h3>
            </header> 

            <footer class="card-footer">
              <div class="type-container" id="typeContainer">
               ${renderTypes(currentPokemon.types)}
              </div>
            </footer>
          </div>
    `;
}
