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

export default interface AppState {
  game: GameState;
}
