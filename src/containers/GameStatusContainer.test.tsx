import { mapStateToProps } from "./GameStatusContainer";
import { initalAppState } from "../state/AppState";

describe("GameStatusContainer Tests", () => {
  it("mapStateToProps uses game history", () => {
    const appState = initalAppState;
    const props = mapStateToProps(appState);
    expect(props.xIsNext).toStrictEqual(
      appState.game.history[appState.game.stepNumber].xIsNext
    );
    expect(props.winner).toEqual(appState.game.winner);
  });
});
