export type BoardValue = "X" | "O" | null;

export interface BoardState {
  squares: BoardValue[];
  xIsNext: boolean;
}

export interface GameState {
  history: BoardState[];
  stepNumber: number;
  winner: BoardValue;
}

export const initalAppState: AppState = Object.freeze({
  game: {
    history: [
      {
        xIsNext: true,
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    winner: null
  }
});

export default interface AppState {
  game: GameState;
}
