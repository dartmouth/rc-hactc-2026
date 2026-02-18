function startTraining() {
  let startingLevel = parseInt(document.getElementById("starting-level").value);
  let targetLevel = parseInt(document.getElementById("target-level").value);

  trainPokemon(startingLevel, targetLevel);
}

function trainPokemon(startLevel, endLevel) {
  let currentLevel = startLevel;
  let battlesWon = 0;
  let output = "";

  if (startLevel >= endLevel) {
    document.getElementById("output").textContent =
      "Error: Starting level must be less than target level";
    return;
  }

  output += `Starting training! Pokemon is level ${currentLevel}\n\n`;
  while (currentLevel < endLevel) {
    let levelsGained = Math.floor(Math.random() * 3) + 1;
    // currentLevel + levelsGained == currentLevel
    currentLevel += levelsGained;
    // battlesWon + 1 == battlesWon
    battlesWon++;

    output += `Battle ${battlesWon}: Gained ${levelsGained} levels! Now level ${currentLevel}\n`;
  }

  document.getElementById("output").textContent = output;
}
