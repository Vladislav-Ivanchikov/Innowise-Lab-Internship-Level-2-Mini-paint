import {
  ToolActionType,
  ToolEnumTypes,
  ToolStateType,
} from "../../types/tools";

const initialState: ToolStateType = {
  tool: ToolEnumTypes.BRUSH,
  startX: 0,
  startY: 0,
  width: 0,
  height: 0,
};

export const toolsReduser = (state = initialState, action: ToolActionType) => {
  switch (action.type) {
    case ToolEnumTypes.BRUSH:
      return { ...state, tool: ToolEnumTypes.BRUSH };
    case ToolEnumTypes.RECT:
      return {
        ...state,
        tool: ToolEnumTypes.RECT,
        startX: action.payload.x,
        startY: action.payload.y,
      };
    case ToolEnumTypes.CIRCLE:
      return { ...state, tool: ToolEnumTypes.CIRCLE };
    case ToolEnumTypes.LINE:
      return { ...state, tool: ToolEnumTypes.LINE };
    case ToolEnumTypes.SET_WIDTH_AND_HEIGHT:
      return { ...state, width: action.payload.w, height: action.payload.h };
    default:
      return state;
  }
};