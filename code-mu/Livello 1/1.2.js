// Livello 1.2 - Esercizi JavaScript

// Fonte tracce: Code.mu

/***************
    ESERCIZI
****************/

// 1. Dato un numero, visualizza nella console la prima cifra di questo numero.

const num1 = 230965;
const stringaNumerica1 = num1.toString();
const primaCifra1 = parseInt(stringaNumerica1[0]);

console.log(primaCifra1);


// 2. Dato un numero, visualizza nella console l'ultima cifra di questo numero.

const num2 = 230965;
const stringaNumerica2 = num2.toString();
const ultimaCifra2 = parseInt(stringaNumerica2[stringaNumerica2.length - 1]);

console.log(ultimaCifra2);


// 3. Dato un numero, visualizza nella console la somma della prima e dell'ultima cifra di questo numero.

const num3 = 12345678;
const stringaNumerica3 = num3.toString();
const primaCifra3 = parseInt(stringaNumerica3[0]);
const ultimaCifra3 = parseInt(stringaNumerica3[stringaNumerica3.length - 1]);
const somma3 = primaCifra3 + ultimaCifra3;

console.log(somma3);


// 4. Dato un numero, visualizza la quantità di cifre in questo numero.

const num4 = 8139135;
const stringaNumerica4 = num4.toString();
const numCifre4 = stringaNumerica4.length;

console.log(numCifre4);


// 5. Dati due numeri, verifica che le prime cifre di questi numeri coincidano.

const num5 = 5938184;
const num6 = 5213231;

const stringaNumerica5 = num5.toString();
const stringaNumerica6 = num6.toString();

const primaCifra5 = parseInt(stringaNumerica5[0]);
const primaCifra6 = parseInt(stringaNumerica6[0]);

if (primaCifra5 === primaCifra6) {
    console.log(`${primaCifra5} = ${primaCifra6}`);
} else {
    console.log(`${primaCifra5} ≠ ${primaCifra6}`);
}
