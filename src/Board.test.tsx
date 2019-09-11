import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Board from "./Board";
import Square from "./Square";

describe("Board Tests", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  const mockCallback = jest.fn().mockName("SquareOnClick");

  beforeAll(() => {
    wrapper = shallow(
      <Board squares={Array(9).fill(null)} onClick={mockCallback} />
    );
  });

  it("Has 3 rows with 3 squares each", () => {
    const rows = wrapper.find(".board-row");
    expect(rows.length).toEqual(3);
    rows.forEach(row => {
      let squares = row.find(Square);
      expect(squares.length).toEqual(3);
    });
  });

  it("OnClick for each square calls onClick prop", () => {
    const squares = wrapper.find(Square);
    squares.forEach((square, index) => {
      // Assuming the order of squares found also
      // maps to their index on the board
      mockCallback.mockReset();
      square.simulate("click");
      expect(mockCallback).toHaveBeenCalledWith(index);
    });
  });
});
