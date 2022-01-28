import { combineReducers } from "redux";
import { drawReduser } from "./drawReduser";

export const rootReduser = combineReducers({
  draw: drawReduser,
});