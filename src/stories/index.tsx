import React from "react";

import { storiesOf } from "@storybook/react";
import Square from "../Square";

storiesOf("Square", module)
  .add("Empty", () => <Square value={null} onClick={() => alert("Click!")} />)
  .add("Player X", () => <Square value={"X"} onClick={() => alert("Click!")} />)
  .add("Player O", () => (
    <Square value={"O"} onClick={() => alert("Click!")} />
  ));
