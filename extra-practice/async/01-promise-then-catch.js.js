// Esercizio sulle Promise.
// Creazione e gestione di una Promise con then, catch e finally.

/***************
    ESERCIZIO
****************/

// Chiedi all'utente di inserire un numero da tastiera.
// Crea una Promise chiamata controllaNumero.
// La Promise deve:
// - risolversi con "Numero positivo" se il numero è maggiore di 0;
// - rifiutarsi con "Numero non valido!" se il numero è minore o uguale a 0.
//
// Poi gestisci il risultato con:
// - then()
// - catch()
// - finally()

/***************
    SOLUZIONE
****************/

// Richiesta inserimento numero
const numeroInserito = prompt("Inserisci un numero");
console.log("Numero inserito:", numeroInserito);

// Conversione 
const numeroConvertito = Number(numeroInserito);
if (Number.isNaN(numeroConvertito)) {
    console.error("Il valore inserito non è un numero!");
} else {
    console.log("Numero convertito:", numeroConvertito);
}

// Creazione promise controlla numero
const controllaNumero = new Promise((resolve, reject) => {
    if (numeroConvertito > 0) {
        resolve("Numero positivo");
    } else {
        reject("Numero non valido!");
    }
});

// Utilizzo promise
controllaNumero
    .then(risultato => console.log(risultato))
    .catch(errore => console.error(errore))
    .finally(() => console.log("Operazione completata!"));