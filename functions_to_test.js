// pokemon.js

// 1. Returns the type of a pokemon (string)
function getPokemonType(name) {
  const types = {
    Pikachu: "Electric",
    Charmander: "Fire",
    Squirtle: "Water",
    Bulbasaur: "Grass",
    Gengar: "Ghost",
    Meowth: "Normal",
  };
  return types[name] || "unknown";
}

// 2. Returns a greeting string for a pokemon
function greetPokemon(name) {
  return `Hello, ${name}!`;
}

// 3. Returns the total base stats for a pokemon (integer)
function getBaseStats(name) {
  const stats = {
    Pikachu: 320,
    Charmander: 309,
    Squirtle: 314,
    Bulbasaur: 318,
    Gengar: 500,
    Meowth: 290,
  };
  return stats[name] || 0;
}

// 4. Returns true if a pokemon's base stats are over 400 (boolean from integer)
function isStrongPokemon(name) {
  return getBaseStats(name) > 400;
}

// 5. Returns a pokemon's name in uppercase (string)
function shoutPokemonName(name) {
  return name.toUpperCase();
}

// 6. Returns the number of characters in a pokemon's name (integer)
function getNameLength(name) {
  return name.length;
}

module.exports = {
  getPokemonType,
  greetPokemon,
  getBaseStats,
  isStrongPokemon,
  shoutPokemonName,
  getNameLength,
};
