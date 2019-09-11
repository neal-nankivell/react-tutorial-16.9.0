import { MAKE_MOVE, JUMP_TO_TURN } from "./types";
import { createStandardAction, ActionType } from "typesafe-actions";

export const makeMove = createStandardAction(MAKE_MOVE).map(
  (squareIndex: number) => ({
    payload: { squareIndex }
  })
);

export const jumpToTurn = createStandardAction(JUMP_TO_TURN).map(
  (turn: number) => ({
    payload: { turn }
  })
);

export type GameAction = ActionType<typeof makeMove | typeof jumpToTurn>;
