function getPromise() {
  return new Promise((resolve, reject)); // damit kann man sich ein eigenes Objekt schaffen
}

// await wird davor geschrieben, wenn man ein Promise holen möchte.
// Das await klappt aber nur dann, wenn vor der Funktion async steht, also nur kombinierbar mit einer asynchronen Funktion

async function usePromise() {
  let prom = await getPromise();
  console.log(prom);
}

// Was ist try and catch??

// Die Funktion usePromise wird erweitert mit try und catch

async function usePromise() {
  try {
    let prom = await getPromise();
  } catch (error) {}
  console.log(prom);
}

// try  --> versuche die Schnittstelle aufzurufen   let prom = await getPromise();  , warte auf den Promise
// aber wenn dabei irgendwas auf dem Weg schief läuft, dann fang das ab in dem:
// catch --> hiermit fangen wir den Fehler auf, falls z.B. ein Server nicht abrufbar ist

// .then ist ähnlich wie try and catch, nur eine ältere Schreibweise

// fetch() Befehl

// in den Klammern steht immer ein Pfad oder eine URL zu einem Server -> fetch('url)
// das fetch liefert einen Rückgabewert zurück und das ist immer ein PROMISE!
// --> und auf dieses Promise muss ich warten, daher steht dann vor fetch() await!

async function fetchData() {
  let response = await fetch('url'); // Es dauert bis die Antwort kommt, daher await und wenn die Antwort angekommen ist, dann wird das in die Variable responsive reingeschrieben
  console.log(response);
}

// fetch() wir ziehen uns die Daten über ein URL
// wenn man nichts eingibt, dann ist es standardgemäß GET

// Tipps um die Farbe des Pokemons and den Hitnergrund anzupassen:

let allPoke = [
  //
  {
    name: 'poke1',
    type: 'grass',
  },
];

function getColor(type) {
  switch (type) {
    case 'grass':
      return '#dfaks1';
    default:
      return '#afga';
  }
}
// die Farbe anhand des typen setzen

// EINFACHER
// --> eine Klasse vergeben, z.B. class="grass" und dort wird die Background color gesetzt

// das wird dann einfach in die renderNames() Funktion gepackt

function renderNames() {
  for (let index = 0; index < allPoke.length; index++) {
    const element = allPoke[index];

    document.getElementById('content').innerHTML += `
            <h1 class="${element[i].type}">${element[i].name}</h1>
        `;
  }
}

// Auf die Daten von Pokedex zugreifen

function logPokemon() {
  let pikachu = fetch('https://pokeapi.co/api/v2/pokemon/1');
  console.log(pikachu);
}

logPokemon();

//  Das wird in der Konsole ausgegeben:
//  Promise {<pending>}
//  [[Prototype]]: Promise
//  [[PromiseState]]: "fulfilled"
//  [[PromiseResult]]: Response

// RICHTIG -- Hier nur die HTTP Response, also noch keine Daten

async function logPokemon() {
  let pikachuHttpRespone = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  console.log(pikachu);
}
logPokemon();

// Jetzt wollen wir, dass uns die Daten ausgegeben werden, also das JSON Objekt
// Es gibt eine vorgefertigte Methode, die wir nutzen:   .json()

async function logPokemon() {
  let pikachuHttpRespone = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  let pikachu = pikachuHttpRespone.json();
  console.log(pikachu);
}
logPokemon();

// Wir bekommen hier wieder ein Promise zurück!! Also müssen wir wieder das Schlüsselwort await davor schreiben:

async function logPokemon() {
  let pikachuHttpRespone = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  let pikachu = await pikachuHttpRespone.json();
  console.log(pikachu);
}
logPokemon();

// jetzt erhalten wir das komplette JSON ARRAY
// Jetzt kann man mit diesem Array arbeiten! DAs ist jetzt aber nur ein pokemon!
