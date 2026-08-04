// Livello 1.1 - Esercizi JavaScript
// Fonte tracce: Code.mu

/***************
    ESERCIZI
****************/

// 1. Dato un numero, verifica se è negativo o meno.
// Visualizza questa informazione in console.

let num = -2;

if (num < 0) {
    console.log("Il numero " + num + " è negativo");
} else {
    console.log("Il numero " + num + " non è negativo");
}


// 2. Data una stringa, visualizza in console la lunghezza di questa stringa.

let saluto = "ciao";
console.log("La parola " + saluto + " è formata da " + saluto.length + " caratteri");


// 3. Data una stringa, visualizza in console l'ultimo carattere della stringa.

let stringa = "Damiana";
console.log("L'ultimo carattere della stringa " + stringa + " è " + stringa[stringa.length - 1]);


// 4. Dato un numero, verifica se è pari o meno.

let number = 10;
if (number % 2) {
    console.log("Il numero " + number + " è dispari!");
}
else {
    console.log("Il numero " + number + " è pari!");
}


// 5. Date due parole, verifica che le prime lettere di queste parole coincidano.

let parola1 = "dado";
let parola2 = "diamante";

if (parola1[0] === parola2[0]) {
    console.log("Le prime lettere delle due parole coincidono")
}
else {
    console.log("Le prime lettere delle due parole NON coincidono")
}
