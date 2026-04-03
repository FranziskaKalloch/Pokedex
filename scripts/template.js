function getMiniCardTemplate(currentPokemon, index) {
  return `
        <div class="mini-card" onclick="openDialog(${index})">
            <div class="card-img-container">
              <img src="${currentPokemon.sprites.other['official-artwork'].front_default}" class="card-img" />
            </div>

            <header class="card-header">
              <span class="pokemon-id"><strong>#${currentPokemon.id}</strong></span>
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

function getOverlayHtml(clickedPokemon, height, weight) {
  return `
      <div class="dialog-card">
      <div class="dialog-main">
        <div class="dialog-left-side">
          <img src="${clickedPokemon.sprites.other['official-artwork'].front_default}" alt="Pokemon Bild" />
        </div>

        <div class="dialog-right-side">
          <header class="dialog-header">
            <div class="dialog-title">
              <span class="pokemon-dialog-id"><strong>#${clickedPokemon.id}</strong></span>
              <h2 class="pokemon-dialog-name">${clickedPokemon.name}</h2>
            </div>

            <button class="close-btn" onclick="closeDialog()">×</button>
          </header>

          <div class="dialog-tabs">
            <button class="tab-btn active">Main</button>
            <button class="tab-btn">Stats</button>
            <button class="tab-btn">Evolution</button>
          </div>

          <div class="dialog-tab-content active">
            <div class="pokemon-description">
              Nach der Geburt nutzt es für eine Weile die Nährstoffe im Samen auf seinem Rücken, um zu wachsen.
            </div>

            <div class="pokemon-info-list">
              <div class="info-row">
                <span class="info-label">Größe</span>
                <span class="info-value">${height} cm</span>
              </div>

              <div class="info-row">
                <span class="info-label">Gewicht</span>
                <span class="info-value">${weight} kg</span>
              </div>

              <div class="info-row">
                <span class="info-label">Kategorie</span>
                <span class="info-value">Samen</span>
              </div>

              <div class="info-row">
                <span class="info-label">Fähigkeiten</span>
                <span class="info-value">${clickedPokemon.abilities[0].ability.name}</span>
              </div>
            </div>
          </div>

          <div class="type-container">
            ${renderTypes(clickedPokemon.types)}
          </div>
        </div>
      </div>

      <footer class="dialog-nav">
        <button class="nav-btn nav-left" onclick="prevPokemon()">
          <img src="./assets/icon/pfeil-rechts.png">
        </button>
        <button class="nav-btn nav-right" onclick="nextPokemon()">
         <img src="./assets/icon/pfeil-rechts.png">
        </button>
      </footer>
    </div>
  `;
}

function getLoadingHTML() {
  return `
  <div class="loading-container">
    <div class="spinner"></div>
        <span>Loading...</span>
    </div>
  `;
}
