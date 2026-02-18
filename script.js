var trainerName = "Ash";
let pokemonCount = 150;
let pokemonAge = 34;
const favoriteType = "Electic";
let catchEmAll = false

//console.log(pokemonCount);

// Mew exists
pokemonCount = 151;

//console.log("Now that Mew is discovered", pokemonCount);

function mewDiscovered() {
    pokemonCount = 151;
    console.log("Mew was discoverde, the new pokemon", pokemonCount)
}

mewDiscovered();

function isOld(pokemonlevel) {
    if(pokemonlevel <= 10) {
        console.log('Your pokemon is still weak!');
    } else if (pokemonlevel > 10 && pokemonlevel <= 30) {
        console.log('I could still beat it');
    } else {
        console.log("Crazy Powerful")
    }
}

isOld(pokemonlevel);

function legendaryChoice(choice) {
    if (choice === "zapdos") {
        console.log("Electic tryp -- Great choice")
    } else if (choice === "Articuno") {
        console.log("Ice type -- Very cool!")
    } else if (choice === "Moltres") {
        console.log("Please choose one of the legendary birds!")
    } else {
        console.log("Please choose one of the legendary birds!")
    }
}

let birdChoice = "Zapdos";

legendaryChoice(birdChoice);

function alertpokemon() {
    alert("My favorite is diglet!");
    console.log("consoled favorite pokemon");
}

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("pkm-btn");
    button.addEventListener('click', alertpokemon);
})