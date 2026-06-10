// Esercizio sulle Promise avanzate.

/***************
    ESERCIZIO
****************/

// Hai tre richieste indipendenti.

// Utente → successo dopo 1 secondo
// Ordini → errore dopo 2 secondi
// Prodotti → successo dopo 3 secondi

// Vuoi conoscere il risultato di tutte le operazioni,
// anche se alcune falliscono.

// Stampa in console il risultato completo delle operazioni.

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
        reject(new Error("Ordine fallito!"));
    }, 2000);
});

const prodotti = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Prodotto ricevuto!");
    }, 3000);
});

// Array di Promise
const arrayRichieste = [utente, ordini, prodotti];

// Gestione del risultato
(async () => {
    const risultati = await Promise.allSettled(arrayRichieste);

    risultati.forEach(risultato => {
        if (risultato.status === "fulfilled") {
            console.log(risultato.value);
        } else {
            console.error(risultato.reason.message);
        }
    });
})();