import { makeMove, jumpToTurn } from "./gameActions";
import { MAKE_MOVE, JUMP_TO_TURN } from "./types";

describe("Game Action Creator Tests", () => {
  it("makeMove generates correct redux action", () => {
    const result = makeMove(5);
    expect(result).toEqual({ type: MAKE_MOVE, payload: { squareIndex: 5 } });
  });

  it("jumpToTurn generates correct redux action", () => {
    const result = jumpToTurn(2);
    expect(result).toEqual({ type: JUMP_TO_TURN, payload: { turn: 2 } });
  });
});
