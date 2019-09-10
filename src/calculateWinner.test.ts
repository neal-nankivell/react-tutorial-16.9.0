import calculateWinner from "./calculateWinner";
import BoardValue from "./BoardValue";

describe("calculateWinner Tests", () => {
  describe.each([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ])("WiningRow(%s, %s, %s)", (a, b, c) => {
    let squares: BoardValue[] = Array(9).fill(null);
    test("Player X wins", () => {
      squares[a] = "X";
      squares[b] = "X";
      squares[c] = "X";
      expect(calculateWinner(squares)).toEqual("X");
    });

    test("Player O wins", () => {
      squares[a] = "O";
      squares[b] = "O";
      squares[c] = "O";
      expect(calculateWinner(squares)).toEqual("O");
    });
  });
});
