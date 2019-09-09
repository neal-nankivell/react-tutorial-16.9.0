import BoardValue from "./BoardValue";

interface BoardState {
  squares: BoardValue[];
  xIsNext: boolean;
}

export default BoardState;
