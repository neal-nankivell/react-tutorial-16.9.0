import { mapStateToProps, mapDispatchToProps } from "./GameHistoryContainer";
import { jumpToTurn } from "../actions/gameActions";
import InitialAppState from "../state/InitialAppState";

describe("GameHistoryContainer Tests", () => {
  it("mapStateToProps uses game history", () => {
    const appState = InitialAppState;
    expect(mapStateToProps(appState).history).toStrictEqual(
      InitialAppState.game.history
    );
  });

  it("mapDispatchToProps maps onClick to dispatch jumpToTurn", () => {
    const dispatch = jest.fn();
    const testIndex = 6;
    mapDispatchToProps(dispatch).onClick(testIndex);
    expect(dispatch.mock.calls[0][0]).toEqual(jumpToTurn(testIndex));
  });
});
