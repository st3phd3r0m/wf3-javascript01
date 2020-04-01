let bonjour = "Hello world!"; //Déclaration chaine de caractères
let nombre = 15;

// Affichage message bonjour
console.log(bonjour);

// Affichage message erreur
console.error("Erreur survenue !");

// Affichage message d'alert
console.warn("Attention, problème potentiel !");

// Affichage du nombre
console.log(nombre);

nombre = 25;

// Affichage du nombre
console.log(nombre);

// Faire une addition
// Ajouter 10 à "nombre"
nombre += 10; //ou nombre = nombre + 10; 
console.log(nombre);

//Faire une soustraction
nombre -= 4; //ou nombre = nombre - 4; 
console.log(nombre);

//Faire une multiplication (par 3)
nombre *= 3; //ou nombre = nombre * 3; 
console.log(nombre);

//Faire une division (par 2)
nombre /= 2; //ou nombre = nombre / 2; 
console.log(nombre);


//Connaitre le reste division par 2
nombre %= 2; //ou nombre = nombre % 2; 
console.log(nombre);

//incrémentation
nombre++;
console.log(nombre);
//décrémentation
nombre--;
console.log(nombre);
nombre--;
console.log(nombre);

// Ecriture d'1 condition

if(nombre>0){
    console.log("nombre > 0 (car nombre = "+nombre+")");
}else{
    console.log("nombre <= 0 (car nombre = "+nombre+")");
}

//Intéraction avec l'utilisateur
// Boîte d'alerte
// alert(bonjour);

// Demande de confirmation
// if(confirm("êtes-vous d'accord ?")){
//     alert("Vous êtes d'accord !");
// }else{
//     alert("Vous n'êtes pas d'accord !");
// }

// Demande saisie utilisateur
// let reponse1 = prompt("What is your name ?");
// console.log(reponse1);

// let reponse2 = prompt("donne un nombre");
// console.log(reponse2);
// console.log(typeof(reponse2));

//Boucle for
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=100; i>=90; i--){
//     console.log(i);
// }

for(let i=0; i<=1027; i+=4){
    console.log(i);
    if(i==1024){
        console.log(i+=3);
    }
}

// let j = 0;
// //Boucle while
// while(j<=6){
//     console.log(j);
//     j++;
// }