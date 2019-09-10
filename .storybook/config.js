import { configure, addDecorator } from "@storybook/react";
import "../src/index.css";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

const req = require.context("../src", true, /\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
