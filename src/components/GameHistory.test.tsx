import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import GameHistory from "./GameHistory";

describe("Game History Tests", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  const mockCallback = jest.fn().mockName("HistoryOnClick");

  beforeAll(() => {
    wrapper = shallow(
      <GameHistory
        history={Array(9).fill(Array(9).fill(null))}
        onClick={mockCallback}
      />
    );
  });

  it("Contains ol", () => {
    const list = wrapper.find("ol");
    expect(list.length).toBe(1);
  });

  it("Conains list item for each history record", () => {
    const listItems = wrapper.find("li");
    expect(listItems.length).toEqual(9);
  });

  it("Clicking on each button calls the props.onClick", () => {
    const buttons = wrapper.find("button");
    mockCallback.mockReset();

    buttons.forEach(button => {
      button.simulate("click");
    });

    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(mockCallback.mock.calls.map(call => call[0] as number)).toEqual(
      expected
    );
  });
});
