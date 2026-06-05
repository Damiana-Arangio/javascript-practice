// Esercizi sui metodi degli array applicati ad array di oggetti.
// Metodi ripassati: map, filter, find, includes, sort, some, every.

/***************************
    DATI DI RIFERIMENTO
****************************/
const students = [
    { name: "Anna", age: 22, course: "React", grade: 28, skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Marco", age: 19, course: "JavaScript", grade: 24, skills: ["HTML", "CSS"] },
    { name: "Giulia", age: 25, course: "React", grade: 30, skills: ["JavaScript", "React"] },
    { name: "Luca", age: 21, course: "Node", grade: 18, skills: ["JavaScript", "Node"] },
    { name: "Sara", age: 20, course: "CSS", grade: 27, skills: ["HTML", "CSS", "Bootstrap"] }
];

const word = "JavaScript";
const words = ["html", "css", "javascript", "react", "node"];

/***************
    ESERCIZI
****************/

// Crea un nuovo array contenente solo i nomi degli studenti.
const nomiStudenti = students.map(studente => studente.name);
console.log(nomiStudenti);

// Crea un nuovo array con solo gli studenti che hanno un voto maggiore o uguale a 27.
const studentiVotoAlto = students.filter(studente => studente.grade >= 27);
console.log(studentiVotoAlto);

// Trova lo studente che si chiama "Luca".
const studenteLuca = students.find(studente => studente.name === "Luca");
console.log(studenteLuca);

// Controlla se dentro words è presente la parola "react".
const isPresente = words.includes("react");
if (isPresente) {
    console.log("La parola 'react' è presente")
}
else {
    console.log("La parola 'react' non è presente")
}

// Ordina gli studenti dal voto più basso al voto più alto.
const studentiOrdinati = [...students].sort((a, b) => a.grade - b.grade);
console.log(studentiOrdinati);

// Controlla se almeno uno studente ha meno di 20 anni.
const isMeno20Presente = students.some(studente => (studente.age < 20));
console.log("Esiste uno studente che ha meno di 20 anni? Risposta:", isMeno20Presente);

// Controlla se tutti gli studenti hanno un voto maggiore o uguale a 18.
const allStudentsVotoMaggiore18 = students.every(studente => (studente.grade >= 18));
console.log("Tutti gli studenti hanno voto>=18 ? Risposta:", allStudentsVotoMaggiore18);

// Controlla se la stringa word contiene "Script".
const isPresentScript = word.includes("Script");
if (isPresentScript) {
    console.log("La parola 'Script' è presente")
}
else {
    console.log("La parola 'Script' non è presente")
}

// Controlla se almeno uno studente ha tra le sue competenze "React".
const studenteCompetenzaReact = students.some(studente => studente.skills.includes("React"));
console.log("Almeno uno studente ha tra le sue competenze 'React'? ", studenteCompetenzaReact);

// Controlla se tutti gli studenti hanno almeno una competenza.
const tuttiCompetenze = students.every(studente => studente.skills.length != 0);
console.log("Tutti gli studenti hanno almeno una competenza? ", tuttiCompetenze);













