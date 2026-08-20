// Livello 1.2 - Esercizi JavaScript

// Fonte tracce: Code.mu

/***************
    ESERCIZI
****************/

// 1. Data una stringa. Se in questa stringa ci sono più di un carattere, stampa in console il penultimo carattere di questa stringa.

const stringa = "JavaScript";

if (stringa.length > 1) {
    console.log(stringa[stringa.length - 2]);
}


// 2. Dati due numeri interi. Verifica che il primo numero sia divisibile per il secondo senza resto.

const num1 = 9;
const num2 = 3;

if (num1 % num2 === 0) {
    console.log(`${num1} è divisibile per ${num2} senza resto`);
} else {
    console.log(`${num1} non è divisibile per ${num2} senza resto`);
}

