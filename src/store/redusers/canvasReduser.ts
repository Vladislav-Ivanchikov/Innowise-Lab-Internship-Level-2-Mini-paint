import {CanvasActionTypes, CanvasStateType, CanvasTypes,} from "../../types/canvas";

const initialState: CanvasStateType = {
  canvasRef: null,
  ctxRef: null,
  fileRef: null,
  file: null
};

export const canvasReduser = (
  state = initialState,
  action: CanvasActionTypes
) => {
  switch (action.type) {
    case CanvasTypes.CANVAS:
      return { ...state, canvasRef: action.payload };
    case CanvasTypes.CTX:
      return { ...state, ctxRef: action.payload };
    case CanvasTypes.FILE_REF:
      return {...state, fileRef: action.payload}
    case CanvasTypes.FILE:
      return {...state, fileRef: action.payload}
    default:
      return state;
  }
};
