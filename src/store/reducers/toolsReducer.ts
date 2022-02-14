import { ToolActionType, ToolStateType, ToolTypes } from "../../types/tools";

const initialState: ToolStateType = {
  tool: ToolTypes.BRUSH,
  startX: 0,
  startY: 0,
  width: 0,
  height: 0,
  image: ''
};

export const toolsReducer = (state = initialState, action: ToolActionType) => {
  switch (action.type) {
    case ToolTypes.BRUSH:
      return { ...state, tool: ToolTypes.BRUSH };
    case ToolTypes.RECT:
      return {
        ...state,
        tool: ToolTypes.RECT,
        startX: action.payload.x,
        startY: action.payload.y,
      };
    case ToolTypes.CIRCLE:
      return {
        ...state,
        tool: ToolTypes.CIRCLE,
        startX: action.payload.x,
        startY: action.payload.y,
      };
    case ToolTypes.LINE:
      return {
        ...state,
        tool: ToolTypes.LINE,
        startX: action.payload.x,
        startY: action.payload.y,
      };
    case ToolTypes.SET_WIDTH_AND_HEIGHT:
      return { ...state, width: action.payload.w, height: action.payload.h };
    case ToolTypes.SAVE_IMAGE_URL:
      return {...state, image: action.payload}
    default:
      return state;
  }
};
