import { combineReducers } from "redux";
import { drawReduser } from "./drawReduser";
import { toolsReduser } from "./toolsReduser";

export const rootReduser = combineReducers({
  draw: drawReduser,
  tool: toolsReduser,
});