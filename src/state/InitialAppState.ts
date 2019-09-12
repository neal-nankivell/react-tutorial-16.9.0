import AppState from "./AppState";

const initalAppState: AppState = Object.freeze({
  game: {
    history: [
      {
        xIsNext: true,
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    winner: null
  }
});

export default initalAppState;
