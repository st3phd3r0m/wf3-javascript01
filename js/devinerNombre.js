//On génère 1 nombre aléatoire entre 1 et 100
let nbreA = Math.floor(Math.random()*100)+1;
// console.log(nbreA);


do{
    // On demande 1 nombre à l'utilisateur
    var nbreN = Number(prompt("Devinez le nombre aléatoire entre 1 et 100"));
    // console.log(nbreN);
    // alert(nbreN);
    
    // On répondra :
    if(nbreN<nbreA){ 
        // le nombre cherché est +grand
        console.log(nbreN+", Le nombre aléatoire est plus grand");
    } else if(nbreN>nbreA) {
        // le nombre cherché est +petit
        console.log(nbreN+", Le nombre aléatoire est plus petit");
    } 
    // Dans les 2 premiers cas on redemande un nombre
}while(nbreN!=nbreA);

//gagné
alert(nbreN+", GAGNE !");
console.log(nbreN+", GAGNE !");



