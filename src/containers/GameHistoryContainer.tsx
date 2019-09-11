import { connect } from "react-redux";
import { jumpToTurn } from "../actions/gameActions";
import { Dispatch, Action } from "redux";
import GameHistory from "../components/GameHistory";
import AppState from "../state/AppState";

export const mapStateToProps = (state: AppState) => ({
  history: state.game.history
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  onClick: (index: number) => dispatch(jumpToTurn(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameHistory);
