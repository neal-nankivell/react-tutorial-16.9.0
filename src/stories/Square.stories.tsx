import "../index.css";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Square from "../Square";

storiesOf("Square", module)
  .add("Empty", () => (
    <Square value={null} onClick={action("Empty Clicked!")} />
  ))
  .add("Player X", () => <Square value={"X"} onClick={action("X Clicked!")} />)
  .add("Player O", () => <Square value={"O"} onClick={action("O Clicked!")} />);
