// Esercizio su async/await.
// Gestione di una Promise tramite funzione asincrona.

/***************
    ESERCIZIO
****************/

// Crea una Promise chiamata recuperaMessaggio.
// La Promise deve risolversi dopo 2 secondi con il messaggio:
// "Dati recuperati correttamente".
//
// Crea poi una funzione async chiamata mostraMessaggio.
// Dentro la funzione:
// - usa await per aspettare la risoluzione della Promise;
// - stampa il messaggio in console.

/***************
    SOLUZIONE
****************/

// Creazione Promise
const recuperaMessaggio = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Dati recuperati correttamente")
    }, 2000);

})

// Definizione funzione per mostrare il messaggio
async function mostraMessaggio() {
    const messaggio = await recuperaMessaggio;
    console.log(messaggio);
}

// Chiamata funzione per mostrare il messaggio
mostraMessaggio();
