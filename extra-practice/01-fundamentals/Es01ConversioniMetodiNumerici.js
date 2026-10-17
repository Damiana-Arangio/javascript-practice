// ESERCIZIO: Conversioni e metodi numerici
const prezzo = "24.75";
const quantita = "3";
const sconto = "ciao";
const temperatura = -12.6;

// 1. Converti prezzo in numero decimale
//    e quantita in numero intero.
const conversionePrezzo = parseFloat(prezzo);
const conversioneQuantita = parseInt(quantita);
console.log(conversionePrezzo);
console.log(conversioneQuantita);


// 2. Controlla se sconto può essere convertito
//    in un numero valido.
//    Se non è valido, stampa "Sconto non valido".
const conversioneSconto = Number(sconto);
if (Number.isNaN(conversioneSconto)) {
    console.log("Sconto non valido");
}


// 3. Calcola il totale moltiplicando
//    prezzo per quantita.
const totale = conversionePrezzo * conversioneQuantita;
console.log(totale);

// 4. Arrotonda il totale:
//    - per difetto
//    - per eccesso
//    - all'intero più vicino
//    Stampa tutti e tre i risultati.
const totaleDifetto = Math.floor(totale);
const totaleEccesso = Math.ceil(totale);
const totaleIntPiuVicino = Math.round(totale);
console.log(totaleDifetto);
console.log(totaleEccesso);
console.log(totaleIntPiuVicino);

// 5. Ottieni il valore assoluto di temperatura
//    e stampalo.
const valoreAssolutoTemp = Math.abs(temperatura);
console.log(valoreAssolutoTemp);

// 6. Converti il totale in stringa
// e verifica il tipo con typeof.
const totaleConvertito = totale.toString();
if (typeof totaleConvertito === "string") {
    console.log("totaleConvertito è una stringa");
}