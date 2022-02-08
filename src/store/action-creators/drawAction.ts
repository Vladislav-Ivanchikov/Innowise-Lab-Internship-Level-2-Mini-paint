import { DrawTypes } from "../../types/draw";

export const drawAction = (isDraw: boolean) => {
  return { type: DrawTypes.START_DRAW, payload: isDraw };
};

export const setStrokeColor = (strokeColor: string) => {
  return { type: DrawTypes.SET_STROKE_COLOR, payload: strokeColor };
};

export const setFillColor = (setFillColor: string) => {
  return { type: DrawTypes.SET_FILL_COLOR, payload: setFillColor };
};

export const setLineWidth = (lineWidth: number) => {
  return { type: DrawTypes.SET_LINE_WIDTH, payload: lineWidth }
}

export const setSaved = (saved: string) => {
  return { type: DrawTypes.SET_SAVED, payload: saved }
}