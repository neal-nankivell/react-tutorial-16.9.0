import { mapStateToProps, mapDispatchToProps } from "./BoardContainer";
import { initalAppState } from "../state/AppState";
import { makeMove } from "../actions/gameActions";

describe("BoardContainer Tests", () => {
  it("mapStateToProps uses squares from current history", () => {
    const appState = initalAppState;
    expect(mapStateToProps(appState).squares).toStrictEqual(
      initalAppState.game.history[0].squares
    );
  });

  it("mapDispatchToProps maps onClick to dispatch makeMove", () => {
    const dispatch = jest.fn();
    const testIndex = 6;
    mapDispatchToProps(dispatch).onClick(testIndex);
    expect(dispatch.mock.calls[0][0]).toEqual(makeMove(testIndex));
  });
});
