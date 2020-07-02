import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Board from "../components/Board";
import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { BoardValue } from "../state/AppState";

storiesOf("Components|Board", module)
  .addDecorator(withKnobs)
  .add("New game", () => (
    <Board
      squares={array("Squares", Array(9).fill(null)).map(
        (string) => string as BoardValue
      )}
      onClick={action(`Clicked!`)}
    />
  ))
  .add("In progress game", () => (
    <Board
      squares={array("Squares", ["X", "O", "", "", "X", "", "", "", "O"]).map(
        (string) => (string === "" ? null : (string as BoardValue))
      )}
      onClick={action(`Clicked!`)}
    />
  ));
