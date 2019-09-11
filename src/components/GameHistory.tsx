import React from "react";
import { BoardState } from "../state/AppState";

interface GameHistoryProps {
  history: BoardState[];
  onClick: (index: number) => void;
}

class GameHistory extends React.PureComponent<GameHistoryProps> {
  render() {
    const moves = this.props.history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.props.onClick(move)}>{desc}</button>
        </li>
      );
    });
    return <ol style={{ listStyleType: "none" }}>{moves}</ol>;
  }
}

export default GameHistory;
