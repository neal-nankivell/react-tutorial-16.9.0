import { GameAction, makeMove, jumpToTurn } from "../actions/gameActions";
import { getType } from "typesafe-actions";
import calculateWinner from "./calculateWinner";
import { GameState } from "../state/AppState";

const initialState: GameState = Object.freeze({
  history: [
    {
      xIsNext: true,
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  winner: null
});

const playMove = (
  state: GameState,
  action: ReturnType<typeof makeMove>
): GameState => {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const i = action.payload.squareIndex;

  if (calculateWinner(squares) || squares[i]) {
    return state;
  }

  squares[i] = current.xIsNext ? "X" : "O";
  const winner = calculateWinner(squares);
  return Object.freeze({
    history: history.concat([
      {
        squares: squares,
        xIsNext: !current.xIsNext
      }
    ]),
    stepNumber: history.length,
    winner: winner
  });
};

const rollbackToTurn = (
  state: GameState,
  action: ReturnType<typeof jumpToTurn>
): GameState => {
  return {
    ...state,
    stepNumber: action.payload.turn,
    winner: calculateWinner(state.history[action.payload.turn].squares)
  };
};

export default function gameReducer(
  state: GameState = initialState,
  action: GameAction
) {
  switch (action.type) {
    case getType(makeMove):
      return playMove(state, action);
    case getType(jumpToTurn):
      return rollbackToTurn(state, action);
    default:
      return state;
  }
}
