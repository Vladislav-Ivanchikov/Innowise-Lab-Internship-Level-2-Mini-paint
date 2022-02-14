import { combineReducers } from "redux";
import { drawReducer } from "./drawReducer";
import { toolsReducer } from "./toolsReducer";
import {canvasReducer} from "./canvasReducer";
import {dataReducer} from "./dataReducer";

export const rootReducer = combineReducers({
  draw: drawReducer,
  tool: toolsReducer,
  canvas: canvasReducer,
  data: dataReducer
});