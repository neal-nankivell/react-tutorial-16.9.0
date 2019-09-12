import { GameState, BoardValue } from "../state/AppState";
import gameReducer from "./gameReducer";
import { makeMove } from "../actions/gameActions";
import InitialAppState from "../state/InitialAppState";

const getSquares = (state: GameState) =>
  state.history[state.stepNumber].squares;

describe("gameReducer Tests", () => {
  it("Alternates players on playMove", () => {
    const initialState: GameState = InitialAppState.game;

    const sut = gameReducer;
    const moves = [0, 1, 2, 3, 4, 8, 7, 6, 5];

    let currentState = initialState;
    for (var i = 0; i < moves.length; i++) {
      currentState = sut(currentState, makeMove(moves[i]));
      expect(getSquares(currentState)[moves[i]]).toEqual(
        i % 2 == 0 ? "X" : "O"
      );
      expect(currentState.stepNumber).toEqual(i + 1);
      expect(currentState.winner).toBeNull();
      expect(currentState.history[currentState.stepNumber].xIsNext).toEqual(
        i % 2 != 0
      );
    }
  });
});

describe.each([[[0, 1, 3, 4, 6], "X"], [[4, 0, 5, 3, 1, 6], "O"]])(
  "gameReducer Tests ",
  (moves, winner) => {
    it(`makeMoves(${moves}) = ${winner} Wins`, () => {
      const sut = gameReducer;
      let input: number[] = moves as number[];
      let expectedOutput: BoardValue = winner as BoardValue;

      let currentState = InitialAppState.game;

      for (var i = 0; i < input.length; i++) {
        currentState = sut(currentState, makeMove(input[i]));
      }

      expect(currentState.winner).toEqual(expectedOutput);
    });
  }
);
