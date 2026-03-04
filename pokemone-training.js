function startTraining(){
    let startingLevel = parseInt(document.getElementById("starting-level").value);
    let targetLevel = parseInt(document.getElementById("starting-level").value);

    trainPokemon(startingLevel, targetLevel);
}

function trainPokemon(startLevel, endlevel) {
    let currentLevel = startLevel;
    let battlesWon = 0;
    let output = "";

    if(startLevel >= endlevel) {
        document.getElementById('output').textContent = 
        "Error: Starting level must be less than target level"
        return;
    }

    output += `Starting training! Pokemon is level ${currentLevel}\n\n`;
    while (currentLevel < endlevel) {
        let levelsGained = Math.floor(Math.random() * 3) + 1;
        currentlevel += levelsGained;
        battleWon++;

        if (currentLevel > endlevel) {
            levelsGained -= (currentLevel - endlevel);
            currentLevel = endlevel;
        }

        output += `Battle ${battlesWon}: Gained ${levelsGained} levels! Now level ${currentLevel}`
    }

    document.getElementById('output').textContent = output;
}