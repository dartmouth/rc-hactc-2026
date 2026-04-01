function getPokemonType(name) {
    const types = {
        Pikachu: "Electric",
        Charmander: "Fire",
        Squirtle: "Water",
    };
    return types[name]
}

console.assert(
    getPokemonType("Pikachu") === "Electric",
    "Pikachu should be an Electric type"
);

console.assert(
    getPokemonType("Pikachu") === "Fire",
    "Pikachu should be a Fire type"
);