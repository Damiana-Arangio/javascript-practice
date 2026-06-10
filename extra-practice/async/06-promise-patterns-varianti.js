// Esercizio sui pattern di utilizzo delle Promise.

/***************
    ESERCIZIO
****************/

// Simula l'avvio di un'applicazione e il recupero di un prodotto.
// L'applicazione deve:
// - mostrare un messaggio iniziale dopo 1 secondo;
// - recuperare un prodotto in base al suo id;
// - restituire il prodotto se esiste;
// - generare un errore se il prodotto non esiste;
// - gestire sia il caso positivo che il caso negativo.

/***************
    SOLUZIONE
****************/

// Definizione prodotti
const prodotti = [
    { id: 1, nome: "Mouse", prezzo: 25 },
    { id: 2, nome: "Tastiera", prezzo: 60 },
    { id: 3, nome: "Monitor", prezzo: 180 }
];

// Creazione messaggio iniziale
const messaggioIniziale = new Promise(resolve => {
    setTimeout(() => {
        resolve("Benvenuto nella nostra applicazione!");
    }, 1000);
});

// Recupero messaggio iniziale
(async () => {
    const messaggioBenvenuto = await messaggioIniziale;
    console.log(messaggioBenvenuto);
})();

// Funzione che recupera il prodotto in base al suo id
function recuperaProdotto(idDaCercare) {

    return new Promise((resolve, reject) => {
        const prodottoTrovato = prodotti.find(
            prodotto => prodotto.id === idDaCercare
        );

        if (prodottoTrovato !== undefined) {
            resolve(prodottoTrovato);
        } else {
            reject(new Error("Prodotto con id " + idDaCercare + " non trovato!"));
        }
    });
}

// Funzione di supporto per ricercare un prodotto
async function ricercaProdotto(id) {
    try {
        const risultatoRicercaProdotto = await recuperaProdotto(id);
        console.log(risultatoRicercaProdotto);
    }
    catch (error) {
        console.error(error.message);
    }
}

// Chiamate funzione per cercare un prodotto
ricercaProdotto(2);
ricercaProdotto(5);