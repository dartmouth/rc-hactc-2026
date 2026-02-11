// Lesson 1. Variables
// old way
var trainerName = "Ash";
let pokemonCount = 150;
let pokemonLevel = 34;
const favoriteType = "Electric";
let catchEmAll = false;

// console.log(pokemonCount);

// Mew is discovered
// pokemonCount = 151;

// console.log("Now that Mew is discovered", pokemonCount);

function mewDiscovered() {
  pokemonCount = 151;
  console.log("Mew was discovered, the new pokemon count is:", pokemonCount);
}

mewDiscovered();

function isOld(level) {
  if (level <= 10) {
    console.log("Your Pokemon is still weak!");
  } else if (level > 10 && level <= 30) {
    console.log("I could still beat it");
  } else {
    console.log("Crazy Powerful!");
  }
}

isOld(pokemonLevel);

function legendaryChoice(choice) {
  if (choice === "Zapdos") {
    console.log("Electric type -- Great choice!");
  } else if (choice === "Articuno") {
    console.log("Ice type -- Very cool!");
  } else if (choice === "Moltres") {
    console.log("Fire type -- good pick!");
  } else {
    console.log("Please choose one of the legendary birds!");
  }
}

let birdChoice = "Zapdos";

legendaryChoice(birdChoice);

function alertPokemon() {
  alert("My favorite is Diglet!");
  console.log("Consoled favorite pokemon");
}

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("pkm-btn");
  button.addEventListenter("click", alertPokemon);
});
