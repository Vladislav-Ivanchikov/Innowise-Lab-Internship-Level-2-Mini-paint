import { DrawEnumTypes } from "../../types/draw";

export const drawAction = (isDraw: boolean) => {
  return { type: DrawEnumTypes.IS_DRAW, payload: isDraw };
};