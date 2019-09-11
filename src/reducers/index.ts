import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import AppState from "../state/AppState";

export default combineReducers<AppState>({
  game: gameReducer
});
