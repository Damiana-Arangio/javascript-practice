// Livello 1.5 - Esercizi JavaScript

// Fonte tracce: Code.mu

/***************
    ESERCIZI
****************/

// 1. Trova la somma di tutti i numeri interi da 1 a 100.
let somma = 0;
for (let i = 1; i <= 100; i++) {
    somma = somma + i;
}
console.log("Somma = " + somma);


// 2. Trova la somma di tutti i numeri interi pari nell'intervallo da 1 a 100.
let sommaPari = 0;
for (let i = 2; i <= 100; i = i + 2) {
    sommaPari = sommaPari + i;
}
console.log("Somma = " + sommaPari);


// 3. Trova la somma di tutti i numeri interi dispari nell'intervallo da 1 a 100.
let sommaDispari = 0;
for (let i = 1; i <= 100; i = i + 2) {
    sommaDispari = sommaDispari + i;
}
console.log("Somma = " + sommaDispari);


// 4. Sono dati due numeri interi. Trova il resto della divisione del primo numero per il secondo.
const num1 = 5;
const num2 = 2;
const resto = num1 % num2;
console.log("Resto: " + resto);

// 5. È data una stringa. Itera e stampa nella console uno per uno tutti i caratteri dalla fine della stringa.
const stringa = "Damiana";

for (let i = stringa.length - 1; i >= 0; i--) {
    console.log(stringa[i]);
}