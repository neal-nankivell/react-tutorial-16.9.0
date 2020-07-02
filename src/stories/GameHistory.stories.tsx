import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import GameHistory from "../components/GameHistory";
import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";

storiesOf("Components|GameHistory", module)
  .addDecorator(withKnobs)
  .add("New Game", () => (
    <GameHistory
      history={Array(
        number("Turn Number", 1, {
          range: true,
          min: 1,
          max: 9,
          step: 1,
        })
      ).fill({ squares: Array(9).fill(null), xIsNext: true })}
      onClick={action("onClick")}
    />
  ))
  .add("One Move", () => (
    <GameHistory
      history={[
        { squares: Array(9).fill(null), xIsNext: true },
        { squares: Array(9).fill(null), xIsNext: false },
      ]}
      onClick={action("onClick")}
    />
  ));
