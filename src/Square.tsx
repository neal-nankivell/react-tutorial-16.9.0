import React from "react";
import { BoardValue } from "./Board";

interface SquareState {
  value: BoardValue;
}
interface SquareProps {
  value: BoardValue;
}

class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
