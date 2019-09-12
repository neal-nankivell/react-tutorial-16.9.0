import { createStore } from "redux";
import rootReducer from "./reducers";
import InitialAppState from "./state/InitialAppState";

const store = createStore(rootReducer, InitialAppState);

export default store;
