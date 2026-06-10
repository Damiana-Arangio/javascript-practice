// Esercizio su async/await e gestione errori.

/***************
    ESERCIZIO
****************/

// Simula il recupero del profilo di un utente.

// Se l'id richiesto è uguale a 1,
// restituisci un oggetto utente dopo 2 secondi.
//
// Se l'id è diverso da 1,
// genera un errore.
//
// Gestisci il risultato utilizzando async/await.

// Output atteso nel caso: 
// mostraProfilo(1); 
// { id: 1, nome: "Damiana", ruolo: "Frontend Developer" }

// Output atteso nel caso:
// mostraProfilo(2);
// Error: Utente non trovato

/***************
    SOLUZIONE
****************/

const profiloUtente = { id: 1, nome: "Damiana", ruolo: "Frontend Developer" };

// Funzione che recupera il profilo
function recuperaProfilo(id) {

    return new Promise((resolve, reject) => {
        if (id === 1) {
            setTimeout(() => {
                resolve(profiloUtente)
            }, 2000);
        }
        else {
            reject(new Error("Profilo non trovato!"))
        }
    })
}

// Funzione che mostra il profilo(se trovato)
async function mostraProfilo(id) {
    try {
        const profilo = await recuperaProfilo(id);
        console.log(profilo);
    }
    catch (error) {
        console.error(error.name + ": " + error.message)
    }
}

// Chiamata funzione per mostrare il profilo
mostraProfilo(1);
mostraProfilo(2);