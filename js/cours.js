// Manipulation de chaines de caractères 

//Concaténation
console.log("bon" + "jour");

let prenom = "Stef";
let nom = "Der";
let essais = 6;

console.log("Bonjour " + prenom + " " + nom + ". Il vous reste " + essais + " essais");

//Concaténation pas injection de variables (ES6)
console.log(`Bonjour ${prenom} ${nom}. Il vous reste ${essais} essais`);

//Découper une chaine de caractères
let phrase = "The quick brown fox jumps over the lazy dog.";
console.log(phrase);

// Récupérer le début (9 caractères)
console.log(phrase.slice(0,9));

// Récupérer une partie au milieu
console.log(phrase.slice(16,25));

// Récupérer une partie au milieu
console.log(phrase.slice(35));
console.log(phrase.slice(-9));