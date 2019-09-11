import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import AppState from "../state/AppState";
import GameStatus from "../components/GameStatus";

export const mapStateToProps = (state: AppState) => ({
  xIsNext: state.game.history[state.game.stepNumber].xIsNext,
  winner: state.game.winner
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatus);
