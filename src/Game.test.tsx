import React from "react";
import Game from "./Game";
import { shallow, ShallowWrapper } from "enzyme";
import Board from "./Board";
import GameHistory from "./GameHistory";

describe("Game Tests", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeAll(() => {
    wrapper = shallow(<Game />);
  });

  it("Renders game div", () => {
    expect(wrapper.find("game")).toBeDefined();
  });

  it("Renders game board inital state", () => {
    const boardComponent = wrapper.find(Board);
    expect(wrapper.find("game-board")).toBeDefined();
    expect(boardComponent).toBeDefined();
    expect(boardComponent.prop("squares")).toEqual(Array(9).fill(null));
    expect(boardComponent.prop("onClick")).toBeDefined();
  });

  it("Renders game info", () => {
    expect(wrapper.find("game-info")).toBeDefined();
  });

  it("Renders Game History", () => {
    const gameHistoy = wrapper.find(GameHistory);
    expect(gameHistoy).toBeDefined();
    expect(gameHistoy.prop("history")).toBeDefined();
    expect(gameHistoy.prop("onClick")).toBeDefined();
  });
});
