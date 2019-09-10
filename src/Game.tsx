import React from "react";
import Board from "./Board";
import BoardState from "./BoardState";
import calculateWinner from "./calculateWinner";
import GameHistory from "./GameHistory";
import GameStatus from "./GameStatus";

interface GameProps {}

interface GameState {
  history: BoardState[];
  stepNumber: number;
}

class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      history: [
        {
          xIsNext: true,
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0
    };
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = current.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          xIsNext: !current.xIsNext
        }
      ]),
      stepNumber: history.length
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${current.xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <GameStatus status={status} />
          <GameHistory
            history={this.state.history}
            onClick={(step: number) => this.jumpTo(step)}
          />
        </div>
      </div>
    );
  }
}

export default Game;
