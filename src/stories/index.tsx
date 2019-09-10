import React from "react";

import { storiesOf } from "@storybook/react";
import Square from "../Square";
import Board from "../Board";

storiesOf("Square", module)
  .add("Empty", () => <Square value={null} onClick={() => alert("Click!")} />)
  .add("Player X", () => <Square value={"X"} onClick={() => alert("Click!")} />)
  .add("Player O", () => (
    <Square value={"O"} onClick={() => alert("Click!")} />
  ));

storiesOf("Board", module)
  .add("New game", () => (
    <Board
      squares={Array(9).fill(null)}
      onClick={i => alert(`Square ${i} Clicked!`)}
    />
  ))
  .add("In progress game", () => (
    <Board
      squares={["X", "O", null, null, "X", null, null, null, "O"]}
      onClick={i => alert(`Square ${i} Clicked!`)}
    />
  ));
