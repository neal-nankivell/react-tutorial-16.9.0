import React from "react";
import store from "./Store";
import { Provider } from "react-redux";
import BoardContainer from "./containers/BoardContainer";
import GameHistoryContainer from "./containers/GameHistoryContainer";
import GameStatusContainer from "./containers/GameStatusContainer";

class Game extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="game">
          <div className="game-board">
            <BoardContainer />
          </div>
          <div className="game-info">
            <GameStatusContainer />
            <GameHistoryContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default Game;
