// Esercizio sulle Promise avanzate.

/***************
    ESERCIZIO
****************/

// Hai tre server.

// Server A → successo dopo 5 secondi
// Server B → errore dopo 1 secondo
// Server C → successo dopo 3 secondi

// Vuoi sapere quale server termina per primo,
// indipendentemente dal fatto che abbia successo
// oppure produca un errore.

// Gestisci il risultato ottenuto.

/***************
    SOLUZIONE
****************/

// Simulazione server
const serverA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Server A");
    }, 5000);
});

const serverB = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Server B fallito!"));
    }, 1000);
});

const serverC = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Server C");
    }, 3000);
});

// Array di promise
const arrayServer = [serverA, serverB, serverC];

// Gestione risultato
(async () => {
    try {
        const risultato = await Promise.race(arrayServer);
        console.log("Server che ha terminato per primo: " + risultato);
    }

    catch (error) {
        console.error("Server che ha fallito per primo: " + error.message);
    }
})();