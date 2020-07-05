import { MAKE_MOVE, JUMP_TO_TURN } from "./types";
import { ActionType, createAction } from "typesafe-actions";

export const makeMove = createAction(MAKE_MOVE, (squareIndex: number) => ({
  squareIndex,
}))();

export const jumpToTurn = createAction(JUMP_TO_TURN, (turn: number) => ({
  turn,
}))();

export type GameAction = ActionType<typeof makeMove | typeof jumpToTurn>;
