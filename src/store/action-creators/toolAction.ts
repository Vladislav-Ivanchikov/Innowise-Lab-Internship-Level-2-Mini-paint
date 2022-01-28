import { ToolEnumTypes } from "../../types/tools";

export const brushAction = () => {
  return { type: ToolEnumTypes.BRUSH };
};

export const rectAction = (x?: number, y?: number) => {
  return { type: ToolEnumTypes.RECT, payload: { x, y } };
};

export const setWithAndHeight = (w: number, h: number) => {
  return { type: ToolEnumTypes.SET_WIDTH_AND_HEIGHT, payload: { w, h } };
};
