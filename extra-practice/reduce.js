// Esercizi sul metodo reduce.

/***************************
    DATI DI RIFERIMENTO
****************************/
const numbers = [10, 20, 30, 40, 50];

const students = [
    { name: "Anna", grade: 28 },
    { name: "Marco", grade: 24 },
    { name: "Giulia", grade: 30 },
    { name: "Luca", grade: 18 },
];

/***************
    ESERCIZI
****************/

// 1. Calcola la somma di tutti i numeri presenti nell'array numbers.
const somma = numbers.reduce((accSomma, numCorrente) => {
    return accSomma + numCorrente;
}, 0);

console.log("Somma:", somma);

// 2. Calcola il prodotto di tutti i numeri presenti nell'array numbers.
const prodotto = numbers.reduce((accProdotto, numCorrente) => {
    return accProdotto * numCorrente;
}, 1);

console.log("Prodotto:", prodotto);

// 3. Calcola la somma di tutti i voti degli studenti.
const sommaVoti = students.reduce((accVoto, studenteCorrente) => {
    return accVoto + studenteCorrente.grade;
}, 0);

console.log("Somma voti:", sommaVoti);

// 4. Crea una stringa contenente tutti i nomi degli studenti separati da una virgola.
const nomiStudenti = students.reduce((accNomi, studenteCorrente, index) => {
    if (index === 0) {
        return studenteCorrente.name;
    }

    return accNomi + ", " + studenteCorrente.name;
}, "");

console.log("Nomi studenti:", nomiStudenti);