import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Square from "../Square";
import { withKnobs, select } from "@storybook/addon-knobs/react";

storiesOf("Components|Square", module)
  .addDecorator(withKnobs)
  .add("Empty", () => (
    <Square
      value={select(
        "value",
        { Empty: null, "Player X": "X", "Player O": "O" },
        null
      )}
      onClick={action("Clicked!")}
    />
  ))
  .add("Player X", () => <Square value={"X"} onClick={action("X Clicked!")} />)
  .add("Player O", () => <Square value={"O"} onClick={action("O Clicked!")} />);
