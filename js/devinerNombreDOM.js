//On génère 1 nombre aléatoire entre 1 et 100
let nbreA = Math.floor(Math.random() * 100) + 1;

let h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.textContent = "Devinez le nombre généré aléatoirement entre 1 et 100";


let input = document.createElement("input");
document.body.appendChild(input);
input.placeholder = "tapez un nombre";

let button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Valider";


let parResult = document.createElement("p");
document.body.appendChild(parResult);

let nbreN;



    // On demande 1 nombre à l'utilisateur
    button.addEventListener('click', function () {

        nbreN = input.value;
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

    });


    
// do {

// } while (nbreN != nbreA);

//gagné
parResult.textContent = "GAGNE !";
button.style.textAlign = "center";
button.style.Color = "white";
button.style.backgroundColor = "green";
button.style.fontWeight = "bold";
button.style.border = "1px solid black";
button.style.boxShadow = "0 0 10px black";


async function fonctionAsynchrone1() {/* code asynchrone */}
async function fonctionAsynchrone2() {/* code asynchrone */}

async function fonctionAsynchrone3() {
 const value1 = await fonctionAsynchrone1();
 const value2 = await fonctionAsynchrone2();
 return value1 + value2;
}