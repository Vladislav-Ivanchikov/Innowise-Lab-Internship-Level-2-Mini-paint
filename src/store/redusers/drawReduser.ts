import {DrawActionType, DrawTypes, DrawStateType} from "../../types/draw";

const initialState: DrawStateType = {
  isDraw: false,
  color: 'black',
  lineWidth: 1,
  saved: ''
};

export const drawReduser = (state = initialState, action: DrawActionType) => {
  switch (action.type) {
    case DrawTypes.START_DRAW:
      return { ...state, isDraw: action.payload };
    case DrawTypes.SET_COLOR:
      return { ...state, color: action.payload };
    case DrawTypes.SET_LINE_WIDTH:
      return { ...state, lineWidth: action.payload };
    case DrawTypes.SET_SAVED:
      return { ...state, saved: action.payload}
    default:
      return state;
  }
};