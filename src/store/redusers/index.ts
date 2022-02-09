import { combineReducers } from "redux";
import { drawReduser } from "./drawReduser";
import { toolsReduser } from "./toolsReduser";
import {canvasReduser} from "./canvasReduser";
import {dataReduser} from "./dataReduser";

export const rootReduser = combineReducers({
  draw: drawReduser,
  tool: toolsReduser,
  canvas: canvasReduser,
  data: dataReduser
});