import React from "react";
import "../index.css";
import { storiesOf } from "@storybook/react";
import Board from "../Board";

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
