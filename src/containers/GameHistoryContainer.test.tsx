import { mapStateToProps, mapDispatchToProps } from "./GameHistoryContainer";
import { initalAppState } from "../state/AppState";
import { jumpToTurn } from "../actions/gameActions";

describe("GameHistoryContainer Tests", () => {
  it("mapStateToProps uses game history", () => {
    const appState = initalAppState;
    expect(mapStateToProps(appState).history).toStrictEqual(
      initalAppState.game.history
    );
  });

  it("mapDispatchToProps maps onClick to dispatch jumpToTurn", () => {
    const dispatch = jest.fn();
    const testIndex = 6;
    mapDispatchToProps(dispatch).onClick(testIndex);
    expect(dispatch.mock.calls[0][0]).toEqual(jumpToTurn(testIndex));
  });
});
