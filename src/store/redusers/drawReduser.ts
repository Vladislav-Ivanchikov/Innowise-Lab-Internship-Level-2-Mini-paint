import { DrawActionType, DrawEnumTypes, DrawStateType } from "../../types/draw";

const initialState: DrawStateType = {
  isDraw: false,
};

export const drawReduser = (state = initialState, action: DrawActionType) => {
  switch (action.type) {
    case DrawEnumTypes.START_DRAW:
      return { ...state, isDraw: action.payload };
    default:
      return state;
  }
};