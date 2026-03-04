var name = "Adrian";
let mobCount = 200;
let mobXpLevel = 5;
const favoriteMob = "Cats";
let tameAll = false;

//console.log(mobCount);

//mobCount = 300;

//console.log("Now that I've found more", mobCount)

function moreFound() {
    mobCount = 300;
    console.log("I've found more cats, the new count is:", mobCount)
}

moreFound();

function isYoung() {
    if (mobXpLevel <= 10) {
        console.log('Your mob is cute!');
    } else if (mobXpLevel > 10 && mobXpLevel <= 30) {
        console.log('Your mob is strong!');
    } else {
        console.log('Your mob is insanely strong!');
    }
}

isYoung(mobXpLevel);

function legendaryMob(choice) {
    if (choice == "Ender Dragon") {
        console.log("Third most powerful Mob -- Great Choice.");
    } else if (choice == "Wither") {
        console.log("Second most powerful Mob -- Awesome Choice!");
    } else if (choice == "Warden") {
        console.log("The most powerful Mob -- Insanely Powerful!!");
    } else {
        console.log("Please pick with mob you have.");
    }
}

let mobChoice = "Warden"

legendaryMob(mobChoice)

function alertMob() {
    alert("My favorite is cats.");
    console.log("Consoled favorite Mob");
}

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("mob-btn");
    button.addEventListener("click", alertMob);
})