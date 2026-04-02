function getMiniCardTemplate() {
  return `
        <div class="mini-card" onclick="openDialog()">
            <div class="card-img-container">
              <img src="./assets/img/go-aquanal.png" class="card-img" />
            </div>

            <header class="card-header">
              <span class="pokemon-id">#ID</span>
              <h3>Pokemon Name</h3>
            </header>

            <footer class="card-footer">
              <div class="type-container" id="typeContainer">
               <span>type</span>
              </div>
            </footer>
          </div>
    `;
}
