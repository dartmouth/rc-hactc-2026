function getPokemonType(name) {
  const types = {
    pikachu: "electric",
    charmander: "fire",
    squirtle: "water",
  };
  return types[name];
}

console.assert(
  getPokemonType("pikachu") === "electric",
  "Pikachu should be an electric type"
);

console.assert(
  getPokemonType("pikachu") === "fire",
  "Pikachu should be a fire type"
);
