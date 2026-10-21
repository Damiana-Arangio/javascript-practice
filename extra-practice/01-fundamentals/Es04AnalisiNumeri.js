const numeri = [4, -3, 7, 4, 0, -3, 12, 7, -8, 4, 0, -3, 3];
const numeroDaCercare = 3;
const soglia = "5";

// ES04 - ANALISI NUMERI

// 1. Conta quante volte numeroDaCercare compare
//    nell'array e stampa il risultato.
let conta = 0;

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] === numeroDaCercare) {
        conta++;
    }
}

console.log("Il numero " + numeroDaCercare + " è presente " + conta + " volte");


// 2. Conta quante volte compare numeroDaCercare
//    nell'array, ignorando il segno.
//    Ad esempio, se il numero cercato è -3,
//    devi contare sia -3 che +3.
//    Stampa il totale delle occorrenze.
let contaOccorrenze = 0;

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] === numeroDaCercare || numeri[i] === numeroDaCercare * -1) {
        contaOccorrenze++;
    }
}

console.log("Occorrenze trovate: " + contaOccorrenze);


// 3. Conta separatamente quanti numeri sono:
//    - positivi
//    - negativi
//    - uguali a zero
//    Stampa i tre risultati.
let positivi = 0;
let negativi = 0;
let zero = 0;

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > 0) {
        positivi++;
    } else if (numeri[i] < 0) {
        negativi++;
    } else {
        zero++;
    }
}

console.log("Quantità numeri positivi: " + positivi);
console.log("Quantità numeri negativi: " + negativi);
console.log("Quantità numeri zero: " + zero);


// 4. Trova il numero più grande e il numero
//    più piccolo dell'array.
//    Non utilizzare Math.max() e Math.min().
let max = numeri[0];
let min = numeri[0];

for (let i = 1; i < numeri.length; i++) {
    if (numeri[i] < min) {
        min = numeri[i];
    } else if (numeri[i] > max) {
        max = numeri[i];
    }
}

console.log("Massimo: " + max);
console.log("Minimo: " + min);


// 5. Calcola la somma di tutti i numeri positivi
//    presenti nell'array.
let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > 0) {
        somma += numeri[i];
    }
}

console.log("Somma: " + somma);


// 6. Converti soglia in un numero e crea un nuovo
//    array contenente soltanto i numeri maggiori
//    della soglia.
//    Non modificare l'array originale.
const sogliaNumerica = Number(soglia);
const newArray = [];

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > sogliaNumerica) {
        newArray.push(numeri[i]);
    }
}

console.log(newArray);


// 7. Crea un nuovo array eliminando i duplicati.
//
//    Scorri l'array originale e inserisci ogni numero
//    nel nuovo array soltanto se non è già presente.
//
//    ATTENZIONE:
//    - I numeri positivi e negativi sono distinti:
//      ad esempio, 3 e -3 devono essere entrambi mantenuti.
//    - Mantieni l'ordine originale dei numeri.
//    - Non modificare l'array originale.
//    - Non utilizzare Set.
const arrayNoDuplicati = [];

for (let i = 0; i < numeri.length; i++) {
    if (!arrayNoDuplicati.includes(numeri[i])) {
        arrayNoDuplicati.push(numeri[i]);
    }
}

console.log(arrayNoDuplicati);


// 8. Verifica se nell'array originale è presente
//    almeno una coppia di elementi consecutivi uguali.
//
//    ATTENZIONE:
//    - Per consecutivi si intendono due elementi
//      che si trovano uno accanto all'altro nell'array.
//    - I due numeri devono avere lo stesso valore
//      e lo stesso segno (3 e -3 sono diversi).
//    - Non modificare l'array originale.
//    - Stampa un messaggio che indichi se esiste
//      almeno una coppia di elementi consecutivi uguali.
let precedente = numeri[0];
let trovato = false;

for (let i = 1; i < numeri.length && !trovato; i++) {
    if (numeri[i] === precedente) {
        trovato = true;
    }

    precedente = numeri[i];
}

console.log("Coppia consecutivi uguali presente: " + trovato);