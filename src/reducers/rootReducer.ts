import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./spaceReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  spacex: appReducer,
  user: userReducer,
});

export default rootReducer;
