// On donne deux nombres.
// Si au moins l'un d'eux est négatif, on affiche la multiplication des deux nombres
// Sinon, on affiche l'addition des deux nombres

// Nombres pour le test numéro 1
const test1Nb1 = 10;
const test1Nb2 = 24;

// Nombres pour le test numéro 2
const test2Nb1 = -10;
const test2Nb2 = 24;

// Nombres pour le test numéro 3
const test3Nb1 = -3;
const test3Nb2 = -10;

// Nombres pour le test numéro 4
const test4Nb1 = 0;
const test4Nb2 = 15;

/*
======================================================
DEBUT DE MODIFICATION - NE PAS MODIFIER EN DEHORS
*/
function multIfNegAddIfNot(firstNumber, secondNumber) {}

/*
FIN DE MODIFICATION
======================================================
*/

console.log("-------Test 1-------");
console.log(multIfNegAddIfNot(test1Nb1, test1Nb2));
console.log("Expected result : 34");
console.log("-------Test 2-------");
console.log(multIfNegAddIfNot(test2Nb1, test2Nb2));
console.log("Expected result : -240");
console.log("-------Test 3-------");
console.log(multIfNegAddIfNot(test3Nb1, test3Nb2));
console.log("Expected result : 30");
console.log("-------Test 4-------");
console.log(multIfNegAddIfNot(test4Nb1, test4Nb2));
console.log("Expected result : 15");
