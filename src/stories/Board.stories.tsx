import "../index.css";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Board from "../Board";
import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

storiesOf("Board", module)
  .addDecorator(withKnobs)
  .add("New game", () => (
    <Board
      squares={object("Squares", Array(9).fill(null))}
      onClick={action(`Clicked!`)}
    />
  ))
  .add("In progress game", () => (
    <Board
      squares={["X", "O", null, null, "X", null, null, null, "O"]}
      onClick={action(`Clicked!`)}
    />
  ));
