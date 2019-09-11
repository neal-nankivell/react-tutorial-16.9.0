import { createStore } from "redux";
import rootReducer from "./reducers";
import { initalAppState } from "./state/AppState";

const store = createStore(rootReducer, initalAppState);

export default store;
