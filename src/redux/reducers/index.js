import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});

export default reducers;
