import renderer from "react-test-renderer";
import React from "react";
import GameStatus from "./GameStatus";

describe("Game Status Tests", () => {
  it("Player X Turn", () => {
    const wrapper = renderer.create(
      <GameStatus xIsNext={true} winner={null} />
    );
    expect(wrapper).toMatchInlineSnapshot(`
      <div>
        Next player: X
      </div>
    `);
  });

  it("Player O Turn", () => {
    const wrapper = renderer.create(
      <GameStatus xIsNext={false} winner={null} />
    );
    expect(wrapper).toMatchInlineSnapshot(`
        <div>
          Next player: O
        </div>
      `);
  });

  it("Player X Wins", () => {
    const wrapper = renderer.create(
      <GameStatus xIsNext={false} winner={"X"} />
    );
    expect(wrapper).toMatchInlineSnapshot(`
        <div>
          Player X Wins!
        </div>
      `);
  });

  it("Player O Wins", () => {
    const wrapper = renderer.create(<GameStatus xIsNext={true} winner={"O"} />);
    expect(wrapper).toMatchInlineSnapshot(`
        <div>
          Player O Wins!
        </div>
      `);
  });
});
