import { MutableRefObject, RefObject } from "react";

export const brushDraw = (
  canvasRef: RefObject<HTMLCanvasElement>,
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
  oX: number,
  oY: number
) => {
  ctxRef!.current!.lineTo(oX, oY);
  ctxRef!.current!.stroke();
};