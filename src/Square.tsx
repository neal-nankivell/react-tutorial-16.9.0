import React from "react";
import { BoardValue } from "./Board";

interface SquareState {}

interface SquareProps {
  value: BoardValue;
  onClick: () => void;
}

class Square extends React.Component<SquareProps, SquareState> {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
