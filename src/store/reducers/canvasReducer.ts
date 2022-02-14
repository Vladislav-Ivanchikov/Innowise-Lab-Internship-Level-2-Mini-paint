import {
  CanvasActionTypes,
  CanvasStateType,
  CanvasTypes,
} from "../../types/canvas";

const initialState: CanvasStateType = {
  canvasRef: null,
  ctxRef: null,
  canvasPage: false,
};

export const canvasReducer = (
  state = initialState,
  action: CanvasActionTypes
) => {
  switch (action.type) {
    case CanvasTypes.CANVAS:
      return { ...state, canvasRef: action.payload };
    case CanvasTypes.CTX:
      return { ...state, ctxRef: action.payload };
    case CanvasTypes.CANVAS_PAGE:
      return { ...state, canvasPage: action.payload }
    default:
      return state;
  }
};
