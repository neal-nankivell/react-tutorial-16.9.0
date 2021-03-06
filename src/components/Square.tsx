import React from "react";
import { BoardValue } from "../state/AppState";

interface SquareProps {
  value: BoardValue;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

export default Square;
