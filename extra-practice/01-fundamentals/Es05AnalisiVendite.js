
const vendite = [120, -30, 85, 0, 150, -20, 85, 200, -30, 60];
const limite = "100";

const prodotti = [
    "  Mouse  ",
    "TASTIERA",
    "Monitor",
    "mouse",
    "  Webcam  "
];

// ES05 - ANALISI VENDITE

// Ogni valore di vendite rappresenta:
// - numero positivo: incasso
// - numero negativo: rimborso
// - zero: nessun movimento


// 1. Individua la prima registrazione negativa.
//    Stampa il suo valore e l'indice nell'array.
//    Se non esistono rimborsi, stampa un messaggio.
let trovato = false;

for (let i = 0; i < vendite.length && !trovato; i++) {
    if (vendite[i] < 0) {
        trovato = true;
        console.log("Valore: " + vendite[i]);
        console.log("Indice: " + i);
    }
}

if (!trovato) {
    console.log("Non esistono rimborsi!");
}


// 2. Crea un nuovo array contenente i valori
//    delle vendite in ordine inverso.
//    Non modificare l'array originale.
const arrayInverso = [...vendite].reverse();

console.log(arrayInverso);


// 3. Verifica se le prime tre registrazioni
//    contengono almeno un rimborso.
//    Stampa un messaggio appropriato.
let rimborsoTreRec = false;

for (let i = 0; i < 3 && i < vendite.length && !rimborsoTreRec; i++) {
    if (vendite[i] < 0) {
        rimborsoTreRec = true;
        console.log("Le prime tre registrazioni contengono almeno un rimborso!");
    }
}

if (!rimborsoTreRec) {
    console.log("Le prime tre registrazioni non contengono un rimborso!");
}


// 4. Calcola la differenza tra ogni coppia
//    di registrazioni consecutive.
//
//    Per ogni coppia, sottrai il primo valore
//    dal secondo.
//
//    Ad esempio, con [10, 15, 8]
//    il risultato sarà [5, -7].
//
//    Salva le differenze in un nuovo array.
//    Non modificare l'array originale.
let precedente = vendite[0];
const arrayDifferenze = [];

for (let i = 1; i < vendite.length; i++) {
    const differenza = vendite[i] - precedente;
    arrayDifferenze.push(differenza);
    precedente = vendite[i];
}

console.log(arrayDifferenze);


// 5. Crea una stringa con i nomi dei prodotti:
//    - rimuovi gli spazi iniziali e finali
//    - converti tutti i nomi in minuscolo
//    - separali con " | "
//
//    Mantieni anche i nomi ripetuti.
//    Non modificare l'array originale.
const arrayNormalizzato = [];

for (let i = 0; i < prodotti.length; i++) {
    arrayNormalizzato.push(prodotti[i].trim().toLowerCase());
}

console.log(arrayNormalizzato);

const stringaProdotti = arrayNormalizzato.join(" | ");

console.log(stringaProdotti);


// 6. Conta quante volte compare il prodotto
//    "mouse" nell'array prodotti.
//
//    ATTENZIONE:
//    - Ignora le differenze tra maiuscole e minuscole.
//    - Ignora gli spazi iniziali e finali.
//    - Non modificare l'array originale.
//    - Stampa il numero totale delle occorrenze.
let conta = 0;

for (let i = 0; i < arrayNormalizzato.length; i++) {
    if (arrayNormalizzato[i] === "mouse") {
        conta++;
    }
}

console.log("La parola mouse è presente: " + conta + " volte!");


// 7. Individua la sequenza più lunga di
//    registrazioni positive consecutive.
//
//    Stampa quanti incassi consecutivi
//    contiene la sequenza più lunga.
//
//    ATTENZIONE:
//    - Considera soltanto i valori positivi.
//    - I numeri negativi e lo zero interrompono
//      la sequenza.
//    - Non modificare l'array originale.
let seqPiuLunga = 0;
let contaIncassi = 0;

for (let i = 0; i < vendite.length; i++) {
    if (vendite[i] > 0) {
        contaIncassi++;
    } else {
        contaIncassi = 0;
    }

    if (contaIncassi > seqPiuLunga) {
        seqPiuLunga = contaIncassi;
    }
}

console.log("La sequenza più lunga contiene " + seqPiuLunga + " incassi consecutivi");


// 8. BONUS - LOGICA
//    Individua la coppia di registrazioni
//    consecutive con la somma più alta.
//
//    Stampa:
//    - i due valori
//    - la loro somma
//    - l'indice iniziale della coppia
//
//    Non utilizzare sort().
//    Non modificare l'array originale.
let valore1 = vendite[0];
let valore2 = vendite[1];
let indice = 0;
let sommaPiuAlta = vendite[0] + vendite[1];
let contaSomma = 0;
let precedenteSomma = vendite[0];

for (let i = 1; i < vendite.length; i++) {
    contaSomma = precedenteSomma + vendite[i];

    if (contaSomma > sommaPiuAlta) {
        sommaPiuAlta = contaSomma;
        valore1 = precedenteSomma;
        valore2 = vendite[i];
        indice = i - 1;
    }

    precedenteSomma = vendite[i];
}

console.log("Somma più alta: " + sommaPiuAlta);
console.log("I numeri sono: " + valore1 + " e " + valore2);
console.log("L'indice è: " + indice);