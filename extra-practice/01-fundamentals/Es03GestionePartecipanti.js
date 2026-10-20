const partecipanti = [
    "  Mario Rossi  ",
    "Lucia Bianchi",
    "Anna Verdi",
    "Marco Neri",
    "Lucia Bianchi"
];

const nuovoPartecipante = "  giulia ferrari  ";
const partecipanteDaCercare = "lucia bianchi";
const partecipanteDaRimuovere = "Anna Verdi";
const numeroPosti = "8";

// TRACCIA

// 1. Normalizza tutti i nomi presenti nell'array:
//    - Rimuovi gli spazi iniziali e finali.
//    - Converti i nomi in minuscolo.
//    - Salva il risultato in un nuovo array.
const partecipantiNormalizzato = [];

for (let i = 0; i < partecipanti.length; i++) {
    partecipantiNormalizzato.push(partecipanti[i].trim().toLowerCase());
}

console.log(partecipantiNormalizzato);


// 2. Normalizza anche nuovoPartecipante e aggiungilo
//    alla fine del nuovo array.
partecipantiNormalizzato.push(nuovoPartecipante.trim().toLowerCase());
console.log(partecipantiNormalizzato);


// 3. Aggiungi "paolo conti" all'inizio dell'array.
partecipantiNormalizzato.unshift("paolo conti");
console.log(partecipantiNormalizzato);


// 4. Verifica se partecipanteDaCercare è presente
//    e stampa un messaggio appropriato.
const presente = partecipantiNormalizzato.includes(partecipanteDaCercare);

if (presente) {
    console.log(partecipanteDaCercare + " è presente");
} else {
    console.log(partecipanteDaCercare + " non è presente");
}


// 5. Trova e stampa la prima e l'ultima posizione
//    di "lucia bianchi".
const primaPosizione = partecipantiNormalizzato.indexOf(partecipanteDaCercare);
const ultimaPosizione = partecipantiNormalizzato.lastIndexOf(partecipanteDaCercare);
console.log("Prima posizione: " + primaPosizione);
console.log("Ultima posizione: " + ultimaPosizione);


// 6. Rimuovi "anna verdi" dall'array utilizzando
//    il suo indice, senza rimuovere altri elementi.
const indiceAnna = partecipantiNormalizzato.indexOf(partecipanteDaRimuovere.toLowerCase());

if (indiceAnna !== -1) {
    partecipantiNormalizzato.splice(indiceAnna, 1);
}

console.log(partecipantiNormalizzato);


// 7. Converti numeroPosti in un numero e verifica
//    quanti posti sono ancora disponibili.
const postiDisponibili = Number(numeroPosti) - partecipantiNormalizzato.length;

if (postiDisponibili > 0) {
    console.log("Posti disponibili: " + postiDisponibili);
} else {
    console.log("Nessun posto disponibile!");
}


// 8. Crea una stringa contenente tutti i partecipanti,
//    separati da una virgola e uno spazio.
const partecipantiStringa = partecipantiNormalizzato.join(", ");
console.log(partecipantiStringa);


// 9. Crea un nuovo array con i partecipanti in ordine
//    inverso, senza modificare quello precedente.
const partecipantiInverso = partecipantiNormalizzato.slice().reverse();
console.log(partecipantiInverso);