import { MutableRefObject, RefObject } from "react";

export interface CanvasStateType {
  canvasRef: RefObject<HTMLCanvasElement> | null;
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null> | null;
}

export enum CanvasTypes {
  CANVAS = "CANVAS",
  CTX = "CTX",
}

export interface CanvasRefActionType {
  type: CanvasTypes.CANVAS;
  payload: HTMLCanvasElement;
}

export interface CtxRefActionType {
  type: CanvasTypes.CTX;
  payload: CanvasRenderingContext2D;
}

export type CanvasActionTypes = CanvasRefActionType | CtxRefActionType;
