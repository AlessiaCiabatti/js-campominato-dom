Griglia Campo Minato
===

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## SVOLGIMENTO
1. realizzazione griglia
  - realizziamo gli elmeenti in HTML e CSS
  - richiamo in una costante il container
  - realizzo un ciclo di 100 ripetizioni

2. realizzare quadratino dentro la griglia
  - realizziamo gli elmenti in HTML e CSS
    - function
      - creare l'elemento in js con createEelement('div')
      - associase la classe square(css) in js
      - associare il numero al quadratino in js
      - associare un addEventListener a sq che mostra il valore del quadratino
      
        - richiama la function dentro il ciclo for
        - aggiungi i quadratini al container (innerHTML o APPEND)
        - devo sapere quale elemento clicco, e riportare il suo valore in console.log()
          - a const square = getSquare() gli passo l'indice i cios i numeri, lo creo all'interno della function sq.innerHTML = numero così lo vedo nei quadratini e inserisco 'numero' alla function. In questo modo numero i quadratini e riesco a visualizzarli in console

3. reset
  - function
    - imposta il contenuto HTML dell’elemento gridContainer a una stringa vuota. In pratica, stai rimuovendo tutto il contenuto HTML. nome.innerHTML = '';

4. voglio che il numero si veda solo al click
  - elimino sq.innerHTML = numero; che me lo mostra nei quadratini
  - creo proprietà custom del'elemento sq e la passo a this, per vederlo inn console
  - all'interno del click quando clicco i quaderatini cioè sq devo vedere i numeri, innerHTML

5. voglio che i numeri spariscono al secondo click
  - lavrando sempre su sq, sui quadratini, aggiungo la classe clicked con toggle, così cambia colore

6. realizzo un bottone che genera la griglia
  - devo avere una funzione di inizializzazione
  - cliccando sul bottone parte il gioco


## SVOLGIMENTO
PLAY
- leggo la proprietà della griglia (livello)
- RESET
- genero il playground
- genero le bombe
CLICK DELLA CELLA
- verifico se è una bomba
  SI -> FINE GIOCO
  NO -> - coloro la cella
        - incremento il contatore (se non è stata già cliccata)
        - verifico se il punteggio è vincente -> SI -> FINE GIOCO
RESET
- cancella la griglia
- azzero il contatore
- svuoto l’array delle bombe
FINE GIOCO
- accendere tutte le bombe
- congelo la griglia
- stampo il messaggio finale con punteggio. Messaggio diverso se vince o perde.