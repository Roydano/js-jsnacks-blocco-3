// *Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var valori = [1, 'Ho', 3, 'capito', 5, 6, 'ciao', 8, 'ciao', 10];
var a = 5;
var b = 8;
var ris = between(valori, a, b);

console.log(ris);


//! facendo cosi creiamo un ciclo......il ciclo fa si che, una volta dato il valore alla variabile i, fintanto che non si verifica la condizione dove i == b, continua a prendere i valori aumentando la posizione di uno e così via.
//! poi gi diciamo che nel nuovo array deve pushare gli elementi all'interno dell'arary valori partendo dalla posizione di i fino ad arrivare alla condizione.
//! for(var i = a - 1; i < b; i++){
// !    newArray.push(valori[i]);
//! }


function between(array, min, max){
    var newArray =[];

    for(var i = min - 1; i < max; i++){
        newArray.push(array[i]);
    }

    return newArray;

}












// *Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// *3.  Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// *4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

