import { ToolTypes } from "../../types/tools";

export const brushAction = () => {
  return { type: ToolTypes.BRUSH };
};

export const rectAction = (x?: number, y?: number) => {
  return { type: ToolTypes.RECT, payload: { x, y } };
};

export const circleAction = (x?: number, y?: number) => {
  return { type: ToolTypes.CIRCLE, payload: { x, y } };
}

export const lineAction = (x?: number, y?: number) => {
  return { type: ToolTypes.LINE, payload: { x, y } };
}

export const setWithAndHeight = (w: number, h: number) => {
  return { type: ToolTypes.SET_WIDTH_AND_HEIGHT, payload: { w, h } };
};
