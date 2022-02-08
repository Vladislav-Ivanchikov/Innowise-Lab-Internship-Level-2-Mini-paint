import { StorageReference } from "firebase/storage";
import { MutableRefObject, RefObject } from "react";

export interface FileType {
    name: string,
    size: number,
    type: string
}

export interface CanvasStateType {
  canvasRef: RefObject<HTMLCanvasElement> | null;
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null> | null;
  file: FileType | null;
  fileRef: StorageReference | null;
}

export enum CanvasTypes {
  CANVAS = "CANVAS",
  CTX = "CTX",
  FILE = "FILE",
  FILE_REF = "FILE_REF",
}

export interface CanvasRefActionType {
  type: CanvasTypes.CANVAS;
  payload: HTMLCanvasElement;
}

export interface CtxRefActionType {
  type: CanvasTypes.CTX;
  payload: CanvasRenderingContext2D;
}

export interface FileActionType {
  type: CanvasTypes.FILE;
  payload: object;
}

export interface FileRefActionType {
  type: CanvasTypes.FILE_REF;
  payload: StorageReference;
}

export type CanvasActionTypes =
  | CanvasRefActionType
  | CtxRefActionType
  | FileRefActionType
  | FileActionType;
