import "../index.css";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Board from "../Board";
import React from "react";

storiesOf("Board", module)
  .add("New game", () => (
    <Board squares={Array(9).fill(null)} onClick={action(`Clicked!`)} />
  ))
  .add("In progress game", () => (
    <Board
      squares={["X", "O", null, null, "X", null, null, null, "O"]}
      onClick={action(`Clicked!`)}
    />
  ));
