import { storiesOf } from "@storybook/react";
import React from "react";
import GameStatus from "../components/GameStatus";
import { withKnobs, select } from "@storybook/addon-knobs";

storiesOf("Components|GameStatus", module)
  .addDecorator(withKnobs)
  .add("Player X Turn", () => (
    <GameStatus
      winner={select(
        "Winner",
        {
          "Game in progress (No winner yet)": null,
          "Player X": "X",
          "Player O": "O",
        },
        null
      )}
      xIsNext={
        select(
          "Current Turn",
          {
            "Player X": "true",
            "Player O": "false",
          },
          "true"
        ) === "true"
      }
    />
  ))
  .add("Player O Turn", () => (
    <GameStatus
      winner={select(
        "Winner",
        {
          "Game in progress (No winner yet)": null,
          "Player X": "X",
          "Player O": "O",
        },
        null
      )}
      xIsNext={
        select(
          "Current Turn",
          { "Player X": "true", "Player O": "false" },
          "false"
        ) === "true"
      }
    />
  ))
  .add("Player O Win", () => (
    <GameStatus
      winner={select(
        "Winner",
        {
          "Game in progress (No winner yet)": null,
          "Player X": "X",
          "Player O": "O",
        },
        "O"
      )}
      xIsNext={
        select(
          "Current Turn",
          { "Player X": "true", "Player O": "false" },
          "false"
        ) === "true"
      }
    />
  ))
  .add("Player X Win", () => (
    <GameStatus
      winner={select(
        "Winner",
        {
          "Game in progress (No winner yet)": null,
          "Player X": "X",
          "Player O": "O",
        },
        "X"
      )}
      xIsNext={
        select(
          "Current Turn",
          { "Player X": "true", "Player O": "false" },
          "false"
        ) === "true"
      }
    />
  ));
