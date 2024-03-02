// 1
// richiamo il container
const gridContainer = document.querySelector('.grid-container');
// 6
const btnGioca = document.querySelector('.btn-gioca');
// all'interno del click del bottone ci sta tutto, init 
btnGioca.addEventListener('click', function(){
  // 6
// funzione di inizializzazione
  init()
});


// generare numero casuale da 1 a 16 estraendoli da 1 a 100 senza ripetizioni
let click = 0;
const n = 16;
const arrayBombe = [];
let randomNumber;

do{
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  if (!arrayBombe.includes(randomNumber)){
    arrayBombe.push(randomNumber);
  }
}
while(arrayBombe.length < n);

console.log(arrayBombe);



/*///////////
FUNCTION
*////////////

// 6
function init(){
  reset();

// 1
// realizzo il ciclo di 100 ripetizioni
for (let i = 1; i <= 100; i++){
  // 2
  // richiamo la function
  const square = getSquare(i);
  gridContainer.append(square);
}
}

// 2
// function
function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';
  // stampo il numero nei quadratini
  // sq.innerHTML = numero;

  // 4
  // elemento custom
  sq._sqID = numero;

  sq.addEventListener('click', function(){
    console.log(this._sqID);
    // this -> è riferito all'elemento che contiene la funzione, in questo caso sq

    // così quando clicco vedo i numeri
    this.innerHTML = this._sqID;

    // 5
    // quando clicco vedo il colore
    sq.classList.add('clicked');

    if (arrayBombe.includes(numero)) {
      sq.classList.add('red_bomba');
      alert('Gioco finito! Hai fatto ' + click + ' punti! Ricarica la pagina per giocare ancora!')
      const squares = document.querySelectorAll('.square');
      for (let i = 0; i < squares.length; i++) {
        const cell = squares[i];
        if (arrayBombe.includes(cell._sqID)) {
            cell.classList.add('red_bomba');
            cell.innerHTML = cell._sqID;
        }
        else {
          cell.classList.add('clicked');
          cell.innerHTML = cell._sqID;
        }
    }
    }
    click = click + 1;
    console.log('click' + click);

  })

  return sq;
}

// 3
// creo il reset
function reset(){
  gridContainer.innerHTML = '';
}