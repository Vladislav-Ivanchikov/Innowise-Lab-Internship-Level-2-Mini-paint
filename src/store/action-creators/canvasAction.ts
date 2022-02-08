import {CanvasTypes} from "../../types/canvas";
import {MutableRefObject, RefObject} from "react";
import {StorageReference} from "firebase/storage";

export const canvasAction = (canvas: RefObject<HTMLCanvasElement>) => {
  return { type: CanvasTypes.CANVAS, payload: canvas }
}

export const ctxAction = (ctx: MutableRefObject<CanvasRenderingContext2D | null>) => {
  return { type: CanvasTypes.CTX, payload: ctx }
}

export const fileAction = (file: object) => {
  return { type: CanvasTypes.FILE, payload: file }
}

export const fileRefAction = (fileRef: StorageReference) => {
  return { type: CanvasTypes.FILE_REF, payload: fileRef }
}
