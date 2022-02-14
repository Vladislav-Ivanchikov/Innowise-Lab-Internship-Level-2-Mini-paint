import { MutableRefObject, RefObject } from "react";

export interface CanvasStateType {
  canvasRef: RefObject<HTMLCanvasElement> | null;
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null> | null;
  canvasPage: boolean
}

export enum CanvasTypes {
  CANVAS = "CANVAS",
  CTX = "CTX",
  CANVAS_PAGE = "CANVAS_PAGE"
}

export interface CanvasRefActionType {
  type: CanvasTypes.CANVAS;
  payload: HTMLCanvasElement;
}

export interface CtxRefActionType {
  type: CanvasTypes.CTX;
  payload: CanvasRenderingContext2D;
}

export interface CanvasPageActionType {
  type: CanvasTypes.CANVAS_PAGE,
  payload: boolean
}

export type CanvasActionTypes = CanvasRefActionType | CtxRefActionType | CanvasPageActionType;
