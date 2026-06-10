// Esercizio sulle Promise avanzate.

/***************
    ESERCIZIO
****************/

// Hai tre server che forniscono lo stesso dato.
//
// Server A → fallisce dopo 2 secondi
// Server B → restituisce "Dati ricevuti dal server B" dopo 3 secondi
// Server C → restituisce "Dati ricevuti dal server C" dopo 1 secondo
//
// Ti basta ottenere un solo risultato valido.
// Non ti interessa quale server lo restituisce.
//
// Gestisci il risultato e stampa il valore ottenuto.

/***************
    SOLUZIONE
****************/

// Simulazione server
const serverA = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Server A fallito!"));
    }, 2000);
});

const serverB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dati ricevuti dal server B");
    }, 3000);
});

const serverC = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dati ricevuti dal server C");
    }, 1000);
});

// Array di Promise
const arrayServer = [serverA, serverB, serverC];

// Gestione del risultato

(async () => {
    try {
        const rispostaServer = await Promise.any(arrayServer);
        console.log(rispostaServer);
    } catch (error) {
        console.error(error);
    }
})();