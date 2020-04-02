//On génère 1 nombre aléatoire entre 1 et 100
let nbreA = Math.floor(Math.random() * 100) + 1;

let parResult = document.getElementById("result");

do {
    // On demande 1 nombre à l'utilisateur
    var nbreN = await getNumber();
        // console.log(nbreN);
        // alert(nbreN);
        // On répondra :
        if (nbreN < nbreA) {
            //le nombre cherché est +grand
            parResult.textContent = "Le nombre aléatoire est plus grand";
        } else if (nbreN > nbreA) {
            //le nombre cherché est +petit
            parResult.textContent = "Le nombre aléatoire est plus petit";
        }
        //Dans les 2 premiers cas on redemande un nombre


} while (nbreN != nbreA);

//gagné
parResult.textContent = "GAGNE !";
button.style.textAlign = "center";
button.style.Color = "white";
button.style.backgroundColor = "green";
button.style.fontWeight = "bold";
button.style.border = "1px solid black";
button.style.boxShadow = "0 0 10px black";