// On donne une liste d'objets (personnes),
// on souhaite afficher les propriétés de la personne dont le nom est "Pierre".

const personnes = [
  {
    name: "Nicolas",
    age: 28,
    sex: "Homme",
    hobbies: ["Lecture", "Foot", "Jeux Vidéos"],
  },
  {
    name: "Vianney",
    age: 26,
    sex: "Homme",
    hobbies: ["Boxe", "Ecriture", "Philosophie"],
  },
  {
    name: "Pierre",
    age: 31,
    sex: "Homme",
    hobbies: ["Trekking", "Voyage", "Cinéma"],
  },
  {
    name: "Jeanne",
    age: 37,
    sex: "Femme",
    hobbies: ["Course à pieds", "Séries", "Voyage", "Mathématiques"],
  },
];

/*
======================================================
DEBUT DE MODIFICATION - NE PAS MODIFIER EN DEHORS
*/
function displayPersonne(personnes, name) {}

/*
FIN DE MODIFICATION
======================================================
*/
let personToDisplay = "Pierre";
displayPersonne(personnes, personToDisplay);
console.log(
  "Expected result :\nName : Pierre\nAge : 31\nSex : Homme\nHobbies :\nTrekking\nVoyage\nCinéma"
);
