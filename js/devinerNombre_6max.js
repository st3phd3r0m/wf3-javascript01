//On génère 1 nombre aléatoire entre 1 et 100
let nbreA = Math.floor(Math.random()*100)+1;
// console.log(nbreA);

let compt = 0; 

do{
    compt++;
    // On demande 1 nombre à l'utilisateur
    var nbreN = Number(prompt("Devinez le nombre aléatoire entre 1 et 100"));
    // console.log(nbreN);
    // alert(nbreN);
    
    // On répondra :
    // Dans les 2 premiers cas on redemande un nombre
    if(nbreN<nbreA){ 
        // le nombre cherché est +grand
        console.log(`Le nombre recherché est plus grand que ${nbreN},\n il vous reste ${6 - compt} essais`);
    } else if(nbreN>nbreA) {
        // le nombre cherché est +petit
        console.log(`Le nombre recherché est plus petit que ${nbreN},\n il vous reste ${6 - compt} essais`);
    }

    
}while(nbreN!=nbreA && compt<6);

//gagné ou perdu
if(nbreN==nbreA && compt<6){
    console.log("GAGNE !");
    alert("GAGNE !");
} else if(nbreN!=nbreA || compt==6){
    console.log("PERDU !");
    alert("PERDU !");
}





