import { DrawTypes } from "../../types/draw";

export const drawAction = (isDraw: boolean) => {
  return { type: DrawTypes.START_DRAW, payload: isDraw };
};

export const setColor = (color: string) => {
  return { type: DrawTypes.SET_COLOR, payload: color };
};

export const setLineWidth = (lineWidth: number) => {
  return { type: DrawTypes.SET_LINE_WIDTH, payload: lineWidth }
}

export const setSaved = (saved: string) => {
  return { type: DrawTypes.SET_SAVED, payload: saved }
}