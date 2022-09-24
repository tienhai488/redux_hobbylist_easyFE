import hobby from "./hobby";
import user from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  hobby,
  user,
});

export default rootReducer;
