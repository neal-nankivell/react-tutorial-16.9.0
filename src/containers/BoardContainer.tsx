import { connect } from "react-redux";
import Board from "../components/Board";
import { makeMove } from "../actions/gameActions";
import { Dispatch, Action } from "redux";
import AppState from "../state/AppState";

const mapStateToProps = (state: AppState) => ({
  squares: state.game.history[state.game.stepNumber].squares
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  onClick: (index: number) => dispatch(makeMove(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
