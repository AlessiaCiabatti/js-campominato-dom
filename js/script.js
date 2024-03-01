// 1
// richiamo il container
const gridContainer = document.querySelector('.grid-container');
// 6
const btnGioca = document.querySelector('.btn-gioca');
// all'interno del click del bottone ci sta tutto, init 
btnGioca.addEventListener('click', init);

// 6
// funzione di inizializzazione
// init();

// generare numero casuale da 1 a 16 estraendoli da 1 a 100 senza ripetizioni
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

if(arrayBombe.includes(randomNumber)){
  console.log('presente');
}
else{
  console.log('assente');
}

/*///////////
FUNCTION
*////////////

// 6
function init(){
  reset()

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
    sq.classList.add('clicked')
  })

  return sq;
}

// 3
// creo il reset
function reset(){
  gridContainer.innerHTML = '';
}