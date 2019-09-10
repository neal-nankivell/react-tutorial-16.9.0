import React from "react";
import "../index.css";
import { storiesOf } from "@storybook/react";
import GameHistory from "../GameHistory";

storiesOf("GameHistory", module)
  .add("Initalized", () => (
    <GameHistory
      history={[{ squares: Array(9).fill(null), xIsNext: true }]}
      onClick={() => alert("Click!")}
    />
  ))
  .add("One Move", () => (
    <GameHistory
      history={[
        { squares: Array(9).fill(null), xIsNext: true },
        { squares: Array(9).fill(null), xIsNext: false }
      ]}
      onClick={() => alert("Click!")}
    />
  ));
