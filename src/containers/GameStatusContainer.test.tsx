import { mapStateToProps } from "./GameStatusContainer";
import InitialAppState from "../state/InitialAppState";

describe("GameStatusContainer Tests", () => {
  it("mapStateToProps uses game history", () => {
    const appState = InitialAppState;
    const props = mapStateToProps(appState);
    expect(props.xIsNext).toStrictEqual(
      appState.game.history[appState.game.stepNumber].xIsNext
    );
    expect(props.winner).toEqual(appState.game.winner);
  });
});
