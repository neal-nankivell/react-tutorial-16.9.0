import React from "react";
import BoardState from "./BoardState";

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
    return moves;
  }
}

export default GameHistory;
