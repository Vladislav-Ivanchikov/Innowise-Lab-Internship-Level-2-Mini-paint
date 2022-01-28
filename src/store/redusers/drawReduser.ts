import { DrawActionType, DrawEnumTypes } from "../../types/draw";

const initialState = {
  isDraw: false,
};

export const drawReduser = (state = initialState, action: DrawActionType) => {
  switch (action.type) {
    case DrawEnumTypes.IS_DRAW:
      return { ...state, isDraw: action.payload };
    default:
      return state;
  }
};