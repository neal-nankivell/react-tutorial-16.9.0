import { connect } from "react-redux";
import { jumpToTurn } from "../actions/gameActions";
import { Dispatch, Action } from "redux";
import GameHistory from "../components/GameHistory";
import AppState from "../state/AppState";

const mapStateToProps = (state: AppState) => ({
  history: state.game.history
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  onClick: (index: number) => dispatch(jumpToTurn(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameHistory);
