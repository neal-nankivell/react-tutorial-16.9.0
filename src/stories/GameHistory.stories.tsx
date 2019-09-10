import "../index.css";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import GameHistory from "../GameHistory";
import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

storiesOf("GameHistory", module)
  .addDecorator(withKnobs)
  .add("Initalized", () => (
    <GameHistory
      history={object("History Items", [
        { squares: Array(9).fill(null), xIsNext: true }
      ])}
      onClick={action("onClick")}
    />
  ))
  .add("One Move", () => (
    <GameHistory
      history={[
        { squares: Array(9).fill(null), xIsNext: true },
        { squares: Array(9).fill(null), xIsNext: false }
      ]}
      onClick={action("onClick")}
    />
  ));
