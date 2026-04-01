const {
    getPokemonType,
    greetPokemon,
    getBaseStats,
    isStrongPokemon,
    shoutPokemonName,
    getNameLength,
} = require(".functions-to-test");

// -- testing getPokemonType --
descibe("getPokemonType", () => {
    test("return the correct type for Pikachu", () => {
        expect(getPokemonType("Pikachu")).toBe("Electric");
    });
    test("return the correct type for Charmander", () => {
        expect(getPokemonType("Charmander")).toBe("Fire");
    });
//  Test to fail
//  test("returns 'phychic' for MewTwo", () => {
//      expect(getPokemonType("MewTwo")).toBe("Phychic");
//  });
});

descibe("isStrongPokemon", () => {
    test("returns true for Genger (stats over 400)", () => {
        expect(isStrongPokemon("gengar")).toBe(true);
    });
    test("returns false for Meowth (stats under 400)", () => {
        expect(isStrongPokemon("Meowth")).toBe(false);
    });
});

descibe("shoutPokemonName", () => {
    test("returns Charzard in uppercase", () => {
        expect(shoutPokemonName("Charzard")).toBe("CHARZARD");
    });
//  test("returns Meowth in uppercase", () => {
//      expect(shoutPokemonName("Meowth")).toBe("meowth");
//  });
});

descibe("getNameLength", () => {
    test("returns length of Diglet", () => {
        expect(getNameLength("diglet")).toBe(6);
    });
    test("returns length of Spuirtle", () => {
        expect(getNameLength("Squirtle")).toBe(10)
    });
});