// Esercizio su async/await e gestione errori.
// Lancio e intercettazione di un errore con try...catch.

/***************
    ESERCIZIO
****************/

// Crea una funzione async chiamata controllaEta.
// La funzione deve ricevere un parametro eta.
// Dentro la funzione:
// - se eta è maggiore o uguale a 18, ritorna "Accesso consentito";
// - altrimenti lancia un errore "Accesso negato".
//
// Crea poi una funzione async chiamata verificaAccesso.
// Dentro verificaAccesso:
// - usa try...catch;
// - richiama controllaEta(16) usando await;
// - se tutto va bene, stampa il risultato;
// - se c'è un errore, intercettalo e stampa il messaggio dell'errore.

/***************
    SOLUZIONE
****************/

// Definizione funzione per controllare l'età
async function controllaEta(eta) {
    if (eta >= 18) {
        return "Accesso consentito";
    }
    else
        throw new Error("Accesso negato");
}

// Definizione funzione per verificare l'accesso
async function verificaAccesso() {
    try {
        const risposta = await controllaEta(16);
        console.log(risposta);
    }
    catch (error) {
        console.error(error.name + ": " + error.message);
    }
}

// Chiamata funzione per verificare l'accesso
verificaAccesso();












