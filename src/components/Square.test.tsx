import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Square from "./Square";

describe("Square Tests", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  const mockCallback = jest.fn().mockName("SquareOnClick");

  beforeAll(() => {
    wrapper = shallow(<Square value={"X"} onClick={mockCallback} />);
  });

  it("Has square class", () => {
    expect(wrapper.hasClass("square")).toBe(true);
  });

  it("Click event triggers onClick handler", () => {
    mockCallback.mockReset();
    wrapper.simulate("click");
    expect(mockCallback).toHaveBeenCalled();
  });
});
