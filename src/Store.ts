import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = Object.freeze({
  game: {
    history: [
      {
        xIsNext: true,
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0
  }
});

const store = createStore(rootReducer, initialState);

export default store;
