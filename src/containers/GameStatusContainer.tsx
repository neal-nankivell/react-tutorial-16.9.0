import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import AppState from "../state/AppState";
import GameStatus from "../components/GameStatus";

const mapStateToProps = (state: AppState) => ({
  status: state.game.winner
    ? `Player ${state.game.winner} Wins!`
    : `Next player: ${
        state.game.history[state.game.stepNumber].xIsNext ? "X" : "O"
      }`
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatus);
