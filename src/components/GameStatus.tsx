import React from "react";
import { BoardValue } from "../state/AppState";

interface GameStatusProps {
  xIsNext: boolean;
  winner: BoardValue;
}

const GameStatus: React.FC<GameStatusProps> = (props: GameStatusProps) => (
  <div>
    {props.winner
      ? `Player ${props.winner} Wins!`
      : `Next player: ${props.xIsNext ? "X" : "O"}`}
  </div>
);

export default GameStatus;
