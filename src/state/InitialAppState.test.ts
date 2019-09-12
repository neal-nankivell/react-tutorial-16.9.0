import InitialAppState from "./InitialAppState";

describe("Initial App State", () => {
  it("Conains a game state", () => {
    expect(InitialAppState.game).toBeDefined();
  });

  it("Is initialized with step number 0", () => {
    expect(InitialAppState.game.stepNumber).toEqual(0);
  });

  it("Does not have a winner", () => {
    expect(InitialAppState.game.winner).toBeNull();
  });

  it("Conains a starting game history", () => {
    expect(InitialAppState.game.history.length).toEqual(1);
  });

  it("Starting game history has player X for the next move", () => {
    expect(InitialAppState.game.history[0].xIsNext).toBeTruthy();
  });

  it("Conains an array of length 9 with null values for squares", () => {
    expect(InitialAppState.game.history[0].squares).toEqual(
      Array(9).fill(null)
    );
  });

  it("Is a frozen object", () => {
    expect(() => (InitialAppState.game = null)).toThrow();
  });
});
