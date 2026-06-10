// Esercizio sulle Promise avanzate

/***************
    ESERCIZIO
****************/

// Simula tre richieste asincrone indipendenti:

// - recupero utente dopo 1 secondo;
// - recupero ordini dopo 2 secondi;
// - recupero prodotti dopo 3 secondi.

// Tutte le richieste devono andare a buon fine.
// Ottieni tutti i risultati e stampali in console.
// Se anche una sola richiesta fallisce,
// gestisci l'errore.

/***************
    SOLUZIONE
****************/

// Creazione richieste
const utente = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dati utente ricevuti!");
    }, 1000);
});

const ordini = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dati ordine ricevuti!");
    }, 2000);
});

const prodotti = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dati prodotti ricevuti!");
    }, 3000);
});

// Array di Promise
const arrayRichieste = [utente, ordini, prodotti];

// Gestione del risultato
(async () => {

    try {
        const risultati = await Promise.all(arrayRichieste);
        console.log(risultati);
    }
    catch (error) {
        console.error(error);
    }

})();