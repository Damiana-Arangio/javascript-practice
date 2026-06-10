// Esercizio su Promise e async/await.
// Recupero di dati simulati tramite una Promise.

/***************
    ESERCIZIO
****************/

// Crea una Promise chiamata recuperaUtenti.
// La Promise deve risolversi dopo 2 secondi con questo array:

// [
//   { id: 1, nome: "Anna" },
//   { id: 2, nome: "Marco" },
//   { id: 3, nome: "Giulia" }
// ]
//
// Crea poi una funzione async chiamata mostraUtenti.
// Dentro la funzione:
// - usa await per aspettare la risoluzione della Promise;
// - stampa in console l'intero array di utenti;
// - crea un nuovo array contenente solo i nomi;
// - stampa in console l'array dei nomi.

/***************
    SOLUZIONE
****************/

// Creazione promise
const recuperaUtenti = new Promise((resolve) => {
    const utenti = [
        { id: 1, nome: "Anna" },
        { id: 2, nome: "Marco" },
        { id: 3, nome: "Giulia" }
    ];

    setTimeout(() => {
        resolve(utenti);
    }, 2000);
});

// Definizione funzione per mostrare gli utenti
async function mostraUtenti() {
    const utenti = await recuperaUtenti;
    console.log(utenti);

    const soloNomi = utenti.map(utente => utente.nome);
    console.log(soloNomi);
}

// Chiamata funzione per mostrare gli utenti
mostraUtenti();