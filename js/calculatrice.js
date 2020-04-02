

do{
    console.log("---------------------------Calculatrice-------------------------------------");

    //Demander à l'utilisateur : 
    // - Un premier nombre
    let nbre1 = Number(prompt("Donnez un premier nombre X"));
    //Filtre à forte tête
    while(isNaN(nbre1)){
        nbre1 = Number(prompt("OBEY AND CONFORM !\n Donnez un NOMBRE !"));
    }
    console.log("Vous avez choisi X = " + nbre1);
    // - Un deuxième nombre
    let nbre2 = Number(prompt("Donnez un deuxième nombre Y"));
    //Filtre à forte tête
    while(isNaN(nbre2)){
        nbre2 = Number(prompt("OBEY AND CONFORM !\n Donnez un NOMBRE !"));
    }
    console.log("Vous avez choisi Y = " + nbre2);
    // - Une opération (+,-,*,/)
    let operateur = prompt("Quel opérateur ?");

    // On affichera le résultat de l'opération dans la console
    switch (operateur) {
        case "+":
            console.log(`Le résultat est ${X+Y}`);
            break;
        case "-":
            console.log(`Le résultat est ${X-Y}`);
            break;
        case "/":
            console.log(`Le résultat est ${X/Y}`);
            break;
        case "*":
            console.log(`Le résultat est ${X*Y}`);
            break;
        default:
            console.log(`T'as encore fait ta forte tête !`);
    }
    console.log("------------------------Fin de calculatrice------------------------------");

}while(confirm("On recommence ?"));

