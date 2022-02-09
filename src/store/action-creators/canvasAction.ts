import {CanvasTypes} from "../../types/canvas";
import {MutableRefObject, RefObject} from "react";

export const canvasAction = (canvas: RefObject<HTMLCanvasElement>) => {
  return { type: CanvasTypes.CANVAS, payload: canvas }
}

export const ctxAction = (ctx: MutableRefObject<CanvasRenderingContext2D | null>) => {
  return { type: CanvasTypes.CTX, payload: ctx }
}

