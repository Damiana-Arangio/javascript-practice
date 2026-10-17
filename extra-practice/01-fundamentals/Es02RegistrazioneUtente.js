// ESERCIZIO 02: Registrazione utente

const nome = "   mARia   ";
const cognome = "  ROSSI  ";
const email = "  MARIA.ROSSI@GMAIL.COM  ";
const eta = "24";
const username = "maria_rossi_2026";

// 1. Normalizza nome e cognome:
//    - Elimina gli spazi iniziali e finali.
//    - Converti tutto in minuscolo.
//    - Trasforma soltanto la prima lettera in maiuscolo.
//    - Stampa nome e cognome corretti.

let nomeNormalizzato = nome.trim().toLowerCase();
nomeNormalizzato = nomeNormalizzato[0].toUpperCase() + nomeNormalizzato.slice(1);

let cognomeNormalizzato = cognome.trim().toLowerCase();
cognomeNormalizzato = cognomeNormalizzato[0].toUpperCase() + cognomeNormalizzato.slice(1);

console.log(nomeNormalizzato + " " + cognomeNormalizzato);


// 2. Normalizza l'email:
//    - Elimina gli spazi iniziali e finali.
//    - Converti tutto in minuscolo.
//    - Verifica che contenga "@" e termini con ".com".
//    - Stampa se l'email rispetta queste condizioni.

const emailNormalizzata = email.trim().toLowerCase();
const emailValida = emailNormalizzata.includes("@") && emailNormalizzata.endsWith(".com");
console.log(emailValida ? emailNormalizzata : "Email non valida!");


// 3. Controlla l'età:
//    - Converti eta in numero.
//    - Verifica che la conversione sia valida.
//    - Controlla che l'utente abbia almeno 18 anni.
//    - Stampa se può registrarsi.

const etaConvertita = Number(eta);
const etaValida = !Number.isNaN(etaConvertita) && etaConvertita >= 18;

console.log(etaValida ? "L'utente può registrarsi!" : "L'utente non può registrarsi!");


// 4. Controlla lo username:
//    - Verifica che contenga almeno 8 caratteri.
//    - Verifica che contenga il carattere "_".
//    - Se entrambe le condizioni sono soddisfatte,
//      stampa "Username valido".
//    - Altrimenti stampa "Username non valido".

const usernameValido = username.length >= 8 && username.includes("_");

if (usernameValido) {
    console.log("Username valido");
} else {
    console.log("Username non valido");
}


// 5. Estrai l'anno dallo username:
//    - Recupera gli ultimi 4 caratteri.
//    - Converti il risultato in numero.
//    - Stampa l'anno ottenuto.

const anno = Number(username.slice(-4));
console.log(anno);


// 6. BONUS - Riepilogo registrazione:
//    - Se email, età e username sono validi,
//      stampa un messaggio con nome, cognome ed email
//      utilizzando i template literal.
//    - Altrimenti stampa "Registrazione non consentita".

if (emailValida && etaValida && usernameValido) {
    console.log(`${nomeNormalizzato} ${cognomeNormalizzato} ${emailNormalizzata}`);
} else {
    console.log("Registrazione non consentita");
}