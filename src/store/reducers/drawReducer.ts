import { DrawActionType, DrawStateType, DrawTypes } from "../../types/draw";

const initialState: DrawStateType = {
  isDraw: false,
  strokeColor: "black",
  fillColor: "transparent",
  lineWidth: 1,
  saved: "",
};

export const drawReducer = (state = initialState, action: DrawActionType) => {
  switch (action.type) {
    case DrawTypes.START_DRAW:
      return { ...state, isDraw: action.payload };
    case DrawTypes.SET_STROKE_COLOR:
      return { ...state, strokeColor: action.payload };
    case DrawTypes.SET_FILL_COLOR:
      return { ...state, fillColor: action.payload };
    case DrawTypes.SET_LINE_WIDTH:
      return { ...state, lineWidth: action.payload };
    case DrawTypes.SET_SAVED:
      return { ...state, saved: action.payload };
    default:
      return state;
  }
};