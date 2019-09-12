import { mapStateToProps, mapDispatchToProps } from "./BoardContainer";
import { makeMove } from "../actions/gameActions";
import InitialAppState from "../state/InitialAppState";

describe("BoardContainer Tests", () => {
  it("mapStateToProps uses squares from current history", () => {
    const appState = InitialAppState;
    expect(mapStateToProps(appState).squares).toStrictEqual(
      InitialAppState.game.history[0].squares
    );
  });

  it("mapDispatchToProps maps onClick to dispatch makeMove", () => {
    const dispatch = jest.fn();
    const testIndex = 6;
    mapDispatchToProps(dispatch).onClick(testIndex);
    expect(dispatch.mock.calls[0][0]).toEqual(makeMove(testIndex));
  });
});
