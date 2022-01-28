import { DrawEnumTypes } from "../../types/draw";

export const drawAction = (isDraw: boolean) => {
  return { type: DrawEnumTypes.START_DRAW, payload: isDraw };
};

export const setContext = (ctx: CanvasRenderingContext2D | null) => {
  return { type: DrawEnumTypes.START_DRAW, payload: ctx };
};