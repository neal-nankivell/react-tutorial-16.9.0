import React from "react";
import Game from "./Game";
import { shallow, ShallowWrapper } from "enzyme";
import Board from "./components/Board";
import GameHistory from "./components/GameHistory";
import GameStatus from "./components/GameStatus";

describe("Game Tests", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeAll(() => {
    wrapper = shallow(<Game />);
  });

  it("Renders game div", () => {
    expect(wrapper.find("game")).toBeDefined();
  });

  it("Renders game board inital state", () => {
    const board = wrapper.find(Board);
    expect(board).toBeDefined();
  });

  it("Renders game info", () => {
    expect(wrapper.find("game-info")).toBeDefined();
  });

  it("Renders Game History", () => {
    const gameHistoy = wrapper.find(GameHistory);
    expect(gameHistoy).toBeDefined();
  });

  it("Renders Game Status", () => {
    const gameStatus = wrapper.find(GameStatus);
    expect(gameStatus).toBeDefined();
  });
});
